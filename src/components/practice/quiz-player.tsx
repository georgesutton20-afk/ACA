"use client";

import { useEffect, useRef, useState, useTransition } from "react";
import Link from "next/link";
import { Flame, PartyPopper, RotateCcw, Timer } from "lucide-react";
import type { Question } from "@/types/domain";
import { cn, formatDuration } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input, Textarea } from "@/components/ui/input";
import { Markdown } from "@/components/ui/markdown";
import { Card, CardContent } from "@/components/ui/card";
import { recordAttempt } from "@/app/(app)/practice/actions";
import { useAuth } from "@/lib/auth-client";
import { FeedbackPanel } from "./feedback-panel";

type DifficultyVariant = "success" | "warning" | "destructive";

const difficultyVariant: Record<Question["difficulty"], DifficultyVariant> = {
  easy: "success",
  medium: "warning",
  hard: "destructive",
};

interface Graded {
  isCorrect: boolean;
  score: number;
  xpAwarded: number;
  selectedAnswerIds: Set<string>;
}

export function QuizPlayer({ questions }: { questions: Question[] }) {
  const { userId } = useAuth();
  const total = questions.length;
  const [index, setIndex] = useState(0);
  const [finished, setFinished] = useState(false);

  // per-question answering state
  const [selected, setSelected] = useState<Set<string>>(new Set());
  const [numeric, setNumeric] = useState("");
  const [written, setWritten] = useState("");
  const [revealed, setRevealed] = useState(false); // written: model answer shown
  const [graded, setGraded] = useState<Graded | null>(null);

  // running tallies
  const [combo, setCombo] = useState(1);
  const [correctCount, setCorrectCount] = useState(0);
  const [totalXp, setTotalXp] = useState(0);
  const [totalTimeMs, setTotalTimeMs] = useState(0);

  const [isPending, startTransition] = useTransition();

  // timer
  const startRef = useRef<number>(Date.now());
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    if (finished) return;
    startRef.current = Date.now();
    setElapsed(0);
    const id = setInterval(() => {
      setElapsed(Date.now() - startRef.current);
    }, 250);
    return () => clearInterval(id);
  }, [index, finished]);

  if (total === 0) return null;

  const question = questions[index];
  const answers = (question.answers ?? [])
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder);
  const isLast = index === total - 1;

  // ── input validity (Check button enable) ──────────────────────────────
  function canCheck(): boolean {
    if (graded) return false;
    switch (question.type) {
      case "mcq":
      case "scenario":
      case "multi":
        return selected.size > 0;
      case "calc":
        return numeric.trim() !== "" && !Number.isNaN(parseFloat(numeric));
      case "written":
        return revealed; // can only mark once model answer revealed
      default:
        return false;
    }
  }

  // ── grading ────────────────────────────────────────────────────────────
  function grade(selfMark?: boolean): { isCorrect: boolean; score: number } {
    switch (question.type) {
      case "mcq":
      case "scenario": {
        const picked = answers.find((a) => selected.has(a.id));
        const ok = !!picked?.isCorrect;
        return { isCorrect: ok, score: ok ? 1 : 0 };
      }
      case "multi": {
        const correctIds = new Set(answers.filter((a) => a.isCorrect).map((a) => a.id));
        const totalCorrect = correctIds.size || 1;
        let correctSelected = 0;
        let wrongSelected = 0;
        selected.forEach((id) => {
          if (correctIds.has(id)) correctSelected++;
          else wrongSelected++;
        });
        const score = Math.min(
          1,
          Math.max(0, (correctSelected - wrongSelected) / totalCorrect),
        );
        const exact =
          selected.size === correctIds.size &&
          [...selected].every((id) => correctIds.has(id));
        return { isCorrect: exact, score: exact ? 1 : score };
      }
      case "calc": {
        const resp = parseFloat(numeric);
        const tol = question.numericTolerance ?? 0;
        const ok =
          question.numericAnswer !== undefined &&
          Math.abs(resp - question.numericAnswer) <= tol;
        return { isCorrect: ok, score: ok ? 1 : 0 };
      }
      case "written": {
        const ok = !!selfMark;
        return { isCorrect: ok, score: ok ? 1 : 0 };
      }
      default:
        return { isCorrect: false, score: 0 };
    }
  }

  function handleCheck(selfMark?: boolean) {
    if (graded || !userId) return;
    const timeMs = Date.now() - startRef.current;
    const { isCorrect, score } = grade(selfMark);
    const nextCombo = isCorrect ? combo + 1 : 1;

    startTransition(async () => {
      const result = await recordAttempt({
        userId,
        questionId: question.id,
        topicId: question.topicId,
        difficulty: question.difficulty,
        isCorrect,
        score,
        timeMs,
        combo: nextCombo,
        selectedAnswerIds:
          selected.size > 0 ? [...selected] : undefined,
        numericResponse:
          question.type === "calc" ? parseFloat(numeric) : undefined,
      });

      setGraded({
        isCorrect,
        score,
        xpAwarded: result.xpAwarded,
        selectedAnswerIds: new Set(selected),
      });
      setCombo(nextCombo);
      if (isCorrect) setCorrectCount((c) => c + 1);
      setTotalXp((x) => x + result.xpAwarded);
      setTotalTimeMs((t) => t + timeMs);
    });
  }

  function handleNext() {
    if (isLast) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelected(new Set());
    setNumeric("");
    setWritten("");
    setRevealed(false);
    setGraded(null);
  }

  function handleReset() {
    setIndex(0);
    setSelected(new Set());
    setNumeric("");
    setWritten("");
    setRevealed(false);
    setGraded(null);
    setCombo(1);
    setCorrectCount(0);
    setTotalXp(0);
    setTotalTimeMs(0);
    setFinished(false);
  }

  function toggleSingle(id: string) {
    if (graded) return;
    setSelected(new Set([id]));
  }

  function toggleMulti(id: string) {
    if (graded) return;
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  // ── summary ──────────────────────────────────────────────────────────
  if (finished) {
    const accuracy = total > 0 ? Math.round((correctCount / total) * 100) : 0;
    const perfect = correctCount === total;
    return (
      <Card className="mx-auto max-w-xl text-center">
        <CardContent className="space-y-6 p-8">
          {perfect ? (
            <PartyPopper className="mx-auto size-12 text-success" />
          ) : (
            <Timer className="mx-auto size-12 text-primary" />
          )}
          <div>
            <h2 className="text-2xl font-bold">
              {perfect ? "Flawless! 🎉" : "Session complete"}
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {perfect
                ? "You aced every question. Outstanding work."
                : "Nice work — keep the streak going."}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Stat label="Score" value={`${correctCount}/${total}`} />
            <Stat label="Accuracy" value={`${accuracy}%`} />
            <Stat label="XP earned" value={`+${totalXp}`} />
            <Stat label="Time" value={formatDuration(totalTimeMs)} />
          </div>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button onClick={handleReset} variant="default">
              <RotateCcw className="size-4" />
              Practise again
            </Button>
            <Button asChild variant="outline">
              <Link href="/dashboard">Back to dashboard</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  // ── question view ──────────────────────────────────────────────────────
  return (
    <div className="mx-auto max-w-2xl space-y-4">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            Question {index + 1} / {total}
          </span>
          <div className="flex items-center gap-2">
            {combo > 1 && (
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
                <Flame className="size-3" />
                combo ×{combo}
              </span>
            )}
            <span className="inline-flex items-center gap-1 text-sm tabular-nums text-muted-foreground">
              <Timer className="size-4" />
              {formatDuration(elapsed)}
            </span>
            <Badge variant={difficultyVariant[question.difficulty]}>
              {question.difficulty}
            </Badge>
          </div>
        </div>
        <Progress value={((index + (graded ? 1 : 0)) / total) * 100} />
      </div>

      {/* Scenario */}
      {question.scenario && (
        <Card className="bg-muted/40">
          <CardContent className="p-4">
            <Markdown className="text-sm">{question.scenario}</Markdown>
          </CardContent>
        </Card>
      )}

      {/* Stem */}
      <div className="text-base font-medium">
        <Markdown>{question.stem}</Markdown>
      </div>

      {/* Answer UI */}
      {(question.type === "mcq" || question.type === "scenario") && (
        <div className="space-y-2">
          {answers.map((a) => (
            <OptionButton
              key={a.id}
              label={a.label}
              selected={selected.has(a.id)}
              disabled={!!graded}
              onClick={() => toggleSingle(a.id)}
            />
          ))}
        </div>
      )}

      {question.type === "multi" && (
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Select all that apply.</p>
          {answers.map((a) => (
            <OptionButton
              key={a.id}
              label={a.label}
              selected={selected.has(a.id)}
              disabled={!!graded}
              multi
              onClick={() => toggleMulti(a.id)}
            />
          ))}
        </div>
      )}

      {question.type === "calc" && (
        <div className="flex items-center gap-2">
          <Input
            type="number"
            inputMode="decimal"
            placeholder="Your answer"
            value={numeric}
            disabled={!!graded}
            onChange={(e) => setNumeric(e.target.value)}
            className="max-w-xs"
          />
          {question.unit && (
            <span className="text-sm text-muted-foreground">{question.unit}</span>
          )}
        </div>
      )}

      {question.type === "written" && (
        <div className="space-y-3">
          <Textarea
            rows={5}
            placeholder="Draft your answer…"
            value={written}
            disabled={!!graded}
            onChange={(e) => setWritten(e.target.value)}
          />
          {!revealed && !graded && (
            <Button variant="outline" onClick={() => setRevealed(true)}>
              Reveal model answer
            </Button>
          )}
          {revealed && !graded && (
            <div className="space-y-3 rounded-lg border bg-card p-4">
              <h4 className="text-sm font-semibold">Model answer</h4>
              <Markdown className="text-sm">
                {question.workedSolution ?? question.explanation ?? "No model answer available."}
              </Markdown>
              <div className="flex gap-2">
                <p className="self-center text-sm text-muted-foreground">
                  How did you do?
                </p>
                <Button
                  size="sm"
                  variant="success"
                  disabled={isPending}
                  onClick={() => handleCheck(true)}
                >
                  I got it right
                </Button>
                <Button
                  size="sm"
                  variant="destructive"
                  disabled={isPending}
                  onClick={() => handleCheck(false)}
                >
                  I got it wrong
                </Button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Check / Next */}
      {question.type !== "written" && !graded && (
        <Button
          className="w-full"
          size="lg"
          disabled={!canCheck() || isPending}
          onClick={() => handleCheck()}
        >
          {isPending ? "Checking…" : "Check"}
        </Button>
      )}

      {/* Feedback */}
      {graded && (
        <>
          <FeedbackPanel
            question={question}
            isCorrect={graded.isCorrect}
            selectedAnswerIds={graded.selectedAnswerIds}
            xpAwarded={graded.xpAwarded}
          />
          <Button className="w-full" size="lg" onClick={handleNext}>
            {isLast ? "Finish" : "Next"}
          </Button>
        </>
      )}
    </div>
  );
}

function OptionButton({
  label,
  selected,
  disabled,
  multi,
  onClick,
}: {
  label: string;
  selected: boolean;
  disabled?: boolean;
  multi?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl border p-4 text-left text-sm transition-all hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-default disabled:hover:border-border",
        selected ? "border-primary bg-primary/10 font-medium" : "border-border bg-card",
      )}
    >
      <span
        className={cn(
          "flex size-5 shrink-0 items-center justify-center border",
          multi ? "rounded-md" : "rounded-full",
          selected ? "border-primary bg-primary text-primary-foreground" : "border-input",
        )}
      >
        {selected && <span className="size-2 rounded-sm bg-current" />}
      </span>
      <span>{label}</span>
    </button>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border bg-card p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="mt-0.5 text-lg font-bold tabular-nums">{value}</div>
    </div>
  );
}

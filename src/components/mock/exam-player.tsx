"use client";

import { useCallback, useEffect, useRef, useState, useTransition } from "react";
import {
  AlertTriangle,
  ChevronLeft,
  ChevronRight,
  Clock,
  FileText,
  ListChecks,
  Loader2,
} from "lucide-react";
import type { Exam, Question } from "@/types/domain";
import { cn, formatDuration } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Input, Textarea } from "@/components/ui/input";
import { Markdown } from "@/components/ui/markdown";
import { Card, CardContent } from "@/components/ui/card";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { submitExam } from "@/app/(app)/mock/actions";
import { useAuth } from "@/lib/auth-client";
import { ExamResults, type ExamResultAnswer } from "./exam-results";

type Phase = "intro" | "exam" | "results";

interface AnswerState {
  selected: Set<string>;
  numeric: string;
  written: string;
}

interface ResultsData {
  scorePercent: number;
  passed: boolean;
  durationMs: number;
  answers: Record<string, ExamResultAnswer>;
}

function emptyAnswer(): AnswerState {
  return { selected: new Set(), numeric: "", written: "" };
}

function isAnswered(a: AnswerState | undefined, type: Question["type"]): boolean {
  if (!a) return false;
  switch (type) {
    case "mcq":
    case "scenario":
    case "multi":
      return a.selected.size > 0;
    case "calc":
      return a.numeric.trim() !== "";
    case "written":
      return a.written.trim() !== "";
    default:
      return false;
  }
}

export function ExamPlayer({ exam, questions }: { exam: Exam; questions: Question[] }) {
  const { userId } = useAuth();
  const total = questions.length;
  const durationMs = exam.durationMinutes * 60 * 1000;

  const [phase, setPhase] = useState<Phase>("intro");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, AnswerState>>({});
  const [results, setResults] = useState<ResultsData | null>(null);
  const [remaining, setRemaining] = useState(durationMs);
  const [isPending, startTransition] = useTransition();

  const startRef = useRef<number>(0);
  const submittedRef = useRef(false);

  // ── grading (local) ────────────────────────────────────────────────────
  const buildResults = useCallback((): ResultsData => {
    const elapsed = Date.now() - startRef.current;
    const usedMs = Math.min(elapsed, durationMs);
    const perQuestion: Record<string, ExamResultAnswer> = {};
    let scoreSum = 0;

    for (const q of questions) {
      const a = answers[q.id] ?? emptyAnswer();
      const opts = q.answers ?? [];
      let isCorrect = false;
      let score = 0;
      let needsReview = false;

      switch (q.type) {
        case "mcq":
        case "scenario": {
          const picked = opts.find((o) => a.selected.has(o.id));
          isCorrect = !!picked?.isCorrect;
          score = isCorrect ? 1 : 0;
          break;
        }
        case "multi": {
          const correctIds = new Set(
            opts.filter((o) => o.isCorrect).map((o) => o.id),
          );
          const totalCorrect = correctIds.size || 1;
          let correctSelected = 0;
          let wrongSelected = 0;
          a.selected.forEach((id) => {
            if (correctIds.has(id)) correctSelected++;
            else wrongSelected++;
          });
          const exact =
            a.selected.size === correctIds.size &&
            [...a.selected].every((id) => correctIds.has(id));
          if (exact) {
            isCorrect = true;
            score = 1;
          } else {
            isCorrect = false;
            score = Math.min(
              1,
              Math.max(0, (correctSelected - wrongSelected) / totalCorrect),
            );
          }
          break;
        }
        case "calc": {
          const resp = parseFloat(a.numeric);
          const tol = q.numericTolerance ?? 0;
          isCorrect =
            !Number.isNaN(resp) &&
            q.numericAnswer !== undefined &&
            Math.abs(resp - q.numericAnswer) <= tol;
          score = isCorrect ? 1 : 0;
          break;
        }
        case "written": {
          // Cannot auto-grade — flag for review, count as 0 for the %.
          isCorrect = false;
          score = 0;
          needsReview = true;
          break;
        }
      }

      scoreSum += score;
      perQuestion[q.id] = {
        questionId: q.id,
        isCorrect,
        score,
        needsReview,
        selectedAnswerIds:
          a.selected.size > 0 ? [...a.selected] : undefined,
        numericResponse:
          q.type === "calc" && a.numeric.trim() !== ""
            ? parseFloat(a.numeric)
            : undefined,
        writtenResponse: q.type === "written" ? a.written : undefined,
      };
    }

    const scorePercent = total > 0 ? (scoreSum / total) * 100 : 0;
    const passed = scorePercent >= exam.passMark;
    return { scorePercent, passed, durationMs: usedMs, answers: perQuestion };
  }, [answers, durationMs, exam.passMark, questions, total]);

  const handleSubmit = useCallback(() => {
    if (submittedRef.current) return;
    submittedRef.current = true;

    const built = buildResults();
    const answerInputs = questions.map((q) => {
      const r = built.answers[q.id];
      const a = answers[q.id] ?? emptyAnswer();
      return {
        questionId: q.id,
        topicId: q.topicId,
        difficulty: q.difficulty,
        isCorrect: r.isCorrect,
        score: r.score,
        timeMs: 0,
        selectedAnswerIds:
          a.selected.size > 0 ? [...a.selected] : undefined,
        numericResponse:
          q.type === "calc" && a.numeric.trim() !== ""
            ? parseFloat(a.numeric)
            : undefined,
      };
    });

    setResults(built);
    setPhase("results");

    startTransition(async () => {
      if (!userId) return;
      try {
        await submitExam({
          userId,
          examId: exam.id,
          durationMs: built.durationMs,
          answers: answerInputs,
        });
      } catch {
        // Results are already shown locally; persistence failure is non-fatal.
      }
    });
  }, [answers, buildResults, exam.id, questions, userId]);

  // ── countdown timer (wall-clock based) ──────────────────────────────────
  useEffect(() => {
    if (phase !== "exam") return;
    const tick = () => {
      const left = durationMs - (Date.now() - startRef.current);
      if (left <= 0) {
        setRemaining(0);
        handleSubmit();
        return;
      }
      setRemaining(left);
    };
    tick();
    const id = setInterval(tick, 500);
    return () => clearInterval(id);
  }, [phase, durationMs, handleSubmit]);

  function begin() {
    startRef.current = Date.now();
    submittedRef.current = false;
    setRemaining(durationMs);
    setPhase("exam");
  }

  function handleRetake() {
    submittedRef.current = false;
    setAnswers({});
    setIndex(0);
    setResults(null);
    setRemaining(durationMs);
    setPhase("intro");
  }

  function updateAnswer(id: string, fn: (prev: AnswerState) => AnswerState) {
    setAnswers((prev) => {
      const current = prev[id] ?? emptyAnswer();
      return { ...prev, [id]: fn(current) };
    });
  }

  // ── intro ────────────────────────────────────────────────────────────
  if (phase === "intro") {
    return (
      <Card className="mx-auto max-w-xl">
        <CardContent className="space-y-6 p-8 text-center">
          <Badge variant={exam.kind === "full" ? "default" : "secondary"}>
            {exam.kind === "full" ? "Full mock" : "Topic test"}
          </Badge>
          <div>
            <h1 className="text-2xl font-bold tracking-tight">{exam.title}</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Read each question carefully. You can navigate between questions
              freely.
            </p>
          </div>
          <dl className="grid grid-cols-3 gap-3 text-sm">
            <IntroStat
              icon={<Clock className="size-4" />}
              label="Duration"
              value={`${exam.durationMinutes} min`}
            />
            <IntroStat
              icon={<ListChecks className="size-4" />}
              label="Questions"
              value={`${total}`}
            />
            <IntroStat
              icon={<FileText className="size-4" />}
              label="Pass mark"
              value={`${exam.passMark}%`}
            />
          </dl>
          <div className="flex items-start gap-2 rounded-lg bg-warning/10 p-3 text-left text-sm text-warning-foreground dark:text-warning">
            <AlertTriangle className="mt-0.5 size-4 shrink-0" />
            <p>
              This exam is timed. The timer starts as soon as you begin and the
              paper auto-submits when time runs out.
            </p>
          </div>
          <Button
            size="lg"
            className="w-full"
            onClick={begin}
            disabled={total === 0}
          >
            {total === 0 ? "No questions available" : "Begin exam"}
          </Button>
        </CardContent>
      </Card>
    );
  }

  // ── results ────────────────────────────────────────────────────────────
  if (phase === "results" && results) {
    return (
      <div className="space-y-4">
        {isPending && (
          <p className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <Loader2 className="size-3.5 animate-spin" />
            Saving your attempt…
          </p>
        )}
        <ExamResults
          scorePercent={results.scorePercent}
          passed={results.passed}
          passMark={exam.passMark}
          durationMs={results.durationMs}
          questions={questions}
          answers={results.answers}
          onRetake={handleRetake}
        />
      </div>
    );
  }

  // ── exam ────────────────────────────────────────────────────────────
  const question = questions[index];
  const current = answers[question.id] ?? emptyAnswer();
  const opts = (question.answers ?? [])
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder);
  const answeredCount = questions.filter((q) =>
    isAnswered(answers[q.id], q.type),
  ).length;
  const unansweredCount = total - answeredCount;
  const lowTime = remaining <= 60_000;

  return (
    <div className="space-y-4 pb-4">
      {/* Sticky header */}
      <div className="sticky top-0 z-10 -mx-4 border-b bg-background/95 px-4 py-3 backdrop-blur sm:mx-0 sm:rounded-xl sm:border">
        <div className="flex items-center justify-between gap-3">
          <span className="text-sm font-medium text-muted-foreground">
            Q {index + 1}/{total}
          </span>
          <span
            className={cn(
              "inline-flex items-center gap-1.5 text-base font-semibold tabular-nums",
              lowTime ? "text-destructive" : "text-foreground",
            )}
            role="timer"
            aria-live={lowTime ? "assertive" : "off"}
          >
            <Clock className="size-4" />
            {formatDuration(remaining)}
          </span>
        </div>
        <Progress className="mt-2" value={((index + 1) / total) * 100} />
      </div>

      {/* Question palette */}
      <div className="flex flex-wrap gap-1.5" role="navigation" aria-label="Question palette">
        {questions.map((q, i) => {
          const done = isAnswered(answers[q.id], q.type);
          const isCurrent = i === index;
          return (
            <button
              key={q.id}
              type="button"
              onClick={() => setIndex(i)}
              aria-current={isCurrent ? "true" : undefined}
              aria-label={`Question ${i + 1}${done ? ", answered" : ", not answered"}`}
              className={cn(
                "inline-flex size-8 items-center justify-center rounded-md border text-xs font-medium tabular-nums transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                isCurrent
                  ? "border-primary bg-primary text-primary-foreground"
                  : done
                    ? "border-primary/40 bg-primary/10 text-primary"
                    : "border-border bg-card text-muted-foreground hover:border-primary/50",
              )}
            >
              {i + 1}
            </button>
          );
        })}
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
          {opts.map((o) => (
            <OptionButton
              key={o.id}
              label={o.label}
              selected={current.selected.has(o.id)}
              onClick={() =>
                updateAnswer(question.id, (prev) => ({
                  ...prev,
                  selected: new Set([o.id]),
                }))
              }
            />
          ))}
        </div>
      )}

      {question.type === "multi" && (
        <div className="space-y-2">
          <p className="text-xs text-muted-foreground">Select all that apply.</p>
          {opts.map((o) => (
            <OptionButton
              key={o.id}
              label={o.label}
              selected={current.selected.has(o.id)}
              multi
              onClick={() =>
                updateAnswer(question.id, (prev) => {
                  const next = new Set(prev.selected);
                  if (next.has(o.id)) next.delete(o.id);
                  else next.add(o.id);
                  return { ...prev, selected: next };
                })
              }
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
            value={current.numeric}
            onChange={(e) =>
              updateAnswer(question.id, (prev) => ({
                ...prev,
                numeric: e.target.value,
              }))
            }
            className="max-w-xs"
            aria-label="Numeric answer"
          />
          {question.unit && (
            <span className="text-sm text-muted-foreground">{question.unit}</span>
          )}
        </div>
      )}

      {question.type === "written" && (
        <Textarea
          rows={6}
          placeholder="Write your answer…"
          value={current.written}
          onChange={(e) =>
            updateAnswer(question.id, (prev) => ({
              ...prev,
              written: e.target.value,
            }))
          }
          aria-label="Written answer"
        />
      )}

      {/* Navigation */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <Button
          variant="outline"
          onClick={() => setIndex((i) => Math.max(0, i - 1))}
          disabled={index === 0}
        >
          <ChevronLeft className="size-4" />
          Prev
        </Button>

        {index < total - 1 ? (
          <Button onClick={() => setIndex((i) => Math.min(total - 1, i + 1))}>
            Next
            <ChevronRight className="size-4" />
          </Button>
        ) : (
          <SubmitDialog
            unansweredCount={unansweredCount}
            onConfirm={handleSubmit}
          />
        )}
      </div>

      {/* Always-available submit */}
      {index < total - 1 && (
        <div className="flex justify-end">
          <SubmitDialog
            unansweredCount={unansweredCount}
            onConfirm={handleSubmit}
            variant="ghost"
          />
        </div>
      )}
    </div>
  );
}

function SubmitDialog({
  unansweredCount,
  onConfirm,
  variant = "default",
}: {
  unansweredCount: number;
  onConfirm: () => void;
  variant?: "default" | "ghost";
}) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={variant}>Submit exam</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Submit your exam?</DialogTitle>
          <DialogDescription>
            {unansweredCount > 0
              ? `You have ${unansweredCount} unanswered ${
                  unansweredCount === 1 ? "question" : "questions"
                }. Unanswered questions score zero.`
              : "You've answered every question. You won't be able to change your answers after submitting."}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end gap-2">
          <DialogClose asChild>
            <Button variant="outline">Keep working</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button onClick={onConfirm}>Submit</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function OptionButton({
  label,
  selected,
  multi,
  onClick,
}: {
  label: string;
  selected: boolean;
  multi?: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={cn(
        "flex w-full items-center gap-3 rounded-xl border p-4 text-left text-sm transition-all hover:border-primary/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        selected
          ? "border-primary bg-primary/10 font-medium"
          : "border-border bg-card",
      )}
    >
      <span
        className={cn(
          "flex size-5 shrink-0 items-center justify-center border",
          multi ? "rounded-md" : "rounded-full",
          selected
            ? "border-primary bg-primary text-primary-foreground"
            : "border-input",
        )}
      >
        {selected && <span className="size-2 rounded-sm bg-current" />}
      </span>
      <span>{label}</span>
    </button>
  );
}

function IntroStat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-lg border bg-card p-3">
      <div className="flex items-center justify-center gap-1 text-muted-foreground">
        {icon}
      </div>
      <div className="mt-1 text-lg font-bold tabular-nums">{value}</div>
      <div className="text-xs text-muted-foreground">{label}</div>
    </div>
  );
}

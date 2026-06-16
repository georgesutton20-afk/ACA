"use client";

import { useState } from "react";
import Link from "next/link";
import {
  AlertTriangle,
  Check,
  ChevronDown,
  RotateCcw,
  X,
} from "lucide-react";
import type { Question } from "@/types/domain";
import { cn, formatDuration } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Markdown } from "@/components/ui/markdown";

export interface ExamResultAnswer {
  questionId: string;
  isCorrect: boolean;
  score: number; // 0..1
  needsReview: boolean;
  selectedAnswerIds?: string[];
  numericResponse?: number;
  writtenResponse?: string;
}

export function ExamResults({
  scorePercent,
  passed,
  passMark,
  durationMs,
  questions,
  answers,
  onRetake,
}: {
  scorePercent: number;
  passed: boolean;
  passMark: number;
  durationMs: number;
  questions: Question[];
  answers: Record<string, ExamResultAnswer>;
  onRetake: () => void;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  // Mistake analysis: count wrong questions by topicId.
  const missedByTopic = new Map<string, number>();
  for (const q of questions) {
    const a = answers[q.id];
    if (a && !a.isCorrect) {
      missedByTopic.set(q.topicId, (missedByTopic.get(q.topicId) ?? 0) + 1);
    }
  }
  const missedTopics = [...missedByTopic.entries()].sort((x, y) => y[1] - x[1]);
  const needsReviewCount = questions.filter(
    (q) => answers[q.id]?.needsReview,
  ).length;

  return (
    <div className="space-y-6">
      {/* Score banner */}
      <Card
        className={cn(
          "border-2",
          passed ? "border-success/40" : "border-destructive/40",
        )}
      >
        <CardContent className="flex flex-col items-center gap-3 p-8 text-center">
          <div
            className={cn(
              "text-5xl font-bold tabular-nums",
              passed ? "text-success" : "text-destructive",
            )}
          >
            {Math.round(scorePercent)}%
          </div>
          <Badge
            variant={passed ? "success" : "destructive"}
            className="text-sm"
          >
            {passed ? "PASS" : "FAIL"}
          </Badge>
          <p className="text-sm text-muted-foreground">
            Pass mark {passMark}% · Time used {formatDuration(durationMs)}
          </p>
          {needsReviewCount > 0 && (
            <p className="flex items-center gap-1.5 text-xs text-warning-foreground dark:text-warning">
              <AlertTriangle className="size-3.5" />
              {needsReviewCount} written{" "}
              {needsReviewCount === 1 ? "answer" : "answers"} need manual review
              (scored 0).
            </p>
          )}
        </CardContent>
      </Card>

      {/* Mistake analysis */}
      {missedTopics.length > 0 && (
        <Card>
          <CardContent className="space-y-2 p-5">
            <h3 className="text-sm font-semibold">Mistake analysis</h3>
            <ul className="space-y-1 text-sm text-muted-foreground">
              {missedTopics.map(([topicId, count]) => (
                <li key={topicId} className="flex items-center gap-2">
                  <X className="size-3.5 text-destructive" />
                  You missed {count}{" "}
                  {count === 1 ? "question" : "questions"} in topic{" "}
                  <span className="font-medium text-foreground">{topicId}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      )}

      {/* Per-question review */}
      <div>
        <h3 className="mb-3 text-sm font-semibold">Question review</h3>
        <div className="mb-4 flex flex-wrap gap-2">
          {questions.map((q, i) => {
            const a = answers[q.id];
            const ok = a?.isCorrect;
            const isOpen = expanded === q.id;
            return (
              <button
                key={q.id}
                type="button"
                onClick={() => setExpanded(isOpen ? null : q.id)}
                aria-pressed={isOpen}
                aria-label={`Question ${i + 1}, ${ok ? "correct" : "incorrect"}`}
                className={cn(
                  "inline-flex size-9 items-center justify-center rounded-lg border text-xs font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  ok
                    ? "border-success/40 bg-success/10 text-success"
                    : "border-destructive/40 bg-destructive/10 text-destructive",
                  isOpen && "ring-2 ring-ring",
                )}
              >
                {ok ? <Check className="size-4" /> : <X className="size-4" />}
              </button>
            );
          })}
        </div>

        <div className="space-y-3">
          {questions.map((q, i) => {
            if (expanded !== q.id) return null;
            const a = answers[q.id];
            return (
              <ReviewCard
                key={q.id}
                index={i}
                question={q}
                answer={a}
                onClose={() => setExpanded(null)}
              />
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button onClick={onRetake}>
          <RotateCcw className="size-4" />
          Retake
        </Button>
        <Button asChild variant="outline">
          <Link href="/dashboard">Back to dashboard</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/analytics">View analytics</Link>
        </Button>
      </div>
    </div>
  );
}

function ReviewCard({
  index,
  question,
  answer,
  onClose,
}: {
  index: number;
  question: Question;
  answer?: ExamResultAnswer;
  onClose: () => void;
}) {
  const sorted = (question.answers ?? [])
    .slice()
    .sort((a, b) => a.sortOrder - b.sortOrder);
  const selected = new Set(answer?.selectedAnswerIds ?? []);

  return (
    <Card>
      <CardContent className="space-y-4 p-5">
        <div className="flex items-start justify-between gap-3">
          <span className="text-sm font-semibold">Question {index + 1}</span>
          <button
            type="button"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Collapse"
          >
            <ChevronDown className="size-4 rotate-180" />
          </button>
        </div>

        {question.scenario && (
          <div className="rounded-lg bg-muted/40 p-3">
            <Markdown className="text-sm">{question.scenario}</Markdown>
          </div>
        )}

        <div className="text-sm font-medium">
          <Markdown>{question.stem}</Markdown>
        </div>

        {/* Choice questions */}
        {(question.type === "mcq" ||
          question.type === "scenario" ||
          question.type === "multi") &&
          sorted.length > 0 && (
            <ul className="space-y-1.5 text-sm">
              {sorted.map((o) => {
                const picked = selected.has(o.id);
                return (
                  <li
                    key={o.id}
                    className={cn(
                      "flex items-center gap-2 rounded-md border px-3 py-2",
                      o.isCorrect && "border-success/40 bg-success/10",
                      picked && !o.isCorrect && "border-destructive/40 bg-destructive/10",
                    )}
                  >
                    {o.isCorrect ? (
                      <Check className="size-3.5 shrink-0 text-success" />
                    ) : picked ? (
                      <X className="size-3.5 shrink-0 text-destructive" />
                    ) : (
                      <span className="size-3.5 shrink-0" />
                    )}
                    <span>{o.label}</span>
                    {picked && (
                      <span className="ml-auto text-xs text-muted-foreground">
                        your answer
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          )}

        {/* Calc */}
        {question.type === "calc" && (
          <div className="space-y-1 text-sm">
            <p>
              <span className="text-muted-foreground">Your answer: </span>
              {answer?.numericResponse !== undefined
                ? `${answer.numericResponse}${question.unit ? ` ${question.unit}` : ""}`
                : "—"}
            </p>
            <p>
              <span className="text-muted-foreground">Correct answer: </span>
              {question.numericAnswer !== undefined
                ? `${question.numericAnswer}${question.unit ? ` ${question.unit}` : ""}`
                : "—"}
            </p>
          </div>
        )}

        {/* Written */}
        {question.type === "written" && (
          <div className="space-y-2 text-sm">
            <div>
              <p className="text-xs text-muted-foreground">Your answer</p>
              <p className="whitespace-pre-wrap">
                {answer?.writtenResponse?.trim()
                  ? answer.writtenResponse
                  : "(no answer)"}
              </p>
            </div>
            {answer?.needsReview && (
              <Badge variant="warning">Needs manual review</Badge>
            )}
          </div>
        )}

        {question.explanation && (
          <div className="rounded-lg border bg-card p-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Explanation
            </p>
            <Markdown className="text-sm">{question.explanation}</Markdown>
          </div>
        )}

        {question.workedSolution && (
          <div className="rounded-lg border bg-card p-3">
            <p className="mb-1 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Worked solution
            </p>
            <Markdown className="text-sm">{question.workedSolution}</Markdown>
          </div>
        )}
      </CardContent>
    </Card>
  );
}

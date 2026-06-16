"use client";

import { useState } from "react";
import { CheckCircle2, ChevronDown, Sparkles, XCircle } from "lucide-react";
import type { Question } from "@/types/domain";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Markdown } from "@/components/ui/markdown";

export function FeedbackPanel({
  question,
  isCorrect,
  selectedAnswerIds,
  xpAwarded,
}: {
  question: Question;
  isCorrect: boolean;
  selectedAnswerIds: Set<string>;
  xpAwarded: number;
}) {
  const [showSolution, setShowSolution] = useState(false);
  const answers = question.answers ?? [];
  const hasChoices = answers.length > 0;

  return (
    <div className="mt-6 space-y-4">
      {/* Banner */}
      <div
        className={cn(
          "flex items-center justify-between gap-3 rounded-xl border p-4",
          isCorrect
            ? "border-success/30 bg-success/10 text-success"
            : "border-destructive/30 bg-destructive/10 text-destructive",
        )}
      >
        <div className="flex items-center gap-2">
          {isCorrect ? (
            <CheckCircle2 className="size-6" />
          ) : (
            <XCircle className="size-6" />
          )}
          <span className="text-base font-semibold">
            {isCorrect ? "Correct!" : "Not quite"}
          </span>
        </div>
        {xpAwarded > 0 && (
          <span className="inline-flex items-center gap-1 text-sm font-semibold">
            <Sparkles className="size-4" />+{xpAwarded} XP
          </span>
        )}
      </div>

      {/* Per-choice feedback */}
      {hasChoices && (
        <div className="space-y-2">
          {answers
            .slice()
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((a) => {
              const selected = selectedAnswerIds.has(a.id);
              const wrongPick = selected && !a.isCorrect;
              return (
                <div
                  key={a.id}
                  className={cn(
                    "rounded-lg border p-3 text-sm",
                    a.isCorrect && "border-success/40 bg-success/10",
                    wrongPick && "border-destructive/40 bg-destructive/10",
                    !a.isCorrect && !wrongPick && "border-border text-muted-foreground",
                  )}
                >
                  <div className="flex items-start gap-2">
                    {a.isCorrect ? (
                      <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-success" />
                    ) : wrongPick ? (
                      <XCircle className="mt-0.5 size-4 shrink-0 text-destructive" />
                    ) : (
                      <span className="mt-0.5 size-4 shrink-0" />
                    )}
                    <div className="space-y-1">
                      <span className="font-medium text-foreground">{a.label}</span>
                      {a.feedback && (
                        <p className="text-xs text-muted-foreground">{a.feedback}</p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      )}

      {/* Explanation */}
      {question.explanation && (
        <div className="rounded-lg border bg-card p-4">
          <h4 className="mb-1 text-sm font-semibold">Explanation</h4>
          <Markdown className="text-sm">{question.explanation}</Markdown>
        </div>
      )}

      {/* Worked solution (collapsible) */}
      {question.workedSolution && (
        <div className="rounded-lg border bg-card">
          <button
            type="button"
            onClick={() => setShowSolution((s) => !s)}
            className="flex w-full items-center justify-between p-4 text-sm font-semibold"
          >
            Worked solution
            <ChevronDown
              className={cn("size-4 transition-transform", showSolution && "rotate-180")}
            />
          </button>
          {showSolution && (
            <div className="border-t p-4">
              <Markdown className="text-sm">{question.workedSolution}</Markdown>
            </div>
          )}
        </div>
      )}

      {/* Related concepts */}
      {question.relatedConcepts && question.relatedConcepts.length > 0 && (
        <div className="flex flex-wrap items-center gap-2">
          <span className="text-xs text-muted-foreground">Related:</span>
          {question.relatedConcepts.map((c) => (
            <Badge key={c} variant="secondary">
              {c}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
}

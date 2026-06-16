"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { Plus, Trash2, Loader2 } from "lucide-react";
import {
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { saveQuestion } from "@/app/(app)/admin/actions";
import type {
  Answer,
  Difficulty,
  Question,
  QuestionType,
} from "@/types/domain";

const TYPE_OPTIONS: { value: QuestionType; label: string }[] = [
  { value: "mcq", label: "Multiple choice" },
  { value: "multi", label: "Multi-select" },
  { value: "calc", label: "Calculation" },
  { value: "scenario", label: "Scenario" },
  { value: "written", label: "Written" },
];

const DIFFICULTY_OPTIONS: { value: Difficulty; label: string }[] = [
  { value: "easy", label: "Easy" },
  { value: "medium", label: "Medium" },
  { value: "hard", label: "Hard" },
];

const CHOICE_TYPES: QuestionType[] = ["mcq", "multi", "scenario"];

type ChoiceDraft = {
  id: string;
  label: string;
  isCorrect: boolean;
  feedback: string;
};

let draftCounter = 0;
function newChoice(): ChoiceDraft {
  draftCounter += 1;
  return { id: `draft-${Date.now()}-${draftCounter}`, label: "", isCorrect: false, feedback: "" };
}

export function QuestionForm({
  question,
  topics,
  onClose,
}: {
  question?: Question;
  topics: { id: string; label: string }[];
  onClose: () => void;
}) {
  const router = useRouter();
  const [pending, startTransition] = React.useTransition();
  const [error, setError] = React.useState<string | null>(null);

  const [topicId, setTopicId] = React.useState(question?.topicId ?? "");
  const [type, setType] = React.useState<QuestionType>(question?.type ?? "mcq");
  const [difficulty, setDifficulty] = React.useState<Difficulty>(
    question?.difficulty ?? "medium",
  );
  const [isPublished, setIsPublished] = React.useState(question?.isPublished ?? false);
  const [estSeconds, setEstSeconds] = React.useState(String(question?.estSeconds ?? 60));
  const [stem, setStem] = React.useState(question?.stem ?? "");
  const [scenario, setScenario] = React.useState(question?.scenario ?? "");
  const [explanation, setExplanation] = React.useState(question?.explanation ?? "");
  const [workedSolution, setWorkedSolution] = React.useState(question?.workedSolution ?? "");
  const [relatedConcepts, setRelatedConcepts] = React.useState(
    (question?.relatedConcepts ?? []).join(", "),
  );
  const [numericAnswer, setNumericAnswer] = React.useState(
    question?.numericAnswer !== undefined ? String(question.numericAnswer) : "",
  );
  const [numericTolerance, setNumericTolerance] = React.useState(
    question?.numericTolerance !== undefined ? String(question.numericTolerance) : "",
  );
  const [unit, setUnit] = React.useState(question?.unit ?? "");

  const [choices, setChoices] = React.useState<ChoiceDraft[]>(() => {
    const existing = question?.answers ?? [];
    if (existing.length > 0) {
      return existing.map((a) => ({
        id: a.id,
        label: a.label,
        isCorrect: a.isCorrect,
        feedback: a.feedback ?? "",
      }));
    }
    return [newChoice(), newChoice()];
  });

  const isChoiceType = CHOICE_TYPES.includes(type);
  const isCalc = type === "calc";
  const singleCorrect = type === "mcq" || type === "scenario";

  function updateChoice(id: string, patch: Partial<ChoiceDraft>) {
    setChoices((prev) =>
      prev.map((c) => {
        if (c.id !== id) {
          // For single-correct types, unset others when one becomes correct.
          if (singleCorrect && patch.isCorrect === true) return { ...c, isCorrect: false };
          return c;
        }
        return { ...c, ...patch };
      }),
    );
  }

  function addChoice() {
    setChoices((prev) => [...prev, newChoice()]);
  }

  function removeChoice(id: string) {
    setChoices((prev) => (prev.length <= 1 ? prev : prev.filter((c) => c.id !== id)));
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setError(null);

    if (!topicId) return setError("Please choose a topic.");
    if (!stem.trim()) return setError("A question stem is required.");

    let answers: Answer[] | undefined;
    if (isChoiceType) {
      const filled = choices.filter((c) => c.label.trim());
      if (filled.length < 2) return setError("Provide at least two answer choices.");
      if (!filled.some((c) => c.isCorrect)) {
        return setError("Mark at least one choice as correct.");
      }
      answers = filled.map((c, index) => ({
        id: c.id.startsWith("draft-") ? "" : c.id,
        questionId: question?.id ?? "",
        label: c.label.trim(),
        isCorrect: c.isCorrect,
        feedback: c.feedback.trim() || undefined,
        sortOrder: index,
      }));
    }

    const parsedNumeric = numericAnswer.trim() ? Number(numericAnswer) : undefined;
    const parsedTolerance = numericTolerance.trim() ? Number(numericTolerance) : undefined;
    if (isCalc && (parsedNumeric === undefined || Number.isNaN(parsedNumeric))) {
      return setError("A numeric answer is required for calculation questions.");
    }

    const concepts = relatedConcepts
      .split(",")
      .map((c) => c.trim())
      .filter(Boolean);

    const payload: Question = {
      id: question?.id ?? "",
      topicId,
      type,
      difficulty,
      rating: question?.rating ?? 1200,
      stem: stem.trim(),
      scenario: scenario.trim() || undefined,
      explanation: explanation.trim() || undefined,
      workedSolution: workedSolution.trim() || undefined,
      relatedConcepts: concepts.length > 0 ? concepts : undefined,
      numericAnswer: isCalc ? parsedNumeric : undefined,
      numericTolerance: isCalc ? parsedTolerance : undefined,
      unit: isCalc ? unit.trim() || undefined : undefined,
      estSeconds: Number(estSeconds) || 60,
      isPublished,
      answers,
    };

    startTransition(async () => {
      try {
        await saveQuestion(payload);
        onClose();
        router.refresh();
      } catch {
        setError("Something went wrong while saving. Please try again.");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex max-h-[80vh] flex-col">
      <DialogHeader>
        <DialogTitle>{question ? "Edit question" : "New question"}</DialogTitle>
        <DialogDescription>
          {question
            ? "Update the question, then save to publish your changes."
            : "Author a new question for the bank."}
        </DialogDescription>
      </DialogHeader>

      <div className="-mx-1 mt-4 flex-1 space-y-5 overflow-y-auto px-1 pb-1">
        {/* Meta row */}
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="qf-topic">Topic</Label>
            <Select value={topicId} onValueChange={setTopicId}>
              <SelectTrigger id="qf-topic" aria-label="Topic">
                <SelectValue placeholder="Select a topic" />
              </SelectTrigger>
              <SelectContent>
                {topics.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="qf-type">Type</Label>
            <Select value={type} onValueChange={(v) => setType(v as QuestionType)}>
              <SelectTrigger id="qf-type" aria-label="Type">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {TYPE_OPTIONS.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="qf-difficulty">Difficulty</Label>
            <Select value={difficulty} onValueChange={(v) => setDifficulty(v as Difficulty)}>
              <SelectTrigger id="qf-difficulty" aria-label="Difficulty">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {DIFFICULTY_OPTIONS.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="qf-est">Est. seconds</Label>
            <Input
              id="qf-est"
              type="number"
              min={5}
              value={estSeconds}
              onChange={(e) => setEstSeconds(e.target.value)}
            />
          </div>
        </div>

        <div className="flex items-center justify-between rounded-lg border p-3">
          <div>
            <Label htmlFor="qf-published">Published</Label>
            <p className="text-xs text-muted-foreground">
              Visible to learners in practice and exams.
            </p>
          </div>
          <Switch
            id="qf-published"
            checked={isPublished}
            onCheckedChange={setIsPublished}
            aria-label="Published"
          />
        </div>

        {/* Body */}
        <div className="space-y-1.5">
          <Label htmlFor="qf-stem">Stem</Label>
          <Textarea
            id="qf-stem"
            value={stem}
            onChange={(e) => setStem(e.target.value)}
            placeholder="The question prompt (markdown supported)…"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="qf-scenario">Scenario (optional)</Label>
          <Textarea
            id="qf-scenario"
            value={scenario}
            onChange={(e) => setScenario(e.target.value)}
            placeholder="Background or case context…"
          />
        </div>

        {/* Calc fields */}
        {isCalc && (
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="space-y-1.5">
              <Label htmlFor="qf-numeric">Numeric answer</Label>
              <Input
                id="qf-numeric"
                type="number"
                step="any"
                value={numericAnswer}
                onChange={(e) => setNumericAnswer(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="qf-tolerance">Tolerance</Label>
              <Input
                id="qf-tolerance"
                type="number"
                step="any"
                value={numericTolerance}
                onChange={(e) => setNumericTolerance(e.target.value)}
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="qf-unit">Unit</Label>
              <Input
                id="qf-unit"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
                placeholder="e.g. £, %"
              />
            </div>
          </div>
        )}

        {/* Answer choices */}
        {isChoiceType && (
          <div className="space-y-3">
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <Label>Answer choices</Label>
                <p className="text-xs text-muted-foreground">
                  {singleCorrect
                    ? "Mark exactly one choice as correct."
                    : "Mark every correct choice."}
                </p>
              </div>
              <Button type="button" variant="outline" size="sm" onClick={addChoice}>
                <Plus className="size-4" />
                Add
              </Button>
            </div>

            <div className="space-y-3">
              {choices.map((choice, index) => (
                <div key={choice.id} className="rounded-lg border p-3">
                  <div className="flex items-start gap-3">
                    <div className="flex-1 space-y-2">
                      <Input
                        aria-label={`Choice ${index + 1} label`}
                        value={choice.label}
                        onChange={(e) => updateChoice(choice.id, { label: e.target.value })}
                        placeholder={`Choice ${index + 1}`}
                      />
                      <Input
                        aria-label={`Choice ${index + 1} feedback`}
                        value={choice.feedback}
                        onChange={(e) => updateChoice(choice.id, { feedback: e.target.value })}
                        placeholder="Feedback (optional)"
                      />
                    </div>
                    <div className="flex flex-col items-center gap-2 pt-1">
                      <label className="flex flex-col items-center gap-1 text-[10px] font-medium text-muted-foreground">
                        Correct
                        <Switch
                          checked={choice.isCorrect}
                          onCheckedChange={(v) => updateChoice(choice.id, { isCorrect: v })}
                          aria-label={`Choice ${index + 1} is correct`}
                        />
                      </label>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        className="size-8 text-muted-foreground hover:text-destructive"
                        onClick={() => removeChoice(choice.id)}
                        disabled={choices.length <= 1}
                        aria-label={`Remove choice ${index + 1}`}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <Separator />

        <div className="space-y-1.5">
          <Label htmlFor="qf-explanation">Explanation</Label>
          <Textarea
            id="qf-explanation"
            value={explanation}
            onChange={(e) => setExplanation(e.target.value)}
            placeholder="Why the answer is correct…"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="qf-worked">Worked solution</Label>
          <Textarea
            id="qf-worked"
            value={workedSolution}
            onChange={(e) => setWorkedSolution(e.target.value)}
            placeholder="Step-by-step working…"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="qf-concepts">Related concepts</Label>
          <Input
            id="qf-concepts"
            value={relatedConcepts}
            onChange={(e) => setRelatedConcepts(e.target.value)}
            placeholder="Comma-separated, e.g. accruals, matching"
          />
        </div>
      </div>

      {error && (
        <p className={cn("mt-3 text-sm text-destructive")} role="alert">
          {error}
        </p>
      )}

      <div className="mt-4 flex justify-end gap-2 border-t pt-4">
        <Button type="button" variant="outline" onClick={onClose} disabled={pending}>
          Cancel
        </Button>
        <Button type="submit" disabled={pending}>
          {pending && <Loader2 className="size-4 animate-spin" />}
          {question ? "Save changes" : "Create question"}
        </Button>
      </div>
    </form>
  );
}

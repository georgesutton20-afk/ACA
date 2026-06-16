"use client";

import * as React from "react";
import { Plus, Pencil, Trash2, Search, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { QuestionForm } from "@/components/admin/question-form";
import { removeQuestion } from "@/app/(app)/admin/actions";
import { cn } from "@/lib/utils";
import type { BadgeProps } from "@/components/ui/badge";
import type { Difficulty, Question, QuestionType } from "@/types/domain";

const TYPE_LABELS: Record<QuestionType, string> = {
  mcq: "MCQ",
  multi: "Multi",
  calc: "Calc",
  scenario: "Scenario",
  written: "Written",
};

const DIFFICULTY_VARIANT: Record<Difficulty, BadgeProps["variant"]> = {
  easy: "success",
  medium: "warning",
  hard: "destructive",
};

export function QuestionTable({
  questions,
  topics,
}: {
  questions: Question[];
  topics: { id: string; label: string }[];
}) {
  const [query, setQuery] = React.useState("");
  const [typeFilter, setTypeFilter] = React.useState<QuestionType | "all">("all");
  const [editing, setEditing] = React.useState<Question | null>(null);
  const [creating, setCreating] = React.useState(false);
  const [deleteTarget, setDeleteTarget] = React.useState<Question | null>(null);
  const [pending, startTransition] = React.useTransition();

  const topicMap = React.useMemo(
    () => new Map(topics.map((t) => [t.id, t.label])),
    [topics],
  );

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    return questions.filter((item) => {
      if (typeFilter !== "all" && item.type !== typeFilter) return false;
      if (q && !item.stem.toLowerCase().includes(q)) return false;
      return true;
    });
  }, [questions, query, typeFilter]);

  function confirmDelete() {
    if (!deleteTarget) return;
    const id = deleteTarget.id;
    startTransition(async () => {
      await removeQuestion(id);
      setDeleteTarget(null);
    });
  }

  return (
    <Card className="overflow-hidden">
      {/* Toolbar */}
      <div className="flex flex-col gap-3 border-b p-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-1 flex-col gap-3 sm:flex-row sm:items-center">
          <div className="relative flex-1 sm:max-w-xs">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by stem…"
              className="pl-9"
              aria-label="Search questions"
            />
          </div>
          <Select
            value={typeFilter}
            onValueChange={(v) => setTypeFilter(v as QuestionType | "all")}
          >
            <SelectTrigger className="sm:w-44" aria-label="Filter by type">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All types</SelectItem>
              {(Object.keys(TYPE_LABELS) as QuestionType[]).map((t) => (
                <SelectItem key={t} value={t}>
                  {TYPE_LABELS[t]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <Button onClick={() => setCreating(true)}>
          <Plus className="size-4" />
          New question
        </Button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b text-left text-xs uppercase tracking-wide text-muted-foreground">
              <th className="px-4 py-2.5 font-medium">Question</th>
              <th className="hidden px-4 py-2.5 font-medium md:table-cell">Topic</th>
              <th className="px-4 py-2.5 font-medium">Type</th>
              <th className="hidden px-4 py-2.5 font-medium sm:table-cell">Difficulty</th>
              <th className="px-4 py-2.5 font-medium">Status</th>
              <th className="px-4 py-2.5 text-right font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={6} className="px-4 py-12 text-center text-muted-foreground">
                  No questions match your filters.
                </td>
              </tr>
            ) : (
              filtered.map((item) => (
                <tr key={item.id} className="border-b last:border-0 hover:bg-muted/40">
                  <td className="max-w-xs px-4 py-3">
                    <p className="truncate font-medium" title={item.stem}>
                      {item.stem}
                    </p>
                  </td>
                  <td className="hidden px-4 py-3 text-muted-foreground md:table-cell">
                    <span className="line-clamp-1">
                      {topicMap.get(item.topicId) ?? item.topicId}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <Badge variant="secondary">{TYPE_LABELS[item.type]}</Badge>
                  </td>
                  <td className="hidden px-4 py-3 sm:table-cell">
                    <Badge variant={DIFFICULTY_VARIANT[item.difficulty]} className="capitalize">
                      {item.difficulty}
                    </Badge>
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={cn(
                        "inline-flex items-center gap-1.5 text-xs font-medium",
                        item.isPublished ? "text-success" : "text-muted-foreground",
                      )}
                    >
                      <span
                        className={cn(
                          "size-1.5 rounded-full",
                          item.isPublished ? "bg-success" : "bg-muted-foreground",
                        )}
                      />
                      {item.isPublished ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8"
                        onClick={() => setEditing(item)}
                        aria-label={`Edit question: ${item.stem}`}
                      >
                        <Pencil className="size-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="size-8 text-muted-foreground hover:text-destructive"
                        onClick={() => setDeleteTarget(item)}
                        aria-label={`Delete question: ${item.stem}`}
                      >
                        <Trash2 className="size-4" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Create / Edit dialog */}
      <Dialog
        open={creating || editing !== null}
        onOpenChange={(open) => {
          if (!open) {
            setCreating(false);
            setEditing(null);
          }
        }}
      >
        <DialogContent className="max-w-2xl">
          {(creating || editing) && (
            <QuestionForm
              question={editing ?? undefined}
              topics={topics}
              onClose={() => {
                setCreating(false);
                setEditing(null);
              }}
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Delete confirm dialog */}
      <Dialog
        open={deleteTarget !== null}
        onOpenChange={(open) => {
          if (!open) setDeleteTarget(null);
        }}
      >
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>Delete question?</DialogTitle>
            <DialogDescription>
              This permanently removes the question from the bank. This action cannot be
              undone.
            </DialogDescription>
          </DialogHeader>
          {deleteTarget && (
            <p className="rounded-lg border bg-muted/40 p-3 text-sm text-muted-foreground">
              {deleteTarget.stem}
            </p>
          )}
          <div className="mt-2 flex justify-end gap-2">
            <Button variant="outline" onClick={() => setDeleteTarget(null)} disabled={pending}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={confirmDelete} disabled={pending}>
              {pending && <Loader2 className="size-4 animate-spin" />}
              Delete
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

"use client";
import { useSearchParams } from "next/navigation";
import { BookOpen } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { QuizPlayer } from "@/components/practice/quiz-player";
import { TopicPicker, type TopicOption } from "@/components/practice/topic-picker";
import type { Question } from "@/types/domain";

export interface PracticeClientProps {
  userId: string;
  recommended: Question[];
  questionsByTopic: Record<string, Question[]>;
  topicMeta: Record<string, { title: string; summary?: string }>;
  topicOptions: TopicOption[];
}

/**
 * Reads the `?topic=` query on the client (so the page can be statically
 * exported) and selects the right question set from the data baked at build.
 */
export function PracticeClient({
  userId,
  recommended,
  questionsByTopic,
  topicMeta,
  topicOptions,
}: PracticeClientProps) {
  const topicId = useSearchParams().get("topic") ?? undefined;
  const questions = topicId ? (questionsByTopic[topicId] ?? []) : recommended;
  const meta = topicId ? topicMeta[topicId] : undefined;

  const title = topicId ? `Practising: ${meta?.title ?? "Topic"}` : "Adaptive practice";
  const description = topicId
    ? (meta?.summary ?? "Work through questions for this topic.")
    : "Questions picked for your weak spots.";

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title={title} description={description} />

      {!topicId && topicOptions.length > 0 && <TopicPicker topics={topicOptions} />}

      {questions.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <BookOpen className="size-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              No questions available here yet. Try picking a different topic.
            </p>
          </CardContent>
        </Card>
      ) : (
        <QuizPlayer key={topicId ?? "adaptive"} questions={questions} userId={userId} />
      )}
    </div>
  );
}

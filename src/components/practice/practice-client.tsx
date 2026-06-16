"use client";
import { useSearchParams } from "next/navigation";
import { BookOpen } from "lucide-react";
import { data } from "@/lib/data";
import { useAuth, useAsync } from "@/lib/auth-client";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { PageLoading } from "@/components/ui/page-loading";
import { QuizPlayer } from "@/components/practice/quiz-player";
import { TopicPicker, type TopicOption } from "@/components/practice/topic-picker";
import type { Question } from "@/types/domain";

export interface PracticeClientProps {
  questionsByTopic: Record<string, Question[]>;
  topicMeta: Record<string, { title: string; summary?: string }>;
  topicOptions: TopicOption[];
}

/**
 * Reads `?topic=` on the client (static export). Topic banks are bundled
 * content; the adaptive set is per-user and fetched from the data provider.
 */
export function PracticeClient({ questionsByTopic, topicMeta, topicOptions }: PracticeClientProps) {
  const { userId } = useAuth();
  const topicId = useSearchParams().get("topic") ?? undefined;

  const { data: recommended, loading } = useAsync(
    () => data.getRecommended(userId!, undefined, 10),
    [userId],
    !!userId && !topicId,
  );

  const meta = topicId ? topicMeta[topicId] : undefined;
  const title = topicId ? `Practising: ${meta?.title ?? "Topic"}` : "Adaptive practice";
  const description = topicId
    ? (meta?.summary ?? "Work through questions for this topic.")
    : "Questions picked for your weak spots.";

  const questions = topicId ? (questionsByTopic[topicId] ?? []) : (recommended ?? []);

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title={title} description={description} />

      {!topicId && topicOptions.length > 0 && <TopicPicker topics={topicOptions} />}

      {!topicId && loading ? (
        <PageLoading />
      ) : questions.length === 0 ? (
        <Card>
          <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
            <BookOpen className="size-10 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">
              No questions available here yet. Try picking a different topic.
            </p>
          </CardContent>
        </Card>
      ) : (
        <QuizPlayer key={topicId ?? "adaptive"} questions={questions} />
      )}
    </div>
  );
}

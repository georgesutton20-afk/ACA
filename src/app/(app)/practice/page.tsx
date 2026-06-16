import { BookOpen } from "lucide-react";
import { data } from "@/lib/data";
import { getCurrentUserId } from "@/lib/auth";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";
import { QuizPlayer } from "@/components/practice/quiz-player";
import { TopicPicker, type TopicOption } from "@/components/practice/topic-picker";

export const metadata = { title: "Practice" };

export default async function PracticePage({
  searchParams,
}: {
  searchParams: Promise<{ topic?: string }>;
}) {
  const sp = await searchParams;
  const topicId = sp.topic;
  const userId = await getCurrentUserId();

  const [questions, topic] = topicId
    ? await Promise.all([
        data.getQuestionsForTopic(topicId),
        data.getTopic(topicId),
      ])
    : [await data.getRecommended(userId, undefined, 10), undefined];

  // Build the flat topic list for the picker (only needed on the adaptive view).
  let topicOptions: TopicOption[] = [];
  if (!topicId) {
    const tree = await data.getCourseTree(userId);
    topicOptions = tree.flatMap((c) =>
      c.modules.flatMap((m) =>
        m.topics.map((t) => ({ id: t.id, title: t.title, moduleTitle: m.title })),
      ),
    );
  }

  const title = topicId
    ? `Practising: ${topic?.title ?? "Topic"}`
    : "Adaptive practice";
  const description = topicId
    ? topic?.summary ?? "Work through questions for this topic."
    : "Questions picked for your weak spots.";

  return (
    <div className="mx-auto max-w-3xl">
      <PageHeader title={title} description={description} />

      {!topicId && topicOptions.length > 0 && (
        <TopicPicker topics={topicOptions} />
      )}

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

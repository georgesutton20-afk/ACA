import { Suspense } from "react";
import { data } from "@/lib/data";
import { getCurrentUserId } from "@/lib/auth";
import { PracticeClient } from "@/components/practice/practice-client";
import type { TopicOption } from "@/components/practice/topic-picker";
import type { Question } from "@/types/domain";

export const metadata = { title: "Practice" };

export default async function PracticePage() {
  const userId = await getCurrentUserId();

  // Bake everything the client needs at build time (static export, no server).
  const [recommended, tree] = await Promise.all([
    data.getRecommended(userId, undefined, 10),
    data.getCourseTree(userId),
  ]);

  const topicOptions: TopicOption[] = [];
  const topicMeta: Record<string, { title: string; summary?: string }> = {};
  const allTopicIds: string[] = [];
  for (const c of tree) {
    for (const m of c.modules) {
      for (const t of m.topics) {
        topicOptions.push({ id: t.id, title: t.title, moduleTitle: m.title });
        topicMeta[t.id] = { title: t.title, summary: t.summary };
        allTopicIds.push(t.id);
      }
    }
  }

  const perTopic = await Promise.all(allTopicIds.map((id) => data.getQuestionsForTopic(id)));
  const questionsByTopic: Record<string, Question[]> = {};
  allTopicIds.forEach((id, i) => {
    questionsByTopic[id] = perTopic[i];
  });

  return (
    <Suspense>
      <PracticeClient
        userId={userId}
        recommended={recommended}
        questionsByTopic={questionsByTopic}
        topicMeta={topicMeta}
        topicOptions={topicOptions}
      />
    </Suspense>
  );
}

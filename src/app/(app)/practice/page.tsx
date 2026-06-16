import { Suspense } from "react";
import { data } from "@/lib/data";
import { courses, modules, topics } from "@/data/curriculum";
import { PracticeClient } from "@/components/practice/practice-client";
import type { TopicOption } from "@/components/practice/topic-picker";
import type { Question } from "@/types/domain";

export const metadata = { title: "Practice" };

export default async function PracticePage() {
  // All content is bundled, so this resolves at build time with no session.
  // The adaptive (per-user) set is fetched client-side inside PracticeClient.
  const topicOptions: TopicOption[] = [];
  const topicMeta: Record<string, { title: string; summary?: string }> = {};
  const questionsByTopic: Record<string, Question[]> = {};

  for (const c of [...courses].sort((a, b) => a.sortOrder - b.sortOrder)) {
    for (const m of modules
      .filter((mm) => mm.courseId === c.id)
      .sort((a, b) => a.sortOrder - b.sortOrder)) {
      for (const t of topics
        .filter((tt) => tt.moduleId === m.id)
        .sort((a, b) => a.sortOrder - b.sortOrder)) {
        topicOptions.push({ id: t.id, title: t.title, moduleTitle: m.title });
        topicMeta[t.id] = { title: t.title, summary: t.summary };
        questionsByTopic[t.id] = await data.getQuestionsForTopic(t.id);
      }
    }
  }

  return (
    <Suspense>
      <PracticeClient
        questionsByTopic={questionsByTopic}
        topicMeta={topicMeta}
        topicOptions={topicOptions}
      />
    </Suspense>
  );
}

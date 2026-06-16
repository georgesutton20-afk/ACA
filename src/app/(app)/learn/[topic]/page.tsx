import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { data } from "@/lib/data";
import { topics } from "@/data/curriculum";
import { TopicDetail } from "@/components/learn/topic-detail";

interface PageProps {
  params: Promise<{ topic: string }>;
}

// Pre-render every topic page for the static export.
export function generateStaticParams() {
  return topics.map((t) => ({ topic: t.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic: topicId } = await params;
  const topic = await data.getTopic(topicId);
  return { title: topic ? topic.title : "Topic" };
}

export default async function TopicPage({ params }: PageProps) {
  const { topic: topicId } = await params;
  // Content is bundled, so this resolves at build time with no user/session.
  const topic = await data.getTopic(topicId);
  if (!topic) notFound();
  const questions = await data.getQuestionsForTopic(topicId);

  return <TopicDetail topic={topic} questionCount={questions.length} />;
}

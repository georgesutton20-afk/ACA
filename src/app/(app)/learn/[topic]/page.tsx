import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Target } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Markdown } from "@/components/ui/markdown";
import { data } from "@/lib/data";
import { getCurrentUserId } from "@/lib/auth";

interface PageProps {
  params: Promise<{ topic: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { topic: topicId } = await params;
  const topic = await data.getTopic(topicId);
  return { title: topic ? topic.title : "Topic" };
}

export default async function TopicPage({ params }: PageProps) {
  const { topic: topicId } = await params;
  const topic = await data.getTopic(topicId);
  if (!topic) notFound();

  const userId = await getCurrentUserId();
  const [questions, tree] = await Promise.all([
    data.getQuestionsForTopic(topicId),
    data.getCourseTree(userId),
  ]);

  // Find this topic's progress within the tree.
  let progress: { mastery: number; attemptsCount: number; correctCount: number } | undefined;
  for (const ct of tree) {
    for (const m of ct.modules) {
      const found = m.topics.find((t) => t.id === topicId);
      if (found?.progress) {
        progress = found.progress;
        break;
      }
    }
    if (progress) break;
  }

  const mastery = Math.round((progress?.mastery ?? 0) * 100);
  const questionCount = questions.length;

  return (
    <div>
      <Link
        href="/learn"
        className="mb-4 inline-flex items-center gap-1.5 rounded-md text-sm text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <ArrowLeft className="size-4" aria-hidden />
        Back to map
      </Link>

      <PageHeader title={topic.title} description={topic.summary ? undefined : "Learning topic"}>
        <Button asChild size="lg">
          <Link href={`/practice?topic=${topicId}`}>
            Practise this topic ({questionCount} {questionCount === 1 ? "question" : "questions"})
          </Link>
        </Button>
      </PageHeader>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          {topic.summary && (
            <Card className="animate-[rise_0.4s]">
              <CardHeader>
                <CardTitle>Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Markdown>{topic.summary}</Markdown>
              </CardContent>
            </Card>
          )}

          {topic.subtopics && topic.subtopics.length > 0 && (
            <Card className="animate-[rise_0.4s]">
              <CardHeader>
                <CardTitle>What you&apos;ll cover</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {topic.subtopics.map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}

          {topic.objectives && topic.objectives.length > 0 && (
            <Card className="animate-[rise_0.4s]">
              <CardHeader>
                <CardTitle>Learning objectives</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {topic.objectives.map((o) => (
                    <li key={o.id} className="flex items-start gap-3 text-sm">
                      <Target className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden />
                      <span>
                        {o.code && (
                          <span className="mr-2 font-mono text-xs font-semibold text-muted-foreground">
                            {o.code}
                          </span>
                        )}
                        {o.description}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>

        <div className="space-y-6">
          <Card className="animate-[rise_0.4s]">
            <CardHeader>
              <CardTitle>Your progress</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">Mastery</span>
                  <span className="font-semibold">{mastery}%</span>
                </div>
                <Progress
                  value={mastery}
                  indicatorClassName={mastery >= 80 ? "bg-success" : undefined}
                />
              </div>
              <dl className="grid grid-cols-2 gap-3 text-sm">
                <div className="rounded-lg bg-muted p-3">
                  <dt className="text-xs text-muted-foreground">Attempts</dt>
                  <dd className="text-lg font-semibold">{progress?.attemptsCount ?? 0}</dd>
                </div>
                <div className="rounded-lg bg-muted p-3">
                  <dt className="text-xs text-muted-foreground">Correct</dt>
                  <dd className="text-lg font-semibold">{progress?.correctCount ?? 0}</dd>
                </div>
              </dl>
              <Button asChild className="w-full">
                <Link href={`/practice?topic=${topicId}`}>Start practising</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

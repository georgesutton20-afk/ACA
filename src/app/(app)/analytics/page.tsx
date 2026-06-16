"use client";
import { Clock, Gauge, Target, TrendingUp } from "lucide-react";
import { data } from "@/lib/data";
import { useAuth, useAsync } from "@/lib/auth-client";
import { PageLoading } from "@/components/ui/page-loading";
import { cn, pct, formatDuration } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { TopicRadar } from "@/components/analytics/topic-radar";
import { AccuracyBar } from "@/components/analytics/accuracy-bar";
import { MockTrendLine } from "@/components/analytics/mock-trend-line";
import { ReadinessRadial } from "@/components/analytics/readiness-radial";

function StatCard({
  icon: Icon,
  label,
  value,
  sub,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: React.ReactNode;
  sub?: string;
}) {
  return (
    <Card>
      <CardContent className="flex flex-col gap-2 p-5">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Icon className="size-4" />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <div className="text-2xl font-bold tabular-nums">{value}</div>
        {sub && <p className="text-xs text-muted-foreground">{sub}</p>}
      </CardContent>
    </Card>
  );
}

function strength(mastery: number): { label: string; variant: "success" | "warning" | "destructive" } {
  if (mastery >= 0.8) return { label: "Strong", variant: "success" };
  if (mastery < 0.5) return { label: "Needs work", variant: "destructive" };
  return { label: "Developing", variant: "warning" };
}

export default function AnalyticsPage() {
  const { userId } = useAuth();
  const { data: analytics, loading } = useAsync(
    () => data.getAnalytics(userId!),
    [userId],
    !!userId,
  );

  if (loading || !analytics) return <PageLoading />;

  if (analytics.byTopic.length === 0) {
    return (
      <div className="mx-auto max-w-6xl">
        <PageHeader
          title="Performance analytics"
          description="Understand your strengths, weaknesses and exam readiness."
        />
        <Card>
          <CardContent className="flex flex-col items-center gap-2 py-16 text-center">
            <TrendingUp className="size-8 text-muted-foreground" />
            <p className="text-base font-medium">No analytics yet</p>
            <p className="text-sm text-muted-foreground">
              Practise some questions to unlock your analytics.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const maxTime = Math.max(...analytics.byTopic.map((t) => t.avgTimeMs), 1);
  const timeByTopic = [...analytics.byTopic]
    .sort((a, b) => b.avgTimeMs - a.avgTimeMs)
    .slice(0, 8);

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        title="Performance analytics"
        description="Understand your strengths, weaknesses and exam readiness."
      />

      <div className="space-y-6">
        {/* Summary stats */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon={TrendingUp}
            label="Predicted score"
            value={`${Math.round(analytics.predictedScore)}%`}
          />
          <StatCard
            icon={Gauge}
            label="Exam readiness"
            value={`${Math.round(analytics.readiness)}%`}
          />
          <StatCard
            icon={Target}
            label="Overall accuracy"
            value={pct(analytics.accuracy)}
            sub={`${analytics.totalAttempts} questions attempted`}
          />
          <StatCard
            icon={Clock}
            label="Avg time / question"
            value={formatDuration(analytics.avgTimeMs)}
          />
        </div>

        {/* Radar + readiness */}
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <TopicRadar byTopic={analytics.byTopic} />
          </div>
          <div className="lg:col-span-1">
            <ReadinessRadial
              readiness={analytics.readiness}
              predictedScore={analytics.predictedScore}
            />
          </div>
        </div>

        {/* Accuracy by topic (full width) */}
        <AccuracyBar byTopic={analytics.byTopic} />

        {/* Mock trend + time by topic */}
        <div className="grid gap-4 lg:grid-cols-2">
          <MockTrendLine mockTrend={analytics.mockTrend} />
          <Card className="h-full">
            <CardHeader>
              <CardTitle>Avg time per question</CardTitle>
              <CardDescription>Where you spend the most time</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {timeByTopic.map((t) => (
                <div key={t.topic.id} className="space-y-1">
                  <div className="flex items-center justify-between gap-2 text-sm">
                    <span className="truncate">{t.topic.title}</span>
                    <span className="shrink-0 font-medium tabular-nums text-muted-foreground">
                      {formatDuration(t.avgTimeMs)}
                    </span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${(t.avgTimeMs / maxTime) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Topic breakdown table */}
        <Card>
          <CardHeader>
            <CardTitle>Topic breakdown</CardTitle>
            <CardDescription>Mastery, accuracy and effort across every topic</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <caption className="sr-only">Performance breakdown by topic</caption>
                <thead>
                  <tr className="border-b text-left text-xs text-muted-foreground">
                    <th scope="col" className="py-2 pr-4 font-medium">Topic</th>
                    <th scope="col" className="px-4 py-2 font-medium">Mastery</th>
                    <th scope="col" className="px-4 py-2 text-right font-medium">Accuracy</th>
                    <th scope="col" className="px-4 py-2 text-right font-medium">Attempts</th>
                    <th scope="col" className="px-4 py-2 text-right font-medium">Avg time</th>
                    <th scope="col" className="pl-4 py-2 text-right font-medium">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {analytics.byTopic.map((t) => {
                    const s = strength(t.mastery);
                    return (
                      <tr key={t.topic.id} className="border-b last:border-0">
                        <th scope="row" className="py-3 pr-4 text-left font-medium">
                          {t.topic.title}
                        </th>
                        <td className="px-4 py-3">
                          <div className="flex items-center gap-2">
                            <Progress
                              value={Math.round(t.mastery * 100)}
                              className="w-24 min-w-16"
                            />
                            <span className="tabular-nums text-muted-foreground">
                              {Math.round(t.mastery * 100)}%
                            </span>
                          </div>
                        </td>
                        <td className={cn("px-4 py-3 text-right tabular-nums")}>
                          {pct(t.accuracy)}
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums text-muted-foreground">
                          {t.attempts}
                        </td>
                        <td className="px-4 py-3 text-right tabular-nums text-muted-foreground">
                          {formatDuration(t.avgTimeMs)}
                        </td>
                        <td className="pl-4 py-3 text-right">
                          <Badge variant={s.variant}>{s.label}</Badge>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

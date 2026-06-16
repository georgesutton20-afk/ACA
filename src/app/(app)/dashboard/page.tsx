"use client";
import Link from "next/link";
import { ArrowRight, Flame, GraduationCap, Target, TrendingUp } from "lucide-react";
import { data } from "@/lib/data";
import { useAuth, useAsync } from "@/lib/auth-client";
import { PageHeader } from "@/components/ui/page-header";
import { PageLoading } from "@/components/ui/page-loading";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/dashboard/stat-card";
import { ReadinessGauge } from "@/components/dashboard/readiness-gauge";
import { DailyGoal } from "@/components/dashboard/daily-goal";
import { WeeklyChart } from "@/components/dashboard/weekly-chart";
import { WeakTopics } from "@/components/dashboard/weak-topics";
import { UpcomingExams } from "@/components/dashboard/upcoming-exams";

export default function DashboardPage() {
  const { userId } = useAuth();
  const { data: dashboard, loading } = useAsync(
    () => data.getDashboard(userId!),
    [userId],
    !!userId,
  );

  if (loading || !dashboard) return <PageLoading />;
  const firstName = dashboard.profile.displayName.split(" ")[0];

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader title={`Welcome back, ${firstName} 👋`} description="Here's how your ACA prep is shaping up.">
        <Button asChild>
          <Link href="/practice">
            Continue studying
            <ArrowRight className="size-4" />
          </Link>
        </Button>
      </PageHeader>

      <div className="space-y-6">
        {/* Top stats */}
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatCard
            icon={TrendingUp}
            label="Overall progress"
            value={`${Math.round(dashboard.overallProgress)}%`}
            tone="primary"
          />
          <StatCard
            icon={Flame}
            label="Current streak"
            value={
              <span className="flex items-center gap-1.5">
                {dashboard.xp.currentStreak} <span className="text-base">🔥</span>
              </span>
            }
            sub={`Best ${dashboard.xp.longestStreak} days`}
            tone="warning"
          />
          <StatCard
            icon={GraduationCap}
            label="Topics mastered"
            value={`${dashboard.topicsMastered}/${dashboard.topicsTotal}`}
            tone="success"
          />
          <StatCard
            icon={Target}
            label="Exam readiness"
            value={Math.round(dashboard.readiness)}
            sub={dashboard.readinessBucket.label}
            tone="primary"
          />
        </div>

        {/* Gauges + weekly chart */}
        <div className="grid gap-4 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <ReadinessGauge
              readiness={dashboard.readiness}
              bucket={dashboard.readinessBucket}
              predictedScore={dashboard.predictedScore}
            />
          </div>
          <div className="lg:col-span-1">
            <DailyGoal todayXp={dashboard.todayXp} dailyGoalXp={dashboard.dailyGoalXp} />
          </div>
          <div className="lg:col-span-2">
            <WeeklyChart weekly={dashboard.weekly} />
          </div>
        </div>

        {/* Weak topics + upcoming exams */}
        <div className="grid gap-4 lg:grid-cols-2">
          <WeakTopics weakTopics={dashboard.weakTopics} />
          <UpcomingExams upcomingExams={dashboard.upcomingExams} />
        </div>
      </div>
    </div>
  );
}

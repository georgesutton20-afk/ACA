"use client";
import { Award, Flame, Trophy, Zap } from "lucide-react";
import { data } from "@/lib/data";
import { useAuth, useAsync } from "@/lib/auth-client";
import { PageLoading } from "@/components/ui/page-loading";
import { PageHeader } from "@/components/ui/page-header";
import { Card } from "@/components/ui/card";
import { LevelProgress } from "@/components/gamification/level-progress";
import { GamificationTabs } from "@/components/gamification/gamification-tabs";

const CURRENT_USER_NAME = "Tom Hardy";

function StatChip({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Trophy;
  label: string;
  value: string;
}) {
  return (
    <Card className="flex items-center gap-3 p-4">
      <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        <Icon className="size-5" aria-hidden />
      </span>
      <div className="min-w-0">
        <p className="truncate text-xs font-medium text-muted-foreground">{label}</p>
        <p className="text-lg font-bold leading-tight tabular-nums">{value}</p>
      </div>
    </Card>
  );
}

export default function GamificationPage() {
  const { userId } = useAuth();
  const { data: bundle, loading } = useAsync(
    () =>
      Promise.all([data.getGamification(userId!), data.getLeaderboard()]).then(
        ([gamification, leaderboard]) => ({ gamification, leaderboard }),
      ),
    [userId],
    !!userId,
  );

  if (loading || !bundle) return <PageLoading />;
  const { gamification, leaderboard } = bundle;
  const { xp, achievements, earned, challenges, userChallenges } = gamification;

  return (
    <div className="mx-auto max-w-6xl">
      <PageHeader
        title="Achievements & rewards"
        description="Earn XP, climb levels, keep your streak alive."
      />

      <div className="space-y-6">
        <LevelProgress
          totalXp={xp.totalXp}
          currentStreak={xp.currentStreak}
          longestStreak={xp.longestStreak}
        />

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          <StatChip icon={Zap} label="Total XP" value={xp.totalXp.toLocaleString()} />
          <StatChip icon={Flame} label="Current streak" value={`${xp.currentStreak} 🔥`} />
          <StatChip icon={Trophy} label="Longest streak" value={`${xp.longestStreak} days`} />
          <StatChip
            icon={Award}
            label="Badges earned"
            value={`${earned.length}/${achievements.length}`}
          />
        </div>

        <GamificationTabs
          achievements={achievements}
          earned={earned}
          challenges={challenges}
          userChallenges={userChallenges}
          leaderboard={leaderboard}
          currentUserName={CURRENT_USER_NAME}
        />
      </div>
    </div>
  );
}

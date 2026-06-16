"use client";

import type {
  Achievement,
  Challenge,
  LeaderboardEntry,
  UserAchievement,
  UserChallenge,
} from "@/types/domain";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ChallengeCard } from "./challenge-card";
import { AchievementCard } from "./achievement-card";
import { Leaderboard } from "./leaderboard";

interface GamificationTabsProps {
  achievements: Achievement[];
  earned: UserAchievement[];
  challenges: Challenge[];
  userChallenges: UserChallenge[];
  leaderboard: LeaderboardEntry[];
  currentUserName: string;
}

export function GamificationTabs({
  achievements,
  earned,
  challenges,
  userChallenges,
  leaderboard,
  currentUserName,
}: GamificationTabsProps) {
  const ucByChallenge = new Map(userChallenges.map((uc) => [uc.challengeId, uc]));
  const earnedByAchievement = new Map(earned.map((e) => [e.achievementId, e]));

  const daily = challenges.filter((c) => c.scope === "daily");
  const weekly = challenges.filter((c) => c.scope === "weekly");

  return (
    <Tabs defaultValue="challenges" className="w-full">
      <TabsList>
        <TabsTrigger value="challenges">Challenges</TabsTrigger>
        <TabsTrigger value="badges">Badges</TabsTrigger>
        <TabsTrigger value="leaderboard">Leaderboard</TabsTrigger>
      </TabsList>

      <TabsContent value="challenges" className="space-y-6">
        {daily.length > 0 && (
          <section>
            <h2 className="mb-3 text-sm font-semibold text-muted-foreground">Daily challenges</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {daily.map((c) => {
                const uc = ucByChallenge.get(c.id);
                return (
                  <ChallengeCard
                    key={c.id}
                    challenge={c}
                    progress={uc?.progress ?? 0}
                    completedAt={uc?.completedAt}
                  />
                );
              })}
            </div>
          </section>
        )}

        {weekly.length > 0 && (
          <section>
            <h2 className="mb-3 text-sm font-semibold text-muted-foreground">Weekly challenges</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {weekly.map((c) => {
                const uc = ucByChallenge.get(c.id);
                return (
                  <ChallengeCard
                    key={c.id}
                    challenge={c}
                    progress={uc?.progress ?? 0}
                    completedAt={uc?.completedAt}
                  />
                );
              })}
            </div>
          </section>
        )}

        {challenges.length === 0 && (
          <p className="py-10 text-center text-sm text-muted-foreground">
            No active challenges right now. Check back soon!
          </p>
        )}
      </TabsContent>

      <TabsContent value="badges">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {achievements.map((a) => {
            const e = earnedByAchievement.get(a.id);
            return (
              <AchievementCard
                key={a.id}
                achievement={a}
                earned={Boolean(e)}
                earnedAt={e?.earnedAt}
              />
            );
          })}
        </div>
      </TabsContent>

      <TabsContent value="leaderboard">
        <Leaderboard entries={leaderboard} currentUserName={currentUserName} />
      </TabsContent>
    </Tabs>
  );
}

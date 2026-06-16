import { Flame, Sparkles, Trophy } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { progressToNextLevel } from "@/lib/gamification";
import { cn } from "@/lib/utils";

interface LevelProgressProps {
  totalXp: number;
  currentStreak: number;
  longestStreak: number;
  className?: string;
}

/** Hero card: current level, XP progress to next level, totals and streak. */
export function LevelProgress({
  totalXp,
  currentStreak,
  longestStreak,
  className,
}: LevelProgressProps) {
  const { level, into, span, ratio, next } = progressToNextLevel(totalXp);
  const remaining = Math.max(0, next - totalXp);

  return (
    <Card className={cn("overflow-hidden", className)}>
      <div className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-transparent p-6 sm:p-8">
        <Sparkles className="pointer-events-none absolute right-6 top-6 size-16 text-primary/10" />

        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-5">
            <div className="flex size-20 shrink-0 flex-col items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-sm ring-1 ring-inset ring-primary/15">
              <Trophy className="size-5" aria-hidden />
              <span className="text-3xl font-bold leading-none tabular-nums">{level}</span>
            </div>
            <div>
              <p className="text-sm font-medium text-muted-foreground">Current level</p>
              <p className="text-3xl font-bold tracking-tight sm:text-4xl">Level {level}</p>
              <p className="mt-0.5 text-sm text-muted-foreground tabular-nums">
                {totalXp.toLocaleString()} total XP
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <div className="flex flex-col items-center gap-1">
              <span className="flex items-center gap-1 text-2xl font-bold tabular-nums">
                {currentStreak}
                <Flame className="size-5 text-warning" aria-hidden />
              </span>
              <span className="text-xs font-medium text-muted-foreground">Current streak</span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-2xl font-bold tabular-nums">{longestStreak}</span>
              <span className="text-xs font-medium text-muted-foreground">Longest streak</span>
            </div>
          </div>
        </div>

        <div className="mt-7">
          <div className="mb-2 flex items-baseline justify-between text-sm">
            <span className="font-medium tabular-nums">
              {into.toLocaleString()}/{span.toLocaleString()} XP to level {level + 1}
            </span>
            <span className="text-muted-foreground tabular-nums">
              {remaining.toLocaleString()} XP to go
            </span>
          </div>
          <Progress
            value={Math.round(ratio * 100)}
            aria-label={`Progress to level ${level + 1}`}
          />
        </div>
      </div>
    </Card>
  );
}

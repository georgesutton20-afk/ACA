"use client";
import { CheckCircle2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadialProgress } from "@/components/ui/radial-progress";

export function DailyGoal({ todayXp, dailyGoalXp }: { todayXp: number; dailyGoalXp: number }) {
  const goalMet = dailyGoalXp > 0 && todayXp >= dailyGoalXp;
  const value = dailyGoalXp > 0 ? (todayXp / dailyGoalXp) * 100 : 0;

  return (
    <Card className="animate-[rise_0.4s]">
      <CardHeader>
        <CardTitle>Daily goal</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <RadialProgress
          value={value}
          size={150}
          stroke={12}
          indicatorClassName={goalMet ? "text-success" : "text-primary"}
        >
          {goalMet ? (
            <CheckCircle2 className="size-9 text-success" />
          ) : (
            <span className="text-2xl font-bold tabular-nums">{Math.round(value)}%</span>
          )}
          <span className="mt-0.5 text-xs tabular-nums text-muted-foreground">
            {todayXp}/{dailyGoalXp} XP
          </span>
        </RadialProgress>
        <p className="text-sm font-medium">
          {goalMet ? (
            <span className="text-success">Goal complete! 🎉</span>
          ) : (
            <span className="text-muted-foreground">
              {Math.max(0, dailyGoalXp - todayXp)} XP to go
            </span>
          )}
        </p>
      </CardContent>
    </Card>
  );
}

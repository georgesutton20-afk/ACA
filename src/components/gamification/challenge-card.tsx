import { CheckCircle2 } from "lucide-react";
import type { Challenge } from "@/types/domain";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ChallengeCardProps {
  challenge: Challenge;
  progress: number;
  completedAt?: string;
}

const metricLabel: Record<Challenge["metric"], string> = {
  questions: "questions",
  xp: "XP",
  correct: "correct",
  minutes: "minutes",
};

export function ChallengeCard({ challenge, progress, completedAt }: ChallengeCardProps) {
  const ratio = Math.min(progress / challenge.target, 1);
  const completed = ratio >= 1 || Boolean(completedAt);

  return (
    <Card className={cn("transition-colors", completed && "border-success/40 bg-success/5")}>
      <CardContent className="flex flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Badge variant={challenge.scope === "daily" ? "default" : "secondary"} className="capitalize">
              {challenge.scope}
            </Badge>
            <h3 className="mt-2 font-semibold leading-tight">{challenge.title}</h3>
            {challenge.description && (
              <p className="mt-0.5 text-sm text-muted-foreground">{challenge.description}</p>
            )}
          </div>
          <span className="shrink-0 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary tabular-nums">
            +{challenge.xpReward} XP
          </span>
        </div>

        <div>
          <div className="mb-1.5 flex items-center justify-between text-xs font-medium">
            {completed ? (
              <span className="flex items-center gap-1 text-success">
                <CheckCircle2 className="size-4" aria-hidden />
                Completed
              </span>
            ) : (
              <span className="text-muted-foreground tabular-nums">
                {progress}/{challenge.target} {metricLabel[challenge.metric]}
              </span>
            )}
            <span className="text-muted-foreground tabular-nums">{Math.round(ratio * 100)}%</span>
          </div>
          <Progress
            value={Math.round(ratio * 100)}
            indicatorClassName={completed ? "bg-success" : undefined}
            aria-label={`${challenge.title} progress`}
          />
        </div>
      </CardContent>
    </Card>
  );
}

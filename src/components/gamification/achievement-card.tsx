import {
  Award,
  Crown,
  Flame,
  Footprints,
  Lock,
  Rocket,
  ScrollText,
  Sparkles,
  Target,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import type { Achievement } from "@/types/domain";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface AchievementCardProps {
  achievement: Achievement;
  earned: boolean;
  earnedAt?: string;
}

const iconMap: Record<string, LucideIcon> = {
  Flame,
  Trophy,
  Crown,
  Award,
  Target,
  Sparkles,
  Rocket,
  Footprints,
  ScrollText,
};

const tierStyles: Record<Achievement["tier"], string> = {
  bronze: "bg-warning/15 text-warning ring-warning/20",
  silver: "bg-muted text-muted-foreground ring-border",
  gold: "bg-warning/25 text-warning ring-warning/30",
  platinum: "bg-primary/10 text-primary ring-primary/20",
};

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function AchievementCard({ achievement, earned, earnedAt }: AchievementCardProps) {
  const Icon = (achievement.icon && iconMap[achievement.icon]) || Trophy;

  return (
    <Card
      className={cn(
        "relative flex flex-col items-center gap-2 p-5 text-center transition-all",
        earned ? "hover:shadow-md" : "opacity-60 grayscale",
      )}
    >
      <div
        className={cn(
          "relative flex size-14 items-center justify-center rounded-full ring-1 ring-inset",
          tierStyles[achievement.tier],
        )}
      >
        <Icon className="size-7" aria-hidden />
        {!earned && (
          <span className="absolute -bottom-1 -right-1 flex size-6 items-center justify-center rounded-full bg-muted text-muted-foreground ring-2 ring-card">
            <Lock className="size-3" aria-hidden />
          </span>
        )}
      </div>

      <h3 className="font-semibold leading-tight">{achievement.title}</h3>
      <p className="text-xs text-muted-foreground">{achievement.description}</p>

      <div className="mt-auto flex flex-col items-center gap-1 pt-1">
        <span className="text-xs font-semibold text-primary tabular-nums">
          +{achievement.xpReward} XP
        </span>
        {earned && earnedAt && (
          <span className="text-[11px] text-muted-foreground">Earned {formatDate(earnedAt)}</span>
        )}
      </div>
    </Card>
  );
}

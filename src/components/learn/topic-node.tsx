"use client";

import Link from "next/link";
import { Check, Crown, Lock, Play } from "lucide-react";
import { RadialProgress } from "@/components/ui/radial-progress";
import { cn } from "@/lib/utils";
import type { Topic, TopicProgress } from "@/types/domain";

export interface TopicNodeProps {
  topic: Topic & { progress?: TopicProgress };
  /** Zero-based index within the module — drives the alternating offset. */
  index: number;
  /** Locked topics are non-interactive until the previous topic is begun. */
  locked: boolean;
}

export function TopicNode({ topic, index, locked }: TopicNodeProps) {
  const mastery = topic.progress?.mastery ?? 0;
  const value = Math.round(mastery * 100);
  const mastered = mastery >= 0.8;
  const inProgress = mastery > 0 && !mastered;

  // Playful alternating horizontal offset (Duolingo feel) on larger screens.
  const offsetClass = index % 2 === 0 ? "sm:translate-x-0" : "sm:translate-x-10";

  const caption = locked
    ? "Locked"
    : mastered
      ? `${value}% mastery`
      : inProgress
        ? `${value}% mastery`
        : "Not started";

  const RingIcon = locked ? Lock : mastered ? Crown : inProgress ? Check : Play;

  const ringColor = locked
    ? "text-muted-foreground"
    : mastered
      ? "text-success"
      : inProgress
        ? "text-primary"
        : "text-muted-foreground";

  const node = (
    <div
      className={cn(
        "group flex items-center gap-4 outline-none",
        offsetClass,
        locked && "opacity-60",
      )}
    >
      <span className="relative inline-flex shrink-0 items-center justify-center">
        <RadialProgress
          value={locked ? 0 : value}
          size={64}
          stroke={6}
          indicatorClassName={ringColor}
        >
          <span
            className={cn(
              "flex size-11 items-center justify-center rounded-full transition-transform",
              !locked && "group-hover:scale-105 group-focus-visible:scale-105",
              locked
                ? "bg-muted text-muted-foreground"
                : mastered
                  ? "bg-success/15 text-success"
                  : inProgress
                    ? "bg-primary/10 text-primary"
                    : "bg-muted text-muted-foreground",
            )}
          >
            <RingIcon className="size-5" aria-hidden />
          </span>
        </RadialProgress>
        {mastered && !locked && (
          <span className="absolute -right-0.5 -top-0.5 flex size-5 items-center justify-center rounded-full bg-success text-success-foreground shadow-sm">
            <Check className="size-3" aria-hidden />
          </span>
        )}
      </span>

      <span className="flex min-w-0 flex-col">
        <span
          className={cn(
            "truncate text-sm font-semibold",
            locked ? "text-muted-foreground" : "text-foreground",
          )}
        >
          {topic.title}
        </span>
        <span
          className={cn(
            "text-xs",
            mastered ? "text-success" : inProgress ? "text-primary" : "text-muted-foreground",
          )}
        >
          {caption}
        </span>
      </span>
    </div>
  );

  if (locked) {
    return (
      <div
        aria-disabled
        aria-label={`${topic.title} — locked. Reach 30% mastery on the previous topic to unlock.`}
        className="block cursor-not-allowed select-none"
      >
        {node}
      </div>
    );
  }

  return (
    <Link
      href={`/learn/${topic.id}`}
      aria-label={`${topic.title} — ${caption}`}
      className="block rounded-2xl outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
    >
      {node}
    </Link>
  );
}

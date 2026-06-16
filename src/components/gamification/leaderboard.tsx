import type { LeaderboardEntry } from "@/types/domain";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface LeaderboardProps {
  entries: LeaderboardEntry[];
  currentUserName: string;
}

const medals: Record<number, string> = { 1: "🥇", 2: "🥈", 3: "🥉" };

function initials(name: string) {
  return name
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

export function Leaderboard({ entries, currentUserName }: LeaderboardProps) {
  return (
    <Card className="overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b text-left text-xs font-medium text-muted-foreground">
            <th scope="col" className="w-12 px-4 py-3 text-center">
              #
            </th>
            <th scope="col" className="px-2 py-3">
              Learner
            </th>
            <th scope="col" className="hidden px-2 py-3 sm:table-cell">
              Level
            </th>
            <th scope="col" className="hidden px-2 py-3 text-center sm:table-cell">
              Streak
            </th>
            <th scope="col" className="px-4 py-3 text-right">
              XP
            </th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            const isYou = entry.displayName === currentUserName;
            return (
              <tr
                key={entry.userId}
                className={cn(
                  "border-b last:border-0 transition-colors",
                  isYou ? "bg-primary/10" : "hover:bg-muted/40",
                )}
              >
                <td className="px-4 py-3 text-center">
                  <span className={cn("font-semibold tabular-nums", entry.rank > 3 && "text-muted-foreground")}>
                    {medals[entry.rank] ?? `#${entry.rank}`}
                  </span>
                </td>
                <td className="px-2 py-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="size-8">
                      <AvatarFallback className="text-xs">{initials(entry.displayName)}</AvatarFallback>
                    </Avatar>
                    <span className="flex items-center gap-2 font-medium">
                      {entry.displayName}
                      {isYou && <Badge>You</Badge>}
                    </span>
                  </div>
                </td>
                <td className="hidden px-2 py-3 sm:table-cell">
                  <Badge variant="secondary">Lvl {entry.level}</Badge>
                </td>
                <td className="hidden px-2 py-3 text-center tabular-nums sm:table-cell">
                  {entry.currentStreak} 🔥
                </td>
                <td className="px-4 py-3 text-right font-semibold tabular-nums">
                  {entry.totalXp.toLocaleString()}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { DashboardData } from "@/types/domain";

export function WeakTopics({ weakTopics }: { weakTopics: DashboardData["weakTopics"] }) {
  return (
    <Card className="animate-[rise_0.4s]">
      <CardHeader>
        <CardTitle>Weak spots</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {weakTopics.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">No weak spots — great work! 🎉</p>
        ) : (
          weakTopics.map(({ topic, mastery }) => {
            const value = Math.round(mastery * 100);
            const tone = value < 40 ? "bg-destructive" : "bg-warning";
            return (
              <div key={topic.id} className="flex items-center gap-4">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{topic.title}</p>
                  <div className="mt-2 flex items-center gap-3">
                    <Progress value={value} indicatorClassName={tone} className="flex-1" />
                    <span className="w-9 text-right text-xs tabular-nums text-muted-foreground">{value}%</span>
                  </div>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <Link href={`/practice?topic=${topic.id}`}>Practise</Link>
                </Button>
              </div>
            );
          })
        )}
      </CardContent>
    </Card>
  );
}

import { CalendarDays } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { DashboardData } from "@/types/domain";

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export function UpcomingExams({ upcomingExams }: { upcomingExams: DashboardData["upcomingExams"] }) {
  return (
    <Card className="animate-[rise_0.4s]">
      <CardHeader>
        <CardTitle>Upcoming exams</CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {upcomingExams.length === 0 ? (
          <p className="py-6 text-center text-sm text-muted-foreground">No exams scheduled.</p>
        ) : (
          upcomingExams.map((exam) => (
            <div key={`${exam.title}-${exam.date}`} className="flex items-center gap-3 rounded-lg border bg-muted/40 p-3">
              <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <CalendarDays className="size-4" />
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{exam.title}</p>
                <p className="text-xs text-muted-foreground">{formatDate(exam.date)}</p>
              </div>
              <Badge variant={exam.daysAway <= 7 ? "warning" : "secondary"}>
                {exam.daysAway} days away
              </Badge>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}

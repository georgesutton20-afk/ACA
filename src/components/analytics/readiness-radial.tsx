"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadialProgress } from "@/components/ui/radial-progress";

function ringClass(readiness: number) {
  if (readiness >= 85) return "text-success";
  if (readiness >= 70) return "text-primary";
  if (readiness >= 40) return "text-warning";
  return "text-destructive";
}

export function ReadinessRadial({
  readiness,
  predictedScore,
}: {
  readiness: number;
  predictedScore: number;
}) {
  const value = Math.round(readiness);
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Exam readiness</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center gap-4 pb-8">
        <RadialProgress value={readiness} size={140} stroke={12} indicatorClassName={ringClass(readiness)}>
          <span className="text-3xl font-bold tabular-nums">{value}</span>
          <span className="text-xs text-muted-foreground">/100</span>
        </RadialProgress>
        <p className="text-sm text-muted-foreground">
          Predicted score:{" "}
          <span className="font-semibold text-foreground">{Math.round(predictedScore)}%</span>
        </p>
      </CardContent>
    </Card>
  );
}

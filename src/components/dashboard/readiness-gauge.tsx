"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadialProgress } from "@/components/ui/radial-progress";
import type { ReadinessBucket } from "@/types/domain";

const TONE_RING: Record<ReadinessBucket["tone"], string> = {
  emerald: "text-success",
  primary: "text-primary",
  amber: "text-warning",
  rose: "text-destructive",
};

const TONE_TEXT = TONE_RING;

export function ReadinessGauge({
  readiness,
  bucket,
  predictedScore,
}: {
  readiness: number;
  bucket: ReadinessBucket;
  predictedScore: number;
}) {
  return (
    <Card className="animate-[rise_0.4s]">
      <CardHeader>
        <CardTitle>Exam readiness</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-4">
        <RadialProgress value={readiness} size={150} stroke={12} indicatorClassName={TONE_RING[bucket.tone]}>
          <span className="text-3xl font-bold tabular-nums">{Math.round(readiness)}</span>
          <span className="text-xs text-muted-foreground">readiness</span>
        </RadialProgress>
        <div className="text-center">
          <p className={`text-sm font-semibold ${TONE_TEXT[bucket.tone]}`}>{bucket.label}</p>
          <p className="mt-1 text-xs text-muted-foreground">
            Predicted score{" "}
            <span className="font-medium text-foreground tabular-nums">{Math.round(predictedScore)}%</span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

"use client";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, CHART_COLORS } from "@/components/ui/chart";
import type { AnalyticsData } from "@/lib/data/types";

export function TopicRadar({ byTopic }: { byTopic: AnalyticsData["byTopic"] }) {
  const chartData = [...byTopic]
    .sort((a, b) => b.attempts - a.attempts)
    .slice(0, 8)
    .map((t) => ({
      topic: t.topic.title,
      mastery: Math.round(t.mastery * 100),
    }));

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Topic strengths</CardTitle>
      </CardHeader>
      <CardContent>
        {chartData.length < 3 ? (
          <p className="py-12 text-center text-sm text-muted-foreground">
            Practise across more topics to see your strengths radar.
          </p>
        ) : (
          <ChartContainer height={280}>
            <RadarChart data={chartData} margin={{ top: 8, right: 8, bottom: 8, left: 8 }}>
              <PolarGrid stroke={CHART_COLORS.grid} />
              <PolarAngleAxis
                dataKey="topic"
                tick={{ fill: CHART_COLORS.muted, fontSize: 10 }}
              />
              <Radar
                name="Mastery"
                dataKey="mastery"
                stroke={CHART_COLORS.primary}
                fill={CHART_COLORS.primary}
                fillOpacity={0.4}
              />
            </RadarChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}

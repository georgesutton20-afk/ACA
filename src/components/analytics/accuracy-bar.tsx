"use client";
import { Bar, BarChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, CHART_COLORS } from "@/components/ui/chart";
import type { AnalyticsData } from "@/lib/data/types";

export function AccuracyBar({ byTopic }: { byTopic: AnalyticsData["byTopic"] }) {
  const chartData = byTopic.slice(0, 10).map((t) => ({
    topic: t.topic.title,
    accuracy: Math.round(t.accuracy * 100),
  }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Accuracy by topic</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer height={280}>
          <BarChart data={chartData} margin={{ top: 8, right: 8, left: -16, bottom: 56 }}>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} vertical={false} />
            <XAxis
              dataKey="topic"
              tickLine={false}
              axisLine={false}
              stroke={CHART_COLORS.muted}
              interval={0}
              angle={-35}
              textAnchor="end"
              height={56}
              tick={{ fontSize: 10 }}
              tickFormatter={(v: string) => (v.length > 16 ? `${v.slice(0, 15)}…` : v)}
            />
            <YAxis
              domain={[0, 100]}
              tickLine={false}
              axisLine={false}
              width={32}
              stroke={CHART_COLORS.muted}
            />
            <Tooltip
              cursor={{ fill: CHART_COLORS.grid, fillOpacity: 0.2 }}
              content={({ active, payload, label }) => (
                <ChartTooltip
                  active={active}
                  payload={payload as never}
                  label={label as string}
                  valueSuffix="%"
                />
              )}
            />
            <Bar
              dataKey="accuracy"
              name="Accuracy"
              fill={CHART_COLORS.primary}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

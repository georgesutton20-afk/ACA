"use client";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, CHART_COLORS } from "@/components/ui/chart";
import type { AnalyticsData } from "@/lib/data/types";

export function MockTrendLine({ mockTrend }: { mockTrend: AnalyticsData["mockTrend"] }) {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Mock score trend</CardTitle>
      </CardHeader>
      <CardContent>
        {mockTrend.length < 1 ? (
          <p className="py-12 text-center text-sm text-muted-foreground">
            Sit a mock exam to see your trend.
          </p>
        ) : (
          <ChartContainer height={260}>
            <LineChart data={mockTrend} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} vertical={false} />
              <XAxis
                dataKey="label"
                tickLine={false}
                axisLine={false}
                stroke={CHART_COLORS.muted}
              />
              <YAxis
                domain={[0, 100]}
                tickLine={false}
                axisLine={false}
                width={32}
                stroke={CHART_COLORS.muted}
              />
              <ReferenceLine
                y={55}
                stroke={CHART_COLORS.muted}
                strokeDasharray="4 4"
                label={{ value: "Pass", position: "insideTopRight", fontSize: 10, fill: CHART_COLORS.muted }}
              />
              <Tooltip
                cursor={{ stroke: CHART_COLORS.grid }}
                content={({ active, payload, label }) => (
                  <ChartTooltip
                    active={active}
                    payload={payload as never}
                    label={label as string}
                    valueSuffix="%"
                  />
                )}
              />
              <Line
                type="monotone"
                dataKey="score"
                name="Score"
                stroke={CHART_COLORS.primary}
                strokeWidth={2}
                dot={{ r: 3, fill: CHART_COLORS.primary }}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ChartContainer>
        )}
      </CardContent>
    </Card>
  );
}

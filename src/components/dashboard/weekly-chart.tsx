"use client";
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, CHART_COLORS } from "@/components/ui/chart";
import { relativeDay } from "@/lib/utils";
import type { DashboardData } from "@/types/domain";

export function WeeklyChart({ weekly }: { weekly: DashboardData["weekly"] }) {
  const chartData = weekly.map((d) => ({
    day: relativeDay(d.day),
    xp: d.xp,
    questions: d.questions,
  }));
  const totalQuestions = weekly.reduce((sum, d) => sum + d.questions, 0);

  return (
    <Card className="animate-[rise_0.4s]">
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>This week</CardTitle>
        <p className="text-sm text-muted-foreground">
          <span className="font-semibold tabular-nums text-foreground">{totalQuestions}</span> questions
        </p>
      </CardHeader>
      <CardContent>
        <ChartContainer height={240}>
          <AreaChart data={chartData} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <defs>
              <linearGradient id="weeklyXp" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={CHART_COLORS.primary} stopOpacity={0.35} />
                <stop offset="100%" stopColor={CHART_COLORS.primary} stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke={CHART_COLORS.grid} vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} stroke={CHART_COLORS.muted} />
            <YAxis tickLine={false} axisLine={false} width={32} stroke={CHART_COLORS.muted} />
            <Tooltip
              cursor={{ stroke: CHART_COLORS.grid }}
              content={({ active, payload, label }) => (
                <ChartTooltip
                  active={active}
                  payload={payload as never}
                  label={label as string}
                  valueSuffix=" XP"
                />
              )}
            />
            <Area
              type="monotone"
              dataKey="xp"
              name="XP"
              stroke={CHART_COLORS.primary}
              strokeWidth={2}
              fill="url(#weeklyXp)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}

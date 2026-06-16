"use client";
import * as React from "react";
import { ResponsiveContainer } from "recharts";
import { cn } from "@/lib/utils";

/** Theme-aware palette pulled from CSS variables for Recharts series. */
export const CHART_COLORS = {
  primary: "var(--color-chart-1)",
  success: "var(--color-chart-2)",
  warning: "var(--color-chart-3)",
  danger: "var(--color-chart-4)",
  info: "var(--color-chart-5)",
  grid: "var(--color-border)",
  muted: "var(--color-muted-foreground)",
};

export function ChartContainer({
  children,
  className,
  height = 260,
}: {
  children: React.ReactElement;
  className?: string;
  height?: number;
}) {
  // Defer to the client so ResponsiveContainer always has real dimensions
  // (avoids Recharts' width(-1)/height(-1) warnings during prerender).
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);

  return (
    <div className={cn("w-full text-xs", className)} style={{ height }}>
      {mounted && (
        <ResponsiveContainer width="100%" height="100%">
          {children}
        </ResponsiveContainer>
      )}
    </div>
  );
}

export function ChartTooltip({
  active,
  payload,
  label,
  valueSuffix = "",
}: {
  active?: boolean;
  payload?: { name: string; value: number; color?: string }[];
  label?: string;
  valueSuffix?: string;
}) {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border bg-popover px-3 py-2 text-xs shadow-lg">
      {label && <div className="mb-1 font-medium">{label}</div>}
      {payload.map((p, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="size-2 rounded-full" style={{ background: p.color }} />
          <span className="text-muted-foreground">{p.name}:</span>
          <span className="tabular font-medium">
            {p.value}
            {valueSuffix}
          </span>
        </div>
      ))}
    </div>
  );
}

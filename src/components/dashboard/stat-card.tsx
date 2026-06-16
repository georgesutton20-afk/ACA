import type { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type Tone = "primary" | "success" | "warning" | "destructive";

const TONE_CHIP: Record<Tone, string> = {
  primary: "bg-primary/10 text-primary",
  success: "bg-success/15 text-success",
  warning: "bg-warning/20 text-warning dark:text-warning",
  destructive: "bg-destructive/15 text-destructive",
};

export function StatCard({
  icon: Icon,
  label,
  value,
  sub,
  tone = "primary",
}: {
  icon: LucideIcon;
  label: string;
  value: React.ReactNode;
  sub?: React.ReactNode;
  tone?: Tone;
}) {
  return (
    <Card className="animate-[rise_0.4s]">
      <CardContent className="flex items-start gap-4 p-5">
        <div className={cn("flex size-11 shrink-0 items-center justify-center rounded-xl", TONE_CHIP[tone])}>
          <Icon className="size-5" />
        </div>
        <div className="min-w-0">
          <p className="text-sm text-muted-foreground">{label}</p>
          <p className="mt-0.5 text-2xl font-bold tracking-tight tabular-nums">{value}</p>
          {sub && <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>}
        </div>
      </CardContent>
    </Card>
  );
}

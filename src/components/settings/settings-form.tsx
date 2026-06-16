"use client";

import * as React from "react";
import { Check, LogOut, Loader2 } from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { cn } from "@/lib/utils";
import type { AcaLevel, Profile } from "@/types/domain";

const LEVEL_OPTIONS: { value: AcaLevel; label: string }[] = [
  { value: "certificate", label: "Certificate" },
  { value: "professional", label: "Professional" },
  { value: "advanced", label: "Advanced" },
];

const GOAL_OPTIONS = [20, 50, 100, 150, 200];

export function SettingsForm({ profile }: { profile?: Profile }) {
  const [displayName, setDisplayName] = React.useState(profile?.displayName ?? "");
  const [targetLevel, setTargetLevel] = React.useState<AcaLevel | "">(
    profile?.targetLevel ?? "",
  );
  const [examDate, setExamDate] = React.useState(profile?.examDate ?? "");
  const [dailyGoalXp, setDailyGoalXp] = React.useState(
    String(profile?.dailyGoalXp ?? 50),
  );
  const [saved, setSaved] = React.useState(false);
  const [pending, setPending] = React.useState(false);

  function handleSave(event: React.FormEvent) {
    event.preventDefault();
    // NOTE: profile persistence lands when Supabase is enabled — the seed data
    // layer has no profile-write method, so this is a demo-only confirmation.
    setPending(true);
    setSaved(false);
    setTimeout(() => {
      setPending(false);
      setSaved(true);
    }, 400);
  }

  return (
    <form onSubmit={handleSave} className="space-y-6">
      {/* Profile */}
      <Card>
        <CardHeader>
          <CardTitle>Profile</CardTitle>
          <CardDescription>Your learner details and study targets.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-5 sm:grid-cols-2">
          <div className="space-y-1.5 sm:col-span-2">
            <Label htmlFor="set-name">Display name</Label>
            <Input
              id="set-name"
              value={displayName}
              onChange={(e) => {
                setDisplayName(e.target.value);
                setSaved(false);
              }}
              placeholder="Your name"
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="set-level">Target level</Label>
            <Select
              value={targetLevel}
              onValueChange={(v) => {
                setTargetLevel(v as AcaLevel);
                setSaved(false);
              }}
            >
              <SelectTrigger id="set-level" aria-label="Target level">
                <SelectValue placeholder="Select a level" />
              </SelectTrigger>
              <SelectContent>
                {LEVEL_OPTIONS.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="set-exam">Exam date</Label>
            <Input
              id="set-exam"
              type="date"
              value={examDate}
              onChange={(e) => {
                setExamDate(e.target.value);
                setSaved(false);
              }}
            />
          </div>

          <div className="space-y-1.5">
            <Label htmlFor="set-goal">Daily goal (XP)</Label>
            <Select
              value={dailyGoalXp}
              onValueChange={(v) => {
                setDailyGoalXp(v);
                setSaved(false);
              }}
            >
              <SelectTrigger id="set-goal" aria-label="Daily goal XP">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {GOAL_OPTIONS.map((g) => (
                  <SelectItem key={g} value={String(g)}>
                    {g} XP
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
        <CardFooter className="flex items-center gap-3">
          <Button type="submit" disabled={pending}>
            {pending && <Loader2 className="size-4 animate-spin" />}
            Save changes
          </Button>
          {saved && (
            <span
              className={cn("inline-flex items-center gap-1.5 text-sm text-success")}
              role="status"
            >
              <Check className="size-4" />
              Saved (demo)
            </span>
          )}
        </CardFooter>
      </Card>

      {/* Appearance */}
      <Card>
        <CardHeader>
          <CardTitle>Appearance</CardTitle>
          <CardDescription>Choose how ACA Academy looks.</CardDescription>
        </CardHeader>
        <CardContent className="flex items-center justify-between">
          <div>
            <Label>Theme</Label>
            <p className="mt-1 text-sm text-muted-foreground">
              Toggle between light and dark. System preference is used by default.
            </p>
          </div>
          <ThemeToggle />
        </CardContent>
      </Card>

      {/* Account */}
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Connect Supabase to enable real accounts and sign-in.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You are exploring in demo mode. Authentication, profile persistence and
            sync activate once Supabase is configured.
          </p>
        </CardContent>
        <CardFooter>
          <Button type="button" variant="outline" disabled>
            <LogOut className="size-4" />
            Sign out
          </Button>
        </CardFooter>
      </Card>
    </form>
  );
}

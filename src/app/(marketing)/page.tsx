import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Flame,
  Map,
  ScrollText,
  Sparkles,
  Trophy,
} from "lucide-react";
import { Logo } from "@/components/layout/logo";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  { icon: Map, title: "Structured learning paths", body: "A Duolingo-style map across Certificate, Professional and Advanced levels." },
  { icon: BrainCircuit, title: "Adaptive practice", body: "An Elo-based engine targets your weak topics and tunes difficulty as you improve." },
  { icon: ScrollText, title: "Realistic mock exams", body: "Full and topic-specific timed papers with auto-submit, review and mistake analysis." },
  { icon: BarChart3, title: "Deep analytics", body: "Strengths, weaknesses, accuracy, timing, predicted score and readiness forecasting." },
  { icon: Trophy, title: "Gamification", body: "XP, levels, badges, streaks, daily challenges and leaderboards keep you coming back." },
  { icon: Sparkles, title: "AI-ready", body: "Designed for a personal tutor, generated explanations and revision plans." },
];

export default function LandingPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-5">
        <Logo />
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild variant="ghost" className="hidden sm:inline-flex">
            <Link href="/login">Log in</Link>
          </Button>
          <Button asChild>
            <Link href="/dashboard">Try the demo</Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-6xl px-5 pb-16 pt-10 sm:pt-20">
          <div className="mx-auto max-w-3xl text-center">
            <Badge variant="default" className="mb-5 animate-[fade-in_0.4s]">
              <Flame className="size-3.5" /> Build an exam-winning study habit
            </Badge>
            <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Master the ACA, <span className="text-primary">one focused day</span> at a time.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-pretty text-lg text-muted-foreground">
              ACA Academy turns a famously dry qualification into an interactive, measurable and
              motivating journey — structured paths, adaptive question practice, timed mocks, rich
              analytics and game mechanics that make revision stick.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link href="/dashboard">
                  Explore the demo <ArrowRight className="size-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="/learn">See the learning map</Link>
              </Button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No sign-up needed — the demo runs on sample data.
            </p>
          </div>
        </section>

        {/* Features */}
        <section className="mx-auto max-w-6xl px-5 pb-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <Card key={f.title} className="transition-shadow hover:shadow-md">
                  <CardContent className="pt-5">
                    <span className="mb-3 flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <h3 className="font-semibold">{f.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Levels strip */}
        <section className="border-y bg-card/40">
          <div className="mx-auto grid max-w-6xl gap-6 px-5 py-12 sm:grid-cols-3">
            {[
              ["Certificate", "6 modules · the fundamentals"],
              ["Professional", "6 modules · applied technical skill"],
              ["Advanced", "3 modules · integration & Case Study"],
            ].map(([t, s]) => (
              <div key={t} className="text-center">
                <div className="text-2xl font-bold text-primary">{t}</div>
                <p className="text-sm text-muted-foreground">{s}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="mx-auto w-full max-w-6xl px-5 py-8 text-sm text-muted-foreground">
        <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <Logo />
          <p>Practice content is illustrative. Not affiliated with ICAEW.</p>
        </div>
      </footer>
    </div>
  );
}

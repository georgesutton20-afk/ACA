"use client";

import { useState } from "react";
import * as Icons from "lucide-react";
import { BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { TopicNode } from "@/components/learn/topic-node";
import { cn } from "@/lib/utils";
import type { CourseTree } from "@/lib/data";
import type { AcaLevel } from "@/types/domain";

const LEVELS: { value: AcaLevel; label: string }[] = [
  { value: "certificate", label: "Certificate" },
  { value: "professional", label: "Professional" },
  { value: "advanced", label: "Advanced" },
];

/** Resolve a lucide icon name string to a component, falling back to BookOpen. */
function resolveIcon(name?: string): LucideIcon {
  if (!name) return BookOpen;
  const record = Icons as unknown as Record<string, LucideIcon>;
  return record[name] ?? BookOpen;
}

export function LearnMap({ tree }: { tree: CourseTree[] }) {
  const available = LEVELS.filter((l) => tree.some((t) => t.course.level === l.value));
  const initial = available[0]?.value ?? "certificate";
  const [level, setLevel] = useState<AcaLevel>(initial);

  if (tree.length === 0) {
    return (
      <p className="rounded-xl border bg-card p-8 text-center text-sm text-muted-foreground">
        No courses available yet.
      </p>
    );
  }

  return (
    <Tabs value={level} onValueChange={(v) => setLevel(v as AcaLevel)}>
      <TabsList>
        {LEVELS.map((l) => (
          <TabsTrigger key={l.value} value={l.value} disabled={!available.some((a) => a.value === l.value)}>
            {l.label}
          </TabsTrigger>
        ))}
      </TabsList>

      {LEVELS.map((l) => {
        const courses = tree.filter((t) => t.course.level === l.value);
        return (
          <TabsContent key={l.value} value={l.value}>
            <div className="space-y-10">
              {courses.length === 0 ? (
                <p className="rounded-xl border bg-card p-8 text-center text-sm text-muted-foreground">
                  Nothing here yet for this level.
                </p>
              ) : (
                courses.map((ct) =>
                  ct.modules.map((module, mi) => {
                    const Icon = resolveIcon(module.icon);
                    const topics = module.topics;
                    const masterySum = topics.reduce(
                      (acc, t) => acc + (t.progress?.mastery ?? 0),
                      0,
                    );
                    const moduleMastery = topics.length
                      ? Math.round((masterySum / topics.length) * 100)
                      : 0;

                    return (
                      <section
                        key={module.id}
                        className="animate-[rise_0.4s] rounded-2xl border bg-card p-5 shadow-sm sm:p-6"
                        style={{ animationDelay: `${mi * 60}ms` }}
                      >
                        <header className="mb-6 flex items-start gap-4">
                          <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                            <Icon className="size-6" aria-hidden />
                          </span>
                          <div className="min-w-0 flex-1">
                            <div className="flex flex-wrap items-center gap-2">
                              <h2 className="text-lg font-semibold tracking-tight">{module.title}</h2>
                              <Badge variant={moduleMastery >= 80 ? "success" : "secondary"}>
                                {moduleMastery}% complete
                              </Badge>
                            </div>
                            {module.description && (
                              <p className="mt-1 text-sm text-muted-foreground">{module.description}</p>
                            )}
                            <Progress
                              value={moduleMastery}
                              className="mt-3 max-w-md"
                              indicatorClassName={moduleMastery >= 80 ? "bg-success" : undefined}
                            />
                          </div>
                        </header>

                        <ol className="relative flex flex-col gap-6 pl-1">
                          {topics.map((topic, ti) => {
                            const prev = ti > 0 ? topics[ti - 1] : undefined;
                            const locked =
                              ti > 0 && (prev?.progress?.mastery ?? 0) < 0.3;
                            const isLast = ti === topics.length - 1;

                            return (
                              <li key={topic.id} className="relative">
                                {!isLast && (
                                  <span
                                    aria-hidden
                                    className={cn(
                                      "absolute left-8 top-16 h-6 w-0.5 -translate-x-1/2 rounded-full",
                                      (topic.progress?.mastery ?? 0) >= 0.3
                                        ? "bg-primary/40"
                                        : "bg-border",
                                    )}
                                  />
                                )}
                                <TopicNode topic={topic} index={ti} locked={locked} />
                              </li>
                            );
                          })}
                          {topics.length === 0 && (
                            <li className="text-sm text-muted-foreground">No topics yet.</li>
                          )}
                        </ol>
                      </section>
                    );
                  }),
                )
              )}
            </div>
          </TabsContent>
        );
      })}
    </Tabs>
  );
}

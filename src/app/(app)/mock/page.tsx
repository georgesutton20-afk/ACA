"use client";
import Link from "next/link";
import { ClipboardList, FileText, ListChecks, TrendingUp } from "lucide-react";
import type { Exam, ExamAttempt } from "@/types/domain";
import { data } from "@/lib/data";
import { useAuth, useAsync } from "@/lib/auth-client";
import { PageLoading } from "@/components/ui/page-loading";
import { cn } from "@/lib/utils";
import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function MockPage() {
  const { userId } = useAuth();
  const { data: bundle, loading } = useAsync(
    () =>
      Promise.all([data.getExams(), data.getExamAttempts(userId!)]).then(
        ([exams, attempts]) => ({ exams, attempts }),
      ),
    [userId],
    !!userId,
  );

  if (loading || !bundle) return <PageLoading />;
  const { exams, attempts } = bundle;

  // Attempts grouped by exam for "best" lookup.
  const submitted = attempts.filter(
    (a) => a.scorePercent !== undefined && a.submittedAt,
  );

  return (
    <div className="mx-auto max-w-5xl">
      <PageHeader
        title="Mock exams"
        description="Sit timed papers and review your performance."
      />

      <ExamList exams={exams} attempts={submitted} />

      {submitted.length >= 2 && (
        <PerformanceOverTime exams={exams} attempts={submitted} />
      )}
    </div>
  );
}

function bestFor(attempts: ExamAttempt[], examId: string): ExamAttempt | undefined {
  const forExam = attempts.filter((a) => a.examId === examId);
  if (forExam.length === 0) return undefined;
  return forExam.reduce((best, a) =>
    (a.scorePercent ?? -1) > (best.scorePercent ?? -1) ? a : best,
  );
}

function ExamList({
  exams,
  attempts,
}: {
  exams: Exam[];
  attempts: ExamAttempt[];
}) {
  if (exams.length === 0) {
    return (
      <Card>
        <CardContent className="flex flex-col items-center gap-3 p-10 text-center">
          <ClipboardList className="size-10 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            No mock exams are available yet. Check back soon.
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {exams.map((exam) => {
        const best = bestFor(attempts, exam.id);
        const bestPassed = best?.passed;
        return (
          <Card key={exam.id} className="flex flex-col">
            <CardHeader>
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-lg">{exam.title}</CardTitle>
                <Badge variant={exam.kind === "full" ? "default" : "secondary"}>
                  {exam.kind === "full" ? "Full mock" : "Topic test"}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="flex flex-1 flex-col gap-4">
              <dl className="grid grid-cols-3 gap-3 text-sm">
                <Meta
                  icon={<FileText className="size-3.5" />}
                  label="Duration"
                  value={`${exam.durationMinutes} min`}
                />
                <Meta
                  icon={<ListChecks className="size-3.5" />}
                  label="Questions"
                  value={`${exam.questionIds.length}`}
                />
                <Meta label="Pass mark" value={`${exam.passMark}%`} />
              </dl>

              {best && best.scorePercent !== undefined && (
                <p
                  className={cn(
                    "text-sm font-medium",
                    bestPassed ? "text-success" : "text-destructive",
                  )}
                >
                  Best: {Math.round(best.scorePercent)}%{" "}
                  <span className="text-xs font-normal text-muted-foreground">
                    ({bestPassed ? "pass" : "fail"})
                  </span>
                </p>
              )}

              <Button asChild className="mt-auto w-full">
                <Link href={`/mock/${exam.id}`}>Start exam</Link>
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function Meta({
  icon,
  label,
  value,
}: {
  icon?: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div>
      <dt className="flex items-center gap-1 text-xs text-muted-foreground">
        {icon}
        {label}
      </dt>
      <dd className="mt-0.5 font-semibold tabular-nums">{value}</dd>
    </div>
  );
}

function PerformanceOverTime({
  exams,
  attempts,
}: {
  exams: Exam[];
  attempts: ExamAttempt[];
}) {
  const titleById = new Map(exams.map((e) => [e.id, e.title]));
  const sorted = [...attempts].sort(
    (a, b) =>
      new Date(b.submittedAt ?? b.startedAt).getTime() -
      new Date(a.submittedAt ?? a.startedAt).getTime(),
  );

  return (
    <section className="mt-8">
      <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold">
        <TrendingUp className="size-5 text-primary" />
        Performance over time
      </h2>
      <Card>
        <CardContent className="p-0">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b text-left text-xs text-muted-foreground">
                <th className="px-4 py-3 font-medium">Exam</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 text-right font-medium">Score</th>
                <th className="px-4 py-3 text-right font-medium">Result</th>
              </tr>
            </thead>
            <tbody>
              {sorted.map((a) => {
                const when = a.submittedAt ?? a.startedAt;
                return (
                  <tr key={a.id} className="border-b last:border-0">
                    <td className="px-4 py-3 font-medium">
                      {titleById.get(a.examId) ?? a.examId}
                    </td>
                    <td className="px-4 py-3 text-muted-foreground">
                      {new Date(when).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums">
                      {a.scorePercent !== undefined
                        ? `${Math.round(a.scorePercent)}%`
                        : "—"}
                    </td>
                    <td className="px-4 py-3 text-right">
                      <Badge variant={a.passed ? "success" : "destructive"}>
                        {a.passed ? "PASS" : "FAIL"}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </section>
  );
}

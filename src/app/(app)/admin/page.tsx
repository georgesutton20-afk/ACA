import { ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/ui/page-header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { QuestionTable } from "@/components/admin/question-table";
import { data } from "@/lib/data";
import { getCurrentUserId } from "@/lib/auth";
import type { QuestionType } from "@/types/domain";

export const metadata = { title: "Admin" };

const TYPE_LABELS: Record<QuestionType, string> = {
  mcq: "Multiple choice",
  multi: "Multi-select",
  calc: "Calculation",
  scenario: "Scenario",
  written: "Written",
};

export default async function AdminPage() {
  const userId = await getCurrentUserId();
  const [questions, tree] = await Promise.all([
    data.listAllQuestions(),
    data.getCourseTree(userId),
  ]);

  // Flatten the course tree into a {id, label} list for the topic dropdown.
  const topics = tree.flatMap((node) =>
    node.modules.flatMap((module) =>
      module.topics.map((topic) => ({
        id: topic.id,
        label: `${module.title} · ${topic.title}`,
      })),
    ),
  );

  const total = questions.length;
  const published = questions.filter((q) => q.isPublished).length;
  const byType = (Object.keys(TYPE_LABELS) as QuestionType[]).map((type) => ({
    type,
    label: TYPE_LABELS[type],
    count: questions.filter((q) => q.type === type).length,
  }));

  const stats = [
    { label: "Total questions", value: total },
    { label: "Published", value: published },
    { label: "Drafts", value: total - published },
    ...byType.map((t) => ({ label: t.label, value: t.count })),
  ];

  return (
    <div>
      <PageHeader
        title="Content management"
        description="Author and curate the question bank."
      >
        <Badge variant="secondary" className="gap-1.5">
          <ShieldCheck className="size-3.5" />
          Admin
        </Badge>
      </PageHeader>

      <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.label} className="p-4">
            <p className="text-2xl font-bold tabular-nums">{stat.value}</p>
            <p className="mt-0.5 text-xs text-muted-foreground">{stat.label}</p>
          </Card>
        ))}
      </div>

      <QuestionTable questions={questions} topics={topics} />
    </div>
  );
}

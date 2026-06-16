// Seed mock exams built from the question bank.
import type { Exam } from "@/types/domain";
import { questions, questionsForTopic } from "@/data/questions";

function pick(topicIds: string[], perTopic: number) {
  return topicIds.flatMap((t) => questionsForTopic(t).slice(0, perTopic).map((q) => q.id));
}

export const exams: Exam[] = [
  {
    id: "ex-far-topic",
    moduleId: "m-far",
    title: "FAR — Revenue & Deferred Tax (topic test)",
    kind: "topic",
    durationMinutes: 30,
    passMark: 55,
    questionIds: pick(["t-far-rev", "t-far-tax"], 4),
  },
  {
    id: "ex-mi-topic",
    moduleId: "m-mi",
    title: "Management Information — CVP (topic test)",
    kind: "topic",
    durationMinutes: 25,
    passMark: 55,
    questionIds: pick(["t-mi-cvp", "t-mi-cost"], 4),
  },
  {
    id: "ex-cert-full",
    courseId: "c-cert",
    title: "Certificate Level — Full Mock",
    kind: "full",
    durationMinutes: 90,
    passMark: 55,
    questionIds: pick(
      ["t-acc-de", "t-acc-adj", "t-ass-proc", "t-law-con", "t-mi-cvp", "t-tax-it", "t-btf-fin"],
      2,
    ),
  },
  {
    id: "ex-prof-full",
    courseId: "c-prof",
    title: "Professional Level — Mixed Mock",
    kind: "full",
    durationMinutes: 90,
    passMark: 55,
    questionIds: pick(["t-far-rev", "t-far-tax", "t-aa-plan", "t-fm-inv", "t-far-cons"], 2),
  },
];

export function examById(id: string) {
  return exams.find((e) => e.id === id);
}

// guard: ensure every exam has at least some questions even if topics are thin
exams.forEach((e) => {
  if (e.questionIds.length === 0) e.questionIds = questions.slice(0, 8).map((q) => q.id);
});

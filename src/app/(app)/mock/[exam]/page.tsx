import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { data } from "@/lib/data";
import { ExamPlayer } from "@/components/mock/exam-player";
import { exams } from "@/data/exams";

interface PageProps {
  params: Promise<{ exam: string }>;
}

// Pre-render every exam page for the static export.
export function generateStaticParams() {
  return exams.map((e) => ({ exam: e.id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { exam: examId } = await params;
  const exam = await data.getExam(examId);
  return { title: exam ? exam.title : "Mock exam" };
}

export default async function ExamPage({ params }: PageProps) {
  const { exam: examId } = await params;
  // Exam + questions are bundled content — resolved at build with no session.
  const exam = await data.getExam(examId);
  if (!exam) notFound();
  const questions = await data.getExamQuestions(examId);

  return (
    <div className="mx-auto max-w-3xl">
      <ExamPlayer exam={exam} questions={questions} />
    </div>
  );
}

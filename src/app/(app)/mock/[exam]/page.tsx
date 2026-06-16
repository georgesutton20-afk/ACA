import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { data } from "@/lib/data";
import { getCurrentUserId } from "@/lib/auth";
import { ExamPlayer } from "@/components/mock/exam-player";

interface PageProps {
  params: Promise<{ exam: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { exam: examId } = await params;
  const exam = await data.getExam(examId);
  return { title: exam ? exam.title : "Mock exam" };
}

export default async function ExamPage({ params }: PageProps) {
  const { exam: examId } = await params;
  const exam = await data.getExam(examId);
  if (!exam) notFound();

  const [questions, userId] = await Promise.all([
    data.getExamQuestions(examId),
    getCurrentUserId(),
  ]);

  return (
    <div className="mx-auto max-w-3xl">
      <ExamPlayer exam={exam} questions={questions} userId={userId} />
    </div>
  );
}

"use server";

import { revalidatePath } from "next/cache";
import { data, type SubmitExamInput } from "@/lib/data";
import type { ExamAttempt } from "@/types/domain";

export async function submitExam(input: SubmitExamInput): Promise<ExamAttempt> {
  const attempt = await data.submitExam(input);
  revalidatePath("/mock");
  revalidatePath("/dashboard");
  revalidatePath("/analytics");
  return attempt;
}

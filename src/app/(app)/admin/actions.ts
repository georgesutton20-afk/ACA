"use server";

import { revalidatePath } from "next/cache";
import { data } from "@/lib/data";
import type { Question } from "@/types/domain";

/**
 * Persist a question (insert when the id is new, otherwise replace) and
 * revalidate the surfaces that read the question bank.
 */
export async function saveQuestion(input: Question): Promise<Question> {
  const id = input.id?.trim() || `q-admin-${Date.now()}`;

  // Ensure answers carry stable ids, their parent questionId and a sortOrder.
  const answers = (input.answers ?? []).map((answer, index) => ({
    ...answer,
    id: answer.id?.trim() || `${id}-a${index + 1}`,
    questionId: id,
    sortOrder: index,
  }));

  const question: Question = {
    ...input,
    id,
    answers: answers.length > 0 ? answers : undefined,
  };

  const saved = await data.upsertQuestion(question);
  revalidatePath("/admin");
  revalidatePath("/practice");
  return saved;
}

/** Remove a question from the bank. */
export async function removeQuestion(id: string): Promise<void> {
  await data.deleteQuestion(id);
  revalidatePath("/admin");
  revalidatePath("/practice");
}

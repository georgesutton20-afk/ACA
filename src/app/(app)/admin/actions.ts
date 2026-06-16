// Static-export note: runs client-side against the in-memory provider (edits
// persist for the session, reset on reload). On a server deployment, re-add
// "use server" + revalidatePath to persist to the backend.
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

  return data.upsertQuestion(question);
}

/** Remove a question from the bank. */
export async function removeQuestion(id: string): Promise<void> {
  await data.deleteQuestion(id);
}

// Static-export note: runs client-side against the in-memory provider (no
// server on GitHub Pages). On a server deployment, re-add "use server" +
// revalidatePath to persist results to the backend.
import { data, type SubmitExamInput } from "@/lib/data";
import type { ExamAttempt } from "@/types/domain";

export async function submitExam(input: SubmitExamInput): Promise<ExamAttempt> {
  return data.submitExam(input);
}

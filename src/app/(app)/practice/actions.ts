"use server";

import { revalidatePath } from "next/cache";
import { data, type RecordAttemptInput, type RecordAttemptResult } from "@/lib/data";

export async function recordAttempt(
  input: RecordAttemptInput,
): Promise<RecordAttemptResult> {
  const result = await data.recordAttempt({ source: "practice", ...input });
  revalidatePath("/dashboard");
  revalidatePath("/analytics");
  return result;
}

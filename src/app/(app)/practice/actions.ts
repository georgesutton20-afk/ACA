// NOTE: In the static-export (GitHub Pages) build there is no server, so this
// runs client-side against the in-memory data provider — attempts persist for
// the session. On a server deployment (e.g. Vercel) you can re-add "use server"
// + revalidatePath to persist via the backend.
import { data, type RecordAttemptInput, type RecordAttemptResult } from "@/lib/data";

export async function recordAttempt(
  input: RecordAttemptInput,
): Promise<RecordAttemptResult> {
  return data.recordAttempt({ source: "practice", ...input });
}

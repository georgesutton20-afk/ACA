import "server-only";
import { supabaseEnabled } from "@/lib/supabase/config";
import { DEMO_USER_ID } from "@/data/demo";

/**
 * Resolve the current learner id on the server. When Supabase is enabled we use
 * the authenticated session; otherwise the explorable demo learner is returned
 * so the whole product works without signing in (guest/demo mode).
 */
export async function getCurrentUserId(): Promise<string> {
  if (!supabaseEnabled) return DEMO_USER_ID;
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user?.id ?? DEMO_USER_ID;
}

export async function isAuthenticated(): Promise<boolean> {
  if (!supabaseEnabled) return false;
  const { createClient } = await import("@/lib/supabase/server");
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  return !!user;
}

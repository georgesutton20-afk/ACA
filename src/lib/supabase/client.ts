"use client";
import { createBrowserClient } from "@supabase/ssr";

/** Browser Supabase client (Client Components). Safe to call when configured. */
export function createClient() {
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  );
}

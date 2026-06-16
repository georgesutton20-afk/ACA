// Provider selector + convenience re-exports.
//
// Runs on the deterministic `seedProvider` unless Supabase is configured
// (NEXT_PUBLIC_USE_SUPABASE=true + URL + anon key), in which case the
// Supabase-backed provider stores real per-user progress.
import { seedProvider } from "@/lib/data/seed";
import { supabaseProvider } from "@/lib/data/supabase";
import { supabaseEnabled } from "@/lib/supabase/config";
import type { DataProvider } from "@/lib/data/types";

export const data: DataProvider = supabaseEnabled ? supabaseProvider : seedProvider;

export const usingSupabase = supabaseEnabled;

export * from "@/lib/data/types";

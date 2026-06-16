// Provider selector + convenience re-exports.
//
// MVP runs on the deterministic `seedProvider` (no infrastructure required).
// When `NEXT_PUBLIC_USE_SUPABASE=true` and keys are present, the Supabase-backed
// provider takes over (see ./supabase.ts and docs/05-api-and-folders.md).
import { seedProvider } from "@/lib/data/seed";
import { supabaseEnabled } from "@/lib/supabase/config";
import type { DataProvider } from "@/lib/data/types";

// The supabase provider is lazily wired in phase 5; until then we fall back to
// seed so the contract is always satisfied and the app always runs.
export const data: DataProvider = seedProvider;

export const usingSupabase = supabaseEnabled;

export * from "@/lib/data/types";

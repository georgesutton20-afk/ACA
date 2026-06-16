/** Whether Supabase is configured and enabled. When false the app uses seed data. */
export const supabaseEnabled =
  process.env.NEXT_PUBLIC_USE_SUPABASE === "true" &&
  !!process.env.NEXT_PUBLIC_SUPABASE_URL &&
  !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

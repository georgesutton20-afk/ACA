import { NextResponse } from "next/server";
import { usingSupabase } from "@/lib/data";

export function GET() {
  return NextResponse.json({
    status: "ok",
    provider: usingSupabase ? "supabase" : "seed",
    time: new Date().toISOString(),
  });
}

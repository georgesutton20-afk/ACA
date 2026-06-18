"use client";
import * as React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { supabaseEnabled } from "@/lib/supabase/config";

export function AuthForm({ mode }: { mode: "login" | "signup" }) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const isSignup = mode === "signup";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const form = new FormData(e.currentTarget);
    const email = String(form.get("email"));
    const password = String(form.get("password"));
    const name = String(form.get("name") ?? "").trim();

    // Authenticate against Supabase.
    if (supabaseEnabled) {
      try {
        const { createClient } = await import("@/lib/supabase/client");
        const supabase = createClient();
        const { error } = isSignup
          ? await supabase.auth.signUp({
              email,
              password,
              options: { data: { display_name: name || email.split("@")[0] } },
            })
          : await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push("/dashboard");
        router.refresh();
        return;
      } catch (err) {
        setError(err instanceof Error ? err.message : "Authentication failed");
        setLoading(false);
        return;
      }
    }
    router.push("/dashboard");
  }

  return (
    <Card className="w-full max-w-md animate-[rise_0.4s]">
      <CardHeader>
        <CardTitle className="text-2xl">{isSignup ? "Create your account" : "Welcome back"}</CardTitle>
        <CardDescription>
          {isSignup
            ? "Start your ACA journey — pick a level and build your streak."
            : "Log in to continue your streak and study plan."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-4">
          {isSignup && (
            <div className="space-y-1.5">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" autoComplete="name" />
            </div>
          )}
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" name="password" type="password" placeholder="••••••••" required autoComplete={isSignup ? "new-password" : "current-password"} />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <Button type="submit" className="w-full" disabled={loading}>
            {loading && <Loader2 className="size-4 animate-spin" />}
            {isSignup ? "Create account" : "Log in"}
          </Button>
        </form>
        <p className="mt-4 text-center text-sm text-muted-foreground">
          {isSignup ? "Already have an account? " : "New to ACA Academy? "}
          <Link href={isSignup ? "/login" : "/signup"} className="font-medium text-primary hover:underline">
            {isSignup ? "Log in" : "Create one"}
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

"use client";
import { Loader2 } from "lucide-react";
import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { useAuth } from "@/lib/auth-client";

/** Auth-gated application shell. Renders the chrome and guards the pages. */
export function AppShell({ children }: { children: React.ReactNode }) {
  const { ready, authed, profile, level, streak, isAdmin, signOut } = useAuth();

  if (!ready || !authed) {
    // Resolving the session, or redirecting an unauthenticated visitor to /login.
    return (
      <div className="flex min-h-dvh items-center justify-center">
        <Loader2 className="size-6 animate-spin text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="flex min-h-dvh">
      <Sidebar isAdmin={isAdmin} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          displayName={profile?.displayName ?? "Learner"}
          level={level}
          streak={streak}
          onSignOut={signOut}
        />
        <main className="flex-1 px-4 pb-24 pt-6 lg:px-8 lg:pb-10">{children}</main>
        <MobileNav isAdmin={isAdmin} />
      </div>
    </div>
  );
}

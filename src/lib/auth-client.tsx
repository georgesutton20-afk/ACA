"use client";
import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type DependencyList,
} from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { supabaseEnabled } from "@/lib/supabase/config";
import { DEMO_USER_ID } from "@/data/demo";
import { data } from "@/lib/data";
import type { Profile } from "@/types/domain";

interface AuthState {
  userId: string | null;
  profile: Profile | null;
  level: number;
  streak: number;
  isAdmin: boolean;
  ready: boolean;
  authed: boolean; // true once we have a usable userId
  signOut: () => Promise<void>;
  refreshHeader: () => void;
}

const AuthContext = createContext<AuthState | null>(null);

export function useAuth(): AuthState {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used within <AuthProvider>");
  return ctx;
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [userId, setUserId] = useState<string | null>(supabaseEnabled ? null : DEMO_USER_ID);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [level, setLevel] = useState(1);
  const [streak, setStreak] = useState(0);
  const [ready, setReady] = useState(!supabaseEnabled);
  const [headerTick, setHeaderTick] = useState(0);

  // Resolve the session (Supabase mode) or fall straight through (demo mode).
  useEffect(() => {
    if (!supabaseEnabled) return;
    const supabase = createClient();
    let active = true;
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (!active) return;
      if (session?.user) setUserId(session.user.id);
      else router.replace("/login");
      setReady(true);
    });
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) setUserId(session.user.id);
      else {
        setUserId(null);
        router.replace("/login");
      }
    });
    return () => {
      active = false;
      subscription.unsubscribe();
    };
  }, [router]);

  // Load the header bits (profile, level, streak) for whoever is current.
  useEffect(() => {
    if (!userId) return;
    let active = true;
    data.getProfile(userId).then((p) => active && setProfile(p ?? null)).catch(() => {});
    data
      .getGamification(userId)
      .then((g) => {
        if (!active) return;
        setLevel(g.xp.level);
        setStreak(g.xp.currentStreak);
      })
      .catch(() => {});
    return () => {
      active = false;
    };
  }, [userId, headerTick]);

  async function signOut() {
    if (supabaseEnabled) {
      const supabase = createClient();
      await supabase.auth.signOut();
    }
    router.replace("/login");
  }

  const value: AuthState = {
    userId,
    profile,
    level,
    streak,
    isAdmin: profile?.role === "admin",
    ready,
    authed: !!userId,
    signOut,
    refreshHeader: () => setHeaderTick((t) => t + 1),
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

/**
 * Small client data-fetching helper: runs `fn` when `enabled`, exposing
 * { data, loading }. Used by the per-user pages on the static site.
 */
export function useAsync<T>(
  fn: () => Promise<T>,
  deps: DependencyList,
  enabled = true,
): { data: T | undefined; loading: boolean } {
  const [data, setData] = useState<T | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const fnRef = useRef(fn);
  fnRef.current = fn;
  useEffect(() => {
    if (!enabled) return;
    let active = true;
    setLoading(true);
    fnRef.current()
      .then((d) => {
        if (active) {
          setData(d);
          setLoading(false);
        }
      })
      .catch(() => active && setLoading(false));
    return () => {
      active = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps, enabled]);
  return { data, loading };
}

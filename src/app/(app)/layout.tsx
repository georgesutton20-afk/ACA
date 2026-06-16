import { Sidebar } from "@/components/layout/sidebar";
import { Topbar } from "@/components/layout/topbar";
import { MobileNav } from "@/components/layout/mobile-nav";
import { data } from "@/lib/data";
import { getCurrentUserId } from "@/lib/auth";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const userId = await getCurrentUserId();
  const [profile, gamification] = await Promise.all([
    data.getProfile(userId),
    data.getGamification(userId),
  ]);
  const isAdmin = profile?.role === "admin";

  return (
    <div className="flex min-h-dvh">
      <Sidebar isAdmin={isAdmin} />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar
          displayName={profile?.displayName ?? "Learner"}
          level={gamification.xp.level}
          streak={gamification.xp.currentStreak}
        />
        <main className="flex-1 px-4 pb-24 pt-6 lg:px-8 lg:pb-10">{children}</main>
        <MobileNav isAdmin={isAdmin} />
      </div>
    </div>
  );
}

"use client";
import { PageHeader } from "@/components/ui/page-header";
import { SettingsForm } from "@/components/settings/settings-form";
import { data } from "@/lib/data";
import { useAuth, useAsync } from "@/lib/auth-client";
import { PageLoading } from "@/components/ui/page-loading";

export default function SettingsPage() {
  const { userId } = useAuth();
  const { data: profile, loading } = useAsync(
    () => data.getProfile(userId!),
    [userId],
    !!userId,
  );

  if (loading || !profile) return <PageLoading />;

  return (
    <div>
      <PageHeader title="Settings" description="Manage your profile, appearance and account." />
      <SettingsForm profile={profile} />
    </div>
  );
}

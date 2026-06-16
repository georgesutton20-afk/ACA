import { PageHeader } from "@/components/ui/page-header";
import { SettingsForm } from "@/components/settings/settings-form";
import { data } from "@/lib/data";
import { getCurrentUserId } from "@/lib/auth";

export const metadata = { title: "Settings" };

export default async function SettingsPage() {
  const userId = await getCurrentUserId();
  const profile = await data.getProfile(userId);

  return (
    <div>
      <PageHeader title="Settings" description="Manage your profile, appearance and account." />
      <SettingsForm profile={profile} />
    </div>
  );
}

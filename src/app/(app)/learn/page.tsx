"use client";
import { PageHeader } from "@/components/ui/page-header";
import { LearnMap } from "@/components/learn/learn-map";
import { data } from "@/lib/data";
import { useAuth, useAsync } from "@/lib/auth-client";
import { PageLoading } from "@/components/ui/page-loading";

export default function LearnPage() {
  const { userId } = useAuth();
  const { data: tree, loading } = useAsync(
    () => data.getCourseTree(userId!),
    [userId],
    !!userId,
  );

  if (loading || !tree) return <PageLoading />;

  return (
    <div>
      <PageHeader
        title="Learning paths"
        description="Follow the path through every ACA module. Master each topic to unlock the next."
      />
      <LearnMap tree={tree} />
    </div>
  );
}

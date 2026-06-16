import type { Metadata } from "next";
import { PageHeader } from "@/components/ui/page-header";
import { LearnMap } from "@/components/learn/learn-map";
import { data } from "@/lib/data";
import { getCurrentUserId } from "@/lib/auth";

export const metadata: Metadata = { title: "Learn" };

export default async function LearnPage() {
  const userId = await getCurrentUserId();
  const tree = await data.getCourseTree(userId);

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

"use client";

import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export interface TopicOption {
  id: string;
  title: string;
  moduleTitle: string;
}

export function TopicPicker({
  topics,
  value,
}: {
  topics: TopicOption[];
  value?: string;
}) {
  const router = useRouter();

  return (
    <div className="mb-6 flex flex-col gap-2 sm:max-w-sm">
      <label className="text-sm font-medium text-muted-foreground">
        Focus on a specific topic
      </label>
      <Select
        value={value}
        onValueChange={(id) => router.push("/practice?topic=" + id)}
      >
        <SelectTrigger>
          <SelectValue placeholder="Pick a topic to drill…" />
        </SelectTrigger>
        <SelectContent>
          {topics.map((t) => (
            <SelectItem key={t.id} value={t.id}>
              {t.moduleTitle} · {t.title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

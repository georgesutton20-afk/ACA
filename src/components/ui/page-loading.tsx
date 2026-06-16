import { Loader2 } from "lucide-react";

/** Centered spinner shown while a client page fetches its per-user data. */
export function PageLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Loader2 className="size-6 animate-spin text-muted-foreground" />
    </div>
  );
}

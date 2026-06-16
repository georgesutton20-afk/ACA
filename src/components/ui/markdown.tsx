import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * Tiny, dependency-free markdown renderer for question stems, explanations and
 * worked solutions. Supports paragraphs, line breaks, **bold**, `code`, and
 * preserves whitespace in worked solutions. Input is trusted seed content.
 */
export function Markdown({ children, className }: { children?: string; className?: string }) {
  if (!children) return null;
  const blocks = children.split(/\n{2,}/);
  return (
    <div className={cn("space-y-2 text-sm leading-relaxed", className)}>
      {blocks.map((block, i) => (
        <p key={i} className="whitespace-pre-wrap">
          {renderInline(block)}
        </p>
      ))}
    </div>
  );
}

function renderInline(text: string): React.ReactNode[] {
  // split on **bold** and `code`
  const tokens = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return tokens.map((t, i) => {
    if (t.startsWith("**") && t.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold">
          {t.slice(2, -2)}
        </strong>
      );
    }
    if (t.startsWith("`") && t.endsWith("`")) {
      return (
        <code key={i} className="rounded bg-muted px-1 py-0.5 font-mono text-[0.85em]">
          {t.slice(1, -1)}
        </code>
      );
    }
    return <React.Fragment key={i}>{t}</React.Fragment>;
  });
}

// XP, levels and streaks. See docs/04-analytics-models.md §4–5.
import type { Difficulty } from "@/types/domain";

const XP_BASE: Record<Difficulty, number> = { easy: 8, medium: 12, hard: 18 };

/** XP awarded for a correct answer, scaled by difficulty and an optional combo. */
export function xpForCorrect(difficulty: Difficulty, combo = 1) {
  const mult = Math.min(2, 1 + (combo - 1) * 0.1); // up to +100% at combo 11
  return Math.round(XP_BASE[difficulty] * mult);
}

/** Gentle quadratic curve: each level costs progressively more XP. */
export function levelForXp(totalXp: number) {
  return Math.floor((Math.sqrt(1 + (8 * totalXp) / 100) - 1) / 2) + 1;
}

/** Total XP required to reach the start of a given level. */
export function xpForLevel(level: number) {
  const n = level - 1;
  return Math.round((100 * (2 * n * n + n)) / 2 / 1);
}

export function progressToNextLevel(totalXp: number) {
  const level = levelForXp(totalXp);
  const floor = xpForLevel(level);
  const next = xpForLevel(level + 1);
  const into = totalXp - floor;
  const span = Math.max(1, next - floor);
  return { level, floor, next, into, span, ratio: into / span };
}

/** Pure streak transition given the last active day and "today". */
export function nextStreak(
  current: number,
  longest: number,
  lastActivityDate: string | undefined,
  today: string,
) {
  if (lastActivityDate === today)
    return { current, longest, changed: false };
  if (!lastActivityDate) return { current: 1, longest: Math.max(longest, 1), changed: true };
  const prev = new Date(lastActivityDate + "T00:00:00");
  const now = new Date(today + "T00:00:00");
  const gap = Math.round((now.getTime() - prev.getTime()) / 86_400_000);
  const value = gap === 1 ? current + 1 : 1;
  return { current: value, longest: Math.max(longest, value), changed: true };
}

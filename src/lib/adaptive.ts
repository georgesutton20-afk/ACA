// Adaptive difficulty (Elo) + recommendations. See docs/04-analytics-models.md §6–7.
import type { Question, TopicProgress } from "@/types/domain";

const K = 24;
const DEFAULT_RATING = 1200;

export function expectedScore(userRating: number, itemRating: number) {
  return 1 / (1 + Math.pow(10, (itemRating - userRating) / 400));
}

/** Returns updated [userRating, itemRating] after an attempt scored 0..1. */
export function updateRatings(userRating: number, itemRating: number, score: number) {
  const exp = expectedScore(userRating, itemRating);
  return [userRating + K * (score - exp), itemRating - K * (score - exp)] as const;
}

/**
 * Rank candidate questions for a learner in one topic: prefer unseen items whose
 * difficulty sits just above the learner's skill (stretch), penalise recently seen.
 */
export function recommendQuestions(
  candidates: Question[],
  progress: TopicProgress | undefined,
  seenIds: Set<string>,
  limit = 10,
) {
  const skill = progress?.skillRating ?? DEFAULT_RATING;
  const target = skill + 40; // slight stretch
  return [...candidates]
    .filter((q) => q.isPublished)
    .map((q) => {
      const distance = Math.abs(q.rating - target);
      const seenPenalty = seenIds.has(q.id) ? 600 : 0;
      return { q, cost: distance + seenPenalty };
    })
    .sort((a, b) => a.cost - b.cost)
    .slice(0, limit)
    .map((x) => x.q);
}

/** Greedy study plan across remaining days, weighted toward weak topics. */
export function buildStudyPlan(
  weak: { topicId: string; mastery: number }[],
  daysUntilExam: number,
  dailyGoalQuestions = 10,
) {
  const days = Math.max(1, Math.min(daysUntilExam, 28));
  const weights = weak.map((w) => ({ ...w, w: 1 - w.mastery }));
  const totalW = weights.reduce((s, x) => s + x.w, 0) || 1;
  const plan: { day: number; topicId: string; targetQuestions: number }[] = [];
  for (let d = 1; d <= days; d++) {
    for (const t of weights) {
      const share = Math.round((t.w / totalW) * dailyGoalQuestions);
      if (share > 0) plan.push({ day: d, topicId: t.topicId, targetQuestions: share });
    }
  }
  return plan;
}

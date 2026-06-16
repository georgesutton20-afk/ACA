// Mastery, readiness and prediction models. See docs/04-analytics-models.md §1–3.
import { clamp } from "@/lib/utils";
import type { Attempt, ExamAttempt, ReadinessBucket, TopicProgress } from "@/types/domain";

const TARGET_ATTEMPTS = 12;
const HALF_LIFE_DAYS = 14;

function decay(days: number) {
  return Math.pow(0.5, days / HALF_LIFE_DAYS);
}

export function topicMastery(p: TopicProgress, now = new Date()): number {
  const accuracy = p.correctCount / Math.max(p.attemptsCount, 1);
  const volume = Math.min(p.attemptsCount / TARGET_ATTEMPTS, 1);
  const days = p.lastPracticedAt
    ? Math.max(0, (now.getTime() - new Date(p.lastPracticedAt).getTime()) / 86_400_000)
    : 999;
  const recency = decay(days);
  return clamp(0.6 * accuracy + 0.25 * volume + 0.15 * recency, 0, 1);
}

export function isMastered(mastery: number) {
  return mastery >= 0.8;
}
export function needsImprovement(p: TopicProgress, mastery: number) {
  return mastery < 0.5 && p.attemptsCount >= 3;
}

export function readinessScore(
  progress: TopicProgress[],
  topicsTotal: number,
  latestMockPercent?: number,
): number {
  const practiced = progress.filter((p) => p.attemptsCount > 0);
  const coverage = topicsTotal ? practiced.length / topicsTotal : 0;
  const depth =
    practiced.length > 0
      ? practiced.reduce((s, p) => s + topicMastery(p), 0) / practiced.length
      : 0;
  const mock = latestMockPercent != null ? latestMockPercent / 100 : 0.5;
  return Math.round(100 * (0.45 * depth + 0.3 * coverage + 0.25 * mock));
}

export function readinessBucket(score: number): ReadinessBucket {
  if (score >= 85) return { label: "Exam ready", tone: "emerald" };
  if (score >= 70) return { label: "Exam ready soon", tone: "primary" };
  if (score >= 40) return { label: "On track", tone: "amber" };
  return { label: "Building", tone: "rose" };
}

/** Recency-weighted recent accuracy from raw attempts (most recent count more). */
export function recentAccuracy(attempts: Attempt[], window = 50): number {
  const recent = [...attempts]
    .sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt))
    .slice(0, window);
  if (recent.length === 0) return 0;
  let wSum = 0;
  let sum = 0;
  recent.forEach((a, i) => {
    const w = Math.pow(0.97, i);
    wSum += w;
    sum += w * a.score;
  });
  return sum / wSum;
}

export function predictedScore(attempts: Attempt[], mocks: ExamAttempt[]): number {
  const acc = recentAccuracy(attempts);
  const mockScores = mocks
    .filter((m) => m.scorePercent != null)
    .map((m) => m.scorePercent as number);
  const meanMock = mockScores.length
    ? mockScores.reduce((s, x) => s + x, 0) / mockScores.length
    : acc * 100;
  const raw = 0.5 * acc * 100 + 0.5 * meanMock;
  const n = attempts.length + mockScores.length * 5;
  const shrink = 1 - Math.min(n, 30) / 30; // small samples pulled toward pass mark
  return Math.round(clamp(raw * (1 - shrink) + 55 * shrink, 0, 100));
}

export function avgTimePerQuestionMs(attempts: Attempt[]): number {
  if (attempts.length === 0) return 0;
  return Math.round(attempts.reduce((s, a) => s + a.timeMs, 0) / attempts.length);
}

// Deterministic demo learner so the app is fully explorable without a backend.
import type {
  Attempt,
  DailyActivity,
  ExamAttempt,
  Profile,
  TopicProgress,
  UserChallenge,
  UserXp,
} from "@/types/domain";
import { topics } from "@/data/curriculum";
import { questionsForTopic } from "@/data/questions";
import { levelForXp } from "@/lib/gamification";
import { isoDate } from "@/lib/utils";

export const DEMO_USER_ID = "demo-user";

export const demoProfile: Profile = {
  id: DEMO_USER_ID,
  displayName: "Tom Hardy",
  role: "learner",
  targetLevel: "professional",
  examDate: new Date(Date.now() + 26 * 86_400_000).toISOString().slice(0, 10),
  dailyGoalXp: 50,
  timezone: "Europe/London",
};

// Hand-tuned mastery profile so strengths/weaknesses are visible in analytics.
const masteryByTopic: Record<string, number> = {
  "t-acc-de": 0.92,
  "t-acc-adj": 0.85,
  "t-acc-fs": 0.7,
  "t-mi-cvp": 0.78,
  "t-mi-cost": 0.66,
  "t-far-rev": 0.55,
  "t-far-tax": 0.41, // weak
  "t-far-cons": 0.47, // weak
  "t-aa-plan": 0.62,
  "t-fm-inv": 0.73,
  "t-tax-it": 0.68,
  "t-law-con": 0.8,
};

export const demoProgress: TopicProgress[] = topics.map((t, idx) => {
  const mastery = masteryByTopic[t.id];
  const touched = mastery != null;
  const attemptsCount = touched ? 6 + (idx % 9) : 0;
  const correctCount = touched ? Math.round(attemptsCount * (mastery ?? 0.5)) : 0;
  return {
    userId: DEMO_USER_ID,
    topicId: t.id,
    mastery: mastery ?? 0,
    skillRating: 1100 + Math.round((mastery ?? 0.4) * 400),
    attemptsCount,
    correctCount,
    lastPracticedAt: touched
      ? new Date(Date.now() - (idx % 6) * 86_400_000).toISOString()
      : undefined,
  };
});

// Build a few weeks of attempts feeding the trend charts.
export const demoAttempts: Attempt[] = (() => {
  const out: Attempt[] = [];
  let seq = 0;
  const touched = demoProgress.filter((p) => p.attemptsCount > 0);
  for (let day = 27; day >= 0; day--) {
    const date = new Date(Date.now() - day * 86_400_000);
    // skip a couple of days to make the streak realistic
    if (day === 9 || day === 17) continue;
    const perDay = 4 + ((27 - day) % 5);
    for (let i = 0; i < perDay; i++) {
      const p = touched[(seq + day) % touched.length];
      const qs = questionsForTopic(p.topicId);
      if (qs.length === 0) continue;
      const q = qs[(seq + i) % qs.length];
      const correct = ((seq * 7 + i * 13 + day) % 100) / 100 < p.mastery;
      out.push({
        id: `att-${seq}`,
        userId: DEMO_USER_ID,
        questionId: q.id,
        topicId: p.topicId,
        source: "practice",
        isCorrect: correct,
        score: correct ? 1 : 0,
        timeMs: 30_000 + ((seq * 1000) % 60_000),
        createdAt: date.toISOString(),
      });
      seq++;
    }
  }
  return out;
})();

export const demoMockAttempts: ExamAttempt[] = [
  {
    id: "ma-1",
    userId: DEMO_USER_ID,
    examId: "ex-far-topic",
    startedAt: new Date(Date.now() - 20 * 86_400_000).toISOString(),
    submittedAt: new Date(Date.now() - 20 * 86_400_000 + 1_500_000).toISOString(),
    scorePercent: 52,
    passed: false,
    durationMs: 1_500_000,
  },
  {
    id: "ma-2",
    userId: DEMO_USER_ID,
    examId: "ex-mi-topic",
    startedAt: new Date(Date.now() - 12 * 86_400_000).toISOString(),
    submittedAt: new Date(Date.now() - 12 * 86_400_000 + 1_300_000).toISOString(),
    scorePercent: 64,
    passed: true,
    durationMs: 1_300_000,
  },
  {
    id: "ma-3",
    userId: DEMO_USER_ID,
    examId: "ex-far-topic",
    startedAt: new Date(Date.now() - 4 * 86_400_000).toISOString(),
    submittedAt: new Date(Date.now() - 4 * 86_400_000 + 1_400_000).toISOString(),
    scorePercent: 71,
    passed: true,
    durationMs: 1_400_000,
  },
];

export const demoDaily: DailyActivity[] = (() => {
  const byDay = new Map<string, DailyActivity>();
  for (const a of demoAttempts) {
    const day = a.createdAt.slice(0, 10);
    const cur =
      byDay.get(day) ?? { userId: DEMO_USER_ID, day, xp: 0, questions: 0, minutes: 0 };
    cur.questions += 1;
    cur.xp += a.isCorrect ? 12 : 3;
    cur.minutes += a.timeMs / 60_000;
    byDay.set(day, cur);
  }
  return [...byDay.values()].sort((a, b) => a.day.localeCompare(b.day));
})();

const totalXp = demoDaily.reduce((s, d) => s + d.xp, 0) + 240;

export const demoXp: UserXp = {
  userId: DEMO_USER_ID,
  totalXp,
  level: levelForXp(totalXp),
  currentStreak: 7,
  longestStreak: 14,
  lastActivityDate: isoDate(),
  freezes: 1,
};

export const demoUserAchievements: { achievementId: string; earnedAt: string }[] = [
  { achievementId: "ach-first", earnedAt: new Date(Date.now() - 27 * 86_400_000).toISOString() },
  { achievementId: "ach-streak3", earnedAt: new Date(Date.now() - 24 * 86_400_000).toISOString() },
  { achievementId: "ach-streak7", earnedAt: new Date(Date.now() - 3 * 86_400_000).toISOString() },
  { achievementId: "ach-100q", earnedAt: new Date(Date.now() - 6 * 86_400_000).toISOString() },
  { achievementId: "ach-mock", earnedAt: new Date(Date.now() - 20 * 86_400_000).toISOString() },
  { achievementId: "ach-mockpass", earnedAt: new Date(Date.now() - 12 * 86_400_000).toISOString() },
];

export const demoUserChallenges: UserChallenge[] = [
  { challengeId: "ch-daily-1", progress: 7 },
  { challengeId: "ch-daily-2", progress: 4 },
  { challengeId: "ch-weekly-1", progress: 220 },
  { challengeId: "ch-weekly-2", progress: 48 },
];

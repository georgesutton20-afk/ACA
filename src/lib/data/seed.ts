// In-memory data provider. Powers the MVP/demo/CI with zero infrastructure.
// Mutations persist for the life of the server process (fine for demo/dev).
import type { DataProvider, CourseTree } from "@/lib/data/types";
import type { Attempt, ExamAttempt, Question, TopicProgress } from "@/types/domain";
import { courses, modules, topics, objectivesForTopic } from "@/data/curriculum";
import { questions as allQuestions, questionById } from "@/data/questions";
import { exams, examById } from "@/data/exams";
import { achievements, challenges } from "@/data/gamification";
import {
  DEMO_USER_ID,
  demoProfile,
  demoProgress,
  demoAttempts,
  demoMockAttempts,
  demoXp,
  demoUserAchievements,
  demoUserChallenges,
} from "@/data/demo";
import {
  isMastered,
  needsImprovement,
  predictedScore,
  readinessBucket,
  readinessScore,
  topicMastery,
  recentAccuracy,
  avgTimePerQuestionMs,
} from "@/lib/analytics";
import { recommendQuestions, updateRatings } from "@/lib/adaptive";
import { levelForXp, nextStreak, xpForCorrect } from "@/lib/gamification";
import { daysBetween, isoDate } from "@/lib/utils";

// ── mutable store (seeded with the demo learner) ───────────────────────────
const questionStore: Question[] = [...allQuestions];
const attempts: Attempt[] = [...demoAttempts];
const progress: TopicProgress[] = demoProgress.map((p) => ({ ...p }));
const examAttempts: ExamAttempt[] = [...demoMockAttempts];
const xpStore = { ...demoXp };

function progressFor(userId: string, topicId: string): TopicProgress {
  let p = progress.find((x) => x.userId === userId && x.topicId === topicId);
  if (!p) {
    p = { userId, topicId, mastery: 0, skillRating: 1200, attemptsCount: 0, correctCount: 0 };
    progress.push(p);
  }
  return p;
}

export const seedProvider: DataProvider = {
  async getCourses() {
    return [...courses].sort((a, b) => a.sortOrder - b.sortOrder);
  },

  async getCourseTree(userId, level) {
    const cs = courses
      .filter((c) => !level || c.level === level)
      .sort((a, b) => a.sortOrder - b.sortOrder);
    return cs.map((course) => ({
      course,
      modules: modules
        .filter((m) => m.courseId === course.id)
        .sort((a, b) => a.sortOrder - b.sortOrder)
        .map((m) => ({
          ...m,
          topics: topics
            .filter((t) => t.moduleId === m.id)
            .sort((a, b) => a.sortOrder - b.sortOrder)
            .map((t) => ({
              ...t,
              objectives: objectivesForTopic(t.id),
              progress: progress.find((p) => p.userId === userId && p.topicId === t.id),
            })),
        })),
    })) satisfies CourseTree[];
  },

  async getTopic(topicId) {
    const t = topics.find((x) => x.id === topicId);
    return t ? { ...t, objectives: objectivesForTopic(t.id) } : undefined;
  },

  async getQuestionsForTopic(topicId) {
    return questionStore.filter((q) => q.topicId === topicId && q.isPublished);
  },

  async getRecommended(userId, topicId, limit = 10) {
    const seen = new Set(attempts.filter((a) => a.userId === userId).map((a) => a.questionId));
    if (topicId) {
      return recommendQuestions(
        questionStore.filter((q) => q.topicId === topicId),
        progress.find((p) => p.userId === userId && p.topicId === topicId),
        seen,
        limit,
      );
    }
    // across the weakest touched topics
    const weak = progress
      .filter((p) => p.userId === userId && p.attemptsCount > 0)
      .sort((a, b) => topicMastery(a) - topicMastery(b))
      .slice(0, 4);
    const pool = weak.flatMap((p) =>
      recommendQuestions(
        questionStore.filter((q) => q.topicId === p.topicId),
        p,
        seen,
        Math.ceil(limit / weak.length),
      ),
    );
    return pool.slice(0, limit);
  },

  async getProgress(userId) {
    return progress.filter((p) => p.userId === userId);
  },

  async getDashboard(userId) {
    const profile = userId === DEMO_USER_ID ? demoProfile : { ...demoProfile, id: userId };
    const userProgress = progress.filter((p) => p.userId === userId);
    const topicsTotal = topics.length;
    const masteredList = userProgress.filter((p) => isMastered(topicMastery(p)));
    const latestMock = [...examAttempts]
      .filter((e) => e.userId === userId && e.scorePercent != null)
      .sort((a, b) => +new Date(b.startedAt) - +new Date(a.startedAt))[0];
    const readiness = readinessScore(userProgress, topicsTotal, latestMock?.scorePercent);
    const overall =
      Math.round(
        (userProgress.reduce((s, p) => s + topicMastery(p), 0) / Math.max(topicsTotal, 1)) * 100,
      );
    const weak = userProgress
      .filter((p) => needsImprovement(p, topicMastery(p)))
      .map((p) => ({ topic: topics.find((t) => t.id === p.topicId)!, mastery: topicMastery(p) }))
      .filter((w) => w.topic)
      .sort((a, b) => a.mastery - b.mastery)
      .slice(0, 4);

    const today = isoDate();
    const weekly = buildWeekly(userId);
    const todayXp = weekly.find((d) => d.day === today)?.xp ?? 0;

    const upcoming = profile.examDate
      ? [
          {
            title: `${capitalize(profile.targetLevel ?? "")} exam`,
            date: profile.examDate,
            daysAway: daysBetween(new Date(), new Date(profile.examDate)),
          },
        ]
      : [];

    return {
      profile,
      xp: { ...xpStore, userId },
      overallProgress: overall,
      readiness,
      readinessBucket: readinessBucket(readiness),
      predictedScore: predictedScore(
        attempts.filter((a) => a.userId === userId),
        examAttempts.filter((e) => e.userId === userId),
      ),
      topicsMastered: masteredList.length,
      topicsTotal,
      weakTopics: weak,
      upcomingExams: upcoming,
      dailyGoalXp: profile.dailyGoalXp,
      todayXp,
      weekly,
    };
  },

  async getAnalytics(userId) {
    const userProgress = progress.filter((p) => p.userId === userId);
    const userAttempts = attempts.filter((a) => a.userId === userId);
    const byTopic = userProgress
      .filter((p) => p.attemptsCount > 0)
      .map((p) => {
        const ta = userAttempts.filter((a) => a.topicId === p.topicId);
        return {
          topic: topics.find((t) => t.id === p.topicId)!,
          mastery: topicMastery(p),
          accuracy: p.correctCount / Math.max(p.attemptsCount, 1),
          attempts: p.attemptsCount,
          avgTimeMs: avgTimePerQuestionMs(ta),
        };
      })
      .filter((x) => x.topic)
      .sort((a, b) => b.mastery - a.mastery);

    const mockTrend = [...examAttempts]
      .filter((e) => e.userId === userId && e.scorePercent != null)
      .sort((a, b) => +new Date(a.startedAt) - +new Date(b.startedAt))
      .map((e, i) => ({ label: `Mock ${i + 1}`, score: Math.round(e.scorePercent!) }));

    const latestMock = mockTrend.at(-1)?.score;
    return {
      byTopic,
      mockTrend,
      predictedScore: predictedScore(userAttempts, examAttempts.filter((e) => e.userId === userId)),
      readiness: readinessScore(userProgress, topics.length, latestMock),
      avgTimeMs: avgTimePerQuestionMs(userAttempts),
      accuracy: recentAccuracy(userAttempts),
      totalAttempts: userAttempts.length,
    };
  },

  async recordAttempt(input) {
    const p = progressFor(input.userId, input.topicId);
    const q = questionById(input.questionId);
    const [userR, itemR] = updateRatings(p.skillRating, q?.rating ?? 1200, input.score);
    p.skillRating = userR;
    if (q) q.rating = itemR;
    p.attemptsCount += 1;
    if (input.isCorrect) p.correctCount += 1;
    p.lastPracticedAt = new Date().toISOString();
    p.mastery = topicMastery(p);

    attempts.push({
      id: `att-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      userId: input.userId,
      questionId: input.questionId,
      topicId: input.topicId,
      source: input.source ?? "practice",
      isCorrect: input.isCorrect,
      score: input.score,
      selectedAnswerIds: input.selectedAnswerIds,
      numericResponse: input.numericResponse,
      timeMs: input.timeMs,
      createdAt: new Date().toISOString(),
    });

    const xpAwarded = input.isCorrect ? xpForCorrect(input.difficulty, input.combo ?? 1) : 2;
    const before = xpStore.level;
    xpStore.totalXp += xpAwarded;
    xpStore.level = levelForXp(xpStore.totalXp);
    const today = isoDate();
    const s = nextStreak(xpStore.currentStreak, xpStore.longestStreak, xpStore.lastActivityDate, today);
    xpStore.currentStreak = s.current;
    xpStore.longestStreak = s.longest;
    xpStore.lastActivityDate = today;

    return {
      xpAwarded,
      totalXp: xpStore.totalXp,
      level: xpStore.level,
      leveledUp: xpStore.level > before,
      streak: xpStore.currentStreak,
    };
  },

  async getExams() {
    return [...exams];
  },
  async getExam(examId) {
    return examById(examId);
  },
  async getExamQuestions(examId) {
    const e = examById(examId);
    if (!e) return [];
    return e.questionIds.map((id) => questionById(id)).filter((q): q is Question => !!q);
  },

  async submitExam(input) {
    const exam = examById(input.examId);
    const totalMarks = input.answers.length || 1;
    const earned = input.answers.reduce((s, a) => s + a.score, 0);
    const scorePercent = Math.round((earned / totalMarks) * 100);
    for (const a of input.answers) {
      await this.recordAttempt({ ...a, userId: input.userId, source: "mock" });
    }
    const attempt: ExamAttempt = {
      id: `ma-${Date.now()}`,
      userId: input.userId,
      examId: input.examId,
      startedAt: new Date(Date.now() - input.durationMs).toISOString(),
      submittedAt: new Date().toISOString(),
      scorePercent,
      passed: scorePercent >= (exam?.passMark ?? 55),
      durationMs: input.durationMs,
    };
    examAttempts.push(attempt);
    return attempt;
  },

  async getExamAttempts(userId) {
    return examAttempts.filter((e) => e.userId === userId);
  },

  async getLeaderboard() {
    // demo cohort + the current learner
    const cohort = [
      { name: "Aisha K.", xp: 3120, lvl: 8, streak: 21 },
      { name: "Tom Hardy", xp: xpStore.totalXp, lvl: xpStore.level, streak: xpStore.currentStreak },
      { name: "Marcus L.", xp: 2740, lvl: 7, streak: 5 },
      { name: "Sofia R.", xp: 4010, lvl: 9, streak: 33 },
      { name: "Dan P.", xp: 1980, lvl: 6, streak: 9 },
      { name: "Wei Z.", xp: 2510, lvl: 7, streak: 12 },
      { name: "Grace O.", xp: 1490, lvl: 5, streak: 3 },
      { name: "Liam B.", xp: 880, lvl: 4, streak: 2 },
    ];
    return cohort
      .sort((a, b) => b.xp - a.xp)
      .map((c, i) => ({
        userId: c.name,
        displayName: c.name,
        totalXp: c.xp,
        level: c.lvl,
        currentStreak: c.streak,
        rank: i + 1,
      }));
  },

  async getGamification(userId) {
    return {
      xp: { ...xpStore, userId },
      achievements,
      earned: demoUserAchievements,
      challenges,
      userChallenges: demoUserChallenges,
    };
  },

  async getProfile(userId) {
    return userId === DEMO_USER_ID ? demoProfile : { ...demoProfile, id: userId };
  },

  async listAllQuestions() {
    return [...questionStore];
  },
  async upsertQuestion(q) {
    const i = questionStore.findIndex((x) => x.id === q.id);
    if (i >= 0) questionStore[i] = q;
    else questionStore.unshift(q);
    return q;
  },
  async deleteQuestion(id) {
    const i = questionStore.findIndex((x) => x.id === id);
    if (i >= 0) questionStore.splice(i, 1);
  },
};

function buildWeekly(userId: string) {
  const days: { userId: string; day: string; xp: number; questions: number; minutes: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const d = new Date(Date.now() - i * 86_400_000);
    const day = isoDate(d);
    const dayAttempts = attempts.filter((a) => a.userId === userId && a.createdAt.slice(0, 10) === day);
    days.push({
      userId,
      day,
      questions: dayAttempts.length,
      xp: dayAttempts.reduce((s, a) => s + (a.isCorrect ? 12 : 3), 0),
      minutes: dayAttempts.reduce((s, a) => s + a.timeMs / 60_000, 0),
    });
  }
  return days;
}

function capitalize(s: string) {
  return s ? s[0].toUpperCase() + s.slice(1) : s;
}

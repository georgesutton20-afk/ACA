// Supabase-backed data provider (client-side).
//
// Content (courses/topics/questions/exams/achievement+challenge definitions)
// is served from the bundled seed data — it is static and identical for every
// user. Only PER-USER state (attempts, progress, xp, streaks, exam attempts,
// earned achievements) is read from / written to Supabase, scoped by the
// authenticated user via row-level security.
import { createBrowserClient } from "@supabase/ssr";
import type { DataProvider, CourseTree } from "@/lib/data/types";
import type {
  Attempt,
  ExamAttempt,
  Profile,
  TopicProgress,
  UserAchievement,
  UserChallenge,
  UserXp,
} from "@/types/domain";
import { courses, modules, topics, objectivesForTopic } from "@/data/curriculum";
import { questions as allQuestions, questionById } from "@/data/questions";
import { exams, examById } from "@/data/exams";
import { achievements, challenges } from "@/data/gamification";
import { seedProvider } from "@/lib/data/seed";
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

// ── client (browser singleton; never instantiated during the static build) ──
let _client: ReturnType<typeof createBrowserClient> | null = null;
function sb() {
  if (!_client) {
    _client = createBrowserClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    );
  }
  return _client;
}

// ── row → domain mappers ─────────────────────────────────────────────────────
type Row = Record<string, unknown>;
const n = (v: unknown, d = 0) => (v == null ? d : Number(v));

function mapProgress(r: Row): TopicProgress {
  return {
    userId: r.user_id as string,
    topicId: r.topic_id as string,
    mastery: n(r.mastery),
    skillRating: n(r.skill_rating, 1200),
    attemptsCount: n(r.attempts_count),
    correctCount: n(r.correct_count),
    lastPracticedAt: (r.last_practiced_at as string) ?? undefined,
  };
}
function mapAttempt(r: Row): Attempt {
  return {
    id: r.id as string,
    userId: r.user_id as string,
    questionId: r.question_id as string,
    topicId: r.topic_id as string,
    source: (r.source as Attempt["source"]) ?? "practice",
    examAttemptId: (r.exam_attempt_id as string) ?? undefined,
    isCorrect: !!r.is_correct,
    score: n(r.score),
    selectedAnswerIds: (r.selected_answer_ids as string[]) ?? undefined,
    numericResponse: r.numeric_response == null ? undefined : n(r.numeric_response),
    timeMs: n(r.time_ms),
    createdAt: r.created_at as string,
  };
}
function mapExamAttempt(r: Row): ExamAttempt {
  return {
    id: r.id as string,
    userId: r.user_id as string,
    examId: r.exam_id as string,
    startedAt: r.started_at as string,
    submittedAt: (r.submitted_at as string) ?? undefined,
    scorePercent: r.score_percent == null ? undefined : n(r.score_percent),
    passed: r.passed == null ? undefined : !!r.passed,
    durationMs: r.duration_ms == null ? undefined : n(r.duration_ms),
  };
}
function mapXp(r: Row | null, userId: string): UserXp {
  return {
    userId,
    totalXp: n(r?.total_xp),
    level: n(r?.level, 1),
    currentStreak: n(r?.current_streak),
    longestStreak: n(r?.longest_streak),
    lastActivityDate: (r?.last_activity_date as string) ?? undefined,
    freezes: n(r?.freezes),
  };
}
function mapProfile(r: Row, userId: string): Profile {
  return {
    id: userId,
    displayName: (r.display_name as string) ?? "Learner",
    avatarUrl: (r.avatar_url as string) ?? undefined,
    role: (r.role as Profile["role"]) ?? "learner",
    targetLevel: (r.target_level as Profile["targetLevel"]) ?? undefined,
    examDate: (r.exam_date as string) ?? undefined,
    dailyGoalXp: n(r.daily_goal_xp, 50),
    timezone: (r.timezone as string) ?? undefined,
  };
}

// ── per-user fetch helpers ───────────────────────────────────────────────────
async function fetchProgress(userId: string): Promise<TopicProgress[]> {
  const { data } = await sb().from("progress").select("*").eq("user_id", userId);
  return (data ?? []).map(mapProgress);
}
async function fetchAttempts(userId: string): Promise<Attempt[]> {
  const { data } = await sb()
    .from("attempts")
    .select("*")
    .eq("user_id", userId)
    .order("created_at", { ascending: true });
  return (data ?? []).map(mapAttempt);
}
async function fetchExamAttempts(userId: string): Promise<ExamAttempt[]> {
  const { data } = await sb().from("exam_attempts").select("*").eq("user_id", userId);
  return (data ?? []).map(mapExamAttempt);
}
async function fetchXp(userId: string): Promise<UserXp> {
  const { data } = await sb().from("user_xp").select("*").eq("user_id", userId).maybeSingle();
  return mapXp(data as Row | null, userId);
}
async function fetchProfile(userId: string): Promise<Profile | undefined> {
  const { data } = await sb().from("profiles").select("*").eq("id", userId).maybeSingle();
  return data ? mapProfile(data as Row, userId) : undefined;
}

function buildWeekly(userId: string, attempts: Attempt[]) {
  const days: { userId: string; day: string; xp: number; questions: number; minutes: number }[] = [];
  for (let i = 6; i >= 0; i--) {
    const day = isoDate(new Date(Date.now() - i * 86_400_000));
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
const capitalize = (s: string) => (s ? s[0].toUpperCase() + s.slice(1) : s);

export const supabaseProvider: DataProvider = {
  // ── content (bundled; delegate to the seed provider) ──────────────────────
  getCourses: () => seedProvider.getCourses(),
  getTopic: (id) => seedProvider.getTopic(id),
  getQuestionsForTopic: (id) => seedProvider.getQuestionsForTopic(id),
  getExams: () => seedProvider.getExams(),
  getExam: (id) => seedProvider.getExam(id),
  getExamQuestions: (id) => seedProvider.getExamQuestions(id),
  listAllQuestions: () => seedProvider.listAllQuestions(),
  upsertQuestion: (q) => seedProvider.upsertQuestion(q),
  deleteQuestion: (id) => seedProvider.deleteQuestion(id),

  // ── content + per-user progress ───────────────────────────────────────────
  async getCourseTree(userId, level) {
    const progress = await fetchProgress(userId);
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
              progress: progress.find((p) => p.topicId === t.id),
            })),
        })),
    })) satisfies CourseTree[];
  },

  async getProgress(userId) {
    return fetchProgress(userId);
  },

  async getRecommended(userId, topicId, limit = 10) {
    const [attempts, progress] = await Promise.all([fetchAttempts(userId), fetchProgress(userId)]);
    const seen = new Set(attempts.map((a) => a.questionId));
    if (topicId) {
      return recommendQuestions(
        allQuestions.filter((q) => q.topicId === topicId),
        progress.find((p) => p.topicId === topicId),
        seen,
        limit,
      );
    }
    const weak = progress
      .filter((p) => p.attemptsCount > 0)
      .sort((a, b) => topicMastery(a) - topicMastery(b))
      .slice(0, 4);
    if (weak.length === 0) {
      // brand-new learner: recommend from the first topics
      return recommendQuestions(allQuestions, undefined, seen, limit);
    }
    const pool = weak.flatMap((p) =>
      recommendQuestions(
        allQuestions.filter((q) => q.topicId === p.topicId),
        p,
        seen,
        Math.ceil(limit / weak.length),
      ),
    );
    return pool.slice(0, limit);
  },

  async getDashboard(userId) {
    const [progress, xp, profileRow, attempts, examAttempts] = await Promise.all([
      fetchProgress(userId),
      fetchXp(userId),
      fetchProfile(userId),
      fetchAttempts(userId),
      fetchExamAttempts(userId),
    ]);
    const profile: Profile = profileRow ?? {
      id: userId,
      displayName: "Learner",
      role: "learner",
      dailyGoalXp: 50,
    };
    const topicsTotal = topics.length;
    const masteredList = progress.filter((p) => isMastered(topicMastery(p)));
    const latestMock = [...examAttempts]
      .filter((e) => e.scorePercent != null)
      .sort((a, b) => +new Date(b.startedAt) - +new Date(a.startedAt))[0];
    const readiness = readinessScore(progress, topicsTotal, latestMock?.scorePercent);
    const overall = Math.round(
      (progress.reduce((s, p) => s + topicMastery(p), 0) / Math.max(topicsTotal, 1)) * 100,
    );
    const weak = progress
      .filter((p) => needsImprovement(p, topicMastery(p)))
      .map((p) => ({ topic: topics.find((t) => t.id === p.topicId)!, mastery: topicMastery(p) }))
      .filter((w) => w.topic)
      .sort((a, b) => a.mastery - b.mastery)
      .slice(0, 4);
    const weekly = buildWeekly(userId, attempts);
    const todayXp = weekly.find((d) => d.day === isoDate())?.xp ?? 0;
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
      xp,
      overallProgress: overall,
      readiness,
      readinessBucket: readinessBucket(readiness),
      predictedScore: predictedScore(attempts, examAttempts),
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
    const [progress, attempts, examAttempts] = await Promise.all([
      fetchProgress(userId),
      fetchAttempts(userId),
      fetchExamAttempts(userId),
    ]);
    const byTopic = progress
      .filter((p) => p.attemptsCount > 0)
      .map((p) => {
        const ta = attempts.filter((a) => a.topicId === p.topicId);
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
      .filter((e) => e.scorePercent != null)
      .sort((a, b) => +new Date(a.startedAt) - +new Date(b.startedAt))
      .map((e, i) => ({ label: `Mock ${i + 1}`, score: Math.round(e.scorePercent!) }));
    const latestMock = mockTrend.at(-1)?.score;
    return {
      byTopic,
      mockTrend,
      predictedScore: predictedScore(attempts, examAttempts),
      readiness: readinessScore(progress, topics.length, latestMock),
      avgTimeMs: avgTimePerQuestionMs(attempts),
      accuracy: recentAccuracy(attempts),
      totalAttempts: attempts.length,
    };
  },

  async recordAttempt(input) {
    const { userId, topicId, questionId } = input;
    // 1. progress read-modify-write
    const { data: pRow } = await sb()
      .from("progress")
      .select("*")
      .eq("user_id", userId)
      .eq("topic_id", topicId)
      .maybeSingle();
    const p: TopicProgress = pRow
      ? mapProgress(pRow as Row)
      : { userId, topicId, mastery: 0, skillRating: 1200, attemptsCount: 0, correctCount: 0 };
    const q = questionById(questionId);
    const [userR] = updateRatings(p.skillRating, q?.rating ?? 1200, input.score);
    p.skillRating = userR;
    p.attemptsCount += 1;
    if (input.isCorrect) p.correctCount += 1;
    p.lastPracticedAt = new Date().toISOString();
    p.mastery = topicMastery(p);
    await sb().from("progress").upsert(
      {
        user_id: userId,
        topic_id: topicId,
        mastery: p.mastery,
        skill_rating: p.skillRating,
        attempts_count: p.attemptsCount,
        correct_count: p.correctCount,
        last_practiced_at: p.lastPracticedAt,
      },
      { onConflict: "user_id,topic_id" },
    );

    // 2. record the attempt itself
    await sb().from("attempts").insert({
      user_id: userId,
      question_id: questionId,
      topic_id: topicId,
      source: input.source ?? "practice",
      is_correct: input.isCorrect,
      score: input.score,
      selected_answer_ids: input.selectedAnswerIds ?? null,
      numeric_response: input.numericResponse ?? null,
      time_ms: input.timeMs,
    });

    // 3. xp / level / streak
    const xp = await fetchXp(userId);
    const xpAwarded = input.isCorrect ? xpForCorrect(input.difficulty, input.combo ?? 1) : 2;
    const before = xp.level;
    const totalXp = xp.totalXp + xpAwarded;
    const level = levelForXp(totalXp);
    const today = isoDate();
    const s = nextStreak(xp.currentStreak, xp.longestStreak, xp.lastActivityDate, today);
    await sb().from("user_xp").upsert(
      {
        user_id: userId,
        total_xp: totalXp,
        level,
        current_streak: s.current,
        longest_streak: s.longest,
        last_activity_date: today,
      },
      { onConflict: "user_id" },
    );

    return {
      xpAwarded,
      totalXp,
      level,
      leveledUp: level > before,
      streak: s.current,
    };
  },

  async submitExam(input) {
    const exam = examById(input.examId);
    const totalMarks = input.answers.length || 1;
    const earned = input.answers.reduce((s, a) => s + a.score, 0);
    const scorePercent = Math.round((earned / totalMarks) * 100);
    const startedAt = new Date(Date.now() - input.durationMs).toISOString();
    const { data: ea } = await sb()
      .from("exam_attempts")
      .insert({
        user_id: input.userId,
        exam_id: input.examId,
        started_at: startedAt,
        submitted_at: new Date().toISOString(),
        score_percent: scorePercent,
        passed: scorePercent >= (exam?.passMark ?? 55),
        duration_ms: input.durationMs,
      })
      .select()
      .single();
    for (const a of input.answers) {
      await this.recordAttempt({ ...a, userId: input.userId, source: "mock" });
    }
    return mapExamAttempt((ea ?? {}) as Row);
  },

  async getExamAttempts(userId) {
    return fetchExamAttempts(userId);
  },

  async getLeaderboard() {
    const { data } = await sb()
      .from("leaderboard")
      .select("*")
      .order("total_xp", { ascending: false })
      .limit(50);
    return ((data ?? []) as Row[]).map((r, i) => ({
      userId: r.user_id as string,
      displayName: (r.display_name as string) ?? "Anonymous",
      avatarUrl: (r.avatar_url as string) ?? undefined,
      totalXp: n(r.total_xp),
      level: n(r.level, 1),
      currentStreak: n(r.current_streak),
      rank: i + 1,
    }));
  },

  async getGamification(userId) {
    const [xp, ua, uc] = await Promise.all([
      fetchXp(userId),
      sb().from("user_achievements").select("*").eq("user_id", userId),
      sb().from("user_challenges").select("*").eq("user_id", userId),
    ]);
    const earned: UserAchievement[] = ((ua.data ?? []) as Row[]).map((r) => ({
      achievementId: r.achievement_id as string,
      earnedAt: r.earned_at as string,
    }));
    const userChallenges: UserChallenge[] = ((uc.data ?? []) as Row[]).map((r) => ({
      challengeId: r.challenge_id as string,
      progress: n(r.progress),
      completedAt: (r.completed_at as string) ?? undefined,
    }));
    return { xp, achievements, earned, challenges, userChallenges };
  },

  async getProfile(userId) {
    return fetchProfile(userId);
  },

  async updateProfile(userId, patch) {
    const row: Record<string, unknown> = {};
    if (patch.displayName !== undefined) row.display_name = patch.displayName;
    if (patch.targetLevel !== undefined) row.target_level = patch.targetLevel || null;
    if (patch.examDate !== undefined) row.exam_date = patch.examDate || null;
    if (patch.dailyGoalXp !== undefined) row.daily_goal_xp = patch.dailyGoalXp;
    if (Object.keys(row).length > 0) {
      await sb().from("profiles").update(row).eq("id", userId);
    }
  },
};

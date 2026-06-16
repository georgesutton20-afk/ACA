// ACA Academy — domain types. TypeScript mirror of the Postgres schema
// (supabase/migrations/0001_init.sql). Single source of truth for both the
// seed and supabase data providers and the UI.

export type AcaLevel = "certificate" | "professional" | "advanced";
export type UserRole = "learner" | "admin";
export type QuestionType = "mcq" | "multi" | "calc" | "scenario" | "written";
export type Difficulty = "easy" | "medium" | "hard";
export type ExamKind = "full" | "topic";
export type AttemptSource = "practice" | "mock" | "challenge";

export interface Course {
  id: string;
  slug: string;
  title: string;
  level: AcaLevel;
  description?: string;
  sortOrder: number;
}

export interface Module {
  id: string;
  courseId: string;
  slug: string;
  title: string;
  description?: string;
  icon?: string; // lucide icon name
  sortOrder: number;
}

export interface Topic {
  id: string;
  moduleId: string;
  slug: string;
  title: string;
  summary?: string;
  sortOrder: number;
  subtopics?: string[];
  objectives?: LearningObjective[];
}

export interface LearningObjective {
  id: string;
  topicId: string;
  code?: string;
  description: string;
  sortOrder: number;
}

export interface Answer {
  id: string;
  questionId: string;
  label: string;
  isCorrect: boolean;
  feedback?: string;
  sortOrder: number;
}

export interface Question {
  id: string;
  topicId: string;
  type: QuestionType;
  difficulty: Difficulty;
  rating: number; // Elo item difficulty
  stem: string; // markdown
  scenario?: string;
  explanation?: string;
  workedSolution?: string;
  relatedConcepts?: string[];
  numericAnswer?: number;
  numericTolerance?: number;
  unit?: string;
  estSeconds: number;
  isPublished: boolean;
  answers?: Answer[];
}

export interface Exam {
  id: string;
  courseId?: string;
  moduleId?: string;
  title: string;
  kind: ExamKind;
  durationMinutes: number;
  passMark: number; // percent
  questionIds: string[];
}

export interface Profile {
  id: string;
  displayName: string;
  avatarUrl?: string;
  role: UserRole;
  targetLevel?: AcaLevel;
  examDate?: string; // ISO date
  dailyGoalXp: number;
  timezone?: string;
}

export interface Attempt {
  id: string;
  userId: string;
  questionId: string;
  topicId: string;
  source: AttemptSource;
  examAttemptId?: string;
  isCorrect: boolean;
  score: number; // 0..1
  selectedAnswerIds?: string[];
  numericResponse?: number;
  timeMs: number;
  createdAt: string; // ISO
}

export interface ExamAttempt {
  id: string;
  userId: string;
  examId: string;
  startedAt: string;
  submittedAt?: string;
  scorePercent?: number;
  passed?: boolean;
  durationMs?: number;
}

export interface TopicProgress {
  userId: string;
  topicId: string;
  mastery: number; // 0..1
  skillRating: number; // Elo
  attemptsCount: number;
  correctCount: number;
  lastPracticedAt?: string;
}

export interface UserXp {
  userId: string;
  totalXp: number;
  level: number;
  currentStreak: number;
  longestStreak: number;
  lastActivityDate?: string;
  freezes: number;
}

export interface DailyActivity {
  userId: string;
  day: string; // ISO date
  xp: number;
  questions: number;
  minutes: number;
}

export interface Achievement {
  id: string;
  code: string;
  title: string;
  description: string;
  icon?: string;
  xpReward: number;
  tier: "bronze" | "silver" | "gold" | "platinum";
}

export interface UserAchievement {
  achievementId: string;
  earnedAt: string;
}

export interface Challenge {
  id: string;
  scope: "daily" | "weekly";
  title: string;
  description?: string;
  target: number;
  metric: "questions" | "xp" | "correct" | "minutes";
  xpReward: number;
}

export interface UserChallenge {
  challengeId: string;
  progress: number;
  completedAt?: string;
}

export interface LeaderboardEntry {
  userId: string;
  displayName: string;
  avatarUrl?: string;
  totalXp: number;
  level: number;
  currentStreak: number;
  rank: number;
}

// ── derived/aggregate view models used by the UI ──────────────────────────

export interface ReadinessBucket {
  label: "Building" | "On track" | "Exam ready soon" | "Exam ready";
  tone: "rose" | "amber" | "primary" | "emerald";
}

export interface DashboardData {
  profile: Profile;
  xp: UserXp;
  overallProgress: number; // 0..100
  readiness: number; // 0..100
  readinessBucket: ReadinessBucket;
  predictedScore: number; // 0..100
  topicsMastered: number;
  topicsTotal: number;
  weakTopics: { topic: Topic; mastery: number }[];
  upcomingExams: { title: string; date: string; daysAway: number }[];
  dailyGoalXp: number;
  todayXp: number;
  weekly: DailyActivity[];
}

// The single data-access contract. Both the seed and supabase providers
// implement this; the rest of the app only ever imports through lib/data.
import type {
  Achievement,
  Attempt,
  Challenge,
  Course,
  DashboardData,
  Exam,
  ExamAttempt,
  LeaderboardEntry,
  Module,
  Profile,
  Question,
  Topic,
  TopicProgress,
  UserAchievement,
  UserChallenge,
  UserXp,
} from "@/types/domain";

export interface CourseTree {
  course: Course;
  modules: (Module & { topics: (Topic & { progress?: TopicProgress })[] })[];
}

export interface RecordAttemptInput {
  userId: string;
  questionId: string;
  topicId: string;
  difficulty: "easy" | "medium" | "hard";
  isCorrect: boolean;
  score: number;
  timeMs: number;
  source?: "practice" | "mock" | "challenge";
  combo?: number;
  selectedAnswerIds?: string[];
  numericResponse?: number;
}

export interface RecordAttemptResult {
  xpAwarded: number;
  totalXp: number;
  level: number;
  leveledUp: boolean;
  streak: number;
}

export interface SubmitExamInput {
  userId: string;
  examId: string;
  answers: {
    questionId: string;
    topicId: string;
    difficulty: "easy" | "medium" | "hard";
    isCorrect: boolean;
    score: number;
    timeMs: number;
    selectedAnswerIds?: string[];
    numericResponse?: number;
  }[];
  durationMs: number;
}

export interface GamificationData {
  xp: UserXp;
  achievements: Achievement[];
  earned: UserAchievement[];
  challenges: Challenge[];
  userChallenges: UserChallenge[];
}

export interface AnalyticsData {
  byTopic: { topic: Topic; mastery: number; accuracy: number; attempts: number; avgTimeMs: number }[];
  mockTrend: { label: string; score: number }[];
  predictedScore: number;
  readiness: number;
  avgTimeMs: number;
  accuracy: number;
  totalAttempts: number;
}

export interface DataProvider {
  getCourses(): Promise<Course[]>;
  getCourseTree(userId: string, level?: string): Promise<CourseTree[]>;
  getTopic(topicId: string): Promise<Topic | undefined>;
  getQuestionsForTopic(topicId: string): Promise<Question[]>;
  getRecommended(userId: string, topicId?: string, limit?: number): Promise<Question[]>;
  getDashboard(userId: string): Promise<DashboardData>;
  getAnalytics(userId: string): Promise<AnalyticsData>;
  getProgress(userId: string): Promise<TopicProgress[]>;
  recordAttempt(input: RecordAttemptInput): Promise<RecordAttemptResult>;
  getExams(): Promise<Exam[]>;
  getExam(examId: string): Promise<Exam | undefined>;
  getExamQuestions(examId: string): Promise<Question[]>;
  submitExam(input: SubmitExamInput): Promise<ExamAttempt>;
  getExamAttempts(userId: string): Promise<ExamAttempt[]>;
  getLeaderboard(): Promise<LeaderboardEntry[]>;
  getGamification(userId: string): Promise<GamificationData>;
  getProfile(userId: string): Promise<Profile | undefined>;
  // admin
  listAllQuestions(): Promise<Question[]>;
  upsertQuestion(q: Question): Promise<Question>;
  deleteQuestion(id: string): Promise<void>;
}

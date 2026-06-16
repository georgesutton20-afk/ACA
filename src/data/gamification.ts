// Seed achievements and challenges.
import type { Achievement, Challenge } from "@/types/domain";

export const achievements: Achievement[] = [
  { id: "ach-first", code: "first_steps", title: "First Steps", description: "Answer your first question.", icon: "Footprints", xpReward: 10, tier: "bronze" },
  { id: "ach-streak3", code: "streak_3", title: "Warming Up", description: "Reach a 3-day study streak.", icon: "Flame", xpReward: 20, tier: "bronze" },
  { id: "ach-streak7", code: "streak_7", title: "On Fire", description: "Reach a 7-day study streak.", icon: "Flame", xpReward: 50, tier: "silver" },
  { id: "ach-streak30", code: "streak_30", title: "Unstoppable", description: "Reach a 30-day study streak.", icon: "Flame", xpReward: 200, tier: "gold" },
  { id: "ach-100q", code: "century", title: "Century", description: "Answer 100 questions.", icon: "Target", xpReward: 60, tier: "silver" },
  { id: "ach-perfect", code: "perfect_set", title: "Flawless", description: "Score 100% on a practice set of 10.", icon: "Sparkles", xpReward: 40, tier: "silver" },
  { id: "ach-mock", code: "first_mock", title: "Exam Nerves", description: "Complete your first mock exam.", icon: "ScrollText", xpReward: 50, tier: "bronze" },
  { id: "ach-mockpass", code: "mock_pass", title: "Mock Master", description: "Pass a full mock exam.", icon: "Award", xpReward: 100, tier: "gold" },
  { id: "ach-master", code: "topic_master", title: "Topic Master", description: "Reach 80% mastery in a topic.", icon: "Crown", xpReward: 80, tier: "gold" },
  { id: "ach-lvl10", code: "level_10", title: "Double Digits", description: "Reach level 10.", icon: "Rocket", xpReward: 150, tier: "platinum" },
];

export const challenges: Challenge[] = [
  { id: "ch-daily-1", scope: "daily", title: "Daily 10", description: "Answer 10 questions today.", target: 10, metric: "questions", xpReward: 20 },
  { id: "ch-daily-2", scope: "daily", title: "Sharp Shooter", description: "Get 5 correct answers today.", target: 5, metric: "correct", xpReward: 15 },
  { id: "ch-weekly-1", scope: "weekly", title: "Weekly Grind", description: "Earn 300 XP this week.", target: 300, metric: "xp", xpReward: 100 },
  { id: "ch-weekly-2", scope: "weekly", title: "Marathon", description: "Answer 75 questions this week.", target: 75, metric: "questions", xpReward: 80 },
];

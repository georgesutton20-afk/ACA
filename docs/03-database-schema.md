# ACA Academy — Database Schema

Full DDL: [`supabase/migrations/0001_init.sql`](../supabase/migrations/0001_init.sql) ·
RLS: [`supabase/migrations/0002_rls.sql`](../supabase/migrations/0002_rls.sql) ·
Seed: [`supabase/migrations/0003_seed.sql`](../supabase/migrations/0003_seed.sql)

## Entity-relationship overview

```
courses 1──* modules 1──* topics 1──* subtopics
                              │  └──* learning_objectives
                              └──* questions 1──* answers
exams *──* questions (exam_questions)            (exam belongs to course/module)

auth.users 1──1 profiles
auth.users 1──1 user_xp
auth.users 1──* attempts *──1 questions / topics
auth.users 1──* exam_attempts 1──* attempts
auth.users 1──* progress (per topic)
auth.users 1──* daily_activity
auth.users *──* achievements (user_achievements)
auth.users *──* challenges  (user_challenges)
leaderboard = view(user_xp ⨝ profiles)
```

## Table reference (key columns)

| Table | Purpose | Notable columns |
|---|---|---|
| `courses` | ACA levels (generic qualification root) | `level`, `slug`, `sort_order` |
| `modules` | Exams within a level | `course_id`, `icon`, `sort_order` |
| `topics` | Study units (map nodes) | `module_id`, `summary` |
| `subtopics` / `learning_objectives` | Granular breakdown | `topic_id` |
| `questions` | Items of all types | `type`, `difficulty`, `rating` (Elo), `numeric_answer`, `est_seconds` |
| `answers` | Choices for mcq/multi | `is_correct`, `feedback` |
| `exams` / `exam_questions` | Mock definitions | `kind`, `duration_minutes`, `pass_mark`, `marks` |
| `profiles` | Learner profile + role | `role`, `target_level`, `exam_date`, `daily_goal_xp` |
| `attempts` | Every answered question | `is_correct`, `score`, `time_ms`, `source` |
| `exam_attempts` | A sitting of a mock | `score_percent`, `passed`, `duration_ms` |
| `progress` | Per-topic mastery + skill | `mastery (0..1)`, `skill_rating` |
| `user_xp` | Gamification totals | `total_xp`, `level`, `current_streak`, `longest_streak` |
| `daily_activity` | Daily rollup | `xp`, `questions`, `minutes` |
| `achievements` / `user_achievements` | Badges | `code`, `tier`, `xp_reward` |
| `challenges` / `user_challenges` | Daily/weekly tasks | `scope`, `target`, `metric` |
| `leaderboard` (view) | Ranking | `total_xp`, `level` |

## Design decisions

- **`auth.users` is the identity source**; `profiles` mirrors it 1:1 and is auto-created by the
  `handle_new_user` trigger so the app never has a user without a profile/xp row.
- **Elo ratings** on both `questions.rating` and `progress.skill_rating` power adaptive difficulty
  without ML infrastructure.
- **`daily_activity` rollup** keeps streak/goal/weekly-chart reads O(days) instead of scanning
  every attempt.
- **`leaderboard` as a view** keeps ranking always-fresh and avoids a denormalised table to sync.
- **RLS everywhere**: content is public-read/admin-write; activity tables are `auth.uid() = user_id`.
- The TypeScript mirror of these types lives in [`src/types/domain.ts`](../src/types/domain.ts).

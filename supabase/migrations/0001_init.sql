-- ACA Academy — initial schema
-- Postgres / Supabase. Run via `supabase db push` or paste into the SQL editor.
-- Conventions: snake_case, uuid PKs, created_at/updated_at, RLS on user-owned tables.

create extension if not exists "pgcrypto";

-- ───────────────────────────────────────── enums
create type aca_level   as enum ('certificate', 'professional', 'advanced');
create type user_role    as enum ('learner', 'admin');
create type question_type as enum ('mcq', 'multi', 'calc', 'scenario', 'written');
create type difficulty    as enum ('easy', 'medium', 'hard');
create type exam_kind     as enum ('full', 'topic');
create type attempt_source as enum ('practice', 'mock', 'challenge');

-- ───────────────────────────────────────── content taxonomy
-- courses == ACA levels (kept generic so other qualifications can be added)
create table courses (
  id          uuid primary key default gen_random_uuid(),
  slug        text unique not null,
  title       text not null,
  level       aca_level not null,
  description text,
  sort_order  int not null default 0,
  created_at  timestamptz not null default now()
);

create table modules (
  id          uuid primary key default gen_random_uuid(),
  course_id   uuid not null references courses(id) on delete cascade,
  slug        text not null,
  title       text not null,
  description text,
  icon        text,                      -- lucide icon name
  sort_order  int not null default 0,
  created_at  timestamptz not null default now(),
  unique (course_id, slug)
);

create table topics (
  id          uuid primary key default gen_random_uuid(),
  module_id   uuid not null references modules(id) on delete cascade,
  slug        text not null,
  title       text not null,
  summary     text,
  sort_order  int not null default 0,
  created_at  timestamptz not null default now(),
  unique (module_id, slug)
);

create table subtopics (
  id          uuid primary key default gen_random_uuid(),
  topic_id    uuid not null references topics(id) on delete cascade,
  title       text not null,
  sort_order  int not null default 0
);

create table learning_objectives (
  id          uuid primary key default gen_random_uuid(),
  topic_id    uuid not null references topics(id) on delete cascade,
  code        text,                      -- e.g. "1a"
  description text not null,
  sort_order  int not null default 0
);

-- ───────────────────────────────────────── questions & answers
create table questions (
  id            uuid primary key default gen_random_uuid(),
  topic_id      uuid not null references topics(id) on delete cascade,
  type          question_type not null,
  difficulty    difficulty not null default 'medium',
  rating        numeric not null default 1200,   -- Elo-style item difficulty
  stem          text not null,                   -- markdown
  scenario      text,                            -- optional shared context
  explanation   text,                            -- markdown
  worked_solution text,                          -- markdown
  related_concepts text[],                        -- free-text tags
  numeric_answer  numeric,                        -- for calc questions
  numeric_tolerance numeric default 0,            -- acceptable +/-
  unit          text,                             -- e.g. "£", "%"
  est_seconds   int default 60,
  is_published  boolean not null default true,
  created_by    uuid references auth.users(id),
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

create table answers (
  id          uuid primary key default gen_random_uuid(),
  question_id uuid not null references questions(id) on delete cascade,
  label       text not null,             -- markdown choice text
  is_correct  boolean not null default false,
  feedback    text,                      -- per-choice rationale
  sort_order  int not null default 0
);

create index on questions (topic_id);
create index on answers (question_id);

-- ───────────────────────────────────────── exams
create table exams (
  id            uuid primary key default gen_random_uuid(),
  course_id     uuid references courses(id) on delete set null,
  module_id     uuid references modules(id) on delete set null,
  title         text not null,
  kind          exam_kind not null default 'topic',
  duration_minutes int not null default 90,
  pass_mark     int not null default 55,  -- percent
  is_published  boolean not null default true,
  created_at    timestamptz not null default now()
);

create table exam_questions (
  exam_id     uuid not null references exams(id) on delete cascade,
  question_id uuid not null references questions(id) on delete cascade,
  sort_order  int not null default 0,
  marks       int not null default 1,
  primary key (exam_id, question_id)
);

-- ───────────────────────────────────────── learners (profile mirrors auth.users)
create table profiles (
  id            uuid primary key references auth.users(id) on delete cascade,
  display_name  text,
  avatar_url    text,
  role          user_role not null default 'learner',
  target_level  aca_level,
  exam_date     date,
  daily_goal_xp int not null default 50,
  timezone      text default 'Europe/London',
  created_at    timestamptz not null default now()
);

-- ───────────────────────────────────────── learner activity
create table attempts (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  question_id   uuid not null references questions(id) on delete cascade,
  topic_id      uuid not null references topics(id) on delete cascade,
  source        attempt_source not null default 'practice',
  exam_attempt_id uuid,                    -- nullable FK set below
  is_correct    boolean not null,
  score         numeric not null default 0, -- 0..1 (partial for multi/written)
  selected_answer_ids uuid[],
  numeric_response numeric,
  time_ms       int not null default 0,
  created_at    timestamptz not null default now()
);
create index on attempts (user_id, created_at);
create index on attempts (user_id, topic_id);

create table exam_attempts (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  exam_id       uuid not null references exams(id) on delete cascade,
  started_at    timestamptz not null default now(),
  submitted_at  timestamptz,
  score_percent numeric,
  passed        boolean,
  duration_ms   int
);
alter table attempts
  add constraint attempts_exam_attempt_fk
  foreign key (exam_attempt_id) references exam_attempts(id) on delete set null;

-- per (user, topic) mastery + adaptive skill rating
create table progress (
  user_id       uuid not null references auth.users(id) on delete cascade,
  topic_id      uuid not null references topics(id) on delete cascade,
  mastery       numeric not null default 0,   -- 0..1
  skill_rating  numeric not null default 1200, -- Elo-style
  attempts_count int not null default 0,
  correct_count int not null default 0,
  last_practiced_at timestamptz,
  primary key (user_id, topic_id)
);

-- ───────────────────────────────────────── gamification
create table user_xp (
  user_id       uuid primary key references auth.users(id) on delete cascade,
  total_xp      int not null default 0,
  level         int not null default 1,
  current_streak int not null default 0,
  longest_streak int not null default 0,
  last_activity_date date,
  freezes       int not null default 0
);

-- daily rollup powering streaks, the weekly chart and daily-goal ring
create table daily_activity (
  user_id     uuid not null references auth.users(id) on delete cascade,
  day         date not null,
  xp          int not null default 0,
  questions   int not null default 0,
  minutes     numeric not null default 0,
  primary key (user_id, day)
);

create table achievements (
  id          uuid primary key default gen_random_uuid(),
  code        text unique not null,
  title       text not null,
  description text not null,
  icon        text,                      -- lucide name
  xp_reward   int not null default 0,
  tier        text default 'bronze'
);

create table user_achievements (
  user_id        uuid not null references auth.users(id) on delete cascade,
  achievement_id uuid not null references achievements(id) on delete cascade,
  earned_at      timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

create table challenges (
  id          uuid primary key default gen_random_uuid(),
  scope       text not null default 'daily',  -- daily | weekly
  title       text not null,
  description text,
  target      int not null default 10,        -- e.g. answer 10 questions
  metric      text not null default 'questions',
  xp_reward   int not null default 20,
  active_from date,
  active_to   date
);

create table user_challenges (
  user_id      uuid not null references auth.users(id) on delete cascade,
  challenge_id uuid not null references challenges(id) on delete cascade,
  progress     int not null default 0,
  completed_at timestamptz,
  primary key (user_id, challenge_id)
);

-- leaderboard is a view over user_xp + profiles (see below)
create or replace view leaderboard as
  select p.id as user_id,
         coalesce(p.display_name, 'Anonymous') as display_name,
         p.avatar_url,
         x.total_xp, x.level, x.current_streak
  from user_xp x
  join profiles p on p.id = x.user_id;

-- ───────────────────────────────────────── updated_at trigger
create or replace function set_updated_at() returns trigger as $$
begin new.updated_at = now(); return new; end; $$ language plpgsql;
create trigger trg_questions_updated before update on questions
  for each row execute function set_updated_at();

-- auto-create profile + xp row on signup
create or replace function handle_new_user() returns trigger as $$
begin
  insert into profiles (id, display_name) values (new.id, split_part(new.email,'@',1))
    on conflict do nothing;
  insert into user_xp (user_id) values (new.id) on conflict do nothing;
  return new;
end; $$ language plpgsql security definer;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function handle_new_user();

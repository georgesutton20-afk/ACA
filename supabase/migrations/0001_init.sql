-- ACA Academy — Supabase schema (consumer/static-hosting model)
-- ---------------------------------------------------------------------------
-- The app ships all *content* (courses, topics, questions, exams, achievement
-- & challenge definitions) bundled in the client, so this database stores only
-- per-user state. Content is referenced by the app's stable string ids
-- (e.g. 't-far-tax', 'q-...', 'ex-far-topic'), hence text columns rather than
-- FKs to content tables.
--
-- HOW TO RUN: Supabase dashboard → SQL Editor → New query → paste all of this
-- → Run. Safe to re-run (idempotent).
-- ---------------------------------------------------------------------------

create extension if not exists "pgcrypto";

-- ── enums ──────────────────────────────────────────────────────────────────
do $$ begin
  create type aca_level      as enum ('certificate', 'professional', 'advanced');
exception when duplicate_object then null; end $$;
do $$ begin
  create type user_role      as enum ('learner', 'admin');
exception when duplicate_object then null; end $$;
do $$ begin
  create type attempt_source as enum ('practice', 'mock', 'challenge');
exception when duplicate_object then null; end $$;

-- ── profiles (mirrors auth.users) ───────────────────────────────────────────
create table if not exists profiles (
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

-- ── per-question attempts ────────────────────────────────────────────────────
create table if not exists exam_attempts (
  id            uuid primary key default gen_random_uuid(),
  user_id       uuid not null references auth.users(id) on delete cascade,
  exam_id       text not null,
  started_at    timestamptz not null default now(),
  submitted_at  timestamptz,
  score_percent numeric,
  passed        boolean,
  duration_ms   int
);

create table if not exists attempts (
  id              uuid primary key default gen_random_uuid(),
  user_id         uuid not null references auth.users(id) on delete cascade,
  question_id     text not null,
  topic_id        text not null,
  source          attempt_source not null default 'practice',
  exam_attempt_id uuid references exam_attempts(id) on delete set null,
  is_correct      boolean not null,
  score           numeric not null default 0,      -- 0..1
  selected_answer_ids text[],
  numeric_response numeric,
  time_ms         int not null default 0,
  created_at      timestamptz not null default now()
);
create index if not exists attempts_user_created on attempts (user_id, created_at);
create index if not exists attempts_user_topic   on attempts (user_id, topic_id);

-- ── per (user, topic) mastery + adaptive skill rating ────────────────────────
create table if not exists progress (
  user_id       uuid not null references auth.users(id) on delete cascade,
  topic_id      text not null,
  mastery       numeric not null default 0,    -- 0..1
  skill_rating  numeric not null default 1200, -- Elo-style
  attempts_count int not null default 0,
  correct_count int not null default 0,
  last_practiced_at timestamptz,
  primary key (user_id, topic_id)
);

-- ── gamification ─────────────────────────────────────────────────────────────
create table if not exists user_xp (
  user_id        uuid primary key references auth.users(id) on delete cascade,
  total_xp       int not null default 0,
  level          int not null default 1,
  current_streak int not null default 0,
  longest_streak int not null default 0,
  last_activity_date date,
  freezes        int not null default 0
);

create table if not exists daily_activity (
  user_id   uuid not null references auth.users(id) on delete cascade,
  day       date not null,
  xp        int not null default 0,
  questions int not null default 0,
  minutes   numeric not null default 0,
  primary key (user_id, day)
);

create table if not exists user_achievements (
  user_id        uuid not null references auth.users(id) on delete cascade,
  achievement_id text not null,
  earned_at      timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

create table if not exists user_challenges (
  user_id      uuid not null references auth.users(id) on delete cascade,
  challenge_id text not null,
  progress     int not null default 0,
  completed_at timestamptz,
  primary key (user_id, challenge_id)
);

-- ── leaderboard: public view over user_xp + profiles ─────────────────────────
create or replace view leaderboard as
  select p.id as user_id,
         coalesce(p.display_name, 'Anonymous') as display_name,
         p.avatar_url,
         x.total_xp, x.level, x.current_streak
  from user_xp x
  join profiles p on p.id = x.user_id;

-- ── admin helper ─────────────────────────────────────────────────────────────
create or replace function is_admin() returns boolean as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'admin');
$$ language sql stable security definer;

-- ── auto-create profile + xp row on signup ───────────────────────────────────
create or replace function handle_new_user() returns trigger as $$
begin
  insert into profiles (id, display_name)
    values (new.id, coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email,'@',1)))
    on conflict (id) do nothing;
  insert into user_xp (user_id) values (new.id) on conflict (user_id) do nothing;
  return new;
end; $$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created after insert on auth.users
  for each row execute function handle_new_user();

-- ── Row Level Security ───────────────────────────────────────────────────────
alter table profiles enable row level security;
drop policy if exists "own_profile_read"   on profiles;
drop policy if exists "own_profile_write"  on profiles;
drop policy if exists "own_profile_insert" on profiles;
create policy "own_profile_read"   on profiles for select using (auth.uid() = id or is_admin());
create policy "own_profile_write"  on profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "own_profile_insert" on profiles for insert with check (auth.uid() = id);

do $$ declare t text;
begin
  foreach t in array array['attempts','exam_attempts','progress','user_xp','daily_activity','user_achievements','user_challenges']
  loop
    execute format('alter table %I enable row level security;', t);
    execute format('drop policy if exists "own_%1$s" on %1$s;', t);
    execute format('create policy "own_%1$s" on %1$s for all using (auth.uid() = user_id) with check (auth.uid() = user_id);', t);
  end loop;
end $$;

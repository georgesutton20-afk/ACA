-- ACA Academy — Row Level Security
-- Content tables are world-readable (published only); user-owned tables are private.

-- helper: is the caller an admin?
create or replace function is_admin() returns boolean as $$
  select exists (select 1 from profiles where id = auth.uid() and role = 'admin');
$$ language sql stable security definer;

-- ── content: public read, admin write
do $$ declare t text;
begin
  foreach t in array array['courses','modules','topics','subtopics','learning_objectives','questions','answers','exams','exam_questions','achievements','challenges']
  loop
    execute format('alter table %I enable row level security;', t);
    execute format('drop policy if exists "read_%1$s" on %1$s;', t);
    execute format('create policy "read_%1$s" on %1$s for select using (true);', t);
    execute format('drop policy if exists "admin_write_%1$s" on %1$s;', t);
    execute format('create policy "admin_write_%1$s" on %1$s for all using (is_admin()) with check (is_admin());', t);
  end loop;
end $$;

-- ── profiles: a user sees/edits only their own row (admins see all)
alter table profiles enable row level security;
create policy "own_profile_read"  on profiles for select using (auth.uid() = id or is_admin());
create policy "own_profile_write" on profiles for update using (auth.uid() = id) with check (auth.uid() = id);
create policy "own_profile_insert" on profiles for insert with check (auth.uid() = id);

-- ── user-owned activity tables: strictly own rows
do $$ declare t text;
begin
  foreach t in array array['attempts','exam_attempts','progress','user_xp','daily_activity','user_achievements','user_challenges']
  loop
    execute format('alter table %I enable row level security;', t);
    execute format('drop policy if exists "own_%1$s" on %1$s;', t);
    execute format('create policy "own_%1$s" on %1$s for all using (auth.uid() = user_id) with check (auth.uid() = user_id);', t);
  end loop;
end $$;

-- ACA Academy — starter seed for the Supabase path.
-- Mirrors the structure of the in-app seed (src/data). Idempotent via stable slugs.
-- Run after 0001_init.sql and 0002_rls.sql. Extend with your full question bank.

-- ── courses (ACA levels) ────────────────────────────────────────────────
insert into courses (slug, title, level, description, sort_order) values
  ('certificate', 'ACA Certificate Level', 'certificate', 'Fundamentals of accountancy, finance and business.', 1),
  ('professional', 'ACA Professional Level', 'professional', 'Applying technical knowledge to scenarios.', 2),
  ('advanced', 'ACA Advanced Level', 'advanced', 'Integration and the Case Study.', 3)
on conflict (slug) do nothing;

-- ── a representative slice of modules ───────────────────────────────────
insert into modules (course_id, slug, title, icon, sort_order, description)
select c.id, m.slug, m.title, m.icon, m.sort_order, m.description
from courses c
join (values
  ('certificate','accounting','Accounting','BookOpen',1,'Double-entry to financial statements.'),
  ('certificate','principles-of-taxation','Principles of Taxation','Receipt',6,'Income tax, NIC and VAT.'),
  ('certificate','management-information','Management Information','Calculator',5,'Costing and decision-making.'),
  ('professional','financial-accounting-reporting','Financial Accounting & Reporting','FileSpreadsheet',2,'IFRS/UK GAAP single and group accounts.'),
  ('professional','audit-assurance','Audit & Assurance','ScanSearch',1,'Planning, evidence and reporting.'),
  ('professional','financial-management','Financial Management','TrendingUp',5,'Investment, financing and risk.'),
  ('advanced','corporate-reporting','Corporate Reporting','Layers',1,'Complex reporting and groups.'),
  ('advanced','case-study','Case Study','FileText',3,'Applying all skills to a business case.')
) as m(course_slug, slug, title, icon, sort_order, description)
  on c.slug = m.course_slug
on conflict (course_id, slug) do nothing;

-- ── a representative slice of topics ────────────────────────────────────
insert into topics (module_id, slug, title, summary, sort_order)
select mod.id, t.slug, t.title, t.summary, t.sort_order
from modules mod
join (values
  ('accounting','double-entry','Double-entry bookkeeping','Debits, credits and the accounting equation.',1),
  ('accounting','accruals-prepayments','Accruals & prepayments','Matching income and expense to the period.',2),
  ('management-information','cvp-analysis','CVP & breakeven','Contribution, breakeven and margin of safety.',2),
  ('principles-of-taxation','income-tax','Income tax basics','Computing the income tax liability.',1),
  ('financial-accounting-reporting','revenue','Revenue (IFRS 15)','The five-step revenue model.',1),
  ('financial-accounting-reporting','deferred-tax','Deferred tax (IAS 12)','Temporary differences and balances.',3),
  ('audit-assurance','audit-planning','Audit planning & risk','Materiality and risk assessment.',1),
  ('financial-management','investment-appraisal','Investment appraisal','NPV, IRR and payback.',1)
) as t(module_slug, slug, title, summary, sort_order)
  on mod.slug = t.module_slug
on conflict (module_id, slug) do nothing;

-- ── achievements ─────────────────────────────────────────────────────────
insert into achievements (code, title, description, icon, xp_reward, tier) values
  ('first_steps','First Steps','Answer your first question.','Footprints',10,'bronze'),
  ('streak_7','On Fire','Reach a 7-day study streak.','Flame',50,'silver'),
  ('streak_30','Unstoppable','Reach a 30-day study streak.','Flame',200,'gold'),
  ('century','Century','Answer 100 questions.','Target',60,'silver'),
  ('first_mock','Exam Nerves','Complete your first mock exam.','ScrollText',50,'bronze'),
  ('mock_pass','Mock Master','Pass a full mock exam.','Award',100,'gold'),
  ('topic_master','Topic Master','Reach 80% mastery in a topic.','Crown',80,'gold'),
  ('level_10','Double Digits','Reach level 10.','Rocket',150,'platinum')
on conflict (code) do nothing;

-- ── challenges ─────────────────────────────────────────────────────────────
insert into challenges (scope, title, description, target, metric, xp_reward) values
  ('daily','Daily 10','Answer 10 questions today.',10,'questions',20),
  ('daily','Sharp Shooter','Get 5 correct answers today.',5,'correct',15),
  ('weekly','Weekly Grind','Earn 300 XP this week.',300,'xp',100),
  ('weekly','Marathon','Answer 75 questions this week.',75,'questions',80)
on conflict do nothing;

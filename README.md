# ACA Academy 🎓

A modern, interactive learning platform that helps aspiring and current **ICAEW ACA**
trainees prepare for their exams — structured learning paths, adaptive question practice,
timed mock exams, deep analytics and gamification. Think *Duolingo × Brilliant.org × premium SaaS*.

> Practice content is illustrative and not affiliated with ICAEW.

## ✨ Features

- **Dashboard** — overall progress, study streak, exam-readiness score, topics mastered/weak,
  upcoming exams, daily goal ring and weekly study chart.
- **Learning paths** — a Duolingo-style progression map across the Certificate, Professional
  and Advanced levels (modules → topics → sub-topics → learning objectives) with mastery rings
  and lock/unlock logic.
- **Question bank** — MCQ, multi-select, calculation, scenario and written items with instant
  feedback, explanations, worked solutions, related concepts, difficulty ratings and timing.
- **Mock exams** — full and topic-specific timed papers, auto-submit, per-question review and
  mistake analysis.
- **Analytics** — topic strengths/weaknesses (radar), accuracy (bar), mock-score trend (line),
  readiness gauge, average time and predicted score.
- **Gamification** — XP, levels, badges, streaks, daily/weekly challenges and a leaderboard.
- **Adaptive learning** — an Elo-based engine detects weak topics, recommends questions and
  tunes difficulty.
- **Admin CMS** — author/edit/delete questions and curate the bank.
- **Premium UX** — dark/light/system themes, smooth animations, fully responsive, accessible.

## 🧱 Tech stack

Next.js 16 (App Router, RSC) · React 19 · TypeScript · Tailwind CSS v4 ·
shadcn-style UI on Radix · Recharts · Supabase (Postgres + Auth + RLS) · Vercel.

## 🚀 Getting started

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. **No configuration is required** — the app runs on a
deterministic seed dataset (a fully explorable demo learner, "Tom Hardy"). Start at the
landing page or jump straight to `/dashboard`.

## 🔌 Going live with Supabase

1. Create a Supabase project.
2. Run the SQL in `supabase/migrations/` in order (`0001_init.sql`, `0002_rls.sql`, then
   seed as needed).
3. Copy `.env.example` → `.env.local` and fill in the keys, setting
   `NEXT_PUBLIC_USE_SUPABASE=true`.
4. Auth, RLS and session refresh (`src/middleware.ts`) activate automatically.

## 🗂 Project structure

```
src/
  app/            # routes: (marketing) (auth) (app) api
  components/     # ui/ (design system) + feature components
  lib/            # data seam, supabase clients, analytics/adaptive/gamification engines
  data/           # seed curriculum, questions, exams, gamification, demo learner
  types/          # domain types (mirror of the DB schema)
docs/             # PRD, architecture, schema, design system, roadmap, AI features …
supabase/         # SQL migrations (schema + RLS)
```

## 📚 Documentation

Full product & technical docs live in [`docs/`](docs/): PRD, architecture, database schema,
analytics models, API/folders, design system, journeys/wireframes, roadmap/MVP and AI features.

## 🧪 Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run lint` — lint

## 📝 Licence

Educational sample project. Not affiliated with or endorsed by ICAEW.

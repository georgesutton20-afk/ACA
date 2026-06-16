# ACA Academy — Development Roadmap & MVP Specification

## MVP definition (what "done" means for v1)

A polished, responsive, accessible app that runs end-to-end on **seed data** (no infra needed)
and is wired for Supabase via one env flag. MVP includes:

- ✅ Marketing landing + auth pages (login/signup UI) + guest/demo mode
- ✅ Authenticated app shell (sidebar, topbar, theme toggle, mobile nav)
- ✅ Dashboard with all required widgets + charts
- ✅ Learn map (3 levels → modules → topics) with mastery rings & lock logic
- ✅ Practice (MCQ, multi-select, calc, scenario) with instant feedback, explanations,
  worked solutions, timing, XP, adaptive recommendation
- ✅ Mock exams: timed full + topic, auto-submit, results & review
- ✅ Analytics: radar, bar, line, gauge, avg time, predicted score
- ✅ Gamification: XP/levels, badges, streaks, daily/weekly challenges, leaderboard
- ✅ Admin CMS: question authoring (create/edit/delete) UI over the data seam
- ✅ DB schema + RLS + seed SQL; TS domain types; analytics/adaptive/gamification libs

## Phased roadmap

| Phase | Theme | Deliverables |
|---|---|---|
| **0 — Foundations** ✅ | Spec & scaffold | Docs, Next.js, design tokens, UI kit, data seam, seed content, types |
| **1 — Learn & Practice** ✅ | Core loop | Learn map, quiz player, instant feedback, XP, attempts |
| **2 — Measure** ✅ | Insight | Dashboard, analytics charts, readiness model |
| **3 — Exams & Gamify** ✅ | Stickiness | Mock player, results/review, badges, challenges, leaderboard |
| **4 — Author** ✅ | Content ops | Admin CMS over data seam |
| **5 — Productionise** ⏭ | Real backend | Flip Supabase provider, deploy migrations, seed prod, Vercel deploy |
| **6 — Adaptive++** ⏭ | Personalisation | Spaced-repetition scheduler, smarter recommendations, study-plan UI |
| **7 — AI** ⏭ | Intelligence | AI tutor, generated explanations, revision plans (see 09-ai-features) |
| **8 — Scale** ⏭ | Growth | Payments, teams/firms, mobile (Expo), notifications, i18n |

## Definition of Done (each feature)
Typed · accessible (keyboard + contrast) · responsive · dark/light · server-first ·
goes through `lib/data` · documented contract.

## Out of scope for v1
Payments, real email delivery, native mobile, multi-tenant firm admin, content marketplace.

# ACA Academy — API Architecture & Folder Structure

## 1. API approach

The app is **server-first**. Most reads happen in Server Components; mutations use
**Server Actions** (no hand-written REST layer needed for the web client). A thin set of
**Route Handlers** is reserved for things that need an HTTP surface (webhooks, future mobile).

All data access funnels through the typed **data seam** in `src/lib/data/` so the rest of the
app never imports Supabase directly.

### Data-access contract (`src/lib/data/index.ts`)

| Function | Reads/Writes | Used by |
|---|---|---|
| `getCourses()` / `getCourseTree(level)` | content | Learn map |
| `getTopic(id)` / `getQuestionsForTopic(id)` | content | Practice |
| `getDashboard(userId)` | aggregate | Dashboard |
| `getProgress(userId)` | progress | Analytics, map |
| `recordAttempt(input)` | write attempt + xp + progress + daily | Practice/mock (server action) |
| `getExam(id)` / `submitExam(input)` | exams | Mock player |
| `getLeaderboard()` | view | Leaderboard |
| `getGamification(userId)` | xp/badges/challenges | Gamification |
| Admin: `upsertQuestion`, `deleteQuestion`, `upsertExam` | content write | Admin CMS |

Two providers implement the contract:
- **`seed/`** — pure in-memory (deterministic) for MVP/demo/CI.
- **`supabase/`** — real Postgres via `@supabase/ssr`. Selected when `NEXT_PUBLIC_USE_SUPABASE=true`.

### Route Handlers (reserved)
`/api/health` (liveness) · `/api/leaderboard` (cacheable JSON, future mobile) ·
`/api/og/*` (dynamic share images, future).

## 2. Folder structure

```
src/
  app/
    (marketing)/            # public landing
      page.tsx
    (auth)/
      login/page.tsx
      signup/page.tsx
    (app)/                  # authenticated shell (sidebar + topbar)
      layout.tsx
      dashboard/page.tsx
      learn/page.tsx
      learn/[topic]/page.tsx
      practice/page.tsx
      mock/page.tsx
      mock/[exam]/page.tsx
      analytics/page.tsx
      gamification/page.tsx
      admin/page.tsx
      settings/page.tsx
    api/health/route.ts
    layout.tsx  globals.css
  components/
    ui/        # shadcn-style primitives (button, card, dialog, tabs, progress…)
    layout/    # sidebar, topbar, theme-toggle, mobile-nav
    dashboard/ learn/ practice/ analytics/ gamification/
  lib/
    data/      # the seam: index.ts + seed/ + supabase/
    supabase/  # client/server/middleware helpers
    analytics.ts adaptive.ts gamification.ts utils.ts
  data/        # seed content (courses, topics, questions, achievements)
  types/       # domain.ts (TS mirror of schema)
  hooks/
docs/                       # this documentation set
supabase/migrations/        # SQL: schema, RLS, seed
```

## 3. Conventions

- Server Components by default; add `"use client"` only for interactivity.
- Mutations are Server Actions in `actions.ts` colocated with the route, delegating to `lib/data`.
- UI never imports `@supabase/*` directly — always through `lib/data`.
- Domain types are the single source of truth shared by both providers and the UI.

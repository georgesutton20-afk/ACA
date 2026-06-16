# ACA Academy — Technical Architecture

## 1. Stack (and why)

| Layer | Choice | Rationale |
|---|---|---|
| Framework | **Next.js 16 (App Router, RSC)** | SSR/streaming, server actions, file routing, Vercel-native. |
| Language | **TypeScript (strict)** | Type-safe domain model end-to-end. |
| UI | **React 19 + Tailwind v4 + shadcn-style components on Radix** | Accessible primitives, design-token theming, fast iteration. |
| Charts | **Recharts** | Declarative, responsive, themable analytics. |
| Backend | **Supabase (Postgres + Auth + RLS + Storage)** | Managed Postgres, auth, row-level security, edge-ready. |
| Auth | **Supabase Auth (`@supabase/ssr`)** | Cookie-based sessions that work with RSC + middleware. |
| Theming | **next-themes** | System/dark/light, no FOUC. |
| Deploy | **Vercel** | First-class Next.js hosting, preview deploys. |

## 2. Why this shape

- **Server Components by default**: data fetching and heavy logic run on the server; ship
  less JS. Interactive islands (charts, quiz player, map) are explicit Client Components.
- **A data-access seam (`src/lib/data`)**: every read/write goes through typed functions.
  In MVP these resolve to a deterministic **seed dataset**; flipping `NEXT_PUBLIC_USE_SUPABASE=true`
  routes the same functions to Supabase. This lets the app run end-to-end with zero infra,
  while the production path is real and tested in code.
- **RLS-first**: user-owned rows (`attempts`, `progress`, `user_xp`, …) are protected by
  policies keyed on `auth.uid()`. The client never trusts the browser for ownership.

## 3. High-level diagram

```
┌────────────────────────────────────────────────────────────────┐
│                          Browser (PWA-ready)                     │
│   RSC HTML  ◄──stream──┐         Client islands: QuizPlayer,      │
│                        │         Charts, LearnMap, ThemeToggle    │
└─────────────┬──────────┴───────────────────────────────────────┘
              │ HTTP (cookies: sb session)
┌─────────────▼────────────────────────────────────────────────────┐
│                     Next.js on Vercel                              │
│  middleware (auth refresh)                                         │
│  app/ (routes)  ──►  server actions  ──►  lib/data (typed seam)    │
│                                            ├── seed provider (MVP) │
│                                            └── supabase provider   │
└─────────────┬──────────────────────────────────────────────────────┘
              │ supabase-js / @supabase/ssr
┌─────────────▼────────────────────────────────────────────────────┐
│  Supabase: Postgres (schema + RLS) · Auth · Storage · Edge Fns     │
└────────────────────────────────────────────────────────────────────┘
```

## 4. Rendering & data strategy

- **Dashboard / analytics**: Server Components compute aggregates (cacheable per user).
- **Practice / mock player**: Client island holds session state; results persisted via
  server action → `lib/data.recordAttempt`.
- **Learn map**: Server-rendered structure + client interactivity for node selection.
- **Revalidation**: `revalidatePath` / tag-based invalidation after writes.

## 5. Auth flow

1. `middleware.ts` calls `@supabase/ssr` to refresh the session cookie on every request.
2. Server Components read the user via `createServerClient`.
3. Protected routes live under `app/(app)` and redirect to `/login` when unauthenticated.
4. MVP also supports a **guest/demo mode** so the product is explorable without signup.

## 6. Adaptive engine (v1)

Rule + Elo-style rating per `(user, topic)`:
- Each question has a difficulty rating; each user-topic has a skill rating.
- After an attempt, update ratings (logistic expected-score). Weak topics = low skill +
  high recent error rate. Recommendations pull unseen/low-mastery items near the user's level.
Documented in `docs/04-analytics-models.md`.

## 7. Environments & config

- `.env.local` (see `.env.example`): Supabase URL/anon key, `NEXT_PUBLIC_USE_SUPABASE` flag.
- Without env vars the app runs on seed data — ideal for local dev, demos and CI.

## 8. Observability & quality

- TypeScript strict, ESLint. Component contracts documented.
- Future: Vercel Analytics, Sentry, Supabase logs.

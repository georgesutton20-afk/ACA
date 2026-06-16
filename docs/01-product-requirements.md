# ACA Academy — Product Requirements Document (PRD)

> Working title: **ACA Academy**. A modern, interactive learning platform that helps
> aspiring and current ICAEW ACA trainees prepare for their exams through structured
> learning paths, adaptive question practice, timed mock exams, deep analytics and
> gamification. Think *Duolingo × Brilliant.org × premium SaaS*.

---

## 1. Vision & Goals

**Vision:** Make ACA exam preparation feel motivating, measurable and personal —
turning a famously dry professional qualification into a focused, game-like daily habit.

**Primary goals**

1. Increase trainee exam pass rates by surfacing weaknesses early and drilling them.
2. Build a daily study habit through streaks, goals and gamification.
3. Give trainees an honest, data-driven **exam readiness** signal.
4. Give content admins/tutors tools to author and maintain a high-quality question bank.

**Non-goals (for v1)**

- We are not an accredited tuition provider; content is supplementary practice.
- No live 1:1 human tutoring marketplace (AI tutor is a future feature, see §10).
- No payments/billing in the MVP (architected for later, not built).

---

## 2. Target Users & Personas

| Persona | Description | Key needs |
|---|---|---|
| **Aspiring trainee (Priya)** | Considering the ACA, exploring Certificate Level. | Low-friction onboarding, clear roadmap, motivation. |
| **Current trainee (Tom)** | Employed at a firm, sitting Professional Level exams. | Efficient revision, weakness targeting, realistic mocks. |
| **Finalist (Sara)** | Sitting Advanced Level (Case Study). | Exam-condition practice, performance forecasting. |
| **Content admin / tutor (Admin)** | Authors and curates questions and mocks. | Fast authoring, analytics on item difficulty. |

---

## 3. The ACA Qualification (domain model)

The ICAEW ACA has **three levels** and 15 exams (modules). ACA Academy models them as
`Course → Module → Topic → Sub-topic → Learning Objective`.

- **Certificate Level (6 modules):** Accounting, Assurance, Business, Technology &
  Finance, Law, Management Information, Principles of Taxation.
- **Professional Level (6 modules):** Audit & Assurance, Financial Accounting & Reporting,
  Tax Compliance, Business Planning: Taxation, Financial Management, Business Strategy & Technology.
- **Advanced Level (3 modules):** Corporate Reporting, Strategic Business Management,
  Case Study.

> Content is illustrative/practice-oriented. The schema is qualification-agnostic so other
> tracks (e.g. ACCA, CIMA) could be added without migration.

---

## 4. Core Features (MVP scope in **bold**)

### 4.1 Dashboard
- **Overall progress %**, **current streak**, **exam readiness score**, **topics mastered**,
  **topics needing improvement**, **upcoming exam dates**, **daily goal**, **weekly stats**.

### 4.2 Learning Paths
- **Duolingo-style progression map** per level → module → topic nodes with lock/unlock,
  mastery rings and XP. Learning objectives shown per topic.

### 4.3 Question Bank
- Item types: **MCQ**, **multi-select**, **calculation (numeric)**, **scenario-based**,
  long-form written (graded by rubric/self-mark in v1).
- **Instant feedback, detailed explanations, worked solutions, related concepts,
  difficulty rating, time-taken tracking.**

### 4.4 Mock Exams
- **Full timed exams**, **topic-specific exams**, **review completed exams**, mistake
  analysis, performance-over-time comparison.

### 4.5 Performance Analytics
- **Topic strengths/weaknesses, accuracy, avg time/question, predicted score,
  readiness forecast** — all visualised with Recharts.

### 4.6 Gamification
- **XP, levels, badges, streaks, daily/weekly challenges, milestones, celebrations**,
  leaderboards.

### 4.7 Adaptive Learning
- **Detect weak topics, recommend questions, build personalised plan, auto-adjust difficulty**
  (rule/Elo-based in v1; ML later).

### 4.8 Content Management (Admin)
- Add/edit questions, upload past-paper-style items, create mock exams, manage content.

---

## 5. Functional Requirements (selected, testable)

- **FR-1** A learner can register, log in and complete onboarding selecting a target level
  and exam date.
- **FR-2** The dashboard computes readiness from accuracy, coverage and recency (see
  `docs/04-analytics-models.md` formulas).
- **FR-3** Practising a question records an `attempt` with correctness and time taken.
- **FR-4** Completing a question immediately shows feedback + explanation.
- **FR-5** A streak increments once per UTC-day with ≥1 completed activity; misses reset it.
- **FR-6** XP awarded per correct answer scales with difficulty; levels derive from total XP.
- **FR-7** A mock exam enforces a countdown timer and auto-submits at zero.
- **FR-8** Admins (role=`admin`) can CRUD questions; learners cannot.

## 6. Non-Functional Requirements

- **Performance:** First load JS budget < 200KB per route where feasible; LCP < 2.5s on 4G.
- **Accessibility:** WCAG 2.1 AA — keyboard nav, focus states, ARIA, contrast, reduced-motion.
- **Responsive:** Mobile-first; works 360px → 4K.
- **Security:** Supabase Row Level Security on all user-owned tables; least-privilege.
- **Theming:** System/dark/light via `next-themes`, no flash.

## 7. Success Metrics (KPIs)

D1/D7/D30 retention · DAU/MAU · avg questions/day · streak length · mock-score trend ·
self-reported confidence · readiness-vs-outcome calibration.

## 8. Release Phasing
See `docs/08-roadmap.md`. MVP = Dashboard, Learn map, Practice, Mock, Analytics, Gamification
(local/seed data) with Supabase auth + schema ready to switch on.

## 9. Risks & Assumptions
- Content authenticity: clearly label as practice content; no copyrighted past papers shipped.
- Readiness model is heuristic; communicated as an *estimate*, calibrated over time.

## 10. AI Features (future)
Personal tutor, AI explanations, revision-plan generation, weakness analysis, exam prediction
— see `docs/09-ai-features.md`.

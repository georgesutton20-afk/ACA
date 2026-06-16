# ACA Academy — User Journeys & Wireframes

## 1. Primary user journeys

### J1 — Onboarding (new trainee)
`Landing → Sign up → choose target level + exam date + daily goal → Dashboard (empty state with
"start your first lesson" CTA) → Learn map → first topic → Practice → instant feedback → first XP +
"First Steps" badge celebration.`

### J2 — Daily study habit (returning trainee)
`Open app → Dashboard shows streak + today's goal ring + recommended weak topics →
"Continue" → adaptive practice set → goal ring fills → streak increments → challenge progress.`

### J3 — Mock exam
`Mock → pick full/topic exam → confirm timed start → countdown player → submit (or auto-submit) →
results: score, pass/fail, per-question review, mistake analysis → "compare over time".`

### J4 — Weakness drill (analytics-led)
`Analytics → radar/bar reveals weak topics → "Practise this" → adaptive set targeting weak topic →
mastery ring updates on Learn map.`

### J5 — Admin authoring
`Admin → Questions → New → pick type/topic/difficulty → add stem/choices/explanation/worked
solution → publish → appears in bank + adaptive pool.`

## 2. Wireframes (low-fidelity, ASCII)

### Dashboard
```
┌─────────────────────────────────────────────────────────────┐
│ [≡] ACA Academy        Search…           🔥7  Lv4  ☾/☀  (av) │
├──────────┬──────────────────────────────────────────────────┤
│ Sidebar  │  Welcome back, Tom 👋                             │
│ • Dash   │  ┌Readiness─┐ ┌Streak─┐ ┌Mastered┐ ┌Daily goal─┐  │
│ • Learn  │  │  ◔ 68    │ │ 🔥 7d │ │  9/24  │ │ ◔ 40/50xp │  │
│ • Practice│  └─────────┘ └───────┘ └────────┘ └───────────┘  │
│ • Mock   │  ┌Weekly study (area chart)──────────────────────┐│
│ • Stats  │  │  ▁▃▅▂▆▇▃                                       ││
│ • Trophy │  └───────────────────────────────────────────────┘│
│ • Admin  │  Needs improvement     |  Upcoming exams           │
│ • Settings│  ▸ Deferred tax  41%   |  Tax Compliance  12 Jul   │
│          │  ▸ Consolidation 47%   |  Recommended: Continue ▸  │
└──────────┴──────────────────────────────────────────────────┘
```

### Learn map (Duolingo-style)
```
   ┌Certificate ▸ Professional ▸ Advanced┐  (level tabs)
        ( Accounting )──✓
              │
        ( Assurance )──◑ 60%
              │
        ( Tax )──🔒        ← lock until prereq mastery
   nodes = topics; ring = mastery; tap → topic detail + Practice
```

### Quiz player
```
┌ Topic: Deferred tax        ⏱ 00:42      Q 3/10  XP +12 ┐
│ Scenario (optional)…                                    │
│ Stem markdown…                                          │
│ ( ) A  ( ) B  (•) C  ( ) D                              │
│ [ Check ]                          combo ×2 🔥          │
│ ── after check ──                                       │
│ ✓ Correct! explanation + worked solution + related ▸    │
└─────────────────────────────────────────────────────────┘
```

### Analytics
```
[ Radar: topic strengths ]  [ Line: mock score trend ]
[ Bar: accuracy by topic ]  [ Gauge: readiness 68 ]  [ avg time/q ]
```

### Mock results
```
Score 64%  PASS ✓   |  time 78/90m
Per-question: ✓✓✗✓✗… click → review with explanation
Mistakes grouped by topic → "Drill these"
```

> High-fidelity realisation of these wireframes is the implemented UI in `src/app/(app)/*`.

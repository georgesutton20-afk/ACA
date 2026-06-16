# ACA Academy — UI Design System

A premium, minimal, confident learning aesthetic. Calm neutrals, one decisive brand colour,
generous spacing, rounded geometry, soft elevation, motion that rewards.

## 1. Brand

- **Name:** ACA Academy. **Voice:** encouraging, precise, never patronising.
- **Primary:** Indigo/violet `--primary` (oklch, see `globals.css`). Signals focus + intellect.
- **Accents:** emerald (success/mastery), amber (streak/warning), rose (errors/weakness).

## 2. Color tokens (CSS variables, light + dark)

Defined in `src/app/globals.css` as oklch tokens consumed by Tailwind v4 `@theme`:
`--background --foreground --card --popover --primary --secondary --muted --accent
--destructive --success --warning --border --input --ring` plus chart palette
`--chart-1…5`. Dark mode toggled via `.dark` class (next-themes, `class` strategy).

Contrast targets: body text ≥ 4.5:1, large/UI ≥ 3:1 (WCAG AA).

## 3. Typography

- Sans: **Geist** (display + body). Mono: **Geist Mono** (numbers, code, timers).
- Scale (rem): 0.75 / 0.875 / 1 / 1.125 / 1.25 / 1.5 / 1.875 / 2.25 / 3.
- Tabular numbers for stats/timers (`font-variant-numeric: tabular-nums`).

## 4. Spacing, radius, elevation

- 4px base scale. Container max-w 1200–1280px, gutters 16/24px.
- Radius: `--radius` 0.75rem; cards `xl`, controls `lg`, pills `full`.
- Elevation: subtle (`shadow-sm`), card (`shadow`), popover (`shadow-lg`). No harsh shadows.

## 5. Components (shadcn-style, on Radix)

Button · Card · Badge · Progress · Ring/RadialProgress · Tabs · Dialog · Dropdown · Tooltip ·
Avatar · Switch · Select · Separator · Skeleton · Toast. Each via `cva` variants + `cn()` merge.

Domain components: `StatCard`, `StreakFlame`, `LevelBadge`, `MasteryRing`, `LearnMap`,
`QuizPlayer`, `XPBar`, `AchievementCard`, `ReadinessGauge`, chart wrappers.

## 6. Motion

- `framer`-free: CSS transitions + Tailwind keyframes (`fade-in`, `pop`, `progress-fill`,
  `confetti`). Durations 150–300ms; spring-ish easing `cubic-bezier(.22,1,.36,1)`.
- **Respect `prefers-reduced-motion`** — disable non-essential animation.

## 7. Charts (Recharts)

Themed via CSS variables. Line (score trend), Radar (topic strengths), Bar (accuracy by topic),
Radial (readiness gauge), Area (weekly study). Always responsive, with accessible color +
labels, never color-only encoding.

## 8. Accessibility

Keyboard-complete, visible focus rings (`--ring`), ARIA on interactive widgets, semantic
landmarks, alt text, reduced-motion, and color contrast verified for both themes.

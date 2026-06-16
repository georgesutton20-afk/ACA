# ACA Academy — Analytics, Readiness & Adaptive Models

These are transparent heuristics (v1). They are deterministic, explainable to learners, and
implemented in [`src/lib/analytics.ts`](../src/lib/analytics.ts) and
[`src/lib/adaptive.ts`](../src/lib/adaptive.ts).

## 1. Topic mastery (0–1)

```
accuracy   = correct_count / max(attempts_count, 1)
volume     = min(attempts_count / TARGET_ATTEMPTS, 1)        // TARGET_ATTEMPTS = 12
recency    = decay(days_since_last_practiced, half_life=14d) // 0.5^(days/14)
mastery    = 0.6*accuracy + 0.25*volume + 0.15*recency
```
A topic is **mastered** at `mastery ≥ 0.8`, **needs improvement** at `mastery < 0.5` with
`attempts_count ≥ 3` (we don't flag untouched topics as weak).

## 2. Exam readiness score (0–100)

```
coverage   = topics_practiced / topics_total
depth      = mean(mastery over practiced topics)
mock       = normalised(latest mock score, default 0.5 if none)
readiness  = round(100 * (0.45*depth + 0.30*coverage + 0.25*mock))
```
Bucketed for UI: 0–39 *Building*, 40–69 *On track*, 70–84 *Exam ready soon*, 85–100 *Exam ready*.

## 3. Predicted exam score

Weighted blend of recent practice accuracy (recency-weighted) and mock performance,
regressed toward the module pass mark to avoid overconfidence from small samples:

```
predicted = clamp( 0.5*recentAccuracy*100 + 0.5*meanMockScore , 0, 100 )
            shrunk toward 55 by factor (1 - min(n,30)/30)
```

## 4. Streaks

A day counts if `daily_activity.questions ≥ 1`. On activity:
- same day → no change; consecutive day → `current_streak += 1`; gap > 1 day → reset to 1.
- `longest_streak = max(longest_streak, current_streak)`. Optional `freezes` protect one miss.

## 5. XP & levels

```
xp(correct)   = base[difficulty] (easy 8 / medium 12 / hard 18) * comboMultiplier
level(totalXp)= floor( (sqrt(1 + 8*totalXp/100) - 1) / 2 ) + 1   // gentle quadratic curve
```
`xpForLevel(n)` and `progressToNextLevel` are exported for the UI.

## 6. Adaptive difficulty (Elo)

Per attempt, update item and user-topic ratings:
```
expected = 1 / (1 + 10^((itemRating - userRating)/400))
userRating += K * (score - expected)         // K = 24
itemRating -= K * (score - expected)
```
**Recommendation:** from the learner's weakest topics, pick published, less-seen questions whose
`rating` is within ±100 of the user's topic `skill_rating` (slightly above for stretch). Falls
back to medium difficulty when no rating exists.

## 7. Personalised study plan

Greedy scheduler over days-until-exam: each day, allocate the daily-goal XP across the
N weakest topics (weighted by `1 - mastery`), interleaving review of recently-missed items
(spaced repetition lite). Output is a list of `{ day, topicId, targetQuestions }`.

# ACA Academy — AI Features (Future Design)

Designed for, not built in, v1. The data seam + attempt/progress history give these features
clean inputs. Provider: **Claude** (Anthropic API) using the latest models (e.g. Opus / Sonnet
4.x) via server-only calls; keys never reach the client.

## 1. Personal Tutor (chat)
Context-grounded chat scoped to the current topic/question. System prompt includes the topic's
learning objectives, the learner's recent mistakes (`attempts`), and the worked solution as
grounding. Streamed responses via a Route Handler (`/api/tutor`) + server action. Guardrails:
answer-leak protection during active mock; cite the source explanation.

## 2. AI Question Explanations
On-demand "explain differently" / "explain like I'm new" buttons. Takes `question.stem`,
chosen answer, correct answer, and base explanation; returns an alternative explanation. Cached
per `(question_id, variant)` to control cost.

## 3. Revision Plan Generation
Input: exam date, target level, current `progress` mastery vector, daily goal. Output: a
day-by-day plan (mirrors `adaptive.ts` scheduler but with LLM-authored rationale and ordering).
Stored so it can be tracked and regenerated weekly.

## 4. Weakness Analysis (narrative)
Turns the analytics vectors into plain-English coaching: "Your deferred-tax accuracy dropped to
41% and you're slow on consolidations — here's a 3-day fix." Strictly grounded in computed stats.

## 5. Exam Prediction (explainable)
Augments the heuristic predicted score with an LLM-written confidence narrative and the top
drivers. The number stays heuristic/auditable; the LLM only explains it.

## 6. (Stretch) AI question authoring assist for admins
Draft new items from a learning objective; human admin reviews/edits before publish. Never
auto-publishes.

## Architecture notes
- All LLM calls server-side (Route Handlers / server actions); rate-limited + cost-capped.
- Inputs are computed facts (no hallucinated stats); outputs are advisory, clearly labelled AI.
- Feature-flagged; degrades gracefully to the heuristic experience when disabled.

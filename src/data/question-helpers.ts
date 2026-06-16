// Shared builders for the authored question bank.
import type { Answer, Difficulty, Question } from "@/types/domain";

let aSeq = 0;

export function ratingFor(d: Difficulty) {
  return d === "easy" ? 1050 : d === "hard" ? 1400 : 1200;
}

/** Build a multiple-choice / multi-select / scenario question with answers. */
export function mc(
  q: Omit<Question, "answers" | "rating" | "isPublished" | "estSeconds"> & {
    estSeconds?: number;
    rating?: number;
  },
  choices: [string, boolean, string?][],
): Question {
  const answers: Answer[] = choices.map(([label, isCorrect, feedback], i) => ({
    id: `a-${q.id}-${i}-${aSeq++}`,
    questionId: q.id,
    label,
    isCorrect,
    feedback,
    sortOrder: i,
  }));
  return {
    ...q,
    rating: q.rating ?? ratingFor(q.difficulty),
    estSeconds: q.estSeconds ?? 75,
    isPublished: true,
    answers,
  };
}

/** Build a numeric-entry (calculation) question. */
export function calc(
  q: Omit<Question, "answers" | "rating" | "isPublished" | "type" | "estSeconds"> & {
    rating?: number;
    estSeconds?: number;
  },
): Question {
  return {
    ...q,
    type: "calc",
    rating: q.rating ?? ratingFor(q.difficulty),
    estSeconds: q.estSeconds ?? 120,
    isPublished: true,
  };
}

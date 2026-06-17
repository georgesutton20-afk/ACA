// Seed question bank. Curated, illustrative ACA-style questions across types,
// plus a deterministic generator so every topic has practice material.
import type { Answer, Difficulty, Question, QuestionType } from "@/types/domain";
import { topics } from "@/data/curriculum";
import { extraQuestions } from "@/data/questions-extra";
import { farQuestions } from "@/data/questions-far";
import { accQuestions } from "@/data/questions-acc";
import { assQuestions } from "@/data/questions-ass";
import { btfQuestions } from "@/data/questions-btf";
import { lawQuestions } from "@/data/questions-law";
import { miQuestions } from "@/data/questions-mi";

let aSeq = 0;
function mc(
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
    estSeconds: q.estSeconds ?? 60,
    isPublished: true,
    answers,
  };
}

function ratingFor(d: Difficulty) {
  return d === "easy" ? 1050 : d === "hard" ? 1400 : 1200;
}

export const curatedQuestions: Question[] = [
  // ── Accounting: double-entry
  mc(
    {
      id: "q-acc-1",
      topicId: "t-acc-de",
      type: "mcq",
      difficulty: "easy",
      stem: "A business buys office supplies for £200 cash. Which entry records this?",
      explanation:
        "Buying supplies for cash increases an expense/asset (debit) and decreases cash (credit). The double entry must balance.",
      workedSolution: "Dr Office supplies £200\nCr Cash £200",
      relatedConcepts: ["Debits & credits", "The accounting equation"],
    },
    [
      ["Dr Cash £200, Cr Supplies £200", false, "This reverses the entry — cash is going out, not in."],
      ["Dr Supplies £200, Cr Cash £200", true, "Correct — the asset/expense is debited and cash credited."],
      ["Dr Supplies £200, Cr Payables £200", false, "Only if bought on credit; here it is cash."],
      ["Dr Cash £200, Cr Payables £200", false, "Neither account is correct for a cash purchase of supplies."],
    ],
  ),
  // ── Accounting: accruals
  mc(
    {
      id: "q-acc-2",
      topicId: "t-acc-adj",
      type: "mcq",
      difficulty: "medium",
      stem: "At year-end, £1,500 of electricity has been consumed but not yet invoiced. What adjustment is needed?",
      explanation:
        "Under the accruals concept the expense belongs to the period in which it is incurred, so an accrual (liability) is recognised.",
      workedSolution: "Dr Electricity expense £1,500\nCr Accruals (liability) £1,500",
      relatedConcepts: ["Accruals concept", "Matching"],
    },
    [
      ["Accrue £1,500: Dr expense, Cr accruals", true, "Correct — match the cost to the period incurred."],
      ["Prepay £1,500: Dr prepayment, Cr expense", false, "A prepayment is for costs paid in advance, not the reverse."],
      ["No adjustment until the invoice arrives", false, "That breaches the accruals concept."],
      ["Dr accruals, Cr expense £1,500", false, "This is the wrong direction."],
    ],
  ),
  // ── MI: CVP (calc)
  {
    id: "q-mi-1",
    topicId: "t-mi-cvp",
    type: "calc",
    difficulty: "medium",
    stem: "A product sells for £40 with variable costs of £25 per unit. Fixed costs are £60,000. How many units must be sold to break even?",
    explanation:
      "Breakeven units = fixed costs ÷ contribution per unit. Contribution = £40 − £25 = £15.",
    workedSolution: "Contribution = 40 − 25 = £15\nBreakeven = 60,000 ÷ 15 = 4,000 units",
    relatedConcepts: ["Contribution", "Margin of safety"],
    numericAnswer: 4000,
    numericTolerance: 0,
    unit: "units",
    rating: 1220,
    estSeconds: 90,
    isPublished: true,
  },
  // ── MI: CVP margin of safety (calc)
  {
    id: "q-mi-2",
    topicId: "t-mi-cvp",
    type: "calc",
    difficulty: "hard",
    stem: "Using the same product (price £40, variable cost £25, fixed costs £60,000), if budgeted sales are 5,000 units, what is the margin of safety as a %? Give your answer to the nearest whole percent.",
    explanation:
      "Margin of safety % = (budgeted − breakeven) ÷ budgeted. Breakeven is 4,000 units.",
    workedSolution: "MoS = (5,000 − 4,000) ÷ 5,000 = 20%",
    relatedConcepts: ["Breakeven", "Margin of safety"],
    numericAnswer: 20,
    numericTolerance: 0,
    unit: "%",
    rating: 1380,
    estSeconds: 120,
    isPublished: true,
  },
  // ── Tax: income tax (calc)
  {
    id: "q-tax-1",
    topicId: "t-tax-it",
    type: "calc",
    difficulty: "medium",
    stem: "An individual has employment income of £50,000 and the personal allowance is £12,570. Using a basic rate of 20% on the basic-rate band (next £37,700), what is the income tax on their non-savings income?",
    explanation:
      "Taxable income = 50,000 − 12,570 = £37,430, all within the basic-rate band, taxed at 20%.",
    workedSolution: "Taxable = 50,000 − 12,570 = 37,430\nTax = 37,430 × 20% = £7,486",
    relatedConcepts: ["Personal allowance", "Tax bands"],
    numericAnswer: 7486,
    numericTolerance: 1,
    unit: "£",
    rating: 1240,
    estSeconds: 120,
    isPublished: true,
  },
  // ── FAR: revenue (scenario, multi-select)
  mc(
    {
      id: "q-far-1",
      topicId: "t-far-rev",
      type: "multi",
      difficulty: "hard",
      scenario:
        "Nimbus Ltd sells software with 12 months of support. The licence and the support are distinct. The total price is £1,200, with stand-alone prices of £900 (licence) and £300 (support).",
      stem: "Which of the following are correct under IFRS 15? Select all that apply.",
      explanation:
        "There are two performance obligations. The transaction price is allocated on relative stand-alone selling prices: £900 to the licence (recognised at the point control transfers) and £300 to support (recognised over the 12 months).",
      workedSolution:
        "Licence: 1,200 × 900/1,200 = £900 at a point in time.\nSupport: 1,200 × 300/1,200 = £300 over 12 months (£25/month).",
      relatedConcepts: ["Performance obligations", "Transaction price allocation"],
    },
    [
      ["There are two performance obligations", true, "Correct — the licence and support are distinct."],
      ["£900 is recognised when the licence is transferred", true, "Correct — licence revenue is point-in-time."],
      ["All £1,200 is recognised immediately", false, "No — support is recognised over time."],
      ["£300 is recognised evenly over 12 months", true, "Correct — £25 per month for the support obligation."],
    ],
  ),
  // ── FAR: deferred tax (mcq)
  mc(
    {
      id: "q-far-2",
      topicId: "t-far-tax",
      type: "mcq",
      difficulty: "hard",
      stem: "An asset has a carrying amount of £100,000 and a tax base of £60,000. The tax rate is 25%. What deferred tax balance arises?",
      explanation:
        "Carrying amount > tax base gives a taxable temporary difference of £40,000, so a deferred tax liability of £40,000 × 25% = £10,000.",
      workedSolution: "Temp diff = 100,000 − 60,000 = 40,000\nDT liability = 40,000 × 25% = £10,000",
      relatedConcepts: ["Temporary differences", "Tax base"],
    },
    [
      ["Deferred tax liability £10,000", true, "Correct — a taxable temporary difference creates a DT liability."],
      ["Deferred tax asset £10,000", false, "An asset arises from deductible differences (carrying < tax base)."],
      ["Deferred tax liability £25,000", false, "You have applied the rate to the carrying amount, not the difference."],
      ["No deferred tax arises", false, "A £40,000 temporary difference exists."],
    ],
  ),
  // ── FM: investment appraisal (calc)
  {
    id: "q-fm-1",
    topicId: "t-fm-inv",
    type: "calc",
    difficulty: "medium",
    stem: "A project costs £100,000 now and returns £60,000 at the end of year 1 and £60,000 at the end of year 2. At a 10% discount rate (DF1=0.909, DF2=0.826), what is the NPV to the nearest £?",
    explanation: "NPV = −100,000 + 60,000×0.909 + 60,000×0.826.",
    workedSolution:
      "PV1 = 60,000 × 0.909 = 54,540\nPV2 = 60,000 × 0.826 = 49,560\nNPV = −100,000 + 54,540 + 49,560 = £4,100",
    relatedConcepts: ["NPV", "Discount factors"],
    numericAnswer: 4100,
    numericTolerance: 50,
    unit: "£",
    rating: 1230,
    estSeconds: 150,
    isPublished: true,
  },
  // ── Audit: planning (mcq)
  mc(
    {
      id: "q-aa-1",
      topicId: "t-aa-plan",
      type: "mcq",
      difficulty: "medium",
      stem: "Which best describes 'performance materiality'?",
      explanation:
        "Performance materiality is set below overall materiality to reduce the probability that the aggregate of uncorrected and undetected misstatements exceeds overall materiality.",
      relatedConcepts: ["Materiality", "Audit risk"],
    },
    [
      ["An amount set below overall materiality to allow for aggregation risk", true, "Correct."],
      ["The same as overall materiality", false, "It is deliberately set lower."],
      ["The level above which the auditor resigns", false, "That is not what materiality means."],
      ["A figure set by the client", false, "Materiality is the auditor's judgement."],
    ],
  ),
  // ── Assurance (mcq)
  mc(
    {
      id: "q-ass-1",
      topicId: "t-ass-proc",
      type: "mcq",
      difficulty: "easy",
      stem: "What level of assurance does a 'reasonable assurance' engagement provide?",
      explanation:
        "Reasonable assurance is high but not absolute, expressed positively (e.g. 'the financial statements give a true and fair view').",
      relatedConcepts: ["Levels of assurance", "Audit opinion"],
    },
    [
      ["High but not absolute, expressed positively", true, "Correct — e.g. a statutory audit opinion."],
      ["Limited, expressed negatively", false, "That describes a review engagement."],
      ["Absolute assurance", false, "No engagement gives absolute assurance."],
      ["No assurance", false, "An agreed-upon procedures engagement gives no assurance."],
    ],
  ),
  // ── Law (mcq)
  mc(
    {
      id: "q-law-1",
      topicId: "t-law-con",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is NOT an essential element for a valid simple contract?",
      explanation:
        "Offer, acceptance, consideration and intention to create legal relations are essential. Writing is generally not required for a simple contract.",
      relatedConcepts: ["Contract formation", "Consideration"],
    },
    [
      ["The contract must be in writing", true, "Correct — most simple contracts need not be written."],
      ["Offer and acceptance", false, "This is essential."],
      ["Consideration", false, "This is essential."],
      ["Intention to create legal relations", false, "This is essential."],
    ],
  ),
  // ── BTF (mcq)
  mc(
    {
      id: "q-btf-1",
      topicId: "t-btf-fin",
      type: "mcq",
      difficulty: "medium",
      stem: "Which source of finance typically carries the lowest cost to a profitable company, ignoring issue costs?",
      explanation:
        "Debt is usually cheaper than equity because interest is tax-deductible and lenders bear less risk than shareholders.",
      relatedConcepts: ["Cost of capital", "Gearing"],
    },
    [
      ["Debt finance", true, "Correct — interest is tax-deductible and lower risk than equity."],
      ["Ordinary shares", false, "Equity is generally the most expensive source."],
      ["Retained earnings at the cost of equity", false, "This carries the cost of equity, higher than debt."],
      ["Preference shares", false, "Usually between debt and ordinary equity."],
    ],
  ),
  // ── Corporate reporting (scenario mcq)
  mc(
    {
      id: "q-cr-1",
      topicId: "t-far-cons",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "P acquired 80% of S for £500,000 when S's net assets were £400,000. NCI is measured at its proportionate share of net assets.",
      stem: "What is the goodwill on acquisition?",
      explanation:
        "Goodwill = consideration + NCI − net assets acquired. NCI (proportionate) = 20% × 400,000 = 80,000.",
      workedSolution: "Goodwill = 500,000 + 80,000 − 400,000 = £180,000",
      relatedConcepts: ["Goodwill", "Non-controlling interest"],
    },
    [
      ["£180,000", true, "Correct — 500,000 + 80,000 NCI − 400,000."],
      ["£100,000", false, "This ignores the NCI share under the proportionate method."],
      ["£260,000", false, "This uses full goodwill / fair-value NCI, not stated here."],
      ["£500,000", false, "This is the consideration, not goodwill."],
    ],
  ),
];

// ── Deterministic filler so every topic is practiceable ────────────────────
const FILLER_TYPES: QuestionType[] = ["mcq", "mcq", "calc"];
function fillerForTopic(topicId: string, title: string, n: number): Question[] {
  const out: Question[] = [];
  for (let i = 0; i < n; i++) {
    const difficulty: Difficulty = i % 3 === 0 ? "easy" : i % 3 === 1 ? "medium" : "hard";
    const type = FILLER_TYPES[i % FILLER_TYPES.length];
    const id = `q-${topicId}-f${i}`;
    if (type === "calc") {
      const a = 12 + i * 3;
      const b = 4 + (i % 5);
      out.push({
        id,
        topicId,
        type: "calc",
        difficulty,
        stem: `Practice (${title}): a department reports a figure of ${a} units at £${b} each. What is the total value in £?`,
        explanation: "Multiply quantity by unit value.",
        workedSolution: `${a} × ${b} = £${a * b}`,
        relatedConcepts: [title],
        numericAnswer: a * b,
        numericTolerance: 0,
        unit: "£",
        rating: ratingFor(difficulty),
        estSeconds: 60,
        isPublished: true,
      });
    } else {
      out.push(
        mc(
          {
            id,
            topicId,
            type: "mcq",
            difficulty,
            stem: `Practice (${title}): which statement is most accurate regarding ${title.toLowerCase()}?`,
            explanation: `This reinforces the core principle of ${title.toLowerCase()}.`,
            relatedConcepts: [title],
          },
          [
            ["It applies the relevant ACA principle correctly", true, "Correct application of the principle."],
            ["It ignores the relevant standard", false, "Standards must be applied."],
            ["It double-counts the effect", false, "This would misstate the result."],
            ["It is never examinable", false, "This topic is examinable."],
          ],
        ),
      );
    }
  }
  return out;
}

// All hand-authored questions (the original curated set + the expanded bank).
const authoredQuestions: Question[] = [
  ...curatedQuestions,
  ...extraQuestions,
  ...farQuestions,
  ...accQuestions,
  ...assQuestions,
  ...btfQuestions,
  ...lawQuestions,
  ...miQuestions,
];

const fillerQuestions: Question[] = topics.flatMap((t) => {
  const authoredCount = authoredQuestions.filter((q) => q.topicId === t.id).length;
  const need = Math.max(0, 5 - authoredCount);
  return fillerForTopic(t.id, t.title, need);
});

export const questions: Question[] = [...authoredQuestions, ...fillerQuestions];

export function questionsForTopic(topicId: string) {
  return questions.filter((q) => q.topicId === topicId);
}
export function questionById(id: string) {
  return questions.find((q) => q.id === id);
}

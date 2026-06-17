// FAR (Financial Accounting & Reporting) — Professional Level question bank.
// Past-paper-equivalent: scenario-based computations + IFRS application, with
// worked solutions. Original questions (not copied from ICAEW past papers).
import type { Question } from "@/types/domain";
import { mc, calc } from "@/data/question-helpers";

export const farQuestions: Question[] = [
  // ── Revenue (IFRS 15) — t-far-rev
  calc({
    id: "f-far-rev-1",
    topicId: "t-far-rev",
    difficulty: "hard",
    scenario:
      "On 1 January 20X4 Aspen Ltd sells equipment for £500,000 with a 2-year servicing contract. The stand-alone selling prices are £460,000 (equipment) and £90,000 (2 years' servicing).",
    stem: "How much revenue should Aspen recognise for the equipment on delivery (1 Jan 20X4), to the nearest £?",
    explanation:
      "Allocate the £500,000 transaction price on relative stand-alone selling prices. Equipment share = 460/(460+90).",
    workedSolution: "Equipment = 500,000 × 460/550 = £418,182 (recognised at the point control transfers).",
    relatedConcepts: ["Transaction price allocation", "Performance obligations"],
    numericAnswer: 418182,
    numericTolerance: 50,
    unit: "£",
  }),
  mc(
    {
      id: "f-far-rev-2",
      topicId: "t-far-rev",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Bramble Ltd sells goods for £2m but, based on experience, expects returns of 4%. Control of the goods has transferred.",
      stem: "How should the expected returns be reflected under IFRS 15?",
      explanation:
        "Variable consideration: recognise revenue only to the extent highly probable it won't reverse. Recognise revenue of £1.92m, a refund liability of £80,000, and a corresponding right-to-recover-returned-goods asset.",
      relatedConcepts: ["Variable consideration", "Refund liability"],
    },
    [
      ["Recognise revenue of £1.92m and a refund liability of £80,000", true, "Correct — constrain revenue for expected returns."],
      ["Recognise the full £2m and ignore returns until they occur", false, "Variable consideration must be estimated and constrained."],
      ["Recognise no revenue until the return period ends", false, "Revenue is recognised now, net of expected returns."],
      ["Recognise £2m revenue and a £80,000 expense", false, "Returns reduce revenue via a refund liability, not an expense."],
    ],
  ),
  mc(
    {
      id: "f-far-rev-3",
      topicId: "t-far-rev",
      type: "mcq",
      difficulty: "medium",
      scenario:
        "Cedar Ltd arranges sales between hotels and customers, taking a 10% commission. It never controls the room before sale.",
      stem: "How should Cedar recognise revenue?",
      explanation:
        "Cedar is an agent (it does not control the service before transfer), so it recognises only the net commission, not the gross amount.",
      relatedConcepts: ["Principal vs agent", "Gross vs net"],
    },
    [
      ["As an agent — recognise only the net commission", true, "Correct — it does not control the service before transfer."],
      ["As a principal — recognise the gross room price", false, "Cedar never controls the room, so it is an agent."],
      ["No revenue until the customer checks out", false, "Timing is not the issue; agent vs principal is."],
      ["Half gross, half net", false, "There is no such split under IFRS 15."],
    ],
  ),

  // ── Leases (IFRS 16) — t-far-lease
  calc({
    id: "f-far-lease-1",
    topicId: "t-far-lease",
    difficulty: "hard",
    scenario:
      "On 1 Jan 20X4 Dune Ltd leases a machine: 4 annual payments of £20,000 in arrears, interest rate implicit 7% (4-year annuity factor 3.387). Dune also incurs £3,000 initial direct costs.",
    stem: "What is the initial carrying amount of the right-of-use asset, to the nearest £?",
    explanation:
      "ROU asset = initial lease liability (PV of payments) + initial direct costs (+ prepayments − incentives).",
    workedSolution: "Liability = 20,000 × 3.387 = 67,740\nROU = 67,740 + 3,000 = £70,740",
    relatedConcepts: ["Right-of-use asset", "Initial direct costs"],
    numericAnswer: 70740,
    numericTolerance: 50,
    unit: "£",
  }),
  calc({
    id: "f-far-lease-2",
    topicId: "t-far-lease",
    difficulty: "hard",
    scenario:
      "Using Dune Ltd's lease (initial liability £67,740, implicit rate 7%, £20,000 paid annually in arrears).",
    stem: "What is the lease liability carried forward at 31 December 20X4, to the nearest £?",
    explanation:
      "Interest accrues on the opening liability, then the payment reduces it. Closing = opening + interest − payment.",
    workedSolution: "Interest = 67,740 × 7% = 4,742\nClosing = 67,740 + 4,742 − 20,000 = £52,482",
    relatedConcepts: ["Lease liability", "Amortised cost"],
    numericAnswer: 52482,
    numericTolerance: 50,
    unit: "£",
  }),
  mc(
    {
      id: "f-far-lease-3",
      topicId: "t-far-lease",
      type: "mcq",
      difficulty: "medium",
      stem: "Under IFRS 16, which lease may a lessee elect NOT to capitalise (recognising payments as an expense instead)?",
      explanation:
        "Lessees may elect exemptions for short-term leases (≤12 months) and leases of low-value assets.",
      relatedConcepts: ["IFRS 16 exemptions", "Short-term leases"],
    },
    [
      ["A 9-month lease of office equipment", true, "Correct — a short-term lease (≤12 months) qualifies for the exemption."],
      ["A 5-year lease of a building", false, "Long-term leases must be capitalised."],
      ["A 10-year lease of machinery", false, "Must be capitalised."],
      ["Any lease the directors prefer to expense", false, "Exemptions are limited to short-term and low-value assets."],
    ],
  ),

  // ── Deferred tax (IAS 12) — t-far-tax
  calc({
    id: "f-far-tax-1",
    topicId: "t-far-tax",
    difficulty: "hard",
    scenario:
      "Elm Ltd revalues land upward by £200,000. The revaluation is not taxable until disposal. The tax rate is 25%.",
    stem: "What deferred tax balance arises on the revaluation (£)?",
    explanation:
      "A revaluation creates a taxable temporary difference, so a deferred tax liability — recognised against revaluation surplus (OCI).",
    workedSolution: "DT liability = 200,000 × 25% = £50,000",
    relatedConcepts: ["Revaluation", "Deferred tax liability", "OCI"],
    numericAnswer: 50000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "f-far-tax-2",
      topicId: "t-far-tax",
      type: "mcq",
      difficulty: "hard",
      stem: "A company has unused tax losses carried forward. When can it recognise a deferred tax asset for them?",
      explanation:
        "A deferred tax asset for losses is recognised only to the extent it is probable that future taxable profits will be available to use them.",
      relatedConcepts: ["Deferred tax asset", "Tax losses"],
    },
    [
      ["Only to the extent future taxable profits are probable", true, "Correct — recognition is restricted by probable future profits."],
      ["Always, in full, immediately", false, "Recognition depends on probable future taxable profits."],
      ["Never — tax losses cannot create a DT asset", false, "They can, subject to the recoverability test."],
      ["Only once the losses have actually been used", false, "That defeats the purpose of a deferred tax asset."],
    ],
  ),

  // ── Consolidation — t-far-cons
  calc({
    id: "f-far-cons-1",
    topicId: "t-far-cons",
    difficulty: "hard",
    scenario:
      "Fir Ltd acquired 80% of Gorse Ltd for £900,000. At acquisition Gorse's net assets were £950,000, including a property whose fair value exceeded book value by £100,000 (not yet reflected). NCI is measured at fair value of £210,000.",
    stem: "What is goodwill on acquisition under the full goodwill method (£)?",
    explanation:
      "Use fair-valued net assets: 950,000 + 100,000 = 1,050,000. Goodwill = consideration + FV of NCI − FV of net assets.",
    workedSolution: "FV net assets = 950,000 + 100,000 = 1,050,000\nGoodwill = 900,000 + 210,000 − 1,050,000 = £60,000",
    relatedConcepts: ["Goodwill", "Fair value adjustments", "NCI at fair value"],
    numericAnswer: 60000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "f-far-cons-2",
    topicId: "t-far-cons",
    difficulty: "hard",
    scenario:
      "Holly Ltd owns 30% of Ivy Ltd (an associate) bought for £400,000. In the year Ivy made a profit of £200,000 and paid total dividends of £50,000.",
    stem: "What is the carrying amount of the investment in associate at the year end, using the equity method (£)?",
    explanation:
      "Equity method: cost + share of post-acquisition profit − share of dividends received.",
    workedSolution: "= 400,000 + (30% × 200,000) − (30% × 50,000) = 400,000 + 60,000 − 15,000 = £445,000",
    relatedConcepts: ["Associates", "Equity method"],
    numericAnswer: 445000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "f-far-cons-3",
    topicId: "t-far-cons",
    difficulty: "hard",
    scenario:
      "Larch Ltd acquired 60% of Maple Ltd on 1 July 20X4 (half-way through the year). Maple's profit for the full year to 31 Dec 20X4 was £480,000, accruing evenly.",
    stem: "How much of Maple's profit is included in the consolidated profit, and what is the NCI share of post-acquisition profit (£)?",
    explanation:
      "Only post-acquisition profit (6 months = £240,000) is consolidated; NCI (40%) takes its share of that.",
    workedSolution: "Post-acq profit = 480,000 × 6/12 = 240,000\nNCI share = 40% × 240,000 = £96,000",
    relatedConcepts: ["Mid-year acquisition", "Non-controlling interest"],
    numericAnswer: 96000,
    numericTolerance: 0,
    unit: "£",
  }),

  // ── PPE & impairment (IAS 16/36) — t-far-ppe
  calc({
    id: "f-far-ppe-1",
    topicId: "t-far-ppe",
    difficulty: "hard",
    scenario:
      "An asset has a carrying amount of £500,000. Its fair value less costs to sell is £420,000 and its value in use is £450,000.",
    stem: "What impairment loss should be recognised (£)?",
    explanation:
      "Recoverable amount = higher of FVLCS (£420,000) and VIU (£450,000) = £450,000. Impairment = carrying − recoverable.",
    workedSolution: "Recoverable = max(420,000, 450,000) = 450,000\nImpairment = 500,000 − 450,000 = £50,000",
    relatedConcepts: ["Impairment", "Recoverable amount", "Value in use"],
    numericAnswer: 50000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "f-far-ppe-2",
    topicId: "t-far-ppe",
    difficulty: "medium",
    scenario:
      "A machine cost £120,000 with a 10-year life and nil residual value (straight-line). After 4 years it is revalued to £90,000. Remaining life is unchanged.",
    stem: "What is the annual depreciation charge after the revaluation (£)?",
    explanation:
      "After revaluation, depreciate the revalued amount over the remaining useful life (6 years).",
    workedSolution: "Remaining life = 10 − 4 = 6 years\nDepreciation = 90,000 ÷ 6 = £15,000",
    relatedConcepts: ["Revaluation", "Depreciation"],
    numericAnswer: 15000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "f-far-ppe-3",
      topicId: "t-far-ppe",
      type: "mcq",
      difficulty: "medium",
      stem: "Under IAS 23, borrowing costs directly attributable to a qualifying asset should be:",
      explanation:
        "Borrowing costs on a qualifying asset (one that takes a substantial time to get ready for use/sale) must be capitalised as part of its cost.",
      relatedConcepts: ["Borrowing costs", "IAS 23"],
    },
    [
      ["Capitalised as part of the asset's cost", true, "Correct — for qualifying assets, during the construction period."],
      ["Always expensed as incurred", false, "That applies to non-qualifying assets only."],
      ["Recognised in other comprehensive income", false, "Borrowing costs are not OCI items."],
      ["Deducted from equity", false, "Incorrect treatment."],
    ],
  ),

  // ── Financial instruments (IFRS 9) — t-far-fi
  mc(
    {
      id: "f-far-fi-1",
      topicId: "t-far-fi",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Nettle Ltd holds a bond within a business model whose objective is to collect contractual cash flows (solely principal and interest).",
      stem: "How should the bond be measured under IFRS 9?",
      explanation:
        "Held to collect contractual cash flows that are solely principal and interest → measured at amortised cost.",
      relatedConcepts: ["IFRS 9", "Amortised cost", "Business model test"],
    },
    [
      ["At amortised cost", true, "Correct — hold-to-collect + SPPI cash flows → amortised cost."],
      ["At fair value through profit or loss", false, "FVTPL is the residual category, not this business model."],
      ["At fair value through OCI", false, "FVOCI is for a 'hold to collect and sell' model."],
      ["At cost less impairment, never remeasured", false, "Debt instruments use amortised cost or fair value, not frozen cost."],
    ],
  ),
  calc({
    id: "f-far-fi-2",
    topicId: "t-far-fi",
    difficulty: "hard",
    scenario:
      "Oak Ltd issues a bond receiving £94,000. The effective interest rate is 8% and the coupon paid at year end is £5,000.",
    stem: "At what amount is the financial liability carried at the end of year 1, to the nearest £?",
    explanation:
      "Amortised cost: opening + effective interest − cash paid.",
    workedSolution: "Interest = 94,000 × 8% = 7,520\nClosing = 94,000 + 7,520 − 5,000 = £96,520",
    relatedConcepts: ["Amortised cost", "Effective interest rate"],
    numericAnswer: 96520,
    numericTolerance: 50,
    unit: "£",
  }),
  mc(
    {
      id: "f-far-fi-3",
      topicId: "t-far-fi",
      type: "mcq",
      difficulty: "medium",
      stem: "On initial recognition, an entity may make an irrevocable election to present fair value changes of which instrument in OCI?",
      explanation:
        "For an investment in equity instruments not held for trading, an entity may irrevocably elect to present fair value gains/losses in OCI.",
      relatedConcepts: ["FVOCI election", "Equity investments"],
    },
    [
      ["An equity investment not held for trading", true, "Correct — the irrevocable FVOCI election under IFRS 9."],
      ["A trading derivative", false, "Derivatives are FVTPL."],
      ["A bond held to collect cash flows", false, "That is amortised cost."],
      ["Trade receivables", false, "These are typically at amortised cost."],
    ],
  ),

  // ── Provisions (IAS 37) — t-far-prov
  mc(
    {
      id: "f-far-prov-1",
      topicId: "t-far-prov",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Pine Ltd is being sued. Lawyers say it is probable Pine will lose and a reliable estimate of £300,000 can be made.",
      stem: "How should this be reported?",
      explanation:
        "A present obligation, probable outflow and reliable estimate → recognise a provision of £300,000.",
      relatedConcepts: ["Provisions", "Recognition criteria"],
    },
    [
      ["Recognise a provision of £300,000", true, "Correct — all three recognition criteria are met."],
      ["Disclose only as a contingent liability", false, "Disclosure (not provision) applies when an outflow is only possible."],
      ["Ignore it until the case is decided", false, "A probable, estimable obligation must be provided for."],
      ["Recognise a contingent asset", false, "This is a potential outflow, not an asset."],
    ],
  ),
  mc(
    {
      id: "f-far-prov-2",
      topicId: "t-far-prov",
      type: "mcq",
      difficulty: "hard",
      stem: "An outflow of resources for a possible obligation is only 'possible' (not probable). How is it treated under IAS 37?",
      explanation:
        "A possible obligation (or a present obligation where outflow is not probable / cannot be measured) is a contingent liability — disclosed, not provided for, unless the possibility is remote.",
      relatedConcepts: ["Contingent liability", "Disclosure"],
    },
    [
      ["Disclosed as a contingent liability (not provided for)", true, "Correct — unless the possibility of outflow is remote."],
      ["Provided for in full", false, "A provision needs a probable outflow."],
      ["Recognised as a liability at fair value", false, "No liability is recognised for a contingent liability."],
      ["Always ignored entirely", false, "It is disclosed unless remote."],
    ],
  ),

  // ── Statements of cash flows (IAS 7) — t-far-cf
  calc({
    id: "f-far-cf-1",
    topicId: "t-far-cf",
    difficulty: "medium",
    scenario:
      "Rowan Ltd reports profit before tax of £500,000, including depreciation of £80,000 and a profit on disposal of PPE of £20,000. There were no working-capital movements.",
    stem: "Using the indirect method, what is the cash generated from operations before tax/interest adjustments (£)?",
    explanation:
      "Add back non-cash depreciation; deduct the non-operating profit on disposal.",
    workedSolution: "500,000 + 80,000 − 20,000 = £560,000",
    relatedConcepts: ["Indirect method", "Cash flow adjustments"],
    numericAnswer: 560000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "f-far-cf-2",
      topicId: "t-far-cf",
      type: "mcq",
      difficulty: "medium",
      stem: "Under IAS 7, where is interest paid by a company typically classified (allowed treatment)?",
      explanation:
        "IAS 7 allows interest paid to be classified as either operating or financing; for a typical company it is commonly shown within operating (or financing) activities — but never investing.",
      relatedConcepts: ["IAS 7 classification", "Interest paid"],
    },
    [
      ["Operating or financing activities", true, "Correct — IAS 7 permits either, applied consistently."],
      ["Investing activities", false, "Interest paid is not an investing cash flow."],
      ["Always added to revenue", false, "It is a cash flow classification, not revenue."],
      ["Excluded from the cash flow statement", false, "It is a cash flow that must be presented."],
    ],
  ),
];

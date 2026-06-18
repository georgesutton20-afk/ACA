// Corporate Reporting (CR) — Advanced Level question bank.
// Integrated, scenario-driven items combining computation, advanced IFRS
// application and professional judgement/ethics. Harder than Professional level;
// worked solutions for computational items. Original questions (not copied from
// ICAEW past papers).
import type { Question } from "@/types/domain";
import { mc, calc } from "@/data/question-helpers";

export const crQuestions: Question[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // Complex groups — t-cr-grp
  // (step acquisitions, disposals, associates/JV, foreign sub translation)
  // ──────────────────────────────────────────────────────────────────────────
  calc({
    id: "cr-grp-1",
    topicId: "t-cr-grp",
    difficulty: "hard",
    scenario:
      "On 1 Jan 20X3 Apex plc held 25% of Brava Ltd (an associate) at a carrying amount of £820,000; the fair value of that holding at 1 Jan 20X3 was £950,000. On that date Apex acquired a further 45% for cash of £1,900,000, gaining control. Brava's identifiable net assets at 1 Jan 20X3 had a fair value of £3,000,000. NCI is measured at its proportionate share of net assets.",
    stem: "What is the goodwill arising on the step acquisition of Brava (to the nearest £)?",
    explanation:
      "In a step acquisition achieving control, the previously held equity interest is remeasured to fair value at the date control is obtained. Goodwill = consideration transferred + FV of previously held interest + NCI − FV of identifiable net assets. NCI proportionate = 30% × 3,000,000 = 900,000.",
    workedSolution:
      "FV of previously held interest = 950,000\nConsideration = 1,900,000\nNCI (proportionate) = 30% × 3,000,000 = 900,000\nLess FV net assets = (3,000,000)\nGoodwill = 950,000 + 1,900,000 + 900,000 − 3,000,000 = £750,000\n(The 130,000 gain on remeasuring the old 25% interest goes to P/L, not goodwill.)",
    relatedConcepts: ["Step acquisition", "Remeasurement of previously held interest", "Goodwill", "NCI proportionate"],
    numericAnswer: 750000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "cr-grp-2",
    topicId: "t-cr-grp",
    difficulty: "hard",
    scenario:
      "Corso plc owned 90% of Delta Ltd (acquired years ago; goodwill £nil after impairment, NCI measured proportionately). On 30 Jun 20X4 Corso sold its entire holding for cash of £4,200,000. At disposal Delta's consolidated net assets (excluding goodwill) were £4,000,000 and the NCI carrying amount was £400,000. There were no other reserves attributable to Delta.",
    stem: "What is the gain or loss on disposal recognised in Corso's consolidated profit or loss (to the nearest £; enter a gain as positive)?",
    explanation:
      "On loss of control, the group derecognises the subsidiary's net assets and the NCI. Group gain = proceeds + FV of any retained interest − (net assets disposed − NCI derecognised + goodwill). Here no retained interest and no goodwill.",
    workedSolution:
      "Proceeds = 4,200,000\nLess net assets derecognised = (4,000,000)\nAdd back NCI derecognised = 400,000\nGain = 4,200,000 − 4,000,000 + 400,000 = £600,000",
    relatedConcepts: ["Disposal", "Loss of control", "Derecognition of NCI", "IFRS 10"],
    numericAnswer: 600000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "cr-grp-3",
    topicId: "t-cr-grp",
    difficulty: "hard",
    scenario:
      "Evora plc acquired 100% of a foreign subsidiary, Faro Inc, whose functional currency is the dollar ($). Goodwill on acquisition was $500,000. Exchange rates: at acquisition (1 Jan 20X4) £1 = $1.25; at the reporting date (31 Dec 20X4) £1 = $1.40. Goodwill is treated as a foreign-currency asset of the subsidiary and retranslated at the closing rate.",
    stem: "What exchange difference on the goodwill is recognised in other comprehensive income for the year (to the nearest £; enter a loss as negative)?",
    explanation:
      "Under IAS 21, goodwill on a foreign operation is treated as an asset of that operation and retranslated at the closing rate. The difference between opening (historic rate) and closing translation goes to OCI (the translation reserve).",
    workedSolution:
      "Goodwill at acquisition rate = 500,000 / 1.25 = £400,000\nGoodwill at closing rate = 500,000 / 1.40 = £357,143\nExchange difference = 357,143 − 400,000 = −£42,857 (loss to OCI)",
    relatedConcepts: ["Foreign subsidiary", "IAS 21 translation", "Goodwill retranslation", "Translation reserve"],
    numericAnswer: -42857,
    numericTolerance: 50,
    unit: "£",
  }),
  mc(
    {
      id: "cr-grp-4",
      topicId: "t-cr-grp",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Greve plc owns 70% of Halo Ltd. On 1 Oct 20X4 Greve sold a 20% holding (reducing its interest to 50%, but it retains control via a shareholders' agreement). Greve received £1,500,000; the carrying amount of NCI increases by £1,200,000 as a result of the transaction.",
      stem: "How is the difference between the consideration received and the NCI adjustment treated in the consolidated financial statements?",
      explanation:
        "Because control is retained, this is a transaction between owners (equity transaction). No gain/loss and no goodwill adjustment goes through profit or loss; the £300,000 difference (1,500,000 − 1,200,000) is recognised directly in equity attributable to the parent.",
      relatedConcepts: ["Transaction with NCI", "Control retained", "Equity transaction", "IFRS 10"],
    },
    [
      ["Recognised directly in equity (parent's) — no gain/loss in profit or loss", true, "Correct — a partial disposal that retains control is an equity transaction; the £300,000 difference adjusts parent equity."],
      ["A gain of £300,000 in profit or loss", false, "A gain in P/L arises only when control is lost, not on transactions with NCI while retaining control."],
      ["Goodwill is increased by £300,000", false, "Goodwill is not remeasured on transactions with NCI that retain control."],
      ["The full £1,500,000 is credited to profit or loss", false, "No P/L gain arises; only the difference, and only in equity."],
    ],
  ),
  calc({
    id: "cr-grp-5",
    topicId: "t-cr-grp",
    difficulty: "hard",
    scenario:
      "Ionia plc has a 40% interest in a joint venture, Java Ltd, accounted for using the equity method; the carrying amount at 1 Jan 20X4 was £600,000. During the year Java reported a loss of £300,000 and other comprehensive income of £50,000, and paid no dividends. Additionally, Ionia sold inventory to Java for £200,000 at a margin of 25%; all of it remained in Java's inventory at the year end.",
    stem: "What is the carrying amount of the investment in Java at 31 Dec 20X4 (to the nearest £)?",
    explanation:
      "Equity method: adjust cost for share of profit/loss and OCI, then eliminate the investor's share of unrealised profit on the upstream/downstream transaction (here a downstream sale, eliminated against the investment).",
    workedSolution:
      "Share of loss = 40% × 300,000 = (120,000)\nShare of OCI = 40% × 50,000 = 20,000\nUnrealised profit in JV inventory = 200,000 × 25% = 50,000; investor's share = 40% × 50,000 = (20,000)\nCarrying amount = 600,000 − 120,000 + 20,000 − 20,000 = £480,000",
    relatedConcepts: ["Joint venture", "Equity method", "Unrealised profit elimination", "IFRS 11 / IAS 28"],
    numericAnswer: 480000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "cr-grp-6",
      topicId: "t-cr-grp",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Kos plc holds 55% of the equity shares of Lima Ltd but, under a binding contractual arrangement, all relevant decisions about Lima's activities require the unanimous consent of Kos and another investor holding the remaining 45%. The arrangement is structured through Lima as a separate legal vehicle, and the parties have rights to the net assets.",
      stem: "How should Kos account for its interest in Lima, and why?",
      explanation:
        "Despite holding a majority of shares, the requirement for unanimous consent over relevant activities means Kos does not control Lima — it has joint control. As the arrangement gives rights to net assets through a separate vehicle, it is a joint venture, equity accounted under IAS 28.",
      relatedConcepts: ["Joint control", "Joint venture", "IFRS 11", "Power vs voting rights"],
    },
    [
      ["As a joint venture, equity accounted — unanimous consent gives joint control, not control", true, "Correct — control under IFRS 10 requires power to direct relevant activities unilaterally; unanimous consent defeats that, giving joint control."],
      ["As a subsidiary, fully consolidated — 55% is a majority", false, "Voting majority does not confer control where unanimous consent is required for relevant activities."],
      ["As a financial asset at FVTPL under IFRS 9", false, "Joint control with rights to net assets is a joint venture under IFRS 11, not a plain financial asset."],
      ["As a joint operation, recognising its share of assets and liabilities", false, "A separate vehicle giving rights to net assets points to a joint venture, not a joint operation."],
    ],
  ),

  // ──────────────────────────────────────────────────────────────────────────
  // Advanced IFRS application — t-cr-std
  // (IFRS 9/15/16, IAS 12/19/36/37, IFRS 2, share-based payment, deferred tax)
  // ──────────────────────────────────────────────────────────────────────────
  calc({
    id: "cr-std-1",
    topicId: "t-cr-std",
    difficulty: "hard",
    scenario:
      "On 1 Jan 20X3 Mara plc grants 200 share options to each of its 500 employees, conditional on three years' service. The fair value of each option at grant date is £6. At grant date Mara expects 10% of employees to leave over the vesting period. By 31 Dec 20X3 (end of year 1) actual leavers and revised expectations indicate 15% will leave in total over the three years.",
    stem: "What is the cumulative IFRS 2 expense recognised at 31 Dec 20X3 (to the nearest £)?",
    explanation:
      "Equity-settled share-based payment is measured at grant-date fair value, spread over the vesting period, using the latest estimate of options expected to vest based on service (non-market) conditions.",
    workedSolution:
      "Options expected to vest = 500 × 85% × 200 = 85,000\nTotal expense over 3 years = 85,000 × £6 = 510,000\nYear 1 (1/3) = 510,000 × 1/3 = £170,000",
    relatedConcepts: ["IFRS 2", "Equity-settled SBP", "Vesting conditions", "Grant-date fair value"],
    numericAnswer: 170000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "cr-std-2",
    topicId: "t-cr-std",
    difficulty: "hard",
    scenario:
      "Nova plc operates a defined benefit pension plan. At 1 Jan 20X4: plan assets £8,000,000, defined benefit obligation £8,600,000. During the year: current service cost £700,000, contributions paid £600,000, benefits paid £400,000. The discount rate is 5%. At 31 Dec 20X4 the fair value of plan assets was £9,100,000 and the present value of the obligation was £9,500,000.",
    stem: "What is the net remeasurement gain or loss recognised in other comprehensive income for the year (to the nearest £; enter a gain as positive)?",
    explanation:
      "Under IAS 19, remeasurements (actuarial gains/losses on the obligation and the return on plan assets excluding amounts in net interest) are recognised in OCI. Roll forward each side using net-interest at the discount rate, then compare to the actual closing balances; the difference is the remeasurement.",
    workedSolution:
      "Assets: expected = 8,000,000 + interest(5%×8,000,000=400,000) + contributions 600,000 − benefits 400,000 = 8,600,000; actual 9,100,000 → remeasurement gain 500,000\nObligation: expected = 8,600,000 + service 700,000 + interest(5%×8,600,000=430,000) − benefits 400,000 = 9,330,000; actual 9,500,000 → remeasurement loss 170,000\nNet remeasurement = 500,000 − 170,000 = £330,000 gain",
    relatedConcepts: ["IAS 19", "Defined benefit plan", "Remeasurements in OCI", "Net interest"],
    numericAnswer: 330000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "cr-std-3",
    topicId: "t-cr-std",
    difficulty: "hard",
    scenario:
      "Orta plc holds trade receivables of £5,000,000 measured at amortised cost and applies the IFRS 9 simplified expected-credit-loss model (lifetime ECL). Its provision matrix: current £3,000,000 at 1%; 1–30 days past due £1,200,000 at 4%; 31–90 days £600,000 at 12%; over 90 days £200,000 at 40%.",
    stem: "What loss allowance should Orta recognise under the simplified ECL model (to the nearest £)?",
    explanation:
      "Under the simplified approach for trade receivables, lifetime ECL is recognised using a provision matrix: multiply each ageing band's gross carrying amount by its loss rate and sum.",
    workedSolution:
      "Current: 3,000,000 × 1% = 30,000\n1–30 days: 1,200,000 × 4% = 48,000\n31–90 days: 600,000 × 12% = 72,000\n>90 days: 200,000 × 40% = 80,000\nTotal allowance = 30,000 + 48,000 + 72,000 + 80,000 = £230,000",
    relatedConcepts: ["IFRS 9", "Expected credit losses", "Simplified approach", "Provision matrix"],
    numericAnswer: 230000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "cr-std-4",
    topicId: "t-cr-std",
    difficulty: "hard",
    scenario:
      "Pavia plc has a cash-generating unit comprising goodwill £400,000, a patent £300,000 and other PPE £1,300,000 (total carrying amount £2,000,000). An impairment review gives the CGU a recoverable amount of £1,500,000. The patent has a determinable fair value less costs of disposal of £280,000; no individual asset should be written below its own recoverable amount.",
    stem: "After allocating the impairment loss, what is the carrying amount of the other PPE (to the nearest £)?",
    explanation:
      "IAS 36: the impairment loss (£500,000) is allocated first to goodwill, then pro rata to the other assets — but an individual asset is not reduced below the highest of its FVLCD, value in use, or zero. Any 'capped' excess is reallocated to the remaining assets.",
    workedSolution:
      "Total impairment = 2,000,000 − 1,500,000 = 500,000\nStep 1: write off goodwill 400,000; remaining loss 100,000\nStep 2: allocate 100,000 pro rata over patent (300,000) and PPE (1,300,000):\n  Patent: 100,000 × 300/1,600 = 18,750 → would fall to 281,250, above floor 280,000, so allowed\n  PPE: 100,000 × 1,300/1,600 = 81,250\nPPE carrying amount = 1,300,000 − 81,250 = £1,218,750",
    relatedConcepts: ["IAS 36", "Cash-generating unit", "Impairment allocation", "Floor on individual assets"],
    numericAnswer: 1218750,
    numericTolerance: 50,
    unit: "£",
  }),
  calc({
    id: "cr-std-5",
    topicId: "t-cr-std",
    difficulty: "hard",
    scenario:
      "Rieti plc reports accounting profit before tax of £2,000,000. This includes: depreciation of £350,000 (tax allowances claimed were £500,000); a fine of £40,000 (disallowable); and development costs of £120,000 capitalised for accounting but deducted in full for tax this year. The tax rate is 25%. At the start of the year the deferred tax liability was £200,000.",
    stem: "What is the deferred tax charge to profit or loss for the year (to the nearest £)?",
    explanation:
      "Deferred tax arises on movements in temporary differences. Accelerated capital allowances (allowances > depreciation) increase a taxable temporary difference; capitalised development costs deducted for tax also create a taxable temporary difference. The fine is permanent (no deferred tax).",
    workedSolution:
      "Originating taxable temporary differences this year:\n  Capital allowances vs depreciation: 500,000 − 350,000 = 150,000\n  Development costs (capitalised for accounts, deducted for tax): 120,000\nTotal increase in taxable temporary differences = 270,000\nDeferred tax charge = 270,000 × 25% = £67,500",
    relatedConcepts: ["IAS 12", "Deferred tax", "Temporary differences", "Permanent differences"],
    numericAnswer: 67500,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "cr-std-6",
      topicId: "t-cr-std",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Siena plc sells machines bundled with a two-year service plan and offers customers a significant financing component: payment is deferred for 24 months and the stand-alone cash selling price would be lower than the contract price. The directors propose recognising the full contract amount as revenue on delivery of the machine.",
      stem: "Which combination of IFRS 15 issues invalidates the directors' proposed treatment?",
      explanation:
        "Two distinct performance obligations exist (machine at a point in time; service over time), so the transaction price must be allocated; and a significant financing component must be separated, with revenue measured at the cash selling price and interest income recognised separately over time.",
      relatedConcepts: ["IFRS 15", "Performance obligations", "Significant financing component", "Allocation"],
    },
    [
      ["Separate performance obligations must be identified, AND the significant financing component must be split out", true, "Correct — service revenue is deferred over time and the financing element is recognised as interest, not revenue, so full upfront recognition is wrong on both counts."],
      ["Only the financing component is an issue; the service may be recognised upfront with the machine", false, "The service is a separate performance obligation satisfied over time and cannot be recognised on delivery."],
      ["Neither is an issue — bundled contracts are always recognised in full on delivery", false, "IFRS 15 requires identifying performance obligations and adjusting for significant financing components."],
      ["Only the service allocation matters; financing components are ignored under IFRS 15", false, "A significant financing component must be accounted for separately under IFRS 15."],
    ],
  ),

  // ──────────────────────────────────────────────────────────────────────────
  // Analysis & interpretation — t-cr-anal
  // (ratios, quality of earnings, interpretation of financial statements)
  // ──────────────────────────────────────────────────────────────────────────
  calc({
    id: "cr-anal-1",
    topicId: "t-cr-anal",
    difficulty: "hard",
    scenario:
      "Tivoli plc reports: operating profit £1,800,000; finance costs £300,000; profit before tax £1,500,000. Capital employed comprises equity £6,000,000 and long-term debt £4,000,000. A competitor reports a return on capital employed (ROCE) of 22%.",
    stem: "What is Tivoli's ROCE, using operating profit over total capital employed (to one decimal place, as a percentage)?",
    explanation:
      "ROCE = operating profit (PBIT) / capital employed (equity + long-term debt). It measures the return generated on all long-term finance, before the effect of financing structure.",
    workedSolution:
      "Capital employed = 6,000,000 + 4,000,000 = 10,000,000\nROCE = 1,800,000 / 10,000,000 = 18.0%\n(Below the competitor's 22% — weaker efficiency in generating returns on long-term capital.)",
    relatedConcepts: ["ROCE", "Capital employed", "Profitability analysis"],
    numericAnswer: 18.0,
    numericTolerance: 0.1,
    unit: "%",
  }),
  calc({
    id: "cr-anal-2",
    topicId: "t-cr-anal",
    difficulty: "hard",
    scenario:
      "Umbria plc: revenue £12,000,000; cost of sales £8,400,000; year-end inventory £1,400,000; trade receivables £2,000,000; trade payables £1,260,000. Assume a 365-day year and that purchases approximate cost of sales.",
    stem: "What is Umbria's cash operating cycle (working capital cycle) in days (to the nearest whole day)?",
    explanation:
      "Cash operating cycle = inventory days + receivables days − payables days. It shows how long cash is tied up in working capital, a key liquidity and earnings-quality indicator.",
    workedSolution:
      "Inventory days = 1,400,000 / 8,400,000 × 365 = 60.8 → 61\nReceivables days = 2,000,000 / 12,000,000 × 365 = 60.8 → 61\nPayables days = 1,260,000 / 8,400,000 × 365 = 54.75 → 55\nCash operating cycle = 60.83 + 60.83 − 54.75 = 66.9 → 67 days",
    relatedConcepts: ["Working capital cycle", "Liquidity", "Inventory/receivables/payables days"],
    numericAnswer: 67,
    numericTolerance: 1,
    unit: "days",
  }),
  calc({
    id: "cr-anal-3",
    topicId: "t-cr-anal",
    difficulty: "hard",
    scenario:
      "Verona plc reports profit for the year of £3,000,000 but net cash from operating activities of only £1,200,000. Investigation reveals: a £900,000 increase in receivables, a £500,000 increase in inventory, capitalised development costs of £400,000 (no cash flow effect difference), and a £600,000 gain on revaluation of investment property recognised in profit or loss.",
    stem: "Using the cash realisation ratio (operating cash flow / profit for the year), what is Verona's ratio (to two decimal places)?",
    explanation:
      "The cash realisation (cash conversion) ratio compares operating cash flow to reported profit; a ratio well below 1.0 is a red flag for earnings quality — here driven by working-capital build-up and a large non-cash fair-value gain inflating profit.",
    workedSolution:
      "Cash realisation ratio = operating cash flow / profit = 1,200,000 / 3,000,000 = 0.40\n(A low 0.40 ratio signals poor earnings quality — profit is not being converted into cash, partly due to the £600,000 unrealised fair-value gain and rising receivables/inventory.)",
    relatedConcepts: ["Quality of earnings", "Cash realisation ratio", "Non-cash gains", "Working capital"],
    numericAnswer: 0.4,
    numericTolerance: 0.01,
    unit: "ratio",
  }),
  mc(
    {
      id: "cr-anal-4",
      topicId: "t-cr-anal",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Aosta plc's revenue grew 8% but reported operating profit grew 35%. Analysis shows: the useful life of plant was extended (reducing depreciation by £1.2m), a large provision was released to profit, development costs previously expensed are now capitalised, and a one-off gain arose on sale-and-leaseback. The directors highlight the 35% profit growth in the narrative report.",
      stem: "What is the most appropriate conclusion about the quality of Aosta's earnings growth?",
      explanation:
        "Each adjustment boosts reported profit without a corresponding improvement in underlying trading. Changing estimates (useful lives), releasing provisions, capitalising rather than expensing costs, and one-off gains are classic low-quality, potentially earnings-management indicators. The growth is largely non-recurring and accounting-driven.",
      relatedConcepts: ["Quality of earnings", "Earnings management", "Accounting policy changes", "Sustainability of profit"],
    },
    [
      ["Earnings quality is low: much of the growth is non-recurring or driven by accounting choices, not underlying trading", true, "Correct — depreciation reduction, provision release, capitalisation and a one-off gain inflate profit without improving core performance."],
      ["Earnings quality is high because operating profit grew faster than revenue", false, "Faster profit growth here reflects accounting changes and one-offs, not operating leverage."],
      ["The growth is sustainable because all changes comply with IFRS", false, "IFRS compliance does not make the growth sustainable or high-quality; the drivers are largely non-recurring."],
      ["No conclusion is possible without the tax charge", false, "The earnings-quality concerns are evident from the operating-level drivers regardless of tax."],
    ],
  ),
  calc({
    id: "cr-anal-5",
    topicId: "t-cr-anal",
    difficulty: "hard",
    scenario:
      "Lecce plc has equity of £5,000,000 and interest-bearing debt of £7,000,000. Operating profit (PBIT) is £2,100,000 and finance costs are £700,000. A loan covenant requires gearing (debt / (debt + equity)) below 55% and interest cover above 2.5 times.",
    stem: "What is Lecce's interest cover (to two decimal places), and does it breach the interest-cover covenant?",
    explanation:
      "Interest cover = PBIT / finance costs; it measures the ability of operating profit to meet interest obligations. Compare to the covenant threshold to assess going-concern and refinancing risk.",
    workedSolution:
      "Interest cover = 2,100,000 / 700,000 = 3.00 times\nCovenant requires > 2.5 times, so 3.00 does NOT breach the interest-cover covenant.\n(Gearing = 7,000,000 / 12,000,000 = 58.3%, which would breach the 55% gearing covenant — a separate issue.)",
    relatedConcepts: ["Interest cover", "Gearing", "Loan covenants", "Solvency analysis"],
    numericAnswer: 3.0,
    numericTolerance: 0.01,
    unit: "times",
  }),
  mc(
    {
      id: "cr-anal-6",
      topicId: "t-cr-anal",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Parma plc factors its trade receivables without recourse near each year end and uses supplier finance (reverse factoring) arrangements that it presents within trade payables rather than borrowings. Headline gearing and the working-capital cycle look strong year on year.",
      stem: "How should an analyst interpret these arrangements when assessing Parma's financial position?",
      explanation:
        "Both arrangements flatter the reported position: factoring accelerates receivables collection (shortening the cash cycle) and supplier finance is debt-like financing presented within payables, understating reported borrowings and gearing. The analyst should adjust for the substance of these arrangements.",
      relatedConcepts: ["Off-balance-sheet finance", "Supplier finance", "Factoring", "Substance over form"],
    },
    [
      ["Adjust for substance: supplier finance is debt-like and factoring flatters the cash cycle, so true gearing and the working-capital cycle are worse than reported", true, "Correct — these arrangements improve headline metrics without reflecting underlying liquidity/leverage; analytical adjustments are needed."],
      ["Accept the headline metrics — IFRS presentation is definitive for analysis", false, "Analysts must look through presentation to economic substance, especially for financing-style payables."],
      ["Treat factored receivables as still on the balance sheet regardless of recourse terms", false, "Without recourse, derecognition may be appropriate; the point is the effect on the cash cycle, not blanket reinstatement."],
      ["The arrangements have no effect on any ratio", false, "They directly affect gearing, liquidity and the working-capital cycle."],
    ],
  ),

  // ──────────────────────────────────────────────────────────────────────────
  // Assurance of corporate reports — t-cr-assur
  // ──────────────────────────────────────────────────────────────────────────
  mc(
    {
      id: "cr-assur-1",
      topicId: "t-cr-assur",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "During the audit of Genoa plc, the engagement team identifies that goodwill of £12m (material to the financial statements) depends on management's impairment model, which uses optimistic growth assumptions the team considers unsupportable. Management refuses to revise the model or impair the goodwill. The misstatement is material but the team concludes it is not pervasive.",
      stem: "What audit opinion is most appropriate, and why?",
      explanation:
        "This is a disagreement (material misstatement) over goodwill impairment, not a scope limitation. Material but not pervasive → qualified ('except for') opinion. A disclaimer is for pervasive scope limitations; an adverse opinion for pervasive misstatements.",
      relatedConcepts: ["Modified opinions", "Material misstatement", "ISA 705", "Impairment audit"],
    },
    [
      ["A qualified ('except for') opinion — material misstatement that is not pervasive", true, "Correct — disagreement that is material but not pervasive results in a qualified opinion under ISA 705."],
      ["An adverse opinion — any goodwill misstatement is pervasive", false, "Adverse is for pervasive misstatements; here the team concluded it is material but not pervasive."],
      ["A disclaimer of opinion — the model cannot be relied upon", false, "A disclaimer is for pervasive scope limitations, not a disagreement over a measurement the auditor can evaluate."],
      ["An unmodified opinion with an emphasis-of-matter paragraph", false, "Emphasis of matter cannot substitute for a modification where a material misstatement is unresolved."],
    ],
  ),
  mc(
    {
      id: "cr-assur-2",
      topicId: "t-cr-assur",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Auditing Lucca plc, you assess the risk around a newly recognised £4m provision for a restructuring announced after the year end but before the financial statements are authorised for issue. Management argues the announcement creates a constructive obligation at the reporting date.",
      stem: "What is the key audit risk and the appropriate response?",
      explanation:
        "Under IAS 37/IAS 10, a restructuring provision requires a present obligation at the reporting date — a detailed formal plan AND a valid expectation raised in those affected, existing at the reporting date. An announcement only after year end is a non-adjusting event; recognising it overstates liabilities. The auditor should obtain evidence of the timing of the constructive obligation and challenge recognition.",
      relatedConcepts: ["IAS 37 restructuring", "IAS 10 events after reporting period", "Provisions", "Audit risk"],
    },
    [
      ["Risk of overstated provision: a constructive obligation needs a plan and valid expectation at the reporting date — an announcement only after year end is a non-adjusting event", true, "Correct — the auditor must obtain evidence on the timing and challenge recognition if the obligation arose only post year end."],
      ["No risk — any board decision to restructure creates a provision", false, "A board decision alone is insufficient; a valid expectation must be raised before the reporting date."],
      ["Risk of understatement — the provision should also include future operating losses", false, "IAS 37 prohibits providing for future operating losses; the risk here is overstatement of the existing provision."],
      ["The matter is immaterial and requires no audit work", false, "A £4m provision is plainly material and a key area of judgement."],
    ],
  ),
  mc(
    {
      id: "cr-assur-3",
      topicId: "t-cr-assur",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Modena plc's directors prepared the financial statements on a going-concern basis. The auditor concludes that a material uncertainty related to going concern exists (the company is renegotiating borrowings due within months), and that this uncertainty is adequately disclosed in the notes.",
      stem: "How should the auditor reflect this in the auditor's report?",
      explanation:
        "Where a material uncertainty related to going concern exists and is adequately disclosed, the opinion is unmodified but the report includes a separate 'Material Uncertainty Related to Going Concern' section drawing attention to the disclosure (ISA 570).",
      relatedConcepts: ["Going concern", "ISA 570", "Material uncertainty", "Auditor's report sections"],
    },
    [
      ["Unmodified opinion with a separate 'Material Uncertainty Related to Going Concern' section", true, "Correct — ISA 570 requires this dedicated section where the uncertainty is adequately disclosed, without modifying the opinion."],
      ["Qualified opinion because going concern is uncertain", false, "Adequate disclosure of a material uncertainty does not require a qualified opinion."],
      ["Adverse opinion because the company may not survive", false, "An adverse opinion is for pervasive misstatement, not a properly disclosed going-concern uncertainty."],
      ["No reference at all, since the directors chose the going-concern basis", false, "ISA 570 requires the auditor to highlight the material uncertainty even where disclosure is adequate."],
    ],
  ),
  mc(
    {
      id: "cr-assur-4",
      topicId: "t-cr-assur",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Your firm is engaged to provide limited assurance over Padua plc's greenhouse-gas emissions disclosures in its sustainability report, alongside the reasonable-assurance audit of the financial statements.",
      stem: "Which statement best describes the nature of the limited-assurance conclusion?",
      explanation:
        "Limited assurance gives a conclusion expressed in the negative form ('nothing has come to our attention') based on reduced procedures, providing a lower level of assurance than the positive (reasonable-assurance) opinion in a financial-statement audit (ISAE 3000/3410).",
      relatedConcepts: ["Limited vs reasonable assurance", "ISAE 3000", "Sustainability assurance", "Negative form conclusion"],
    },
    [
      ["A negative-form conclusion ('nothing has come to our attention') based on reduced procedures — lower assurance than the audit opinion", true, "Correct — limited assurance under ISAE 3000 gives a negatively expressed conclusion with a lower level of assurance."],
      ["A positive opinion identical in assurance level to the financial-statement audit", false, "Limited assurance gives a lower level of assurance and a negative-form conclusion, not a positive opinion."],
      ["Absolute assurance that the emissions data are free from error", false, "No engagement provides absolute assurance; limited assurance is lower than reasonable."],
      ["No conclusion is expressed at all under limited assurance", false, "A conclusion is expressed, but in negative form."],
    ],
  ),
  mc(
    {
      id: "cr-assur-5",
      topicId: "t-cr-assur",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Ravenna plc capitalised £2.5m of internally generated brand value as an intangible asset. The audit team must design procedures to address the risk that this does not meet IAS 38 recognition criteria.",
      stem: "What is the appropriate audit position and primary procedure?",
      explanation:
        "IAS 38 prohibits recognising internally generated brands as assets (they cannot be distinguished from the cost of developing the business as a whole). The team should challenge recognition and, primarily, examine the nature of the capitalised costs and conclude the asset must be derecognised/expensed — this is a likely material misstatement.",
      relatedConcepts: ["IAS 38 intangibles", "Internally generated brands", "Recognition criteria", "Audit of intangibles"],
    },
    [
      ["Challenge the capitalisation: IAS 38 prohibits recognising internally generated brands, so the £2.5m is likely a material misstatement to be written off", true, "Correct — internally generated brands fail IAS 38 recognition; the auditor examines the costs and concludes they should be expensed."],
      ["Accept it if the directors can reliably measure the brand's fair value", false, "Reliable measurement does not override the IAS 38 prohibition on internally generated brands."],
      ["Test only the arithmetical accuracy of the £2.5m figure", false, "Recalculation misses the fundamental recognition problem under IAS 38."],
      ["Treat it as goodwill and test for impairment instead", false, "Internally generated goodwill also cannot be recognised; reclassifying does not fix the breach."],
    ],
  ),
  mc(
    {
      id: "cr-assur-6",
      topicId: "t-cr-assur",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "As auditor of Siena Group, you are determining materiality. Group profit before tax is volatile and currently near break-even due to a one-off charge, while revenue is stable at £80m and total assets are £120m. The prior-year benchmark was 5% of profit before tax.",
      stem: "What is the most appropriate approach to setting the materiality benchmark this year?",
      explanation:
        "Where the usual profit benchmark is distorted by a one-off item or near break-even, a profit-based benchmark becomes unstable and unrepresentative. The auditor should select a more stable benchmark (e.g. a percentage of revenue or total assets) or use a normalised/adjusted profit figure, exercising judgement and documenting the rationale.",
      relatedConcepts: ["Materiality", "Benchmark selection", "ISA 320", "Professional judgement"],
    },
    [
      ["Switch to a more stable benchmark (e.g. revenue or total assets), or use a normalised profit, with documented rationale", true, "Correct — near break-even/volatile profit makes a profit benchmark unrepresentative; ISA 320 supports a more stable basis with documented judgement."],
      ["Continue using 5% of profit before tax for comparability with the prior year", false, "Comparability does not justify an unstable benchmark when profit is distorted or near zero."],
      ["Set materiality at zero because profit is near break-even", false, "Zero materiality is not workable; another benchmark should be selected."],
      ["Use the highest possible benchmark to minimise audit work", false, "Materiality is a judgement to detect misstatement, not a device to reduce effort."],
    ],
  ),

  // ──────────────────────────────────────────────────────────────────────────
  // Ethics & reporting judgement — t-cr-eth
  // ──────────────────────────────────────────────────────────────────────────
  mc(
    {
      id: "cr-eth-1",
      topicId: "t-cr-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "You are the financial controller (ACA) of Turin plc. The CEO instructs you to recognise revenue on a major contract before the goods are shipped, to meet a profit target that triggers the directors' bonuses. The CEO implies your own role is at risk if you refuse.",
      stem: "Which fundamental ethical principles are most directly threatened, and what is the correct response?",
      explanation:
        "Premature revenue recognition breaches IFRS 15 and threatens integrity and objectivity, with a clear self-interest and intimidation threat from the bonus and job pressure. The correct response is to refuse to misstate the accounts, document the position, escalate (e.g. to the audit committee/those charged with governance) and obtain advice; resignation may follow if unresolved.",
      relatedConcepts: ["Integrity", "Objectivity", "Intimidation threat", "ICAEW Code of Ethics"],
    },
    [
      ["Integrity and objectivity, with self-interest and intimidation threats — refuse, document, and escalate to those charged with governance", true, "Correct — knowingly misstating revenue breaches integrity; the bonus/job pressure are self-interest and intimidation threats requiring refusal and escalation."],
      ["Confidentiality only — simply comply and keep the matter private", false, "Confidentiality is not the issue; complying would breach integrity and produce materially misstated accounts."],
      ["Professional competence only — attend a refresher course on IFRS 15", false, "The problem is being pressured to act unethically, not a lack of competence."],
      ["No principle is threatened because the CEO authorised it", false, "Management authorisation does not legitimise a deliberate misstatement; integrity and objectivity remain threatened."],
    ],
  ),
  mc(
    {
      id: "cr-eth-2",
      topicId: "t-cr-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Your audit firm has provided the statutory audit of Pisa plc, a listed company, for several years. The same engagement partner has now led the audit for nine consecutive years, and the firm also earns substantial fees from advisory work for Pisa, approaching a level that is becoming significant to the firm.",
      stem: "Which ethical threats arise and what safeguards are most relevant?",
      explanation:
        "Long association of senior personnel creates a familiarity (and self-interest) threat — for listed clients, partner rotation is required. High fee dependence creates a self-interest threat managed by fee caps/monitoring. Providing advisory and audit services raises self-review and self-interest threats requiring separation/restriction.",
      relatedConcepts: ["Familiarity threat", "Self-interest threat", "Partner rotation", "Fee dependence"],
    },
    [
      ["Familiarity (long association) and self-interest (fee dependence and non-audit fees) threats — rotate the engagement partner, monitor/cap fees, and restrict non-audit services", true, "Correct — listed-client rules require partner rotation and fee monitoring, and non-audit services must be restricted to manage self-review/self-interest threats."],
      ["Only an advocacy threat, resolved by adding a disclaimer to the report", false, "The threats are familiarity and self-interest; a disclaimer does not address them."],
      ["No threat arises because a long relationship improves audit quality", false, "Long association is a recognised familiarity threat requiring safeguards such as rotation."],
      ["Intimidation only — resign from the engagement immediately", false, "Resignation is not the primary safeguard; rotation, fee monitoring and service restriction address these threats."],
    ],
  ),
  mc(
    {
      id: "cr-eth-3",
      topicId: "t-cr-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Como plc faces a genuine accounting judgement: whether a contract conveys control of goods over time or at a point in time under IFRS 15. Two defensible interpretations exist; one accelerates revenue and improves a key covenant ratio. The directors favour the revenue-accelerating view and ask you to confirm it is acceptable.",
      stem: "How should the preparer exercise reporting judgement here?",
      explanation:
        "Where genuine alternatives exist, judgement must be exercised faithfully to the substance of the arrangement, not to engineer a desired covenant outcome. The preparer should apply IFRS 15 criteria objectively, select the treatment that best reflects the transfer of control, and ensure transparent disclosure of the judgement made.",
      relatedConcepts: ["Reporting judgement", "Neutrality", "Faithful representation", "Disclosure of judgements"],
    },
    [
      ["Apply the IFRS 15 control criteria objectively to the substance and disclose the judgement — the covenant impact must not drive the choice", true, "Correct — judgement must be neutral and faithful to substance; the desired covenant effect is not a legitimate basis for selecting a policy."],
      ["Choose the revenue-accelerating view because it is defensible and helps the covenant", false, "Selecting a treatment to achieve a covenant outcome breaches neutrality even if technically defensible."],
      ["Always choose the most conservative (lowest revenue) option regardless of the facts", false, "Neutrality means representing substance faithfully, not defaulting to conservatism irrespective of the facts."],
      ["Defer to the directors' preference, as judgement is management's responsibility", false, "Preparers must apply standards objectively; deferring to bias compromises faithful representation."],
    ],
  ),
  mc(
    {
      id: "cr-eth-4",
      topicId: "t-cr-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "While auditing Bari plc you discover the finance director appears to have been diverting company funds to a personal account — a suspected fraud and potential money laundering. The finance director asks you to keep the matter confidential 'to protect the company's reputation'.",
      stem: "What is the appropriate response regarding confidentiality and reporting obligations?",
      explanation:
        "Confidentiality is overridden where there is a legal duty or right to disclose. Suspected money laundering must be reported to the firm's MLRO / the National Crime Agency (a Suspicious Activity Report), and 'tipping off' the suspect is an offence. The auditor must also report to those charged with governance as appropriate.",
      relatedConcepts: ["Confidentiality", "Money laundering reporting", "Tipping off", "Those charged with governance"],
    },
    [
      ["Confidentiality is overridden — report the suspicion to the MLRO/NCA, do not tip off the FD, and consider reporting to those charged with governance", true, "Correct — suspected money laundering must be reported via a SAR; tipping off is an offence, so the FD's confidentiality request cannot be honoured."],
      ["Keep it confidential as the FD requested, to protect the client's reputation", false, "Confidentiality does not apply where there is a legal duty to report suspected money laundering."],
      ["Confront the FD publicly and announce the fraud to shareholders immediately", false, "This risks tipping off and is not the prescribed route; report to the MLRO/NCA instead."],
      ["Do nothing until the fraud is proven in court", false, "Suspicion, not proof, triggers the reporting obligation; delay would be inappropriate."],
    ],
  ),
  mc(
    {
      id: "cr-eth-5",
      topicId: "t-cr-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Verona Holdings plc designs a series of transactions whose sole purpose is to keep £30m of borrowings off the consolidated statement of financial position by routing them through a structured entity that, in substance, the group controls and is exposed to the risks and rewards of. The form of the documents suggests the group does not control it.",
      stem: "How should the preparer respond, applying both technical standards and reporting judgement?",
      explanation:
        "Substance over form and IFRS 10 require consolidation where the group controls a structured entity and is exposed to its variable returns, regardless of legal form. Presenting the borrowings off-balance-sheet to mislead users breaches faithful representation and the duty to report neutrally; the entity should be consolidated.",
      relatedConcepts: ["Substance over form", "IFRS 10 structured entities", "Faithful representation", "Off-balance-sheet finance"],
    },
    [
      ["Consolidate the structured entity — control and exposure to variable returns determine consolidation under IFRS 10, so the borrowings must be recognised", true, "Correct — substance over form and IFRS 10 require consolidation; engineering the form to hide debt breaches faithful representation."],
      ["Follow the legal form and exclude the entity, since the documents say there is no control", false, "IFRS 10 looks to substance — control and variable returns — not the legal form of the documents."],
      ["Disclose the arrangement in the notes but keep the £30m off the statement of financial position", false, "Disclosure does not cure non-consolidation where the group controls the entity; it must be consolidated."],
      ["Recognise only half the borrowings to reflect a compromise", false, "There is no basis for partial recognition; control requires full consolidation."],
    ],
  ),
  mc(
    {
      id: "cr-eth-6",
      topicId: "t-cr-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "An ACA in practice prepares the financial statements for, and also audits, a small private company, Asti Ltd. The same individual performs both roles, and the client has asked the firm to also make management decisions on accounting estimates such as the allowance for doubtful debts.",
      stem: "What is the principal ethical threat, and what is the appropriate safeguard?",
      explanation:
        "Auditing financial statements your own firm prepared, and making management decisions, creates a self-review threat (and assumption of management responsibility). Safeguards include using separate teams/personnel, ensuring management makes all significant judgements and accepts responsibility, and — for some clients — not providing both services.",
      relatedConcepts: ["Self-review threat", "Management responsibility", "Safeguards", "Independence"],
    },
    [
      ["A self-review threat (and assumption of management responsibility) — use separate teams and ensure management makes and owns all significant judgements, or decline one service", true, "Correct — auditing self-prepared statements and making estimates is a self-review/management-responsibility threat requiring separation or declining a service."],
      ["An advocacy threat — resolved by adding an emphasis-of-matter paragraph", false, "The threat is self-review, not advocacy; an emphasis-of-matter paragraph is irrelevant."],
      ["No threat, because small private companies are exempt from independence rules", false, "Independence and self-review concerns apply; there is no blanket small-company exemption from these threats."],
      ["A familiarity threat — resolved solely by rotating staff annually", false, "The core issue is self-review and assuming management responsibility, not familiarity."],
    ],
  ),
];

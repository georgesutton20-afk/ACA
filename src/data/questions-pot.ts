// Principles of Taxation (Certificate level) — question bank.
// Original objective-test items replicating ICAEW format/difficulty (not copied
// from past papers). Computations use FA 2024 / 2024-25 examinable figures
// (ACA 2026 sittings): PA £12,570; basic-rate band £37,700; higher to £125,140;
// dividend allowance £500 (8.75/33.75/39.35%); PSA £1,000/£500/£0; CGT AEA
// £3,000, BADR 10%; CT 25%/19%, marginal fraction 3/200; VAT 20% reg £90,000;
// NIC employee 8%/2% (PT £12,570, UEL £50,270), employer 13.8% (ST £9,100),
// Class 4 6%/2%; IHT NRB £325,000.
import { mc, calc } from "@/data/question-helpers";
import type { Question } from "@/types/domain";

export const potQuestions: Question[] = [
  // ── Income tax — t-tax-it ────────────────────────────────────────────────
  calc({
    id: "pt-it-1",
    topicId: "t-tax-it",
    difficulty: "easy",
    scenario:
      "Maria is employed and has taxable employment income (after the personal allowance) of £30,000 in 2024/25. She has no other income.",
    stem: "What is Maria's income tax liability for 2024/25 (£)?",
    explanation:
      "All £30,000 falls within the basic-rate band (first £37,700), taxed at 20%.",
    workedSolution: "£30,000 × 20% = £6,000",
    relatedConcepts: ["Basic rate band", "Non-savings income"],
    numericAnswer: 6000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "pt-it-2",
    topicId: "t-tax-it",
    difficulty: "medium",
    scenario:
      "Tom has employment income of £60,000 in 2024/25 and no other income. He is entitled to the full personal allowance.",
    stem: "What is Tom's income tax liability for 2024/25 (£)?",
    explanation:
      "Deduct the £12,570 personal allowance, then tax the first £37,700 at 20% and the remainder at 40%.",
    workedSolution:
      "Taxable income = 60,000 − 12,570 = 47,430\n37,700 × 20% = 7,540\n(47,430 − 37,700) = 9,730 × 40% = 3,892\nTotal = 7,540 + 3,892 = £11,432",
    relatedConcepts: ["Personal allowance", "Higher rate band"],
    numericAnswer: 11432,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "pt-it-3",
    topicId: "t-tax-it",
    difficulty: "hard",
    scenario:
      "Priya has adjusted net income of £118,000 in 2024/25 (all non-savings employment income).",
    stem: "What is Priya's available personal allowance for 2024/25 (£)?",
    explanation:
      "The PA is reduced by £1 for every £2 of adjusted net income over £100,000.",
    workedSolution:
      "Excess = 118,000 − 100,000 = 18,000\nReduction = 18,000 ÷ 2 = 9,000\nPA = 12,570 − 9,000 = £3,570",
    relatedConcepts: ["PA taper", "Adjusted net income"],
    numericAnswer: 3570,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "pt-it-4",
    topicId: "t-tax-it",
    difficulty: "medium",
    scenario:
      "Greg is a higher-rate taxpayer. In 2024/25 his only investment income is dividends of £6,000. His non-dividend income already uses all of his personal allowance and basic-rate band, so the dividends fall wholly in the higher-rate band.",
    stem: "What income tax is due on Greg's dividends for 2024/25 (£)?",
    explanation:
      "The first £500 is covered by the dividend allowance (taxed at 0%); the balance is taxed at the upper dividend rate of 33.75%.",
    workedSolution:
      "Taxable dividends = 6,000 − 500 = 5,500\n5,500 × 33.75% = £1,856.25",
    relatedConcepts: ["Dividend allowance", "Upper dividend rate"],
    numericAnswer: 1856.25,
    numericTolerance: 0.5,
    unit: "£",
  }),
  calc({
    id: "pt-it-5",
    topicId: "t-tax-it",
    difficulty: "hard",
    scenario:
      "Hannah has employment income of £20,000 and bank interest of £2,000 in 2024/25, with a full personal allowance. After the PA, her taxable non-savings income is £7,430, all within the basic-rate band, so she is a basic-rate taxpayer.",
    stem: "What income tax is due on Hannah's £2,000 of savings interest for 2024/25 (£)?",
    explanation:
      "A basic-rate taxpayer has a £1,000 personal savings allowance (0%); the remaining interest is taxed at 20%.",
    workedSolution:
      "PSA covers £1,000 at 0%\nRemaining 2,000 − 1,000 = 1,000 × 20% = £200",
    relatedConcepts: ["Personal savings allowance", "Savings income"],
    numericAnswer: 200,
    numericTolerance: 0,
    unit: "£",
  }),

  // ── VAT — t-tax-vat ──────────────────────────────────────────────────────
  calc({
    id: "pt-vat-1",
    topicId: "t-tax-vat",
    difficulty: "easy",
    scenario:
      "Delta Ltd makes standard-rated sales of £80,000 (excluding VAT) and incurs standard-rated expenses of £30,000 (excluding VAT) in a VAT quarter. All amounts are recoverable.",
    stem: "What is the VAT payable to HMRC for the quarter (£)?",
    explanation:
      "Output VAT at 20% on sales less input VAT at 20% on expenses.",
    workedSolution:
      "Output = 80,000 × 20% = 16,000\nInput = 30,000 × 20% = 6,000\nPayable = 16,000 − 6,000 = £10,000",
    relatedConcepts: ["Output VAT", "Input VAT"],
    numericAnswer: 10000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "pt-vat-2",
    topicId: "t-tax-vat",
    difficulty: "easy",
    scenario:
      "A standard-rated invoice shows a VAT-inclusive total of £4,800.",
    stem: "How much of the £4,800 is VAT (£)?",
    explanation:
      "Extract VAT from a gross amount using the VAT fraction 1/6 (20/120).",
    workedSolution: "4,800 × 20/120 = £800",
    relatedConcepts: ["VAT fraction", "VAT-inclusive price"],
    numericAnswer: 800,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "pt-vat-3",
      topicId: "t-tax-vat",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Ravi runs a sole trade making only standard-rated supplies. His taxable turnover for the 12 months to 31 May 2025 was £92,000, having first exceeded £90,000 during May 2025.",
      stem: "Under the historic (backward-looking) test, has Ravi breached the VAT registration threshold, and from when does the liability run?",
      explanation:
        "The registration threshold is £90,000 of taxable turnover in any rolling 12 months. Ravi exceeded it at 31 May 2025, so he must notify HMRC within 30 days of the end of that month and is registered from the first day of the second month after the breach.",
      relatedConcepts: ["Registration threshold £90,000", "Historic test"],
    },
    [
      [
        "Yes — turnover exceeded £90,000, so he must register (effective from 1 July 2025)",
        true,
        "Correct — over the £90,000 rolling threshold; registered from the first of the second month after the breach.",
      ],
      [
        "No — the threshold is £85,000 and he is below it",
        false,
        "The FA 2024 registration threshold is £90,000, not £85,000.",
      ],
      [
        "No — registration is only required once turnover exceeds £150,000",
        false,
        "£150,000 relates to the flat-rate scheme joining limit, not registration.",
      ],
      [
        "No — he can rely on the £88,000 deregistration threshold to stay unregistered",
        false,
        "£88,000 is the deregistration threshold; it does not avoid a registration breach.",
      ],
    ],
  ),
  mc(
    {
      id: "pt-vat-4",
      topicId: "t-tax-vat",
      type: "mcq",
      difficulty: "medium",
      stem: "Under the VAT cash accounting scheme, when is output VAT accounted for?",
      explanation:
        "The cash accounting scheme bases VAT on payments received and made, rather than invoice dates — giving automatic bad-debt relief.",
      relatedConcepts: ["Cash accounting scheme", "VAT schemes"],
    },
    [
      [
        "When cash is received from the customer",
        true,
        "Correct — output VAT follows payment received, not the invoice date.",
      ],
      [
        "When the sales invoice is issued",
        false,
        "That is the normal (accruals) basis, not cash accounting.",
      ],
      [
        "At the end of the VAT year regardless of payment",
        false,
        "That resembles the annual accounting scheme's mechanics, not the tax point rule.",
      ],
      [
        "Only when the customer's order is placed",
        false,
        "The order date is not a VAT tax point.",
      ],
    ],
  ),
  calc({
    id: "pt-vat-5",
    topicId: "t-tax-vat",
    difficulty: "medium",
    scenario:
      "Orchard Ltd uses the VAT flat-rate scheme with a flat rate of 12%. In the quarter it makes VAT-inclusive sales of £60,000.",
    stem: "What VAT does Orchard pay to HMRC for the quarter under the flat-rate scheme (£)?",
    explanation:
      "Under the flat-rate scheme, VAT is the flat rate applied to VAT-inclusive (gross) turnover.",
    workedSolution: "60,000 × 12% = £7,200",
    relatedConcepts: ["Flat-rate scheme", "Gross turnover"],
    numericAnswer: 7200,
    numericTolerance: 0,
    unit: "£",
  }),

  // ── National Insurance — t-tax-nic ───────────────────────────────────────
  calc({
    id: "pt-nic-1",
    topicId: "t-tax-nic",
    difficulty: "medium",
    scenario:
      "Sara is an employee earning a salary of £40,000 in 2024/25. (Primary threshold £12,570; upper earnings limit £50,270.)",
    stem: "What are Sara's employee (primary) Class 1 NIC for 2024/25 (£)?",
    explanation:
      "Employee Class 1 main rate is 8% on earnings between the primary threshold (£12,570) and the upper earnings limit (£50,270).",
    workedSolution:
      "(40,000 − 12,570) = 27,430 × 8% = £2,194.40",
    relatedConcepts: ["Class 1 primary", "Primary threshold"],
    numericAnswer: 2194.4,
    numericTolerance: 0.5,
    unit: "£",
  }),
  calc({
    id: "pt-nic-2",
    topicId: "t-tax-nic",
    difficulty: "hard",
    scenario:
      "Dev is an employee earning £60,000 in 2024/25. (PT £12,570; UEL £50,270; main rate 8%, additional rate 2%.)",
    stem: "What are Dev's employee (primary) Class 1 NIC for 2024/25 (£)?",
    explanation:
      "8% applies between the PT and UEL; 2% applies to earnings above the UEL.",
    workedSolution:
      "(50,270 − 12,570) = 37,700 × 8% = 3,016\n(60,000 − 50,270) = 9,730 × 2% = 194.60\nTotal = 3,016 + 194.60 = £3,210.60",
    relatedConcepts: ["UEL", "Additional 2% rate"],
    numericAnswer: 3210.6,
    numericTolerance: 0.5,
    unit: "£",
  }),
  calc({
    id: "pt-nic-3",
    topicId: "t-tax-nic",
    difficulty: "medium",
    scenario:
      "An employer pays one employee an annual salary of £35,000 in 2024/25. (Secondary threshold £9,100; rate 13.8%.) Ignore the employment allowance.",
    stem: "What is the employer's (secondary) Class 1 NIC on this employee for 2024/25 (£)?",
    explanation:
      "Employer Class 1 secondary NIC is 13.8% on earnings above the secondary threshold of £9,100.",
    workedSolution:
      "(35,000 − 9,100) = 25,900 × 13.8% = £3,574.20",
    relatedConcepts: ["Class 1 secondary", "Secondary threshold"],
    numericAnswer: 3574.2,
    numericTolerance: 0.5,
    unit: "£",
  }),
  calc({
    id: "pt-nic-4",
    topicId: "t-tax-nic",
    difficulty: "medium",
    scenario:
      "Acorn Ltd provides one employee with a company car giving a taxable benefit of £6,000 in 2024/25. (Class 1A rate 13.8%.)",
    stem: "What is the employer's Class 1A NIC on the car benefit for 2024/25 (£)?",
    explanation:
      "Class 1A NIC is payable by the employer at 13.8% on the cash equivalent of taxable benefits.",
    workedSolution: "6,000 × 13.8% = £828",
    relatedConcepts: ["Class 1A", "Taxable benefits"],
    numericAnswer: 828,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "pt-nic-5",
    topicId: "t-tax-nic",
    difficulty: "hard",
    scenario:
      "Nina is a self-employed sole trader with tax-adjusted trading profits of £45,000 in 2024/25. (Class 4 lower limit £12,570; upper limit £50,270; main rate 6%.)",
    stem: "What is Nina's Class 4 NIC for 2024/25 (£)?",
    explanation:
      "Class 4 NIC is 6% on profits between £12,570 and £50,270; all £45,000 is below the upper limit.",
    workedSolution:
      "(45,000 − 12,570) = 32,430 × 6% = £1,945.80",
    relatedConcepts: ["Class 4 NIC", "Self-employed"],
    numericAnswer: 1945.8,
    numericTolerance: 0.5,
    unit: "£",
  }),

  // ── Corporation tax — t-tax-ct ───────────────────────────────────────────
  calc({
    id: "pt-ct-1",
    topicId: "t-tax-ct",
    difficulty: "easy",
    scenario:
      "Beech Ltd has taxable total profits of £400,000 for the year ended 31 March 2025. It has no associated companies and no dividends received.",
    stem: "What is Beech Ltd's corporation tax liability (£)?",
    explanation:
      "Profits exceed the £250,000 upper limit, so the full main rate of 25% applies.",
    workedSolution: "400,000 × 25% = £100,000",
    relatedConcepts: ["Main rate 25%", "Upper limit"],
    numericAnswer: 100000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "pt-ct-2",
    topicId: "t-tax-ct",
    difficulty: "easy",
    scenario:
      "Willow Ltd has taxable total profits of £40,000 for the year ended 31 March 2025, with no associated companies.",
    stem: "What is Willow Ltd's corporation tax liability (£)?",
    explanation:
      "Profits are below the £50,000 lower limit, so the small profits rate of 19% applies.",
    workedSolution: "40,000 × 19% = £7,600",
    relatedConcepts: ["Small profits rate 19%", "Lower limit"],
    numericAnswer: 7600,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "pt-ct-3",
    topicId: "t-tax-ct",
    difficulty: "hard",
    scenario:
      "Cedar Ltd has taxable total profits of £100,000 for the year ended 31 March 2025, with no associated companies and no dividends received. (Marginal relief fraction 3/200; upper limit £250,000.)",
    stem: "What is Cedar Ltd's corporation tax liability after marginal relief (£)?",
    explanation:
      "Charge the main rate of 25%, then deduct marginal relief = 3/200 × (upper limit − profits).",
    workedSolution:
      "Main rate: 100,000 × 25% = 25,000\nMarginal relief: 3/200 × (250,000 − 100,000) = 3/200 × 150,000 = 2,250\nLiability = 25,000 − 2,250 = £22,750",
    relatedConcepts: ["Marginal relief", "3/200 fraction"],
    numericAnswer: 22750,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "pt-ct-4",
    topicId: "t-tax-ct",
    difficulty: "medium",
    scenario:
      "For the year ended 31 March 2025, Maple Ltd has trading profits of £180,000, a chargeable gain of £25,000, and rental (property) income of £15,000. It made a qualifying charitable donation of £10,000.",
    stem: "What are Maple Ltd's taxable total profits (TTP) for the year (£)?",
    explanation:
      "Add the income and gains, then deduct qualifying charitable donations.",
    workedSolution:
      "180,000 + 25,000 + 15,000 = 220,000\nLess QCD 10,000\nTTP = £210,000",
    relatedConcepts: ["Taxable total profits", "Qualifying charitable donations"],
    numericAnswer: 210000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "pt-ct-5",
      topicId: "t-tax-ct",
      type: "mcq",
      difficulty: "medium",
      stem: "When does a large company (taxable total profits up to £1.5m, paying at 25%) normally pay its corporation tax for a 12-month accounting period?",
      explanation:
        "A company that is not large pays corporation tax 9 months and 1 day after the end of the accounting period.",
      relatedConcepts: ["CT payment date", "Accounting period"],
    },
    [
      [
        "9 months and 1 day after the end of the accounting period",
        true,
        "Correct — the standard single payment date for companies that are not 'large'.",
      ],
      [
        "12 months after the end of the accounting period",
        false,
        "12 months after the period end is the filing deadline for the return, not the payment date.",
      ],
      [
        "31 January following the tax year",
        false,
        "That is the self-assessment date for individuals, not companies.",
      ],
      [
        "On the first day of the accounting period",
        false,
        "Tax is not due before profits arise.",
      ],
    ],
  ),

  // ── Capital gains tax — t-tax-cgt ────────────────────────────────────────
  calc({
    id: "pt-cgt-1",
    topicId: "t-tax-cgt",
    difficulty: "easy",
    scenario:
      "In 2024/25 Olivia sells a painting, realising a chargeable gain of £11,000. It is her only disposal in the year. (Annual exempt amount £3,000.)",
    stem: "What is Olivia's taxable gain after the annual exempt amount (£)?",
    explanation:
      "Deduct the £3,000 annual exempt amount from the gain.",
    workedSolution: "11,000 − 3,000 = £8,000",
    relatedConcepts: ["Annual exempt amount £3,000", "Chargeable gain"],
    numericAnswer: 8000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "pt-cgt-2",
    topicId: "t-tax-cgt",
    difficulty: "medium",
    scenario:
      "Sam buys shares for £18,000 (plus £200 acquisition costs) and later sells them for £40,000, incurring £300 of selling costs. This is his only disposal in 2024/25. (Annual exempt amount £3,000.)",
    stem: "What is Sam's taxable gain for 2024/25 after the annual exempt amount (£)?",
    explanation:
      "Net proceeds less total cost gives the gain; then deduct the AEA.",
    workedSolution:
      "Net proceeds = 40,000 − 300 = 39,700\nCost = 18,000 + 200 = 18,200\nGain = 39,700 − 18,200 = 21,500\nLess AEA 3,000 = £18,500",
    relatedConcepts: ["Incidental costs", "Annual exempt amount"],
    numericAnswer: 18500,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "pt-cgt-3",
    topicId: "t-tax-cgt",
    difficulty: "hard",
    scenario:
      "On disposing of her trading business in 2024/25, Yusra makes a qualifying gain of £500,000 that fully qualifies for Business Asset Disposal Relief. She has made no previous BADR claims. (AEA £3,000; BADR rate 10%.)",
    stem: "What is the capital gains tax payable on the BADR gain for 2024/25 (£)?",
    explanation:
      "Deduct the £3,000 annual exempt amount, then tax the balance at the 10% BADR rate.",
    workedSolution:
      "Taxable gain = 500,000 − 3,000 = 497,000\nCGT = 497,000 × 10% = £49,700",
    relatedConcepts: ["Business Asset Disposal Relief", "BADR 10%"],
    numericAnswer: 49700,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "pt-cgt-4",
    topicId: "t-tax-cgt",
    difficulty: "medium",
    scenario:
      "In 2024/25 Leo makes one disposal giving a gain of £20,000 and another giving an allowable loss of £4,000. (Annual exempt amount £3,000.)",
    stem: "What is Leo's taxable gain for 2024/25 after losses and the annual exempt amount (£)?",
    explanation:
      "Offset current-year losses against gains first, then deduct the AEA.",
    workedSolution:
      "Net gains = 20,000 − 4,000 = 16,000\nLess AEA 3,000 = £13,000",
    relatedConcepts: ["Allowable losses", "Loss offset"],
    numericAnswer: 13000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "pt-cgt-5",
      topicId: "t-tax-cgt",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following disposals is exempt from capital gains tax?",
      explanation:
        "A car (private motor vehicle) is an exempt asset for CGT, as is a gain on an individual's only/main residence under principal private residence relief.",
      relatedConcepts: ["Exempt assets", "CGT"],
    },
    [
      [
        "Sale of a private motor car",
        true,
        "Correct — private motor cars are exempt assets for CGT.",
      ],
      [
        "Sale of a buy-to-let residential property",
        false,
        "A rental property is chargeable (it is not the main residence).",
      ],
      [
        "Sale of quoted shares in a company",
        false,
        "Quoted shares are chargeable assets.",
      ],
      [
        "Sale of a holiday home that was never the main residence",
        false,
        "A second property that is not the main residence is chargeable.",
      ],
    ],
  ),

  // ── Tax administration & ethics — t-tax-admin ────────────────────────────
  mc(
    {
      id: "pt-admin-1",
      topicId: "t-tax-admin",
      type: "mcq",
      difficulty: "easy",
      stem: "By what date must an individual normally file an online self-assessment tax return for the tax year 2024/25?",
      explanation:
        "The online filing deadline is 31 January following the end of the tax year (so 31 January 2026 for 2024/25). Paper returns are due by the preceding 31 October.",
      relatedConcepts: ["Self-assessment", "Filing deadline"],
    },
    [
      [
        "31 January 2026",
        true,
        "Correct — online returns are due by 31 January after the tax year.",
      ],
      [
        "31 October 2025",
        false,
        "31 October is the deadline for paper returns, not online.",
      ],
      [
        "5 April 2026",
        false,
        "5 April is the end of the following tax year, not a filing deadline.",
      ],
      [
        "6 April 2025",
        false,
        "6 April is the start of the 2025/26 tax year.",
      ],
    ],
  ),
  mc(
    {
      id: "pt-admin-2",
      topicId: "t-tax-admin",
      type: "mcq",
      difficulty: "medium",
      stem: "An individual within self-assessment must normally pay the balancing payment of income tax for 2024/25, plus the first payment on account for 2025/26, by which date?",
      explanation:
        "The balancing payment and the first payment on account are both due by 31 January following the tax year (31 January 2026); the second payment on account is due by the following 31 July.",
      relatedConcepts: ["Payments on account", "Balancing payment"],
    },
    [
      [
        "31 January 2026",
        true,
        "Correct — balancing payment and first POA are due by 31 January after the tax year.",
      ],
      [
        "31 July 2025",
        false,
        "31 July is when the second payment on account is due, not the balancing payment.",
      ],
      [
        "31 December 2025",
        false,
        "There is no 31 December income tax payment date in self-assessment.",
      ],
      [
        "9 months after the year end",
        false,
        "That is a corporation tax rule, not self-assessment for individuals.",
      ],
    ],
  ),
  mc(
    {
      id: "pt-admin-3",
      topicId: "t-tax-admin",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A taxpayer deliberately omits a large amount of rental income from her tax return and conceals the related bank statements when HMRC enquires.",
      stem: "How is this conduct best described?",
      explanation:
        "Tax evasion is illegally reducing tax by concealing or misrepresenting facts (e.g. deliberately understating income). Tax avoidance uses lawful arrangements; this deliberate concealment is evasion, a criminal offence.",
      relatedConcepts: ["Tax evasion", "Avoidance vs evasion"],
    },
    [
      [
        "Tax evasion — illegal and potentially criminal",
        true,
        "Correct — deliberately concealing income to reduce tax is evasion.",
      ],
      [
        "Tax avoidance — lawful tax planning",
        false,
        "Avoidance uses legal means; deliberate concealment is illegal.",
      ],
      [
        "Tax mitigation that HMRC encourages",
        false,
        "Concealing income is not legitimate mitigation.",
      ],
      [
        "A simple careless error with no consequences",
        false,
        "Deliberate concealment is not a careless error and carries serious penalties.",
      ],
    ],
  ),
  mc(
    {
      id: "pt-admin-4",
      topicId: "t-tax-admin",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A chartered accountant discovers that a client has deliberately under-declared income. The client refuses to correct the position or allow disclosure to HMRC.",
      stem: "What is the most appropriate professional response under the fundamental ethical principles?",
      explanation:
        "Where a client will not regularise an irregularity, the member should cease to act, and (subject to the duty under money-laundering rules) consider/make a report to the appropriate authority (a suspicious activity report to the NCA/MLRO). The member must not be associated with misleading information.",
      relatedConcepts: ["Ethics", "Money laundering", "Integrity"],
    },
    [
      [
        "Cease to act for the client and consider a money-laundering report",
        true,
        "Correct — the member must not be associated with the deception and should consider reporting.",
      ],
      [
        "Continue acting and say nothing to preserve client confidentiality",
        false,
        "Confidentiality does not override the duty not to be associated with misleading information or money-laundering reporting.",
      ],
      [
        "Amend the return without telling the client",
        false,
        "Acting without authority is not appropriate and does not resolve the ethical breach.",
      ],
      [
        "Tip off the client that a report will be made, then report",
        false,
        "Tipping off is itself an offence under the money-laundering rules.",
      ],
    ],
  ),
  mc(
    {
      id: "pt-admin-5",
      topicId: "t-tax-admin",
      type: "mcq",
      difficulty: "medium",
      stem: "Under the standard penalty regime for an inaccurate tax return, the penalty as a percentage of the potential lost revenue is highest where the error is:",
      explanation:
        "Behaviour drives the penalty: careless errors attract a lower maximum (up to 30% of PLR), deliberate but not concealed up to 70%, and deliberate and concealed up to 100%.",
      relatedConcepts: ["Penalties", "Potential lost revenue", "Behaviour"],
    },
    [
      [
        "Deliberate and concealed",
        true,
        "Correct — deliberate and concealed errors carry the highest maximum penalty (up to 100% of PLR).",
      ],
      [
        "Careless",
        false,
        "Careless errors carry a lower maximum (up to 30% of PLR).",
      ],
      [
        "A reasonable error despite reasonable care",
        false,
        "Where reasonable care was taken, no penalty arises.",
      ],
      [
        "Deliberate but not concealed",
        false,
        "This is high (up to 70%) but lower than deliberate and concealed.",
      ],
    ],
  ),
];

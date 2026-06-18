// Tax Compliance (TC) — Professional Level question bank.
// Scenario-based UK tax computations + "explain the treatment" items, with
// worked solutions. Original questions (not copied from ICAEW past papers).
//
// TAX-YEAR BASIS: Finance Act 2024 — income tax / NIC / CGT / IHT figures for
// 2024/25; corporation tax FY2024. These are the examinable figures for ACA
// 2026 sittings. CGT main rates are stated explicitly in each stem because the
// 30 Oct 2024 change (10%/20% -> 18%/24%) straddles the FA boundary.
import type { Question } from "@/types/domain";
import { mc, calc } from "@/data/question-helpers";

export const tcQuestions: Question[] = [
  // ────────────────────────────────────────────────────────────────────────
  // Corporation tax — t-tc-ct
  // ────────────────────────────────────────────────────────────────────────
  calc({
    id: "tc-ct-1",
    topicId: "t-tc-ct",
    difficulty: "hard",
    scenario:
      "Aldgate Ltd has a 12-month accounting period to 31 March 2025 with taxable total profits (TTP) of £180,000. It has no associated companies and received no dividends. Corporation tax FY2024: main rate 25%, small profits rate 19% on profits up to £50,000, marginal relief between £50,000 and £250,000 with standard fraction 3/200.",
    stem: "What is Aldgate Ltd's corporation tax liability for the year, to the nearest £?",
    explanation:
      "Profits of £180,000 fall in the marginal band (£50,000–£250,000). Tax = profits × 25% − marginal relief, where relief = 3/200 × (£250,000 − £180,000) × (TTP/augmented profits). Augmented profits equal TTP here (no dividends).",
    workedSolution:
      "Main rate: 180,000 × 25% = 45,000\nMarginal relief: 3/200 × (250,000 − 180,000) = 3/200 × 70,000 = 1,050\nLiability = 45,000 − 1,050 = £43,950",
    relatedConcepts: ["Marginal relief", "Standard fraction 3/200", "Augmented profits"],
    numericAnswer: 43950,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "tc-ct-2",
    topicId: "t-tc-ct",
    difficulty: "hard",
    scenario:
      "Bishopsgate Ltd prepares accounts for the 12 months to 31 March 2025. Its main pool tax written-down value brought forward was £120,000. In the year it bought: a new general-purpose machine for £900,000 (qualifies for AIA), a new electric van for £40,000, and a second-hand integral feature (electrical system) for £30,000. AIA limit is £1,000,000; full expensing (100%) is available on new main-pool plant. The main pool writing-down allowance is 18%.",
    stem: "Assuming the company claims the maximum capital allowances and uses AIA on the integral feature, what is the total capital allowances claim for the period, to the nearest £? (Treat the new machine under full expensing and the new electric van as a 100% first-year allowance.)",
    explanation:
      "New main-pool machine £900,000 → 100% full expensing. New electric van £40,000 → 100% FYA. Second-hand integral feature is NOT new, so use AIA £30,000 (well within the £1m AIA limit). Remaining main pool b/f £120,000 → WDA 18%.",
    workedSolution:
      "Full expensing (new machine): 900,000\n100% FYA (new electric van): 40,000\nAIA (second-hand integral feature): 30,000\nWDA on pool b/f: 120,000 × 18% = 21,600\nTotal = 900,000 + 40,000 + 30,000 + 21,600 = £991,600",
    relatedConcepts: ["Full expensing", "AIA £1m", "First-year allowances", "Writing-down allowance"],
    numericAnswer: 991600,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "tc-ct-3",
    topicId: "t-tc-ct",
    difficulty: "hard",
    scenario:
      "Cornhill Ltd has the following results: a trading loss of £200,000 in the year to 31 March 2025; in the prior year to 31 March 2024 it had trading profits of £150,000 and a chargeable gain of £30,000. There is no other income in either year. The company wishes to relieve the loss as early as possible.",
    stem: "If the company makes a current-year claim followed by a 12-month carry-back claim against total profits, what amount of the trading loss remains to carry forward, to the nearest £?",
    explanation:
      "Current year: no other profits in the loss-making year, so £0 relieved currently. Carry back 12 months against total profits of the prior year (trading £150,000 + gain £30,000 = £180,000). Loss carried forward = £200,000 − £180,000.",
    workedSolution:
      "Loss £200,000\nCurrent-year claim: £0 (no other profits this year)\nCarry-back vs prior-year total profits: 150,000 + 30,000 = 180,000 relieved\nLoss c/f = 200,000 − 180,000 = £20,000",
    relatedConcepts: ["Trading loss relief", "Carry-back against total profits", "Loss carried forward"],
    numericAnswer: 20000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "tc-ct-4",
    topicId: "t-tc-ct",
    difficulty: "medium",
    scenario:
      "Eastcheap Ltd has TTP of £40,000 for the year to 31 March 2025. It has one associated company. Corporation tax FY2024: small profits rate 19%, main rate 25%, marginal band £50,000–£250,000, fraction 3/200. Augmented profits equal TTP.",
    stem: "What is Eastcheap Ltd's corporation tax liability, to the nearest £?",
    explanation:
      "The profit limits are divided by the number of associated companies plus the company itself (i.e. divided by 2). Lower limit = 50,000/2 = 25,000; upper limit = 250,000/2 = 125,000. Profits of £40,000 fall between, so marginal relief applies.",
    workedSolution:
      "Limits ÷ 2: lower 25,000, upper 125,000\nMain rate: 40,000 × 25% = 10,000\nMarginal relief: 3/200 × (125,000 − 40,000) = 3/200 × 85,000 = 1,275\nLiability = 10,000 − 1,275 = £8,725",
    relatedConcepts: ["Associated companies", "Divided profit limits", "Marginal relief"],
    numericAnswer: 8725,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "tc-ct-5",
      topicId: "t-tc-ct",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Fenchurch Ltd's draft accounts show a £25,000 charge for a customer's entertaining, a £5,000 qualifying R&D revenue expense, a £2,000 fine for a health-and-safety breach, and £3,000 of depreciation. The company is computing its trading profit adjustment.",
      stem: "Which of these is an ALLOWABLE deduction (i.e. requires NO add-back) in computing tax-adjusted trading profit?",
      explanation:
        "Customer entertaining is disallowed; the H&S fine is disallowed (not wholly/exclusively for the trade and penal in nature); depreciation is disallowed (replaced by capital allowances). Qualifying R&D revenue expenditure is allowable trading expenditure (and may attract additional relief).",
      relatedConcepts: ["Trading profit adjustments", "Disallowable expenditure", "R&D"],
    },
    [
      ["The £5,000 qualifying R&D revenue expense", true, "Correct — qualifying R&D revenue expenditure is allowable trading expenditure."],
      ["The £25,000 customer entertaining", false, "Customer/client entertaining is specifically disallowed."],
      ["The £2,000 health-and-safety fine", false, "Fines and penalties are not wholly and exclusively for the trade — disallowed."],
      ["The £3,000 depreciation", false, "Depreciation is always added back; capital allowances are given instead."],
    ],
  ),

  // ────────────────────────────────────────────────────────────────────────
  // Capital gains tax — t-tc-cgt
  // ────────────────────────────────────────────────────────────────────────
  calc({
    id: "tc-cgt-1",
    topicId: "t-tc-cgt",
    difficulty: "hard",
    scenario:
      "On 1 June 2024 Harriet sold the whole of her trading business, which she had run as a sole trader for 10 years, realising qualifying gains of £600,000. These gains qualify in full for Business Asset Disposal Relief (BADR). Her lifetime BADR limit (£1,000,000) is fully available. She has taxable income that uses all of her basic-rate band, the annual exempt amount is £3,000, and BADR gains are taxed at 10%.",
    stem: "What is Harriet's capital gains tax liability on the disposal, to the nearest £?",
    explanation:
      "Deduct the £3,000 annual exempt amount from the gains, then apply the 10% BADR rate to the qualifying gains. The AEA is set against the BADR gains here.",
    workedSolution:
      "Chargeable gain after AEA = 600,000 − 3,000 = 597,000\nCGT at BADR 10% = 597,000 × 10% = £59,700",
    relatedConcepts: ["Business Asset Disposal Relief", "BADR 10%", "Annual exempt amount £3,000"],
    numericAnswer: 59700,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "tc-cgt-2",
    topicId: "t-tc-cgt",
    difficulty: "hard",
    scenario:
      "Ironmonger Ltd sold a freehold factory used in its trade for £500,000, realising a chargeable gain of £180,000. Within the qualifying period it reinvested £460,000 of the £500,000 proceeds in a new qualifying replacement factory and claims rollover relief. This is a corporate disposal (no annual exempt amount applies).",
    stem: "How much of the gain is chargeable now (i.e. cannot be rolled over), to the nearest £?",
    explanation:
      "Rollover relief is restricted where proceeds are not fully reinvested. The amount NOT reinvested (£500,000 − £460,000 = £40,000) is chargeable immediately, limited to the gain. The remaining gain is rolled over against the cost of the replacement.",
    workedSolution:
      "Proceeds not reinvested = 500,000 − 460,000 = 40,000\nGain £180,000 exceeds £40,000, so chargeable now = £40,000 (the balance of £140,000 is rolled over).",
    relatedConcepts: ["Rollover relief", "Proceeds not reinvested", "Replacement of business assets"],
    numericAnswer: 40000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "tc-cgt-3",
    topicId: "t-tc-cgt",
    difficulty: "hard",
    scenario:
      "On 10 July 2024 Jasper gifted a 5% shareholding in an unquoted trading company to his daughter. The market value at gift was £250,000 and Jasper's base cost was £40,000. Both parties jointly elect for gift holdover relief on this business asset; the shares contain no chargeable non-business assets and no actual cash consideration was paid.",
    stem: "After a valid gift holdover relief claim, what chargeable gain arises to Jasper on the gift, to the nearest £?",
    explanation:
      "Gift holdover relief for a gift of qualifying business assets (with no sale proceeds) defers the entire gain. The held-over gain reduces the donee's base cost; the donor's chargeable gain is therefore nil.",
    workedSolution:
      "Gain before relief = 250,000 − 40,000 = 210,000\nNo proceeds received, so the full gain is held over.\nChargeable gain to Jasper = £0",
    relatedConcepts: ["Gift holdover relief", "Business asset gift", "Donee base cost reduction"],
    numericAnswer: 0,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "tc-cgt-4",
    topicId: "t-tc-cgt",
    difficulty: "medium",
    scenario:
      "In 2024/25 Kavi, a higher-rate taxpayer, sold a residential investment property (not his main residence), realising a gain of £53,000. He had a capital loss brought forward of £8,000 and made no other disposals. The annual exempt amount is £3,000. State the rate: gains on residential property for a higher-rate taxpayer are taxed at 24%.",
    stem: "What is Kavi's capital gains tax liability for 2024/25, to the nearest £?",
    explanation:
      "Offset the brought-forward loss, then deduct the £3,000 AEA, then apply the 24% residential-property rate for a higher-rate taxpayer.",
    workedSolution:
      "Net gain = 53,000 − 8,000 (loss b/f) = 45,000\nLess AEA 3,000 = 42,000 taxable\nCGT = 42,000 × 24% = £10,080",
    relatedConcepts: ["Capital losses brought forward", "Annual exempt amount", "Residential property rate 24%"],
    numericAnswer: 10080,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "tc-cgt-5",
      topicId: "t-tc-cgt",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Liang transferred a chargeable asset to his wife during 2024/25 and separately sold listed shares to an unconnected third party at arm's length. He is considering the CGT consequences of each transaction.",
      stem: "Which statement correctly describes the CGT treatment?",
      explanation:
        "Transfers between spouses/civil partners living together are made on a no gain/no loss basis (the transferee inherits the transferor's base cost). The arm's-length sale of shares uses actual proceeds.",
      relatedConcepts: ["Spousal transfers", "No gain/no loss", "Market value rule"],
    },
    [
      ["The spousal transfer is no gain/no loss; the share sale uses actual proceeds", true, "Correct — inter-spouse transfers are no gain/no loss; arm's-length sales use proceeds."],
      ["Both transactions use market value because the parties are connected", false, "Spouses are connected but the transfer is on a no gain/no loss basis, not market value with a gain."],
      ["The spousal transfer triggers a gain at market value", false, "Inter-spouse transfers (living together) are no gain/no loss."],
      ["Neither transaction is a chargeable disposal", false, "The arm's-length share sale is a chargeable disposal."],
    ],
  ),

  // ────────────────────────────────────────────────────────────────────────
  // Income tax & NIC — t-tc-it
  // ────────────────────────────────────────────────────────────────────────
  calc({
    id: "tc-it-1",
    topicId: "t-tc-it",
    difficulty: "hard",
    scenario:
      "Maya is employed in 2024/25 with an annual salary of £60,000 (this is her only income; all of her personal allowance is set against it). Income tax 2024/25: personal allowance £12,570; basic rate 20% on the first £37,700 of taxable income; higher rate 40% to £125,140.",
    stem: "What is Maya's income tax liability for 2024/25, to the nearest £?",
    explanation:
      "Taxable income = £60,000 − £12,570 PA = £47,430. The first £37,700 is taxed at 20%; the remainder at 40%.",
    workedSolution:
      "Taxable income = 60,000 − 12,570 = 47,430\n20% × 37,700 = 7,540\n40% × (47,430 − 37,700) = 40% × 9,730 = 3,892\nIncome tax = 7,540 + 3,892 = £11,432",
    relatedConcepts: ["Personal allowance", "Basic/higher rate bands", "Employment income"],
    numericAnswer: 11432,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "tc-it-2",
    topicId: "t-tc-it",
    difficulty: "hard",
    scenario:
      "In 2024/25 Noor's employer provides a company car with a list price of £40,000 and CO2 emissions giving an appropriate percentage of 30%. The employer pays for all fuel, including private fuel, with the car-fuel benefit multiplier of £27,800 for 2024/25. The car was available all year and Noor made no capital or private-use contributions.",
    stem: "What is the total taxable benefit (car benefit plus fuel benefit) for 2024/25, to the nearest £?",
    explanation:
      "Car benefit = list price × appropriate percentage. Fuel benefit = £27,800 × the same appropriate percentage.",
    workedSolution:
      "Car benefit = 40,000 × 30% = 12,000\nFuel benefit = 27,800 × 30% = 8,340\nTotal benefit = 12,000 + 8,340 = £20,340",
    relatedConcepts: ["Company car benefit", "Car fuel benefit", "Appropriate percentage"],
    numericAnswer: 20340,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "tc-it-3",
    topicId: "t-tc-it",
    difficulty: "medium",
    scenario:
      "Omar is employed with a salary of £45,000 for 2024/25 (paid evenly). Class 1 primary (employee) NIC 2024/25: nil up to the primary threshold of £12,570; 8% on earnings between £12,570 and the upper earnings limit of £50,270; 2% above £50,270.",
    stem: "What is Omar's employee (primary) Class 1 NIC for 2024/25, to the nearest £?",
    explanation:
      "All earnings fall within the main 8% band: 8% on the slice between £12,570 and £45,000.",
    workedSolution:
      "Earnings in 8% band = 45,000 − 12,570 = 32,430\nClass 1 primary = 32,430 × 8% = £2,594.40 ≈ £2,594",
    relatedConcepts: ["Class 1 primary NIC", "Primary threshold", "Upper earnings limit"],
    numericAnswer: 2594,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "tc-it-4",
    topicId: "t-tc-it",
    difficulty: "hard",
    scenario:
      "Priya is a sole trader with tax-adjusted trading profits of £70,000 for 2024/25. Class 4 NIC 2024/25: nil up to the lower profits limit of £12,570; 6% on profits between £12,570 and £50,270; 2% on profits above £50,270.",
    stem: "What is Priya's Class 4 NIC for 2024/25, to the nearest £?",
    explanation:
      "Apply 6% to the band £12,570–£50,270 and 2% to profits above £50,270.",
    workedSolution:
      "6% band: (50,270 − 12,570) = 37,700 × 6% = 2,262\n2% band: (70,000 − 50,270) = 19,730 × 2% = 394.60\nClass 4 = 2,262 + 394.60 = £2,656.60 ≈ £2,657",
    relatedConcepts: ["Class 4 NIC", "Lower/upper profits limits", "Self-employment"],
    numericAnswer: 2657,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "tc-it-5",
    topicId: "t-tc-it",
    difficulty: "hard",
    scenario:
      "Quentin's draft accounts show a net profit of £80,000 after charging: depreciation £6,000, his own salary ('drawings') £20,000, client entertaining £1,500, and a £2,000 deduction for general (non-specific) bad-debt provision. He also omitted to add £4,000 of goods he took for personal use at cost (no entry made).",
    stem: "What is Priya's... sorry, Quentin's tax-adjusted trading profit for the period, to the nearest £?",
    explanation:
      "Add back disallowable items: depreciation, owner's drawings, client entertaining, the general bad-debt provision, and the goods taken for own use (at cost, since no entry was made).",
    workedSolution:
      "Net profit 80,000\n+ depreciation 6,000\n+ drawings 20,000\n+ client entertaining 1,500\n+ general bad-debt provision 2,000\n+ goods for own use 4,000\nAdjusted profit = 80,000 + 6,000 + 20,000 + 1,500 + 2,000 + 4,000 = £113,500",
    relatedConcepts: ["Trading income adjustments", "Goods for own use", "Disallowable expenditure"],
    numericAnswer: 113500,
    numericTolerance: 0,
    unit: "£",
  }),

  // ────────────────────────────────────────────────────────────────────────
  // VAT — t-tc-vat
  // ────────────────────────────────────────────────────────────────────────
  calc({
    id: "tc-vat-1",
    topicId: "t-tc-vat",
    difficulty: "medium",
    scenario:
      "Riverside Ltd, fully taxable and VAT registered, has the following for its VAT quarter (all figures exclusive of VAT): standard-rated sales £200,000, zero-rated sales £50,000, standard-rated purchases and expenses £90,000 (all with recoverable input VAT). Standard rate is 20%.",
    stem: "What is the net VAT payable to HMRC for the quarter, to the nearest £?",
    explanation:
      "Output VAT arises on standard-rated sales only (zero-rated at 0%). Input VAT is recoverable on standard-rated purchases. Net = output − input.",
    workedSolution:
      "Output VAT = 200,000 × 20% = 40,000 (zero-rated adds £0)\nInput VAT = 90,000 × 20% = 18,000\nNet payable = 40,000 − 18,000 = £22,000",
    relatedConcepts: ["Output VAT", "Input VAT", "Zero-rated supplies"],
    numericAnswer: 22000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "tc-vat-2",
    topicId: "t-tc-vat",
    difficulty: "hard",
    scenario:
      "Sandford Ltd is partially exempt. In the VAT quarter it incurs: input VAT directly attributable to taxable supplies £30,000; input VAT directly attributable to exempt supplies £8,000; and residual (non-attributable) input VAT £20,000. Taxable supplies (excl. VAT) were £600,000 and exempt supplies were £200,000. The standard method apportions residual input VAT by the value of taxable supplies as a percentage of total supplies, rounded up to the next whole percent.",
    stem: "Assuming the de minimis limits are NOT met, how much input VAT is recoverable for the quarter, to the nearest £?",
    explanation:
      "Recoverable = directly attributable to taxable + (recovery % × residual). Recovery % = 600,000/800,000 = 75% (already whole). Exempt-attributable input VAT is not recoverable (de minimis not met).",
    workedSolution:
      "Recovery % = 600,000 / 800,000 = 75%\nResidual recoverable = 20,000 × 75% = 15,000\nTotal recoverable = 30,000 (taxable) + 15,000 = £45,000",
    relatedConcepts: ["Partial exemption", "Standard method", "Residual input VAT"],
    numericAnswer: 45000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "tc-vat-3",
      topicId: "t-tc-vat",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Tilbury Ltd discovers it under-declared net VAT of £8,000 across earlier returns. Its current annual turnover is £900,000. The error was a genuine mistake and is below the greater of £10,000 and 1% of turnover (capped at £50,000).",
      stem: "How may Tilbury correct this VAT error?",
      explanation:
        "An error below the correction threshold (greater of £10,000, or 1% of turnover capped at £50,000) may be adjusted on the next VAT return. Larger errors, or those that are deliberate, must be separately notified to HMRC.",
      relatedConcepts: ["VAT error correction", "De minimis error threshold", "Voluntary disclosure"],
    },
    [
      ["Adjust it on the next VAT return, as it is below the error-correction threshold", true, "Correct — £8,000 is below the greater of £10,000 / 1% of turnover, so it can be netted off on the next return."],
      ["It must always be separately notified to HMRC in writing", false, "Separate notification is required only above the threshold or for deliberate errors."],
      ["No correction is needed because it was a genuine mistake", false, "The error must still be corrected; intent affects penalties, not the duty to correct."],
      ["It can be ignored if turnover exceeds £85,000", false, "There is no such exemption; errors must be corrected."],
    ],
  ),
  mc(
    {
      id: "tc-vat-4",
      topicId: "t-tc-vat",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Upton Ltd, a growing retailer, has taxable turnover of £200,000 and wants to simplify VAT accounting and improve cash flow. Its customers are mainly the public who do not need detailed VAT invoices, and it offers little credit (most sales are for cash). Annual taxable turnover is below £1.35m.",
      stem: "Which VAT scheme is MOST appropriate to simplify its VAT accounting (a single flat percentage applied to VAT-inclusive turnover)?",
      explanation:
        "The flat rate scheme (available where taxable turnover is up to £150,000) lets a business apply a single sector percentage to gross turnover, simplifying record-keeping. Cash accounting helps where credit is given; here sales are mostly cash so flat rate best fits the 'single percentage' description — but note the £150,000 entry limit.",
      relatedConcepts: ["Flat rate scheme", "Cash accounting scheme", "Annual accounting scheme"],
    },
    [
      ["The flat rate scheme (if eligible — turnover up to £150,000)", true, "Correct — a single flat percentage on gross turnover; entry limit is £150,000 taxable turnover."],
      ["The cash accounting scheme, because it removes the need for any invoices", false, "Cash accounting changes the tax point to payment; it does not remove invoicing and best suits credit sales."],
      ["The annual accounting scheme, to file one return and never make payments on account", false, "Annual accounting still requires interim payments on account; it reduces filing frequency, not record-keeping per the 'single percentage' aim."],
      ["No scheme is available below £1.35m turnover", false, "Several schemes are available; £1.35m is the cash/annual accounting entry threshold."],
    ],
  ),
  calc({
    id: "tc-vat-5",
    topicId: "t-tc-vat",
    difficulty: "medium",
    scenario:
      "Wallbrook Ltd makes a single standard-rated sale and issues an invoice for a VAT-inclusive total of £7,200. The standard rate of VAT is 20%.",
    stem: "What is the output VAT included in this £7,200 gross invoice, to the nearest £?",
    explanation:
      "Extract VAT from a gross (VAT-inclusive) amount using the VAT fraction 20/120 (= 1/6).",
    workedSolution:
      "Output VAT = 7,200 × 20/120 = 7,200 × 1/6 = £1,200",
    relatedConcepts: ["VAT fraction", "VAT-inclusive amounts", "Output VAT"],
    numericAnswer: 1200,
    numericTolerance: 0,
    unit: "£",
  }),

  // ────────────────────────────────────────────────────────────────────────
  // Inheritance tax — t-tc-iht
  // ────────────────────────────────────────────────────────────────────────
  calc({
    id: "tc-iht-1",
    topicId: "t-tc-iht",
    difficulty: "hard",
    scenario:
      "On 1 May 2018 Beatrice made a chargeable lifetime transfer (a gift into a discretionary trust) with a net value after exemptions of £400,000. She had made no earlier transfers. The trustees agreed to pay any lifetime IHT. The nil-rate band at the time was £325,000; the lifetime IHT rate on chargeable lifetime transfers (where the trustees pay) is 20%.",
    stem: "What is the lifetime IHT due on this chargeable lifetime transfer, to the nearest £?",
    explanation:
      "A CLT uses the available nil-rate band (£325,000) first; the excess is charged at the lifetime rate of 20% (used because the trustees, not the donor, bear the tax — no grossing up).",
    workedSolution:
      "Excess over NRB = 400,000 − 325,000 = 75,000\nLifetime IHT at 20% = 75,000 × 20% = £15,000",
    relatedConcepts: ["Chargeable lifetime transfer", "Nil-rate band £325,000", "Lifetime rate 20%"],
    numericAnswer: 15000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "tc-iht-2",
    topicId: "t-tc-iht",
    difficulty: "hard",
    scenario:
      "Cedric died on 1 June 2024 leaving a death estate (after debts and exemptions) of £900,000. He made no lifetime transfers in the seven years before death and made no charitable legacies. He leaves his home (worth £250,000) to his son, so the residence nil-rate band is available. Nil-rate band £325,000; residence nil-rate band £175,000; death rate 40%. His estate is below the £2m RNRB taper threshold.",
    stem: "What is the IHT payable on Cedric's death estate, to the nearest £?",
    explanation:
      "Both the NRB (£325,000) and RNRB (£175,000) are available (home left to a direct descendant, estate under £2m). The taxable estate above the combined £500,000 band is charged at 40%.",
    workedSolution:
      "Combined bands = 325,000 + 175,000 = 500,000\nTaxable estate = 900,000 − 500,000 = 400,000\nIHT at 40% = 400,000 × 40% = £160,000",
    relatedConcepts: ["Death estate", "Residence nil-rate band £175,000", "Death rate 40%"],
    numericAnswer: 160000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "tc-iht-3",
    topicId: "t-tc-iht",
    difficulty: "medium",
    scenario:
      "In 2024/25 Delia makes a single cash gift of £8,000 to her nephew. She has made no other gifts in the current or previous tax year, and she has not used her annual exemption in either year. The IHT annual exemption is £3,000 per tax year and one year's unused exemption may be carried forward.",
    stem: "After deducting available annual exemptions, what is the potentially exempt transfer (the value still in charge if she dies within seven years), to the nearest £?",
    explanation:
      "Use the current year's £3,000 annual exemption plus the prior year's unused £3,000 brought forward (£6,000 total). The remainder is a PET.",
    workedSolution:
      "Annual exemptions: 3,000 (current) + 3,000 (b/f) = 6,000\nPET = 8,000 − 6,000 = £2,000",
    relatedConcepts: ["Annual exemption £3,000", "Carry-forward of annual exemption", "Potentially exempt transfer"],
    numericAnswer: 2000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "tc-iht-4",
    topicId: "t-tc-iht",
    difficulty: "hard",
    scenario:
      "Edmund died on 1 March 2025 with a death estate (after debts) of £800,000. He left £80,000 to charity and the residue to his children. His baseline net estate (for the charity test) is £475,000 after deducting the available nil-rate band of £325,000. No RNRB is available. Because the charitable gift (£80,000) is at least 10% of the £475,000 baseline (£47,500), the reduced death rate of 36% applies; otherwise 40% applies.",
    stem: "What is the IHT payable on Edmund's chargeable death estate, to the nearest £? (The £80,000 to charity is exempt; tax the remainder above the nil-rate band at the appropriate rate.)",
    explanation:
      "Charitable legacy of £80,000 ≥ 10% of the £475,000 baseline, so the 36% reduced rate applies. Chargeable estate = estate − charity gift − NRB. Tax that at 36%.",
    workedSolution:
      "Charity gift 80,000 ≥ 10% × 475,000 (47,500) → 36% rate applies\nChargeable estate = 800,000 − 80,000 (charity) − 325,000 (NRB) = 395,000\nIHT at 36% = 395,000 × 36% = £142,200",
    relatedConcepts: ["Reduced charity rate 36%", "10% baseline test", "Charitable exemption"],
    numericAnswer: 142200,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "tc-iht-5",
      topicId: "t-tc-iht",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Freya made an outright cash gift of £100,000 to her son on 1 September 2023 and survives. She is reviewing the IHT status of the gift in the context of her wider estate planning.",
      stem: "How is this lifetime gift to an individual classified for IHT purposes?",
      explanation:
        "An outright gift to another individual is a potentially exempt transfer (PET): no lifetime IHT is due, and it becomes fully exempt if the donor survives seven years; if she dies within seven years it becomes chargeable (with taper relief on the tax after three years).",
      relatedConcepts: ["Potentially exempt transfer", "Seven-year rule", "Taper relief"],
    },
    [
      ["A potentially exempt transfer — exempt if she survives seven years", true, "Correct — outright gifts to individuals are PETs; no lifetime charge, exempt after seven years' survival."],
      ["A chargeable lifetime transfer taxed immediately at 20%", false, "The 20% lifetime charge applies to transfers into most trusts, not outright gifts to individuals."],
      ["An exempt transfer with no IHT consequences at all", false, "It only becomes exempt after seven years' survival; death within seven years brings it into charge."],
      ["Immediately chargeable at the 40% death rate", false, "No charge arises in lifetime on a PET; 40% could apply only on death within seven years."],
    ],
  ),

  // ────────────────────────────────────────────────────────────────────────
  // Ethics in tax — t-tc-eth
  // ────────────────────────────────────────────────────────────────────────
  mc(
    {
      id: "tc-eth-1",
      topicId: "t-tc-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "While preparing a client's current-year tax return, you discover the client made a material error in a previously submitted return that understated their tax liability. You explain this to the client, but they refuse to disclose the error to HMRC or to correct it.",
      stem: "Under the ICAEW Code / Professional Conduct in Relation to Taxation (PCRT), what should you do?",
      explanation:
        "You must advise the client to disclose. If the client refuses, you should cease to act, notify the client in writing that you no longer act, and consider your obligations (including under anti-money-laundering rules — a report to the MLRO/NCA may be required). You must not be associated with a return you know to be misleading.",
      relatedConcepts: ["PCRT", "Errors and disclosure", "Ceasing to act", "Money laundering reporting"],
    },
    [
      ["Advise disclosure; if the client refuses, cease to act, notify them in writing, and consider a money-laundering report", true, "Correct — the PCRT 'dealing with errors' standard requires this sequence."],
      ["Correct the prior return yourself and submit it to HMRC without the client's authority", false, "You cannot disclose to HMRC without client authority; you advise and, if needed, cease to act."],
      ["Continue acting and simply ensure the current return is correct", false, "You cannot remain associated with a known uncorrected error; continuing risks breaching the standards."],
      ["Do nothing, as client confidentiality overrides everything", false, "Confidentiality does not override the duty not to be associated with misleading information or AML obligations."],
    ],
  ),
  mc(
    {
      id: "tc-eth-2",
      topicId: "t-tc-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A client asks you to suggest an arrangement that has no commercial purpose and exists solely to exploit a perceived loophole, contrary to the clear intention of Parliament, in order to reduce tax.",
      stem: "Which PCRT 'standards for tax planning' principle is most directly engaged?",
      explanation:
        "PCRT requires members not to create, encourage or promote tax planning that achieves results contrary to the clear intention of Parliament, or that is highly artificial/contrived. Tax planning must be based on a credible view of the law.",
      relatedConcepts: ["Standards for tax planning", "Contrary to Parliament's intention", "Tax avoidance vs planning"],
    },
    [
      ["Members must not promote planning contrary to the clear intention of Parliament", true, "Correct — this is the core PCRT tax-planning standard; artificial loophole exploitation breaches it."],
      ["There is no issue provided the arrangement is technically legal", false, "PCRT goes beyond legality: artificial schemes contrary to Parliament's intention are not acceptable."],
      ["You must report the client to HMRC for requesting tax planning", false, "Requesting planning is not itself reportable; you should decline to promote unacceptable arrangements."],
      ["Confidentiality means you should implement whatever the client asks", false, "Professional standards constrain what you may advise or promote, regardless of the client's wishes."],
    ],
  ),
  mc(
    {
      id: "tc-eth-3",
      topicId: "t-tc-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "You act for two clients: a husband and wife who are divorcing and each want you to advise on the tax consequences of dividing their jointly owned assets. Each could benefit at the other's expense.",
      stem: "Which fundamental principle and threat is most directly raised, and what is the appropriate response?",
      explanation:
        "This raises a conflict of interest, threatening objectivity. The member should identify the conflict, and may only continue to act for both with informed consent and appropriate safeguards (e.g. separate teams / information barriers); otherwise the member should act for only one party or neither.",
      relatedConcepts: ["Conflict of interest", "Objectivity", "Safeguards and informed consent"],
    },
    [
      ["A conflict of interest threatening objectivity — obtain informed consent with safeguards or decline to act for both", true, "Correct — manage the conflict with safeguards/consent, or act for only one party."],
      ["A self-interest threat — simply increase the fee to compensate for the extra risk", false, "The primary issue is conflict of interest/objectivity, not fee level."],
      ["No issue, because both are existing clients you may continue to advise jointly", false, "Their interests now diverge; you cannot simply continue without managing the conflict."],
      ["An intimidation threat requiring you to resign from the profession", false, "The relevant threat is a conflict of interest; resignation from the profession is not the response."],
    ],
  ),
  mc(
    {
      id: "tc-eth-4",
      topicId: "t-tc-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A new client provides figures for their tax return that appear materially understated, and you have grounds to suspect they may be concealing income. They become evasive when you ask for supporting records.",
      stem: "What is the appropriate response regarding any external report?",
      explanation:
        "Suspected tax evasion engages anti-money-laundering law. The member should make an internal report to the firm's Money Laundering Reporting Officer (or to the NCA via a Suspicious Activity Report if a sole practitioner), and must not 'tip off' the client about the report.",
      relatedConcepts: ["Money laundering", "Suspicious Activity Report", "Tipping off", "MLRO"],
    },
    [
      ["Make an internal report to the MLRO (or a SAR to the NCA) and do not tip off the client", true, "Correct — suspected evasion triggers AML reporting; tipping off is an offence."],
      ["Immediately telephone HMRC's fraud line and tell the client you have done so", false, "Reporting goes to the MLRO/NCA, and informing the client risks the tipping-off offence."],
      ["Take no action unless the client is convicted of an offence", false, "AML reporting is based on knowledge or suspicion, not on conviction."],
      ["Resign and destroy your working papers to protect the client", false, "Destroying records is improper; you must retain records and make the required report."],
    ],
  ),
  mc(
    {
      id: "tc-eth-5",
      topicId: "t-tc-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Acting under the PCRT, a member is asked by HMRC for information about a client during an enquiry. The member is considering what information may be provided.",
      stem: "Which statement best reflects the member's duty when dealing with HMRC?",
      explanation:
        "Members must act with integrity in dealings with HMRC: be truthful, not mislead (including by omission), and correct any material errors or misunderstandings on a timely basis. Disclosure of client information to HMRC generally requires client authority unless legally compelled.",
      relatedConcepts: ["Integrity", "Dealing with HMRC", "Client authority", "Disclosure"],
    },
    [
      ["Deal with HMRC honestly, not misleading them, while disclosing client information only with authority or where legally required", true, "Correct — integrity plus respect for client authority/legal compulsion governs disclosure."],
      ["Provide HMRC with everything they request immediately, regardless of authority", false, "Client information generally requires authority unless legally compelled."],
      ["Refuse all contact with HMRC to protect client confidentiality", false, "Members must engage honestly with HMRC; obstruction breaches integrity."],
      ["Provide deliberately incomplete information to favour the client", false, "Misleading HMRC, including by omission, breaches the integrity standard."],
    ],
  ),
];

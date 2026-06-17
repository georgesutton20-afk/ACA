// FM (Financial Management) — Professional Level question bank.
// Scenario-based computations + interpretation across investment appraisal,
// cost of capital, financing, financial-risk hedging, valuations and working
// capital. Original questions (not copied from ICAEW past papers). All numeric
// answers double-checked arithmetically; discount/annuity factors are quoted in
// the stem where needed (FM is a closed-book exam).
import type { Question } from "@/types/domain";
import { mc, calc } from "@/data/question-helpers";

export const fmQuestions: Question[] = [
  // ── Investment appraisal — t-fm-inv ──────────────────────────────────────
  calc({
    id: "fm-w-inv-1",
    topicId: "t-fm-inv",
    difficulty: "medium",
    scenario:
      "Marlow Ltd is appraising a project. The initial outlay on 1 January 20X5 (T0) is £200,000. Net cash inflows are £80,000 at the end of each of the next four years. The cost of capital is 10%. Discount factors at 10%: T1 0.909, T2 0.826, T3 0.751, T4 0.683.",
    stem: "What is the net present value of the project, to the nearest £?",
    explanation:
      "Discount each annual inflow at 10% and subtract the T0 outlay. The four DFs sum to 3.169 (the 4-year annuity factor).",
    workedSolution:
      "Sum of DFs = 0.909 + 0.826 + 0.751 + 0.683 = 3.169\nPV of inflows = 80,000 × 3.169 = 253,520\nNPV = 253,520 − 200,000 = £53,520",
    relatedConcepts: ["Net present value", "Annuity factor", "Discounted cash flow"],
    numericAnswer: 53520,
    numericTolerance: 100,
    unit: "£",
  }),
  calc({
    id: "fm-w-inv-2",
    topicId: "t-fm-inv",
    difficulty: "hard",
    scenario:
      "A project has an initial outlay of £500,000 and generates equal net cash inflows at the end of each year for five years. At a discount rate of 8% (5-year annuity factor 3.993) the NPV is +£99,650.",
    stem: "What is the annual net cash inflow, to the nearest £?",
    explanation:
      "PV of inflows = outlay + NPV. The constant annual inflow = PV of inflows ÷ annuity factor.",
    workedSolution:
      "PV of inflows = 500,000 + 99,650 = 599,650\nAnnual inflow = 599,650 ÷ 3.993 = £150,175",
    relatedConcepts: ["Annuity", "NPV", "Discount factor"],
    numericAnswer: 150175,
    numericTolerance: 200,
    unit: "£",
  }),
  calc({
    id: "fm-w-inv-3",
    topicId: "t-fm-inv",
    difficulty: "hard",
    scenario:
      "Tern Ltd is evaluating a project. At a 10% discount rate the NPV is +£24,000; at a 15% discount rate the NPV is −£6,000.",
    stem: "Using linear interpolation, estimate the internal rate of return of the project (to one decimal place, in %).",
    explanation:
      "IRR ≈ L + [NPV_L ÷ (NPV_L − NPV_H)] × (H − L), where L and H are the lower and higher trial rates.",
    workedSolution:
      "IRR = 10 + [24,000 ÷ (24,000 − (−6,000))] × (15 − 10)\n= 10 + (24,000 ÷ 30,000) × 5\n= 10 + 0.8 × 5 = 14.0%",
    relatedConcepts: ["Internal rate of return", "Linear interpolation"],
    numericAnswer: 14.0,
    numericTolerance: 0.2,
    unit: "%",
  }),
  calc({
    id: "fm-w-inv-4",
    topicId: "t-fm-inv",
    difficulty: "medium",
    scenario:
      "Quill Ltd invests £600,000 in a project on 1 January 20X5. Net cash inflows are: Year 1 £150,000; Year 2 £200,000; Year 3 £250,000; Year 4 £300,000.",
    stem: "What is the payback period of the project, in years (to two decimal places)? Assume cash flows accrue evenly through each year.",
    explanation:
      "Accumulate inflows until the £600,000 outlay is recovered, then add the fraction of the final year required.",
    workedSolution:
      "Cumulative: Yr1 150,000; Yr2 350,000; Yr3 600,000.\nThe outlay is recovered exactly at the end of Year 3, so payback = 3.00 years.",
    relatedConcepts: ["Payback period", "Cumulative cash flow"],
    numericAnswer: 3.0,
    numericTolerance: 0.05,
    unit: "years",
  }),
  mc(
    {
      id: "fm-w-inv-5",
      topicId: "t-fm-inv",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Two mutually exclusive projects have positive NPVs. Project A has the higher NPV but a lower IRR; Project B has a lower NPV but a higher IRR. The company's objective is to maximise shareholder wealth and it can fund either project.",
      stem: "Which project should the company select, and why?",
      explanation:
        "NPV measures the absolute increase in shareholder wealth and is the theoretically superior criterion. Where NPV and IRR conflict for mutually exclusive projects, follow NPV. Project A maximises wealth.",
      relatedConcepts: ["NPV vs IRR conflict", "Mutually exclusive projects", "Shareholder wealth"],
    },
    [
      ["Project A — NPV measures the absolute increase in shareholder wealth", true, "Correct — for mutually exclusive projects NPV is the superior criterion."],
      ["Project B — a higher IRR always means a better project", false, "IRR is a relative measure and can mislead on scale; NPV should prevail."],
      ["Whichever has the shorter payback period", false, "Payback ignores the time value of money and total returns."],
      ["Neither — a conflict means both should be rejected", false, "Both have positive NPVs; the firm should accept the wealth-maximising one."],
    ],
  ),

  // ── Cost of capital — t-fm-cap ───────────────────────────────────────────
  calc({
    id: "fm-w-cap-1",
    topicId: "t-fm-cap",
    difficulty: "medium",
    scenario:
      "Heron plc has an equity beta of 1.3. The risk-free rate is 4% and the equity risk premium (market return minus risk-free rate) is 6%.",
    stem: "Using the CAPM, what is Heron's cost of equity (in %)?",
    explanation:
      "CAPM: Ke = Rf + β × (Rm − Rf).",
    workedSolution: "Ke = 4% + 1.3 × 6% = 4% + 7.8% = 11.8%",
    relatedConcepts: ["CAPM", "Cost of equity", "Equity beta"],
    numericAnswer: 11.8,
    numericTolerance: 0.1,
    unit: "%",
  }),
  calc({
    id: "fm-w-cap-2",
    topicId: "t-fm-cap",
    difficulty: "hard",
    scenario:
      "Falcon plc is financed by equity with a market value of £30m and debt with a market value of £10m. The cost of equity is 12% and the pre-tax cost of debt is 6%. Corporation tax is 25%.",
    stem: "What is Falcon's weighted average cost of capital (in %, to one decimal place)?",
    explanation:
      "WACC = (E/(E+D))×Ke + (D/(E+D))×Kd×(1−t). Use the after-tax cost of debt because interest is tax-deductible.",
    workedSolution:
      "Total = 40m. E weight = 30/40 = 0.75; D weight = 10/40 = 0.25.\nAfter-tax Kd = 6% × (1 − 0.25) = 4.5%\nWACC = 0.75 × 12% + 0.25 × 4.5% = 9.0% + 1.125% = 10.125% ≈ 10.1%",
    relatedConcepts: ["WACC", "After-tax cost of debt", "Capital weights"],
    numericAnswer: 10.1,
    numericTolerance: 0.15,
    unit: "%",
  }),
  calc({
    id: "fm-w-cap-3",
    topicId: "t-fm-cap",
    difficulty: "medium",
    scenario:
      "Osprey plc has just paid an ordinary dividend of 20p per share. Dividends are expected to grow at a constant 4% per year in perpetuity. The current ex-dividend share price is 312p.",
    stem: "Using the dividend growth model, what is Osprey's cost of equity (in %, to one decimal place)?",
    explanation:
      "Ke = D0(1+g)/P0 + g. Use next year's dividend, D1 = D0 × (1 + g).",
    workedSolution:
      "D1 = 20 × 1.04 = 20.8p\nKe = 20.8/312 + 0.04 = 0.0667 + 0.04 = 0.1067 ≈ 10.7%",
    relatedConcepts: ["Dividend growth model", "Cost of equity", "Gordon growth"],
    numericAnswer: 10.7,
    numericTolerance: 0.2,
    unit: "%",
  }),
  calc({
    id: "fm-w-cap-4",
    topicId: "t-fm-cap",
    difficulty: "hard",
    scenario:
      "Kite plc has irredeemable bonds with a coupon of 7% (paid annually on £100 nominal). The bonds currently trade at £112 ex-interest. Corporation tax is 25%.",
    stem: "What is the after-tax cost of these irredeemable bonds to the company (in %, to one decimal place)?",
    explanation:
      "For irredeemable debt, Kd (after tax) = annual interest × (1 − t) ÷ market price.",
    workedSolution:
      "After-tax interest = 7 × (1 − 0.25) = £5.25\nKd = 5.25 / 112 = 0.0469 ≈ 4.7%",
    relatedConcepts: ["Cost of debt", "Irredeemable bonds", "Tax shield"],
    numericAnswer: 4.7,
    numericTolerance: 0.15,
    unit: "%",
  }),
  mc(
    {
      id: "fm-w-cap-5",
      topicId: "t-fm-cap",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Merlin plc, an all-equity ungeared company, wishes to appraise a project in an industry in which it does not currently operate. A listed company in that industry has an equity (geared) beta of 1.5 and a debt-to-equity ratio of 1:2; assume debt is risk-free.",
      stem: "What is the correct first step to find a discount rate for Merlin's project?",
      explanation:
        "Use the proxy company's beta, but it reflects that company's gearing. Ungear (deleverage) the proxy equity beta to an asset beta, then regear it to Merlin's own (here all-equity) capital structure before applying CAPM.",
      relatedConcepts: ["Asset beta", "Ungearing and regearing beta", "Proxy company method"],
    },
    [
      ["Ungear the proxy's equity beta to an asset beta, then regear to Merlin's structure", true, "Correct — adjust for the difference in financial risk (gearing) between the proxy and Merlin."],
      ["Use the proxy's geared equity beta of 1.5 directly in CAPM", false, "That beta reflects the proxy's gearing, not Merlin's all-equity structure."],
      ["Use Merlin's own existing equity beta", false, "Merlin's own beta reflects its current activities, not the new industry's business risk."],
      ["Use the average of the two companies' betas", false, "Averaging unrelated betas has no theoretical basis."],
    ],
  ),

  // ── Financing options — t-fm-finance ─────────────────────────────────────
  calc({
    id: "fm-w-finance-1",
    topicId: "t-fm-finance",
    difficulty: "medium",
    scenario:
      "Robin plc has 8 million shares in issue trading at £5.00 each (cum-rights). It makes a 1-for-4 rights issue at £4.00 per share.",
    stem: "What is the theoretical ex-rights price (TERP) per share, to the nearest penny (in £)?",
    explanation:
      "TERP = (market value of existing shares + funds raised) ÷ total shares after the issue.",
    workedSolution:
      "For every 4 existing shares (4 × £5.00 = £20.00) the holder buys 1 new share at £4.00.\nValue of 5 shares = 20.00 + 4.00 = £24.00\nTERP = 24.00 / 5 = £4.80",
    relatedConcepts: ["Rights issue", "Theoretical ex-rights price"],
    numericAnswer: 4.8,
    numericTolerance: 0.02,
    unit: "£",
  }),
  calc({
    id: "fm-w-finance-2",
    topicId: "t-fm-finance",
    difficulty: "hard",
    scenario:
      "Following Robin plc's 1-for-4 rights issue at £4.00, the theoretical ex-rights price is £4.80 per share.",
    stem: "What is the theoretical value of one right (i.e. the value attaching to each new share), in £?",
    explanation:
      "The value of a right per new share = TERP − rights (subscription) price.",
    workedSolution: "Value of a right = 4.80 − 4.00 = £0.80 per new share",
    relatedConcepts: ["Value of a right", "Rights issue", "TERP"],
    numericAnswer: 0.8,
    numericTolerance: 0.02,
    unit: "£",
  }),
  calc({
    id: "fm-w-finance-3",
    topicId: "t-fm-finance",
    difficulty: "medium",
    scenario:
      "Wren plc has long-term debt of £12m and equity (by market value) of £30m.",
    stem: "What is Wren's gearing ratio measured as debt ÷ (debt + equity), expressed as a percentage to one decimal place?",
    explanation:
      "Gearing on a debt-to-capital-employed basis = D ÷ (D + E).",
    workedSolution: "Gearing = 12 / (12 + 30) = 12 / 42 = 0.2857 ≈ 28.6%",
    relatedConcepts: ["Gearing", "Capital structure", "Financial risk"],
    numericAnswer: 28.6,
    numericTolerance: 0.2,
    unit: "%",
  }),
  mc(
    {
      id: "fm-w-finance-4",
      topicId: "t-fm-finance",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Lark Ltd is a profitable, established company with stable cash flows and significant unused debt capacity. It needs £5m to fund an asset-backed expansion and wants to minimise its WACC and avoid diluting existing shareholders' control.",
      stem: "Which financing option best fits Lark's circumstances?",
      explanation:
        "Debt is cheaper than equity (lower required return plus tax relief on interest), does not dilute control, and stable cash flows can service fixed interest. With spare debt capacity, debt finance is appropriate.",
      relatedConcepts: ["Debt vs equity", "Capital structure", "Tax shield"],
    },
    [
      ["Debt finance, as interest is tax-deductible, control is not diluted and cash flows can cover interest", true, "Correct — debt suits stable, asset-backed firms with spare capacity and lowers WACC."],
      ["A rights issue, because equity never has to be repaid", false, "Equity is more expensive and would dilute control unnecessarily given spare debt capacity."],
      ["Retained earnings only, regardless of the amount needed", false, "There is no indication £5m of retained cash is available; financing source still matters."],
      ["Convertible debt, to force eventual dilution", false, "Forcing dilution conflicts with the stated objective of preserving control."],
    ],
  ),
  mc(
    {
      id: "fm-w-finance-5",
      topicId: "t-fm-finance",
      type: "mcq",
      difficulty: "hard",
      scenario:
        "A finance director argues that, ignoring taxes and distress costs, a company can reduce its WACC indefinitely by continually increasing gearing because debt is cheaper than equity.",
      stem: "How does Modigliani–Miller (no tax) theory respond to this argument?",
      explanation:
        "Under MM without tax, as gearing rises the cost of equity rises in exact proportion to the increased financial risk, so WACC stays constant and is independent of capital structure.",
      relatedConcepts: ["Modigliani–Miller", "Capital structure irrelevance", "Financial risk"],
    },
    [
      ["The cost of equity rises with gearing, leaving WACC unchanged", true, "Correct — MM (no tax): the cheaper debt is exactly offset by a higher cost of equity."],
      ["WACC does fall indefinitely, so the director is correct", false, "Ignoring tax, MM shows WACC is invariant to gearing."],
      ["The cost of debt falls to zero at high gearing", false, "Cost of debt does not fall to zero; lenders demand more as risk rises."],
      ["Gearing has no effect on either the cost of debt or equity", false, "The cost of equity specifically increases with financial risk."],
    ],
  ),

  // ── Managing financial risk (hedging) — t-fm-risk ────────────────────────
  calc({
    id: "fm-w-risk-1",
    topicId: "t-fm-risk",
    difficulty: "medium",
    scenario:
      "A UK company will receive $660,000 from a US customer in three months. Spot is $1.3000/£. The bank quotes a three-month forward rate of $1.3200/£.",
    stem: "If the company takes out a forward contract, how many £ will it receive in three months, to the nearest £?",
    explanation:
      "Convert the dollar receipt at the agreed forward rate: £ = $ ÷ forward rate.",
    workedSolution: "£ received = 660,000 / 1.3200 = £500,000",
    relatedConcepts: ["Forward contract", "Currency hedging", "Transaction risk"],
    numericAnswer: 500000,
    numericTolerance: 200,
    unit: "£",
  }),
  calc({
    id: "fm-w-risk-2",
    topicId: "t-fm-risk",
    difficulty: "hard",
    scenario:
      "A UK company must pay $408,000 to a US supplier in three months. Spot is $1.2750/£. It can borrow/deposit dollars at 4% per year and sterling at 6% per year. It decides to use a money-market hedge: buy dollars now, deposit them so they grow to $408,000 in three months.",
    stem: "What is the £ cost today of setting up the money-market hedge, to the nearest £?",
    explanation:
      "Deposit a $ amount now that grows to the payable in 3 months at 4% p.a. (1% per quarter); buy those dollars at spot today, funded by sterling.",
    workedSolution:
      "$ to deposit now = 408,000 / (1 + 0.04 × 3/12) = 408,000 / 1.01 = $403,960.40\n£ cost at spot = 403,960.40 / 1.2750 = £316,832",
    relatedConcepts: ["Money-market hedge", "Currency risk", "Interest rate parity"],
    numericAnswer: 316832,
    numericTolerance: 300,
    unit: "£",
  }),
  calc({
    id: "fm-w-risk-3",
    topicId: "t-fm-risk",
    difficulty: "medium",
    scenario:
      "A treasurer buys an over-the-counter currency option to sell €5,000,000 and receive sterling at a strike of €1.1500/£, paying a premium of £20,000. At expiry the spot rate is €1.2500/£.",
    stem: "Ignoring the premium, what would the company receive in £ if it exercises the option (to the nearest £)? Then state whether it should exercise.",
    explanation:
      "Exercising converts at the strike: £ = € ÷ strike. Compare with the market alternative (€ ÷ spot). Exercise only if the option gives more sterling.",
    workedSolution:
      "Exercise: 5,000,000 / 1.1500 = £4,347,826\nMarket at spot: 5,000,000 / 1.2500 = £4,000,000\nExercising gives more (£4,347,826 > £4,000,000), so the option should be exercised. Answer (exercise proceeds) = £4,347,826.",
    relatedConcepts: ["Currency option", "Exercise decision", "Premium"],
    numericAnswer: 4347826,
    numericTolerance: 2000,
    unit: "£",
  }),
  mc(
    {
      id: "fm-w-risk-4",
      topicId: "t-fm-risk",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Company P has floating-rate debt but wants the certainty of fixed payments; Company Q has fixed-rate debt but expects rates to fall and would prefer floating. Both have similar borrowing needs and good credit standing.",
      stem: "Which instrument best allows P and Q to obtain the interest profile each prefers?",
      explanation:
        "An interest-rate swap lets P and Q exchange their interest obligations (fixed for floating and vice versa), achieving each party's preferred profile, potentially with a net cost saving from comparative advantage.",
      relatedConcepts: ["Interest-rate swap", "Comparative advantage", "Hedging interest risk"],
    },
    [
      ["An interest-rate swap exchanging fixed-for-floating obligations", true, "Correct — a swap converts P to fixed and Q to floating, each as preferred."],
      ["Both should buy currency forwards", false, "The exposure is interest-rate, not currency, risk."],
      ["Both should leave the positions unhedged", false, "That ignores each company's stated preference to change its interest profile."],
      ["Each should buy a put option on its own shares", false, "Equity options do not address interest-rate exposure."],
    ],
  ),
  calc({
    id: "fm-w-risk-5",
    topicId: "t-fm-risk",
    difficulty: "hard",
    scenario:
      "It is now June. A company will need to borrow £6,000,000 for three months starting in September. It hedges with interest-rate futures. In June it sells futures at 95.00 (implied rate 5.00%). In September it closes out by buying futures at 94.40 (implied rate 5.60%). Each tick is 0.01% and one contract is £500,000 for three months; the tick value is £12.50.",
    stem: "What is the gain on the futures position used to offset higher borrowing costs, to the nearest £? (6,000,000 / 500,000 = 12 contracts.)",
    explanation:
      "Rates rose, so the borrower's sold futures fall in price — a gain. Gain = ticks moved × tick value × number of contracts.",
    workedSolution:
      "Price move = 95.00 − 94.40 = 0.60 = 60 ticks (favourable to a seller).\nContracts = 6,000,000 / 500,000 = 12\nGain = 60 ticks × £12.50 × 12 = £9,000",
    relatedConcepts: ["Interest-rate futures", "Hedging", "Tick value"],
    numericAnswer: 9000,
    numericTolerance: 50,
    unit: "£",
  }),

  // ── Business valuations — t-fm-val ───────────────────────────────────────
  calc({
    id: "fm-w-val-1",
    topicId: "t-fm-val",
    difficulty: "medium",
    scenario:
      "Sparrow Ltd has after-tax earnings of £2,400,000. A comparable listed company trades on a P/E ratio of 11. Because Sparrow is unlisted, an analyst applies a 30% discount to that P/E multiple.",
    stem: "What is the estimated equity value of Sparrow using the earnings (P/E) basis, to the nearest £?",
    explanation:
      "Apply the adjusted P/E to earnings. Unlisted companies are typically valued at a discount to listed multiples for lower marketability.",
    workedSolution:
      "Adjusted P/E = 11 × (1 − 0.30) = 7.7\nValue = 7.7 × 2,400,000 = £18,480,000",
    relatedConcepts: ["P/E valuation", "Earnings multiple", "Unlisted discount"],
    numericAnswer: 18480000,
    numericTolerance: 5000,
    unit: "£",
  }),
  calc({
    id: "fm-w-val-2",
    topicId: "t-fm-val",
    difficulty: "hard",
    scenario:
      "Robin Ltd has just paid a dividend of £600,000. Dividends are expected to grow at 3% per year in perpetuity. Shareholders require a return of 9%.",
    stem: "Using the dividend valuation model, what is the equity value of Robin Ltd, to the nearest £?",
    explanation:
      "Ve = D0(1+g) ÷ (Ke − g), discounting the growing perpetuity of dividends.",
    workedSolution:
      "D1 = 600,000 × 1.03 = 618,000\nVe = 618,000 / (0.09 − 0.03) = 618,000 / 0.06 = £10,300,000",
    relatedConcepts: ["Dividend valuation model", "Growing perpetuity", "Cost of equity"],
    numericAnswer: 10300000,
    numericTolerance: 5000,
    unit: "£",
  }),
  calc({
    id: "fm-w-val-3",
    topicId: "t-fm-val",
    difficulty: "hard",
    scenario:
      "Finch Ltd is to be valued on a free-cash-flow basis. Annual free cash flow to the firm is £1,500,000, expected to continue in perpetuity with no growth. The WACC is 10%. The company has debt of £4,000,000.",
    stem: "What is the value of equity, to the nearest £?",
    explanation:
      "Enterprise value = FCF ÷ WACC (no-growth perpetuity). Equity value = enterprise value − debt.",
    workedSolution:
      "Enterprise value = 1,500,000 / 0.10 = £15,000,000\nEquity value = 15,000,000 − 4,000,000 = £11,000,000",
    relatedConcepts: ["Free cash flow valuation", "Enterprise value", "Net debt"],
    numericAnswer: 11000000,
    numericTolerance: 5000,
    unit: "£",
  }),
  calc({
    id: "fm-w-val-4",
    topicId: "t-fm-val",
    difficulty: "medium",
    scenario:
      "Dove Ltd's statement of financial position shows net assets at carrying amount of £8,000,000. On revaluation, property is worth £1,500,000 more than its carrying amount, and obsolete inventory carried at £400,000 is now worthless.",
    stem: "What is the net asset (net realisable) value of Dove's equity, to the nearest £?",
    explanation:
      "Adjust carrying net assets for the revaluation surplus and write-downs to reach a net realisable valuation.",
    workedSolution:
      "NAV = 8,000,000 + 1,500,000 − 400,000 = £9,100,000",
    relatedConcepts: ["Net asset valuation", "Revaluation", "Net realisable value"],
    numericAnswer: 9100000,
    numericTolerance: 5000,
    unit: "£",
  }),
  mc(
    {
      id: "fm-w-val-5",
      topicId: "t-fm-val",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "An investor is valuing a small minority shareholding (2%) in an unlisted, fast-growing technology company that holds few tangible assets but generates strong, growing cash flows. The investor has no influence over dividend policy.",
      stem: "Which valuation basis is most appropriate for this minority stake?",
      explanation:
        "A minority holder cannot influence dividends or liquidate assets, so the dividend valuation model (dividend-based) best reflects the cash flows actually receivable. Asset-based methods understate value for an asset-light growth firm.",
      relatedConcepts: ["Dividend valuation model", "Minority interest", "Choice of valuation method"],
    },
    [
      ["The dividend valuation model, reflecting the dividends a minority holder can expect", true, "Correct — a minority cannot control assets or earnings, so dividend flows are the relevant basis."],
      ["The net asset (break-up) basis", false, "An asset-light growth firm's value lies in cash flows, not tangible assets, and a minority cannot force a break-up."],
      ["The full free-cash-flow-to-firm value of the whole company", false, "That values control of all the firm's cash flows, inappropriate for a 2% stake."],
      ["Par value of the shares", false, "Par (nominal) value bears no relation to economic worth."],
    ],
  ),

  // ── Working capital management — t-fm-wc ─────────────────────────────────
  calc({
    id: "fm-w-wc-1",
    topicId: "t-fm-wc",
    difficulty: "medium",
    scenario:
      "Swift Ltd uses 40,000 units of a component per year. Each order costs £80 to place, and holding cost is £4 per unit per year.",
    stem: "What is the economic order quantity (EOQ), in units?",
    explanation:
      "EOQ = √(2 × D × Co ÷ Ch), where D is annual demand, Co the order cost and Ch the holding cost per unit per year.",
    workedSolution:
      "EOQ = √(2 × 40,000 × 80 / 4) = √(6,400,000 / 4) = √1,600,000 = 1,265 units (√1,600,000 ≈ 1,264.9)",
    relatedConcepts: ["Economic order quantity", "Inventory management"],
    numericAnswer: 1265,
    numericTolerance: 5,
    unit: "units",
  }),
  calc({
    id: "fm-w-wc-2",
    topicId: "t-fm-wc",
    difficulty: "hard",
    scenario:
      "A supplier offers Crane Ltd terms of '2/10, net 40' (a 2% discount for payment within 10 days, otherwise the full amount is due in 40 days). Assume a 365-day year.",
    stem: "What is the approximate effective annual cost of forgoing the early-settlement discount (in %, to one decimal place)? Use (1 + d/(1−d))^(365/(N−D)) − 1.",
    explanation:
      "Forgoing the discount means paying 100 instead of 98 to delay payment by (40 − 10) = 30 days. Compound the period cost over the year.",
    workedSolution:
      "Period cost = 2/98 = 0.020408 over 30 days.\nAnnual cost = (1 + 0.020408)^(365/30) − 1 = 1.020408^12.1667 − 1\n= e^(12.1667 × ln 1.020408) − 1 = e^(12.1667 × 0.020203) − 1 = e^0.24580 − 1 = 1.2787 − 1 ≈ 27.9%",
    relatedConcepts: ["Early settlement discount", "Cost of trade credit", "Payables management"],
    numericAnswer: 27.9,
    numericTolerance: 0.6,
    unit: "%",
  }),
  calc({
    id: "fm-w-wc-3",
    topicId: "t-fm-wc",
    difficulty: "medium",
    scenario:
      "Plover Ltd has annual credit sales of £7,300,000 and trade receivables of £900,000. Assume a 365-day year.",
    stem: "What is the receivables collection period (debtor days), to the nearest day?",
    explanation:
      "Collection period = (trade receivables ÷ credit sales) × 365.",
    workedSolution:
      "Days = 900,000 / 7,300,000 × 365 = 0.12329 × 365 = 45.0 days",
    relatedConcepts: ["Receivables days", "Working capital cycle", "Credit control"],
    numericAnswer: 45,
    numericTolerance: 1,
    unit: "days",
  }),
  calc({
    id: "fm-w-wc-4",
    topicId: "t-fm-wc",
    difficulty: "hard",
    scenario:
      "Teal Ltd has the following figures: inventory holding period 60 days, receivables collection period 45 days, and payables payment period 50 days.",
    stem: "What is the length of the cash operating cycle, in days?",
    explanation:
      "Cash operating cycle = inventory days + receivables days − payables days.",
    workedSolution: "Cycle = 60 + 45 − 50 = 55 days",
    relatedConcepts: ["Cash operating cycle", "Working capital cycle"],
    numericAnswer: 55,
    numericTolerance: 1,
    unit: "days",
  }),
  mc(
    {
      id: "fm-w-wc-5",
      topicId: "t-fm-wc",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Grouse Ltd is growing sales rapidly but is repeatedly running short of cash, despite reporting healthy accounting profits. Its inventory and receivables days have both lengthened, while it pays suppliers promptly.",
      stem: "What does this pattern most likely indicate, and what is the appropriate concern?",
      explanation:
        "Rapid sales growth with lengthening inventory and receivables and prompt payables increases the working-capital investment faster than cash generation — overtrading (under-capitalisation), which can cause a liquidity crisis even when profitable.",
      relatedConcepts: ["Overtrading", "Working capital management", "Liquidity"],
    },
    [
      ["Overtrading — working-capital needs are outgrowing available cash", true, "Correct — classic overtrading: profitable growth but a worsening cash position."],
      ["Excessive liquidity that should be returned to shareholders", false, "The company is short of cash, the opposite of excess liquidity."],
      ["That profits must be overstated through fraud", false, "The symptoms point to working-capital strain, not necessarily misstatement."],
      ["That it should pay suppliers even faster", false, "Paying suppliers faster worsens the cash shortage; it should extend payables where possible."],
    ],
  ),
];

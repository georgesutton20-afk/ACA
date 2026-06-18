// SBM (Strategic Business Management) — Advanced Level question bank.
// Long-form-equivalent: integrated scenarios requiring computation (valuation,
// financing, hedging) plus judgement, recommendation and ethics. Marked on
// technical content + professional skills. Original questions (not copied from
// ICAEW past papers).
import type { Question } from "@/types/domain";
import { mc, calc } from "@/data/question-helpers";

export const sbmQuestions: Question[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // Financial strategy — t-sbm-fin
  // ──────────────────────────────────────────────────────────────────────────
  calc({
    id: "sb-fin-1",
    topicId: "t-sbm-fin",
    difficulty: "hard",
    scenario:
      "Halewood plc has 40 million shares in issue and is considering a 1-for-4 rights issue at £3.00 to fund expansion. The cum-rights market price is £4.50 per share.",
    stem: "Calculate the theoretical ex-rights price (TERP) per share, to the nearest penny (£).",
    explanation:
      "TERP weights the existing shares at cum-rights price with the new shares at the rights price, divided by the enlarged share count.",
    workedSolution:
      "Existing: 4 shares × £4.50 = £18.00\nNew: 1 share × £3.00 = £3.00\nTotal = £21.00 over 5 shares\nTERP = 21.00 / 5 = £4.20",
    relatedConcepts: ["Rights issue", "TERP", "Equity financing"],
    numericAnswer: 4.2,
    numericTolerance: 0.02,
    unit: "£",
  }),
  calc({
    id: "sb-fin-2",
    topicId: "t-sbm-fin",
    difficulty: "hard",
    scenario:
      "Following the 1-for-4 rights issue (TERP £4.20, rights price £3.00), an investor holds 4,000 shares before the issue and decides to sell their rights entitlement in the market rather than take it up.",
    stem: "What is the total cash the investor should receive for selling their rights nil-paid, to the nearest £?",
    explanation:
      "The value of one right (nil-paid) is TERP minus the rights subscription price. The investor is entitled to 1 new share per 4 held.",
    workedSolution:
      "Value per right = TERP − rights price = £4.20 − £3.00 = £1.20\nRights entitlement = 4,000 / 4 = 1,000 shares\nProceeds = 1,000 × £1.20 = £1,200",
    relatedConcepts: ["Value of a right", "Nil-paid rights", "Shareholder wealth"],
    numericAnswer: 1200,
    numericTolerance: 5,
    unit: "£",
  }),
  mc(
    {
      id: "sb-fin-3",
      topicId: "t-sbm-fin",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Brackley Ltd, a mature, cash-generative company with stable earnings and few new investment opportunities, has historically paid out 30% of earnings as dividends. It has built up a large cash balance and gearing is low. The directors are debating whether to raise the payout ratio sharply or launch a share buy-back.",
      stem: "Applying signalling and residual dividend theory, which course of action is most defensible and why?",
      explanation:
        "With few positive-NPV projects, retaining cash destroys value (it earns less than shareholders' required return). Returning surplus cash via a higher payout or buy-back is consistent with the residual theory. A buy-back offers flexibility (it does not set a recurring expectation) and can be tax-efficient, but a sustained dividend rise sends a credible signal of confidence. Either return is preferable to hoarding cash.",
      relatedConcepts: ["Residual dividend theory", "Signalling", "Share buy-backs", "Agency cost of free cash flow"],
    },
    [
      ["Return the surplus cash — a buy-back for flexibility or a higher dividend as a confidence signal — since retaining it earns below shareholders' required return", true, "Correct — with no positive-NPV uses, returning cash maximises shareholder value; the choice between buy-back and dividend turns on flexibility vs signalling."],
      ["Retain all cash indefinitely to maximise financial flexibility", false, "Hoarding cash with no profitable use destroys value and raises agency concerns over free cash flow."],
      ["Cut the dividend to zero to preserve cash for unspecified future deals", false, "Cutting the dividend sends a strongly negative signal and is unjustified given strong, stable cash generation."],
      ["Use the cash to repay debt despite already-low gearing", false, "With low gearing the marginal benefit is small and forgoes the tax shield; it does not address the surplus-cash problem."],
    ],
  ),
  calc({
    id: "sb-fin-4",
    topicId: "t-sbm-fin",
    difficulty: "hard",
    scenario:
      "Corley plc is financially distressed. A reconstruction is proposed. The estimated realisable value of the business as a going concern is £18m. Claims rank: bank (secured, fixed charge) £6m; debenture holders (floating charge) £5m; unsecured trade creditors £4m; preference shares £3m; ordinary shareholders. In a forced liquidation, assets would realise only £11m.",
    stem: "Under the going-concern reconstruction value of £18m, how much (£m) is available to ordinary shareholders after all prior-ranking claims are met in full?",
    explanation:
      "Prior claims rank ahead of ordinary shareholders: secured bank, floating-charge debentures, unsecured creditors, then preference shares. Ordinary shareholders receive the residual.",
    workedSolution:
      "Prior claims = 6 + 5 + 4 + 3 = £18m\nResidual to ordinary shareholders = 18 − 18 = £0m\n(The reconstruction must offer ordinary holders new equity in the rescued entity rather than a cash distribution, since the residual is nil.)",
    relatedConcepts: ["Capital reconstruction", "Order of priority", "Going concern vs liquidation"],
    numericAnswer: 0,
    numericTolerance: 0.01,
    unit: "£m",
  }),
  mc(
    {
      id: "sb-fin-5",
      topicId: "t-sbm-fin",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Referring to Corley plc: going-concern value is £18m versus £11m in liquidation, and prior claims total £18m. A reconstruction asks the bank to convert £2m of its debt to equity, debenture holders to accept a 3-year payment deferral, and ordinary shareholders to inject £4m of new cash for new shares.",
      stem: "On what primary basis should each class assess whether to approve the reconstruction?",
      explanation:
        "A reconstruction is rational for a stakeholder only if its expected outcome under the scheme is at least as good as its outcome on liquidation. Liquidation realises only £11m, so secured/floating creditors recover less and unsecured creditors and shareholders receive nil. Each class compares its position under the scheme with its (poor) liquidation alternative; the £7m going-concern premium provides the surplus to make most classes better off.",
      relatedConcepts: ["Reconstruction appraisal", "Liquidation benchmark", "Stakeholder analysis"],
    },
    [
      ["Each class compares its expected return under the scheme with what it would receive on liquidation (£11m), approving only if no worse off", true, "Correct — the liquidation outcome is the relevant benchmark; the going-concern premium must be shared to secure approval."],
      ["All classes should approve automatically because going-concern value exceeds liquidation value", false, "Aggregate value rising does not guarantee every class is individually better off; each must check its own position."],
      ["Only the ordinary shareholders' vote matters since they own the company", false, "Creditors rank ahead and their consent is required; their liquidation alternative drives their decision."],
      ["The decision should rest solely on accounting book values of the claims", false, "Book values are irrelevant; realisable/recoverable amounts under each alternative drive the appraisal."],
    ],
  ),
  calc({
    id: "sb-fin-6",
    topicId: "t-sbm-fin",
    difficulty: "hard",
    scenario:
      "Dunmore plc currently has £40m equity (cost of equity 12%) and £20m debt (pre-tax cost 6%). Corporation tax is 25%. It plans to restructure to £30m equity and £30m debt; under M&M with taxes the cost of equity will rise to reflect the higher gearing. After the change, the cost of equity is estimated at 14% and the pre-tax cost of debt is unchanged at 6%.",
    stem: "Calculate the post-restructuring weighted average cost of capital (WACC), to one decimal place (%).",
    explanation:
      "WACC = (E/V)·Ke + (D/V)·Kd·(1−t), using post-tax cost of debt and the new market-value weights.",
    workedSolution:
      "Weights: E = 30/60 = 0.5; D = 30/60 = 0.5\nPost-tax Kd = 6% × (1 − 0.25) = 4.5%\nWACC = 0.5 × 14% + 0.5 × 4.5% = 7.0% + 2.25% = 9.25% ≈ 9.3%",
    relatedConcepts: ["WACC", "Capital structure", "Modigliani–Miller with tax", "Financial gearing"],
    numericAnswer: 9.3,
    numericTolerance: 0.15,
    unit: "%",
  }),

  // ──────────────────────────────────────────────────────────────────────────
  // Business strategy — t-sbm-strat
  // ──────────────────────────────────────────────────────────────────────────
  mc(
    {
      id: "sb-strat-1",
      topicId: "t-sbm-strat",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Ferndale Ltd is a UK premium furniture maker. New low-cost imports have entered the market, a key timber supplier has consolidated, switching costs for retail customers are low, and entry barriers are modest because design is easy to imitate. Ferndale's margins are being squeezed from several directions.",
      stem: "Using Porter's five forces, which response best matches the structural problem Ferndale faces?",
      explanation:
        "Multiple forces are adverse: rivalry (cheap imports), supplier power (consolidation), buyer power (low switching costs) and threat of entry (low barriers). Competing head-on on price against low-cost imports plays to rivals' strengths. A focused differentiation strategy — building a defensible niche through brand, craftsmanship and customer lock-in — raises switching costs and reduces exposure to commoditised competition, addressing buyer power and rivalry simultaneously.",
      relatedConcepts: ["Porter's five forces", "Generic strategies", "Differentiation", "Competitive positioning"],
    },
    [
      ["Pursue focused differentiation — strengthen brand, design IP and after-sales service to raise switching costs and escape commodity price competition", true, "Correct — differentiation tackles buyer power and rivalry without competing on the imports' cost advantage."],
      ["Cut prices to match the imports and compete on cost", false, "A premium maker lacks the cost base to win a price war against low-cost importers; this erodes margin further."],
      ["Acquire the consolidated timber supplier regardless of price to remove supplier power", false, "Vertical integration may be costly and unfocused; supplier power is only one of several adverse forces."],
      ["Exit the market immediately", false, "Premature — a defensible differentiated niche may remain viable; exit forgoes the brand's residual value."],
    ],
  ),
  mc(
    {
      id: "sb-strat-2",
      topicId: "t-sbm-strat",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Glenfield plc, a diversified group, is reviewing its portfolio using the BCG matrix. Division A: high market share in a mature, low-growth market, throwing off strong cash. Division B: low share in a fast-growing market, consuming cash. Division C: high share in a high-growth market. Division D: low share in a low-growth, declining market.",
      stem: "Which capital-allocation approach is most consistent with a balanced BCG portfolio strategy?",
      explanation:
        "A is a cash cow, B a question mark, C a star, D a dog. The classic balanced approach uses the cash cow's surplus to fund the star (to defend its leading position as the market matures) and selectively the question mark (only those that can realistically become stars), while divesting or harvesting the dog.",
      relatedConcepts: ["BCG matrix", "Portfolio strategy", "Cash cow / star / question mark / dog", "Resource allocation"],
    },
    [
      ["Use A's cash to fund C and selectively support B, while harvesting or divesting D", true, "Correct — the cash cow funds the star and promising question marks; the dog is harvested or divested."],
      ["Invest most heavily in D to revive its declining market", false, "A dog in a declining market rarely justifies major investment; harvest or divest instead."],
      ["Starve C of investment to maximise short-term group cash", false, "Underinvesting in a star risks losing leadership as growth continues; it sacrifices the future cash cow."],
      ["Distribute all of A's cash as dividends and let B and C self-fund", false, "Stars and question marks typically cannot self-fund during high growth; this forfeits strategic positions."],
    ],
  ),
  mc(
    {
      id: "sb-strat-3",
      topicId: "t-sbm-strat",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Hartwell Ltd, a successful UK software firm, is choosing how to enter the German market. Options: (i) build a wholly-owned subsidiary from scratch; (ii) acquire an established German competitor; (iii) form a joint venture with a local distributor. Hartwell has strong technology but limited local market knowledge, regulatory familiarity and customer relationships, and wants relatively rapid entry while limiting capital at risk.",
      stem: "Which entry method best fits Hartwell's strategic position, and on what basis should it be evaluated?",
      explanation:
        "Hartwell's gap is local knowledge, relationships and regulatory familiarity — exactly what a local partner supplies. A joint venture provides rapid access to local capability while sharing capital and risk; the trade-off is shared control and potential partner conflict. Organic build is slow and risky given the knowledge gap; full acquisition is faster but capital-intensive and carries integration/cultural risk. Suitability (fit to the gap), feasibility (capital/skills) and acceptability (risk/return to stakeholders) frame the choice.",
      relatedConcepts: ["Market entry strategy", "Joint ventures", "Suitability/feasibility/acceptability", "Organic vs acquisitive growth"],
    },
    [
      ["A joint venture with the local distributor — it supplies the missing local knowledge and relationships while sharing capital and risk; evaluate on suitability, feasibility and acceptability", true, "Correct — the JV directly fills Hartwell's capability gap and limits capital at risk, with shared control as the trade-off."],
      ["Build a wholly-owned subsidiary from scratch to retain full control", false, "Organic build is slow and exposes Hartwell precisely where it is weakest (local knowledge and regulation)."],
      ["Acquire the competitor outright, since acquisitions always create synergies", false, "Acquisitions are capital-intensive and frequently fail to deliver synergies; 'always' is unjustified."],
      ["Delay entry indefinitely until Hartwell builds local expertise internally", false, "Indefinite delay forgoes first-mover advantage; partnering is a faster, lower-risk route to the same expertise."],
    ],
  ),
  mc(
    {
      id: "sb-strat-4",
      topicId: "t-sbm-strat",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Inglewood plc is assessing a major strategic option: launching an entirely new product line requiring £30m of capital. The board applies Johnson, Scholes & Whittington's suitability–acceptability–feasibility (SAF) framework.",
      stem: "Which statement correctly maps a test to the SAF criterion it addresses?",
      explanation:
        "Suitability = does the option fit the strategic position (environment and capabilities)? Acceptability = expected return, risk and stakeholder reactions. Feasibility = whether the firm has the resources (finance, people, capacity) to implement it. NPV/return and risk and stakeholder reaction are acceptability; resource availability is feasibility; fit to the environment/capabilities is suitability.",
      relatedConcepts: ["SAF framework", "Strategic evaluation", "Stakeholder analysis"],
    },
    [
      ["Whether the projected return and risk are acceptable to shareholders is an 'acceptability' test", true, "Correct — return, risk and stakeholder reactions fall under acceptability."],
      ["Whether the firm can fund and resource the £30m launch is a 'suitability' test", false, "Resource availability and funding are feasibility, not suitability."],
      ["Whether the option fits the competitive environment is a 'feasibility' test", false, "Fit to the environment and capabilities is suitability, not feasibility."],
      ["Calculating the NPV of the launch is a 'feasibility' test", false, "NPV measures return and therefore relates to acceptability."],
    ],
  ),
  calc({
    id: "sb-strat-5",
    topicId: "t-sbm-strat",
    difficulty: "hard",
    scenario:
      "Kelmscott plc must choose between two mutually exclusive strategies for the next year under three economic states. Payoffs (£m profit): Strategy X — boom 50, stable 20, recession −10. Strategy Y — boom 30, stable 22, recession 8. Management assigns probabilities: boom 0.3, stable 0.5, recession 0.2.",
    stem: "Calculate the expected monetary value (EMV) of Strategy X, in £m.",
    explanation:
      "EMV weights each payoff by its probability and sums them.",
    workedSolution:
      "EMV(X) = 0.3×50 + 0.5×20 + 0.2×(−10)\n= 15 + 10 − 2 = £23m\n(EMV(Y) = 0.3×30 + 0.5×22 + 0.2×8 = 9 + 11 + 1.6 = £21.6m. X has the higher EMV but greater downside risk — a risk-averse board may still prefer Y.)",
    relatedConcepts: ["Expected value", "Decision-making under uncertainty", "Risk attitude"],
    numericAnswer: 23,
    numericTolerance: 0.1,
    unit: "£m",
  }),
  mc(
    {
      id: "sb-strat-6",
      topicId: "t-sbm-strat",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Langton Ltd is conducting a strategic analysis and has gathered: a PESTEL scan of the macro-environment, a value chain analysis of its operations, and a resource audit assessing whether its capabilities are valuable, rare, inimitable and organised (VRIO).",
      stem: "Which combination correctly classifies these tools as internal or external analysis?",
      explanation:
        "PESTEL examines the external macro-environment. The value chain and VRIO/resource-based view examine internal resources and capabilities to identify sources of competitive advantage.",
      relatedConcepts: ["PESTEL", "Value chain", "VRIO / resource-based view", "Internal vs external analysis"],
    },
    [
      ["PESTEL is external; value chain and VRIO are internal", true, "Correct — PESTEL scans the macro-environment; value chain and VRIO assess internal capability."],
      ["All three are external analyses", false, "Value chain and VRIO are internal (resource-based) analyses."],
      ["PESTEL and VRIO are internal; only the value chain is external", false, "PESTEL is external; VRIO is internal — both are mis-classified here."],
      ["All three are internal analyses", false, "PESTEL is an external macro-environmental scan."],
    ],
  ),

  // ──────────────────────────────────────────────────────────────────────────
  // Valuations & M&A — t-sbm-val
  // ──────────────────────────────────────────────────────────────────────────
  calc({
    id: "sb-val-1",
    topicId: "t-sbm-val",
    difficulty: "hard",
    scenario:
      "Maybury plc is appraising the acquisition of Target Ltd, an unlisted company. Target's most recent maintainable post-tax earnings are £4.2m. A comparable listed peer trades on a P/E of 14, but a 25% discount is applied to reflect Target's unlisted status, smaller size and lower marketability.",
    stem: "Using the P/E (earnings multiple) method, estimate the equity value of Target Ltd, in £m.",
    explanation:
      "Apply the comparable P/E, adjusted downward for the unlisted-company discount, to maintainable earnings.",
    workedSolution:
      "Adjusted P/E = 14 × (1 − 0.25) = 10.5\nEquity value = 10.5 × £4.2m = £44.1m",
    relatedConcepts: ["P/E valuation", "Earnings multiples", "Unlisted-company discount", "Marketability"],
    numericAnswer: 44.1,
    numericTolerance: 0.2,
    unit: "£m",
  }),
  calc({
    id: "sb-val-2",
    topicId: "t-sbm-val",
    difficulty: "hard",
    scenario:
      "Continuing the Target Ltd appraisal, Maybury also values it on a free-cash-flow basis. Target's free cash flow to the firm next year is forecast at £3.6m, growing at 3% per annum in perpetuity. Target's WACC is 9%. Target has debt of £8m. (Use the growing-perpetuity / Gordon growth model on FCFF.)",
    stem: "Estimate Target's equity value using the FCF method, in £m.",
    explanation:
      "Enterprise value = FCFF₁ / (WACC − g). Equity value = enterprise value − net debt.",
    workedSolution:
      "Enterprise value = 3.6 / (0.09 − 0.03) = 3.6 / 0.06 = £60m\nEquity value = 60 − 8 = £52m",
    relatedConcepts: ["DCF / FCF valuation", "Gordon growth model", "Enterprise vs equity value", "WACC"],
    numericAnswer: 52,
    numericTolerance: 0.5,
    unit: "£m",
  }),
  mc(
    {
      id: "sb-val-3",
      topicId: "t-sbm-val",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Maybury's two valuations of Target Ltd diverge: the adjusted P/E method gives £44.1m and the FCF/DCF method gives £52m. The directors must form a single negotiating view of value and decide a maximum offer price. They also expect post-acquisition synergies worth £6m in present-value terms.",
      stem: "How should the directors synthesise the two valuations and set a maximum offer?",
      explanation:
        "The two methods give a value range (£44.1m–£52m) reflecting different assumptions: P/E captures market sentiment but relies on a comparable and a judgemental discount; DCF is forward-looking but sensitive to growth and WACC assumptions. The stand-alone value lies in the range; synergies (£6m) are part of the value created by the deal. The maximum justifiable offer is the stand-alone value plus synergies, but to preserve value for Maybury's own shareholders the directors should aim to pay below that ceiling — i.e. avoid handing the entire synergy to the vendor.",
      relatedConcepts: ["Valuation synthesis", "Value range", "Synergy", "Maximum offer price", "Shareholder value"],
    },
    [
      ["Treat the methods as a value range, anchor on the more robust forward-looking DCF, and cap the offer at stand-alone value plus synergies — while aiming to pay below that to retain value for Maybury's shareholders", true, "Correct — synthesise into a range, recognise synergies raise the ceiling, but paying away all synergy destroys acquirer value."],
      ["Always offer the higher of the two figures plus the full synergy, since a higher price secures the deal", false, "Paying stand-alone-plus-full-synergy transfers all created value to the vendor, leaving nothing for Maybury's shareholders."],
      ["Use only the P/E figure because market multiples are objective and DCF is just an estimate", false, "Both are estimates; the judgemental discount and reliance on a single comparable make the P/E figure no more 'objective'."],
      ["Average the two figures and ignore synergies as too uncertain", false, "Mechanical averaging discards information, and quantified synergies are central to an acquisition decision."],
    ],
  ),
  calc({
    id: "sb-val-4",
    topicId: "t-sbm-val",
    difficulty: "hard",
    scenario:
      "Acquirer plc (8 million shares, share price £12, so equity value £96m) plans to acquire Bidco Ltd, valued on a stand-alone basis at £30m. Combining the businesses is expected to generate synergies with a present value of £10m. Acquirer will pay £34m in cash for Bidco.",
    stem: "Calculate the net present value of the acquisition to Acquirer plc's existing shareholders, in £m.",
    explanation:
      "NPV to the acquirer = value gained (target stand-alone value + synergies) − price paid.",
    workedSolution:
      "Value acquired = stand-alone 30 + synergies 10 = £40m\nPrice paid = £34m\nNPV to acquirer = 40 − 34 = £6m (Bidco's shareholders capture £4m of the £10m synergy via the £4m premium over stand-alone value.)",
    relatedConcepts: ["Acquisition NPV", "Synergy", "Bid premium", "Gains from a takeover"],
    numericAnswer: 6,
    numericTolerance: 0.1,
    unit: "£m",
  }),
  calc({
    id: "sb-val-5",
    topicId: "t-sbm-val",
    difficulty: "hard",
    scenario:
      "Instead of cash, Acquirer plc (8m shares at £12 = £96m; standalone) offers a share-for-share exchange for Bidco (stand-alone value £30m). The combined entity is expected to be worth £136m (£96m + £30m + £10m synergy). Acquirer issues 3 million new shares to Bidco's shareholders.",
    stem: "Calculate the share price of the combined entity immediately after the merger, to the nearest penny (£).",
    explanation:
      "Combined value is shared over the enlarged share count. Price = combined value / total shares.",
    workedSolution:
      "Total shares = 8m + 3m = 11m\nCombined value = £136m\nPost-merger price = 136 / 11 = £12.3636… ≈ £12.36",
    relatedConcepts: ["Share-for-share exchange", "Post-merger share price", "Synergy sharing"],
    numericAnswer: 12.36,
    numericTolerance: 0.03,
    unit: "£",
  }),
  mc(
    {
      id: "sb-val-6",
      topicId: "t-sbm-val",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "In the share-for-share offer, Bidco's shareholders receive 3m shares worth £12.36 each post-merger (£37.1m) against a stand-alone value of £30m. Acquirer's original shareholders hold 8m shares now worth £98.9m, up from £96m. The finance director is comparing the cash offer (£34m, NPV £6m to acquirer) with this share offer.",
      stem: "Which factor is the most important strategic consideration when choosing between the cash and share-for-share offers?",
      explanation:
        "Under the share offer, Bidco's holders gain £7.1m and Acquirer's gain £2.9m, versus £4m/£6m respectively under cash — so a paper offer transfers more synergy to the vendor here. Beyond the split, share offers make the target's shareholders bear part of the risk that synergies fail to materialise and dilute the acquirer's control, whereas cash gives certainty to the vendor (and may trigger an immediate tax charge) and concentrates both risk and reward with the acquirer. Financing capacity, gearing impact and signalling also matter.",
      relatedConcepts: ["Cash vs share consideration", "Risk sharing", "Dilution of control", "Tax and signalling effects"],
    },
    [
      ["How the consideration form allocates synergy risk and reward and affects control/gearing — shares make the vendor share post-deal risk and dilute control, cash concentrates risk and reward with the acquirer", true, "Correct — the consideration form is fundamentally about risk-sharing, control and financing, not just the headline price."],
      ["Only the headline offer value matters; the form of consideration is irrelevant", false, "Form is critical: it changes risk-sharing, control, tax and financing for both sides."],
      ["A share offer is always superior because it conserves cash", false, "Conserving cash is one benefit, but dilution, signalling and synergy-sharing can outweigh it."],
      ["A cash offer is always superior because shareholders prefer cash", false, "Cash can trigger tax and forfeits risk-sharing; 'always' ignores the trade-offs."],
    ],
  ),

  // ──────────────────────────────────────────────────────────────────────────
  // Risk management & treasury — t-sbm-risk
  // ──────────────────────────────────────────────────────────────────────────
  calc({
    id: "sb-risk-1",
    topicId: "t-sbm-risk",
    difficulty: "hard",
    scenario:
      "Norwood plc, a UK company, will receive US$5,000,000 from a customer in three months. It wishes to hedge using a forward contract. Spot rate: £1 = $1.2500. The three-month forward is quoted at a premium of 0.0100 to the dollar (i.e. the dollar is at a premium, so the forward rate is $1.2400 per £1).",
    stem: "Using the three-month forward rate of £1 = $1.2400, calculate the sterling amount Norwood will receive, to the nearest £.",
    explanation:
      "Convert the dollar receipt at the forward rate by dividing the dollar amount by the dollars-per-pound forward rate.",
    workedSolution:
      "Sterling received = $5,000,000 / 1.2400 = £4,032,258 (a stronger dollar — fewer dollars per £ — gives more sterling than at spot $1.2500, which would give £4,000,000).",
    relatedConcepts: ["Forward contract", "Transaction risk", "Currency hedging", "Forward premium/discount"],
    numericAnswer: 4032258,
    numericTolerance: 100,
    unit: "£",
  }),
  calc({
    id: "sb-risk-2",
    topicId: "t-sbm-risk",
    difficulty: "hard",
    scenario:
      "Oakford plc will borrow £10,000,000 for 6 months starting in 3 months' time and fears rising rates. It buys an interest-rate cap (an option) at a strike equivalent to 5.0% per annum, paying a premium of £25,000. If actual 6-month LIBOR-equivalent at the start of the loan is 6.0% per annum, the cap pays out the rate differential on the notional for the 6-month period.",
    stem: "Calculate the cap payout (excluding the premium) Oakford receives, in £.",
    explanation:
      "A cap pays the excess of the actual rate over the strike, applied to the notional for the loan period (6 months = half a year).",
    workedSolution:
      "Rate differential = 6.0% − 5.0% = 1.0% per annum\nPayout = £10,000,000 × 1.0% × 6/12 = £50,000\n(Net benefit after the £25,000 premium = £25,000; the cap also preserves upside if rates had fallen.)",
    relatedConcepts: ["Interest-rate cap", "Options", "Interest-rate risk", "Premium vs payout"],
    numericAnswer: 50000,
    numericTolerance: 100,
    unit: "£",
  }),
  mc(
    {
      id: "sb-risk-3",
      topicId: "t-sbm-risk",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Pembury plc has a €12m payable due in four months. The treasurer is choosing between (i) a forward contract, (ii) a currency option, and (iii) a money-market hedge. The board is uncertain whether sterling will strengthen or weaken against the euro and places value on retaining upside if sterling strengthens, but the treasury policy emphasises certainty of cash outflow for budgeting.",
      stem: "Which hedging instrument best matches Pembury's stated objectives, and what is the key trade-off?",
      explanation:
        "A forward locks in a known outflow (certainty) but forgoes any favourable movement. An option provides certainty of a worst-case rate while retaining upside if sterling strengthens — but costs a non-refundable premium. A money-market hedge replicates the forward outcome using borrowing/deposits. The board explicitly values both budgeting certainty and retained upside; an option uniquely delivers a capped worst case plus upside, with the premium as the cost. If certainty alone dominated, a forward would be cheaper.",
      relatedConcepts: ["Forward vs option vs money-market hedge", "Premium", "Downside protection with upside", "Treasury policy"],
    },
    [
      ["A currency option — it caps the worst-case cost while retaining upside if sterling strengthens; the trade-off is the non-refundable premium", true, "Correct — only the option preserves upside while protecting the downside, at the cost of the premium."],
      ["A forward contract — it is always the cheapest and best hedge", false, "A forward gives certainty but forgoes favourable movements, conflicting with the board's wish to retain upside."],
      ["No hedge — leave the position open to benefit if sterling strengthens", false, "Leaving it open breaches the treasury policy's emphasis on certainty and exposes the firm to adverse moves."],
      ["A money-market hedge, because it never involves any cost", false, "A money-market hedge has costs (the interest differential) and, like a forward, forgoes upside."],
    ],
  ),
  calc({
    id: "sb-risk-4",
    topicId: "t-sbm-risk",
    difficulty: "hard",
    scenario:
      "Quenby plc (UK) must pay $3,300,000 in three months. It uses a money-market hedge. Spot: £1 = $1.2000. US 3-month deposit rate: 1.0% for the period. UK 3-month borrowing rate: 1.5% for the period. (Place enough on US$ deposit now so it grows to $3,300,000.)",
    stem: "Calculate the sterling cost today of setting up the money-market hedge (the amount Quenby must borrow in sterling now), to the nearest £.",
    explanation:
      "Discount the dollar payable at the US deposit rate to find the dollars to deposit now, convert to sterling at spot — that is the sterling Quenby must borrow.",
    workedSolution:
      "Dollars to deposit now = 3,300,000 / 1.010 = $3,267,326.73\nConvert at spot: £ = 3,267,326.73 / 1.2000 = £2,722,772 (Quenby borrows this in sterling now; the UK borrowing rate determines the final settled cost in 3 months but the set-up cost today is £2,722,772.)",
    relatedConcepts: ["Money-market hedge", "Transaction risk", "Interest rate parity", "Spot conversion"],
    numericAnswer: 2722772,
    numericTolerance: 200,
    unit: "£",
  }),
  mc(
    {
      id: "sb-risk-5",
      topicId: "t-sbm-risk",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Rushden plc is mapping its risks on a likelihood/impact matrix and choosing a response for each using the TARA framework (Transfer, Avoid, Reduce, Accept). One risk — a rare but catastrophic factory fire — is low likelihood but very high impact.",
      stem: "Which risk response is most appropriate for a low-likelihood, very-high-impact risk such as a catastrophic fire?",
      explanation:
        "Low-probability, high-impact risks are classic candidates for transfer — typically via insurance — because the firm cannot easily bear the impact and the low likelihood makes premiums economic. Avoidance (ceasing the activity) is usually disproportionate; acceptance is reckless given the severity; pure reduction (e.g. sprinklers) helps but rarely removes the catastrophic tail alone.",
      relatedConcepts: ["TARA framework", "Risk transfer", "Insurance", "Likelihood/impact matrix"],
    },
    [
      ["Transfer the risk, principally through insurance, supported by reduction measures", true, "Correct — transfer (insurance) suits low-likelihood, high-impact risks the firm cannot absorb."],
      ["Accept the risk because it is unlikely to occur", false, "Acceptance ignores the catastrophic impact; the severity makes acceptance inappropriate."],
      ["Avoid the risk by ceasing manufacturing altogether", false, "Avoidance is disproportionate — it sacrifices the core business to address one tail risk."],
      ["Ignore it, as low-probability events fall outside risk management", false, "Low-probability, high-impact events are precisely what risk management must address."],
    ],
  ),
  mc(
    {
      id: "sb-risk-6",
      topicId: "t-sbm-risk",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Sandhurst plc's treasury used interest-rate swaps to hedge floating-rate debt. A junior treasurer then entered additional, larger swaps that did not correspond to any underlying borrowing, taking a directional bet on rates to boost treasury profits. The CFO discovers the positions after a favourable result.",
      stem: "From a treasury risk-management and governance perspective, what is the central problem and the correct response?",
      explanation:
        "The treasury function exists to manage (hedge) the firm's existing risks, not to speculate. Entering derivatives with no underlying exposure converts a hedging operation into proprietary speculation, exposing the firm to potentially unlimited losses and breaching the principle that treasury is a cost/risk-control centre, not a profit centre taking directional bets. A favourable outcome does not legitimise the breach. The response is to close the unauthorised positions, enforce a clear treasury policy (mandate, limits, segregation of duties, reporting) and address the control failure.",
      relatedConcepts: ["Treasury policy", "Speculation vs hedging", "Internal control", "Governance of derivatives"],
    },
    [
      ["Treasury speculated rather than hedged — derivatives without an underlying exposure; close the positions and enforce policy, limits and segregation of duties regardless of the profit made", true, "Correct — the gain is irrelevant; unauthorised speculation is a control and governance failure that must be stopped and controlled."],
      ["No problem — the trades made a profit, vindicating the strategy", false, "A favourable outcome does not legitimise unauthorised speculation; the next bet could be catastrophic."],
      ["Reward the treasurer and formalise speculative trading as a profit centre", false, "Treasury should control risk, not be turned into a speculative profit centre; this institutionalises the failure."],
      ["Hedge the new swaps with further derivatives to neutralise them", false, "Layering more derivatives adds complexity and cost; the positions should simply be closed and controls fixed."],
    ],
  ),

  // ──────────────────────────────────────────────────────────────────────────
  // Ethics in strategic decisions — t-sbm-eth
  // ──────────────────────────────────────────────────────────────────────────
  mc(
    {
      id: "sb-eth-1",
      topicId: "t-sbm-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Thornbury plc is advising on a major acquisition. A senior partner at Thornbury's adviser personally holds a substantial shareholding in the target company. The partner is leading the engagement that will set the recommended offer price.",
      stem: "Applying the ICAEW Code of Ethics, what is the principal threat and the appropriate safeguard?",
      explanation:
        "The partner's personal shareholding in the target creates a self-interest threat to objectivity: a higher offer price benefits the partner personally. The fundamental principle of objectivity is compromised. Safeguards include disclosing the interest, removing the partner from the engagement, and having the work reviewed independently; if the threat cannot be reduced to an acceptable level the firm should decline or withdraw.",
      relatedConcepts: ["ICAEW Code of Ethics", "Self-interest threat", "Objectivity", "Conflicts of interest", "Safeguards"],
    },
    [
      ["A self-interest threat to objectivity — disclose the interest and remove the partner from the engagement (with independent review), withdrawing if the threat cannot be reduced to an acceptable level", true, "Correct — a personal holding in the target is a self-interest threat; the partner must be removed and safeguards applied."],
      ["No threat exists provided the partner is highly experienced and acts in good faith", false, "Experience and good faith do not eliminate a self-interest threat; objectivity is structurally compromised."],
      ["The partner may continue if they simply promise to be impartial", false, "A promise is not an adequate safeguard against a direct financial self-interest."],
      ["The only issue is confidentiality, addressed by a non-disclosure agreement", false, "The core issue is objectivity/self-interest, not confidentiality; an NDA does not address it."],
    ],
  ),
  mc(
    {
      id: "sb-eth-2",
      topicId: "t-sbm-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Underwood plc's finance team is preparing the strategic plan that supports the year-end going-concern assessment. The CEO, whose bonus depends on the share price, pressures the team to adopt aggressive revenue-growth assumptions that the team privately believes are unrealistic, in order to present a more favourable outlook to lenders.",
      stem: "Which fundamental ethical principles are primarily threatened, and what should the finance professional do?",
      explanation:
        "Adopting assumptions the team believes are unrealistic to mislead lenders threatens integrity and objectivity, and the pressure from the CEO is an intimidation/self-interest (bonus) threat. Professional behaviour and due care are also engaged. The professional should not associate with misleading information: challenge the assumptions, document concerns, escalate (to the audit committee/those charged with governance), seek advice, and ultimately refuse to prepare or sign off misleading information.",
      relatedConcepts: ["Integrity", "Objectivity", "Intimidation threat", "Going concern", "Escalation"],
    },
    [
      ["Integrity and objectivity (with an intimidation threat from the CEO) — challenge and document the assumptions, escalate to those charged with governance, and refuse to be associated with misleading information", true, "Correct — the professional must not associate with information they believe is misleading and should escalate."],
      ["None — the CEO has authority, so the team must simply comply", false, "Authority does not override the duty not to be associated with misleading information."],
      ["Only confidentiality is at risk, resolved by keeping the assumptions internal", false, "The issue is integrity/objectivity in reporting to lenders, not confidentiality."],
      ["The team should adopt the assumptions but add a vague disclaimer", false, "A disclaimer does not cure knowingly misleading forecasts; the assumptions themselves must be defensible."],
    ],
  ),
  mc(
    {
      id: "sb-eth-3",
      topicId: "t-sbm-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Vexford LLP is asked to advise both the acquirer and the target in the same proposed transaction because it has long-standing relationships with both. Each client expects Vexford to advance its interests in negotiating the price.",
      stem: "What is the conflict and how should Vexford respond under the Code of Ethics?",
      explanation:
        "Advising both parties to a transaction whose interests directly oppose each other (the price one pays is the price the other receives) is a conflict of interest threatening objectivity and confidentiality. Safeguards include full disclosure to both clients and obtaining informed consent, separate engagement teams with information barriers, and independent review. If effective safeguards cannot be applied — often the case where interests are directly adverse — the firm should act for only one party, or neither.",
      relatedConcepts: ["Conflict of interest", "Information barriers", "Informed consent", "Confidentiality", "Objectivity"],
    },
    [
      ["A conflict of interest between two clients with directly opposing interests — obtain informed consent with information barriers and separate teams, but act for only one (or neither) if adequate safeguards are not possible", true, "Correct — opposing interests create a conflict requiring consent and barriers, or declining one or both engagements."],
      ["No conflict, since Vexford knows both clients well and can be even-handed", false, "Familiarity does not remove the conflict; the parties' interests are directly opposed."],
      ["Vexford may act for both provided it charges each the same fee", false, "Fee equality is irrelevant to a conflict of interest between opposing parties."],
      ["The matter is purely commercial and outside the scope of the ethics code", false, "Conflicts of interest are squarely within the Code of Ethics."],
    ],
  ),
  mc(
    {
      id: "sb-eth-4",
      topicId: "t-sbm-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Wendover plc is choosing between two strategies. Strategy A maximises short-term shareholder returns but involves relocating production overseas, large UK redundancies and aggressive (though legal) tax structuring. Strategy B yields lower short-term returns but retains UK jobs, invests in the community and adopts transparent tax practices. The board must weigh shareholder primacy against wider stakeholder and corporate-social-responsibility considerations.",
      stem: "How should the board approach this strategic-ethics decision?",
      explanation:
        "The decision is not simply 'legal therefore acceptable'. Directors' duties (e.g. to promote the success of the company) require having regard to the long-term consequences and to employees, suppliers, the community and reputation. Aggressive tax structuring, while legal, carries reputational and ethical risk. A robust approach evaluates both strategies against legal, ethical and reputational criteria and the firm's stated values and stakeholder obligations, rather than treating legality and short-term EPS as the sole tests. The conclusion may legitimately be a balanced position, but it must be reasoned, not defaulted to whichever maximises short-term return.",
      relatedConcepts: ["Stakeholder theory", "Corporate social responsibility", "Directors' duties", "Reputational risk", "Ethics vs legality"],
    },
    [
      ["Evaluate both strategies against legal, ethical, reputational and stakeholder criteria and the firm's values — not legality and short-term EPS alone — and reach a reasoned, balanced decision", true, "Correct — 'legal' is necessary but not sufficient; directors must weigh long-term and stakeholder consequences."],
      ["Always choose Strategy A, because directors' sole duty is to maximise short-term shareholder returns", false, "Directors must consider long-term success and wider stakeholders, not just short-term returns."],
      ["Choose whichever strategy is legal, since legality is the only ethical test", false, "Legality is necessary but not sufficient; ethical and reputational dimensions also matter."],
      ["Choose Strategy B automatically, because CSR always outweighs returns", false, "Neither value automatically dominates; the board must reason through the trade-offs, not default to either."],
    ],
  ),
  mc(
    {
      id: "sb-eth-5",
      topicId: "t-sbm-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "During due diligence on a target, an analyst at Yardley plc is inadvertently given access to a data room containing the target's confidential customer pricing. The deal then collapses. Yardley competes with the target in some markets, and a manager suggests the team 'use what they learned' to win contracts.",
      stem: "What is the ethical issue and the correct response?",
      explanation:
        "Information obtained in confidence during an aborted transaction remains confidential; using it for competitive advantage breaches the principle of confidentiality (which continues after the relationship ends) and would amount to misuse of price-sensitive information. The correct response is to refuse to use the information, ring-fence/quarantine those who saw it, and ensure decisions are made on independently sourced information only.",
      relatedConcepts: ["Confidentiality", "Use of confidential information", "Information barriers", "Professional behaviour"],
    },
    [
      ["A breach of confidentiality — confidential information must not be used for advantage even after the deal collapses; refuse to use it and ring-fence those who saw it", true, "Correct — the duty of confidentiality continues after the engagement ends; the information must not be exploited."],
      ["No issue, because the deal has collapsed and the duty of confidentiality has ended", false, "Confidentiality continues after the relationship ends; collapse of the deal does not release the duty."],
      ["The team may use the information since it was disclosed voluntarily in the data room", false, "Disclosure for due diligence does not permit use for unrelated competitive purposes."],
      ["The only safeguard needed is to delete the documents while remembering the contents", false, "Retaining and using the knowledge still breaches confidentiality; the information must not be exploited at all."],
    ],
  ),
  mc(
    {
      id: "sb-eth-6",
      topicId: "t-sbm-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Zelah plc faces an ethical dilemma over a proposed strategy and applies a structured ethical decision-making model. A manager argues the firm should follow whatever course produces the greatest net benefit across all affected parties, while a colleague argues some actions are simply wrong regardless of outcome.",
      stem: "Which pairing of ethical reasoning correctly labels the two managers' positions?",
      explanation:
        "The first manager reasons consequentially/utilitarian-style (judge actions by their outcomes — greatest net benefit). The second reasons deontologically (some duties/actions are right or wrong in themselves, independent of consequences). A robust ethical analysis usually draws on both perspectives plus the firm's values and professional code.",
      relatedConcepts: ["Consequentialism / utilitarianism", "Deontology", "Ethical decision-making models"],
    },
    [
      ["The first is consequentialist (utilitarian); the second is deontological", true, "Correct — greatest-net-benefit reasoning is consequentialist; 'wrong regardless of outcome' is deontological."],
      ["The first is deontological; the second is consequentialist", false, "These are reversed — outcome-based reasoning is consequentialist, not deontological."],
      ["Both positions are purely deontological", false, "The first manager reasons from outcomes, which is consequentialist."],
      ["Neither position relates to recognised ethical theories", false, "Both map onto recognised theories — consequentialism and deontology."],
    ],
  ),
];

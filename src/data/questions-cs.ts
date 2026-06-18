// Advanced Level — Case Study question bank.
// Replicates ICAEW Advanced Case Study format: short company/exhibit scenario
// then a judgement-led ask — the best analytical interpretation ("so what"),
// the right professional-skills approach (Assimilating & Using Information;
// Structuring Problems & Solutions; Applying Judgement; Concluding,
// Recommending & Communicating), the ethical/data-integrity issue to flag, or a
// financial-analysis calculation. Original questions (not copied from ICAEW
// past papers); judgement & recommendations emphasised over rote recall.
import { mc, calc } from "@/data/question-helpers";
import type { Question } from "@/types/domain";

export const csQuestions: Question[] = [
  // ── Exam technique, Advance Information, four professional skills, exec summary — t-cs-skills
  mc(
    {
      id: "cs-skills-1",
      topicId: "t-cs-skills",
      type: "mcq",
      difficulty: "medium",
      scenario:
        "You sit the Case Study for Helios Logistics plc. The Advance Information (AI) issued five weeks ago described the company's depot network, its main competitors and a planned move into temperature-controlled freight. On exam day the question paper adds new exhibits: a board paper on a possible depot acquisition and last month's management accounts.",
      stem: "What is the most effective way to use the Advance Information during the four-hour exam?",
      explanation:
        "The AI is not a script to be reproduced. Marks are earned for analysing the NEW exam-day information in the context of the business you already understand. The skill is integration: use prior knowledge of the company and sector to interpret the fresh exhibits, not to pad the answer with pre-learned background.",
      relatedConcepts: ["Advance Information", "Assimilating & Using Information"],
    },
    [
      ["As context that lets you interpret the new exam-day exhibits quickly and accurately", true, "Correct — the AI builds familiarity so you can focus exam time on analysing the new data."],
      ["Reproduce the AI's company background verbatim to demonstrate preparation", false, "Rote background scores almost nothing; markers reward analysis of the new information."],
      ["Ignore the AI once the real exhibits arrive — only exam-day data matters", false, "The AI is essential context; ignoring it loses the integration that earns higher skills marks."],
      ["Pre-write full answers from the AI and copy them in regardless of the requirements", false, "Pre-written 'standard paragraphs' rarely fit the actual requirement and waste time."],
    ],
  ),
  mc(
    {
      id: "cs-skills-2",
      topicId: "t-cs-skills",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A candidate's Case Study answer for the depot-acquisition requirement lists every ratio they can calculate, restates the question, and ends with 'further analysis is needed'. Technically the numbers are correct, but the requirement asked them to advise the board whether to proceed.",
      stem: "Which professional skill is most clearly under-demonstrated, and why?",
      explanation:
        "All four skills are assessed, but the gap here is 'Concluding, Recommending & Communicating'. The candidate assimilated and even structured data, yet failed to reach a clear, reasoned recommendation tailored to the decision the board faces. 'Further analysis is needed' is a non-conclusion.",
      relatedConcepts: ["Concluding, Recommending & Communicating", "Four professional skills"],
    },
    [
      ["Concluding, Recommending & Communicating — there is no clear, reasoned recommendation", true, "Correct — the requirement asked for advice; listing ratios without a conclusion fails this skill."],
      ["Assimilating & Using Information — the figures are wrong", false, "The scenario states the numbers are correct, so assimilation is not the main failing."],
      ["Structuring Problems & Solutions — the answer has no calculations", false, "It contains calculations; the failing is the absence of a recommendation."],
      ["No skill is under-demonstrated; correct numbers are sufficient at Advanced", false, "At Advanced, judgement and a communicated conclusion are essential — numbers alone are not enough."],
    ],
  ),
  mc(
    {
      id: "cs-skills-3",
      topicId: "t-cs-skills",
      type: "mcq",
      difficulty: "medium",
      scenario:
        "The Case Study requires an executive summary covering all three requirements. A candidate is deciding what to put in it with 20 minutes of writing time left.",
      stem: "What best characterises an effective Case Study executive summary?",
      explanation:
        "The executive summary is a standalone, board-level synthesis: it states the key findings and recommendations for each requirement concisely, in the candidate's own words, addressed to the senior recipient. It is not an introduction, not a restatement of the requirements, and not a place for detailed workings.",
      relatedConcepts: ["Executive summary", "Concluding, Recommending & Communicating"],
    },
    [
      ["A concise, standalone synthesis of the key findings and recommendations for each requirement", true, "Correct — it must stand alone and give the recipient the conclusions and recommendations."],
      ["A detailed reproduction of all the calculations from the main report", false, "Workings belong in the body, not the summary."],
      ["An introduction explaining what the rest of the report will cover", false, "It summarises conclusions, not intentions."],
      ["A restatement of the three requirements in the examiner's words", false, "Restating requirements adds no value and earns no marks."],
    ],
  ),
  mc(
    {
      id: "cs-skills-4",
      topicId: "t-cs-skills",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Requirement 2 gives Helios's management accounts with a footnote: 'August revenue includes a £1.4m one-off insurance settlement; depot 4 was closed for refurbishment for three weeks in July.' A candidate computes revenue growth but does not mention either footnote.",
      stem: "Which professional skill does engaging with those footnotes primarily demonstrate?",
      explanation:
        "Spotting that a one-off settlement distorts revenue and that a closure distorts a depot's monthly figures is 'Assimilating & Using Information' — distinguishing relevant from misleading data and reading exhibits critically. It feeds judgement, but the core skill on display is critical assimilation of the information provided.",
      relatedConcepts: ["Assimilating & Using Information", "Exhibit footnotes"],
    },
    [
      ["Assimilating & Using Information — reading exhibits critically and identifying distortions", true, "Correct — recognising one-off and non-comparable items is critical assimilation of the data."],
      ["Concluding, Recommending & Communicating only", false, "The footnotes inform the conclusion but recognising them is primarily assimilation."],
      ["Neither — footnotes are immaterial detail", false, "A £1.4m one-off and a depot closure materially distort the analysis; ignoring them is an error."],
      ["Structuring Problems & Solutions only", false, "Structuring is about approach; spotting the footnotes is critical reading of the information."],
    ],
  ),
  mc(
    {
      id: "cs-skills-5",
      topicId: "t-cs-skills",
      type: "mcq",
      difficulty: "medium",
      scenario:
        "Each of the three Case Study requirements is equally weighted, and a candidate must score at least 50% in every requirement to pass overall. With 30 minutes left, the candidate has fully answered Requirements 1 and 2 but has not started Requirement 3.",
      stem: "What is the best use of the remaining time?",
      explanation:
        "Because each requirement must independently reach the pass threshold and marks are easiest to earn early in a fresh requirement, the candidate should move on and make a genuine attempt at Requirement 3. Perfecting an already-passed requirement risks failing the whole exam on an unattempted one.",
      relatedConcepts: ["Time management", "Equal-weighting and per-requirement minimum"],
    },
    [
      ["Make a genuine attempt at Requirement 3 to secure marks there", true, "Correct — early marks are easiest and each requirement must reach its own threshold."],
      ["Keep polishing Requirements 1 and 2 to maximise their scores", false, "Diminishing returns; an unattempted Requirement 3 risks an overall fail."],
      ["Rewrite the executive summary in more detail", false, "Securing marks in the unattempted requirement is far higher value."],
      ["Recalculate all the ratios in Requirement 2 to be safe", false, "Re-checking already-credited work is low value with a whole requirement outstanding."],
    ],
  ),
  mc(
    {
      id: "cs-skills-6",
      topicId: "t-cs-skills",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A candidate produces a faultless DCF for the depot acquisition but presents it as a dense block of figures with no narrative, no comment on what the numbers mean for Helios, and no link to the board's strategic aim of entering temperature-controlled freight.",
      stem: "Why would this answer still score poorly against the professional skills?",
      explanation:
        "Advanced Case Study marks technical content plus four professional skills. A correct model with no interpretation, no 'so what', and no link to the company's objectives fails Structuring (presenting solutions clearly) and Concluding/Communicating. Judgement at Advanced means relating analysis to the recipient's decision.",
      relatedConcepts: ["Applying Judgement", "Structuring Problems & Solutions"],
    },
    [
      ["It shows no judgement or communication — the numbers are not interpreted or linked to the decision", true, "Correct — Advanced rewards the 'so what' and the recommendation, not just a correct model."],
      ["DCF is never appropriate in a Case Study", false, "DCF can be entirely appropriate; the failing is the missing interpretation."],
      ["The figures should have been rounded differently", false, "Presentation precision is trivial next to the absence of analysis and recommendation."],
      ["Executive summaries should contain the full DCF", false, "Detailed workings belong in the body, not the summary; this is not the issue."],
    ],
  ),

  // ── Financial analysis: performance vs prior year/budget, ratios, trends — t-cs-anal
  calc({
    id: "cs-anal-1",
    topicId: "t-cs-anal",
    difficulty: "medium",
    scenario:
      "Helios Logistics' revenue was £64.0m in the year ended 31 March 20X5, up from £58.2m the prior year.",
    stem: "What was the year-on-year revenue growth, to one decimal place (%)?",
    explanation:
      "Growth % = (current − prior) / prior × 100. State the trend before interpreting it.",
    workedSolution: "(64.0 − 58.2) / 58.2 × 100 = 5.8 / 58.2 × 100 = 9.97% ≈ 10.0%.",
    relatedConcepts: ["Revenue growth", "Trend analysis"],
    numericAnswer: 10.0,
    numericTolerance: 0.2,
    unit: "%",
  }),
  calc({
    id: "cs-anal-2",
    topicId: "t-cs-anal",
    difficulty: "medium",
    scenario:
      "Helios reported revenue of £64.0m and gross profit of £15.4m for 20X5. The board had budgeted a gross margin of 26.0%.",
    stem: "By how many percentage points did the actual gross margin fall short of budget? Give the shortfall to one decimal place (percentage points).",
    explanation:
      "Actual gross margin = gross profit / revenue. Compare with the 26.0% budget; the shortfall is the difference in percentage points.",
    workedSolution: "Actual margin = 15.4 / 64.0 = 24.06%. Shortfall vs budget = 26.0% − 24.06% = 1.94 ≈ 1.9 pp.",
    relatedConcepts: ["Gross margin", "Variance vs budget"],
    numericAnswer: 1.9,
    numericTolerance: 0.2,
    unit: "pp",
  }),
  calc({
    id: "cs-anal-3",
    topicId: "t-cs-anal",
    difficulty: "hard",
    scenario:
      "At 31 March 20X5 Helios had current assets of £21.0m (including inventory of £3.0m) and current liabilities of £14.0m.",
    stem: "What is the quick (acid-test) ratio, to two decimal places?",
    explanation:
      "Quick ratio = (current assets − inventory) / current liabilities — a tighter test of short-term liquidity.",
    workedSolution: "(21.0 − 3.0) / 14.0 = 18.0 / 14.0 = 1.2857 ≈ 1.29.",
    relatedConcepts: ["Liquidity", "Quick ratio"],
    numericAnswer: 1.29,
    numericTolerance: 0.02,
    unit: ":1",
  }),
  calc({
    id: "cs-anal-4",
    topicId: "t-cs-anal",
    difficulty: "hard",
    scenario:
      "Helios's trade receivables were £10.5m at the year end on credit sales of £64.0m. Standard credit terms offered to customers are 45 days. Use a 365-day year.",
    stem: "What is the receivables collection period in days (to the nearest whole day)?",
    explanation:
      "Receivables days = (trade receivables / credit sales) × 365. Compare with the 45-day terms to judge collection performance.",
    workedSolution: "(10.5 / 64.0) × 365 = 0.16406 × 365 = 59.9 ≈ 60 days. This is ~15 days beyond terms — a possible collection/credit-control issue.",
    relatedConcepts: ["Receivables days", "Working capital"],
    numericAnswer: 60,
    numericTolerance: 1,
    unit: "days",
  }),
  mc(
    {
      id: "cs-anal-5",
      topicId: "t-cs-anal",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Helios's operating margin rose from 7.1% to 9.4%, yet operating cash flow fell from £6.2m to £3.1m over the same year. Receivables days rose from 46 to 60, and a £1.4m one-off insurance settlement is included in revenue.",
      stem: "What is the best 'so what' interpretation of this combination for the board?",
      explanation:
        "The margin improvement is partly illusory (boosted by a one-off) and is not converting to cash because receivables have ballooned. The headline profitability story masks a deteriorating cash and credit-control position — the key message is the divergence between profit and cash, not the margin alone.",
      relatedConcepts: ["Profit vs cash", "Quality of earnings"],
    },
    [
      ["Profit quality is weak: margin gain is flattered by a one-off and is not converting to cash as receivables rise", true, "Correct — the divergence of profit and cash plus the one-off is the real story for the board."],
      ["Performance has clearly improved because the operating margin is up", false, "The margin gain is partly a one-off and is not backed by cash — a misleading conclusion."],
      ["The fall in cash is irrelevant as long as profit is rising", false, "Cash generation is critical; a profit-rich, cash-poor position is a warning sign."],
      ["Receivables days are a financing matter only and do not affect this analysis", false, "Rising receivables days directly explain the cash shortfall and signal credit-control problems."],
    ],
  ),
  calc({
    id: "cs-anal-6",
    topicId: "t-cs-anal",
    difficulty: "hard",
    scenario:
      "Helios's 20X5 results include the £1.4m one-off insurance settlement within reported revenue of £64.0m. The prior-year revenue of £58.2m contained no such item.",
    stem: "Adjusting for the one-off, what is the underlying year-on-year revenue growth, to one decimal place (%)?",
    explanation:
      "Strip the one-off from current-year revenue before comparing like with like, then compute growth on the prior year.",
    workedSolution: "Underlying revenue = 64.0 − 1.4 = 62.6. Growth = (62.6 − 58.2) / 58.2 × 100 = 4.4 / 58.2 × 100 = 7.56% ≈ 7.6%. (Underlying growth is ~2.4pp lower than the 10.0% headline.)",
    relatedConcepts: ["Underlying performance", "Non-recurring items"],
    numericAnswer: 7.6,
    numericTolerance: 0.2,
    unit: "%",
  }),

  // ── Evaluating proposals: viability, assumptions, sensitivity — t-cs-prop
  calc({
    id: "cs-prop-1",
    topicId: "t-cs-prop",
    difficulty: "hard",
    scenario:
      "Helios is evaluating a temperature-controlled depot. Initial outlay is £4.0m now (t0). It is expected to generate net cash inflows of £1.5m per year for 4 years, received at each year end. The cost of capital is 10%. The 4-year annuity factor at 10% is 3.170.",
    stem: "What is the NPV of the proposal, to the nearest £0.01m?",
    explanation:
      "NPV = PV of the annuity of inflows − initial outlay. Use the annuity factor to discount the level inflows.",
    workedSolution: "PV inflows = 1.5 × 3.170 = 4.755. NPV = 4.755 − 4.0 = £0.76m. Positive NPV → the proposal adds value at 10%.",
    relatedConcepts: ["NPV", "Investment appraisal"],
    numericAnswer: 0.76,
    numericTolerance: 0.02,
    unit: "£m",
  }),
  calc({
    id: "cs-prop-2",
    topicId: "t-cs-prop",
    difficulty: "hard",
    scenario:
      "Using the depot proposal (outlay £4.0m at t0; inflows £1.5m a year for 4 years; 10% annuity factor 3.170, giving PV of inflows £4.755m).",
    stem: "By what percentage can the annual cash inflow fall before the NPV becomes zero (the sensitivity margin)? Give to one decimal place (%).",
    explanation:
      "Sensitivity of NPV to the inflow = NPV / PV of the variable cash flows. It shows the percentage fall in inflows that eliminates the surplus.",
    workedSolution: "Sensitivity = NPV / PV of inflows = 0.755 / 4.755 = 0.1588 = 15.9%. Inflows can fall ~15.9% before the project breaks even.",
    relatedConcepts: ["Sensitivity analysis", "Margin of safety"],
    numericAnswer: 15.9,
    numericTolerance: 0.3,
    unit: "%",
  }),
  mc(
    {
      id: "cs-prop-3",
      topicId: "t-cs-prop",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "The depot business case assumes inflows of £1.5m a year for four years. The assumption rests on winning a single anchor customer's contract that is currently out to competitive tender, and on energy costs (a major input for refrigeration) staying flat.",
      stem: "Which assumption most warrants challenge before the board relies on the NPV?",
      explanation:
        "The whole inflow depends on winning a contested tender — a binary, high-impact, far-from-certain assumption. If lost, the cash flows and therefore the NPV collapse. Energy cost is a sensitivity to test, but the existential risk is the unsecured anchor contract. Sound evaluation challenges the load-bearing assumption.",
      relatedConcepts: ["Assumption challenge", "Proposal viability"],
    },
    [
      ["That the contested anchor contract will be won — the entire inflow depends on an uncertain tender", true, "Correct — it is the load-bearing, binary assumption; if lost the NPV collapses."],
      ["That the annuity factor is 3.170", false, "The factor is a given arithmetic input, not a business assumption to challenge."],
      ["That cash flows arrive at year end rather than mid-year", false, "Timing convention is a refinement, not the dominant risk to viability."],
      ["That the outlay is exactly £4.0m and not £4.01m", false, "Immaterial precision; the anchor-contract risk dominates."],
    ],
  ),
  mc(
    {
      id: "cs-prop-4",
      topicId: "t-cs-prop",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A supplier proposes that Helios pre-pays £2.0m for a three-year fuel-hedging arrangement, promising 'guaranteed savings of £0.9m per year'. The proposal is on a single slide with no breakdown of how the saving is calculated and no comparison fuel-price scenario.",
      stem: "What is the most appropriate first step in evaluating this proposal?",
      explanation:
        "Before accepting a headline saving, challenge the basis of the claim: what assumptions, fuel-price scenario and baseline produce £0.9m? A 'guaranteed' saving with no workings is unverifiable. Good evaluation interrogates the assumptions behind a vendor's numbers before modelling NPV or recommending.",
      relatedConcepts: ["Assumption challenge", "Evaluating vendor claims"],
    },
    [
      ["Ask for the assumptions and baseline behind the £0.9m claim before relying on it", true, "Correct — an unsupported 'guaranteed' saving must be substantiated before evaluation."],
      ["Accept the £0.9m saving and compute the NPV immediately", false, "Modelling on an unverified input gives a false precision; challenge it first."],
      ["Reject the proposal outright because hedging is always speculative", false, "Outright rejection without evaluation is as poor as uncritical acceptance."],
      ["Recommend the deal because a guarantee removes all risk", false, "A vendor 'guarantee' does not remove counterparty or basis risk and is unverified here."],
    ],
  ),
  calc({
    id: "cs-prop-5",
    topicId: "t-cs-prop",
    difficulty: "medium",
    scenario:
      "The fuel-hedging proposal: pre-pay £2.0m now, claimed saving of £0.9m per year for 3 years. Ignore the time value of money for this simple screening test.",
    stem: "On the claimed figures, what is the simple (undiscounted) payback period in years, to two decimal places?",
    explanation:
      "Simple payback = initial outlay / annual cash saving. A quick screen before any discounted analysis.",
    workedSolution: "Payback = 2.0 / 0.9 = 2.222 ≈ 2.22 years — recovered within the 3-year term on the claimed figures, but only if the £0.9m saving is real.",
    relatedConcepts: ["Payback period", "Screening proposals"],
    numericAnswer: 2.22,
    numericTolerance: 0.03,
    unit: "years",
  }),
  mc(
    {
      id: "cs-prop-6",
      topicId: "t-cs-prop",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Two depot proposals: Project North has NPV +£0.76m with a sensitivity margin of 16% on inflows; Project South has NPV +£0.81m but a sensitivity margin of only 4% and depends on an untested new market.",
      stem: "What is the best recommendation to the board, with reasoning?",
      explanation:
        "South's marginally higher NPV is far more fragile — a 4% fall in inflows wipes it out, and it relies on an untested market. North offers a comparable return with a much greater margin of safety. Judgement at Advanced weighs risk and robustness, not just the largest NPV.",
      relatedConcepts: ["Risk-adjusted decision", "Sensitivity in recommendations"],
    },
    [
      ["Prefer North: a similar NPV with a far wider safety margin and less reliance on an untested market", true, "Correct — robustness and risk matter, not just the slightly higher NPV."],
      ["Prefer South because it has the higher NPV", false, "Its NPV is fragile (4% margin) and rests on an untested market — higher NPV alone is not decisive."],
      ["Reject both because neither NPV exceeds £1m", false, "There is no such threshold; both are value-adding and the choice is about risk."],
      ["Be indifferent — the NPVs are close so risk is irrelevant", false, "The sensitivity margins differ sharply; risk is central to the recommendation."],
    ],
  ),

  // ── Strategic options & recommendations — t-cs-strat
  mc(
    {
      id: "cs-strat-1",
      topicId: "t-cs-strat",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Helios faces three growth options: (a) organic roll-out of temperature-controlled depots; (b) acquiring a smaller rival, ChillFreight, that already has cold-chain capability and customer contracts; (c) a joint venture with a supermarket group. Helios is cash-constrained and has limited cold-chain expertise in-house.",
      stem: "Given Helios's constraints, which factor most strongly supports the acquisition option over organic roll-out?",
      explanation:
        "Acquisition brings capability and contracts that Helios lacks, faster than building organically — directly addressing the expertise gap and speed to market. The trade-off is cash and integration risk, but on the stated constraints (limited in-house cold-chain skill, need for speed) acquiring proven capability is the strongest argument.",
      relatedConcepts: ["Strategic options", "Build vs buy"],
    },
    [
      ["It rapidly supplies the cold-chain capability and contracts Helios lacks in-house", true, "Correct — acquisition closes the capability gap and accelerates entry, the key constraints stated."],
      ["It requires the least cash of the three options", false, "Acquisition is typically the most cash-intensive; that is its main drawback here."],
      ["It carries no integration or cultural risk", false, "Acquisitions carry significant integration risk; the case for them is capability/speed, not low risk."],
      ["It avoids any need to evaluate ChillFreight's financials", false, "Due diligence on the target's financials is essential, not avoidable."],
    ],
  ),
  mc(
    {
      id: "cs-strat-2",
      topicId: "t-cs-strat",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A candidate evaluating Helios's three options writes three separate descriptions but never states which option to pursue, nor links the choice to Helios's stated objective of a return to double-digit growth within three years.",
      stem: "What is the principal weakness of this answer at Advanced level?",
      explanation:
        "Describing options without recommending one, and without anchoring to the company's objective, fails the 'Concluding, Recommending & Communicating' skill. Advanced answers must reach a justified recommendation that serves the client's stated goal — analysis without a decision is incomplete.",
      relatedConcepts: ["Recommendation", "Linking to objectives"],
    },
    [
      ["It analyses options but fails to recommend one linked to the company's objective", true, "Correct — Advanced requires a justified, objective-aligned recommendation, not just description."],
      ["It considers too few options", false, "Three options is reasonable; the failing is the absence of a recommendation."],
      ["It uses ratios that are not relevant to strategy", false, "The scenario does not mention ratios; the issue is the missing conclusion."],
      ["Strategic questions should never reach a single recommendation", false, "They should — the recipient needs a clear, reasoned recommendation."],
    ],
  ),
  mc(
    {
      id: "cs-strat-3",
      topicId: "t-cs-strat",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Helios's board is attracted to the supermarket joint venture because it locks in a large customer. However, the JV terms would give the supermarket exclusivity over Helios's new cold-chain capacity, and a 30-day termination right after year one.",
      stem: "Which strategic risk should most prominently shape the recommendation on the JV?",
      explanation:
        "Exclusivity plus a short-notice termination right creates dangerous dependency: Helios would build capacity dedicated to one partner who can walk away at 30 days' notice, leaving stranded assets and customer concentration. The headline benefit (a large locked-in customer) is undercut by the asymmetric, fragile terms.",
      relatedConcepts: ["Customer concentration", "Strategic dependency"],
    },
    [
      ["Dependency and stranded-asset risk: dedicated capacity for a partner who can exit at 30 days' notice", true, "Correct — exclusivity plus easy exit creates concentration and stranded-asset risk that should dominate the advice."],
      ["The JV will breach competition law automatically", false, "Nothing stated indicates an automatic breach; the dominant issue is commercial dependency."],
      ["JVs always destroy shareholder value and should be rejected", false, "Overgeneralisation; the specific terms drive the risk, not the JV form itself."],
      ["The 30-day termination right is a benefit because Helios can also exit", false, "The asymmetry favours the supermarket once Helios has sunk capital into dedicated capacity."],
    ],
  ),
  mc(
    {
      id: "cs-strat-4",
      topicId: "t-cs-strat",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Helios's stated strategy is premium, reliable, temperature-controlled logistics for high-value pharmaceutical and food clients. A new proposal is to add a low-cost, no-frills parcel service to chase volume in a price-competitive segment.",
      stem: "What is the strongest strategic concern about this proposal?",
      explanation:
        "Pursuing low-cost volume alongside a premium, reliability-led positioning risks a 'stuck in the middle' problem — diluting the premium brand and confusing the value proposition without the cost base to win on price. Strategic coherence with the existing positioning is the key test.",
      relatedConcepts: ["Strategic fit", "Generic strategy / stuck in the middle"],
    },
    [
      ["It conflicts with Helios's premium positioning, risking a 'stuck in the middle' dilution", true, "Correct — mixing premium and no-frills can erode differentiation without a cost advantage."],
      ["Low-cost services are always more profitable, so it should be adopted", false, "Profitability is not given, and the strategic-fit concern is the central issue."],
      ["Adding services never affects an existing brand", false, "Brand and positioning can be materially diluted by an incongruent service."],
      ["The proposal is irrelevant because it is not in the Advance Information", false, "Exam-day proposals are exactly what must be evaluated; AI relevance is not the test."],
    ],
  ),
  mc(
    {
      id: "cs-strat-5",
      topicId: "t-cs-strat",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Helios's directors want to recommend the ChillFreight acquisition. Due diligence reveals ChillFreight has 70% of its revenue from one retailer whose contract expires in eight months, and ageing refrigeration units needing £2m of capex within two years.",
      stem: "How should these findings shape the recommendation?",
      explanation:
        "The findings materially change the value and risk: heavy customer concentration with an imminent contract expiry threatens the very revenue being acquired, and undisclosed capex reduces net benefit. A sound recommendation reflects these — e.g. conditional on contract renewal and a price reduction for the capex — rather than ignoring them.",
      relatedConcepts: ["Due diligence", "Conditioning a recommendation"],
    },
    [
      ["Make any recommendation conditional — e.g. on contract renewal and a price adjustment for the capex", true, "Correct — material due-diligence findings should condition or reprice the deal, not be ignored."],
      ["Proceed unchanged because the strategic rationale still holds", false, "The findings hit the acquired revenue and net benefit; ignoring them would be poor judgement."],
      ["Abandon the acquisition immediately without conditions", false, "Outright abandonment ignores that the issues may be addressable via price/conditions."],
      ["Treat the £2m capex as the new buyer's problem and disregard it", false, "Foreseeable capex reduces the net value to Helios and must inform the price."],
    ],
  ),
  calc({
    id: "cs-strat-6",
    topicId: "t-cs-strat",
    difficulty: "hard",
    scenario:
      "ChillFreight is offered at an enterprise value of £18.0m. It earns EBITDA of £3.0m. Comparable listed cold-chain logistics businesses trade on an average EV/EBITDA multiple of 5.0x.",
    stem: "On the comparable multiple, by how much (in £m) does the asking price exceed a fair value, to one decimal place?",
    explanation:
      "Implied fair EV = EBITDA × comparable multiple. The premium is the asking price less that implied value — a key input to whether the offer is acceptable.",
    workedSolution: "Implied EV = 3.0 × 5.0 = £15.0m. Premium = 18.0 − 15.0 = £3.0m (i.e. ~20% above comparable value) — supports negotiating the price down.",
    relatedConcepts: ["EV/EBITDA", "Acquisition pricing"],
    numericAnswer: 3.0,
    numericTolerance: 0.1,
    unit: "£m",
  }),

  // ── Ethics & business-trust / data-integrity issues — t-cs-eth
  mc(
    {
      id: "cs-eth-1",
      topicId: "t-cs-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "While preparing Helios's depot-acquisition analysis, you notice the finance director has reclassified £0.9m of recurring depot running costs as 'one-off restructuring' in the management accounts, which lifts the reported operating margin used in the board paper.",
      stem: "What is the primary ethical issue, and the appropriate first response?",
      explanation:
        "Reclassifying recurring costs as one-off misstates underlying performance — an integrity and objectivity issue threatening the reliability of information given to the board. The first step is to gather the facts and raise it internally (with the FD / through appropriate channels), not to ignore it or restate the numbers silently. Threats: self-interest/pressure; safeguard: escalate.",
      relatedConcepts: ["Integrity", "Data integrity / misclassification"],
    },
    [
      ["An integrity/data-integrity issue — clarify the facts and raise it through the appropriate internal channel", true, "Correct — misclassification misleads the board; gather facts and escalate properly."],
      ["No issue — classification is a matter of management judgement", false, "Reclassifying clearly recurring costs to flatter margin is not legitimate judgement; it misstates performance."],
      ["Quietly correct the figures yourself and say nothing", false, "Silent correction bypasses governance and does not address the underlying conduct."],
      ["Resign immediately without raising the matter", false, "Premature resignation skips the proper step of clarifying facts and escalating internally."],
    ],
  ),
  mc(
    {
      id: "cs-eth-2",
      topicId: "t-cs-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Helios's sales director offers you, as the reporting accountant on the acquisition, two tickets to a major sporting event 'just as a thank-you', shortly before you finalise the recommendation on whether to proceed with a deal she is championing.",
      stem: "Which ethical threat is most directly raised, and what is the right action?",
      explanation:
        "A gift from someone with a stake in the outcome creates a self-interest and familiarity threat to objectivity, and the timing heightens it. Unless trivial and inconsequential, it should be declined (or declared and assessed against policy). The test is whether a reasonable, informed observer would see objectivity as compromised.",
      relatedConcepts: ["Objectivity", "Self-interest threat / gifts"],
    },
    [
      ["Self-interest/familiarity threat to objectivity — decline (or declare and assess) the gift", true, "Correct — a non-trivial gift from an interested party near the decision compromises objectivity."],
      ["Confidentiality threat — sign an NDA", false, "The issue is objectivity from a gift, not confidentiality."],
      ["No threat — accepting gifts is normal courtesy", false, "Given the timing and value, a reasonable observer would question objectivity; it is not trivial."],
      ["Accept the tickets but work harder to stay neutral", false, "Good intentions do not remove the perceived threat; the gift itself must be addressed."],
    ],
  ),
  mc(
    {
      id: "cs-eth-3",
      topicId: "t-cs-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Helios markets its cold-chain service as guaranteeing '100% temperature compliance', but internal data shows 3% of shipments breached the required range last quarter. The marketing director wants to keep the claim in a new pharmaceutical-client pitch.",
      stem: "Beyond marketing, why is this primarily a business-trust and integrity concern?",
      explanation:
        "Publishing a known-false performance claim to safety-critical pharmaceutical clients undermines trust and integrity, and could expose Helios to patient-safety and legal/regulatory consequences. The fundamental principle of integrity (being truthful) and the public-interest dimension make this far more than a marketing nuance.",
      relatedConcepts: ["Integrity", "Business trust / misleading claims"],
    },
    [
      ["It is a knowingly false claim to safety-critical clients, breaching integrity and eroding trust", true, "Correct — truthfulness and the patient-safety/public-interest dimension make this an integrity issue."],
      ["It is only a presentational choice with no ethical content", false, "Stating a known-false compliance figure to clients is a clear integrity breach."],
      ["It is acceptable because competitors make similar claims", false, "Others' conduct does not justify a knowingly false statement."],
      ["It matters only if a shipment is actually rejected", false, "The misrepresentation is wrong regardless of whether harm has yet crystallised."],
    ],
  ),
  mc(
    {
      id: "cs-eth-4",
      topicId: "t-cs-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "The board paper's revenue forecast for the new depot is supported by a spreadsheet you are asked to rely on. You find the spreadsheet's growth driver is hard-coded to 12% in a hidden cell, overriding the formula that links to the (much lower) market-growth assumption stated in the narrative.",
      stem: "What is the key data-integrity issue and the appropriate response?",
      explanation:
        "A hard-coded override that contradicts the stated assumption is a model-integrity failure: the output does not reflect the disclosed methodology and overstates the forecast. The response is to flag the discrepancy, correct/transparently rerun the model on the stated assumption, and not present numbers you know are unsupported.",
      relatedConcepts: ["Data integrity", "Model risk / hard-coding"],
    },
    [
      ["A model-integrity failure — flag it and rerun transparently on the stated assumption", true, "Correct — a hidden override that contradicts the disclosed assumption must be corrected, not relied on."],
      ["Nothing to do — hard-coding is standard spreadsheet practice", false, "A hidden override contradicting the stated basis is a serious integrity defect, not standard practice."],
      ["Use the 12% because it gives a more favourable result", false, "Knowingly using an unsupported figure to flatter the case is an integrity breach."],
      ["Delete the spreadsheet and rely on the narrative alone", false, "Destroying the working is improper; the fix is to correct and document, not delete."],
    ],
  ),
  mc(
    {
      id: "cs-eth-5",
      topicId: "t-cs-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Helios collects detailed GPS and temperature telemetry from its fleet. The operations director proposes selling this granular movement data, which can reveal individual clients' delivery patterns, to a third-party analytics firm without informing clients.",
      stem: "What is the most significant concern to raise to the board?",
      explanation:
        "Selling client-identifiable data without consent raises data-protection, confidentiality and trust issues — potential breach of client contracts and data-protection law, and serious reputational damage if clients learn their patterns were sold. The trust/confidentiality dimension dominates any incremental revenue.",
      relatedConcepts: ["Confidentiality", "Data protection / business trust"],
    },
    [
      ["Selling client-identifiable data without consent breaches confidentiality/data protection and trust", true, "Correct — confidentiality, legal compliance and reputational trust outweigh the data-sale revenue."],
      ["The only concern is getting a high enough price for the data", false, "Price is irrelevant if the sale breaches confidentiality and data-protection obligations."],
      ["There is no concern because Helios owns the telemetry hardware", false, "Owning the hardware does not grant the right to sell client-identifiable data without consent."],
      ["It is acceptable as long as the analytics firm is reputable", false, "The firm's reputation does not cure the lack of client consent and the trust breach."],
    ],
  ),
  mc(
    {
      id: "cs-eth-6",
      topicId: "t-cs-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "You have raised the cost-reclassification concern (cs-eth-1) with the finance director, who tells you to 'leave it — the board paper goes out tomorrow and the numbers are close enough'. Helios's audit committee has an independent chair, and the firm has a confidential ethics helpline.",
      stem: "Given the FD's response, what is the most appropriate next step?",
      explanation:
        "When raising a matter with the responsible person fails to resolve it, the ethical process is to escalate to a higher authority — here the independent audit-committee chair — and/or seek advice (ethics helpline / professional body). Dropping it would mean associating with misleading information; going public externally is premature.",
      relatedConcepts: ["Escalation", "Ethical conflict resolution"],
    },
    [
      ["Escalate to the independent audit-committee chair and/or seek advice via the ethics helpline", true, "Correct — when the responsible person will not act, escalate internally and take advice."],
      ["Drop the matter since the FD has overruled you", false, "Accepting an overrule would mean being associated with misleading information."],
      ["Post the concern on social media to force action", false, "External disclosure is premature and breaches confidentiality before internal routes are exhausted."],
      ["Alter the board paper yourself overnight without telling anyone", false, "Unilateral covert changes bypass governance and are themselves improper."],
    ],
  ),
];

// BST (Business Strategy & Technology) — Professional Level question bank.
// Scenario-based application of strategy frameworks (PESTEL, Five Forces, SWOT,
// value chain, BCG, Ansoff, generic strategies, SFA, balanced scorecard, change
// management) and technology/data strategy (digital, big data, cyber, AI).
// Original questions (not copied from ICAEW past papers). BST is non-numeric —
// all items are multiple-choice / scenario, built with mc().
import { mc, calc } from "@/data/question-helpers";
import type { Question } from "@/types/domain";

export const bstQuestions: Question[] = [
  // ──────────────────────────────────────────────────────────────────────────
  // Strategic analysis — t-bst-an (PESTEL, Five Forces, SWOT, value chain, BCG)
  // ──────────────────────────────────────────────────────────────────────────
  mc(
    {
      id: "bs-an-1",
      topicId: "t-bst-an",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Helios Energy Ltd supplies electricity to UK households. The directors are concerned about a proposed carbon levy, an ageing population's changing usage patterns, rising interest rates on its capital-intensive grid investment, and new smart-meter technology.",
      stem: "These four concerns map most directly to which PESTEL factors, respectively?",
      explanation:
        "A carbon levy is a Political/Legal intervention; an ageing population is Social; interest rates are Economic; smart meters are Technological. Classifying factors correctly is the first step in a PESTEL analysis.",
      relatedConcepts: ["PESTEL", "Macro-environment"],
    },
    [
      ["Legal/Political, Social, Economic, Technological", true, "Correct — levy (Legal/Political), demographics (Social), rates (Economic), smart meters (Technological)."],
      ["Economic, Technological, Legal, Social", false, "A carbon levy is a legal/political measure, not economic; this mislabels the factors."],
      ["Social, Legal, Technological, Economic", false, "Interest rates are Economic and smart meters are Technological — this pairing is reversed."],
      ["Environmental, Economic, Economic, Legal", false, "A carbon levy is enacted through law/policy, and smart meters are a technological factor."],
    ],
  ),
  mc(
    {
      id: "bs-an-2",
      topicId: "t-bst-an",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "The branded soft-drinks industry has two dominant global producers, fiercely loyal customers, very high advertising and bottling-scale requirements, and few credible substitutes for a chilled fizzy drink on a hot day. Retailers, however, are increasingly consolidated grocery chains buying in huge volumes.",
      stem: "Applying Porter's Five Forces, which force represents the GREATEST threat to producer profitability here?",
      explanation:
        "Brand loyalty and scale barriers weaken the threat of entry and substitutes. The clearest threat is the bargaining power of buyers: consolidated grocery chains buying in volume can squeeze producer margins.",
      relatedConcepts: ["Porter's Five Forces", "Buyer power"],
    },
    [
      ["Bargaining power of buyers", true, "Correct — consolidated, high-volume retailers can exert strong downward pressure on prices."],
      ["Threat of new entrants", false, "High advertising and bottling-scale requirements make entry barriers high, weakening this force."],
      ["Threat of substitutes", false, "The scenario states there are few credible substitutes, so this force is weak."],
      ["Bargaining power of suppliers", false, "Suppliers are not highlighted as concentrated or powerful in the scenario."],
    ],
  ),
  mc(
    {
      id: "bs-an-3",
      topicId: "t-bst-an",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Marlow Furniture Ltd has a respected craftsmanship brand (a strength) and loyal trade customers, but relies on a single overseas timber supplier. A rival has just launched a cheaper flat-pack range, while demand for sustainable home furnishings is growing fast.",
      stem: "In a SWOT analysis, the growing demand for sustainable furnishings is best classified as:",
      explanation:
        "SWOT splits factors into internal (strengths/weaknesses) and external (opportunities/threats). Growing market demand is an external factor the firm could exploit — an opportunity. The single supplier is a weakness; the rival's range is a threat.",
      relatedConcepts: ["SWOT", "Opportunities vs threats"],
    },
    [
      ["An opportunity", true, "Correct — it is an external, favourable trend Marlow could exploit."],
      ["A strength", false, "Strengths are internal capabilities; market demand is external."],
      ["A weakness", false, "Weaknesses are internal shortcomings, not external demand trends."],
      ["A threat", false, "Growing demand is favourable, so it is an opportunity, not a threat."],
    ],
  ),
  mc(
    {
      id: "bs-an-4",
      topicId: "t-bst-an",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Vantage Logistics Ltd wants to identify where it adds most value. Its proprietary route-optimisation software lets it deliver faster than rivals at lower fuel cost, and this capability supports every delivery contract it wins.",
      stem: "In Porter's value chain, the route-optimisation software is best described as which type of activity?",
      explanation:
        "The value chain distinguishes primary activities (inbound logistics, operations, outbound logistics, marketing & sales, service) from support activities (firm infrastructure, HR, technology development, procurement). Software that enhances delivery is technology development — a support activity that underpins the primary outbound-logistics activity.",
      relatedConcepts: ["Value chain", "Support activities"],
    },
    [
      ["A support activity (technology development)", true, "Correct — technology development is a support activity that enhances primary activities."],
      ["A primary activity (operations)", false, "The software develops capability across the chain; it is a support, not a core operational, activity."],
      ["A primary activity (outbound logistics)", false, "Delivery is the outbound-logistics primary activity; the software supports it but is itself a support activity."],
      ["A support activity (procurement)", false, "Procurement concerns buying inputs, not developing in-house technology."],
    ],
  ),
  mc(
    {
      id: "bs-an-5",
      topicId: "t-bst-an",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Apex Software plc reviews its portfolio. Product A holds the leading share of a fast-growing cloud-security market. Product B dominates a mature, slow-growing payroll market and generates strong cash. Product C has a small share of a declining on-premise market.",
      stem: "In the BCG matrix, how should products A, B and C be classified?",
      explanation:
        "BCG classifies on relative market share and market growth: high share/high growth = star (A); high share/low growth = cash cow (B); low share/low growth = dog (C); low share/high growth = question mark.",
      relatedConcepts: ["BCG matrix", "Portfolio analysis"],
    },
    [
      ["A = star, B = cash cow, C = dog", true, "Correct — high-share/high-growth, high-share/low-growth, low-share/low-growth respectively."],
      ["A = cash cow, B = star, C = question mark", false, "A is in a fast-growing market with high share — a star, not a cash cow."],
      ["A = question mark, B = dog, C = cash cow", false, "B has high share in a mature market (a cash cow), and C has low share in a declining market (a dog)."],
      ["A = star, B = dog, C = cash cow", false, "B's high share and strong cash in a mature market make it a cash cow, not a dog."],
    ],
  ),
  mc(
    {
      id: "bs-an-6",
      topicId: "t-bst-an",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A boutique law firm has deep expertise in a niche area of shipping law, built over 30 years, embodied in tacit know-how that competitors have repeatedly failed to replicate and that clients value highly.",
      stem: "Using the resource-based view (VRIO/VRIN), this expertise is most likely a source of sustainable competitive advantage because it is:",
      explanation:
        "The resource-based view holds that sustainable advantage comes from resources that are valuable, rare, and hard to imitate or substitute. Tacit, hard-to-replicate know-how that clients value meets these criteria, unlike easily copied or freely available resources.",
      relatedConcepts: ["Resource-based view", "VRIN/VRIO"],
    },
    [
      ["Valuable, rare and difficult to imitate", true, "Correct — VRIN/VRIO resources that are valuable, rare and inimitable yield sustainable advantage."],
      ["Tangible and easily measured on the balance sheet", false, "Balance-sheet recognition is irrelevant; intangible tacit knowledge is exactly what is hard to imitate."],
      ["Readily available to all firms in the market", false, "If readily available it would not be rare, and could not confer advantage."],
      ["Quickly substitutable by new technology", false, "Substitutability would undermine, not create, sustainable advantage."],
    ],
  ),
  mc(
    {
      id: "bs-an-7",
      topicId: "t-bst-an",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "In the UK retail-banking market, switching current accounts is administratively easy and incentivised, several challenger banks have entered with low-cost app-only models, and fintech payment apps let customers bypass banks for everyday transactions.",
      stem: "Which combination of Porter's forces is MOST intensifying competition for incumbent banks here?",
      explanation:
        "Easy switching raises buyer power; app-only challengers raise the threat of new entrants; fintech payment apps act as substitutes. Together these three forces intensify competition. Supplier power is not the issue described.",
      relatedConcepts: ["Porter's Five Forces", "Competitive rivalry"],
    },
    [
      ["Buyer power, threat of entry and threat of substitutes", true, "Correct — easy switching, challenger entry and fintech substitutes all bear down on incumbents."],
      ["Supplier power and threat of substitutes only", false, "Supplier power is not described; buyer power and entry threat are the dominant pressures."],
      ["Threat of entry and supplier power only", false, "Substitutes (fintech apps) and buyer power (easy switching) are both clearly present and omitted here."],
      ["Buyer power and supplier power only", false, "Supplier power is not raised, while entry threat and substitutes are central."],
    ],
  ),

  // ──────────────────────────────────────────────────────────────────────────
  // Strategic choice — t-bst-choice (Ansoff, generic strategies, SFA)
  // ──────────────────────────────────────────────────────────────────────────
  mc(
    {
      id: "bs-choice-1",
      topicId: "t-bst-choice",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Brightwell Drinks Ltd already sells its existing energy drink in the UK. To grow, it plans to launch the same drink, unchanged, in Germany and France for the first time.",
      stem: "Using Ansoff's matrix, this growth strategy is:",
      explanation:
        "Ansoff classifies growth by product (existing/new) and market (existing/new). Selling an existing product in new geographic markets is market development.",
      relatedConcepts: ["Ansoff matrix", "Market development"],
    },
    [
      ["Market development", true, "Correct — an existing product taken into new (overseas) markets."],
      ["Market penetration", false, "Penetration means selling more of an existing product in existing markets, not new ones."],
      ["Product development", false, "The product is unchanged, so this is not product development."],
      ["Diversification", false, "Diversification means new products in new markets; here the product is unchanged."],
    ],
  ),
  mc(
    {
      id: "bs-choice-2",
      topicId: "t-bst-choice",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Coredata Ltd, a payroll-software firm, plans to acquire a chain of physical fitness studios — an industry in which it has no experience and which shares no technology, customers or supply chain with its current business.",
      stem: "Using Ansoff, this move is best described as, and its principal risk is:",
      explanation:
        "New products in new markets is diversification — specifically unrelated (conglomerate) diversification here. Its principal risk is the highest of the Ansoff options because the firm lacks synergy and experience in the new field.",
      relatedConcepts: ["Ansoff matrix", "Diversification risk"],
    },
    [
      ["Diversification — carrying the highest risk of the Ansoff options", true, "Correct — unrelated new products and markets give no synergy and the greatest risk."],
      ["Product development — low risk because it uses existing customers", false, "There are no shared customers; this is diversification, not product development."],
      ["Market penetration — low risk in a familiar market", false, "The fitness market is entirely unfamiliar; this is not penetration."],
      ["Market development — moderate risk using existing products", false, "It involves a new product as well as a new market, so it is diversification."],
    ],
  ),
  mc(
    {
      id: "bs-choice-3",
      topicId: "t-bst-choice",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Thrift Stores Ltd operates a no-frills grocery chain. It minimises range, automates checkouts, sources own-label goods at scale, and undercuts every rival on price across the whole market.",
      stem: "Which of Porter's generic strategies is Thrift Stores pursuing?",
      explanation:
        "Porter's generic strategies are cost leadership, differentiation, and focus (cost or differentiation). Competing market-wide on lowest cost/price is cost leadership.",
      relatedConcepts: ["Generic strategies", "Cost leadership"],
    },
    [
      ["Cost leadership", true, "Correct — broad-market competition on lowest cost and price."],
      ["Differentiation", false, "Differentiation competes on distinctive features at a premium, not on lowest price."],
      ["Focus differentiation", false, "Thrift competes across the whole market, not a narrow niche, and on cost not distinctiveness."],
      ["Cost focus", false, "Cost focus targets a narrow segment; Thrift targets the whole market."],
    ],
  ),
  mc(
    {
      id: "bs-choice-4",
      topicId: "t-bst-choice",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Atelier Ltd makes hand-finished luxury watches, charging a premium across the entire market on the basis of design, brand and craftsmanship. To cut costs, a consultant suggests it also slash prices to undercut mass-market rivals while keeping its premium positioning.",
      stem: "What is the principal danger in the consultant's suggestion, in Porter's terms?",
      explanation:
        "Porter warns that firms attempting to be both lowest-cost and differentiated without a clear focus risk being 'stuck in the middle' — losing the premium that justifies costs while failing to be the genuine cost leader. The two stances pull in opposite directions.",
      relatedConcepts: ["Generic strategies", "Stuck in the middle"],
    },
    [
      ["It risks being 'stuck in the middle', losing both premium and cost advantage", true, "Correct — mixing differentiation and cost leadership without focus erodes the basis of advantage."],
      ["It guarantees cost leadership and differentiation simultaneously", false, "Porter argues this combination is usually unsustainable, not guaranteed."],
      ["It converts the firm into a focus strategist automatically", false, "Focus means targeting a narrow segment; cutting prices market-wide does not create focus."],
      ["It has no strategic downside provided volumes rise", false, "The danger is structural — undercutting on price undermines the premium positioning regardless of volume."],
    ],
  ),
  mc(
    {
      id: "bs-choice-5",
      topicId: "t-bst-choice",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Northwind plc is evaluating a proposed acquisition. The board asks: Does it fit our strategic position and exploit our strengths? Can we fund and resource it, and do we have the skills? Will shareholders accept the risk and return, and how will key stakeholders react?",
      stem: "These three questions correspond, in order, to which evaluation criteria?",
      explanation:
        "Strategic options are tested against Suitability (does it fit the strategic position?), Feasibility (can it be resourced and funded?), and Acceptability (do the risk, return and stakeholder reactions make it acceptable?).",
      relatedConcepts: ["Suitability, feasibility, acceptability", "Strategy evaluation"],
    },
    [
      ["Suitability, feasibility, acceptability", true, "Correct — fit (suitability), resources (feasibility), risk/return/stakeholders (acceptability)."],
      ["Feasibility, acceptability, suitability", false, "Strategic fit is suitability and comes first; the ordering here is wrong."],
      ["Acceptability, suitability, feasibility", false, "The risk/return/stakeholder question is acceptability, which is listed third, not first."],
      ["Suitability, acceptability, feasibility", false, "The funding/skills question is feasibility (second), not acceptability."],
    ],
  ),
  mc(
    {
      id: "bs-choice-6",
      topicId: "t-bst-choice",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Two firms in the same sector consider combining. Ravello Ltd makes the brakes that Strada Ltd, a car assembler, fits to its vehicles. They are at different stages of the same supply chain.",
      stem: "A merger between Ravello and Strada would be an example of:",
      explanation:
        "Integration along the supply chain is vertical (a supplier and customer combining); combining with a competitor at the same stage is horizontal; combining with an unrelated business is conglomerate.",
      relatedConcepts: ["Vertical integration", "Acquisitions"],
    },
    [
      ["Vertical integration", true, "Correct — a supplier (brakes) and its customer (assembler) at different supply-chain stages combine."],
      ["Horizontal integration", false, "Horizontal integration is between competitors at the same stage; these are at different stages."],
      ["Conglomerate diversification", false, "The businesses are related along one supply chain, so it is not conglomerate."],
      ["A strategic alliance", false, "A merger is full integration, not a looser cooperative alliance."],
    ],
  ),
  mc(
    {
      id: "bs-choice-7",
      topicId: "t-bst-choice",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Lumen Ltd wants rapid access to a new market and complementary technology but is unwilling to bear the full cost and risk of acquisition or to lose its independence. A potential partner has the same concerns.",
      stem: "Which method of strategic development best fits Lumen's requirements?",
      explanation:
        "A joint venture / strategic alliance lets firms share cost, risk and capabilities for a specific purpose while retaining independence — fitting Lumen's reluctance to acquire outright or organically build slowly.",
      relatedConcepts: ["Strategic alliances", "Methods of development"],
    },
    [
      ["A joint venture or strategic alliance", true, "Correct — shares cost and risk and gives fast access while preserving independence."],
      ["Full acquisition of the partner", false, "Lumen explicitly wants to avoid the full cost and risk of acquisition."],
      ["Purely organic (internal) development", false, "Organic growth is slow and would not give the rapid market and technology access required."],
      ["Divestment of the relevant division", false, "Divestment is a withdrawal strategy, the opposite of the growth Lumen seeks."],
    ],
  ),

  // ──────────────────────────────────────────────────────────────────────────
  // Implementation & change — t-bst-impl (change mgmt, balanced scorecard, KPIs)
  // ──────────────────────────────────────────────────────────────────────────
  mc(
    {
      id: "bs-impl-1",
      topicId: "t-bst-impl",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Orion Manufacturing plc is designing a balanced scorecard. Management proposes the measure 'percentage of staff completing accredited training and the rate of process-improvement suggestions implemented'.",
      stem: "This measure belongs to which perspective of the balanced scorecard?",
      explanation:
        "Kaplan and Norton's balanced scorecard has four perspectives: financial, customer, internal business process, and learning & growth (innovation). Staff training and improvement suggestions are learning & growth measures.",
      relatedConcepts: ["Balanced scorecard", "Learning and growth"],
    },
    [
      ["Learning and growth", true, "Correct — training and innovation capability sit in the learning & growth perspective."],
      ["Financial", false, "Financial measures concern returns, margins and cost; training rates are not financial."],
      ["Customer", false, "Customer measures concern satisfaction, retention and market share, not internal training."],
      ["Internal business process", false, "Process measures track cycle time, quality and efficiency; staff capability is learning & growth."],
    ],
  ),
  mc(
    {
      id: "bs-impl-2",
      topicId: "t-bst-impl",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Caldera Ltd is rolling out a major restructuring. The CEO complains that, after announcing the change once, middle managers reverted to old ways within weeks, treating the new structure as a passing fad.",
      stem: "Using Kotter's model of change, which step has Caldera most clearly failed to address?",
      explanation:
        "Kotter's eight steps include anchoring change in the culture and not letting up. Reversion to old ways suggests the change was not embedded/anchored and momentum was not sustained — a single announcement is insufficient. Establishing urgency and a guiding coalition are necessary but the symptom described is failure to consolidate and anchor.",
      relatedConcepts: ["Kotter's eight steps", "Embedding change"],
    },
    [
      ["Anchoring (embedding) the change in the culture and sustaining momentum", true, "Correct — reversion to old ways shows the change was never consolidated or anchored."],
      ["Forming a guiding coalition before starting", false, "The problem is reversion after launch, which points to failure to embed, not to coalition-building at the outset."],
      ["Creating a vision statement only", false, "A vision alone would not be enough, but the symptom — reverting after weeks — is an anchoring failure."],
      ["Hiring external consultants to lead delivery", false, "Kotter does not require external consultants; the gap is embedding the change, not staffing."],
    ],
  ),
  mc(
    {
      id: "bs-impl-3",
      topicId: "t-bst-impl",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Vertex Ltd sets a target to 'increase customer satisfaction'. The board wants the KPI to be unambiguous, trackable, realistic and tied to a deadline so progress can be reviewed quarterly.",
      stem: "Which restatement best converts this into a SMART objective?",
      explanation:
        "SMART objectives are Specific, Measurable, Achievable, Relevant and Time-bound. Only an objective with a quantified target and a deadline meets all five.",
      relatedConcepts: ["SMART objectives", "KPIs"],
    },
    [
      ["Raise the customer-satisfaction score from 78% to 85% by 31 December 20X5", true, "Correct — specific, measurable, achievable, relevant and time-bound."],
      ["Make customers as happy as possible going forward", false, "This is vague and has no measure or deadline, so it is not SMART."],
      ["Improve satisfaction whenever resources allow", false, "No quantified target and no deadline — it fails 'measurable' and 'time-bound'."],
      ["Become the best company in the world for service", false, "Aspirational but unmeasurable and not realistically bounded."],
    ],
  ),
  mc(
    {
      id: "bs-impl-4",
      topicId: "t-bst-impl",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Sentinel Ltd's call-centre staff are rewarded purely on the number of calls closed per hour. Average handling time has fallen sharply, but repeat-contact rates and complaints have risen, and customer-retention has dropped.",
      stem: "What does this most clearly illustrate about performance measurement?",
      explanation:
        "A single, narrowly chosen measure can drive dysfunctional behaviour — staff optimise the metric (calls per hour) at the expense of the real objective (resolved, satisfied customers). This is why balanced, multi-dimensional measures are recommended.",
      relatedConcepts: ["Dysfunctional behaviour", "Goal congruence"],
    },
    [
      ["A single narrow metric can cause dysfunctional behaviour and undermine the real objective", true, "Correct — staff game the call-volume target at the expense of genuine resolution and retention."],
      ["Performance measures should always be purely financial", false, "The case argues for broader, non-financial balance, not for financial-only measures."],
      ["Customer retention is irrelevant to call-centre performance", false, "Retention is exactly the outcome the narrow metric is damaging — it is highly relevant."],
      ["Faster handling time always improves overall performance", false, "Here faster handling worsened repeat contacts and retention, disproving this."],
    ],
  ),
  mc(
    {
      id: "bs-impl-5",
      topicId: "t-bst-impl",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "During a merger integration, Delta Ltd faces resistance from staff who fear job losses and distrust management's motives. A consultant recommends explaining the rationale, involving employee representatives in planning, and offering retraining and reassurance.",
      stem: "These recommendations correspond to which approaches in Kotter and Schlesinger's methods for dealing with resistance to change?",
      explanation:
        "Kotter and Schlesinger list education & communication, participation & involvement, facilitation & support, negotiation, manipulation, and coercion. Explaining the rationale = education/communication; involving representatives = participation; retraining and reassurance = facilitation/support.",
      relatedConcepts: ["Resistance to change", "Kotter and Schlesinger"],
    },
    [
      ["Education/communication, participation/involvement, and facilitation/support", true, "Correct — explain (education), involve reps (participation), retrain/reassure (facilitation)."],
      ["Coercion, manipulation and negotiation", false, "These are the more forceful methods; the consultant proposes collaborative, supportive approaches."],
      ["Negotiation, coercion and education", false, "Coercion is not proposed; the measures are education, participation and facilitation."],
      ["Manipulation, coercion and participation", false, "Manipulation and coercion are not used; communication and support dominate the proposal."],
    ],
  ),
  mc(
    {
      id: "bs-impl-6",
      topicId: "t-bst-impl",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Pinnacle plc's new strategy depends on three things succeeding: launching a new digital platform, retaining key engineers, and securing a regulatory licence. The board wants a structured way to track whether the strategy remains on course as these unfold.",
      stem: "Which monitoring concept most directly addresses the board's need?",
      explanation:
        "Identifying and tracking critical success factors (CSFs) — the few things that must go right for the strategy to succeed — with associated KPIs gives the board a structured early-warning view of whether strategy delivery is on course.",
      relatedConcepts: ["Critical success factors", "Strategic control"],
    },
    [
      ["Identifying critical success factors and linking KPIs to them", true, "Correct — CSFs capture the few things that must go right, monitored via KPIs."],
      ["Preparing a one-off historic variance report at year end", false, "A single year-end report is too late and backward-looking for tracking strategy on course."],
      ["Relying solely on the share price", false, "Share price is a lagging, noisy proxy and does not track the specific CSFs identified."],
      ["Measuring only short-term cash flow", false, "Cash flow alone ignores the platform launch, talent retention and licence — the actual CSFs."],
    ],
  ),
  mc(
    {
      id: "bs-impl-7",
      topicId: "t-bst-impl",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Meridian Ltd's strategy is sound but poorly executed: roles are unclear, the reward system still pays for old behaviours, and the IT systems do not support the new processes. A consultant uses the McKinsey 7S model to diagnose the misalignment.",
      stem: "The 7S model would describe the failure here primarily as a lack of alignment between the strategy and which elements?",
      explanation:
        "McKinsey's 7S framework (strategy, structure, systems, shared values, style, staff, skills) stresses that all elements must be aligned. Unclear roles (structure), misaligned rewards and IT (systems) are out of step with the strategy.",
      relatedConcepts: ["McKinsey 7S", "Strategic alignment"],
    },
    [
      ["Structure and systems", true, "Correct — unclear roles (structure) and reward/IT systems are misaligned with the strategy."],
      ["Shared values only", false, "The described faults are structural and systems-based, not primarily about shared values."],
      ["Style and staff only", false, "The scenario points to roles and systems (structure/systems), not leadership style or headcount."],
      ["None — the 7S model only considers strategy", false, "The whole point of 7S is that strategy must align with the other six elements, including structure and systems."],
    ],
  ),

  // ──────────────────────────────────────────────────────────────────────────
  // Technology & data strategy — t-bst-tech (digital, big data, cyber, AI)
  // ──────────────────────────────────────────────────────────────────────────
  mc(
    {
      id: "bs-tech-1",
      topicId: "t-bst-tech",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Harbour Retail Ltd, a traditional high-street chain, decides to make digital the core of how it operates: an app-first customer journey, online-offline integration, data-driven personalisation, and automated supply-chain decisions across the whole business.",
      stem: "This is best described as which kind of initiative?",
      explanation:
        "Embedding digital across the whole operating and customer model — not merely adding a website — is digital transformation. A single new app or back-office upgrade alone would be narrower digitisation, not transformation.",
      relatedConcepts: ["Digital transformation", "Digital strategy"],
    },
    [
      ["Digital transformation of the business model", true, "Correct — digital becomes core to operations and the customer model across the whole firm."],
      ["A routine hardware refresh", false, "Replacing hardware is operational maintenance, not a business-model change."],
      ["An isolated marketing campaign", false, "The change spans operations, supply chain and the customer journey, far beyond marketing."],
      ["Outsourcing the finance function", false, "Outsourcing finance is unrelated to embedding digital across the customer and operating model."],
    ],
  ),
  mc(
    {
      id: "bs-tech-2",
      topicId: "t-bst-tech",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Cobalt Insurance plc captures vast streams of telematics data from millions of vehicles, arriving continuously in many formats — GPS, video, sensor logs and text — far faster and larger than its old systems handled.",
      stem: "This situation is most directly characterised by which features of 'big data' (the classic three Vs)?",
      explanation:
        "Big data is classically described by volume (huge quantities), velocity (high speed of arrival) and variety (many formats). Telematics streams from millions of vehicles in mixed formats exhibit all three.",
      relatedConcepts: ["Big data", "Three Vs"],
    },
    [
      ["Volume, velocity and variety", true, "Correct — large quantities, arriving fast, in many different formats."],
      ["Validity, value and veracity only", false, "While value and veracity are sometimes added, the classic defining trio is volume, velocity and variety."],
      ["Low volume but high accuracy", false, "The scenario explicitly describes vast, fast, varied data — high volume, not low."],
      ["A single structured database table", false, "The data is varied and unstructured (video, sensor, text), not a single structured table."],
    ],
  ),
  mc(
    {
      id: "bs-tech-3",
      topicId: "t-bst-tech",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Quartz Ltd suffers a ransomware attack that encrypts its order-processing systems. Investigation shows attackers gained entry because a finance clerk reused a weak password and there was no multi-factor authentication; backups were also stored on the same network and were encrypted too.",
      stem: "Which combination of controls would most directly have mitigated this specific incident?",
      explanation:
        "The two named root causes are weak/reused credentials without MFA and on-network backups. Multi-factor authentication addresses the access vector, and segregated/offline backups would have allowed recovery without paying. These map directly to the failures described.",
      relatedConcepts: ["Cyber risk", "Access controls and backups"],
    },
    [
      ["Multi-factor authentication and segregated offline backups", true, "Correct — MFA closes the credential vector and offline backups enable recovery from encryption."],
      ["A new corporate logo and rebrand", false, "Branding has no bearing on cyber resilience or the technical failures described."],
      ["Increasing the marketing budget", false, "Marketing spend does not address weak credentials or vulnerable backups."],
      ["Switching to a different invoice template", false, "An invoice template change does nothing to prevent ransomware access or protect backups."],
    ],
  ),
  mc(
    {
      id: "bs-tech-4",
      topicId: "t-bst-tech",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Solace Bank deploys a machine-learning model to approve personal loans. An internal review finds the model was trained mainly on historic data from one demographic and now systematically rejects applicants from under-represented groups, even where their finances are sound.",
      stem: "What is the primary risk this illustrates in adopting AI for decision-making?",
      explanation:
        "AI/ML models can embed and amplify bias present in their training data, producing discriminatory and unfair outcomes — a key governance, ethical and regulatory risk. The issue is bias and explainability, not raw processing speed.",
      relatedConcepts: ["AI", "Algorithmic bias"],
    },
    [
      ["Algorithmic bias arising from unrepresentative training data", true, "Correct — biased training data leads the model to discriminate against under-represented groups."],
      ["That AI is always slower than manual decisions", false, "Speed is not the problem here; biased, unfair outcomes are."],
      ["That AI removes all need for human governance", false, "The case shows the opposite — strong human oversight and governance are essential."],
      ["That AI cannot process numerical data", false, "AI processes numerical data well; the issue is bias in the data and outcomes."],
    ],
  ),
  mc(
    {
      id: "bs-tech-5",
      topicId: "t-bst-tech",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Tundra Ltd analyses three uses of its data. Report A summarises last quarter's sales by region. Report B forecasts next quarter's demand using historic patterns. Report C recommends the specific price changes the firm should make to maximise margin.",
      stem: "Using the analytics hierarchy, reports A, B and C are respectively examples of:",
      explanation:
        "Data analytics is commonly tiered as descriptive (what happened), diagnostic (why), predictive (what will happen) and prescriptive (what to do). A summarises the past (descriptive), B forecasts (predictive), and C recommends actions (prescriptive).",
      relatedConcepts: ["Data analytics", "Descriptive/predictive/prescriptive"],
    },
    [
      ["Descriptive, predictive and prescriptive analytics", true, "Correct — summary of the past, a forecast, and a recommended action."],
      ["Predictive, descriptive and diagnostic analytics", false, "A summarises the past (descriptive), not a prediction; the order is wrong."],
      ["Prescriptive, descriptive and predictive analytics", false, "C recommends actions (prescriptive) and A summarises the past (descriptive) — they are swapped here."],
      ["Diagnostic, prescriptive and descriptive analytics", false, "A is a straightforward summary (descriptive), B is a forecast (predictive); this mislabels all three."],
    ],
  ),
  mc(
    {
      id: "bs-tech-6",
      topicId: "t-bst-tech",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Zenith plc is preparing a data strategy. The finance director argues data should be treated like other strategic assets — governed, quality-controlled, with clear ownership and a single trusted version — because reports currently conflict between departments using different figures.",
      stem: "Which concept most directly addresses the conflicting-figures problem the director describes?",
      explanation:
        "Data governance — including establishing data ownership, quality standards and a 'single source of truth' / master data management — resolves conflicting figures across departments by ensuring one authoritative, consistent dataset. Merely buying more storage or hardware does not.",
      relatedConcepts: ["Data governance", "Single source of truth"],
    },
    [
      ["Data governance with a single source of truth (master data management)", true, "Correct — governance, ownership and one authoritative dataset eliminate conflicting departmental figures."],
      ["Buying additional cloud storage capacity", false, "More storage does not reconcile inconsistent figures; governance and a single source do."],
      ["Increasing the frequency of staff appraisals", false, "Appraisals are unrelated to data consistency across departments."],
      ["Outsourcing all reporting to a single junior clerk", false, "Centralising on one untrained person creates risk and does not establish governed, quality-controlled data."],
    ],
  ),
  mc(
    {
      id: "bs-tech-7",
      topicId: "t-bst-tech",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Aurora Ltd plans to move its core systems from owned on-premise servers to a public cloud provider on a pay-as-you-use basis, citing the ability to scale rapidly with demand and convert large up-front capital costs into operating expenditure.",
      stem: "Which benefit of cloud computing is Aurora primarily relying on, and what is a key associated risk it must manage?",
      explanation:
        "Cloud's headline benefits include scalability/elasticity and a shift from capex to opex. A key associated risk is dependence on the provider — availability, data security and vendor lock-in — which the firm must manage through contracts and controls.",
      relatedConcepts: ["Cloud computing", "Scalability and vendor risk"],
    },
    [
      ["Scalability and capex-to-opex, with vendor dependence/security as the key risk", true, "Correct — elasticity and cost conversion are the benefits; reliance on the provider is the key risk."],
      ["Guaranteed elimination of all security risk", false, "Cloud shifts but does not eliminate security risk; vendor dependence is a real concern."],
      ["Lower scalability than on-premise servers", false, "Cloud generally offers greater, not lower, scalability — that is the benefit cited."],
      ["No need for any service-level agreement", false, "Reliance on a provider makes robust SLAs and controls more important, not unnecessary."],
    ],
  ),
];

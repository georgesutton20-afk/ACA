// MI (Management Information) — Certificate Level question bank.
// Certificate-style objective testing: concise stems, small data sets,
// single/two-step numeric computations with worked solutions.
// Original questions (not copied from ICAEW past papers).
import type { Question } from "@/types/domain";
import { mc, calc } from "@/data/question-helpers";

export const miQuestions: Question[] = [
  // ── Costing — t-mi-cost ────────────────────────────────────────────────
  calc({
    id: "mi-cost-w1",
    topicId: "t-mi-cost",
    difficulty: "easy",
    scenario:
      "Budgeted production overhead is £240,000 and budgeted activity is 30,000 labour hours.",
    stem: "Calculate the overhead absorption rate (OAR) per labour hour, in £.",
    explanation:
      "OAR = budgeted overhead ÷ budgeted activity level.",
    workedSolution: "OAR = 240,000 ÷ 30,000 = £8.00 per labour hour.",
    relatedConcepts: ["Overhead absorption rate", "Absorption costing"],
    numericAnswer: 8,
    numericTolerance: 0.01,
    unit: "£/hour",
  }),
  calc({
    id: "mi-cost-w2",
    topicId: "t-mi-cost",
    difficulty: "medium",
    scenario:
      "A company absorbs overhead at £8 per labour hour. Actual overhead incurred was £252,000 and actual labour hours worked were 30,500.",
    stem: "Calculate the over- or under-absorbed overhead, in £ (give the absolute amount).",
    explanation:
      "Absorbed overhead = OAR × actual hours. Compare with actual overhead incurred. Absorbed < actual ⇒ under-absorbed.",
    workedSolution:
      "Absorbed = 8 × 30,500 = 244,000\nActual incurred = 252,000\nUnder-absorbed = 252,000 − 244,000 = £8,000.",
    relatedConcepts: ["Over/under-absorption", "Absorption costing"],
    numericAnswer: 8000,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-cost-w3",
    topicId: "t-mi-cost",
    difficulty: "medium",
    scenario:
      "A product has direct materials £14, direct labour £10 and variable production overhead £6 per unit. Budgeted fixed production overhead is £100,000 for budgeted output of 20,000 units.",
    stem: "Calculate the full absorption cost per unit, in £.",
    explanation:
      "Absorption cost = prime cost + variable production overhead + fixed overhead per unit. Fixed per unit = total fixed ÷ budgeted output.",
    workedSolution:
      "Fixed per unit = 100,000 ÷ 20,000 = 5\nAbsorption cost = 14 + 10 + 6 + 5 = £35.00.",
    relatedConcepts: ["Absorption costing", "Unit cost"],
    numericAnswer: 35,
    numericTolerance: 0.01,
    unit: "£",
  }),
  calc({
    id: "mi-cost-w4",
    topicId: "t-mi-cost",
    difficulty: "hard",
    scenario:
      "A factory has two production departments. Overhead is absorbed on machine hours in Machining (£180,000 budgeted overhead, 12,000 machine hours) and on labour hours in Assembly (£90,000 budgeted overhead, 15,000 labour hours). Job 42 uses 4 machine hours and 6 labour hours.",
    stem: "Calculate the total production overhead absorbed by Job 42, in £.",
    explanation:
      "Compute a separate OAR for each department, then apply each rate to the job's usage.",
    workedSolution:
      "Machining OAR = 180,000 ÷ 12,000 = £15/machine hour\nAssembly OAR = 90,000 ÷ 15,000 = £6/labour hour\nJob 42 = (4 × 15) + (6 × 6) = 60 + 36 = £96.00.",
    relatedConcepts: ["Departmental OAR", "Absorption costing"],
    numericAnswer: 96,
    numericTolerance: 0.01,
    unit: "£",
  }),
  calc({
    id: "mi-cost-w5",
    topicId: "t-mi-cost",
    difficulty: "hard",
    scenario:
      "Under activity-based costing, the machine set-up cost pool is £120,000 and the cost driver is the number of set-ups, totalling 800 set-ups across all products. Product Z requires 50 set-ups for a production run of 2,000 units.",
    stem: "Calculate the set-up cost absorbed per unit of Product Z, in £.",
    explanation:
      "ABC: cost driver rate = cost pool ÷ total driver volume, then allocate to the product and spread over its units.",
    workedSolution:
      "Rate = 120,000 ÷ 800 = £150 per set-up\nCost to Z = 150 × 50 = 7,500\nPer unit = 7,500 ÷ 2,000 = £3.75.",
    relatedConcepts: ["Activity-based costing", "Cost driver rate"],
    numericAnswer: 3.75,
    numericTolerance: 0.01,
    unit: "£",
  }),
  mc(
    {
      id: "mi-cost-w6",
      topicId: "t-mi-cost",
      type: "mcq",
      difficulty: "medium",
      scenario:
        "In a period, production exceeded sales (closing inventory rose). Fixed production overhead was incurred as budgeted.",
      stem: "How will absorption-costing profit compare with marginal-costing profit?",
      explanation:
        "When inventory increases, absorption costing carries forward some fixed overhead in closing inventory, so it reports a higher profit than marginal costing.",
      relatedConcepts: ["Absorption vs marginal costing", "Inventory movement"],
    },
    [
      ["Absorption profit will be higher than marginal profit", true, "Correct — rising inventory defers fixed overhead in the SOFP under absorption costing."],
      ["Marginal profit will be higher than absorption profit", false, "That occurs when inventory falls, not rises."],
      ["They will be equal", false, "They are equal only when production equals sales (no inventory change)."],
      ["It cannot be determined without sales price", false, "The direction depends only on the inventory movement."],
    ],
  ),

  // ── CVP analysis — t-mi-cvp ────────────────────────────────────────────
  calc({
    id: "mi-cvp-w1",
    topicId: "t-mi-cvp",
    difficulty: "easy",
    scenario:
      "A product sells for £40, has variable cost of £24 per unit, and total fixed costs are £96,000.",
    stem: "Calculate the breakeven point in units.",
    explanation:
      "Breakeven units = fixed costs ÷ contribution per unit, where contribution = selling price − variable cost.",
    workedSolution:
      "Contribution = 40 − 24 = 16\nBreakeven = 96,000 ÷ 16 = 6,000 units.",
    relatedConcepts: ["Breakeven point", "Contribution per unit"],
    numericAnswer: 6000,
    numericTolerance: 1,
    unit: "units",
  }),
  calc({
    id: "mi-cvp-w2",
    topicId: "t-mi-cvp",
    difficulty: "easy",
    scenario:
      "A product sells for £50 with variable cost of £30 per unit.",
    stem: "Calculate the contribution to sales (C/S) ratio, as a percentage.",
    explanation:
      "C/S ratio = contribution ÷ selling price.",
    workedSolution:
      "Contribution = 50 − 30 = 20\nC/S ratio = 20 ÷ 50 = 40%.",
    relatedConcepts: ["C/S ratio", "Contribution"],
    numericAnswer: 40,
    numericTolerance: 0.1,
    unit: "%",
  }),
  calc({
    id: "mi-cvp-w3",
    topicId: "t-mi-cvp",
    difficulty: "medium",
    scenario:
      "Fixed costs are £150,000. The C/S ratio is 30%.",
    stem: "Calculate the breakeven revenue, in £.",
    explanation:
      "Breakeven revenue = fixed costs ÷ C/S ratio.",
    workedSolution:
      "Breakeven revenue = 150,000 ÷ 0.30 = £500,000.",
    relatedConcepts: ["Breakeven revenue", "C/S ratio"],
    numericAnswer: 500000,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-cvp-w4",
    topicId: "t-mi-cvp",
    difficulty: "medium",
    scenario:
      "A product earns contribution of £12 per unit. Fixed costs are £180,000 and the company targets a profit of £60,000.",
    stem: "Calculate the sales volume (units) required to achieve the target profit.",
    explanation:
      "Required units = (fixed costs + target profit) ÷ contribution per unit.",
    workedSolution:
      "Required units = (180,000 + 60,000) ÷ 12 = 240,000 ÷ 12 = 20,000 units.",
    relatedConcepts: ["Target profit", "Contribution per unit"],
    numericAnswer: 20000,
    numericTolerance: 1,
    unit: "units",
  }),
  calc({
    id: "mi-cvp-w5",
    topicId: "t-mi-cvp",
    difficulty: "medium",
    scenario:
      "Budgeted sales are 10,000 units. The breakeven point is 7,500 units.",
    stem: "Calculate the margin of safety as a percentage of budgeted sales.",
    explanation:
      "Margin of safety % = (budgeted sales − breakeven sales) ÷ budgeted sales.",
    workedSolution:
      "MoS = (10,000 − 7,500) ÷ 10,000 = 2,500 ÷ 10,000 = 25%.",
    relatedConcepts: ["Margin of safety", "Breakeven"],
    numericAnswer: 25,
    numericTolerance: 0.1,
    unit: "%",
  }),
  calc({
    id: "mi-cvp-w6",
    topicId: "t-mi-cvp",
    difficulty: "hard",
    scenario:
      "A company sells two products in a constant mix of 3 units of A to 1 unit of B. Contribution is £5 per unit of A and £9 per unit of B. Fixed costs are £168,000.",
    stem: "Calculate the number of complete mix-batches required to break even (each batch = 3A + 1B).",
    explanation:
      "Find the contribution per batch, then divide fixed costs by it.",
    workedSolution:
      "Contribution per batch = (3 × 5) + (1 × 9) = 15 + 9 = 24\nBreakeven batches = 168,000 ÷ 24 = 7,000 batches.",
    relatedConcepts: ["Multi-product breakeven", "Sales mix"],
    numericAnswer: 7000,
    numericTolerance: 1,
    unit: "batches",
  }),

  // ── Budgeting & variances — t-mi-bud ───────────────────────────────────
  calc({
    id: "mi-bud-w1",
    topicId: "t-mi-bud",
    difficulty: "medium",
    scenario:
      "Standard material cost is 4 kg per unit at £6 per kg. Actual production was 5,000 units, using 21,000 kg costing £121,800.",
    stem: "Calculate the direct material price variance, in £, and state whether it is favourable or adverse (enter the amount only).",
    explanation:
      "Price variance = (standard price − actual price) × actual quantity purchased/used = (AQ × SP) − actual cost.",
    workedSolution:
      "AQ × SP = 21,000 × 6 = 126,000\nActual cost = 121,800\nVariance = 126,000 − 121,800 = £4,200 Favourable.",
    relatedConcepts: ["Material price variance", "Standard costing"],
    numericAnswer: 4200,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-bud-w2",
    topicId: "t-mi-bud",
    difficulty: "medium",
    scenario:
      "Standard material usage is 4 kg per unit at £6 per kg. Actual production was 5,000 units, using 21,000 kg.",
    stem: "Calculate the direct material usage variance, in £ (enter the amount only).",
    explanation:
      "Usage variance = (standard quantity for actual output − actual quantity) × standard price.",
    workedSolution:
      "Standard qty = 5,000 × 4 = 20,000 kg\nUsage diff = 20,000 − 21,000 = −1,000 kg (extra used)\nVariance = 1,000 × 6 = £6,000 Adverse.",
    relatedConcepts: ["Material usage variance", "Standard costing"],
    numericAnswer: 6000,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-bud-w3",
    topicId: "t-mi-bud",
    difficulty: "medium",
    scenario:
      "Standard labour rate is £12 per hour. Actual hours paid were 8,200 at a total cost of £100,860.",
    stem: "Calculate the direct labour rate variance, in £ (enter the amount only).",
    explanation:
      "Rate variance = (standard rate × actual hours) − actual cost.",
    workedSolution:
      "AH × SR = 8,200 × 12 = 98,400\nActual cost = 100,860\nVariance = 98,400 − 100,860 = £2,460 Adverse.",
    relatedConcepts: ["Labour rate variance", "Standard costing"],
    numericAnswer: 2460,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-bud-w4",
    topicId: "t-mi-bud",
    difficulty: "medium",
    scenario:
      "Standard labour time is 1.5 hours per unit at £12 per hour. Actual output was 5,000 units and actual hours worked were 8,200.",
    stem: "Calculate the labour efficiency variance, in £ (enter the amount only).",
    explanation:
      "Efficiency variance = (standard hours for actual output − actual hours) × standard rate.",
    workedSolution:
      "Standard hours = 5,000 × 1.5 = 7,500\nDiff = 7,500 − 8,200 = −700 hours\nVariance = 700 × 12 = £8,400 Adverse.",
    relatedConcepts: ["Labour efficiency variance", "Standard costing"],
    numericAnswer: 8400,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-bud-w5",
    topicId: "t-mi-bud",
    difficulty: "hard",
    scenario:
      "Variable production overhead is absorbed at £4 per labour hour. The standard is 2 hours per unit. Actual output was 3,000 units, actual hours worked were 6,200, and actual variable overhead cost was £23,560.",
    stem: "Calculate the variable overhead expenditure (rate) variance, in £ (enter the amount only).",
    explanation:
      "Expenditure variance = (standard rate × actual hours) − actual variable overhead cost.",
    workedSolution:
      "AH × SR = 6,200 × 4 = 24,800\nActual cost = 23,560\nVariance = 24,800 − 23,560 = £1,240 Favourable.",
    relatedConcepts: ["Variable overhead expenditure variance", "Standard costing"],
    numericAnswer: 1240,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-bud-w6",
    topicId: "t-mi-bud",
    difficulty: "hard",
    scenario:
      "A flexible budget has fixed costs of £40,000 and variable costs of £6 per unit. Budgeted output was 10,000 units. Actual output was 11,000 units.",
    stem: "Calculate the total flexed budget cost allowance for the actual output, in £.",
    explanation:
      "Flex the budget to actual output: fixed costs stay constant, variable costs flex with volume.",
    workedSolution:
      "Variable = 6 × 11,000 = 66,000\nFlexed cost = 40,000 + 66,000 = £106,000.",
    relatedConcepts: ["Flexed budget", "Cost behaviour"],
    numericAnswer: 106000,
    numericTolerance: 1,
    unit: "£",
  }),

  // ── Pricing & relevant costing — t-mi-price ────────────────────────────
  calc({
    id: "mi-price-w1",
    topicId: "t-mi-price",
    difficulty: "easy",
    scenario:
      "A product has a total cost of £40 per unit. The company uses cost-plus pricing with a 25% mark-up on cost.",
    stem: "Calculate the selling price per unit, in £.",
    explanation:
      "Cost-plus price = cost × (1 + mark-up%).",
    workedSolution:
      "Price = 40 × 1.25 = £50.00.",
    relatedConcepts: ["Cost-plus pricing", "Mark-up"],
    numericAnswer: 50,
    numericTolerance: 0.01,
    unit: "£",
  }),
  calc({
    id: "mi-price-w2",
    topicId: "t-mi-price",
    difficulty: "medium",
    scenario:
      "A product costs £60 per unit to make. Management wants a gross profit margin of 20% of selling price.",
    stem: "Calculate the selling price per unit, in £.",
    explanation:
      "When margin is expressed on selling price, cost = (1 − margin%) of price, so price = cost ÷ (1 − margin%).",
    workedSolution:
      "Price = 60 ÷ (1 − 0.20) = 60 ÷ 0.80 = £75.00.",
    relatedConcepts: ["Margin vs mark-up", "Pricing"],
    numericAnswer: 75,
    numericTolerance: 0.01,
    unit: "£",
  }),
  calc({
    id: "mi-price-w3",
    topicId: "t-mi-price",
    difficulty: "hard",
    scenario:
      "A special order requires 200 kg of material X already in inventory. It originally cost £8/kg. Material X is in regular use; its current replacement cost is £9/kg and its scrap value is £2/kg.",
    stem: "Calculate the relevant cost of the material X for the special order, in £.",
    explanation:
      "For material in regular use, the relevant cost is the replacement cost (it must be replaced), not historical cost or scrap value.",
    workedSolution:
      "Relevant cost = 200 × £9 (replacement) = £1,800.",
    relatedConcepts: ["Relevant costing", "Replacement cost"],
    numericAnswer: 1800,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-price-w4",
    topicId: "t-mi-price",
    difficulty: "medium",
    scenario:
      "A component can be bought in for £18 per unit. To make it internally costs £11 variable cost plus £5 per unit of fixed overhead, of which £2 per unit is avoidable if production ceases. 4,000 units are required.",
    stem: "Calculate the annual saving from making rather than buying the component, in £.",
    explanation:
      "Compare the buy-in price with the relevant cost of making (variable + avoidable fixed only). Unavoidable fixed cost is ignored.",
    workedSolution:
      "Relevant cost to make = 11 + 2 = £13/unit\nSaving per unit = 18 − 13 = £5\nTotal saving = 5 × 4,000 = £20,000.",
    relatedConcepts: ["Make-or-buy", "Avoidable cost"],
    numericAnswer: 20000,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-price-w5",
    topicId: "t-mi-price",
    difficulty: "hard",
    scenario:
      "Two products share a scarce machine. Product A: contribution £30/unit, 3 machine hours/unit. Product B: contribution £24/unit, 2 machine hours/unit.",
    stem: "Calculate the contribution per machine hour of the product that should be prioritised, in £.",
    explanation:
      "With a single limiting factor, rank by contribution per unit of the scarce resource and prioritise the highest.",
    workedSolution:
      "A = 30 ÷ 3 = £10/hour\nB = 24 ÷ 2 = £12/hour\nPrioritise B at £12.00 per machine hour.",
    relatedConcepts: ["Limiting factor", "Contribution per scarce resource"],
    numericAnswer: 12,
    numericTolerance: 0.01,
    unit: "£/hour",
  }),
  mc(
    {
      id: "mi-price-w6",
      topicId: "t-mi-price",
      type: "mcq",
      difficulty: "medium",
      scenario:
        "A short-term decision involves labour that is currently idle but paid under a guaranteed wage agreement (the workers will be paid whether or not they work on this order).",
      stem: "What is the relevant cost of this labour for the decision?",
      explanation:
        "Idle labour paid under a guaranteed wage is a committed cost incurred regardless of the decision, so its relevant cost is nil.",
      relatedConcepts: ["Relevant costing", "Committed cost"],
    },
    [
      ["Nil — the wage is paid regardless of the decision", true, "Correct — a committed cost is not relevant to the decision."],
      ["The full hourly wage rate", false, "The wage is already committed, so it is not incremental."],
      ["The overtime premium rate", false, "No overtime arises; the labour is idle."],
      ["The wage plus a notional opportunity cost", false, "There is no alternative use, so no opportunity cost arises."],
    ],
  ),

  // ── Cash budgets & forecasting — t-mi-cash ─────────────────────────────
  calc({
    id: "mi-cash-w1",
    topicId: "t-mi-cash",
    difficulty: "easy",
    scenario:
      "Opening cash is £5,000. Receipts in the month are £42,000 and payments are £38,500.",
    stem: "Calculate the closing cash balance, in £.",
    explanation:
      "Closing cash = opening cash + receipts − payments.",
    workedSolution:
      "Closing = 5,000 + 42,000 − 38,500 = £8,500.",
    relatedConcepts: ["Cash budget", "Closing balance"],
    numericAnswer: 8500,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-cash-w2",
    topicId: "t-mi-cash",
    difficulty: "medium",
    scenario:
      "Sales are £80,000 in May and £100,000 in June. 40% of customers pay in the month of sale and 60% in the month after.",
    stem: "Calculate the total cash received from customers in June, in £.",
    explanation:
      "June receipts = 40% of June sales + 60% of May sales (the lag).",
    workedSolution:
      "From June = 0.40 × 100,000 = 40,000\nFrom May = 0.60 × 80,000 = 48,000\nTotal = 40,000 + 48,000 = £88,000.",
    relatedConcepts: ["Receipts forecasting", "Credit period"],
    numericAnswer: 88000,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-cash-w3",
    topicId: "t-mi-cash",
    difficulty: "hard",
    scenario:
      "A business buys goods on credit, paying suppliers in the month after purchase. Purchases are: April £30,000, May £36,000, June £33,000. Cost of sales each month is paid for from these purchases.",
    stem: "Calculate the cash paid to suppliers in June, in £.",
    explanation:
      "Payment lags purchases by one month, so June pays for May's purchases.",
    workedSolution:
      "June payment = May purchases = £36,000.",
    relatedConcepts: ["Payments forecasting", "Payment lag"],
    numericAnswer: 36000,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-cash-w4",
    topicId: "t-mi-cash",
    difficulty: "medium",
    scenario:
      "Forecast profit before tax for the year is £120,000. This is after charging depreciation of £18,000. There are no other non-cash items and no working capital changes.",
    stem: "Calculate the forecast cash generated from operations, in £.",
    explanation:
      "Add back non-cash items (depreciation) to profit to approximate operating cash flow.",
    workedSolution:
      "Cash from operations = 120,000 + 18,000 = £138,000.",
    relatedConcepts: ["Cash forecasting", "Non-cash items"],
    numericAnswer: 138000,
    numericTolerance: 1,
    unit: "£",
  }),
  calc({
    id: "mi-cash-w5",
    topicId: "t-mi-cash",
    difficulty: "hard",
    scenario:
      "Sales of £200,000 are made on credit. Receivables are expected to be £35,000 at the start of the period and £50,000 at the end of the period.",
    stem: "Calculate the cash received from customers during the period, in £.",
    explanation:
      "Cash received = opening receivables + credit sales − closing receivables.",
    workedSolution:
      "Cash received = 35,000 + 200,000 − 50,000 = £185,000.",
    relatedConcepts: ["Receivables movement", "Cash received"],
    numericAnswer: 185000,
    numericTolerance: 1,
    unit: "£",
  }),
  mc(
    {
      id: "mi-cash-w6",
      topicId: "t-mi-cash",
      type: "mcq",
      difficulty: "easy",
      scenario:
        "A company is preparing its monthly cash budget.",
      stem: "Which of the following items would NOT appear in a cash budget?",
      explanation:
        "A cash budget records only cash flows. Depreciation is a non-cash charge and is therefore excluded.",
      relatedConcepts: ["Cash budget", "Non-cash items"],
    },
    [
      ["Depreciation of machinery", true, "Correct — depreciation is a non-cash item and is never included in a cash budget."],
      ["Wages paid to staff", false, "Wages are a cash outflow and are included."],
      ["Cash received from credit customers", false, "Customer receipts are a cash inflow and are included."],
      ["Purchase of equipment for cash", false, "A cash purchase of equipment is a cash outflow and is included."],
    ],
  ),
];

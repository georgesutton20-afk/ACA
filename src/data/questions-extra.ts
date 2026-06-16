// Authored ACA-style question bank covering all 15 papers.
// Technical content reflects 2024/25 UK syllabus/tax figures and is illustrative
// (no copyrighted past-paper text). Certificate questions use objective-test
// styles (MCQ / multi-select / numeric entry); Professional & Advanced use
// scenario-based multi-part styles.
import type { Question } from "@/types/domain";
import { mc, calc } from "@/data/question-helpers";

export const extraQuestions: Question[] = [
  // ═══════════════ CERTIFICATE LEVEL ═══════════════

  // ── Accounting: double-entry (t-acc-de)
  mc(
    {
      id: "x-acc-de-1",
      topicId: "t-acc-de",
      type: "mcq",
      difficulty: "easy",
      stem: "A business purchases inventory for £900 on credit from a supplier. What is the correct double entry?",
      explanation:
        "Inventory (an asset) increases — debit; the obligation to the supplier (a payable/liability) increases — credit.",
      workedSolution: "Dr Purchases/Inventory £900\nCr Trade payables £900",
      relatedConcepts: ["Debits & credits", "Credit transactions"],
    },
    [
      ["Dr Purchases £900, Cr Trade payables £900", true, "Correct — asset up (Dr), liability up (Cr)."],
      ["Dr Trade payables £900, Cr Purchases £900", false, "This reverses the entry."],
      ["Dr Purchases £900, Cr Cash £900", false, "The goods were bought on credit, not for cash."],
      ["Dr Cash £900, Cr Trade payables £900", false, "No cash moves on a credit purchase."],
    ],
  ),
  calc({
    id: "x-acc-de-2",
    topicId: "t-acc-de",
    difficulty: "easy",
    stem: "A business has total assets of £80,000 and total liabilities of £30,000. Applying the accounting equation, what is the owner's capital (£)?",
    explanation: "Assets = Capital + Liabilities, so Capital = Assets − Liabilities.",
    workedSolution: "Capital = 80,000 − 30,000 = £50,000",
    relatedConcepts: ["The accounting equation"],
    numericAnswer: 50000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "x-acc-de-3",
      topicId: "t-acc-de",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following errors would NOT be revealed by extracting a trial balance?",
      explanation:
        "A trial balance only checks that total debits equal total credits. An error of principle (correct amount, wrong type of account) still balances.",
      relatedConcepts: ["Trial balance", "Types of error"],
    },
    [
      ["An error of principle", true, "Correct — debits still equal credits, so the TB balances."],
      ["A one-sided entry", false, "This unbalances the trial balance."],
      ["A transposition in one ledger account only", false, "This causes a difference on the TB."],
      ["Posting a debit as a credit", false, "This creates a difference of twice the amount."],
    ],
  ),

  // ── Accounting: accruals & prepayments (t-acc-adj)
  calc({
    id: "x-acc-adj-1",
    topicId: "t-acc-adj",
    difficulty: "medium",
    stem: "On 1 October 20X4 a business pays £12,000 for 12 months' insurance. Its year end is 31 December 20X4. What prepayment is carried forward at the year end (£)?",
    explanation:
      "Insurance from 1 Jan to 30 Sep 20X5 (9 months) relates to the next period and is a prepayment.",
    workedSolution: "Prepayment = 12,000 × 9/12 = £9,000",
    relatedConcepts: ["Prepayments", "Matching concept"],
    numericAnswer: 9000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "x-acc-adj-2",
      topicId: "t-acc-adj",
      type: "mcq",
      difficulty: "medium",
      stem: "Rent receivable of £2,000 has been earned but not yet received at the year end. What is the correct treatment?",
      explanation:
        "Income earned but not received is accrued income — an asset (receivable) and credit to income.",
      workedSolution: "Dr Accrued income (asset) £2,000\nCr Rent receivable (income) £2,000",
      relatedConcepts: ["Accrued income", "Accruals concept"],
    },
    [
      ["Recognise accrued income: Dr asset, Cr income £2,000", true, "Correct — income is matched to the period earned."],
      ["Do nothing until cash is received", false, "This breaches the accruals concept."],
      ["Recognise deferred income (a liability)", false, "Deferred income is for cash received in advance."],
      ["Reduce this year's income by £2,000", false, "The income has been earned this year."],
    ],
  ),

  // ── Accounting: financial statements (t-acc-fs)
  mc(
    {
      id: "x-acc-fs-1",
      topicId: "t-acc-fs",
      type: "mcq",
      difficulty: "easy",
      stem: "In which financial statement would a 12-month bank loan repayable in 18 months' time be presented?",
      explanation:
        "It is a liability due after more than 12 months, so a non-current liability in the statement of financial position.",
      relatedConcepts: ["Statement of financial position", "Current vs non-current"],
    },
    [
      ["As a non-current liability in the SoFP", true, "Correct — settlement is due in more than 12 months."],
      ["As a current liability in the SoFP", false, "Current liabilities fall due within 12 months."],
      ["As an expense in the statement of profit or loss", false, "Only the interest is an expense; the loan is a liability."],
      ["As equity", false, "A loan is debt, not equity."],
    ],
  ),
  calc({
    id: "x-acc-fs-2",
    topicId: "t-acc-fs",
    difficulty: "medium",
    stem: "A business has sales of £150,000, opening inventory £10,000, purchases £90,000 and closing inventory £15,000. What is the gross profit (£)?",
    explanation: "Cost of sales = opening inventory + purchases − closing inventory; gross profit = sales − cost of sales.",
    workedSolution: "COS = 10,000 + 90,000 − 15,000 = 85,000\nGross profit = 150,000 − 85,000 = £65,000",
    relatedConcepts: ["Cost of sales", "Gross profit"],
    numericAnswer: 65000,
    numericTolerance: 0,
    unit: "£",
  }),

  // ── Assurance: process (t-ass-proc)
  mc(
    {
      id: "x-ass-proc-1",
      topicId: "t-ass-proc",
      type: "multi",
      difficulty: "medium",
      stem: "Which of the following are elements of an assurance engagement? Select all that apply.",
      explanation:
        "The five elements are: a three-party relationship, subject matter, suitable criteria, sufficient appropriate evidence, and a written assurance report.",
      relatedConcepts: ["Elements of assurance", "Assurance engagements"],
    },
    [
      ["A three-party relationship", true, "Correct — practitioner, responsible party and intended users."],
      ["Suitable criteria", true, "Correct — benchmarks against which the subject matter is evaluated."],
      ["Sufficient appropriate evidence", true, "Correct — to support the conclusion."],
      ["A guarantee that no errors exist", false, "No engagement provides absolute assurance."],
    ],
  ),
  mc(
    {
      id: "x-ass-proc-2",
      topicId: "t-ass-proc",
      type: "mcq",
      difficulty: "easy",
      stem: "A review engagement provides which level of assurance and form of conclusion?",
      explanation:
        "A review gives limited assurance, expressed in the negative form (e.g. 'nothing has come to our attention…').",
      relatedConcepts: ["Limited assurance", "Negative assurance"],
    },
    [
      ["Limited assurance, negative conclusion", true, "Correct — lower than an audit's reasonable assurance."],
      ["Reasonable assurance, positive conclusion", false, "That describes an audit."],
      ["Absolute assurance", false, "No engagement gives absolute assurance."],
      ["No assurance", false, "A review does provide limited assurance."],
    ],
  ),

  // ── Assurance: internal control (t-ass-int)
  mc(
    {
      id: "x-ass-int-1",
      topicId: "t-ass-int",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following is an inherent limitation of any internal control system?",
      explanation:
        "Controls can be overridden by management, circumvented by collusion, or fail through human error — inherent limitations no system removes.",
      relatedConcepts: ["Internal control", "Limitations of control"],
    },
    [
      ["The possibility of management override of controls", true, "Correct — a classic inherent limitation."],
      ["Segregation of duties", false, "This is a control, not a limitation."],
      ["Authorisation procedures", false, "This is a control activity."],
      ["Reconciliations being performed", false, "This is a control."],
    ],
  ),

  // ── BTF: governance & ethics (t-btf-gov)
  mc(
    {
      id: "x-btf-gov-1",
      topicId: "t-btf-gov",
      type: "mcq",
      difficulty: "medium",
      stem: "An audit firm is asked to prepare a client's financial statements and then audit them. Which fundamental threat to objectivity is MOST directly created?",
      explanation:
        "Auditing your own work creates a self-review threat. The firm would be reviewing figures it prepared.",
      relatedConcepts: ["Ethical threats", "Objectivity"],
    },
    [
      ["Self-review threat", true, "Correct — the firm would audit work it has prepared."],
      ["Advocacy threat", false, "Advocacy is promoting a client's position."],
      ["Intimidation threat", false, "That arises from pressure or threats."],
      ["Familiarity threat", false, "That arises from a close relationship over time."],
    ],
  ),
  mc(
    {
      id: "x-btf-gov-2",
      topicId: "t-btf-gov",
      type: "mcq",
      difficulty: "easy",
      stem: "In a unitary board structure, what is the principal role of non-executive directors (NEDs)?",
      explanation:
        "NEDs provide independent judgement and constructive challenge, and sit on key committees (audit, remuneration, nomination).",
      relatedConcepts: ["Corporate governance", "Board structure"],
    },
    [
      ["To provide independent oversight and challenge", true, "Correct — independence and scrutiny are their core role."],
      ["To run the day-to-day operations", false, "That is the executive directors' role."],
      ["To act as the external auditor", false, "NEDs are not the auditor."],
      ["To replace the shareholders in general meetings", false, "Shareholders retain their statutory rights."],
    ],
  ),

  // ── BTF: sources of finance (t-btf-fin)
  calc({
    id: "x-btf-fin-1",
    topicId: "t-btf-fin",
    difficulty: "medium",
    stem: "A company has inventory days of 60, receivables days of 45 and payables days of 30. What is the length of its working-capital (cash operating) cycle in days?",
    explanation: "Cycle = inventory days + receivables days − payables days.",
    workedSolution: "60 + 45 − 30 = 75 days",
    relatedConcepts: ["Working capital cycle", "Liquidity"],
    numericAnswer: 75,
    numericTolerance: 0,
    unit: "days",
  }),
  mc(
    {
      id: "x-btf-fin-2",
      topicId: "t-btf-fin",
      type: "mcq",
      difficulty: "medium",
      stem: "Which source of finance is most appropriate to fund a short-term seasonal increase in working capital?",
      explanation:
        "Matching principle: short-term needs should be funded by short-term finance such as an overdraft.",
      relatedConcepts: ["Matching principle", "Short-term finance"],
    },
    [
      ["A bank overdraft", true, "Correct — flexible short-term finance for fluctuating needs."],
      ["A 10-year debenture", false, "Long-term debt is inappropriate for a short-term need."],
      ["An issue of ordinary shares", false, "Equity is permanent, long-term capital."],
      ["A finance lease on machinery", false, "This funds a long-term asset, not working capital."],
    ],
  ),

  // ── Law: contract (t-law-con)
  mc(
    {
      id: "x-law-con-1",
      topicId: "t-law-con",
      type: "mcq",
      difficulty: "medium",
      stem: "Goods are displayed in a shop window with a price tag. In contract law this display is generally:",
      explanation:
        "A display of goods is an invitation to treat, not an offer. The customer makes the offer at the till, which the retailer may accept or reject.",
      relatedConcepts: ["Invitation to treat", "Offer and acceptance"],
    },
    [
      ["An invitation to treat", true, "Correct — the customer makes the offer; the shop accepts it."],
      ["A firm offer the shop must honour", false, "A display is not an offer."],
      ["Acceptance of an offer", false, "No offer has yet been made."],
      ["A binding contract", false, "No contract exists until offer and acceptance."],
    ],
  ),
  mc(
    {
      id: "x-law-con-2",
      topicId: "t-law-con",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about consideration is correct?",
      explanation:
        "Consideration must be sufficient (have some value in the eyes of the law) but need not be adequate (need not match the value of what is received). Past consideration is generally not valid.",
      relatedConcepts: ["Consideration", "Contract formation"],
    },
    [
      ["Consideration must be sufficient but need not be adequate", true, "Correct — courts do not assess whether the bargain is fair."],
      ["Consideration must always equal the market value exchanged", false, "Adequacy is not required."],
      ["Past consideration is always valid", false, "Past consideration is generally not good consideration."],
      ["Consideration is not required for a simple contract", false, "It is an essential element of a simple contract."],
    ],
  ),

  // ── Law: company (t-law-co)
  mc(
    {
      id: "x-law-co-1",
      topicId: "t-law-co",
      type: "mcq",
      difficulty: "medium",
      stem: "The principle that a company is a legal person separate from its members was established in which leading case?",
      explanation:
        "Salomon v A Salomon & Co Ltd established separate legal personality — the 'corporate veil'.",
      relatedConcepts: ["Separate legal personality", "Corporate veil"],
    },
    [
      ["Salomon v A Salomon & Co Ltd", true, "Correct — the foundational case on separate legal personality."],
      ["Donoghue v Stevenson", false, "That concerns the tort of negligence."],
      ["Carlill v Carbolic Smoke Ball Co", false, "That concerns offer and acceptance (unilateral contracts)."],
      ["Hadley v Baxendale", false, "That concerns remoteness of damage in contract."],
    ],
  ),
  mc(
    {
      id: "x-law-co-2",
      topicId: "t-law-co",
      type: "multi",
      difficulty: "hard",
      stem: "Under the Companies Act 2006, which of the following are statutory duties of a director? Select all that apply.",
      explanation:
        "CA 2006 codified directors' duties (ss171–177), including to act within powers, to promote the success of the company, and to exercise reasonable care, skill and diligence.",
      relatedConcepts: ["Directors' duties", "Companies Act 2006"],
    },
    [
      ["To promote the success of the company", true, "Correct — s172."],
      ["To exercise reasonable care, skill and diligence", true, "Correct — s174."],
      ["To avoid conflicts of interest", true, "Correct — s175."],
      ["To personally guarantee all company debts", false, "Separate legal personality means directors are not generally liable for company debts."],
    ],
  ),

  // ── MI: costing (t-mi-cost)
  calc({
    id: "x-mi-cost-1",
    topicId: "t-mi-cost",
    difficulty: "medium",
    stem: "Budgeted production overhead is £240,000 and budgeted labour hours are 30,000. Overheads are absorbed on a labour-hour basis. What is the overhead absorption rate (£ per labour hour)?",
    explanation: "OAR = budgeted overhead ÷ budgeted activity level.",
    workedSolution: "OAR = 240,000 ÷ 30,000 = £8 per labour hour",
    relatedConcepts: ["Overhead absorption", "OAR"],
    numericAnswer: 8,
    numericTolerance: 0,
    unit: "£/hour",
  }),
  calc({
    id: "x-mi-cost-2",
    topicId: "t-mi-cost",
    difficulty: "hard",
    stem: "Using an OAR of £8/labour hour, actual overheads were £250,000 and actual labour hours were 32,000. What is the over- or under-absorption (£)? Enter the absolute amount.",
    explanation:
      "Absorbed = actual hours × OAR = 32,000 × 8 = £256,000. Absorbed (256,000) > incurred (250,000), so overheads are over-absorbed by £6,000.",
    workedSolution: "Absorbed = 32,000 × 8 = 256,000\nOver-absorption = 256,000 − 250,000 = £6,000",
    relatedConcepts: ["Over/under absorption"],
    numericAnswer: 6000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "x-mi-cost-3",
      topicId: "t-mi-cost",
      type: "mcq",
      difficulty: "medium",
      stem: "When inventory levels increase during a period, how does profit under absorption costing compare with profit under marginal costing?",
      explanation:
        "Absorption costing carries fixed overhead into closing inventory, so when inventory rises, absorption profit is higher than marginal profit.",
      relatedConcepts: ["Absorption vs marginal costing"],
    },
    [
      ["Absorption profit is higher", true, "Correct — fixed overhead is deferred in rising inventory."],
      ["Marginal profit is higher", false, "This is true when inventory falls, not rises."],
      ["They are always equal", false, "They differ whenever inventory levels change."],
      ["It cannot be determined", false, "The direction is predictable from the inventory movement."],
    ],
  ),

  // ── MI: CVP (t-mi-cvp)
  calc({
    id: "x-mi-cvp-1",
    topicId: "t-mi-cvp",
    difficulty: "medium",
    stem: "A product sells for £50 with variable cost £30. Fixed costs are £80,000 and the target profit is £40,000. How many units must be sold to achieve the target profit?",
    explanation: "Units = (fixed costs + target profit) ÷ contribution per unit. Contribution = 50 − 30 = £20.",
    workedSolution: "Units = (80,000 + 40,000) ÷ 20 = 120,000 ÷ 20 = 6,000 units",
    relatedConcepts: ["Target profit", "Contribution"],
    numericAnswer: 6000,
    numericTolerance: 0,
    unit: "units",
  }),
  calc({
    id: "x-mi-cvp-2",
    topicId: "t-mi-cvp",
    difficulty: "medium",
    stem: "A product sells for £50 with variable cost £30. What is the contribution to sales (C/S) ratio, as a percentage?",
    explanation: "C/S ratio = contribution ÷ selling price.",
    workedSolution: "Contribution = 50 − 30 = 20\nC/S = 20 ÷ 50 = 40%",
    relatedConcepts: ["C/S ratio", "Contribution"],
    numericAnswer: 40,
    numericTolerance: 0,
    unit: "%",
  }),

  // ── MI: budgeting & variances (t-mi-bud)
  calc({
    id: "x-mi-bud-1",
    topicId: "t-mi-bud",
    difficulty: "hard",
    stem: "Standard material cost is 3 kg at £4/kg. Actual production used 5,000 kg costing £22,000 to make 1,600 units. What is the material price variance (£)? Enter the absolute amount.",
    explanation:
      "Price variance = (standard price − actual price) × actual quantity = actual quantity × std price − actual cost = (5,000 × 4) − 22,000 = 20,000 − 22,000 = −2,000 (adverse).",
    workedSolution: "Std cost of actual qty = 5,000 × 4 = 20,000\nActual cost = 22,000\nPrice variance = 2,000 Adverse",
    relatedConcepts: ["Material price variance", "Standard costing"],
    numericAnswer: 2000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "x-mi-bud-2",
    topicId: "t-mi-bud",
    difficulty: "hard",
    stem: "Standard usage is 3 kg per unit at £4/kg. Actual production was 1,600 units using 5,000 kg. What is the material usage variance (£)? Enter the absolute amount.",
    explanation:
      "Usage variance = (standard quantity for actual production − actual quantity) × standard price. Std qty = 1,600 × 3 = 4,800 kg.",
    workedSolution: "Std qty = 1,600 × 3 = 4,800 kg\nUsage var = (4,800 − 5,000) × 4 = −800 = £800 Adverse",
    relatedConcepts: ["Material usage variance"],
    numericAnswer: 800,
    numericTolerance: 0,
    unit: "£",
  }),

  // ── Principles of Taxation: income tax (t-tax-it)
  calc({
    id: "x-tax-it-1",
    topicId: "t-tax-it",
    difficulty: "hard",
    stem: "For 2024/25, an individual has adjusted net income of £110,000. The personal allowance is £12,570 and is reduced by £1 for every £2 of income above £100,000. What is their reduced personal allowance (£)?",
    explanation:
      "Income exceeds £100,000 by £10,000; the allowance is reduced by £10,000 ÷ 2 = £5,000.",
    workedSolution: "Excess = 110,000 − 100,000 = 10,000\nReduction = 10,000 ÷ 2 = 5,000\nPA = 12,570 − 5,000 = £7,570",
    relatedConcepts: ["Personal allowance taper", "Adjusted net income"],
    numericAnswer: 7570,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "x-tax-it-2",
      topicId: "t-tax-it",
      type: "mcq",
      difficulty: "medium",
      stem: "For 2024/25, in which order is income taxed for an individual?",
      explanation:
        "Income is taxed in the order: non-savings income first, then savings income, then dividend income (each using the relevant rates/bands).",
      relatedConcepts: ["Income tax computation", "Order of taxation"],
    },
    [
      ["Non-savings, then savings, then dividends", true, "Correct — the statutory order of taxation."],
      ["Dividends, then savings, then non-savings", false, "This reverses the correct order."],
      ["All income is taxed at a single blended rate", false, "Different types use different rates and bands."],
      ["Savings, then non-savings, then dividends", false, "Non-savings income is taxed first."],
    ],
  ),

  // ── Principles of Taxation: VAT (t-tax-vat)
  calc({
    id: "x-tax-vat-1",
    topicId: "t-tax-vat",
    difficulty: "medium",
    stem: "In a quarter, a VAT-registered trader makes standard-rated sales of £200,000 (excluding VAT) and incurs recoverable input VAT of £18,000. At a 20% standard rate, what is the net VAT payable to HMRC (£)?",
    explanation: "Output VAT = 20% × sales; net VAT = output VAT − input VAT.",
    workedSolution: "Output VAT = 200,000 × 20% = 40,000\nNet VAT = 40,000 − 18,000 = £22,000",
    relatedConcepts: ["Output VAT", "Input VAT"],
    numericAnswer: 22000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "x-tax-vat-2",
      topicId: "t-tax-vat",
      type: "mcq",
      difficulty: "medium",
      stem: "For 2024/25, a business must register for VAT once taxable turnover in the previous 12 months exceeds which threshold?",
      explanation:
        "From 1 April 2024 the VAT registration threshold is £90,000 of taxable turnover (rolling 12-month historic test).",
      relatedConcepts: ["VAT registration", "Registration threshold"],
    },
    [
      ["£90,000", true, "Correct — the threshold rose to £90,000 from April 2024."],
      ["£85,000", false, "This was the threshold up to March 2024."],
      ["£100,000", false, "Not the VAT threshold."],
      ["£50,000", false, "Too low — that is the corporation tax small-profits limit."],
    ],
  ),

  // ═══════════════ PROFESSIONAL LEVEL ═══════════════

  // ── Audit & Assurance: planning & risk (t-aa-plan)
  mc(
    {
      id: "x-aa-plan-1",
      topicId: "t-aa-plan",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "You are planning the audit of Delta Ltd. The directors' bonuses are based on reported profit, and the company is close to breaching a bank loan covenant based on the year-end current ratio.",
      stem: "Which audit risk is most directly raised by these two facts?",
      explanation:
        "Both facts create incentives to manipulate the financial statements (overstate profit; improve the current ratio), increasing the risk of material misstatement due to fraud/management bias.",
      relatedConcepts: ["Audit risk", "Management bias", "Fraud risk"],
    },
    [
      ["Increased risk of material misstatement from management bias/manipulation", true, "Correct — bonus and covenant pressures incentivise manipulation."],
      ["Increased detection risk only", false, "Detection risk relates to the auditor's procedures, not client incentives."],
      ["Reduced inherent risk", false, "These pressures increase, not reduce, inherent risk."],
      ["No effect on audit risk", false, "These are classic fraud risk factors."],
    ],
  ),
  mc(
    {
      id: "x-aa-plan-2",
      topicId: "t-aa-plan",
      type: "mcq",
      difficulty: "medium",
      stem: "Audit risk is best expressed as which of the following?",
      explanation:
        "Audit risk = inherent risk × control risk × detection risk. The first two are the risk of material misstatement; detection risk is controlled by the auditor.",
      relatedConcepts: ["Audit risk model"],
    },
    [
      ["Inherent risk × control risk × detection risk", true, "Correct — the audit risk model."],
      ["Inherent risk + control risk − detection risk", false, "The model is multiplicative, not additive."],
      ["Materiality × sample size", false, "That is not the audit risk model."],
      ["Control risk ÷ detection risk", false, "Incorrect formulation."],
    ],
  ),

  // ── Audit & Assurance: evidence (t-aa-evid)
  mc(
    {
      id: "x-aa-evid-1",
      topicId: "t-aa-evid",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "The auditor is testing trade receivables. They are concerned that some recorded receivables may not actually exist (fictitious sales).",
      stem: "Which assertion is being tested, and which procedure best addresses it?",
      explanation:
        "The concern is the existence assertion. Direct confirmation (a receivables circularisation) to customers provides strong external evidence of existence.",
      relatedConcepts: ["Assertions", "Existence", "External confirmation"],
    },
    [
      ["Existence — tested by direct confirmation from customers", true, "Correct — external confirmation evidences existence."],
      ["Completeness — tested by reviewing the cash book", false, "Completeness concerns omitted items, not fictitious ones."],
      ["Valuation — tested by recalculating depreciation", false, "Depreciation is irrelevant to receivables existence."],
      ["Classification — tested by inspecting board minutes", false, "Not the most direct test of existence."],
    ],
  ),
  mc(
    {
      id: "x-aa-evid-2",
      topicId: "t-aa-evid",
      type: "mcq",
      difficulty: "medium",
      stem: "Which source of audit evidence is generally the MOST reliable?",
      explanation:
        "Evidence obtained directly by the auditor from an independent external source is generally the most reliable.",
      relatedConcepts: ["Reliability of evidence"],
    },
    [
      ["External confirmation obtained directly by the auditor", true, "Correct — external + auditor-obtained = most reliable."],
      ["Oral representation from a director", false, "Oral, internal evidence is among the least reliable."],
      ["A photocopy provided by the client", false, "Copies and internal evidence are less reliable."],
      ["The client's own internal spreadsheet", false, "Internally generated evidence is weaker."],
    ],
  ),

  // ── Audit & Assurance: reporting (t-aa-rep)
  mc(
    {
      id: "x-aa-rep-1",
      topicId: "t-aa-rep",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Inventory is materially overstated and the directors refuse to adjust it. The misstatement is material but confined to inventory; the rest of the financial statements are fairly stated.",
      stem: "What audit opinion should be issued?",
      explanation:
        "A material but not pervasive misstatement leads to a qualified ('except for') opinion. An adverse opinion is reserved for pervasive misstatements.",
      relatedConcepts: ["Modified opinions", "Material vs pervasive"],
    },
    [
      ["A qualified ('except for') opinion", true, "Correct — material but not pervasive."],
      ["An adverse opinion", false, "Adverse is for pervasive misstatements."],
      ["A disclaimer of opinion", false, "Disclaimers arise from a pervasive lack of evidence, not a known misstatement."],
      ["An unmodified opinion", false, "A material uncorrected misstatement requires modification."],
    ],
  ),

  // ── FAR: revenue (t-far-rev)
  mc(
    {
      id: "x-far-rev-1",
      topicId: "t-far-rev",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the correct order of the IFRS 15 five-step revenue model?",
      explanation:
        "1) Identify the contract; 2) identify performance obligations; 3) determine the transaction price; 4) allocate it to the obligations; 5) recognise revenue as/when obligations are satisfied.",
      relatedConcepts: ["IFRS 15", "Five-step model"],
    },
    [
      ["Contract → obligations → price → allocate → recognise", true, "Correct — the IFRS 15 sequence."],
      ["Price → contract → recognise → obligations → allocate", false, "Incorrect order."],
      ["Recognise → allocate → price → obligations → contract", false, "This is reversed."],
      ["Obligations → recognise → contract → price → allocate", false, "Incorrect order."],
    ],
  ),

  // ── FAR: leases IFRS 16 (t-far-lease)
  calc({
    id: "x-far-lease-1",
    topicId: "t-far-lease",
    difficulty: "hard",
    stem: "A lessee enters a 3-year lease with payments of £10,000 in arrears each year. The interest rate implicit is 8% (3-year annuity factor at 8% = 2.577). What is the initial lease liability (right-of-use measurement basis), to the nearest £?",
    explanation:
      "The lease liability is the present value of the lease payments = annual payment × annuity factor.",
    workedSolution: "Liability = 10,000 × 2.577 = £25,770",
    relatedConcepts: ["IFRS 16", "Lease liability", "Present value"],
    numericAnswer: 25770,
    numericTolerance: 50,
    unit: "£",
  }),
  mc(
    {
      id: "x-far-lease-2",
      topicId: "t-far-lease",
      type: "mcq",
      difficulty: "medium",
      stem: "Under IFRS 16, how does a lessee generally account for a lease (other than short-term/low-value exemptions)?",
      explanation:
        "The lessee recognises a right-of-use asset and a lease liability; the asset is depreciated and the liability accrues interest.",
      relatedConcepts: ["IFRS 16", "Right-of-use asset"],
    },
    [
      ["Recognise a right-of-use asset and a lease liability", true, "Correct — the single lessee model under IFRS 16."],
      ["Charge rentals to profit or loss on a straight-line basis only", false, "That is the old operating-lease (IAS 17) treatment."],
      ["Recognise the leased asset at full market value", false, "It is measured at the present value of payments plus initial costs."],
      ["Recognise nothing until ownership transfers", false, "Recognition is at commencement of the lease."],
    ],
  ),

  // ── FAR: deferred tax (t-far-tax)
  calc({
    id: "x-far-tax-1",
    topicId: "t-far-tax",
    difficulty: "hard",
    stem: "A liability has a carrying amount of £50,000 and a tax base of £nil (the related expense is deductible only when paid). The tax rate is 25%. What deferred tax asset arises (£)?",
    explanation:
      "Carrying amount of a liability > tax base gives a deductible temporary difference, creating a deferred tax asset.",
    workedSolution: "Temp diff = 50,000 − 0 = 50,000 (deductible)\nDT asset = 50,000 × 25% = £12,500",
    relatedConcepts: ["Deductible temporary difference", "Deferred tax asset"],
    numericAnswer: 12500,
    numericTolerance: 0,
    unit: "£",
  }),

  // ── FAR: consolidation (t-far-cons)
  calc({
    id: "x-far-cons-1",
    topicId: "t-far-cons",
    difficulty: "hard",
    stem: "P acquired 75% of S for £600,000. At acquisition S's net assets were £640,000. NCI is measured at fair value of £190,000. What is goodwill under the full goodwill method (£)?",
    explanation:
      "Full goodwill = consideration + fair value of NCI − fair value of net assets acquired.",
    workedSolution: "Goodwill = 600,000 + 190,000 − 640,000 = £150,000",
    relatedConcepts: ["Full goodwill", "NCI at fair value"],
    numericAnswer: 150000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "x-far-cons-2",
    topicId: "t-far-cons",
    difficulty: "hard",
    stem: "During the year P sold goods to its subsidiary S for £40,000, marking up cost by 25%. Half of the goods remain in S's inventory at year end. What is the unrealised profit (PURP) to eliminate (£)?",
    explanation:
      "Profit in the £40,000 sale = 40,000 × 25/125 = £8,000. Half remains unsold, so PURP = £4,000.",
    workedSolution: "Profit in sale = 40,000 × 25/125 = 8,000\nIn closing inventory (½): 8,000 × 50% = £4,000",
    relatedConcepts: ["Intra-group trading", "Unrealised profit"],
    numericAnswer: 4000,
    numericTolerance: 0,
    unit: "£",
  }),

  // ── Tax Compliance: corporation tax (t-tc-ct)
  calc({
    id: "x-tc-ct-1",
    topicId: "t-tc-ct",
    difficulty: "hard",
    stem: "A company buys plant for £30,000 in the year. The Annual Investment Allowance is available in full. Ignoring other items, by how much do capital allowances reduce taxable profits this year (£)?",
    explanation:
      "The AIA gives 100% relief on qualifying plant up to the annual limit (£1m), so the full £30,000 is relieved this year.",
    workedSolution: "AIA = 100% × 30,000 = £30,000",
    relatedConcepts: ["Capital allowances", "Annual Investment Allowance"],
    numericAnswer: 30000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "x-tc-ct-2",
      topicId: "t-tc-ct",
      type: "mcq",
      difficulty: "medium",
      stem: "For the financial year 2024, what is the main rate of UK corporation tax (taxable profits above £250,000)?",
      explanation:
        "The main rate is 25% for profits above £250,000; the small-profits rate of 19% applies up to £50,000, with marginal relief between.",
      relatedConcepts: ["Corporation tax rates", "Marginal relief"],
    },
    [
      ["25%", true, "Correct — the main rate from April 2023 onwards."],
      ["19%", false, "19% is the small-profits rate (up to £50,000)."],
      ["20%", false, "Not a current corporation tax rate."],
      ["21%", false, "Not a current corporation tax rate."],
    ],
  ),

  // ── Tax Compliance: capital gains (t-tc-cgt)
  calc({
    id: "x-tc-cgt-1",
    topicId: "t-tc-cgt",
    difficulty: "hard",
    stem: "In 2024/25 an individual sells shares for £30,000 that cost £8,000. The annual exempt amount is £3,000. What is the taxable (chargeable) gain after the annual exempt amount (£)?",
    explanation: "Gain = proceeds − cost; then deduct the annual exempt amount.",
    workedSolution: "Gain = 30,000 − 8,000 = 22,000\nTaxable = 22,000 − 3,000 = £19,000",
    relatedConcepts: ["Chargeable gains", "Annual exempt amount"],
    numericAnswer: 19000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "x-tc-cgt-2",
      topicId: "t-tc-cgt",
      type: "mcq",
      difficulty: "medium",
      stem: "Business Asset Disposal Relief (BADR), where available, taxes qualifying gains at what rate (2024/25)?",
      explanation:
        "BADR applies a 10% CGT rate to qualifying gains up to the £1m lifetime limit.",
      relatedConcepts: ["Business Asset Disposal Relief", "CGT reliefs"],
    },
    [
      ["10%", true, "Correct — 10% on qualifying gains up to the £1m lifetime limit."],
      ["20%", false, "20% is the standard higher rate for most chargeable assets."],
      ["18%", false, "18% is the basic-rate band rate (e.g. on residential property/other assets)."],
      ["0%", false, "BADR reduces the rate to 10%, not nil."],
    ],
  ),

  // ── BPT: business tax planning (t-bpt-plan)
  mc(
    {
      id: "x-bpt-plan-1",
      topicId: "t-bpt-plan",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A client asks you to help structure a transaction. One option uses statutory reliefs as Parliament intended; another deliberately misreports figures to HMRC to reduce tax.",
      stem: "How should these two options be characterised?",
      explanation:
        "Using reliefs as intended is legitimate tax planning. Deliberately misreporting is tax evasion — illegal — and must not be facilitated.",
      relatedConcepts: ["Tax planning vs evasion", "Professional ethics"],
    },
    [
      ["The first is legitimate planning; the second is illegal evasion", true, "Correct — evasion is a criminal offence and must be refused/reported."],
      ["Both are acceptable ways to reduce tax", false, "Evasion is never acceptable."],
      ["Both are illegal", false, "Using reliefs as intended is legal."],
      ["The first is evasion; the second is planning", false, "This reverses the definitions."],
    ],
  ),
  mc(
    {
      id: "x-bpt-plan-2",
      topicId: "t-bpt-plan",
      type: "mcq",
      difficulty: "hard",
      stem: "A group of companies has one profitable company and one loss-making company. Which relief allows current-year trading losses to be surrendered between them?",
      explanation:
        "Group relief allows a loss-making 75% group company to surrender losses to a profitable group company.",
      relatedConcepts: ["Group relief", "Loss planning"],
    },
    [
      ["Group relief", true, "Correct — surrender of losses within a 75% group."],
      ["Rollover relief", false, "That defers gains on replacement of business assets."],
      ["Gift relief", false, "That defers gains on gifts of business assets."],
      ["Entrepreneurs' relief", false, "That (now BADR) reduces CGT on disposals, not loss surrender."],
    ],
  ),

  // ── FM: investment appraisal (t-fm-inv)
  mc(
    {
      id: "x-fm-inv-1",
      topicId: "t-fm-inv",
      type: "mcq",
      difficulty: "medium",
      stem: "What does the internal rate of return (IRR) represent?",
      explanation:
        "The IRR is the discount rate at which a project's NPV is zero. A project is acceptable if its IRR exceeds the cost of capital.",
      relatedConcepts: ["IRR", "NPV"],
    },
    [
      ["The discount rate at which NPV is zero", true, "Correct — accept if IRR > cost of capital."],
      ["The accounting rate of return", false, "ARR is a different, profit-based measure."],
      ["The payback period in years", false, "Payback measures time to recover the outlay."],
      ["The company's cost of capital", false, "IRR is compared against the cost of capital."],
    ],
  ),
  calc({
    id: "x-fm-inv-2",
    topicId: "t-fm-inv",
    difficulty: "hard",
    stem: "A project costs £200,000 and generates £80,000 per year for 4 years. At a 10% cost of capital the 4-year cumulative annuity factor is 3.170. What is the NPV (£)?",
    explanation: "For a constant annual cash flow, PV of inflows = annual flow × annuity factor; NPV = PV inflows − outlay.",
    workedSolution: "PV inflows = 80,000 × 3.170 = 253,600\nNPV = 253,600 − 200,000 = £53,600",
    relatedConcepts: ["NPV", "Annuity factor"],
    numericAnswer: 53600,
    numericTolerance: 100,
    unit: "£",
  }),

  // ── FM: cost of capital (t-fm-cap)
  calc({
    id: "x-fm-cap-1",
    topicId: "t-fm-cap",
    difficulty: "hard",
    stem: "Using CAPM, the risk-free rate is 4%, the equity market premium is 6% and the company's equity beta is 1.3. What is the cost of equity (%)?",
    explanation: "CAPM: cost of equity = risk-free rate + beta × market risk premium.",
    workedSolution: "Ke = 4% + 1.3 × 6% = 4% + 7.8% = 11.8%",
    relatedConcepts: ["CAPM", "Cost of equity"],
    numericAnswer: 11.8,
    numericTolerance: 0.1,
    unit: "%",
  }),
  calc({
    id: "x-fm-cap-2",
    topicId: "t-fm-cap",
    difficulty: "hard",
    stem: "A company is financed 60% equity (cost 12%) and 40% debt (after-tax cost 6%), by market value. What is the WACC (%)?",
    explanation: "WACC = (E/V × Ke) + (D/V × post-tax Kd).",
    workedSolution: "WACC = 0.6 × 12% + 0.4 × 6% = 7.2% + 2.4% = 9.6%",
    relatedConcepts: ["WACC", "Capital structure"],
    numericAnswer: 9.6,
    numericTolerance: 0.1,
    unit: "%",
  }),

  // ── BST: strategic analysis (t-bst-an)
  mc(
    {
      id: "x-bst-an-1",
      topicId: "t-bst-an",
      type: "mcq",
      difficulty: "medium",
      stem: "Which framework analyses the macro-environment across Political, Economic, Social, Technological, Environmental and Legal factors?",
      explanation:
        "PESTEL analyses macro-environmental factors. Porter's Five Forces analyses industry competition; SWOT combines internal and external.",
      relatedConcepts: ["PESTEL", "Environmental analysis"],
    },
    [
      ["PESTEL", true, "Correct — macro-environmental analysis."],
      ["Porter's Five Forces", false, "That analyses industry/competitive forces."],
      ["The BCG matrix", false, "That analyses a product/business portfolio."],
      ["Ansoff's matrix", false, "That analyses product/market growth strategies."],
    ],
  ),
  mc(
    {
      id: "x-bst-an-2",
      topicId: "t-bst-an",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "An industry has many suppliers offering undifferentiated inputs, high barriers to entry, and customers who cannot easily switch.",
      stem: "Applying Porter's Five Forces, which force is comparatively WEAK here?",
      explanation:
        "Many undifferentiated suppliers means low supplier bargaining power. High entry barriers reduce threat of entry, and lock-in reduces buyer power.",
      relatedConcepts: ["Porter's Five Forces", "Bargaining power"],
    },
    [
      ["Bargaining power of suppliers", true, "Correct — many undifferentiated suppliers means weak supplier power."],
      ["Threat of new entrants", false, "High barriers make this weak too, but suppliers are the clearest answer to 'weak'."],
      ["Bargaining power of buyers", false, "Switching difficulty reduces buyer power, but the question asks which is weak — supplier power is weakest given many undifferentiated suppliers."],
      ["Threat of substitutes", false, "Not described in the scenario."],
    ],
  ),

  // ═══════════════ ADVANCED LEVEL ═══════════════

  // ── Corporate Reporting: complex groups (t-cr-grp)
  mc(
    {
      id: "x-cr-grp-1",
      topicId: "t-cr-grp",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "P already holds 30% of A (an associate, equity accounted) and acquires a further 40% to gain control (now a 70% subsidiary).",
      stem: "How is the previously held 30% interest treated on the date control is achieved?",
      explanation:
        "On a step acquisition achieving control, the previously held equity interest is remeasured to fair value at the acquisition date, with any gain/loss recognised in profit or loss; this fair value forms part of the consideration for goodwill.",
      relatedConcepts: ["Step acquisition", "Remeasurement to fair value"],
    },
    [
      ["Remeasured to fair value at the date control is obtained, with the gain/loss in profit or loss", true, "Correct — IFRS 3 treatment of a business combination achieved in stages."],
      ["Left at its original cost with no adjustment", false, "It must be remeasured to fair value."],
      ["Written off entirely to equity", false, "Any gain/loss goes to profit or loss, not a write-off."],
      ["Treated as goodwill in full", false, "It is remeasured to fair value, then included in the goodwill calculation."],
    ],
  ),
  mc(
    {
      id: "x-cr-grp-2",
      topicId: "t-cr-grp",
      type: "mcq",
      difficulty: "hard",
      stem: "An investor holds 30% of the voting shares of an entity and has significant influence but not control. How is this interest accounted for in the consolidated financial statements?",
      explanation:
        "Significant influence (typically 20–50%) means the investment is an associate, accounted for using the equity method (IAS 28).",
      relatedConcepts: ["Associates", "Equity method", "Significant influence"],
    },
    [
      ["As an associate using the equity method", true, "Correct — significant influence → equity accounting."],
      ["As a subsidiary, fully consolidated", false, "Full consolidation requires control."],
      ["At fair value through OCI only", false, "Significant influence requires equity accounting, not just FVOCI."],
      ["As a simple trade investment at cost", false, "Significant influence requires the equity method."],
    ],
  ),

  // ── SBM: financial strategy (t-sbm-fin)
  calc({
    id: "x-sbm-fin-1",
    topicId: "t-sbm-fin",
    difficulty: "hard",
    stem: "A company has post-tax earnings of £4,000,000. A comparable listed peer trades on a P/E ratio of 12. Using the P/E method, what is the indicative equity value (£m)? Enter the number of millions.",
    explanation: "P/E valuation: equity value = earnings × P/E ratio.",
    workedSolution: "Value = 4,000,000 × 12 = £48,000,000 = £48m",
    relatedConcepts: ["P/E valuation", "Business valuation"],
    numericAnswer: 48,
    numericTolerance: 0,
    unit: "£m",
  }),
  mc(
    {
      id: "x-sbm-fin-2",
      topicId: "t-sbm-fin",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "The board is evaluating an acquisition. The finance director, who will receive a large bonus if the deal completes, presents only optimistic forecasts and omits integration risks.",
      stem: "From an ICAEW Code of Ethics perspective, what is the principal concern?",
      explanation:
        "The self-interest threat (the bonus) compromises objectivity; presenting one-sided information also threatens integrity and professional behaviour. The advice must be objective and balanced.",
      relatedConcepts: ["Ethics", "Objectivity", "Self-interest threat"],
    },
    [
      ["A self-interest threat undermining objectivity and integrity", true, "Correct — the bonus biases the advice; balanced analysis is required."],
      ["No ethical issue, as forecasts are always optimistic", false, "Biased, one-sided advice breaches objectivity."],
      ["Only a confidentiality concern", false, "Confidentiality is not the issue here."],
      ["A purely legal, not ethical, matter", false, "It is squarely an ethics (objectivity/integrity) matter."],
    ],
  ),

  // ── Case Study: skills (t-cs-skills)
  mc(
    {
      id: "x-cs-skills-1",
      topicId: "t-cs-skills",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "In the ACA Case Study, candidates receive Advance Information about the company and its industry before the exam, then face exam-day requirements with additional new information.",
      stem: "What is the best use of the Advance Information?",
      explanation:
        "Advance Information should be analysed beforehand (industry, business model, ratios, risks) so that exam time is spent applying that understanding to the new exam-day information — not learning the company from scratch.",
      relatedConcepts: ["Advance Information", "Exam technique"],
    },
    [
      ["Analyse the company and industry beforehand so exam time is spent applying judgement to new information", true, "Correct — preparation frees exam time for analysis and recommendations."],
      ["Memorise it verbatim to reproduce in the exam", false, "Marks reward application and judgement, not rote reproduction."],
      ["Ignore it and rely only on exam-day material", false, "The Advance Information is essential context."],
      ["Use it only for the executive summary", false, "It informs the whole answer, not just the summary."],
    ],
  ),
  mc(
    {
      id: "x-cs-skills-2",
      topicId: "t-cs-skills",
      type: "mcq",
      difficulty: "medium",
      stem: "The Case Study assessment rewards four professional skills. Which of the following is one of them?",
      explanation:
        "The Case Study marks Assimilating & Using Information, Structuring Problems & Solutions, Applying Judgement, and Conclusions & Recommendations.",
      relatedConcepts: ["Professional skills", "Case Study marking"],
    },
    [
      ["Applying judgement", true, "Correct — one of the four assessed professional skills."],
      ["Memorising accounting standards", false, "Rote memorisation is not a marked professional skill."],
      ["Typing speed", false, "Not an assessed skill."],
      ["Citing case law verbatim", false, "Not a Case Study professional skill."],
    ],
  ),
];

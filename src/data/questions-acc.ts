// ACC (Accounting) — Certificate Level question bank.
// ICAEW Certificate objective testing style: short stems with small data sets,
// single/two-step computations, and plausible MCQ distractors.
// Original questions (not copied from ICAEW past papers). Heavily numeric.
import type { Question } from "@/types/domain";
import { mc, calc } from "@/data/question-helpers";

export const accQuestions: Question[] = [
  // ── Double-entry — t-acc-de
  mc(
    {
      id: "ac-de-1",
      topicId: "t-acc-de",
      type: "mcq",
      difficulty: "easy",
      scenario: "A business buys office equipment for £4,000, paying by cheque from its bank account.",
      stem: "What are the correct double entries to record this transaction?",
      explanation:
        "Equipment is an asset that increases (debit). The bank balance (an asset) decreases (credit).",
      relatedConcepts: ["Debits and credits", "Assets"],
    },
    [
      ["Debit equipment £4,000; credit bank £4,000", true, "Correct — increase the asset bought, decrease the bank."],
      ["Debit bank £4,000; credit equipment £4,000", false, "This reverses the entries; the bank is reduced, not increased."],
      ["Debit equipment £4,000; credit capital £4,000", false, "No new capital was introduced; the bank funded the purchase."],
      ["Debit purchases £4,000; credit bank £4,000", false, "Equipment is a non-current asset, not a purchase of goods for resale."],
    ],
  ),
  mc(
    {
      id: "ac-de-2",
      topicId: "t-acc-de",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following accounts normally has a credit balance?",
      explanation:
        "Liabilities, capital and income carry credit balances; assets and expenses carry debit balances.",
      relatedConcepts: ["Normal balances", "Accounting equation"],
    },
    [
      ["Trade payables", true, "Correct — payables are a liability, which has a credit balance."],
      ["Trade receivables", false, "Receivables are an asset and carry a debit balance."],
      ["Motor vehicles", false, "An asset, carrying a debit balance."],
      ["Rent expense", false, "An expense, carrying a debit balance."],
    ],
  ),
  calc({
    id: "ac-de-3",
    topicId: "t-acc-de",
    difficulty: "easy",
    scenario:
      "At the year end a sole trader has the following balances: assets £85,000 and liabilities £32,000.",
    stem: "Using the accounting equation, what is the owner's capital (£)?",
    explanation: "The accounting equation states Assets = Capital + Liabilities, so Capital = Assets − Liabilities.",
    workedSolution: "Capital = 85,000 − 32,000 = £53,000",
    relatedConcepts: ["Accounting equation", "Capital"],
    numericAnswer: 53000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-de-4",
    topicId: "t-acc-de",
    difficulty: "medium",
    scenario:
      "A trader's capital at the start of the year was £40,000. During the year the owner introduced £10,000 of new capital, drew £18,000 for personal use, and the business made a profit of £25,000.",
    stem: "What is the closing capital balance (£)?",
    explanation:
      "Closing capital = opening capital + new capital introduced + profit − drawings.",
    workedSolution: "= 40,000 + 10,000 + 25,000 − 18,000 = £57,000",
    relatedConcepts: ["Capital account", "Drawings"],
    numericAnswer: 57000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "ac-de-5",
      topicId: "t-acc-de",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A business sells goods on credit to a customer for £2,500 plus VAT at 20%. The business is VAT registered.",
      stem: "What is the correct entry to the trade receivables (debtor) account?",
      explanation:
        "The customer owes the full VAT-inclusive amount. The output VAT (£500) is a liability owed to HMRC and is credited; revenue of £2,500 is credited.",
      relatedConcepts: ["VAT", "Output tax", "Credit sales"],
    },
    [
      ["Debit receivables £3,000", true, "Correct — the customer owes the gross amount including VAT (2,500 + 500)."],
      ["Debit receivables £2,500", false, "The customer also owes the £500 VAT, so the debit is £3,000."],
      ["Debit receivables £2,000", false, "VAT is added to, not deducted from, the net sale."],
      ["Credit receivables £3,000", false, "Sales on credit increase (debit) receivables, not credit them."],
    ],
  ),

  // ── Accruals & prepayments — t-acc-adj
  calc({
    id: "ac-adj-1",
    topicId: "t-acc-adj",
    difficulty: "easy",
    scenario:
      "A business pays rent of £24,000 covering the year to 31 March 20X5. Its financial year ends on 31 December 20X4.",
    stem: "What rent prepayment should be carried forward at 31 December 20X4 (£)?",
    explanation:
      "The rent paid covers 3 months (Jan–Mar 20X5) beyond the year end. The prepayment is the proportion relating to next year.",
    workedSolution: "Prepayment = 24,000 × 3/12 = £6,000",
    relatedConcepts: ["Prepayments", "Matching concept"],
    numericAnswer: 6000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-adj-2",
    topicId: "t-acc-adj",
    difficulty: "medium",
    scenario:
      "During the year a business paid electricity bills totalling £8,200. At the year end an unpaid bill of £900 had been incurred but not recorded, and the opening accrual was £700.",
    stem: "What is the electricity expense for the year in the statement of profit or loss (£)?",
    explanation:
      "Expense = cash paid + closing accrual − opening accrual.",
    workedSolution: "= 8,200 + 900 − 700 = £8,400",
    relatedConcepts: ["Accruals", "Expense recognition"],
    numericAnswer: 8400,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-adj-3",
    topicId: "t-acc-adj",
    difficulty: "medium",
    scenario:
      "A business sublets part of its premises for £1,500 per month. During the year to 31 December 20X4 it received £19,500 in cash from the tenant.",
    stem: "What amount of rental income should be recognised for the year, and what is the resulting balance (£)?",
    explanation:
      "Annual income earned = 1,500 × 12 = £18,000. Cash received was £19,500, so £1,500 relates to next year — income recognised is £18,000.",
    workedSolution: "Income earned = 1,500 × 12 = £18,000 (with £1,500 deferred income carried forward)",
    relatedConcepts: ["Deferred income", "Accrued income"],
    numericAnswer: 18000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-adj-4",
    topicId: "t-acc-adj",
    difficulty: "hard",
    scenario:
      "Insurance is paid annually in advance on 1 May. The payment on 1 May 20X3 was £12,000 and on 1 May 20X4 it rose to £15,000. The year end is 31 December 20X4.",
    stem: "What is the insurance expense charged for the year ended 31 December 20X4 (£)?",
    explanation:
      "Jan–Apr 20X4 (4 months) is covered by the 20X3 payment; May–Dec 20X4 (8 months) by the 20X4 payment.",
    workedSolution: "= (12,000 × 4/12) + (15,000 × 8/12) = 4,000 + 10,000 = £14,000",
    relatedConcepts: ["Prepayments", "Time apportionment"],
    numericAnswer: 14000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "ac-adj-5",
      topicId: "t-acc-adj",
      type: "mcq",
      difficulty: "easy",
      stem: "How is a prepayment of an expense presented in the statement of financial position?",
      explanation:
        "A prepayment is a current asset — the business has paid for a benefit it has not yet consumed.",
      relatedConcepts: ["Prepayments", "Current assets"],
    },
    [
      ["As a current asset", true, "Correct — a prepaid expense is a current asset."],
      ["As a current liability", false, "An accrual (amount owed) is a liability; a prepayment is an asset."],
      ["As a deduction from capital", false, "Prepayments are not adjusted against capital."],
      ["As revenue", false, "A prepayment is an asset, not income."],
    ],
  ),

  // ── Financial statements — t-acc-fs
  calc({
    id: "ac-fs-1",
    topicId: "t-acc-fs",
    difficulty: "easy",
    scenario:
      "A trader has: sales £150,000, cost of sales £90,000, distribution costs £18,000 and administrative expenses £22,000.",
    stem: "What is the profit for the year (£)?",
    explanation:
      "Gross profit = sales − cost of sales; profit = gross profit − operating expenses.",
    workedSolution: "Gross profit = 150,000 − 90,000 = 60,000\nProfit = 60,000 − 18,000 − 22,000 = £20,000",
    relatedConcepts: ["Profit or loss", "Gross profit"],
    numericAnswer: 20000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-fs-2",
    topicId: "t-acc-fs",
    difficulty: "medium",
    scenario:
      "Opening inventory was £12,000, purchases were £80,000 and closing inventory was £15,000. Carriage inwards of £2,000 was also incurred.",
    stem: "What is the cost of sales for the year (£)?",
    explanation:
      "Cost of sales = opening inventory + purchases + carriage inwards − closing inventory.",
    workedSolution: "= 12,000 + 80,000 + 2,000 − 15,000 = £79,000",
    relatedConcepts: ["Cost of sales", "Carriage inwards"],
    numericAnswer: 79000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-fs-3",
    topicId: "t-acc-fs",
    difficulty: "medium",
    scenario:
      "A business has gross profit of £120,000 on sales of £400,000.",
    stem: "What is the gross profit margin, to one decimal place (%)?",
    explanation:
      "Gross profit margin = gross profit ÷ sales × 100.",
    workedSolution: "= 120,000 ÷ 400,000 × 100 = 30.0%",
    relatedConcepts: ["Profitability ratios", "Gross margin"],
    numericAnswer: 30,
    numericTolerance: 0.1,
    unit: "%",
  }),
  calc({
    id: "ac-fs-4",
    topicId: "t-acc-fs",
    difficulty: "medium",
    scenario:
      "At the year end a company reports: non-current assets £200,000, inventory £30,000, receivables £25,000, cash £5,000, payables £40,000 and a bank loan repayable in five years of £60,000.",
    stem: "What is total equity (net assets) (£)?",
    explanation:
      "Net assets = total assets − total liabilities, which equals equity.",
    workedSolution:
      "Total assets = 200,000 + 30,000 + 25,000 + 5,000 = 260,000\nTotal liabilities = 40,000 + 60,000 = 100,000\nEquity = 260,000 − 100,000 = £160,000",
    relatedConcepts: ["Net assets", "Statement of financial position"],
    numericAnswer: 160000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "ac-fs-5",
      topicId: "t-acc-fs",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following items would appear in the statement of financial position rather than the statement of profit or loss?",
      explanation:
        "The statement of financial position shows assets, liabilities and equity at a point in time; profit or loss shows income and expenses for a period.",
      relatedConcepts: ["Financial statements", "Classification"],
    },
    [
      ["Trade payables", true, "Correct — payables are a liability shown in the statement of financial position."],
      ["Sales revenue", false, "Revenue is income shown in profit or loss."],
      ["Depreciation charge for the year", false, "The charge is an expense in profit or loss (accumulated depreciation is in the SOFP)."],
      ["Carriage outwards", false, "A distribution expense in profit or loss."],
    ],
  ),

  // ── Bank reconciliations — t-acc-bank
  calc({
    id: "ac-bank-1",
    topicId: "t-acc-bank",
    difficulty: "easy",
    scenario:
      "The cash book shows a balance of £3,200 (debit). Unpresented cheques total £900 and outstanding lodgements (deposits not yet credited) total £400.",
    stem: "What is the balance shown on the bank statement (£)?",
    explanation:
      "Start from the cash book balance: add back unpresented cheques (not yet deducted by the bank) and deduct outstanding lodgements (not yet added by the bank).",
    workedSolution: "Bank statement balance = 3,200 + 900 − 400 = £3,700",
    relatedConcepts: ["Bank reconciliation", "Unpresented cheques"],
    numericAnswer: 3700,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-bank-2",
    topicId: "t-acc-bank",
    difficulty: "medium",
    scenario:
      "The bank statement shows a balance of £5,600. There are unpresented cheques of £1,200 and outstanding lodgements of £800.",
    stem: "What is the corrected cash book balance (£)?",
    explanation:
      "Work from the bank statement to the cash book: deduct unpresented cheques and add outstanding lodgements.",
    workedSolution: "Cash book balance = 5,600 − 1,200 + 800 = £5,200",
    relatedConcepts: ["Bank reconciliation", "Outstanding lodgements"],
    numericAnswer: 5200,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-bank-3",
    topicId: "t-acc-bank",
    difficulty: "medium",
    scenario:
      "Before reconciliation the cash book shows £4,000. The bank statement reveals bank charges of £150 and a direct debit of £320 not yet recorded, plus interest received of £90 not yet recorded.",
    stem: "What is the corrected (adjusted) cash book balance (£)?",
    explanation:
      "Items on the bank statement not yet in the cash book are adjusted in the cash book: deduct charges and direct debits, add interest received.",
    workedSolution: "= 4,000 − 150 − 320 + 90 = £3,620",
    relatedConcepts: ["Adjusted cash book", "Bank charges"],
    numericAnswer: 3620,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "ac-bank-4",
      topicId: "t-acc-bank",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following requires an adjustment to the cash book (rather than appearing only on the bank reconciliation statement)?",
      explanation:
        "Items the business is unaware of until it sees the bank statement (charges, standing orders, direct debits, dishonoured cheques) must be entered in the cash book. Timing differences such as unpresented cheques only feature on the reconciliation.",
      relatedConcepts: ["Cash book adjustments", "Timing differences"],
    },
    [
      ["Bank charges shown on the statement", true, "Correct — these must be recorded in the cash book."],
      ["An unpresented cheque", false, "A timing difference shown only on the reconciliation, not adjusted in the cash book."],
      ["An outstanding lodgement", false, "A timing difference; no cash book adjustment is needed."],
      ["A cheque written and recorded but not yet cleared", false, "This is an unpresented cheque — a timing difference only."],
    ],
  ),
  mc(
    {
      id: "ac-bank-5",
      topicId: "t-acc-bank",
      type: "scenario",
      difficulty: "easy",
      scenario:
        "A business cash book shows a credit balance (an overdraft) of £1,500.",
      stem: "How is this balance shown in the statement of financial position?",
      explanation:
        "A credit balance in the cash book means the business is overdrawn — money is owed to the bank, a current liability.",
      relatedConcepts: ["Overdraft", "Current liabilities"],
    },
    [
      ["As a current liability (bank overdraft)", true, "Correct — a credit cash book balance is an overdraft owed to the bank."],
      ["As a current asset (cash at bank)", false, "A credit balance is an overdraft, not a positive cash asset."],
      ["As a non-current liability", false, "An overdraft is repayable on demand, so it is a current liability."],
      ["As a deduction from sales", false, "An overdraft is a balance sheet item, not a profit or loss adjustment."],
    ],
  ),

  // ── Control accounts & errors — t-acc-ctrl
  calc({
    id: "ac-ctrl-1",
    topicId: "t-acc-ctrl",
    difficulty: "medium",
    scenario:
      "The receivables ledger control account shows: opening balance £18,000, credit sales £95,000, cash received from customers £88,000, and discounts allowed £2,000.",
    stem: "What is the closing balance on the receivables ledger control account (£)?",
    explanation:
      "Closing receivables = opening + credit sales − cash received − discounts allowed.",
    workedSolution: "= 18,000 + 95,000 − 88,000 − 2,000 = £23,000",
    relatedConcepts: ["Receivables control account", "Discounts allowed"],
    numericAnswer: 23000,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-ctrl-2",
    topicId: "t-acc-ctrl",
    difficulty: "medium",
    scenario:
      "The payables ledger control account had an opening balance of £14,500. Credit purchases were £62,000, payments to suppliers were £58,000, and contras with the receivables ledger were £1,200.",
    stem: "What is the closing balance on the payables ledger control account (£)?",
    explanation:
      "Closing payables = opening + credit purchases − payments − contra (set-off) entries.",
    workedSolution: "= 14,500 + 62,000 − 58,000 − 1,200 = £17,300",
    relatedConcepts: ["Payables control account", "Contra entries"],
    numericAnswer: 17300,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-ctrl-3",
    topicId: "t-acc-ctrl",
    difficulty: "hard",
    scenario:
      "A trial balance failed to agree and the difference was posted to a suspense account. Two errors were then found: a payment for repairs of £450 was completely omitted from the ledgers, and sales of £600 were credited correctly but debited to the bank account as £6,000.",
    stem: "Before correction, what was the suspense account balance arising from these errors (£)?",
    explanation:
      "The omission of repairs affects both sides equally, so it does not cause an imbalance. The bank was debited £6,000 instead of £600 — an excess debit of £5,400, which the suspense account must offset with a credit of £5,400.",
    workedSolution:
      "Repairs omission: no imbalance.\nBank over-debited by 6,000 − 600 = 5,400 (excess debit) → suspense credit of £5,400",
    relatedConcepts: ["Suspense account", "Trial balance errors"],
    numericAnswer: 5400,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "ac-ctrl-4",
      topicId: "t-acc-ctrl",
      type: "mcq",
      difficulty: "medium",
      scenario:
        "A sale of £270 was recorded in the books as £720 in both the sales account and the receivables account.",
      stem: "What type of error is this?",
      explanation:
        "Both entries used the same wrong figure, so the trial balance still balances. Reversing two digits (270 vs 720) is an error of transposition, but because both sides are equal it is best classed as an error of original entry affecting both accounts.",
      relatedConcepts: ["Errors", "Trial balance"],
    },
    [
      ["An error of original entry (the wrong amount entered on both sides)", true, "Correct — the same incorrect amount was posted to both accounts, so the trial balance still agrees."],
      ["An error of omission", false, "The transaction was recorded, just at the wrong amount."],
      ["A one-sided error revealed by the trial balance", false, "Both sides used £720, so the trial balance still balances."],
      ["An error of principle", false, "The right type of accounts were used; only the amount was wrong."],
    ],
  ),
  mc(
    {
      id: "ac-ctrl-5",
      topicId: "t-acc-ctrl",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Motor repairs of £800 were debited to the motor vehicles (non-current asset) account instead of the repairs expense account.",
      stem: "What type of error has occurred and will the trial balance still balance?",
      explanation:
        "Debiting an asset account instead of an expense account uses the wrong class of account, an error of principle. Both sides are still equal in total, so the trial balance balances.",
      relatedConcepts: ["Error of principle", "Capital vs revenue expenditure"],
    },
    [
      ["An error of principle; the trial balance still balances", true, "Correct — revenue expenditure was treated as capital expenditure, but the debit/credit totals are unaffected."],
      ["A transposition error; the trial balance will not balance", false, "No digits were reversed and the totals still agree."],
      ["An error of commission; the trial balance will not balance", false, "Although the wrong account was used, the totals still agree, so it balances."],
      ["A compensating error", false, "There is a single misposting, not two errors cancelling out."],
    ],
  ),

  // ── Inventory (IAS 2) — t-acc-inv
  calc({
    id: "ac-inv-1",
    topicId: "t-acc-inv",
    difficulty: "easy",
    scenario:
      "An item of inventory cost £40 per unit. Due to damage it can now be sold for £55 but only after repairs costing £20 per unit. There are 100 units.",
    stem: "At what total amount should this inventory be valued under IAS 2 (£)?",
    explanation:
      "IAS 2 requires inventory at the lower of cost and net realisable value (NRV). NRV = selling price − costs to complete and sell.",
    workedSolution: "NRV per unit = 55 − 20 = 35; lower of cost (40) and NRV (35) = 35\nTotal = 35 × 100 = £3,500",
    relatedConcepts: ["IAS 2", "Net realisable value"],
    numericAnswer: 3500,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-inv-2",
    topicId: "t-acc-inv",
    difficulty: "medium",
    scenario:
      "A company uses FIFO. Opening inventory was 100 units at £10. It then bought 200 units at £12, and later 150 units at £14. During the period it sold 300 units.",
    stem: "What is the value of closing inventory under FIFO (£)?",
    explanation:
      "FIFO assumes the earliest units are sold first, so closing inventory comprises the most recent purchases. Units left = 100 + 200 + 150 − 300 = 150 units (the latest batch at £14).",
    workedSolution: "Closing units = 450 − 300 = 150, all from the £14 batch\n= 150 × 14 = £2,100",
    relatedConcepts: ["FIFO", "Inventory valuation"],
    numericAnswer: 2100,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-inv-3",
    topicId: "t-acc-inv",
    difficulty: "hard",
    scenario:
      "A company uses the periodic weighted average (AVCO) method. Opening inventory was 100 units at £10. It then bought 300 units at £14. During the period it sold 250 units.",
    stem: "What is the value of closing inventory under the periodic AVCO method (£)?",
    explanation:
      "Average cost = total cost ÷ total units. Closing units are valued at this average.",
    workedSolution:
      "Total cost = (100 × 10) + (300 × 14) = 1,000 + 4,200 = 5,200\nAverage = 5,200 ÷ 400 = £13 per unit\nClosing units = 400 − 250 = 150\n= 150 × 13 = £1,950",
    relatedConcepts: ["AVCO", "Weighted average cost"],
    numericAnswer: 1950,
    numericTolerance: 0,
    unit: "£",
  }),
  calc({
    id: "ac-inv-4",
    topicId: "t-acc-inv",
    difficulty: "medium",
    scenario:
      "A manufacturer incurs the following for a batch of finished goods: raw materials £8,000, direct labour £5,000, production overheads £3,000, and storage of finished goods £1,000. Selling costs are £2,000.",
    stem: "What is the cost of this inventory under IAS 2 (£)?",
    explanation:
      "IAS 2 cost includes purchase costs and costs of conversion (labour and production overheads). Storage of finished goods and selling costs are excluded.",
    workedSolution: "= 8,000 + 5,000 + 3,000 = £16,000 (storage and selling costs excluded)",
    relatedConcepts: ["IAS 2", "Costs of conversion"],
    numericAnswer: 16000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "ac-inv-5",
      topicId: "t-acc-inv",
      type: "mcq",
      difficulty: "easy",
      stem: "Under IAS 2, which of the following costs may be included in the cost of inventory?",
      explanation:
        "IAS 2 cost comprises purchase price, import duties, irrecoverable taxes, carriage inwards, and costs of conversion. Selling costs, abnormal waste, storage of finished goods and administrative overheads are excluded.",
      relatedConcepts: ["IAS 2", "Inventory cost"],
    },
    [
      ["Carriage inwards on raw materials", true, "Correct — costs of bringing inventory to its present location are included."],
      ["Selling and distribution costs", false, "These are excluded from inventory cost."],
      ["Abnormal amounts of wasted materials", false, "Abnormal waste is expensed, not included in cost."],
      ["General administrative overheads", false, "Admin overheads not related to production are excluded."],
    ],
  ),
];

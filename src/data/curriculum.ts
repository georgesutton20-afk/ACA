// Seed curriculum: the ACA qualification modelled as courses → modules → topics.
// Content is practice-oriented and illustrative (no copyrighted past papers).
import type { Course, LearningObjective, Module, Topic } from "@/types/domain";

export const courses: Course[] = [
  {
    id: "c-cert",
    slug: "certificate",
    title: "ACA Certificate Level",
    level: "certificate",
    description: "Six modules introducing the fundamentals of accountancy, finance and business.",
    sortOrder: 1,
  },
  {
    id: "c-prof",
    slug: "professional",
    title: "ACA Professional Level",
    level: "professional",
    description: "Applying technical knowledge to real-world scenarios across six modules.",
    sortOrder: 2,
  },
  {
    id: "c-adv",
    slug: "advanced",
    title: "ACA Advanced Level",
    level: "advanced",
    description: "Integrating and applying knowledge under exam conditions, culminating in the Case Study.",
    sortOrder: 3,
  },
];

export const modules: Module[] = [
  // Certificate
  { id: "m-acc", courseId: "c-cert", slug: "accounting", title: "Accounting", icon: "BookOpen", sortOrder: 1, description: "Double-entry, trial balance and financial statements." },
  { id: "m-ass", courseId: "c-cert", slug: "assurance", title: "Assurance", icon: "ShieldCheck", sortOrder: 2, description: "The assurance process, evidence and reporting." },
  { id: "m-btf", courseId: "c-cert", slug: "business-technology-finance", title: "Business, Technology & Finance", icon: "Building2", sortOrder: 3, description: "Organisations, governance, finance and technology." },
  { id: "m-law", courseId: "c-cert", slug: "law", title: "Law", icon: "Scale", sortOrder: 4, description: "Contract, company and employment law principles." },
  { id: "m-mi", courseId: "c-cert", slug: "management-information", title: "Management Information", icon: "Calculator", sortOrder: 5, description: "Costing, budgeting and decision-making." },
  { id: "m-tax", courseId: "c-cert", slug: "principles-of-taxation", title: "Principles of Taxation", icon: "Receipt", sortOrder: 6, description: "Income tax, NIC, VAT and admin fundamentals." },
  // Professional
  { id: "m-aa", courseId: "c-prof", slug: "audit-assurance", title: "Audit & Assurance", icon: "ScanSearch", sortOrder: 1, description: "Planning, evidence and audit reporting." },
  { id: "m-far", courseId: "c-prof", slug: "financial-accounting-reporting", title: "Financial Accounting & Reporting", icon: "FileSpreadsheet", sortOrder: 2, description: "IFRS/UK GAAP single and group accounts." },
  { id: "m-tc", courseId: "c-prof", slug: "tax-compliance", title: "Tax Compliance", icon: "ReceiptText", sortOrder: 3, description: "Computing tax liabilities across the major taxes." },
  { id: "m-bpt", courseId: "c-prof", slug: "business-planning-taxation", title: "Business Planning: Taxation", icon: "ClipboardList", sortOrder: 4, description: "Tax planning in a business context." },
  { id: "m-fm", courseId: "c-prof", slug: "financial-management", title: "Financial Management", icon: "TrendingUp", sortOrder: 5, description: "Investment, financing and risk management." },
  { id: "m-bst", courseId: "c-prof", slug: "business-strategy-technology", title: "Business Strategy & Technology", icon: "Network", sortOrder: 6, description: "Strategic analysis, choice and implementation." },
  // Advanced
  { id: "m-cr", courseId: "c-adv", slug: "corporate-reporting", title: "Corporate Reporting", icon: "Layers", sortOrder: 1, description: "Complex reporting, groups and analysis." },
  { id: "m-sbm", courseId: "c-adv", slug: "strategic-business-management", title: "Strategic Business Management", icon: "Briefcase", sortOrder: 2, description: "Strategy, finance and ethics integrated." },
  { id: "m-cs", courseId: "c-adv", slug: "case-study", title: "Case Study", icon: "FileText", sortOrder: 3, description: "Applying all skills to a real-world business case." },
];

// Topics. Depth is richest where the question bank is curated (FAR, Tax, MI, Accounting).
export const topics: Topic[] = [
  // Accounting
  { id: "t-acc-de", moduleId: "m-acc", slug: "double-entry", title: "Double-entry bookkeeping", summary: "Debits, credits and the accounting equation.", sortOrder: 1, subtopics: ["The accounting equation", "Ledgers & journals", "Trial balance"] },
  { id: "t-acc-adj", moduleId: "m-acc", slug: "accruals-prepayments", title: "Accruals & prepayments", summary: "Matching income and expense to the period.", sortOrder: 2, subtopics: ["Accruals", "Prepayments", "Year-end adjustments"] },
  { id: "t-acc-fs", moduleId: "m-acc", slug: "financial-statements", title: "Preparing financial statements", summary: "From trial balance to SoFP and SoPL.", sortOrder: 3 },
  // Assurance
  { id: "t-ass-proc", moduleId: "m-ass", slug: "assurance-process", title: "The assurance process", summary: "Engagement acceptance, evidence and reporting.", sortOrder: 1 },
  { id: "t-ass-int", moduleId: "m-ass", slug: "internal-control", title: "Internal control", summary: "Components and limitations of control systems.", sortOrder: 2 },
  // BTF
  { id: "t-btf-gov", moduleId: "m-btf", slug: "governance", title: "Governance & ethics", summary: "Stakeholders, governance and ethical codes.", sortOrder: 1 },
  { id: "t-btf-fin", moduleId: "m-btf", slug: "business-finance", title: "Sources of finance", summary: "Debt, equity and working capital.", sortOrder: 2 },
  // Law
  { id: "t-law-con", moduleId: "m-law", slug: "contract-law", title: "Contract law", summary: "Formation, terms and discharge of contracts.", sortOrder: 1 },
  { id: "t-law-co", moduleId: "m-law", slug: "company-law", title: "Company law", summary: "Incorporation, directors and shares.", sortOrder: 2 },
  // MI
  { id: "t-mi-cost", moduleId: "m-mi", slug: "costing", title: "Costing techniques", summary: "Absorption, marginal and activity-based costing.", sortOrder: 1, subtopics: ["Cost behaviour", "Absorption costing", "Marginal costing"] },
  { id: "t-mi-cvp", moduleId: "m-mi", slug: "cvp-analysis", title: "CVP & breakeven", summary: "Contribution, breakeven and margin of safety.", sortOrder: 2 },
  { id: "t-mi-bud", moduleId: "m-mi", slug: "budgeting", title: "Budgeting & variances", summary: "Budget preparation and variance analysis.", sortOrder: 3 },
  // Principles of Taxation
  { id: "t-tax-it", moduleId: "m-tax", slug: "income-tax", title: "Income tax basics", summary: "Computing taxable income and the tax liability.", sortOrder: 1, subtopics: ["Personal allowance", "Tax bands", "Savings & dividends"] },
  { id: "t-tax-vat", moduleId: "m-tax", slug: "vat", title: "Value Added Tax", summary: "Output/input VAT, registration and returns.", sortOrder: 2 },
  // Audit & Assurance
  { id: "t-aa-plan", moduleId: "m-aa", slug: "audit-planning", title: "Audit planning & risk", summary: "Materiality, risk assessment and strategy.", sortOrder: 1 },
  { id: "t-aa-evid", moduleId: "m-aa", slug: "audit-evidence", title: "Audit evidence", summary: "Assertions, procedures and sufficiency.", sortOrder: 2 },
  { id: "t-aa-rep", moduleId: "m-aa", slug: "audit-reporting", title: "Audit reporting", summary: "Opinions and modifications.", sortOrder: 3 },
  // FAR
  { id: "t-far-rev", moduleId: "m-far", slug: "revenue", title: "Revenue (IFRS 15)", summary: "The five-step model for recognising revenue.", sortOrder: 1, subtopics: ["Performance obligations", "Transaction price", "Over time vs point in time"] },
  { id: "t-far-lease", moduleId: "m-far", slug: "leases", title: "Leases (IFRS 16)", summary: "Right-of-use assets and lease liabilities.", sortOrder: 2 },
  { id: "t-far-tax", moduleId: "m-far", slug: "deferred-tax", title: "Deferred tax (IAS 12)", summary: "Temporary differences and deferred tax balances.", sortOrder: 3, subtopics: ["Temporary differences", "Tax base", "Recognition"] },
  { id: "t-far-cons", moduleId: "m-far", slug: "consolidation", title: "Consolidation", summary: "Goodwill, NCI and intra-group adjustments.", sortOrder: 4 },
  // Tax Compliance
  { id: "t-tc-ct", moduleId: "m-tc", slug: "corporation-tax", title: "Corporation tax", summary: "Computing a company's taxable total profits.", sortOrder: 1 },
  { id: "t-tc-cgt", moduleId: "m-tc", slug: "capital-gains", title: "Capital gains tax", summary: "Chargeable gains and reliefs.", sortOrder: 2 },
  // BPT
  { id: "t-bpt-plan", moduleId: "m-bpt", slug: "tax-planning", title: "Business tax planning", summary: "Structuring transactions efficiently and ethically.", sortOrder: 1 },
  // FM
  { id: "t-fm-inv", moduleId: "m-fm", slug: "investment-appraisal", title: "Investment appraisal", summary: "NPV, IRR and payback.", sortOrder: 1, subtopics: ["NPV", "IRR", "Payback"] },
  { id: "t-fm-cap", moduleId: "m-fm", slug: "cost-of-capital", title: "Cost of capital", summary: "WACC, CAPM and gearing.", sortOrder: 2 },
  // BST
  { id: "t-bst-an", moduleId: "m-bst", slug: "strategic-analysis", title: "Strategic analysis", summary: "PESTEL, Porter and SWOT.", sortOrder: 1 },
  // Corporate Reporting
  { id: "t-cr-grp", moduleId: "m-cr", slug: "complex-groups", title: "Complex groups", summary: "Step acquisitions, disposals and associates.", sortOrder: 1 },
  // SBM
  { id: "t-sbm-fin", moduleId: "m-sbm", slug: "financial-strategy", title: "Financial strategy", summary: "Valuations, M&A and reorganisations.", sortOrder: 1 },
  // Case Study
  { id: "t-cs-skills", moduleId: "m-cs", slug: "case-study-skills", title: "Case Study skills", summary: "Assimilating information and structuring answers.", sortOrder: 1 },
];

export const learningObjectives: LearningObjective[] = [
  { id: "lo-1", topicId: "t-far-rev", code: "1a", description: "Identify the contract and separate performance obligations.", sortOrder: 1 },
  { id: "lo-2", topicId: "t-far-rev", code: "1b", description: "Determine and allocate the transaction price.", sortOrder: 2 },
  { id: "lo-3", topicId: "t-far-rev", code: "1c", description: "Recognise revenue as obligations are satisfied.", sortOrder: 3 },
  { id: "lo-4", topicId: "t-far-tax", code: "2a", description: "Explain temporary differences and the tax base of an asset/liability.", sortOrder: 1 },
  { id: "lo-5", topicId: "t-far-tax", code: "2b", description: "Calculate deferred tax balances and movements.", sortOrder: 2 },
  { id: "lo-6", topicId: "t-mi-cvp", code: "3a", description: "Calculate contribution, breakeven point and margin of safety.", sortOrder: 1 },
  { id: "lo-7", topicId: "t-fm-inv", code: "4a", description: "Appraise a project using NPV and interpret the result.", sortOrder: 1 },
  { id: "lo-8", topicId: "t-tax-it", code: "5a", description: "Compute an individual's income tax liability for the year.", sortOrder: 1 },
];

export function objectivesForTopic(topicId: string) {
  return learningObjectives.filter((o) => o.topicId === topicId);
}

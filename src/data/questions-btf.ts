// BTF (Business, Technology & Finance) — Certificate Level question bank.
// Objective-test style: conceptual recall + model recognition, with a few
// light working-capital / finance calculations. Original questions
// (not copied from ICAEW past papers or learning materials).
import type { Question } from "@/types/domain";
import { mc, calc } from "@/data/question-helpers";

export const btfQuestions: Question[] = [
  // ── Governance & ethics — t-btf-gov ──────────────────────────────────────
  mc(
    {
      id: "bf-gov-1",
      topicId: "t-btf-gov",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the primary role of a non-executive director (NED) on a company board?",
      explanation:
        "NEDs are not part of day-to-day management. Their role is to provide independent judgement and constructively challenge and monitor the executive directors.",
      relatedConcepts: ["Non-executive directors", "Board composition"],
    },
    [
      ["To provide independent judgement and challenge executive management", true, "Correct — NEDs bring objectivity and oversight, not daily management."],
      ["To run the company's day-to-day operations", false, "That is the role of the executive directors and management."],
      ["To audit the financial statements", false, "That is the role of the external auditor, who is independent of the board."],
      ["To represent the trade unions on the board", false, "NEDs represent the interests of the company as a whole, not a single group."],
    ],
  ),
  mc(
    {
      id: "bf-gov-2",
      topicId: "t-btf-gov",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "The directors of Atlas Ltd hold no shares and are tempted to award themselves large bonuses and pursue empire-building acquisitions that boost their status but not shareholder value.",
      stem: "Which concept best describes the conflict of interest between the directors and the shareholders here?",
      explanation:
        "The agency problem arises because directors (agents) may act in their own interest rather than that of the shareholders (principals) who own the company.",
      relatedConcepts: ["Agency theory", "Principal and agent", "Corporate governance"],
    },
    [
      ["The agency problem", true, "Correct — agents (directors) pursuing their own goals over the principals' (shareholders') interests."],
      ["The expectation gap", false, "The expectation gap relates to differing views of an auditor's responsibilities."],
      ["The going concern problem", false, "Going concern concerns an entity's ability to continue trading."],
      ["The separation of powers", false, "This is a constitutional/legal concept, not the director–shareholder conflict."],
    ],
  ),
  mc(
    {
      id: "bf-gov-3",
      topicId: "t-btf-gov",
      type: "multi",
      difficulty: "medium",
      stem: "Which of the following are recognised fundamental principles in the ICAEW (IESBA-based) Code of Ethics? (Select all that apply.)",
      explanation:
        "The five fundamental principles are integrity, objectivity, professional competence and due care, confidentiality, and professional behaviour. Profitability and aggressiveness are not ethical principles.",
      relatedConcepts: ["Code of Ethics", "Fundamental principles"],
    },
    [
      ["Integrity", true, "Correct — being straightforward and honest."],
      ["Objectivity", true, "Correct — not allowing bias or conflicts of interest to override judgement."],
      ["Profit maximisation", false, "Not an ethical principle — it is a financial objective."],
      ["Professional behaviour", true, "Correct — complying with laws and avoiding discrediting the profession."],
      ["Confidentiality", true, "Correct — respecting the confidentiality of information acquired."],
    ],
  ),
  mc(
    {
      id: "bf-gov-4",
      topicId: "t-btf-gov",
      type: "mcq",
      difficulty: "medium",
      stem: "Under the UK Corporate Governance Code, why is it recommended to separate the roles of chair and chief executive (CEO)?",
      explanation:
        "Splitting the roles prevents an excessive concentration of power in one individual and ensures a balance of authority between running the board (chair) and running the business (CEO).",
      relatedConcepts: ["Chair and CEO split", "Concentration of power"],
    },
    [
      ["To avoid an excessive concentration of power in one person", true, "Correct — it provides a balance of power and authority."],
      ["To reduce the company's tax liability", false, "Governance structure does not affect tax in this way."],
      ["Because company law makes it a legal requirement for all companies", false, "It is a 'comply or explain' Code provision, not a statutory rule for all companies."],
      ["To remove the need for non-executive directors", false, "NEDs remain essential regardless of the chair/CEO split."],
    ],
  ),
  mc(
    {
      id: "bf-gov-5",
      topicId: "t-btf-gov",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A finance trainee discovers that a senior manager has asked them to record fictitious sales to hit a quarterly target. The trainee feels pressured because the manager controls their appraisal.",
      stem: "Which threat to the fundamental ethical principles is most directly created by this situation?",
      explanation:
        "The pressure exerted by a person in a position of authority over the trainee, deterring them from acting objectively, is an intimidation threat.",
      relatedConcepts: ["Threats and safeguards", "Intimidation threat"],
    },
    [
      ["Intimidation threat", true, "Correct — pressure from a person in authority deters objective behaviour."],
      ["Self-review threat", false, "Self-review arises when reviewing one's own previous judgements, not from pressure."],
      ["Familiarity threat", false, "Familiarity arises from close relationships, not coercion."],
      ["Advocacy threat", false, "Advocacy arises from promoting a client's position, which is not the issue here."],
    ],
  ),

  // ── Sources of finance & working capital — t-btf-fin ─────────────────────
  mc(
    {
      id: "bf-fin-1",
      topicId: "t-btf-fin",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is a key difference between debt finance and equity finance?",
      explanation:
        "Debt (e.g. a loan) carries a contractual obligation to pay interest and repay capital and ranks ahead of equity. Equity (shares) gives ownership and a variable dividend with no obligation to repay capital.",
      relatedConcepts: ["Debt vs equity", "Sources of finance"],
    },
    [
      ["Interest on debt is a contractual obligation, whereas dividends on equity are discretionary", true, "Correct — interest must be paid; dividends are at the company's discretion."],
      ["Debt holders own the company, whereas equity holders are lenders", false, "It is the reverse — equity holders own the company; debt holders are lenders."],
      ["Equity must always be repaid before debt on a winding up", false, "Debt ranks ahead of equity on a winding up."],
      ["Debt finance always dilutes existing shareholders' control", false, "Issuing new equity dilutes control; debt does not confer voting rights."],
    ],
  ),
  mc(
    {
      id: "bf-fin-2",
      topicId: "t-btf-fin",
      type: "mcq",
      difficulty: "easy",
      stem: "A company offers existing shareholders the right to buy new shares in proportion to their current holding, usually at a discount. What is this called?",
      explanation:
        "A rights issue offers new shares to existing shareholders pro rata to their holdings, helping them maintain their proportionate ownership and avoid dilution.",
      relatedConcepts: ["Rights issue", "Equity finance"],
    },
    [
      ["A rights issue", true, "Correct — pro rata offer to existing shareholders, usually at a discount."],
      ["A bonus issue", false, "A bonus issue gives free shares from reserves and raises no new cash."],
      ["A debenture", false, "A debenture is a form of long-term debt, not an equity offer."],
      ["An overdraft", false, "An overdraft is short-term bank borrowing, not a share issue."],
    ],
  ),
  mc(
    {
      id: "bf-fin-3",
      topicId: "t-btf-fin",
      type: "mcq",
      difficulty: "medium",
      stem: "Which source of finance is most appropriate to fund a short-term, fluctuating working-capital need?",
      explanation:
        "Matching principle: short-term, fluctuating needs should be funded by short-term finance such as a bank overdraft, which is flexible and only incurs interest on the amount used.",
      relatedConcepts: ["Matching principle", "Short-term finance"],
    },
    [
      ["A bank overdraft", true, "Correct — flexible short-term finance suited to fluctuating needs."],
      ["A 25-year mortgage", false, "Long-term finance is mismatched to a short-term fluctuating need."],
      ["An issue of ordinary shares", false, "Equity is permanent capital, unsuitable for short-term fluctuations."],
      ["Retained earnings reinvested in non-current assets", false, "This funds long-term assets, not fluctuating working capital."],
    ],
  ),
  calc({
    id: "bf-fin-4",
    topicId: "t-btf-fin",
    difficulty: "medium",
    scenario:
      "Beech Ltd has the following data: inventory holding period 60 days, trade receivables collection period 45 days, and trade payables payment period 30 days.",
    stem: "What is the length of the working-capital (cash operating) cycle, in days?",
    explanation:
      "The working-capital cycle = inventory days + receivables days − payables days.",
    workedSolution: "60 + 45 − 30 = 75 days",
    relatedConcepts: ["Working-capital cycle", "Cash operating cycle"],
    numericAnswer: 75,
    numericTolerance: 0,
    unit: "days",
  }),
  calc({
    id: "bf-fin-5",
    topicId: "t-btf-fin",
    difficulty: "medium",
    scenario:
      "Cedar Ltd has long-term debt of £400,000 and ordinary shareholders' equity of £600,000. Gearing is measured as debt ÷ (debt + equity).",
    stem: "What is the company's gearing ratio, expressed as a percentage?",
    explanation:
      "Gearing (capital basis) = debt ÷ (debt + equity) × 100.",
    workedSolution: "400,000 ÷ (400,000 + 600,000) = 400,000 ÷ 1,000,000 = 40%",
    relatedConcepts: ["Gearing", "Capital structure"],
    numericAnswer: 40,
    numericTolerance: 0,
    unit: "%",
  }),
  calc({
    id: "bf-fin-6",
    topicId: "t-btf-fin",
    difficulty: "medium",
    scenario:
      "Dale Ltd has current assets of £180,000 (including inventory of £80,000) and current liabilities of £100,000.",
    stem: "What is the quick (acid-test) ratio? Give your answer to two decimal places.",
    explanation:
      "The quick ratio excludes inventory: (current assets − inventory) ÷ current liabilities.",
    workedSolution: "(180,000 − 80,000) ÷ 100,000 = 100,000 ÷ 100,000 = 1.00",
    relatedConcepts: ["Quick ratio", "Liquidity"],
    numericAnswer: 1,
    numericTolerance: 0.01,
    unit: ":1",
  }),

  // ── Business objectives & structure — t-btf-org ──────────────────────────
  mc(
    {
      id: "bf-org-1",
      topicId: "t-btf-org",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following best describes a 'stakeholder' of a business?",
      explanation:
        "A stakeholder is any person or group with an interest in, or who is affected by, the activities of the organisation — e.g. shareholders, employees, customers, suppliers, government and the community.",
      relatedConcepts: ["Stakeholders", "Stakeholder mapping"],
    },
    [
      ["Any party with an interest in, or affected by, the organisation's activities", true, "Correct — a broad group including shareholders, employees, customers and others."],
      ["Only the people who own shares in the company", false, "Shareholders are one group of stakeholders, but not the only one."],
      ["Only the board of directors", false, "Directors are stakeholders, but the term is much broader."],
      ["Only the company's banks and lenders", false, "Lenders are stakeholders, but so are many other groups."],
    ],
  ),
  mc(
    {
      id: "bf-org-2",
      topicId: "t-btf-org",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Mercury Ltd organises itself into Marketing, Production, Finance and HR departments, each headed by a specialist manager.",
      stem: "Which organisational structure is Mercury Ltd using?",
      explanation:
        "A functional structure groups employees by specialism (e.g. marketing, finance, production), allowing economies of scale and expertise within each function.",
      relatedConcepts: ["Functional structure", "Organisational structure"],
    },
    [
      ["A functional structure", true, "Correct — departments organised by specialist function."],
      ["A divisional (product) structure", false, "A divisional structure groups by product, region or market, not function."],
      ["A matrix structure", false, "A matrix combines functional and project lines of authority."],
      ["A holding-company structure", false, "That describes a group of separate legal entities, not internal departments."],
    ],
  ),
  mc(
    {
      id: "bf-org-3",
      topicId: "t-btf-org",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Nova plc has separate divisions for North America, Europe and Asia, each with its own functional teams and held accountable for its own profit.",
      stem: "Which organisational structure does Nova plc use?",
      explanation:
        "A divisional structure splits the business into semi-autonomous units (here by geography), each responsible for its own performance, often as profit or investment centres.",
      relatedConcepts: ["Divisional structure", "Profit centres"],
    },
    [
      ["A divisional structure", true, "Correct — semi-autonomous divisions accountable for their own profit."],
      ["A functional structure", false, "A functional structure groups by specialism across the whole company."],
      ["An entrepreneurial structure", false, "An entrepreneurial structure centres on a single owner-manager."],
      ["A boundaryless structure", false, "That describes networked organisations without rigid internal divisions."],
    ],
  ),
  mc(
    {
      id: "bf-org-4",
      topicId: "t-btf-org",
      type: "multi",
      difficulty: "medium",
      stem: "According to Mendelow's matrix, stakeholders are mapped against which two dimensions? (Select both.)",
      explanation:
        "Mendelow's matrix plots stakeholders by their level of power (ability to influence) and level of interest (degree of concern) to determine how they should be managed.",
      relatedConcepts: ["Mendelow's matrix", "Stakeholder management"],
    },
    [
      ["Power", true, "Correct — the stakeholder's ability to influence the organisation."],
      ["Interest", true, "Correct — the stakeholder's level of interest in the organisation's actions."],
      ["Profitability", false, "Profitability is not an axis of Mendelow's matrix."],
      ["Liquidity", false, "Liquidity is a financial measure, not a stakeholder dimension."],
    ],
  ),
  mc(
    {
      id: "bf-org-5",
      topicId: "t-btf-org",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is the most appropriate primary financial objective for a listed company?",
      explanation:
        "The conventional primary financial objective of a listed company is the maximisation of shareholder wealth, normally expressed through share price and dividends over the long term.",
      relatedConcepts: ["Shareholder wealth maximisation", "Financial objectives"],
    },
    [
      ["Maximisation of shareholder wealth", true, "Correct — the conventional primary financial objective of a listed company."],
      ["Maximisation of the number of employees", false, "Headcount is not a financial objective in itself."],
      ["Minimisation of the corporation tax paid each year", false, "Tax efficiency supports, but is not, the primary objective."],
      ["Maximisation of sales revenue regardless of profit", false, "Revenue without regard to profit can destroy shareholder value."],
    ],
  ),

  // ── Risk & internal control — t-btf-risk ─────────────────────────────────
  mc(
    {
      id: "bf-risk-1",
      topicId: "t-btf-risk",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the main purpose of a system of internal control within an organisation?",
      explanation:
        "Internal control helps the organisation achieve its objectives by managing risks — safeguarding assets, ensuring reliable reporting, promoting operational efficiency and ensuring compliance with laws.",
      relatedConcepts: ["Internal control", "Risk management"],
    },
    [
      ["To help the organisation manage risk and achieve its objectives", true, "Correct — controls safeguard assets, ensure reliable reporting and compliance."],
      ["To guarantee that fraud can never occur", false, "Controls reduce, but cannot eliminate, the risk of fraud."],
      ["To replace the need for external audit", false, "Internal control complements, but does not replace, external audit."],
      ["To maximise the share price directly", false, "Controls support good management but do not directly set the share price."],
    ],
  ),
  mc(
    {
      id: "bf-risk-2",
      topicId: "t-btf-risk",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "At Orion Ltd, the same employee receives goods, records the purchase, approves the supplier invoice and authorises the payment.",
      stem: "Which key internal control is missing here?",
      explanation:
        "Segregation of duties means no single individual should control all stages of a transaction. Combining these incompatible duties greatly increases the risk of error and fraud.",
      relatedConcepts: ["Segregation of duties", "Control activities"],
    },
    [
      ["Segregation of duties", true, "Correct — incompatible duties should be split between different people."],
      ["A going concern review", false, "Going concern relates to financial viability, not transaction processing."],
      ["A dividend policy", false, "Dividend policy is unrelated to processing purchases."],
      ["A rights issue", false, "A rights issue is a source of finance, not a control."],
    ],
  ),
  mc(
    {
      id: "bf-risk-3",
      topicId: "t-btf-risk",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Sirius Ltd identifies a risk that is both low likelihood and low impact, and the cost of mitigating it would far exceed any benefit.",
      stem: "Which risk response (TARA framework) is most appropriate?",
      explanation:
        "For low-likelihood, low-impact risks where mitigation is not cost-effective, the organisation typically accepts (retains) the risk.",
      relatedConcepts: ["TARA framework", "Risk response"],
    },
    [
      ["Accept (retain) the risk", true, "Correct — low/low risks are usually accepted where mitigation is not cost-effective."],
      ["Avoid the activity entirely", false, "Avoidance is for high-impact risks, not minor ones."],
      ["Transfer the risk via insurance", false, "Insurance is normally used for higher-impact risks."],
      ["Reduce the risk with expensive new controls", false, "Spending more than the benefit is not justified for a low/low risk."],
    ],
  ),
  mc(
    {
      id: "bf-risk-4",
      topicId: "t-btf-risk",
      type: "mcq",
      difficulty: "medium",
      stem: "Why can an internal control system only provide 'reasonable' rather than 'absolute' assurance?",
      explanation:
        "Inherent limitations — such as human error, management override, collusion and cost-benefit constraints — mean no control system can provide absolute assurance.",
      relatedConcepts: ["Inherent limitations", "Reasonable assurance"],
    },
    [
      ["Because of inherent limitations such as human error, collusion and management override", true, "Correct — these limitations prevent absolute assurance."],
      ["Because controls are illegal beyond a certain level", false, "There is no legal cap on controls; the issue is inherent limitations."],
      ["Because auditors forbid strong controls", false, "Auditors encourage effective controls."],
      ["Because absolute assurance would breach data protection law", false, "Data protection is unrelated to this limitation."],
    ],
  ),
  mc(
    {
      id: "bf-risk-5",
      topicId: "t-btf-risk",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Vega Ltd has very strong controls over recording transactions, but its single product is becoming obsolete as new technology emerges in the market.",
      stem: "What type of risk does the obsolescence threat primarily represent?",
      explanation:
        "Strategic (business) risk concerns the organisation's long-term direction and ability to compete — here, the threat of its product becoming obsolete. It is distinct from operational or financial reporting risk.",
      relatedConcepts: ["Strategic risk", "Business risk"],
    },
    [
      ["Strategic (business) risk", true, "Correct — it threatens the organisation's long-term competitive position."],
      ["Financial reporting risk", false, "Reporting risk concerns errors in the accounts, which their controls address well."],
      ["Operational processing risk", false, "Their transaction controls are strong; this is about market position."],
      ["Compliance risk", false, "Compliance risk relates to breaching laws or regulations, not obsolescence."],
    ],
  ),

  // ── Technology & data — t-btf-tech ───────────────────────────────────────
  mc(
    {
      id: "bf-tech-1",
      topicId: "t-btf-tech",
      type: "multi",
      difficulty: "medium",
      stem: "Information security is often described using the 'CIA' triad. Which three objectives does it cover? (Select all three.)",
      explanation:
        "The CIA triad stands for Confidentiality, Integrity and Availability — the three core objectives of information security.",
      relatedConcepts: ["CIA triad", "Information security"],
    },
    [
      ["Confidentiality", true, "Correct — information is accessible only to those authorised."],
      ["Integrity", true, "Correct — information is accurate, complete and not improperly altered."],
      ["Availability", true, "Correct — information is accessible when needed by authorised users."],
      ["Accountability", false, "Useful in security, but not one of the three CIA elements."],
    ],
  ),
  mc(
    {
      id: "bf-tech-2",
      topicId: "t-btf-tech",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "An employee at Helix Ltd receives an email appearing to be from the bank, asking them to click a link and confirm login credentials. The email is fraudulent.",
      stem: "What type of cyber threat is this?",
      explanation:
        "Phishing is a social-engineering attack that uses fraudulent communications (often email) to trick recipients into revealing sensitive information such as credentials.",
      relatedConcepts: ["Phishing", "Social engineering"],
    },
    [
      ["Phishing", true, "Correct — a fraudulent message designed to extract sensitive information."],
      ["A denial-of-service attack", false, "A DoS attack overwhelms a system; it does not solicit credentials."],
      ["A SQL injection", false, "SQL injection attacks a database via input fields, not via deceptive emails."],
      ["A hardware failure", false, "This is a deliberate attack, not an equipment fault."],
    ],
  ),
  mc(
    {
      id: "bf-tech-3",
      topicId: "t-btf-tech",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following best describes 'cloud computing'?",
      explanation:
        "Cloud computing is the delivery of computing services (e.g. storage, servers, software) over the internet, typically on a scalable, pay-as-you-go basis, rather than from local on-premise hardware.",
      relatedConcepts: ["Cloud computing", "Scalability"],
    },
    [
      ["Delivery of computing services over the internet on a scalable, on-demand basis", true, "Correct — services are accessed remotely, often pay-as-you-go."],
      ["Storing all data only on a single local hard drive", false, "That is local on-premise storage, the opposite of the cloud."],
      ["A type of weather-forecasting software", false, "The term is unrelated to meteorology."],
      ["A method of paying dividends to shareholders", false, "Cloud computing is a technology, not a finance method."],
    ],
  ),
  mc(
    {
      id: "bf-tech-4",
      topicId: "t-btf-tech",
      type: "mcq",
      difficulty: "medium",
      stem: "What does 'big data' analysis typically allow a business to do?",
      explanation:
        "Big data analytics extracts insights and patterns from very large, varied and fast-moving data sets, supporting better decision-making, e.g. understanding customer behaviour.",
      relatedConcepts: ["Big data", "Data analytics"],
    },
    [
      ["Identify patterns and insights from very large, varied data sets to support decisions", true, "Correct — the value of big data lies in the insights derived from it."],
      ["Guarantee that all business decisions will be correct", false, "Analytics informs decisions but offers no guarantee of correctness."],
      ["Eliminate the need for any data security", false, "Larger data sets increase, not remove, security needs."],
      ["Replace the requirement to prepare financial statements", false, "Statutory reporting obligations remain regardless of analytics."],
    ],
  ),
  mc(
    {
      id: "bf-tech-5",
      topicId: "t-btf-tech",
      type: "scenario",
      difficulty: "easy",
      scenario:
        "Aurora Ltd holds personal data about its UK customers and must comply with data protection law.",
      stem: "Which of the following is a core principle of data protection that Aurora must follow?",
      explanation:
        "Data protection principles require personal data to be processed lawfully, fairly and transparently, collected for specified purposes, kept accurate, and held securely and no longer than necessary.",
      relatedConcepts: ["Data protection", "Personal data"],
    },
    [
      ["Personal data must be processed lawfully, fairly and transparently", true, "Correct — a core data protection principle."],
      ["Personal data may be sold to any third party without restriction", false, "This breaches lawful and fair processing requirements."],
      ["Personal data must be kept forever once collected", false, "Data should be kept no longer than necessary."],
      ["Personal data need not be kept secure", false, "Security of personal data is a key principle."],
    ],
  ),

  // ── Finance function & profession — t-btf-prof ───────────────────────────
  mc(
    {
      id: "bf-prof-1",
      topicId: "t-btf-prof",
      type: "mcq",
      difficulty: "easy",
      stem: "Which task is primarily the responsibility of the management accounting (rather than financial accounting) part of the finance function?",
      explanation:
        "Management accounting produces internal, forward-looking information such as budgets and forecasts to support planning and control, whereas financial accounting produces external statutory statements.",
      relatedConcepts: ["Management accounting", "Finance function"],
    },
    [
      ["Preparing budgets and forecasts for internal decision-making", true, "Correct — management accounting is internal and forward-looking."],
      ["Filing statutory financial statements with Companies House", false, "That is a financial (statutory) reporting task."],
      ["Conducting the external audit", false, "The external audit is performed by an independent auditor."],
      ["Setting the corporation tax rates", false, "Tax rates are set by government, not the finance function."],
    ],
  ),
  mc(
    {
      id: "bf-prof-2",
      topicId: "t-btf-prof",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the primary purpose of the external audit of a company's financial statements?",
      explanation:
        "The external audit provides an independent opinion on whether the financial statements give a true and fair view and are prepared in accordance with the applicable framework — it adds credibility for users.",
      relatedConcepts: ["External audit", "True and fair view"],
    },
    [
      ["To give an independent opinion on whether the statements give a true and fair view", true, "Correct — the audit adds credibility to the financial statements."],
      ["To guarantee the company will not fail", false, "An audit gives no guarantee of future survival."],
      ["To prepare the financial statements on behalf of the directors", false, "Preparation is the directors' responsibility, not the auditor's."],
      ["To detect every instance of fraud, however small", false, "An audit is not designed to find all fraud."],
    ],
  ),
  mc(
    {
      id: "bf-prof-3",
      topicId: "t-btf-prof",
      type: "mcq",
      difficulty: "easy",
      stem: "In the accountancy profession, what does acting 'in the public interest' mean?",
      explanation:
        "A distinguishing mark of the accountancy profession is acceptance of a responsibility to act in the public interest — the collective wellbeing of those the profession serves — not merely to satisfy an individual client or employer.",
      relatedConcepts: ["Public interest", "Professionalism"],
    },
    [
      ["Considering the wider community the profession serves, not just a single client or employer", true, "Correct — the profession's responsibility extends beyond the immediate client."],
      ["Always doing whatever the paying client demands", false, "Acting only in a client's interest can conflict with the public interest."],
      ["Maximising the accountant's own fee income", false, "Self-interest is the opposite of the public interest."],
      ["Publishing all client information freely", false, "This would breach confidentiality."],
    ],
  ),
  mc(
    {
      id: "bf-prof-4",
      topicId: "t-btf-prof",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A client offers an ICAEW Chartered Accountant a fee that depends entirely on achieving a specified (favourable) audit outcome.",
      stem: "Which fundamental ethical principle is most directly threatened, and why?",
      explanation:
        "A contingent fee linked to the audit outcome creates a self-interest threat that undermines objectivity, as the accountant has a financial incentive to reach a particular conclusion.",
      relatedConcepts: ["Objectivity", "Self-interest threat", "Contingent fees"],
    },
    [
      ["Objectivity — the contingent fee creates a self-interest threat to impartial judgement", true, "Correct — a financial stake in the outcome compromises objectivity."],
      ["Confidentiality — because the fee reveals client information", false, "The issue is bias from the fee, not disclosure of information."],
      ["Professional competence — because the fee affects the accountant's skills", false, "A fee arrangement does not change the accountant's competence."],
      ["Integrity — because contingent fees are always dishonest", false, "The principal threat here is to objectivity, not honesty."],
    ],
  ),
  mc(
    {
      id: "bf-prof-5",
      topicId: "t-btf-prof",
      type: "multi",
      difficulty: "medium",
      stem: "Which of the following are typically functions or sub-functions of a company's finance function? (Select all that apply.)",
      explanation:
        "The finance function commonly includes financial accounting/reporting, management accounting, treasury (cash and funding) and the internal audit/assurance activity. Marketing a product is not a finance-function role.",
      relatedConcepts: ["Finance function", "Treasury", "Internal audit"],
    },
    [
      ["Treasury management (cash, funding and risk)", true, "Correct — treasury manages cash, financing and financial risk."],
      ["Management accounting (planning and control information)", true, "Correct — provides internal information for decision-making."],
      ["Designing and running the company's advertising campaigns", false, "Advertising is a marketing function, not finance."],
      ["Internal audit / assurance", true, "Correct — internal audit reviews controls and risk management."],
    ],
  ),
];

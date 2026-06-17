// Assurance — Certificate Level question bank.
// Objective testing: identify the control deficiency, the correct procedure,
// the level of assurance, the ethical threat/safeguard, or the report element.
// Original questions (not copied from ICAEW past papers), accurate to ISA /
// assurance concepts as examined at Certificate level.
import type { Question } from "@/types/domain";
import { mc, calc } from "@/data/question-helpers";

export const assQuestions: Question[] = [
  // ── Assurance process & levels — t-ass-proc ──────────────────────────────
  mc(
    {
      id: "as-proc-1",
      topicId: "t-ass-proc",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is an essential element of an assurance engagement?",
      explanation:
        "The five elements are: a three-party relationship, suitable subject matter, suitable criteria, sufficient appropriate evidence, and a written assurance report.",
      relatedConcepts: ["Elements of assurance", "Three-party relationship"],
    },
    [
      ["A three-party relationship between practitioner, responsible party and intended users", true, "Correct — this is one of the five essential elements."],
      ["A guarantee that the subject matter is free from error", false, "Assurance gives a conclusion, never a guarantee of absolute correctness."],
      ["A contingent fee linked to the outcome of the engagement", false, "Contingent fees create a self-interest threat and are not an element of assurance."],
      ["A promise that fraud will always be detected", false, "Assurance does not guarantee the detection of all fraud."],
    ],
  ),
  mc(
    {
      id: "as-proc-2",
      topicId: "t-ass-proc",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A practitioner is engaged to review interim financial statements. The report will state that 'nothing has come to our attention' to suggest the statements are misstated.",
      stem: "What level of assurance is being provided?",
      explanation:
        "A negatively worded ('nothing has come to our attention') conclusion based on limited procedures, mainly enquiry and analytical review, provides limited assurance.",
      relatedConcepts: ["Limited assurance", "Negative conclusion", "Review engagement"],
    },
    [
      ["Limited assurance", true, "Correct — the negative form of words and reduced procedures indicate a limited (moderate) assurance engagement."],
      ["Reasonable assurance", false, "Reasonable assurance uses a positive conclusion ('in our opinion'), not 'nothing has come to our attention'."],
      ["Absolute assurance", false, "Absolute assurance is never attainable due to inherent limitations."],
      ["No assurance at all", false, "A review provides a conclusion and therefore a level of assurance."],
    ],
  ),
  mc(
    {
      id: "as-proc-3",
      topicId: "t-ass-proc",
      type: "mcq",
      difficulty: "medium",
      stem: "Compared with a limited assurance engagement, a reasonable assurance engagement involves:",
      explanation:
        "Reasonable assurance is the higher level: more extensive procedures, a lower (reduced) acceptable level of engagement risk and a positively worded conclusion.",
      relatedConcepts: ["Reasonable assurance", "Engagement risk"],
    },
    [
      ["More extensive procedures and a positively worded conclusion", true, "Correct — reasonable assurance reduces engagement risk to an acceptably low level and gives a positive opinion."],
      ["Fewer procedures and a higher level of engagement risk", false, "That describes limited assurance, which is the lower level."],
      ["A guarantee of accuracy", false, "No engagement provides a guarantee."],
      ["No requirement to gather evidence", false, "All assurance requires sufficient appropriate evidence."],
    ],
  ),
  mc(
    {
      id: "as-proc-4",
      topicId: "t-ass-proc",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the principal benefit of an assurance engagement to the intended users?",
      explanation:
        "Assurance enhances the degree of confidence intended users can place in the subject matter, reducing information risk.",
      relatedConcepts: ["Information risk", "Credibility"],
    },
    [
      ["It enhances the credibility of the information and reduces information risk", true, "Correct — increased user confidence is the core benefit."],
      ["It removes all responsibility from the directors", false, "Responsibility for the subject matter remains with the responsible party."],
      ["It eliminates the possibility of error in the information", false, "Assurance reduces, but cannot eliminate, the risk of error."],
      ["It guarantees the company will not fail", false, "Assurance is not a guarantee of future viability."],
    ],
  ),
  mc(
    {
      id: "as-proc-5",
      topicId: "t-ass-proc",
      type: "multi",
      difficulty: "medium",
      stem: "Select ALL of the following that are inherent limitations of an assurance engagement.",
      explanation:
        "Inherent limitations include the use of sampling/testing rather than 100% checking, the use of judgement, the nature of evidence being persuasive rather than conclusive, and the existence of collusion/concealment of fraud. A written report is not a limitation.",
      relatedConcepts: ["Inherent limitations", "Sampling", "Persuasive evidence"],
    },
    [
      ["The use of testing/sampling rather than examining every item", true, "Correct — testing only a sample is an inherent limitation."],
      ["Evidence being persuasive rather than conclusive", true, "Correct — most assurance evidence is persuasive only."],
      ["The possibility of fraud being concealed through collusion", true, "Correct — well-concealed collusion may not be detected."],
      ["The issue of a written report to intended users", false, "A written report is a required element, not a limitation."],
    ],
  ),
  mc(
    {
      id: "as-proc-6",
      topicId: "t-ass-proc",
      type: "mcq",
      difficulty: "hard",
      scenario:
        "A practitioner is asked to provide assurance over a forecast of a company's profits for the next three years.",
      stem: "Why can only limited assurance, at best, normally be given over a profit forecast?",
      explanation:
        "A forecast concerns future events and depends on assumptions that are inherently uncertain, so reasonable assurance cannot be given; the practitioner reports on the reasonableness of assumptions with limited (negative) assurance.",
      relatedConcepts: ["Prospective information", "Assumptions", "Limited assurance"],
    },
    [
      ["The subject matter relates to uncertain future events based on assumptions", true, "Correct — future-oriented information is inherently uncertain, limiting the assurance available."],
      ["Forecasts are never the responsibility of the directors", false, "The forecast remains the directors' responsibility."],
      ["Forecasts contain no subject matter to examine", false, "A forecast is suitable subject matter; the issue is uncertainty."],
      ["Limited assurance always gives more confidence than reasonable assurance", false, "Limited assurance gives less confidence than reasonable assurance."],
    ],
  ),

  // ── Internal control — t-ass-int ─────────────────────────────────────────
  mc(
    {
      id: "as-int-1",
      topicId: "t-ass-int",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "At Harlow Ltd the same warehouse clerk raises purchase orders, receives the goods and approves the supplier invoices for payment.",
      stem: "Which control deficiency does this most directly illustrate?",
      explanation:
        "Combining ordering, receiving and invoice approval in one person is a lack of segregation of duties, increasing the risk of fraud and unauthorised purchases going undetected.",
      relatedConcepts: ["Segregation of duties", "Purchases cycle"],
    },
    [
      ["A lack of segregation of duties", true, "Correct — incompatible functions are concentrated in one individual."],
      ["A weakness in physical controls over inventory", false, "The issue is duties, not physical security."],
      ["An absence of analytical review", false, "Analytical review is a substantive procedure, not the deficiency here."],
      ["A failure of the external confirmation process", false, "External confirmation is an evidence technique, not the control issue."],
    ],
  ),
  mc(
    {
      id: "as-int-2",
      topicId: "t-ass-int",
      type: "mcq",
      difficulty: "easy",
      stem: "A requirement that all purchase invoices over £10,000 be approved by a manager before payment is an example of which type of control?",
      explanation:
        "An authorisation/approval control ensures transactions are sanctioned by an appropriate person before being processed.",
      relatedConcepts: ["Authorisation controls", "Control activities"],
    },
    [
      ["An authorisation (approval) control", true, "Correct — approval limits are authorisation controls."],
      ["A reconciliation control", false, "Reconciliations compare two sets of records; this is approval."],
      ["A physical control", false, "Physical controls restrict access to assets and records."],
      ["An arithmetical/accuracy control", false, "That checks calculations, not whether a transaction is sanctioned."],
    ],
  ),
  mc(
    {
      id: "as-int-3",
      topicId: "t-ass-int",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following best describes a test of controls (as opposed to a substantive procedure)?",
      explanation:
        "A test of controls evaluates the operating effectiveness of a control in preventing or detecting misstatements, e.g. inspecting evidence that invoices were authorised.",
      relatedConcepts: ["Tests of controls", "Operating effectiveness"],
    },
    [
      ["Inspecting a sample of invoices for evidence of authorisation", true, "Correct — this tests whether the control operated, not the balance directly."],
      ["Recalculating the closing inventory valuation", false, "That is a substantive procedure testing the balance."],
      ["Confirming a receivables balance with the customer", false, "External confirmation is a substantive procedure."],
      ["Performing analytical review on gross margin", false, "That is a substantive analytical procedure."],
    ],
  ),
  mc(
    {
      id: "as-int-4",
      topicId: "t-ass-int",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "During the walkthrough of Mersey Ltd's sales system, the practitioner finds that monthly bank reconciliations are prepared but are never reviewed or signed off by a second person.",
      stem: "What is the most appropriate recommendation to address this deficiency?",
      explanation:
        "An independent review and sign-off of reconciliations by someone other than the preparer provides a monitoring control over accuracy and reduces the risk of errors or manipulation going undetected.",
      relatedConcepts: ["Reconciliations", "Independent review", "Monitoring"],
    },
    [
      ["Reconciliations should be independently reviewed and signed by a responsible official", true, "Correct — independent review and evidence of it (sign-off) addresses the deficiency."],
      ["Reconciliations should be discontinued to save time", false, "Removing the control increases risk."],
      ["The same preparer should review their own work twice", false, "Self-review does not provide independent oversight."],
      ["A contingent bonus should be paid for reconciliations completed", false, "This introduces incentives for manipulation, not control."],
    ],
  ),
  mc(
    {
      id: "as-int-5",
      topicId: "t-ass-int",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about the limitations of internal control is correct?",
      explanation:
        "Even a well-designed system can be overridden by management, defeated by collusion, or fail through human error; controls also tend to address routine rather than non-routine transactions, and their cost should not exceed their benefit.",
      relatedConcepts: ["Limitations of internal control", "Management override"],
    },
    [
      ["Controls can be overridden by management or defeated by collusion", true, "Correct — these are recognised inherent limitations of any control system."],
      ["A good system of internal control eliminates all risk of misstatement", false, "No system removes all risk; limitations always remain."],
      ["Internal controls remove the need for the practitioner to gather evidence", false, "Evidence is still required regardless of controls."],
      ["Controls are equally effective for routine and non-routine transactions", false, "Controls typically address routine transactions better than unusual ones."],
    ],
  ),
  mc(
    {
      id: "as-int-6",
      topicId: "t-ass-int",
      type: "mcq",
      difficulty: "easy",
      stem: "A practitioner draws a flowchart and writes narrative notes describing how the wages system processes data from clock-in to payment. This is an example of:",
      explanation:
        "Documenting a system using narrative notes, flowcharts or questionnaires is part of recording and understanding the system before evaluating its controls.",
      relatedConcepts: ["Documenting systems", "Flowcharts", "Narrative notes"],
    },
    [
      ["Recording (documenting) the accounting system", true, "Correct — flowcharts and narrative notes are methods of recording systems."],
      ["Performing a test of detail on the wages balance", false, "That is a substantive procedure, not recording the system."],
      ["Issuing the assurance report", false, "Documentation precedes any reporting."],
      ["Confirming wages with employees", false, "External confirmation is an evidence technique, not system documentation."],
    ],
  ),

  // ── Gathering evidence / assertions — t-ass-evid ─────────────────────────
  mc(
    {
      id: "as-evid-1",
      topicId: "t-ass-evid",
      type: "mcq",
      difficulty: "medium",
      stem: "Sufficient appropriate evidence has two dimensions. 'Sufficiency' and 'appropriateness' respectively refer to:",
      explanation:
        "Sufficiency is the measure of the quantity of evidence; appropriateness is the measure of its quality — its relevance and reliability.",
      relatedConcepts: ["Sufficiency", "Appropriateness", "Relevance and reliability"],
    },
    [
      ["The quantity of evidence; and its quality (relevance and reliability)", true, "Correct — sufficiency = quantity, appropriateness = quality."],
      ["The cost of evidence; and the time taken to obtain it", false, "Neither dimension is about cost or time."],
      ["The number of staff used; and their seniority", false, "These relate to resourcing, not evidence quality."],
      ["The length of the report; and its tone", false, "These describe the report, not evidence."],
    ],
  ),
  mc(
    {
      id: "as-evid-2",
      topicId: "t-ass-evid",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A practitioner attends Severn Ltd's year-end inventory count and personally counts a sample of items, agreeing them to the count sheets.",
      stem: "Which financial statement assertion does physically counting the inventory MOST directly support?",
      explanation:
        "Physically inspecting and counting inventory primarily provides evidence that the recorded inventory exists (existence assertion).",
      relatedConcepts: ["Existence", "Inventory count", "Inspection"],
    },
    [
      ["Existence", true, "Correct — counting confirms that recorded inventory physically exists."],
      ["Cut-off of revenue", false, "Cut-off relates to recording transactions in the correct period."],
      ["Rights and obligations over receivables", false, "That concerns ownership of receivables, not the count."],
      ["Classification of expenses", false, "Classification is about the correct account, not existence of stock."],
    ],
  ),
  mc(
    {
      id: "as-evid-3",
      topicId: "t-ass-evid",
      type: "mcq",
      difficulty: "hard",
      stem: "According to the generally accepted hierarchy of evidence reliability, which source is normally the MOST reliable?",
      explanation:
        "Evidence is more reliable when obtained from independent external sources, when generated under effective controls, when obtained directly by the practitioner, and when documentary/original rather than oral.",
      relatedConcepts: ["Reliability of evidence", "External evidence"],
    },
    [
      ["A confirmation received directly from an independent third party", true, "Correct — external, directly obtained documentary evidence is the most reliable."],
      ["An oral representation from a member of management", false, "Oral internal evidence is among the least reliable."],
      ["A photocopy of an internal document provided by the client", false, "Internally generated copies are less reliable than external originals."],
      ["A draft schedule prepared by the client's bookkeeper", false, "Internally generated evidence is weaker than external evidence."],
    ],
  ),
  mc(
    {
      id: "as-evid-4",
      topicId: "t-ass-evid",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "The practitioner is concerned that Trent Ltd may have recorded sales in the current year that actually relate to goods dispatched after the year end.",
      stem: "Which assertion is the practitioner primarily testing, and which procedure best addresses it?",
      explanation:
        "This is a cut-off (occurrence/period) concern; inspecting goods dispatch notes around the year end and agreeing them to the date sales were recorded tests cut-off.",
      relatedConcepts: ["Cut-off", "Occurrence", "Dispatch notes"],
    },
    [
      ["Cut-off — by inspecting dispatch notes immediately before and after the year end", true, "Correct — matching dispatch dates to recording dates tests cut-off."],
      ["Valuation — by recalculating depreciation", false, "Depreciation is unrelated to the timing of sales."],
      ["Existence — by counting inventory", false, "Counting stock does not address when sales were recorded."],
      ["Rights — by inspecting the company's statutory books", false, "Statutory books do not test sales cut-off."],
    ],
  ),
  mc(
    {
      id: "as-evid-5",
      topicId: "t-ass-evid",
      type: "multi",
      difficulty: "medium",
      stem: "Select ALL of the following that are recognised procedures for obtaining assurance evidence.",
      explanation:
        "Recognised techniques include inspection, observation, external confirmation, recalculation, reperformance, analytical procedures and enquiry. 'Guaranteeing the result' is not a procedure.",
      relatedConcepts: ["Evidence-gathering procedures", "AEIOU"],
    },
    [
      ["Inspection of records or documents", true, "Correct — inspection is a recognised procedure."],
      ["External confirmation from a third party", true, "Correct — confirmation is a recognised procedure."],
      ["Recalculation of a figure for arithmetical accuracy", true, "Correct — recalculation is a recognised procedure."],
      ["Guaranteeing that the financial statements are correct", false, "Assurance never guarantees correctness; this is not a procedure."],
    ],
  ),
  mc(
    {
      id: "as-evid-6",
      topicId: "t-ass-evid",
      type: "scenario",
      difficulty: "easy",
      scenario:
        "To test the completeness of recorded purchases, a practitioner wishes to ensure that all goods received have been recorded as liabilities.",
      stem: "Which direction of testing is appropriate?",
      explanation:
        "To test completeness, trace from source documents (e.g. goods received notes) forward to the accounting records, ensuring nothing has been omitted.",
      relatedConcepts: ["Completeness", "Direction of testing"],
    },
    [
      ["Trace from goods received notes to the purchase ledger", true, "Correct — testing from source to records tests completeness (understatement)."],
      ["Trace from the purchase ledger to goods received notes", false, "That direction tests occurrence/existence, not completeness."],
      ["Confirm the year-end bank balance", false, "Irrelevant to completeness of purchases."],
      ["Recalculate depreciation on plant", false, "Unrelated to recording of purchases."],
    ],
  ),

  // ── Professional ethics — t-ass-eth ──────────────────────────────────────
  mc(
    {
      id: "as-eth-1",
      topicId: "t-ass-eth",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is NOT one of the five fundamental principles in the IESBA/ICAEW Code of Ethics?",
      explanation:
        "The five fundamental principles are integrity, objectivity, professional competence and due care, confidentiality, and professional behaviour. Independence is a related concept but not itself one of the five principles.",
      relatedConcepts: ["Fundamental principles", "Code of Ethics"],
    },
    [
      ["Profitability", true, "Correct — profitability is not a fundamental principle."],
      ["Integrity", false, "Integrity is one of the five fundamental principles."],
      ["Objectivity", false, "Objectivity is one of the five fundamental principles."],
      ["Confidentiality", false, "Confidentiality is one of the five fundamental principles."],
    ],
  ),
  mc(
    {
      id: "as-eth-2",
      topicId: "t-ass-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "The fees from a single assurance client represent 18% of the practice's total fee income, and the partner is worried about losing the client.",
      stem: "Which threat to the fundamental principles does this primarily create?",
      explanation:
        "Fee dependence creates a self-interest threat — the firm's financial interest may inappropriately influence its judgement and objectivity.",
      relatedConcepts: ["Self-interest threat", "Fee dependence"],
    },
    [
      ["Self-interest threat", true, "Correct — economic dependence on the client's fees is a self-interest threat."],
      ["Advocacy threat", false, "Advocacy arises from promoting a client's position, not fee dependence."],
      ["Familiarity threat", false, "Familiarity arises from close relationships, not fees."],
      ["Intimidation threat", false, "Intimidation involves pressure or threats, not voluntary fee reliance."],
    ],
  ),
  mc(
    {
      id: "as-eth-3",
      topicId: "t-ass-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A firm prepares the accounting records and financial statements of an assurance client and then provides assurance on those same financial statements.",
      stem: "Which threat does this most directly create?",
      explanation:
        "Reviewing work that the firm itself produced is a self-review threat, because the firm may be reluctant to highlight errors in its own work.",
      relatedConcepts: ["Self-review threat", "Provision of accounting services"],
    },
    [
      ["Self-review threat", true, "Correct — the firm would be reviewing its own work."],
      ["Self-interest threat", false, "The issue is reviewing own work, not a financial interest."],
      ["Advocacy threat", false, "No promotion of the client's position is involved."],
      ["Intimidation threat", false, "There is no pressure or threat from the client here."],
    ],
  ),
  mc(
    {
      id: "as-eth-4",
      topicId: "t-ass-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "The finance director of an assurance client threatens to remove the firm from all engagements unless it agrees not to raise a contentious adjustment.",
      stem: "Identify the threat and the most appropriate safeguard.",
      explanation:
        "Pressure and threats from the client create an intimidation threat; appropriate responses include escalating within the firm, consulting those charged with governance, and ultimately being prepared to resign if objectivity cannot be maintained.",
      relatedConcepts: ["Intimidation threat", "Safeguards", "Withdrawal"],
    },
    [
      ["Intimidation threat — escalate within the firm and be prepared to resign if objectivity is compromised", true, "Correct — coercion is intimidation; the firm must protect objectivity, resigning if necessary."],
      ["Familiarity threat — rotate the engagement partner only", false, "This is intimidation, not familiarity; rotation alone does not address the coercion."],
      ["Self-interest threat — accept the client's demand to keep the fees", false, "Accepting the demand would breach objectivity and integrity."],
      ["Advocacy threat — promote the client's preferred treatment publicly", false, "Promoting the client's position would worsen, not safeguard, objectivity."],
    ],
  ),
  mc(
    {
      id: "as-eth-5",
      topicId: "t-ass-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "The same audit/assurance engagement partner has acted for a client for over twelve years and has developed a close personal friendship with the directors.",
      stem: "Which threat does this create, and which safeguard is most appropriate?",
      explanation:
        "A long association and close relationship create a familiarity threat; rotating the engagement partner (and senior staff) is the standard safeguard.",
      relatedConcepts: ["Familiarity threat", "Long association", "Rotation"],
    },
    [
      ["Familiarity threat — rotate the engagement partner", true, "Correct — long association and close ties are a familiarity threat, addressed by rotation."],
      ["Advocacy threat — issue a press release supporting the client", false, "This is familiarity, not advocacy, and the 'safeguard' is inappropriate."],
      ["Intimidation threat — accept lower fees", false, "There is no coercion here; this is familiarity."],
      ["Self-review threat — review the firm's own accounting work", false, "No self-review is described; the issue is the close relationship."],
    ],
  ),
  mc(
    {
      id: "as-eth-6",
      topicId: "t-ass-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "An assurance firm is asked to act as an expert witness, promoting and defending its client's position in a court dispute over the client's financial position.",
      stem: "Which threat does acting in this capacity create?",
      explanation:
        "Promoting or advocating a client's position to the point that objectivity is compromised is an advocacy threat.",
      relatedConcepts: ["Advocacy threat", "Litigation support"],
    },
    [
      ["Advocacy threat", true, "Correct — taking the client's side in a dispute is an advocacy threat to objectivity."],
      ["Self-review threat", false, "The firm is not reviewing its own prior work here."],
      ["Familiarity threat", false, "No close relationship is described; the issue is promotion of the client's position."],
      ["Professional competence threat", false, "Competence is a principle, not one of the five threats."],
    ],
  ),
  mc(
    {
      id: "as-eth-7",
      topicId: "t-ass-eth",
      type: "mcq",
      difficulty: "medium",
      stem: "Under the principle of confidentiality, in which circumstance may a member disclose confidential client information?",
      explanation:
        "Disclosure is permitted where authorised by the client, required by law (e.g. money-laundering reporting), or there is a professional duty/right to disclose and it is not prohibited by law.",
      relatedConcepts: ["Confidentiality", "Permitted disclosure"],
    },
    [
      ["Where disclosure is required by law, such as reporting suspected money laundering", true, "Correct — legal obligation is a recognised ground for permitted disclosure."],
      ["Whenever it would be commercially useful to the firm", false, "Commercial advantage is never a valid reason to breach confidentiality."],
      ["To impress a prospective client at a networking event", false, "This is an improper use of confidential information."],
      ["Because the information is interesting to discuss socially", false, "Social discussion of client matters breaches confidentiality."],
    ],
  ),

  // ── Assurance reports — t-ass-rep ────────────────────────────────────────
  mc(
    {
      id: "as-rep-1",
      topicId: "t-ass-rep",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "An auditor concludes that the financial statements give a true and fair view in all material respects, with no significant issues.",
      stem: "Which type of audit opinion should be issued?",
      explanation:
        "When the statements are free from material misstatement, an unmodified (unqualified) opinion is given.",
      relatedConcepts: ["Unmodified opinion", "True and fair view"],
    },
    [
      ["An unmodified (unqualified) opinion", true, "Correct — no material issues means an unmodified opinion."],
      ["A qualified 'except for' opinion", false, "A qualification is only needed for a material but not pervasive issue."],
      ["An adverse opinion", false, "An adverse opinion is for pervasive material misstatement."],
      ["A disclaimer of opinion", false, "A disclaimer is for a pervasive inability to obtain evidence."],
    ],
  ),
  mc(
    {
      id: "as-rep-2",
      topicId: "t-ass-rep",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Inventory is materially overstated because it is not written down to net realisable value. The misstatement is material but confined to that one balance and is not pervasive.",
      stem: "What opinion is appropriate?",
      explanation:
        "A material but not pervasive misstatement leads to a qualified ('except for') opinion.",
      relatedConcepts: ["Qualified opinion", "Material but not pervasive"],
    },
    [
      ["A qualified 'except for' opinion", true, "Correct — material but not pervasive misstatement gives an 'except for' qualification."],
      ["An unmodified opinion", false, "A material misstatement cannot be reported as unmodified."],
      ["An adverse opinion", false, "Adverse is reserved for pervasive misstatement; this is confined to one balance."],
      ["A disclaimer of opinion", false, "A disclaimer concerns inability to obtain evidence, not a known misstatement."],
    ],
  ),
  mc(
    {
      id: "as-rep-3",
      topicId: "t-ass-rep",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "The auditor is unable to obtain any evidence over a subsidiary that represents the majority of group assets, so cannot form a view on the group financial statements as a whole.",
      stem: "What opinion should be issued?",
      explanation:
        "A pervasive inability to obtain sufficient appropriate evidence leads to a disclaimer of opinion.",
      relatedConcepts: ["Disclaimer of opinion", "Limitation of scope", "Pervasive"],
    },
    [
      ["A disclaimer of opinion", true, "Correct — a pervasive limitation on scope means the auditor disclaims an opinion."],
      ["A qualified 'except for' opinion", false, "Qualification applies when the matter is material but not pervasive."],
      ["An adverse opinion", false, "Adverse opinions arise from misstatement, not from missing evidence."],
      ["An unmodified opinion", false, "An opinion cannot be unmodified when evidence is pervasively lacking."],
    ],
  ),
  mc(
    {
      id: "as-rep-4",
      topicId: "t-ass-rep",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is a required element of an external auditor's report?",
      explanation:
        "An auditor's report includes, among other elements, a title, addressee, the opinion, basis for opinion, respective responsibilities of directors and auditors, and the auditor's signature and date.",
      relatedConcepts: ["Contents of the auditor's report", "Basis for opinion"],
    },
    [
      ["A statement of the respective responsibilities of directors and auditors", true, "Correct — describing responsibilities is a required element."],
      ["A guarantee that the company is a going concern forever", false, "No guarantee of future viability is given."],
      ["A forecast of next year's profits", false, "The report addresses historical statements, not forecasts."],
      ["The auditor's personal opinion on management's competence", false, "The report opines on the financial statements, not management ability."],
    ],
  ),
  mc(
    {
      id: "as-rep-5",
      topicId: "t-ass-rep",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "There is a material uncertainty over going concern, but it is adequately disclosed in the financial statements and the auditor agrees with the going concern basis.",
      stem: "How should the auditor report this?",
      explanation:
        "Where a material uncertainty is adequately disclosed, the auditor issues an unmodified opinion but includes a separate 'Material Uncertainty Related to Going Concern' section drawing attention to the disclosure.",
      relatedConcepts: ["Going concern", "Material uncertainty section", "Unmodified opinion"],
    },
    [
      ["Issue an unmodified opinion with a 'Material Uncertainty Related to Going Concern' section", true, "Correct — adequate disclosure means the opinion is not modified, but a specific section highlights the uncertainty."],
      ["Issue an adverse opinion", false, "Adequate disclosure does not warrant an adverse opinion."],
      ["Issue a qualified opinion", false, "No qualification is needed where the uncertainty is adequately disclosed."],
      ["Say nothing about going concern in the report", false, "The uncertainty must be drawn to users' attention."],
    ],
  ),
  mc(
    {
      id: "as-rep-6",
      topicId: "t-ass-rep",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the purpose of an 'Emphasis of Matter' paragraph in an auditor's report?",
      explanation:
        "An Emphasis of Matter paragraph draws users' attention to a matter appropriately presented or disclosed in the financial statements that is fundamental to their understanding; it does not modify the opinion.",
      relatedConcepts: ["Emphasis of Matter", "Unmodified opinion"],
    },
    [
      ["To draw attention to a fundamental, correctly disclosed matter without modifying the opinion", true, "Correct — it highlights a disclosed matter and does not change the opinion."],
      ["To express a qualified opinion on a balance", false, "Emphasis of Matter does not modify or qualify the opinion."],
      ["To replace the basis for opinion section", false, "It is additional to, not a replacement for, the basis for opinion."],
      ["To report a material misstatement the directors refuse to correct", false, "An uncorrected material misstatement leads to a modified opinion, not an Emphasis of Matter."],
    ],
  ),
];

// AA (Audit & Assurance) — Professional Level question bank.
// Scenario-based, application-focused questions replicating ICAEW exam format,
// difficulty and ISA-accurate technical content. Original questions (not copied
// from ICAEW past papers).
import { mc, calc } from "@/data/question-helpers";
import type { Question } from "@/types/domain";

export const aaQuestions: Question[] = [
  // ── Planning, risk & materiality — t-aa-plan ──────────────────────────────
  mc(
    {
      id: "au-plan-1",
      topicId: "t-aa-plan",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "You are planning the audit of Harlow Retail Ltd. During the year management changed its inventory valuation method and introduced a new EPOS (point-of-sale) system midway through the year. The finance director's bonus is tied to reported gross margin, which has risen sharply.",
      stem: "Which factor gives the strongest indication of a heightened risk of material misstatement due to fraud?",
      explanation:
        "ISA 240 requires the auditor to identify incentives/pressures, opportunities and attitudes. A bonus linked to a metric (gross margin) that has risen sharply creates an incentive and pressure to manipulate that very figure — a fraud risk factor.",
      relatedConcepts: ["Fraud risk factors", "ISA 240", "Management override"],
    },
    [
      ["The FD's bonus is linked to gross margin, which has risen sharply", true, "Correct — an incentive/pressure over the exact figure that has moved, a classic ISA 240 fraud risk factor."],
      ["The inventory valuation method was changed", false, "A change of accounting policy is an inherent risk to assess, but is not itself a fraud indicator without an incentive."],
      ["A new EPOS system was introduced", false, "A system change raises control/error risk, but is not primarily a fraud incentive."],
      ["Harlow operates in the retail sector", false, "The sector alone is not a specific fraud risk factor for this entity."],
    ],
  ),
  calc({
    id: "au-plan-2",
    topicId: "t-aa-plan",
    difficulty: "medium",
    scenario:
      "Audit planning for Verdant Foods Ltd. Profit before tax is £4,200,000, revenue is £62,000,000 and total assets are £38,000,000. Your firm's policy benchmark for materiality is 5% of profit before tax.",
    stem: "Using the firm's profit-before-tax benchmark, what is overall materiality for the financial statements as a whole, in £?",
    explanation:
      "Overall materiality is set against an appropriate benchmark. Using 5% of profit before tax: 5% × £4,200,000.",
    workedSolution: "Materiality = 5% × 4,200,000 = £210,000.",
    relatedConcepts: ["Materiality benchmarks", "ISA 320"],
    numericAnswer: 210000,
    numericTolerance: 0,
    unit: "£",
  }),
  mc(
    {
      id: "au-plan-3",
      topicId: "t-aa-plan",
      type: "mcq",
      difficulty: "medium",
      scenario:
        "While planning the audit of Solstice Engineering Ltd, the engagement partner concludes that, due to the susceptibility of a class of transactions to misstatement, a lower threshold should apply to a particular balance.",
      stem: "Which concept is the partner applying?",
      explanation:
        "Performance materiality may be set, and specific (lower) materiality levels for particular classes of transactions, account balances or disclosures may be determined under ISA 320 where misstatements of lesser amounts could reasonably influence users.",
      relatedConcepts: ["Performance materiality", "Specific materiality", "ISA 320"],
    },
    [
      ["Setting a specific materiality for a particular class of transactions or balance", true, "Correct — ISA 320 permits a lower specific materiality where smaller misstatements could influence users."],
      ["Tolerable misstatement for sampling only", false, "Tolerable misstatement relates to sampling and is an application of performance materiality, not a separate balance-specific threshold."],
      ["Clearly trivial threshold", false, "The clearly trivial threshold is the level below which misstatements need not be accumulated — the opposite purpose."],
      ["Aggregation risk", false, "Aggregation risk is the risk that immaterial misstatements add up to a material total; it is not the concept being applied here."],
    ],
  ),
  mc(
    {
      id: "au-plan-4",
      topicId: "t-aa-plan",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Marlow Construction Ltd recognises revenue on long-term contracts using estimates of stage of completion and forecast total costs. Management's estimates have historically been optimistic and contract outcomes are uncertain.",
      stem: "How should the auditor most appropriately respond at the assertion level?",
      explanation:
        "Where significant judgement and estimation uncertainty exist, ISA 540 directs the auditor to treat the estimate as a significant risk and design responsive procedures focusing on the reasonableness of assumptions and the data used.",
      relatedConcepts: ["Significant risk", "Accounting estimates", "ISA 540"],
    },
    [
      ["Treat contract revenue as a significant risk and test the assumptions, data and method behind the estimate", true, "Correct — high estimation uncertainty and judgement make this a significant risk requiring focused substantive work under ISA 540."],
      ["Rely solely on analytical procedures comparing this year's margin to last year's", false, "Analytical procedures alone are insufficient for a high-judgement, high-risk estimate."],
      ["Accept management's stage-of-completion figure as it is a directors' judgement", false, "The auditor must challenge management bias, not simply accept the estimate."],
      ["Reduce sample sizes because contracts are individually large", false, "Larger, riskier balances generally call for more, not less, evidence."],
    ],
  ),
  mc(
    {
      id: "au-plan-5",
      topicId: "t-aa-plan",
      type: "mcq",
      difficulty: "easy",
      stem: "Which equation correctly expresses the audit risk model?",
      explanation:
        "Audit risk = inherent risk × control risk × detection risk. The auditor cannot control inherent and control risk (the risk of material misstatement) but manages detection risk through the nature, timing and extent of procedures.",
      relatedConcepts: ["Audit risk model", "Detection risk", "ISA 200"],
    },
    [
      ["Audit risk = inherent risk × control risk × detection risk", true, "Correct — RoMM (inherent × control) combined with detection risk."],
      ["Audit risk = inherent risk + control risk − detection risk", false, "The components are multiplicative, not additive."],
      ["Audit risk = materiality × sample size", false, "This is not the audit risk model."],
      ["Audit risk = control risk ÷ detection risk", false, "Audit risk is a product of the three components."],
    ],
  ),
  mc(
    {
      id: "au-plan-6",
      topicId: "t-aa-plan",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "At Kestrel Logistics Ltd the auditor assesses control risk as high because the company has poor segregation of duties in the purchases cycle and a history of posting errors.",
      stem: "To keep audit risk at an acceptably low level, how should the auditor respond to this assessment?",
      explanation:
        "Where the risk of material misstatement is higher, the auditor must reduce detection risk by obtaining more persuasive evidence — typically more extensive substantive procedures, performed nearer the year end, by more experienced staff.",
      relatedConcepts: ["Detection risk", "Substantive procedures", "Audit risk model"],
    },
    [
      ["Lower detection risk by performing more extensive substantive procedures closer to year end", true, "Correct — higher RoMM requires lower planned detection risk and more persuasive evidence."],
      ["Increase reliance on controls testing instead of substantive work", false, "Controls are weak, so reliance on them is not appropriate."],
      ["Reduce the extent of testing because the year-end balance is small", false, "High control risk calls for more, not less, work."],
      ["Issue a disclaimer of opinion immediately", false, "High control risk is managed through procedures, not an automatic disclaimer."],
    ],
  ),

  // ── Assertions, procedures & evidence reliability — t-aa-evid ─────────────
  mc(
    {
      id: "au-evid-1",
      topicId: "t-aa-evid",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Auditing the year-end trade receivables of Dalton Wholesale Ltd, you are most concerned that recorded receivables may not actually exist or may already have been settled.",
      stem: "Which audit procedure most directly addresses the existence assertion for receivables?",
      explanation:
        "Direct confirmation from customers (an external, independently sourced confirmation) is the strongest procedure for the existence of receivables under ISA 505.",
      relatedConcepts: ["Existence assertion", "External confirmations", "ISA 505"],
    },
    [
      ["Send positive confirmation requests to a sample of customers", true, "Correct — external confirmation directly tests whether the receivable exists at the customer."],
      ["Review the receivables ageing for old balances", false, "Ageing primarily addresses valuation/recoverability, not existence."],
      ["Recalculate the bad-debt provision", false, "This addresses valuation, not existence."],
      ["Trace a sample of dispatch notes to sales invoices", false, "This tests completeness of recording, not the existence of the year-end balance."],
    ],
  ),
  mc(
    {
      id: "au-evid-2",
      topicId: "t-aa-evid",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "You are concerned that not all of Riverstone Ltd's sales near the year end have been recorded. You select a sample of dispatch notes raised in the last week of the year and trace them through to the sales day book.",
      stem: "Which assertion and direction of testing does this procedure support?",
      explanation:
        "Starting from source documents (dispatch notes) and tracing forward to the records tests completeness — that everything dispatched was recorded.",
      relatedConcepts: ["Completeness", "Direction of testing", "Cut-off"],
    },
    [
      ["Completeness of revenue — tracing from dispatch notes to the records", true, "Correct — testing from source to ledger detects unrecorded (understated) sales, i.e. completeness."],
      ["Occurrence of revenue — vouching from the ledger to dispatch notes", false, "That is the reverse direction and tests occurrence/existence, not completeness."],
      ["Valuation of revenue", false, "The procedure addresses whether items were recorded, not their measurement."],
      ["Classification of revenue", false, "Classification concerns the account used, not whether the transaction was captured."],
    ],
  ),
  mc(
    {
      id: "au-evid-3",
      topicId: "t-aa-evid",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following audit evidence is generally the MOST reliable?",
      explanation:
        "ISA 500 indicates evidence is more reliable when obtained from independent external sources, when generated by the auditor directly, and when in documentary form. A bank confirmation received directly from the bank ranks highest among these options.",
      relatedConcepts: ["Reliability of evidence", "ISA 500"],
    },
    [
      ["A bank confirmation received directly by the auditor from the bank", true, "Correct — external, independent and obtained directly by the auditor: highly reliable."],
      ["A photocopy of a supplier invoice held by the client", false, "Internally held copies are less reliable than originals or externally sourced evidence."],
      ["Oral representations from the sales manager", false, "Oral internal representations are among the least reliable forms of evidence."],
      ["A spreadsheet prepared by the client's finance team", false, "Internally generated evidence is weaker than independent external evidence."],
    ],
  ),
  mc(
    {
      id: "au-evid-4",
      topicId: "t-aa-evid",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Pinehill Manufacturing Ltd holds significant raw-material inventory at three sites. You attended the year-end count at the largest site, observed counting procedures, performed test counts from the records to the floor and from the floor to the records, and noted damaged goods.",
      stem: "The 'floor to records' test counts primarily provide evidence over which assertion?",
      explanation:
        "Counting items physically present and tracing them into the records tests completeness of inventory. (Records-to-floor tests existence; identifying damaged goods supports valuation.)",
      relatedConcepts: ["Inventory count", "Completeness vs existence", "ISA 501"],
    },
    [
      ["Completeness of inventory", true, "Correct — selecting physical items and checking they are in the records detects omitted (understated) inventory."],
      ["Existence of inventory", false, "Existence is tested the other way — from the records to the physical floor."],
      ["Valuation of inventory", false, "Valuation is supported by noting damaged/obsolete goods and checking cost vs NRV, not by the floor-to-records count."],
      ["Rights and obligations over inventory", false, "Ownership is tested by reviewing purchase records and consignment terms, not test counts."],
    ],
  ),
  mc(
    {
      id: "au-evid-5",
      topicId: "t-aa-evid",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "During the audit of Aldgate Media Ltd, management provides a schedule supporting an intangible asset's carrying value. The schedule was prepared by the client's internal valuation team. The auditor is deciding whether the evidence is sufficient.",
      stem: "What is the most appropriate response regarding the reliability of this evidence?",
      explanation:
        "Internally generated evidence is less reliable; ISA 500 requires the auditor to evaluate the competence and objectivity of a management's expert and to corroborate with independent evidence and to test the underlying data and assumptions.",
      relatedConcepts: ["Management's expert", "ISA 500", "Corroboration"],
    },
    [
      ["Evaluate the competence and objectivity of the internal team and corroborate the key assumptions independently", true, "Correct — under ISA 500 the auditor must assess a management's expert and obtain corroborating evidence; internal schedules alone are weak."],
      ["Accept the schedule because it was prepared by qualified valuers", false, "Internal preparation, however qualified, still requires corroboration and assessment of objectivity."],
      ["Reject the schedule outright and qualify the opinion", false, "An immediate qualification is premature; further procedures should be performed first."],
      ["Rely on a written representation from management instead", false, "Written representations are not a substitute for substantive audit evidence."],
    ],
  ),
  mc(
    {
      id: "au-evid-6",
      topicId: "t-aa-evid",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Westgate Ltd capitalised £180,000 of expenditure as a new plant addition. You want evidence that the company has the rights to, and actually incurred cost on, this asset.",
      stem: "Which combination of procedures best supports the rights/obligations and valuation assertions for the addition?",
      explanation:
        "Inspecting the purchase invoice and title/registration documents supports rights and the amount capitalised (valuation/accuracy). Physical inspection supports existence.",
      relatedConcepts: ["Non-current assets", "Rights and obligations", "Valuation"],
    },
    [
      ["Inspect the purchase invoice and ownership/title documentation for the addition", true, "Correct — the invoice supports cost (valuation) and title documents support rights and obligations."],
      ["Recalculate the depreciation charge only", false, "Depreciation supports the charge, not the rights or the initial cost of the addition."],
      ["Obtain a written representation that the asset is owned", false, "Representations are not sufficient alone for an asset of this size."],
      ["Compare total additions to last year's additions", false, "An analytical comparison does not evidence rights or the specific cost incurred."],
    ],
  ),

  // ── Audit opinions / modifications — t-aa-rep ─────────────────────────────
  mc(
    {
      id: "au-rep-1",
      topicId: "t-aa-rep",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Thornbury Ltd refuses to write down obsolete inventory you consider overstated by £900,000. Overall materiality is £250,000. The misstatement is confined to inventory and does not affect the financial statements as a whole; the rest of the accounts are fairly stated.",
      stem: "What is the appropriate audit opinion?",
      explanation:
        "There is a material but not pervasive misstatement (a disagreement confined to one balance). ISA 705 requires a qualified ('except for') opinion when a misstatement is material but not pervasive.",
      relatedConcepts: ["Qualified opinion", "Material vs pervasive", "ISA 705"],
    },
    [
      ["Qualified ('except for') opinion due to a material but not pervasive misstatement", true, "Correct — material misstatement confined to one area is qualified, not adverse."],
      ["Adverse opinion", false, "An adverse opinion is for pervasive misstatements; this one is confined to inventory."],
      ["Disclaimer of opinion", false, "A disclaimer arises from an inability to obtain sufficient evidence, not from a disagreement where evidence exists."],
      ["Unmodified opinion with an emphasis of matter paragraph", false, "An emphasis of matter cannot be used to deal with a material misstatement."],
    ],
  ),
  mc(
    {
      id: "au-rep-2",
      topicId: "t-aa-rep",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A fire destroyed the accounting records of Cawley Ltd and no reliable reconstruction is possible. You cannot obtain sufficient appropriate evidence over revenue, expenses, receivables, payables or inventory — essentially the financial statements as a whole.",
      stem: "What opinion should be issued?",
      explanation:
        "This is an inability to obtain sufficient appropriate audit evidence whose possible effects are both material and pervasive. ISA 705 requires a disclaimer of opinion.",
      relatedConcepts: ["Disclaimer of opinion", "Limitation of scope", "ISA 705"],
    },
    [
      ["Disclaimer of opinion", true, "Correct — a pervasive inability to obtain evidence requires a disclaimer."],
      ["Qualified opinion", false, "A qualification is for material-but-not-pervasive matters; here the effect is pervasive."],
      ["Adverse opinion", false, "Adverse is for pervasive misstatements that are known, not for an inability to obtain evidence."],
      ["Unmodified opinion with an other-matter paragraph", false, "An unmodified opinion is impossible where evidence is pervasively unavailable."],
    ],
  ),
  mc(
    {
      id: "au-rep-3",
      topicId: "t-aa-rep",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Brookline Ltd has prepared its financial statements on a going concern basis. You conclude that the use of the going concern basis is wholly inappropriate — the company has ceased trading and will be liquidated. The directors refuse to change the basis.",
      stem: "What is the appropriate audit opinion?",
      explanation:
        "Where the going concern basis is inappropriate but has been used, the financial statements are materially and pervasively misstated. ISA 570/705 require an adverse opinion.",
      relatedConcepts: ["Going concern basis", "Adverse opinion", "ISA 570"],
    },
    [
      ["Adverse opinion", true, "Correct — an inappropriate going concern basis makes the statements pervasively misstated, requiring an adverse opinion."],
      ["Disclaimer of opinion", false, "Evidence exists (the company is being liquidated); this is a disagreement, not a scope limitation."],
      ["Qualified opinion", false, "The misstatement pervades the whole basis of preparation, so it exceeds 'except for'."],
      ["Unmodified opinion with a material uncertainty paragraph", false, "A material uncertainty paragraph is for an appropriate basis with doubt — not for a basis that is wholly inappropriate."],
    ],
  ),
  mc(
    {
      id: "au-rep-4",
      topicId: "t-aa-rep",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Audit of Halden Ltd is complete. A material uncertainty over going concern exists (significant doubt about a refinancing), but the directors have made adequate disclosure of it in the notes, and you agree the going concern basis is appropriate.",
      stem: "How should the auditor's report deal with this?",
      explanation:
        "Where a material uncertainty exists and is adequately disclosed, ISA 570 requires an unmodified opinion with a separate 'Material Uncertainty Related to Going Concern' section.",
      relatedConcepts: ["Material uncertainty", "Going concern", "ISA 570"],
    },
    [
      ["Unmodified opinion with a 'Material Uncertainty Related to Going Concern' section", true, "Correct — adequate disclosure of the uncertainty means the opinion is not modified, but a separate section is required."],
      ["Qualified opinion because of the going concern doubt", false, "Adequate disclosure means no modification of the opinion is needed."],
      ["Adverse opinion", false, "Adverse is for inappropriate basis or pervasive misstatement, not a properly disclosed uncertainty."],
      ["Emphasis of matter paragraph only", false, "ISA 570 requires a specifically headed section, not a generic emphasis of matter, for a going concern material uncertainty."],
    ],
  ),
  mc(
    {
      id: "au-rep-5",
      topicId: "t-aa-rep",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "After the audit of Felden Ltd, the directors adequately disclose a material lawsuit whose outcome is uncertain. You are satisfied the accounting and disclosure are correct, but consider the matter fundamental to users' understanding.",
      stem: "Which reporting tool is appropriate?",
      explanation:
        "An emphasis of matter paragraph draws attention to a matter appropriately presented or disclosed that is fundamental to users' understanding. It does not modify the opinion (ISA 706).",
      relatedConcepts: ["Emphasis of matter", "ISA 706"],
    },
    [
      ["An emphasis of matter paragraph, with an unmodified opinion", true, "Correct — the matter is properly disclosed but fundamental, so an EoM is used and the opinion is unmodified."],
      ["A qualified opinion", false, "There is no misstatement or scope limitation, so the opinion is not modified."],
      ["A disclaimer of opinion", false, "Evidence is available and the disclosure is adequate."],
      ["A 'Material Uncertainty Related to Going Concern' section", false, "The matter is a lawsuit, not a going concern uncertainty."],
    ],
  ),
  mc(
    {
      id: "au-rep-6",
      topicId: "t-aa-rep",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Garner Ltd, a listed company, has several matters that you judged to be of most significance in the audit (revenue recognition and goodwill impairment). None led to a modification of your opinion.",
      stem: "Where are these matters most appropriately communicated in the auditor's report?",
      explanation:
        "For listed entities, ISA 701 requires the auditor to communicate Key Audit Matters — those of most significance in the audit — in a dedicated section, distinct from the opinion.",
      relatedConcepts: ["Key Audit Matters", "ISA 701", "Listed entities"],
    },
    [
      ["In a 'Key Audit Matters' section of the report", true, "Correct — ISA 701 requires KAMs for listed entities in a dedicated section."],
      ["In the basis for qualified opinion section", false, "These matters did not modify the opinion, so a basis-for-qualification section is inappropriate."],
      ["They should not be mentioned at all", false, "For listed entities KAM reporting is mandatory."],
      ["In an emphasis of matter paragraph for each", false, "KAMs have their own dedicated section under ISA 701 rather than emphasis of matter paragraphs."],
    ],
  ),

  // ── Ethics & engagement acceptance — t-aa-eth ─────────────────────────────
  mc(
    {
      id: "au-eth-1",
      topicId: "t-aa-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Your firm has audited Maple Ltd for nine years and the same engagement partner has served throughout. Maple is a listed company. The audit committee asks whether the partner can continue for a tenth year.",
      stem: "Which threat is most significant, and what is the appropriate safeguard?",
      explanation:
        "Long association of senior personnel creates a familiarity (and self-interest) threat. For listed/PIE audits, the Ethical Standard requires rotation of the engagement partner after a maximum period (generally five years for the key audit partner).",
      relatedConcepts: ["Familiarity threat", "Partner rotation", "FRC Ethical Standard"],
    },
    [
      ["Familiarity threat — rotate the engagement partner as required for a listed entity", true, "Correct — long association creates a familiarity threat; partner rotation is the required safeguard for PIEs."],
      ["Self-interest threat — increase the audit fee", false, "Raising the fee does not address familiarity and could worsen self-interest."],
      ["Intimidation threat — resign from the engagement", false, "The issue is familiarity from long association, not intimidation, and rotation suffices."],
      ["Advocacy threat — obtain a written representation", false, "Advocacy is not the relevant threat here and a representation is not a safeguard for it."],
    ],
  ),
  mc(
    {
      id: "au-eth-2",
      topicId: "t-aa-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Crestwood plc, a listed audit client, asks your firm to also prepare and post its accounting entries and maintain its accounting records, in addition to performing the statutory audit.",
      stem: "What is the principal ethical problem and the correct response?",
      explanation:
        "Preparing the records you then audit creates a self-review threat. For a listed/PIE audit client the FRC Ethical Standard prohibits accounting and bookkeeping services that go beyond technical assistance — the firm must decline.",
      relatedConcepts: ["Self-review threat", "Prohibited services", "FRC Ethical Standard"],
    },
    [
      ["Self-review threat — decline the bookkeeping work, as it is prohibited for a listed audit client", true, "Correct — auditing your own work is a self-review threat, and such services are prohibited for PIEs."],
      ["Advocacy threat — accept but disclose it in the report", false, "The threat is self-review and disclosure does not cure a prohibited service."],
      ["No threat — bookkeeping is a routine extra service", false, "Maintaining the records you audit is a clear self-review threat, prohibited for PIEs."],
      ["Self-interest threat — accept provided the fee is modest", false, "The threat is self-review and fee size does not make a prohibited service acceptable."],
    ],
  ),
  mc(
    {
      id: "au-eth-3",
      topicId: "t-aa-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A prospective new audit client, Tilbrook Ltd, offers your firm a fee that is 60% below the cost of performing the work, and indicates that future advisory work will follow if you 'work with' them on some accounting judgements.",
      stem: "Which threats arise on engagement acceptance, and what should the firm do?",
      explanation:
        "A 'lowballing'/contingent-style inducement combined with pressure over accounting judgements creates self-interest and intimidation threats to objectivity. The firm should only accept if quality and independence can be maintained, and must resist any pressure compromising the opinion.",
      relatedConcepts: ["Engagement acceptance", "Self-interest threat", "Lowballing"],
    },
    [
      ["Self-interest and intimidation threats — accept only if independence and audit quality can be safeguarded, never compromising judgement", true, "Correct — the inducement and pressure threaten objectivity; the firm must safeguard quality or decline."],
      ["No threat — a low fee benefits the client and is encouraged", false, "A fee that does not support quality work, plus pressure on judgements, is an ethical concern."],
      ["Only a familiarity threat — accept and rotate staff", false, "Familiarity is not the issue for a brand-new client."],
      ["Advocacy threat — accept and promote the client's position", false, "Promoting the client's position would itself breach objectivity."],
    ],
  ),
  mc(
    {
      id: "au-eth-4",
      topicId: "t-aa-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Your firm is approached to take over the audit of Norwood Ltd from another firm. The directors are evasive when you ask why the previous auditor resigned and whether you may contact them.",
      stem: "Before accepting, what is the most important professional step?",
      explanation:
        "Before accepting a new audit, the prospective auditor must seek the client's permission to contact the outgoing auditor (professional clearance) and enquire about any matters bearing on acceptance; refusal to grant permission is itself a warning sign.",
      relatedConcepts: ["Professional clearance", "Engagement acceptance", "Predecessor auditor"],
    },
    [
      ["Obtain the client's permission to contact the outgoing auditor and seek professional clearance", true, "Correct — communication with the predecessor is essential, and refusal of permission is a red flag."],
      ["Accept immediately to secure the new client", false, "Acceptance without clearance breaches professional duty and ignores red flags."],
      ["Report the directors to the FRC at once", false, "Premature; the proper first step is to seek professional clearance and assess acceptance."],
      ["Lower the proposed fee to win the work", false, "Fee level does not address the integrity and acceptance concerns raised."],
    ],
  ),
  mc(
    {
      id: "au-eth-5",
      topicId: "t-aa-eth",
      type: "scenario",
      difficulty: "easy",
      scenario:
        "An audit senior on the Ashby Ltd engagement owns a small but direct shareholding in Ashby Ltd.",
      stem: "What threat does this create and what is the correct action?",
      explanation:
        "A direct financial interest in an audit client creates a self-interest threat. Independence requires the interest to be disposed of or the individual removed from the engagement — a direct financial interest of an audit team member is not permitted.",
      relatedConcepts: ["Self-interest threat", "Financial interest", "Independence"],
    },
    [
      ["Self-interest threat — dispose of the shareholding or remove the senior from the team", true, "Correct — a direct financial interest of a team member is not permitted; dispose of it or remove the individual."],
      ["Familiarity threat — rotate the partner", false, "The issue is a financial interest (self-interest), not long association."],
      ["No threat provided the holding is small", false, "Even a small direct financial interest of a team member is not permitted."],
      ["Intimidation threat — obtain legal advice", false, "There is no intimidation; the threat is self-interest."],
    ],
  ),
  mc(
    {
      id: "au-eth-6",
      topicId: "t-aa-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Fees from Brampton plc, a listed audit client, have grown to represent 18% of your firm's total annual practice income for the second consecutive year.",
      stem: "Which threat is most relevant and what response does the Ethical Standard indicate?",
      explanation:
        "Recurring fees that are a large proportion of the firm's income create a self-interest threat (fee dependency). For a listed/PIE client the FRC Ethical Standard sets a 10% threshold above which safeguards (and disclosure/review) are required and 15% triggers serious action.",
      relatedConcepts: ["Fee dependency", "Self-interest threat", "FRC Ethical Standard"],
    },
    [
      ["Self-interest threat from fee dependency — apply safeguards such as an external independent review and consider resigning", true, "Correct — fees this high relative to practice income for a listed client breach the recommended thresholds and require strong safeguards."],
      ["Advocacy threat — disclose the fee in the audit report", false, "The threat is self-interest/fee dependency, not advocacy."],
      ["No threat — high fees reflect a successful relationship", false, "Fee dependency at this level is a recognised self-interest threat."],
      ["Familiarity threat — rotate the audit staff", false, "Rotation addresses long association, not fee dependency."],
    ],
  ),

  // ── Going concern, subsequent events, completion/review — t-aa-comp ───────
  mc(
    {
      id: "au-comp-1",
      topicId: "t-aa-comp",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Two weeks after the year end of Selby Ltd, but before the financial statements are authorised for issue, a major customer goes into liquidation owing Selby a material balance that was outstanding at the year end.",
      stem: "How should this be treated, and what is the auditor's expectation?",
      explanation:
        "This is an adjusting event after the reporting period (IAS 10): the customer's liquidation provides evidence of conditions existing at the year end (the debt's recoverability). The receivable should be written down/provided for.",
      relatedConcepts: ["Adjusting events", "IAS 10", "Subsequent events"],
    },
    [
      ["Adjusting event — the receivable should be written down in the year-end financial statements", true, "Correct — the liquidation confirms a condition (irrecoverability) existing at the reporting date, so it is adjusting."],
      ["Non-adjusting event — disclose only in the notes", false, "The balance existed at year end, so the new evidence requires adjustment, not just disclosure."],
      ["Ignore it as it occurred after the year end", false, "Events up to authorisation must be considered under IAS 10."],
      ["Treat it as a going concern matter only", false, "Although relevant context, the specific treatment is adjustment of the receivable."],
    ],
  ),
  mc(
    {
      id: "au-comp-2",
      topicId: "t-aa-comp",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "After the reporting date but before authorisation, Pendle Ltd's warehouse is destroyed by a flood. The warehouse was undamaged at the year end. The loss is material.",
      stem: "What is the correct treatment under IAS 10?",
      explanation:
        "The flood reflects conditions arising after the reporting date (the warehouse was fine at year end), so it is a non-adjusting event: no adjustment, but disclose if material to users' understanding.",
      relatedConcepts: ["Non-adjusting events", "IAS 10", "Disclosure"],
    },
    [
      ["Non-adjusting event — disclose the nature and estimated financial effect in the notes", true, "Correct — the condition arose after year end, so disclosure (not adjustment) is required for a material event."],
      ["Adjusting event — reduce the carrying amount of the warehouse at year end", false, "The asset was undamaged at the reporting date, so no adjustment is made."],
      ["No action — events after year end are never relevant", false, "Material non-adjusting events still require disclosure under IAS 10."],
      ["Restate the prior-year comparatives", false, "A post-year-end flood does not affect prior-year figures."],
    ],
  ),
  mc(
    {
      id: "au-comp-3",
      topicId: "t-aa-comp",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Approaching completion of the Aldwick Ltd audit, you identify that the company is in breach of a loan covenant, the bank has not yet confirmed it will not demand repayment, and cash forecasts are tight for the next 12 months. The directors are confident but have prepared no formal assessment.",
      stem: "What is the most appropriate auditor response?",
      explanation:
        "ISA 570 requires the auditor to evaluate management's going concern assessment over at least 12 months. Where indicators exist and management has not assessed, the auditor should request a formal assessment and perform additional procedures (review forecasts, obtain bank confirmation, assess the realism of assumptions).",
      relatedConcepts: ["Going concern assessment", "ISA 570", "Material uncertainty"],
    },
    [
      ["Request a formal going concern assessment and perform procedures on the forecasts and bank's intentions", true, "Correct — indicators of doubt require evaluation of management's assessment and corroborating procedures under ISA 570."],
      ["Accept the directors' confidence and issue an unmodified opinion with no further work", false, "Confidence is not evidence; the auditor must obtain support for the going concern basis."],
      ["Issue a disclaimer of opinion immediately", false, "A disclaimer is premature before performing the necessary going concern procedures."],
      ["Treat the covenant breach as a non-adjusting event only", false, "The covenant breach is a going concern indicator requiring assessment, not merely a subsequent-event disclosure."],
    ],
  ),
  mc(
    {
      id: "au-comp-4",
      topicId: "t-aa-comp",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "At the completion stage of the Riverton Ltd audit, the engagement partner is reviewing the file. Management has provided a written representation confirming that all related-party transactions have been disclosed.",
      stem: "How should the auditor regard this written representation?",
      explanation:
        "Written representations are a necessary part of audit evidence (ISA 580) but are not sufficient on their own; they complement, but do not replace, other substantive procedures over the same assertions.",
      relatedConcepts: ["Written representations", "ISA 580", "Completion"],
    },
    [
      ["As necessary but not sufficient evidence — it complements, not replaces, other procedures", true, "Correct — ISA 580 representations support other evidence but cannot stand alone."],
      ["As conclusive evidence that related-party disclosures are complete", false, "Representations are not sufficient appropriate evidence by themselves."],
      ["As irrelevant — representations have no evidential value", false, "They do have evidential value, just not sufficiency on their own."],
      ["As a substitute for testing the related-party disclosures", false, "They cannot replace substantive procedures over the disclosures."],
    ],
  ),
  mc(
    {
      id: "au-comp-5",
      topicId: "t-aa-comp",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "During completion of the Calder Ltd audit you accumulate uncorrected misstatements totalling £190,000. Overall materiality is £200,000. However, several of the items, if corrected, would turn a small reported profit into a loss, and one item relates to a directors' bonus threshold.",
      stem: "What should the auditor conclude about these uncorrected misstatements?",
      explanation:
        "ISA 450 requires evaluation of misstatements both quantitatively and qualitatively. Even below the numeric materiality, qualitative factors (turning profit to loss, affecting a bonus threshold) can render misstatements material; the auditor should request correction.",
      relatedConcepts: ["Uncorrected misstatements", "Qualitative materiality", "ISA 450"],
    },
    [
      ["The misstatements may be material on qualitative grounds despite being below the numeric threshold — request correction", true, "Correct — ISA 450 requires qualitative as well as quantitative evaluation; turning profit to loss is qualitatively material."],
      ["They are immaterial because the total is below £200,000", false, "Quantitative comparison alone ignores the qualitative factors that make these material."],
      ["No evaluation is needed until the next audit", false, "Misstatements must be evaluated before forming the opinion."],
      ["Automatically qualify the opinion regardless of correction", false, "The first step is to request correction; modification only follows if management refuses and the effect is material."],
    ],
  ),
  mc(
    {
      id: "au-comp-6",
      topicId: "t-aa-comp",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "The auditor's report on Hadlow Ltd was signed on 30 April. On 10 May, before the financial statements were issued, a material fraud committed by the financial controller during the year came to light. The directors agree to amend the financial statements.",
      stem: "What is the auditor's responsibility for this fact discovered after the report date but before issue?",
      explanation:
        "Under ISA 560, for facts discovered after the report date but before the financial statements are issued, the auditor must perform procedures on the amendment and provide a new auditor's report dated no earlier than the date the amended statements are approved.",
      relatedConcepts: ["Subsequent events", "ISA 560", "Dual dating"],
    },
    [
      ["Perform procedures on the amendment and issue a new report dated no earlier than the approval of the amended statements", true, "Correct — ISA 560 requires fresh procedures and a new (or appropriately dated) report on the amended statements."],
      ["Do nothing, as the report has already been signed", false, "The auditor's responsibility extends to facts discovered before the statements are issued."],
      ["Withdraw from the engagement immediately", false, "The directors are amending the statements; the auditor should audit the amendment, not withdraw."],
      ["Issue a disclaimer because of the fraud", false, "The matter is being corrected, so a disclaimer is not warranted; procedures on the amendment are required."],
    ],
  ),
];

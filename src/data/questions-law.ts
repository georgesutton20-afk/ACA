// Law — Certificate Level question bank (UK/English law as examined by ICAEW).
// Certificate-style objective testing: short single-rule items and brief
// scenarios with multiple-choice / multiple-response answers and per-option
// feedback. Original questions (not copied from ICAEW past papers).
import type { Question } from "@/types/domain";
import { mc } from "@/data/question-helpers";

export const lawQuestions: Question[] = [
  // ── Contract law — t-law-con ─────────────────────────────────────────────
  mc(
    {
      id: "lw-con-1",
      topicId: "t-law-con",
      type: "mcq",
      difficulty: "easy",
      scenario:
        "A shop displays a coat in its window marked '£40'. A customer takes it to the till and offers to buy it.",
      stem: "In contract law, what is the legal status of the priced display in the window?",
      explanation:
        "A display of goods with a price is an invitation to treat, not an offer (Fisher v Bell; Pharmaceutical Society v Boots). The customer makes the offer at the till, which the shop may accept or reject.",
      relatedConcepts: ["Invitation to treat", "Offer and acceptance"],
    },
    [
      ["An invitation to treat", true, "Correct — the display merely invites customers to make offers (Fisher v Bell)."],
      ["A binding offer the shop must honour", false, "A priced display is an invitation to treat, not an offer; the shop need not sell."],
      ["An acceptance of the customer's offer", false, "The customer has not yet made any offer when the goods are displayed."],
      ["A unilateral contract", false, "No promise in return for an act has been made; this is simply an invitation to treat."],
    ],
  ),
  mc(
    {
      id: "lw-con-2",
      topicId: "t-law-con",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A company advertised that it would pay £100 to anyone who used its smoke ball as directed and still caught influenza, stating it had deposited £1,000 with its bank to show sincerity. A customer used it correctly and fell ill.",
      stem: "On these facts (mirroring Carlill v Carbolic Smoke Ball Co), can the customer recover the £100?",
      explanation:
        "Carlill v Carbolic Smoke Ball Co established that an advertisement can be a unilateral offer to the world, accepted by performing the stipulated act; the deposit showed intention to be bound, and using the product as directed was good consideration.",
      relatedConcepts: ["Unilateral offer", "Carlill v Carbolic Smoke Ball Co", "Intention to create legal relations"],
    },
    [
      ["Yes — the advertisement was a unilateral offer accepted by performance", true, "Correct — this is the rule in Carlill v Carbolic Smoke Ball Co."],
      ["No — an advertisement can never be an offer", false, "An advertisement can be a unilateral offer where it shows intention to be bound (Carlill)."],
      ["No — the customer never communicated acceptance to the company", false, "In a unilateral offer, performing the act is acceptance; prior communication is not required."],
      ["No — there was no consideration from the customer", false, "Using the smoke ball as directed was good consideration."],
    ],
  ),
  mc(
    {
      id: "lw-con-3",
      topicId: "t-law-con",
      type: "mcq",
      difficulty: "medium",
      stem: "Which statement best describes the rule that consideration must be sufficient but need not be adequate?",
      explanation:
        "Consideration must have some recognisable value in the eyes of the law (sufficient), but the courts will not investigate whether the bargain was a fair or equal exchange (need not be adequate) — Chappell v Nestlé; Thomas v Thomas.",
      relatedConcepts: ["Consideration", "Sufficiency vs adequacy"],
    },
    [
      ["Consideration must have some legal value, but the court will not assess whether it is a fair exchange", true, "Correct — sufficiency requires legal value; adequacy (fair value) is irrelevant."],
      ["Consideration must always be of equal market value to the promise it supports", false, "The court does not require adequacy; an unequal bargain is still binding."],
      ["Consideration is only valid if it is monetary", false, "Consideration may be an act, forbearance or promise — not only money."],
      ["Past consideration is always sufficient", false, "As a general rule, past consideration is no consideration (Re McArdle)."],
    ],
  ),
  mc(
    {
      id: "lw-con-4",
      topicId: "t-law-con",
      type: "mcq",
      difficulty: "medium",
      stem: "A term that is so important that any breach goes to the root of the contract, entitling the innocent party to terminate and claim damages, is known as:",
      explanation:
        "A condition is a major term going to the root of the contract; its breach allows termination and damages. A warranty is a minor term giving rise only to damages. An innominate term is judged by the seriousness of the actual consequences of breach.",
      relatedConcepts: ["Conditions", "Warranties", "Innominate terms"],
    },
    [
      ["A condition", true, "Correct — breach of a condition allows the innocent party to terminate and claim damages."],
      ["A warranty", false, "Breach of a warranty gives a right to damages only, not termination."],
      ["A representation", false, "A representation is a pre-contractual statement, not a term."],
      ["An exclusion clause", false, "An exclusion clause limits or excludes liability; it is not a category of importance of a term."],
    ],
  ),
  mc(
    {
      id: "lw-con-5",
      topicId: "t-law-con",
      type: "multi",
      difficulty: "hard",
      scenario:
        "A buyer is in breach of contract. The seller is considering what losses it may recover as damages.",
      stem: "Which TWO statements correctly reflect the rules on damages for breach of contract?",
      explanation:
        "Damages aim to put the claimant in the position as if the contract had been performed (expectation interest). Losses are recoverable only if not too remote — i.e. arising naturally or within the parties' reasonable contemplation (Hadley v Baxendale). The claimant must also mitigate its loss.",
      relatedConcepts: ["Remoteness", "Hadley v Baxendale", "Mitigation", "Expectation interest"],
    },
    [
      ["Damages aim to put the innocent party in the position as if the contract had been performed", true, "Correct — this is the expectation (loss of bargain) measure."],
      ["Losses too remote (not in the parties' reasonable contemplation) are not recoverable", true, "Correct — the remoteness test from Hadley v Baxendale."],
      ["The innocent party may recover all losses regardless of remoteness", false, "Remote losses are not recoverable; the Hadley v Baxendale limbs apply."],
      ["The innocent party has no duty to take steps to reduce its loss", false, "There is a duty to mitigate; unmitigated losses are not recoverable."],
    ],
  ),
  mc(
    {
      id: "lw-con-6",
      topicId: "t-law-con",
      type: "scenario",
      difficulty: "easy",
      scenario:
        "A offers to sell his car to B for £5,000. B replies, 'I'll give you £4,500.' A refuses. B then says, 'Fine, I accept your original £5,000.'",
      stem: "Is there a binding contract at £5,000?",
      explanation:
        "A counter-offer destroys the original offer (Hyde v Wrench). Once B made the counter-offer of £4,500, A's original offer was extinguished and could not later be accepted unless A renewed it.",
      relatedConcepts: ["Counter-offer", "Hyde v Wrench", "Termination of offer"],
    },
    [
      ["No — B's counter-offer of £4,500 destroyed the original offer, which could not then be accepted", true, "Correct — a counter-offer terminates the original offer (Hyde v Wrench)."],
      ["Yes — the original offer remained open for B to accept at any time", false, "A counter-offer destroys the original offer; it was no longer available."],
      ["Yes — B's request for a lower price was merely a request for information", false, "Proposing a different price is a counter-offer, not a mere inquiry."],
      ["No — because there was no consideration", false, "The issue is the counter-offer destroying the offer, not absence of consideration."],
    ],
  ),

  // ── Company law — t-law-co ───────────────────────────────────────────────
  mc(
    {
      id: "lw-co-1",
      topicId: "t-law-co",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Mr S transferred his sole-trader business to a company in which he held almost all the shares and was the principal creditor (secured by debentures). When the company failed, unsecured creditors argued the company was a sham and Mr S should be personally liable.",
      stem: "On these facts (mirroring Salomon v Salomon & Co Ltd), what is the legal position?",
      explanation:
        "Salomon v Salomon & Co Ltd established that a properly incorporated company is a separate legal person, distinct from its members. Mr S was not personally liable for the company's debts, and his secured debentures ranked ahead of unsecured creditors.",
      relatedConcepts: ["Separate legal personality", "Salomon v Salomon", "Limited liability"],
    },
    [
      ["The company is a separate legal person; Mr S is not personally liable for its debts", true, "Correct — the core principle of Salomon v Salomon & Co Ltd."],
      ["Mr S is personally liable because he owned almost all the shares", false, "Owning most shares does not displace separate legal personality."],
      ["The company is a sham because one person controls it", false, "A company controlled by one person is still validly separate (Salomon)."],
      ["The unsecured creditors rank ahead of Mr S's debentures", false, "A secured creditor ranks ahead of unsecured creditors."],
    ],
  ),
  mc(
    {
      id: "lw-co-2",
      topicId: "t-law-co",
      type: "mcq",
      difficulty: "easy",
      stem: "Under the Companies Act 2006, which document, once registered, principally governs a company's internal rules and the relationship between the company and its members?",
      explanation:
        "Under CA 2006 the articles of association are the company's constitution governing internal management and the relationship between the company and members. The certificate of incorporation evidences that the company exists.",
      relatedConcepts: ["Articles of association", "Company constitution", "CA 2006"],
    },
    [
      ["The articles of association", true, "Correct — the articles are the principal constitutional document under CA 2006."],
      ["The certificate of incorporation", false, "The certificate evidences incorporation; it does not set the internal rules."],
      ["The statement of capital", false, "This records share capital details, not the company's internal governance rules."],
      ["The register of members", false, "This lists shareholders; it is not the constitution."],
    ],
  ),
  mc(
    {
      id: "lw-co-3",
      topicId: "t-law-co",
      type: "mcq",
      difficulty: "medium",
      stem: "Under the Companies Act 2006, which of the following is a codified general duty of a director?",
      explanation:
        "CA 2006 ss.171–177 codify the general duties, including the duty to promote the success of the company for the benefit of members as a whole (s.172), to exercise independent judgement (s.173), reasonable care, skill and diligence (s.174), and to avoid conflicts of interest (s.175).",
      relatedConcepts: ["Directors' duties", "CA 2006 ss.171–177", "Promote the success of the company"],
    },
    [
      ["The duty to promote the success of the company for the benefit of its members as a whole", true, "Correct — s.172 CA 2006."],
      ["The duty to maximise short-term dividends every year", false, "There is no such duty; s.172 focuses on long-term success for members as a whole."],
      ["The duty to personally guarantee all company debts", false, "Directors do not personally guarantee company debts by virtue of office."],
      ["The duty to hold a minimum number of shares", false, "CA 2006 does not require directors to hold a share qualification."],
    ],
  ),
  mc(
    {
      id: "lw-co-4",
      topicId: "t-law-co",
      type: "multi",
      difficulty: "hard",
      stem: "Which TWO of the following correctly describe directors' duties under the Companies Act 2006?",
      explanation:
        "A director must avoid situations of conflict between personal interests and the company's (s.175) and must declare any interest in a proposed transaction (s.177). The s.174 duty of care, skill and diligence applies an objective standard, raised by the director's actual knowledge and experience (a dual subjective/objective test).",
      relatedConcepts: ["Conflict of interest s.175", "Declaration of interest s.177", "Duty of care s.174"],
    },
    [
      ["A director must avoid a situation in which personal interests conflict with the company's interests (s.175)", true, "Correct — the s.175 duty to avoid conflicts of interest."],
      ["A director must declare the nature and extent of any interest in a proposed transaction (s.177)", true, "Correct — the s.177 duty to declare interests."],
      ["The duty of care is judged on a purely subjective standard regardless of the director's experience", false, "Section 174 applies an objective minimum standard, raised by any greater actual knowledge/experience."],
      ["A director may freely retain a personal profit from his position without disclosure", false, "Retaining a secret profit from the position breaches the no-profit/no-conflict duties."],
    ],
  ),
  mc(
    {
      id: "lw-co-5",
      topicId: "t-law-co",
      type: "mcq",
      difficulty: "medium",
      scenario:
        "A private company limited by shares wishes to alter its articles of association.",
      stem: "What is required under the Companies Act 2006 to alter the articles?",
      explanation:
        "Under s.21 CA 2006, a company may amend its articles by special resolution (at least 75% of votes cast). Certain entrenched provisions may require more.",
      relatedConcepts: ["Special resolution", "Alteration of articles s.21", "Shares and voting"],
    },
    [
      ["A special resolution (at least 75% of the votes cast)", true, "Correct — s.21 CA 2006 requires a special resolution to alter the articles."],
      ["An ordinary resolution (a simple majority)", false, "An ordinary resolution is insufficient; alteration needs a special resolution."],
      ["A unanimous decision of all members in every case", false, "Unanimity is not generally required; 75% suffices (subject to entrenchment)."],
      ["A board resolution of the directors alone", false, "Directors alone cannot alter the articles; members must pass a special resolution."],
    ],
  ),
  mc(
    {
      id: "lw-co-6",
      topicId: "t-law-co",
      type: "mcq",
      difficulty: "easy",
      stem: "Which feature distinguishes a public limited company (plc) from a private limited company under the Companies Act 2006?",
      explanation:
        "A plc must have allotted share capital of at least the authorised minimum (£50,000, with at least one quarter paid up) and may offer its shares to the public; a private company may not offer shares to the public.",
      relatedConcepts: ["Public vs private company", "Authorised minimum capital", "Offer of shares to public"],
    },
    [
      ["A plc may offer its shares to the public and must meet the £50,000 minimum allotted capital", true, "Correct — only a plc may offer shares to the public and must meet the authorised minimum."],
      ["A private company must have at least £50,000 of allotted share capital", false, "The authorised minimum applies to plcs, not private companies."],
      ["A plc cannot have limited liability", false, "A plc is a limited company; its members' liability is limited."],
      ["A private company must always have at least two directors", false, "A private company needs only one director under CA 2006."],
    ],
  ),

  // ── Agency & employment status — t-law-agency ────────────────────────────
  mc(
    {
      id: "lw-agency-1",
      topicId: "t-law-agency",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A director, with no actual authority to do so, enters a contract on the company's behalf with a third party. The company had previously allowed that director to make similar contracts, and the third party reasonably believed he was authorised.",
      stem: "What is the company's most likely position regarding the contract?",
      explanation:
        "Where a principal represents (including by past conduct) that an agent has authority, the principal may be bound by apparent (ostensible) authority even without actual authority, provided the third party relied on that representation (Freeman & Lockyer v Buckhurst Park Properties).",
      relatedConcepts: ["Apparent (ostensible) authority", "Freeman & Lockyer", "Agency"],
    },
    [
      ["The company is bound, because the director had apparent (ostensible) authority", true, "Correct — past conduct created a representation of authority on which the third party relied."],
      ["The company is not bound under any circumstances without actual authority", false, "Apparent authority can bind a principal even absent actual authority."],
      ["The contract is automatically void", false, "It is not void; the company may be bound via apparent authority (or by ratification)."],
      ["The third party can only sue the director, never the company", false, "The company may be bound where apparent authority is established."],
    ],
  ),
  mc(
    {
      id: "lw-agency-2",
      topicId: "t-law-agency",
      type: "mcq",
      difficulty: "medium",
      stem: "An agent acts beyond their authority, but the principal, with full knowledge, later approves the transaction. What is this called and what is its effect?",
      explanation:
        "Ratification is the principal's subsequent adoption of an unauthorised act. Once ratified (with full knowledge and the principal having existed and been competent at the time of the act), the contract is treated as authorised from the outset.",
      relatedConcepts: ["Ratification", "Authority of agents"],
    },
    [
      ["Ratification — the act is treated as authorised from the outset", true, "Correct — valid ratification has retrospective effect."],
      ["Estoppel — the principal is barred from denying the contract going forward only", false, "This is ratification, which operates retrospectively, not merely prospective estoppel."],
      ["Novation — a wholly new contract replaces the old", false, "No new contract is substituted; the original act is adopted by ratification."],
      ["Rescission — the contract is unwound", false, "The principal is approving, not unwinding, the transaction."],
    ],
  ),
  mc(
    {
      id: "lw-agency-3",
      topicId: "t-law-agency",
      type: "mcq",
      difficulty: "medium",
      stem: "Which factor most strongly indicates that a worker is an employee (under a contract of service) rather than an independent contractor (contract for services)?",
      explanation:
        "Key tests include control over how the work is done, personal service (no unfettered right to substitute), and mutuality of obligation. A genuine, unlimited right to send a substitute points towards self-employment (Ready Mixed Concrete v MPNI).",
      relatedConcepts: ["Employment status", "Control test", "Mutuality of obligation"],
    },
    [
      ["The employer controls how, when and where the work is done, and the worker must perform it personally", true, "Correct — control plus personal service point towards employee status."],
      ["The worker may freely send any substitute to do the work", false, "An unfettered right of substitution indicates self-employment, not employee status."],
      ["The worker provides all their own major equipment and bears financial risk", false, "Providing own equipment and bearing risk points to independent contractor status."],
      ["The worker invoices the business and is registered for VAT", false, "Invoicing/VAT registration suggests self-employment, not employee status."],
    ],
  ),
  mc(
    {
      id: "lw-agency-4",
      topicId: "t-law-agency",
      type: "multi",
      difficulty: "hard",
      stem: "Which TWO of the following are duties owed by an agent to the principal?",
      explanation:
        "An agent owes fiduciary duties: to act in the principal's best interests, to avoid conflicts of interest, not to make a secret profit or take a bribe, and to account. The agent must also obey lawful instructions and exercise reasonable care and skill.",
      relatedConcepts: ["Agent's duties", "Fiduciary duty", "Secret profit"],
    },
    [
      ["A duty not to make a secret profit or take a bribe", true, "Correct — an agent must not secretly profit from the position."],
      ["A duty to obey the principal's lawful and reasonable instructions", true, "Correct — the agent must follow lawful instructions and act with reasonable care and skill."],
      ["A duty to indemnify the principal against all market losses", false, "An agent does not guarantee the principal against ordinary commercial losses."],
      ["A duty to delegate the task to a sub-agent wherever possible", false, "An agent generally must perform personally and not delegate without authority."],
    ],
  ),
  mc(
    {
      id: "lw-agency-5",
      topicId: "t-law-agency",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "An agent acting within their actual authority makes a contract with a third party, disclosing that they act for a named principal.",
      stem: "Who is generally party to, and liable on, the resulting contract?",
      explanation:
        "Where an agent acts within authority for a disclosed and named principal, the contract is between the principal and the third party; the agent generally drops out and is neither liable nor entitled on it.",
      relatedConcepts: ["Disclosed principal", "Agent's liability", "Privity"],
    },
    [
      ["The principal and the third party; the agent generally drops out", true, "Correct — for a disclosed, named principal the agent is generally not a party."],
      ["The agent and the third party only", false, "With a disclosed named principal, the contract is with the principal, not the agent."],
      ["The agent alone, with no liability for the principal", false, "The principal, not the agent, is the contracting party here."],
      ["No one, because an agent cannot create binding contracts", false, "An authorised agent can bind the principal to a valid contract."],
    ],
  ),
  mc(
    {
      id: "lw-agency-6",
      topicId: "t-law-agency",
      type: "mcq",
      difficulty: "easy",
      stem: "Actual authority that is not expressly stated, but is necessarily implied from the agent's position or the conduct of the parties, is known as:",
      explanation:
        "Actual authority may be express (expressly conferred) or implied (arising by implication from the agent's position, the parties' conduct, or business custom). This is distinct from apparent authority, which arises from the principal's representation to a third party.",
      relatedConcepts: ["Implied actual authority", "Express vs implied authority"],
    },
    [
      ["Implied actual authority", true, "Correct — authority implied from the agent's position or the parties' conduct."],
      ["Apparent authority", false, "Apparent authority arises from the principal's representation to the third party, not by implication of actual authority."],
      ["Express authority", false, "Express authority is specifically stated, not implied."],
      ["Usual authority of an undisclosed principal", false, "That is a distinct doctrine; the question concerns implied actual authority."],
    ],
  ),

  // ── Tort / negligence — t-law-tort ───────────────────────────────────────
  mc(
    {
      id: "lw-tort-1",
      topicId: "t-law-tort",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A consumer drank ginger beer from an opaque bottle bought by a friend, then discovered a decomposed snail inside and became ill. There was no contract between the consumer and the manufacturer.",
      stem: "On these facts (mirroring Donoghue v Stevenson), can the consumer sue the manufacturer?",
      explanation:
        "Donoghue v Stevenson established the modern law of negligence and the 'neighbour principle': a manufacturer owes a duty of care to the ultimate consumer despite the absence of any contract.",
      relatedConcepts: ["Duty of care", "Donoghue v Stevenson", "Neighbour principle"],
    },
    [
      ["Yes — the manufacturer owed the consumer a duty of care in negligence despite no contract", true, "Correct — the neighbour principle in Donoghue v Stevenson."],
      ["No — without a contract there can be no liability at all", false, "Negligence does not require a contract; a duty of care can arise independently."],
      ["No — only the friend who bought the drink could sue", false, "The consumer can sue in negligence even though the friend bought the drink."],
      ["Yes — but only for breach of contract", false, "There is no contract; the claim lies in the tort of negligence."],
    ],
  ),
  mc(
    {
      id: "lw-tort-2",
      topicId: "t-law-tort",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following lists the essential elements a claimant must establish in the tort of negligence?",
      explanation:
        "To succeed in negligence the claimant must prove: (1) the defendant owed a duty of care; (2) the defendant breached that duty (fell below the standard of the reasonable person); and (3) the breach caused (factually and legally) reasonably foreseeable loss that is not too remote.",
      relatedConcepts: ["Duty", "Breach", "Causation", "Remoteness"],
    },
    [
      ["A duty of care, breach of that duty, and resulting (foreseeable, non-remote) damage caused by the breach", true, "Correct — duty, breach and causation of non-remote loss."],
      ["A contract, consideration and an intention to create legal relations", false, "Those are contract elements; negligence is a tort."],
      ["Only that the claimant suffered some loss", false, "Loss alone is insufficient; duty, breach and causation must also be shown."],
      ["Bad faith and a deliberate intention to harm", false, "Negligence does not require intention to harm; it concerns failure to take reasonable care."],
    ],
  ),
  mc(
    {
      id: "lw-tort-3",
      topicId: "t-law-tort",
      type: "mcq",
      difficulty: "hard",
      stem: "Which test is generally used to establish factual causation in negligence?",
      explanation:
        "Factual causation is generally established by the 'but for' test (Barnett v Chelsea & Kensington Hospital): but for the defendant's breach, would the claimant have suffered the loss? If the loss would have occurred anyway, causation fails.",
      relatedConcepts: ["Factual causation", "'But for' test", "Barnett v Chelsea & Kensington"],
    },
    [
      ["The 'but for' test — would the loss have occurred but for the breach?", true, "Correct — the standard test for factual causation (Barnett)."],
      ["The reasonable person test", false, "That concerns the standard of care (breach), not factual causation."],
      ["The neighbour principle", false, "The neighbour principle concerns duty of care, not causation."],
      ["The contra proferentem rule", false, "That is a rule of contractual interpretation, not causation in tort."],
    ],
  ),
  mc(
    {
      id: "lw-tort-4",
      topicId: "t-law-tort",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Accountants negligently prepared a company's audited accounts. A third party, who the accountants did not know would see the accounts, relied on them when deciding to invest and suffered loss.",
      stem: "Applying the principles in Caparo v Dickman, is the accountants' duty of care to that third party most likely established?",
      explanation:
        "Caparo v Dickman set out that for a duty of care for negligent misstatement causing pure economic loss there must be foreseeability, proximity and that it is fair, just and reasonable. Auditors generally owe no duty to the world at large; proximity (a special relationship / known reliance for a known purpose) is needed.",
      relatedConcepts: ["Pure economic loss", "Negligent misstatement", "Caparo v Dickman", "Proximity"],
    },
    [
      ["No — there is insufficient proximity, as the accountants did not know the third party would rely on the accounts for that purpose", true, "Correct — Caparo requires proximity/known reliance for a known purpose; absent it, no duty arises."],
      ["Yes — accountants owe a duty to anyone in the world who relies on their accounts", false, "Caparo rejects an unlimited duty to the world; proximity is required."],
      ["Yes — pure economic loss is always recoverable in negligence", false, "Pure economic loss from a misstatement requires the Caparo/Hedley Byrne special relationship."],
      ["No — accountants can never be liable in negligence", false, "They can be liable where the Caparo elements (including proximity) are satisfied."],
    ],
  ),
  mc(
    {
      id: "lw-tort-5",
      topicId: "t-law-tort",
      type: "mcq",
      difficulty: "medium",
      stem: "A claimant's own carelessness contributed to the injury they suffered through the defendant's negligence. What is the likely effect under the Law Reform (Contributory Negligence) Act 1945?",
      explanation:
        "Where the claimant's own fault contributes to the damage, contributory negligence reduces the damages by the extent the court thinks just and equitable, reflecting the claimant's share of responsibility. It is a partial, not complete, defence.",
      relatedConcepts: ["Contributory negligence", "Apportionment of damages", "Defences in negligence"],
    },
    [
      ["The claimant's damages are reduced to the extent that is just and equitable", true, "Correct — contributory negligence is a partial defence reducing damages."],
      ["The claim is automatically defeated in full", false, "Contributory negligence reduces, but does not necessarily extinguish, damages."],
      ["The defendant's liability is unaffected", false, "Damages are reduced to reflect the claimant's share of responsibility."],
      ["The claimant must instead sue in contract", false, "Contributory negligence operates within the negligence claim; it does not redirect it to contract."],
    ],
  ),
  mc(
    {
      id: "lw-tort-6",
      topicId: "t-law-tort",
      type: "mcq",
      difficulty: "medium",
      stem: "What standard of care does the law generally expect of a person carrying out a skilled professional activity?",
      explanation:
        "A professional is judged by the standard of the ordinary competent member of that profession (the Bolam test): the standard of a reasonably competent professional exercising and professing to have that special skill, not the highest expert in the field.",
      relatedConcepts: ["Standard of care", "Bolam test", "Professional negligence"],
    },
    [
      ["The standard of a reasonably competent member of that profession", true, "Correct — the Bolam standard for professionals."],
      ["The standard of the most eminent expert in the field", false, "The law expects reasonable competence, not the highest possible expertise."],
      ["The standard of an ordinary layperson", false, "A professional is held to a professional, not a layperson, standard."],
      ["No particular standard, provided they act in good faith", false, "Good faith is not enough; the professional must meet the competence standard."],
    ],
  ),

  // ── Insolvency & directors' liability — t-law-ins ────────────────────────
  mc(
    {
      id: "lw-ins-1",
      topicId: "t-law-ins",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A director realised the company had no reasonable prospect of avoiding insolvent liquidation but continued trading, increasing the deficit to creditors. The company later went into insolvent liquidation.",
      stem: "Under the Insolvency Act 1986, what is the director most likely liable for?",
      explanation:
        "Wrongful trading (s.214 IA 1986) arises where a director continued trading after the point at which they knew or ought to have concluded there was no reasonable prospect of avoiding insolvent liquidation and failed to take every step to minimise loss to creditors. The court may order a contribution to the company's assets.",
      relatedConcepts: ["Wrongful trading s.214", "Insolvency Act 1986", "Contribution to assets"],
    },
    [
      ["Wrongful trading — the court may order a contribution to the company's assets", true, "Correct — s.214 IA 1986 applies where there was no reasonable prospect of avoiding insolvent liquidation."],
      ["Fraudulent trading, which requires no dishonesty", false, "Fraudulent trading (s.213) requires actual dishonesty/intent to defraud; these facts point to wrongful trading."],
      ["Nothing, because directors are never liable for company debts", false, "Wrongful trading is a key exception to limited liability."],
      ["Breach of contract with creditors", false, "The liability arises under statute (s.214), not in contract with creditors."],
    ],
  ),
  mc(
    {
      id: "lw-ins-2",
      topicId: "t-law-ins",
      type: "mcq",
      difficulty: "hard",
      stem: "How does fraudulent trading under s.213 Insolvency Act 1986 differ from wrongful trading under s.214?",
      explanation:
        "Fraudulent trading (s.213) requires that the business was carried on with intent to defraud creditors or for a fraudulent purpose — actual dishonesty must be shown. Wrongful trading (s.214) requires no dishonesty; it is judged objectively on whether the director should have realised insolvent liquidation was unavoidable.",
      relatedConcepts: ["Fraudulent trading s.213", "Wrongful trading s.214", "Dishonesty"],
    },
    [
      ["Fraudulent trading requires actual intent to defraud (dishonesty); wrongful trading does not", true, "Correct — dishonesty is the key distinguishing feature of s.213."],
      ["Wrongful trading requires dishonesty, but fraudulent trading does not", false, "It is the reverse: fraudulent trading needs dishonesty; wrongful trading is judged objectively."],
      ["Both require proof of dishonest intent to defraud", false, "Wrongful trading (s.214) does not require dishonesty."],
      ["Neither can result in personal liability for directors", false, "Both can lead to a court order that a director contribute to the company's assets."],
    ],
  ),
  mc(
    {
      id: "lw-ins-3",
      topicId: "t-law-ins",
      type: "mcq",
      difficulty: "medium",
      stem: "In a compulsory winding up by the court, on what ground is a company most commonly wound up?",
      explanation:
        "The most common ground for compulsory winding up (s.122 IA 1986) is that the company is unable to pay its debts, typically evidenced by failure to satisfy a statutory demand or an unsatisfied judgment. The court may also wind up on the 'just and equitable' ground.",
      relatedConcepts: ["Compulsory liquidation", "Inability to pay debts", "Statutory demand"],
    },
    [
      ["That the company is unable to pay its debts", true, "Correct — the most common ground under s.122 IA 1986."],
      ["That the directors disagree on strategy", false, "Mere disagreement is not a ground for compulsory winding up."],
      ["That the company has made a small loss in one year", false, "A single loss does not establish inability to pay debts."],
      ["That a shareholder simply wishes to sell their shares", false, "A wish to sell shares is not a ground for the court to wind up the company."],
    ],
  ),
  mc(
    {
      id: "lw-ins-4",
      topicId: "t-law-ins",
      type: "mcq",
      difficulty: "medium",
      stem: "On a liquidation, in what general order are the company's funds distributed?",
      explanation:
        "The statutory order is broadly: fixed-charge creditors (from their security), then liquidation expenses, preferential creditors, the prescribed part for unsecured creditors, floating-charge creditors, then unsecured creditors, and finally members. Secured (fixed charge) holders rank ahead of unsecured creditors.",
      relatedConcepts: ["Order of priority", "Secured vs unsecured creditors", "Preferential creditors"],
    },
    [
      ["Fixed-charge holders and expenses first, then preferential and floating-charge creditors, then unsecured creditors, with members last", true, "Correct — broadly the statutory order of priority on liquidation."],
      ["Members (shareholders) are paid before any creditors", false, "Members rank last, after creditors have been paid."],
      ["Unsecured creditors rank ahead of secured creditors", false, "Secured creditors generally rank ahead of unsecured creditors."],
      ["All creditors are always paid in full regardless of the order", false, "In an insolvent liquidation there are insufficient funds; priority order determines who is paid."],
    ],
  ),
  mc(
    {
      id: "lw-ins-5",
      topicId: "t-law-ins",
      type: "multi",
      difficulty: "hard",
      stem: "Which TWO of the following are potential consequences for a director arising from a company's insolvency?",
      explanation:
        "A director may be ordered to contribute to the company's assets for wrongful or fraudulent trading (IA 1986). A director may also be disqualified under the Company Directors Disqualification Act 1986 (e.g. for unfit conduct), for between 2 and 15 years.",
      relatedConcepts: ["Director contribution", "Disqualification", "CDDA 1986"],
    },
    [
      ["A court order to contribute to the company's assets for wrongful trading", true, "Correct — under s.214 IA 1986 the court may order a contribution."],
      ["Disqualification from acting as a director under the CDDA 1986", true, "Correct — unfit conduct can lead to disqualification of 2–15 years."],
      ["Automatic criminal liability for every debt the company owes", false, "Directors are not automatically criminally liable for company debts."],
      ["Personal liability for all company debts simply because the company is insolvent", false, "Insolvency alone does not strip limited liability; specific statutory grounds must be met."],
    ],
  ),
  mc(
    {
      id: "lw-ins-6",
      topicId: "t-law-ins",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Shortly before going into insolvent liquidation, a company repaid a loan in full to one ordinary unsecured creditor (who happened to be a friend of a director), leaving other unsecured creditors with little. The repayment put that creditor in a better position than they would have been in the liquidation.",
      stem: "Under the Insolvency Act 1986, how might a liquidator challenge this repayment?",
      explanation:
        "A liquidator may apply to set aside a preference (s.239 IA 1986): a transaction that puts a creditor in a better position on insolvent liquidation than they would otherwise have been, where the company was influenced by a desire to prefer (presumed for connected persons). The relevant time is up to 6 months before insolvency (2 years for connected persons).",
      relatedConcepts: ["Preferences s.239", "Antecedent transactions", "Connected persons"],
    },
    [
      ["As a voidable preference under s.239 IA 1986", true, "Correct — the repayment may be set aside as a preference where the company desired to prefer that creditor."],
      ["It cannot be challenged once the money has been paid", false, "A liquidator can apply to set aside preferences made within the statutory period."],
      ["As wrongful trading by the creditor", false, "Wrongful trading applies to directors, not to a creditor receiving payment."],
      ["Only the creditor, not the liquidator, can take action", false, "It is the liquidator who applies to the court to set aside the preference."],
    ],
  ),
];

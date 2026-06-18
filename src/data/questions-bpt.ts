// BPT (Business Planning: Taxation) — Professional Level question bank.
// Scenario-led tax-planning items: recommend the tax-efficient AND ethical
// course; computations support recommendations. Original questions (not copied
// from ICAEW past papers). Tax basis: Finance Act 2024 (2024/25), per ACA 2026
// sittings. CGT main rate is stated in the stem where needed; BADR is 10%
// (lifetime limit £1,000,000); CT 25% main / 19% small profits / 3/200 marginal.
import type { Question } from "@/types/domain";
import { mc, calc } from "@/data/question-helpers";

export const bptQuestions: Question[] = [
  // ════════════════════════════════════════════════════════════════════════
  // Tax planning vs avoidance vs evasion, structuring — t-bpt-plan
  // ════════════════════════════════════════════════════════════════════════
  mc(
    {
      id: "bp-plan-1",
      topicId: "t-bpt-plan",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Harlow Ltd's finance director proposes paying the owner-managers via dividends rather than bonuses, claiming the National Insurance saving as the reason. The arrangements are fully disclosed on the returns and use reliefs in the way Parliament intended.",
      stem: "How should this arrangement most accurately be characterised?",
      explanation:
        "Legitimate tax planning uses statutory reliefs and choices in the way Parliament intended, with full disclosure. Choosing dividends over bonuses to reduce NIC — within the normal operation of the rules — is acceptable planning, not avoidance (artificial steps with no commercial purpose) or evasion (concealment/dishonesty).",
      relatedConcepts: ["Tax planning", "Tax avoidance", "Profit extraction"],
    },
    [
      ["Acceptable tax planning — using statutory choices as intended, fully disclosed", true, "Correct — disclosed use of the rules as intended is legitimate planning."],
      ["Tax evasion, because it deprives HMRC of NIC", false, "Evasion requires dishonesty/concealment; here everything is disclosed and lawful."],
      ["Abusive tax avoidance caught by the GAAR", false, "There is no artificial or contrived step lacking commercial substance."],
      ["A notifiable scheme under DOTAS", false, "An ordinary remuneration choice is not a disclosable avoidance scheme."],
    ],
  ),
  mc(
    {
      id: "bp-plan-2",
      topicId: "t-bpt-plan",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A client implements a series of pre-planned, self-cancelling steps that produce a large allowable loss with no real economic outcome other than the tax saving. The steps have no commercial purpose.",
      stem: "Which statement best describes the exposure of this arrangement?",
      explanation:
        "Contrived, self-cancelling steps with no commercial purpose, designed only to secure a tax advantage, are the hallmark of abusive avoidance. The General Anti-Abuse Rule (GAAR) can counteract arrangements that cannot reasonably be regarded as a reasonable course of action (the 'double reasonableness' test). It is not evasion (no dishonest concealment) but it is highly likely to be challenged.",
      relatedConcepts: ["GAAR", "Double reasonableness test", "Abusive avoidance"],
    },
    [
      ["It is abusive avoidance and may be counteracted under the GAAR", true, "Correct — contrived, purpose-built steps fail the double-reasonableness test."],
      ["It is legitimate planning because each step is technically legal", false, "Technical legality does not save artificial, abusive arrangements from the GAAR."],
      ["It is tax evasion and a criminal offence", false, "Without dishonest concealment this is avoidance, not evasion."],
      ["It is outside HMRC's reach once the loss is claimed", false, "HMRC can open an enquiry and apply the GAAR / Ramsay principle."],
    ],
  ),
  mc(
    {
      id: "bp-plan-3",
      topicId: "t-bpt-plan",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Marula Ltd, a £10m-turnover trading company, wants to extract a property used in the trade so it can be held outside the company before a future share sale. The board asks you to structure the transaction tax-efficiently.",
      stem: "Which principle should most guide the structuring advice?",
      explanation:
        "Sound structuring is built around genuine commercial purpose; tax efficiency follows the commercial objective rather than driving artificial steps. Stripping a trading asset purely to reduce tax can prejudice trading status (and reliefs such as BADR or the substantial shareholding exemption) and may attract anti-avoidance scrutiny. Advise on the commercial aim first, then the most efficient lawful route.",
      relatedConcepts: ["Commercial purpose", "Structuring", "Substance over form"],
    },
    [
      ["Structure around the genuine commercial purpose; let tax efficiency follow", true, "Correct — commercial substance protects reliefs and resists anti-avoidance challenge."],
      ["Choose whichever route gives the lowest tax, regardless of commercial logic", false, "Tax-driven artificial steps risk GAAR/relief denial and breach professional standards."],
      ["Always retain assets in the company because companies pay lower tax", false, "This ignores the commercial objective and the impact on shareholder reliefs."],
      ["Avoid documenting the commercial rationale to keep options open", false, "Failing to document genuine purpose weakens the position on enquiry."],
    ],
  ),
  mc(
    {
      id: "bp-plan-4",
      topicId: "t-bpt-plan",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following is the clearest example of tax EVASION rather than avoidance or planning?",
      explanation:
        "Evasion involves dishonesty — deliberately understating income, concealing assets or falsifying records. Omitting cash takings from a return is evasion (a criminal offence). The other options describe lawful planning choices or, at worst, avoidance.",
      relatedConcepts: ["Tax evasion", "Dishonesty", "Criminal offence"],
    },
    [
      ["Deliberately omitting cash sales from the company's tax return", true, "Correct — concealing income is dishonest and constitutes evasion."],
      ["Paying into a registered pension scheme to obtain tax relief", false, "This is intended relief — legitimate planning."],
      ["Timing an asset disposal to fall in a later tax year", false, "Using statutory timing is acceptable planning."],
      ["Electing for the most beneficial of two available reliefs", false, "Choosing between statutory reliefs is legitimate planning."],
    ],
  ),
  mc(
    {
      id: "bp-plan-5",
      topicId: "t-bpt-plan",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A promoter markets an arrangement with standardised documentation that is expected to generate a tax advantage and contains features such as confidentiality and a premium fee linked to the tax saved.",
      stem: "What obligation is most likely to arise under the anti-avoidance regime?",
      explanation:
        "Arrangements bearing 'hallmarks' (e.g. confidentiality, premium fee, standardised tax products) may be notifiable under DOTAS. The promoter (and sometimes the user) must notify HMRC, who issue a scheme reference number that the user must report. DOTAS is about disclosure — it does not itself make the scheme effective or legal.",
      relatedConcepts: ["DOTAS", "Hallmarks", "Scheme reference number"],
    },
    [
      ["The scheme may be notifiable to HMRC under DOTAS, generating a reference number", true, "Correct — premium-fee/confidentiality hallmarks point to DOTAS notification."],
      ["The arrangement is automatically valid once marketed", false, "DOTAS disclosure does not validate a scheme; HMRC may still challenge it."],
      ["No reporting is needed if each user signs the confidentiality clause", false, "Confidentiality is itself a hallmark that triggers notification."],
      ["Only the user, never the promoter, must report it", false, "The promoter generally has the primary duty to notify."],
    ],
  ),

  // ════════════════════════════════════════════════════════════════════════
  // Incorporation & profit extraction (salary vs dividend) — t-bpt-inc
  // ════════════════════════════════════════════════════════════════════════
  calc({
    id: "bp-inc-1",
    topicId: "t-bpt-inc",
    difficulty: "hard",
    scenario:
      "Priya owns 100% of Vantage Ltd. The company has £100,000 of pre-remuneration, pre-tax profit available. She is already a higher-rate taxpayer (so further income is taxed at 40% / dividends at 33.75%) and has used her personal allowance and dividend allowance elsewhere. Compare extracting the £100,000 as a gross bonus versus as a dividend. Ignore employer NIC and the employment allowance for this part. Corporation tax is 25%.",
    stem: "If the full £100,000 is paid as a gross bonus (deductible for the company, so no corporation tax on it), what is Priya's NET cash after income tax at 40% and employee NIC at 2%? Give the answer to the nearest £.",
    explanation:
      "A bonus is deductible for corporation tax, so the whole £100,000 reaches Priya as employment income. As an additional-rate slice for an existing higher-rate taxpayer, it suffers 40% income tax and 2% employee Class 1 NIC (above the upper earnings threshold).",
    workedSolution:
      "Bonus = £100,000 (CT-deductible, so no CT cost on this slice)\nIncome tax @ 40% = £40,000\nEmployee NIC @ 2% = £2,000\nNet cash = 100,000 − 40,000 − 2,000 = £58,000",
    relatedConcepts: ["Profit extraction", "Salary vs dividend", "Employee NIC"],
    numericAnswer: 58000,
    numericTolerance: 50,
    unit: "£",
  }),
  calc({
    id: "bp-inc-2",
    topicId: "t-bpt-inc",
    difficulty: "hard",
    scenario:
      "Continuing Vantage Ltd: the £100,000 pre-tax profit is instead retained, taxed in the company, and the post-tax amount paid to Priya as a dividend. Corporation tax is 25%. Priya pays dividend tax at the upper rate of 33.75% (allowances already used).",
    stem: "What is Priya's NET cash from the dividend route, to the nearest £?",
    explanation:
      "Dividends are NOT deductible, so corporation tax at 25% is paid first. The post-tax profit is distributed and taxed in Priya's hands at the 33.75% upper dividend rate.",
    workedSolution:
      "CT @ 25% on £100,000 = £25,000 → distributable = £75,000\nDividend tax @ 33.75% × 75,000 = £25,313\nNet cash = 75,000 − 25,313 = £49,688 (≈ £49,687)",
    relatedConcepts: ["Dividend route", "Corporation tax", "Upper dividend rate"],
    numericAnswer: 49688,
    numericTolerance: 50,
    unit: "£",
  }),
  mc(
    {
      id: "bp-inc-3",
      topicId: "t-bpt-inc",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "From the Vantage Ltd comparison, the bonus route yields ~£58,000 net and the dividend route ~£49,688 net for an additional-rate slice, ignoring employer NIC.",
      stem: "Which is the more relevant additional cost that can reverse this comparison in favour of dividends?",
      explanation:
        "The bonus comparison above ignored employer (secondary) Class 1 NIC at 13.8%, which is itself deductible but adds materially to the cost of remuneration. Once employer NIC is included, the salary/bonus route becomes more expensive and dividends often become competitive or superior. Dividends bear no NIC at all.",
      relatedConcepts: ["Employer NIC", "Secondary Class 1", "Total cost of extraction"],
    },
    [
      ["Employer (secondary) Class 1 NIC at 13.8% on the bonus", true, "Correct — employer NIC adds to the salary cost; dividends bear no NIC."],
      ["Employer NIC at 13.8% on the dividend", false, "Dividends are not earnings and bear no employer NIC."],
      ["Class 4 NIC on the dividend", false, "Class 4 applies to the self-employed, not to dividends."],
      ["VAT on the remuneration", false, "Remuneration is outside the scope of VAT."],
    ],
  ),
  mc(
    {
      id: "bp-inc-4",
      topicId: "t-bpt-inc",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Tom runs an unincorporated trade with steady profits of about £180,000 a year. He spends most of the profit on living costs but wants to start retaining surplus to invest. He asks whether incorporating would be tax-efficient.",
      stem: "Which factor most strongly supports incorporation in Tom's circumstances?",
      explanation:
        "A key advantage of incorporation is that retained profits are taxed only at corporation tax rates (up to 25%) rather than at the owner's marginal income tax rate (up to 45% plus NIC) — beneficial where profits are retained rather than fully extracted. As a sole trader, all profit is taxed personally whether withdrawn or not. The ability to retain and reinvest profit at the lower CT rate is the strongest pro-incorporation factor here.",
      relatedConcepts: ["Incorporation", "Profit retention", "Tax deferral"],
    },
    [
      ["He can retain profit in the company taxed at corporation tax rates rather than up to 45% personally", true, "Correct — retention at CT rates defers/saves tax versus full personal taxation."],
      ["Sole traders cannot claim capital allowances", false, "Unincorporated traders also claim capital allowances and the AIA."],
      ["Companies are exempt from tax on trading profits", false, "Companies pay corporation tax on trading profits."],
      ["Incorporation removes all NIC on extracted profit", false, "Salary still bears NIC; only the dividend element avoids NIC."],
    ],
  ),
  mc(
    {
      id: "bp-inc-5",
      topicId: "t-bpt-inc",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A director-shareholder of a small company has used her personal allowance against other income. She asks how to extract a modest amount most tax-efficiently in 2024/25, given the £5,000 employment allowance is unavailable (she is the sole employee/director).",
      stem: "Which extraction strategy is generally most tax-efficient for a small owner-managed company in 2024/25?",
      explanation:
        "The classic small-company strategy is a salary up to the secondary threshold area to preserve a qualifying year for state benefits while limiting employer NIC, then dividends to use the £500 dividend allowance and the basic-rate band at 8.75%. Dividends bear no NIC, so beyond a baseline salary, dividends are usually more efficient than additional salary.",
      relatedConcepts: ["Profit extraction", "Dividend allowance", "Optimal salary"],
    },
    [
      ["A modest salary plus dividends, using the £500 dividend allowance and lower dividend rates", true, "Correct — modest salary then dividends typically minimises the combined tax/NIC cost."],
      ["A large salary only, to maximise pension-relevant earnings", false, "A large salary attracts income tax and employer/employee NIC unnecessarily."],
      ["A loan from the company that is never repaid", false, "An unrepaid loan triggers a s455 charge and a benefit-in-kind/income tax exposure."],
      ["Dividends only, taking no salary at all", false, "A small salary can preserve a qualifying NIC year cheaply and may be CT-deductible."],
    ],
  ),

  // ════════════════════════════════════════════════════════════════════════
  // Group relief, gains groups, consortium, loss planning — t-bpt-grp
  // ════════════════════════════════════════════════════════════════════════
  calc({
    id: "bp-grp-1",
    topicId: "t-bpt-grp",
    difficulty: "hard",
    scenario:
      "In a 75% group, Parent Ltd has a taxable total profit of £600,000 and its subsidiary Sub Ltd has a trading loss of £200,000 in the same period. Both are stand-alone large companies paying corporation tax at the 25% main rate. Sub surrenders its loss to Parent via group relief.",
    stem: "What corporation tax is SAVED by the group-relief surrender, to the nearest £?",
    explanation:
      "Group relief lets a current-year trading loss be surrendered to a profitable 75% group member, reducing its taxable profit. The tax saved equals the loss surrendered multiplied by the recipient's effective tax rate (here the 25% main rate).",
    workedSolution:
      "Loss surrendered = £200,000\nParent's profit reduced from 600,000 to 400,000\nTax saved = 200,000 × 25% = £50,000",
    relatedConcepts: ["Group relief", "75% group", "Loss planning"],
    numericAnswer: 50000,
    numericTolerance: 10,
    unit: "£",
  }),
  mc(
    {
      id: "bp-grp-2",
      topicId: "t-bpt-grp",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A group has two profitable companies: Alpha Ltd (taxable profit £40,000, so in the small-profits range) and Beta Ltd (taxable profit £700,000, well into the main-rate range). Cara Ltd, also in the group, has a £100,000 trading loss to surrender. The augmented-profits limits are shared among the group companies.",
      stem: "To maximise the value of the loss, to which company should the loss be surrendered, and why?",
      explanation:
        "Loss-relief planning directs losses where they save tax at the highest rate. Beta is taxed at the 25% main rate, while Alpha pays 19%. Surrendering the loss to Beta saves 25%, not 19%. (Care is also needed because surrenders affect the marginal-relief calculation for companies in the marginal band — direct losses to main-rate profits first.)",
      relatedConcepts: ["Loss planning", "Marginal relief", "Group companies"],
    },
    [
      ["Surrender to Beta Ltd, because the loss saves tax at 25% rather than 19%", true, "Correct — relieving main-rate profit maximises the tax saved per £ of loss."],
      ["Surrender to Alpha Ltd, because smaller companies need the relief more", false, "Alpha's profit is taxed at only 19%, so the loss is worth less there."],
      ["Split it equally to be fair between the companies", false, "Fairness is irrelevant; direct losses to the highest tax rate."],
      ["Carry it back in Cara instead, as group relief is never beneficial", false, "Group relief against 25% profit is more valuable than relief at lower rates."],
    ],
  ),
  mc(
    {
      id: "bp-grp-3",
      topicId: "t-bpt-grp",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Within a capital gains group, Holdco Ltd is about to sell an investment property at a large gain. Another group company, Trad Ltd, holds a different asset standing at a substantial capital loss.",
      stem: "Which planning step lets the group use Trad's capital loss against Holdco's gain WITHOUT physically transferring assets between them?",
      explanation:
        "In a gains group (broadly a 75% group), companies can make a joint s171A election to reallocate a chargeable gain or loss between group members as if the asset had been transferred. This nets the gain and loss in one company without any actual asset transfer. (Assets can also be transferred at no gain/no loss under s171, but the election is simpler.)",
      relatedConcepts: ["Gains group", "s171A election", "Capital loss matching"],
    },
    [
      ["Make a joint election (s171A) to treat the gain/loss as accruing in one company", true, "Correct — a s171A election reallocates the gain or loss without an actual transfer."],
      ["Pay a dividend equal to the gain to wash it out", false, "Dividends do not offset chargeable gains."],
      ["Claim group relief for the capital loss", false, "Group relief covers income losses, not capital losses."],
      ["Surrender the gain to HMRC as a special distribution", false, "No such mechanism exists."],
    ],
  ),
  mc(
    {
      id: "bp-grp-4",
      topicId: "t-bpt-grp",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Investor Ltd owns 30% of the ordinary share capital of Venture Ltd; three other corporate investors own the rest, and together the corporate members own 100%. Venture makes a trading loss.",
      stem: "What relief allows Investor Ltd to use part of Venture's loss, and how much can it claim?",
      explanation:
        "Where a company is owned by a consortium (broadly, 75%+ held by companies each holding at least 5%), consortium relief allows a member to claim a share of the consortium company's losses in proportion to its interest. Investor's 30% interest entitles it to claim up to 30% of Venture's available loss (subject to the usual restrictions).",
      relatedConcepts: ["Consortium relief", "Loss surrender", "Ownership proportion"],
    },
    [
      ["Consortium relief — Investor can claim up to 30% of Venture's loss", true, "Correct — a consortium member claims losses in proportion to its interest (30%)."],
      ["Group relief — Investor can claim 100% of the loss", false, "30% ownership is below the 75% group-relief threshold; only consortium relief applies."],
      ["No relief — losses can never pass to a 30% shareholder", false, "Consortium relief specifically covers this 5%–under-75% situation."],
      ["Investor can claim 75% of the loss", false, "The claim is limited to the member's ownership interest, here 30%."],
    ],
  ),
  mc(
    {
      id: "bp-grp-5",
      topicId: "t-bpt-grp",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A group is planning to sell a subsidiary that, six months ago, received an asset by intra-group no-gain/no-loss transfer (s171) from another group member. The asset stands at a large unrealised gain.",
      stem: "What tax consequence should the planning flag if the subsidiary leaves the group within six years of that transfer?",
      explanation:
        "A degrouping charge can arise: if a company leaves a gains group within six years while still owning an asset acquired intra-group at no gain/no loss, a chargeable gain is triggered as though the asset had been sold at market value at the date of the original transfer. On a share sale the degrouping gain is usually added to the disposal consideration of the shares (and may be covered by the substantial shareholding exemption).",
      relatedConcepts: ["Degrouping charge", "s171 transfer", "Substantial shareholding exemption"],
    },
    [
      ["A degrouping charge may crystallise the unrealised gain on the transferred asset", true, "Correct — leaving within six years of a no-gain/no-loss transfer triggers a degrouping charge."],
      ["Nothing — intra-group transfers are permanently tax-free", false, "The no-gain/no-loss treatment can be clawed back via the degrouping charge."],
      ["Group relief is automatically withdrawn for six prior years", false, "That is not how the degrouping rules operate."],
      ["The buyer inherits the seller's corporation tax liability personally", false, "There is no such personal inheritance of liability."],
    ],
  ),

  // ════════════════════════════════════════════════════════════════════════
  // Corporate & personal gains reliefs — t-bpt-cgt
  // ════════════════════════════════════════════════════════════════════════
  calc({
    id: "bp-cgt-1",
    topicId: "t-bpt-cgt",
    difficulty: "hard",
    scenario:
      "Gita sells the trading company she founded and wholly owns, realising a qualifying capital gain of £900,000. She has made no previous claims, so her full £1,000,000 Business Asset Disposal Relief lifetime limit is available. She has already used her annual exempt amount against other gains. Treat the £3,000 annual exempt amount as already used.",
    stem: "What is Gita's capital gains tax on the £900,000 gain, given Business Asset Disposal Relief applies at 10%? Give the answer to the nearest £.",
    explanation:
      "BADR taxes qualifying gains at a flat 10% up to the £1,000,000 lifetime limit. The £900,000 gain is fully within the limit, so it is all taxed at 10%.",
    workedSolution:
      "Qualifying gain = £900,000 (within £1,000,000 BADR lifetime limit)\nCGT = 900,000 × 10% = £90,000",
    relatedConcepts: ["BADR", "10% rate", "Lifetime limit"],
    numericAnswer: 90000,
    numericTolerance: 10,
    unit: "£",
  }),
  calc({
    id: "bp-cgt-2",
    topicId: "t-bpt-cgt",
    difficulty: "hard",
    scenario:
      "Forge Ltd sells a freehold factory used in its trade for £800,000, realising a chargeable gain of £300,000. Within the qualifying period it reinvests £750,000 of the proceeds in a new qualifying trading building. Rollover (replacement of business assets) relief is claimed.",
    stem: "Because not all the proceeds were reinvested, part of the gain remains chargeable now. How much of the £300,000 gain is chargeable immediately? Give the answer to the nearest £.",
    explanation:
      "Rollover relief defers the gain only to the extent proceeds are reinvested. Proceeds not reinvested (£800,000 − £750,000 = £50,000) are immediately chargeable, capped at the gain. The remainder of the gain is rolled into the base cost of the new asset.",
    workedSolution:
      "Proceeds not reinvested = 800,000 − 750,000 = £50,000\nChargeable now = lower of £50,000 and the £300,000 gain = £50,000\nGain rolled over = 300,000 − 50,000 = £250,000",
    relatedConcepts: ["Rollover relief", "Replacement of business assets", "Partial reinvestment"],
    numericAnswer: 50000,
    numericTolerance: 10,
    unit: "£",
  }),
  mc(
    {
      id: "bp-cgt-3",
      topicId: "t-bpt-cgt",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Dev wants to pass shares in his unquoted trading company to his daughter during his lifetime. The shares stand at a large gain. He would prefer not to trigger an immediate CGT charge on the gift.",
      stem: "Which relief can defer the gain on this lifetime gift, and what is its mechanism?",
      explanation:
        "Gift holdover relief (s165) applies to gifts of qualifying business assets, including unquoted trading company shares. A joint election holds the donor's gain over by reducing the donee's base cost, so no CGT is payable by the donor on the gift; the deferred gain is taxed on the donee's later disposal.",
      relatedConcepts: ["Gift holdover relief", "Base cost reduction", "Business assets"],
    },
    [
      ["Gift holdover relief — the gain is held over by reducing the donee's base cost", true, "Correct — s165 defers the donor's gain into the donee's base cost via a joint election."],
      ["Rollover relief — by reinvesting the sale proceeds", false, "There are no proceeds on a gift, and rollover needs reinvestment in business assets."],
      ["BADR — which exempts the gift entirely from CGT", false, "BADR reduces the rate to 10% but does not defer or exempt a gift."],
      ["Incorporation relief — which applies automatically", false, "Incorporation relief applies to transferring a business to a company, not a share gift."],
    ],
  ),
  calc({
    id: "bp-cgt-4",
    topicId: "t-bpt-cgt",
    difficulty: "hard",
    scenario:
      "Nadia transfers her unincorporated business (all assets, as a going concern) to a new company wholly in exchange for shares. The net chargeable gains on the business assets total £400,000. The shares received are worth £500,000. Incorporation relief (s162) applies automatically because all consideration is in shares.",
    stem: "Under incorporation relief, how much of the £400,000 gain is deferred (rolled into the base cost of the shares)? Give the answer to the nearest £.",
    explanation:
      "Incorporation relief defers the net gains in proportion to the consideration received as shares. Here all consideration is shares, so the full gain is deferred by reducing the base cost of the shares received: deferred = gain × (share consideration / total consideration) = £400,000 × 500,000/500,000.",
    workedSolution:
      "All consideration is in shares (£500,000 of £500,000)\nDeferred gain = 400,000 × 500,000/500,000 = £400,000\nBase cost of shares = 500,000 − 400,000 = £100,000",
    relatedConcepts: ["Incorporation relief", "s162", "Share consideration"],
    numericAnswer: 400000,
    numericTolerance: 10,
    unit: "£",
  }),
  mc(
    {
      id: "bp-cgt-5",
      topicId: "t-bpt-cgt",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "Trading group Pinnacle Ltd is selling a 100% subsidiary it has held for several years; the subsidiary is itself a trading company. A large gain would arise on the share disposal.",
      stem: "Which corporate relief is most likely to exempt the gain on this share disposal entirely?",
      explanation:
        "The substantial shareholding exemption (SSE) exempts gains on disposals of shares where the investing company has held at least 10% for a continuous 12 months in the previous six years and the company invested in is a trading company (or member of a trading group). With a 100% long-held trading subsidiary, SSE should exempt the gain.",
      relatedConcepts: ["Substantial shareholding exemption", "Trading company", "Share disposal"],
    },
    [
      ["The substantial shareholding exemption (SSE) — exempting the share gain", true, "Correct — a 10%+ holding in a trading company held 12 months qualifies for SSE."],
      ["BADR — companies claim it at 10% on share disposals", false, "BADR is for individuals, not companies."],
      ["Rollover relief on the shares automatically", false, "Shares are not qualifying business assets for rollover relief."],
      ["Group relief for the capital gain", false, "Group relief covers income losses, not chargeable gains."],
    ],
  ),

  // ════════════════════════════════════════════════════════════════════════
  // Overseas aspects — t-bpt-os
  // ════════════════════════════════════════════════════════════════════════
  mc(
    {
      id: "bp-os-1",
      topicId: "t-bpt-os",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "UK-resident Apex Ltd has a trading branch (permanent establishment) in Country X and also a separately incorporated subsidiary in Country Y. Apex wants to understand how each set of overseas profits is taxed in the UK by default.",
      stem: "Which statement correctly describes the default UK corporation tax treatment?",
      explanation:
        "A UK company is taxed on its worldwide profits, which includes the profits of an overseas branch/PE (with double tax relief for foreign tax), unless it elects for the branch exemption. By contrast, a separate overseas subsidiary is a distinct company; its profits are generally not taxed in the UK as they arise — only dividends remitted (often exempt) and any CFC apportionment bring them into the UK net.",
      relatedConcepts: ["Permanent establishment", "Overseas subsidiary", "Worldwide basis"],
    },
    [
      ["Branch profits are taxed in the UK as they arise (with DTR); the subsidiary's profits are not, until distributed", true, "Correct — a PE/branch is part of the UK company; a subsidiary is a separate entity."],
      ["Both the branch and the subsidiary's profits are always exempt in the UK", false, "Branch profits are taxable by default unless the branch exemption is elected."],
      ["Neither branch nor subsidiary profits ever enter the UK tax net", false, "Branch profits are within the UK charge; CFC rules can reach subsidiary profits."],
      ["The subsidiary's profits are taxed in the UK as they arise, but the branch's are not", false, "It is the other way round under the default rules."],
    ],
  ),
  calc({
    id: "bp-os-2",
    topicId: "t-bpt-os",
    difficulty: "hard",
    scenario:
      "UK-resident Meridian Ltd has overseas branch profits of £200,000 on which foreign tax of £36,000 has been paid. Meridian pays UK corporation tax at the 25% main rate. Double tax relief is given by the credit method (relief is the lower of the UK and foreign tax on the doubly taxed income).",
    stem: "What is the double tax relief available against Meridian's UK corporation tax on the branch profits? Give the answer to the nearest £.",
    explanation:
      "Credit-method DTR is the LOWER of the UK tax and the foreign tax on the same income. UK tax on £200,000 at 25% = £50,000; foreign tax = £36,000. The lower is £36,000, so DTR = £36,000 (the foreign tax is fully relieved, leaving £14,000 net UK tax).",
    workedSolution:
      "UK CT on branch profit = 200,000 × 25% = £50,000\nForeign tax paid = £36,000\nDTR = lower of 50,000 and 36,000 = £36,000",
    relatedConcepts: ["Double tax relief", "Credit method", "Lower of UK/foreign tax"],
    numericAnswer: 36000,
    numericTolerance: 10,
    unit: "£",
  }),
  mc(
    {
      id: "bp-os-3",
      topicId: "t-bpt-os",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A UK group sets up a subsidiary in a very low-tax territory. The subsidiary has few employees there and earns largely passive, mobile income that has been diverted from the UK. There is little genuine economic activity in the territory.",
      stem: "Which UK anti-avoidance regime is most likely to apply, and what is its effect?",
      explanation:
        "The Controlled Foreign Company (CFC) rules can apportion the profits of a low-taxed overseas subsidiary controlled by UK persons to UK corporate shareholders, charging UK corporation tax where profits have been artificially diverted and no exemption (e.g. low-profits, excluded territories, genuine economic activity) applies. Passive, mobile income with little local substance is exactly the target.",
      relatedConcepts: ["Controlled foreign company", "Profit apportionment", "Diverted profits"],
    },
    [
      ["The CFC rules — apportioning the subsidiary's chargeable profits to the UK and taxing them here", true, "Correct — CFC rules counter artificial diversion of profit to low-tax CFCs."],
      ["The branch exemption — making the profits UK-exempt", false, "The branch exemption concerns PEs, not low-taxed subsidiaries, and would not help here."],
      ["Group relief — surrendering the profits to the UK parent", false, "Group relief deals with losses, not apportioning foreign profits."],
      ["No UK regime can reach a separately incorporated foreign company", false, "The CFC rules specifically reach controlled low-taxed foreign subsidiaries."],
    ],
  ),
  mc(
    {
      id: "bp-os-4",
      topicId: "t-bpt-os",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Caldera Ltd is incorporated in Country Z but its board of directors meets and makes all strategic decisions in the UK. Day-to-day operations are split across several countries.",
      stem: "On what basis is Caldera most likely to be UK-resident for corporation tax?",
      explanation:
        "A company is UK-resident if it is incorporated in the UK OR its central management and control is exercised in the UK (the case-law test, broadly where the board's strategic decisions are taken). Caldera, though incorporated abroad, is centrally managed and controlled in the UK and so is likely UK-resident (subject to any tie-breaker in a double tax treaty).",
      relatedConcepts: ["Corporate residence", "Central management and control", "Treaty tie-breaker"],
    },
    [
      ["Central management and control is exercised in the UK", true, "Correct — board-level strategic control in the UK makes it UK-resident."],
      ["It has customers in the UK", false, "Having UK customers does not, by itself, confer residence."],
      ["It is incorporated in Country Z, so it can never be UK-resident", false, "Incorporation abroad does not prevent UK residence via central management and control."],
      ["Some of its operations are outside the UK", false, "Operational location does not determine residence; strategic control does."],
    ],
  ),
  mc(
    {
      id: "bp-os-5",
      topicId: "t-bpt-os",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A non-UK company sells goods to UK customers online with no fixed UK premises. It is considering opening a UK warehouse and sales office with staff who negotiate and conclude contracts on its behalf.",
      stem: "What is the key tax consequence of opening the staffed UK sales office?",
      explanation:
        "A permanent establishment arises where a company has a fixed place of business in the UK through which its business is carried on, or a dependent agent who habitually concludes contracts there. The staffed office concluding contracts would create a UK PE, bringing the profits attributable to that PE within the UK corporation tax charge — whereas mere online sales to UK customers generally do not.",
      relatedConcepts: ["Permanent establishment", "Dependent agent", "UK taxable presence"],
    },
    [
      ["It would likely create a UK permanent establishment, taxing the attributable profits in the UK", true, "Correct — a fixed place of business / dependent agent concluding contracts creates a PE."],
      ["Nothing changes — selling to UK customers always creates a PE anyway", false, "Online sales without a fixed presence generally do not create a PE."],
      ["It makes the whole company UK-resident automatically", false, "A PE is taxed on attributable profits; it does not change overall residence."],
      ["UK profits become exempt because the company is non-resident", false, "A non-resident is taxable on the profits of a UK PE."],
    ],
  ),

  // ════════════════════════════════════════════════════════════════════════
  // Ethics & professional standards in tax planning — t-bpt-eth
  // ════════════════════════════════════════════════════════════════════════
  mc(
    {
      id: "bp-eth-1",
      topicId: "t-bpt-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "While preparing a corporation tax computation, you discover the company omitted a large amount of taxable income from a prior return. You advise the directors to disclose the error to HMRC, but they refuse and instruct you to say nothing.",
      stem: "Under the ICAEW Code and Professional Conduct in Relation to Taxation (PCRT), what should you do?",
      explanation:
        "PCRT requires you to advise the client to disclose; if the client refuses to correct a material error/irregularity, you should cease to act, consider whether you must report under the money laundering rules (a suspicious activity report to your MLRO/the NCA), and not be associated with a return you know to be misleading. You must not disclose to HMRC without authority, but you cannot continue to act as if nothing is wrong.",
      relatedConcepts: ["PCRT", "Errors and disclosure", "Money laundering reporting"],
    },
    [
      ["Advise disclosure; if refused, cease to act and consider a money-laundering report", true, "Correct — PCRT requires disengagement and consideration of a SAR if the client won't correct it."],
      ["Continue acting and simply omit the income again to match prior years", false, "This associates you with a misleading return and may itself be an offence."],
      ["Immediately phone HMRC and disclose the error yourself", false, "You must not breach confidentiality by disclosing to HMRC without authority."],
      ["Do nothing, as prior-year errors are the client's sole responsibility", false, "You cannot ignore a known material error; PCRT requires action."],
    ],
  ),
  mc(
    {
      id: "bp-eth-2",
      topicId: "t-bpt-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A long-standing client asks your firm to recommend and implement an aggressive marketed scheme that relies on a strained, artificial reading of the legislation to generate a tax loss. The fee offered is very large and contingent on the tax saved.",
      stem: "Which PCRT 'Standards for Tax Planning' consideration is most directly engaged, and what is the appropriate response?",
      explanation:
        "PCRT's Standards for Tax Planning require that planning is based on a credible, sustainable interpretation of the law and is not contrary to the clear intention of Parliament; members must not create, encourage or promote arrangements that are highly artificial/contrived and seek to exploit shortcomings. An aggressive, artificial scheme breaches these standards and should be declined, regardless of the fee. A contingent fee linked to tax saved also raises a self-interest threat.",
      relatedConcepts: ["Standards for Tax Planning", "Contrived arrangements", "Contingent fees"],
    },
    [
      ["The planning is contrary to Parliament's clear intention and artificial — decline to act on it", true, "Correct — PCRT Standards for Tax Planning prohibit promoting such artificial schemes."],
      ["It is fine because the client requested it and the fee is commercial", false, "Client demand and a high fee do not override the PCRT standards."],
      ["A contingent fee on tax saved is best practice and should be encouraged", false, "Contingent fees on tax saved create a self-interest threat and are discouraged."],
      ["You may implement it provided you add a disclaimer", false, "A disclaimer does not cure a breach of professional standards."],
    ],
  ),
  mc(
    {
      id: "bp-eth-3",
      topicId: "t-bpt-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "Your firm acts for both the husband (selling his company) and his wife (a shareholder with different interests in the same transaction). Their interests on price allocation and reliefs may not align.",
      stem: "Which fundamental ethics threat is most directly raised, and how should the firm respond?",
      explanation:
        "Acting for two clients whose interests conflict in the same matter raises a conflict of interest, threatening objectivity. The firm must identify the conflict, and may continue only if it can manage it with appropriate safeguards — informed consent from both parties, separate teams/information barriers — otherwise it should decline to act for one or both.",
      relatedConcepts: ["Conflict of interest", "Objectivity", "Safeguards and consent"],
    },
    [
      ["A conflict of interest threatening objectivity — obtain informed consent and use safeguards, or decline", true, "Correct — manage the conflict with consent/safeguards, or decline to act."],
      ["A self-review threat — simply have a second partner sign off", false, "The issue is conflicting client interests, not reviewing one's own work."],
      ["No threat arises because they are married", false, "Marriage does not remove conflicting interests in the transaction."],
      ["Intimidation — report both clients to HMRC", false, "There is no intimidation, and reporting clients to HMRC is not the response."],
    ],
  ),
  mc(
    {
      id: "bp-eth-4",
      topicId: "t-bpt-eth",
      type: "scenario",
      difficulty: "hard",
      scenario:
        "A tax manager structures a client's affairs using a genuinely available statutory relief in the way Parliament intended, and gives the client a balanced explanation of the risks, including HMRC's possible view. The client makes an informed choice.",
      stem: "How does this conduct sit with PCRT and the fundamental principles?",
      explanation:
        "This is fully compliant: using a genuine statutory relief as intended is legitimate planning, and giving a balanced, objective explanation of risks upholds integrity, objectivity and professional competence/due care. PCRT does not prevent members from advising on lawful, intended reliefs — it draws the line at artificial, contrived arrangements contrary to Parliament's intention.",
      relatedConcepts: ["Fundamental principles", "Legitimate planning", "Professional competence"],
    },
    [
      ["It is compliant — legitimate planning with balanced advice upholds the fundamental principles", true, "Correct — using intended reliefs with objective risk advice is good practice."],
      ["It breaches PCRT because any tax saving is unethical", false, "Saving tax via intended reliefs is not unethical; only artificial schemes are barred."],
      ["It breaches confidentiality by explaining HMRC's view", false, "Explaining HMRC's likely view to the client is not a confidentiality breach."],
      ["It is evasion because tax is reduced", false, "Lawful use of reliefs with disclosure is the opposite of evasion."],
    ],
  ),
  mc(
    {
      id: "bp-eth-5",
      topicId: "t-bpt-eth",
      type: "scenario",
      difficulty: "medium",
      scenario:
        "A new tax-planning client wants advice on routing funds of uncertain origin through a complex offshore structure and is reluctant to verify their identity or explain the source of the funds.",
      stem: "What is the firm's most important obligation before proceeding?",
      explanation:
        "Anti-money-laundering rules require client due diligence (identity verification and understanding the source of funds) before acting. Reluctance to verify identity and explain fund origin is a red flag; the firm must complete CDD and, if suspicion arises, make a suspicious activity report to the MLRO/NCA — and must avoid 'tipping off'. Proceeding without CDD would breach the regulations.",
      relatedConcepts: ["Anti-money laundering", "Client due diligence", "Suspicious activity report"],
    },
    [
      ["Carry out client due diligence (identity and source of funds); report suspicions and avoid tipping off", true, "Correct — AML rules require CDD before acting and a SAR if suspicion arises."],
      ["Proceed quickly to secure the engagement before a competitor does", false, "Commercial pressure does not override mandatory AML due diligence."],
      ["Accept the client and complete identity checks at the year end", false, "CDD must be carried out before acting, not deferred."],
      ["Warn the client that you intend to report them to the NCA", false, "Alerting the client risks the criminal offence of tipping off."],
    ],
  ),
];

# Case Study 1: UK Universal Credit

## The Department for Work and Pensions' Digital Welfare System Overhaul

---

### Executive Summary

Universal Credit (UC) is the United Kingdom's flagship welfare reform program, designed to merge six legacy benefits (Jobseeker's Allowance, Housing Benefit, Working Tax Credit, Child Tax Credit, Income Support, and Employment and Support Allowance) into a single monthly payment administered through a digital-first system. Announced in 2010 and originally scheduled for full rollout by 2017, the program was not declared fully rolled out until December 2024 -- seven years late. The IT component alone has cost over GBP 1 billion, while the total program cost (including administration, transition, and write-offs) has exceeded GBP 12 billion against an original business case that projected GBP 2.2 billion in net savings. The National Audit Office (NAO) has published more than a dozen critical reports on the program, making it one of the most scrutinized digital transformation failures in history.

The fundamental lesson: Universal Credit failed not because the technology was impossible, but because organizational transformation was treated as secondary to system deployment, because political timelines repeatedly overrode technical readiness, and because no governance mechanism existed to force an honest reckoning with accumulating costs and delays.

---

### Timeline and Budget

| Date | Event |
|------|-------|
| November 2010 | White Paper "Universal Credit: welfare that works" published by Secretary of State Iain Duncan Smith |
| 2011 | Programme formally established within DWP. Original IT approach: bespoke monolithic system built by in-house teams and suppliers (primarily Accenture, HP, IBM) |
| April 2013 | "Pathfinder" pilot launched at a single Jobcentre in Ashton-under-Lyne (limited to simple single claimants) |
| September 2013 | Major Programme Review (MPR) conducted. Government Digital Service (GDS) assessment: RED rating (delivery of project appears unachievable). DWP resets the program -- scraps GBP 34 million of existing IT code |
| December 2014 | NAO report: "Universal Credit: progress update" -- warns of "fortress mentality" within DWP, estimates original business case benefits unlikely to be realized |
| November 2016 | NAO report: total cost to date GBP 15.8 billion for the wider welfare reform programme; UC IT costs alone exceed GBP 600 million |
| January 2016 - 2018 | Gradual rollout to additional Jobcentres using rebuilt "digital" service; "Live Service" (old system) and "Full Service" (new digital system) running in parallel |
| November 2017 | Budget: Chancellor announces GBP 1.5 billion transitional funding package after cross-party pressure and widespread reports of claimant hardship (delays, destitution, food bank use) |
| June 2018 | NAO report: GBP 1.3 billion spent on IT to date. Estimates UC will cost GBP 2 billion more per year to administer than the benefits it replaces (contradicting original savings claims) |
| December 2018 | Full service available in all Jobcentres, but "managed migration" of existing benefit claimants barely begun |
| February 2020 | NAO report: managed migration pilot (Harrogate) migrated only 1,600 people after 8 months; 2.87 million legacy benefit claimants still to be moved |
| March 2020 | COVID-19 pandemic: UC system receives 1 million+ claims in three weeks (versus normal 100,000/month). System holds under load -- a genuine success -- but backlog of claims and processing errors surge |
| 2022-2023 | Managed migration continues slowly. DWP revises completion target to March 2025 |
| December 2024 | DWP declares "completion" of managed migration for all remaining legacy claimants. Total programme duration: 14 years |

**Budget Summary:**

| Category | Planned | Actual |
|----------|---------|--------|
| IT system development (to 2023) | ~GBP 400 million (initial estimates) | GBP 1.3 billion+ (NAO, 2018) |
| Aborted IT code write-off (2013 reset) | N/A | GBP 34 million |
| Annual running costs vs legacy benefits | Net savings of GBP 700 million/year by 2024-25 (2012 business case) | Net additional cost of GBP 2 billion+/year (NAO, 2018 estimate) |
| Transitional protection payments | Not in original plan | GBP 3.7 billion over five years (OBR estimate, 2023) |
| Total programme cost (cumulative, all elements) | ~GBP 12.8 billion (original business case, 2012) | Over GBP 25 billion (cumulative through 2024, various NAO reports and DWP accounts) |

---

### What Went Wrong

**1. Organizational Overreach: Merging Six Benefits Was a Policy Challenge Disguised as an IT Project**

The fundamental premise -- merging six separate benefits with different eligibility rules, assessment criteria, payment frequencies, and legal frameworks -- was an organizational transformation of enormous complexity. DWP treated it primarily as a technology delivery challenge. The policy work (harmonizing rules, resolving edge cases for millions of claimants with different circumstances) was never completed before technology delivery began. This meant requirements were in constant flux.

**2. The 2013 Reset: GBP 34 Million in Written-Off Code**

The original IT approach attempted to build a bespoke monolithic system. When the Government Digital Service conducted an independent review in 2013, it rated the programme RED (unachievable). DWP was forced to write off GBP 34 million of code and start over with a new "digital" approach. This reset cost two years but was arguably the right decision -- the original approach would have failed more expensively.

**3. Dual Running: Seven Years of Parallel Systems**

From 2014 to 2024, DWP operated two parallel systems: the old "Live Service" and the new "Full Service." This dual running was extraordinarily expensive, created confusion for claimants and staff, and meant that the cost savings that justified the programme could never be realized while both systems ran.

**4. The Five-Week Wait: Design Choice with Human Consequences**

UC was designed with a built-in five-week wait between claim and first payment (one week waiting period plus one monthly assessment period plus one week processing). This design choice -- which was a policy decision, not a technology constraint -- caused documented destitution, food bank referrals, rent arrears, and debt spiraling. The Trussell Trust reported a 52% average increase in food bank use in areas where UC had fully rolled out. This human cost became the programme's defining political liability.

**5. No Honest Cost-Benefit Reckoning**

The original 2012 business case projected net savings of GBP 38 billion over ten years. By 2018, the NAO concluded these savings were "unlikely to be achieved" and that UC would actually cost more to administer annually than the legacy benefits it replaced. Despite this, DWP did not formally revise the business case until forced to do so and continued to cite projected savings that auditors had already debunked.

---

### Root Cause Analysis

**People (40% of failure):**
- DWP lacked sufficient in-house digital capability in 2010-2013. Over-reliance on external consultants (Accenture, IBM) who built what they were contracted to build, not what was needed.
- Staff in Jobcentres were inadequately trained on the new system, leading to errors in claims processing.
- Claimants -- the "end users" -- were not adequately consulted in design. The five-week wait was never user-tested for its real-world impact on vulnerable populations.
- Political leadership (Iain Duncan Smith) was ideologically committed to the programme and resistant to negative feedback, creating a "fortress mentality" (NAO's phrase) that suppressed internal warnings.

**Process (40% of failure):**
- No iterative delivery methodology until after the 2013 reset. The original approach was waterfall.
- Procurement structures incentivized vendors to build large systems rather than deliver incremental value.
- Governance was weak: the Major Projects Authority rated the programme RED or AMBER/RED repeatedly, but these ratings did not trigger binding corrective action.
- The business case was never honestly updated, depriving decision-makers of accurate cost information.
- Managed migration was not planned realistically: the pace of moving 2.87 million legacy claimants was far slower than projected.

**Technology (20% of failure):**
- The original monolithic architecture (pre-2013 reset) was genuinely wrong -- it could not accommodate the complexity of six benefits.
- The post-reset digital service was technically more sound but was built on an evolving platform while requirements continued to change.
- One genuine technology success: during COVID-19, the UC digital system absorbed a 10x surge in claims without collapsing, demonstrating that the rebuilt architecture was resilient.

---

### Lessons for the GaaS Framework

1. **Layer 0 (Legal and Policy Foundation):** Large-scale benefit reform requires policy harmonization *before* technology delivery begins. The GaaS framework should mandate a "policy readiness gate" that prevents Layer 1 technology work from starting until Layer 0 legal and policy foundations are stable.

2. **Layer 2 (People and Process Engine):** The 40-40-20 ratio is validated. Universal Credit invested far too heavily in technology (and specific vendors) while underinvesting in organizational change management, staff retraining, and claimant-centered design.

3. **Layer 3 (Transparent Service Portfolio):** If TBM-based cost transparency had been applied, the gap between projected savings and actual costs would have been visible years earlier. The GaaS framework's emphasis on radical transparency is directly validated.

4. **Layer 4 (Unified Citizen Experience):** Mandatory digital-first channels without adequate analog fallback cause real harm to vulnerable populations. The GaaS framework should codify a "no one left behind" principle requiring maintained non-digital access.

5. **Governance:** Independent technical assessment (like the GDS review that triggered the 2013 reset) is essential. But assessment without binding authority is insufficient -- UC received repeated RED ratings with no automatic consequences.

---

### Sources

1. National Audit Office. "Universal Credit: early progress." HC 621, Session 2013-14. September 2013.
2. National Audit Office. "Universal Credit: progress update." HC 786, Session 2014-15. November 2014.
3. National Audit Office. "Rolling out Universal Credit." HC 1123, Session 2017-19. June 2018.
4. National Audit Office. "Universal Credit: getting to first payment." HC 376, Session 2019-20. July 2020.
5. House of Commons Work and Pensions Committee. "Universal Credit: the wait for a first payment." Third Report of Session 2019-20.
6. Institute for Government. "Universal Credit." Programme case study, updated 2024.
7. Timmins, Nicholas. "Universal Credit: From Disaster to Recovery?" Institute for Government, 2016.
8. Trussell Trust. "State of Hunger" reports, 2017-2020.
9. Office for Budget Responsibility. "Welfare Trends Report." October 2023. (Transitional protection cost estimates.)
10. DWP Annual Report and Accounts, 2013-2024. (IT expenditure figures.)

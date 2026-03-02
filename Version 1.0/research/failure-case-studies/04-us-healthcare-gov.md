# Case Study 4: HealthCare.gov (United States)

## Catastrophic Launch, Systemic Procurement Failure, and the Rescue That Changed Government Tech

---

### Executive Summary

HealthCare.gov was launched on October 1, 2013, as the federal health insurance marketplace mandated by the Affordable Care Act (ACA). It was the most visible technology deliverable of the Obama presidency. On launch day, the site was effectively non-functional: of an estimated 250,000 concurrent users attempting to access the system, only 6 people successfully enrolled on Day 1. Over the first month, the site had a failure rate exceeding 90%, with error pages, timeouts, and crashes the norm. The technical rescue, led by a "tech surge" team of Silicon Valley engineers including Mikey Dickerson (later founding director of the US Digital Service), fixed the site within approximately two months. By the end of the first open enrollment period (March 31, 2014), over 8 million people had enrolled -- exceeding the original target of 7 million.

The total cost of the original build was approximately USD 840 million (GAO, 2014), later rising to over USD 2.1 billion by 2015 including remediation. The root causes were systemic: 55 separate contractors with no single technical integrator, waterfall procurement that prevented iterative development, political decision-making that overrode technical readiness signals, and a Center for Medicare and Medicaid Services (CMS) project management office that lacked the technical expertise to manage a modern web application.

The HealthCare.gov failure directly led to the creation of the United States Digital Service (USDS) and 18F (a digital services agency within GSA), fundamentally reshaping how the federal government approaches technology delivery.

---

### Timeline and Budget

| Date | Event |
|------|-------|
| March 2010 | Affordable Care Act signed into law. CMS tasked with building federal marketplace for states that decline to build their own |
| 2010-2011 | CMS begins procurement. Requirements gathering occurs through traditional federal acquisition process. CGI Federal awarded prime development contract (approximately USD 94 million initial ceiling, later growing to USD 292 million) |
| 2011-2013 | Development proceeds under waterfall methodology. 55 contractors working on different components. No single technical integrator. CMS acts as its own systems integrator (a role it had never performed for a consumer web application) |
| March 2013 | Internal testing begins revealing severe problems. Key functionality (account creation, plan comparison, enrollment) failing consistently. Multiple "code yellow" and "code red" internal warnings issued |
| September 2013 | Final end-to-end testing begins only 2 weeks before launch. Tests show catastrophic failures. Political leadership decides to proceed with launch rather than delay (the ACA's open enrollment date is set by statute) |
| October 1, 2013 | HealthCare.gov launches. Site immediately overwhelmed. 6 successful enrollments on Day 1 out of approximately 250,000 attempts. Error rate exceeds 90% |
| October 2-20, 2013 | Repeated attempts to fix the site in production. "War room" established at CMS. Situation does not materially improve. Congressional hearings begin |
| October 21, 2013 | Obama administration announces "tech surge" -- bringing in outside technical experts including Jeff Zients (management consultant, later NEC Director), Mikey Dickerson (Google SRE), Todd Park (US CTO), and engineers from Google, Twitter, and other tech companies |
| October-November 2013 | Tech surge team diagnoses core problems: (a) no monitoring -- CMS could not see what was failing in real time; (b) database query performance catastrophically slow; (c) no caching layer; (d) front-end making 90+ server calls per page load; (e) no load balancing across application servers |
| November 30, 2013 | Deadline set by administration for site to be "working for the vast majority of users." Site performance dramatically improved: error rate drops from >90% to <10%; response times drop from 8+ seconds to <1 second. Capacity increases from ~1,000 concurrent users to 50,000+ |
| December 2013 - March 2014 | Continued improvements. Enrollment accelerates. Surge in final weeks of open enrollment |
| March 31, 2014 | First open enrollment period closes. 8.02 million enrolled -- exceeding the 7 million target |
| August 2014 | United States Digital Service (USDS) formally established by executive order. Mikey Dickerson appointed founding administrator |
| 2015 | 18F (digital services agency within GSA) expands operations. Both USDS and 18F cite HealthCare.gov as founding motivation |
| June 2014 | Government Accountability Office (GAO) report: total cost of HealthCare.gov development approximately USD 840 million |
| 2015-2016 | GAO updates total cost to over USD 2.1 billion including ongoing operations and fixes |

**Budget Summary:**

| Category | Planned | Actual |
|----------|---------|--------|
| CGI Federal development contract | USD 94 million (initial) | USD 292 million (final) |
| Total development (55 contractors) | Not publicly broken down | ~USD 840 million (GAO, 2014) |
| Total including remediation and operations (through 2015) | N/A | >USD 2.1 billion (GAO) |
| Tech surge rescue cost | N/A | Relatively small (mostly volunteer/detailed federal employees); estimated low millions |

---

### What Went Wrong

**1. No Single Technical Owner**

The most fundamental failure: CMS, which had extensive experience managing healthcare reimbursement programs but zero experience building consumer-facing web applications, designated itself as the systems integrator. There was no single technical authority with end-to-end responsibility for the system working as a whole. Fifty-five contractors each built their piece; nobody was responsible for the pieces fitting together.

**2. Waterfall Procurement Precluded Iterative Delivery**

Federal procurement regulations (FAR/DFAR) and CMS's own acquisition practices required detailed requirements to be specified upfront, contracts awarded based on those requirements, and deliverables accepted against those requirements. This waterfall model meant that the system could not be iteratively developed, tested with real users, and improved. By the time end-to-end testing occurred (two weeks before launch), it was too late to make architectural changes.

**3. Political Timeline Overrode Technical Readiness**

The ACA mandated that open enrollment begin on October 1, 2013. This date was set by statute and could not be changed without Congressional action -- which was politically impossible given Republican opposition to the ACA. Internal warnings that the system was not ready (including from CMS's own technical staff and from the White House Office of Science and Technology Policy) were overridden by the political imperative to launch on schedule. The decision to launch a system known to be broken was a political decision, not a technical one.

**4. No Monitoring or Observability**

When the site crashed on October 1, CMS could not determine why. There were no application performance monitoring (APM) tools, no real-time dashboards, no centralized logging. The tech surge team's first action was to install monitoring -- only then could they see that the site was making 90+ database calls per page load, that queries were unindexed, and that there was no caching layer. The absence of basic observability meant that months of pre-launch testing had not revealed problems that were immediately visible once monitoring was in place.

**5. Architectural Failures**

The application architecture reflected the fragmented contractor structure. Each contractor optimized their component independently. The front-end (built by one contractor) made excessive calls to the back-end (built by other contractors). The database (Oracle) had unindexed queries that degraded catastrophically under load. There was no CDN, no caching layer, and no effective load balancing. These are basic web architecture practices that any experienced consumer web company would have implemented as defaults.

**What the Rescue Got Right:**

The tech surge team's approach provides a template for emergency response:
- **First priority: observability.** Install monitoring before attempting fixes.
- **Triage ruthlessly.** Focus on the most impactful failures first (database performance, caching, front-end call reduction).
- **War room with authority.** The tech surge team had direct access to the White House and could override contractor bureaucracy.
- **Measure improvement daily.** Error rates and response times tracked hourly against a public target (November 30 deadline).
- **No new features.** All effort focused on making existing functionality work, not adding new capabilities.

---

### Root Cause Analysis

**People (35% of failure):**
- CMS lacked engineering talent experienced in building consumer web applications. The agency's expertise was in policy, regulation, and healthcare reimbursement -- not in web-scale software delivery.
- Contractor teams were siloed. No cross-team collaboration culture. Contractors were incentivized to deliver their component to spec, not to ensure the whole system worked.
- Political leadership overrode technical warnings because they lacked the technical background to assess risk independently.

**Process (45% of failure -- the primary cause):**
- Federal procurement (FAR) is structurally unsuited for iterative software development. Requirements were frozen years before delivery. Change orders were cumbersome and expensive. Agile delivery was effectively impossible within the procurement framework.
- No systems integrator role was defined or procured. CMS assumed a role it was unqualified to perform.
- Testing was left to the end rather than being continuous. End-to-end testing began 2 weeks before a immovable launch date.
- Risk governance was performative: monthly status reports showed "green" because individual contractors were delivering against their individual milestones, even as the integrated system was failing.

**Technology (20% of failure):**
- No monitoring or observability (but this was a process and people failure -- the technology to add monitoring existed; nobody required it).
- Poor architecture (no caching, no CDN, unindexed database queries, excessive API calls) -- but these are junior-level mistakes that would have been caught by experienced web engineers. The technology failures were symptoms of the people and process failures.

---

### Lessons for the GaaS Framework

1. **Layer 2 (People and Process Engine -- Procurement):** The GaaS framework's procurement processes MUST support iterative delivery. The HealthCare.gov failure is the definitive case for procurement reform. Recommendations: modular contracting (break large systems into independently deliverable pieces), mandatory continuous integration testing, and "off-ramp" provisions allowing government to change vendors mid-stream if delivery is failing.

2. **Layer 2 (People -- Digital Talent Strategy):** Government must retain sufficient in-house technical talent to serve as an "informed buyer." CMS could not evaluate its contractors' work because it had no staff qualified to do so. The GaaS framework's emphasis on government technical talent is directly validated. At minimum, government must own: (a) systems integration, (b) architecture decisions, (c) monitoring and observability, (d) user research.

3. **Layer 1 (Shared Technology Core):** Basic web architecture patterns (caching, CDN, load balancing, monitoring, indexed databases) should be codified as minimum standards in the GaaS technology core. These are not advanced or controversial -- they are table stakes for any public-facing service.

4. **Governance:** The GaaS framework should adopt the tech surge model as a standing emergency response capability. Every government implementing GaaS should have an identified "rescue team" of experienced engineers who can be deployed when a major system fails. This capability must exist before the crisis, not be improvised during it.

5. **Layer 4 (Unified Citizen Experience):** Launch readiness must be determined by technical criteria, not political calendars. The GaaS framework should include a formal "launch readiness gate" that requires independent technical validation before any citizen-facing service goes live.

6. **The USDS Model:** The HealthCare.gov rescue led to the creation of USDS and 18F -- proving that governments can attract world-class technical talent when given meaningful problems and sufficient authority. The GaaS framework should recommend that every implementing government establish a similar "digital service" team.

---

### Sources

1. Government Accountability Office. "HealthCare.gov: Ineffective Planning and Oversight Practices Underscore the Need for Improved Contract Management." GAO-14-694, July 2014.
2. Government Accountability Office. "HealthCare.gov: CMS Has Taken Steps to Address Problems, but Needs to Further Implement Systems Development Best Practices." GAO-15-238, March 2015.
3. Office of Inspector General, HHS. "HealthCare.gov: Case Study of CMS Management of the Federal Marketplace." OEI-06-14-00350, February 2016.
4. Brill, Steven. "Obama's Trauma Team." *TIME Magazine*, February 27, 2014. (Detailed account of the tech surge.)
5. Dickerson, Mikey. Talks at SXSW and Code for America Summit, 2014-2015. (First-person account of rescue operations.)
6. Zients, Jeff. Congressional testimony before House Energy and Commerce Committee, October 2013.
7. Goldstein, Phil. "HealthCare.gov: What Went Wrong and What's Been Fixed." *FedTech Magazine*, 2014.
8. Levie, Aaron and Todd Park. "The HealthCare.gov Rescue and What It Means for Government." (Various public presentations, 2014.)
9. Snyder, Steven. "How the Healthcare.gov Disaster Led to the Creation of the US Digital Service." *Fast Company*, 2014.
10. House Committee on Energy and Commerce. Hearing transcripts: "PPACA Implementation Failures: Didn't Know or Didn't Disclose?" October-November 2013.

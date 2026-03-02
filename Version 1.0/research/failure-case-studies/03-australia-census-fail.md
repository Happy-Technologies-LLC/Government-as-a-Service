# Case Study 3: Australia 2016 Census (#CensusFail)

## IBM, DDoS Narratives, and Infrastructure Failure

---

### Executive Summary

On the evening of August 9, 2016, the Australian Bureau of Statistics (ABS) conducted the 2016 Australian Census, the first to be primarily conducted online. The system collapsed within hours of peak load. Over 2 million households that attempted to complete the census online were unable to do so. The ABS initially attributed the failure to a series of Distributed Denial of Service (DDoS) attacks, but subsequent Senate inquiry and independent analysis revealed that the DDoS traffic was minor and that the real cause was a combination of inadequate infrastructure capacity planning, a geoblocking mechanism that inadvertently blocked legitimate traffic, and a failure of the upstream ISP link. The debacle, branded #CensusFail on social media, cost the Australian government an estimated AUD 30 million in direct remediation costs on top of the AUD 470 million total census budget, damaged public trust in government digital services, and triggered a Senate inquiry that exposed deep problems in the ABS-IBM vendor relationship.

---

### Timeline and Budget

| Date | Event |
|------|-------|
| 2012-2013 | ABS begins planning for 2016 Census with online-first strategy (target: 65% online completion) |
| July 2014 | IBM awarded AUD 9.6 million contract for census IT infrastructure (hosting, network, application) |
| 2015-2016 | System development and testing. Load testing conducted but with parameters that did not simulate realistic peak conditions |
| August 9, 2016 (Census Night) | 6:00 PM AEST -- Online form goes live nationally |
| August 9, 2016 7:30 PM | Traffic reaches ~260,000 concurrent submissions. System begins experiencing issues |
| August 9, 2016 7:45 PM | ABS detects what it describes as DDoS activity (later revealed to be relatively minor -- approximately 3 Gbps, easily within mitigation capacity) |
| August 9, 2016 ~8:00 PM | Geoblocking mechanism activated to block overseas traffic -- inadvertently blocks legitimate Australian users on certain network paths |
| August 9, 2016 8:30 PM | Upstream ISP (Nextgen/Vocus) link fails. IBM router failover does not function correctly -- three of four router links become unavailable |
| August 9, 2016 ~9:00 PM | ABS makes decision to take entire system offline rather than risk data loss |
| August 10, 2016 | ABS Chief Statistician David Kalisch tells media the shutdown was due to DDoS attacks. This narrative dominates initial coverage |
| August 11, 2016 | System restored. Over following weeks, 96% completion rate ultimately achieved (credible result, but trust severely damaged) |
| October 2016 | Senate Economics References Committee launches inquiry |
| December 2016 | IBM publishes its own post-incident review blaming the DDoS attacks |
| April 2017 | Senate Committee report published. Finds DDoS was minor; root causes were infrastructure design failures, inadequate IBM load testing, and poor ABS oversight |
| August 2017 | Australian Signals Directorate (ASD) report confirms DDoS traffic was minor and not the cause of the outage |
| October 2017 | ABS Chief Statistician David Kalisch does not have contract renewed (effective departure) |

**Budget Summary:**

| Category | Figure |
|----------|--------|
| Total 2016 Census budget | AUD 470 million |
| IBM IT contract value | AUD 9.6 million (original) |
| Cost of census failure remediation | AUD 30 million estimated additional costs (extended collection period, helpline staffing, reputation management) |
| IBM penalty / accountability | IBM refunded an unspecified "nominal" amount. No significant financial penalty imposed |

---

### What Went Wrong

**1. The DDoS Narrative Was a Deflection**

The ABS's immediate public claim that the system was taken down by DDoS attacks was, at best, misleading. The Senate inquiry found that while there were DDoS packets detected, the volume (~3 Gbps across multiple small events) was well within the capacity of standard DDoS mitigation services. The Australian Signals Directorate confirmed this. The actual failure was a cascade of infrastructure problems: a router failover failure, a geoblocking mechanism that blocked legitimate traffic, and an ISP link failure that IBM's architecture did not have adequate redundancy to handle. The DDoS narrative served to shift blame from IBM's infrastructure to an external attacker.

**2. Load Testing Was Unrealistic**

IBM's pre-census load testing simulated peak traffic of approximately 250,000 concurrent users -- but used simplified test profiles that did not replicate real user behavior (form completion time, back-button behavior, timeout patterns). The actual peak load was within the tested range, but real user behavior stressed the system differently than the synthetic tests predicted. This is a classic capacity planning failure: testing for throughput rather than for realistic interaction patterns.

**3. Single Points of Failure in Network Architecture**

The network architecture had four ISP links to the IBM hosting environment. When the geoblocking mechanism was activated and one ISP link failed, the remaining links could not carry the load and the router failover mechanism did not function as designed. A system designed to serve 24 million people simultaneously had no effective network redundancy.

**4. Vendor Relationship Was Inadequately Managed**

The ABS had insufficient technical staff to independently assess IBM's architecture decisions, load testing methodology, or network design. The ABS relied on IBM's assurances that the system was ready. Post-incident, IBM's own review blamed external DDoS attacks, and the ABS initially accepted this narrative -- because it lacked the internal technical capability to challenge it. The Senate inquiry concluded that the ABS had "outsourced too much" and retained too little in-house technical capacity.

**5. No Independent Security or Resilience Audit**

The Australian Signals Directorate (ASD) was not engaged to audit the system's security and resilience before census night. Had ASD reviewed the architecture, the network redundancy gaps and DDoS mitigation concerns would likely have been identified.

---

### Root Cause Analysis

**People (30% of failure):**
- ABS had reduced its in-house IT capability through years of budget cuts. Staff lacked the technical expertise to evaluate IBM's claims about system readiness.
- Leadership (Chief Statistician) had insufficient technical background to question the vendor's assurances.
- Post-incident, institutional incentives drove the DDoS deflection narrative rather than honest accountability.

**Process (40% of failure):**
- Procurement process selected IBM based primarily on cost (AUD 9.6 million was low for the scope of work), without adequate weight given to resilience requirements.
- No independent technical review or "red team" assessment was mandated before go-live.
- Load testing criteria were set by the vendor (IBM) without independent ABS validation of test parameters.
- The ABS governance structure had no mechanism to force a go/no-go decision based on independent resilience assessment.
- Incident response planning did not include a "graceful degradation" option -- the only plan was full shutdown.

**Technology (30% of failure):**
- Network architecture had inadequate redundancy (single effective path when geoblocking was active).
- Router failover mechanisms were not tested under realistic failure conditions.
- DDoS mitigation was undersized for a nationally significant system (standard practice would have been a dedicated DDoS scrubbing service for an event of this profile).
- No CDN or distributed architecture was employed -- the system was hosted in a single IBM facility.

---

### Lessons for the GaaS Framework

1. **Layer 1 (Shared Technology Core):** Any national-scale digital service must undergo independent resilience assessment (not just vendor self-assessment) before launch. The GaaS framework should mandate third-party "red team" resilience testing for all Layer 1 infrastructure.

2. **Layer 2 (People and Process Engine -- Vendor Management):** The "vendor management" process in the GaaS framework must include provisions for: (a) retaining sufficient in-house technical capability to challenge vendor claims; (b) requiring independent audit of vendor-delivered infrastructure; (c) contractual penalties tied to availability and performance SLAs, not just delivery milestones.

3. **Layer 2 (People -- Digital Talent Strategy):** Budget cuts that hollow out government technical capability create systemic risk. The ABS could not independently evaluate IBM's work because it had eliminated the roles needed to do so. The GaaS framework's emphasis on government technical talent is directly validated.

4. **Layer 3 (Transparent Service Portfolio):** AUD 9.6 million for IT infrastructure to serve a nation of 24 million is, in hindsight, clearly insufficient. TBM-based cost transparency would have flagged this as unrealistically low for the risk profile.

5. **Incident Response:** The GaaS framework should include a "graceful degradation" design principle for all citizen-facing services. Rather than total shutdown, systems should be able to fall back to reduced functionality (e.g., queue-based submission, static confirmation pages, extended completion windows).

6. **Accountability:** Post-incident honesty is essential for institutional learning. The DDoS narrative prevented honest root cause analysis for months and damaged public trust more than the outage itself would have.

---

### Sources

1. Senate Economics References Committee. "2016 Census: Issues and Lessons Learned." Commonwealth of Australia, April 2017.
2. Australian Bureau of Statistics. "2016 Census: Improving for a better Census." Post-incident review, 2016.
3. Australian Signals Directorate. Review of the events surrounding the 2016 eCensus. August 2017. (Classified report; findings summarized in Senate hearings.)
4. IBM. "Independent Review of the Events of 9 August 2016 Relating to the 2016 eCensus." December 2016.
5. Farrell, Paul. "Census 2016: ABS says utilised IBM utilised to block DDoS attacks that brought site down." *The Guardian Australia*, August 10, 2016.
6. Knott, Matthew. "Census 2016: It wasn't a DDoS attack that brought the system down." *The Sydney Morning Herald*, August 2017.
7. Australian National Audit Office. "The Australian Bureau of Statistics' Management of the 2016 Census." Audit Report No.49, 2017-18.

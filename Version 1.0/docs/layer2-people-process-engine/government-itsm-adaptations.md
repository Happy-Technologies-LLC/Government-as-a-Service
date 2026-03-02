# Government-Specific ITSM Adaptations

## Where the Translation Works, Where It Breaks, and How GSM Fills the Gaps

**Version**: 1.0
**Date**: March 2026
**Status**: Official Specification

---

## Executive Summary

IT Service Management (ITSM), anchored by the ITIL v4 framework, provides a mature and well-tested body of practice for managing technology services. Much of it transfers directly to government. Service catalogs, incident management, change advisory boards, and configuration management databases all work in the public sector with minimal adaptation.

But ITSM was designed for enterprises managing internal IT for employees and customers who have alternatives. Government operates under fundamentally different constraints: citizens have no competitor to switch to, services are mandated by law rather than market demand, and "problems" are frequently caused by policy decisions rather than technical failures. Applying ITSM without acknowledging these differences produces service management frameworks that look professional on paper but fail to address the situations government practitioners actually face.

This document is an honest assessment. It identifies the five critical areas where ITSM needs significant extension for government, explains why generic ITSM guidance is insufficient in each case, and describes how the Government Service Management (GSM) framework addresses these gaps through its 28 adapted practices.

---

## 1. Where ITSM Translates Directly

Before examining the gaps, it is important to acknowledge that large portions of ITSM work well in government with only minor contextual adjustments. These areas should be adopted, not reinvented.

### 1.1 Service Catalog Management

ITIL's service catalog practice maps cleanly to government. Every government provides a portfolio of services (permits, registrations, benefits, licenses) that can be cataloged, described, and published to citizens. The core discipline of maintaining an authoritative, up-to-date catalog of available services, their eligibility criteria, delivery channels, and service levels is identical in concept to enterprise service catalog management.

**What works as-is:**
- Service classification and taxonomy
- Catalog publication and maintenance workflows
- Service request routing based on catalog definitions
- Self-service portal integration

**Minor government adaptations needed:**
- Services must include legal authority and eligibility criteria (not just feature descriptions)
- Catalog must be accessible under WCAG 2.1 AA and available in multiple languages
- Life-event bundling (birth, marriage, business formation) requires cross-agency catalog entries that ITIL does not explicitly address but can accommodate

### 1.2 Incident Management

The core incident management process (detect, log, classify, prioritize, resolve, close) works in government exactly as it works in the private sector. Governments need tiered support, escalation procedures, priority matrices, and major incident protocols just like any large organization.

**What works as-is:**
- Incident classification and prioritization (P1-P4)
- Escalation matrices and tiered support
- War room protocols for major incidents
- Post-incident review processes
- SLA-based response and resolution targets

**Minor government adaptations needed:**
- Priority matrices should weight citizen impact and equity considerations, not just business revenue
- Communication during outages must account for citizens who cannot retry later (see Section 2.4)
- Incident data may be subject to freedom-of-information requests, requiring careful documentation practices

### 1.3 Change Management (Core Process)

The fundamental change management process---submitting change requests, assessing risk, obtaining approval, scheduling implementation, and verifying success---works in government. Change Advisory Boards (CABs) are as valuable in a ministry of health as they are in a bank.

**What works as-is:**
- Change request submission and classification (standard, normal, emergency)
- Risk assessment frameworks
- CAB review and approval workflows
- Change scheduling and conflict detection
- Post-implementation review

**Where it needs extension:** See Section 2.3 for the critical gap around legislative and policy-driven change.

### 1.4 Configuration Management (CMDB)

Maintaining a Configuration Management Database (CMDB) to track technical assets, their relationships, and their dependencies is just as necessary in government as in the private sector. Governments run servers, databases, applications, networks, and cloud services that need to be inventoried and mapped.

**What works as-is:**
- Configuration item (CI) discovery and registration
- Relationship and dependency mapping
- CI lifecycle management
- Impact analysis for change and incident management

**Where it needs extension:** See Section 2.5 for the critical gap around cross-agency dependencies and political governance of shared infrastructure.

### 1.5 Service Level Management

Defining, measuring, and reporting on service levels is directly applicable to government. Citizens deserve commitments for how quickly services will be delivered, and government managers need performance data to improve operations.

**What works as-is:**
- SLA definition and negotiation
- Performance monitoring and reporting
- OLA (Operational Level Agreement) management between internal teams
- Service review meetings and improvement actions

**Minor government adaptations needed:**
- SLAs must be designed as citizen commitments, not negotiated contracts (citizens cannot negotiate)
- Service level targets may be set by statute or regulation, not by business negotiation
- Equity metrics (ensuring all populations receive equal service levels) have no ITIL equivalent

---

## 2. Where ITSM Needs Extension for Government

The following five areas represent critical gaps where ITSM guidance is either insufficient, misleading, or absent for government contexts. These are not minor adjustments. They require new concepts, new processes, and new governance structures that ITIL does not provide.

### 2.1 Problem Management: The Policy-Problem Interface

**The ITSM Assumption:** Problems are technical. Recurring incidents are caused by software bugs, infrastructure failures, or configuration errors. Root cause analysis investigates technical systems to identify defects that can be fixed through engineering changes.

**The Government Reality:** In government, the most impactful and persistent "problems" are frequently not technical at all. They originate in policy decisions, data quality issues, inter-agency coordination failures, or citizen behavior that the service was not designed to accommodate.

#### Examples of Policy-Originated Problems

**Example 1: Eligibility Rule Changes**
A ministry of social services changes the income threshold for a housing benefit. The technical system works correctly---it applies the new threshold exactly as programmed. But the service desk is flooded with calls from citizens who were previously eligible and are now denied. ITIL problem management would find no technical root cause. The "problem" is a policy decision that created a service disruption.

**Example 2: Data Quality as a Systemic Issue**
A digital identity system requires address verification against a national address registry. In rural areas, 30% of addresses are not in the registry because the registry was built from urban postal data. The technical system works correctly---it rejects unverifiable addresses. But the root cause is a data quality gap that no amount of incident resolution can fix. It requires a data governance initiative spanning multiple agencies.

**Example 3: Citizen Behavior Patterns**
A tax filing service experiences a 400% surge in the final 48 hours before the deadline, causing performance degradation. ITIL capacity management would suggest scaling infrastructure. But the root cause is a predictable behavioral pattern that could be addressed through deadline restructuring, early-filing incentives, or phased submission windows---none of which are technical solutions.

#### The Policy-Problem Interface

GSM extends ITIL's problem management practice (SP-08: Problem & Root Cause Management) with a structured interface between technical problem management and policy analysis:

```
┌─────────────────────────────────────────────────────────────────┐
│                    GSM Problem Classification                    │
├──────────────┬──────────────────┬───────────────────────────────┤
│  Type A      │  Type B          │  Type C                       │
│  Technical   │  Data/Integration│  Policy/Behavioral            │
│              │                  │                               │
│  Standard    │  Cross-agency    │  Requires policy analysis,    │
│  ITIL root   │  data governance │  legislative review, or       │
│  cause       │  and quality     │  citizen behavior research    │
│  analysis    │  investigation   │                               │
│              │                  │                               │
│  Resolved by │  Resolved by     │  Resolved by policy unit      │
│  engineering │  data governance │  with service management      │
│  team        │  board           │  input                        │
└──────────────┴──────────────────┴───────────────────────────────┘
```

**Key Process Addition: Policy Impact Assessment**

When problem analysis identifies a policy-originated root cause, GSM requires:

1. **Policy Impact Report** --- A structured document from the service management team to the policy unit, describing the service impact of the policy decision, with data on incident volume, citizen complaints, cost of workarounds, and equity effects.

2. **Policy-Service Review** --- A regular governance meeting (monthly or quarterly) where the policy unit and service management team jointly review open policy-originated problems and evaluate potential policy modifications.

3. **Policy Change Feedback Loop** --- When a policy change is under consideration, the service management team provides a Service Impact Assessment before the policy is finalized, estimating the operational consequences (call volume, processing time, system changes, staff training).

This does not mean service management overrides policy decisions. It means policy makers receive operational data before and after decisions, and service teams have a structured channel to escalate policy-originated problems rather than treating them as unresolvable technical issues.

---

### 2.2 Knowledge Management: Discretionary Decisions and Precedent

**The ITSM Assumption:** Knowledge can be codified into articles. When a support agent resolves an issue, the solution is documented in a knowledge base article that other agents can follow to resolve the same issue. Knowledge management is about capturing, organizing, and distributing reusable solutions.

**The Government Reality:** Many government services involve discretionary decisions that cannot be reduced to knowledge base articles. A visa adjudicator does not follow a decision tree---they weigh evidence, assess credibility, apply policy guidance, and exercise judgment within a legal framework. A building permit reviewer evaluates compliance with zoning codes that contain subjective criteria ("compatible with the character of the neighborhood"). A benefits eligibility officer interprets income documentation that does not fit neatly into predefined categories.

#### The Limits of Codification

ITIL knowledge management works well for government in areas where decisions are deterministic:

- "How do I reset my password?" --- Standard KB article.
- "What documents are required for a passport renewal?" --- Standard KB article.
- "What is the processing time for a business registration?" --- Standard KB article.

It breaks down for decisions that are:

- **Discretionary** --- The decision maker must exercise professional judgment.
- **Precedent-based** --- The correct answer depends on how similar cases were decided previously.
- **Reversible by external authority** --- A court, ombudsman, or appeals board can overturn the decision, changing what the "correct" answer is.

#### GSM Knowledge Management Extensions

GSM extends ITIL's knowledge management (GP-09: Knowledge & Information Management) with three additional knowledge types:

**1. Precedent Library**

A structured repository of past decisions on discretionary matters, organized by service area, decision type, and outcome. Unlike a KB article that prescribes a solution, a precedent entry describes:

- The factual situation
- The applicable policy or regulation
- The decision made and the reasoning
- Whether the decision was appealed and the outcome
- Any subsequent policy clarification triggered by the case

Precedent libraries serve a different purpose than knowledge bases. They do not tell the decision maker what to do. They show what was done in analogous situations, providing consistency without removing professional judgment.

**2. Policy Interpretation Register**

When policy language is ambiguous (and it frequently is), front-line staff develop working interpretations. These interpretations often vary between offices, teams, or individual staff. The Policy Interpretation Register captures:

- The policy provision in question
- The ambiguity or uncertainty
- The working interpretation adopted
- Whether the interpretation has been endorsed by the policy unit
- Any conflicting interpretations in use elsewhere

This register serves as an escalation mechanism. When multiple conflicting interpretations are captured, the policy unit is flagged to issue clarifying guidance.

**3. Decision Reversal Protocol**

When a court overturns an administrative decision, or an appeals board establishes a new interpretation, the knowledge management system must:

- Identify all similar pending cases that may be affected
- Flag all past decisions that used the overturned reasoning
- Update the precedent library and policy interpretation register
- Notify affected staff and provide updated guidance
- Estimate the number of citizens who may need to be contacted about changed outcomes

ITIL has no equivalent to this process because enterprise knowledge bases are not subject to judicial review.

#### Practical Implementation

| Knowledge Type | ITIL Equivalent | Government Extension |
|---|---|---|
| Procedural ("How to") | KB Article | Works as-is |
| FAQ / Common Questions | KB Article | Works as-is |
| Discretionary Decision | None | Precedent Library |
| Policy Ambiguity | None | Policy Interpretation Register |
| Decision Reversal | None | Decision Reversal Protocol |
| Regulatory Update | Release Note | Regulatory Change Notice (integrates with Change Management) |

---

### 2.3 Change Management: Legislative and Policy-Driven Change

**The ITSM Assumption:** Changes originate from within the organization. Someone submits a change request to improve a system, fix a defect, or add a feature. The Change Advisory Board evaluates technical risk, schedules the change, and monitors the outcome. The organization controls the pace and scope of change.

**The Government Reality:** A significant proportion of changes in government are externally mandated. A new privacy law, a court ruling, a budget appropriation, or an executive order can force changes across dozens of systems with non-negotiable deadlines. These changes do not arrive as change requests. They arrive as legal obligations.

#### The Two Streams of Change

Government change management must handle two fundamentally different streams:

**Stream 1: Internally Initiated Change (Standard ITIL)**
- System upgrades, bug fixes, feature enhancements
- Submitted by technical teams, reviewed by CAB
- Risk is primarily technical (will the change break something?)
- Timeline is negotiable

**Stream 2: Externally Mandated Change (Government Extension)**
- New legislation, regulatory changes, court orders, executive directives
- Originates from legislature, judiciary, or executive authority
- Risk is primarily compliance (failure to implement is a legal violation)
- Timeline is non-negotiable (set by statute or court order)

ITIL's change management process handles Stream 1 well. It has no structured approach for Stream 2.

#### The Legislative Change Integration Model

GSM extends change enablement (SP-09: Change Enablement) with a structured process for handling externally mandated change:

```
┌──────────────────────────────────────────────────────────────┐
│              Legislative / Policy Change Pipeline             │
│                                                              │
│  1. HORIZON SCANNING                                         │
│     Monitor legislative calendar, regulatory agenda,         │
│     court dockets for upcoming changes                       │
│                                                              │
│  2. IMPACT ASSESSMENT                                        │
│     For each identified change:                              │
│     - Which systems are affected?                            │
│     - Which data models need modification?                   │
│     - Which business rules change?                           │
│     - What is the compliance deadline?                       │
│     - What is the penalty for non-compliance?                │
│                                                              │
│  3. CHANGE DECOMPOSITION                                     │
│     Break the mandate into discrete technical changes        │
│     that enter the standard CAB pipeline                     │
│                                                              │
│  4. MANDATORY CHANGE ADVISORY                                │
│     CAB reviews technical implementation approach            │
│     (but cannot reject the change itself)                    │
│     Risk mitigation, not risk avoidance                      │
│                                                              │
│  5. COMPLIANCE VERIFICATION                                  │
│     Confirm all mandated changes are implemented             │
│     before the statutory deadline                            │
│     Report compliance status to legal/policy authority       │
└──────────────────────────────────────────────────────────────┘
```

**Key Distinctions from Standard ITIL Change Management:**

| Aspect | ITIL Change Management | GSM Legislative Change Extension |
|---|---|---|
| Change origin | Internal request | External mandate |
| CAB authority | Can approve or reject | Can advise on implementation, cannot reject |
| Timeline | Negotiable based on risk | Fixed by statute or court order |
| Risk appetite | Balance risk vs. benefit | Compliance is mandatory; risk is in *how*, not *whether* |
| Rollback | Standard rollback plan | Rollback may not be legally permissible |
| Success criteria | Technical success + business value | Legal compliance + technical success |

**Practical Example: GDPR-Style Privacy Law Implementation**

When a comprehensive data protection law is enacted:

1. **Horizon Scanning** identified the bill 18 months before passage.
2. **Impact Assessment** found 47 systems processing personal data, 12 requiring consent mechanism changes, 8 requiring data retention modifications, and 3 requiring complete re-architecture of data flows.
3. **Change Decomposition** produced 83 discrete change requests, prioritized by compliance risk and interdependency.
4. **Mandatory Change Advisory** --- The CAB evaluated implementation approaches for each change. They recommended phasing the 83 changes across 6 release windows, with the highest-compliance-risk changes in the first window.
5. **Compliance Verification** --- A compliance dashboard tracked implementation status against the statutory deadline, with weekly reporting to the Chief Privacy Officer and legal counsel.

The CAB never considered whether to implement these changes. That decision was made by the legislature. The CAB's role was to determine the safest and most efficient implementation approach.

---

### 2.4 Availability Management: Graceful Degradation and Cascading Backlogs

**The ITSM Assumption:** When a service is unavailable, customers wait and retry. Availability targets (99.9%, 99.99%) are expressed as percentages of uptime, and the business impact of downtime is measured in lost revenue or productivity. Recovery means restoring the service, after which normal operations resume.

**The Government Reality:** When a government digital service goes down, citizens do not simply wait. They go to physical offices. This creates cascading backlogs that take days or weeks to clear, long after the digital service has been restored. A 4-hour outage of an online benefits application portal can generate a 2-week backlog at physical service centers, because:

- Citizens who would have self-served online now require staff-assisted processing
- Physical office capacity is sized for a fraction of total demand (typically 10-20%)
- Staff diverted to handle the surge cannot perform their normal duties
- The backlog compounds as citizens who arrive for unrelated services face longer wait times and also experience degraded service

#### The Cascading Backlog Problem

```
Digital Service Outage (4 hours)
    │
    ├── Citizens redirect to physical offices
    │   ├── Physical offices overwhelmed (5-10x normal volume)
    │   ├── Wait times increase from 15 min to 3+ hours
    │   └── Staff pulled from other duties
    │
    ├── Digital service restored
    │   ├── Digital channel resumes normal volume
    │   └── BUT physical backlog persists
    │       ├── Citizens who started in-person must complete in-person
    │       ├── Partial applications need manual reconciliation
    │       └── Backlog clearance takes 5-15 business days
    │
    └── Secondary effects
        ├── Citizen complaints spike (political pressure)
        ├── Media coverage of "government IT failure"
        ├── Staff overtime and morale impact
        └── Trust erosion reduces future digital adoption
```

ITIL availability management measures the 4-hour outage. It does not measure or plan for the 2-week backlog.

#### GSM Availability Management Extensions

GSM extends availability management (SP-05: Availability Management) with three government-specific practices:

**1. Graceful Degradation Design**

Every critical government service must have a designed degradation path that preserves partial functionality during outages:

- **Level 1 (Full Service):** All features available, all channels operational.
- **Level 2 (Reduced Functionality):** Core transactions available, advanced features disabled. Example: citizens can submit applications but cannot check status.
- **Level 3 (Read-Only):** Citizens can view information and download forms but cannot submit transactions. Queue position is preserved.
- **Level 4 (Informational):** Static page with service status, expected restoration time, and instructions for alternative channels.
- **Level 5 (Complete Outage):** Redirect to physical office locator with real-time wait time estimates.

The key principle: **never present citizens with a blank error page.** Every degradation level must provide actionable information about what the citizen can do next.

**2. Citizen Communication Protocol**

During outages affecting citizen-facing services, GSM requires:

- **Immediate (within 15 minutes):** Status page update with estimated restoration time
- **Within 1 hour:** Proactive notification to citizens with pending transactions (SMS, email, push notification)
- **Within 2 hours:** Media statement if outage affects more than 50,000 citizens or involves sensitive services (benefits, healthcare, tax)
- **Upon restoration:** Notification to all affected citizens with instructions for resuming interrupted transactions
- **Within 48 hours:** Public incident report describing the cause, impact, resolution, and preventive measures

**3. Backlog Recovery Planning**

Every critical service must have a pre-approved backlog recovery plan that is activated when an outage exceeds the threshold for cascading physical-channel impact:

- **Surge staffing:** Pre-identified staff who can be redeployed to physical service centers
- **Extended hours:** Pre-approved authority for extended office hours and weekend operations
- **Appointment prioritization:** Citizens who were mid-transaction during the outage receive priority appointments
- **Cross-channel reconciliation:** Process for merging partial digital and physical transactions into complete applications
- **Backlog dashboard:** Real-time visibility into backlog size, clearance rate, and estimated return to normal

#### Availability Metrics: Beyond Uptime Percentage

| ITIL Metric | GSM Extension |
|---|---|
| Service availability (%) | Same, plus channel-specific availability |
| Mean Time to Restore (MTTR) | Same, plus Mean Time to Backlog Clearance (MTBC) |
| Planned downtime windows | Same, plus citizen notification compliance rate |
| Availability by time period | Same, plus availability during peak citizen demand periods |
| None | Graceful degradation level achieved during outages |
| None | Physical channel overflow rate during digital outages |
| None | Citizen communication timeliness (% within SLA) |

---

### 2.5 Configuration Management: Cross-Agency Dependencies and Political Governance

**The ITSM Assumption:** Configuration items (CIs) are owned by the organization. The CMDB maps technical dependencies between servers, applications, databases, and network components. When a CI needs to be changed or decommissioned, the owning team makes the decision based on technical and business criteria.

**The Government Reality:** In government, critical CIs are owned by different agencies with separate budgets, separate leadership, and separate political priorities. The digital identity platform is owned by the Ministry of Interior. The business registry is owned by the Ministry of Commerce. The tax system is owned by the Ministry of Finance. The health records system is owned by the Ministry of Health.

These agencies do not report to a single CIO. They have their own CIOs, their own budgets, and their own ministers. When the Ministry of Commerce wants to deprecate an API that the Ministry of Health depends on, the resolution is not a technical decision. It is a political negotiation.

#### The Cross-Agency Dependency Problem

```
Ministry of Interior                Ministry of Commerce
┌──────────────────┐                ┌──────────────────┐
│ Digital Identity  │◄──────────────│ Business Registry │
│ Platform          │  Depends on   │                  │
│                  │  identity      │ Wants to migrate │
│ Budget: $50M     │  verification  │ to new platform  │
│ Minister: A      │               │                  │
│ CIO: X           │               │ Budget: $30M     │
└──────────────────┘               │ Minister: B      │
        ▲                          │ CIO: Y           │
        │                          └──────────────────┘
        │ Depends on identity
        │ verification
┌──────────────────┐
│ Ministry of       │
│ Health            │
│                  │
│ Health Records   │
│ Budget: $80M     │
│ Minister: C      │
│ CIO: Z           │
└──────────────────┘
```

If the Ministry of Interior decides to upgrade its identity platform's API from v2 to v3, both the Ministry of Commerce and Ministry of Health must update their integrations. But neither ministry budgeted for this work. Neither minister wants to divert resources from their own priorities. The standard ITIL process of "notify downstream consumers and set a deprecation timeline" does not work when downstream consumers are autonomous government agencies.

#### GSM Configuration Management Extensions

GSM extends configuration management with a cross-agency governance layer:

**1. National Service Dependency Registry**

Beyond the standard CMDB, GSM requires a National Service Dependency Registry that maps:

- Which agencies consume which shared services
- The criticality of each dependency (critical, important, optional)
- The contractual or regulatory basis for the dependency
- The financial implications of changes (who pays for integration updates)
- The escalation path if agencies cannot agree on change timelines

**2. Cross-Agency Change Governance**

When a change affects CIs owned by multiple agencies, GSM requires:

- **Dependency Impact Notification** --- Formal notification to all consuming agencies at least 12 months before a breaking change to a shared service
- **Joint Change Planning** --- A cross-agency working group to coordinate implementation across affected agencies
- **Funding Resolution** --- A defined process for determining who pays for integration updates when a shared service changes (options: originating agency funds all updates, consuming agencies fund their own updates, central fund covers cross-agency integration costs)
- **Escalation to Governance Board** --- If agencies cannot agree on timeline or funding, escalation to a whole-of-government governance board (such as a National CIO Council or Digital Transformation Board) with authority to make binding decisions

**3. Shared Service Level Commitments**

For CIs that are consumed across agencies, GSM requires Shared Service Level Commitments that include:

- Minimum API version support period (e.g., 24 months from deprecation notice to decommission)
- Maximum breaking changes per year
- Guaranteed backward compatibility policy
- Transition support commitment (documentation, migration tooling, testing environments)
- Financial compensation framework for unplanned breaking changes

**4. Political Risk Assessment for Configuration Changes**

In addition to standard technical risk assessment, changes to shared government CIs require a political risk assessment:

- Which ministers' portfolios are affected?
- Is the change likely to generate media attention?
- Does the change affect services during an election period or budget cycle?
- Are there inter-party political dynamics that could complicate cooperation?
- Is legislative approval required for the change?

This is not cynicism. It is operational realism. Ignoring political dynamics in cross-agency configuration management leads to technically sound plans that stall indefinitely because no one has the authority or incentive to drive them forward.

---

## 3. The Government Service Management (GSM) Extension Model

### 3.1 Design Philosophy

GSM does not replace ITIL. It extends ITIL for government by:

1. **Preserving** what works --- The core discipline of service management (catalog, incident, SLA, CMDB) is retained.
2. **Extending** what is insufficient --- Problem management, knowledge management, change management, availability management, and configuration management receive government-specific extensions.
3. **Adding** what is missing --- Policy-problem interfaces, discretionary decision management, legislative change pipelines, cascading backlog planning, and cross-agency governance are entirely new practices with no ITIL equivalent.

### 3.2 From 34 ITIL Practices to 28 GSM Practices

ITIL v4 defines 34 management practices across three categories (General, Service, Technical). GSM consolidates these into 28 practices by:

- **Merging** practices that are artificially separated in the ITIL framework when applied to government (e.g., "Supplier Management" and "Relationship Management" merge into "Stakeholder Relationship Management" because government supplier relationships are inherently political and relational)
- **Extending** practices with government-specific sub-processes
- **Adding** governance practices that have no ITIL equivalent (e.g., GP-08: Performance & Value Measurement, which incorporates public value and equity measurement)

### 3.3 GSM Practice Categories

| Category | Count | Purpose |
|---|---|---|
| Governance Practices (GP) | 10 | Strategic alignment, financial management, risk, portfolio, workforce, stakeholder management |
| Service Practices (SP) | 14 | Operational service delivery, incident, problem, change, release, service desk, continuity |
| Technical Practices (TP) | 4 | Platform management, integration, security, data and analytics |

### 3.4 The Guiding Principles Difference

Where ITIL v4 provides 7 guiding principles oriented toward organizational efficiency, GSM provides 7 principles oriented toward public value:

| ITIL v4 Principle | GSM Equivalent | Key Difference |
|---|---|---|
| Focus on value | Focus on citizen outcomes and public value | Value is public good, not profit |
| Start where you are | Build on existing capabilities | Same concept, government context |
| Progress iteratively with feedback | Progress iteratively with transparency | Transparency is a democratic obligation, not optional |
| Collaborate and promote visibility | Collaborate across government | Cross-agency, not just cross-team |
| Think and work holistically | Think end-to-end service journeys | Citizen journey, not process efficiency |
| Keep it simple and practical | Keep services simple and accessible | Accessibility is a legal obligation |
| Optimize and automate | Optimize for equity and automate for efficiency | Equity before efficiency |

---

## 4. ITIL v4 to GSM Practice Mapping Table

The following table maps each ITIL v4 practice to its GSM adaptation and identifies the government-specific extensions applied.

### 4.1 General Management Practices

| # | ITIL v4 Practice | GSM Practice | GSM Code | Government-Specific Extension |
|---|---|---|---|---|
| 1 | Strategy Management | Service Strategy & Planning | GP-01 | Alignment with democratic mandates, multi-year planning across political cycles, national priority integration |
| 2 | Portfolio Management | Portfolio & Program Management | GP-04 | Cross-agency portfolio coordination, inter-ministerial dependency management, legislative program alignment |
| 3 | Architecture Management | *Absorbed into Layer 1 Shared Technology Core* | --- | Government enterprise architecture managed as a cross-cutting Layer 1 concern, not a standalone practice |
| 4 | Service Financial Management | Service Financial Management | GP-02 | TBM-based cost transparency, public value ROI (not commercial ROI), multi-year appropriations budgeting, cross-agency cost allocation |
| 5 | Workforce & Talent Management | Workforce & Talent Management | GP-06 | Civil service constraints, competitive pay challenges, 40% people investment mandate, digital skills gap programs |
| 6 | Continual Improvement | Continual Service Improvement | SP-14 | Public reporting of improvement outcomes, citizen participation in improvement identification, equity impact review |
| 7 | Measurement & Reporting | Performance & Value Measurement | GP-08 | Public value metrics, equity indices, citizen satisfaction (not customer satisfaction), democratic accountability reporting |
| 8 | Risk Management | Risk & Compliance Management | GP-03 | Regulatory compliance, privacy impact assessments, legislative risk, political risk assessment |
| 9 | Knowledge Management | Knowledge & Information Management | GP-09 | Precedent library, policy interpretation register, decision reversal protocol, FOIA-compliant documentation |
| 10 | Organizational Change Management | Organizational Change Management | GP-05 | Multi-agency change coordination, public communication requirements, political stakeholder management |
| 11 | Project Management | *Merged into GP-04 Portfolio & Program Management* | --- | Government projects governed through portfolio-level oversight, procurement integration |
| 12 | Relationship Management | Stakeholder Relationship Management | GP-07 | Citizen engagement (not customer), inter-agency collaboration, legislative stakeholder management |
| 13 | Supplier Management | Supplier & Ecosystem Management | GP-10 | Government procurement law compliance, vendor lock-in prevention, open standards mandates, sovereign capability requirements |
| 14 | Information Security Management | *Absorbed into TP-03 Security & Privacy Management* | --- | Zero Trust as default, classified information handling, cross-agency security coordination |

### 4.2 Service Management Practices

| # | ITIL v4 Practice | GSM Practice | GSM Code | Government-Specific Extension |
|---|---|---|---|---|
| 15 | Business Analysis | *Absorbed into SP-03 Service Design & Co-creation* | --- | Citizen research and co-design replace traditional business analysis |
| 16 | Service Catalog Management | Service Catalog & Offering Management | SP-01 | Legal authority linkage, eligibility criteria, life-event bundling, multi-language, accessibility compliance |
| 17 | Service Design | Service Design & Co-creation | SP-03 | Mandatory citizen co-design, accessibility-by-design, equity impact assessment |
| 18 | Service Level Management | Service Level Management | SP-02 | Citizen commitments (not negotiated SLAs), statutory service levels, equity-adjusted targets |
| 19 | Availability Management | Availability Management | SP-05 | Graceful degradation design, cascading backlog planning, citizen communication protocol, physical channel overflow management |
| 20 | Capacity & Performance Management | Capacity & Demand Management | SP-06 | Seasonal demand modeling (tax season, enrollment periods), crisis surge planning, cross-agency resource sharing |
| 21 | Service Continuity Management | Service Continuity & Resilience | SP-04 | National critical infrastructure requirements, cross-agency recovery coordination, citizen communication during emergencies |
| 22 | Monitoring & Event Management | *Absorbed into TP-01 Platform & Infrastructure Management* | --- | Integrated with national monitoring and SOC operations |
| 23 | Service Desk | Service Desk & Citizen Support | SP-11 | Multi-channel (including physical offices), accessibility requirements, language support, assisted digital for vulnerable populations |
| 24 | Incident Management | Incident & Disruption Management | SP-07 | Citizen impact prioritization, equity-weighted severity, FOIA-compliant documentation, cascading impact assessment |
| 25 | Problem Management | Problem & Root Cause Management | SP-08 | Policy-problem interface, Type A/B/C classification, policy impact reports, policy-service review governance |
| 26 | Change Enablement | Change Enablement | SP-09 | Legislative change pipeline, mandatory change advisory, compliance verification, dual-stream (internal + externally mandated) |
| 27 | Release Management | Release & Deployment Management | SP-10 | Regulatory compliance verification pre-release, cross-agency release coordination, citizen impact notification |
| 28 | Service Request Management | Service Request Fulfillment | SP-12 | Eligibility verification, once-only data retrieval, proactive service delivery (government initiates, not just citizen requests) |
| 29 | Service Validation & Testing | Service Validation & Testing | SP-13 | Accessibility testing (WCAG 2.1 AA), equity testing (diverse population scenarios), load testing for peak government periods |
| 30 | IT Asset Management | *Absorbed into Layer 1 and TP-01* | --- | Government asset management governed by procurement law and depreciation schedules |

### 4.3 Technical Management Practices

| # | ITIL v4 Practice | GSM Practice | GSM Code | Government-Specific Extension |
|---|---|---|---|---|
| 31 | Deployment Management | *Merged into SP-10 Release & Deployment Management* | --- | Combined for government operational simplicity |
| 32 | Infrastructure & Platform Management | Platform & Infrastructure Management | TP-01 | Sovereign cloud requirements, classification-based hosting, national monitoring integration |
| 33 | Software Development & Management | *Absorbed into Layer 2 process playbooks* | --- | Government development practices covered in Agile Delivery and DevOps playbooks |
| 34 | Integration & Interoperability | Integration & Interoperability Management | TP-02 | National API gateway, cross-agency data exchange, X-Road-style decentralized interoperability, open standards mandates |

---

## 5. Implementation Guidance

### 5.1 Adoption Approach

Organizations should not attempt to implement all GSM extensions simultaneously. The recommended approach:

**Phase 1 (Months 1-6): Adopt ITIL Core**
Implement the practices that transfer directly (service catalog, incident management, basic change management, CMDB). These provide immediate operational improvement with minimal government-specific complexity.

**Phase 2 (Months 7-12): Add Government Extensions**
Layer on the government-specific extensions: policy-problem interface, legislative change pipeline, citizen communication protocols. These require governance structures that take time to establish.

**Phase 3 (Months 13-18): Build Cross-Agency Governance**
Establish the National Service Dependency Registry, cross-agency change governance, and shared service level commitments. These require inter-agency agreements and political support.

**Phase 4 (Months 19+): Mature and Optimize**
Implement the precedent library, decision reversal protocol, backlog recovery planning, and advanced availability management. These represent mature capabilities that build on the foundation of the first three phases.

### 5.2 Common Pitfalls

1. **Copying ITIL directly without adaptation** --- The most common failure. Produces documentation that satisfies auditors but does not help practitioners.

2. **Over-engineering the government extensions** --- Adding bureaucratic process where ITIL works fine as-is. Not every practice needs a government extension.

3. **Ignoring political realities** --- Designing technically sound cross-agency governance that no minister will agree to. Start with voluntary cooperation and demonstrate value before seeking mandated authority.

4. **Treating all problems as technical** --- Continuing to run technical root cause analysis on policy-originated problems, producing "no defect found" reports while citizens continue to experience service failures.

5. **Measuring uptime without measuring recovery** --- Reporting 99.9% availability while physical office backlogs persist for weeks after each outage.

---

## 6. Relationship to Other GaaS Framework Components

This document is part of the broader GaaS framework and connects to:

- **[GSM Framework Specification](/gsm-framework-specification)** --- The full GSM practice definitions
- **[Layer 2 Overview](/layer2-people-process-engine/layer2-overview)** --- The operating context for these adaptations
- **[Process: GSM Implementation](/layer2-people-process-engine/processes/process-gsm-implementation)** --- Step-by-step implementation playbook
- **[GaaS Service Value System](/gaas-service-value-system)** --- How GSM practices fit into the overall value chain
- **[Layer 0: Legal & Policy Foundation](/layer0-legal-policy-foundation/layer0-overview)** --- The policy framework that drives many government-specific extensions

---

**Maintained by**: Government as a Service (GaaS) Community
**License**: Creative Commons CC-BY-SA 4.0
**Contributions**: Open to government practitioners worldwide

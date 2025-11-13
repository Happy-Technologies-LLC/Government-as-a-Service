# CRITICAL ISSUE: Tier 2 Volume 2 Split Guide

**File:** `tier2-technical-blueprint/volume-2-process-service-management-architecture.md`
**Problem:** Contains BOTH architectural theory (Layer 1) AND operational processes (Layer 2)
**Status:** Requires manual extraction and restructuring
**Priority:** HIGH - Blocks both Layer 1 and Layer 2 migration

---

## The Problem in Detail

This single 520-line file contains two distinct types of content that belong in different layers:

### Content Type A: Architectural Standards → Layer 1 (Core)
These sections define **WHAT** the GSM framework is and **HOW** services should be architected:
- GSM framework definition
- Service catalog design principles
- Service classification frameworks
- Service hierarchy models (business → technical → apps → infrastructure)

### Content Type B: Operational Processes → Layer 2 (Engine)
These sections define **HOW** to operate services day-to-day:
- Service design methodology
- Service level management (SLAs)
- Incident management procedures
- Continual improvement processes

**Why This Matters:** Layer 1 is about **architectural blueprints** (standards that don't change often). Layer 2 is about **operational playbooks** (procedures that teams execute daily).

---

## Extraction Plan

### Source File Analysis

```
volume-2-process-service-management-architecture.md (520 lines)

SECTION BREAKDOWN:

Lines 1-40: EXECUTIVE SUMMARY
├─> Destination: BOTH files (customize for each audience)
├─> Layer 1 version: Focus on "architectural framework"
└─> Layer 2 version: Focus on "operational excellence"

Lines 41-80: FOUNDATIONAL PRINCIPLE (40-40-20 PPT)
└─> Destination: BOTH files (identical content)

Lines 81-160: CHAPTER 5: GSM SERVICE MANAGEMENT FRAMEWORK
├─> 5.1: Introduction to GSM → Layer 1 (architectural standard)
├─> 5.2: Service Strategy & Catalog → Layer 1 (architectural design)
├─> 5.3: Service Portfolio Hierarchy → Layer 1 (architectural model)
└─> 5.4: Service Classification → Layer 1 (architectural framework)

Lines 161-280: CHAPTER 6: SERVICE DESIGN & CO-CREATION
├─> 6.1: Citizen-Centric Design → Layer 2 (operational methodology)
├─> 6.2: Service Blueprinting → Layer 2 (operational process)
└─> 6.3: Co-Design Workshops → Layer 2 (operational practice)

Lines 281-350: CHAPTER 7: SERVICE LEVEL MANAGEMENT
└─> 7.1-7.3: SLA framework & monitoring → Layer 2 (operational process)

Lines 351-440: CHAPTER 8: INCIDENT & DISRUPTION MANAGEMENT
└─> 8.1-8.4: Incident procedures & protocols → Layer 2 (operational process)

Lines 441-520: CHAPTER 9: CONTINUAL SERVICE IMPROVEMENT
└─> 9.1-9.3: Improvement cycles & metrics → Layer 2 (operational process)
```

---

## New File 1: Layer 1 (Architectural Standards)

**Target Location:** `layer1-core/gsm-framework/service-management-architecture.md`
**Estimated Length:** 280 lines
**Audience:** Architects, CTOs, Platform Designers

### Content Structure

```markdown
# GSM Service Management Architecture
## VOLUME: Service Management Standards

**Version:** 2.0
**Date:** October 2025
**Classification:** Public
**Target Audience:** Enterprise Architects, CTOs, Platform Designers, Service Portfolio Managers

---

## EXECUTIVE SUMMARY

This document defines the **architectural standards** for government service management (GSM).
It establishes the framework that guides how services are designed, structured, and governed -
not how they are operated day-to-day (see Layer 2 for operational processes).

**Key Outcomes:**
- Service portfolio architecture (hierarchical, cost-visible)
- Service classification framework (Tiers 1-4)
- Service catalog design standards
- GSM framework integration with technology platforms

---

## FOUNDATIONAL PRINCIPLE: SERVICE ARCHITECTURE BEFORE OPERATIONS

[Same PPT 40-40-20 content as original, but framed for architects]

---

# CHAPTER 5: THE GSM FRAMEWORK (ARCHITECTURAL VIEW)

## 5.1 GSM SERVICE VALUE SYSTEM ARCHITECTURE

[Extract lines 81-110: GSM framework theory]
- The 7 GSM Guiding Principles
- The GSM Service Value Chain (6 activities)
- The 28 GSM Management Practices (overview)
- The 4 Dimensions framework

**Key Concept:** This chapter defines WHAT the GSM framework IS, not HOW to implement it.

---

## 5.2 SERVICE PORTFOLIO ARCHITECTURE

### 5.2.1 The 5-Level Service Hierarchy

[Extract lines 210-270: Service hierarchy model]

**Level 1: Business Services** (Citizen-Facing)
**Level 2: Technical Services** (Backend)
**Level 3: Applications**
**Level 4: Infrastructure**
**Level 5: Cost Allocation** (PPT 40-40-20)

**Diagram: Hierarchical Service Portfolio**
[Include infographic-9]

**Why This Architecture Matters:**
- Enables TBM cost transparency
- Supports isolated governance by service domain
- Allows impact analysis (e.g., "What infrastructure supports Healthcare services?")

---

## 5.3 SERVICE CATALOG DESIGN STANDARDS

### 5.3.1 Two-Layer Catalog Model

[Extract lines 170-200: Service catalog template]

**Layer 1: Citizen-Facing Catalog**
- Plain language service descriptions
- Life-event organization
- Eligibility and channel information

**Layer 2: Technical Catalog**
- Service dependencies
- API endpoints
- Integration requirements

**Template Structure:**
[Include service catalog template]

---

## 5.4 SERVICE CLASSIFICATION FRAMEWORK

### 5.4.1 Four-Tier Service Model

[Extract lines 275-310: Service classification]

| Service Tier | Criteria | SLA Target | Example Services |
|--------------|----------|------------|------------------|
| **Tier 1 (Critical)** | Essential for daily life | 99.99% uptime | Digital Identity, Emergency Services |
| **Tier 2 (High-Volume)** | High transaction volume | 99.9% uptime | Tax Filing, Business Registration |
| **Tier 3 (Standard)** | Regular use | 99.5% uptime | License Renewals |
| **Tier 4 (Low-Volume)** | Infrequent use | 99% uptime | Archive Requests |

**Resource Allocation Principle:** Tier 1 services receive 40% of operational budget
despite being only 1-2% of service count.

---

## 5.5 INTEGRATION WITH TECHNOLOGY PLATFORMS (LAYER 1)

[NEW SECTION - Not in original file]

**How GSM Architecture Connects to Other Layer 1 Components:**

- **Digital Identity Platform:** Provides authentication for all services
- **API Gateway:** Exposes services via standardized APIs
- **Cloud Infrastructure:** Hosts services with tiered SLA guarantees
- **Data Governance:** Implements once-only data principles across services
- **Security Architecture:** Enforces zero-trust policies for service access

**Cross-Reference:** See other Layer 1 documents for detailed platform architectures.

---

## APPENDICES

### Appendix A: GSM Framework Quick Reference
[28 practices summary]

### Appendix B: Service Portfolio Templates
[Hierarchical service catalog templates]

### Appendix C: TBM Cost Allocation Model
[PPT 40-40-20 cost mapping to service hierarchy]

---

**Document Status:** Layer 1 Architectural Standards
**Operational Implementation:** See Layer 2/service-management/operational-processes.md
**Cross-References:**
- Layer 0: government-service-management-policy.md (GSM mandate)
- Layer 1: gsm-specification.md (detailed 28 practices)
- Layer 2: gsm-implementation-guide.md (step-by-step deployment)
- Layer 3: portfolio-cost-management.md (TBM integration)
```

---

## New File 2: Layer 2 (Operational Processes)

**Target Location:** `layer2-engine/service-management/operational-processes.md`
**Estimated Length:** 240 lines
**Audience:** Service Managers, Operations Teams, Service Desk

### Content Structure

```markdown
# GSM Service Management: Operational Processes
## VOLUME: Day-to-Day Service Operations

**Version:** 2.0
**Date:** October 2025
**Classification:** Public
**Target Audience:** Service Managers, Operations Teams, Service Desk Staff, Incident Managers

---

## EXECUTIVE SUMMARY

This document provides **operational playbooks** for day-to-day service management.
It describes HOW to execute the GSM framework defined in Layer 1 (architectural standards).

**Key Outcomes:**
- Service design and co-creation methodology
- Service level management (SLA monitoring)
- Incident and problem management protocols
- Continual service improvement processes

**Reference Architecture:** See Layer 1/gsm-framework/ for architectural standards

---

## FOUNDATIONAL PRINCIPLE: PROCESS EXCELLENCE

[Same PPT 40-40-20 content, but framed for operations teams]

---

# CHAPTER 6: SERVICE DESIGN & CO-CREATION (OPERATIONS)

## 6.1 Citizen-Centric Service Design Methodology

[Extract lines 310-340: Service design process]

**Traditional Approach (Department-Centric):**
- Organized by ministry structure
- Citizens navigate org charts
- Multiple touchpoints for single life event

**GSM Approach (Citizen-Centric):**
- Organized by life events
- Single service for complex journeys
- Once-only data principle
- Co-designed with citizens

---

## 6.2 Service Blueprinting: Where Services Actually Break

[Extract lines 330-380: Service blueprinting with failure modes]

**The Reality of Service Blueprints:**
- Happy path vs. failure scenarios
- Common breakdown points:
  - Identity verification failures (8-12%)
  - Form abandonment (28% average)
  - Payment gateway downtime
  - Manual review bottlenecks

**Service Blueprint Template:**
```
Citizen Actions → Frontstage → Backstage → Supporting Systems
```

**Example: Birth Registration Service**
[Include full blueprint with failure modes]

---

## 6.3 Co-Design with Citizens

[Extract lines 390-430: Co-design process]

**8-Week Co-Design Cycle:**

**Week 1-2: DISCOVER**
- Recruit citizen panel (15-25 people)
- Conduct interviews and shadowing
- Map "as-is" journey

**Week 3-4: DEFINE**
- Synthesize findings
- Create personas
- Define design principles

**Week 5-6: DESIGN**
- Co-design workshops
- Prototype solutions
- Test with panel

**Week 7-8: DELIVER**
- Build interactive prototype
- User acceptance testing
- Prepare for beta launch

**Post-Launch: ITERATE**
- Ongoing feedback collection
- Analytics review
- Quarterly service reviews

---

# CHAPTER 7: SERVICE LEVEL MANAGEMENT (OPERATIONS)

## 7.1 SLA Monitoring & Enforcement

[Extract lines 281-320: SLA management procedures]

**Daily Operations:**
- Real-time uptime monitoring
- Performance dashboard reviews
- Alert response protocols
- Customer satisfaction (CSAT) tracking

**Weekly Operations:**
- SLA compliance reports
- Trend analysis
- Capacity planning reviews

**Monthly Operations:**
- Service review meetings
- SLA breach analysis
- Improvement planning

---

## 7.2 SLA Templates by Service Tier

[Extract SLA framework]

| Metric | Tier 1 | Tier 2 | Tier 3 | Tier 4 |
|--------|--------|--------|--------|--------|
| **Availability** | 99.99% | 99.9% | 99.5% | 99% |
| **Response Time (p95)** | <500ms | <1s | <2s | <5s |
| **Support Hours** | 24/7 | Business hours | Business hours | Email only |
| **Incident Response** | <15 min | <1 hour | <4 hours | <24 hours |

---

# CHAPTER 8: INCIDENT & DISRUPTION MANAGEMENT

## 8.1 Incident Classification Framework

[Extract lines 440-480: Incident management procedures]

**P1 - CRITICAL (Full Service Outage)**
- **Response Time:** 15 minutes (acknowledge), 1 hour (resolve)
- **Escalation:** Immediate to Service Owner + CDO
- **Communication:** Public status update within 15 min

**P2 - HIGH (Major Degradation)**
- **Response Time:** 30 minutes (acknowledge), 4 hours (resolve)
- **Escalation:** Service Manager immediately
- **Communication:** Status update within 30 min

**P3 - MEDIUM (Partial Impact)**
- **Response Time:** 2 hours (acknowledge), 8 hours (resolve)

**P4 - LOW (Minor Issue)**
- **Response Time:** 1 business day (acknowledge), 5 days (resolve)

---

## 8.2 Incident Response Procedures

[NEW SECTION - Operational details]

**War Room Protocol (P1/P2 Incidents):**

1. **Assemble Incident Team (5 minutes)**
   - Incident Commander (Service Manager)
   - Technical Lead (Platform Engineer)
   - Communications Lead
   - Business Owner

2. **Establish Communication Channels (2 minutes)**
   - Dedicated Slack/Teams channel
   - Bridge line for voice coordination
   - Status page updates

3. **Diagnose and Triage (15 minutes)**
   - Review monitoring dashboards
   - Check recent changes (deployments)
   - Identify affected services and users

4. **Implement Fix or Workaround (30-60 minutes)**
   - Rollback recent changes (if applicable)
   - Apply emergency patches
   - Activate backup systems

5. **Restore Service and Verify (15 minutes)**
   - Monitor metrics return to normal
   - Test critical user journeys
   - Announce service restoration

6. **Post-Incident Review (Within 48 hours)**
   - Root cause analysis
   - Timeline reconstruction
   - Action items to prevent recurrence

---

# CHAPTER 9: CONTINUAL SERVICE IMPROVEMENT

## 9.1 Improvement Cycle (PDCA Model)

[Extract lines 490-520: Continual improvement]

**Plan-Do-Check-Act Cycle:**

**PLAN:**
- Identify improvement opportunities (citizen feedback, metrics, incidents)
- Define improvement objectives
- Design solution approach

**DO:**
- Implement improvement (pilot)
- Measure results
- Document learnings

**CHECK:**
- Analyze pilot results
- Compare to baseline
- Validate benefits

**ACT:**
- Scale successful improvements
- Update standards and procedures
- Start next improvement cycle

---

## 9.2 Key Performance Indicators (KPIs)

**Service Quality KPIs:**
- Uptime percentage (by tier)
- Mean Time to Restore (MTTR)
- Mean Time Between Failures (MTBF)
- Customer Satisfaction (CSAT) score

**Operational Efficiency KPIs:**
- Incident count (P1/P2 trends)
- Change success rate
- Deployment frequency
- Lead time for changes

**Value Realization KPIs:**
- Cost per transaction
- Service adoption rates
- Time savings (citizen hours)
- Economic value generated

---

## APPENDICES

### Appendix A: Incident Management Playbooks
[P1 critical incident response protocol]
[War room setup and coordination]
[Communication templates]

### Appendix B: SLA Templates
[Tier 1-4 service level templates]
[OLA (Operational Level Agreement) templates]

### Appendix C: Co-Design Toolkit
[Citizen interview scripts]
[Service blueprint templates]
[User testing protocols]

---

**Document Status:** Layer 2 Operational Processes
**Architectural Standards:** See Layer 1/gsm-framework/service-management-architecture.md
**Cross-References:**
- Layer 1: service-management-architecture.md (framework definition)
- Layer 2: change-management/change-management-guide.md (change procedures)
- Layer 2: gsm-implementation-guide.md (framework deployment)
- Layer 3: portfolio-cost-management.md (portfolio operations)
```

---

## Extraction Checklist

### Pre-Extraction Preparation
- [ ] Backup original file: `cp volume-2-process-service-management-architecture.md volume-2-BACKUP.md`
- [ ] Create git branch: `git checkout -b feature/tier2-volume2-split`
- [ ] Create Layer 1 directory: `mkdir -p layer1-core/gsm-framework/`
- [ ] Create Layer 2 directory: `mkdir -p layer2-engine/service-management/`

### Layer 1 File Creation
- [ ] Copy executive summary, customize for architects
- [ ] Extract Chapter 5 (GSM framework theory)
- [ ] Extract service portfolio hierarchy section
- [ ] Extract service catalog design section
- [ ] Extract service classification framework
- [ ] Add new integration section (how GSM connects to other Layer 1 components)
- [ ] Update all cross-references to new layer structure
- [ ] Add appendices (templates, quick reference)
- [ ] Verify frontmatter metadata
- [ ] Test markdown rendering

### Layer 2 File Creation
- [ ] Copy executive summary, customize for operations teams
- [ ] Extract Chapter 6 (Service design methodology)
- [ ] Extract Chapter 7 (SLA management)
- [ ] Extract Chapter 8 (Incident management)
- [ ] Extract Chapter 9 (Continual improvement)
- [ ] Add operational details (war room protocol, etc.)
- [ ] Update all cross-references to new layer structure
- [ ] Add appendices (playbooks, templates)
- [ ] Verify frontmatter metadata
- [ ] Test markdown rendering

### Post-Extraction Validation
- [ ] Original file line count: 520 lines
- [ ] Layer 1 file line count: ~280 lines
- [ ] Layer 2 file line count: ~240 lines
- [ ] Total: 520 lines (no content lost)
- [ ] Both files have proper frontmatter
- [ ] Both files have executive summaries
- [ ] Both files have appendices
- [ ] Both files reference each other
- [ ] All images still render
- [ ] All internal links updated
- [ ] No broken cross-references
- [ ] Run VitePress build test
- [ ] Manual review by 2nd person

---

## Common Pitfalls to Avoid

### Pitfall 1: Incomplete Cross-References
**Problem:** Forgetting to update references in OTHER files that point to Volume 2
**Solution:** Use global search to find all references to `volume-2-process-service-management-architecture.md`

**Files That Reference Volume 2:**
- `tier1-executive-playbook/executive-playbook.md`
- `tier3-playbooks/9-gsm-implementation-guide.md`
- `tier3-playbooks/10-service-portfolio-cost-management.md`
- `gsm-framework-specification.md`

**Action Required:** Update ALL of these files to point to the correct new layer file.

---

### Pitfall 2: Inconsistent Terminology
**Problem:** Layer 1 uses "architectural" language, Layer 2 uses "operational" language
**Solution:** Clearly distinguish:
- Layer 1: "framework," "architecture," "standards," "design principles"
- Layer 2: "procedures," "processes," "playbooks," "day-to-day operations"

---

### Pitfall 3: Duplicate Content
**Problem:** Accidentally including the same content in both files (e.g., GSM framework overview)
**Solution:**
- Layer 1: WHAT the GSM framework IS (definition, principles, architecture)
- Layer 2: HOW to USE the GSM framework (operations, procedures, incident response)

---

### Pitfall 4: Broken Image Links
**Problem:** Image paths breaking after file moves
**Solution:** All images are in `/public/images/` with absolute paths - should work. But verify:
```markdown
![Service Portfolio Hierarchy](/images/infographics/infographic-9-hierarchical-portfolio.png)
```

---

### Pitfall 5: Missing Context
**Problem:** Extracted sections don't make sense without original context
**Solution:** Add transitional paragraphs and explanatory notes:
```markdown
**Context:** This section defines the architectural model for service portfolios.
For operational guidance on managing services day-to-day, see Layer 2/service-management/operational-processes.md.
```

---

## Testing Protocol

### Phase 1: Local Build Test
```bash
cd "Version 1.0"
npm run docs:dev
# Navigate to both new files
# Verify rendering
# Check all links work
```

### Phase 2: Cross-Reference Test
```bash
# Search for references to old file
grep -r "volume-2-process-service-management" --include="*.md"
# Should return 0 results after all updates
```

### Phase 3: Integration Test
1. Read Layer 1 file as an architect
2. Read Layer 2 file as an operations manager
3. Verify each file is coherent and complete for its audience
4. Verify cross-references between files work

### Phase 4: Peer Review
- [ ] Have another agent review Layer 1 file
- [ ] Have another agent review Layer 2 file
- [ ] Have domain expert validate content separation
- [ ] Get stakeholder approval before finalizing

---

## Success Criteria

**Layer 1 File:**
- [ ] Defines WHAT GSM framework IS (architectural standards)
- [ ] Provides service portfolio architecture model
- [ ] Includes service catalog design standards
- [ ] Includes service classification framework
- [ ] References Layer 2 for operational guidance
- [ ] Is comprehensible to architects without operational details
- [ ] ~280 lines (matches extraction plan)

**Layer 2 File:**
- [ ] Defines HOW to operate services (operational processes)
- [ ] Provides service design methodology
- [ ] Provides incident management procedures
- [ ] Provides continual improvement processes
- [ ] References Layer 1 for architectural standards
- [ ] Is comprehensible to operations teams without architectural theory
- [ ] ~240 lines (matches extraction plan)

**Integration:**
- [ ] Both files reference each other appropriately
- [ ] No duplicate content between files
- [ ] Cross-references work correctly
- [ ] No content lost from original file
- [ ] Other files updated to reference correct new file

---

## Estimated Time

**Extraction:** 4-6 hours
**Cross-Reference Updates:** 2-3 hours
**Testing:** 2-3 hours
**Peer Review:** 1-2 hours

**Total:** 9-14 hours for this single file split

**Recommendation:** Allocate 2 full days to do this carefully and correctly. This is the most critical migration task.

---

**End of Split Guide**

**Status:** Ready for execution by assigned agent
**Priority:** HIGH - Complete before migrating other files that depend on this split

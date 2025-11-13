# GaaS Framework Architecture: Content Audit & Migration Plan

**Prepared by:** Architecture Planning Agent
**Date:** 2025-11-11
**Purpose:** Complete inventory of existing Tier 0-5 content and detailed migration plan to new Layer 0-4 architecture

---

## EXECUTIVE SUMMARY

**Current State:** The GaaS framework contains 50+ documents across 6 tiers (0-5) organized in an "a-la-carte" structure that doesn't show integration between components.

**Target State:** A holistic 5-layer operating model (Layers 0-4 + unified documentation) that presents government as an integrated system, not separate modules.

**Total Content Volume:** ~32,000+ lines of markdown content across all tiers
- **Tier 0:** 1 file (310 lines)
- **Tier 1:** 3 files (4,400+ lines)
- **Tier 2:** 5 files (5,800+ lines) - **CRITICAL: Contains both technical AND people/org content**
- **Tier 3:** 10 files (11,000+ lines)
- **Tier 4:** 26 files (8,500+ lines estimated)
- **Tier 5:** 6 files (2,000+ lines estimated)

**Migration Complexity:** MEDIUM-HIGH
- Most content moves cleanly to new layers
- **Critical separation required:** Tier 2 must be split into technical (→ Layer 1) and people/org (→ Layer 2)
- Some content serves multiple layers (cross-referencing needed)

---

## PART 1: COMPREHENSIVE CONTENT INVENTORY

### TIER 0: MANIFESTO (1 file, 310 lines)

**Location:** `/Version 1.0/docs/tier0-manifesto/`

| File | Lines | Content Summary | Quality |
|------|-------|-----------------|---------|
| `gaas-manifesto.md` | 310 | Complete manifesto: vision, crisis, opportunity, evidence, path, call to action. Includes real-world examples (Estonia, Singapore, UAE, Denmark), investment framework (40-40-20 PPT), realistic challenges, 36-month roadmap | ★★★★★ Excellent |

**Key Sections:**
- I. The Vision (Building Government Differently)
- II. The Crisis (Why This Matters)
- III. The Opportunity (Key Benefits)
- IV. The Evidence (What Works - Estonia, Singapore, UAE)
- IV-A. The Realistic Challenges
- V. The Path (36-Month Implementation Timeline)
- VI. The Call (For Heads of Government, Digital Ministers, New Governments)

**Migration Notes:**
- Primary home: **Layer 0** (Foundation - political justification)
- Also referenced in: **GSVS** (Guiding Principles section)
- **Action Required:** Update references to "Tier" terminology to "Layer"

---

### TIER 1: EXECUTIVE PLAYBOOK (3 files, 4,400+ lines)

**Location:** `/Version 1.0/docs/tier1-executive-playbook/`

| File | Lines | Content Summary | Quality |
|------|-------|-----------------|---------|
| `executive-playbook.md` | 2,300+ | Main playbook for heads of government: strategic decision framework, investment planning, organizational design, risk management | ★★★★★ Excellent |
| `fiscal-architecture.md` | 900+ | TBM-based cost allocation framework, PPT 40-40-20 investment model, service portfolio cost visibility | ★★★★★ Excellent |
| `greenfield-implementation-guide.md` | 1,800+ | Step-by-step guide for new governments: first 100 days, phased roadmap, procurement strategy, talent acquisition | ★★★★★ Excellent |

**Key Sections:**
- Strategic planning framework
- Investment allocation (40-40-20 PPT principle)
- Organizational design patterns
- Risk management frameworks
- Service portfolio governance (TBM)
- Implementation roadmaps (18-36 months)

**Migration Notes:**
- Primary home: **Layer 3** (Portfolio - strategic management guide)
- Cross-referenced by: Layer 0 (implementation), Layer 2 (organizational design)
- **Action Required:** Integrate fiscal-architecture.md principles into main executive-playbook.md

---

### TIER 2: TECHNICAL BLUEPRINTS (5 files, 5,800+ lines) ⚠️ CRITICAL SPLIT REQUIRED

**Location:** `/Version 1.0/docs/tier2-technical-blueprint/`

#### 2A. PEOPLE & ORGANIZATIONAL CONTENT (2 files, 1,900+ lines)

| File | Lines | Destination | Content Summary |
|------|-------|-------------|-----------------|
| `volume-1-people-organizational-architecture.md` | 650+ | **Layer 2 (Engine)** | Complete people/org blueprint: talent strategy, competency framework, recruitment, career pathways, skill gap analysis |
| `talent-strategy.md` | 1,250+ | **Layer 2 (Engine)** | Detailed talent acquisition, retention, training programs, digital talent career framework |

**Key Sections (Volume 1):**
- Chapter 1: Talent Strategy & Workforce Planning
- Chapter 2: Organizational Design & Governance
- Chapter 3: Change Management & Adoption
- Chapter 4: Leadership & Executive Sponsorship

**Migration Action:**
- ✅ **MOVE** these files to **Layer 2 (People & Process Engine)**
- These files are about "WHO" (people) runs the government, not "WHAT" (technology) is built
- **Integration Point:** Combine with Tier 3 implementation playbooks (the "HOW" processes)

#### 2B. TECHNICAL/PROCESS CONTENT (3 files, 3,900+ lines)

| File | Lines | Destination | Content Summary |
|------|-------|-------------|-----------------|
| `volume-2-process-service-management-architecture.md` | 520+ | **Layer 1 (Core)** for GSM framework, **Layer 2 (Engine)** for operations | GSM framework, service management, incident management, SLA framework, continual improvement |
| `volume-3-technology-platform-architecture.md` | 1,660+ | **Layer 1 (Core)** | Complete technology blueprint: digital identity, API gateway, cloud architecture, security (zero-trust), analytics/AI, DevOps |
| `IMPROVEMENTS_SUMMARY.md` | 1,720+ | **Archive/Reference** | Meta-document tracking improvements; not migrated to new structure |

**Key Sections (Volume 2):**
- Chapter 5: GSM Service Management Framework
- Chapter 6: Service Strategy (Service Catalog)
- Chapter 7: Service Design & Co-Creation
- Chapter 8: Service Level Management
- Chapter 9: Incident & Disruption Management
- Chapter 10: Continual Service Improvement

**Key Sections (Volume 3):**
- Chapter 11: Digital Identity & Access Management
- Chapter 12: API Gateway & Integration Architecture
- Chapter 13: Cloud & Infrastructure Architecture
- Chapter 14: Security Architecture (Zero-Trust)
- Chapter 15: Analytics, AI & Intelligence
- Chapter 16: DevOps & Continuous Delivery
- Chapter 17: Monitoring, Observability & Performance

**Migration Action:**
- ✅ **SPLIT** Volume 2: GSM framework theory (Layer 1), operational processes (Layer 2)
- ✅ **MOVE** Volume 3 entirely to **Layer 1 (Shared Technology Core)**
- **Critical Decision:** Volume 2 spans both architectural standards (Layer 1) and operational processes (Layer 2)

---

### TIER 3: IMPLEMENTATION PLAYBOOKS (10 files, 11,000+ lines)

**Location:** `/Version 1.0/docs/tier3-playbooks/`

| File | Lines | Destination | Content Summary |
|------|-------|-------------|-----------------|
| `1-digital-identity-implementation.md` | 1,900+ | **Layer 1 (Core)** | Step-by-step digital identity deployment: technology selection, enrollment strategy, MFA, biometrics, 18-month roadmap |
| `2-api-gateway-deployment.md` | 1,500+ | **Layer 1 (Core)** | API gateway implementation: Kong vs Apigee, REST/GraphQL standards, developer portal, sandbox |
| `3-codesign-engagement.md` | 1,000+ | **Layer 4 (Experience)** | Citizen co-design methodology: user research, service blueprinting, accessibility, feedback loops |
| `4-zero-trust-migration.md` | 1,200+ | **Layer 1 (Core)** | Zero-trust security architecture: identity verification, network segmentation, encryption, incident response |
| `5-digital-inclusion-strategy.md` | 1,300+ | **Layer 4 (Experience)** | Inclusivity framework: accessibility (WCAG), multi-channel access, digital literacy programs, rural connectivity |
| `6-cybersecurity-operations.md` | 1,100+ | **Layer 1 (Core)** | SOC operations: 24/7 monitoring, threat detection, incident response playbooks, SIEM tools |
| `7-data-governance-framework.md` | 1,600+ | **Layer 1 (Core)** | Data classification, privacy-by-design, consent management, once-only principle, data sharing agreements |
| `8-change-management-training.md` | 2,200+ | **Layer 2 (Engine)** | Change management: ADKAR model, training programs, resistance management, adoption metrics |
| `9-gsm-implementation-guide.md` | 1,300+ | **Layer 2 (Engine)** | GSM framework deployment: 28 practices, service catalog, SLA templates, incident management protocols |
| `10-service-portfolio-cost-management.md` | 1,800+ | **Layer 3 (Portfolio)** | TBM cost allocation: hierarchical service portfolio, PPT 40-40-20 tracking, CMDB integration, service domains |

**Migration Summary:**
- **Layer 1 (Core Technology):** Playbooks 1, 2, 4, 6, 7 (5 files)
- **Layer 2 (Engine Operations):** Playbooks 8, 9 (2 files)
- **Layer 3 (Portfolio Management):** Playbook 10 (1 file)
- **Layer 4 (Citizen Experience):** Playbooks 3, 5 (2 files)

**Migration Notes:**
- These are highly detailed, actionable guides (15-20 pages each)
- Excellent quality: realistic timelines, cost estimates, vendor comparisons, failure modes
- **Action Required:** Update cross-references between playbooks after migration

---

### TIER 4: POLICY & LEGAL TEMPLATES (26 files, ~8,500 lines estimated)

**Location:** `/Version 1.0/docs/tier4-policy-legal/`

| Category | File Count | Files | Destination |
|----------|------------|-------|-------------|
| **Legislative Acts** | 6 | `e-government-services-act.md`, `digital-identity-act.md`, `data-protection-privacy-act.md`, `cybersecurity-act.md`, `open-data-transparency-act.md` | **Layer 0 (Foundation)** |
| **Policy Frameworks** | 8 | `government-service-management-policy.md`, `ppt-balance-policy.md`, `cloud-first-policy.md`, `api-governance-policy.md`, etc. | **Layer 0 (Foundation)** |
| **Governance Documents** | 7 | `digital-service-standard.md`, `digital-transformation-office-charter.md`, `national-digital-strategy-template.md`, `technology-selection-framework.md`, etc. | **Layer 0 (Foundation)** |
| **Templates** | 5 | `privacy-impact-assessment-template.md`, `algorithmic-impact-assessment-template.md`, `performance-dashboard-specification.md`, `chief-digital-officer-job-description.md`, `vendor-security-requirements.md` | **Layer 0 (Foundation)** |

**Key Policy Documents:**
1. **e-government-services-act.md** - Model legislation enabling digital government
2. **digital-identity-act.md** - Legal framework for national digital identity
3. **data-protection-privacy-act.md** - GDPR-style data protection law
4. **cybersecurity-act.md** - National cybersecurity legislation
5. **open-data-transparency-act.md** - Open data and transparency requirements
6. **government-service-management-policy.md** - GSM framework policy mandate
7. **ppt-balance-policy.md** - 40-40-20 investment mandate
8. **cloud-first-policy.md** - Cloud adoption policy
9. **digital-service-standard.md** - Quality standards for digital services
10. **digital-transformation-office-charter.md** - DTO establishment mandate

**Migration Notes:**
- **ALL 26 files** migrate to **Layer 0 (Legal & Policy Foundation)**
- These provide the legal authority and policy framework for Layers 1-4 to operate
- High-quality model legislation and policy templates
- **Action Required:** Group by category (Acts, Policies, Standards, Templates) in new structure

---

### TIER 5: COMMUNITY HUB (6 files, ~2,000 lines estimated)

**Location:** `/Version 1.0/docs/tier5-community/`

| File | Lines Est. | Destination | Content Summary |
|------|-----------|-------------|-----------------|
| `community-platform-overview.md` | 400+ | **Layer 4 (Experience)** | Community engagement platform: forums, knowledge base, practitioner network |
| `certification-program.md` | 300+ | **Layer 2 (Engine)** | GaaS practitioner certification: curriculum, exam, credential levels |
| `events-program.md` | 250+ | **Layer 4 (Experience)** | Digital Nations Summit, quarterly workshops, hackathons |
| `governance-model.md` | 400+ | **Layer 0 (Foundation)** | GaaS framework governance: steering committee, working groups, contribution model |
| `implementation-registry.md` | 350+ | **Layer 4 (Experience)** | Registry of countries implementing GaaS: maturity levels, contact points, case studies |
| `TIER5-IMPROVEMENTS-SUMMARY.md` | 300+ | **Archive** | Meta-document tracking improvements |

**Migration Summary:**
- **Layer 0 (Foundation):** Governance model (1 file)
- **Layer 2 (Engine):** Certification program (1 file)
- **Layer 4 (Experience):** Community platform, events, registry (3 files)

**Migration Notes:**
- Community Hub represents the **co-design and feedback mechanism** for Layer 4 (Citizen Experience)
- Certification program trains the workforce (Layer 2)
- Governance model establishes the framework's legitimacy (Layer 0)
- **Action Required:** Integrate community features into Layer 4 "citizen participation" sections

---

### SUPPORTING CONTENT (3 top-level files)

| File | Location | Lines | Content | Destination |
|------|----------|-------|---------|-------------|
| `index.md` | `/Version 1.0/docs/` | 150+ | Homepage introducing the framework | **New homepage** (update to reflect layers) |
| `framework.md` | `/Version 1.0/docs/` | 200+ | Overview of GaaS architecture | **Replace** with new layer-based architecture doc |
| `gsm-framework-specification.md` | `/Version 1.0/docs/` | 400+ | Detailed GSM framework (28 practices, 7 principles) | **Layer 1** (Core - architectural standard) |

---

## PART 2: DETAILED MIGRATION PLAN

### PHASE 1: STRUCTURAL FOUNDATION (Priority 1)

**Objective:** Create new directory structure and migrate foundational content

#### 1.1 Create New Layer Structure

**New Directory Structure:**
```
/Version 1.0/docs/
├── layer0-foundation/           # Legal, Policy, Mandate
│   ├── legislative-acts/
│   ├── policy-frameworks/
│   ├── governance-standards/
│   └── templates/
├── layer1-core/                 # Shared Technology Platforms
│   ├── digital-identity/
│   ├── api-gateway/
│   ├── cloud-infrastructure/
│   ├── security-architecture/
│   ├── data-governance/
│   └── gsm-framework/
├── layer2-engine/               # People & Process Operations
│   ├── people-organization/
│   ├── service-management/
│   ├── change-management/
│   └── training-certification/
├── layer3-portfolio/            # Service Portfolio Management
│   ├── strategic-management/
│   ├── fiscal-architecture/
│   └── service-catalog/
├── layer4-experience/           # Citizen Experience & Co-Design
│   ├── citizen-channels/
│   ├── codesign-engagement/
│   ├── digital-inclusion/
│   └── community-hub/
└── gsvs-service-value-system/   # The Process Engine (new content)
    ├── guiding-principles.md
    ├── governance-model.md
    ├── service-value-chain.md
    └── continual-improvement.md
```

**Migration Actions:**
1. Create layer directories
2. Create subdirectories for content organization
3. Preserve `/public/` (images, icons) - no migration needed
4. Update `.vitepress/config.mts` to reflect new structure

---

#### 1.2 Migrate Layer 0 (Foundation)

**Source Content:**
- All 26 files from `tier4-policy-legal/`
- Governance model from `tier5-community/governance-model.md`
- Manifesto from `tier0-manifesto/gaas-manifesto.md`

**Migration Mapping:**

| Source | New Location | Action |
|--------|--------------|--------|
| `tier4-policy-legal/*.md` (26 files) | `layer0-foundation/` | **MOVE** all files |
| `tier4-policy-legal/e-government-services-act.md` | `layer0-foundation/legislative-acts/` | **MOVE** |
| `tier4-policy-legal/digital-identity-act.md` | `layer0-foundation/legislative-acts/` | **MOVE** |
| `tier4-policy-legal/data-protection-privacy-act.md` | `layer0-foundation/legislative-acts/` | **MOVE** |
| `tier4-policy-legal/cybersecurity-act.md` | `layer0-foundation/legislative-acts/` | **MOVE** |
| `tier4-policy-legal/open-data-transparency-act.md` | `layer0-foundation/legislative-acts/` | **MOVE** |
| `tier4-policy-legal/government-service-management-policy.md` | `layer0-foundation/policy-frameworks/` | **MOVE** |
| `tier4-policy-legal/ppt-balance-policy.md` | `layer0-foundation/policy-frameworks/` | **MOVE** |
| `tier4-policy-legal/cloud-first-policy.md` | `layer0-foundation/policy-frameworks/` | **MOVE** |
| `tier4-policy-legal/api-governance-policy.md` | `layer0-foundation/policy-frameworks/` | **MOVE** |
| `tier4-policy-legal/digital-service-standard.md` | `layer0-foundation/governance-standards/` | **MOVE** |
| `tier4-policy-legal/*-template.md` | `layer0-foundation/templates/` | **MOVE** all templates |
| `tier5-community/governance-model.md` | `layer0-foundation/governance-standards/gaas-governance-model.md` | **MOVE** |
| `tier0-manifesto/gaas-manifesto.md` | `layer0-foundation/gaas-manifesto.md` | **MOVE** |

**Post-Migration Actions:**
1. Create `layer0-foundation/README.md` - overview of Layer 0
2. Update internal cross-references (Tier → Layer terminology)
3. Create index pages for each subdirectory

---

#### 1.3 Migrate Layer 1 (Core Technology)

**Source Content:**
- `tier2-technical-blueprint/volume-3-technology-platform-architecture.md`
- **PART OF** `tier2-technical-blueprint/volume-2-process-service-management-architecture.md` (GSM framework definition only)
- `gsm-framework-specification.md` (top-level)
- 5 technical playbooks from `tier3-playbooks/` (1, 2, 4, 6, 7)

**Migration Mapping:**

| Source | New Location | Action |
|--------|--------------|--------|
| `tier2-technical-blueprint/volume-3-technology-platform-architecture.md` | `layer1-core/technology-architecture-blueprint.md` | **MOVE** |
| `gsm-framework-specification.md` | `layer1-core/gsm-framework/gsm-specification.md` | **MOVE** |
| `tier2-technical-blueprint/volume-2-process-service-management-architecture.md` | `layer1-core/gsm-framework/service-management-architecture.md` | **EXTRACT** GSM theory sections (Chapters 5-6) |
| `tier3-playbooks/1-digital-identity-implementation.md` | `layer1-core/digital-identity/implementation-guide.md` | **MOVE** |
| `tier3-playbooks/2-api-gateway-deployment.md` | `layer1-core/api-gateway/deployment-guide.md` | **MOVE** |
| `tier3-playbooks/4-zero-trust-migration.md` | `layer1-core/security-architecture/zero-trust-guide.md` | **MOVE** |
| `tier3-playbooks/6-cybersecurity-operations.md` | `layer1-core/security-architecture/soc-operations-guide.md` | **MOVE** |
| `tier3-playbooks/7-data-governance-framework.md` | `layer1-core/data-governance/governance-framework-guide.md` | **MOVE** |

**Critical Extraction:** Volume 2 (Process & Service Management)
- **Chapters 5-6** (GSM theory, service catalog) → Layer 1 (architectural standards)
- **Chapters 7-10** (operational processes) → Layer 2 (operational playbooks)
- Create two new files from this split

**Post-Migration Actions:**
1. Create `layer1-core/README.md` - overview of shared platforms
2. Create subdirectory index pages
3. Update Volume 3 to reference GSM framework in Layer 1
4. Create integration guide showing how Layer 1 components connect

---

#### 1.4 Migrate Layer 2 (Engine - People & Process)

**Source Content:**
- `tier2-technical-blueprint/volume-1-people-organizational-architecture.md`
- `tier2-technical-blueprint/talent-strategy.md`
- **PART OF** `tier2-technical-blueprint/volume-2-process-service-management-architecture.md` (operational chapters)
- 2 process playbooks from `tier3-playbooks/` (8, 9)
- Certification program from `tier5-community/certification-program.md`

**Migration Mapping:**

| Source | New Location | Action |
|--------|--------------|--------|
| `tier2-technical-blueprint/volume-1-people-organizational-architecture.md` | `layer2-engine/people-organization/organizational-architecture.md` | **MOVE** |
| `tier2-technical-blueprint/talent-strategy.md` | `layer2-engine/people-organization/talent-strategy.md` | **MOVE** |
| `tier2-technical-blueprint/volume-2-process-service-management-architecture.md` | `layer2-engine/service-management/operational-processes.md` | **EXTRACT** operational chapters (7-10) |
| `tier3-playbooks/8-change-management-training.md` | `layer2-engine/change-management/change-management-guide.md` | **MOVE** |
| `tier3-playbooks/9-gsm-implementation-guide.md` | `layer2-engine/service-management/gsm-implementation-guide.md` | **MOVE** |
| `tier5-community/certification-program.md` | `layer2-engine/training-certification/gaas-certification-program.md` | **MOVE** |

**Critical Extraction:** Volume 2 Operational Chapters
- Extract Chapters 7-10 (Service Design, SLA Management, Incident Management, Continual Improvement)
- These are the **operational "how-to"** processes vs. architectural frameworks
- Create `operational-processes.md` in Layer 2

**Post-Migration Actions:**
1. Create `layer2-engine/README.md` - overview of people & process
2. Integrate Volume 1 (people) with operational processes (process)
3. Create workforce planning templates
4. Update references to GSM framework (now in Layer 1)

---

#### 1.5 Migrate Layer 3 (Portfolio Management)

**Source Content:**
- `tier1-executive-playbook/executive-playbook.md`
- `tier1-executive-playbook/fiscal-architecture.md`
- `tier1-executive-playbook/greenfield-implementation-guide.md`
- `tier3-playbooks/10-service-portfolio-cost-management.md`

**Migration Mapping:**

| Source | New Location | Action |
|--------|--------------|--------|
| `tier1-executive-playbook/executive-playbook.md` | `layer3-portfolio/strategic-management/executive-playbook.md` | **MOVE** |
| `tier1-executive-playbook/fiscal-architecture.md` | `layer3-portfolio/fiscal-architecture/tbm-cost-allocation.md` | **MOVE** |
| `tier1-executive-playbook/greenfield-implementation-guide.md` | `layer3-portfolio/strategic-management/greenfield-guide.md` | **MOVE** |
| `tier3-playbooks/10-service-portfolio-cost-management.md` | `layer3-portfolio/fiscal-architecture/portfolio-cost-management.md` | **MOVE** |

**Post-Migration Actions:**
1. Create `layer3-portfolio/README.md` - overview of portfolio management
2. Integrate fiscal-architecture principles into executive-playbook
3. Create service portfolio templates
4. Add TBM maturity model and assessment tools

---

#### 1.6 Migrate Layer 4 (Citizen Experience)

**Source Content:**
- 2 experience playbooks from `tier3-playbooks/` (3, 5)
- 3 community files from `tier5-community/` (community platform, events, registry)

**Migration Mapping:**

| Source | New Location | Action |
|--------|--------------|--------|
| `tier3-playbooks/3-codesign-engagement.md` | `layer4-experience/codesign-engagement/codesign-methodology.md` | **MOVE** |
| `tier3-playbooks/5-digital-inclusion-strategy.md` | `layer4-experience/digital-inclusion/inclusion-strategy.md` | **MOVE** |
| `tier5-community/community-platform-overview.md` | `layer4-experience/community-hub/platform-overview.md` | **MOVE** |
| `tier5-community/events-program.md` | `layer4-experience/community-hub/events-program.md` | **MOVE** |
| `tier5-community/implementation-registry.md` | `layer4-experience/community-hub/implementation-registry.md` | **MOVE** |

**Post-Migration Actions:**
1. Create `layer4-experience/README.md` - overview of citizen experience
2. Create unified citizen journey documentation
3. Create channel strategy guide (web, mobile, physical)
4. Integrate community hub as feedback mechanism

---

### PHASE 2: CREATE NEW CONTENT (Priority 2)

#### 2.1 Create GSVS (Service Value System) Documentation

**New Content Required:**
- `gsvs-service-value-system/README.md` - Overview of GSVS
- `gsvs-service-value-system/guiding-principles.md` - Based on Tier 0 Manifesto
- `gsvs-service-value-system/governance-model.md` - How the system is governed
- `gsvs-service-value-system/service-value-chain.md` - The 5-step process flow
- `gsvs-service-value-system/continual-improvement.md` - Feedback loops

**Service Value Chain Content (NEW):**
```markdown
# The GaaS Service Value Chain

The Service Value Chain describes how public value flows through the 5-layer architecture:

1. **MANDATE** (Layer 0 Input)
   - Democratic mandate or public need identified
   - Legislative/policy authorization obtained
   - Funding secured, governance established

2. **ARCHITECT** (Layer 1 Design)
   - Solution designed using Core Platform Blueprints
   - Technology selection (identity, APIs, cloud, security)
   - Integration architecture defined

3. **BUILD/ACQUIRE** (Layer 2 Execution)
   - Agile teams build services (people + process)
   - DevOps pipelines deploy infrastructure
   - Training programs prepare workforce

4. **TRANSITION** (Layer 2 Release)
   - Testing (QA, security, accessibility, performance)
   - Change Advisory Board approval
   - Controlled rollout (canary → production)

5. **DELIVER & SUPPORT** (Layers 3 & 4 Operation)
   - Service live in Portfolio (Layer 3)
   - Citizens access via unified Experience (Layer 4)
   - Service Desk provides support (Layer 2)
   - TBM tracks costs and value

**Feedback Loop:** Performance data (Layer 3) + citizen feedback (Layer 4) → Continual Improvement → back to Mandate/Architect
```

**Actions:**
1. Create GSVS directory and files
2. Extract guiding principles from Manifesto
3. Document the 5-step value chain with layer integration
4. Create process diagrams (Mermaid.js)
5. Link to relevant layer content

---

#### 2.2 Create Master Architecture Document

**New Content Required:**
- `gaas-operating-model.md` - Master architecture document

**Structure:**
```markdown
# The GaaS Operating Model: A Complete Government Operating System

## Introduction
[What is the GaaS Operating Model - holistic, integrated system]

## The Two Views of GaaS
1. **Static View:** 5-Layer Architectural Framework (structure)
2. **Dynamic View:** Service Value System (process flow)

## Part 1: The 5-Layer Architectural Framework

### Layer 0: Legal & Policy Foundation
[Overview, purpose, key principles, link to layer0-foundation/]

### Layer 1: Shared Technology Core
[Overview, purpose, key principles, link to layer1-core/]

### Layer 2: People & Process Engine
[Overview, purpose, key principles, link to layer2-engine/]

### Layer 3: Transparent Service Portfolio
[Overview, purpose, key principles, link to layer3-portfolio/]

### Layer 4: Unified Citizen Experience
[Overview, purpose, key principles, link to layer4-experience/]

## Part 2: The Service Value System (GSVS)
[Overview, link to gsvs-service-value-system/]

### The Service Value Chain
[5-step process: Mandate → Architect → Build → Transition → Deliver]

### How the Layers Work Together
[Integration examples showing value flow]

## Part 3: Implementation Pathways
[Greenfield, Transformation, Acceleration - link to Layer 3 guides]

## Part 4: Success Metrics
[How to measure success across all 5 layers]
```

**Actions:**
1. Create master architecture doc
2. Create integration diagrams
3. Create layer interaction examples
4. Link to all layer directories

---

### PHASE 3: UPDATE NAVIGATION & REFERENCES (Priority 3)

#### 3.1 Update VitePress Configuration

**File:** `/Version 1.0/docs/.vitepress/config.mts`

**Current Sidebar:**
```typescript
sidebar: [
  { text: 'Tier 0: Manifesto', link: '/tier0-manifesto/...' },
  { text: 'Tier 1: Executive Playbook', link: '/tier1-executive-playbook/...' },
  { text: 'Tier 2: Technical Blueprints', link: '/tier2-technical-blueprint/...' },
  { text: 'Tier 3: Implementation Playbooks', link: '/tier3-playbooks/...' },
  { text: 'Tier 4: Policy & Legal', link: '/tier4-policy-legal/...' },
  { text: 'Tier 5: Community Hub', link: '/tier5-community/...' }
]
```

**New Sidebar:**
```typescript
sidebar: [
  {
    text: 'GaaS Operating Model',
    link: '/gaas-operating-model',
    collapsed: false
  },
  {
    text: 'Layer 0: Legal & Policy Foundation',
    link: '/layer0-foundation/',
    collapsed: true,
    items: [
      { text: 'GaaS Manifesto', link: '/layer0-foundation/gaas-manifesto' },
      { text: 'Legislative Acts', link: '/layer0-foundation/legislative-acts/' },
      { text: 'Policy Frameworks', link: '/layer0-foundation/policy-frameworks/' },
      { text: 'Governance Standards', link: '/layer0-foundation/governance-standards/' },
      { text: 'Templates', link: '/layer0-foundation/templates/' }
    ]
  },
  {
    text: 'Layer 1: Shared Technology Core',
    link: '/layer1-core/',
    collapsed: true,
    items: [
      { text: 'Digital Identity', link: '/layer1-core/digital-identity/' },
      { text: 'API Gateway', link: '/layer1-core/api-gateway/' },
      { text: 'Cloud Infrastructure', link: '/layer1-core/cloud-infrastructure/' },
      { text: 'Security Architecture', link: '/layer1-core/security-architecture/' },
      { text: 'Data Governance', link: '/layer1-core/data-governance/' },
      { text: 'GSM Framework', link: '/layer1-core/gsm-framework/' }
    ]
  },
  {
    text: 'Layer 2: People & Process Engine',
    link: '/layer2-engine/',
    collapsed: true,
    items: [
      { text: 'People & Organization', link: '/layer2-engine/people-organization/' },
      { text: 'Service Management', link: '/layer2-engine/service-management/' },
      { text: 'Change Management', link: '/layer2-engine/change-management/' },
      { text: 'Training & Certification', link: '/layer2-engine/training-certification/' }
    ]
  },
  {
    text: 'Layer 3: Transparent Service Portfolio',
    link: '/layer3-portfolio/',
    collapsed: true,
    items: [
      { text: 'Strategic Management', link: '/layer3-portfolio/strategic-management/' },
      { text: 'Fiscal Architecture (TBM)', link: '/layer3-portfolio/fiscal-architecture/' },
      { text: 'Service Catalog', link: '/layer3-portfolio/service-catalog/' }
    ]
  },
  {
    text: 'Layer 4: Unified Citizen Experience',
    link: '/layer4-experience/',
    collapsed: true,
    items: [
      { text: 'Citizen Channels', link: '/layer4-experience/citizen-channels/' },
      { text: 'Co-Design & Engagement', link: '/layer4-experience/codesign-engagement/' },
      { text: 'Digital Inclusion', link: '/layer4-experience/digital-inclusion/' },
      { text: 'Community Hub', link: '/layer4-experience/community-hub/' }
    ]
  },
  {
    text: 'Service Value System (GSVS)',
    link: '/gsvs-service-value-system/',
    collapsed: true,
    items: [
      { text: 'Guiding Principles', link: '/gsvs-service-value-system/guiding-principles' },
      { text: 'Governance Model', link: '/gsvs-service-value-system/governance-model' },
      { text: 'Service Value Chain', link: '/gsvs-service-value-system/service-value-chain' },
      { text: 'Continual Improvement', link: '/gsvs-service-value-system/continual-improvement' }
    ]
  }
]
```

**Actions:**
1. Update sidebar configuration
2. Update base paths and links
3. Test navigation after migration

---

#### 3.2 Update Internal Cross-References

**Global Find & Replace Operations:**

| Find | Replace | Files |
|------|---------|-------|
| `tier0-manifesto/` | `layer0-foundation/` | All markdown files |
| `tier1-executive-playbook/` | `layer3-portfolio/strategic-management/` | All markdown files |
| `tier2-technical-blueprint/` | `layer1-core/` or `layer2-engine/` | All markdown files (context-dependent) |
| `tier3-playbooks/` | Various layer directories | All markdown files (mapping required) |
| `tier4-policy-legal/` | `layer0-foundation/` | All markdown files |
| `tier5-community/` | `layer4-experience/community-hub/` | All markdown files |
| `Tier 0` | `Layer 0` | All markdown files |
| `Tier 1` | `Layer 3` | All markdown files (portfolio management) |
| `Tier 2` | `Layer 1` (tech) or `Layer 2` (people/process) | All markdown files (context-dependent) |
| `Tier 3` | Various layers | All markdown files (mapping required) |
| `Tier 4` | `Layer 0` | All markdown files |
| `Tier 5` | `Layer 4` | All markdown files |

**Manual Review Required:**
- Any reference to "Tier 2" must be reviewed for context (technical vs. people/org)
- Any reference to "Tier 3" must be mapped to correct new layer
- Cross-references between playbooks need verification
- Integration diagrams and process flows need updating

---

### PHASE 4: QUALITY ASSURANCE & VALIDATION (Priority 4)

#### 4.1 Content Validation Checklist

**For Each Migrated File:**
- [ ] File moved to correct layer directory
- [ ] Frontmatter updated (if present)
- [ ] Internal links updated (tier → layer)
- [ ] Cross-references to other files updated
- [ ] Image paths verified (still pointing to /public/)
- [ ] Code blocks render correctly
- [ ] Mermaid diagrams render correctly
- [ ] Tables formatted properly
- [ ] No broken links

**For Each Layer:**
- [ ] README.md created with overview
- [ ] Subdirectory index pages created
- [ ] Navigation links in sidebar working
- [ ] Layer introduction explains purpose and principles
- [ ] Integration points with other layers documented
- [ ] All expected files present

**Overall Framework:**
- [ ] Master architecture document (`gaas-operating-model.md`) complete
- [ ] GSVS documentation complete
- [ ] All 5 layers documented
- [ ] Service Value Chain explained
- [ ] Integration examples provided
- [ ] Implementation pathways documented
- [ ] Success metrics defined

---

#### 4.2 Build & Test

**Actions:**
1. Run VitePress dev server: `npm run docs:dev`
2. Navigate through all pages manually
3. Test all internal links
4. Verify all images load
5. Test search functionality
6. Check responsive design (mobile, tablet)
7. Validate all code blocks and diagrams
8. Run build: `npm run docs:build`
9. Test production build: `npm run docs:preview`

**Error Tracking:**
- Create `MIGRATION_ERRORS.md` log
- Document any broken links
- Document any missing content
- Document any formatting issues
- Assign to appropriate agent for fixing

---

## PART 3: CRITICAL ISSUES & DEPENDENCIES

### Issue 1: Tier 2 Volume 2 Split (HIGH PRIORITY)

**Problem:** `volume-2-process-service-management-architecture.md` contains both:
- **Architectural standards** (GSM framework theory) → belongs in Layer 1
- **Operational processes** (incident management, SLA management) → belongs in Layer 2

**Impact:** This file must be manually split into two new files

**Proposed Solution:**
- **New File 1:** `layer1-core/gsm-framework/service-management-architecture.md`
  - Chapters 5-6: GSM framework definition, service catalog design
  - ~250 lines
- **New File 2:** `layer2-engine/service-management/operational-processes.md`
  - Chapters 7-10: Service design, SLA management, incident management, continual improvement
  - ~270 lines

**Action Required:** Manual content extraction and restructuring

---

### Issue 2: Cross-Layer Integration Documentation (MEDIUM PRIORITY)

**Problem:** Current tier structure doesn't explain how components integrate. New layer structure requires explicit integration documentation.

**Missing Content:**
- How Layer 0 policies enable Layer 1 platforms
- How Layer 1 platforms support Layer 2 operations
- How Layer 2 operations deliver Layer 3 portfolio
- How Layer 3 portfolio is accessed via Layer 4 experience
- How GSVS orchestrates all layers

**Proposed Solution:**
Create integration guides:
- `layer0-foundation/integration-with-core-platforms.md`
- `layer1-core/integration-with-operations.md`
- `layer2-engine/integration-with-portfolio.md`
- `layer3-portfolio/integration-with-experience.md`
- `gsvs-service-value-system/layer-integration-examples.md`

**Action Required:** New content creation (15-20 pages total)

---

### Issue 3: Terminology Consistency (HIGH PRIORITY)

**Problem:** Documents use inconsistent terminology:
- "Tier" vs. "Layer"
- "Service Management" vs. "GSM" vs. "ITIL"
- "Digital Identity" vs. "National ID" vs. "eID"
- "API Gateway" vs. "Integration Platform"

**Impact:** Confusing for readers, undermines professional quality

**Proposed Solution:**
Create terminology standardization guide:
- `TERMINOLOGY_STANDARDS.md`
- Define canonical terms for all major concepts
- Create find/replace mapping for migration
- Add glossary to master architecture document

**Action Required:** Review all documents post-migration for consistency

---

### Issue 4: Image and Infographic Migration (MEDIUM PRIORITY)

**Problem:** Documents reference infographics in `/public/images/infographics/`:
- `infographic-1-legacy-vs-digital.png`
- `infographic-6-gsm-framework.png`
- `infographic-9-hierarchical-portfolio.png`
- etc.

**Impact:** Image paths may break if documents move

**Current Paths:**
```markdown
![Legacy vs Digital](/images/infographics/infographic-1-legacy-vs-digital.png)
```

**Proposed Solution:**
- Keep images in `/public/` (no migration needed)
- All paths are absolute from root (should work after migration)
- Verify image paths in all migrated documents

**Action Required:** Test image loading after migration

---

### Issue 5: Playbook Cross-References (HIGH PRIORITY)

**Problem:** Tier 3 playbooks extensively cross-reference each other:
- Playbook 1 (Digital Identity) references Playbook 4 (Zero-Trust)
- Playbook 9 (GSM Implementation) references Tier 2 Volume 2
- Playbook 10 (Service Portfolio) references Tier 1 Executive Playbook

**Impact:** All cross-references will break after migration

**Proposed Solution:**
1. Create cross-reference mapping spreadsheet
2. Update all playbook references during migration
3. Add "Related Guides" section to each playbook
4. Create integration guide showing playbook dependencies

**Action Required:** Manual review and update of all cross-references

---

### Issue 6: VitePress Configuration Complexity (LOW PRIORITY)

**Problem:** Current `.vitepress/config.mts` has complex sidebar configuration with tier-based paths

**Impact:** Configuration file needs complete rewrite

**Proposed Solution:**
- Backup current config
- Rewrite sidebar configuration for layer structure
- Test thoroughly before deployment
- Create configuration documentation

**Action Required:** Update VitePress config after migration

---

## PART 4: SUCCESS METRICS & VALIDATION

### Migration Success Criteria

**Structural Success:**
- [ ] All 5 layers have dedicated directories
- [ ] All 50+ files successfully migrated
- [ ] No orphaned files (everything has a home)
- [ ] Directory structure matches blueprint
- [ ] GSVS documentation created

**Content Success:**
- [ ] Zero broken internal links
- [ ] All images load correctly
- [ ] All cross-references updated
- [ ] Terminology consistent (tier → layer)
- [ ] All integration points documented

**Functional Success:**
- [ ] VitePress builds without errors
- [ ] Navigation works (all sidebar links)
- [ ] Search functionality works
- [ ] All pages render correctly
- [ ] Mobile responsive design works

**Quality Success:**
- [ ] Master architecture document complete
- [ ] Each layer has clear introduction
- [ ] Integration guides created
- [ ] Service Value Chain documented
- [ ] Implementation pathways clear

---

### Post-Migration Validation Process

**Phase 1: Automated Checks**
1. Run `npm run docs:build` - must succeed with 0 errors
2. Run link checker tool to find broken links
3. Run image validator to verify all images load
4. Check for orphaned files (files not linked from anywhere)

**Phase 2: Manual Review**
1. Navigate through entire site systematically
2. Verify each layer introduction is clear
3. Verify cross-references make sense
4. Verify integration documentation is complete
5. Verify GSVS Service Value Chain is understandable

**Phase 3: User Testing**
1. Ask 3-5 stakeholders to review new structure
2. Collect feedback on navigability
3. Identify any confusion points
4. Document improvements needed

---

## PART 5: TIMELINE & RESOURCE ESTIMATE

### Estimated Effort

**Phase 1: Structural Foundation (40 hours)**
- Directory creation: 2 hours
- Layer 0 migration: 6 hours
- Layer 1 migration: 10 hours (includes Volume 2 split)
- Layer 2 migration: 8 hours
- Layer 3 migration: 4 hours
- Layer 4 migration: 4 hours
- Configuration updates: 6 hours

**Phase 2: New Content Creation (30 hours)**
- GSVS documentation: 15 hours
- Master architecture document: 10 hours
- Integration guides: 5 hours

**Phase 3: Navigation & References (20 hours)**
- VitePress config rewrite: 6 hours
- Internal link updates: 10 hours
- Cross-reference verification: 4 hours

**Phase 4: Quality Assurance (25 hours)**
- Automated testing: 5 hours
- Manual review: 10 hours
- Error fixing: 8 hours
- User testing: 2 hours

**Total Estimated Effort:** 115 hours (~3 weeks for 1 person, ~1.5 weeks for 2 people)

---

### Recommended Execution Approach

**Option 1: Sequential (Lower Risk)**
1. Complete Phase 1 (all migrations) - Week 1
2. Complete Phase 2 (new content) - Week 2
3. Complete Phases 3-4 (QA) - Week 3

**Option 2: Parallel (Faster, Higher Risk)**
1. Two agents work simultaneously:
   - Agent A: Phases 1.1-1.3 (Layers 0-1)
   - Agent B: Phases 1.4-1.6 (Layers 2-4)
2. Converge for Phase 2 (new content)
3. Joint QA in Phases 3-4

**Recommendation:** **Option 1 (Sequential)** for first migration to ensure quality. Option 2 for future updates.

---

## PART 6: ROLLBACK PLAN

### Backup Strategy

**Before Starting Migration:**
1. Create git branch: `feature/layer-architecture-migration`
2. Commit current state: "Pre-migration baseline"
3. Tag current commit: `v1.0-tier-architecture`
4. Create full backup: `tar -czf gaas-framework-backup-$(date +%Y%m%d).tar.gz Version\ 1.0/`

**During Migration:**
1. Commit after each phase completion
2. Tag major milestones
3. Keep old tier directories until validation complete

**Rollback Triggers:**
- Critical errors preventing build
- Loss of content or functionality
- Stakeholder rejection of new structure
- Timeline exceeds 5 weeks

**Rollback Process:**
1. Stop work immediately
2. Git checkout to last stable commit
3. Restore from backup if needed
4. Document what went wrong
5. Create revised migration plan

---

## CONCLUSION

This content audit and migration plan provides a complete roadmap for transforming the GaaS framework from a tier-based to a layer-based architecture. The plan is comprehensive, addresses all critical issues, and includes validation criteria for success.

**Key Takeaways:**
1. **Total Content:** 50+ files, 32,000+ lines across 6 tiers
2. **Critical Issue:** Tier 2 Volume 2 must be manually split (architectural vs. operational)
3. **New Content Required:** GSVS documentation and master architecture document
4. **Estimated Effort:** 115 hours (~3 weeks)
5. **Success Criteria:** Zero broken links, complete integration documentation, clear navigation

**Next Steps:**
1. Review and approve this plan
2. Assign agents to phases
3. Create git branch for migration
4. Begin Phase 1.1 (directory structure creation)

---

**Document Status:** COMPLETE - Ready for execution
**Prepared by:** Architecture Planning Agent
**Date:** 2025-11-11

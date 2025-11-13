# GaaS Framework Migration: Visual Content Map

**Purpose:** Visual representation of how content flows from old Tier structure to new Layer structure

---

## High-Level Content Flow

```
OLD TIERS (0-5)                    NEW LAYERS (0-4)

┌─────────────────┐                ┌─────────────────────────────────┐
│   TIER 0        │                │   LAYER 0: Foundation           │
│   Manifesto     │───────────────>│   Legal & Policy                │
│   (1 file)      │                │   - Manifesto                   │
└─────────────────┘                │   - 26 Policy/Legal Templates   │
                                   │   - Governance Model            │
┌─────────────────┐                └─────────────────────────────────┘
│   TIER 4        │                              │
│   Policy/Legal  │───────────────>              │
│   (26 files)    │                              │
└─────────────────┘                              │
                                                 ▼
┌─────────────────┐                ┌─────────────────────────────────┐
│   TIER 2 Vol 3  │                │   LAYER 1: Core Technology      │
│   Technology    │───────────────>│   Shared Platforms              │
│   (1 file)      │                │   - Digital Identity            │
└─────────────────┘                │   - API Gateway                 │
                                   │   - Cloud Infrastructure        │
┌─────────────────┐                │   - Security (Zero-Trust)       │
│   TIER 3        │                │   - Data Governance             │
│   Playbooks     │───────────────>│   - GSM Framework               │
│   (5 tech)      │     SPLIT      └─────────────────────────────────┘
└─────────────────┘                              │
        │                                        │
        │                                        ▼
        │                          ┌─────────────────────────────────┐
        │                          │   LAYER 2: People & Process     │
        │                          │   Operations Engine             │
        │                          │   - People & Organization       │
┌─────────────────┐                │   - Service Management Ops      │
│   TIER 2 Vol 1  │───────────────>│   - Change Management           │
│   People/Org    │                │   - Training & Certification    │
│   (2 files)     │                └─────────────────────────────────┘
└─────────────────┘                              │
                                                 │
┌─────────────────┐                              ▼
│   TIER 2 Vol 2  │                ┌─────────────────────────────────┐
│   Process/GSM   │──SPLIT────────>│   LAYER 3: Service Portfolio    │
│   (1 file)      │   │            │   Strategic Management          │
└─────────────────┘   │            │   - Executive Playbook          │
                      │            │   - Fiscal Architecture (TBM)   │
┌─────────────────┐   │            │   - Portfolio Cost Management   │
│   TIER 3        │   │            └─────────────────────────────────┘
│   Playbooks     │───┤                          │
│   (2 process)   │   │                          │
└─────────────────┘   │                          ▼
                      │            ┌─────────────────────────────────┐
┌─────────────────┐   │            │   LAYER 4: Citizen Experience   │
│   TIER 1        │   │            │   Unified Channels              │
│   Executive     │───┴───────────>│   - Citizen Portals             │
│   (3 files)     │                │   - Co-Design Engagement        │
└─────────────────┘                │   - Digital Inclusion           │
                                   │   - Community Hub               │
┌─────────────────┐                └─────────────────────────────────┘
│   TIER 3        │                              │
│   Playbooks     │───────────────>              │
│   (2 UX)        │                              │
└─────────────────┘                              │
                                                 ▼
┌─────────────────┐                ┌─────────────────────────────────┐
│   TIER 5        │                │   GSVS: Service Value System    │
│   Community     │───────────────>│   Process Engine (NEW)          │
│   (6 files)     │      SPLIT     │   - Guiding Principles          │
└─────────────────┘                │   - Governance Model            │
                                   │   - Service Value Chain         │
                                   │   - Continual Improvement       │
                                   └─────────────────────────────────┘
```

---

## Detailed File Migration Map

### TIER 0 → LAYER 0 (Foundation)

```
tier0-manifesto/
└── gaas-manifesto.md ──────────────> layer0-foundation/
                                      └── gaas-manifesto.md
```

---

### TIER 1 → LAYER 3 (Portfolio)

```
tier1-executive-playbook/
├── executive-playbook.md ──────────> layer3-portfolio/strategic-management/
│                                     └── executive-playbook.md
├── fiscal-architecture.md ─────────> layer3-portfolio/fiscal-architecture/
│                                     └── tbm-cost-allocation.md
└── greenfield-implementation-guide.md ─> layer3-portfolio/strategic-management/
                                      └── greenfield-guide.md
```

---

### TIER 2 → LAYERS 1 & 2 (Complex Split)

```
tier2-technical-blueprint/

┌─────────────────────────────────────────────────────────┐
│ volume-1-people-organizational-architecture.md          │
│ talent-strategy.md                                      │
│                                                         │
│ ──────────────────────────────────────────────────────> │
│                                                         │
│ layer2-engine/people-organization/                      │
│ ├── organizational-architecture.md                      │
│ └── talent-strategy.md                                  │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ volume-2-process-service-management-architecture.md     │
│                                                         │
│ SPLIT INTO TWO FILES:                                   │
│                                                         │
│ Chapters 5-6 (GSM Theory) ─────────────────────────────>│
│ layer1-core/gsm-framework/                              │
│ └── service-management-architecture.md                  │
│                                                         │
│ Chapters 7-10 (Operations) ────────────────────────────>│
│ layer2-engine/service-management/                       │
│ └── operational-processes.md                            │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│ volume-3-technology-platform-architecture.md            │
│                                                         │
│ ──────────────────────────────────────────────────────> │
│                                                         │
│ layer1-core/                                            │
│ └── technology-architecture-blueprint.md                │
└─────────────────────────────────────────────────────────┘
```

---

### TIER 3 → LAYERS 1, 2, 3, 4 (Distributed)

```
tier3-playbooks/

TO LAYER 1 (Core Technology):
├── 1-digital-identity-implementation.md ────> layer1-core/digital-identity/
│                                              └── implementation-guide.md
├── 2-api-gateway-deployment.md ─────────────> layer1-core/api-gateway/
│                                              └── deployment-guide.md
├── 4-zero-trust-migration.md ───────────────> layer1-core/security-architecture/
│                                              └── zero-trust-guide.md
├── 6-cybersecurity-operations.md ───────────> layer1-core/security-architecture/
│                                              └── soc-operations-guide.md
└── 7-data-governance-framework.md ──────────> layer1-core/data-governance/
                                               └── governance-framework-guide.md

TO LAYER 2 (People & Process):
├── 8-change-management-training.md ─────────> layer2-engine/change-management/
│                                              └── change-management-guide.md
└── 9-gsm-implementation-guide.md ───────────> layer2-engine/service-management/
                                               └── gsm-implementation-guide.md

TO LAYER 3 (Portfolio):
└── 10-service-portfolio-cost-management.md ─> layer3-portfolio/fiscal-architecture/
                                               └── portfolio-cost-management.md

TO LAYER 4 (Experience):
├── 3-codesign-engagement.md ────────────────> layer4-experience/codesign-engagement/
│                                              └── codesign-methodology.md
└── 5-digital-inclusion-strategy.md ─────────> layer4-experience/digital-inclusion/
                                               └── inclusion-strategy.md
```

---

### TIER 4 → LAYER 0 (Foundation)

```
tier4-policy-legal/
├── [26 policy/legal files] ────────────────> layer0-foundation/
│                                             ├── legislative-acts/ (6 files)
│                                             ├── policy-frameworks/ (8 files)
│                                             ├── governance-standards/ (7 files)
│                                             └── templates/ (5 files)
│
└── Complete file list in full plan
```

---

### TIER 5 → LAYERS 0, 2, 4 (Distributed)

```
tier5-community/

TO LAYER 0 (Foundation):
└── governance-model.md ─────────────────────> layer0-foundation/governance-standards/
                                               └── gaas-governance-model.md

TO LAYER 2 (Engine):
└── certification-program.md ────────────────> layer2-engine/training-certification/
                                               └── gaas-certification-program.md

TO LAYER 4 (Experience):
├── community-platform-overview.md ──────────> layer4-experience/community-hub/
│                                              └── platform-overview.md
├── events-program.md ───────────────────────> layer4-experience/community-hub/
│                                              └── events-program.md
└── implementation-registry.md ──────────────> layer4-experience/community-hub/
                                               └── implementation-registry.md
```

---

## New Content Creation Map

```
NEW CONTENT (Does not exist in old structure):

gsvs-service-value-system/
├── README.md ──────────────────────────────> CREATE NEW
├── guiding-principles.md ──────────────────> EXTRACT from Tier 0 Manifesto
├── governance-model.md ────────────────────> SYNTHESIZE from Tiers 0, 1, 4
├── service-value-chain.md ─────────────────> CREATE NEW (describe 5-step process)
└── continual-improvement.md ───────────────> SYNTHESIZE from Tiers 3, 5

gaas-operating-model.md ────────────────────> CREATE NEW (master architecture doc)
```

---

## Cross-Reference Update Map

**Documents with Heavy Cross-References:**

```
Executive Playbook (Layer 3)
├── References Tier 2 Vol 3 ───────────> UPDATE to Layer 1/technology-architecture
├── References Tier 3 Playbook 10 ─────> UPDATE to Layer 3/portfolio-cost-management
└── References Tier 4 Policies ────────> UPDATE to Layer 0/policy-frameworks

Volume 3 Technology (Layer 1)
├── References Tier 3 Playbook 1 ──────> UPDATE to Layer 1/digital-identity
├── References Tier 3 Playbook 4 ──────> UPDATE to Layer 1/security-architecture
└── References Tier 2 Vol 2 ───────────> UPDATE to Layer 1/gsm-framework

Playbook 1 (Digital Identity)
├── References Tier 2 Vol 3 ───────────> UPDATE to Layer 1/technology-architecture
├── References Playbook 4 ─────────────> UPDATE to Layer 1/security-architecture
└── References Tier 4 Digital ID Act ──> UPDATE to Layer 0/legislative-acts

Playbook 9 (GSM Implementation)
├── References Tier 2 Vol 2 ───────────> UPDATE to Layer 1/gsm-framework
├── References Tier 3 Playbook 8 ──────> UPDATE to Layer 2/change-management
└── References Tier 1 Exec Playbook ───> UPDATE to Layer 3/strategic-management

All Playbooks
└── Reference "See Tier X" ────────────> UPDATE to "See Layer X"
```

---

## Image Path Validation Map

**Images should remain in `/public/images/` - No migration needed**

```
Current paths (should work after migration):
/images/infographics/infographic-1-legacy-vs-digital.png ✓
/images/infographics/infographic-2-world-success-map.png ✓
/images/infographics/infographic-3-implementation-timeline.png ✓
/images/infographics/infographic-4-fourth-model.png ✓
/images/infographics/infographic-5-ppt-framework.png ✓
/images/infographics/infographic-6-gsm-framework.png ✓
/images/infographics/infographic-7-gsm-vs-itsm.png ✓
/images/infographics/infographic-8-country-case-studies.png ✓
/images/infographics/infographic-9-hierarchical-portfolio.png ✓
/images/logos/logo.png ✓
/images/logos/emblem.svg ✓

ACTION REQUIRED: Verify all image links after migration
```

---

## VitePress Sidebar Migration Map

```
OLD SIDEBAR:                          NEW SIDEBAR:

sidebar: [                            sidebar: [
  {                                     {
    text: 'Tier 0: Manifesto'            text: 'GaaS Operating Model',
    link: '/tier0-manifesto'             link: '/gaas-operating-model'
  },                                    },
  {                                     {
    text: 'Tier 1: Exec Playbook'        text: 'Layer 0: Foundation',
    link: '/tier1-executive-playbook'    link: '/layer0-foundation/',
  },                                      items: [...]
  {                                     },
    text: 'Tier 2: Tech Blueprints'     {
    link: '/tier2-technical-blueprint'   text: 'Layer 1: Core Technology',
  },                                      link: '/layer1-core/',
  {                                       items: [...]
    text: 'Tier 3: Playbooks'           },
    link: '/tier3-playbooks'            {
  },                                      text: 'Layer 2: People & Process',
  {                                       link: '/layer2-engine/',
    text: 'Tier 4: Policy/Legal'         items: [...]
    link: '/tier4-policy-legal'         },
  },                                    {
  {                                       text: 'Layer 3: Service Portfolio',
    text: 'Tier 5: Community'            link: '/layer3-portfolio/',
    link: '/tier5-community'              items: [...]
  }                                     },
]                                       {
                                          text: 'Layer 4: Citizen Experience',
                                          link: '/layer4-experience/',
                                          items: [...]
                                        },
                                        {
                                          text: 'Service Value System (GSVS)',
                                          link: '/gsvs-service-value-system/',
                                          items: [...]
                                        }
                                      ]
```

---

## Integration Points Map

**How Layers Connect (for new documentation):**

```
Layer 0 (Foundation)
    │
    │ [Legal Authority]
    │ Laws enable → Digital Identity Act
    │                Data Protection Act
    │                E-Government Services Act
    ▼
Layer 1 (Core Technology)
    │
    │ [Technology Platforms]
    │ Platforms include → Digital Identity System
    │                     API Gateway
    │                     Cloud Infrastructure
    ▼
Layer 2 (People & Process)
    │
    │ [Operations]
    │ Teams operate → Service Management (GSM)
    │                 Change Management
    │                 Incident Response
    ▼
Layer 3 (Service Portfolio)
    │
    │ [Service Delivery]
    │ Portfolio contains → Tax Filing Service
    │                      Business Registration
    │                      Healthcare Access
    ▼
Layer 4 (Citizen Experience)
    │
    │ [Access Channels]
    │ Citizens access via → National Portal (GOV.XX)
    │                       Mobile App
    │                       Physical Offices
    │
    └─────────────────────> [Feedback Loop] ──────┐
                                                   │
                                                   ▼
                            GSVS: Continual Improvement
                            (Feeds back to all layers)
```

---

## File Count Summary

```
OLD STRUCTURE:                        NEW STRUCTURE:
Tier 0: 1 file                        Layer 0: 28 files
Tier 1: 3 files                       Layer 1: 12 files
Tier 2: 5 files                       Layer 2: 10 files
Tier 3: 10 files                      Layer 3: 4 files
Tier 4: 26 files                      Layer 4: 5 files
Tier 5: 6 files                       GSVS: 5 files (NEW)
                                      Master Doc: 1 file (NEW)
─────────────────                     ─────────────────
TOTAL: 51 files                       TOTAL: 65 files (+14 new/split)
```

---

## Critical Path

**The migration cannot proceed without completing these steps in order:**

```
1. Create directory structure
   └─> BLOCKS: All file migrations

2. Migrate Layer 0 (Foundation)
   └─> ENABLES: Layer 1 references to policies

3. Migrate Layer 1 (Core Technology)
   └─> REQUIRES: Tier 2 Vol 2 SPLIT (architectural vs. operational)
   └─> ENABLES: Layer 2 references to platforms

4. Migrate Layer 2 (People & Process)
   └─> REQUIRES: Layer 1 complete (references to GSM framework)
   └─> ENABLES: Layer 3 references to operations

5. Migrate Layer 3 (Portfolio)
   └─> ENABLES: Layer 4 references to service catalog

6. Migrate Layer 4 (Experience)
   └─> REQUIRES: All other layers complete (references entire stack)

7. Create GSVS documentation
   └─> REQUIRES: All layers complete (describes integration)

8. Update VitePress configuration
   └─> REQUIRES: All files in final locations

9. Update cross-references
   └─> REQUIRES: VitePress config complete (know final URLs)

10. Quality assurance
    └─> REQUIRES: Everything else complete
```

---

**End of Visual Migration Map**

**Next:** Review this map with the team, then begin execution starting with directory creation (Step 1 of Critical Path).

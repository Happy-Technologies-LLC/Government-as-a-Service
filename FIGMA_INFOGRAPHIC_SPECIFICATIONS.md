# GaaS Framework Infographic Design Specifications for Figma

**Date:** November 14, 2025
**Purpose:** Comprehensive design specifications for all GaaS infographics
**Tool:** Figma (recommended for complex layouts, sizing control, export flexibility)
**Total Count:** 16 infographics (9 existing + 7 new)

---

## Table of Contents

1. [Brand Guidelines Summary](#brand-guidelines)
2. [Existing Infographics (#1-9) - Update Specs](#existing-infographics)
3. [New Infographics (#10-16) - Design Specs](#new-infographics)
4. [Figma Setup Instructions](#figma-setup)
5. [Export Specifications](#export-specs)
6. [File Naming Convention](#file-naming)

---

## Brand Guidelines Summary {#brand-guidelines}

### Color Palette

**Primary:**
- Slate 700: `#334155` - Primary brand color, headers, governance elements
- Slate 800: `#1e293b` - Dark text, high contrast
- Slate 600: `#475569` - Body text, secondary elements

**Accent Colors (Layer/Dimension Coding):**
- Sky Blue 500: `#0ea5e9` - Process dimension, workflows, Layer 0
- Teal 500: `#14b8a6` - Technology dimension, digital services, Layer 1
- Amber 400: `#facc15` - People dimension, organizational elements, Layer 2
- Rose 500: `#f43f5e` - Contrast/alerts, critical paths, metrics

**Neutral/Background:**
- Slate 100: `#f1f5f9` - Light backgrounds
- Slate 50: `#f8fafc` - Very light backgrounds
- White: `#ffffff` - Card backgrounds

### Typography

**Font Family:** Inter (https://fonts.google.com/specimen/Inter)
_Fallback:_ System sans-serif (SF Pro on macOS, Segoe UI on Windows)

**Text Styles:**
- **H1 (Main Title):** Inter Bold, 48-64px, Slate 800, Line height 1.2
- **H2 (Section Headers):** Inter SemiBold, 36-48px, Slate 700, Line height 1.3
- **H3 (Subsection):** Inter SemiBold, 24-32px, Slate 700, Line height 1.4
- **Body Large:** Inter Regular, 18-20px, Slate 600, Line height 1.6
- **Body:** Inter Regular, 14-16px, Slate 600, Line height 1.5
- **Caption/Labels:** Inter Medium, 12-14px, Slate 500, Line height 1.4
- **Data/Metrics:** Inter Bold, 24-36px, Slate 800 or Accent colors

### Icons & Symbols

**Recommended Icon Sets:**
- Lucide Icons (https://lucide.dev/) - Primary choice
- Heroicons (https://heroicons.com/) - Alternative

**Icon Styling:**
- Style: Line-art (outline, not filled)
- Stroke width: 2px (consistent)
- Size: 24x24px (default), 32x32px (large), 16x16px (small)
- Color: Match section accent color

### Layout Principles

**Grid System:**
- Column count: 12 columns
- Gutter: 24px
- Margin: 48px (desktop), 24px (mobile)

**Spacing Scale (8pt Grid):**
- xs: 4px
- sm: 8px
- md: 16px
- lg: 24px
- xl: 32px
- 2xl: 48px
- 3xl: 64px

**Card/Box Styling:**
- Border radius: 8px (standard), 12px (large cards)
- Border: 1px solid Slate 300 `#cbd5e1`
- Shadow: 0 2px 8px rgba(0,0,0,0.08)

---

## Existing Infographics (#1-9) - Update Specs {#existing-infographics}

These infographics already exist as HTML but should be rebuilt in Figma for better control and consistency.

### #1: Legacy vs Digital Government Comparison

**File:** `legacy-vs-digital.html` → `legacy-vs-digital-government.png`
**Size:** 1600x1200px (4:3 ratio)
**Format:** Side-by-side comparison

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  TITLE: "Legacy vs. Digital Government"        │
│  (Slate 800, Inter Bold 48px, centered)        │
├──────────────────┬──────────────────────────────┤
│ LEGACY (Left)    │ DIGITAL (Right)              │
│ Background:      │ Background:                  │
│ Slate 100        │ Teal 50 (#f0fdfa)            │
│                  │                              │
│ [Icon: Filing    │ [Icon: Cloud                 │
│  Cabinet]        │  Network]                    │
│ Rose 500         │ Teal 500                     │
│                  │                              │
│ Characteristics: │ Characteristics:             │
│ • Siloed data    │ • Integrated APIs            │
│ • Manual forms   │ • Digital-first              │
│ • 30-90 days     │ • Real-time                  │
│ • 40% failure    │ • 95% success                │
│                  │                              │
│ Cost: $500M/yr   │ Cost: $150M/yr               │
│ (Rose 500 bold)  │ (Teal 500 bold)              │
└──────────────────┴──────────────────────────────┘
```

**Content:**

**Left Column (Legacy):**
- Icon: File cabinet or paper stack (Rose 500, 64x64px)
- Title: "Legacy Government" (Inter SemiBold 32px, Slate 800)
- Bullet points (Inter Regular 16px, Slate 600):
  - "Siloed data across 200+ systems"
  - "Manual, paper-based processes"
  - "30-90 day service delivery"
  - "40-50% project failure rate"
  - "$500M annual IT costs"
  - "15-20% citizen digital adoption"
- Bottom metric box: "$500M/year" (Rose 500, Inter Bold 36px)

**Right Column (Digital):**
- Icon: Cloud with connected nodes (Teal 500, 64x64px)
- Title: "Digital Government" (Inter SemiBold 32px, Slate 800)
- Bullet points (Inter Regular 16px, Slate 600):
  - "Integrated API ecosystem"
  - "Digital-first, mobile-ready"
  - "Real-time service delivery"
  - "95%+ project success rate"
  - "$150M annual IT costs"
  - "85-95% citizen digital adoption"
- Bottom metric box: "$150M/year" (Teal 500, Inter Bold 36px)

**Annotations:**
- Add subtle arrow from left to right showing transformation
- Footer: "Source: World Bank Digital Government Readiness Report 2024"

---

### #2: World Success Map

**File:** `world-success-map.html` → `global-gaas-implementations.png`
**Size:** 2400x1400px (wide landscape)
**Format:** World map with country highlights

**Layout:**
```
┌───────────────────────────────────────────────────────────┐
│  TITLE: "GaaS Framework: Global Implementations"         │
│  (Centered, Inter Bold 56px)                             │
├───────────────────────────────────────────────────────────┤
│                                                           │
│          [WORLD MAP - Simplified continents]             │
│                                                           │
│  Country Markers (Pin icons):                            │
│  🟢 Estonia (Teal 500) - "99% Services Online"          │
│  🟢 Singapore (Teal 500) - "97% Digital Adoption"       │
│  🟢 UAE (Teal 500) - "90%+ Smart Services"              │
│  🟢 Denmark (Teal 500) - "98% Digital Maturity"         │
│  🟡 UK (Amber 400) - "In Progress"                      │
│  🟡 Canada (Amber 400) - "In Progress"                  │
│                                                           │
├───────────────────────────────────────────────────────────┤
│ LEGEND:                                                   │
│ 🟢 Full Implementation  🟡 In Progress  ⚪ Planned       │
├───────────────────────────────────────────────────────────┤
│ KEY METRICS (Bottom row, 4 cards):                       │
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐                    │
│ │ 30+  │ │ 500+ │ │ $10B+│ │ 85%  │                    │
│ │Countries│Practitioners│Value│Success│                 │
│ └──────┘ └──────┘ └──────┘ └──────┘                    │
└───────────────────────────────────────────────────────────┘
```

**Content:**

**Map Section:**
- Use simplified world map silhouette (Slate 200 fill, Slate 300 stroke)
- Country pins (location markers):
  - **Estonia:** Tallinn area, Teal 500, label "99% services online"
  - **Singapore:** Singapore island, Teal 500, label "97% digital adoption, $385M annual value"
  - **UAE:** Dubai/Abu Dhabi, Teal 500, label "90%+ smart services, $1B+ savings"
  - **Denmark:** Copenhagen area, Teal 500, label "98% digital maturity, NemID 5.8M users"
  - **UK:** London, Amber 400, label "GOV.UK, GDS model"
  - **Canada:** Ottawa, Amber 400, label "Service Canada Digital"

**Bottom Metrics (4 cards):**
1. **30+ Countries** (Teal 500 icon) - "Implementing or exploring GaaS"
2. **500+ Practitioners** (Sky Blue 500 icon) - "Certified by 2030 (target)"
3. **$10B+ Value** (Amber 400 icon) - "Documented cost savings"
4. **85% Success Rate** (Teal 500 icon) - "vs. 15% traditional approach"

---

### #3: Implementation Timeline

**File:** `implementation-timeline.html` → `gaas-implementation-roadmap.png`
**Size:** 2400x1000px (wide, short)
**Format:** Horizontal Gantt-style timeline

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  TITLE: "GaaS Implementation Roadmap (36 Months)"          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PHASE 1        PHASE 2           PHASE 3                  │
│  Foundation     Build & Deploy    Optimize & Scale         │
│  Months 0-12    Months 12-24      Months 24-36             │
│  ┌─────────┐   ┌─────────┐       ┌─────────┐             │
│  │Layer 0  │   │Layer 2  │       │Layer 4  │             │
│  │Layer 1  │   │Layer 3  │       │Scale    │             │
│  └─────────┘   └─────────┘       └─────────┘             │
│                                                             │
│  [Detailed timeline bars with milestones]                  │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ DELIVERABLES:                                               │
│ Phase 1: Policy, Platform, 50 FTEs                         │
│ Phase 2: 10 Services, 200 FTEs, 60% Adoption              │
│ Phase 3: 30+ Services, 500 FTEs, 85% Adoption             │
└─────────────────────────────────────────────────────────────┘
```

**Content:**

**Phase 1 (Months 0-12) - Foundation:**
- Color: Sky Blue 500
- Layer 0 bar: "Legal & Policy Foundation" (Months 0-6)
- Layer 1 bar: "Shared Technology Core" (Months 6-12)
- Milestones:
  - M3: "Policy approved"
  - M6: "DTO established (30 FTEs)"
  - M9: "Identity platform live"
  - M12: "API gateway deployed"

**Phase 2 (Months 12-24) - Build & Deploy:**
- Color: Teal 500
- Layer 2 bar: "People & Process Engine" (Months 12-20)
- Layer 3 bar: "Transparent Service Portfolio" (Months 18-24)
- Milestones:
  - M15: "100 FTEs hired & trained"
  - M18: "First 5 services migrated"
  - M21: "TBM cost transparency live"
  - M24: "10 services operational, 60% adoption"

**Phase 3 (Months 24-36) - Optimize & Scale:**
- Color: Amber 400
- Layer 4 bar: "Unified Citizen Experience" (Months 24-32)
- Continuous Improvement bar: (Months 32-36)
- Milestones:
  - M27: "Citizen portal launched"
  - M30: "30+ services integrated"
  - M33: "500 FTEs, 80%+ indigenous capability"
  - M36: "85% digital adoption, 3.5:1 ROI"

**Bottom Legend:**
- ◆ Milestone (diamond shape)
- ━ Active implementation (solid bar)
- ┅ Planning/prep (dotted line)

---

### #4: Fourth Model (PPT Framework Concept)

**File:** `fourth-model.html` → `ppt-framework-model.png`
**Size:** 1200x1200px (square)
**Format:** Venn diagram with PPT overlap

**Layout:**
```
┌─────────────────────────────────────────┐
│  TITLE: "The PPT Balance Model"        │
│  "40-40-20 Investment Framework"       │
├─────────────────────────────────────────┤
│                                         │
│         [Venn Diagram]                  │
│                                         │
│    ┌─────────┐                         │
│    │  PEOPLE │  40%                    │
│    │ Amber   │───────┐                │
│    └─────────┘       │                │
│         │            │                │
│         │    ┌───────▼─────┐         │
│         │    │   SUCCESS   │         │
│         │    │   ZONE      │         │
│         └────┤  All Three  │         │
│              │  Balanced   │         │
│    ┌─────────┤             ├────┐    │
│    │ PROCESS │             │TECH│    │
│    │ Sky Blue│  40%    20% │Teal│    │
│    └─────────┘─────────────┴────┘    │
│                                         │
├─────────────────────────────────────────┤
│ ROI: 2.1:1 to 6.3:1 (PPT Balance)      │
│ vs. 0.6:1 to 1.4:1 (Tech-First)        │
└─────────────────────────────────────────┘
```

**Content:**

**Three Overlapping Circles (Venn):**
- **People (Amber 400, 40% opacity):**
  - Position: Top
  - Diameter: 500px
  - Label: "PEOPLE 40%" (Inter Bold 24px, Amber 600)
  - Icon: Users/team icon (Amber 500, 48x48px, center)
  - Key elements (inside circle, Inter 14px):
    - "Workforce capability"
    - "Training programs"
    - "Change management"
    - "Digital talent"

- **Process (Sky Blue 500, 40% opacity):**
  - Position: Bottom left
  - Diameter: 500px
  - Label: "PROCESS 40%" (Inter Bold 24px, Sky Blue 600)
  - Icon: Workflow/cogs icon (Sky Blue 500, 48x48px, center)
  - Key elements:
    - "ITIL service management"
    - "Agile delivery"
    - "TBM cost allocation"
    - "Governance"

- **Technology (Teal 500, 40% opacity):**
  - Position: Bottom right
  - Diameter: 400px (20% smaller to show 20% investment)
  - Label: "TECHNOLOGY 20%" (Inter Bold 24px, Teal 600)
  - Icon: Server/cloud icon (Teal 500, 48x48px, center)
  - Key elements:
    - "Cloud platforms"
    - "API infrastructure"
    - "Security tools"
    - "Shared services"

**Center Overlap Zone (All three circles intersect):**
- Label: "SUCCESS ZONE" (Inter Bold 20px, Slate 800)
- Fill: White with 90% opacity
- Border: 2px solid Slate 700
- Content: "All three dimensions balanced = sustainable transformation"

**Bottom Comparison Box:**
- Two columns:
  - Left (Rose 500): "Tech-First: 0.6:1-1.4:1 ROI, 60-70% failure"
  - Right (Teal 500): "PPT-Balanced: 2.1:1-6.3:1 ROI, 85%+ success"

---

### #5: PPT Framework Detail

**File:** `ppt-framework-detail.html` → `ppt-framework-detailed.png`
**Size:** 2000x1400px
**Format:** Three-column detailed breakdown

**Layout:**
```
┌──────────────────────────────────────────────────────────┐
│  TITLE: "40-40-20 PPT Framework: Investment Breakdown"  │
├─────────────┬──────────────┬──────────────┬─────────────┤
│   PEOPLE    │   PROCESS    │  TECHNOLOGY  │   OUTCOMES  │
│    40%      │     40%      │     20%      │             │
│  Amber 400  │ Sky Blue 500 │  Teal 500    │  Metrics    │
├─────────────┼──────────────┼──────────────┼─────────────┤
│             │              │              │             │
│ [Details]   │  [Details]   │  [Details]   │  [Charts]   │
│             │              │              │             │
└─────────────┴──────────────┴──────────────┴─────────────┘
```

**Content:**

**Column 1: PEOPLE (40%) - Amber 400 header bar**
- Icon: Users (Amber 500, 32x32px)
- Investment: "$40M/year (medium govt)"
- **Key Components** (bullet list, Inter 14px):
  - Workforce capability building
  - Digital talent acquisition
  - Training & development (500+ staff/year)
  - Change management programs
  - Leadership development
  - Organizational design
- **Example:** Singapore GovTech
  - 3,000+ digital professionals
  - 70-85% private sector compensation
  - 500+ change champions
- **ROI:** 2.5:1 from talent retention

**Column 2: PROCESS (40%) - Sky Blue 500 header bar**
- Icon: Workflow/cogs (Sky Blue 500, 32x32px)
- Investment: "$40M/year (medium govt)"
- **Key Components:**
  - ITIL v4 service management
  - Agile delivery methodology
  - DevOps & automation
  - TBM cost transparency
  - Governance frameworks (COBIT)
  - Continual service improvement
- **Example:** Estonia X-Road
  - 99% uptime SLA
  - "Once-Only" data sharing
  - 2% of GDP operational cost
- **ROI:** 4.1:1 from efficiency gains

**Column 3: TECHNOLOGY (20%) - Teal 500 header bar**
- Icon: Server/cloud (Teal 500, 32x32px)
- Investment: "$20M/year (medium govt)"
- **Key Components:**
  - Cloud infrastructure (IaaS, PaaS)
  - Digital identity platform
  - API gateway & integration
  - Security & monitoring tools
  - Data platforms
  - Citizen-facing applications
- **Example:** UAE Smart Dubai
  - Cloud-first architecture
  - 90%+ services digital
  - $1B+ documented savings
- **ROI:** 1.8:1 from platform efficiency

**Column 4: OUTCOMES - Slate 700 header bar**
- **Overall ROI:** 3.5:1 average (PPT balanced)
- **Success Rate:** 85%+ (vs. 15% tech-first)
- **Charts:**
  - Bar chart: Investment allocation (40-40-20)
  - Line graph: ROI over 5 years
  - Pie chart: Cost savings by dimension

---

### #6: GSM Framework Overview

**File:** `gsm-framework.html` → `gsm-framework-overview.png`
**Size:** 1800x1400px
**Format:** Circular/cyclical diagram

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  TITLE: "Government Service Management (GSM)"  │
│  "ITIL v4 Adapted for Public Sector"          │
├─────────────────────────────────────────────────┤
│                                                 │
│              [Circular Diagram]                │
│                                                 │
│         ┌──────────────────┐                  │
│         │  SERVICE VALUE   │                  │
│    ┌────│     SYSTEM       │────┐            │
│    │    │   (GSVS Core)    │    │            │
│    │    └──────────────────┘    │            │
│    │                              │            │
│    ▼                              ▼            │
│ PLAN ──→ DESIGN ──→ BUILD ──→ DELIVER        │
│    ▲                              │            │
│    │                              ▼            │
│    └──────────── IMPROVE ←───────┘            │
│                                                 │
├─────────────────────────────────────────────────┤
│ 34 ITIL Practices Adapted for Government       │
│ 99.5% Uptime | <1hr MTTR | 85%+ Adoption      │
└─────────────────────────────────────────────────┘
```

**Content:**

**Center Circle: "Service Value System (GSVS)"**
- Diameter: 300px
- Fill: White
- Border: 4px solid Slate 700
- Text: "SERVICE VALUE SYSTEM" (Inter Bold 20px)
- Icon: Hexagon network (Slate 700, 64x64px, center)

**5 Service Value Chain Stages (Circular flow):**
1. **PLAN** (Sky Blue 500)
   - Icon: Calendar/strategy
   - "Strategic planning & portfolio management"

2. **DESIGN** (Teal 500)
   - Icon: Pencil/ruler
   - "Service design & architecture"

3. **BUILD** (Amber 400)
   - Icon: Tools/construction
   - "Development & acquisition"

4. **DELIVER & SUPPORT** (Teal 500)
   - Icon: Rocket/support
   - "Operations & citizen support"

5. **IMPROVE** (Sky Blue 500)
   - Icon: Trending up/optimization
   - "Continual service improvement"

**Outer Ring: 34 ITIL Practices (Icons around perimeter)**
- Show 8-10 key practices as icons:
  - Incident Management
  - Change Management
  - Service Catalog
  - Problem Management
  - Release Management
  - Service Desk
  - Monitoring & Event Management
  - Continual Improvement

**Bottom Metrics Bar:**
- 99.5% Uptime (Teal 500)
- <1hr MTTR (Sky Blue 500)
- 85%+ Adoption (Amber 400)

---

### #7: GSM vs ITSM Comparison

**File:** `gsm-vs-itsm.html` → `gsm-vs-itsm-comparison.png`
**Size:** 1600x1200px
**Format:** Side-by-side table comparison

**Layout:**
```
┌────────────────────────────────────────────────┐
│  TITLE: "GSM vs. Traditional ITSM"            │
│  "Why Government Needs a Different Approach"  │
├────────────────┬───────────────────────────────┤
│   TRADITIONAL  │   GOVERNMENT SERVICE          │
│      ITSM      │   MANAGEMENT (GSM)            │
│   (Slate 100)  │   (Teal 50 background)        │
├────────────────┼───────────────────────────────┤
│                │                               │
│ [Comparison]   │   [Comparison]                │
│ rows           │   rows                        │
│                │                               │
└────────────────┴───────────────────────────────┘
```

**Content:**

**Row-by-row comparison:**

| Category | Traditional ITSM | GSM (Government) |
|----------|-----------------|------------------|
| **Primary Goal** | "IT efficiency" | "Citizen outcomes & public value" |
| **Governance** | "CIO/IT department" | "Cross-agency, ministerial oversight" |
| **Funding Model** | "Chargebacks, cost recovery" | "Public budget, TBM transparency" |
| **Service Ownership** | "IT owns services" | "Business/agency owns, IT enables" |
| **Transparency** | "Internal metrics only" | "Public dashboards, open data" |
| **Success Metrics** | "Uptime, tickets resolved" | "Citizen adoption, cost per service, public trust" |
| **Change Approval** | "CAB (IT-focused)" | "PAB (Policy & public impact review)" |
| **Service Catalog** | "Technical services" | "Citizen-facing + technical services" |
| **Cost Allocation** | "Technology-centric" | "40-40-20 PPT balance" |
| **Regulatory** | "SOX, ISO 20000" | "+ GDPR, Open Data Act, Digital ID laws" |

**Visual Treatment:**
- Each row alternates between White and Slate 50 backgrounds
- ITSM column: Slate 600 text
- GSM column: Teal 600 text (to show "better" approach)
- Icons for each category in left margin (16x16px)

**Bottom Callout Box (Teal 500 background):**
"GSM = ITIL v4 + Public Sector Context + Citizen-Centricity + Policy Integration"

---

### #8: Country Case Studies

**File:** `country-case-studies.html` → `country-implementations.png`
**Size:** 2400x1600px
**Format:** Four-quadrant comparison (2x2 grid)

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  TITLE: "GaaS in Action: 4 Country Case Studies│
├──────────────────┬──────────────────────────────┤
│    ESTONIA       │     SINGAPORE                │
│  (Teal card)     │   (Sky Blue card)            │
│                  │                              │
│  [Details]       │   [Details]                  │
│                  │                              │
├──────────────────┼──────────────────────────────┤
│     UAE          │      DENMARK                 │
│  (Amber card)    │   (Teal card)                │
│                  │                              │
│  [Details]       │   [Details]                  │
│                  │                              │
└──────────────────┴──────────────────────────────┘
```

**Content:**

**Estonia (Top Left - Teal 500 accent):**
- **Flag:** 🇪🇪 (top right corner)
- **Population:** 1.3M
- **Title:** "X-Road: The Digital Backbone"
- **Key Metrics:**
  - 99% services online
  - 98% tax returns filed digitally
  - 2% of GDP operational cost
  - €100M+ annual savings
- **Implementation:**
  - Start: 2001 (X-Road launch)
  - Full deployment: 2007
  - PPT Balance: 40-35-25
- **Key Quote:** _"Once-only principle: Government asks for data once, shares across agencies"_
- **Lesson:** "Start small, focus on interoperability"

**Singapore (Top Right - Sky Blue 500 accent):**
- **Flag:** 🇸🇬
- **Population:** 5.6M
- **Title:** "Smart Nation: API-First Government"
- **Key Metrics:**
  - 97% digital adoption (Singpass)
  - $385M annual value (Singpass alone)
  - 1,700+ integrated services
  - 99.9% platform uptime
- **Implementation:**
  - Start: 2014 (Smart Nation Initiative)
  - GovTech established: 2016
  - PPT Balance: 35-35-30
- **Key Quote:** _"Government as a Platform (GaaP)"_
- **Lesson:** "Invest in people (3,000+ digital professionals)"

**UAE (Bottom Left - Amber 400 accent):**
- **Flag:** 🇦🇪
- **Population:** 9.9M
- **Title:** "Smart Dubai: Vision 2021"
- **Key Metrics:**
  - 90%+ smart services
  - $1B+ documented savings
  - Top-10 global e-gov ranking
  - 95%+ citizen satisfaction
- **Implementation:**
  - Start: 2013 (Smart Dubai Office)
  - Full deployment: 2018
  - PPT Balance: 40-30-30
- **Key Quote:** _"Zero-government-paper by 2021"_
- **Lesson:** "Executive leadership commitment essential"

**Denmark (Bottom Right - Teal 500 accent):**
- **Flag:** 🇩🇰
- **Population:** 5.9M
- **Title:** "NemID/MitID: Trusted Identity"
- **Key Metrics:**
  - 98% digital maturity
  - 5.8M users (NemID)
  - 99.5% uptime
  - €200M annual savings
- **Implementation:**
  - Start: 2010 (NemID launch)
  - MitID migration: 2021
  - PPT Balance: 40-40-20 (textbook)
- **Key Quote:** _"Digital by default, physical by choice"_
- **Lesson:** "User experience drives adoption"

**Bottom Summary Bar:**
"Common Success Factors: Executive sponsorship, PPT balance, citizen co-design, open standards"

---

### #9: Service Portfolio Hierarchy (Existing HTML - Update)

**File:** `service-portfolio-hierarchy.html` → `service-portfolio-hierarchy.png`
**Size:** 1600x1400px
**Format:** 5-level pyramid/tree

**Layout:**
```
┌─────────────────────────────────────────────────┐
│  TITLE: "Service Portfolio: 5-Level Cost       │
│          Transparency Model"                    │
├─────────────────────────────────────────────────┤
│                                                 │
│     [Level 1: Business Services]               │
│     Wide bar (Slate 700)                       │
│              ▼                                  │
│     [Level 2: Technical Services]              │
│     3 bars (Sky Blue 500)                      │
│              ▼                                  │
│     [Level 3: Applications]                    │
│     2-3 bars (Teal 500)                        │
│              ▼                                  │
│     [Level 4: Infrastructure]                  │
│     Multiple small bars (Amber 400)            │
│              ▼                                  │
│     [Level 5: Cost Allocation]                 │
│     PPT breakdown (40-40-20)                   │
│                                                 │
└─────────────────────────────────────────────────┘
```

**Content:**

**Example: Healthcare Insurance Service**

**Level 1: Business Service (Slate 700)**
- Bar width: 100% (1200px)
- Height: 120px
- Label: "HEALTHCARE INSURANCE SERVICE"
- Cost: "$45M/year" (Inter Bold 32px, white text)
- Icon: Health/heart icon (64x64px, white)

**Level 2: Technical Services (Sky Blue 500)**
Three bars beneath Level 1:
1. "Patient Registration" - $15M/year (width: 33%)
2. "Claims Processing" - $20M/year (width: 45%)
3. "Provider Network Management" - $10M/year (width: 22%)

**Level 3: Applications (Teal 500)**
Decomposition of "Patient Registration":
- "Registration Portal" - $5M/year
- "Data Validation Engine" - $10M/year

**Level 4: Infrastructure (Amber 400)**
Decomposition of "Registration Portal":
- Cloud Hosting: $1M
- Identity Platform: $2M
- API Gateway: $1M
- Cybersecurity: $1M

**Level 5: Cost Allocation (PPT breakdown)**
Three stacked bars for $5M total:
- People (Amber 400): $2M (40%)
- Process (Sky Blue 500): $2M (40%)
- Technology (Teal 500): $1M (20%)

**Right Side Panel:**
"Service Domain Governance"
- Healthcare: $120M (40%)
- Education: $80M (27%)
- Justice: $50M (17%)
- Revenue: $50M (17%)

**Bottom Callout:**
"This enables: 'Healthcare IT costs $120M/year' transparency for citizens"

---

## New Infographics (#10-16) - Design Specs {#new-infographics}

### #10: Layer-Based Architecture (5 Layers + GSVS)

**Purpose:** Executive one-page overview of complete GaaS framework
**Size:** 1200x2400px (tall portrait, infographic style)
**Complexity:** High
**Export:** PNG (web), PDF (print)

**Layout:**
```
┌────────────────────────────────────┐
│  [HEADER]                          │
│  Title + Tagline                   │
├────────────────────────────────────┤
│                                    │
│  [LAYER 0] ◄─────┐                │
│  Legal & Policy  │                │
│  (Sky Blue)      │                │
│                  │                │
│  [LAYER 1]       │  GSVS          │
│  Technology Core │  Service       │
│  (Teal)          │  Value         │
│                  │  Chain         │
│  [LAYER 2]       │  (Arrows)      │
│  People & Process│                │
│  (Amber)         │                │
│                  │                │
│  [LAYER 3]       │                │
│  Service Portfolio│               │
│  (Teal)          │                │
│                  │                │
│  [LAYER 4] ◄─────┘                │
│  Citizen Experience                │
│  (Slate)                           │
│                                    │
├────────────────────────────────────┤
│  [FOOTER]                          │
│  Evidence: Estonia, Singapore, UAE │
│  ROI: 3.5:1 | Success: 85%+       │
└────────────────────────────────────┘
```

**Content:**

**Header Section (200px height):**
- Title: "Government as a Service" (Inter Bold 64px, Slate 800)
- Tagline: "The Global Operating Model for 21st-Century Digital Government" (Inter Regular 20px, Slate 600)
- Subtitle: "5 Integrated Layers + Service Value System" (Inter Medium 18px, Sky Blue 600)

**Layer 0: Legal & Policy Foundation (Sky Blue 500 accent, 320px height)**
- Icon: Scale/legal icon (Sky Blue 500, 64x64px)
- Title: "LAYER 0: Legal & Policy Foundation" (Inter Bold 28px)
- Description: "Legislative authority and policy frameworks enabling digital government"
- Key Components (bullet list):
  - Digital Identity Act
  - Data Protection & Privacy Act
  - E-Government Services Act
  - Open Data & Transparency Act
  - National Digital Strategy
- Metrics box (white card):
  - "5-8% of budget"
  - "24-36 month policy cycle"
  - "Ministerial oversight"
- Real Example: "Estonia: e-Estonia Act (2000) enabled 99% services online"

**Layer 1: Shared Technology Core (Teal 500 accent, 340px height)**
- Icon: Server/cloud icon (Teal 500, 64x64px)
- Title: "LAYER 1: Shared Technology Core" (Inter Bold 28px)
- Description: "Reusable platforms and APIs that power all government services"
- Key Components:
  - Digital Identity Platform
  - API Gateway & Integration
  - Cloud Infrastructure
  - Data Platform & Analytics
  - Cybersecurity & Zero Trust
- Metrics box:
  - "35-45% of budget"
  - "99.5-99.9% uptime SLA"
  - "12-18 month deployment"
- Real Example: "Singapore: Government Commercial Cloud + APEX API Platform"

**GSVS Service Value Chain (Overlay, right side, 1200px height):**
- Vertical arrow flow connecting all layers:
  1. PLAN (Layer 0)
  2. DESIGN (Layer 1)
  3. BUILD (Layer 2)
  4. DELIVER (Layer 3)
  5. IMPROVE (Layer 4)
- Each stage has small icon and label
- Arrows: Sky Blue 500, 4px width, dashed

**Layer 2: People & Process Engine (Amber 400 accent, 380px height)**
- Icon: Users/cogs icon (Amber 400, 64x64px)
- Title: "LAYER 2: People & Process Engine" (Inter Bold 28px)
- Description: "The human capability and operational processes to run digital government"
- Key Components:
  - Digital Workforce (200-600 FTEs)
  - ITIL v4 Service Management
  - Agile Delivery Methodology
  - Change Management & Training
  - DevOps & Automation
- Metrics box:
  - "40% People + 40% Process + 20% Tech"
  - "500-1,000 staff trained/year"
  - "99%+ service availability"
- Real Example: "Singapore GovTech: 3,000 digital professionals, 70-85% private sector pay"

**Layer 3: Transparent Service Portfolio (Teal 500 accent, 340px height)**
- Icon: List/portfolio icon (Teal 500, 64x64px)
- Title: "LAYER 3: Transparent Service Portfolio" (Inter Bold 28px)
- Description: "Complete catalog of services with full cost transparency (TBM)"
- Key Components:
  - Service Catalog (Business → Technical → Apps → Infra)
  - TBM Cost Allocation
  - Service Level Agreements (SLAs)
  - Performance Dashboards
  - Portfolio Governance
- Metrics box:
  - "10-15% of budget"
  - "100% cost visibility"
  - "Healthcare: $120M, Education: $80M"
- Real Example: "Estonia: 99% services cataloged, 2% GDP operational cost"

**Layer 4: Unified Citizen Experience (Slate 700 accent, 320px height)**
- Icon: Mobile/citizen icon (Slate 700, 64x64px)
- Title: "LAYER 4: Unified Citizen Experience" (Inter Bold 28px)
- Description: "Single digital front door for all government services"
- Key Components:
  - Citizen Portal (Web + Mobile)
  - Unified Authentication (SSO)
  - Co-Design & Feedback Loops
  - Proactive Service Delivery
  - Accessibility (WCAG 2.1 AA)
- Metrics box:
  - "5-8% of budget"
  - "85-97% digital adoption"
  - "<3 min avg. transaction time"
- Real Example: "Singapore Singpass: 97% adoption, $385M annual value"

**Footer Section (200px height, Slate 100 background):**
- Three metric cards (side by side):
  1. **Countries:** "30+ implementing or exploring" (Teal 500 icon)
  2. **ROI:** "3.5:1 average return on investment" (Sky Blue 500 icon)
  3. **Success Rate:** "85%+ vs. 15% traditional" (Amber 400 icon)
- Evidence sources: "World Bank Digital Government Report 2024, OECD Public Governance Review"
- License: "CC-BY-4.0 | Government as a Service Community"

---

### #11: 40-40-20 PPT Investment Framework

**Purpose:** Visualize balanced investment approach vs. tech-first failure
**Size:** 1600x1200px (landscape, comparison format)
**Complexity:** Medium
**Export:** PNG, PDF

**Layout:**
```
┌──────────────────────────────────────────────────┐
│  TITLE: "The Investment Balance That Determines  │
│          Success or Failure"                     │
├────────────────────┬─────────────────────────────┤
│                    │                             │
│  TECH-FIRST ❌     │   PPT-BALANCED ✅           │
│  70-80% Tech       │   40-40-20 Balance          │
│  (Rose 500)        │   (Teal 500)                │
│                    │                             │
│  [Details]         │   [Details]                 │
│                    │                             │
│  ROI: 0.6:1-1.4:1  │   ROI: 2.1:1-6.3:1         │
│  Failure: 60-70%   │   Success: 85%+             │
│                    │                             │
└────────────────────┴─────────────────────────────┘
```

**Content:**

**Header (120px height):**
- Main Title: "The Investment Balance That Determines Success or Failure" (Inter Bold 48px, centered)
- Subtitle: "Evidence from 200+ digital government implementations" (Inter Regular 18px, Slate 600)

**Left Column: TECH-FIRST APPROACH ❌ (Rose 500 accent, Slate 100 background)**

**Investment Pie Chart (400x400px):**
- Technology: 75% (Rose 500)
- People: 15% (Slate 300)
- Process: 10% (Slate 300)

**Characteristics (bullet list, Inter 14px, Slate 700):**
- ❌ "We'll buy the platform, then figure out people later"
- ❌ "Consultants will handle implementation, we'll take over after"
- ❌ "Training is 5% of budget (not enough)"
- ❌ "Process design happens after deployment"
- ❌ "Change management is an afterthought"

**Failure Modes:**
- Icon: Warning triangle (Rose 500, 32x32px)
- "Platform deployed, nobody uses it (40% of cases)"
- "Vendor dependency trap (permanent consulting costs)"
- "Skills gap never closes (90% outsourced work after 5 years)"
- "Service failures erode public trust"
- "Political blame cycle: CIO fired, restart"

**Bottom Metrics Box (Rose 500 border):**
- ROI: 0.6:1 to 1.4:1 (negative to marginal return)
- Failure Rate: 60-70%
- Citizen Adoption: 15-25%
- Example: "UK Universal Credit: £15B over budget, 7 years delayed"

**Right Column: PPT-BALANCED APPROACH ✅ (Teal 500 accent, Teal 50 background)**

**Investment Pie Chart (400x400px):**
- People: 40% (Amber 400)
- Process: 40% (Sky Blue 500)
- Technology: 20% (Teal 500)

**Characteristics (bullet list, Inter 14px, Slate 700):**
- ✅ "Parallel investment: hire people while procuring platforms"
- ✅ "Knowledge transfer mandates: 1:1 consultant-to-staff pairing"
- ✅ "Training is 40% of budget (realistic)"
- ✅ "Process design drives platform selection"
- ✅ "Change champions deployed from day one"

**Success Factors:**
- Icon: Checkmark badge (Teal 500, 32x32px)
- "Platform adoption >85% within 18 months"
- "Internal capability reaches 80% by year 10"
- "Service availability 99.5-99.9%"
- "Continuous improvement culture embedded"
- "Public trust increases year-over-year"

**Bottom Metrics Box (Teal 500 border):**
- ROI: 2.1:1 to 6.3:1 (strong positive returns)
- Success Rate: 85%+
- Citizen Adoption: 85-97%
- Example: "Estonia e-Estonia: €100M saved annually, 99% services online"

**Bottom Comparison Chart (full width, 200px height):**
- Horizontal bar comparison:
  - ROI comparison: Rose bar (1.4:1 max) vs. Teal bar (6.3:1 max)
  - Success rate: Rose bar (30%) vs. Teal bar (85%)
- Evidence sources: "World Bank, Gartner, OECD data (2020-2024)"

---

### #12: Digital Identity Citizen Journey

**Purpose:** Show enrollment to daily use flow (user experience)
**Size:** 2400x1200px (wide landscape)
**Complexity:** Medium
**Export:** PNG

**Layout:**
```
┌───────────────────────────────────────────────────┐
│  TITLE: "Digital Identity: Citizen Journey"      │
├───────────────────────────────────────────────────┤
│                                                   │
│  [Stage 1]──→[Stage 2]──→[Stage 3]──→[Stage 4]  │
│  Enroll       Activate     Use        Renew      │
│                                                   │
│  [Timeline: 0 days → 7 days → ongoing → 5 yrs]  │
│                                                   │
└───────────────────────────────────────────────────┘
```

**Content:**

**Header (100px height):**
- Title: "Digital Identity: The Citizen Journey" (Inter Bold 48px)
- Subtitle: "From enrollment to daily use in 5 stages" (Inter Regular 18px)

**Stage 1: ENROLLMENT (Day 0, Teal 500 accent)**
- Icon: ID card (Teal 500, 64x64px)
- Title: "ENROLL" (Inter Bold 24px)
- Timeline: "Day 0 (15-30 minutes)"
- **Touchpoints:**
  - Icon: Building - "In-person at government office"
  - Icon: Smartphone - "Mobile enrollment (Level 2-3)"
  - Icon: Laptop - "Web enrollment (Level 1-2)"
- **Requirements:**
  - Photo ID (passport/driver's license)
  - Proof of address
  - Biometric capture (photo, fingerprint for Level 4)
- **Output:** "Digital ID credential created, identity verified to LOA 2-4"

**Stage 2: ACTIVATION (Day 0-7, Sky Blue 500 accent)**
- Icon: Key/unlock (Sky Blue 500, 64x64px)
- Title: "ACTIVATE" (Inter Bold 24px)
- Timeline: "Day 0-7 (10 minutes)"
- **Touchpoints:**
  - Icon: SMS - "SMS verification code"
  - Icon: Email - "Email verification link"
  - Icon: Mobile app - "Mobile app download + PIN setup"
- **Security:**
  - Multi-factor authentication (MFA) setup
  - Recovery questions configured
  - Trusted device registration
- **Output:** "Account active, ready for first use"

**Stage 3: FIRST USE (Day 7-30, Amber 400 accent)**
- Icon: Rocket/launch (Amber 400, 64x64px)
- Title: "FIRST USE" (Inter Bold 24px)
- Timeline: "Day 7-30 (2-5 minutes per transaction)"
- **Common Services:**
  - Tax filing (most common first use - 60%)
  - Healthcare records access
  - Business registration
  - Permit applications
- **User Experience:**
  - Single sign-on (SSO) across all services
  - Pre-filled forms (data pulled from identity)
  - Instant verification (no manual checks)
- **Output:** "Citizen sees value, continues using"

**Stage 4: DAILY USE (Ongoing, Teal 500 accent)**
- Icon: Calendar/daily (Teal 500, 64x64px)
- Title: "DAILY USE" (Inter Bold 24px)
- Timeline: "Ongoing (avg. 3-5 uses/month)"
- **Services:**
  - Login to government portal
  - E-signatures on documents
  - Access to personal data dashboard
  - Payment of fines/fees
  - Benefit claims
- **Channels:**
  - 60% mobile app
  - 30% web
  - 10% kiosk/in-person
- **Output:** "Habitual use, 85-97% adoption"

**Stage 5: RENEWAL (Year 5, Slate 700 accent)**
- Icon: Refresh/renew (Slate 700, 64x64px)
- Title: "RENEWAL" (Inter Bold 24px)
- Timeline: "Year 5 (5-10 minutes)"
- **Process:**
  - Automated reminder (email/SMS/push)
  - Re-verification (biometric update if needed)
  - Credential refresh (new keys issued)
- **Output:** "Seamless renewal, continuous trust"

**Bottom Metrics Bar (full width):**
- **Enrollment Time:** 15-30 min (Estonia: 20 min, Singapore: 15 min)
- **Adoption Rate:** 85-97% (Singapore Singpass: 97%, Denmark MitID: 98%)
- **Daily Logins:** 2.5M (avg. for 5M population)
- **User Satisfaction:** 4.5/5 (avg. across implementations)

**Evidence Box (bottom right):**
"Real Data: Singapore Singpass - 5.8M users, 97% adoption, $385M annual value"

---

### #13: Service Portfolio Hierarchy (5-Level Decomposition)

**Purpose:** Visualize TBM cost allocation from business service to infrastructure
**Size:** 1600x1400px
**Complexity:** High
**Export:** PNG, PDF

_Note: This is a redesign of existing infographic #9 with enhanced detail and clearer TBM focus_

**Layout:**
```
┌────────────────────────────────────────────────┐
│  TITLE: "Service Portfolio: 5-Level Cost      │
│          Transparency (TBM Model)"            │
├────────────────────────────────────────────────┤
│                                                │
│  [Level 1: Business Service]                  │
│  Healthcare Insurance: $45M/year              │
│  ════════════════════════════════════         │
│            │                                   │
│            ├─► [Level 2: Technical Services]  │
│            │   Patient Reg: $15M              │
│            │   Claims: $20M                   │
│            │   Provider Mgmt: $10M            │
│            │   ════════════                   │
│            │        │                          │
│            │        ├─► [Level 3: Apps]       │
│            │        │   Portal: $5M           │
│            │        │   Validation: $10M      │
│            │        │   ═════                 │
│            │        │     │                   │
│            │        │     ├─► [Level 4: Infra]│
│            │        │     │   Cloud: $1M     │
│            │        │     │   Identity: $2M  │
│            │        │     │   API: $1M       │
│            │        │     │   Security: $1M  │
│            │        │     │   ═══            │
│            │        │     │                   │
│            │        │     └─► [Level 5: PPT] │
│            │        │         People: $2M    │
│            │        │         Process: $2M   │
│            │        │         Tech: $1M      │
│                                                │
├────────────────────────────────────────────────┤
│ OUTCOME: "Healthcare IT: $120M/year" visible  │
│          to citizens and legislature          │
└────────────────────────────────────────────────┘
```

**Content:**

**Header (100px height):**
- Title: "Service Portfolio: 5-Level Cost Transparency Model" (Inter Bold 48px)
- Subtitle: "Technology Business Management (TBM) for Government" (Inter Regular 20px, Sky Blue 600)

**Example Scenario:** "Healthcare Insurance Service" (used consistently throughout)

**Level 1: Business Service (Slate 700, full width 1400px bar, 140px height)**
- Icon: Health heart icon (White, 80x80px, left aligned)
- Label: "LEVEL 1: BUSINESS SERVICE" (Inter Bold 18px, white text)
- Service Name: "Healthcare Insurance Service" (Inter Bold 36px, white text)
- Annual Cost: "$45M/year" (Inter Bold 56px, white text, right aligned)
- Beneficiaries: "2.5M citizens" (Inter Regular 16px, white text)

**Connector Arrow:** Slate 600, 6px width, pointing down

**Level 2: Technical Services (Sky Blue 500, three bars, total 1200px width, 120px height each)**

**Bar 1: Patient Registration ($15M - 33% of $45M)**
- Width: 400px
- Label: "Patient Registration" (Inter SemiBold 20px)
- Cost: "$15M/year" (Inter Bold 28px)
- Metrics: "500K registrations/year"

**Bar 2: Claims Processing ($20M - 45% of $45M)**
- Width: 540px
- Label: "Claims Processing" (Inter SemiBold 20px)
- Cost: "$20M/year" (Inter Bold 28px)
- Metrics: "1.2M claims/year"

**Bar 3: Provider Network Management ($10M - 22% of $45M)**
- Width: 260px
- Label: "Provider Network Mgmt" (Inter SemiBold 20px)
- Cost: "$10M/year" (Inter Bold 28px)
- Metrics: "5,000 providers managed"

**Connector Arrow:** Sky Blue 600, 6px, pointing down from "Patient Registration"

**Level 3: Applications (Teal 500, two bars, 100px height each)**

**Focus Drill-down:** "Patient Registration ($15M) breaks down into:"

**Bar 1: Registration Portal ($5M)**
- Width: 200px
- Label: "Registration Portal" (Inter SemiBold 18px)
- Cost: "$5M/year" (Inter Bold 24px)
- Tech: "React SPA + Node.js API"

**Bar 2: Data Validation Engine ($10M)**
- Width: 400px
- Label: "Data Validation Engine" (Inter SemiBold 18px)
- Cost: "$10M/year" (Inter Bold 24px)
- Tech: "Rules engine + ML fraud detection"

**Connector Arrow:** Teal 600, 6px, pointing down from "Registration Portal"

**Level 4: Infrastructure (Amber 400, four small bars, 80px height each)**

**Focus Drill-down:** "Registration Portal ($5M) infrastructure costs:"

**Bar 1: Cloud Hosting**
- Width: 100px
- Label: "Cloud Hosting" (Inter Medium 14px)
- Cost: "$1M" (Inter Bold 20px)
- Provider: "AWS/Azure"

**Bar 2: Identity Platform**
- Width: 200px
- Label: "Identity Platform" (Inter Medium 14px)
- Cost: "$2M" (Inter Bold 20px)
- Component: "Shared Layer 1"

**Bar 3: API Gateway**
- Width: 100px
- Label: "API Gateway" (Inter Medium 14px)
- Cost: "$1M" (Inter Bold 20px)
- Component: "Shared Layer 1"

**Bar 4: Cybersecurity**
- Width: 100px
- Label: "Cybersecurity" (Inter Medium 14px)
- Cost: "$1M" (Inter Bold 20px)
- Tools: "SIEM, WAF, DLP"

**Connector Arrow:** Amber 600, 6px, pointing down

**Level 5: Cost Allocation (PPT Breakdown, stacked bars, 60px height each)**

**Focus Drill-down:** "Registration Portal ($5M) PPT allocation:"

**Stacked Bar (Total 500px width):**
- People (Amber 400): 200px (40%) - "$2M/year"
  - Label: "PEOPLE 40%" (Inter Bold 14px)
  - Breakdown: "50 FTEs: Designers, engineers, support staff"
- Process (Sky Blue 500): 200px (40%) - "$2M/year"
  - Label: "PROCESS 40%" (Inter Bold 14px)
  - Breakdown: "ITIL operations, agile delivery, governance"
- Technology (Teal 500): 100px (20%) - "$1M/year"
  - Label: "TECHNOLOGY 20%" (Inter Bold 14px)
  - Breakdown: "Licenses, infrastructure, tools"

**Right Side Panel (300px width, full height):**

**Title:** "Service Domain Governance" (Inter Bold 24px, Slate 800)

**Domain Breakdown (pie chart or stacked bar):**
- Healthcare: $120M/year (40%) - Teal 500
- Education: $80M/year (27%) - Sky Blue 500
- Justice: $50M/year (17%) - Amber 400
- Revenue: $50M/year (17%) - Slate 600

**Callout Box (Teal 500 border, white background):**
"This enables answering: 'How much does Healthcare IT cost?'"
"Answer: $120M/year, serving 2.5M citizens = $48 per citizen"

**Bottom Outcome Bar (Slate 100 background, full width, 120px height):**
- Icon: Eye/visibility (Teal 500, 48x48px)
- Text: "OUTCOME: Full cost transparency enables legislative oversight and citizen accountability"
- Quote: _"Citizens can see where their tax dollars go: Healthcare IT $120M, Education IT $80M"_
- Evidence: "Singapore: Full TBM transparency showing $385M Singpass value"

---

### #14: API Gateway Architecture & Flow

**Purpose:** Technical reference diagram for architects
**Size:** 1800x1400px
**Complexity:** High
**Export:** PNG, PDF

**Layout:**
```
┌──────────────────────────────────────────────────┐
│  TITLE: "API Gateway: 4-Layer Architecture"     │
├──────────────────────────────────────────────────┤
│                                                  │
│  [Layer 1: Consumers]                           │
│  Citizens | Agencies | Partners                 │
│  ══════════════════════════════════             │
│            │ (HTTPS/OAuth2)                      │
│            ▼                                     │
│  [Layer 2: API Gateway]                         │
│  Rate Limit | Auth | Transform | Log           │
│  ══════════════════════════════════             │
│            │ (Internal APIs)                     │
│            ▼                                     │
│  [Layer 3: Service Registry]                    │
│  Discovery | Health | Version                   │
│  ══════════════════════════════════             │
│            │ (Backend calls)                     │
│            ▼                                     │
│  [Layer 4: Data Sources]                        │
│  Identity | Tax | Health | Education            │
│                                                  │
└──────────────────────────────────────────────────┘
```

**Content:**

**Header (100px height):**
- Title: "API Gateway: 4-Layer Architecture & Request Flow" (Inter Bold 48px)
- Subtitle: "Government API Platform reference architecture" (Inter Regular 18px)

**Layer 1: API Consumers (Top, Slate 700 background, 180px height)**
- Title: "LAYER 1: API CONSUMERS" (Inter Bold 24px, white text)
- Three consumer types (side by side):

  **1. Citizens & Businesses (Teal 500 icon)**
  - Icon: User/mobile phone (64x64px)
  - Label: "Citizens & Businesses"
  - Examples:
    - Mobile apps
    - Web portals
    - Third-party integrations
  - Auth: "OAuth 2.0 (public clients)"

  **2. Government Agencies (Sky Blue 500 icon)**
  - Icon: Building/government (64x64px)
  - Label: "Government Agencies"
  - Examples:
    - Cross-agency integrations
    - Internal dashboards
    - Data sharing (Once-Only principle)
  - Auth: "mTLS + OAuth 2.0 (private clients)"

  **3. Trusted Partners (Amber 400 icon)**
  - Icon: Handshake/partnership (64x64px)
  - Label: "Trusted Partners"
  - Examples:
    - Healthcare providers
    - Financial institutions
    - Educational institutions
  - Auth: "API Keys + mTLS"

**Request Flow Arrow (Slate 600, 8px, dashed, pointing down)**
- Label: "HTTPS Request" (Inter 14px)
- Sequence: "① Authenticate → ② Authorize → ③ Rate Limit → ④ Route"

**Layer 2: API Gateway (Teal 500 background, 280px height)**
- Title: "LAYER 2: API GATEWAY (Kong / Apigee / AWS API Gateway)" (Inter Bold 24px, white)
- **Four Core Functions (2x2 grid):**

  **1. Authentication & Authorization (top left)**
  - Icon: Lock/key (White, 48x48px)
  - Functions:
    - OAuth 2.0 token validation
    - JWT verification
    - Scope checking
    - Role-based access control (RBAC)
  - Metric: "<50ms auth latency"

  **2. Rate Limiting & Throttling (top right)**
  - Icon: Gauge/meter (White, 48x48px)
  - Functions:
    - Per-consumer quotas
    - Burst protection
    - DDoS mitigation
    - Fair use enforcement
  - Metric: "10,000 req/sec capacity"

  **3. Request Transformation (bottom left)**
  - Icon: Transform/cogs (White, 48x48px)
  - Functions:
    - Protocol translation (REST ↔ SOAP ↔ GraphQL)
    - Data format conversion (JSON ↔ XML)
    - Field mapping
    - Versioning
  - Metric: "<10ms transform latency"

  **4. Logging & Analytics (bottom right)**
  - Icon: Chart/analytics (White, 48x48px)
  - Functions:
    - Request/response logging
    - Performance metrics
    - Error tracking
    - Audit trail (compliance)
  - Metric: "100% audit coverage"

**Request Flow Arrow (Teal 600, 8px, dashed, pointing down)**
- Label: "Internal API Call" (Inter 14px)
- Sequence: "⑤ Discover → ⑥ Health Check → ⑦ Route → ⑧ Load Balance"

**Layer 3: Service Registry & Discovery (Sky Blue 500 background, 220px height)**
- Title: "LAYER 3: SERVICE REGISTRY & DISCOVERY (Consul / Eureka / K8s DNS)" (Inter Bold 20px, white)
- **Three Core Functions:**

  **1. Service Discovery (left)**
  - Icon: Compass/radar (White, 48x48px)
  - Functions:
    - Dynamic service registration
    - DNS-based discovery
    - Client-side load balancing
    - Service mesh integration
  - Services Registered: "200+ backend services"

  **2. Health Monitoring (center)**
  - Icon: Heart rate/pulse (White, 48x48px)
  - Functions:
    - Health check endpoints (/health)
    - Circuit breaker patterns
    - Automatic failover
    - Degraded state handling
  - Uptime: "99.9% target SLA"

  **3. Version Management (right)**
  - Icon: Branches/versions (White, 48x48px)
  - Functions:
    - Semantic versioning (v1, v2, v3)
    - Canary deployments
    - Blue-green routing
    - Deprecation policies
  - Versions: "3-5 concurrent versions supported"

**Request Flow Arrow (Sky Blue 600, 8px, solid, pointing down)**
- Label: "Backend Service Call" (Inter 14px)
- Sequence: "⑨ Fetch Data → ⑩ Aggregate → ⑪ Response"

**Layer 4: Backend Data Sources (Amber 400 background, 240px height)**
- Title: "LAYER 4: BACKEND DATA SOURCES & SERVICES" (Inter Bold 20px, white)
- **Four Service Domains (horizontal cards):**

  **1. Identity Services (Teal 500 card)**
  - Icon: ID badge (64x64px)
  - Services:
    - Digital Identity API
    - Authentication service
    - Citizen profile
    - Consent management
  - Database: "PostgreSQL + Redis cache"

  **2. Tax & Revenue (Sky Blue 500 card)**
  - Icon: Money/receipt (64x64px)
  - Services:
    - Tax filing API
    - Payment gateway
    - Refund status
    - Business registration
  - Database: "Oracle + ElasticSearch"

  **3. Health & Social (Amber 400 card)**
  - Icon: Heart/health (64x64px)
  - Services:
    - Healthcare records
    - Insurance eligibility
    - Appointment booking
    - Benefit claims
  - Database: "SQL Server + FHIR store"

  **4. Education & Skills (Teal 500 card)**
  - Icon: Graduation cap (64x64px)
  - Services:
    - Student records
    - Transcript API
    - Certification verification
    - Scholarship management
  - Database: "MongoDB + GraphQL"

**Right Side Panel (Security Controls, 300px width, full height, Rose 500 accent):**
- Title: "SECURITY CONTROLS" (Inter Bold 20px, Rose 500)
- **Layered Security:**
  - Layer 1: "TLS 1.3 encryption"
  - Layer 2: "WAF (Web Application Firewall)"
  - Layer 2: "OAuth 2.0 + OIDC"
  - Layer 2: "Rate limiting (DDoS protection)"
  - Layer 3: "mTLS (service-to-service)"
  - Layer 4: "Database encryption at rest"
  - All Layers: "SIEM monitoring + audit logs"

**Bottom Metrics Bar (Slate 100 background, 100px height):**
- **Throughput:** 10,000 req/sec (avg.), 50,000 req/sec (peak)
- **Latency:** p50: 45ms, p95: 120ms, p99: 250ms
- **Availability:** 99.95% (4.4 hours downtime/year)
- **API Count:** 200+ backend services, 500+ endpoints

**Evidence:** "Real Data: Singapore APEX API Platform - 500+ APIs, 1B+ calls/month"

---

### #15: Defense-in-Depth Security Model

**Purpose:** Visualize 6-layer security defense (castle metaphor)
**Size:** 1600x1600px (square)
**Complexity:** Medium
**Export:** PNG

**Layout:**
```
┌────────────────────────────────────────┐
│  TITLE: "Defense-in-Depth Security"   │
│         "6 Layers of Protection"      │
├────────────────────────────────────────┤
│                                        │
│         [Concentric Circles]          │
│                                        │
│    ┌────────────────────┐            │
│    │  Layer 6: Physical │            │
│    │  ┌──────────────┐  │            │
│    │  │ Layer 5: Apps│  │            │
│    │  │ ┌──────────┐ │  │            │
│    │  │ │ Layer 4:││ │  │            │
│    │  │ │ Endpoint││ │  │            │
│    │  │ └──────────┘ │  │            │
│    │  └──────────────┘  │            │
│    └────────────────────┘            │
│                                        │
│  [Attack vectors as arrows]           │
│  [Security controls as shields]       │
│                                        │
└────────────────────────────────────────┘
```

**Content:**

**Header (120px height):**
- Title: "Defense-in-Depth Security Model" (Inter Bold 56px, centered)
- Subtitle: "6 Layers of Protection: How Government Data Stays Safe" (Inter Regular 20px, Slate 600)

**Concentric Circle Diagram (Center, 1200x1200px):**

**Layer 6 (Outermost): Physical & Procedural (Slate 600, opacity 30%)**
- Ring width: 120px
- Radius: 600px (outermost)
- Label: "LAYER 6: PHYSICAL & PROCEDURAL" (Inter Bold 16px)
- **Controls:**
  - Icon: Building lock (Slate 600, 32x32px, positioned around ring)
  - Physical access controls (badged entry)
  - Security guards & CCTV
  - Visitor management
  - Clean desk policy
  - Background checks for personnel
- **Attack Stopped:** "Unauthorized physical access prevented"

**Layer 5: Perimeter Defense (Rose 500, opacity 40%)**
- Ring width: 100px
- Radius: 480px
- Label: "LAYER 5: PERIMETER DEFENSE" (Inter Bold 16px)
- **Controls:**
  - Icon: Shield/firewall (Rose 500, 32x32px)
  - Web Application Firewall (WAF)
  - DDoS protection (Cloudflare, Akamai)
  - Network firewalls (stateful inspection)
  - IDS/IPS (Intrusion Detection/Prevention)
  - Email security gateway (anti-phishing)
- **Attack Stopped:** "90% of external attacks blocked here"

**Layer 4: Network Security (Sky Blue 500, opacity 50%)**
- Ring width: 100px
- Radius: 380px
- Label: "LAYER 4: NETWORK SECURITY" (Inter Bold 16px)
- **Controls:**
  - Icon: Network/wifi (Sky Blue 500, 32x32px)
  - Network segmentation (VLANs)
  - Zero Trust Network Access (ZTNA)
  - VPN for remote access
  - Micro-segmentation
  - East-west traffic monitoring
- **Attack Stopped:** "Lateral movement contained"

**Layer 3: Endpoint Security (Teal 500, opacity 60%)**
- Ring width: 100px
- Radius: 280px
- Label: "LAYER 3: ENDPOINT SECURITY" (Inter Bold 16px)
- **Controls:**
  - Icon: Laptop/device (Teal 500, 32x32px)
  - EDR (Endpoint Detection & Response)
  - Antivirus/anti-malware
  - Device encryption (BitLocker, FileVault)
  - Mobile Device Management (MDM)
  - Patch management
- **Attack Stopped:** "Malware execution prevented"

**Layer 2: Application Security (Amber 400, opacity 70%)**
- Ring width: 100px
- Radius: 180px
- Label: "LAYER 2: APPLICATION SECURITY" (Inter Bold 16px)
- **Controls:**
  - Icon: Code/app (Amber 400, 32x32px)
  - Secure coding practices (OWASP Top 10)
  - Application firewalls
  - Input validation
  - SQL injection prevention
  - XSS protection
  - API authentication (OAuth 2.0)
- **Attack Stopped:** "Code exploits mitigated"

**Layer 1 (Innermost): Data Security (Slate 800, opacity 80%)**
- Ring width: 80px
- Radius: 100px
- Label: "LAYER 1: DATA SECURITY" (Inter Bold 16px, white text)
- **Controls:**
  - Icon: Database lock (White, 48x48px, center)
  - Encryption at rest (AES-256)
  - Encryption in transit (TLS 1.3)
  - Data Loss Prevention (DLP)
  - Database Activity Monitoring (DAM)
  - Access controls (RBAC)
  - Audit logging
- **Attack Stopped:** "Data exfiltration prevented"

**Center Core: Protected Data (Teal 500, solid)**
- Radius: 80px
- Icon: Safe/vault (White, 64x64px)
- Label: "CITIZEN DATA" (Inter Bold 20px, white)
- Subtext: "Health, Tax, Identity, Education" (Inter 12px, white)

**Attack Vectors (Arrows piercing from outside):**
Position arrows at 45°, 135°, 225°, 315° angles:

**Attack 1 (Top-right, 45°): Phishing Email**
- Arrow: Rose 500, 6px, dashed
- Label: "Phishing Attack" (Inter 14px, Rose 500)
- **Stopped at:** Layer 5 (Perimeter - Email security gateway blocks 95%)
- **Fallback:** Layer 3 (Endpoint - EDR catches malicious payload)

**Attack 2 (Top-left, 135°): DDoS Attack**
- Arrow: Rose 500, 6px, dashed
- Label: "DDoS Attack" (Inter 14px, Rose 500)
- **Stopped at:** Layer 5 (Perimeter - WAF + CDN absorb traffic)

**Attack 3 (Bottom-left, 225°): SQL Injection**
- Arrow: Rose 500, 6px, dashed
- Label: "SQL Injection" (Inter 14px, Rose 500)
- **Stopped at:** Layer 2 (Application - Input validation blocks malicious queries)
- **Fallback:** Layer 1 (Data - RBAC limits damage even if breach occurs)

**Attack 4 (Bottom-right, 315°): Insider Threat**
- Arrow: Amber 400, 6px, solid (insider = trusted actor)
- Label: "Insider Threat" (Inter 14px, Amber 500)
- **Stopped at:** Layer 1 (Data - Audit logging detects anomalous access)
- **Note:** "Why every layer matters - insiders bypass perimeter"

**Bottom Metrics Bar (Slate 100 background, 140px height):**
- **Title:** "Real-World Breach Examples: Where Defense-in-Depth Stopped Attacks" (Inter Bold 18px)
- **Three Examples (side by side):**

  **Example 1: Phishing Attempt (Estonia 2020)**
  - Stopped at: Layer 5 + Layer 3
  - Outcome: "99.5% of phishing emails blocked, 0.5% caught by EDR"
  - Impact: "Zero data loss"

  **Example 2: SQL Injection (Singapore 2021)**
  - Stopped at: Layer 2
  - Outcome: "Input validation prevented database access"
  - Impact: "Service downtime: 0 minutes"

  **Example 3: Insider Anomaly (UAE 2022)**
  - Stopped at: Layer 1
  - Outcome: "Audit logs detected unusual query volume, access revoked within 5 min"
  - Impact: "100 records accessed, all audited, no exfiltration"

**Right Side Legend (200px width):**
- **Security Controls Key:**
  - 🛡️ Preventive (stops attacks)
  - 🔍 Detective (identifies threats)
  - ⚙️ Corrective (remediates damage)
- **Evidence:** "Zero Trust + Defense-in-Depth = 99.95% attack prevention"

---

### #16: GaaS Implementation Roadmap (24-36 Months)

**Purpose:** Executive timeline showing phased rollout
**Size:** 2400x1000px (wide landscape)
**Complexity:** Medium
**Export:** PNG, PDF

**Layout:**
```
┌─────────────────────────────────────────────────────────────┐
│  TITLE: "GaaS Implementation: 36-Month Roadmap"            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  PHASE 1          PHASE 2            PHASE 3               │
│  Foundation       Build & Deploy     Optimize & Scale      │
│  Months 0-12      Months 12-24       Months 24-36          │
│  ┌──────┐        ┌──────┐           ┌──────┐             │
│  │Layer │        │Layer │           │Layer │             │
│  │ 0-1  │        │ 2-3  │           │  4   │             │
│  └──────┘        └──────┘           └──────┘             │
│                                                             │
│  [Gantt-style timeline with milestones]                    │
│                                                             │
├─────────────────────────────────────────────────────────────┤
│ DELIVERABLES & METRICS BY PHASE                            │
└─────────────────────────────────────────────────────────────┘
```

**Content:**

**Header (100px height):**
- Title: "GaaS Implementation: 36-Month Roadmap" (Inter Bold 48px)
- Subtitle: "Phased deployment with decision gates and risk mitigation" (Inter Regular 18px, Slate 600)

**Timeline Header (80px height, Slate 100 background):**
- Months 0-36 marked in 3-month intervals
- Vertical dotted lines at M0, M3, M6, M9, M12, M15, M18, M21, M24, M27, M30, M33, M36
- Current month indicator: "YOU ARE HERE" with arrow (for template flexibility)

**Phase 1: Foundation (Months 0-12, Sky Blue 500 accent)**

**Header Bar (Sky Blue 500, 100px height):**
- Title: "PHASE 1: FOUNDATION" (Inter Bold 32px, white)
- Focus: "Legal, Policy, Platform, Initial Talent" (Inter Regular 18px, white)
- Budget: "$30M (30% of total 3-year budget)" (Inter SemiBold 16px, white)

**Timeline Bars (Gantt-style):**

**Layer 0: Legal & Policy Foundation (M0-M6)**
- Bar: Sky Blue 300, 60px height
- Length: 6 months (600px width)
- Milestones:
  - M2: "📋 Digital ID Act drafted"
  - M4: "⚖️ Data Protection Act passed"
  - M6: "✅ Policy package approved"

**Layer 1: Shared Technology Core (M6-M12)**
- Bar: Teal 500, 60px height
- Length: 6 months (600px width)
- Milestones:
  - M8: "☁️ Cloud infrastructure live"
  - M10: "🔐 Identity platform deployed"
  - M12: "🔗 API gateway operational"

**Workforce Ramp-up (M0-M12, parallel track)**
- Bar: Amber 400, 40px height
- Length: 12 months (1200px width)
- Milestones:
  - M3: "👤 Chief Digital Officer hired"
  - M6: "🏢 DTO established (30 FTEs)"
  - M12: "👥 100 FTEs hired & trained"

**Decision Gate 1 (M12, Rose 500 vertical line):**
- Icon: ⚠️ Checkpoint (Rose 500, 48x48px)
- Label: "DECISION GATE 1" (Inter Bold 16px, Rose 500)
- Criteria:
  - ✅ Policy approved by legislature
  - ✅ Platform deployed and stable
  - ✅ 100 FTEs operational
  - ✅ Budget secured for Phase 2
- **Go/No-Go Decision:** "Proceed to Phase 2 only if all criteria met"

---

**Phase 2: Build & Deploy (Months 12-24, Teal 500 accent)**

**Header Bar (Teal 500, 100px height):**
- Title: "PHASE 2: BUILD & DEPLOY" (Inter Bold 32px, white)
- Focus: "People, Process, Services, TBM" (Inter Regular 18px, white)
- Budget: "$45M (45% of total 3-year budget)" (Inter SemiBold 16px, white)

**Timeline Bars:**

**Layer 2: People & Process Engine (M12-M20)**
- Bar: Amber 400, 60px height
- Length: 8 months (800px width)
- Milestones:
  - M14: "📚 Training programs launched (500 staff/year)"
  - M16: "⚙️ ITIL service management implemented"
  - M18: "🚀 Agile delivery framework operational"
  - M20: "✅ 200 FTEs, 60% indigenous capability"

**Layer 3: Transparent Service Portfolio (M18-M24)**
- Bar: Teal 500, 60px height
- Length: 6 months (600px width)
- Milestones:
  - M19: "📊 TBM cost allocation framework live"
  - M21: "📑 Service catalog published (50+ services)"
  - M24: "💰 Full cost transparency achieved"

**Service Migration (M15-M24, parallel track)**
- Bar: Sky Blue 500, 40px height
- Length: 9 months (900px width)
- Milestones:
  - M15: "🔄 First service migrated (Digital ID enrollment)"
  - M18: "📈 5 services operational"
  - M21: "📊 10 services operational"
  - M24: "🎯 15 services operational, 60% citizen adoption"

**Decision Gate 2 (M24, Rose 500 vertical line):**
- Icon: ⚠️ Checkpoint (Rose 500, 48x48px)
- Label: "DECISION GATE 2" (Inter Bold 16px, Rose 500)
- Criteria:
  - ✅ 10+ services migrated and stable
  - ✅ 60%+ citizen adoption
  - ✅ 99.0%+ service availability
  - ✅ TBM cost data validated
  - ✅ ROI >1.5:1 demonstrated
- **Go/No-Go Decision:** "Scale to Phase 3 or consolidate"

---

**Phase 3: Optimize & Scale (Months 24-36, Amber 400 accent)**

**Header Bar (Amber 400, 100px height):**
- Title: "PHASE 3: OPTIMIZE & SCALE" (Inter Bold 32px, Slate 800)
- Focus: "Citizen Experience, Continuous Improvement, Full Adoption" (Inter Regular 18px, Slate 800)
- Budget: "$25M (25% of total 3-year budget)" (Inter SemiBold 16px, Slate 800)

**Timeline Bars:**

**Layer 4: Unified Citizen Experience (M24-M32)**
- Bar: Slate 600, 60px height
- Length: 8 months (800px width)
- Milestones:
  - M26: "📱 Citizen portal (mobile + web) launched"
  - M28: "🔗 30+ services integrated"
  - M30: "🎨 Co-design feedback loops operational"
  - M32: "✅ 85% digital adoption achieved"

**Continuous Improvement (M32-M36)**
- Bar: Sky Blue 500, 60px height
- Length: 4 months (400px width)
- Milestones:
  - M33: "📊 CSI (Continual Service Improvement) framework embedded"
  - M34: "🔄 Automated workflows deployed"
  - M36: "🎯 Target ROI 3.5:1 achieved"

**Workforce Maturity (M24-M36, parallel track)**
- Bar: Amber 400, 40px height
- Length: 12 months (1200px width)
- Milestones:
  - M27: "👥 500 FTEs, 80% indigenous capability"
  - M30: "📈 Staff turnover <20%"
  - M33: "🎓 500+ GSM certifications"
  - M36: "✅ 600 FTEs, fully operational digital government"

**Final Review (M36, Teal 500 vertical line):**
- Icon: ✅ Success (Teal 500, 48x48px)
- Label: "FINAL REVIEW" (Inter Bold 16px, Teal 500)
- Success Criteria:
  - ✅ 30+ services operational
  - ✅ 85%+ citizen adoption
  - ✅ 99.5%+ service availability
  - ✅ 3.5:1 ROI achieved
  - ✅ 80%+ indigenous capability
- **Outcome:** "Sustainable digital government operations"

---

**Bottom Deliverables Table (Slate 100 background, 240px height):**

| Phase | Duration | Budget | FTEs | Services | Adoption | ROI | Key Milestone |
|-------|----------|--------|------|----------|----------|-----|---------------|
| **Phase 1** | M0-M12 | $30M | 30→100 | 0→3 | 15-25% | 0.8:1 | Platform deployed, policy approved |
| **Phase 2** | M12-M24 | $45M | 100→200 | 3→15 | 25-60% | 1.8:1 | TBM transparency, 10 services live |
| **Phase 3** | M24-M36 | $25M | 200→600 | 15→30+ | 60-85% | 3.5:1 | Citizen portal, 85% adoption, sustainable ops |

**Risk Mitigation Callout (Rose 500 accent, 100px height):**
- Icon: ⚠️ Warning triangle (Rose 500, 32x32px)
- **Common Risks:**
  - Political change during implementation → **Mitigation:** Lock in multi-year budget authorization
  - Talent acquisition delays → **Mitigation:** Partner with universities, remote work options
  - Service migration failures → **Mitigation:** Pilot 2-3 services in Phase 1 before scaling
  - Citizen adoption lower than target → **Mitigation:** Co-design workshops, change champions
- **Evidence:** "Estonia took 7 years (2000-2007) to reach 80% adoption - 36 months is achievable with PPT balance"

**Bottom Right Logo/Attribution:**
- Logo: GaaS Framework logo (if exists)
- Attribution: "Government as a Service Framework | CC-BY-4.0 License"
- Contact: "community@gaas-framework.org"

---

## Figma Setup Instructions {#figma-setup}

### Creating a New Figma File

1. **Create Project:**
   - Open Figma
   - Create new project: "GaaS Framework Infographics"
   - Create new file within project: "Infographics Master File"

2. **Set Up Pages:**
   - Create 16 pages (one per infographic):
     - Page 1: #1 Legacy vs Digital
     - Page 2: #2 World Success Map
     - ... (continue for all 16)
   - Create additional page: "Design System" (for reusable components)

3. **Configure Canvas:**
   - For each page, set up appropriate artboard size (see individual specs above)
   - Enable rulers and guides (View → Rulers, View → Grids)
   - Use 8pt grid system (Preferences → Nudge Amount: 8px)

### Design System Setup (Reusable Components)

**Create on "Design System" page:**

**1. Color Styles:**
- Create color styles for all brand colors:
  - Primary/Slate 700: `#334155`
  - Primary/Slate 800: `#1e293b`
  - Primary/Slate 600: `#475569`
  - Accent/Sky Blue 500: `#0ea5e9`
  - Accent/Teal 500: `#14b8a6`
  - Accent/Amber 400: `#facc15`
  - Accent/Rose 500: `#f43f5e`
  - Neutral/Slate 100: `#f1f5f9`
  - Neutral/Slate 50: `#f8fafc`
  - White: `#ffffff`

**2. Text Styles:**
- Create text styles for all typography variants:
  - H1/Main Title: Inter Bold 48-64px, Slate 800, Line height 1.2
  - H2/Section Header: Inter SemiBold 36-48px, Slate 700, Line height 1.3
  - H3/Subsection: Inter SemiBold 24-32px, Slate 700, Line height 1.4
  - Body Large: Inter Regular 18-20px, Slate 600, Line height 1.6
  - Body: Inter Regular 14-16px, Slate 600, Line height 1.5
  - Caption: Inter Medium 12-14px, Slate 500, Line height 1.4
  - Data/Metric: Inter Bold 24-36px, Slate 800

**3. Component Library:**
- Create reusable components:
  - **Card/Box:** Rectangle with 8px border radius, 1px Slate 300 border, drop shadow
  - **Icon Placeholder:** Circle 64x64px with icon label
  - **Metric Box:** Card with large number + label
  - **Arrow/Connector:** Various styles (solid, dashed, different widths)
  - **Country Flag:** Placeholder circle with country code

**4. Icon Set:**
- Import Lucide Icons plugin (Plugins → Browse Plugins → "Lucide Icons")
- Create instances of commonly used icons:
  - User/team
  - Server/cloud
  - Lock/key
  - Chart/analytics
  - Building/government
  - Mobile/device
  - Workflow/cogs
  - Health/heart
  - etc.

### Import Brand Assets

**Fonts:**
- Install Inter font family from Google Fonts
- Ensure weights available: Regular (400), Medium (500), SemiBold (600), Bold (700)

**Country Flags:**
- Use flag-icons CDN or import SVG flags for Estonia, Singapore, UAE, Denmark, UK, Canada

**Icons:**
- Use Lucide Icons Figma plugin
- Alternative: Import icon SVGs from Heroicons

---

## Export Specifications {#export-specs}

### Export Settings

**For Web (PNG):**
- Format: PNG
- Scale: 2x (for Retina displays)
- Compression: Medium
- Background: Transparent (for graphics with alpha) or White (for full infographics)

**For Print (PDF):**
- Format: PDF
- Vector content: Preserve
- Fonts: Outline/embed
- Color mode: RGB (for digital print) or CMYK (for offset printing)

**For Social Media:**
- Create additional sizes for common platforms:
  - LinkedIn: 1200x627px (1.91:1 ratio)
  - Twitter/X: 1200x675px (16:9 ratio)
  - Instagram: 1080x1080px (1:1 square)

### File Naming Convention {#file-naming}

**Format:** `gaas-infographic-[number]-[slug]-[version].[ext]`

**Examples:**
- `gaas-infographic-01-legacy-vs-digital-v1.0.png`
- `gaas-infographic-10-layer-architecture-v1.0.pdf`
- `gaas-infographic-14-api-gateway-v2.1.png`

**Versioning:**
- v1.0: Initial release
- v1.1, v1.2: Minor updates (color tweaks, copy edits)
- v2.0: Major redesign

**Export Location:**
- `/docs/public/images/infographics/` (for inclusion in VitePress site)
- Organize by version: `/v1.0/`, `/v2.0/` (to preserve history)

---

## Implementation Workflow

**Recommended Approach:**

1. **Week 1: Design System + 3 Quick Wins**
   - Set up Figma file with design system
   - Create infographics #1, #2, #3 (existing ones, redesign for consistency)
   - Export and test in VitePress

2. **Week 2: Technical Infographics (4-6)**
   - Create infographics #4, #5, #6
   - Focus on data viz accuracy
   - Review with technical stakeholders

3. **Week 3: Complex Infographics (7-9)**
   - Create infographics #7, #8, #9
   - Iterate based on feedback from Week 2

4. **Week 4: New Infographics (10-13)**
   - Create infographics #10, #11, #12, #13
   - New content, highest complexity

5. **Week 5: Final Infographics (14-16)**
   - Create infographics #14, #15, #16
   - Complete the suite

6. **Week 6: Refinement & Export**
   - Final review and edits
   - Export all formats (PNG, PDF, social)
   - Update VitePress site
   - Create infographic gallery page

**Total Effort Estimate:** 80-100 hours (assuming designer familiar with Figma and GaaS content)

---

## Quality Checklist

Before finalizing each infographic:

**Content Accuracy:**
- [ ] All data/metrics verified against source documents
- [ ] No typos or grammatical errors
- [ ] Country examples accurate (names, populations, metrics)
- [ ] URLs and references correct

**Visual Consistency:**
- [ ] Brand colors used correctly (no off-brand colors)
- [ ] Typography styles consistent (text styles applied, not manual)
- [ ] Icon style consistent (all line-art or all filled, not mixed)
- [ ] Spacing follows 8pt grid system

**Accessibility:**
- [ ] Color contrast meets WCAG 2.1 AA (4.5:1 for text, 3:1 for UI)
- [ ] Text readable at intended size (minimum 14px for body)
- [ ] Icons have labels or are decorative only
- [ ] Infographic has alt text description (for export to web)

**Technical Quality:**
- [ ] Correct artboard size (matches spec)
- [ ] All elements within safe area (not cut off at edges)
- [ ] Export resolution: 2x for web, vector for print
- [ ] File size optimized (<500KB for PNG, <2MB for PDF)

**Reusability:**
- [ ] Components used (not one-off shapes)
- [ ] Styles applied (colors and text)
- [ ] Layers organized and named clearly
- [ ] Can be updated easily for future versions

---

## Contact & Support

**Questions or Feedback:**
- GitHub Discussions: https://github.com/Happy-Technologies-LLC/Government-as-a-Service/discussions
- Email: community@gaas-framework.org

**Design Contributions:**
- All infographics are CC-BY-4.0 licensed
- Community contributions welcome (submit via Pull Request)
- Credit original designer in file metadata

---

**End of Specifications**

*Last updated: November 14, 2025*
*Version: 1.0*
*Total Infographics: 16 (9 redesigns + 7 new)*
*Total Pages: ~50*

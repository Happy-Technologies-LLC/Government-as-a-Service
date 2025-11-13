# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Purpose

This is the **Government as a Service (GaaS)** framework repository - a comprehensive, open-source blueprint for digital government transformation. The repository contains strategic documentation, technical architecture, implementation playbooks, policy templates, and VitePress-based documentation site.

## Current State: Architecture Refactoring in Progress

The framework is undergoing a major refactoring from a **tier-based structure (0-5)** to a new **layer-based architecture (0-4)** that better represents an integrated operating model. See the blueprint documents in the root directory:

- `GaaS_Framework_Blueprint.md` - Master blueprint for refactoring
- `GaaS_AI_Blueprint.md` - AI-specific migration instructions
- `Problem_Solution.md` - Problem statement and new architecture vision

### New Architecture (Target State)
**Layer 0:** Legal & Policy Foundation
**Layer 1:** Shared Technology Core
**Layer 2:** People & Process Engine
**Layer 3:** Transparent Service Portfolio
**Layer 4:** Unified Citizen Experience

### Old Architecture (Current in `Version 1.0/`)
**Tier 0:** Manifesto
**Tier 1:** Executive Playbook
**Tier 2:** Technical Blueprints
**Tier 3:** Implementation Playbooks
**Tier 4:** Policy & Legal Templates
**Tier 5:** Community Hub

## Repository Structure

```
/
├── Version 1.0/                          # Current framework implementation
│   ├── docs/                             # VitePress documentation
│   │   ├── .vitepress/
│   │   │   ├── config.mts               # Site configuration
│   │   │   └── theme/                   # Custom theme components
│   │   ├── tier0-manifesto/
│   │   ├── tier1-executive-playbook/
│   │   ├── tier2-technical-blueprint/
│   │   ├── tier3-playbooks/
│   │   ├── tier4-policy-legal/
│   │   └── tier5-community/
│   ├── scripts/                         # Build and generation scripts
│   ├── research/                        # Research documents (GSM, ITIL, TBM)
│   ├── technical-design/                # Technical architecture docs
│   └── press-kit/                       # Marketing materials
├── GaaS_Framework_Blueprint.md          # Refactoring master plan
├── GaaS_AI_Blueprint.md                 # AI migration instructions
└── Problem_Solution.md                  # Architecture vision
```

## Key Commands

### Documentation Site
```bash
cd "Version 1.0"
npm install                    # Install dependencies
npm run docs:dev              # Start dev server (http://localhost:5173)
npm run docs:build            # Build static site
npm run docs:preview          # Preview production build
```

### Infographic Generation
```bash
npm run pdfs:generate         # Generate PDFs from docs
node scripts/convert-html-to-png-playwright.js  # Convert HTML infographics to PNG
```

### Git Operations
The repository is configured for GitHub Pages deployment at `https://happy-technologies-llc.github.io/Government-as-a-Service/`

## Framework Concepts

### The GaaS Operating Model
The framework provides two integrated views:

1. **GaaS Architectural Framework** - The static structure (5 layers)
2. **GaaS Service Value System (GSVS)** - The dynamic process engine (inspired by ITIL)

### Service Value Chain (GSVS)
The process flow that turns public mandates into valuable services:
1. **Mandate** → Identify need (Layer 0 policy)
2. **Architect** → Design solution (Layer 1 blueprints)
3. **Build/Acquire** → Implement (Layer 2 teams + Agile)
4. **Transition** → Test & release (Layer 2 ITIL)
5. **Deliver & Support** → Operate (Layer 3 portfolio, Layer 4 experience)

### Integrated Methodologies
- **ITIL v4** - Service management practices
- **TBM (Technology Business Management)** - Cost transparency and allocation
- **Zero Trust** - Security architecture
- **TOGAF/ArchiMate** - Enterprise architecture
- **Agile/Scrum** - Delivery methodology

## Content Migration Guidelines

When refactoring from Tier → Layer structure:

**Layer 0 (Foundation)** ← Tier 4 (Policy) + Tier 0 (Manifesto justification)
**Layer 1 (Core)** ← Tier 2 (Technical blueprints only, exclude People volume)
**Layer 2 (Engine)** ← Tier 3 (Playbooks) + Tier 2 (People & Org Architecture)
**Layer 3 (Portfolio)** ← Tier 1 (Executive Playbook as portfolio management)
**Layer 4 (Experience)** ← Tier 5 (Community Hub as co-design mechanism)

## VitePress Configuration

### Site Structure
The site is configured in `Version 1.0/docs/.vitepress/config.mts`:
- Base path: `/Government-as-a-Service/`
- GitHub Pages deployment
- Custom theme with print buttons and Giscus comments
- Sidebar navigation organized by tiers (will become layers)

### Theme Customization
Custom components in `Version 1.0/docs/.vitepress/theme/`:
- `PrintButton.vue` - PDF export functionality
- `GiscusComments.vue` - GitHub Discussions integration
- `custom.css` - Brand styling

## Writing Guidelines

### Documentation Standards
- **Multi-audience approach** - Different entry points for executives, architects, implementers
- **Evidence-based** - Reference real implementations (Estonia, Singapore, UAE, Denmark)
- **Actionable** - Include concrete implementation steps
- **Global applicability** - Consider international contexts and languages

### Content Structure
Each major document should include:
- Executive summary (1-2 pages)
- Implementation roadmap with timelines
- Real-world examples and case studies
- Success metrics and KPIs
- Templates and checklists

### Real-World References
Key countries to reference for validation:
- **Estonia** - X-Road, e-Residency, digital governance
- **Singapore** - Smart Nation, API standards
- **UAE** - Government as a Platform
- **Denmark** - NemID/MitID, shared services
- **United Kingdom** - GDS, GOV.UK

## Technical Design Documents

The `Version 1.0/technical-design/` directory contains detailed architecture:
- **00-overview.md** - System overview
- **01-system-architecture.md** - Technical architecture
- **02-data-model-cmdb.md** - CMDB structure
- **03-service-portfolio-management.md** - Portfolio management
- **04-complete-gsm-public-transparency.md** - TBM transparency framework
- **07-technology-stack.md** - Technology decisions
- **08-implementation-roadmap.md** - Phased rollout

## Research Documents

The `Version 1.0/research/` directory contains foundational research:
- **gsm-governance-model.md** - Government Service Management governance
- **gsm-people-process-technology-framework.md** - PPT framework (40-40-20 balance)
- **itil-v4-integration-strategy.md** - ITIL integration
- **ppt-best-practices-research.md** - PPT balance research
- **ppt-integration-roadmap.md** - PPT implementation roadmap

## Infographics

HTML-based infographics in `Version 1.0/docs/public/images/infographics/`:
1. Legacy vs Digital Government
2. World Success Map
3. Implementation Timeline
4. Fourth Model (PPT Framework)
5. PPT Framework Detail
6. GSM Framework
7. GSM vs ITSM Comparison
8. Country Case Studies
9. Service Portfolio Hierarchy

Convert to PNG using Playwright script for distribution.

## Press Kit & Marketing

Materials in `Version 1.0/press-kit/`:
- **press-release.md** - Official announcement
- **attorney-outreach-email.md** - Legal community outreach
- **brand-guidelines.md** - Visual identity
- **fiverr-job-posting.md** - Infographic design specifications

## Key Principles

1. **Holistic Integration** - Framework components must interconnect as a unified system
2. **40-40-20 PPT Balance** - 40% People, 40% Process, 20% Technology investment
3. **Radical Transparency** - TBM-based cost visibility down to service level
4. **Open Source** - CC-BY-4.0 license, community-driven
5. **Evidence-Based** - All recommendations backed by real implementations

## Target Outcomes

**5-year goals:**
- 30+ countries actively implementing
- 500+ certified GaaS practitioners
- $10B+ in documented value creation
- ISO/ITU/World Bank/OECD standard recognition

## Important Notes

- This is a **documentation repository** - no code compilation or testing
- The main site is in `Version 1.0/` directory - always work there
- VitePress builds to `Version 1.0/docs/.vitepress/dist/`
- Always reference the blueprint documents when refactoring architecture
- Maintain consistency with integrated methodologies (ITIL, TBM, Zero Trust)
- Consider international audiences - multiple languages and cultural contexts

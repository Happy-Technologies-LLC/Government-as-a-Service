# GaaS Platform - Open Source Principles

**Document:** Open Source Principles & Licensing
**Version:** 1.0
**Date:** October 2025

---

## Our Commitment

**The GaaS Platform is 100% open source and will NEVER become a commercial product.**

This platform exists to serve the public good. Digital government infrastructure should be:
- Free for all governments to use
- Transparent and auditable
- Community-driven and improved
- Sovereign (governments own their data and systems)

---

## License: AGPLv3

**Why AGPLv3 (GNU Affero General Public License v3.0)?**

AGPLv3 is the strongest copyleft license for web/cloud platforms. It ensures:

### ✅ Freedom to Use
- Any government can deploy GaaS Platform at no cost
- No per-user fees, no per-service fees, no "enterprise" upgrade costs
- Use for any purpose (production, testing, development)

### ✅ Freedom to Study
- Complete source code available on GitHub
- All documentation, architecture decisions, and design rationale public
- Security audits can be performed by government security teams

### ✅ Freedom to Modify
- Governments can customize for their specific needs
- Add new modules, change workflows, integrate with local systems
- No restrictions on modifications

### ✅ Freedom to Share
- Governments can share improvements with other governments
- Community contributions improve platform for everyone
- Network effect: every government's improvements benefit all

### ⚠️ Network Copyleft Clause (The Key Difference)

AGPLv3 includes a "network copyleft" clause:

**If you deploy GaaS Platform as a service (e.g., cloud-hosted), you MUST:**
- Make your source code available to users
- Include any modifications you made
- License modifications under AGPLv3

**Why This Matters:**
- Prevents "SaaS loophole" (running modified version as service without sharing code)
- Ensures all improvements flow back to community
- Stops companies from taking the platform private and selling as proprietary SaaS

**Example:**
- ❌ **Not Allowed:** Company X takes GaaS Platform, adds proprietary features, sells "GaaSPro" as closed-source SaaS
- ✅ **Allowed:** Company X takes GaaS Platform, adds features, deploys as SaaS, shares code publicly under AGPLv3

---

## What GaaS Platform Will NEVER Do

### ❌ Commercial "Enterprise Edition"
- **No:** "Community Edition (limited) + Enterprise Edition (paid features)"
- **Yes:** One platform, all features open source

### ❌ Per-User or Per-Service Licensing
- **No:** "$50 per user per month" or "free up to 10 services"
- **Yes:** Unlimited users, unlimited services, forever free

### ❌ Vendor Lock-In
- **No:** Proprietary data formats, closed APIs, migration fees
- **Yes:** Standard APIs (REST/GraphQL), open data models, export tools

### ❌ Feature Paywalls
- **No:** "Upgrade to Pro for advanced analytics"
- **Yes:** All features available to everyone

### ❌ Support as Revenue Model
- **No:** "You must buy our support contract"
- **Yes:** Community support free, optional commercial support from certified partners (not from us)

---

## Business Model: How Does GaaS Platform Sustain Itself?

**GaaS Platform Foundation is a non-profit with these funding sources:**

### 1. Government Grants
- Foundations and international development organizations
- World Bank, UNDP, USAID digital government programs
- National digital transformation budgets

### 2. Philanthropic Donations
- Technology foundations (e.g., Mozilla Foundation, Apache Software Foundation)
- Individual donors who believe in digital public goods

### 3. Corporate Sponsorships
- Technology companies supporting open-source government infrastructure
- Transparent sponsorship (listed on website, no influence over roadmap)

### 4. Optional Commercial Support Ecosystem
- **GaaS Platform Foundation provides NO commercial services**
- **Certified Partners** can offer:
  - Implementation services (help governments deploy)
  - Training and certification
  - Custom development (paid by governments, code contributed back to community)
  - Managed hosting (governments pay partner, not Foundation)
- **Revenue flows to partners, not Foundation**
- **All code contributions remain open source**

**Example:**
- Government of Country X wants to deploy GaaS Platform
- Option A: Deploy themselves using open documentation (free)
- Option B: Hire Certified Partner for implementation ($200K professional services)
- Partner deploys platform, trains staff, customizes workflows
- Any custom code partner writes becomes part of open-source platform
- Government owns platform completely after partner engagement ends

---

## Why Open Source Matters for Government

### 1. Transparency
- Citizens can audit how their government operates
- Code is law: automation rules are visible and reviewable
- No "black box" algorithms making decisions about citizens

### 2. Sovereignty
- Government owns and controls its digital infrastructure
- No dependency on foreign companies
- Can modify to comply with local laws and regulations

### 3. Security
- "Many eyes make all bugs shallow" (Linus's Law)
- Security researchers can audit and report vulnerabilities
- No security through obscurity

### 4. Sustainability
- Platform cannot be "discontinued" by vendor
- Community can maintain even if original developers stop
- No vendor bankruptcy risk

### 5. Cost
- $0 license fees (typical ITSM platforms cost $50M-500M for government deployments)
- Budget spent on people and processes, not vendor fees
- Aligns with 40-40-20 PPT principle (not 70% to software vendors)

### 6. Interoperability
- Open APIs and standards
- Easy integration with other government systems
- No proprietary data formats

### 7. Innovation
- Governments and partners can extend platform
- Best ideas from any government can benefit all
- Faster feature development through community contributions

---

## Comparison: Open Source vs. Commercial Platforms

| Aspect | GaaS Platform (Open) | Commercial ITSM (Proprietary) |
|--------|---------------------|------------------------------|
| **License Cost** | $0 | $50M-500M over 10 years |
| **Per-User Fees** | $0 | $50-200 per user per month |
| **Source Code** | Fully available | Closed, proprietary |
| **Modifications** | Freely customize | Requires vendor approval, additional fees |
| **Data Ownership** | Government owns 100% | Vendor stores, extraction fees |
| **Vendor Lock-In** | None, portable | High, migration very expensive |
| **Sustainability** | Community-maintained indefinitely | Vendor can discontinue or raise prices |
| **Transparency** | All code auditable | Black box, cannot verify |
| **Sovereignty** | Full government control | Vendor controls updates, features |
| **Support** | Community + optional paid partners | Paid support contracts only |

**Result:** Over 10 years, a mid-sized government saves **$50-100M** by using GaaS Platform instead of commercial alternatives.

---

## Governance Model

### Technical Steering Committee (TSC)
- **9 members:**
  - 3 government representatives (from deploying governments)
  - 3 active code contributors
  - 3 independent experts (academia, standards bodies)
- **2-year terms, rotating**
- **Decisions:** Lazy consensus for minor changes, majority vote for major changes

### Decision-Making
- **Major decisions** (architecture changes, license changes): TSC vote
- **Minor decisions** (feature additions, bug fixes): Lazy consensus (no objections within 72 hours = approved)
- **Roadmap:** Quarterly planning based on government priorities and community input

### Contribution Process
1. **Contributor License Agreement (CLA):** Sign once
2. **Pull Request:** Submit code changes
3. **Code Review:** 2+ maintainers approve
4. **Automated Tests:** Must pass CI/CD
5. **Merge:** Becomes part of platform

---

## Certified Partners Program

**Purpose:** Help governments deploy GaaS Platform successfully

### Partner Certification
- **Training:** 40-hour certification program
- **Exam:** Platform administration and deployment
- **Code of Conduct:** Commit to open-source principles
- **Annual Renewal:** Stay current with platform updates

### What Certified Partners Can Do
- ✅ Offer implementation services (paid by governments)
- ✅ Provide training and change management
- ✅ Develop custom modules (must contribute back to open source)
- ✅ Offer managed hosting (government data remains sovereign)

### What Certified Partners CANNOT Do
- ❌ Sell proprietary add-ons or plugins
- ❌ Lock governments into partner-specific features
- ❌ Charge recurring license fees
- ❌ Restrict government's ability to switch partners

### Revenue Model
- Partners charge for services (implementation, training, hosting)
- Partner revenue does NOT go to GaaS Platform Foundation
- Foundation receives 5% of partner revenue as sustainability contribution (optional)

---

## Examples of Open Source Government Success

### 1. Estonia - X-Road (Data Exchange Platform)
- **Open Source:** AGPLv3 licensed
- **Deployed:** Estonia, Finland, Iceland, Faroe Islands, Namibia, Azerbaijan
- **Result:** 99% government services online, saves 834 hours/citizen/year
- **Cost:** $0 license fees, countries only pay deployment/customization

### 2. France - Tchap (Secure Messaging)
- **Open Source:** Matrix protocol
- **Purpose:** Government secure communications
- **Result:** 300,000+ government employees, fully sovereign
- **Alternative:** Would have cost €50M+ for proprietary solution

### 3. Germany - OpenCoDE Platform
- **Purpose:** Share open-source code across government agencies
- **Result:** Reduced duplicate development, €10M+ saved
- **Principle:** Public money = public code

### 4. UK - GOV.UK Notify
- **Open Source:** MIT licensed
- **Purpose:** Send emails, SMS, letters to citizens
- **Deployed:** UK, Canada (GOV.BC), Australia
- **Cost:** £0 license fees, governments only pay usage (SMS/postage costs)

---

## Migration from Commercial Platforms

**Governments can migrate from commercial ITSM platforms to GaaS Platform:**

### Migration Tools (Open Source)
- CSV/Excel import tools
- API-based data migration (from platforms with APIs)
- Database export scripts (PostgreSQL, MySQL)
- Attachment migration (files, documents, images)

### Migration Support
- Certified Partners can assist with migrations
- Community provides migration guides and templates
- Government IT teams can migrate independently (documentation provided)

### No Lock-In from GaaS Platform Either
- Governments can export all data (CSV, JSON, SQL dumps)
- API available for ongoing data sync
- If government wants to leave GaaS Platform, they can (though why would they?)

---

## Long-Term Sustainability

**How do we ensure GaaS Platform exists for decades?**

### 1. Non-Profit Foundation
- Registered as 501(c)(3) non-profit (or equivalent)
- Board includes government representatives
- Finances audited and publicly reported

### 2. Diverse Funding
- Not dependent on single donor or government
- Mix of grants, donations, sponsorships
- Goal: $5M annual budget for core team + infrastructure

### 3. Code Escrow (Redundancy)
- Full source code mirrored across multiple locations
- GitHub (primary) + GitLab (mirror) + government-hosted backups
- Even if Foundation dissolved, code lives on

### 4. Community Ownership
- Large active community can fork if needed
- No single point of failure
- Multiple governments using in production = sustainability

### 5. Backward Compatibility
- API versioning (support N and N-1 versions)
- Database migrations maintain data integrity
- Upgrade paths tested rigorously

---

## Call to Action

**For Governments:**
- Join pilot program (free)
- Contribute requirements and feedback
- Share your customizations with community
- Fund open-source development (grants)

**For Developers:**
- Contribute code, documentation, translations
- Help review pull requests
- Build plugins and extensions (open source)
- Become certified implementation partner

**For Organizations:**
- Sponsor GaaS Platform Foundation
- Provide grants for development
- Support government digital transformation projects
- Advocate for "public money = public code"

---

## Contact

**GaaS Platform Foundation**
- Website: https://platform.gaas.global
- GitHub: https://github.com/gaas-platform/gaas-platform
- Email: opensource@gaas.global
- License Questions: legal@gaas.global
- Partnership Inquiries: partners@gaas.global

---

## License Text

**Full AGPLv3 License:** [LICENSE.md](../LICENSE.md)

**Summary (not legal advice):**
- ✅ Use commercially
- ✅ Modify
- ✅ Distribute
- ✅ Private use
- ⚠️ Disclose source (if deployed as network service)
- ⚠️ License and copyright notice
- ⚠️ State changes
- ⚠️ Same license (copyleft)

**Key Point:** If you deploy GaaS Platform as a service that users access over a network, you must make your source code available under AGPLv3.

---

*This document is itself open source under CC BY 4.0. Feel free to adapt for your open-source government projects.*

**Version 1.0 | October 2025**

# Government as a Service - Open Source Commitment

**Version:** 1.0
**Date:** October 2025
**License:** CC BY 4.0

---

## Our Commitment

**The Government as a Service (GaaS) framework and GaaS Platform are 100% open source and will NEVER become commercial products.**

This commitment applies to:
- ✅ All documentation (Tier 0-5)
- ✅ All technical blueprints and playbooks
- ✅ All policy and legal templates
- ✅ The GaaS Platform software (when released)
- ✅ All community resources

---

## Why Open Source for Government?

### 1. **Transparency**
Democratic governments must be transparent. Open source ensures:
- Citizens can audit how their government operates
- Code is law: automation rules are visible and reviewable
- No "black box" algorithms making decisions about citizens
- Full accountability for public spending

### 2. **Sovereignty**
Governments must control their digital infrastructure:
- No dependency on foreign commercial vendors
- Can modify to comply with local laws and regulations
- Data stays within government control
- No vendor bankruptcy risk or discontinued products

### 3. **Cost**
Open source eliminates license fees:
- Typical commercial ITSM platforms: **$50M-500M** over 10 years
- Open source platforms: **$0 license fees** forever
- Budget spent on people and processes, not vendor fees
- Aligns with **40-40-20 PPT principle** (not 70%+ to software vendors)

### 4. **Security**
Open source is more secure:
- "Many eyes make all bugs shallow" (Linus's Law)
- Security researchers can audit and report vulnerabilities
- No security through obscurity
- Community-driven security patches

### 5. **Sustainability**
Open source projects live forever:
- Platform cannot be "discontinued" by vendor
- Community can maintain even if original developers stop
- No vendor acquisition or pivot risk
- Knowledge persists in community

### 6. **Innovation**
Open source accelerates innovation:
- Governments and partners can extend platform
- Best ideas from any government benefit all
- Faster feature development through community contributions
- Competitive marketplace of implementation partners

---

## Open Standards Foundation

The GaaS framework is built on **open international standards**, not proprietary methodologies:

### ✅ ITIL v4
- IT Service Management best practices framework
- Globally recognized standard
- Not owned by any vendor
- **Source:** [AXELOS](https://www.axelos.com/certifications/itil-service-management)

### ✅ ISO/IEC 20000
- International standard for IT service management
- Certification available for governments
- Vendor-neutral compliance
- **Source:** [ISO](https://www.iso.org/standard/70636.html)

### ✅ COBIT
- Control Objectives for Information and Related Technologies
- Open governance framework
- No license fees
- **Source:** [ISACA](https://www.isaca.org/resources/cobit)

### ✅ TBM Framework
- Technology Business Management
- Open standard for cost allocation
- Industry consortium (not single vendor)
- **Source:** [TBM Council](https://www.tbmcouncil.org)

### ✅ Common Services Data Model (CSDM)
- Industry-standard CMDB hierarchy pattern
- Used across multiple platforms
- Not proprietary to any vendor
- Based on ITIL practices

---

## Open Source Tools Recommended

When the GaaS framework references tools, we recommend **open source only**:

### Service Management (ITSM)
- **GaaS Platform** (under development) - AGPLv3
- **iTop** - AGPLv3 - [combodo.com/itop](https://www.combodo.com/itop-193)
- **GLPI** - GPL - [glpi-project.org](https://glpi-project.org)
- **OTRS** - GPL - [otrs.com](https://otrs.com)
- **Request Tracker (RT)** - GPL - [bestpractical.com/request-tracker](https://bestpractical.com/request-tracker)

### CMDB (Configuration Management)
- **GaaS Platform CMDB** (under development)
- **iTop** - AGPLv3
- **GLPI** - GPL
- **Ralph** - Apache 2.0 - [github.com/allegro/ralph](https://github.com/allegro/ralph)

### Project Management
- **GitLab** - MIT (core) - [gitlab.com](https://gitlab.com)
- **GitHub Projects** - Free tier available
- **Taiga** - AGPL - [taiga.io](https://taiga.io)
- **Redmine** - GPL - [redmine.org](https://www.redmine.org)
- **Wekan** - MIT - [wekan.github.io](https://wekan.github.io)

### Communication & Collaboration
- **Mattermost** - AGPLv3/Apache 2.0 - [mattermost.com](https://mattermost.com)
- **Matrix** - Apache 2.0 - [matrix.org](https://matrix.org)
- **Rocket.Chat** - MIT - [rocket.chat](https://rocket.chat)
- **Nextcloud** - AGPLv3 - [nextcloud.com](https://nextcloud.com)

### Analytics & Dashboards
- **Metabase** - AGPL - [metabase.com](https://www.metabase.com)
- **Superset** - Apache 2.0 - [superset.apache.org](https://superset.apache.org)
- **Grafana** - AGPL - [grafana.com](https://grafana.com)

### Design & Prototyping
- **Penpot** - MPL 2.0 - [penpot.app](https://penpot.app)
- **Inkscape** - GPL - [inkscape.org](https://inkscape.org)
- **GIMP** - GPL - [gimp.org](https://www.gimp.org)

---

## What We've Removed

To ensure complete open-source alignment, we've removed all references to proprietary platforms:

### ❌ Removed References
- ServiceNow (proprietary ITSM)
- BMC Remedy (proprietary ITSM)
- Jira (proprietary project management)
- Atlassian products (proprietary collaboration)
- Salesforce (proprietary CRM)
- Specific commercial SaaS examples where open-source alternatives exist

### ✅ Replaced With
- Open international standards (ITIL, ISO 20000, COBIT, TBM)
- Open-source tool recommendations
- Industry-standard patterns (CSDM, not "ServiceNow CSDM")
- Generic descriptions ("commercial ITSM platforms" vs. naming vendors)

---

## Exceptions: When Commercial Is Acceptable

We recognize some areas where open-source alternatives are limited:

### Infrastructure Services
- **Cloud Providers:** AWS, Azure, GCP (acceptable via standard APIs, avoid lock-in)
- **Email/Office:** Microsoft 365, Google Workspace (commodity services, low strategic risk)
- **Specialized Tools:** Contact centers, payment gateways (regulated industries)

**Principle:** Use commercial for **commodity services** where:
- Low strategic risk
- No vendor lock-in
- Standard APIs available
- Open-source alternatives immature

**Avoid commercial for:**
- Core government systems (identity, service management, CMDB)
- High vendor lock-in risk
- Strategic data and processes
- Long-term dependencies

---

## Real-World Open Source Government Examples

### Estonia - X-Road
- **License:** AGPLv3
- **Purpose:** Secure data exchange platform
- **Deployed:** Estonia, Finland, Iceland, Faroe Islands, Namibia, Azerbaijan
- **Result:** 99% services online, 834 hours/citizen/year saved
- **Cost:** $0 license fees (countries pay deployment/customization only)

### France - Tchap
- **License:** Matrix protocol (open standard)
- **Purpose:** Government secure messaging
- **Users:** 300,000+ government employees
- **Result:** Fully sovereign, no vendor dependency
- **Savings:** €50M+ vs. proprietary alternative

### UK - GOV.UK Notify
- **License:** MIT
- **Purpose:** Send emails, SMS, letters to citizens
- **Deployed:** UK, Canada (GOV.BC), Australia
- **Cost:** £0 license fees (governments pay usage: SMS/postage costs)

### Germany - OpenCoDE Platform
- **Purpose:** Share open-source code across government agencies
- **Result:** Reduced duplicate development, €10M+ saved
- **Principle:** Public money = public code

---

## How to Contribute

### For Governments
- Adopt GaaS framework in your digital transformation
- Share your implementations and lessons learned
- Contribute back improvements and local adaptations
- Fund open-source development (grants, sponsorships)

### For Developers
- Contribute to GaaS Platform development
- Build plugins and extensions (open source)
- Help maintain open-source ITSM/CMDB tools
- Translate documentation into more languages

### For Implementation Partners
- Get certified in GaaS framework
- Offer implementation services (not licenses)
- Contribute code back to open-source projects
- Support governments with deployment and training

### For Academia
- Research digital government transformation
- Develop curriculum based on GaaS framework
- Publish case studies and evaluations
- Train next generation of government digital leaders

---

## Contact

**GaaS Community:**
- Website: [gaas.global](https://gaas.global)
- Email: opensource@gaas.global
- GitHub: [github.com/gaas-framework](https://github.com/gaas-framework)
- Community Forum: [community.gaas.global](https://community.gaas.global)

**GaaS Platform Foundation:**
- Platform Website: [platform.gaas.global](https://platform.gaas.global)
- GitHub: [github.com/gaas-platform/gaas-platform](https://github.com/gaas-platform/gaas-platform)
- Technical Questions: dev@gaas.global

---

## Public Money = Public Code

We align with the international movement for government digital sovereignty:

> "Code paid for by the people should be available to the people!"

**Learn more:**
- Public Money, Public Code: [publiccode.eu](https://publiccode.eu)
- Free Software Foundation Europe (FSFE)
- Open Source Initiative (OSI)

---

**Principle:** Digital government infrastructure should be a **public utility**, not a commercial product. Open source ensures transparency, sovereignty, security, and sustainability—all essential for democratic governments serving their citizens.

---

*This document is licensed under CC BY 4.0. You are free to share and adapt for your government open-source initiatives.*

**Last Updated:** October 2025 | Version 1.0

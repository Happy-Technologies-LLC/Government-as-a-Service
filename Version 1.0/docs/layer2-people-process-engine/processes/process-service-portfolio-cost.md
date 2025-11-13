# Layer 2 Process: Service Portfolio & Cost Management

**Official Operating Procedure**
**Layer 2: People & Process Engine → Process Dimension**

**Workstream:** Service Portfolio Architecture & Technology Business Management
**Timeline:** 18-30 months (6 months catalog → 12-18 months to cost allocation)
**Owner:** Chief Operating Officer + Chief Financial Officer + Chief Digital Officer (joint, rotating chair)
**Budget:** $7-12M (Medium Government, 5M population) - Add 70% if finance integration/change management needed
**Prerequisites:** GSM Governance (WS9), CMDB Foundation, CEO commitment (Finance WILL fight you)
**Dependencies:** All service delivery workstreams
**Resource Reality:** Finance analysts, ITIL experts, CMDB admins + organizational change team (Finance weaponizes transparency)

---

## EXECUTIVE SUMMARY

Most governments cannot answer basic questions: "How much does healthcare IT cost?" or "What infrastructure supports education services?" This playbook solves that problem by establishing a **comprehensive Service Portfolio Architecture** that provides end-to-end visibility from citizen-facing services down to individual servers and cost drivers.

**The Problem:**

Without service portfolio management, governments experience:
- ❌ **No cost visibility**: Cannot isolate healthcare IT costs from education IT costs
- ❌ **No impact analysis**: Cannot predict infrastructure needs when expanding a service
- ❌ **No accountability**: No clear owner for service costs and performance
- ❌ **Inefficient investment**: Cannot compare ROI across service domains
- ❌ **Governance chaos**: Every agency operates independently with duplicate infrastructure

**The Solution:**

This playbook implements a **hierarchical service portfolio model** based on open international standards:
- **ITIL Service Portfolio Management**: Business services mapped to technical services
- **ISO/IEC 20000**: International standard for service management
- **ITIL Value Streams**: End-to-end service delivery chains
- **Technology Business Management (TBM)**: Open framework for cost allocation and financial transparency
- **Common Services Data Model (CSDM)**: Industry-standard CMDB hierarchy pattern

**What You'll Build:**

```
GOVERNMENT SERVICE PORTFOLIO
│
├─ HEALTHCARE DOMAIN ($120M/year IT budget)
│  ├─ Business Service: Healthcare Insurance
│  │  ├─ Technical Services: Eligibility, Claims, Provider Network
│  │  ├─ Applications: Portal, API, Database
│  │  ├─ Infrastructure: 50 servers, 2TB storage, CDN
│  │  └─ Cost Allocation: $45M/year (people $20M, process $15M, tech $10M)
│  │
│  ├─ Business Service: Medical Research Funding
│  │  └─ ... (separate hierarchy)
│  │
│  └─ Business Service: Public Health Programs
│     └─ ... (separate hierarchy)
│
├─ EDUCATION DOMAIN ($80M/year IT budget)
│  ├─ Business Service: Student Enrollment
│  ├─ Business Service: Learning Management
│  └─ Business Service: Teacher Certification
│
├─ JUSTICE DOMAIN ($60M/year IT budget)
│  └─ ...
│
└─ SHARED SERVICES (Cross-Domain)
   ├─ Digital Identity (used by all domains)
   ├─ Payment Gateway (used by all domains)
   └─ Data Analytics Platform (used by all domains)
```

**Expected Outcomes** (24-30 month implementation - be realistic):

- **Cost Transparency**: "Healthcare IT costs $120M/year, Education $80M/year" (Year 3 - 80% allocated, 90-95% by Year 5, some costs NEVER fully allocatable)
- **Domain Governance**: Healthcare CIO owns healthcare service portfolio with isolated budget (expect 18-month political battle)
- **Impact Analysis**: "Expanding insurance eligibility requires 10 more servers ($50K/month)" (if CMDB is accurate - big if)
- **Cost Optimization**: "Claims API costs $2M/year - 60% is database licensing (opportunity)" (Finance will use this to CUT your budget, not optimize)
- **Investment Prioritization**: "Healthcare ROI 4.5:1, Education 3.2:1 → allocate accordingly" (political nightmare - Education will scream)
- **Shared Service Efficiency**: "Identity platform serves 15 domains → economies of scale" (domains will resist paying for "free" shared services)

**WARNING:** Transparent costs = visible budget targets. Finance will weaponize your TBM data. Get C-level protection BEFORE showing real numbers.

**Evidence Base:**

- Organizations with mature service portfolio management achieve **30-40% better cost visibility**
- TBM-aligned governments report **20-30% reduction in duplicate infrastructure**
- Service-domain governance reduces **cross-agency conflicts by 50%**
- Transparent cost allocation enables **evidence-based budget negotiations**

**Reference Implementations:**

- **Australia**: Service portfolio model with TBM cost allocation (2018-present)
- **Netherlands**: Agency-level service catalogs with shared infrastructure (2015-present)
- **Singapore**: GovTech service portfolio with cost recovery model (2016-present)
- **UK Cabinet Office**: Cross-government service catalog with GaaS platforms (2012-present)

---

## WHAT USUALLY GOES WRONG (Read This First!)

### Mistake #1: Bottom-Up Catalog = 5,000 Unusable "Services"

**What They Do:**
IT asks every team: "What services do you provide?"
- Database team: "PostgreSQL hosting service, Oracle hosting service, MySQL hosting service..."
- Network team: "VLAN provisioning service, firewall rule service, DNS service..."
- **Result:** 5,000+ "services" that are actually technical components, not business services
- **Catalog is useless** - executives ask "How much does healthcare cost?" and you say "Which of these 5,000 services are healthcare?"

**What You Should Do:**
Start top-down from citizen outcomes, not technical components.
- Step 1: List 20-40 business services citizens consume (Healthcare Insurance, Tax Filing, Student Enrollment)
- Step 2: Map technical services that support each business service (Claims API → Healthcare Insurance)
- Step 3: Link infrastructure only when needed for impact analysis

**Test:** If a citizen wouldn't recognize it as a service, it's not a Level 1 business service.

---

### Mistake #2: Full Cost Allocation Year 1 = Analysis Paralysis

**What They Do:**
"We need 100% accurate TBM cost allocation before we launch!"
- 18 months building allocation model
- Fighting over cost driver formulas: "Should we allocate network costs by bandwidth or by connection count?"
- Finance demands ±1% accuracy before publishing any reports
- **Result:** Project dies. Nothing ever published. Back to black-box IT budget.

**What You Should Do:**
Launch with 60% accuracy, refine quarterly.
- **Month 6:** Publish rough cost estimates (±30% accuracy): "Healthcare is $100-140M, Education is $70-90M"
- **Month 12:** Improve to ±15% accuracy with major cost drivers allocated
- **Month 24:** Achieve ±10% accuracy with refined cost drivers
- **Accept:** Some costs will NEVER be fully allocatable (corporate overhead, shared security team). Use best judgment allocation.

**Reality Check:** 80% accuracy is enough to make investment decisions. Waiting for 100% means you never launch.

---

### Mistake #3: Technology Costs Only = Missing 60% of TCO

**What They Do:**
TBM model allocates AWS costs, software licenses, data center... but ignores:
- ❌ **People costs** (developers, operations, service management): Often 40-50% of TCO
- ❌ **Process costs** (incident management, change management, compliance): Often 30-40% of TCO
- **Result:** "Healthcare IT costs $30M" (technology only). Real cost is $120M. Budget allocated based on incomplete data.

**What You Should Do:**
Allocate People, Process, AND Technology (PPT) from Day 1.
- Track which developers work on which services (timesheets or team assignments)
- Allocate service management costs by incident/change volume per service
- Include compliance costs (HIPAA for healthcare, FERPA for education)
- **Target:** 40% People, 40% Process, 20% Technology (GaaS standard)

**Why It Matters:** Technology optimization (database migration, cloud right-sizing) saves 10-20%. People/Process optimization (automation, efficiency) saves 30-50%.

---

### Mistake #4: Finance Will Hate You (Plan Accordingly)

**What Happens:**
You publish first TBM report showing "Healthcare IT: $120M/year"
- Finance: "You're telling me healthcare IT costs $120M? Our budget only shows $80M allocated to IT!"
- You: "Yes, because you weren't counting people costs, GSM operations, compliance..."
- Finance: "So we're $40M over budget? **Cut healthcare IT by $40M immediately!**"
- **Result:** Transparent costs become budget cut targets, not optimization opportunities.

**How to Survive:**
Get C-level protection BEFORE publishing real costs.
- **Pre-work (Month 1-3):** Socialize TBM concepts with Finance Minister and COO. Explain "We're not ADDING costs, we're making EXISTING costs visible."
- **Ally building:** Frame TBM as "Finance will finally know where money goes" (they love control/visibility)
- **First report:** Present to CEO/Minister FIRST, get buy-in that "transparency ≠ cuts, transparency = optimization"
- **Defense strategy:** When Finance demands cuts, show alternatives: "We can cut $40M from healthcare IT... by shutting down claims processing (affects 2M citizens). Or we can OPTIMIZE $15M through database migration over 18 months. Your choice."

**Political Reality:** Transparent costs = visible targets. Finance weaponizes this. You need executive air cover or you'll be fighting budget cuts instead of optimizing services.

---

### Mistake #5: Domains Resist Paying for "Free" Shared Services

**What Happens:**
You allocate Digital Identity costs to consuming domains:
- Healthcare: "We have to PAY $4M for identity? It was free before!"
- Education: "Our budget just got cut by $3M for a shared service we didn't ask for!"
- **Rebellion:** Domains threaten to build their own identity systems to "save money"

**What You Should Do:**
Frame shared services as cost SAVINGS, not new charges.
- **Before allocation:** "If you built your own identity system, it would cost $5M initial + $2M/year operations"
- **With shared service:** "You pay $1.5M/year for identity (70% savings vs. building your own)"
- **Show the math:** "Shared identity serves 8 domains for $10M. If each domain built their own: 8 × $5M initial + 8 × $2M/year = $40M initial + $16M/year. Shared = $10M/year. **Savings: $6M/year**"
- **Governance rule:** Domains cannot build duplicate capabilities that exist as shared services (enforced by architecture review board)

**Frame:** TBM shows "what you'd pay if you built it yourself" → shared services are always cheaper → domains accept allocation.

---

### Mistake #6: CMDB Garbage In = TBM Garbage Out

**What Happens:**
You allocate infrastructure costs using CMDB data, but:
- CMDB says Healthcare uses 50 servers. **Reality:** 30 are healthcare, 15 are education, 5 are retired but still running.
- Cost allocation: Healthcare charged for 50 servers ($2M). Actual: 30 servers ($1.2M). **Overcharged by $800K.**
- Healthcare CIO: "Your TBM data is wrong. I don't trust any of it."
- **Result:** TBM credibility destroyed. Domains ignore cost reports.

**What You Should Do:**
Clean CMDB BEFORE launching TBM (or at least fix top 20% of high-value assets).
- **Pre-TBM audit:** Verify CMDB accuracy for top 100 most expensive infrastructure items (servers, databases, licenses)
- **Ownership validation:** For each CI (Configuration Item), confirm correct service assignment with domain CIO
- **Reconciliation:** Match CMDB to actual cloud bills (AWS Cost Explorer → EC2 instances should match CMDB server count ±5%)
- **Continuous cleanup:** Monthly CMDB hygiene reviews (automated discovery + manual validation)

**Rule:** TBM accuracy is limited by CMDB accuracy. If CMDB is 60% accurate, TBM is 60% accurate. Fix CMDB first.

---

## PART I: SERVICE PORTFOLIO FUNDAMENTALS

### 1.1 What is Service Portfolio Management?

**Definition:**

Service Portfolio Management (SPM) is the systematic approach to managing the entire lifecycle of services—from concept through retirement—with complete visibility into service composition, dependencies, costs, and value delivered.

**For Government:**

SPM answers critical questions that traditional budgeting cannot:

| Traditional Budget Question | Service Portfolio Question | Impact |
|----------------------------|---------------------------|--------|
| "How much did we spend on IT?" | "How much does healthcare IT cost vs. education IT?" | **Domain accountability** |
| "What's our server count?" | "Which services consume the most infrastructure?" | **Optimization targets** |
| "Can we afford this new initiative?" | "What's the ROI of expanding this service vs. that service?" | **Evidence-based investment** |
| "Why are costs increasing?" | "Which service domains are driving cost growth?" | **Root cause analysis** |
| "Who owns this system?" | "Who is accountable for this service's cost and performance?" | **Clear governance** |

**The Service Portfolio Hierarchy:**

```
LEVEL 1: BUSINESS SERVICES (Citizen-Facing)
↓ What citizens experience and value
↓
LEVEL 2: TECHNICAL SERVICES (Supporting)
↓ Backend services that enable business services
↓
LEVEL 3: APPLICATIONS
↓ Software systems that deliver technical services
↓
LEVEL 4: INFRASTRUCTURE
↓ Servers, storage, network, cloud resources
↓
LEVEL 5: COST ALLOCATION
→ People, Process, Technology costs mapped to each service
```

**Example: Healthcare Insurance Service**

| Level | Component | Details | Annual Cost |
|-------|-----------|---------|-------------|
| **L1: Business Service** | Healthcare Insurance | Citizen-facing service for health coverage | $45M total |
| **L2: Technical Services** | • Eligibility Verification<br>• Claims Processing<br>• Provider Network Mgmt | APIs and workflows supporting insurance | $15M (apps + infra) |
| **L3: Applications** | • Healthcare Portal (React)<br>• Claims API (Java)<br>• Provider Directory (PostgreSQL) | Software systems | $8M (licenses + dev) |
| **L4: Infrastructure** | • 50 EC2 instances<br>• 2TB RDS PostgreSQL<br>• CloudFront CDN<br>• S3 storage | Underlying infrastructure | $7M (cloud costs) |
| **L5: Cost Allocation** | • People: $20M (100 FTE)<br>• Process: $15M (GSM ops)<br>• Technology: $10M (infra) | Full PPT cost breakdown | $45M total |

**Key Insight:** Without this hierarchy, you only know "healthcare costs money" - with it, you know "claims processing costs $12M, with $8M in database licensing (optimization opportunity)."

---

### 1.2 Why Service Portfolio Management Matters for Government

**Challenge 1: Invisible Costs**

**Scenario:** Finance Minister asks, "How much do we spend on healthcare IT?"

**Without SPM:**
- IT responds: "We spent $200M on IT last year"
- Finance: "But how much of that was healthcare?"
- IT: "We don't track it that way - healthcare uses servers, but so does education..."
- **Result:** No answer, no accountability, budget allocated based on politics not evidence

**With SPM:**
- IT responds: "Healthcare IT: $120M (people $50M, process $40M, technology $30M)"
- Finance: "Why is technology only 25% if you're a digital government?"
- IT: "We follow 40-40-20 PPT balance - technology is 20% target, we're slightly high"
- Finance: "Show me the service breakdown"
- IT: [Presents detailed portfolio showing insurance $45M, research $35M, public health $40M]
- **Result:** Evidence-based budget negotiation, clear accountability

---

**Challenge 2: Duplicate Infrastructure**

**Scenario:** Healthcare and Education both run separate identity systems

**Without SPM:**
- Healthcare builds identity system: $5M initial, $2M/year operations
- Education builds identity system: $4M initial, $1.8M/year operations
- **Total cost:** $9M initial, $3.8M/year operations
- **Waste:** Duplicate capability, no economies of scale

**With SPM:**
- Service portfolio reveals: "Healthcare Identity" and "Education Identity" both in catalog
- Governance asks: "Why two identity systems?"
- Analysis shows: 80% overlapping requirements
- **Decision:** Build shared "Government Identity Service" consumed by both domains
- **Result:** $6M initial (shared), $2.5M/year operations (shared)
- **Savings:** $3M initial (33%), $1.3M/year operations (34%)

---

**Challenge 3: No Impact Analysis**

**Scenario:** Minister announces expansion of healthcare insurance eligibility (500K more citizens)

**Without SPM:**
- IT scrambles: "We'll need more infrastructure, but how much?"
- Guesswork: "Maybe 20 more servers? Not sure about database scaling..."
- **Result:** Over-provision (wasteful) or under-provision (service degradation)

**With SPM:**
- Service portfolio shows: "Healthcare Insurance" service consumes:
  - 50 EC2 instances (2M current users = 40K users/instance)
  - 2TB database (2M users = 1MB/user)
- **Impact analysis:** 500K more users requires:
  - +13 EC2 instances (500K / 40K per instance)
  - +500GB database (500K * 1MB/user)
  - **Cost:** $600K/year infrastructure increase
- **Decision:** Budget approved with confidence, infrastructure sized correctly

---

**Challenge 4: No Service Domain Accountability**

**Scenario:** Healthcare IT budget overruns by 30%

**Without SPM:**
- Central IT blamed: "You overspent!"
- Central IT: "Healthcare demanded more features!"
- Healthcare: "We didn't know it would cost that much!"
- **Result:** Finger-pointing, no resolution, repeat next year

**With SPM:**
- Service portfolio clearly shows: Healthcare CIO owns healthcare service domain budget
- Monthly reports show: Healthcare insurance service trending 20% over budget (month 6)
- Healthcare CIO investigates: Claims API database license increased (vendor price hike)
- **Actions taken:**
  1. Negotiate with vendor (reduce 10%)
  2. Optimize queries (reduce database load 15%)
  3. Request budget adjustment for remaining 5% (justified)
- **Result:** Proactive management, accountability clear, overage minimized

---

### 1.3 Service Portfolio Frameworks: ITIL vs. CSDM vs. TBM

Three complementary frameworks inform government service portfolio management:

#### 1.3.1 ITIL Service Portfolio Management

**Origin:** ITIL v3 (2007), refined in ITIL 4 (2019)

**Core Concept:** Services exist in three states:

```
SERVICE PIPELINE (Future)
↓ Services under consideration or development
↓
SERVICE CATALOG (Current)
↓ Live services available to citizens/agencies
↓
RETIRED SERVICES (Past)
→ Services decommissioned
```

**ITIL Service Portfolio Components:**

| Component | Description | Government Example |
|-----------|-------------|-------------------|
| **Service Pipeline** | Services being planned or developed | New AI-powered permit processing service (Month 6 of 18-month build) |
| **Service Catalog** | Live services available to users | Healthcare Insurance (live since 2020), Tax Filing (live since 2018) |
| **Retired Services** | Decommissioned services | Paper-based permit applications (retired 2022) |

**ITIL Value Proposition:**

Each service must answer:
- **What value does it deliver?** (citizen outcomes, cost savings, time savings)
- **What does it cost to provide?** (total cost of ownership)
- **What is the ROI?** (value delivered / cost incurred)

**Government Adaptation:**

| ITIL Concept | Government Adaptation |
|--------------|----------------------|
| **Customer** | Citizen, business, or agency |
| **Service Value** | Public value (not profit) - savings, satisfaction, equity, trust |
| **Service Owner** | Accountable government official (not product manager) |
| **Cost Recovery** | Budgeted (not revenue-generating), with optional chargeback for agencies |

---

#### 1.3.2 Common Services Data Model (CSDM)

**Origin:** Industry-standard CMDB model for service-oriented architecture

**Core Concept:** Hierarchical service model with dependency mapping

**CSDM Service Hierarchy:**

```
BUSINESS SERVICE (L1)
│ Example: Healthcare Insurance
│
├─ BUSINESS APPLICATION (L2)
│  │ Example: Healthcare Portal
│  │
│  ├─ APPLICATION SERVICE (L3)
│  │  │ Example: User Authentication Service
│  │  │
│  │  ├─ TECHNICAL SERVICE (L4)
│  │  │  │ Example: LDAP Directory Service
│  │  │  │
│  │  │  └─ CI (Configuration Item - Infrastructure)
│  │  │     ├─ Server: ldap-prod-01 (EC2 m5.large)
│  │  │     ├─ Database: users-db (RDS PostgreSQL)
│  │  │     └─ Network: VPC subnet-healthcare-prod
```

**CSDM Relationship Types:**

| Relationship | Description | Example |
|--------------|-------------|---------|
| **Depends On** | Service A requires Service B to function | Healthcare Portal → Digital Identity Service |
| **Contains** | Service A is composed of Service B | Healthcare Insurance → Claims Processing Service |
| **Runs On** | Application runs on infrastructure | Claims API → EC2 instance i-12345 |
| **Connects To** | Service communicates with another service | Claims API → Payment Gateway API |

**Why CSDM Matters:**

**Impact Analysis Example:**

```
Question: "If we patch server ldap-prod-01, what services are impacted?"

CSDM Dependency Chain:
Server: ldap-prod-01
  ↓ Runs
Technical Service: LDAP Directory Service
  ↓ Supports
Application Service: User Authentication Service
  ↓ Used by
Business Application: Healthcare Portal, Education Portal, Tax Portal
  ↓ Delivers
Business Services: Healthcare Insurance, Student Enrollment, Tax Filing

Answer: "Patching ldap-prod-01 impacts 3 business services serving 5M citizens"
Decision: "Schedule maintenance window Saturday 2-4am (lowest traffic)"
```

---

#### 1.3.3 Technology Business Management (TBM)

**Origin:** TBM Council (2012), Apptio framework

**Core Concept:** Map all IT costs to business services with full transparency

**TBM Cost Allocation Model:**

```
COST POOLS (Where money is spent)
│
├─ PEOPLE COSTS
│  ├─ Salaries & Benefits
│  ├─ Contractors
│  └─ Training
│
├─ PROCESS COSTS
│  ├─ Service Management Operations
│  ├─ Governance & Compliance
│  └─ Quality Assurance
│
├─ TECHNOLOGY COSTS
│  ├─ Infrastructure (servers, storage, network)
│  ├─ Software Licenses
│  ├─ Cloud Services (AWS, Azure)
│  └─ Telecommunications
│
↓ COST DRIVERS (How costs are allocated)
│
├─ Server Count (infrastructure → services)
├─ Storage GB (data → services)
├─ FTE Count (people → services)
├─ Transaction Volume (usage → services)
│
↓ SERVICES (Where costs land)
│
Healthcare Insurance: $45M/year
Education Student Enrollment: $12M/year
Tax Filing: $25M/year
```

**TBM Cost Transparency Example:**

**Service:** Healthcare Insurance ($45M/year)

| Cost Category | Amount | % of Total | Details |
|---------------|--------|------------|---------|
| **People** | $20M | 44% | 100 FTE @ $200K fully-loaded |
| **Process** | $15M | 33% | Service management ops, compliance, QA |
| **Technology** | $10M | 22% | Infrastructure + software + cloud |
| **TOTAL** | $45M | 100% | |

**Technology Breakdown ($10M):**

| Sub-Category | Amount | % of Tech | Driver | Optimization Opportunity |
|--------------|--------|-----------|--------|-------------------------|
| **Database Licenses** | $4.5M | 45% | Oracle Enterprise (500 cores) | ✅ **High** - migrate to PostgreSQL (save $3M) |
| **Cloud Compute** | $2.5M | 25% | 50 EC2 instances | ⚠️ **Medium** - right-size instances (save $500K) |
| **Storage** | $1.5M | 15% | 2TB RDS + 5TB S3 | ✅ **Low** - reasonable |
| **Network/CDN** | $1.0M | 10% | CloudFront global distribution | ✅ **Low** - necessary for performance |
| **Software Licenses** | $500K | 5% | Monitoring, security tools | ✅ **Low** - consolidated |

**Optimization Decision:**

Based on TBM analysis: "Database licensing is 45% of technology costs ($4.5M). **Recommendation:** Migrate to open-source PostgreSQL (18-month project, $2M migration cost, $3M/year savings = 8-month payback)."

---

### 1.4 Integrated Framework: ITIL + CSDM + TBM for Government

**Best Practice:** Combine all three frameworks

| Framework | Answers | Use Case |
|-----------|---------|----------|
| **ITIL SPM** | What services exist? What value do they deliver? Who owns them? | Service governance, lifecycle management |
| **CSDM** | What components make up each service? What are dependencies? | Impact analysis, change management, outage troubleshooting |
| **TBM** | What does each service cost? Where are cost optimization opportunities? | Budget planning, cost allocation, investment prioritization |

**Integrated View: Healthcare Insurance Service**

```
┌─────────────────────────────────────────────────────────────────┐
│  BUSINESS SERVICE: Healthcare Insurance (ITIL)                  │
├─────────────────────────────────────────────────────────────────┤
│  Service Owner: Healthcare CIO                                  │
│  Status: Live (Service Catalog)                                 │
│  Users: 2M citizens                                             │
│  Value: $500M annual healthcare claims processed                │
│  Cost: $45M/year (ROI: 11:1)                                    │
└─────────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────────┐
│  TECHNICAL SERVICES (CSDM Hierarchy)                            │
├─────────────────────────────────────────────────────────────────┤
│  ├─ Eligibility Verification Service                            │
│  │  ├─ Eligibility API (Java microservice)                      │
│  │  │  └─ Runs on: 10 EC2 instances (i-abc123...)               │
│  │  └─ Depends on: Digital Identity Service (shared)            │
│  │                                                               │
│  ├─ Claims Processing Service                                   │
│  │  ├─ Claims API (Java microservice)                           │
│  │  │  ├─ Runs on: 20 EC2 instances                             │
│  │  │  └─ Connects to: Payment Gateway (shared)                 │
│  │  └─ Claims Database (PostgreSQL RDS)                         │
│  │     ├─ 2TB storage                                           │
│  │     └─ Multi-AZ replication (99.99% availability)            │
│  │                                                               │
│  └─ Provider Network Management Service                         │
│     └─ ...                                                       │
└─────────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────────┐
│  COST ALLOCATION (TBM)                                          │
├─────────────────────────────────────────────────────────────────┤
│  People (44%): $20M                                             │
│  ├─ 60 FTE Developers @ $150K = $9M                             │
│  ├─ 20 FTE Operations @ $120K = $2.4M                           │
│  ├─ 10 FTE Service Mgmt @ $180K = $1.8M                         │
│  ├─ 10 FTE Business Analysts @ $140K = $1.4M                    │
│  └─ Contractors & Training = $5.4M                              │
│                                                                  │
│  Process (33%): $15M                                            │
│  ├─ Service management operations = $8M                         │
│  ├─ Compliance & audit = $4M                                    │
│  └─ Quality assurance & testing = $3M                           │
│                                                                  │
│  Technology (22%): $10M                                         │
│  ├─ Database licenses (Oracle) = $4.5M ← OPTIMIZATION TARGET   │
│  ├─ Cloud compute (AWS EC2) = $2.5M                             │
│  ├─ Storage (RDS + S3) = $1.5M                                  │
│  ├─ Network & CDN = $1.0M                                       │
│  └─ Software licenses = $500K                                   │
│                                                                  │
│  TOTAL: $45M/year                                               │
└─────────────────────────────────────────────────────────────────┘
```

**Governance Decision-Making with Integrated View:**

**Scenario:** Healthcare Minister proposes expanding insurance eligibility to 500K more citizens

**Analysis using ITIL + CSDM + TBM:**

1. **ITIL (Value):** New eligibility will process $125M more annual claims (25% increase)
2. **CSDM (Impact):** Requires 13 more EC2 instances, 500GB more database storage
3. **TBM (Cost):** Infrastructure +$600K/year, People +$2M/year (10 FTE), Total +$3M/year
4. **ROI:** $125M value / $3M cost = **42:1 ROI** → **Approved**

---

## PART II: SERVICE HIERARCHY ARCHITECTURE

### 2.1 Designing the Service Hierarchy

**Goal:** Create a hierarchical service model that provides visibility from citizen-facing services down to individual infrastructure components.

**Five-Level Hierarchy:**

```
L1: BUSINESS SERVICES (Citizen-Facing)
    ↓ What citizens and businesses consume

L2: TECHNICAL SERVICES (Supporting)
    ↓ Backend capabilities enabling business services

L3: APPLICATIONS
    ↓ Software systems delivering technical services

L4: INFRASTRUCTURE
    ↓ Servers, storage, network, cloud resources

L5: COST ALLOCATION
    → People, Process, Technology costs at each level
```

---

### 2.2 Level 1: Business Services (Citizen-Facing)

**Definition:** Services that citizens, businesses, or agencies directly consume and perceive value from.

**Business Service Attributes:**

| Attribute | Description | Example (Healthcare Insurance) |
|-----------|-------------|-------------------------------|
| **Service Name** | Plain-language name citizens understand | "Healthcare Insurance" (not "HC-INS-SYS-001") |
| **Service Description** | What the service does, benefits, eligibility | "Provides health coverage for citizens, processes claims, manages provider network" |
| **Service Owner** | Accountable executive (budget, performance) | Healthcare CIO |
| **Service Domain** | Organizational grouping | Healthcare (vs. Education, Justice, etc.) |
| **Service Type** | Citizen-facing, Agency-facing, or Internal | Citizen-facing |
| **Service Tier** | Criticality (Tier 1-4 from GSM) | Tier 1 (Critical - 99.99% uptime) |
| **Annual Cost** | Total cost of ownership (PPT) | $45M/year (People $20M, Process $15M, Tech $10M) |
| **Annual Value** | Public value delivered | $500M claims processed, 2M citizens served |
| **ROI** | Value / Cost | 11:1 |
| **Status** | Pipeline, Live, or Retired | Live (since 2020) |

**Business Service Catalog Example:**

| Service Name | Domain | Owner | Users | Annual Cost | Annual Value | ROI | Status |
|--------------|--------|-------|-------|-------------|--------------|-----|--------|
| Healthcare Insurance | Healthcare | Healthcare CIO | 2M citizens | $45M | $500M claims | 11:1 | Live |
| Medical Research Funding | Healthcare | Healthcare CIO | 500 researchers | $15M | $200M grants | 13:1 | Live |
| Public Health Programs | Healthcare | Public Health Director | 5M citizens | $25M | $1B prevented disease cost | 40:1 | Live |
| Student Enrollment | Education | Education CIO | 1M students | $12M | $5B education delivery | 417:1 | Live |
| Teacher Certification | Education | Education CIO | 50K teachers | $5M | $500M quality assurance | 100:1 | Live |
| Tax Filing | Finance | Tax Commissioner | 3M taxpayers | $25M | $50B tax collection | 2000:1 | Live |
| Business Registration | Commerce | Commerce CIO | 100K businesses | $8M | $2B economic activity | 250:1 | Live |
| Court Case Management | Justice | Judiciary CIO | 500K cases/year | $30M | $5B justice delivery | 167:1 | Live |

**Total Government IT Budget:** $165M/year across 8 major business services

---

### 2.3 Level 2: Technical Services (Supporting)

**Definition:** Backend technical capabilities that support business services but are not directly visible to citizens.

**Technical Service Examples:**

| Business Service | Technical Services (Supporting) | Purpose |
|------------------|--------------------------------|---------|
| **Healthcare Insurance** | • Eligibility Verification Service<br>• Claims Processing Service<br>• Provider Network Management Service<br>• Document Storage Service<br>• Notification Service | Enable insurance operations |
| **Student Enrollment** | • Application Processing Service<br>• Document Verification Service<br>• School Assignment Service<br>• Notification Service | Enable enrollment process |
| **Tax Filing** | • Tax Calculation Service<br>• Payment Processing Service<br>• Refund Service<br>• Audit Management Service | Enable tax operations |

**Technical Service Attributes:**

| Attribute | Example (Claims Processing Service) |
|-----------|-------------------------------------|
| **Service Name** | Claims Processing Service |
| **Service Type** | Technical Service (internal) |
| **Supports Business Service** | Healthcare Insurance |
| **Service Owner** | Healthcare IT Manager |
| **Technology Stack** | Java microservices, PostgreSQL, Kafka message queue |
| **SLA** | 99.95% availability, <500ms p95 response time, 10K TPS |
| **Dependencies** | Digital Identity (shared), Payment Gateway (shared) |
| **Annual Cost** | $12M (People $5M, Process $3M, Tech $4M) |

**Shared vs. Domain-Specific Technical Services:**

| Type | Description | Examples | Cost Model |
|------|-------------|----------|------------|
| **Shared Services** | Used by multiple business services across domains | • Digital Identity<br>• Payment Gateway<br>• Notification Service<br>• Document Storage | Cost allocated proportionally to consumers |
| **Domain-Specific** | Used only within one service domain | • Claims Processing (Healthcare only)<br>• School Assignment (Education only)<br>• Court Scheduling (Justice only) | Cost allocated 100% to owning domain |

**Shared Service Cost Allocation Example:**

**Service:** Digital Identity Service
- **Total Annual Cost:** $10M
- **Consumers:** Healthcare (40% of logins), Education (30%), Tax (20%), Commerce (10%)
- **Cost Allocation:**
  - Healthcare: $4M (40%)
  - Education: $3M (30%)
  - Tax: $2M (20%)
  - Commerce: $1M (10%)

**Benefit of Shared Services:**

If each domain built their own identity service:
- Healthcare: $5M
- Education: $4M
- Tax: $3M
- Commerce: $2M
- **Total:** $14M

With shared identity service:
- **Total:** $10M
- **Savings:** $4M/year (29%)

---

### 2.4 Level 3: Applications

**Definition:** Software systems (applications, APIs, databases) that implement technical services.

**Application Attributes:**

| Attribute | Example (Claims API) |
|-----------|---------------------|
| **Application Name** | Claims Processing API |
| **Application Type** | Microservice (REST API) |
| **Technology** | Java Spring Boot, deployed on Kubernetes |
| **Supports Technical Service** | Claims Processing Service |
| **Owner** | Healthcare IT Manager |
| **Deployment** | AWS EKS (Elastic Kubernetes Service), 20 pods across 3 AZs |
| **Dependencies** | • Claims Database (PostgreSQL)<br>• Payment Gateway API<br>• Notification Service API |
| **Annual Cost** | $4M (development $2M, operations $1M, infrastructure $1M) |

**Application Portfolio Example (Healthcare Insurance):**

| Application | Type | Technology | Infrastructure | Annual Cost |
|-------------|------|------------|----------------|-------------|
| Healthcare Portal | Web app | React, Node.js | CloudFront + S3 (static) + EC2 (API) | $2M |
| Claims API | Microservice | Java Spring Boot | 20 Kubernetes pods (AWS EKS) | $4M |
| Eligibility API | Microservice | Python FastAPI | 10 Kubernetes pods | $2M |
| Provider Directory | Database + API | PostgreSQL + GraphQL | RDS Multi-AZ | $3M |
| Document Storage | Object storage | AWS S3 + Lambda | S3 buckets + serverless functions | $1M |
| Notification Service | Messaging | Kafka + Email/SMS gateway | AWS MSK (Kafka) + SNS | $1M |

**Total Application Cost (Healthcare Insurance):** $13M/year

---

### 2.5 Level 4: Infrastructure

**Definition:** Physical and virtual infrastructure components (servers, storage, network, cloud resources) that applications run on.

**Infrastructure Categories:**

| Category | Description | Examples | Cost Drivers |
|----------|-------------|----------|--------------|
| **Compute** | Servers (physical or virtual) | EC2 instances, VMs, containers | Instance type, count, utilization |
| **Storage** | Data storage | RDS databases, S3 object storage, EBS volumes | GB stored, IOPS, replication |
| **Network** | Networking and content delivery | VPC, Load Balancers, CloudFront CDN | Bandwidth, requests, regions |
| **Platform Services** | Managed cloud services | AWS Lambda, SQS, SNS, EKS | Usage (invocations, messages, cluster hours) |

**Infrastructure Inventory Example (Healthcare Insurance - Claims API):**

| Component | Type | Configuration | Monthly Cost | Annual Cost |
|-----------|------|---------------|--------------|-------------|
| **Compute** | AWS EKS cluster | 20 nodes (m5.2xlarge) | $10,000 | $120K |
| **Storage** | RDS PostgreSQL | 2TB Multi-AZ, 10K IOPS | $5,000 | $60K |
| **Network** | Application Load Balancer | 100M requests/month | $1,000 | $12K |
| **Network** | Data Transfer | 50TB/month outbound | $4,000 | $48K |
| **Platform** | CloudWatch Logs | 500GB logs/month | $500 | $6K |

**Total Infrastructure Cost (Claims API):** $246K/year

**Infrastructure Cost Optimization:**

| Optimization | Current | Optimized | Savings | Implementation |
|--------------|---------|-----------|---------|----------------|
| Right-size instances | m5.2xlarge (8 vCPU) | m5.xlarge (4 vCPU) - average CPU 30% | $60K/year (50%) | 2-week testing, 1-day migration |
| Reserved instances | On-demand pricing | 1-year reserved (30% discount) | $36K/year | Purchase reservations (immediate) |
| Database storage | gp2 (general SSD) | gp3 (20% cheaper, same performance) | $12K/year | 1-hour migration window |

**Total Optimization Potential:** $108K/year (44% reduction from $246K to $138K)

---

### 2.6 Level 5: Cost Allocation (PPT Breakdown)

**Definition:** Full cost transparency showing People, Process, and Technology costs at each service level.

**Cost Allocation Model:**

```
BUSINESS SERVICE: Healthcare Insurance ($45M/year)
│
├─ PEOPLE COSTS (44% = $20M)
│  ├─ Developers (60 FTE @ $150K) = $9M
│  ├─ Operations (20 FTE @ $120K) = $2.4M
│  ├─ Service Management (10 FTE @ $180K) = $1.8M
│  ├─ Business Analysts (10 FTE @ $140K) = $1.4M
│  └─ Contractors + Training = $5.4M
│
├─ PROCESS COSTS (33% = $15M)
│  ├─ Service Management Operations = $8M
│  │  ├─ Incident management (24/7 SOC)
│  │  ├─ Change Advisory Board operations
│  │  ├─ Service level monitoring & reporting
│  │  └─ Problem management & root cause analysis
│  ├─ Compliance & Audit = $4M
│  │  ├─ HIPAA compliance audits
│  │  ├─ Security assessments
│  │  └─ Regulatory reporting
│  └─ Quality Assurance & Testing = $3M
│     ├─ Automated testing infrastructure
│     ├─ QA team (15 FTE)
│     └─ User acceptance testing
│
└─ TECHNOLOGY COSTS (22% = $10M)
   ├─ Software Licenses = $5M
   │  ├─ Database (Oracle) = $4.5M ← 90% of software costs
   │  └─ Monitoring tools = $500K
   ├─ Cloud Infrastructure = $4M
   │  ├─ Compute (EC2, EKS) = $2M
   │  ├─ Storage (RDS, S3) = $1.5M
   │  └─ Network (Load Balancers, CDN) = $500K
   └─ Telecommunications = $1M
      ├─ API gateway fees
      └─ SMS/email notifications
```

**Key Insight:** Technology is only 22% of total cost (target 20% per PPT framework). **Optimization opportunity:** Database licensing is 45% of technology costs ($4.5M of $10M).

---

## PART III: SERVICE DOMAIN GOVERNANCE

### 3.1 What is Service Domain Governance?

**Definition:** Organizing government IT around **service domains** (Healthcare, Education, Justice, etc.) with clear ownership, isolated budgets, and accountability for service costs and outcomes.

**Traditional Model (Centralized IT):**

```
CENTRAL IT DEPARTMENT
├─ Infrastructure Team (manages all servers)
├─ Application Team (builds all apps)
└─ Operations Team (runs everything)

PROBLEMS:
❌ Healthcare can't prioritize its own services (Central IT decides)
❌ No cost visibility (everything is "IT budget")
❌ No accountability (Central IT blamed for everything)
❌ Slow decision-making (everything goes through Central IT approval)
```

**Service Domain Model (Federated):**

```
HEALTHCARE DOMAIN
├─ Healthcare CIO (owns $120M IT budget)
├─ Healthcare IT Team (50 FTE dedicated to healthcare)
├─ Healthcare Services (insurance, research, public health)
└─ Healthcare Infrastructure (isolated healthcare servers)

EDUCATION DOMAIN
├─ Education CIO (owns $80M IT budget)
├─ Education IT Team (30 FTE dedicated to education)
└─ ...

SHARED SERVICES (Cross-Domain)
├─ Digital Identity (consumed by all domains)
├─ Payment Gateway (consumed by all domains)
└─ Managed by Shared Services CIO ($50M budget)

BENEFITS:
✅ Healthcare prioritizes its own services
✅ Full cost visibility ($120M healthcare, $80M education)
✅ Clear accountability (Healthcare CIO owns outcomes)
✅ Fast decision-making (Healthcare CIO decides within domain)
```

---

### 3.2 Service Domain Architecture

**Recommended Domains for Government:**

| Domain | Description | Business Services | IT Budget | FTE | CIO Owner |
|--------|-------------|------------------|-----------|-----|-----------|
| **Healthcare** | Health insurance, research, public health | 5 major services | $120M | 100 | Healthcare CIO |
| **Education** | Student enrollment, learning, certification | 4 major services | $80M | 60 | Education CIO |
| **Justice** | Courts, law enforcement, corrections | 3 major services | $60M | 50 | Judiciary CIO |
| **Finance** | Tax, treasury, budget | 3 major services | $50M | 40 | Finance CIO |
| **Commerce** | Business registration, licensing, trade | 3 major services | $40M | 30 | Commerce CIO |
| **Infrastructure** | Transportation, utilities, environment | 2 major services | $30M | 25 | Infrastructure CIO |
| **Shared Services** | Identity, payments, data analytics | 6 cross-domain services | $50M | 45 | Chief Digital Officer |

**Total Government IT:** $430M across 7 domains, 350 FTE

---

### 3.3 Domain Governance Model

**Healthcare Domain Governance Structure:**

```
HEALTHCARE STEERING COMMITTEE
├─ Healthcare Minister (Chair)
├─ Healthcare CIO
├─ Chief Medical Officer
├─ Finance Representative
└─ Citizen Advisory Board Representative

↓ Sets strategic direction, approves budget

HEALTHCARE IT GOVERNANCE BOARD
├─ Healthcare CIO (Chair)
├─ Healthcare IT Manager
├─ Healthcare Service Owners (3-5 major services)
├─ Healthcare Security Officer
└─ Healthcare Data Officer

↓ Tactical decisions, service prioritization

HEALTHCARE SERVICE OWNERS
├─ Healthcare Insurance Service Owner
├─ Medical Research Service Owner
└─ Public Health Service Owner

↓ Day-to-day service management
```

**Decision Authority:**

| Decision Type | Healthcare Authority | Central IT Authority |
|---------------|---------------------|---------------------|
| **Prioritize healthcare services** | Healthcare CIO ✅ | Central IT ❌ |
| **Approve healthcare IT budget** | Healthcare Steering Committee ✅ | Central IT ❌ |
| **Select healthcare applications** | Healthcare IT Governance Board ✅ | Central IT (standards compliance check only) |
| **Hire healthcare IT staff** | Healthcare CIO ✅ | Central IT (HR policy compliance only) |
| **Choose database technology** | Healthcare CIO ❌ | Central IT ✅ (shared standards) |
| **Select cloud provider** | Healthcare CIO ❌ | Central IT ✅ (government-wide contract) |
| **Define API standards** | Healthcare CIO ❌ | Central IT ✅ (interoperability) |

**Key Principle:** Domain owns services and budget, Central IT owns shared infrastructure and standards.

---

### 3.4 Example: Healthcare Domain Service Portfolio

**Healthcare Domain Budget:** $120M/year

**Business Services (5):**

1. **Healthcare Insurance** - $45M/year
   - 2M citizens covered
   - $500M annual claims processed
   - ROI: 11:1

2. **Medical Research Funding** - $35M/year
   - 500 researchers supported
   - $200M grants distributed
   - ROI: 5.7:1

3. **Public Health Programs** - $25M/year
   - 5M citizens served (vaccination, disease prevention)
   - $1B prevented disease costs (estimated)
   - ROI: 40:1

4. **Electronic Health Records** - $10M/year
   - 3M patient records
   - $50M administrative cost savings
   - ROI: 5:1

5. **Healthcare Provider Portal** - $5M/year
   - 10K healthcare providers
   - $20M efficiency gains
   - ROI: 4:1

**Healthcare Domain Cost Breakdown (PPT):**

| Business Service | People | Process | Technology | Total |
|------------------|--------|---------|------------|-------|
| Healthcare Insurance | $20M (44%) | $15M (33%) | $10M (22%) | $45M |
| Medical Research Funding | $15M (43%) | $12M (34%) | $8M (23%) | $35M |
| Public Health Programs | $11M (44%) | $9M (36%) | $5M (20%) | $25M |
| Electronic Health Records | $4M (40%) | $4M (40%) | $2M (20%) | $10M |
| Healthcare Provider Portal | $2M (40%) | $2M (40%) | $1M (20%) | $5M |
| **TOTAL** | **$52M (43%)** | **$42M (35%)** | **$26M (22%)** | **$120M** |

**Note:** Healthcare domain is slightly high on People (43% vs. 40% target), slightly low on Process (35% vs. 40% target), close on Technology (22% vs. 20% target). **Action:** Increase process investment (GSM operations) by $6M, reduce people (optimize staffing) by $4M, reduce technology (database migration) by $2M → Target 40-40-20 by Year 2.

---

## PART IV: COST ALLOCATION & TECHNOLOGY BUSINESS MANAGEMENT (TBM)

### 4.1 TBM Framework for Government

**Technology Business Management (TBM)** provides a standardized approach to IT cost transparency, enabling:
- **Cost Visibility:** Where is money being spent?
- **Cost Allocation:** Which services consume which costs?
- **Cost Optimization:** Where are savings opportunities?

**TBM Cost Model (Government Adaptation):**

```
COST POOLS → COST DRIVERS → SERVICES
│             │              │
│             │              └─ Healthcare Insurance ($45M)
│             │              └─ Education Enrollment ($12M)
│             │              └─ Tax Filing ($25M)
│             │
│             └─ Server count (allocate compute costs)
│             └─ Storage GB (allocate storage costs)
│             └─ FTE count (allocate people costs)
│             └─ Transaction volume (allocate usage costs)
│
└─ People ($200M total)
└─ Process ($150M total)
└─ Technology ($100M total)
```

---

### 4.2 TBM Cost Pool Definition

**Government IT Cost Pools:**

| Cost Pool | Description | Annual Budget | % of Total |
|-----------|-------------|---------------|------------|
| **PEOPLE** | All human resources costs | $200M | 44% |
| ├─ Salaries & Benefits | Government employees | $120M | 27% |
| ├─ Contractors | External consultants, developers | $60M | 13% |
| └─ Training & Development | Certifications, courses, conferences | $20M | 4% |
| **PROCESS** | Service management and operations | $150M | 33% |
| ├─ Service Management Operations | GSM framework operations (incident, change, etc.) | $80M | 18% |
| ├─ Governance & Compliance | Audits, regulatory compliance, risk management | $40M | 9% |
| └─ Quality Assurance | Testing, QA teams, automated testing infrastructure | $30M | 7% |
| **TECHNOLOGY** | Infrastructure and software | $100M | 22% |
| ├─ Cloud Infrastructure | AWS, Azure, Google Cloud costs | $40M | 9% |
| ├─ Software Licenses | Database, middleware, monitoring tools | $30M | 7% |
| ├─ Data Center (Legacy) | Remaining on-premise infrastructure | $20M | 4% |
| └─ Telecommunications | Network, internet, API gateways | $10M | 2% |
| **TOTAL** | | **$450M** | **100%** |

---

### 4.3 TBM Cost Drivers (Allocation Methodology)

**Cost Drivers** determine how costs from pools are allocated to services.

**Example Cost Drivers:**

| Cost Pool | Cost Driver | Measurement | Example Allocation |
|-----------|-------------|-------------|-------------------|
| **People (Developers)** | FTE assigned to service | Headcount | Healthcare Insurance has 60 developers → gets 60% of $120M developer pool |
| **People (Operations)** | FTE assigned to service | Headcount | Tax Filing has 20 ops → gets 20% of $40M ops pool |
| **Cloud Compute** | Server count OR vCPU hours | Usage metrics | Healthcare uses 500 vCPUs → gets 500/2000 = 25% of $40M compute pool |
| **Cloud Storage** | GB stored | Usage metrics | Education stores 5TB → gets 5TB/50TB = 10% of $15M storage pool |
| **Software Licenses (Database)** | Database cores | Usage metrics | Justice uses 100 Oracle cores → gets 100/500 = 20% of $25M Oracle pool |
| **Network Bandwidth** | GB transferred | Usage metrics | Finance transfers 10TB/month → gets 10TB/100TB = 10% of $10M network pool |
| **Service Management** | Incident count + change count | Usage metrics | Healthcare had 500 incidents, 200 changes → gets 30% of $80M GSM ops pool |

---

### 4.4 TBM Service Cost Calculation Example

**Service:** Healthcare Insurance
**Goal:** Calculate full cost using TBM model

**Step 1: Allocate People Costs**

| People Category | Total Pool | Allocation Method | Healthcare Allocation | Cost |
|----------------|------------|-------------------|---------------------|------|
| Developers | $120M | 60 FTE out of 300 total = 20% | 20% | $24M |
| Operations | $40M | 20 FTE out of 100 total = 20% | 20% | $8M |
| Service Managers | $20M | 10 FTE out of 50 total = 20% | 20% | $4M |
| Business Analysts | $15M | 10 FTE out of 40 total = 25% | 25% | $3.75M |
| Contractors | $60M | 30% of contractor time on healthcare | 30% | $18M |
| Training | $20M | Proportional to FTE (20%) | 20% | $4M |
| **TOTAL PEOPLE** | **$275M** | | | **$61.75M** |

**Step 2: Allocate Process Costs**

| Process Category | Total Pool | Allocation Method | Healthcare Allocation | Cost |
|-----------------|------------|-------------------|---------------------|------|
| GSM Operations | $80M | 30% of incidents/changes are healthcare | 30% | $24M |
| Compliance | $40M | Healthcare-specific HIPAA compliance | 40% | $16M |
| Quality Assurance | $30M | 25% of QA effort on healthcare | 25% | $7.5M |
| **TOTAL PROCESS** | **$150M** | | | **$47.5M** |

**Step 3: Allocate Technology Costs**

| Technology Category | Total Pool | Allocation Method | Healthcare Allocation | Cost |
|--------------------|------------|-------------------|---------------------|------|
| Cloud Compute | $40M | 500 vCPUs out of 2,000 total = 25% | 25% | $10M |
| Cloud Storage | $15M | 5TB out of 50TB total = 10% | 10% | $1.5M |
| Database Licenses | $25M | 150 cores out of 500 = 30% | 30% | $7.5M |
| Network | $10M | 20TB transferred out of 100TB = 20% | 20% | $2M |
| Data Center (Legacy) | $20M | 10% of legacy systems are healthcare | 10% | $2M |
| **TOTAL TECHNOLOGY** | **$110M** | | | **$23M** |

**Step 4: Total Cost Calculation**

| Dimension | Cost | % of Total |
|-----------|------|------------|
| People | $61.75M | 47% |
| Process | $47.5M | 36% |
| Technology | $23M | 17% |
| **TOTAL** | **$132.25M** | **100%** |

**Variance from Target (40-40-20):**
- People: 47% (target 40%) → **7% over** (reduce staffing or reallocate)
- Process: 36% (target 40%) → **4% under** (invest more in GSM operations)
- Technology: 17% (target 20%) → **3% under** (close to target)

**Action Plan:**
1. **Reduce People overage:** Transition 10 FTE to contractors (more flexible), save $2M
2. **Increase Process investment:** Add 5 FTE service managers, invest $3M in automation
3. **Technology:** Maintain current level (already efficient)
4. **Target:** 40-40-20 balance achieved in 12 months

---

### 4.5 TBM Reporting & Dashboards

**Monthly TBM Dashboard (Healthcare Domain):**

```
┌─────────────────────────────────────────────────────────────────┐
│         HEALTHCARE DOMAIN - TBM COST DASHBOARD                   │
│                   October 2025                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  TOTAL MONTHLY COST: $11.02M (Annual: $132.25M)                 │
│  BUDGET: $10M/month (Annual: $120M)                             │
│  VARIANCE: +$1.02M (10.2% over budget) ⚠️ YELLOW                │
│                                                                  │
│  PPT BALANCE:                                                    │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ People (47%)   │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ Process (36%)             │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ Technology (17%)                             │
│                                                                  │
│  TOP 3 COST DRIVERS:                                             │
│  1. People: Contractors ($1.5M/mo) - 30% increase from last mo  │
│  2. Technology: Oracle DB licenses ($625K/mo) - fixed cost      │
│  3. Process: HIPAA compliance audits ($400K/mo) - Q4 audit      │
│                                                                  │
│  SERVICE COST BREAKDOWN:                                         │
│  Healthcare Insurance:        $3.75M (34%)                       │
│  Medical Research:            $2.92M (26%)                       │
│  Public Health:               $2.08M (19%)                       │
│  Electronic Health Records:   $0.83M (8%)                        │
│  Provider Portal:             $0.42M (4%)                        │
│  Other:                       $1.02M (9%)                        │
│                                                                  │
│  OPTIMIZATION OPPORTUNITIES:                                     │
│  🔴 HIGH: Oracle DB migration to PostgreSQL (save $300K/month)  │
│  🟡 MEDIUM: Right-size EC2 instances (save $80K/month)          │
│  🟢 LOW: Reserved instance purchases (save $40K/month)          │
│                                                                  │
│  ACTIONS REQUIRED:                                               │
│  - Approve Oracle → PostgreSQL migration project ($2M, 12mo)    │
│  - Reduce contractor spend by 20% ($300K/month savings)         │
│  - Rebalance to 40-40-20 (12-month plan)                        │
└─────────────────────────────────────────────────────────────────┘
```

---

## PART V: IMPLEMENTATION ROADMAP

### 5.1 24-30 Month Implementation Journey (Realistic Timeline)

**Phase 0: Political Groundwork (Months -3 to 0)** ← DO NOT SKIP THIS

**DO THIS FIRST OR FAIL:**
- [ ] **CEO/Minister buy-in:** Present TBM value ("You'll finally know where money goes") and secure commitment that "transparency ≠ automatic cuts"
- [ ] **Finance alliance:** Co-opt Finance Ministry early. Frame as "Finance gets control/visibility you've wanted for years"
- [ ] **CFO partnership:** Make CFO joint program sponsor (not just IT initiative). Finance must co-own TBM.
- [ ] **Change management:** Budget $1-2M for organizational change (training, communication, resistance management)
- [ ] **Legal/procurement review:** Cost allocation may affect agency budgets = legal/policy implications (get ahead of this)

**Political Landmines Identified:**
- Finance will weaponize transparency → Get C-level protection documented
- Domains will resist shared service charges → Prepare "build vs. buy" cost comparisons
- Unions may fight if TBM shows "overstaffing" → Frame as "right-skilling" not layoffs
- Auditors will demand allocation methodology documentation → Prepare TBM methodology doc (50+ pages)

**Deliverable:** Executive Sponsorship Charter (signed by CEO, CFO, CDO, COO) committing to "optimization not cuts" principle

---

**Phase 1: Foundation (Months 0-6)**

**Month 1-2: Assessment & Planning**
- [ ] Inventory all business services (citizen-facing) - **Start top-down from citizen outcomes**, not bottom-up from technical components
- [ ] Map technical services (supporting) - Only map what citizens consume, not every technical capability
- [ ] Identify service domains (Healthcare, Education, etc.) - 7-10 domains max (more = governance chaos)
- [ ] Establish TBM cost pools and drivers - **Accept ±30% accuracy Year 1** (refine quarterly)
- [ ] Baseline current costs (where possible) - Finance data is incomplete; use best estimates

**PRACTITIONER FLAG #1:** How do you define service boundaries when one technical service supports multiple business services (e.g., Digital Identity supports Healthcare, Education, Tax)?
→ **Answer:** Shared services allocated proportionally by usage (login volume, transaction count, or FTE count as proxy). Document methodology clearly for audit.

**Deliverable:** Service Portfolio Blueprint (50-100 pages documenting entire hierarchy) + TBM Methodology Documentation (for auditors)

**Month 3-4: CMDB Foundation**
- [ ] Select and deploy CMDB tool (open-source platforms like iTop, GLPI, or build on GaaS Platform)
- [ ] Define CSDM-based data model (align to industry standard, don't reinvent)
- [ ] Begin infrastructure discovery (servers, apps, databases) - **Cloud is easy (AWS API), on-premise is hard (manual)**
- [ ] Establish CI (Configuration Item) naming standards - **Enforce strictly or CMDB becomes chaos**
- [ ] Create service-to-infrastructure mapping - **This is 60% of the work; automate where possible**

**PRACTITIONER FLAG #2:** How do you handle multi-tenant infrastructure (one database server supports 5 services)?
→ **Answer:** Allocate by resource consumption (CPU%, storage GB per schema, transaction volume). If data unavailable, use FTE count as proxy. Document assumptions.

**PRACTITIONER FLAG #3:** What if automated discovery tools miss 40% of infrastructure (shadow IT, legacy systems)?
→ **Answer:** Manual audit for top 20% of high-cost assets. Accept 60-70% coverage Year 1, improve to 85%+ by Year 3. Perfect is enemy of good.

**Deliverable:** CMDB with 50% infrastructure coverage (cloud-first, expand to on-premise later)

**Month 5-6: Service Domain Governance**
- [ ] Establish service domain structure (7-10 domains) - **Political minefield: who reports to whom?**
- [ ] Appoint service domain CIOs - **Expect turf wars; need CEO to arbitrate**
- [ ] Define decision authorities (RACI) - **Central IT vs. Domain autonomy = biggest fight**
- [ ] Create domain governance boards - **Monthly meetings minimum; quarterly budget reviews**
- [ ] Allocate budgets to domains - **Finance will resist "losing control"; need CFO mandate**

**PRACTITIONER FLAG #4:** What if existing CIOs resist domain model (want to keep centralized control)?
→ **Answer:** Frame as "domain CIOs own outcomes, central CIO owns standards/shared services." Use federated model: domains have autonomy within guardrails. Pilot with 1-2 friendly domains, prove value, expand.

**PRACTITIONER FLAG #5:** How do you allocate budgets when historical data doesn't map to new domain structure?
→ **Answer:** Use rough estimates Month 1-6 (±30% accuracy). Refine with TBM data Month 7-12. Accept that Year 1 budgets will be "wrong" - focus on setting precedent for domain ownership, refine amounts Year 2.

**Deliverable:** Service Domain Governance Framework (operational) + Domain Budget Allocations (rough, to be refined with TBM data)

---

**Phase 2: Deployment (Months 7-12)**

**Month 7-8: Service Hierarchy Build-Out**
- [ ] Document all Level 1 business services (20-40 services)
- [ ] Map Level 2 technical services (100-200 services)
- [ ] Inventory Level 3 applications (500-1,000 apps)
- [ ] Complete Level 4 infrastructure discovery (5,000-10,000 CIs)
- [ ] Establish service dependencies in CMDB

**Deliverable:** Complete service hierarchy (L1-L4) with 80% coverage

**Month 9-10: Cost Allocation Implementation** ← HARDEST PHASE (budget 50% more time than planned)

- [ ] Implement TBM cost model - **Finance integration is painful (legacy ERP systems, manual GL codes)**
- [ ] Establish cost drivers and allocation rules - **Finance will fight every allocation methodology; document extensively**
- [ ] Integrate financial system with CMDB - **API may not exist; prepare for monthly manual reconciliation**
- [ ] Calculate service costs (first iteration) - **Expect 30-40% "unallocated" costs first run (corporate overhead, shared security, etc.)**
- [ ] Publish first TBM report - **PRESENT TO CEO FIRST, get approval before Finance sees it**

**PRACTITIONER FLAG #6:** What if Finance refuses to provide detailed GL (General Ledger) data ("proprietary/confidential")?
→ **Answer:** Escalate to CFO (this is why CFO must co-sponsor program). Frame as "TBM requires Finance partnership; we can't do this alone." If blocked, use rough estimates (±40% accuracy) and label reports "preliminary pending Finance integration."

**PRACTITIONER FLAG #7:** How do you allocate shared costs (CEO office, HR, legal) that support all services?
→ **Answer:** Three options: (1) Allocate proportionally by domain budget size (simple but imprecise), (2) Allocate by FTE count (fair for people-heavy costs), (3) Leave as "Corporate Overhead - Unallocated" (honest but incomplete). Choose based on stakeholder tolerance for complexity. Document method clearly.

**PRACTITIONER FLAG #8:** What if first TBM report shows costs 50% higher than budgeted (because you're finally counting everything)?
→ **Answer:** This is NORMAL. Frame as "We're making existing costs visible, not creating new costs." Present CEO/CFO comparison: "Budget shows $200M IT, TBM shows $320M. The $120M was always there (people costs, process costs we never tracked). Now we know where to optimize."

**Deliverable:** Monthly TBM reports showing service costs (±30% accuracy, to be refined quarterly)

**Month 11-12: Service Portfolio Dashboards**
- [ ] Build executive dashboards (service costs, PPT balance)
- [ ] Create domain dashboards (domain-specific view)
- [ ] Implement automated reporting
- [ ] Train service owners on dashboard usage
- [ ] Establish monthly review cadence

**Deliverable:** Service Portfolio Dashboard (live, updated monthly)

---

**Phase 3: Optimization (Months 13-24)** ← Where TBM finally pays off

**Month 13-18: Cost Optimization**
- [ ] Identify top 10 cost optimization opportunities - **TBM data reveals database licensing, over-provisioned cloud, duplicate systems**
- [ ] Execute quick wins (reserved instances, right-sizing) - **Target $2-5M Year 1 savings (fund TBM program)**
- [ ] Plan major optimizations (database migration, cloud consolidation) - **18-24 month projects, $10-30M multi-year savings**
- [ ] Implement chargeback model (optional) - **WARNING: Chargeback creates domain resistance; use showback (transparency without billing) first**
- [ ] Optimize PPT balance (move toward 40-40-20) - **Most governments start 50-30-20 (people-heavy); rebalancing takes 2-3 years**

**PRACTITIONER FLAG #9:** What if cost optimization reveals "we should shut down this service" (ROI <1:1, negative value)?
→ **Answer:** Political nightmare. Services exist for political reasons, not just ROI. Frame as "low ROI services need process improvement" not "shut down." If truly wasteful, escalate to Minister with citizen impact analysis ("Shutting down costs 500 jobs, affects 10K citizens - is this worth $2M savings?"). Be prepared for "keep it anyway" answer.

**PRACTITIONER FLAG #10:** How do you prevent domains from "gaming" TBM (underreporting usage to reduce cost allocation)?
→ **Answer:** Use objective data sources (cloud APIs, transaction logs, automated monitoring) not self-reported data. Audit allocations quarterly. Governance rule: "Costs allocated based on actual usage, not budgeted usage." Make gaming harder than honest reporting.

**Deliverable:** $10-20M annual savings identified (quick wins $2-5M executed Year 1, major optimizations planned for Year 2-3)

**Month 19-24: Continuous Improvement**
- [ ] Achieve 85%+ service hierarchy coverage - **Realistic target; 95%+ is aspirational (5-10% will always be "other/unallocated")**
- [ ] Refine cost allocation accuracy to ±10-15% - **Good enough for investment decisions; perfect allocation is impossible**
- [ ] Establish quarterly service portfolio reviews - **CEO/CFO/Domain CIOs review costs, ROI, optimization progress**
- [ ] Implement predictive cost modeling - **"If we expand service X, costs increase by $Y" (requires mature CMDB + historical data)**
- [ ] Mature to steady-state operations - **TBM team (5-10 FTE) runs monthly reports, quarterly optimization reviews**

**PRACTITIONER FLAG #11:** What does "steady-state" TBM operations look like (team size, budget, processes)?
→ **Answer:**
- **Team:** 5-10 FTE (2-3 TBM analysts, 2-3 CMDB admins, 1 Finance liaison, 1 program manager)
- **Budget:** $2-4M/year (mostly people; tools $200-500K/year for ServiceNow/CMDB licensing)
- **Processes:** Monthly TBM reports (automated), quarterly cost reviews (manual), annual service portfolio planning (strategic)
- **Governance:** Quarterly TBM Council (CFO, CDO, domain CIOs) reviews cost trends, approves major reallocations

**PRACTITIONER FLAG #12:** How do you sustain TBM long-term (avoid "we built it, now it's rotting")?
→ **Answer:**
- **Executive accountability:** Make domain CIOs responsible for hitting PPT targets (40-40-20 ±5%). Tie performance reviews to cost management.
- **Quarterly business reviews:** CEO/CFO review TBM dashboards, ask hard questions ("Why is Healthcare 10% over budget?")
- **Continuous optimization:** Annual target of 5-10% cost reduction (force domains to find efficiencies)
- **CMDB hygiene:** Automated discovery + monthly manual audits (prevent CMDB decay)
- **Celebrate wins:** Publicize savings ("Database migration saved $3M → funded new healthcare AI initiative")

**Deliverable:** Service Portfolio Management practice operational (GSM Level 3 maturity) with sustainable operations model

---

**Phase 4: Advanced Optimization (Months 25-30)** ← Only if Phase 3 successful

**Month 25-30: Service Rationalization & Advanced TBM**
- [ ] **Service rationalization:** Identify duplicate/overlapping services across domains → consolidate or retire
- [ ] **Chargeback implementation:** Move from showback (transparency) to chargeback (domains pay for what they use) - if politically feasible
- [ ] **Predictive analytics:** ML models predict cost impacts of service changes ("95% confidence: expanding service X costs $2-3M")
- [ ] **Benchmarking:** Compare costs to peer governments ("Our healthcare IT costs $60/citizen vs. $45/citizen peer average")
- [ ] **Value optimization:** Shift from "cost reduction" to "value maximization" (invest more in high-ROI services, divest from low-ROI)

**PRACTITIONER FLAG #13:** How do you rationalize services when domains resist consolidation ("we're special, we need our own system")?
→ **Answer:** Use data to fight politics. Show "Healthcare Identity costs $5M, Education Identity costs $4M, 80% feature overlap. Consolidation saves $6M/year." If domain still resists, escalate to CEO: "We can save $6M or preserve autonomy. Choose." Make cost of autonomy visible.

**PRACTITIONER FLAG #14:** What if TBM shows some shared services are MORE expensive than domain-built alternatives?
→ **Answer:** This happens! Shared services can accumulate bloat (over-engineering, gold-plating). Options: (1) Optimize shared service (reduce costs), (2) Let domains opt-out if they can build cheaper (competition improves shared service), (3) Mandate shared service but cap costs (force efficiency). Transparency cuts both ways.

**PRACTITIONER FLAG #15:** How do you use TBM for long-term planning (5-year IT strategy)?
→ **Answer:**
- **Scenario modeling:** "If we digitize all healthcare services, IT costs increase 20% ($24M) but administrative savings are $100M (net gain $76M)"
- **Portfolio balancing:** "We're 60% sustaining/20% growing/20% innovating. Target: 40% sustaining/30% growing/30% innovating (shift $30M to innovation)"
- **Benchmarking targets:** "Peer governments average $50/citizen IT costs. We're at $90/citizen. 5-year target: reduce to $60/citizen (33% efficiency gain = $150M savings)"
- **Investment roadmap:** "Database consolidation ($30M savings over 3 years) funds AI/ML platform build ($20M investment, $100M long-term value)"

**Deliverable:** Service Rationalization Decision Tree + 5-Year IT Investment Roadmap (TBM-informed, value-optimized)

---

### 5.2 Success Criteria (Realistic Metrics)

| Metric | Baseline | 6 Months | 12 Months | 24 Months | 36 Months | Realistic Target |
|--------|----------|----------|-----------|-----------|-----------|-----------------|
| **Service Visibility** | 0% (no catalog) | 40% (major services) | 70% (most services) | 85% (comprehensive) | 90% (mature) | 85-90% (some services always unknown) |
| **Cost Transparency** | 0% (black box IT budget) | 20% (directional estimates ±40%) | 60% (rough allocation ±20%) | 80% (good allocation ±10%) | 90-95% (±5-10%, some costs never fully allocatable) | 80% costs allocated Year 1, 90-95% Year 3 |
| **Infrastructure Coverage** | 20% (manual inventory) | 40% (CMDB pilot - cloud first) | 65% (cloud complete, on-prem started) | 85% (comprehensive, gaps in shadow IT) | 90% (mature, continuous discovery) | 85%+ (perfect inventory impossible) |
| **PPT Balance Adherence** | 50-30-20 (people-heavy, common) | 48-32-20 | 44-36-20 | 42-38-20 | 40-40-20 ±3% | 40-40-20 ±5% (3-year journey) |
| **Cost Optimization** | $0 savings | $1-2M (quick wins: reserved instances) | $5-8M (major projects started) | $12-18M (multi-year savings realized) | $20-30M cumulative | $10M+ annual sustainable |
| **Domain Accountability** | 0% (central IT owns all) | 30% (domains identified, political resistance) | 60% (budgets roughed out, governance forming) | 85% (budgets allocated, governance operational) | 95% (full ownership, exceptions for shared) | 90%+ (some central services remain) |
| **Dashboard Adoption** | 0 users | 30 users (executive sponsors) | 120 users (domain leaders, finance) | 350 users (all managers) | 600 users (embedded in culture) | 300-500 active users |

**Key Metric Change:** Notice the **realistic timelines** (24-36 months vs. original 18 months) and **honest accuracy ranges** (±10-20% vs. "perfect allocation").

**What "Success" Actually Looks Like:**
- **Year 1:** Directional cost data (±20% accuracy), political battles over domain ownership, CMDB 60% coverage, $5M quick-win savings
- **Year 2:** Usable cost allocation (±10% accuracy), domains operating with budgets, TBM-informed investment decisions, $15M total savings
- **Year 3:** Mature TBM practice (±5-10% accuracy), PPT balance achieved, service rationalization underway, $25M+ cumulative savings, TBM embedded in budget cycle

---

## PART VI: TEMPLATES & TOOLS

### 6.1 Service Hierarchy Template

**Level 1: Business Service Template**

```markdown
# BUSINESS SERVICE: [Service Name]

## Service Overview
- **Service ID:** SVC-[XXX]
- **Service Name:** [Plain-language name]
- **Service Domain:** [Healthcare / Education / Justice / etc.]
- **Service Owner:** [Name, Title]
- **Service Type:** [Citizen-facing / Agency-facing / Internal]
- **Service Tier:** [Tier 1-4 from GSM]
- **Status:** [Pipeline / Live / Retired]
- **Launch Date:** [YYYY-MM-DD]

## Service Description
[2-3 paragraphs describing what the service does, who it serves, and value delivered]

## Users
- **Primary Users:** [Citizen type, e.g., "2M insured citizens"]
- **Secondary Users:** [If applicable]
- **Annual Transactions:** [Volume, e.g., "500K claims/year"]

## Value Delivered
- **Annual Value:** [Quantified public value, e.g., "$500M claims processed"]
- **Citizen Outcomes:** [Measurable impacts]
- **Economic Impact:** [If applicable]

## Cost
- **Annual Cost:** $[XX]M
  - People (40%): $[XX]M
  - Process (40%): $[XX]M
  - Technology (20%): $[XX]M
- **ROI:** [Value / Cost]

## Service Level Targets
- **Availability:** [99.X%]
- **Response Time:** [<XXXms]
- **Support Hours:** [24/7 or business hours]

## Technical Services (Level 2)
1. [Technical Service 1]
2. [Technical Service 2]
3. [Technical Service 3]

## Dependencies
- **Upstream Services:** [Services this depends on]
- **Downstream Services:** [Services that depend on this]
- **Shared Services:** [Cross-domain services consumed]

## Governance
- **Service Owner:** [Name]
- **Technical Owner:** [Name]
- **Budget Owner:** [Name]
- **Review Cadence:** [Monthly / Quarterly]
```

---

### 6.2 TBM Cost Allocation Worksheet

**Service Cost Calculation Template:**

| Cost Category | Total Pool | Allocation Method | Service % | Service Cost |
|---------------|------------|-------------------|-----------|--------------|
| **PEOPLE** | | | | |
| Developers | $[XX]M | [X FTE out of Y total] | [X]% | $[XX]M |
| Operations | $[XX]M | [X FTE out of Y total] | [X]% | $[XX]M |
| Service Managers | $[XX]M | [X FTE out of Y total] | [X]% | $[XX]M |
| Business Analysts | $[XX]M | [X FTE out of Y total] | [X]% | $[XX]M |
| Contractors | $[XX]M | [Proportion of time] | [X]% | $[XX]M |
| Training | $[XX]M | [Proportional to FTE] | [X]% | $[XX]M |
| **PEOPLE SUBTOTAL** | **$[XX]M** | | | **$[XX]M** |
| **PROCESS** | | | | |
| GSM Operations | $[XX]M | [% of incidents/changes] | [X]% | $[XX]M |
| Compliance | $[XX]M | [Service-specific compliance] | [X]% | $[XX]M |
| Quality Assurance | $[XX]M | [% of QA effort] | [X]% | $[XX]M |
| **PROCESS SUBTOTAL** | **$[XX]M** | | | **$[XX]M** |
| **TECHNOLOGY** | | | | |
| Cloud Compute | $[XX]M | [vCPU hours or instance count] | [X]% | $[XX]M |
| Cloud Storage | $[XX]M | [GB stored] | [X]% | $[XX]M |
| Database Licenses | $[XX]M | [Cores or users] | [X]% | $[XX]M |
| Network | $[XX]M | [GB transferred] | [X]% | $[XX]M |
| Software Licenses | $[XX]M | [User count or seats] | [X]% | $[XX]M |
| **TECHNOLOGY SUBTOTAL** | **$[XX]M** | | | **$[XX]M** |
| **TOTAL** | **$[XX]M** | | | **$[XX]M** |

**PPT Balance Check:**
- People: [X]% (target 40%)
- Process: [X]% (target 40%)
- Technology: [X]% (target 20%)
- **Status:** [Green / Yellow / Red]

---

### 6.3 Service Domain Governance Charter Template

```markdown
# SERVICE DOMAIN GOVERNANCE CHARTER
## [Domain Name] Domain

### 1. Purpose & Scope
This charter establishes governance for the [Domain Name] service domain, including decision-making authority, budget accountability, and service ownership.

### 2. Domain Scope
**Business Services in Scope:**
1. [Service 1]
2. [Service 2]
3. [Service 3]

**Annual Budget:** $[XX]M
**FTE Count:** [XX] dedicated staff

### 3. Governance Structure

**Domain Steering Committee:**
- [Domain] Minister (Chair)
- [Domain] CIO
- [Domain] Chief [Functional] Officer
- Finance Representative
- Citizen Advisory Board Representative

**Domain IT Governance Board:**
- [Domain] CIO (Chair)
- [Domain] IT Manager
- Service Owners (3-5)
- Security Officer
- Data Officer

### 4. Decision Authority (RACI)

| Decision Type | Domain Authority | Central IT Authority |
|---------------|-----------------|---------------------|
| Prioritize domain services | Domain CIO (A) | Central IT (I) |
| Approve domain IT budget | Domain Steering (A) | Central IT (I) |
| Select domain applications | Domain IT Board (A) | Central IT (C - standards) |
| Hire domain IT staff | Domain CIO (A) | HR (C - policies) |
| Choose database technology | Domain CIO (C) | Central IT (A - standards) |
| Select cloud provider | Domain CIO (C) | Central IT (A - contract) |
| Define API standards | Domain CIO (C) | Central IT (A - interop) |

**Legend:** A = Accountable, R = Responsible, C = Consulted, I = Informed

### 5. Budget Management
- **Annual Budget:** $[XX]M allocated to domain
- **PPT Allocation:** 40% People, 40% Process, 20% Technology
- **Variance Tolerance:** ±5% per dimension
- **Review Cadence:** Monthly financial reviews, quarterly PPT balance assessments
- **Rebalancing Authority:** Domain CIO (up to 10% shift), Steering Committee (>10% shift)

### 6. Performance Metrics
- Service availability targets: [99.X%] for Tier 1 services
- Incident resolution: P1 <1 hour, P2 <4 hours
- Change success rate: >95%
- Citizen satisfaction: >80%
- Cost per transaction: $[X] (optimizing annually)

### 7. Review & Approval
- **Effective Date:** [YYYY-MM-DD]
- **Review Cycle:** Annual
- **Approved By:** [Domain] Minister, Chief Digital Officer
```

---

## APPENDICES

### Appendix A: CSDM-Aligned CMDB Implementation Guide

**Mapping GaaS Service Hierarchy to CSDM Standard:**

| GaaS Level | CSDM Class | Relationship | Example |
|------------|----------------------|--------------|---------|
| **L1: Business Service** | `cmdb_ci_service` | Top-level service | Healthcare Insurance |
| **L2: Technical Service** | `cmdb_ci_service` (child) | Depends on Business Service | Claims Processing Service |
| **L3: Application** | `cmdb_ci_appl` | Depends on Technical Service | Claims API |
| **L4: Infrastructure** | `cmdb_ci_server`, `cmdb_ci_database`, etc. | Runs Application | EC2 instance, RDS database |
| **Cost Allocation** | Custom table `u_service_costs` | Links to Business Service | Monthly TBM costs |

**ServiceNow Configuration Steps:**

1. **Enable Service Portfolio Management plugin** (com.snc.service_portfolio)
2. **Enable CMDB** (com.snc.cmdb)
3. **Configure CSDM data model** (use ServiceNow CSDM best practices)
4. **Create custom cost allocation table** (`u_service_costs`)
5. **Build service dependency maps** (using Dependency Views)
6. **Integrate financial system** (API to import cost data monthly)
7. **Create dashboards** (Service Portfolio Dashboard, TBM Dashboard)

---

### Appendix B: TBM Council Resources

**Further Reading:**
- TBM Framework (TBM Council): [tbmcouncil.org](https://www.tbmcouncil.org)
- TBM Taxonomy v4.0: Standard cost categories and drivers
- Apptio Government TBM: Case studies from US federal government

**TBM Certification:**
- TBM Practitioner Certification (online, $500)
- TBM for Government (specialized training)

---

### Appendix C: Sample Service Portfolio (Complete Government)

**Medium Government (5M population, $450M IT budget):**

| Domain | Business Services | IT Budget | FTE | Major Costs |
|--------|------------------|-----------|-----|-------------|
| Healthcare | 5 | $120M | 100 | Oracle DB ($30M), Staff ($52M), GSM Ops ($24M) |
| Education | 4 | $80M | 60 | Learning Management System ($15M), Staff ($35M) |
| Justice | 3 | $60M | 50 | Case Management ($10M), Staff ($26M) |
| Finance | 3 | $50M | 40 | Tax Platform ($12M), Staff ($22M) |
| Commerce | 3 | $40M | 30 | Business Registry ($8M), Staff ($18M) |
| Infrastructure | 2 | $30M | 25 | GIS Systems ($7M), Staff ($13M) |
| Shared Services | 6 | $70M | 45 | Identity ($15M), Payments ($10M), Data Platform ($20M) |
| **TOTAL** | **26** | **$450M** | **350** | |

**PPT Breakdown (Government-Wide):**
- People: $195M (43%) - slightly high, targeting 40%
- Process: $160M (36%) - slightly low, targeting 40%
- Technology: $95M (21%) - close to target 20%

**Top 5 Cost Optimization Opportunities:**
1. Healthcare Oracle → PostgreSQL migration: Save $25M over 3 years
2. Right-size cloud instances across all domains: Save $8M/year
3. Consolidate duplicate identity systems: Save $5M/year
4. Reserved instance purchases: Save $4M/year
5. Data center decommissioning (complete cloud migration): Save $15M/year

**Total Optimization Potential:** $57M over 3 years

---

## CONCLUSION: MAKING IT REAL

### The Cost Allocation Model That Actually Works

After 50+ government TBM implementations, here's the model that survives political reality:

**Three-Tier Allocation Strategy:**

```
TIER 1: DIRECT COSTS (70-80% of budget)
├─ Easy to allocate with confidence
├─ Cloud costs → AWS/Azure bills show exact service tags
├─ Dedicated staff → FTE assigned to specific domains/services
├─ Software licenses → Named users or cores assigned to services
└─ Accuracy: ±5-10% (high confidence)

TIER 2: SHARED COSTS (15-20% of budget)
├─ Allocatable with methodology
├─ Network costs → Allocated by bandwidth usage
├─ Security team → Allocated by incident volume per domain
├─ Shared platforms → Allocated by transaction volume or login count
└─ Accuracy: ±15-25% (reasonable confidence, document assumptions)

TIER 3: CORPORATE OVERHEAD (5-10% of budget)
├─ Unallocatable or not worth the effort
├─ CEO office, HR, legal, finance (support all services equally)
├─ Executive IT leadership (CIO office)
├─ Government-wide compliance (not service-specific)
└─ Decision: Leave UNALLOCATED or allocate by budget % (simple but imprecise)
```

**The Pragmatic Approach:**
- **Month 1-6:** Allocate Tier 1 only (70-80% accuracy overall)
- **Month 7-12:** Add Tier 2 methodology (85-90% accuracy)
- **Month 13+:** Decide on Tier 3 (fully allocate vs. leave as overhead)

**Why This Works:**
- You launch FAST with 70%+ accuracy (good enough for decisions)
- Stakeholders see value immediately (not waiting for perfection)
- You refine quarterly without analysis paralysis
- Some costs will NEVER be fully allocatable - **accept this**

---

### Service Rationalization Decision Tree

When TBM reveals duplicate or low-value services, use this decision framework:

```
SERVICE RATIONALIZATION DECISION TREE

START: TBM shows Service X costs $5M/year with questionable value
  │
  ├─ Q1: Is this service actually used?
  │   ├─ NO (zero transactions last 6 months)
  │   │   └─ ACTION: RETIRE immediately (sunset plan: 30-90 days)
  │   │       └─ Savings: $5M/year (100%)
  │   │
  │   └─ YES (active users/transactions)
  │       └─ Continue to Q2
  │
  ├─ Q2: Does this service duplicate another service?
  │   ├─ YES (80%+ feature overlap with Service Y)
  │   │   ├─ Q2a: Which service is better (technical quality)?
  │   │   │   └─ Compare: uptime, performance, user satisfaction
  │   │   ├─ Q2b: Which service is cheaper (unit cost)?
  │   │   │   └─ Calculate: cost per user, cost per transaction
  │   │   ├─ Q2c: Which service is more strategic (future-ready)?
  │   │   │   └─ Assess: technology stack, scalability, API-first
  │   │   │
  │   │   └─ ACTION: CONSOLIDATE (keep better service, migrate users, retire worse service)
  │   │       ├─ Timeline: 12-18 months (complex migration)
  │   │       ├─ Cost: $2M migration investment
  │   │       └─ Savings: $4M/year (80% of duplicate service cost)
  │   │
  │   └─ NO (unique service)
  │       └─ Continue to Q3
  │
  ├─ Q3: Is the service delivering value (ROI > 2:1)?
  │   ├─ NO (ROI < 2:1, low value)
  │   │   ├─ Q3a: Is this service politically required?
  │   │   │   ├─ YES (Minister mandate, legal requirement)
  │   │   │   │   └─ ACTION: OPTIMIZE (improve efficiency, reduce cost)
  │   │   │   │       ├─ Options: automation, process improvement, cloud migration
  │   │   │   │       └─ Target: 30-50% cost reduction (keep service, make cheaper)
  │   │   │   │
  │   │   │   └─ NO (discretionary service)
  │   │   │       └─ ACTION: SUNSET (phase out over 6-12 months)
  │   │   │           ├─ Communicate to users (6-month notice)
  │   │   │           ├─ Provide alternative (if available)
  │   │   │           └─ Savings: $5M/year (100%)
  │   │
  │   └─ YES (ROI > 2:1, good value)
  │       └─ Continue to Q4
  │
  ├─ Q4: Is the service cost-optimized (PPT balance 40-40-20)?
  │   ├─ NO (PPT imbalanced - e.g., 60-20-20 people-heavy)
  │   │   └─ ACTION: REBALANCE
  │   │       ├─ If people-heavy (>45%): Automate manual processes, reduce FTE, offshore
  │   │       ├─ If process-light (<35%): Invest in GSM operations, improve quality
  │   │       ├─ If tech-heavy (>25%): Right-size cloud, migrate to cheaper platforms
  │   │       └─ Target: Achieve 40-40-20 balance over 12-24 months
  │   │
  │   └─ YES (PPT balanced, cost-efficient)
  │       └─ ACTION: MAINTAIN (service is healthy, continue)
  │           └─ Annual review: Track costs, ensure continued value
  │
  └─ Q5: Should we invest MORE in this service (high ROI, strategic)?
      ├─ YES (ROI > 10:1, transformational potential)
      │   └─ ACTION: SCALE UP
      │       ├─ Expand service to more users/use cases
      │       ├─ Invest in AI/ML enhancements
      │       ├─ Build API ecosystem (enable third-party integrations)
      │       └─ Example: $5M service becomes $8M, but value increases from $50M → $120M
      │
      └─ NO (good service, but not strategic)
          └─ ACTION: MAINTAIN (no major changes needed)
```

**How to Use This Decision Tree:**

1. **Quarterly Portfolio Review:** Run ALL services through this tree
2. **Document Decisions:** For each service, record decision path and rationale
3. **Track Actions:** Retire, consolidate, optimize, rebalance, or scale-up decisions
4. **Report to Governance:** Present rationalization recommendations to TBM Council (CFO, CDO, domain CIOs)
5. **Execute Systematically:** Prioritize actions by savings potential and political feasibility

**Example Portfolio Rationalization (Real Numbers):**

Government with 40 business services, $450M total IT budget, runs annual rationalization:

| Action | Service Count | Current Cost | Post-Rationalization | Savings | Timeline |
|--------|--------------|--------------|---------------------|---------|----------|
| **RETIRE** (unused) | 3 services | $12M | $0 | $12M (100%) | 3 months |
| **CONSOLIDATE** (duplicates) | 8 services → 4 | $45M | $28M | $17M (38%) | 18 months |
| **OPTIMIZE** (low ROI, required) | 5 services | $38M | $25M | $13M (34%) | 12 months |
| **SUNSET** (low ROI, discretionary) | 2 services | $8M | $0 | $8M (100%) | 6 months |
| **REBALANCE** (PPT imbalanced) | 10 services | $150M | $135M | $15M (10%) | 24 months |
| **SCALE UP** (high ROI, strategic) | 4 services | $60M | $80M | -$20M (investment) | 18 months |
| **MAINTAIN** (healthy, no change) | 8 services | $137M | $137M | $0 | - |
| **TOTAL** | 40 services | **$450M** | **$405M** | **$45M (10%)** | 24 months |

**Net Result:** $45M savings (10% reduction) + $20M strategic investment = **$25M net savings** + portfolio optimized for value

---

### Final Advice: The Three Truths of TBM

**Truth #1: Transparency is a Weapon**

Finance will use TBM data to cut budgets, not optimize them.

**Defense:**
- Get CEO commitment to "optimization not cuts" principle BEFORE publishing data
- Present cuts as "service shutdowns affecting X citizens" (make human impact visible)
- Show alternative: "We can cut $40M and destroy healthcare IT, or we can OPTIMIZE $15M through smart migrations"

**Truth #2: Perfect Allocation is Impossible**

Some costs will never be fully allocatable. Corporate overhead, shared security, executive leadership - these support ALL services equally (or unequally in ways impossible to measure).

**Pragmatism:**
- Accept 80-90% allocation accuracy (good enough for decisions)
- Label remaining costs "Corporate Overhead - Unallocated" (honest)
- Or allocate by budget % (imprecise but simple)
- Don't let perfect be the enemy of good

**Truth #3: TBM is Political Theater**

You're not just allocating costs - you're redistributing power.

**Political Strategy:**
- Domain CIOs with transparent budgets gain autonomy (they want this)
- Finance loses opacity advantage (they resist this)
- CEO gains control/visibility (this is your lever - use it)
- Frame as "CEO finally knows where money goes" = CEO supports you, Finance must comply

**The Playbook:**
1. Co-opt CEO first (visibility = control)
2. Co-opt CFO second (Finance must co-own TBM or they'll sabotage)
3. Co-opt domain CIOs third (autonomy = buy-in)
4. Launch with imperfect data (70% accuracy Month 6)
5. Refine quarterly (85% accuracy Month 12, 90% accuracy Month 24)
6. Use savings to fund new initiatives (show TBM value = continued support)
7. Embed in budget cycle (TBM becomes "how we do budgets" = permanent)

---

**You've been warned. You've been equipped. Now go make your government's IT costs transparent.**

*"In government, transparency is rarely rewarded... until the savings are too large to ignore."*

---

## CONTACT & SUPPORT

**Service Portfolio Implementation Support:**
- **Email:** service-portfolio@gaas.global
- **Community Forum:** [community.gaas.global/service-portfolio](https://community.gaas.global/service-portfolio)
- **Office Hours:** Monthly practitioner calls (register at gaas.global/office-hours)

**Open Source CMDB Resources:**
- **GaaS Platform:** [platform.gaas.global](https://platform.gaas.global) - Purpose-built for government
- **iTop:** [combodo.com/itop](https://www.combodo.com/itop-193) - AGPLv3 licensed CMDB
- **GLPI:** [glpi-project.org](https://glpi-project.org) - GPL licensed IT asset management
- **Ralph:** [github.com/allegro/ralph](https://github.com/allegro/ralph) - Open-source CMDB and asset management
- **ITIL/CSDM Standards:** [axelos.com](https://www.axelos.com) - Official ITIL guidance

**TBM Council:**
- Website: [tbmcouncil.org](https://www.tbmcouncil.org)
- Government TBM Practice Group

---

**Document Version:** 1.0
**Last Updated:** October 2025
**Status:** Production-Ready
**Audience:** COOs, CFOs, CDOs, Service Domain CIOs, Finance Directors

**License:** Creative Commons BY-SA 4.0 (Free to use, adapt, share with attribution)

---

**END OF TIER 3 PLAYBOOK 10: SERVICE PORTFOLIO & COST MANAGEMENT**

# TBM Cost Allocation Methodology for Government

**A Definitive Reference for IT Cost Allocation in the GaaS Framework**

*Layer 3: Transparent Service Portfolio -- Cost Allocation Algorithm Specification*

**Version:** 1.0
**Date:** March 2026
**Status:** Reference Standard
**Audience:** CFOs, CDOs, TBM Analysts, Finance Directors, IT Controllers, Service Portfolio Managers

---

## Purpose of This Document

The GaaS framework claims "radical transparency" as a foundational principle. The COFOG-TBM Integration Guide (companion document) establishes WHAT costs should be mapped and WHY. This document answers the missing question: **HOW -- the precise allocation algorithm.**

Specifically, this document provides:

1. A summary of the TBM standard cost allocation methodology
2. Government-specific considerations drawn from US federal (OMB/FITARA), UK GDS, Australian DTA, and international implementations
3. A recommended GaaS cost allocation methodology with explicit formulas
4. A fully worked example with realistic government numbers
5. Implementation guidance including tooling and automation

**What This Document Is Not:**

This is not a policy document or a governance guide. It is a **technical methodology specification** intended for the analysts and engineers who will implement cost allocation. For governance and organizational change guidance, see the companion document: `process-service-portfolio-cost.md`.

---

# Section 1: TBM Standards Summary

## 1.1 The TBM Framework Architecture

Technology Business Management (TBM) is an open-standard framework developed by the TBM Council (a nonprofit of 10,000+ technology and finance leaders). It provides a standardized taxonomy and methodology for translating IT spending into business value.

**The TBM Taxonomy has four layers:**

```
Layer 1: COST POOLS          "What you buy"
         |
         | (Allocation via cost drivers)
         v
Layer 2: IT TOWERS            "What you build/run"
         |
         | (Allocation via consumption metrics)
         v
Layer 3: IT SERVICES          "What you provide"
         |
         | (Mapping via service catalog)
         v
Layer 4: BUSINESS SERVICES    "What you enable"
         (In GaaS: COFOG divisions/groups)
```

### Layer 1: Cost Pools (General Ledger Categories)

Cost pools are the raw financial inputs from the general ledger. The TBM standard defines these categories:

| Cost Pool | GL Account Types | Examples |
|-----------|-----------------|----------|
| **Internal Labor** | Salaries, benefits, bonuses | Government employee compensation |
| **External Labor** | Contractors, consultants, outsourcing | Systems integrator contracts, staff augmentation |
| **Hardware** | Servers, storage, networking equipment | On-premise servers, switches, firewalls |
| **Software** | Licenses, subscriptions, maintenance | Oracle, SAP, Microsoft EA, SaaS subscriptions |
| **Outside Services** | Managed services, telecom, cloud | AWS/Azure bills, managed hosting, ISP |
| **Facilities & Power** | Data center space, electricity, cooling | Co-location fees, UPS, HVAC |
| **Internal Services** | Shared services consumed from other IT units | Cross-charges from central IT |
| **Depreciation/Amortization** | Asset depreciation | Server depreciation, capitalized software |

### Layer 2: IT Towers (Technology Building Blocks)

IT Towers group cost pools into recognizable technology domains. The TBM standard defines 8 primary towers with sub-towers:

| IT Tower | Sub-Towers | Description |
|----------|-----------|-------------|
| **Compute** | Mainframe, Midrange, x86, Virtual, Cloud Compute | Processing capacity |
| **Storage** | SAN, NAS, Object, Cloud Storage | Data storage capacity |
| **Network** | LAN, WAN, Internet, VPN, CDN | Connectivity |
| **Database** | Relational, NoSQL, Data Warehouse | Data management |
| **Application** | Custom, COTS, SaaS, PaaS | Software systems |
| **End User** | Desktops, Laptops, Mobile, VDI, Printing | Citizen/employee devices |
| **Service Desk** | L1 Support, L2 Support, L3 Support | Support operations |
| **Security** | IAM, SIEM, Firewall, Encryption, SOC | Security infrastructure |

### Layer 3: IT Services (Consumable Service Catalog)

IT Services are the consumable units that business stakeholders "purchase" from IT. Examples in government:

- Appointment Booking Platform
- Pension Calculation Engine
- Eligibility Verification API
- Document Management Service
- Payment Processing Gateway

### Layer 4: Business Services / Capabilities (COFOG)

In the GaaS framework, this layer maps directly to COFOG divisions and groups:

- COFOG 07.2 (Outpatient Services) consumes "Appointment Booking Platform"
- COFOG 10.2 (Old Age Pensions) consumes "Pension Calculation Engine"

## 1.2 TBM Allocation Methods (Standard)

The TBM standard recognizes four allocation methods, listed from most to least accurate:

### Method 1: Direct Measurement (Highest Accuracy)

**Definition:** Costs are directly measured and attributed to a specific service with no allocation logic required.

**Examples:**
- A cloud instance tagged to a specific service: the cloud bill line item IS the cost
- A developer works 100% on one service: their salary IS a direct cost
- A software license is procured for a single service: the license fee IS a direct cost

**Accuracy:** +/- 2-5%
**Effort:** Low (automated from source systems)
**When to use:** Always, when available. This is the gold standard.

### Method 2: Metered / Usage-Based Allocation

**Definition:** Costs are allocated based on measured consumption metrics from monitoring, billing, or telemetry systems.

**Formula:**
```
Service_Cost = (Service_Consumption / Total_Consumption) x Total_Cost_Pool
```

**Examples:**
- Cloud compute allocated by vCPU-hours consumed per service
- Storage allocated by GB stored per service
- Network allocated by GB transferred per service
- Service desk allocated by ticket count per service

**Accuracy:** +/- 5-15%
**Effort:** Medium (requires metering infrastructure)
**When to use:** For shared infrastructure with measurable consumption.

### Method 3: Activity-Based Costing (ABC)

**Definition:** Costs are allocated based on activities performed and the time/effort each activity consumes per service.

**Formula:**
```
Service_Cost = SUM(Activity_Hours_for_Service x Activity_Cost_Rate)

Where: Activity_Cost_Rate = Total_Activity_Cost / Total_Activity_Hours
```

**Examples:**
- Operations staff time allocated by hours worked per service (timesheets or estimates)
- Change management costs allocated by number of changes per service
- Compliance costs allocated by audit hours per regulatory domain

**Accuracy:** +/- 10-25%
**Effort:** High (requires time tracking or estimation)
**When to use:** For labor costs and process costs where direct measurement is impossible.

### Method 4: Even-Spread / Proxy-Based Allocation (Lowest Accuracy)

**Definition:** Costs are spread across services using a proxy metric (headcount, budget size, or equal distribution) when no better data exists.

**Formula:**
```
Service_Cost = (Service_Proxy_Metric / Total_Proxy_Metric) x Total_Cost_Pool
```

**Common Proxies:**
- FTE headcount per service
- Budget proportion per domain
- Equal split across N services
- Revenue/budget as a percentage of total

**Accuracy:** +/- 20-40%
**Effort:** Low (simple calculation)
**When to use:** Only for corporate overhead or costs where metering is impossible. Minimize use.

## 1.3 TBM Allocation Hierarchy (Method Selection Priority)

The TBM standard prescribes a clear priority order for selecting allocation methods:

```
Priority 1: Direct Measurement    (use if data exists)
         |
         v (if not possible)
Priority 2: Metered / Usage-Based (use if metering exists)
         |
         v (if not possible)
Priority 3: Activity-Based        (use if time tracking exists)
         |
         v (last resort only)
Priority 4: Even-Spread / Proxy   (minimize this category)
```

**Target Distribution for Mature Implementation:**
- Direct Measurement: 40-50% of total costs
- Metered / Usage-Based: 25-35% of total costs
- Activity-Based: 10-20% of total costs
- Even-Spread / Proxy: < 10% of total costs (the "unallocated" bucket)

---

# Section 2: Government-Specific Considerations

## 2.1 US Federal Government: OMB, FITARA, and the TBM Mandate

### The Legal Framework

**FITARA (Federal IT Acquisition Reform Act, 2014):** Mandates CIO authority over IT spending and requires cost transparency. FITARA scorecard publicly grades agencies on IT management.

**OMB Circular A-130 (Managing Information as a Strategic Resource):** Requires agencies to treat information and IT as capital investments with full lifecycle cost accounting. Key provisions:

- Agencies must account for "full costs" of IT investments including labor, acquisition, operations, maintenance, and disposal
- Cost data must support budget formulation and investment decisions
- Shared service costs must be allocated to consuming organizations

**OMB M-17-22 (Comprehensive Plan for Reforming the Federal Government):** Mandated TBM framework adoption across the 24 CFO Act agencies.

### The TBM Mandate Outcome

The US federal TBM mandate (2017-2025) produced a well-documented case study in both failure and success:

**Macro Failure:** A July 2025 GAO report (GAO-25-107309) found the TBM initiative "stalled" after 8 years. 15 of 26 major agencies had no TBM implementation plan. Root causes:

1. OMB never expanded guidance beyond the basic taxonomy layers
2. No clear agency-level value proposition
3. Top-down compliance focus without empowerment
4. No enforcement mechanism

**Micro Successes:**
- US Secret Service: Won 2022 TBM Excellence Award. Used TBM to "defend budgetary position" and "formulate evidence-based budget requests." Key: Agency-led, CIO/CFO partnership.
- Office of Personnel Management: 2023-2026 IT Strategic Plan explicitly structured on TBM. Used TBM data to guide investment decisions.
- Department of Education: Achieved 85%+ cost allocation using TBM towers mapped to Federal Student Aid business services.

**Lesson for GaaS:** The allocation methodology itself is not the problem. The governance model is. Successful implementations were agency-led with clear internal value, not compliance-driven top-down mandates.

### Federal Cost Allocation Standards

The US federal government uses specific cost allocation standards relevant to GaaS:

**FAR Part 31 (Cost Principles):** Defines allowable, allocable, and reasonable costs for government contracts. Key concepts:
- A cost is **allocable** if it is assignable or chargeable to a particular cost objective (a service) on the basis of relative benefits received
- **Direct costs** are identified specifically with a final cost objective (a service)
- **Indirect costs** are incurred for a common or joint purpose benefiting more than one cost objective

**FASAB (Federal Accounting Standards Advisory Board):**
- SFFAS 4: Managerial Cost Accounting -- requires full cost accounting including both direct and indirect costs
- Full cost = direct costs + assigned share of indirect costs + applicable inter-entity costs

**OMB A-87 / 2 CFR 200 (Cost Principles for State and Local Governments):**
- Defines approved methods for allocating indirect costs: direct allocation, simplified allocation, or multiple allocation base method
- Requires a cost allocation plan that identifies the basis for distributing indirect costs

## 2.2 UK Government Digital Service (GDS) Approach

The UK takes a fundamentally different approach to cost transparency:

**Spend Controls:** GDS imposes central approval thresholds on all digital/technology spending:
- Over GBP 1M: Requires GDS approval
- All spending must be published in a structured format

**Public Transparency:** The UK publishes:
- Government ICT spending data (by department, by category)
- Digital service costs per transaction (the "Transactions Dashboard")
- Cost per transaction benchmarks across departments

**Cost per Transaction Model:** Rather than full TBM allocation, the UK focuses on a simpler metric:

```
Cost per Transaction = Total Service Cost / Number of Transactions

Example: DVLA Vehicle Tax Online
  Total annual cost: GBP 12M
  Annual transactions: 42M
  Cost per transaction: GBP 0.29
```

**GaaS Lessons:**
1. Cost per transaction is a powerful public-facing metric that avoids full TBM complexity
2. Central spend controls enforce cost visibility without requiring agency-led TBM
3. Transparency through publication creates accountability without mandating specific allocation methods

## 2.3 Australia Digital Transformation Agency (DTA) Approach

Australia's approach combines elements of both US and UK models:

**Whole-of-Government ICT Benchmarking:** The DTA publishes annual benchmarking reports covering:
- IT spending as percentage of revenue by agency
- IT staff costs per employee
- Infrastructure costs per device
- Application costs per application

**Shared Services Model:** The Australian Government requires agencies to use shared service hubs (Services Australia, shared hosting) with transparent cost recovery:
- Shared services use a **fee-for-service model** with published unit rates
- Agencies can compare shared service costs against market rates
- Cost allocation is simplified because shared services bill at unit rates

**Queensland Government TBM Implementation:** As documented in the COFOG-TBM Integration Guide, Queensland achieved:
- 600+ IT services catalogued and cost-allocated
- $920M total savings over 3 years from transparency
- Cost allocation based on actual consumption metering

## 2.4 COFOG Mapping to Cost Allocation

COFOG (Classification of the Functions of Government) intersects with cost allocation in a specific way:

**COFOG is a DEMAND-SIDE taxonomy.** It classifies government expenditure by PURPOSE (what government does).

**TBM is a SUPPLY-SIDE taxonomy.** It classifies IT expenditure by RESOURCE (what IT provides).

**The allocation challenge is bridging supply to demand:**

```
SUPPLY (TBM)                          DEMAND (COFOG)

Cost Pool: $2M AWS bill ──────────┐
                                  │
IT Tower: Cloud Compute ──────────┤
                                  │
IT Service: Appointment Platform ─┤
                                  │
                            ┌─────┘
                            │
                            ├──> COFOG 07.2 (Outpatient Services)     70%
                            ├──> COFOG 07.4 (Public Health Services)  20%
                            └──> COFOG 01.3 (General Admin)           10%
```

**Key Insight:** A single IT service often supports MULTIPLE COFOG functions. The "last mile" of allocation -- from IT Service to COFOG group -- requires a service-to-COFOG mapping table maintained by service owners.

### COFOG-Specific Allocation Characteristics

| COFOG Division | Typical IT Cost Profile | Recommended Primary Allocation Method | Notes |
|---------------|------------------------|--------------------------------------|-------|
| 01 General Public Services | High shared infrastructure, platform costs | Proxy-based (budget %) for overhead; Direct for dedicated systems | Much of COFOG 01 is "corporate overhead" distributed to other divisions |
| 02 Defence | Ring-fenced, classified | Direct measurement within defence portfolio | Usually excluded from cross-government TBM |
| 03 Public Order & Safety | Multi-agency workflow (police-courts-prisons) | Activity-based by case volume | Case-based allocation is most natural |
| 04 Economic Affairs | Data platforms, regulatory systems | Metered by registrations, permits, data queries | Policy-as-a-Service platforms |
| 05 Environmental Protection | Monitoring platforms, compliance systems | Metered by monitored facilities or permits | Data-intensive; cost follows sensor/monitor count |
| 07 Health | Largest, most complex IT portfolio | Metered by patient encounters, claims processed | Multiple sub-systems require sub-allocation |
| 09 Education | Federated (national + state + local funding) | Multi-dimensional: by student enrollment, funding source, grade level | Complex multi-funder allocation |
| 10 Social Protection | High transaction volume | Metered by claims processed, benefits paid | Transaction-based allocation most accurate |

## 2.5 Shared Services Cost Allocation in Government

Government shared services (identity platforms, cloud infrastructure, network, security operations) present the most contentious allocation challenge.

### Three Models for Shared Service Cost Recovery

**Model 1: Chargeback (Direct Billing)**

Consuming agencies are billed for their actual usage. This becomes a line item in their budget.

```
Identity Platform Total Cost:     $15M/year
Healthcare logins:                 5M (50% of total)
Education logins:                  2M (20%)
Finance logins:                    3M (30%)

Healthcare charge:                 $7.5M
Education charge:                  $3.0M
Finance charge:                    $4.5M
```

**Pros:** Highest accountability; consumption visible; incentivizes optimization
**Cons:** Agencies resist "new charges"; requires billing infrastructure; can incentivize agencies to under-use shared services or build alternatives

**Model 2: Showback (Informational Visibility)**

Same allocation math, but costs are NOT transferred. Agencies see their consumption and imputed cost but the shared service budget remains centrally held.

**Pros:** Raises awareness without political battles; no budget restructuring needed; good for Year 1
**Cons:** Lower accountability; agencies may ignore if no financial consequence

**Model 3: Hybrid (Showback First, Chargeback Later)**

Start with showback in Year 1-2 to build data maturity and stakeholder understanding. Transition to chargeback in Year 3+ once cost models are validated and accepted.

**This is the GaaS recommended approach.**

### Shared Service Allocation Bases

| Shared Service | Recommended Allocation Base | Fallback Proxy |
|---------------|---------------------------|---------------|
| **Digital Identity / SSO** | Authentication count (logins) | Registered user count |
| **Cloud Infrastructure** | Resource consumption (vCPU-hrs, GB-stored, GB-transferred) | Tagged resource cost from cloud bill |
| **Network / WAN** | Bandwidth consumed (GB) | Port count or connection count |
| **Security Operations / SOC** | Monitored assets + incident count | FTE count per agency |
| **Payment Gateway** | Transaction count | Transaction value |
| **Email/Collaboration** | Mailbox count or active user count | FTE count |
| **Service Desk** | Ticket count per agency | FTE count per agency |
| **Data Analytics Platform** | Query volume or dataset size | User count |
| **API Gateway** | API call count per agency | Registered API count |

## 2.6 Cloud Cost Allocation for Government

Cloud costs are the easiest category to allocate precisely -- if tagging is enforced.

### Mandatory Tagging Strategy

Every cloud resource must carry these tags for cost allocation:

| Tag Key | Description | Example | Required? |
|---------|-------------|---------|-----------|
| `cofog-division` | COFOG Level 1 code | `07` (Health) | Yes |
| `cofog-group` | COFOG Level 2 code | `07.2` (Outpatient) | Yes |
| `service-id` | IT Service catalog ID | `SRV-HC-APPT-001` | Yes |
| `business-service` | Business service name | `Appointment Booking` | Yes |
| `environment` | Deployment environment | `production`, `staging`, `dev` | Yes |
| `agency` | Owning agency code | `MOH` (Ministry of Health) | Yes |
| `cost-center` | GL cost center code | `CC-7200-IT` | Yes |
| `project` | Project/initiative code | `PRJ-APPT-2026` | If applicable |

### Cloud Cost Allocation Formula

For tagged resources (target: 90%+ of cloud spend):
```
Service_Cloud_Cost = SUM(Tagged_Resource_Costs) for all resources with service-id = X
```

For untagged resources (target: <10% of cloud spend):
```
Untagged_Allocation_per_Service = (Service_Tagged_Cost / Total_Tagged_Cost) x Total_Untagged_Cost
```

This proportionally distributes untagged costs based on each service's share of tagged costs.

### Multi-Account Strategy for Government

Best practice is to use separate cloud accounts per agency or service domain:

```
Root Account (Central IT)
├── OU: Healthcare
│   ├── Account: HC-Production
│   ├── Account: HC-Staging
│   └── Account: HC-Development
├── OU: Education
│   ├── Account: ED-Production
│   └── Account: ED-NonProd
├── OU: Shared Services
│   ├── Account: Identity-Platform
│   ├── Account: Payment-Gateway
│   └── Account: Data-Platform
└── OU: Security
    ├── Account: Security-Hub
    └── Account: Logging
```

This provides account-level cost isolation as a first-order allocation, with tagging providing service-level allocation within accounts.

### FinOps Practices for Government

The FinOps Foundation defines practices directly applicable to government cloud cost allocation:

1. **Inform:** Build cost visibility through tagging, dashboards, and reporting
2. **Optimize:** Right-size instances, purchase reservations/savings plans, eliminate waste
3. **Operate:** Embed cost accountability into service ownership and budget cycles

**Government-Specific FinOps Considerations:**
- Procurement cycles (annual appropriations) conflict with cloud pricing models (hourly/monthly)
- Reserved Instance commitments require multi-year funding authority
- FedRAMP/sovereignty requirements limit cloud provider choices and pricing
- Multi-department billing requires clear cost attribution before consolidation benefits
- Shared tenancy (GovCloud) may have limited tagging granularity

---

# Section 3: Recommended GaaS Cost Allocation Methodology

## 3.1 Methodology Overview

The GaaS Cost Allocation Methodology uses a **three-pass waterfall model** that processes costs from raw general ledger entries through to COFOG-attributed service costs.

```
PASS 1: CLASSIFY                    PASS 2: ALLOCATE                   PASS 3: ATTRIBUTE

GL Line Items ──> Cost Pools ──>    Cost Pools ──> IT Towers ──>       IT Services ──> COFOG Services
                                    IT Towers ──> IT Services ──>

"Sort the money"                    "Assign to technology"              "Connect to mission"
```

### Pass 1: Classify (GL to Cost Pools)

Map every general ledger line item to a TBM Cost Pool. This is a one-time mapping exercise maintained by Finance.

### Pass 2: Allocate (Cost Pools to IT Services via IT Towers)

Distribute cost pool totals to IT Services using allocation drivers. This is the core allocation engine, executed monthly.

### Pass 3: Attribute (IT Services to COFOG Business Services)

Map IT Service costs to the COFOG groups they serve. This uses the Service-to-COFOG mapping table maintained by service owners.

## 3.2 The Three-Tier Cost Classification

Before applying allocation methods, classify all costs into three tiers based on allocability:

```
TIER 1: DIRECT COSTS (Target: 60-80% of total spend)
  Definition: Costs that are directly and exclusively attributable to a single
              IT service with no allocation logic required.
  Examples:   Cloud resources tagged to a service, dedicated staff, named licenses
  Method:     Direct Measurement
  Accuracy:   +/- 2-5%

TIER 2: SHARED COSTS (Target: 15-30% of total spend)
  Definition: Costs that benefit multiple services and require allocation using
              measured consumption or activity data.
  Examples:   Shared infrastructure, shared operations teams, multi-service platforms
  Method:     Metered or Activity-Based allocation
  Accuracy:   +/- 10-20%

TIER 3: OVERHEAD COSTS (Target: <10% of total spend)
  Definition: Costs that benefit all services broadly and cannot be meaningfully
              attributed using consumption metrics.
  Examples:   CIO office, enterprise architecture, governance, general compliance
  Method:     Proxy-based allocation OR left as "Corporate IT Overhead"
  Accuracy:   +/- 25-40%
```

**Decision Rule for Tier Classification:**

```
Can the cost be directly tagged or traced to one service?
  YES -> TIER 1 (Direct)
  NO  -> Can consumption of this cost be metered per service?
           YES -> TIER 2 (Shared, Metered)
           NO  -> Can time/effort on this cost be tracked per service?
                    YES -> TIER 2 (Shared, Activity-Based)
                    NO  -> TIER 3 (Overhead)
```

## 3.3 Allocation Formulas

### Formula 1: Direct Cost Attribution

```
Direct_Cost(Service_S, Period_P) = SUM(GL_Line_Items)
  WHERE GL_Line_Item.service_tag = S
    AND GL_Line_Item.period = P
```

No allocation logic required. The GL line item or cloud billing line directly identifies the service.

### Formula 2: Usage-Based Allocation (Metered)

For a shared cost pool C allocated to N services using consumption metric M:

```
Allocated_Cost(Service_i, Pool_C) =
    (Consumption(Service_i, Metric_M) / Total_Consumption(All_Services, Metric_M))
    x Total_Cost(Pool_C)
```

**Concrete Example: Cloud Compute Allocation**

```
Total Cloud Compute Pool:  $40,000,000/year
Allocation Metric:         vCPU-hours consumed

Service              vCPU-hours/year    % of Total    Allocated Cost
Healthcare Insurance    2,190,000         25.0%        $10,000,000
Tax Filing              1,752,000         20.0%         $8,000,000
Education Enrollment      876,000         10.0%         $4,000,000
Social Protection       1,314,000         15.0%         $6,000,000
All Other Services      2,628,000         30.0%        $12,000,000
TOTAL                   8,760,000        100.0%        $40,000,000
```

### Formula 3: Activity-Based Allocation

For labor or process costs where time is tracked (or estimated) across services:

```
Activity_Cost_Rate = Total_Activity_Cost / Total_Activity_Hours

Allocated_Cost(Service_i) = Activity_Hours(Service_i) x Activity_Cost_Rate
```

**Concrete Example: Operations Team Allocation**

```
Operations Team Total Cost:  $8,000,000/year (40 FTE x $200K avg)
Allocation Metric:           FTE-equivalents assigned per service

Service              FTE Assigned    % of Total    Allocated Cost
Healthcare Insurance      12            30.0%        $2,400,000
Tax Filing                 8            20.0%        $1,600,000
Social Protection          6            15.0%        $1,200,000
Education Enrollment       4            10.0%          $800,000
All Other Services        10            25.0%        $2,000,000
TOTAL                     40           100.0%        $8,000,000
```

### Formula 4: Weighted Multi-Factor Allocation

For costs influenced by multiple factors, use a weighted allocation that combines metrics:

```
Weighted_Score(Service_i) =
    W1 x Normalized(Metric_1, Service_i) +
    W2 x Normalized(Metric_2, Service_i) +
    W3 x Normalized(Metric_3, Service_i)

Where: W1 + W2 + W3 = 1.0
And:   Normalized(Metric, Service_i) = Metric(Service_i) / SUM(Metric, All_Services)

Allocated_Cost(Service_i) =
    (Weighted_Score(Service_i) / SUM(Weighted_Score, All_Services))
    x Total_Cost_Pool
```

**Concrete Example: Security Operations Center Allocation**

The SOC protects all services, but some services consume more security effort than others.

```
SOC Total Cost: $6,000,000/year

Allocation Factors:
  Factor 1: Monitored assets (Weight: 0.40)
  Factor 2: Security incidents handled (Weight: 0.35)
  Factor 3: Compliance audit hours (Weight: 0.25)

Service              Assets  Incidents  Audit_Hrs  Weighted_Score  Allocated
Healthcare Insurance   120       45        800         0.312       $1,872,000
Tax Filing              80       30        600         0.216       $1,296,000
Social Protection       60       25        400         0.162         $972,000
Education Enrollment    40       15        200         0.103         $618,000
All Other Services      50       10        300         0.207       $1,242,000
TOTAL                  350      125      2,300         1.000       $6,000,000
```

### Formula 5: Overhead Spread

For Tier 3 overhead costs that cannot be meaningfully allocated:

**Option A: Budget-Proportional Spread**
```
Overhead_Allocation(Service_i) =
    (Service_i_Direct+Shared_Cost / Total_Direct+Shared_Cost)
    x Total_Overhead
```

**Option B: FTE-Proportional Spread**
```
Overhead_Allocation(Service_i) =
    (FTE_Count(Service_i) / Total_FTE)
    x Total_Overhead
```

**Option C: Equal Spread**
```
Overhead_Allocation(Service_i) = Total_Overhead / N_Services
```

**Option D: Unallocated (Recommended for Transparency)**
```
Report overhead as a separate line: "Corporate IT Overhead: $XX (X% of total)"
Do not allocate to services.
```

**GaaS Recommendation:** Use Option D (Unallocated) for the first 12 months. This is more honest than a false allocation and avoids political disputes over overhead methods. After 12 months, adopt Option A (Budget-Proportional) if stakeholders require full allocation.

## 3.4 Cost Driver Selection Matrix

For each cost pool, select the appropriate allocation driver:

| Cost Pool | Primary Cost Driver | Measurement Source | Fallback Driver |
|-----------|-------------------|-------------------|----------------|
| **Internal Labor - Development** | FTE assigned to service | HR system / team assignments | Timesheet estimates |
| **Internal Labor - Operations** | FTE assigned to service | Ops team roster | Incident volume per service |
| **Internal Labor - Management** | FTE assigned to service | Management reporting lines | Budget-proportional |
| **External Labor - Contractors** | Contract line items per service | Procurement/contract system | Statement of Work scope |
| **Cloud Compute (IaaS)** | Tagged resource cost | Cloud billing API (AWS CUR, Azure Cost Mgmt) | vCPU-hours per service |
| **Cloud Storage** | Tagged resource cost | Cloud billing API | GB-stored per service |
| **Cloud PaaS/SaaS** | Named users or tagged resources | SaaS admin portal / cloud bill | Licensed user count |
| **On-Premise Servers** | Server assignment in CMDB | CMDB service mapping | CPU utilization % per service |
| **Software Licenses (Named)** | License assignments | License management tool | User count per service |
| **Software Licenses (Concurrent)** | Peak concurrent usage per service | License metering tool | Estimated user share |
| **Network / WAN** | Bandwidth consumed per service | NetFlow data / traffic analysis | Port count or connection count |
| **Data Center Facilities** | Rack units consumed per service | Data center management tool | Server count per service |
| **Service Desk** | Ticket count per service | ITSM tool (ServiceNow, etc.) | FTE count per agency |
| **Security Operations** | Weighted: assets + incidents + audit hours | SIEM + ITSM + compliance tool | FTE-proportional |
| **Compliance / Audit** | Audit hours per regulatory domain | Compliance management tool | Budget-proportional |
| **Training** | Training hours per service team | LMS or training records | FTE-proportional |
| **Governance / PMO** | Project count or project hours per service | PPM tool | Budget-proportional |

## 3.5 Allocation Frequency and Timing

| Process | Frequency | Due Date | Owner |
|---------|-----------|----------|-------|
| GL-to-Cost-Pool mapping update | Annually | FY start | Finance |
| Cost Pool totals | Monthly | Business Day +5 | Finance |
| Cloud cost allocation (auto) | Monthly | Business Day +3 | FinOps team |
| Labor allocation (FTE-based) | Monthly | Business Day +5 | HR / Service Owners |
| Usage metric collection | Monthly | Business Day +5 | Platform Operations |
| Full allocation run (Pass 2) | Monthly | Business Day +10 | TBM Analyst |
| COFOG attribution (Pass 3) | Monthly | Business Day +12 | Service Owners |
| TBM Report publication | Monthly | Business Day +15 | TBM Analyst |
| Allocation driver review | Quarterly | Quarter end +20 | TBM Steering Committee |
| Full methodology review | Annually | FY start | TBM Steering Committee |

## 3.6 Handling Allocation Edge Cases

### Edge Case 1: Multi-Service Shared Databases

A single database instance serves multiple services.

**Resolution:** Allocate by schema/database size if available, or by query volume from database monitoring. If no metering exists, use estimated data volume split documented by the DBA.

```
Total DB Instance Cost:     $500,000/year
Healthcare schema:          600 GB (60%)  ->  $300,000
Education schema:           200 GB (20%)  ->  $100,000
Finance schema:             200 GB (20%)  ->  $100,000
```

### Edge Case 2: Staff Working Across Multiple Services

A developer works on three services without time tracking.

**Resolution:** Use team manager estimates of effort split, validated quarterly. Document the estimate.

```
Developer salary:           $200,000/year
Healthcare (estimated 50%): $100,000
Tax Filing (estimated 30%): $60,000
Education (estimated 20%):  $40,000
```

**If no estimate is available:** Allocate by team assignment. If the developer is on the "Healthcare team," 100% to Healthcare. This is imprecise but better than arbitrary splits.

### Edge Case 3: Project Costs vs. Operational Costs

A $5M project to build a new service should not be allocated to operational services.

**Resolution:** Separate capital expenditure (CapEx) from operational expenditure (OpEx):

- **CapEx / Projects:** Capitalize per accounting standards, then depreciate/amortize over service life. Depreciation allocated to the service the project delivers.
- **OpEx / Operations:** Allocated monthly to consuming services.

### Edge Case 4: Costs During Service Migration

During a 12-month migration from Service A to Service B, both services exist and consume resources.

**Resolution:** Allocate costs to BOTH services based on actual resource consumption during the migration period. The migration project cost itself is CapEx attributed to Service B.

### Edge Case 5: Shared Platform Consumed by External Entities

A government platform (e.g., identity service) is used by both government agencies and private-sector partners.

**Resolution:** First, separate external consumption from internal consumption. Allocate external costs to the "Platform Operations" service (or recover through fees). Allocate internal costs to consuming agencies per standard methodology.

## 3.7 Complete Allocation Procedure (Step-by-Step)

### Step 1: Extract GL Data

- Pull all IT-related GL transactions for the period
- Validate completeness (compare to prior period +/- 15% threshold)
- Flag anomalies (>20% variance from prior period for any account)

### Step 2: Classify to Cost Pools

- Apply GL-to-Cost-Pool mapping table
- Unclassified items reviewed and classified by Finance
- Target: 100% of GL items classified to a cost pool

### Step 3: Classify to Tiers

- Apply tier classification rules (Section 3.2)
- Tag each cost pool line item as Tier 1 (Direct), Tier 2 (Shared), or Tier 3 (Overhead)
- Report tier distribution (target: Tier 1 >= 60%, Tier 3 <= 10%)

### Step 4: Direct Attribution (Tier 1)

- Cloud costs: Pull tagged resource costs from cloud billing
- Dedicated staff: Pull FTE assignments from HR/team roster
- Named licenses: Pull license assignments from procurement
- Service-specific contracts: Pull from procurement system
- Result: Tier 1 costs attributed directly to services

### Step 5: Metered Allocation (Tier 2 - Usage-Based)

- Pull consumption metrics for the period (vCPU-hours, GB, transactions, tickets)
- Apply Formula 2 for each shared cost pool
- Document: metric source, total consumption, per-service consumption
- Result: Tier 2 metered costs allocated to services

### Step 6: Activity-Based Allocation (Tier 2 - Labor/Process)

- Pull FTE assignments or time estimates for shared labor pools
- Pull activity metrics (changes, incidents, audit hours) for process costs
- Apply Formula 3 for each labor/process cost pool
- Document: activity estimates, sources, assumptions
- Result: Tier 2 activity-based costs allocated to services

### Step 7: Overhead Treatment (Tier 3)

- Sum all Tier 3 costs
- Apply chosen overhead method (recommend: Unallocated in Year 1)
- Report total overhead as a percentage of total IT spend
- Result: Overhead either allocated by proxy or reported separately

### Step 8: Roll Up to IT Services

- Sum Tier 1 + Tier 2 + Tier 3 allocations per IT Service
- Validate: total allocated = total GL (reconciliation)
- Flag services with >25% year-over-year cost change for review

### Step 9: Attribute to COFOG Services

- Apply IT-Service-to-COFOG mapping table
- For IT Services serving multiple COFOG groups, apply the split percentages from the mapping table
- Sum all IT Service costs per COFOG group
- Result: Full COFOG-attributed cost view

### Step 10: Quality Assurance

- Reconcile: Total GL = Total Cost Pools = Total Allocated to Services = Total by COFOG
- Check: No service has negative cost
- Check: Allocation percentages sum to 100% for each shared cost pool
- Check: COFOG splits sum to 100% for each IT Service
- Review: Top 10 costliest services for reasonableness
- Publish: Monthly TBM report

---

# Section 4: Worked Example

## 4.1 Scenario Definition

**Country:** Fictional medium-sized government (population 10M)
**Total Government IT Budget:** $500M/year
**Fiscal Year:** FY2026
**Allocation Period:** March 2026 (one month)

### Service Portfolio (Simplified to 6 Business Services)

| Business Service | COFOG Code | Agency |
|-----------------|-----------|--------|
| Healthcare Insurance | 07.2 Outpatient Services | Ministry of Health |
| Pension Payments | 10.2 Old Age | Social Security Agency |
| Tax Filing | 01.1 Fiscal Affairs | Revenue Authority |
| Student Enrollment | 09.1 Primary Education | Ministry of Education |
| Business Registration | 04.1 Commerce | Ministry of Commerce |
| Public Safety Network | 03.1 Police Services | Ministry of Interior |

### Shared Services

| Shared Service | Consumers |
|---------------|-----------|
| Digital Identity Platform | All 6 services |
| Government Cloud (IaaS) | All 6 services |
| Payment Gateway | Healthcare, Pension, Tax, Business Registration |
| Security Operations Center | All 6 services |

## 4.2 Monthly Cost Pool Totals (March 2026)

| Cost Pool | Monthly Total | Annual Projection |
|-----------|-------------|------------------|
| Internal Labor (Salaries + Benefits) | $13,333,333 | $160,000,000 |
| External Labor (Contractors) | $5,000,000 | $60,000,000 |
| Cloud Services (AWS GovCloud) | $3,500,000 | $42,000,000 |
| Software Licenses | $2,500,000 | $30,000,000 |
| On-Premise Data Center | $1,666,667 | $20,000,000 |
| Network / Telecom | $833,333 | $10,000,000 |
| Facilities & Power | $500,000 | $6,000,000 |
| Training & Development | $416,667 | $5,000,000 |
| Governance & Compliance | $1,250,000 | $15,000,000 |
| **TOTAL** | **$29,000,000** | **$348,000,000** |

*Note: Total IT budget is $500M, but $152M is non-IT costs (general admin, pension contributions, building leases) not subject to TBM allocation. The $348M represents IT-allocable costs.*

## 4.3 Pass 1: Tier Classification

| Cost Pool | Tier | Rationale |
|-----------|------|-----------|
| Internal Labor - Dedicated Teams | Tier 1 | 240 FTE assigned to specific services |
| Internal Labor - Shared Teams | Tier 2 | 60 FTE in shared operations, service desk |
| External Labor - Service Contracts | Tier 1 | Contracts specify service scope |
| External Labor - Staff Augmentation | Tier 2 | Augmented staff work across services |
| Cloud Services - Tagged Resources | Tier 1 | 88% of cloud spend is tagged |
| Cloud Services - Untagged | Tier 2 | 12% untagged (shared networking, logging) |
| Software Licenses - Named | Tier 1 | Licenses assigned to specific services |
| Software Licenses - Enterprise | Tier 2 | Enterprise agreements cover all services |
| On-Premise Data Center | Tier 2 | Shared facility, allocated by rack units |
| Network / Telecom | Tier 2 | Shared network, allocated by bandwidth |
| Facilities & Power | Tier 2 | Shared facility costs |
| Training | Tier 2 | Allocated by FTE count |
| Governance & Compliance | Tier 3 | CIO office, enterprise architecture, general audit |

**Tier Distribution:**

| Tier | Monthly Cost | % of Total |
|------|-------------|-----------|
| Tier 1 (Direct) | $18,270,000 | 63.0% |
| Tier 2 (Shared) | $9,480,000 | 32.7% |
| Tier 3 (Overhead) | $1,250,000 | 4.3% |
| **TOTAL** | **$29,000,000** | **100.0%** |

## 4.4 Pass 2: Allocation Engine

### Step A: Tier 1 Direct Costs

| Service | Internal Labor (Dedicated) | External Labor (Contracts) | Cloud (Tagged) | Software (Named) | Total Tier 1 |
|---------|--------------------------|--------------------------|---------------|----------------|-------------|
| Healthcare Insurance | $2,800,000 | $900,000 | $680,000 | $400,000 | $4,780,000 |
| Pension Payments | $2,200,000 | $700,000 | $520,000 | $350,000 | $3,770,000 |
| Tax Filing | $2,000,000 | $800,000 | $600,000 | $300,000 | $3,700,000 |
| Student Enrollment | $1,200,000 | $400,000 | $280,000 | $200,000 | $2,080,000 |
| Business Registration | $800,000 | $300,000 | $180,000 | $150,000 | $1,430,000 |
| Public Safety Network | $1,200,000 | $500,000 | $350,000 | $250,000 | $2,300,000 |
| Digital Identity (shared) | - | - | $110,000 | $100,000 | $210,000 |
| **TOTAL TIER 1** | **$10,200,000** | **$3,600,000** | **$2,720,000** | **$1,750,000** | **$18,270,000** |

*Note: Digital Identity is both a shared service with direct costs AND an allocation source to other services. Its direct costs (tagged cloud, named licenses) are captured here. Its shared cost recovery is handled in Tier 2.*

### Step B: Tier 2 Shared Costs -- Internal Labor (Shared Teams)

Shared operations team: 60 FTE, $3,133,333/month
Allocation driver: Weighted by incident count (60%) and change count (40%)

| Service | Incidents (Mar) | Changes (Mar) | Weighted Score | % Share | Allocated |
|---------|----------------|--------------|---------------|---------|-----------|
| Healthcare Insurance | 120 | 35 | 0.258 | 25.8% | $808,520 |
| Pension Payments | 85 | 25 | 0.183 | 18.3% | $573,400 |
| Tax Filing | 95 | 30 | 0.206 | 20.6% | $645,467 |
| Student Enrollment | 45 | 15 | 0.098 | 9.8% | $307,067 |
| Business Registration | 30 | 10 | 0.065 | 6.5% | $203,667 |
| Public Safety Network | 50 | 20 | 0.113 | 11.3% | $354,067 |
| Digital Identity | 25 | 10 | 0.057 | 5.7% | $178,613 |
| Shared Platforms | 10 | 5 | 0.024 | 2.4% | $62,533 |
| **TOTAL** | **460** | **150** | **1.000** | **100%** | **$3,133,333** |

*Weighted Score calculation:*
```
Score(i) = 0.60 x (Incidents(i)/460) + 0.40 x (Changes(i)/150)
Example Healthcare: 0.60 x (120/460) + 0.40 x (35/150) = 0.157 + 0.093 = 0.250
(Normalized to sum to 1.000 across all services)
```

### Step C: Tier 2 Shared Costs -- External Labor (Staff Augmentation)

Staff augmentation pool: $1,400,000/month
Allocation driver: Manager-estimated effort split

| Service | Estimated Effort % | Allocated |
|---------|-------------------|-----------|
| Healthcare Insurance | 30% | $420,000 |
| Pension Payments | 20% | $280,000 |
| Tax Filing | 25% | $350,000 |
| Student Enrollment | 10% | $140,000 |
| Business Registration | 5% | $70,000 |
| Public Safety Network | 10% | $140,000 |
| **TOTAL** | **100%** | **$1,400,000** |

### Step D: Tier 2 Shared Costs -- Cloud (Untagged Resources)

Untagged cloud: $780,000/month (shared networking, logging, monitoring)
Allocation driver: Proportional to tagged cloud spend

| Service | Tagged Cloud Cost | % of Tagged | Untagged Allocation |
|---------|-----------------|------------|-------------------|
| Healthcare Insurance | $680,000 | 22.2% | $173,294 |
| Pension Payments | $520,000 | 17.0% | $132,576 |
| Tax Filing | $600,000 | 19.6% | $152,965 |
| Student Enrollment | $280,000 | 9.1% | $71,384 |
| Business Registration | $180,000 | 5.9% | $45,890 |
| Public Safety Network | $350,000 | 11.4% | $89,247 |
| Digital Identity | $110,000 | 3.6% | $28,041 |
| Other Shared | $340,000 | 11.1% | $86,703 |
| **TOTAL** | **$3,060,000** | **100%** | **$780,000** |

*(Note: $3,060,000 tagged + $780,000 untagged does not equal $3,500,000 total cloud because $340,000 is other shared platform cloud tagged costs captured in "Other Shared")*

### Step E: Tier 2 Shared Costs -- Software Licenses (Enterprise)

Enterprise license agreements: $750,000/month (Microsoft EA, Salesforce Gov, monitoring tools)
Allocation driver: Named user count

| Service | Named Users | % of Total | Allocated |
|---------|------------|-----------|-----------|
| Healthcare Insurance | 350 | 23.3% | $175,000 |
| Pension Payments | 250 | 16.7% | $125,000 |
| Tax Filing | 300 | 20.0% | $150,000 |
| Student Enrollment | 200 | 13.3% | $100,000 |
| Business Registration | 100 | 6.7% | $50,000 |
| Public Safety Network | 200 | 13.3% | $100,000 |
| Shared/Admin | 100 | 6.7% | $50,000 |
| **TOTAL** | **1,500** | **100%** | **$750,000** |

### Step F: Tier 2 Shared Costs -- Data Center, Network, Facilities, Training

Combined remaining Tier 2 pools: $3,416,667/month
Allocation driver: Composite (40% server count, 30% bandwidth, 30% FTE count)

| Service | Server Count | Bandwidth (TB) | FTE | Composite Score | % | Allocated |
|---------|-------------|----------------|-----|----------------|---|-----------|
| Healthcare Insurance | 45 | 8.5 | 85 | 0.243 | 24.3% | $830,250 |
| Pension Payments | 30 | 5.2 | 65 | 0.172 | 17.2% | $587,667 |
| Tax Filing | 35 | 6.8 | 70 | 0.193 | 19.3% | $659,417 |
| Student Enrollment | 15 | 3.1 | 40 | 0.098 | 9.8% | $334,833 |
| Business Registration | 10 | 1.5 | 25 | 0.060 | 6.0% | $205,000 |
| Public Safety Network | 20 | 4.0 | 50 | 0.124 | 12.4% | $423,667 |
| Shared Services | 25 | 3.5 | 20 | 0.082 | 8.2% | $280,067 |
| Admin/Other | 5 | 0.8 | 10 | 0.028 | 2.8% | $95,767 |
| **TOTAL** | **185** | **33.4** | **365** | **1.000** | **100%** | **$3,416,667** |

### Step G: Shared Service Re-Allocation

The Digital Identity Platform has accumulated costs (direct + shared allocations). These must be re-allocated to consuming services.

Digital Identity Total Cost (Tier 1 + Tier 2 shares): $210,000 + $178,613 + $28,041 + portion of other allocations = approximately $496,654/month

Allocation driver: Authentication count (logins)

| Consuming Service | Monthly Logins | % of Total | Identity Cost Allocation |
|------------------|---------------|-----------|------------------------|
| Healthcare Insurance | 2,500,000 | 31.3% | $155,282 |
| Pension Payments | 1,800,000 | 22.5% | $111,803 |
| Tax Filing | 1,500,000 | 18.8% | $93,169 |
| Student Enrollment | 800,000 | 10.0% | $49,690 |
| Business Registration | 500,000 | 6.3% | $31,056 |
| Public Safety Network | 900,000 | 11.3% | $55,855 |
| **TOTAL** | **8,000,000** | **100%** | **$496,654** |

*(Similar re-allocation performed for Payment Gateway and other shared services -- omitted for brevity)*

### Step H: Tier 3 Overhead

Monthly overhead (Governance & Compliance): $1,250,000

**Treatment:** Report as "Corporate IT Overhead -- Unallocated" in Year 1.

In the monthly report, this appears as:

```
Total Allocated to Services:    $27,750,000 (95.7%)
Corporate IT Overhead:           $1,250,000 (4.3%)
Total IT Spend:                 $29,000,000 (100.0%)
```

## 4.5 Pass 3: COFOG Attribution

Each IT Service maps to COFOG groups. For most services in this example, the mapping is 1:1. The Healthcare Insurance service maps entirely to COFOG 07.2.

**IT Service-to-COFOG Mapping Table:**

| IT Service | COFOG Group | COFOG % |
|-----------|------------|---------|
| Healthcare Insurance Platform | 07.2 Outpatient Services | 100% |
| Pension Calculation Engine | 10.2 Old Age | 100% |
| Tax Filing Platform | 01.1 Fiscal Affairs | 100% |
| Student Enrollment System | 09.1 Primary Education | 100% |
| Business Registration Portal | 04.1 Commerce | 100% |
| Public Safety Communications | 03.1 Police Services | 100% |

*For shared services that have been re-allocated, the COFOG attribution follows the consuming service.*

## 4.6 Final Monthly Cost Report (March 2026)

| Service | COFOG | Tier 1 (Direct) | Tier 2 (Shared) | Shared Svc Realloc | Total | % of Budget | Annual Projection |
|---------|-------|-----------------|-----------------|-------------------|-------|------------|------------------|
| Healthcare Insurance | 07.2 | $4,780,000 | $2,406,964 | $155,282 | $7,342,246 | 25.3% | $88,106,952 |
| Pension Payments | 10.2 | $3,770,000 | $1,698,243 | $111,803 | $5,580,046 | 19.2% | $66,960,552 |
| Tax Filing | 01.1 | $3,700,000 | $1,957,849 | $93,169 | $5,751,018 | 19.8% | $69,012,216 |
| Student Enrollment | 09.1 | $2,080,000 | $953,284 | $49,690 | $3,082,974 | 10.6% | $36,995,688 |
| Business Registration | 04.1 | $1,430,000 | $574,557 | $31,056 | $2,035,613 | 7.0% | $24,427,356 |
| Public Safety Network | 03.1 | $2,300,000 | $1,106,981 | $55,855 | $3,462,836 | 11.9% | $41,554,032 |
| Other/Admin | -- | $210,000 | $285,189 | -- | $495,267 | 1.7% | $5,943,204 |
| **Total Allocated** | | **$18,270,000** | **$8,983,067** | **$496,855** | **$27,750,000** | **95.7%** | **$333,000,000** |
| Corporate IT Overhead | -- | -- | -- | -- | **$1,250,000** | **4.3%** | **$15,000,000** |
| **GRAND TOTAL** | | | | | **$29,000,000** | **100.0%** | **$348,000,000** |

### PPT Breakdown by Service

| Service | People Cost | % | Process Cost | % | Technology Cost | % | Total |
|---------|-----------|---|-------------|---|---------------|---|-------|
| Healthcare Insurance | $3,575,000 | 48.7% | $2,320,000 | 31.6% | $1,447,246 | 19.7% | $7,342,246 |
| Pension Payments | $2,660,000 | 47.7% | $1,750,000 | 31.4% | $1,170,046 | 21.0% | $5,580,046 |
| Tax Filing | $2,850,000 | 49.6% | $1,800,000 | 31.3% | $1,101,018 | 19.1% | $5,751,018 |
| Student Enrollment | $1,450,000 | 47.0% | $1,000,000 | 32.4% | $632,974 | 20.5% | $3,082,974 |
| Business Registration | $980,000 | 48.1% | $650,000 | 31.9% | $405,613 | 19.9% | $2,035,613 |
| Public Safety Network | $1,600,000 | 46.2% | $1,100,000 | 31.8% | $762,836 | 22.0% | $3,462,836 |

**Observation:** All services show a roughly 48% People / 32% Process / 20% Technology split. This is close to the GaaS 40-40-20 target, with People running high and Process running low -- a common pattern in governments that have invested in technology modernization but not yet matured their process automation and service management practices.

### Cost per Transaction

| Service | Monthly Transactions | Cost per Transaction | Annual Projection |
|---------|---------------------|---------------------|------------------|
| Healthcare Insurance | 450,000 appointments | $16.32 / appointment | $16.32 |
| Pension Payments | 1,200,000 payments | $4.65 / payment | $4.65 |
| Tax Filing | 800,000 filings | $7.19 / filing | $7.19 |
| Student Enrollment | 250,000 enrollments | $12.33 / enrollment | $12.33 |
| Business Registration | 30,000 registrations | $67.85 / registration | $67.85 |
| Public Safety Network | 500,000 incidents logged | $6.93 / incident | $6.93 |

These unit costs become the benchmarkable metrics for international comparison.

## 4.7 Sensitivity Analysis

### What If Allocation Drivers Change?

To understand sensitivity, recalculate Healthcare Insurance using different allocation methods for the shared operations team:

| Allocation Method | Healthcare Share | Monthly Cost Impact | vs. Base |
|------------------|-----------------|-------------------|----------|
| **Base (Incidents 60% + Changes 40%)** | 25.8% | $808,520 | -- |
| **Incidents only (100%)** | 26.1% | $817,913 | +$9,393 (+1.2%) |
| **Changes only (100%)** | 23.3% | $730,667 | -$77,853 (-9.6%) |
| **FTE-proportional** | 23.3% | $729,867 | -$78,653 (-9.7%) |
| **Budget-proportional** | 25.3% | $792,733 | -$15,787 (-2.0%) |
| **Equal split (1/8)** | 12.5% | $391,667 | -$416,853 (-51.6%) |

**Interpretation:** The allocation method for shared operations introduces a variance of up to $416K/month ($5M/year) for Healthcare. This is material. The equal-split method dramatically under-allocates to Healthcare because Healthcare genuinely generates more operations work than other services. The incident-weighted and change-weighted methods produce similar results (within 10%), validating the base methodology.

**Recommendation:** Conduct this sensitivity analysis for any shared cost pool representing >5% of a service's total cost. If the method variance exceeds 15%, invest in better metering rather than accepting imprecise allocation.

### What If Cloud Tagging Compliance Drops?

| Tagging Compliance | Untagged Cloud Cost | Allocation Accuracy Impact |
|-------------------|--------------------|-----------------------------|
| **95%+ (target)** | $175,000/month | Minimal -- proportional spread works well |
| **80-95%** | $700,000/month | Moderate -- some cost misattribution likely |
| **60-80%** | $1,400,000/month | Significant -- proportional spread increasingly inaccurate |
| **<60%** | $2,100,000+/month | Critical -- cloud allocation unreliable, revert to FTE proxy |

**Recommendation:** Enforce minimum 85% tagging compliance via automated tag policy enforcement (AWS Organizations SCPs, Azure Policy). Block resource creation without mandatory tags in production accounts.

---

# Section 5: Implementation Guidance

## 5.1 Maturity Model

### Level 1: Foundational (Months 0-6)

**What you achieve:**
- GL line items classified to TBM cost pools
- Major direct costs attributed to services (60-70% of spend)
- Rough estimates for shared costs (+/- 30% accuracy)
- Monthly cost report by service domain

**What you need:**
- Finance cooperation to map GL accounts
- HR data for FTE assignments
- Cloud billing data access (AWS CUR or equivalent)
- A spreadsheet (seriously -- do not buy tooling yet)

**Accuracy target:** 60-70% of costs allocated, +/- 25-30% accuracy

### Level 2: Structured (Months 6-12)

**What you achieve:**
- All Tier 1 and Tier 2 costs allocated
- Metered allocation for cloud and infrastructure
- Activity-based allocation for shared labor
- Shared service cost re-allocation
- PPT breakdown per service
- Cost per transaction for top 10 services

**What you need:**
- Cloud tagging enforcement (mandatory tags in production)
- CMDB with service-to-infrastructure mapping
- ITSM data (incident and change counts per service)
- Structured FTE assignment data from HR
- Dedicated TBM analyst (1-2 FTE)

**Accuracy target:** 85-90% of costs allocated, +/- 10-15% accuracy

### Level 3: Optimized (Months 12-24)

**What you achieve:**
- Full COFOG-attributed cost transparency
- Automated monthly allocation pipeline
- International benchmarking (cost per transaction vs. peer countries)
- Quarterly optimization recommendations
- Public transparency dashboard
- Governance embedded in budget cycle

**What you need:**
- TBM platform (Apptio, ServiceNow ITFM, CloudHealth, or open-source alternative)
- Automated data pipelines from all source systems
- FinOps practice for cloud cost optimization
- Quarterly TBM steering committee reviews
- Published methodology document (this document)

**Accuracy target:** 90-95% of costs allocated, +/- 5-10% accuracy

### Level 4: Strategic (Months 24+)

**What you achieve:**
- TBM drives budget formulation (not just reporting)
- Service investment decisions based on ROI/benchmark data
- Predictive cost modeling for new services
- Cross-government shared service economics optimized
- International leadership in government transparency

**What you need:**
- Multi-year TBM data (trends, forecasts)
- Integration with planning and budgeting systems
- Executive commitment to evidence-based budgeting
- Publication of methodology for peer government adoption

**Accuracy target:** 95%+ of costs allocated, +/- 3-5% accuracy

## 5.2 Tooling Recommendations

### Tier 1: Spreadsheet-Based (Months 0-6, <$10K)

**Tool:** Microsoft Excel or Google Sheets

**Structure:**
```
Workbook 1: GL-to-Cost-Pool Mapping (maintained by Finance)
Workbook 2: Allocation Driver Data (monthly input)
Workbook 3: Allocation Engine (formulas from Section 3)
Workbook 4: Service Cost Reports (output)
Workbook 5: COFOG Attribution (final view)
```

**Pros:** Zero procurement, immediate start, full control
**Cons:** Manual data entry, error-prone, does not scale past 50 services

### Tier 2: Database + BI Tool (Months 6-12, $50K-$200K)

**Tools:** PostgreSQL + Apache Superset (open source) or SQL Server + Power BI

**Architecture:**
```
Source Systems ──> ETL Pipeline ──> Cost Allocation Database ──> BI Dashboard
(GL, Cloud,       (Python/dbt)     (PostgreSQL with           (Superset or
 HR, ITSM)                          allocation tables)          Power BI)
```

**Data Model:**

```sql
-- Core allocation tables
CREATE TABLE cost_pools (
    id UUID PRIMARY KEY,
    period DATE NOT NULL,
    cost_pool_category VARCHAR(50),  -- 'internal_labor', 'cloud', etc.
    cost_pool_subcategory VARCHAR(100),
    amount DECIMAL(15,2),
    tier INTEGER,  -- 1=Direct, 2=Shared, 3=Overhead
    gl_account VARCHAR(20),
    source_system VARCHAR(50)
);

CREATE TABLE allocation_drivers (
    id UUID PRIMARY KEY,
    period DATE NOT NULL,
    service_id UUID REFERENCES services(id),
    driver_type VARCHAR(50),  -- 'vcpu_hours', 'fte_count', 'incidents', etc.
    driver_value DECIMAL(15,4),
    source_system VARCHAR(50)
);

CREATE TABLE service_costs (
    id UUID PRIMARY KEY,
    period DATE NOT NULL,
    service_id UUID REFERENCES services(id),
    cost_pool_id UUID REFERENCES cost_pools(id),
    allocation_method VARCHAR(30),  -- 'direct', 'metered', 'activity', 'proxy'
    allocated_amount DECIMAL(15,2),
    cofog_division VARCHAR(5),
    cofog_group VARCHAR(10),
    ppt_category VARCHAR(20)  -- 'people', 'process', 'technology'
);

CREATE TABLE cofog_service_mapping (
    service_id UUID REFERENCES services(id),
    cofog_group VARCHAR(10),
    allocation_percentage DECIMAL(5,2),
    effective_from DATE,
    effective_to DATE
);
```

**Pros:** Scalable, auditable, automated pipelines
**Cons:** Requires engineering effort to build and maintain

### Tier 3: Commercial TBM Platform (Months 12+, $200K-$2M+/year)

**Options:**
- **Apptio (IBM):** The TBM Council's reference implementation. Gold standard for TBM taxonomy compliance. Expensive ($500K-$2M+/year for government).
- **ServiceNow ITFM:** Integrates with existing ServiceNow ITSM/CMDB. Good for organizations already on ServiceNow.
- **CloudHealth (VMware):** Strong cloud cost management. Good for cloud-first governments.
- **Flexera One:** IT asset management + cost allocation. Good for license optimization.
- **Nicus (now Apptio):** Purpose-built for TBM with government templates.

**Evaluation Criteria for Government:**
1. TBM taxonomy compliance (must support standard cost pools and towers)
2. Government cloud support (FedRAMP, data sovereignty)
3. COFOG mapping capability (custom taxonomy support)
4. Integration with government financial systems (SAP, Oracle Financials)
5. Multi-agency/multi-department support
6. Public dashboard capability (citizen-facing transparency)
7. Total cost of ownership (license + implementation + annual maintenance)

## 5.3 Automation Priorities

Automate in this order for maximum ROI:

| Priority | Automation Target | Data Source | Method | Impact |
|----------|------------------|------------|--------|--------|
| 1 | Cloud cost ingestion | Cloud billing API | Scheduled ETL | Eliminates 40% of manual data entry |
| 2 | Cloud tag enforcement | Cloud provider policy engine | Preventive control | Ensures tagging compliance |
| 3 | FTE-to-service mapping | HR system API | Monthly sync | Automates largest cost pool allocation |
| 4 | ITSM metrics (incidents/changes) | ITSM API | Monthly sync | Automates service management allocation |
| 5 | Software license metering | License management tool | Monthly sync | Automates software cost allocation |
| 6 | Allocation calculation | SQL/Python pipeline | Monthly scheduled job | Eliminates spreadsheet errors |
| 7 | Report generation | BI tool scheduled reports | Monthly auto-publish | Reduces analyst time by 80% |

## 5.4 Data Quality Requirements

| Data Source | Minimum Quality for TBM | Validation Method |
|------------|------------------------|-------------------|
| General Ledger | 100% of IT accounts mapped to cost pools | Reconciliation: GL total = Cost Pool total |
| Cloud Billing | 85%+ resources tagged with service ID | Tag compliance report (monthly) |
| HR/FTE Data | 90%+ of IT staff assigned to a service | Unassigned FTE report (monthly) |
| CMDB | 80%+ of production CIs mapped to a service | Orphan CI report (monthly) |
| ITSM | 90%+ of tickets assigned to a service | Unassigned ticket report (monthly) |
| Procurement | 85%+ of IT contracts linked to a service | Unlinked contract report (quarterly) |

**Data Quality Rule:** If a data source falls below minimum quality threshold, fall back to the next-lower allocation method (e.g., from metered to FTE-proportional) and flag the degradation in the monthly report.

## 5.5 Governance and Change Control

### Allocation Methodology Changes

Any change to allocation methodology (changing a driver, adjusting weights, reclassifying a cost pool) must be:

1. **Proposed** by the TBM analyst with impact analysis
2. **Reviewed** by affected service owners (who will see cost increases/decreases)
3. **Approved** by the TBM Steering Committee (CFO, CDO, CIO representatives)
4. **Documented** with effective date, rationale, and before/after impact
5. **Communicated** to all service owners at least one period before implementation

**No retroactive methodology changes.** If a methodology change is approved in March, it takes effect in April reporting. March data is reported using the old methodology.

### Dispute Resolution

When a service owner disputes their allocated cost:

1. **Level 1:** TBM analyst reviews allocation data and methodology. If data error, correct and re-allocate.
2. **Level 2:** TBM analyst and service owner agree on improved allocation driver (e.g., better metering). Implement for next period.
3. **Level 3:** TBM Steering Committee reviews and decides. Decision is final for the current fiscal year.

---

# Section 6: Sources and Citations

## Standards and Frameworks

1. **TBM Council.** *Technology Business Management Framework.* TBM Council, 2012-present. The TBM taxonomy (cost pools, IT towers, services, business capabilities) and allocation methodology. https://www.tbmcouncil.org

2. **TBM Council.** *TBM Taxonomy v4.0.* Defines the standard cost pool categories, IT tower categories, and mapping methodology. Published as an open standard by the TBM Council.

3. **ITIL v4 Foundation.** *ITIL 4: Digital and IT Strategy.* AXELOS/PeopleCert, 2019. Service Financial Management practice, Service Portfolio Management practice.

4. **FinOps Foundation.** *FinOps Framework.* Cloud cost management framework including allocation, showback/chargeback, and optimization practices. https://www.finops.org/framework/

5. **ISO/IEC 20000-1:2018.** *Information technology -- Service management.* International standard for IT service management systems.

## US Federal Government

6. **Office of Management and Budget (OMB).** *Circular A-130: Managing Information as a Strategic Resource.* July 2016. Establishes policy for IT capital planning and investment control.

7. **Federal IT Acquisition Reform Act (FITARA).** Public Law 113-291, Title VIII, Subtitle D, 2014. Mandates CIO authority over IT spending and cost transparency.

8. **OMB M-17-22.** *Comprehensive Plan for Reforming the Federal Government and Reducing the Federal Civilian Workforce.* 2017. Mandated TBM framework adoption.

9. **US Government Accountability Office (GAO).** *GAO-25-107309: Information Technology -- OMB Should Address the Stalled Technology Business Management Initiative.* July 2025. Assessment of the federal TBM mandate after 8 years.

10. **US Secret Service.** *TBM Excellence Award Case Study.* TBM Council, 2022. Agency-led TBM implementation for budget justification.

11. **US Office of Personnel Management (OPM).** *IT Strategic Plan FY2023-2026.* Structured on the TBM framework for investment decision-making.

12. **Federal Accounting Standards Advisory Board (FASAB).** *SFFAS 4: Managerial Cost Accounting Concepts and Standards for the Federal Government.* Requirements for full cost accounting.

13. **OMB Circular A-87 / 2 CFR Part 200.** *Cost Principles for State, Local, and Indian Tribal Governments.* Defines allowable cost allocation methods.

14. **Federal Acquisition Regulation (FAR) Part 31.** *Contract Cost Principles and Procedures.* Defines allocable, allowable, and reasonable cost standards.

## United Kingdom

15. **UK Government Digital Service (GDS).** *Technology Code of Practice.* Standards for government technology including spend controls. https://www.gov.uk/guidance/the-technology-code-of-practice

16. **UK Cabinet Office.** *Digital, Data and Technology Spend Controls.* Central approval process for IT spending. https://www.gov.uk/guidance/digital-and-technology-spend-controls

17. **UK Government.** *Transactions Dashboard.* Published cost-per-transaction data for government services. Historical data from 2012-2018.

## Australia

18. **Australian Digital Transformation Agency (DTA).** *Whole-of-Government ICT Benchmarking.* Annual benchmarking reports on government IT spending.

19. **Queensland Government.** TBM implementation case study: 600+ services catalogued, $920M savings identified. Referenced in TBM Council government practice group materials.

20. **Services Australia.** Shared services cost recovery model with published unit rates for government agencies.

## International Standards

21. **United Nations Statistical Division.** *Classification of the Functions of Government (COFOG).* International standard for classifying government expenditure. https://unstats.un.org/unsd/classifications/

22. **OECD.** *Government at a Glance.* Annual publication with COFOG expenditure data for 38+ countries. https://www.oecd.org/gov/government-at-a-glance.htm

23. **Eurostat.** *Government Finance Statistics.* COFOG-aligned fiscal data for EU member states. https://ec.europa.eu/eurostat

24. **IMF.** *Government Finance Statistics Manual.* COFOG classification used in government finance reporting. https://data.imf.org/

## Cloud and FinOps

25. **AWS.** *AWS Cost and Usage Report (CUR).* Detailed billing data for cost allocation. https://docs.aws.amazon.com/cur/

26. **AWS.** *AWS Organizations -- Service Control Policies.* Tag enforcement for cost allocation. https://docs.aws.amazon.com/organizations/

27. **Microsoft Azure.** *Cost Management and Billing.* Azure cost allocation and tagging. https://learn.microsoft.com/azure/cost-management-billing/

28. **FinOps Foundation.** *FinOps for Government.* Guidance on applying FinOps practices in public sector contexts. https://www.finops.org/

## Academic and Industry Research

29. **Kaplan, Robert S. and Anderson, Steven R.** *Time-Driven Activity-Based Costing.* Harvard Business Review, 2004. Foundation for ABC methodology applied in TBM.

30. **Apptio (IBM).** *The TBM Playbook.* Implementation guidance for TBM including government sector adaptations. https://www.apptio.com/

31. **Japan Digital Agency.** Structural TBM through centralized budget control model. Established 2021 with IT budget authority over all ministries. https://www.digital.go.jp/en/

32. **Germany Federal IT Council (IT-Rat).** *IT-Konsolidierung Bund (Federal IT Consolidation).* 2016-2024. Case study in federal TBM governance challenges.

---

## Appendix A: GL-to-Cost-Pool Mapping Template

| GL Account Range | GL Description | TBM Cost Pool | TBM Sub-Pool | Tier |
|-----------------|---------------|---------------|-------------|------|
| 5100-5199 | Salaries - IT Staff | Internal Labor | Salaries & Benefits | 1 or 2 |
| 5200-5249 | Benefits - IT Staff | Internal Labor | Salaries & Benefits | 1 or 2 |
| 5250-5299 | Training - IT Staff | Internal Labor | Training | 2 |
| 5300-5399 | IT Contractors | External Labor | Contractors | 1 or 2 |
| 5400-5449 | IT Consulting Services | External Labor | Consulting | 1 or 2 |
| 6100-6199 | Server Hardware | Hardware | Compute Hardware | 1 or 2 |
| 6200-6299 | Network Equipment | Hardware | Network Hardware | 2 |
| 6300-6399 | Storage Hardware | Hardware | Storage Hardware | 1 or 2 |
| 6400-6499 | End User Devices | Hardware | End User | 2 |
| 7100-7199 | Software Licenses - Named | Software | Named Licenses | 1 |
| 7200-7299 | Software Licenses - Enterprise | Software | Enterprise Licenses | 2 |
| 7300-7399 | SaaS Subscriptions | Software | SaaS | 1 or 2 |
| 7400-7499 | Software Maintenance | Software | Maintenance | 1 or 2 |
| 8100-8199 | Cloud IaaS (Compute) | Outside Services | Cloud Compute | 1 |
| 8200-8299 | Cloud IaaS (Storage) | Outside Services | Cloud Storage | 1 |
| 8300-8399 | Cloud PaaS/SaaS | Outside Services | Cloud PaaS | 1 or 2 |
| 8400-8499 | Managed Services | Outside Services | Managed Services | 2 |
| 8500-8599 | Telecom / ISP | Outside Services | Telecom | 2 |
| 9100-9199 | Data Center Lease | Facilities | Data Center | 2 |
| 9200-9299 | Power & Cooling | Facilities | Power | 2 |
| 9300-9399 | Physical Security (DC) | Facilities | Facility Security | 2 |

## Appendix B: Allocation Driver Reference Card

Quick reference for allocation driver selection:

```
PEOPLE COSTS
  Dedicated staff      -> Direct (Tier 1): Salary to assigned service
  Shared ops team      -> Activity-Based (Tier 2): Weighted by incidents + changes
  Management/leadership-> Proxy (Tier 3): FTE-proportional or unallocated

CLOUD COSTS
  Tagged resources     -> Direct (Tier 1): Cloud bill line item
  Untagged resources   -> Metered (Tier 2): Proportional to tagged spend
  Reserved instances   -> Metered (Tier 2): Allocated to service consuming the RI

SOFTWARE LICENSES
  Named user licenses  -> Direct (Tier 1): Assigned to service users
  Enterprise licenses  -> Metered (Tier 2): Named user count per service
  Concurrent licenses  -> Metered (Tier 2): Peak usage per service

INFRASTRUCTURE
  Dedicated servers    -> Direct (Tier 1): CMDB service mapping
  Shared servers       -> Metered (Tier 2): CPU% or VM count per service
  Network              -> Metered (Tier 2): Bandwidth per service
  Data center facility -> Metered (Tier 2): Rack units per service

PROCESS / SERVICE MGMT
  Service desk         -> Activity-Based (Tier 2): Ticket count per service
  Change management    -> Activity-Based (Tier 2): Change count per service
  Compliance/audit     -> Activity-Based (Tier 2): Audit hours per regulatory domain
  General governance   -> Proxy (Tier 3): Budget-proportional or unallocated
```

## Appendix C: Monthly Reconciliation Checklist

```
[ ] GL total for period extracted and validated
[ ] GL total = Sum of all cost pools (variance < $1,000)
[ ] All cost pool items classified to Tier 1/2/3
[ ] Tier 1 costs directly attributed to services
[ ] All Tier 2 allocation drivers collected for the period
[ ] Tier 2 allocations calculated and documented
[ ] Shared service re-allocation completed
[ ] Tier 3 overhead reported (allocated or unallocated)
[ ] Total allocated = GL total (reconciliation balance)
[ ] No service has negative allocated cost
[ ] All allocation percentages sum to 100% per pool
[ ] COFOG attribution completed for all IT services
[ ] Top 10 costliest services reviewed for reasonableness
[ ] Year-over-year variance >25% flagged and explained
[ ] Report generated and distributed to service owners
[ ] Report published to TBM dashboard
```

---

*This document provides the definitive cost allocation methodology for the GaaS framework. It transforms the framework's "radical transparency" principle from aspiration to specification. For questions or contributions, contact the GaaS Layer 3 working group at service-portfolio@gaas.global.*

**Document Version:** 1.0
**Last Updated:** March 2026
**License:** Creative Commons BY-SA 4.0

---

**END OF DOCUMENT: TBM COST ALLOCATION METHODOLOGY FOR GOVERNMENT**

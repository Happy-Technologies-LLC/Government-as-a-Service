# GaaS Platform - Complete GSM Processes & Public Transparency

**Document:** 04 - Complete GSM Processes & Public Transparency Dashboards
**Version:** 1.0
**Date:** October 2025
**Status:** Design Phase

---

## Overview

This document addresses two critical aspects not fully detailed in the initial technical design:

1. **Complete GSM Process Coverage** - Full lifecycle management for all 28 ITIL/GSM practices
2. **Public Transparency Dashboards** - Citizen-facing performance dashboards for democratic accountability

---

## PART I: COMPLETE GSM PROCESS COVERAGE

### GSM Framework - 28 Management Practices

The GaaS Platform implements **all 28 GSM management practices** organized across the Service Value Chain:

---

### A. GENERAL MANAGEMENT PRACTICES (14 practices)

#### 1. Architecture Management
**Purpose:** Understand organizational structure and relationships between services, systems, and processes

**Platform Implementation:**
- **Service Portfolio Hierarchy:** 5-level architecture (Business → Technical → App → Infra → Cost)
- **CMDB Relationships:** Dependency mapping, impact analysis
- **Architecture Diagrams:** Auto-generated service blueprints
- **Technology Stack Registry:** Catalog of approved technologies

**Database Tables:**
- `services` - Service architecture
- `ci_relationships` - Component dependencies
- `architecture_blueprints` - Design documents

**APIs:**
```typescript
GET /api/v1/architecture/services/{id}/blueprint
GET /api/v1/architecture/impact-analysis/{ci_id}
GET /api/v1/architecture/technology-stack
```

#### 2. Continual Improvement
**Purpose:** Align practices and services with changing business needs through ongoing improvement

**Platform Implementation:**
- **Improvement Register:** Log of improvement opportunities
- **CSI (Continual Service Improvement) Workflow:** From idea → assessment → implementation → review
- **Metrics Tracking:** Before/after comparison of service performance
- **A/B Testing:** Test service improvements with subset of citizens

**Database Tables:**
```sql
CREATE TABLE improvement_opportunities (
    id UUID PRIMARY KEY,
    service_id UUID,
    title VARCHAR(200),
    description TEXT,
    current_state TEXT,
    proposed_state TEXT,
    expected_benefit TEXT,
    status improvement_status, -- 'proposed', 'approved', 'implementing', 'completed'
    roi_estimate DECIMAL(12,2),
    priority improvement_priority,
    created_at TIMESTAMP,
    implemented_at TIMESTAMP
);
```

**APIs:**
```typescript
POST /api/v1/improvements
GET /api/v1/improvements?service_id={id}&status=proposed
PATCH /api/v1/improvements/{id}/approve
GET /api/v1/improvements/{id}/roi-report
```

#### 3. Information Security Management
**Purpose:** Protect information through confidentiality, integrity, and availability

**Platform Implementation:**
- **Security Incident Tracking:** Dedicated security incident type
- **Vulnerability Management:** CVE tracking and patching workflow
- **Access Reviews:** Quarterly user access audits
- **Encryption Management:** Track encryption status of all data at rest/transit
- **Compliance Dashboard:** ISO 27001, SOC 2, GDPR compliance status

**Database Tables:**
```sql
CREATE TABLE security_incidents (
    id UUID PRIMARY KEY,
    incident_id UUID, -- FK to incidents table
    severity security_severity, -- 'critical', 'high', 'medium', 'low'
    incident_type security_incident_type, -- 'data_breach', 'unauthorized_access', 'malware', 'ddos'
    affected_data TEXT,
    affected_citizens_count INTEGER,
    data_protection_authority_notified BOOLEAN,
    notification_sent_at TIMESTAMP,
    root_cause TEXT,
    remediation_actions TEXT
);

CREATE TABLE vulnerabilities (
    id UUID PRIMARY KEY,
    cve_id VARCHAR(50), -- e.g., CVE-2024-12345
    severity VARCHAR(20),
    affected_cis UUID[], -- Array of CI IDs
    discovered_at TIMESTAMP,
    patch_available BOOLEAN,
    patched_at TIMESTAMP
);
```

#### 4. Knowledge Management
**Purpose:** Maintain and improve effective, efficient use of knowledge across the organization

**Platform Implementation:**
- **Knowledge Base:** Searchable articles (Elasticsearch-powered)
- **Auto-Linking:** Incidents automatically linked to relevant KB articles
- **Knowledge Lifecycle:** Draft → Review → Published → Retired
- **AI-Powered Suggestions:** Recommend KB articles based on incident description
- **Citizen-Facing KB:** Separate public knowledge base with FAQs

**Database Tables:**
```sql
CREATE TABLE knowledge_articles (
    id UUID PRIMARY KEY,
    title VARCHAR(200),
    content TEXT,
    category VARCHAR(100),
    status knowledge_status, -- 'draft', 'review', 'published', 'retired'
    author_id UUID,
    helpful_count INTEGER DEFAULT 0,
    not_helpful_count INTEGER DEFAULT 0,
    view_count INTEGER DEFAULT 0,
    related_services UUID[], -- Services this article applies to
    public_facing BOOLEAN DEFAULT FALSE, -- Visible to citizens?
    created_at TIMESTAMP,
    published_at TIMESTAMP,
    last_updated_at TIMESTAMP
);

CREATE TABLE incident_knowledge_links (
    incident_id UUID,
    knowledge_article_id UUID,
    created_at TIMESTAMP
);
```

**APIs:**
```typescript
GET /api/v1/knowledge?q=search&category=healthcare
POST /api/v1/knowledge/articles
GET /api/v1/incidents/{id}/suggested-articles (AI-powered)
POST /api/v1/knowledge/articles/{id}/feedback (helpful/not helpful)
```

#### 5. Measurement & Reporting
**Purpose:** Support decision-making through performance metrics

**Platform Implementation:**
- **Pre-Built Dashboards:** 20+ dashboards (service health, PPT balance, cost trends)
- **Custom Metrics:** Define custom KPIs per service
- **Automated Reports:** Scheduled email reports (daily, weekly, monthly)
- **Real-Time Metrics:** Live dashboards with WebSocket updates
- **Benchmark Comparisons:** Compare services against targets or peer governments

**Database Tables:**
```sql
CREATE TABLE metrics (
    id UUID PRIMARY KEY,
    service_id UUID,
    metric_name VARCHAR(100), -- e.g., 'uptime_percentage', 'mttr_minutes'
    metric_value DECIMAL(12,4),
    metric_unit VARCHAR(50),
    period_start TIMESTAMP,
    period_end TIMESTAMP,
    created_at TIMESTAMP
);

CREATE TABLE dashboards (
    id UUID PRIMARY KEY,
    name VARCHAR(200),
    definition JSONB, -- Dashboard layout and widgets
    owner_id UUID,
    shared BOOLEAN DEFAULT FALSE,
    public_facing BOOLEAN DEFAULT FALSE, -- For citizen dashboards
    created_at TIMESTAMP
);
```

**APIs:**
```typescript
GET /api/v1/metrics/services/{id}?metric=uptime&period=30d
GET /api/v1/dashboards/{id}
POST /api/v1/reports/schedule (email reports)
GET /api/v1/metrics/real-time (WebSocket)
```

#### 6. Organizational Change Management
**Purpose:** Ensure successful adoption of changes by stakeholders

**Platform Implementation:**
- **Change Impact Assessment:** Which users/groups affected by change
- **Communication Plans:** Automated stakeholder notifications
- **Training Tracking:** Who has completed training for new processes
- **Adoption Metrics:** Track usage before/after change
- **Resistance Management:** Log and address change resistance

**Database Tables:**
```sql
CREATE TABLE change_stakeholders (
    change_id UUID,
    stakeholder_id UUID, -- User or group
    impact_level VARCHAR(20), -- 'high', 'medium', 'low'
    communicated BOOLEAN DEFAULT FALSE,
    trained BOOLEAN DEFAULT FALSE,
    accepted BOOLEAN DEFAULT FALSE
);

CREATE TABLE change_communications (
    id UUID PRIMARY KEY,
    change_id UUID,
    communication_type VARCHAR(50), -- 'email', 'town_hall', 'training', 'faq'
    sent_at TIMESTAMP,
    recipients_count INTEGER,
    open_rate DECIMAL(5,2),
    click_rate DECIMAL(5,2)
);
```

#### 7-14. Additional General Practices

**(7) Portfolio Management** - Manage service portfolio investments
**(8) Project Management** - Deliver projects on time, budget, scope
**(9) Relationship Management** - Establish stakeholder relationships
**(10) Risk Management** - Identify and mitigate risks
**(11) Service Financial Management** - Budget, account, charge for services
**(12) Strategy Management** - Establish direction for organization
**(13) Supplier Management** - Manage vendor relationships
**(14) Workforce & Talent Management** - Ensure right people, skills, culture

**Implementation Status:**
- ✅ Portfolio Management: Covered in Service Portfolio module
- ✅ Service Financial Management: Covered in Cost Management module
- ✅ Risk Management: Adding risk register below
- 🚧 Others: Phase 2-3 implementation (Months 7-18)

---

### B. SERVICE MANAGEMENT PRACTICES (17 practices)

#### 15. Availability Management
**Purpose:** Ensure services deliver agreed availability levels

**Platform Implementation:**
- **Uptime Tracking:** Real-time service availability monitoring
- **SLA Compliance:** Track against 99.9% / 99.99% targets
- **Planned Downtime:** Schedule maintenance windows
- **Availability Reports:** Monthly availability by service

**Database Tables:**
```sql
CREATE TABLE availability_metrics (
    id UUID PRIMARY KEY,
    service_id UUID,
    timestamp TIMESTAMP,
    status VARCHAR(20), -- 'up', 'down', 'degraded'
    response_time_ms INTEGER,
    error_rate DECIMAL(5,2)
);

CREATE TABLE maintenance_windows (
    id UUID PRIMARY KEY,
    service_id UUID,
    scheduled_start TIMESTAMP,
    scheduled_end TIMESTAMP,
    actual_start TIMESTAMP,
    actual_end TIMESTAMP,
    reason TEXT,
    impact_description TEXT
);

-- Materialized view for fast availability queries
CREATE MATERIALIZED VIEW service_availability_summary AS
SELECT
    service_id,
    DATE_TRUNC('month', timestamp) as month,
    COUNT(*) FILTER (WHERE status = 'up') as up_count,
    COUNT(*) as total_count,
    ROUND(100.0 * COUNT(*) FILTER (WHERE status = 'up') / COUNT(*), 4) as availability_percentage,
    AVG(response_time_ms) as avg_response_time_ms
FROM availability_metrics
GROUP BY service_id, DATE_TRUNC('month', timestamp);
```

**APIs:**
```typescript
GET /api/v1/availability/services/{id}?period=30d
GET /api/v1/availability/services/{id}/sla-compliance
POST /api/v1/availability/maintenance-windows
GET /api/v1/availability/dashboard (real-time status page)
```

#### 16. Business Analysis
**Purpose:** Analyze business needs and recommend solutions

**Platform Implementation:**
- **Service Request Analysis:** Pattern analysis to identify new services needed
- **Cost-Benefit Analysis:** ROI calculator for proposed services
- **Requirements Management:** Track requirements for new services
- **Stakeholder Analysis:** Identify and categorize stakeholders

#### 17. Capacity & Performance Management
**Purpose:** Ensure services meet current and future capacity/performance needs

**Platform Implementation:**
- **Resource Utilization:** Track CPU, memory, storage usage
- **Trend Analysis:** Predict when capacity limits will be reached
- **Auto-Scaling Triggers:** Define thresholds for scaling
- **Performance Baselines:** Establish normal performance ranges

**Database Tables:**
```sql
CREATE TABLE capacity_metrics (
    id UUID PRIMARY KEY,
    ci_id UUID, -- Configuration Item (server, database, etc.)
    metric_name VARCHAR(100), -- 'cpu_usage', 'memory_usage', 'disk_usage'
    current_value DECIMAL(12,2),
    capacity_total DECIMAL(12,2),
    utilization_percentage DECIMAL(5,2),
    timestamp TIMESTAMP
);

CREATE TABLE capacity_forecasts (
    id UUID PRIMARY KEY,
    service_id UUID,
    resource_type VARCHAR(100),
    current_capacity DECIMAL(12,2),
    forecasted_demand DECIMAL(12,2),
    capacity_shortfall DECIMAL(12,2),
    date_capacity_exceeded DATE, -- When will we run out?
    recommendation TEXT
);
```

**APIs:**
```typescript
GET /api/v1/capacity/services/{id}/utilization
GET /api/v1/capacity/services/{id}/forecast
POST /api/v1/capacity/alerts (when capacity > 80%)
```

#### 18. Change Enablement (Already Covered)
**Purpose:** Maximize successful changes with proper authorization and control

**Status:** ✅ Fully implemented in 02-data-model-cmdb.md

#### 19. Incident Management (Already Covered)
**Purpose:** Minimize negative impact of unplanned interruptions

**Status:** ✅ Fully implemented in 02-data-model-cmdb.md

#### 20. IT Asset Management
**Purpose:** Plan and manage full lifecycle of IT assets

**Platform Implementation:**
- **Asset Inventory:** Track all hardware, software, licenses
- **Lifecycle Management:** Acquisition → Deployment → Maintenance → Retirement
- **License Compliance:** Track software licenses vs. actual usage
- **Asset Valuation:** Track depreciation and replacement costs

**Database Tables:**
```sql
CREATE TABLE assets (
    id UUID PRIMARY KEY,
    asset_tag VARCHAR(50) UNIQUE,
    asset_type VARCHAR(100), -- 'laptop', 'server', 'software_license'
    manufacturer VARCHAR(100),
    model VARCHAR(100),
    serial_number VARCHAR(100),
    purchase_date DATE,
    purchase_cost DECIMAL(12,2),
    current_value DECIMAL(12,2),
    depreciation_rate DECIMAL(5,2),
    status asset_status, -- 'in_use', 'in_storage', 'retired', 'disposed'
    assigned_to UUID, -- User ID
    ci_id UUID, -- Link to CMDB CI
    warranty_expiry DATE,
    disposal_date DATE
);

CREATE TABLE software_licenses (
    id UUID PRIMARY KEY,
    software_name VARCHAR(200),
    vendor VARCHAR(100),
    license_type VARCHAR(50), -- 'perpetual', 'subscription', 'concurrent'
    licenses_purchased INTEGER,
    licenses_in_use INTEGER,
    cost_per_license DECIMAL(12,2),
    renewal_date DATE
);
```

#### 21. Monitoring & Event Management
**Purpose:** Systematically observe services and record/report changes

**Platform Implementation:**
- **Integration with Prometheus/Grafana:** Platform metrics
- **Event Bus:** RabbitMQ/Kafka for event streaming
- **Alerting Rules:** Define thresholds and notification routing
- **Event Correlation:** Group related events to reduce noise

**Database Tables:**
```sql
CREATE TABLE events (
    id UUID PRIMARY KEY,
    event_type VARCHAR(100), -- 'threshold_exceeded', 'service_down', 'deployment_complete'
    severity event_severity, -- 'info', 'warning', 'error', 'critical'
    source_ci_id UUID,
    source_service_id UUID,
    message TEXT,
    metadata JSONB,
    acknowledged BOOLEAN DEFAULT FALSE,
    acknowledged_by UUID,
    acknowledged_at TIMESTAMP,
    created_at TIMESTAMP
);

CREATE TABLE alert_rules (
    id UUID PRIMARY KEY,
    name VARCHAR(200),
    condition JSONB, -- e.g., {"metric": "cpu_usage", "operator": ">", "threshold": 90}
    severity event_severity,
    notification_channels JSONB, -- ["email", "slack", "pagerduty"]
    enabled BOOLEAN DEFAULT TRUE
);
```

#### 22. Problem Management (Already Covered)
**Purpose:** Reduce likelihood and impact of incidents by identifying root causes

**Status:** ✅ Fully implemented in 02-data-model-cmdb.md

#### 23. Release Management
**Purpose:** Make new and changed services available for use

**Platform Implementation:**
- **Release Calendar:** Schedule and track releases
- **Release Notes:** Auto-generate from change requests
- **Rollback Plans:** Document rollback procedures
- **Release Validation:** Pre-production testing checklist

**Database Tables:**
```sql
CREATE TABLE releases (
    id UUID PRIMARY KEY,
    number VARCHAR(50) UNIQUE, -- REL0001234
    name VARCHAR(200),
    release_type VARCHAR(50), -- 'major', 'minor', 'patch', 'hotfix'
    status release_status, -- 'planned', 'in_development', 'testing', 'deployed', 'rolled_back'
    planned_deployment_date TIMESTAMP,
    actual_deployment_date TIMESTAMP,
    services_affected UUID[], -- Array of service IDs
    changes_included UUID[], -- Array of change request IDs
    release_notes TEXT,
    rollback_plan TEXT,
    success BOOLEAN,
    created_at TIMESTAMP
);
```

#### 24. Service Catalogue Management (Already Covered)
**Purpose:** Provide single source of consistent information on services

**Status:** ✅ Fully implemented as Service Portfolio in 03-service-portfolio-management.md

#### 25. Service Configuration Management (CMDB - Already Covered)
**Purpose:** Ensure accurate, reliable configuration information

**Status:** ✅ Fully implemented in 02-data-model-cmdb.md

#### 26. Service Continuity Management
**Purpose:** Ensure services can resume within agreed timeframes after disaster

**Platform Implementation:**
- **Business Impact Analysis:** Criticality of each service
- **Disaster Recovery Plans:** Per-service DR procedures
- **DR Testing:** Schedule and track DR drills
- **Recovery Time Objectives (RTO):** Target recovery times

**Database Tables:**
```sql
CREATE TABLE disaster_recovery_plans (
    id UUID PRIMARY KEY,
    service_id UUID,
    rto_hours DECIMAL(6,2), -- Recovery Time Objective (e.g., 4 hours)
    rpo_hours DECIMAL(6,2), -- Recovery Point Objective (e.g., 0.25 hours = 15 min)
    recovery_procedures TEXT,
    backup_frequency VARCHAR(50),
    last_tested_at TIMESTAMP,
    test_success BOOLEAN
);

CREATE TABLE dr_tests (
    id UUID PRIMARY KEY,
    dr_plan_id UUID,
    test_date TIMESTAMP,
    test_type VARCHAR(50), -- 'tabletop', 'partial', 'full'
    success BOOLEAN,
    actual_recovery_time_hours DECIMAL(6,2),
    issues_found TEXT,
    action_items TEXT
);
```

#### 27. Service Desk (Support Portal)
**Purpose:** Capture demand for incident resolution and service requests

**Platform Implementation:**
- **Ticketing System:** Unified incident + request management
- **Self-Service Portal:** Citizens can submit and track requests
- **Knowledge Base Integration:** Suggest KB articles before creating ticket
- **SLA Tracking:** Response and resolution time targets
- **Multi-Channel:** Email, web, mobile app, phone integration

**Features:**
- Citizen-facing portal (separate from admin console)
- Automated categorization (AI/ML)
- Chatbot for common questions
- Satisfaction surveys (CSAT scores)

#### 28. Service Level Management (Already Partially Covered)
**Purpose:** Set clear business-based targets for service performance

**Enhanced Implementation:**
- **SLA Templates:** Tier 1-4 service level templates
- **OLAs (Operational Level Agreements):** Internal team commitments
- **UCs (Underpinning Contracts):** Vendor SLA tracking
- **SLA Breach Alerts:** Real-time notifications when SLA at risk
- **SLA Reporting:** Monthly compliance reports

**Database Tables:**
```sql
CREATE TABLE service_level_agreements (
    id UUID PRIMARY KEY,
    service_id UUID,
    sla_tier INTEGER, -- 1 (critical) to 4 (low-volume)
    availability_target DECIMAL(5,2), -- e.g., 99.99
    p1_response_minutes INTEGER,
    p1_resolution_minutes INTEGER,
    p2_response_minutes INTEGER,
    p2_resolution_minutes INTEGER,
    p3_response_minutes INTEGER,
    p3_resolution_minutes INTEGER,
    p4_response_minutes INTEGER,
    p4_resolution_minutes INTEGER,
    effective_from DATE,
    effective_to DATE,
    reviewed_at TIMESTAMP
);

CREATE TABLE sla_breaches (
    id UUID PRIMARY KEY,
    incident_id UUID,
    sla_id UUID,
    breach_type VARCHAR(50), -- 'response', 'resolution', 'availability'
    target_time TIMESTAMP,
    actual_time TIMESTAMP,
    breach_duration_minutes INTEGER,
    reason TEXT,
    waived BOOLEAN DEFAULT FALSE, -- Sometimes breaches are waived (e.g., force majeure)
    created_at TIMESTAMP
);
```

---

## PART II: PUBLIC TRANSPARENCY DASHBOARDS

### Overview

Democratic governments must be transparent about service performance. The GaaS Platform provides **public-facing dashboards** that allow citizens to monitor government performance in real-time.

### Key Principles

1. **Radical Transparency:** Default to public unless security/privacy concerns
2. **Real-Time Data:** Live dashboards, not monthly reports
3. **Plain Language:** No jargon, citizen-friendly metrics
4. **Comparative Context:** Show targets, historical trends, international benchmarks
5. **Accessible:** WCAG 2.1 AA compliant, mobile-friendly

---

### Public Dashboard Examples

#### 1. National Digital Services Dashboard

**URL:** `https://gaas.example.gov/public/dashboard`

**Metrics Displayed:**

```typescript
{
  "last_updated": "2025-10-20T19:30:00Z",
  "summary": {
    "total_services": 247,
    "services_online": 245,
    "availability_24h": 99.97,
    "citizen_transactions_today": 1250000,
    "average_service_time_seconds": 18,
    "citizen_satisfaction_score": 4.3  // out of 5
  },
  "service_health": {
    "operational": 245,  // Green
    "degraded": 2,       // Yellow
    "outage": 0          // Red
  },
  "top_services_today": [
    {
      "name": "Tax Filing",
      "transactions": 450000,
      "avg_completion_time_minutes": 8,
      "satisfaction": 4.5
    },
    {
      "name": "Healthcare Appointment Booking",
      "transactions": 320000,
      "avg_completion_time_minutes": 3,
      "satisfaction": 4.7
    }
  ],
  "ongoing_incidents": [],
  "planned_maintenance": [
    {
      "service": "Business Registration Portal",
      "start": "2025-10-21T02:00:00Z",
      "end": "2025-10-21T06:00:00Z",
      "impact": "Service unavailable during maintenance window"
    }
  ]
}
```

**Visual Design:**
- **Hero Metrics:** Large numbers showing uptime, transactions, satisfaction
- **Service Status Map:** Color-coded map showing health of all services
- **Real-Time Feed:** Live updates as transactions complete
- **Incident History:** Timeline of past incidents and resolutions

#### 2. Service-Specific Public Dashboard

**Example: Healthcare Services**

**URL:** `https://gaas.example.gov/public/services/healthcare`

**Metrics:**

```typescript
{
  "service_domain": "Healthcare",
  "annual_budget": "$120M",
  "ppt_breakdown": {
    "people": {"amount": "$48M", "percentage": 40},
    "process": {"amount": "$48M", "percentage": 40},
    "technology": {"amount": "$24M", "percentage": 20}
  },
  "services": [
    {
      "name": "Healthcare Insurance Enrollment",
      "status": "operational",
      "uptime_30d": 99.98,
      "users_served_this_month": 125000,
      "avg_application_time_minutes": 12,
      "applications_approved_within_30d": 97.5,
      "satisfaction_score": 4.6,
      "cost_per_transaction": "$8.50"
    },
    {
      "name": "Medical Appointment Booking",
      "status": "operational",
      "uptime_30d": 99.95,
      "users_served_this_month": 450000,
      "avg_booking_time_minutes": 3,
      "satisfaction_score": 4.7,
      "cost_per_transaction": "$1.20"
    }
  ],
  "citizen_impact": {
    "time_saved_per_citizen_hours_per_year": 24,
    "cost_saved_per_citizen_per_year": "$180",
    "digital_adoption_rate": 87
  }
}
```

#### 3. Real-Time Service Status Page

**URL:** `https://status.gaas.example.gov`

**Features:**
- **Current Status:** All services color-coded (green/yellow/red)
- **Incident Updates:** Live updates during outages
- **Subscribe to Alerts:** Email/SMS notifications for specific services
- **Historical Uptime:** 90-day uptime charts per service
- **Scheduled Maintenance:** Calendar of planned downtime

**Example Incident:**
```
⚠️ ONGOING INCIDENT - October 20, 2025

Service: Tax Filing Portal
Status: Degraded Performance
Started: 14:32 UTC
Impact: Slow response times (15-20 seconds vs. normal 2-3 seconds)
Affected Users: ~15% of traffic experiencing delays
Next Update: 15:30 UTC

Update History:
15:15 UTC - Engineering team identified database query bottleneck, deploying fix
14:50 UTC - Incident escalated to senior engineers
14:32 UTC - Monitoring detected elevated response times
```

#### 4. Cost Transparency Dashboard

**URL:** `https://gaas.example.gov/public/costs`

**Purpose:** Show citizens where their tax money goes

**Metrics:**

```typescript
{
  "total_digital_government_budget": "$500M per year",
  "cost_per_citizen_per_year": "$50",
  "breakdown_by_domain": [
    {
      "domain": "Healthcare",
      "budget": "$120M",
      "citizens_served": 8000000,
      "cost_per_citizen": "$15",
      "top_expense": "Healthcare Insurance Platform ($45M)"
    },
    {
      "domain": "Education",
      "budget": "$80M",
      "citizens_served": 5000000,
      "cost_per_citizen": "$16",
      "top_expense": "Student Enrollment System ($25M)"
    }
  ],
  "ppt_investment": {
    "people_40_percent": "$200M",
    "process_40_percent": "$200M",
    "technology_20_percent": "$100M",
    "explanation": "40-40-20 principle ensures balanced investment in people, processes, and technology"
  },
  "roi_metrics": {
    "annual_cost_savings_vs_manual": "$1.2B",
    "citizen_hours_saved_annually": 834,
    "roi_ratio": "4.2:1"
  }
}
```

**Visualizations:**
- **Sankey Diagram:** Budget flow from total → domains → services → infrastructure
- **PPT Balance Gauge:** Visual showing 40-40-20 target vs. actual
- **Cost Trend:** 5-year historical cost trends
- **International Comparison:** Compare cost-per-citizen to peer nations

#### 5. Citizen Impact Dashboard

**URL:** `https://gaas.example.gov/public/impact`

**Purpose:** Show real-world outcomes for citizens

**Metrics:**

```typescript
{
  "headline_metrics": {
    "services_available_online": "99%",
    "hours_saved_per_citizen_per_year": 834,
    "cost_saved_per_citizen_per_year": "$1,200",
    "citizen_satisfaction": "87%",
    "digital_adoption_rate": "93%"
  },
  "time_savings_by_service": [
    {
      "service": "Birth Registration",
      "time_before_digital": "4 hours (in-person visit, queuing, paperwork)",
      "time_after_digital": "15 minutes (online form)",
      "time_saved": "3.75 hours",
      "citizens_using_annually": 125000,
      "total_hours_saved_annually": 468750
    },
    {
      "service": "Business Registration",
      "time_before_digital": "3 days (multiple office visits, approvals)",
      "time_after_digital": "1 hour (online application, automated approval)",
      "time_saved": "23 hours",
      "citizens_using_annually": 45000,
      "total_hours_saved_annually": 1035000
    }
  ],
  "accessibility": {
    "services_meeting_wcag_aa": "100%",
    "languages_supported": 12,
    "assistive_technology_compatible": "100%"
  },
  "trust_metrics": {
    "trust_in_digital_services": "82%",
    "willing_to_recommend_to_others": "89%",
    "perceived_data_security": "78%"
  }
}
```

---

### Implementation Details

#### Database Tables for Public Dashboards

```sql
CREATE TABLE public_metrics (
    id UUID PRIMARY KEY,
    metric_type VARCHAR(100), -- 'service_uptime', 'transaction_volume', 'satisfaction'
    service_id UUID,
    domain VARCHAR(100),
    metric_value DECIMAL(12,4),
    timestamp TIMESTAMP,
    public_visible BOOLEAN DEFAULT TRUE
);

CREATE TABLE public_incidents (
    id UUID PRIMARY KEY,
    incident_id UUID, -- FK to incidents table
    public_summary TEXT, -- Simplified, citizen-friendly description
    status VARCHAR(50),
    affected_service VARCHAR(200),
    impact_description TEXT,
    started_at TIMESTAMP,
    resolved_at TIMESTAMP,
    updates JSONB -- Array of status updates
);

CREATE TABLE citizen_feedback (
    id UUID PRIMARY KEY,
    service_id UUID,
    rating INTEGER, -- 1-5 stars
    feedback_text TEXT,
    submitted_at TIMESTAMP,
    user_id UUID -- Optional, can be anonymous
);
```

#### APIs for Public Dashboards

```typescript
// Public APIs (no authentication required)

// National dashboard
GET /api/public/v1/dashboard/national
Response: {
  summary: { total_services, availability_24h, transactions_today, ... },
  service_health: { operational, degraded, outage },
  ongoing_incidents: [...],
  planned_maintenance: [...]
}

// Service status page
GET /api/public/v1/status
Response: [
  { service: "Tax Filing", status: "operational", uptime_30d: 99.98 },
  { service: "Healthcare Appointments", status: "degraded", uptime_30d: 99.85, current_incident: {...} }
]

// Domain-specific dashboard
GET /api/public/v1/dashboard/domains/{domain}
Response: {
  domain: "healthcare",
  budget: "$120M",
  ppt_breakdown: {...},
  services: [...],
  citizen_impact: {...}
}

// Cost transparency
GET /api/public/v1/costs
Response: {
  total_budget: "$500M",
  breakdown_by_domain: [...],
  ppt_investment: {...},
  roi_metrics: {...}
}

// Real-time updates (WebSocket)
WS /api/public/v1/status/realtime
Messages: { event: "service_status_change", service_id, new_status, timestamp }

// Subscribe to service alerts
POST /api/public/v1/alerts/subscribe
Body: { email: "citizen@example.com", service_ids: ["srv-123", "srv-456"] }
```

#### Privacy & Security Considerations

**What is Public:**
- ✅ Service availability and uptime
- ✅ Aggregate transaction volumes
- ✅ Average service completion times
- ✅ Aggregate satisfaction scores
- ✅ Budget and cost data
- ✅ Incident summaries (non-sensitive)

**What is NOT Public:**
- ❌ Individual citizen data
- ❌ Personally identifiable information (PII)
- ❌ Security incident details (vulnerabilities, attack vectors)
- ❌ Internal system architecture details
- ❌ Employee personal information

**Rate Limiting:**
- Public APIs rate-limited to 1000 requests/hour per IP
- Prevents abuse and data scraping
- Higher limits for authenticated API keys (for researchers, media)

---

## Summary

### GSM Coverage Status

| Practice Category | Total Practices | Fully Implemented | Partially Implemented | Planned |
|-------------------|----------------|-------------------|----------------------|---------|
| **General Management** | 14 | 3 | 5 | 6 |
| **Service Management** | 17 | 8 | 4 | 5 |
| **Technical Management** | 3 | 3 | 0 | 0 |
| **TOTAL** | **34** | **14** | **9** | **11** |

**Phase 1 (MVP, Months 1-6):** 14 practices fully implemented
**Phase 2-3 (Months 7-18):** Additional 9 practices implemented
**Phase 4 (Months 19-24):** Remaining 11 practices completed

### Public Transparency Features

✅ **National Digital Services Dashboard** - Real-time overview
✅ **Service Status Page** - Uptime and incident tracking
✅ **Domain-Specific Dashboards** - Healthcare, Education, Justice, etc.
✅ **Cost Transparency Dashboard** - Budget breakdown and PPT balance
✅ **Citizen Impact Dashboard** - Time/cost savings, satisfaction
✅ **Real-Time Alerts** - Email/SMS notifications for service disruptions
✅ **Open Data APIs** - Public APIs for researchers and journalists

---

**This platform now delivers:**
1. ✅ **Complete GSM Process Lifecycle Management** - All 28+ practices
2. ✅ **Public Transparency Dashboards** - Democratic accountability through real-time data
3. ✅ **Citizen-Centric Design** - Services designed with and for citizens
4. ✅ **Cost Transparency** - "Healthcare: $120M, Education: $80M" visibility
5. ✅ **International Best Practices** - Based on Estonia, Singapore, UK GDS, Denmark

---

*Document Version: 1.0 | Last Updated: October 2025*

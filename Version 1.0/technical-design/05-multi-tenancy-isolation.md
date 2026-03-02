# GaaS Platform - Multi-Tenancy & Domain Isolation

**Document:** 05 - Multi-Tenancy & Domain Isolation
**Version:** 1.0
**Date:** October 2025
**Status:** Design Phase

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Tenancy Models](#tenancy-models)
3. [Domain Isolation Architecture](#domain-isolation-architecture)
4. [Cross-Domain Interactions](#cross-domain-interactions)
5. [Cost Allocation by Domain](#cost-allocation-by-domain)
6. [Security Considerations](#security-considerations)
7. [Implementation Specifications](#implementation-specifications)
8. [Scalability](#scalability)

---

## Executive Summary

Government platforms serve dozens of agencies, each with distinct mandates, data sensitivity requirements, and regulatory obligations. The Ministry of Health handles protected health records. The Ministry of Justice manages law enforcement data. The Ministry of Education processes student information. These agencies must share a common platform to reduce costs and ensure interoperability, but they absolutely cannot access each other's data without explicit authorization.

Multi-tenancy is the architecture pattern that resolves this tension. It allows a single GaaS Platform deployment to serve multiple government domains (ministries, agencies, departments) while guaranteeing that each domain's data, configurations, and operational context remain strictly isolated.

**Why multi-tenancy matters for government:**

- **Cost Efficiency:** A single platform deployment costs 60-80% less than isolated per-agency deployments. Shared infrastructure, shared operations teams, and shared upgrades eliminate redundant spending.
- **Interoperability:** A unified platform enables controlled data exchange between agencies through well-defined APIs rather than ad hoc point-to-point integrations.
- **Consistent Standards:** All domains operate under the same GSM framework, ITIL practices, and security baseline, ensuring uniform service quality.
- **Centralized Governance:** Platform-wide policies (security patching, compliance audits, cost reporting) are enforced once, not replicated across dozens of separate installations.
- **Sovereignty & Compliance:** Row-level security and optional per-domain encryption satisfy data sovereignty requirements without requiring physical separation.

The GaaS Platform implements a **shared-database with row-level security (RLS)** model as the default tenancy strategy, with an optional **fully-isolated deployment** path for domains with extreme sensitivity requirements (e.g., national defense, intelligence).

---

## Tenancy Models

### Model Comparison

| Characteristic | Shared Everything | Shared Database (RLS) | Fully Isolated |
|---|---|---|---|
| **Data Isolation** | Application-level only | Database-enforced (RLS policies) | Physical separation |
| **Infrastructure Cost** | Lowest | Low-Medium | Highest |
| **Operational Complexity** | Low | Medium | High |
| **Customization** | Limited | Moderate (per-domain config) | Full independence |
| **Cross-Domain Queries** | Easy (no barriers) | Controlled (shared services) | Requires federation |
| **Compliance Suitability** | Low-sensitivity data only | Most government workloads | Classified/defense workloads |
| **Scaling Independence** | None | Partial (resource quotas) | Full independence |
| **Onboarding New Domain** | Minutes | Hours | Days-Weeks |
| **Upgrade Path** | Single deployment | Single deployment | Per-domain deployments |

### Recommended Strategy: Shared Database with RLS

**Default for 90%+ of government domains.** This model provides database-enforced isolation without the operational burden of managing separate infrastructure per agency.

**How it works:**
1. All domains share the same PostgreSQL database cluster
2. Every table includes a `domain_id` column
3. PostgreSQL Row-Level Security (RLS) policies ensure that queries only return rows belonging to the authenticated domain
4. The application layer propagates domain context from JWT claims through middleware to every database query
5. Even if application-level bugs bypass filters, the database itself enforces isolation

**When to use Fully Isolated instead:**
- National defense or intelligence agencies
- Regulatory requirements mandating physical data separation
- Domains requiring independent scaling (e.g., national health system during a pandemic)
- Agencies with existing infrastructure commitments (on-premises requirements)

---

## Domain Isolation Architecture

### Domain Concept

A **domain** represents a government ministry, agency, or department that operates as an independent tenant within the GaaS Platform. Each domain has its own:

- Service portfolio and CMDB entries
- Users, roles, and permission sets
- Incidents, changes, and workflow configurations
- Cost allocation and budgets
- Configuration and branding preferences

**Example domain mapping:**

```
GaaS Platform Instance (Country: "Republic of Estara")
├── Domain: healthcare       → Ministry of Health
├── Domain: education        → Ministry of Education
├── Domain: justice          → Ministry of Justice
├── Domain: transport        → Ministry of Transport
├── Domain: finance          → Ministry of Finance
├── Domain: social_services  → Ministry of Social Affairs
└── Domain: shared_services  → Central IT Agency (platform-wide)
```

### Tenant Context Propagation

Domain isolation begins at authentication and flows through every layer of the stack.

```
┌──────────────────────────────────────────────────────────────────┐
│  1. AUTHENTICATION                                                │
│     User logs in → Keycloak issues JWT with domain claim          │
│     JWT payload: { sub: "user-uuid", domain: "healthcare",       │
│                     roles: ["service_owner"], iat: ..., exp: ... } │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│  2. API GATEWAY                                                    │
│     Kong/Traefik validates JWT signature and expiry               │
│     Extracts domain claim → sets X-Domain-ID header               │
│     Routes request to appropriate microservice                    │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│  3. MIDDLEWARE (NestJS Guard / FastAPI Dependency)                 │
│     Reads X-Domain-ID header (or extracts from JWT directly)      │
│     Sets domain context on request object / async local storage   │
│     Rejects requests with missing or invalid domain               │
└──────────────────────────┬───────────────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────────────┐
│  4. DATABASE CONNECTION                                            │
│     Before executing queries, SET app.current_domain = 'healthcare'│
│     PostgreSQL RLS policies read this variable                    │
│     All SELECT/INSERT/UPDATE/DELETE automatically scoped           │
└──────────────────────────────────────────────────────────────────┘
```

**NestJS Middleware Example:**

```typescript
// domain-context.guard.ts
@Injectable()
export class DomainContextGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const domain = request.headers['x-domain-id']
      || request.user?.domain;

    if (!domain) {
      throw new ForbiddenException('Domain context is required');
    }

    // Validate domain exists and user belongs to it
    request.domainId = domain;
    return true;
  }
}

// domain-context.interceptor.ts
@Injectable()
export class DomainContextInterceptor implements NestInterceptor {
  constructor(private readonly dataSource: DataSource) {}

  async intercept(context: ExecutionContext, next: CallHandler) {
    const request = context.switchToHttp().getRequest();
    const domainId = request.domainId;

    // Set PostgreSQL session variable for RLS
    await this.dataSource.query(
      `SET app.current_domain = $1`,
      [domainId]
    );

    return next.handle();
  }
}
```

### Data Isolation via PostgreSQL Row-Level Security

RLS is the core enforcement mechanism. Even if application code contains a bug that omits a `WHERE domain_id = ?` clause, the database itself will filter rows.

**Schema design principle:** Every table that stores domain-specific data includes a `domain_id` column. Tables that store platform-wide data (e.g., system configuration, shared reference data) do not use RLS.

**Tables with RLS (domain-scoped):**
- `services`, `service_relationships`, `service_stakeholders`
- `incidents`, `problems`, `changes`
- `configuration_items`, `ci_relationships`
- `workflow_definitions`, `workflow_instances`
- `cost_entries`, `knowledge_articles`
- `users`, `roles`, `user_roles`
- `audit_log`

**Tables without RLS (platform-scoped):**
- `system_configuration`
- `shared_reference_data` (country codes, currency codes, etc.)
- `platform_announcements`

**RLS Policy Implementation:**

```sql
-- Step 1: Enable RLS on the table
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Step 2: Force RLS for table owner (important: prevents bypass)
ALTER TABLE services FORCE ROW LEVEL SECURITY;

-- Step 3: Create policies

-- SELECT policy: users can only read rows from their domain
CREATE POLICY domain_select_policy ON services
    FOR SELECT
    USING (domain_id = current_setting('app.current_domain', true));

-- INSERT policy: users can only insert rows into their domain
CREATE POLICY domain_insert_policy ON services
    FOR INSERT
    WITH CHECK (domain_id = current_setting('app.current_domain', true));

-- UPDATE policy: users can only update rows in their domain
CREATE POLICY domain_update_policy ON services
    FOR UPDATE
    USING (domain_id = current_setting('app.current_domain', true))
    WITH CHECK (domain_id = current_setting('app.current_domain', true));

-- DELETE policy: users can only delete rows in their domain
CREATE POLICY domain_delete_policy ON services
    FOR DELETE
    USING (domain_id = current_setting('app.current_domain', true));

-- Platform admin policy: platform admins can read all domains
CREATE POLICY platform_admin_policy ON services
    FOR ALL
    USING (current_setting('app.is_platform_admin', true) = 'true');
```

### Network Isolation via Kubernetes Namespaces

While database RLS provides data isolation, Kubernetes namespaces provide network and resource isolation.

```yaml
# Namespace per domain for workloads that require network isolation
apiVersion: v1
kind: Namespace
metadata:
  name: gaas-domain-healthcare
  labels:
    gaas.io/domain: healthcare
    gaas.io/isolation-level: standard

---
# NetworkPolicy: restrict cross-namespace traffic
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: deny-cross-domain-traffic
  namespace: gaas-domain-healthcare
spec:
  podSelector: {}
  policyTypes:
    - Ingress
    - Egress
  ingress:
    # Allow traffic from same namespace
    - from:
        - namespaceSelector:
            matchLabels:
              gaas.io/domain: healthcare
    # Allow traffic from shared services namespace
    - from:
        - namespaceSelector:
            matchLabels:
              gaas.io/domain: shared-services
  egress:
    # Allow traffic to same namespace
    - to:
        - namespaceSelector:
            matchLabels:
              gaas.io/domain: healthcare
    # Allow traffic to shared services (API gateway, identity, etc.)
    - to:
        - namespaceSelector:
            matchLabels:
              gaas.io/domain: shared-services
    # Allow DNS resolution
    - to:
        - namespaceSelector:
            matchLabels:
              kubernetes.io/metadata.name: kube-system
      ports:
        - protocol: UDP
          port: 53
```

**Namespace Layout:**

```
Kubernetes Cluster
├── gaas-shared-services        # API Gateway, IAM, Cost Management
│   ├── api-gateway
│   ├── keycloak
│   ├── cost-management-service
│   └── notification-service
├── gaas-domain-healthcare      # Healthcare-specific workloads
│   ├── healthcare-custom-workflow
│   └── healthcare-data-pipeline
├── gaas-domain-education       # Education-specific workloads
├── gaas-domain-justice         # Justice-specific workloads
├── gaas-core                   # Core microservices (multi-tenant)
│   ├── service-catalog (RLS-scoped)
│   ├── incident-mgmt (RLS-scoped)
│   ├── change-mgmt (RLS-scoped)
│   ├── cmdb-service (RLS-scoped)
│   └── workflow-engine (RLS-scoped)
└── gaas-monitoring             # Prometheus, Grafana, Alertmanager
```

---

## Cross-Domain Interactions

### Shared Services

Certain services are platform-wide and available to all domains. These run in the `gaas-shared-services` namespace and are not subject to domain-level RLS.

| Shared Service | Purpose | Domain Interaction |
|---|---|---|
| **IAM / Keycloak** | Authentication, SSO, federation | All domains authenticate through shared IAM |
| **API Gateway** | Routing, rate limiting, TLS termination | All domain traffic passes through gateway |
| **Cost Management** | TBM cost allocation, chargeback | Aggregates costs across all domains |
| **Notification Service** | Email, SMS, push notifications | Sends notifications on behalf of any domain |
| **Search Service** | Elasticsearch indexing | Indexes are domain-scoped within shared cluster |
| **Platform Analytics** | Cross-domain reporting for executives | Read-only access to anonymized/aggregated data |

### Cross-Domain Service Requests

When one agency needs data from another (e.g., Ministry of Health needs citizen identity verification from Ministry of Interior), the interaction must go through explicit API contracts, never direct database access.

```
Ministry of Health                    Ministry of Interior
┌──────────────────┐                  ┌──────────────────┐
│ Healthcare App   │                  │ Identity Service  │
│                  │  API Request     │                   │
│  "Verify citizen │ ──────────────►  │  Validates NID    │
│   NID: 12345"    │                  │  Returns: name,   │
│                  │  API Response    │  DOB, photo       │
│  Receives:       │ ◄──────────────  │                   │
│  verified=true   │                  │                   │
└──────────────────┘                  └──────────────────┘
```

**Cross-domain API request flow:**

1. Requesting domain calls the GaaS API Gateway with its own JWT
2. Gateway validates the JWT and checks cross-domain permissions
3. Gateway forwards the request to the target domain's API with a cross-domain authorization token
4. Target domain validates the cross-domain token, checks that the requesting domain has been granted access to the specific API endpoint
5. Target domain returns only the data explicitly permitted by the sharing agreement
6. All cross-domain requests are logged in both domains' audit trails

**Cross-domain permission model:**

```sql
CREATE TABLE cross_domain_permissions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Which domain is requesting access
    requesting_domain_id VARCHAR(100) NOT NULL,

    -- Which domain owns the data
    owning_domain_id VARCHAR(100) NOT NULL,

    -- What resource/API is being shared
    resource_type VARCHAR(100) NOT NULL,   -- 'citizen_identity', 'service_status', etc.
    api_endpoint VARCHAR(255) NOT NULL,    -- '/api/v1/identity/verify'
    allowed_methods VARCHAR(50)[] NOT NULL, -- ARRAY['GET']

    -- Governance
    approved_by UUID NOT NULL,
    approved_at TIMESTAMP NOT NULL,
    expires_at TIMESTAMP,
    data_sharing_agreement_id UUID,        -- Reference to legal agreement

    -- Audit
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

### Shared CMDB with Visibility Controls

The CMDB contains configuration items that may be shared across domains (e.g., shared network infrastructure, cloud accounts) or domain-specific (e.g., a department's application servers).

**Visibility levels:**
- **Domain-Private:** Visible only to the owning domain (default)
- **Platform-Visible:** Visible to all domains (read-only), editable by owner
- **Shared:** Jointly managed by multiple domains

```sql
CREATE TYPE ci_visibility AS ENUM ('domain_private', 'platform_visible', 'shared');

-- Additional column on configuration_items table
ALTER TABLE configuration_items ADD COLUMN visibility ci_visibility
    NOT NULL DEFAULT 'domain_private';

-- RLS policy adjusted for visibility
CREATE POLICY cmdb_visibility_policy ON configuration_items
    FOR SELECT
    USING (
        domain_id = current_setting('app.current_domain', true)
        OR visibility IN ('platform_visible', 'shared')
    );
```

### Cross-Domain Change Management

When a change affects shared infrastructure or multiple domains, the change management process expands to include approvals from all affected domains.

**Cross-domain change workflow:**

1. Change requester creates a change request and tags affected domains
2. Workflow engine automatically routes approval requests to each affected domain's Change Advisory Board (CAB)
3. All affected domains must approve before the change can proceed
4. If any domain rejects, the change enters negotiation status
5. Post-implementation review includes representatives from all affected domains

```sql
CREATE TABLE change_domain_approvals (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    change_id UUID NOT NULL,           -- FK to changes table
    domain_id VARCHAR(100) NOT NULL,
    approver_id UUID,
    status VARCHAR(50) NOT NULL DEFAULT 'pending',
        -- 'pending', 'approved', 'rejected', 'negotiating'
    decision_notes TEXT,
    decided_at TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_change_approvals_change ON change_domain_approvals(change_id);
CREATE INDEX idx_change_approvals_domain ON change_domain_approvals(domain_id);
```

---

## Cost Allocation by Domain

### Resource Metering

Every domain's resource consumption is tracked automatically. The platform collects metrics at three levels:

| Metric Category | Examples | Collection Method |
|---|---|---|
| **Compute** | CPU hours, memory-hours, pod count | Kubernetes metrics (Prometheus) |
| **Storage** | Database size, object storage, backup volume | PostgreSQL `pg_total_relation_size()`, MinIO metrics |
| **Network** | API calls, bandwidth, cross-domain requests | API Gateway logs (Kong analytics) |
| **Application** | Active users, transactions, workflow executions | Application-level counters |

**Metering database schema:**

```sql
CREATE TABLE domain_resource_usage (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    domain_id VARCHAR(100) NOT NULL,
    resource_type VARCHAR(100) NOT NULL,
        -- 'cpu_hours', 'memory_gb_hours', 'storage_gb', 'api_calls',
        -- 'bandwidth_gb', 'active_users', 'transactions'
    quantity DECIMAL(16,4) NOT NULL,
    unit VARCHAR(50) NOT NULL,
    unit_cost DECIMAL(12,6),            -- Cost per unit (for chargeback)
    total_cost DECIMAL(12,2) GENERATED ALWAYS AS (quantity * unit_cost) STORED,
    period_start TIMESTAMP NOT NULL,
    period_end TIMESTAMP NOT NULL,
    collected_at TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_resource_usage_domain ON domain_resource_usage(domain_id);
CREATE INDEX idx_resource_usage_period ON domain_resource_usage(period_start, period_end);
CREATE INDEX idx_resource_usage_type ON domain_resource_usage(resource_type);
```

### TBM Integration

Resource usage feeds directly into the TBM cost allocation engine described in document 03 (Service Portfolio Management). The flow is:

```
Infrastructure Metrics (Prometheus/K8s)
        │
        ▼
Resource Metering Service (aggregates per domain)
        │
        ▼
Cost Allocation Engine (applies unit costs, allocation rules)
        │
        ▼
Cost Management Service (TBM hierarchy: Infra → App → Technical → Business)
        │
        ├──► Domain Cost Dashboard (per-agency view)
        └──► Public Cost Transparency Dashboard (citizen view)
```

**Allocation rules:**

```typescript
// Example: Allocate shared API Gateway costs proportionally by API call volume
POST /api/v1/costs/allocation-rules
{
  "name": "API Gateway Cost Allocation",
  "shared_resource": "api-gateway-cluster",
  "monthly_cost": 15000.00,
  "allocation_method": "proportional",
  "allocation_metric": "api_calls",
  "description": "Distribute API Gateway infrastructure cost across domains based on API call volume"
}
```

### Chargeback / Showback Models

| Model | Description | Use Case |
|---|---|---|
| **Showback** | Report costs per domain for visibility; no actual billing | Most government deployments (single funding source) |
| **Chargeback** | Actual cost transfer between agency budgets | Decentralized funding models; shared services agencies |
| **Tiered Pricing** | Fixed monthly fee per domain tier (small/medium/large) | Simplified budgeting; predictable costs |

**Monthly cost report API:**

```typescript
GET /api/v1/costs/domains/healthcare?period=2025-10

Response: 200 OK
{
  "domain": "healthcare",
  "period": "2025-10",
  "total_cost": 145000.00,
  "breakdown": {
    "compute": { "quantity": 12500, "unit": "cpu_hours", "cost": 62500.00 },
    "storage": { "quantity": 2400, "unit": "gb_months", "cost": 24000.00 },
    "network": { "quantity": 850, "unit": "gb_transferred", "cost": 8500.00 },
    "shared_services_allocation": { "cost": 50000.00, "details": [
      { "service": "API Gateway", "cost": 15000.00, "method": "proportional_by_api_calls" },
      { "service": "Identity (Keycloak)", "cost": 20000.00, "method": "proportional_by_active_users" },
      { "service": "Monitoring Stack", "cost": 15000.00, "method": "equal_share" }
    ]}
  },
  "ppt_allocation": {
    "people": 58000.00,
    "process": 58000.00,
    "technology": 29000.00
  },
  "comparison": {
    "previous_month": 138000.00,
    "change_percentage": 5.07,
    "trend": "increasing"
  }
}
```

---

## Security Considerations

### Tenant Escape Prevention

Tenant escape (one domain accessing another domain's data) is the most critical security risk in any multi-tenant system. The GaaS Platform employs defense-in-depth:

| Layer | Mechanism | What It Prevents |
|---|---|---|
| **Application** | Middleware extracts domain from JWT; rejects missing/invalid domains | Unauthenticated or unscoped requests |
| **Database** | PostgreSQL RLS policies on every table | Application-level bugs that omit WHERE clauses |
| **Network** | Kubernetes NetworkPolicies per namespace | Lateral movement between domain workloads |
| **API Gateway** | Domain-aware routing; request headers validated | Domain spoofing in HTTP headers |
| **Testing** | Automated tenant isolation tests in CI/CD pipeline | Regressions introduced by code changes |

**Automated tenant isolation test:**

```typescript
// test/isolation/tenant-escape.e2e-spec.ts
describe('Tenant Isolation', () => {
  it('should prevent domain A from reading domain B data', async () => {
    // Create incident in healthcare domain
    const incident = await createIncident({
      domain: 'healthcare',
      short_description: 'Test incident'
    });

    // Attempt to read it with education domain JWT
    const response = await request(app.getHttpServer())
      .get(`/api/v1/incidents/${incident.id}`)
      .set('Authorization', `Bearer ${educationDomainJwt}`)
      .expect(404); // Must return 404, not 403 (don't reveal existence)
  });

  it('should prevent cross-domain data in list queries', async () => {
    const response = await request(app.getHttpServer())
      .get('/api/v1/incidents')
      .set('Authorization', `Bearer ${educationDomainJwt}`)
      .expect(200);

    // No incidents from healthcare domain should appear
    const healthcareIncidents = response.body.data.filter(
      (i: any) => i.domain_id === 'healthcare'
    );
    expect(healthcareIncidents).toHaveLength(0);
  });
});
```

### Audit Logging per Domain

Every action in the platform is logged with full domain context. Audit logs are themselves domain-scoped: domain administrators can only view audit logs for their own domain. Platform administrators can view logs across all domains.

```sql
-- Audit log RLS: domain admins see their domain; platform admins see all
CREATE POLICY audit_domain_policy ON audit_log
    FOR SELECT
    USING (
        domain_id = current_setting('app.current_domain', true)
        OR current_setting('app.is_platform_admin', true) = 'true'
    );
```

**Audit log entry example:**

```json
{
  "id": "audit-uuid-789",
  "timestamp": "2025-10-20T14:32:00Z",
  "domain_id": "healthcare",
  "user_id": "user-uuid-456",
  "user_email": "dr.smith@health.gov",
  "action": "update",
  "entity_type": "incident",
  "entity_id": "inc-uuid-123",
  "changes": {
    "before": { "status": "new", "assigned_to": null },
    "after": { "status": "in_progress", "assigned_to": "user-uuid-789" }
  },
  "ip_address": "10.0.5.42",
  "user_agent": "Mozilla/5.0 ..."
}
```

### Data Sovereignty

For governments operating under data sovereignty regulations, the platform supports geographic data residency constraints.

**Per-domain data residency configuration:**

```sql
CREATE TABLE domain_configuration (
    domain_id VARCHAR(100) PRIMARY KEY,
    display_name VARCHAR(200) NOT NULL,
    data_residency_region VARCHAR(50) NOT NULL DEFAULT 'default',
        -- 'eu-west', 'us-east', 'ap-southeast', 'on-premises'
    encryption_key_id VARCHAR(255),      -- KMS key for per-domain encryption
    require_encryption BOOLEAN DEFAULT TRUE,
    allowed_ip_ranges CIDR[],            -- Optional IP allowlist
    max_data_retention_days INTEGER DEFAULT 2555, -- 7 years
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW()
);
```

When `data_residency_region` is set, the platform routes all data writes for that domain to the designated PostgreSQL cluster in the specified region. Read replicas may exist in other regions for performance, but primary writes are geographically constrained.

### Encryption at Rest with Per-Domain Keys

By default, the platform encrypts all data at rest using the PostgreSQL cluster's encryption (TDE or volume-level encryption). For domains requiring additional isolation, per-domain encryption keys can be configured.

**Per-domain encryption flow:**

1. Each domain is assigned a unique key in HashiCorp Vault (or AWS KMS / Azure Key Vault)
2. Sensitive columns (PII, health records, financial data) are encrypted at the application layer using the domain's key before writing to the database
3. Decryption occurs at the application layer after reading from the database
4. Revoking a domain's key renders its sensitive data unreadable, even to platform administrators

```typescript
// Encrypted column handling in the service layer
@Injectable()
export class EncryptionService {
  async encrypt(domainId: string, plaintext: string): Promise<string> {
    const key = await this.vault.getDomainKey(domainId);
    return aes256gcm.encrypt(plaintext, key);
  }

  async decrypt(domainId: string, ciphertext: string): Promise<string> {
    const key = await this.vault.getDomainKey(domainId);
    return aes256gcm.decrypt(ciphertext, key);
  }
}
```

---

## Implementation Specifications

### PostgreSQL RLS Policy Template

Apply this template to every domain-scoped table:

```sql
-- Template: apply to every table with a domain_id column
-- Replace TABLE_NAME with actual table name

-- 1. Enable RLS
ALTER TABLE TABLE_NAME ENABLE ROW LEVEL SECURITY;
ALTER TABLE TABLE_NAME FORCE ROW LEVEL SECURITY;

-- 2. Domain isolation policy (standard users)
CREATE POLICY "TABLE_NAME_domain_isolation" ON TABLE_NAME
    FOR ALL
    USING (domain_id = current_setting('app.current_domain', true))
    WITH CHECK (domain_id = current_setting('app.current_domain', true));

-- 3. Platform admin bypass (read all, write to own domain)
CREATE POLICY "TABLE_NAME_platform_admin_read" ON TABLE_NAME
    FOR SELECT
    USING (current_setting('app.is_platform_admin', true) = 'true');

CREATE POLICY "TABLE_NAME_platform_admin_write" ON TABLE_NAME
    FOR INSERT
    WITH CHECK (
        current_setting('app.is_platform_admin', true) = 'true'
        AND domain_id = current_setting('app.current_domain', true)
    );

-- 4. Shared services bypass (for cross-domain service accounts)
CREATE POLICY "TABLE_NAME_shared_service" ON TABLE_NAME
    FOR SELECT
    USING (current_setting('app.is_shared_service', true) = 'true');
```

### Database Migration Strategy

Adding tenancy to existing tables requires a careful migration:

**Phase 1: Add column (non-breaking)**
```sql
-- Add domain_id column with a default (allows gradual migration)
ALTER TABLE services ADD COLUMN domain_id VARCHAR(100);

-- Backfill existing rows (assign to a default domain)
UPDATE services SET domain_id = 'default' WHERE domain_id IS NULL;

-- Make column NOT NULL after backfill
ALTER TABLE services ALTER COLUMN domain_id SET NOT NULL;

-- Add index
CREATE INDEX idx_services_domain_id ON services(domain_id);
```

**Phase 2: Enable RLS (non-breaking if app already sets context)**
```sql
-- Enable RLS (existing queries continue to work if app sets current_domain)
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE services FORCE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY ... (as shown above)
```

**Phase 3: Verify isolation (testing)**
```sql
-- Verify: set context to domain A, confirm only domain A rows returned
SET app.current_domain = 'healthcare';
SELECT count(*) FROM services; -- Should return only healthcare services

SET app.current_domain = 'education';
SELECT count(*) FROM services; -- Should return only education services
```

### API Gateway Multi-Tenancy Routing

Kong configuration for domain-aware routing:

```yaml
# Kong declarative configuration (kong.yml)
services:
  - name: gaas-service-catalog
    url: http://service-catalog.gaas-core.svc.cluster.local:3000
    routes:
      - name: service-catalog-route
        paths:
          - /api/v1/services
        plugins:
          - name: jwt
            config:
              claims_to_verify:
                - exp
          - name: request-transformer
            config:
              add:
                headers:
                  - "X-Domain-ID:$(jwt.domain)"
          - name: rate-limiting
            config:
              minute: 1000
              policy: local
              fault_tolerant: true
              header_name: X-Domain-ID  # Rate limit per domain
```

### Domain Onboarding Workflow

```typescript
POST /api/v1/platform/domains

Request Body:
{
  "domain_id": "environment",
  "display_name": "Ministry of Environment",
  "data_residency_region": "eu-west",
  "admin_user": {
    "email": "admin@environment.gov",
    "name": "Maria Santos"
  },
  "initial_roles": [
    "domain_admin", "service_owner", "incident_manager",
    "change_manager", "technician", "viewer"
  ],
  "resource_quotas": {
    "max_cpu_cores": 32,
    "max_memory_gb": 128,
    "max_storage_gb": 500,
    "max_api_calls_per_hour": 50000
  }
}

Response: 201 Created
{
  "domain_id": "environment",
  "status": "provisioning",
  "provisioning_steps": [
    { "step": "create_keycloak_realm", "status": "completed" },
    { "step": "create_kubernetes_namespace", "status": "completed" },
    { "step": "apply_network_policies", "status": "completed" },
    { "step": "create_database_rls_context", "status": "completed" },
    { "step": "create_admin_user", "status": "completed" },
    { "step": "seed_default_roles", "status": "completed" },
    { "step": "configure_resource_quotas", "status": "completed" },
    { "step": "send_welcome_email", "status": "in_progress" }
  ],
  "estimated_completion": "2025-10-20T15:00:00Z"
}
```

---

## Scalability

### Horizontal Scaling per Domain

Domains with higher load can receive additional compute resources without affecting other domains. The platform supports two scaling approaches:

**1. Shared Core Services Scaling (Default)**

Core microservices (service catalog, incident management, etc.) run as shared deployments in `gaas-core`. They scale horizontally based on aggregate load. RLS ensures data isolation regardless of which pod handles the request.

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: incident-mgmt-hpa
  namespace: gaas-core
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: incident-mgmt
  minReplicas: 3
  maxReplicas: 20
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
    - type: Pods
      pods:
        metric:
          name: http_requests_per_second
        target:
          type: AverageValue
          averageValue: 100
```

**2. Dedicated Workload Scaling (High-Load Domains)**

For domains with extreme load requirements (e.g., national health system processing millions of daily transactions), dedicated service instances can be deployed in the domain's namespace:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: incident-mgmt-healthcare-dedicated
  namespace: gaas-domain-healthcare
spec:
  replicas: 5
  template:
    spec:
      containers:
        - name: incident-mgmt
          image: gaas/incident-mgmt:1.0
          env:
            - name: FIXED_DOMAIN_ID
              value: "healthcare"
            - name: DATABASE_POOL_SIZE
              value: "50"
```

### Resource Quotas and Limits per Domain

Kubernetes ResourceQuotas prevent any single domain from consuming disproportionate cluster resources:

```yaml
apiVersion: v1
kind: ResourceQuota
metadata:
  name: domain-quota
  namespace: gaas-domain-healthcare
spec:
  hard:
    requests.cpu: "32"
    requests.memory: 128Gi
    limits.cpu: "64"
    limits.memory: 256Gi
    persistentvolumeclaims: "20"
    services.loadbalancers: "2"
    pods: "100"

---
apiVersion: v1
kind: LimitRange
metadata:
  name: domain-limits
  namespace: gaas-domain-healthcare
spec:
  limits:
    - type: Container
      default:
        cpu: "500m"
        memory: 512Mi
      defaultRequest:
        cpu: "250m"
        memory: 256Mi
      max:
        cpu: "4"
        memory: 8Gi
```

### Noisy Neighbor Prevention

A "noisy neighbor" is a domain that consumes excessive shared resources, degrading performance for other domains. Prevention mechanisms:

| Mechanism | Implementation | Effect |
|---|---|---|
| **API Rate Limiting** | Kong per-domain rate limits (configurable) | Prevents API call floods |
| **Database Connection Limits** | PgBouncer per-domain connection pools | Prevents connection exhaustion |
| **CPU/Memory Quotas** | Kubernetes ResourceQuota per namespace | Prevents compute monopolization |
| **Query Timeouts** | PostgreSQL `statement_timeout` per domain role | Prevents long-running queries from blocking |
| **Storage Quotas** | Per-domain disk quotas | Prevents storage exhaustion |
| **Event Bus Quotas** | RabbitMQ per-domain queue limits | Prevents message queue flooding |

**PgBouncer per-domain connection pool:**

```ini
[databases]
gaas_healthcare = host=postgres-primary port=5432 dbname=gaas pool_size=50
gaas_education = host=postgres-primary port=5432 dbname=gaas pool_size=30
gaas_justice = host=postgres-primary port=5432 dbname=gaas pool_size=20

[pgbouncer]
pool_mode = transaction
max_client_conn = 5000
default_pool_size = 20
```

**PostgreSQL per-domain query timeout:**

```sql
-- Create a database role per domain with specific settings
CREATE ROLE gaas_healthcare_role;
ALTER ROLE gaas_healthcare_role SET statement_timeout = '30s';
ALTER ROLE gaas_healthcare_role SET lock_timeout = '10s';
ALTER ROLE gaas_healthcare_role SET idle_in_transaction_session_timeout = '60s';
```

---

## Next Steps

This multi-tenancy architecture provides the isolation guarantees required for government platforms while maintaining the cost and operational benefits of shared infrastructure. The following documents build on this foundation:

- **06-integration-apis.md** - API design including multi-tenant routing and cross-domain authentication
- **07-technology-stack.md** - Technology selections that support the multi-tenancy model
- **08-implementation-roadmap.md** - Phased rollout of multi-tenancy features (Phase 3, Months 13-18)
- **09-security-compliance.md** - Detailed security architecture including tenant isolation testing

---

*Document Version: 1.0 | Last Updated: October 2025*
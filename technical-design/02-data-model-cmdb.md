# GaaS Platform - Data Model & CMDB Design

**Document:** 02 - Data Model & Configuration Management Database
**Version:** 1.0
**Date:** October 2025
**Status:** Design Phase

---

## Table of Contents

1. [Database Schema Overview](#database-schema-overview)
2. [Core Entity Models](#core-entity-models)
3. [Service Portfolio Data Model](#service-portfolio-data-model)
4. [CMDB (Configuration Management Database)](#cmdb-configuration-management-database)
5. [Incident/Problem/Change Models](#incidentproblemchange-models)
6. [User & Access Control Models](#user--access-control-models)
7. [Workflow & Automation Models](#workflow--automation-models)
8. [Cost Management Models](#cost-management-models)
9. [Audit & History Models](#audit--history-models)
10. [Database Optimization](#database-optimization)

---

## Database Schema Overview

### Database-Per-Service Pattern

Each microservice owns its database schema (logical separation within PostgreSQL):

```
PostgreSQL Instance
├── gaas_service_catalog     (Service Catalog Service)
├── gaas_incident_mgmt       (Incident Management Service)
├── gaas_change_mgmt         (Change Management Service)
├── gaas_cmdb                (CMDB Service)
├── gaas_workflow            (Workflow Engine Service)
├── gaas_iam                 (IAM Service)
├── gaas_cost_mgmt           (Cost Management Service)
├── gaas_knowledge           (Knowledge Base Service)
└── gaas_audit               (Audit Logging Service)
```

**Why Separate Schemas?**
- **Loose Coupling:** Services can evolve independently
- **Security:** Database-level isolation
- **Scaling:** Can split to separate physical databases later
- **Clear Ownership:** One team owns one schema

### Shared Data Types (PostgreSQL Extensions)

```sql
-- Enable UUID support
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Enable full-text search
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- Enable JSON operators
CREATE EXTENSION IF NOT EXISTS "btree_gin";

-- Common ENUM types (defined in each schema but consistent)
CREATE TYPE priority_level AS ENUM ('critical', 'high', 'medium', 'low');
CREATE TYPE status_type AS ENUM ('new', 'in_progress', 'resolved', 'closed', 'cancelled');
CREATE TYPE environment_type AS ENUM ('production', 'staging', 'development', 'test');
```

---

## Core Entity Models

### Base Table Pattern

All tables follow this pattern for consistency:

```sql
CREATE TABLE example_entity (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Domain isolation (for multi-tenancy)
    domain VARCHAR(100),

    -- Soft delete (never hard delete for audit trail)
    deleted_at TIMESTAMP,

    -- Audit fields
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL, -- FK to users table
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_by UUID NOT NULL, -- FK to users table

    -- Optimistic locking (prevent concurrent update conflicts)
    version INTEGER NOT NULL DEFAULT 1,

    -- Additional entity-specific fields...
);

-- Standard indexes for all tables
CREATE INDEX idx_example_entity_domain ON example_entity(domain) WHERE deleted_at IS NULL;
CREATE INDEX idx_example_entity_created_at ON example_entity(created_at);
```

---

## Service Portfolio Data Model

### Schema: `gaas_service_catalog`

This implements the **5-level service hierarchy** (Business → Technical → Application → Infrastructure → Cost).

#### Services Table

```sql
CREATE TYPE service_type AS ENUM (
    'business',        -- Level 1: Citizen-facing services
    'technical',       -- Level 2: Backend services
    'application',     -- Level 3: Software applications
    'infrastructure'   -- Level 4: Servers, databases, etc.
);

CREATE TYPE service_status AS ENUM (
    'design',          -- Being designed
    'active',          -- In production
    'deprecated',      -- Being phased out
    'retired'          -- No longer in use
);

CREATE TABLE services (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    domain VARCHAR(100) NOT NULL,  -- healthcare, education, justice, etc.

    -- Service identification
    number VARCHAR(50) UNIQUE NOT NULL,  -- SRV0001234
    name VARCHAR(200) NOT NULL,
    description TEXT,

    -- Service hierarchy
    type service_type NOT NULL,
    parent_service_id UUID,  -- FK to services.id (for hierarchy)

    -- Service management
    status service_status NOT NULL DEFAULT 'design',
    owner_id UUID NOT NULL,  -- FK to users.id
    manager_id UUID,         -- FK to users.id (optional)

    -- Service Level Agreement
    sla_target DECIMAL(5,2),  -- e.g., 99.9 for 99.9% uptime

    -- Cost allocation (PPT breakdown)
    cost_people DECIMAL(12,2),      -- Annual cost allocated to People
    cost_process DECIMAL(12,2),     -- Annual cost allocated to Process
    cost_technology DECIMAL(12,2),  -- Annual cost allocated to Technology
    total_cost DECIMAL(12,2) GENERATED ALWAYS AS (cost_people + cost_process + cost_technology) STORED,

    -- Metadata
    metadata JSONB,  -- Flexible attributes specific to service type

    -- Audit fields
    deleted_at TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_by UUID NOT NULL,
    version INTEGER NOT NULL DEFAULT 1,

    CONSTRAINT fk_parent_service FOREIGN KEY (parent_service_id) REFERENCES services(id),
    CONSTRAINT chk_cost_positive CHECK (cost_people >= 0 AND cost_process >= 0 AND cost_technology >= 0)
);

-- Indexes
CREATE INDEX idx_services_domain ON services(domain) WHERE deleted_at IS NULL;
CREATE INDEX idx_services_type ON services(type) WHERE deleted_at IS NULL;
CREATE INDEX idx_services_parent ON services(parent_service_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_services_owner ON services(owner_id);
CREATE INDEX idx_services_status ON services(status) WHERE deleted_at IS NULL;

-- Full-text search
CREATE INDEX idx_services_name_trgm ON services USING gin(name gin_trgm_ops);
CREATE INDEX idx_services_description_trgm ON services USING gin(description gin_trgm_ops);
```

#### Service Relationships Table

```sql
CREATE TYPE service_relationship_type AS ENUM (
    'depends_on',      -- Service A depends on Service B
    'provides_data_to',-- Service A provides data to Service B
    'consumes_data_from', -- Service A consumes data from Service B
    'integrates_with', -- Bidirectional integration
    'replaces',        -- Service A replaces Service B (migration)
    'parent_of'        -- Hierarchical relationship (redundant with parent_service_id but explicit)
);

CREATE TABLE service_relationships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    source_service_id UUID NOT NULL,  -- FK to services.id
    target_service_id UUID NOT NULL,  -- FK to services.id
    relationship_type service_relationship_type NOT NULL,

    description TEXT,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL,

    CONSTRAINT fk_source_service FOREIGN KEY (source_service_id) REFERENCES services(id) ON DELETE CASCADE,
    CONSTRAINT fk_target_service FOREIGN KEY (target_service_id) REFERENCES services(id) ON DELETE CASCADE,
    CONSTRAINT chk_no_self_relationship CHECK (source_service_id != target_service_id)
);

CREATE INDEX idx_service_rel_source ON service_relationships(source_service_id);
CREATE INDEX idx_service_rel_target ON service_relationships(target_service_id);
CREATE INDEX idx_service_rel_type ON service_relationships(relationship_type);
```

#### Service Owners Table

```sql
CREATE TABLE service_stakeholders (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    service_id UUID NOT NULL,  -- FK to services.id
    user_id UUID NOT NULL,     -- FK to users.id

    role VARCHAR(50) NOT NULL,  -- 'owner', 'manager', 'stakeholder', 'contributor'

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL,

    CONSTRAINT fk_service FOREIGN KEY (service_id) REFERENCES services(id) ON DELETE CASCADE,
    CONSTRAINT uq_service_user_role UNIQUE (service_id, user_id, role)
);

CREATE INDEX idx_service_stakeholders_service ON service_stakeholders(service_id);
CREATE INDEX idx_service_stakeholders_user ON service_stakeholders(user_id);
```

---

## CMDB (Configuration Management Database)

### Schema: `gaas_cmdb`

The CMDB tracks Configuration Items (CIs) and their relationships.

#### Configuration Items Table

```sql
CREATE TYPE ci_status AS ENUM ('active', 'inactive', 'retired', 'maintenance');

CREATE TABLE configuration_items (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    domain VARCHAR(100),

    -- CI identification
    number VARCHAR(50) UNIQUE NOT NULL,  -- CI0001234
    name VARCHAR(200) NOT NULL,
    ci_class VARCHAR(100) NOT NULL,  -- 'server', 'database', 'application', 'network_device', etc.

    -- CI details
    status ci_status NOT NULL DEFAULT 'active',
    environment environment_type NOT NULL,

    -- Service linkage (what service does this CI support?)
    service_id UUID,  -- FK to services.id (in service_catalog schema)

    -- Ownership
    owner_id UUID NOT NULL,
    managed_by UUID,  -- FK to users.id (who manages this CI)

    -- Flexible attributes based on CI class
    attributes JSONB NOT NULL DEFAULT '{}',

    -- Examples of attributes by CI class:
    -- For servers: {cpu: "8 cores", ram: "32GB", os: "Ubuntu 22.04", ip: "10.0.1.50"}
    -- For applications: {version: "2.3.1", language: "Node.js", repo: "github.com/..."}
    -- For databases: {engine: "PostgreSQL", version: "15.2", size: "500GB"}

    -- Discovery metadata
    discovered_by VARCHAR(100),  -- e.g., "aws-auto-discovery", "manual"
    last_discovered_at TIMESTAMP,

    -- Audit fields
    deleted_at TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_by UUID NOT NULL,
    version INTEGER NOT NULL DEFAULT 1
);

-- Indexes
CREATE INDEX idx_cis_domain ON configuration_items(domain) WHERE deleted_at IS NULL;
CREATE INDEX idx_cis_class ON configuration_items(ci_class) WHERE deleted_at IS NULL;
CREATE INDEX idx_cis_status ON configuration_items(status) WHERE deleted_at IS NULL;
CREATE INDEX idx_cis_service ON configuration_items(service_id);
CREATE INDEX idx_cis_environment ON configuration_items(environment);

-- GIN index for JSONB attributes (enables fast queries like: WHERE attributes @> '{"os": "Ubuntu"}')
CREATE INDEX idx_cis_attributes ON configuration_items USING gin(attributes);

-- Full-text search
CREATE INDEX idx_cis_name_trgm ON configuration_items USING gin(name gin_trgm_ops);
```

#### CI Relationships Table

```sql
CREATE TYPE ci_relationship_type AS ENUM (
    'runs_on',         -- Application runs on Server
    'depends_on',      -- CI A depends on CI B
    'connects_to',     -- Network connection
    'manages',         -- CI A manages CI B
    'part_of',         -- CI A is part of CI B
    'backed_up_by',    -- CI A is backed up by CI B
    'replicates_to'    -- Data replication relationship
);

CREATE TABLE ci_relationships (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    source_ci_id UUID NOT NULL,   -- FK to configuration_items.id
    target_ci_id UUID NOT NULL,   -- FK to configuration_items.id
    relationship_type ci_relationship_type NOT NULL,

    description TEXT,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL,

    CONSTRAINT fk_source_ci FOREIGN KEY (source_ci_id) REFERENCES configuration_items(id) ON DELETE CASCADE,
    CONSTRAINT fk_target_ci FOREIGN KEY (target_ci_id) REFERENCES configuration_items(id) ON DELETE CASCADE,
    CONSTRAINT chk_no_self_relationship CHECK (source_ci_id != target_ci_id)
);

CREATE INDEX idx_ci_rel_source ON ci_relationships(source_ci_id);
CREATE INDEX idx_ci_rel_target ON ci_relationships(target_ci_id);
CREATE INDEX idx_ci_rel_type ON ci_relationships(relationship_type);
```

#### Impact Analysis Query

```sql
-- Recursive CTE to find all CIs impacted if CI 'X' fails
WITH RECURSIVE impact_chain AS (
    -- Base case: the failing CI
    SELECT id, name, ci_class, 0 as depth
    FROM configuration_items
    WHERE id = 'X'

    UNION

    -- Recursive case: find CIs that depend on CIs in impact_chain
    SELECT ci.id, ci.name, ci.class, ic.depth + 1
    FROM configuration_items ci
    JOIN ci_relationships rel ON rel.source_ci_id = ci.id
    JOIN impact_chain ic ON rel.target_ci_id = ic.id
    WHERE rel.relationship_type IN ('depends_on', 'runs_on')
      AND ic.depth < 10  -- Prevent infinite loops
)
SELECT * FROM impact_chain ORDER BY depth, name;
```

---

## Incident/Problem/Change Models

### Schema: `gaas_incident_mgmt`

#### Incidents Table

```sql
CREATE TYPE incident_priority AS ENUM ('critical', 'high', 'medium', 'low');
CREATE TYPE incident_status AS ENUM ('new', 'in_progress', 'resolved', 'closed', 'cancelled');
CREATE TYPE incident_impact AS ENUM ('high', 'medium', 'low');  -- How many users affected
CREATE TYPE incident_urgency AS ENUM ('high', 'medium', 'low'); -- How quickly must be resolved

CREATE TABLE incidents (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    domain VARCHAR(100),

    -- Incident identification
    number VARCHAR(50) UNIQUE NOT NULL,  -- INC0001234
    short_description VARCHAR(200) NOT NULL,
    description TEXT,

    -- Categorization
    priority incident_priority NOT NULL,
    impact incident_impact NOT NULL,
    urgency incident_urgency NOT NULL,
    category VARCHAR(100),  -- e.g., 'network', 'application', 'database'
    subcategory VARCHAR(100),

    -- Status
    status incident_status NOT NULL DEFAULT 'new',

    -- Assignment
    assigned_to UUID,  -- FK to users.id
    assigned_group VARCHAR(100),  -- e.g., 'L2-Network-Team'

    -- Service/CI linkage
    service_id UUID,  -- FK to services.id (which service is affected?)
    ci_id UUID,       -- FK to configuration_items.id (which CI is failing?)

    -- SLA tracking
    sla_due TIMESTAMP,  -- When must this be resolved per SLA
    sla_breached BOOLEAN DEFAULT FALSE,

    -- Resolution
    resolution_notes TEXT,
    resolved_at TIMESTAMP,
    resolved_by UUID,  -- FK to users.id

    closed_at TIMESTAMP,
    closed_by UUID,

    -- Problem linkage (if root cause identified)
    problem_id UUID,  -- FK to problems.id

    -- Audit fields
    deleted_at TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL,  -- Person who reported incident
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_by UUID NOT NULL,
    version INTEGER NOT NULL DEFAULT 1
);

-- Indexes
CREATE INDEX idx_incidents_domain ON incidents(domain) WHERE deleted_at IS NULL;
CREATE INDEX idx_incidents_status ON incidents(status) WHERE status != 'closed';
CREATE INDEX idx_incidents_priority ON incidents(priority) WHERE status IN ('new', 'in_progress');
CREATE INDEX idx_incidents_assigned_to ON incidents(assigned_to) WHERE status IN ('new', 'in_progress');
CREATE INDEX idx_incidents_service ON incidents(service_id);
CREATE INDEX idx_incidents_ci ON incidents(ci_id);
CREATE INDEX idx_incidents_sla_due ON incidents(sla_due) WHERE status IN ('new', 'in_progress') AND sla_breached = FALSE;
CREATE INDEX idx_incidents_created_at ON incidents(created_at);

-- Full-text search
CREATE INDEX idx_incidents_short_desc_trgm ON incidents USING gin(short_description gin_trgm_ops);
CREATE INDEX idx_incidents_desc_trgm ON incidents USING gin(description gin_trgm_ops);
```

#### Problems Table

```sql
CREATE TYPE problem_status AS ENUM ('new', 'investigating', 'root_cause_found', 'fix_in_progress', 'resolved', 'closed');

CREATE TABLE problems (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    domain VARCHAR(100),

    number VARCHAR(50) UNIQUE NOT NULL,  -- PRB0001234
    short_description VARCHAR(200) NOT NULL,
    description TEXT,

    status problem_status NOT NULL DEFAULT 'new',
    priority incident_priority NOT NULL,

    -- Assignment
    assigned_to UUID,
    assigned_group VARCHAR(100),

    -- Root cause analysis
    root_cause TEXT,
    workaround TEXT,

    -- Service/CI linkage
    service_id UUID,
    ci_id UUID,

    -- Resolution
    permanent_fix TEXT,
    resolved_at TIMESTAMP,
    resolved_by UUID,

    closed_at TIMESTAMP,
    closed_by UUID,

    -- Audit fields
    deleted_at TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_by UUID NOT NULL,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_problems_domain ON problems(domain) WHERE deleted_at IS NULL;
CREATE INDEX idx_problems_status ON problems(status) WHERE status != 'closed';
CREATE INDEX idx_problems_service ON problems(service_id);
```

### Schema: `gaas_change_mgmt`

#### Changes Table

```sql
CREATE TYPE change_type AS ENUM ('standard', 'normal', 'emergency');
CREATE TYPE change_status AS ENUM (
    'draft', 'submitted', 'under_review', 'approved', 'rejected',
    'scheduled', 'implementing', 'implemented', 'closed', 'cancelled'
);
CREATE TYPE change_risk AS ENUM ('high', 'medium', 'low');

CREATE TABLE changes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    domain VARCHAR(100),

    number VARCHAR(50) UNIQUE NOT NULL,  -- CHG0001234
    short_description VARCHAR(200) NOT NULL,
    description TEXT,

    type change_type NOT NULL,
    status change_status NOT NULL DEFAULT 'draft',
    risk change_risk NOT NULL,

    -- Assignment
    requested_by UUID NOT NULL,
    assigned_to UUID,  -- Change implementer

    -- Service/CI linkage
    service_id UUID,
    affected_cis UUID[],  -- Array of CI IDs affected by this change

    -- Scheduling
    planned_start TIMESTAMP,
    planned_end TIMESTAMP,
    actual_start TIMESTAMP,
    actual_end TIMESTAMP,

    -- Implementation
    implementation_plan TEXT,
    rollback_plan TEXT,
    test_plan TEXT,

    -- Approval (workflow_id links to workflow engine)
    workflow_id UUID,  -- FK to workflow instances
    approval_status VARCHAR(50),  -- 'pending', 'approved', 'rejected'

    -- Outcome
    implementation_notes TEXT,
    success BOOLEAN,

    closed_at TIMESTAMP,
    closed_by UUID,

    -- Audit fields
    deleted_at TIMESTAMP,
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_by UUID NOT NULL,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_changes_domain ON changes(domain) WHERE deleted_at IS NULL;
CREATE INDEX idx_changes_status ON changes(status) WHERE status NOT IN ('closed', 'cancelled');
CREATE INDEX idx_changes_type ON changes(type);
CREATE INDEX idx_changes_planned_start ON changes(planned_start);
CREATE INDEX idx_changes_service ON changes(service_id);
```

---

## User & Access Control Models

### Schema: `gaas_iam`

#### Users Table

```sql
CREATE TYPE user_status AS ENUM ('active', 'inactive', 'locked', 'pending_verification');

CREATE TABLE users (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- User identification
    email VARCHAR(255) UNIQUE NOT NULL,
    username VARCHAR(100) UNIQUE,
    name VARCHAR(200) NOT NULL,

    -- Authentication (if using local auth, not SSO)
    password_hash VARCHAR(255),  -- bcrypt hash
    password_updated_at TIMESTAMP,

    -- Domain isolation (NULL = global user, e.g., platform admin)
    domain VARCHAR(100),

    -- Status
    status user_status NOT NULL DEFAULT 'active',

    -- Metadata
    phone VARCHAR(50),
    language VARCHAR(10) DEFAULT 'en',
    timezone VARCHAR(50) DEFAULT 'UTC',

    -- Security
    last_login_at TIMESTAMP,
    failed_login_attempts INTEGER DEFAULT 0,
    locked_until TIMESTAMP,

    -- Audit fields
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    deleted_at TIMESTAMP
);

CREATE INDEX idx_users_email ON users(email) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_domain ON users(domain) WHERE deleted_at IS NULL;
CREATE INDEX idx_users_status ON users(status);
```

#### Roles Table

```sql
CREATE TABLE roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    name VARCHAR(100) NOT NULL,
    description TEXT,

    -- Domain isolation (NULL = global role, e.g., 'platform_admin')
    domain VARCHAR(100),

    -- Permissions (array of permission strings)
    permissions JSONB NOT NULL DEFAULT '[]',
    -- Example: ["service.create", "service.edit", "incident.view", "incident.assign"]

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),

    CONSTRAINT uq_role_name_domain UNIQUE (name, domain)
);

CREATE INDEX idx_roles_domain ON roles(domain);
CREATE INDEX idx_roles_permissions ON roles USING gin(permissions);
```

#### User Roles Table

```sql
CREATE TABLE user_roles (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    user_id UUID NOT NULL,
    role_id UUID NOT NULL,

    -- Scoping (e.g., role applies only to specific service or CI)
    scope_type VARCHAR(50),  -- 'global', 'service', 'domain'
    scope_id UUID,           -- FK to services.id or other entity

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL,

    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE,
    CONSTRAINT uq_user_role_scope UNIQUE (user_id, role_id, scope_type, scope_id)
);

CREATE INDEX idx_user_roles_user ON user_roles(user_id);
CREATE INDEX idx_user_roles_role ON user_roles(role_id);
```

---

## Workflow & Automation Models

### Schema: `gaas_workflow`

#### Workflow Definitions Table

```sql
CREATE TABLE workflow_definitions (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    name VARCHAR(200) NOT NULL,
    description TEXT,

    -- Workflow trigger (what initiates this workflow?)
    trigger_type VARCHAR(50) NOT NULL,  -- 'manual', 'event', 'schedule'
    trigger_config JSONB,  -- Event name or cron schedule

    -- Workflow steps (JSON array defining the workflow)
    steps JSONB NOT NULL,
    -- Example: [
    --   {step: 1, type: "approval", approver_role: "manager", sla_hours: 24},
    --   {step: 2, type: "task", assignee_role: "technician", sla_hours: 48},
    --   {step: 3, type: "notification", template: "completion_email"}
    -- ]

    domain VARCHAR(100),

    active BOOLEAN DEFAULT TRUE,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL,
    updated_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_by UUID NOT NULL,
    version INTEGER NOT NULL DEFAULT 1
);

CREATE INDEX idx_workflow_defs_domain ON workflow_definitions(domain);
CREATE INDEX idx_workflow_defs_trigger ON workflow_definitions(trigger_type);
```

#### Workflow Instances Table

```sql
CREATE TYPE workflow_instance_status AS ENUM ('running', 'completed', 'failed', 'cancelled');

CREATE TABLE workflow_instances (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    workflow_definition_id UUID NOT NULL,

    -- Context (what entity triggered this workflow?)
    context_type VARCHAR(50),  -- 'incident', 'change', 'service', etc.
    context_id UUID,           -- ID of the triggering entity

    status workflow_instance_status NOT NULL DEFAULT 'running',
    current_step INTEGER DEFAULT 1,

    -- Variables (workflow state passed between steps)
    variables JSONB DEFAULT '{}',

    started_at TIMESTAMP NOT NULL DEFAULT NOW(),
    started_by UUID,

    completed_at TIMESTAMP,

    CONSTRAINT fk_workflow_def FOREIGN KEY (workflow_definition_id) REFERENCES workflow_definitions(id)
);

CREATE INDEX idx_workflow_inst_def ON workflow_instances(workflow_definition_id);
CREATE INDEX idx_workflow_inst_status ON workflow_instances(status);
CREATE INDEX idx_workflow_inst_context ON workflow_instances(context_type, context_id);
```

---

## Cost Management Models

### Schema: `gaas_cost_mgmt`

#### Cost Entries Table

```sql
CREATE TYPE cost_category AS ENUM ('people', 'process', 'technology');

CREATE TABLE cost_entries (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    domain VARCHAR(100) NOT NULL,

    -- Cost allocation
    service_id UUID,  -- FK to services.id (what service is this cost for?)
    ci_id UUID,       -- FK to configuration_items.id (what CI incurred this cost?)

    -- Cost details
    category cost_category NOT NULL,
    amount DECIMAL(12,2) NOT NULL,
    currency VARCHAR(3) DEFAULT 'USD',

    -- Time period
    period_start DATE NOT NULL,
    period_end DATE NOT NULL,

    -- Description
    description TEXT,

    -- Metadata (vendor, invoice number, etc.)
    metadata JSONB,

    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    created_by UUID NOT NULL
);

CREATE INDEX idx_cost_entries_domain ON cost_entries(domain);
CREATE INDEX idx_cost_entries_service ON cost_entries(service_id);
CREATE INDEX idx_cost_entries_category ON cost_entries(category);
CREATE INDEX idx_cost_entries_period ON cost_entries(period_start, period_end);
```

---

## Audit & History Models

### Schema: `gaas_audit`

#### Audit Log Table

```sql
CREATE TABLE audit_log (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),

    -- Who performed the action
    user_id UUID,
    user_email VARCHAR(255),

    -- What action was performed
    action VARCHAR(100) NOT NULL,  -- 'create', 'update', 'delete', 'login', etc.
    entity_type VARCHAR(100) NOT NULL,  -- 'service', 'incident', 'user', etc.
    entity_id UUID,

    -- Details
    changes JSONB,  -- Before/after values for updates
    -- Example: {before: {status: "new"}, after: {status: "in_progress"}}

    -- Context
    ip_address INET,
    user_agent TEXT,
    domain VARCHAR(100),

    -- When
    timestamp TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX idx_audit_log_user ON audit_log(user_id);
CREATE INDEX idx_audit_log_entity ON audit_log(entity_type, entity_id);
CREATE INDEX idx_audit_log_timestamp ON audit_log(timestamp);
CREATE INDEX idx_audit_log_domain ON audit_log(domain);

-- Partition by month for performance (optional but recommended)
-- ALTER TABLE audit_log PARTITION BY RANGE (timestamp);
```

---

## Database Optimization

### Indexing Strategy

**1. Primary Keys:** All tables use UUID primary keys (good for distributed systems)

**2. Foreign Keys:** All foreign keys indexed automatically

**3. Query Optimization:**
- Index columns used in WHERE clauses
- Index columns used in ORDER BY
- Partial indexes for soft-deleted records (`WHERE deleted_at IS NULL`)

**4. Full-Text Search:**
- `pg_trgm` extension for fuzzy text search
- GIN indexes on text columns

**5. JSONB Optimization:**
- GIN indexes on JSONB columns enable fast queries
- Use `@>` operator: `WHERE attributes @> '{"key": "value"}'`

### Partitioning Strategy

**Large Tables to Partition:**
- `audit_log` - Partition by month
- `cost_entries` - Partition by year
- `incidents` - Partition by year (if millions of incidents)

### Connection Pooling

**PgBouncer Configuration:**
```ini
[databases]
gaas = host=postgres-primary port=5432 dbname=gaas

[pgbouncer]
pool_mode = transaction
max_client_conn = 10000
default_pool_size = 100
```

### Backup Strategy

**1. Continuous WAL Archiving:**
- Archive to S3/MinIO every 5 minutes
- Enables point-in-time recovery (PITR)

**2. Daily Full Backups:**
- Run at 2 AM UTC
- Compressed with `pg_dump --format=custom`
- Retained for 30 days

**3. Retention:**
- Full backups: 30 days
- WAL archives: 30 days
- Critical compliance data: 7 years

---

## Example Queries

### Query 1: Get Service Hierarchy for Healthcare Domain

```sql
WITH RECURSIVE service_tree AS (
    -- Base case: top-level business services
    SELECT id, name, type, parent_service_id, 0 as depth,
           ARRAY[name] as path
    FROM services
    WHERE domain = 'healthcare'
      AND parent_service_id IS NULL
      AND deleted_at IS NULL

    UNION ALL

    -- Recursive case: child services
    SELECT s.id, s.name, s.type, s.parent_service_id, st.depth + 1,
           st.path || s.name
    FROM services s
    JOIN service_tree st ON s.parent_service_id = st.id
    WHERE s.deleted_at IS NULL
)
SELECT depth, type, name, total_cost
FROM service_tree
JOIN services USING (id)
ORDER BY path;
```

### Query 2: Get All Open Incidents About to Breach SLA

```sql
SELECT
    i.number,
    i.short_description,
    i.priority,
    s.name as service_name,
    i.sla_due,
    EXTRACT(EPOCH FROM (i.sla_due - NOW())) / 3600 as hours_until_breach,
    u.name as assigned_to
FROM incidents i
LEFT JOIN services s ON i.service_id = s.id
LEFT JOIN users u ON i.assigned_to = u.id
WHERE i.status IN ('new', 'in_progress')
  AND i.sla_due <= NOW() + INTERVAL '4 hours'
  AND i.sla_breached = FALSE
  AND i.deleted_at IS NULL
ORDER BY i.sla_due ASC;
```

### Query 3: Calculate PPT Balance for Each Domain

```sql
SELECT
    domain,
    SUM(cost_people) as total_people_cost,
    SUM(cost_process) as total_process_cost,
    SUM(cost_technology) as total_technology_cost,
    SUM(total_cost) as total_cost,
    ROUND(100.0 * SUM(cost_people) / NULLIF(SUM(total_cost), 0), 1) as people_pct,
    ROUND(100.0 * SUM(cost_process) / NULLIF(SUM(total_cost), 0), 1) as process_pct,
    ROUND(100.0 * SUM(cost_technology) / NULLIF(SUM(total_cost), 0), 1) as technology_pct
FROM services
WHERE deleted_at IS NULL
  AND status = 'active'
GROUP BY domain
ORDER BY total_cost DESC;
```

---

## Next Steps

This data model provides the foundation for the GaaS Platform database layer. The next documents detail:

- **03-service-portfolio-management.md** - How to implement the 5-level hierarchy in code
- **04-workflow-engine-automation.md** - How the workflow engine uses these tables
- **05-multi-tenancy-isolation.md** - Row-level security for domain isolation
- **06-integration-apis.md** - API endpoints that interact with this data model

---

*Document Version: 1.0 | Last Updated: October 2025*

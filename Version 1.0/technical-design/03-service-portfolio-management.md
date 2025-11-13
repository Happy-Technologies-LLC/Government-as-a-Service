# GaaS Platform - Service Portfolio Management Implementation

**Document:** 03 - Service Portfolio Management
**Version:** 1.0
**Date:** October 2025

---

## Overview

This document describes the implementation of the **5-level service hierarchy** that enables governments to achieve complete cost transparency from citizen-facing services down to individual infrastructure components.

## The 5-Level Hierarchy

```
LEVEL 1: BUSINESS SERVICES (Citizen-Facing)
  └─ Example: "Healthcare Insurance"
      ├─ Cost: $45M/year (People: $20M, Process: $15M, Tech: $10M)
      └─ Owner: Healthcare CIO

LEVEL 2: TECHNICAL SERVICES (Supporting)
  └─ Example: "Eligibility Verification API"
      ├─ Cost: $8M/year
      └─ Supports: Healthcare Insurance (L1)

LEVEL 3: APPLICATIONS
  └─ Example: "Claims Processing System"
      ├─ Cost: $5M/year
      └─ Delivers: Eligibility Verification API (L2)

LEVEL 4: INFRASTRUCTURE
  └─ Example: "Claims API Server Cluster (50 EC2 instances)"
      ├─ Cost: $3M/year
      └─ Hosts: Claims Processing System (L3)

LEVEL 5: COST ALLOCATION
  └─ PPT Breakdown for each service at every level
      ├─ People: Staff costs (developers, operators, support)
      ├─ Process: Governance, training, documentation
      └─ Technology: Licenses, infrastructure, cloud costs
```

## API Endpoints

### Create Service

```typescript
POST /api/v1/services

Request Body:
{
  "name": "Healthcare Insurance",
  "type": "business",  // business | technical | application | infrastructure
  "domain": "healthcare",
  "parent_service_id": null,  // Top-level service
  "owner_id": "uuid-of-healthcare-cio",
  "cost_people": 20000000,
  "cost_process": 15000000,
  "cost_technology": 10000000,
  "sla_target": 99.9,
  "metadata": {
    "citizen_facing": true,
    "annual_transactions": 5000000
  }
}

Response: 201 Created
{
  "id": "srv-uuid-12345",
  "number": "SRV0001234",
  "total_cost": 45000000,
  ...
}
```

### Get Service Hierarchy

```typescript
GET /api/v1/services/{id}/hierarchy

// Returns full tree: service + all child services (5 levels deep)
Response: 200 OK
{
  "service": { ... },
  "children": [
    {
      "service": { "type": "technical", "name": "Eligibility API" },
      "children": [
        {
          "service": { "type": "application", "name": "Claims System" },
          "children": [ ... ]
        }
      ]
    }
  ],
  "total_descendants": 47,
  "total_cost_rollup": 45000000
}
```

### Get Cost Breakdown by Domain

```typescript
GET /api/v1/costs/domains/healthcare

Response: 200 OK
{
  "domain": "healthcare",
  "total_cost": 120000000,
  "ppt_breakdown": {
    "people": { "cost": 48000000, "percentage": 40 },
    "process": { "cost": 48000000, "percentage": 40 },
    "technology": { "cost": 24000000, "percentage": 20 }
  },
  "top_services": [
    { "name": "Healthcare Insurance", "cost": 45000000 },
    { "name": "Medical Research Funding", "cost": 30000000 },
    { "name": "Public Health Programs", "cost": 25000000 }
  ],
  "infrastructure_summary": {
    "servers": 250,
    "databases": 15,
    "annual_cloud_cost": 18000000
  }
}
```

## Service Lifecycle

```typescript
// Service states: design → active → deprecated → retired

// 1. Design: Service is being planned
POST /api/v1/services
{ "status": "design", ... }

// 2. Activate: Service goes live
PATCH /api/v1/services/{id}
{ "status": "active" }

// 3. Deprecate: Service being phased out (new services should use replacement)
PATCH /api/v1/services/{id}
{
  "status": "deprecated",
  "metadata": { "replacement_service_id": "srv-new-uuid" }
}

// 4. Retire: Service no longer in use
PATCH /api/v1/services/{id}
{ "status": "retired" }

// 5. Soft Delete: Kept for audit trail
DELETE /api/v1/services/{id}
// Sets deleted_at timestamp, not actually removed from database
```

## TBM Cost Allocation

### Monthly Cost Import

```typescript
POST /api/v1/costs/import

// Import costs from finance system (CSV or API)
Request Body:
{
  "source": "SAP Finance System",
  "period_start": "2025-01-01",
  "period_end": "2025-01-31",
  "entries": [
    {
      "service_id": "srv-healthcare-insurance",
      "category": "people",
      "amount": 1666666.67,  // $20M / 12 months
      "description": "Healthcare Insurance Team Salaries"
    },
    {
      "service_id": "srv-healthcare-insurance",
      "category": "technology",
      "ci_id": "ci-claims-api-cluster",
      "amount": 250000,
      "description": "AWS EC2 charges for Claims API"
    },
    ...
  ]
}
```

### PPT Balance Dashboard

```typescript
GET /api/v1/dashboards/ppt-balance

Response: 200 OK
{
  "organization_wide": {
    "total_cost": 500000000,
    "ppt_breakdown": {
      "people": { "cost": 200000000, "percentage": 40, "target": 40, "variance": 0 },
      "process": { "cost": 200000000, "percentage": 40, "target": 40, "variance": 0 },
      "technology": { "cost": 100000000, "percentage": 20, "target": 20, "variance": 0 }
    },
    "status": "balanced",  // balanced | imbalanced | warning
    "message": "Organization is within ±5% of 40-40-20 target"
  },
  "by_domain": [
    {
      "domain": "healthcare",
      "ppt_breakdown": { ... },
      "status": "balanced"
    },
    {
      "domain": "education",
      "ppt_breakdown": { "people": 30, "process": 25, "technology": 45 },
      "status": "imbalanced",
      "message": "Technology investment 25% above target (45% vs 20%)"
    }
  ]
}
```

---

*Document Version: 1.0 | Last Updated: October 2025*

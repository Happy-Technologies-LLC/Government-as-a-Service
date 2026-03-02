# GaaS Platform - Integration Framework & APIs

**Document:** 06 - Integration Framework & APIs
**Version:** 1.0
**Date:** October 2025
**Status:** Design Phase

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [API Architecture](#api-architecture)
3. [API Design Standards](#api-design-standards)
4. [Authentication & Authorization](#authentication--authorization)
5. [X-Road Compatibility](#x-road-compatibility)
6. [Integration Patterns](#integration-patterns)
7. [Event Bus Architecture](#event-bus-architecture)
8. [API Gateway Configuration](#api-gateway-configuration)
9. [Developer Portal](#developer-portal)
10. [API Lifecycle Management](#api-lifecycle-management)

---

## Executive Summary

Government interoperability is the single greatest technical challenge in digital transformation. A citizen applying for healthcare benefits may need their identity verified by the Ministry of Interior, their employment status checked by the Ministry of Labor, and their tax records retrieved from the Ministry of Finance -- all within a single transaction. Without a unified API strategy, these interactions devolve into fragile point-to-point integrations, manual data re-entry, and multi-week processing times.

The GaaS Platform adopts an **API-first design philosophy**: every capability the platform offers is exposed through a well-documented, versioned, and secured API before any user interface is built on top of it. This ensures that:

- **Any system can integrate.** Third-party applications, legacy government systems, citizen-built tools, and partner platforms all interact through the same APIs.
- **Multi-channel delivery is natural.** Web portals, mobile apps, chatbots, kiosks, and call centers all consume the same backend APIs.
- **Government-to-government exchange is standardized.** Cross-agency and cross-border data exchange follows consistent patterns inspired by Estonia's X-Road and the EU's eIDAS framework.
- **The platform is future-proof.** New channels, new partners, and new use cases require no backend changes -- only new API consumers.

This document specifies the API architecture, design standards, authentication model, integration patterns, event bus design, and developer portal for the GaaS Platform.

---

## API Architecture

### Protocol Selection

The GaaS Platform uses four communication protocols, each optimized for a specific interaction pattern:

| Protocol | Use Case | Format | Transport |
|---|---|---|---|
| **REST (OpenAPI 3.0)** | Primary external API, CRUD operations, citizen portal | JSON | HTTPS |
| **GraphQL** | Complex queries (service hierarchy, CMDB navigation, dashboard data) | JSON | HTTPS |
| **gRPC** | Internal microservice-to-microservice communication | Protocol Buffers | HTTP/2 |
| **WebSocket** | Real-time updates (dashboards, notifications, status pages) | JSON | WSS |
| **Webhooks** | Async notifications to external systems | JSON | HTTPS (outbound) |

### Architecture Diagram

```
External Consumers                         Internal Services
┌────────────────────┐                     ┌────────────────────┐
│ Citizen Portal     │                     │ Service Catalog    │
│ (React SPA)        │──┐                  │ Service            │
└────────────────────┘  │                  └────────────────────┘
                        │                           ▲
┌────────────────────┐  │  ┌──────────────┐        │ gRPC
│ Mobile App         │──┼─►│  API Gateway │────────┤
│ (React Native)     │  │  │  (Kong)      │        │
└────────────────────┘  │  │              │  ┌─────┴──────────────┐
                        │  │  - Auth      │  │ Incident Mgmt      │
┌────────────────────┐  │  │  - Rate Limit│  │ Service             │
│ Partner Systems    │──┤  │  - Routing   │  └────────────────────┘
│ (M2M API clients)  │  │  │  - Transform │           ▲
└────────────────────┘  │  └──────┬───────┘           │ gRPC
                        │         │            ┌──────┴──────────────┐
┌────────────────────┐  │         │            │ Change Mgmt         │
│ Legacy Systems     │──┘         │ REST /     │ Service             │
│ (SOAP bridge)      │           │ GraphQL    └────────────────────┘
└────────────────────┘           │
                                  ▼
                        ┌──────────────────┐
                        │  GraphQL Gateway  │    ┌────────────────┐
                        │  (Apollo Server)  │───►│ Event Bus      │
                        └──────────────────┘    │ (RabbitMQ /    │
                                                 │  Kafka)        │
                                                 └───────┬────────┘
                                                         │
                                              ┌──────────┴──────────┐
                                              │                     │
                                         ┌────▼─────┐    ┌─────────▼──┐
                                         │Notification│   │ Analytics  │
                                         │ Service   │    │ Service    │
                                         └──────────┘    └────────────┘
```

### REST API (Primary Interface)

All external-facing operations are available via RESTful APIs documented with OpenAPI 3.0 specifications. The REST API covers:

- **Service Portfolio:** CRUD for services, hierarchy navigation, cost allocation
- **Service Management:** Incidents, problems, changes, service requests
- **CMDB:** Configuration items, relationships, impact analysis
- **Workflow:** Workflow definitions, instances, task completion
- **IAM:** Users, roles, permissions, authentication
- **Analytics:** Dashboards, reports, metrics
- **Public:** Unauthenticated endpoints for citizen-facing dashboards

### GraphQL API (Complex Queries)

GraphQL is available alongside REST for scenarios where clients need to fetch deeply nested or interconnected data in a single request.

**GraphQL schema (excerpt):**

```graphql
type Service {
  id: ID!
  number: String!
  name: String!
  type: ServiceType!
  domain: String!
  status: ServiceStatus!
  owner: User!
  parentService: Service
  childServices: [Service!]!
  incidents(status: IncidentStatus): [Incident!]!
  configurationItems: [ConfigurationItem!]!
  costBreakdown: CostBreakdown!
  slaCompliance: SLACompliance!
}

type Query {
  service(id: ID!): Service
  services(
    domain: String
    type: ServiceType
    status: ServiceStatus
    first: Int
    after: String
  ): ServiceConnection!

  serviceHierarchy(rootServiceId: ID!, depth: Int = 5): ServiceTree!

  cmdbImpactAnalysis(ciId: ID!): ImpactAnalysisResult!
}

type Mutation {
  createIncident(input: CreateIncidentInput!): Incident!
  updateIncident(id: ID!, input: UpdateIncidentInput!): Incident!
  approveChange(changeId: ID!, notes: String): Change!
}

type Subscription {
  incidentUpdated(serviceId: ID): Incident!
  serviceStatusChanged(domain: String): ServiceStatusEvent!
}
```

**Example query -- single request fetches service with children, incidents, and costs:**

```graphql
query ServiceDashboard($serviceId: ID!) {
  service(id: $serviceId) {
    name
    type
    status
    owner { name email }
    childServices {
      name
      type
      status
      costBreakdown { people process technology total }
    }
    incidents(status: IN_PROGRESS) {
      number
      shortDescription
      priority
      assignedTo { name }
      slaDue
    }
    costBreakdown {
      people
      process
      technology
      total
      pptBalance { peoplePercent processPercent technologyPercent status }
    }
  }
}
```

### gRPC (Internal Communication)

Microservices communicate internally via gRPC for performance-critical paths. gRPC provides:

- **Strong typing:** Protocol Buffer schemas enforce contract compliance
- **Performance:** Binary serialization and HTTP/2 multiplexing
- **Streaming:** Server-side and bidirectional streaming for real-time data
- **Code generation:** Client and server stubs auto-generated in all languages

**Example .proto definition:**

```protobuf
syntax = "proto3";
package gaas.incident;

service IncidentService {
  rpc GetIncident(GetIncidentRequest) returns (Incident);
  rpc ListIncidents(ListIncidentsRequest) returns (ListIncidentsResponse);
  rpc CreateIncident(CreateIncidentRequest) returns (Incident);
  rpc UpdateIncident(UpdateIncidentRequest) returns (Incident);
  rpc StreamIncidentUpdates(StreamRequest) returns (stream IncidentEvent);
}

message Incident {
  string id = 1;
  string number = 2;
  string short_description = 3;
  string description = 4;
  Priority priority = 5;
  Status status = 6;
  string domain_id = 7;
  string service_id = 8;
  string assigned_to = 9;
  google.protobuf.Timestamp sla_due = 10;
  google.protobuf.Timestamp created_at = 11;
}

enum Priority {
  PRIORITY_UNSPECIFIED = 0;
  CRITICAL = 1;
  HIGH = 2;
  MEDIUM = 3;
  LOW = 4;
}
```

---

## API Design Standards

### URI Conventions

All REST API endpoints follow a consistent URI structure:

```
/api/{version}/{domain-context}/{resource}[/{id}][/{sub-resource}]
```

**Examples:**

| Operation | Method | URI |
|---|---|---|
| List services | GET | `/api/v1/services` |
| Create service | POST | `/api/v1/services` |
| Get specific service | GET | `/api/v1/services/{id}` |
| Update service | PATCH | `/api/v1/services/{id}` |
| Delete service | DELETE | `/api/v1/services/{id}` |
| Get service hierarchy | GET | `/api/v1/services/{id}/hierarchy` |
| List incidents for service | GET | `/api/v1/services/{id}/incidents` |
| Get CMDB impact analysis | GET | `/api/v1/cmdb/cis/{id}/impact-analysis` |
| Public national dashboard | GET | `/api/public/v1/dashboard/national` |

**Conventions:**
- Resources are plural nouns (`/services`, `/incidents`, `/changes`)
- No verbs in URIs (use HTTP methods instead)
- Sub-resources for relationships (`/services/{id}/incidents`)
- Public endpoints use `/api/public/v1/` prefix (no authentication required)
- Admin endpoints use `/api/admin/v1/` prefix (platform admin role required)

### HTTP Method Semantics

| Method | Semantics | Idempotent | Request Body | Response |
|---|---|---|---|---|
| **GET** | Retrieve resource(s) | Yes | No | 200 OK |
| **POST** | Create new resource | No | Yes | 201 Created |
| **PATCH** | Partial update | Yes | Yes (partial) | 200 OK |
| **PUT** | Full replacement | Yes | Yes (complete) | 200 OK |
| **DELETE** | Remove resource (soft delete) | Yes | No | 204 No Content |

### Pagination, Filtering, and Sorting

**Pagination (cursor-based for performance):**

```
GET /api/v1/incidents?limit=25&cursor=eyJpZCI6ImluYy0xMjM0NSJ9

Response:
{
  "data": [ ... ],
  "pagination": {
    "limit": 25,
    "has_next": true,
    "next_cursor": "eyJpZCI6ImluYy0xMjM3MCJ9",
    "has_previous": true,
    "previous_cursor": "eyJpZCI6ImluYy0xMjMyMCJ9",
    "total_count": 1847
  }
}
```

**Filtering:**

```
GET /api/v1/incidents?status=in_progress&priority=critical,high&service_id=srv-123
GET /api/v1/incidents?created_at.gte=2025-10-01&created_at.lte=2025-10-31
GET /api/v1/services?type=business&domain=healthcare
```

**Sorting:**

```
GET /api/v1/incidents?sort=-priority,created_at
# - prefix = descending; no prefix = ascending
```

### Error Response Format (RFC 7807)

All errors follow the RFC 7807 Problem Details specification:

```json
{
  "type": "https://docs.gaas.global/errors/validation-error",
  "title": "Validation Error",
  "status": 422,
  "detail": "The request body contains invalid fields.",
  "instance": "/api/v1/incidents",
  "request_id": "req_a1b2c3d4e5f6",
  "timestamp": "2025-10-20T14:32:00Z",
  "errors": [
    {
      "field": "priority",
      "message": "Must be one of: critical, high, medium, low",
      "code": "INVALID_ENUM_VALUE"
    },
    {
      "field": "service_id",
      "message": "Service with ID 'srv-invalid' not found",
      "code": "RESOURCE_NOT_FOUND"
    }
  ]
}
```

**Standard error codes:**

| HTTP Status | Error Type | When Used |
|---|---|---|
| 400 | `bad-request` | Malformed request syntax |
| 401 | `unauthorized` | Missing or invalid authentication |
| 403 | `forbidden` | Authenticated but insufficient permissions |
| 404 | `not-found` | Resource does not exist (or not visible to caller) |
| 409 | `conflict` | Optimistic locking conflict (version mismatch) |
| 422 | `validation-error` | Request body fails validation |
| 429 | `rate-limit-exceeded` | Too many requests |
| 500 | `internal-error` | Unexpected server error |
| 503 | `service-unavailable` | Service temporarily unavailable |

### Rate Limiting and Throttling

Rate limits are enforced at the API Gateway layer and vary by consumer type:

| Consumer Type | Rate Limit | Burst | Scope |
|---|---|---|---|
| **Authenticated User** | 1,000 req/hour | 50 req/second | Per user |
| **Domain (Aggregate)** | 50,000 req/hour | 500 req/second | Per domain |
| **M2M API Client** | 10,000 req/hour | 100 req/second | Per API key |
| **Public API (Unauthenticated)** | 100 req/hour | 10 req/second | Per IP address |
| **Public API (API Key)** | 5,000 req/hour | 50 req/second | Per API key |

**Rate limit response headers:**

```
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 847
X-RateLimit-Reset: 1698249600
Retry-After: 3600  (only on 429 responses)
```

### Versioning Strategy

The platform uses URI-based versioning with a 12-month deprecation cycle:

```
/api/v1/services   ← Current stable version
/api/v2/services   ← Next version (when breaking changes needed)
```

**Versioning policy:**
- **v1** is the initial stable release
- **v2** is introduced only when breaking changes are unavoidable
- When v2 is released, v1 enters a 12-month deprecation period
- During deprecation, v1 continues to function but responses include a `Sunset` header
- After 12 months, v1 returns `410 Gone` with a migration guide URL

**Deprecation header:**

```
Sunset: Sat, 20 Oct 2026 00:00:00 GMT
Deprecation: true
Link: <https://docs.gaas.global/migration/v1-to-v2>; rel="successor-version"
```

**What constitutes a breaking change:**
- Removing or renaming a field in a response body
- Changing the type of a field
- Removing an endpoint
- Changing authentication requirements
- Changing error response structure

**What is NOT a breaking change (additive changes):**
- Adding a new optional field to a response
- Adding a new endpoint
- Adding a new query parameter
- Adding a new enum value to an existing field

---

## Authentication & Authorization

### OAuth 2.0 Flows

The platform supports multiple OAuth 2.0 flows depending on the client type:

| Client Type | OAuth 2.0 Flow | Use Case |
|---|---|---|
| **Web Application (SPA)** | Authorization Code + PKCE | Admin console, citizen portal |
| **Mobile Application** | Authorization Code + PKCE | iOS/Android apps |
| **Machine-to-Machine** | Client Credentials | Backend system integrations |
| **Legacy System** | API Key (non-OAuth) | Simple integrations with limited scope |

**Authorization Code + PKCE flow (web/mobile):**

```
1. Client → Keycloak: GET /auth/realms/{realm}/protocol/openid-connect/auth
   ?response_type=code
   &client_id=gaas-admin-console
   &redirect_uri=https://admin.gaas.example.gov/callback
   &scope=openid profile gaas:services:read gaas:incidents:write
   &code_challenge=E9Melhoa2OwvFrEMTJguCHaoeK1t8URWbuGJSstw-cM
   &code_challenge_method=S256

2. User authenticates (username/password, MFA, or external IdP)

3. Keycloak → Client: redirect to callback with authorization code

4. Client → Keycloak: POST /auth/realms/{realm}/protocol/openid-connect/token
   grant_type=authorization_code
   &code=abc123
   &code_verifier=dBjftJeZ4CVP-mB92K27uhbUJU1p1r_wW1gFWFOEjXk

5. Keycloak → Client: { access_token, refresh_token, id_token }
```

**Client Credentials flow (M2M):**

```
POST /auth/realms/{realm}/protocol/openid-connect/token
Content-Type: application/x-www-form-urlencoded

grant_type=client_credentials
&client_id=ministry-of-labor-integration
&client_secret=<secret>
&scope=gaas:services:read gaas:incidents:read
```

### API Key Management

For simpler integrations that do not require OAuth 2.0, the platform supports API keys:

```typescript
POST /api/v1/api-keys
{
  "name": "Legacy HR System Integration",
  "description": "Read-only access for HR system to query services and incidents",
  "scopes": ["services:read", "incidents:read"],
  "domain_id": "social_services",
  "expires_at": "2026-10-20T00:00:00Z",
  "allowed_ip_ranges": ["10.0.5.0/24"]
}

Response: 201 Created
{
  "id": "key-uuid-789",
  "key": "gaas_live_a1b2c3d4e5f6g7h8i9j0...",  // Shown once, then hashed
  "name": "Legacy HR System Integration",
  "scopes": ["services:read", "incidents:read"],
  "expires_at": "2026-10-20T00:00:00Z",
  "created_at": "2025-10-20T14:32:00Z"
}
```

API keys are sent via the `X-API-Key` header. They are hashed (SHA-256) in the database and validated at the API Gateway layer.

### JWT Token Structure

**Access token payload (decoded):**

```json
{
  "iss": "https://auth.gaas.example.gov/realms/gaas",
  "sub": "user-uuid-456",
  "aud": "gaas-platform",
  "exp": 1698249600,
  "iat": 1698248700,
  "jti": "token-uuid-001",

  "domain": "healthcare",
  "roles": ["service_owner", "incident_manager"],
  "permissions": [
    "services:read", "services:write",
    "incidents:read", "incidents:write", "incidents:assign",
    "changes:read",
    "cmdb:read"
  ],

  "name": "Dr. Sarah Chen",
  "email": "s.chen@health.gov",
  "locale": "en-US"
}
```

**Token lifetimes:**
- **Access token:** 15 minutes (short-lived for security)
- **Refresh token:** 7 days (used to obtain new access tokens)
- **ID token:** 1 hour (OpenID Connect identity assertion)

### Scoped API Permissions

Permissions follow a `{resource}:{action}` pattern and are checked on every request:

| Permission | Description |
|---|---|
| `services:read` | View services in own domain |
| `services:write` | Create/update services in own domain |
| `services:delete` | Retire/delete services in own domain |
| `incidents:read` | View incidents in own domain |
| `incidents:write` | Create/update incidents |
| `incidents:assign` | Assign incidents to technicians |
| `changes:read` | View change requests |
| `changes:write` | Create change requests |
| `changes:approve` | Approve/reject change requests |
| `cmdb:read` | View CMDB configuration items |
| `cmdb:write` | Create/update CMDB entries |
| `costs:read` | View cost data for own domain |
| `costs:write` | Import/allocate costs |
| `platform:admin` | Full platform access (cross-domain) |

---

## X-Road Compatibility

### Overview

Estonia's X-Road is the world's most successful government data exchange platform, enabling secure machine-to-machine communication between government agencies and private organizations. The GaaS Platform is designed to integrate with X-Road deployments and adopt X-Road's key principles for non-X-Road environments.

### GaaS API Alignment with X-Road

| X-Road Concept | GaaS Equivalent |
|---|---|
| **Security Server** | API Gateway (Kong) with mTLS |
| **Subsystem** | Domain (ministry/agency) |
| **Service** | API endpoint |
| **Service Description (WSDL/OpenAPI)** | OpenAPI 3.0 spec published to developer portal |
| **Central Server** | Platform registry (shared services namespace) |
| **Message Log** | Audit log (immutable, per-domain) |
| **Time-Stamping** | Signed timestamps on all API transactions |

### SOAP/REST Bridge

Many existing X-Road deployments use SOAP-based services. The GaaS Platform provides a bridge adapter for interoperability:

```
X-Road Security Server (SOAP)          GaaS Platform (REST)
┌──────────────────────┐               ┌────────────────────┐
│  Legacy SOAP Service │               │  REST API          │
│  (WSDL-based)        │               │  (OpenAPI 3.0)     │
└──────────┬───────────┘               └────────┬───────────┘
           │                                     │
           ▼                                     ▼
┌──────────────────────┐               ┌────────────────────┐
│  X-Road Security     │    mTLS       │  GaaS SOAP/REST    │
│  Server              │◄─────────────►│  Bridge Adapter    │
│                      │               │                     │
│  - SOAP envelope     │  Translates   │  - SOAP ↔ JSON     │
│  - Message signing   │◄────────────►│  - WSDL ↔ OpenAPI  │
│  - Message logging   │               │  - Header mapping  │
└──────────────────────┘               └────────────────────┘
```

**Bridge adapter configuration:**

```yaml
# xroad-bridge-config.yml
bridges:
  - name: citizen-identity-lookup
    xroad:
      instance: "EE"
      member_class: "GOV"
      member_code: "70006317"
      subsystem: "population-register"
      service: "getPersonData"
      version: "v1"
    gaas:
      endpoint: "/api/v1/identity/verify"
      method: "POST"
    mapping:
      request:
        xroad_field: "personalCode"
        gaas_field: "national_id"
      response:
        gaas_field: "verified"
        xroad_field: "verificationResult"
```

### Security Server Integration Patterns

**Pattern 1: GaaS as X-Road Consumer**

GaaS Platform queries external X-Road services (e.g., population register, tax authority) by routing requests through an X-Road Security Server.

```typescript
// X-Road service consumer in NestJS
@Injectable()
export class XRoadConsumerService {
  async queryPopulationRegister(nationalId: string) {
    const response = await this.httpService.post(
      'https://security-server.local/r1/EE/GOV/70006317/population-register/getPersonData/v1',
      {
        personalCode: nationalId,
      },
      {
        headers: {
          'X-Road-Client': 'EE/GOV/12345678/gaas-platform',
          'X-Road-Id': uuidv4(),
          'Content-Type': 'application/json',
        },
        httpsAgent: new https.Agent({
          cert: fs.readFileSync('/certs/xroad-client.pem'),
          key: fs.readFileSync('/certs/xroad-client-key.pem'),
          ca: fs.readFileSync('/certs/xroad-ca.pem'),
        }),
      }
    );

    return response.data;
  }
}
```

**Pattern 2: GaaS as X-Road Provider**

GaaS Platform exposes its APIs through an X-Road Security Server, making government service data available to other X-Road members.

### Message-Level Encryption and Signing

For sensitive cross-border data exchange, the platform supports message-level security in addition to transport-level TLS:

```json
{
  "header": {
    "message_id": "msg-uuid-001",
    "timestamp": "2025-10-20T14:32:00Z",
    "sender": "EE/GOV/12345678/gaas-platform",
    "recipient": "EE/GOV/70006317/population-register",
    "signature": "base64-encoded-RSA-SHA256-signature",
    "encryption": {
      "algorithm": "AES-256-GCM",
      "key_id": "recipient-public-key-id",
      "iv": "base64-encoded-iv"
    }
  },
  "payload": "base64-encoded-encrypted-payload"
}
```

---

## Integration Patterns

### 1. Citizen Identity Integration (OpenID Connect / eIDAS)

Government digital identity systems authenticate citizens. The GaaS Platform integrates with these systems via OpenID Connect federation.

**Supported identity providers:**

| Standard | Examples | Integration Method |
|---|---|---|
| **OpenID Connect** | Keycloak, Auth0, Azure AD B2C | OIDC federation |
| **eIDAS** | EU cross-border identity | eIDAS node integration |
| **National eID** | Estonia ID-card, Singapore SingPass, Denmark MitID | SAML 2.0 or OIDC bridge |
| **Mobile ID** | Smart-ID, Mobile-ID | External IdP via OIDC |

**Keycloak identity federation configuration:**

```json
{
  "alias": "national-eid",
  "providerId": "oidc",
  "enabled": true,
  "config": {
    "authorizationUrl": "https://eid.example.gov/auth",
    "tokenUrl": "https://eid.example.gov/token",
    "userInfoUrl": "https://eid.example.gov/userinfo",
    "clientId": "gaas-platform",
    "clientSecret": "${NATIONAL_EID_CLIENT_SECRET}",
    "defaultScope": "openid profile national_id",
    "validateSignature": "true",
    "jwksUrl": "https://eid.example.gov/.well-known/jwks.json"
  }
}
```

### 2. Payment Gateway Integration

For fee-based government services (business registration fees, permit applications, court filing fees):

```typescript
POST /api/v1/payments/initiate
{
  "service_request_id": "req-uuid-123",
  "amount": 150.00,
  "currency": "EUR",
  "description": "Business Registration Fee",
  "payment_method": "bank_transfer",  // or "card", "direct_debit"
  "callback_url": "https://gaas.example.gov/api/v1/payments/callback",
  "metadata": {
    "domain": "finance",
    "service": "business-registration",
    "applicant_reference": "BR-2025-12345"
  }
}

Response: 201 Created
{
  "payment_id": "pay-uuid-456",
  "status": "pending",
  "redirect_url": "https://payment-gateway.example.gov/pay/pay-uuid-456",
  "expires_at": "2025-10-20T15:32:00Z"
}
```

**Supported payment gateways:** The platform uses an adapter pattern to support multiple payment providers:
- Government payment portals (country-specific)
- Bank transfer APIs (SEPA, SWIFT)
- Card processors (Stripe, Adyen -- for jurisdictions allowing card payments)

### 3. Document Management Integration

Government processes generate and consume documents (permits, certificates, applications). The platform integrates with document management systems:

```typescript
// Upload document attached to a service request
POST /api/v1/documents
Content-Type: multipart/form-data

{
  "file": <binary>,
  "entity_type": "service_request",
  "entity_id": "req-uuid-123",
  "document_type": "supporting_evidence",
  "metadata": {
    "original_filename": "business_plan.pdf",
    "classification": "official",
    "retention_years": 7
  }
}

Response: 201 Created
{
  "id": "doc-uuid-789",
  "storage_url": "s3://gaas-documents/healthcare/2025/10/doc-uuid-789.pdf",
  "size_bytes": 2458624,
  "mime_type": "application/pdf",
  "checksum_sha256": "a1b2c3d4...",
  "virus_scan_status": "clean"
}
```

### 4. GIS / Mapping Integration

For location-based government services (zoning permits, emergency services, infrastructure planning):

```typescript
GET /api/v1/services?location.lat=59.437&location.lng=24.753&location.radius_km=5

Response: 200 OK
{
  "data": [
    {
      "name": "Tallinn District Healthcare Center",
      "type": "business",
      "domain": "healthcare",
      "location": {
        "lat": 59.435,
        "lng": 24.749,
        "address": "Peetri 12, 10415 Tallinn"
      },
      "distance_km": 0.3
    }
  ]
}
```

### 5. Legacy System Integration

For government agencies with decades-old systems that cannot be immediately replaced:

**ESB (Enterprise Service Bus) Pattern:**

```
Legacy System (COBOL/mainframe)
        │
        ▼
┌──────────────────────┐
│  ESB Adapter Layer    │
│  - Data transformation│
│  - Protocol bridging  │
│  - Message queuing    │
└──────────┬───────────┘
           │
           ▼
┌──────────────────────┐
│  GaaS API Gateway     │
│  - Standard REST API  │
└──────────────────────┘
```

**Data synchronization strategies:**

| Strategy | Description | Use Case |
|---|---|---|
| **Real-time sync** | Event-driven updates via message queue | Systems that need current data |
| **Batch sync** | Scheduled bulk data transfers (nightly ETL) | Reporting, analytics |
| **On-demand query** | Query legacy system in real-time via adapter | Lookup operations |
| **Change Data Capture** | Database log tailing (Debezium) | Minimize legacy system changes |

---

## Event Bus Architecture

### Technology Selection

| Scenario | Technology | Justification |
|---|---|---|
| **Default (most deployments)** | RabbitMQ | Easier operations, sufficient for most government workloads |
| **High-throughput (large nations)** | Apache Kafka | Log-based messaging, replay, higher throughput |
| **Hybrid** | RabbitMQ + Kafka | RabbitMQ for task queues, Kafka for event streaming |

### Event Schema Registry

All events are published with a versioned schema. The platform uses JSON Schema for event validation (with optional Avro support for Kafka deployments).

**Event envelope format:**

```json
{
  "event_id": "evt-uuid-001",
  "event_type": "incident.created",
  "event_version": "1.0",
  "source": "incident-mgmt-service",
  "domain_id": "healthcare",
  "timestamp": "2025-10-20T14:32:00Z",
  "correlation_id": "req-uuid-789",
  "data": {
    "id": "inc-uuid-123",
    "number": "INC0005678",
    "short_description": "Patient portal login failures",
    "priority": "high",
    "status": "new",
    "service_id": "srv-uuid-456",
    "created_by": "user-uuid-012"
  }
}
```

### Event Types

| Event | Publisher | Consumers | Description |
|---|---|---|---|
| `service.created` | Service Catalog | Search, Analytics, Notification | New service added to portfolio |
| `service.status_changed` | Service Catalog | Analytics, Public Dashboard, Notification | Service status change (e.g., active to deprecated) |
| `incident.created` | Incident Mgmt | Workflow, Notification, Analytics, Search | New incident logged |
| `incident.assigned` | Incident Mgmt | Notification | Incident assigned to technician |
| `incident.resolved` | Incident Mgmt | Analytics, Notification, SLA Tracking | Incident resolved |
| `incident.sla_breach` | SLA Engine | Notification, Analytics, Escalation | SLA target missed |
| `change.submitted` | Change Mgmt | Workflow (triggers approval) | Change request submitted |
| `change.approved` | Change Mgmt | Notification, Release Mgmt | Change approved by CAB |
| `change.implemented` | Change Mgmt | CMDB, Analytics, Notification | Change successfully implemented |
| `ci.created` | CMDB | Search, Analytics | New configuration item registered |
| `ci.relationship_added` | CMDB | Impact Analysis, Search | New CI dependency mapped |
| `cost.allocated` | Cost Mgmt | Analytics, Public Dashboard | Cost allocation completed |
| `user.logged_in` | IAM | Audit, Analytics | User authentication event |
| `workflow.task_created` | Workflow Engine | Notification | New approval/task assigned |

### Consumer Groups and Replay

**Consumer groups** ensure that each consumer type processes each event exactly once, even with multiple instances:

```yaml
# RabbitMQ consumer configuration
exchanges:
  - name: gaas.events
    type: topic
    durable: true

queues:
  - name: notification-service.incident-events
    bindings:
      - exchange: gaas.events
        routing_key: "incident.*"
    arguments:
      x-dead-letter-exchange: gaas.events.dlx
      x-message-ttl: 86400000  # 24 hours

  - name: analytics-service.all-events
    bindings:
      - exchange: gaas.events
        routing_key: "#"  # Consume all events

  - name: search-service.indexing-events
    bindings:
      - exchange: gaas.events
        routing_key: "*.created"
      - exchange: gaas.events
        routing_key: "*.updated"
```

**Event replay** (Kafka deployments): Events are retained for 30 days by default. Consumers can replay events from any point in time for recovery or reprocessing:

```typescript
// Replay events from a specific timestamp
POST /api/admin/v1/events/replay
{
  "consumer_group": "analytics-service",
  "event_types": ["incident.created", "incident.resolved"],
  "from_timestamp": "2025-10-01T00:00:00Z",
  "to_timestamp": "2025-10-15T00:00:00Z"
}
```

---

## API Gateway Configuration

### Kong Configuration

The API Gateway is the single entry point for all external traffic. It handles authentication, rate limiting, routing, and observability.

**Kong declarative configuration:**

```yaml
# kong.yml
_format_version: "3.0"

services:
  # Service Catalog API
  - name: service-catalog
    url: http://service-catalog.gaas-core.svc.cluster.local:3000
    routes:
      - name: service-catalog-route
        paths:
          - /api/v1/services
          - /api/v1/services/
        strip_path: false
    plugins:
      - name: jwt
        config:
          claims_to_verify: [exp]
          key_claim_name: iss
      - name: acl
        config:
          allow: [services-read, services-write, platform-admin]
      - name: rate-limiting
        config:
          minute: 100
          hour: 1000
          policy: redis
          redis_host: redis.gaas-shared-services.svc.cluster.local
      - name: correlation-id
        config:
          header_name: X-Request-ID
          generator: uuid
      - name: request-transformer
        config:
          add:
            headers:
              - "X-Domain-ID:$(jwt_claim_domain)"

  # Public API (no authentication)
  - name: public-api
    url: http://public-dashboard.gaas-core.svc.cluster.local:3000
    routes:
      - name: public-api-route
        paths:
          - /api/public/v1/
        strip_path: false
    plugins:
      - name: rate-limiting
        config:
          minute: 10
          hour: 100
          policy: redis
      - name: ip-restriction
        config:
          deny: []  # Can block abusive IPs
      - name: response-transformer
        config:
          add:
            headers:
              - "Cache-Control: public, max-age=60"
```

### Request/Response Transformation

The gateway transforms requests and responses for compatibility and security:

**Inbound transformations:**
- Add `X-Domain-ID` header from JWT `domain` claim
- Add `X-Request-ID` header (UUID) for distributed tracing
- Strip sensitive headers from external requests
- Validate `Content-Type` header

**Outbound transformations:**
- Remove internal headers (`X-Internal-Service`, `X-Database-Time`)
- Add security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Strict-Transport-Security`)
- Add rate limit headers (`X-RateLimit-Limit`, `X-RateLimit-Remaining`)
- Add CORS headers for browser clients

### Circuit Breaker and Retry Policies

```yaml
# Kong circuit breaker plugin configuration
plugins:
  - name: proxy-cache
    config:
      response_code: [200]
      request_method: [GET]
      content_type: [application/json]
      cache_ttl: 300  # 5 minutes for GET requests
      strategy: memory

  # Retry configuration (per-service)
  upstreams:
    - name: incident-mgmt-upstream
      targets:
        - target: incident-mgmt.gaas-core.svc.cluster.local:3000
          weight: 100
      healthchecks:
        active:
          healthy:
            interval: 5
            successes: 3
          unhealthy:
            interval: 5
            http_failures: 3
            tcp_failures: 3
            timeouts: 3
        passive:
          healthy:
            successes: 5
          unhealthy:
            http_failures: 5
            tcp_failures: 3
            timeouts: 3
```

**Circuit breaker states:**
- **Closed (normal):** All requests pass through
- **Open (tripped):** All requests immediately return 503; gateway checks health every 5 seconds
- **Half-Open (recovering):** Limited requests pass through to test recovery

### Analytics and Monitoring

The API Gateway collects metrics for every request:

```typescript
// Metrics collected per request
{
  "request_id": "req-uuid-001",
  "timestamp": "2025-10-20T14:32:00.123Z",
  "method": "GET",
  "uri": "/api/v1/incidents",
  "status_code": 200,
  "latency_ms": 47,
  "upstream_latency_ms": 32,
  "gateway_latency_ms": 15,
  "domain_id": "healthcare",
  "user_id": "user-uuid-456",
  "consumer_type": "authenticated_user",
  "request_size_bytes": 0,
  "response_size_bytes": 4823,
  "rate_limit_remaining": 953
}
```

**Prometheus metrics exposed by Kong:**

| Metric | Type | Description |
|---|---|---|
| `kong_http_requests_total` | Counter | Total HTTP requests by service, route, status |
| `kong_request_latency_ms` | Histogram | Request latency distribution |
| `kong_upstream_latency_ms` | Histogram | Upstream service latency |
| `kong_bandwidth_bytes` | Counter | Bandwidth by direction (ingress/egress) |
| `kong_upstream_target_health` | Gauge | Upstream health status (1=healthy, 0=unhealthy) |

---

## Developer Portal

### Self-Service API Key Management

External developers and partner systems manage their own API keys through the developer portal:

**Portal URL:** `https://developers.gaas.example.gov`

**Features:**
- Account registration (email verification required)
- API key creation with scoped permissions
- Key rotation (generate new key, revoke old key)
- Usage analytics (calls per day, error rates, latency)
- Quota monitoring (remaining calls, burst usage)

### Interactive API Documentation

The portal serves interactive documentation powered by Swagger UI and Redoc:

```typescript
// OpenAPI 3.0 specification (excerpt)
{
  "openapi": "3.0.3",
  "info": {
    "title": "GaaS Platform API",
    "version": "1.0.0",
    "description": "Government as a Service Platform API",
    "license": {
      "name": "AGPLv3",
      "url": "https://www.gnu.org/licenses/agpl-3.0.html"
    },
    "contact": {
      "name": "GaaS Platform Support",
      "email": "dev@gaas.global",
      "url": "https://docs.gaas.global"
    }
  },
  "servers": [
    {
      "url": "https://api.gaas.example.gov",
      "description": "Production"
    },
    {
      "url": "https://sandbox.api.gaas.example.gov",
      "description": "Sandbox (test data)"
    }
  ],
  "paths": {
    "/api/v1/services": {
      "get": {
        "summary": "List services",
        "description": "Returns a paginated list of services in the caller's domain",
        "operationId": "listServices",
        "tags": ["Service Catalog"],
        "parameters": [
          {
            "name": "type",
            "in": "query",
            "schema": { "enum": ["business", "technical", "application", "infrastructure"] }
          },
          {
            "name": "status",
            "in": "query",
            "schema": { "enum": ["design", "active", "deprecated", "retired"] }
          },
          {
            "name": "limit",
            "in": "query",
            "schema": { "type": "integer", "default": 25, "maximum": 100 }
          },
          {
            "name": "cursor",
            "in": "query",
            "schema": { "type": "string" }
          }
        ],
        "responses": {
          "200": {
            "description": "Successful response",
            "content": {
              "application/json": {
                "schema": { "$ref": "#/components/schemas/ServiceListResponse" }
              }
            }
          }
        }
      }
    }
  }
}
```

### SDK Generation

The platform auto-generates client SDKs from the OpenAPI specification:

| Language | Package | Generator |
|---|---|---|
| **TypeScript** | `@gaas/sdk-typescript` | openapi-generator (typescript-axios) |
| **Python** | `gaas-sdk-python` | openapi-generator (python) |
| **Java** | `io.gaas.sdk` | openapi-generator (java) |
| **Go** | `github.com/gaas-platform/sdk-go` | openapi-generator (go) |

**TypeScript SDK usage example:**

```typescript
import { GaaSClient, IncidentsApi } from '@gaas/sdk-typescript';

const client = new GaaSClient({
  baseUrl: 'https://api.gaas.example.gov',
  apiKey: process.env.GAAS_API_KEY,
});

const incidentsApi = new IncidentsApi(client);

// List open incidents
const incidents = await incidentsApi.listIncidents({
  status: 'in_progress',
  priority: ['critical', 'high'],
  limit: 10,
});

// Create a new incident
const newIncident = await incidentsApi.createIncident({
  shortDescription: 'Portal login failures',
  priority: 'high',
  serviceId: 'srv-uuid-456',
  description: 'Multiple citizens reporting inability to log in to the patient portal.',
});
```

### Sandbox Environment

The developer portal provides a fully functional sandbox environment with synthetic test data:

**Sandbox characteristics:**
- Separate database with realistic but fake data (no real citizen data)
- Same API behavior as production
- Rate limits relaxed (10x production limits)
- Data resets nightly to a known state
- Pre-created test users and API keys for each domain

**Sandbox test data:**

| Domain | Services | Incidents | CIs | Users |
|---|---|---|---|---|
| healthcare | 50 | 500 | 200 | 100 |
| education | 35 | 300 | 150 | 75 |
| justice | 25 | 200 | 100 | 50 |
| transport | 40 | 400 | 250 | 80 |

---

## API Lifecycle Management

### Lifecycle Stages

```
┌──────────┐    ┌──────────┐    ┌───────────┐    ┌──────────┐
│  Design  │───►│  Review  │───►│ Implement │───►│   Test   │
└──────────┘    └──────────┘    └───────────┘    └──────────┘
                                                       │
                                                       ▼
┌──────────┐    ┌──────────┐    ┌───────────┐    ┌──────────┐
│Deprecate │◄───│ Monitor  │◄───│  Publish  │◄───│   Test   │
└──────────┘    └──────────┘    └───────────┘    └──────────┘
```

| Stage | Activities | Gate Criteria |
|---|---|---|
| **Design** | OpenAPI spec drafted, reviewed by API guild | Spec follows naming conventions, no breaking changes to existing version |
| **Review** | Peer review, security review, domain expert review | Approval from 2 reviewers + security team |
| **Implement** | Backend service code, database migrations, middleware | Passes linting, type checks, no TODO comments |
| **Test** | Unit tests (>80% coverage), integration tests, contract tests | All tests pass, no regressions |
| **Publish** | Deploy to production, update developer portal, notify consumers | Staging environment verified, rollback plan documented |
| **Monitor** | Track error rates, latency, adoption, deprecation warnings | SLA compliance (p95 <200ms, error rate <0.1%) |
| **Deprecate** | Issue Sunset header, notify consumers, migration guide published | 12-month notice period, <5% traffic on deprecated version |

### Breaking Change Policy

Breaking changes are avoided whenever possible. When unavoidable:

1. **RFC process:** Breaking change proposal submitted as an RFC to the API guild
2. **Impact analysis:** Identify all consumers that will be affected
3. **Migration guide:** Step-by-step instructions for consumer migration
4. **New version:** Breaking changes are released under a new version (`v1` to `v2`)
5. **Dual support:** Both versions run simultaneously for 12 months
6. **Consumer outreach:** Direct notification to all registered API consumers
7. **Sunset:** Old version returns `410 Gone` after deprecation period

### API Health Checks and SLAs

**Health check endpoint:**

```typescript
GET /api/v1/health

Response: 200 OK
{
  "status": "healthy",
  "version": "1.0.0",
  "uptime_seconds": 2592000,
  "checks": {
    "database": { "status": "healthy", "latency_ms": 3 },
    "redis": { "status": "healthy", "latency_ms": 1 },
    "event_bus": { "status": "healthy", "latency_ms": 5 },
    "elasticsearch": { "status": "healthy", "latency_ms": 12 }
  }
}
```

**API SLA targets:**

| Metric | Target | Measurement Window |
|---|---|---|
| **Availability** | 99.9% | Monthly |
| **Response Time (p50)** | <100ms | Rolling 24 hours |
| **Response Time (p95)** | <200ms | Rolling 24 hours |
| **Response Time (p99)** | <500ms | Rolling 24 hours |
| **Error Rate (5xx)** | <0.1% | Rolling 24 hours |
| **Time to First Byte** | <50ms | Rolling 24 hours |

**SLA monitoring dashboard:** Grafana dashboards track all SLA metrics in real-time with alerting thresholds. If any metric breaches its target for 5 consecutive minutes, an alert is sent to the on-call engineering team.

---

## Next Steps

This integration framework provides the API contracts and communication patterns for the GaaS Platform ecosystem. The following documents provide additional detail:

- **05-multi-tenancy-isolation.md** - How multi-tenant routing and domain context propagation work at the API layer
- **07-technology-stack.md** - Detailed selection rationale for Kong, RabbitMQ/Kafka, Keycloak, and other integration components
- **08-implementation-roadmap.md** - Phased delivery of integration capabilities (REST in Phase 1, GraphQL and X-Road in Phase 4)
- **09-security-compliance.md** - Detailed OAuth 2.0 configuration, mTLS setup, and API security testing

---

*Document Version: 1.0 | Last Updated: October 2025*
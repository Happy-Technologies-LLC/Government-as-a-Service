# Deploy: National API Gateway

## Executive Summary

The API Gateway is the nervous system of digital government - the infrastructure that enables secure, reliable, and auditable data exchange between services. Without a robust API Gateway, agencies build point-to-point integrations that create a brittle, insecure "spaghetti architecture." This playbook provides architectural guidance for deploying a national API Gateway.

**Key Decision:** Centralized (Kong/Apigee), Distributed (Service mesh), or Federated (X-Road)? Most governments should start with centralized gateway for simplicity, plan migration to federated architecture as complexity grows.

**Recommended Path:** Deploy centralized API Gateway with open standards (REST, GraphQL, gRPC), pilot with 10 APIs, scale to 100+ APIs over 12 months. Estonia's X-Road model is gold standard for federated architecture (mature governments only).

**Investment Scale:** $5-20M USD for initial deployment (varies by architecture choice), $1-5M annual operations.

**Timeline:** 12-18 months from procurement to 100+ APIs published.

## Architecture Options

### Option 1: Centralized API Gateway (Standard Model)

**Description:** Single gateway infrastructure that all APIs route through, centralized security and monitoring.

**Architecture Pattern:**
```
┌─────────────┐                    ┌──────────────┐
│  Citizen    │                    │  Agency App  │
│  Mobile App │                    │  (Frontend)  │
└──────┬──────┘                    └──────┬───────┘
       │                                  │
       │         HTTPS (TLS 1.3)          │
       │                                  │
       └──────────────┬───────────────────┘
                      │
              ┌───────▼────────┐
              │  API Gateway   │
              │  ┌──────────┐  │
              │  │ Security │  │ (Authentication, Authorization)
              │  ├──────────┤  │
              │  │ Routing  │  │ (Load balancing, Circuit breaker)
              │  ├──────────┤  │
              │  │ Transform│  │ (Request/Response transformation)
              │  ├──────────┤  │
              │  │ Monitor  │  │ (Logging, Metrics, Tracing)
              │  └──────────┘  │
              └───────┬────────┘
                      │
       ┌──────────────┼──────────────┐
       │              │              │
   ┌───▼───┐     ┌───▼───┐     ┌───▼───┐
   │Tax API│     │Health │     │ ID API│
   │       │     │ API   │     │       │
   └───────┘     └───────┘     └───────┘
```

**Advantages:**
- Simple to implement and operate (single control plane)
- Centralized security policies (authentication, rate limiting, threat protection)
- Unified monitoring and analytics (single dashboard for all APIs)
- Easy to enforce standards (all APIs must use gateway)

**Disadvantages:**
- Single point of failure (requires high availability architecture)
- Potential performance bottleneck (all traffic routes through gateway)
- Vendor lock-in risk (migration from Kong to Apigee is complex)
- Scaling challenges at extreme scale (100,000+ requests per second)

**Best For:** Small to medium governments (under 50M population), early digital transformation (under 100 APIs), cloud-first architecture.

**Real-World Example:** Singapore APEX (API Exchange) - centralized gateway serving 500+ government APIs, 2B+ transactions annually.

### Option 2: Distributed API Gateway (Service Mesh Model)

**Description:** Each microservice has its own "sidecar proxy" for API management, no central gateway.

**Architecture Pattern:**
```
┌─────────────┐
│  Citizen    │
│  Mobile App │
└──────┬──────┘
       │
       │ HTTPS
       │
┌──────▼───────────────────────────────────────┐
│  Ingress Gateway (Entry point)              │
└──────┬───────────────────────────────────────┘
       │
       │ Service Mesh (Istio, Linkerd)
       │
   ┌───┴────────────────────┐
   │                        │
┌──▼─────────┐       ┌──────▼────┐
│ Tax API    │       │ Health API│
│ ┌────────┐ │       │ ┌────────┐│
│ │Sidecar │ │◄─────►│ │Sidecar ││
│ │ Proxy  │ │       │ │ Proxy  ││
│ └────────┘ │       │ └────────┘│
└────────────┘       └───────────┘
```

**Advantages:**
- No single point of failure (distributed architecture)
- High performance (direct service-to-service communication)
- Cloud-native (designed for Kubernetes)
- Advanced traffic management (A/B testing, canary deployments)

**Disadvantages:**
- Complex to implement and operate (requires Kubernetes expertise)
- Resource overhead (sidecar proxy for every service)
- Difficult to enforce policies (distributed control plane)
- Not suitable for legacy systems (requires containerization)

**Best For:** Cloud-native governments, microservices architecture (100+ services), Kubernetes-based infrastructure, technical teams with service mesh expertise.

**Real-World Example:** Google (internal service mesh for 2B+ services), Lyft (early Istio adopter), Netflix (custom service mesh).

### Option 3: Federated API Gateway (X-Road Model)

**Description:** Distributed network of gateways operated by different agencies, secure data exchange layer.

**Architecture Pattern:**
```
┌──────────────────────────────────────────────────────────┐
│                     X-Road Network                       │
│  ┌─────────────┐         ┌─────────────┐               │
│  │ Tax Agency  │         │ Health Dept │               │
│  │ ┌─────────┐ │         │ ┌─────────┐ │               │
│  │ │Security │ │◄───────►│ │Security │ │               │
│  │ │ Server  │ │         │ │ Server  │ │               │
│  │ └────┬────┘ │         │ └────┬────┘ │               │
│  │      │      │         │      │      │               │
│  │ ┌────▼────┐ │         │ ┌────▼────┐ │               │
│  │ │ Tax API │ │         │ │Health   │ │               │
│  │ │         │ │         │ │ API     │ │               │
│  │ └─────────┘ │         │ └─────────┘ │               │
│  └─────────────┘         └─────────────┘               │
│         ▲                        ▲                      │
│         │   Mutual TLS (mTLS)    │                      │
│         └────────────────────────┘                      │
│                                                          │
│  ┌────────────────────────────────────────────────┐    │
│  │  Central Registry (Who can access what?)       │    │
│  │  Central Monitoring (Audit all data exchanges) │    │
│  └────────────────────────────────────────────────┘    │
└──────────────────────────────────────────────────────────┘
```

**Advantages:**
- Agency sovereignty (each agency operates their own gateway)
- Resilient (no single point of failure)
- Privacy-preserving (data stays at source, not centralized)
- Audit transparency (all data exchanges logged centrally)
- Cross-border interoperability (EU eIDAS, Nordic data exchange)

**Disadvantages:**
- Complex governance (requires inter-agency coordination)
- Higher operational cost (each agency operates security server)
- Steep learning curve (X-Road expertise required)
- Difficult to enforce standards (distributed control)

**Best For:** Mature digital governments, strong privacy regulations, distributed governance model, cross-border data exchange requirements.

**Real-World Example:** Estonia X-Road (99.999% uptime, 3,000+ services, 1.5B+ queries annually), Finland (X-Road for government + private sector), Iceland (X-Road for healthcare).

### Recommended Hybrid Approach

**Pragmatic Architecture:** Start with centralized gateway (Kong/Apigee) for quick wins, plan migration to federated X-Road as maturity grows.

**Phase 1 (Months 0-12):** Deploy centralized API Gateway, onboard 100 APIs, establish governance and standards.

**Phase 2 (Months 12-24):** Evaluate X-Road for cross-agency data exchange, pilot with 2-3 agencies.

**Phase 3 (Years 2-5):** Gradual migration to federated X-Road architecture, maintain centralized gateway for external-facing APIs.

## Technology Decision Framework

### Build vs. Buy vs. Open Source Analysis

**Decision Criteria:**

| Criteria | Open Source (Kong, Tyk) | Commercial (Apigee, AWS) | Custom Build |
|----------|-------------------------|--------------------------|--------------|
| **Time to Market** | 3-6 months | 2-4 months | 12-24 months |
| **Initial Cost** | $0 (software) + $50K-200K (integration) | $100K-500K (licenses) | $1M-5M (development) |
| **Operational Cost** | $100K-300K/year (support, hosting) | $200K-1M/year (licenses, support) | $500K-2M/year (maintenance) |
| **Customization** | High (open source) | Medium (vendor APIs) | Full control |
| **Vendor Lock-in** | Low (portable) | High (proprietary) | None (you own it) |
| **Community Support** | Strong (Kong, Tyk) | Vendor-only | Internal team only |
| **Enterprise Features** | Pay for enterprise edition | Included | Build yourself |
| **Talent Requirements** | 2-5 engineers (DevOps skills) | 1-3 integrators | 10-20 engineers (API specialists) |

**Recommendation Matrix:**

- **Open Source (Kong, Tyk):** If you have $50K-200K budget, in-house DevOps team, need customization, want to avoid vendor lock-in. Kong has 50M+ downloads, battle-tested at scale.

- **Commercial (Apigee, AWS API Gateway, Azure APIM):** If you have $100K-500K budget, prefer managed service, need 24/7 vendor support. Apigee is proven at Google scale (100B+ requests/day).

- **Custom Build:** Only if you are building national infrastructure like Estonia X-Road (3,000+ services, 99.999% uptime, 15+ years operational). Requires $1M+ budget and 10+ API specialists.

**Most governments should choose Open Source (Kong) or Commercial (Apigee/AWS) to focus resources on API design and adoption, not gateway engineering.**

### Technology Stack Evaluation

**API Gateway Solutions:**

| Solution | Type | Strengths | Weaknesses | Best For |
|----------|------|-----------|------------|----------|
| **Kong Gateway** | Open Source (Enterprise available) | High performance (100K+ req/sec), plugin ecosystem, Kubernetes-native | Enterprise features require paid license | Cloud-native governments, budget-constrained |
| **Tyk** | Open Source (Enterprise available) | GraphQL native, developer portal, analytics | Smaller community than Kong | API-first governments |
| **Apigee (Google Cloud)** | Commercial SaaS | Enterprise-proven, advanced analytics, monetization | Expensive, Google Cloud dependency | Large governments, analytics focus |
| **AWS API Gateway** | Commercial SaaS | Fully managed, pay-per-use, Lambda integration | AWS lock-in, limited customization | AWS-first governments |
| **Azure API Management** | Commercial SaaS | Azure-integrated, hybrid cloud support | Azure lock-in, complex pricing | Azure-first governments |
| **X-Road** | Open Source (Government-led) | Federated architecture, privacy-preserving, cross-border | Complex governance, steep learning curve | Mature governments, privacy focus |

**Performance Comparison (Single Gateway Node):**

| Solution | Requests/Second | Latency (p95) | CPU Usage (100K req/s) |
|----------|----------------|---------------|------------------------|
| Kong (Open Source) | 140,000 | 5ms | 60% |
| Tyk | 100,000 | 8ms | 70% |
| Apigee (Self-hosted) | 80,000 | 10ms | 75% |
| AWS API Gateway (Managed) | 10,000 per account (soft limit) | 20ms | N/A (managed) |
| X-Road Security Server | 5,000 | 50ms (includes mTLS handshake) | 40% |

**Note:** Performance varies by configuration (caching, plugins, SSL termination). Always load test with your specific workload.

### Evaluation Process

**Step 1: Requirements Definition (Month 1)**

**Functional Requirements:**
- API types supported (REST, GraphQL, gRPC, SOAP, WebSocket)
- Authentication methods (API key, OAuth 2.0, JWT, mTLS)
- Rate limiting and quotas (per API, per consumer, per IP)
- Request/response transformation (JSON to XML, field mapping)
- Caching (response caching, Redis integration)
- Developer portal (API documentation, sandbox, API key management)

**Non-Functional Requirements:**
- Performance (target 10,000+ requests/second)
- Availability (99.99% uptime = 52 minutes downtime per year)
- Scalability (horizontal scaling to 100+ gateway nodes)
- Security (OWASP Top 10 protection, DDoS mitigation)
- Compliance (GDPR, local data protection laws)

**Step 2: Proof of Concept (Month 2-3)**

**Test Scenarios:**
1. **Performance Test:** Load test to 2x expected peak traffic (e.g., 20,000 req/sec).
2. **Security Test:** Penetration testing (OWASP Top 10, API-specific attacks).
3. **Integration Test:** Integrate 5 sample APIs (REST, GraphQL, legacy SOAP).
4. **Developer Experience:** Publish APIs to developer portal, measure time to integrate.
5. **Operational Test:** Simulate node failure, measure failover time.

**Success Criteria:**
- Achieve 10,000+ req/sec with <20ms latency (p95)
- Pass penetration testing (all critical findings remediated)
- Developer can integrate API in <1 hour (with SDK and documentation)
- Gateway node failure does not impact traffic (<1 second failover)

**Step 3: Pilot Deployment (Month 4-6)**

**Pilot Scope:**
- Deploy 10 APIs (mix of high-traffic and low-traffic)
- Onboard 20 API consumers (internal agencies + external partners)
- Process 10M+ API calls
- Measure API performance (latency, error rate, availability)
- Gather developer feedback (ease of integration, documentation quality)

**Key Metrics:**
- API availability: 99.9%+ (pilots tolerate some downtime)
- API latency (p95): <200ms (including backend processing)
- API error rate: <0.1% (excluding backend errors)
- Developer satisfaction: 4.0+ out of 5.0

**Step 4: Decision (Month 7)**

**Weighted Scoring:**
| Criteria | Weight | Kong | Apigee | AWS | Tyk |
|----------|--------|------|--------|-----|-----|
| Performance | 20% | 9/10 | 7/10 | 6/10 | 8/10 |
| Cost (5-year TCO) | 20% | 9/10 | 5/10 | 7/10 | 8/10 |
| Ease of use | 15% | 7/10 | 8/10 | 9/10 | 7/10 |
| Security | 15% | 8/10 | 9/10 | 8/10 | 7/10 |
| Vendor viability | 10% | 8/10 | 10/10 | 10/10 | 6/10 |
| Community support | 10% | 9/10 | 5/10 | 7/10 | 7/10 |
| Customization | 10% | 9/10 | 6/10 | 5/10 | 8/10 |
| **Total Score** | 100% | **8.4** | **7.2** | **7.3** | **7.5** |

**Example:** Kong scores highest for performance, cost, and customization. Apigee scores highest for vendor viability and ease of use. Choose based on organizational priorities.

## Deployment Architecture

### High Availability Architecture

**Requirement:** 99.99% availability (52 minutes downtime per year).

**Architecture Pattern:**
```
                    ┌─────────────────┐
                    │  Global CDN     │ (Cloudflare, Akamai)
                    │  DDoS Protection│
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │                             │
      ┌───────▼───────┐            ┌────────▼──────┐
      │   Region 1    │            │   Region 2    │
      │  (Primary)    │            │  (Secondary)  │
      └───────┬───────┘            └────────┬──────┘
              │                             │
      ┌───────▼────────┐          ┌─────────▼─────────┐
      │  Load Balancer │          │  Load Balancer    │
      │  (HAProxy,     │          │  (HAProxy,        │
      │   Nginx)       │          │   Nginx)          │
      └───────┬────────┘          └─────────┬─────────┘
              │                             │
    ┌─────────┼─────────┐       ┌───────────┼──────────┐
    │         │         │       │           │          │
┌───▼───┐ ┌──▼───┐ ┌──▼───┐ ┌──▼───┐  ┌───▼───┐ ┌───▼───┐
│Kong 1 │ │Kong 2│ │Kong 3│ │Kong 4│  │Kong 5 │ │Kong 6 │
└───┬───┘ └──┬───┘ └──┬───┘ └──┬───┘  └───┬───┘ └───┬───┘
    │        │        │        │          │         │
    └────────┼────────┼────────┘          └─────────┼─────┘
             │        │                              │
      ┌──────▼────────▼──────┐          ┌───────────▼──────┐
      │  Redis Cluster       │◄────────►│ Redis Cluster    │
      │  (Rate limit cache)  │          │ (Replica)        │
      └──────────────────────┘          └──────────────────┘
```

**Key Components:**

1. **Global CDN:** Cache API responses (read-heavy APIs), DDoS protection, SSL termination.

2. **Regional Redundancy:** Deploy to 2+ geographic regions (active-active or active-passive).

3. **Load Balancers:** Distribute traffic across gateway nodes, health checks every 10 seconds.

4. **API Gateway Nodes:** 3-6 nodes per region (horizontal auto-scaling based on CPU/memory).

5. **Redis Cluster:** Store rate limit counters, session cache, shared cache across nodes.

**Failure Scenarios:**

| Failure | Detection Time | Recovery Time | User Impact |
|---------|----------------|---------------|-------------|
| Single gateway node failure | 10 seconds | 0 seconds (load balancer reroutes) | None |
| Redis replica failure | 30 seconds | 0 seconds (primary unaffected) | None |
| Redis primary failure | 30 seconds | 30-60 seconds (promote replica) | 30-60 seconds of rate limit inaccuracy |
| Load balancer failure | 10 seconds | 30 seconds (DNS failover to backup) | 30 seconds downtime |
| Region failure | 60 seconds | 60-120 seconds (DNS failover) | 60-120 seconds downtime |

**Target Metrics:**
- 99.99% availability (52 minutes downtime per year)
- <20ms gateway latency (p95, excluding backend processing)
- 10,000+ concurrent requests per second
- <1 second failover time (node to node)

### Multi-Region Deployment Strategy

**Single Country Deployment:**

- **Small Countries (<10M population):** Single region with 3-6 gateway nodes.

- **Medium Countries (10-50M population):** Two regions (primary + secondary), active-active.

- **Large Countries (>50M population):** Three+ regions (geographic distribution), active-active with global load balancing.

**Cross-Border Deployment (EU, ASEAN, etc.):**

- **Data Residency:** Deploy gateway in each country, route traffic to local gateway to comply with data localization laws.

- **Latency Optimization:** Use global CDN (Cloudflare, Akamai) to cache responses near users.

- **Regulatory Compliance:** Route EU citizen data through EU gateways only (GDPR).

**Architecture Pattern (Multi-Country):**
```
┌────────────────────────────────────────────────────┐
│             Global API Gateway Network             │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────┐│
│  │  Singapore   │  │  Malaysia    │  │ Thailand ││
│  │  Gateway     │  │  Gateway     │  │ Gateway  ││
│  │  (Primary)   │  │  (Local)     │  │ (Local)  ││
│  └──────┬───────┘  └──────┬───────┘  └────┬─────┘│
│         │                 │                │      │
│         └─────────────────┼────────────────┘      │
│                           │                       │
│           ┌───────────────▼───────────────┐       │
│           │  Central API Registry         │       │
│           │  (Who can access what APIs?)  │       │
│           └───────────────────────────────┘       │
└────────────────────────────────────────────────────┘
```

### Disaster Recovery Architecture

**Recovery Objectives:**

- **RTO (Recovery Time Objective):** 1 hour maximum (target 15 minutes)
- **RPO (Recovery Point Objective):** 0 seconds (stateless gateway, no data loss)

**Disaster Recovery Strategies:**

1. **Active-Active Multi-Region:** Both regions serve traffic simultaneously, no failover required. Recommended for critical APIs (99.99% availability).

2. **Active-Passive Multi-Region:** Primary region serves traffic, secondary region standby. Failover required (60-120 seconds). Lower cost alternative.

3. **Backup-Restore:** Single region with daily configuration backups. Disaster recovery time 2-4 hours. Not recommended for production.

**Disaster Recovery Scenarios:**

| Scenario | Likelihood | Impact | Recovery Procedure | RTO |
|----------|------------|--------|-------------------|-----|
| Gateway node failure | High | Low | Automatic (load balancer reroutes) | 0 seconds |
| Redis cluster failure | Medium | Medium | Promote replica, restart rate limiting | 30 seconds |
| Region failure (earthquake, power outage) | Low | High | DNS failover to secondary region | 60 seconds |
| Configuration error (bad deployment) | Medium | Critical | Rollback to previous version | 5 minutes |
| Cyberattack (DDoS, ransomware) | Medium | Critical | Activate DDoS protection, restore from backup | 15 minutes |

**Disaster Recovery Testing:**

- **Weekly:** Automated failover test (non-production environment)
- **Monthly:** Manual failover test (production, off-peak hours)
- **Quarterly:** Full disaster recovery exercise (region failure simulation)

## Security Patterns

### Mutual TLS (mTLS) Authentication

**Challenge:** How to authenticate API consumers (agencies, partners, external developers) without passwords?

**Solution:** Mutual TLS (mTLS) - both client and server authenticate using X.509 certificates.

**Architecture Pattern:**

```
┌─────────────┐                    ┌──────────────┐
│  Tax Agency │                    │  API Gateway │
│  (Client)   │                    │  (Server)    │
└──────┬──────┘                    └──────┬───────┘
       │                                  │
       │ 1. Client Hello (TLS handshake) │
       │─────────────────────────────────►│
       │                                  │
       │ 2. Server Hello + Server Cert   │
       │◄─────────────────────────────────│
       │                                  │
       │ 3. Verify Server Cert            │
       │    (Issued by trusted CA?)       │
       │                                  │
       │ 4. Client Cert (X.509)           │
       │─────────────────────────────────►│
       │                                  │
       │ 5. Verify Client Cert            │
       │    (Issued by trusted CA?)       │
       │    (Not revoked?)                │
       │    (Extract client_id from CN)   │
       │                                  │
       │ 6. TLS Connection Established    │
       │◄────────────────────────────────►│
       │                                  │
       │ 7. API Request (Encrypted)       │
       │─────────────────────────────────►│
```

**Benefits:**
- No passwords or API keys (certificates are cryptographically secure)
- Mutual authentication (both client and server verify each other)
- Encrypted transport (TLS 1.3 encryption)
- Non-repudiation (certificate identifies client unambiguously)

**Implementation:**

1. **Certificate Authority (CA):** Establish internal CA or use trusted external CA (DigiCert, Let's Encrypt Enterprise).

2. **Certificate Issuance:** Issue client certificates to each API consumer (agency, partner, developer).

3. **Certificate Management:** Store certificates in secure vault (HashiCorp Vault, Azure Key Vault), auto-renew before expiry.

4. **Certificate Revocation:** Maintain Certificate Revocation List (CRL) or use Online Certificate Status Protocol (OCSP).

5. **Gateway Configuration:** Configure Kong/Apigee to require client certificates, validate against trusted CA.

**Example (Kong Configuration):**
```yaml
plugins:
  - name: mtls-auth
    config:
      ca_certificates:
        - "government-root-ca.crt"
      skip_consumer_lookup: false
      revocation_check_mode: SKIP
```

**Real-World Example:** Estonia X-Road uses mTLS for all inter-agency communication (3,000+ services, 15+ years, 0 major breaches).

### API Key Authentication (External Developers)

**Use Case:** External developers (startups, researchers, journalists) need simple authentication without certificates.

**Architecture Pattern:**

```
┌─────────────┐                    ┌──────────────┐
│  Developer  │                    │  API Gateway │
│  App        │                    │              │
└──────┬──────┘                    └──────┬───────┘
       │                                  │
       │ GET /api/v1/tax-statistics       │
       │ Header: X-API-Key: abc123xyz     │
       │─────────────────────────────────►│
       │                                  │
       │ 1. Extract API Key from header   │
       │ 2. Lookup consumer in database   │
       │ 3. Check rate limits (1000/day)  │
       │ 4. Check permissions (read-only) │
       │ 5. Forward to backend API        │
       │                                  │
       │ 200 OK + Response                │
       │◄─────────────────────────────────│
```

**Best Practices:**

1. **Key Generation:** Generate cryptographically random API keys (256-bit entropy).

2. **Key Rotation:** Require key rotation every 90 days, send reminder emails.

3. **Rate Limiting:** Enforce rate limits per API key (e.g., 1,000 requests per day).

4. **Least Privilege:** Grant minimum permissions needed (read-only for public APIs).

5. **Revocation:** Allow instant revocation if key compromised.

**Developer Portal Flow:**

1. Developer signs up for developer account (email verification).
2. Developer creates project (e.g., "Tax Statistics Dashboard").
3. Developer generates API key for project.
4. Developer uses API key in HTTP header: `X-API-Key: abc123xyz`.
5. Developer monitors usage in dashboard (requests per day, quota remaining).

**Security Considerations:**

- API keys are NOT as secure as mTLS (can be copied, leaked, stolen).
- Use API keys for public/open data APIs only (not sensitive data).
- Require HTTPS (TLS 1.3) to prevent key interception.
- Monitor for anomalous usage (sudden spike in requests = compromised key?).

### OAuth 2.0 + JWT (Citizen-Facing APIs)

**Use Case:** Citizen mobile apps need to access APIs on behalf of logged-in users.

**Architecture Pattern:**

```
┌─────────────┐  ┌──────────────┐  ┌──────────────┐
│  Citizen    │  │  Identity    │  │  API Gateway │
│  Mobile App │  │  Provider    │  │              │
└──────┬──────┘  └──────┬───────┘  └──────┬───────┘
       │                │                  │
       │ 1. Login       │                  │
       │───────────────►│                  │
       │                │                  │
       │ 2. ID Token +  │                  │
       │    Access Token│                  │
       │◄───────────────│                  │
       │                │                  │
       │ 3. API Request + Access Token     │
       │──────────────────────────────────►│
       │                │                  │
       │                │ 4. Validate JWT  │
       │                │    (Signature,   │
       │                │     Expiry,      │
       │                │     Scopes)      │
       │                │                  │
       │ 5. Forward to backend API         │
       │                │                  │
       │ 6. Response    │                  │
       │◄──────────────────────────────────│
```

**JWT Token Structure:**
```json
{
  "iss": "https://identity.gov.sg",
  "sub": "12345678",
  "aud": "https://api.gov.sg",
  "exp": 1697384400,
  "iat": 1697380800,
  "scope": "read:profile write:tax-filing",
  "citizen_id": "S1234567A"
}
```

**Gateway Validation:**

1. **Signature Verification:** Verify JWT signature using IdP's public key (RS256, ES256).

2. **Expiry Check:** Reject expired tokens (exp claim).

3. **Audience Check:** Verify token issued for this API (aud claim).

4. **Scope Check:** Verify token has required permissions (scope claim).

5. **Extract User Context:** Read user identity from token (sub, citizen_id), pass to backend API.

**Benefits:**
- No database lookup (JWT is self-contained)
- Fast authentication (<5ms validation time)
- Scales horizontally (stateless validation)
- Standard protocol (OAuth 2.0 + JWT)

### IP Whitelisting (Legacy Systems)

**Use Case:** Legacy systems that cannot implement mTLS or OAuth 2.0.

**Architecture Pattern:**

```
┌─────────────┐                    ┌──────────────┐
│  Legacy HR  │                    │  API Gateway │
│  System     │                    │              │
│  IP:        │                    │              │
│  10.1.2.3   │                    │              │
└──────┬──────┘                    └──────┬───────┘
       │                                  │
       │ GET /api/v1/employee-data        │
       │─────────────────────────────────►│
       │                                  │
       │ 1. Extract source IP: 10.1.2.3   │
       │ 2. Check IP whitelist            │
       │    ✓ 10.1.2.3 is allowed         │
       │ 3. Forward to backend API        │
       │                                  │
       │ 200 OK + Response                │
       │◄─────────────────────────────────│
```

**Best Practices:**

1. **Temporary Measure:** Use IP whitelisting only for legacy systems, plan migration to mTLS.

2. **Least Privilege:** Whitelist specific IP addresses (not entire subnets).

3. **Regular Review:** Review whitelist quarterly, remove unused entries.

4. **VPN Requirement:** Require VPN connection for remote systems (don't whitelist public IPs).

5. **Audit Logging:** Log all IP-whitelisted API calls for security audits.

**Security Limitations:**

- IP addresses can be spoofed (not cryptographically secure).
- IP addresses change (DHCP, cloud auto-scaling).
- No user context (cannot identify which user made request).

**Recommendation:** Use IP whitelisting as a temporary measure during migration to mTLS (6-12 month transition period).

### DDoS Protection & Rate Limiting

**Challenge:** APIs are vulnerable to Distributed Denial of Service (DDoS) attacks and abuse.

**Defense Layers:**

**Layer 1: CDN-Level DDoS Protection (Cloudflare, Akamai)**

- Block attacks at edge (before reaching gateway)
- Handle 100+ Gbps attacks
- Cost: $2,000-10,000/month

**Layer 2: Gateway-Level Rate Limiting (Kong, Apigee)**

- Limit requests per second per consumer (e.g., 100 req/sec per API key)
- Limit requests per day per consumer (e.g., 10,000 req/day per API key)
- Return 429 Too Many Requests when limit exceeded

**Layer 3: Application-Level Rate Limiting (Backend API)**

- Limit expensive operations (e.g., 10 database queries per minute per user)
- Implement CAPTCHA for suspicious traffic

**Rate Limiting Configuration (Kong Example):**
```yaml
plugins:
  - name: rate-limiting
    config:
      second: 100          # 100 requests per second
      minute: 1000         # 1,000 requests per minute
      hour: 10000          # 10,000 requests per hour
      day: 100000          # 100,000 requests per day
      policy: cluster      # Share counters across gateway nodes
      fault_tolerant: true # Don't block if Redis is down
```

## Developer Experience

### API Catalog & Documentation Portal

**Challenge:** Developers need to discover APIs, read documentation, test in sandbox, and generate API keys.

**Portal Components:**

**1. API Catalog (Discovery)**

```
┌────────────────────────────────────────────────┐
│  Government API Catalog                       │
│  ┌──────────────────────────────────────────┐ │
│  │  Search: "tax"                           │ │
│  └──────────────────────────────────────────┘ │
│                                                │
│  Tax Filing API                        REST   │
│  Submit personal tax returns                   │
│  ⭐⭐⭐⭐⭐ 4.8/5.0  📊 1.5M calls/month      │
│                                                │
│  Tax Statistics API                    REST   │
│  Public tax statistics (anonymized)            │
│  ⭐⭐⭐⭐☆ 4.2/5.0  📊 500K calls/month       │
│                                                │
│  Corporate Tax API                     REST   │
│  Corporate tax returns and compliance          │
│  ⭐⭐⭐⭐⭐ 4.7/5.0  📊 800K calls/month      │
└────────────────────────────────────────────────┘
```

**Features:**
- Search by keyword, category, agency
- Filter by authentication method (API key, OAuth, mTLS)
- Sort by popularity, rating, recency
- Show API status (operational, degraded, deprecated)

**2. API Documentation (OpenAPI/Swagger)**

```yaml
openapi: 3.0.0
info:
  title: Tax Filing API
  version: 1.0.0
  description: Submit personal tax returns
servers:
  - url: https://api.gov.sg/v1
paths:
  /tax/filing:
    post:
      summary: Submit tax return
      requestBody:
        content:
          application/json:
            schema:
              type: object
              properties:
                citizen_id:
                  type: string
                  example: "S1234567A"
                income:
                  type: number
                  example: 50000
      responses:
        '200':
          description: Tax return submitted successfully
        '400':
          description: Invalid input
        '401':
          description: Unauthorized
```

**Auto-Generated Documentation:**
- Request/response schemas (JSON, XML)
- Authentication requirements
- Rate limits
- Example requests (cURL, Postman)
- Example responses
- Error codes and meanings

**3. Sandbox Environment (Testing)**

```
┌─────────────┐                    ┌──────────────┐
│  Developer  │                    │  Sandbox     │
│  (Testing)  │                    │  Environment │
└──────┬──────┘                    └──────┬───────┘
       │                                  │
       │ POST /tax/filing (Test Data)     │
       │─────────────────────────────────►│
       │                                  │
       │ Mock Response (No Real Data)     │
       │◄─────────────────────────────────│
```

**Sandbox Features:**
- Test API without affecting production data
- Pre-populated test data (sample citizens, tax returns)
- No rate limits (unlimited testing)
- Same API contract as production (easy migration)

**4. SDK Generation (Client Libraries)**

Auto-generate client libraries from OpenAPI specification:

- **JavaScript/TypeScript:** axios, fetch
- **Python:** requests, httpx
- **Java:** OkHttp, Spring RestTemplate
- **Go:** net/http
- **C#:** HttpClient

**Example (Python SDK):**
```python
from gov_api import TaxFilingAPI

api = TaxFilingAPI(api_key="abc123xyz")

response = api.submit_tax_return(
    citizen_id="S1234567A",
    income=50000,
    deductions=5000
)

print(response.status)  # "submitted"
print(response.reference_id)  # "TAX-2023-12345"
```

**Portal Solutions:**

| Solution | Type | Strengths | Best For |
|----------|------|-----------|----------|
| **Kong Dev Portal** | Open Source (Enterprise) | Integrated with Kong Gateway | Kong users |
| **Swagger UI** | Open Source | Simple, widely adopted | Small governments |
| **Backstage (Spotify)** | Open Source | Developer platform (not just APIs) | Large governments |
| **Apigee Developer Portal** | Commercial | Integrated analytics, monetization | Apigee users |
| **RapidAPI** | Commercial SaaS | Marketplace for public APIs | API monetization |

**Real-World Example:** Singapore APEX Developer Portal (https://www.developer.tech.gov.sg) - 500+ APIs, OpenAPI documentation, sandbox environment, auto-generated SDKs.

## Operational Model

### 24/7 Monitoring & Alerting

**Requirement:** Monitor API Gateway 24/7 to detect performance degradation, security threats, and outages.

**Monitoring Stack:**

**1. Infrastructure Monitoring (Datadog, New Relic, Prometheus)**

- Gateway node CPU/memory/disk usage
- Network throughput (requests per second, bandwidth)
- Redis cluster health (memory usage, replication lag)
- Load balancer health (active connections, backend health)

**2. API Performance Monitoring (Kong Vitals, Apigee Analytics)**

- API latency (p50, p95, p99)
- API error rate (4xx, 5xx errors)
- API traffic volume (requests per second per API)
- API consumer behavior (top consumers, quota usage)

**3. Security Monitoring (SIEM, WAF Logs)**

- Suspicious traffic patterns (sudden spike from single IP)
- Authentication failures (brute-force attacks)
- Unusual API usage (accessing deprecated APIs, scraping behavior)
- DDoS attacks (requests per second exceeds threshold)

**Alerting Rules:**

| Alert | Trigger | Severity | Response Time |
|-------|---------|----------|---------------|
| Gateway node down | Health check fails 3 times | P1 (High) | 15 minutes |
| API error rate >5% | Error rate exceeds 5% for 5 minutes | P1 (High) | 15 minutes |
| API latency >1 second (p95) | Latency exceeds 1 second for 5 minutes | P2 (Medium) | 1 hour |
| Redis cluster down | Master and replica both down | P0 (Critical) | 5 minutes |
| DDoS attack detected | Requests per second >100K | P0 (Critical) | 5 minutes |

**Incident Response:**

1. **Automated Response (30 seconds):**
   - Auto-scale gateway nodes (add 2 nodes)
   - Enable aggressive rate limiting (reduce limits by 50%)
   - Activate DDoS protection (Cloudflare Under Attack Mode)

2. **Human Response (15 minutes):**
   - On-call engineer investigates alert
   - Determines root cause (backend API slow? Database overload? DDoS attack?)
   - Implements mitigation (restart failed node, scale backend API, block malicious IPs)

3. **Communication (30 minutes):**
   - Update status page (https://status.api.gov.sg)
   - Post to social media (Twitter, Facebook)
   - Email affected API consumers

### API Versioning & Deprecation

**Challenge:** How to evolve APIs without breaking existing integrations?

**Versioning Strategies:**

**Option 1: URL Versioning (Recommended)**

```
GET /api/v1/tax-filing   (Version 1, stable)
GET /api/v2/tax-filing   (Version 2, new features)
```

**Advantages:**
- Clear versioning (developers see version in URL)
- Easy to route (gateway routes /v1 to old backend, /v2 to new backend)
- Simple to deprecate (remove /v1 route after sunset period)

**Disadvantages:**
- URL changes (developers must update code)
- Multiple versions to maintain

**Option 2: Header Versioning**

```
GET /api/tax-filing
Header: Accept: application/vnd.gov.v1+json
```

**Advantages:**
- URL stays the same (developers don't change code)
- Flexible (can version per resource, not per API)

**Disadvantages:**
- Hidden versioning (developers may not notice header requirement)
- Complex routing (gateway must inspect headers)

**Recommendation:** Use URL versioning for major changes (breaking changes), header versioning for minor changes (backward-compatible).

**Deprecation Process:**

**Phase 1: Announce Deprecation (6 months before sunset)**
- Publish deprecation notice on developer portal
- Email all API consumers using deprecated version
- Add deprecation warning header to API responses:
  ```
  X-API-Deprecated: true
  X-API-Sunset-Date: 2024-12-31
  X-API-Migration-Guide: https://docs.api.gov.sg/v1-to-v2-migration
  ```

**Phase 2: Migration Period (6 months)**
- Provide migration guide (code examples, breaking changes list)
- Offer migration support (office hours, email support)
- Monitor adoption (% of traffic on v1 vs. v2)
- Send monthly reminder emails to consumers still on v1

**Phase 3: Sunset (After 6 months)**
- Stop accepting requests to /v1 (return 410 Gone)
- Redirect to migration guide
- Monitor for complaints (extend sunset if needed)

**Example (Kong Plugin):**
```yaml
plugins:
  - name: request-termination
    route: api-v1
    config:
      status_code: 410
      message: "API v1 has been deprecated. Please migrate to v2. See https://docs.api.gov.sg/v1-to-v2-migration"
```

## Real-World Examples

### Singapore APEX: Centralized Excellence

**Background:** Singapore's national API Gateway serves 500+ government APIs with 2B+ transactions annually.

**Architecture Highlights:**

- **Centralized Gateway:** All government APIs route through APEX (based on Apigee).
- **Developer Portal:** Public catalog of 500+ APIs, OpenAPI documentation, sandbox environment.
- **Standardized Authentication:** OAuth 2.0 for citizen-facing APIs, mTLS for agency-to-agency.
- **High Performance:** 99.95% uptime, <200ms latency (p95), 10,000+ requests per second.
- **Cost Transparency:** APIs metered and billed to consuming agencies (chargeback model).

**Key Success Factors:**

1. **Executive Mandate:** Smart Nation initiative, Government Technology Agency (GovTech) operates APEX.
2. **Standardization:** All APIs must use APEX (no direct agency-to-agency connections).
3. **Developer Experience:** Invest heavily in developer portal, documentation, SDKs.
4. **API Design Standards:** Enforce REST API design guidelines (consistent URL structure, error codes).
5. **Cost Allocation:** Agencies pay for API usage (creates financial incentive to optimize).

**Lessons Learned:**

- Centralized gateway simplifies governance (one team enforces standards).
- Developer portal drives adoption (500+ APIs discovered and integrated).
- Cost allocation creates accountability (agencies optimize API usage to reduce costs).
- Commercial platform (Apigee) provides enterprise features (analytics, monetization).

**Resources:**
- APEX Website: https://www.developer.tech.gov.sg
- APEX Architecture: https://www.tech.gov.sg/products-and-services/apex/

### Estonia X-Road: Federated Resilience

**Background:** Estonia's X-Road serves 3,000+ services with 99.999% uptime and 1.5B+ queries annually.

**Architecture Highlights:**

- **Federated Architecture:** Each agency operates their own "Security Server" (X-Road node).
- **Mutual TLS (mTLS):** All inter-agency communication authenticated with X.509 certificates.
- **Audit Transparency:** Every data exchange logged centrally, citizens can audit who accessed their data.
- **Cross-Border:** X-Road used by Finland, Iceland, Namibia, Kyrgyzstan (interoperable data exchange).
- **Open Source:** X-Road is open source (Apache 2.0 license), operated by Nordic Institute.

**Key Success Factors:**

1. **Legal Foundation:** Data Exchange Layer Act (2000) established legal framework for X-Road.
2. **Agency Sovereignty:** Each agency operates their own security server (no central bottleneck).
3. **Privacy by Design:** Data stays at source (not centralized), citizens audit data access logs.
4. **Governance:** X-Road Oversight Committee (government + private sector) governs standards.
5. **Open Source:** X-Road code is open source (transparency, trust, international adoption).

**Lessons Learned:**

- Federated architecture provides resilience (no single point of failure).
- mTLS authentication is enterprise-grade (0 major breaches in 15+ years).
- Audit transparency builds citizen trust (citizens can see who accessed their data).
- Open source enables international adoption (Finland, Iceland, Namibia use same codebase).

**Challenges:**

- Complex governance (requires inter-agency coordination).
- Higher operational cost (each agency operates security server).
- Steep learning curve (X-Road training required for IT teams).

**Resources:**
- X-Road Website: https://x-road.global
- X-Road GitHub: https://github.com/nordic-institute/X-Road
- X-Road Architecture: https://x-road.global/architecture

### UK API Standards: Design-First Approach

**Background:** UK Government Digital Service (GDS) established API design standards used across 100+ government departments.

**Key Standards:**

1. **RESTful API Design:** Use HTTP verbs (GET, POST, PUT, DELETE), resource-based URLs.

2. **URL Structure:** `/api/v1/resource/:id` (no verbs in URLs).

3. **JSON Responses:** Use JSON for responses (not XML), snake_case naming.

4. **Error Handling:** Consistent error responses with error codes and human-readable messages.

5. **Pagination:** Use limit/offset pagination (e.g., `/api/v1/users?limit=20&offset=40`).

6. **Rate Limiting:** Return rate limit headers (`X-RateLimit-Limit`, `X-RateLimit-Remaining`).

**Example (GOV.UK Notify API):**

```bash
curl -X POST "https://api.notifications.service.gov.uk/v2/notifications/email" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "email_address": "citizen@example.com",
    "template_id": "abc123",
    "personalisation": {
      "name": "John Smith",
      "reference": "TAX-2023-12345"
    }
  }'
```

**Response:**
```json
{
  "id": "notification-id-123",
  "reference": "TAX-2023-12345",
  "content": {
    "subject": "Your tax return has been submitted",
    "body": "Dear John Smith, your tax return TAX-2023-12345 has been successfully submitted."
  },
  "template": {
    "id": "abc123",
    "version": 1
  }
}
```

**Key Success Factors:**

1. **Design Standards First:** Publish API standards before building APIs (consistency from day 1).
2. **Code Examples:** Provide code examples in multiple languages (Python, JavaScript, Ruby, Java).
3. **Open Source Client Libraries:** Publish official client libraries (Python, JavaScript, Java, C#).
4. **Community Feedback:** Public GitHub repository for standards (accept community contributions).

**Resources:**
- UK API Standards: https://www.gov.uk/guidance/gds-api-technical-and-data-standards
- GOV.UK Notify API: https://docs.notifications.service.gov.uk

## 12-Month Deployment Roadmap

### Phase 1: Foundation (Months 1-3)

**Objective:** Deploy core API Gateway infrastructure and establish governance.

**Month 1: Requirements & Procurement**
- Define API Gateway requirements (performance, security, compliance)
- Conduct technology evaluation (Kong vs. Apigee vs. AWS)
- Issue RFP for API Gateway platform (if buying commercial)
- Establish API governance committee (API Standards, Security, Operations)

**Month 2: Platform Deployment**
- Deploy API Gateway to staging environment (3 nodes, Redis cluster)
- Configure authentication methods (API key, OAuth 2.0, mTLS)
- Deploy monitoring infrastructure (Datadog, Prometheus, Grafana)
- Conduct penetration testing (OWASP Top 10, API security)

**Month 3: Governance & Standards**
- Publish API Design Standards (RESTful, URL structure, error handling)
- Publish API Security Standards (authentication, rate limiting, encryption)
- Create API onboarding process (documentation requirements, approval workflow)
- Launch developer portal (API catalog, documentation, sandbox)

**Key Deliverables:**
- API Gateway deployed to production (3 nodes, 99.9% availability)
- API Design Standards published
- Developer portal launched (empty, no APIs yet)
- Governance committee established (monthly meetings)

**Success Metrics:**
- Gateway uptime 99.9%+ (staging environment)
- <20ms gateway latency (p95)
- Penetration testing passed (all critical findings remediated)

### Phase 2: Pilot APIs (Months 4-6)

**Objective:** Onboard first 10 APIs and validate architecture.

**Month 4-5: API Onboarding**
- Select 10 pilot APIs (mix of high-traffic and low-traffic)
- Work with API teams to publish OpenAPI documentation
- Integrate APIs with gateway (routing, authentication, rate limiting)
- Deploy APIs to sandbox environment (testing)

**Month 6: Pilot Launch**
- Deploy 10 APIs to production
- Onboard 20 API consumers (agencies, partners, developers)
- Process 10M+ API calls
- Measure API performance (latency, error rate, availability)
- Gather developer feedback (survey, interviews)

**Key Deliverables:**
- 10 APIs published to production
- 20 API consumers onboarded
- 10M+ API calls processed
- Developer feedback collected (average 4.0+ out of 5.0 satisfaction)

**Success Metrics:**
- API availability 99.9%+ (per-API measurement)
- API latency <200ms p95 (including backend processing)
- API error rate <0.1% (excluding backend errors)
- Developer satisfaction 4.0+ out of 5.0

### Phase 3: Scale to 100+ APIs (Months 7-12)

**Objective:** Scale to 100+ APIs, establish operational excellence.

**Month 7-9: API Expansion**
- Onboard 90 additional APIs (total 100+)
- Launch self-service API onboarding (API teams onboard without manual approval)
- Deploy multi-region architecture (primary + secondary data center)
- Establish 24/7 support operations (API help desk)

**Month 10-11: Operational Maturity**
- Achieve 99.99% availability (multi-region deployment)
- Implement automated load testing (test every API weekly)
- Launch API marketplace (external developers can discover and use public APIs)
- Establish API cost allocation model (chargeback to consuming agencies)

**Month 12: Optimization & Documentation**
- Conduct capacity planning (predict traffic growth for next 12 months)
- Optimize gateway performance (caching, connection pooling)
- Publish annual API report (usage statistics, top APIs, growth trends)
- Celebrate success (100+ APIs launched, 1B+ API calls processed)

**Key Deliverables:**
- 100+ APIs published to production
- 99.99% availability achieved (multi-region)
- API marketplace launched (external developer access)
- Annual API report published

**Success Metrics:**
- 99.99% availability (52 minutes downtime per year)
- 100+ APIs published
- 1B+ API calls processed
- 100+ external developers onboarded
- 4.5+ out of 5.0 developer satisfaction

## Success Metrics

### Key Performance Indicators (KPIs)

**Availability & Performance:**

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Gateway uptime | 99.99% (52 min downtime/year) | Synthetic monitoring (Pingdom) |
| API latency (p95, gateway only) | <20ms | APM (Datadog, New Relic) |
| API latency (p95, end-to-end) | <200ms | APM (including backend processing) |
| API error rate (4xx+5xx) | <0.1% | Log analysis (excluding backend errors) |
| Gateway throughput | 10,000+ req/sec | Load balancer metrics |

**Adoption:**

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| APIs published | 100+ by Month 12 | API registry count |
| API consumers | 100+ by Month 12 | Developer portal registrations |
| API calls per year | 1B+ by Month 12 | Log analysis |
| External developers | 100+ by Month 12 | Developer portal registrations (external domain) |

**Developer Experience:**

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Developer satisfaction | 4.5+ out of 5.0 | Post-integration survey |
| Time to first API call | <1 hour | Developer portal analytics (signup to first call) |
| Documentation quality | 4.5+ out of 5.0 | Documentation feedback survey |
| Sandbox usage | 50%+ of developers test in sandbox | Developer portal analytics |

**Security:**

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Critical vulnerabilities | 0 open | Security scanning (Qualys) |
| High vulnerabilities | <5 open | Security scanning (Qualys) |
| DDoS attacks blocked | 100% blocked | WAF logs (Cloudflare, Akamai) |
| Authentication failures | <0.01% | Log analysis (brute-force attempts) |

**Cost Efficiency:**

| Metric | Target | Measurement Method |
|--------|--------|--------------------|
| Cost per API call | <$0.001 | (Total operating cost / Total API calls) |
| Cost per API published | <$10,000/year | (Total operating cost / Number of APIs) |
| Gateway infrastructure cost | <$500K/year | Cloud provider bills (compute, storage, network) |

---

## Conclusion

Deploying a national API Gateway is the foundation for digital government interoperability. Success requires:

1. **Start with centralized gateway:** Use Kong or Apigee for quick wins, plan migration to federated X-Road as maturity grows.

2. **Pilot before scaling:** Start with 10 APIs, validate architecture, then scale to 100+ APIs.

3. **Invest in developer experience:** Developer portal, OpenAPI documentation, sandbox environment, auto-generated SDKs.

4. **Security is non-negotiable:** mTLS for inter-agency, OAuth 2.0 for citizen-facing, DDoS protection at CDN layer.

5. **Operate 24/7:** Monitor API Gateway 24/7, respond to incidents in <15 minutes, achieve 99.99% availability.

6. **Measure and optimize:** Track KPIs (uptime, latency, adoption), publish API usage statistics, optimize costs.

**Next Steps:**
- Review this playbook with API Gateway vendor/partner
- Conduct architecture design workshop with technical team
- Develop detailed implementation plan with milestones and budget
- Establish API governance committee (standards, security, operations)

**References:**
- Singapore APEX: https://www.developer.tech.gov.sg
- Estonia X-Road: https://x-road.global
- UK API Standards: https://www.gov.uk/guidance/gds-api-technical-and-data-standards
- OWASP API Security: https://owasp.org/www-project-api-security/

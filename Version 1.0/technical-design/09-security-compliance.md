# GaaS Platform - Security & Compliance Architecture

**Document:** 09 - Security & Compliance
**Version:** 1.0
**Date:** October 2025
**Status:** Design Phase

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Zero-Trust Architecture](#zero-trust-architecture)
3. [Identity & Access Management](#identity--access-management)
4. [Data Protection](#data-protection)
5. [Compliance Frameworks](#compliance-frameworks)
6. [Audit Logging & Monitoring](#audit-logging--monitoring)
7. [Vulnerability Management](#vulnerability-management)
8. [Incident Response](#incident-response)
9. [Supply Chain Security](#supply-chain-security)
10. [Physical & Infrastructure Security](#physical--infrastructure-security)

---

## Executive Summary

Security is not optional for government platforms. Citizens entrust governments with their most sensitive personal data --- identity documents, tax records, health information, legal proceedings --- and that trust demands the highest possible standard of protection. A breach in a government platform is not merely a business liability; it is a failure of the social contract.

GaaS Platform implements a **zero-trust security architecture** as its foundational security posture. Every request is authenticated and authorized regardless of origin. Every data flow is encrypted. Every action is logged immutably. This document defines the security architecture, compliance framework, and audit capabilities that enable governments to deploy GaaS Platform with confidence, meeting or exceeding the requirements of GDPR, ISO 27001, NIST CSF, SOC 2, and country-specific regulations worldwide.

The architecture follows three guiding principles:

- **Defense in Depth:** No single control prevents all threats. Multiple overlapping layers --- network, application, data, identity --- each provide independent protection.
- **Least Privilege:** Every user, service, and process receives the minimum access required to perform its function. Access is granted explicitly, never assumed.
- **Assume Breach:** The architecture is designed under the assumption that any perimeter can be compromised. Internal controls, segmentation, and monitoring detect and contain threats that penetrate outer defenses.

---

## Zero-Trust Architecture

### Core Principles

GaaS Platform adopts a zero-trust model aligned with **NIST SP 800-207 (Zero Trust Architecture)**. Traditional perimeter-based security ("castle and moat") assumes that traffic inside the network is trustworthy. This assumption is dangerous for government platforms that face sophisticated nation-state threats, insider risks, and supply chain attacks.

Zero trust eliminates the concept of a trusted network zone. Every request --- whether originating from an internal microservice, an administrator workstation, or a citizen's mobile device --- must prove its legitimacy.

```
┌──────────────────────────────────────────────────────────────────────┐
│                        ZERO-TRUST CONTROL PLANE                      │
│                                                                      │
│  ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐   │
│  │  Policy    │  │  Identity  │  │  Threat    │  │  Compliance│   │
│  │  Engine    │  │  Provider  │  │  Intel     │  │  Engine    │   │
│  │            │  │  (Keycloak)│  │  (SIEM)    │  │            │   │
│  └──────┬─────┘  └──────┬─────┘  └──────┬─────┘  └──────┬─────┘   │
│         └───────────┬────┴───────────────┴───────────────┘          │
│                     │ Policy Decision Point (PDP)                    │
└─────────────────────┼────────────────────────────────────────────────┘
                      │
        ┌─────────────▼──────────────┐
        │   Policy Enforcement       │
        │   Point (PEP)              │
        │   - API Gateway            │
        │   - Service Mesh (Istio)   │
        │   - Database RLS           │
        └─────────────┬──────────────┘
                      │
    ┌─────────────────┼─────────────────┐
    │                 │                 │
    ▼                 ▼                 ▼
┌─────────┐   ┌─────────────┐   ┌──────────┐
│ Citizen  │   │ Internal    │   │ Service  │
│ Request  │   │ Admin       │   │ to       │
│          │   │ Request     │   │ Service  │
└─────────┘   └─────────────┘   └──────────┘

Every request → Authenticate → Authorize → Encrypt → Log → Allow/Deny
```

### Identity-Centric Security

Every request carries verifiable identity context. Anonymous access is limited to explicitly designated public endpoints (e.g., public service catalog listings). The identity context includes:

- **Who:** Authenticated user or service identity (JWT claims)
- **What:** Requested resource and operation (HTTP method + path)
- **Where:** Source IP, device fingerprint, geographic location
- **When:** Timestamp, session age, time-of-day policy
- **How:** Authentication strength (password, MFA, certificate)

### Micro-Segmentation

Network segmentation alone is insufficient. GaaS Platform implements micro-segmentation at three layers:

| Layer | Mechanism | Purpose |
|-------|-----------|---------|
| **Network** | Kubernetes NetworkPolicies, Calico | Restrict pod-to-pod communication to declared dependencies |
| **Service** | Istio service mesh with mTLS | Authenticate and encrypt all inter-service traffic |
| **Data** | PostgreSQL Row-Level Security (RLS) | Enforce domain isolation at the query level |

### Continuous Verification

Authentication is not a one-time event. GaaS Platform continuously evaluates trust through:

- **Short-lived access tokens** (15-minute JWT expiry)
- **Session risk scoring** (anomalous behavior triggers re-authentication)
- **Device posture checks** for administrative access (OS patch level, disk encryption)
- **Geofencing** for sensitive operations (configurable per deployment)

### Network Architecture

All traffic is encrypted regardless of origin or destination. There are no "trusted" network segments.

| Traffic Path | Encryption | Authentication |
|-------------|------------|----------------|
| Client to API Gateway | TLS 1.3 | OAuth 2.0 Bearer Token |
| API Gateway to Service | mTLS (Istio) | JWT propagation |
| Service to Service | mTLS (Istio) | Service account JWT |
| Service to Database | TLS 1.3 | Certificate + credentials (Vault) |
| Service to Redis | TLS 1.3 | Password (Vault-managed) |
| Service to Elasticsearch | TLS 1.3 | API key (Vault-managed) |
| Backup to Object Storage | TLS 1.3 + AES-256 at rest | IAM role-based |

---

## Identity & Access Management

### Keycloak Configuration

Keycloak serves as the central Identity Provider (IdP) for GaaS Platform. It manages user identities, authentication flows, and token issuance for all platform interactions.

**Realm Structure:**

```
GaaS Keycloak
├── Realm: gaas-platform
│   ├── Client: gaas-admin-console (React Admin UI)
│   ├── Client: gaas-citizen-portal (Citizen-facing UI)
│   ├── Client: gaas-api-gateway (Backend service auth)
│   ├── Client: gaas-mobile-app (iOS/Android)
│   │
│   ├── Identity Providers
│   │   ├── eIDAS Bridge (EU citizen identity)
│   │   ├── Government SSO (SAML 2.0)
│   │   ├── Social Login (OpenID Connect) [citizen portal only]
│   │   └── X.509 Certificate (admin workstations)
│   │
│   ├── Roles (Realm-Level)
│   │   ├── platform-admin
│   │   ├── domain-admin
│   │   ├── service-owner
│   │   ├── technician
│   │   ├── analyst
│   │   ├── auditor (read-only, all domains)
│   │   └── citizen
│   │
│   └── Authentication Flows
│       ├── Admin Flow: Password + TOTP (mandatory)
│       ├── Technician Flow: Password + TOTP (mandatory)
│       ├── Citizen Flow: Password + optional TOTP
│       └── Service Flow: Client credentials (mTLS)
```

### Multi-Factor Authentication Requirements

MFA is not optional for privileged roles. The platform enforces MFA strength proportional to access level:

| Role | MFA Requirement | Accepted Factors |
|------|----------------|------------------|
| **Platform Admin** | Mandatory, hardware key preferred | FIDO2/WebAuthn, TOTP |
| **Domain Admin** | Mandatory | FIDO2/WebAuthn, TOTP |
| **Service Owner** | Mandatory | TOTP, SMS (fallback only) |
| **Technician** | Mandatory | TOTP, SMS (fallback only) |
| **Analyst** | Mandatory | TOTP |
| **Auditor** | Mandatory, hardware key preferred | FIDO2/WebAuthn, TOTP |
| **Citizen** | Encouraged, optional by default | TOTP, SMS, email OTP |

Deploying governments may adjust citizen MFA policies based on local digital literacy and device availability. The platform supports step-up authentication: citizens may browse the service catalog without MFA but must complete MFA before submitting requests containing personal data.

### Citizen Identity Integration

GaaS Platform integrates with national and supranational identity systems through standard federation protocols:

- **eIDAS (EU):** SAML 2.0 bridge for EU Member State eID schemes
- **SAML 2.0:** Integration with government SSO gateways (e.g., UK Verify, Singapore SingPass)
- **OpenID Connect:** Modern identity providers and social login for low-sensitivity citizen interactions
- **X.509 Certificates:** Smart card / eID card authentication for administrative users

### Service-to-Service Authentication

Internal microservices authenticate using mutual TLS (mTLS) enforced by the Istio service mesh. Each service receives a short-lived X.509 certificate from the Istio CA (or an external CA integrated via cert-manager). Additionally, services propagate JWT tokens to carry user context through the call chain.

```yaml
# Istio PeerAuthentication - enforce mTLS cluster-wide
apiVersion: security.istio.io/v1beta1
kind: PeerAuthentication
metadata:
  name: default
  namespace: gaas-production
spec:
  mtls:
    mode: STRICT
```

### Privileged Access Management (PAM)

Administrative functions (database access, Kubernetes cluster management, Keycloak configuration) are protected by additional controls:

- **Just-in-Time (JIT) access:** Admins request elevated privileges for a defined window (max 4 hours). Access is revoked automatically on expiry.
- **Session recording:** All privileged sessions are recorded for forensic review.
- **Break-glass procedures:** Emergency access bypasses normal approval workflows but triggers immediate alerts and mandatory post-incident review.
- **Secrets rotation:** HashiCorp Vault rotates database credentials, API keys, and service account tokens on a scheduled basis (default: 24 hours for database credentials, 90 days for API keys).

### Session Management

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| Access token lifetime | 15 minutes | Limits exposure window if token is compromised |
| Refresh token lifetime | 7 days | Balances security with user convenience |
| Idle session timeout | 30 minutes (admin), 2 hours (citizen) | Prevents unattended session hijacking |
| Absolute session lifetime | 12 hours (admin), 24 hours (citizen) | Forces periodic re-authentication |
| Concurrent sessions | 3 max per user | Detects credential sharing |

---

## Data Protection

### Encryption at Rest

All data at rest is encrypted using AES-256. Key management follows a hierarchical model:

```
Master Key (HSM or KMS)
├── Domain Encryption Key: Healthcare
│   ├── Table Key: incidents
│   ├── Table Key: service_requests
│   └── Table Key: citizen_data
├── Domain Encryption Key: Education
│   ├── Table Key: incidents
│   └── ...
├── Backup Encryption Key
└── Audit Log Encryption Key
```

- **PostgreSQL:** Transparent Data Encryption (TDE) via pgcrypto extension, or volume-level encryption (LUKS/dm-crypt, AWS EBS encryption, or equivalent)
- **Elasticsearch:** Encrypted indices using searchable encryption where supported, or volume-level encryption
- **Redis:** Encrypted persistence (RDB/AOF on encrypted volumes), in-memory data protected by network isolation and mTLS
- **Object Storage (MinIO/S3):** Server-side encryption with customer-managed keys (SSE-C or SSE-KMS)
- **Backups:** Encrypted with a dedicated backup key before transfer to offsite storage

### Encryption in Transit

TLS 1.3 is the minimum acceptable version for all connections. TLS 1.2 is permitted only for legacy government system integrations and must be documented as a risk exception with a remediation timeline.

```yaml
# Ingress TLS configuration
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: gaas-ingress
  annotations:
    nginx.ingress.kubernetes.io/ssl-protocols: "TLSv1.3"
    nginx.ingress.kubernetes.io/ssl-ciphers: "TLS_AES_256_GCM_SHA384:TLS_CHACHA20_POLY1305_SHA256"
    nginx.ingress.kubernetes.io/hsts: "true"
    nginx.ingress.kubernetes.io/hsts-max-age: "31536000"
    nginx.ingress.kubernetes.io/hsts-include-subdomains: "true"
spec:
  tls:
    - hosts:
        - gaas.example.gov
      secretName: gaas-tls-cert
```

### Data Classification

All data stored in GaaS Platform is classified according to a four-tier scheme. Classification determines encryption requirements, access controls, retention periods, and handling procedures.

| Classification | Description | Examples | Access | Retention |
|---------------|-------------|----------|--------|-----------|
| **Public** | Openly available information | Service catalog, public reports, open data feeds | Unauthenticated | Indefinite |
| **Internal** | Government operational data | Incident metrics, change schedules, PPT dashboards | Authenticated government users | 5 years |
| **Confidential** | Sensitive operational or personal data | Citizen requests, personnel records, cost allocations | Role-based, domain-scoped | 7 years, then anonymize |
| **Secret** | Highly sensitive data requiring maximum protection | Security audit findings, vulnerability reports, encryption keys | Named individuals, MFA + PAM | Per policy, secure disposal |

### Right to Erasure (GDPR Article 17)

GaaS Platform implements a structured erasure process that balances citizen rights with government record-keeping obligations:

1. **Erasure Request:** Citizen submits request via portal or API (`POST /api/v1/privacy/erasure-requests`)
2. **Validation:** Platform identifies all data linked to the citizen identity across all services
3. **Legal Hold Check:** Automated check against active legal holds, regulatory retention requirements, and archival obligations
4. **Selective Erasure:** Personal data is deleted or pseudonymized. Transactional records required for government accountability are pseudonymized (citizen identity replaced with an irreversible hash) rather than deleted.
5. **Propagation:** Erasure propagated to all microservices, search indices, backups (marked for exclusion on next restoration), and analytics pipelines
6. **Confirmation:** Citizen receives confirmation within 30 days (GDPR deadline)
7. **Audit:** The erasure action itself is logged (what was erased, when, by which process) without re-recording the personal data

### Data Masking for Non-Production Environments

Production data is never copied directly to staging or development environments. A data masking pipeline produces realistic but synthetic data:

- **Names:** Replaced with locale-appropriate synthetic names
- **Email addresses:** Replaced with `user_[hash]@test.gaas.local`
- **National IDs:** Replaced with structurally valid but fictitious identifiers
- **Addresses:** Replaced with synthetic addresses in the correct geographic region
- **Dates of birth:** Shifted by a random offset (preserving age distribution)

### Backup Encryption and Secure Disposal

All backups are encrypted with a dedicated backup encryption key stored in HashiCorp Vault. Backup media (physical or cloud storage volumes) follows secure disposal procedures:

- **Cloud storage:** Cryptographic erasure (destroy the encryption key, rendering data unrecoverable)
- **Physical media:** NIST SP 800-88 compliant sanitization (Clear, Purge, or Destroy depending on classification)

---

## Compliance Frameworks

### GDPR Compliance Matrix

| GDPR Article | Requirement | GaaS Implementation |
|-------------|-------------|---------------------|
| Art. 5 | Data processing principles | Data classification scheme, purpose limitation in API design |
| Art. 6 | Lawful basis for processing | Consent management module, legal basis recorded per data element |
| Art. 7 | Conditions for consent | Granular consent UI, withdrawal mechanism, consent audit trail |
| Art. 12-14 | Transparency and information | Privacy dashboard for citizens, machine-readable privacy policy |
| Art. 15 | Right of access | `GET /api/v1/privacy/data-export` --- citizen data export in JSON/CSV |
| Art. 16 | Right to rectification | Self-service profile editing, correction request workflow |
| Art. 17 | Right to erasure | Automated erasure pipeline (see Data Protection section) |
| Art. 20 | Data portability | Standard export formats (JSON, CSV), API-based extraction |
| Art. 25 | Data protection by design | Privacy impact assessment for each module, data minimization |
| Art. 30 | Records of processing | Automated processing activity register, exportable for DPA |
| Art. 32 | Security of processing | This entire document; encryption, access control, monitoring |
| Art. 33-34 | Breach notification | Incident response procedures (see section below) |
| Art. 35 | Data protection impact assessment | DPIA template integrated into change management workflow |
| Art. 37-39 | Data Protection Officer | DPO role in platform RBAC, direct access to audit logs |

### ISO/IEC 27001 Controls Mapping

GaaS Platform maps to all 93 controls in ISO/IEC 27001:2022 Annex A. Key control implementations:

| Control | Category | GaaS Implementation |
|---------|----------|---------------------|
| A.5.1 | Information security policies | Policy-as-code in Git, versioned and auditable |
| A.6.1 | Screening | Integration with government HR vetting systems |
| A.7.1 | Physical security perimeters | Cloud provider certifications (SOC 2, ISO 27001) |
| A.8.1 | User endpoint devices | Device posture checks for admin access |
| A.8.3 | Information access restriction | RBAC + ABAC + domain isolation (RLS) |
| A.8.5 | Secure authentication | MFA enforcement, Keycloak policies |
| A.8.9 | Configuration management | GitOps, immutable infrastructure, Terraform |
| A.8.12 | Data leakage prevention | Egress controls, DLP scanning on file uploads |
| A.8.15-16 | Logging and monitoring | Immutable audit logs, SIEM integration |
| A.8.24 | Use of cryptography | AES-256 at rest, TLS 1.3 in transit, Vault for keys |
| A.8.25 | Secure development lifecycle | SAST/DAST in CI/CD, code review requirements |
| A.8.28 | Secure coding | Linting rules, dependency scanning, SonarQube |

### NIST Cybersecurity Framework Alignment

GaaS Platform maps to all five NIST CSF functions:

| Function | Category | GaaS Implementation |
|----------|----------|---------------------|
| **Identify** | Asset Management | CMDB with auto-discovery, service catalog |
| **Identify** | Risk Assessment | Automated vulnerability scanning, threat modeling |
| **Protect** | Access Control | Zero-trust IAM, MFA, RBAC/ABAC |
| **Protect** | Data Security | Encryption, classification, masking |
| **Detect** | Anomalies & Events | SIEM integration, anomaly detection, Falco |
| **Detect** | Continuous Monitoring | Prometheus metrics, Grafana alerts, log analysis |
| **Respond** | Response Planning | Incident response procedures, runbooks |
| **Respond** | Communications | Notification templates, regulatory reporting |
| **Recover** | Recovery Planning | DR procedures, backup/restore, RTO/RPO targets |
| **Recover** | Improvements | Post-incident reviews, lessons learned database |

### SOC 2 Type II Readiness

GaaS Platform's architecture supports SOC 2 Type II certification across all five Trust Service Criteria:

- **Security:** Zero-trust architecture, encryption, access controls
- **Availability:** 99.9% uptime target, HA design, DR procedures
- **Processing Integrity:** Input validation, workflow controls, audit trails
- **Confidentiality:** Data classification, domain isolation, encryption
- **Privacy:** GDPR compliance, consent management, erasure procedures

Deploying governments pursuing SOC 2 certification can leverage the platform's built-in controls. The platform generates evidence artifacts (access logs, configuration snapshots, control effectiveness reports) that auditors require.

### Country-Specific Compliance

| Framework | Country/Region | GaaS Support |
|-----------|---------------|-------------|
| **FedRAMP** | United States | Supports FedRAMP Moderate baseline; deployable on FedRAMP-authorized cloud infrastructure (AWS GovCloud, Azure Government) |
| **IRAP** | Australia | Architecture supports PROTECTED classification; Kubernetes on ASD-assessed cloud services |
| **BSI C5** | Germany | Compliant with BSI Cloud Computing Compliance Criteria Catalogue; supports data residency in EU |
| **CCCS** | Canada | Aligned with Canadian Centre for Cyber Security guidance; supports Canadian data residency |
| **CSA STAR** | International | Architecture supports CSA STAR Level 2 certification |
| **eIDAS** | European Union | Keycloak eIDAS bridge for qualified electronic signatures and identity |

---

## Audit Logging & Monitoring

### Immutable Audit Log Architecture

Every state-changing operation in GaaS Platform generates an immutable audit log entry. The audit subsystem is designed as an append-only, tamper-evident store that provides forensic-grade evidence for compliance, investigations, and transparency.

```
Microservice → Audit Event → Event Bus (Kafka) → Audit Log Service
                                                        │
                                    ┌───────────────────┼───────────────┐
                                    │                   │               │
                                    ▼                   ▼               ▼
                              PostgreSQL          Elasticsearch    S3 Archive
                              (primary store,     (search/query)   (long-term,
                               append-only)                        7+ years)
```

Audit logs are written to a dedicated PostgreSQL database with row-level append-only enforcement (no UPDATE or DELETE permissions granted to any application role). A cryptographic hash chain links consecutive entries, enabling tamper detection.

### Log Schema

Every audit log entry captures the full context of an action:

```json
{
  "id": "evt_a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "timestamp": "2025-10-15T14:32:01.456Z",
  "actor": {
    "user_id": "usr_12345",
    "username": "jane.smith@health.gov",
    "role": "domain-admin",
    "domain": "healthcare",
    "ip_address": "203.0.113.42",
    "user_agent": "Mozilla/5.0 ...",
    "session_id": "sess_abc123",
    "auth_method": "password+totp"
  },
  "action": {
    "type": "UPDATE",
    "resource": "incident",
    "resource_id": "INC0004521",
    "endpoint": "PATCH /api/v1/incidents/INC0004521",
    "service": "incident-management"
  },
  "changes": {
    "before": { "status": "new", "assigned_to": null },
    "after": { "status": "in_progress", "assigned_to": "usr_67890" }
  },
  "outcome": "SUCCESS",
  "metadata": {
    "request_id": "req_xyz789",
    "correlation_id": "corr_abc456",
    "duration_ms": 145
  },
  "hash_chain": {
    "previous_hash": "sha256:a1b2c3...",
    "current_hash": "sha256:d4e5f6..."
  }
}
```

### Log Retention

| Log Type | Retention Period | Storage Tier | Rationale |
|----------|-----------------|-------------|-----------|
| Security audit logs | 7 years | Hot (1 year), Warm (2 years), Cold (4 years) | Government compliance, legal discovery |
| Access logs | 3 years | Hot (90 days), Cold (remainder) | Security analysis, incident investigation |
| Application logs | 1 year | Hot (30 days), Cold (remainder) | Debugging, performance analysis |
| Performance metrics | 2 years | Hot (90 days), Aggregated (remainder) | Capacity planning, trend analysis |

### Real-Time Security Monitoring

GaaS Platform integrates with Security Information and Event Management (SIEM) systems through standard protocols:

- **Syslog (RFC 5424):** For traditional SIEM platforms
- **Kafka/Webhook:** For modern event-driven SIEM solutions
- **OpenTelemetry:** For unified observability (traces, metrics, logs)

**Built-in detection rules:**

| Rule | Trigger | Severity | Response |
|------|---------|----------|----------|
| Brute force | 5+ failed logins in 5 minutes | High | Account lockout (30 min), alert SOC |
| Impossible travel | Login from two countries within 1 hour | High | Session terminated, alert SOC |
| Privilege escalation | Role change to admin outside change window | Critical | Change reverted, alert SOC + CISO |
| Data exfiltration | Bulk data export exceeding threshold | Critical | Request blocked, alert SOC |
| Service anomaly | 5x increase in error rate over 5-minute window | Medium | Alert on-call engineer |
| After-hours admin | Admin login outside business hours | Low | Log for review, optional alert |

### Anomaly Detection and Alerting

The platform leverages Prometheus metrics and Elasticsearch log analysis to detect anomalous behavior. Alerts are routed through Alertmanager to on-call teams via PagerDuty, Opsgenie, or email. Machine learning models (Phase 4, months 21-22) will enhance detection with behavioral baselines per user and service.

### Forensic Investigation

The audit log system supports forensic investigation through:

- **Correlation IDs:** Trace a single user action across all microservices
- **Session reconstruction:** Replay all actions within a user session
- **Timeline view:** Chronological display of all events affecting a resource
- **Export:** Forensic export in standard formats (JSON, CSV) for external tools
- **Chain of custody:** Hash chain provides cryptographic proof of log integrity

---

## Vulnerability Management

### Dependency Scanning

All third-party dependencies are continuously monitored for known vulnerabilities:

| Tool | Scope | Integration Point | Frequency |
|------|-------|-------------------|-----------|
| **Dependabot** | npm, pip, Go modules | GitHub PRs (auto-generated) | Daily |
| **Snyk** | All dependencies + container base images | CI/CD pipeline gate | Every build |
| **OWASP Dependency-Check** | License compliance + CVE database | Weekly scheduled scan | Weekly |

### Container Image Scanning

```yaml
# CI/CD pipeline - Trivy container scan
- name: Scan container image
  run: |
    trivy image --severity CRITICAL,HIGH --exit-code 1 \
      --ignore-unfixed \
      gaas-platform/incident-service:${{ github.sha }}
```

Every container image is scanned before being pushed to the registry. Images with CRITICAL or HIGH vulnerabilities (with available fixes) are rejected. A weekly report summarizes all known vulnerabilities across the entire image fleet.

### SAST/DAST Integration

| Tool | Type | Integration | What It Catches |
|------|------|-------------|-----------------|
| **SonarQube** | SAST | CI/CD gate (every PR) | SQL injection, XSS, hardcoded secrets, code smells |
| **Gitleaks** | Secret Detection | Pre-commit hook + CI/CD | API keys, passwords, tokens in source code |
| **OWASP ZAP** | DAST | Nightly scan against staging | Runtime vulnerabilities, misconfigurations |
| **Semgrep** | SAST | CI/CD gate (every PR) | Custom rules for government-specific patterns |

### Responsible Disclosure Policy

GaaS Platform maintains a public security policy (`SECURITY.md` in the repository root) and a dedicated security contact (`security@gaas.global`). The responsible disclosure process:

1. Reporter submits vulnerability via encrypted channel (PGP key published)
2. Acknowledgment within 24 hours
3. Triage and severity assessment within 72 hours
4. Coordinated disclosure timeline agreed with reporter (default: 90 days)
5. Fix developed, tested, and deployed
6. Public advisory published with credit to reporter
7. CVE assigned for qualifying vulnerabilities

### Patch Management SLAs

| Severity | Response Time | Patch Deployment | Example |
|----------|--------------|-----------------|---------|
| **Critical (CVSS 9.0-10.0)** | Triage within 4 hours | Deployed within 24 hours | Remote code execution, authentication bypass |
| **High (CVSS 7.0-8.9)** | Triage within 24 hours | Deployed within 72 hours | SQL injection, privilege escalation |
| **Medium (CVSS 4.0-6.9)** | Triage within 72 hours | Deployed within 7 days | XSS, information disclosure |
| **Low (CVSS 0.1-3.9)** | Triage within 7 days | Deployed within 30 days | Minor information leakage, low-impact DoS |

---

## Incident Response

### Security Incident Classification

Security incidents are classified on a four-level scale, distinct from operational incidents managed through the GSM Incident Management module:

| Level | Description | Examples | Response Time |
|-------|-------------|----------|--------------|
| **S1 - Critical** | Active breach, data exfiltration, or service compromise | Unauthorized access to citizen data, ransomware, supply chain compromise | Immediate (15 min to mobilize) |
| **S2 - High** | Confirmed vulnerability exploitation or significant unauthorized access | Successful phishing of admin credentials, API key exposure | Within 1 hour |
| **S3 - Medium** | Attempted attack or policy violation with limited impact | Failed brute force, unauthorized port scan, policy exception | Within 4 hours |
| **S4 - Low** | Security anomaly or minor policy deviation | Misconfigured firewall rule, expired certificate, phishing email received | Within 24 hours |

### Response Procedures

**Phase 1: Detection and Triage (0-30 minutes for S1)**
- Automated alert triggers incident creation in GSM platform
- On-call security engineer assesses severity and scope
- Incident commander designated for S1/S2 incidents

**Phase 2: Containment (30 minutes - 4 hours for S1)**
- Isolate affected systems (network segmentation, service shutdown if needed)
- Preserve forensic evidence (snapshots, log exports)
- Revoke compromised credentials
- Activate break-glass procedures if required

**Phase 3: Eradication (4-24 hours for S1)**
- Identify root cause and attack vector
- Remove malicious artifacts
- Patch exploited vulnerability
- Verify no persistence mechanisms remain

**Phase 4: Recovery (24-72 hours for S1)**
- Restore services from verified clean state
- Implement additional monitoring for recurrence
- Validate data integrity
- Gradual return to normal operations

**Phase 5: Post-Incident Review (within 7 days)**
- Blameless post-mortem conducted
- Root cause analysis documented
- Remediation actions assigned with deadlines
- Lessons learned shared with community (anonymized if needed)

### Communication Protocols

| Audience | S1 Notification | S2 Notification | Channel |
|----------|----------------|-----------------|---------|
| Security team | Immediate | Within 1 hour | PagerDuty/Opsgenie |
| Platform admin | Within 30 minutes | Within 4 hours | Secure messaging |
| Government CISO | Within 1 hour | Within 24 hours | Phone + encrypted email |
| Affected citizens | Within 72 hours (GDPR Art. 34) | As warranted | Portal notification + email |
| Data Protection Authority | Within 72 hours (GDPR Art. 33) | As warranted | Official filing |
| Public statement | As determined by incident commander | Typically not required | Government press office |

### Integration with GSM Practices

Security incidents are tracked in the same platform they protect. The Security Incident workflow extends the standard GSM Incident Management module with additional fields for attack vector, indicators of compromise (IOCs), and regulatory notification status. This integration ensures that security operations benefit from the same workflow automation, SLA tracking, and reporting capabilities as operational incidents.

---

## Supply Chain Security

### Software Bill of Materials (SBOM)

Every release of GaaS Platform includes a machine-readable SBOM in both SPDX and CycloneDX formats. The SBOM enumerates:

- All direct and transitive dependencies (npm, pip, system packages)
- Dependency versions and licenses
- Known vulnerability status at time of release
- Cryptographic hashes for integrity verification

```bash
# Generate SBOM during CI/CD build
syft packages dir:. -o spdx-json > sbom-spdx.json
syft packages dir:. -o cyclonedx-json > sbom-cyclonedx.json

# Verify SBOM against known vulnerabilities
grype sbom:sbom-spdx.json --fail-on critical
```

### Signed Container Images and Verified Builds

All official container images are signed using Sigstore/cosign. Kubernetes admission controllers (e.g., Kyverno or OPA Gatekeeper) enforce signature verification, rejecting unsigned or tampered images.

```bash
# Sign container image
cosign sign --key cosign.key gaas-platform/incident-service:v1.2.3

# Verify signature before deployment
cosign verify --key cosign.pub gaas-platform/incident-service:v1.2.3
```

### Third-Party Dependency Vetting

New dependencies must pass a review checklist before adoption:

- **License compatibility:** Must be compatible with AGPLv3 (Apache 2.0, MIT, BSD, ISC, MPL 2.0 are acceptable)
- **Maintenance status:** Last commit within 90 days, responsive to security issues
- **Security history:** Review past CVEs and response times
- **Scope of access:** Evaluate what permissions/APIs the dependency uses
- **Alternative analysis:** Confirm no better-maintained alternative exists

### Build Reproducibility

Builds are reproducible: given the same source commit, any builder produces a bit-for-bit identical artifact. This is enforced through:

- Locked dependency versions (`package-lock.json`, `poetry.lock`)
- Pinned base images with digest (not `:latest` tags)
- Deterministic build tools (Docker BuildKit with reproducible timestamps)
- CI/CD build provenance attestations (SLSA Level 3 target)

---

## Physical & Infrastructure Security

### Cloud Provider Security Requirements

When GaaS Platform is deployed on public cloud infrastructure, the cloud provider must meet these minimum certifications:

| Certification | Requirement | Major Providers |
|--------------|-------------|-----------------|
| **ISO 27001** | Mandatory | AWS, Azure, GCP, OVH |
| **SOC 2 Type II** | Mandatory | AWS, Azure, GCP |
| **Government Cloud** | Required for Secret-classified data | AWS GovCloud, Azure Government, GCP Assured Workloads |
| **Data Residency** | Data must remain in designated country/region | All major providers offer regional isolation |
| **FedRAMP** | Required for US federal deployments | AWS GovCloud, Azure Government |

### Data Center Requirements for On-Premise Deployments

Governments deploying GaaS Platform on their own infrastructure must ensure:

- **Physical access controls:** Biometric + badge access, visitor logs, CCTV
- **Environmental controls:** Redundant power (UPS + generator), HVAC, fire suppression
- **Network segmentation:** Dedicated VLAN for GaaS Platform, firewall rules
- **Redundancy:** N+1 hardware redundancy for all critical components
- **Compliance:** Facility certified to at least Tier II (Uptime Institute) or equivalent

### Key Management

GaaS Platform supports multiple key management backends:

| Backend | Use Case | Security Level |
|---------|----------|---------------|
| **HashiCorp Vault** | Default for all deployments | Software-based, FIPS 140-2 Level 1 |
| **AWS KMS** | AWS deployments | FIPS 140-2 Level 2 (Level 3 with CloudHSM) |
| **Azure Key Vault** | Azure deployments | FIPS 140-2 Level 2 (Level 3 with Managed HSM) |
| **GCP Cloud KMS** | GCP deployments | FIPS 140-2 Level 3 |
| **On-premise HSM** | Maximum security, air-gapped deployments | FIPS 140-2 Level 3 or 4 |

The key hierarchy (master key, domain keys, table keys, backup keys) is documented in the Data Protection section above. Key rotation is automated: domain keys rotate quarterly, table keys rotate monthly, and the master key rotates annually with a documented ceremony.

### Disaster Recovery Security Considerations

Disaster recovery introduces unique security risks that must be addressed:

- **Backup confidentiality:** All backups encrypted (see Data Protection section)
- **Backup integrity:** Checksums verified before and after transfer; periodic restore tests
- **DR site access controls:** Mirror production access controls; do not relax permissions during failover
- **Communication security:** DR coordination uses pre-established encrypted channels (not ad-hoc)
- **Data sovereignty:** DR site must be in the same jurisdiction unless legally permitted otherwise
- **Failback verification:** After returning to primary site, verify no unauthorized changes occurred during DR operations

---

## Next Steps

This security architecture is designed to evolve. Key follow-on activities include:

- **Threat modeling workshops** for each microservice (STRIDE methodology)
- **Penetration testing** by an independent firm before first production deployment
- **Security training** for all contributors (secure coding, OWASP Top 10)
- **Compliance certification** pursuit (ISO 27001, SOC 2) post-launch
- **Bug bounty program** launch (Phase 4, month 23-24)

Refer to companion documents for related technical details:
- **01-system-architecture.md** --- Overall system design and service mesh configuration
- **06-integration-apis.md** --- API authentication patterns and token flows
- **10-testing-qa.md** --- Security testing integration in CI/CD pipeline

---

*Document Version: 1.0 | Last Updated: October 2025*

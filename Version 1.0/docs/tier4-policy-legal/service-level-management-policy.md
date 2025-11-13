# Service Level Management Policy

## Document Control

| Attribute | Details |
|-----------|---------|
| Document Version | 1.0 |
| Effective Date | [To be determined by implementing jurisdiction] |
| Review Cycle | Annual |
| Approving Authority | Chief Digital Officer |
| Document Owner | Service Catalog Office, Digital Transformation Office |
| Classification | Public |
| Compliance | Mandatory for all government digital services |

---

## Executive Summary

This policy establishes requirements for Service Level Agreements (SLAs), Operational Level Agreements (OLAs), and service quality management across all government digital services. Service Level Management ensures citizen commitments are clear, measurable, and consistently met while enabling government-wide collaboration through well-defined inter-agency agreements.

**Key Requirements**:
- All services must publish citizen-facing SLAs within [12 months]
- SLAs must include availability, response time, and incident resolution commitments
- Inter-agency dependencies must be governed by Operational Level Agreements (OLAs)
- Vendor contracts must include Underpinning Contracts (UCs) aligned to SLAs
- Service performance must be monitored continuously and reported publicly
- SLA breaches trigger escalation and corrective action

---

## 1. Purpose and Scope

### 1.1 Purpose

This policy establishes Service Level Management as a core Government Service Management (GSM) practice to ensure:
- **Citizen Clarity**: Clear commitments on service quality and availability
- **Accountability**: Service Owners responsible for meeting commitments
- **Transparency**: Public reporting on service performance against SLAs
- **Continuous Improvement**: SLA data drives service optimization
- **Inter-Agency Coordination**: OLAs enable whole-of-government service delivery

### 1.2 Scope

This policy applies to:
- **All government digital services** (Tier 1-4 classification)
- **Citizen-facing SLAs** for public services
- **Operational Level Agreements (OLAs)** between government agencies
- **Underpinning Contracts (UCs)** with vendors and suppliers
- **Service performance monitoring and reporting**

### 1.3 Authority

This policy is issued under the Government Service Management Policy and Digital Transformation Office Charter. Non-compliance may result in enforcement actions as defined in Section 8.

---

## 2. Service Level Agreement (SLA) Framework

### 2.1 SLA Definition

A **Service Level Agreement (SLA)** is a documented commitment between government and citizens/businesses regarding expected service quality, availability, and support.

**Purpose**: SLAs set clear expectations, enable measurement, and build trust through transparency.

**Key Components**:
1. Service description and scope
2. Availability target (uptime %)
3. Response time commitments
4. Incident resolution times by priority
5. Support hours and channels
6. Planned maintenance windows
7. Escalation procedures
8. Measurement methodology
9. Reporting frequency
10. Remediation for SLA breaches

### 2.2 Mandatory SLA Targets by Service Tier

| Service Tier | Availability | Response Time | Transaction Success | P1 Resolution | P2 Resolution |
|--------------|--------------|---------------|---------------------|---------------|---------------|
| **Tier 1 (Critical)** | 99.9% | <2 seconds | >98% | <1 hour | <4 hours |
| **Tier 2 (High)** | 99.5% | <3 seconds | >95% | <4 hours | <8 hours |
| **Tier 3 (Standard)** | 99.0% | <5 seconds | >90% | <8 hours | <24 hours |
| **Tier 4 (Low)** | Best effort | <10 seconds | >80% | <24 hours | <72 hours |

**Notes**:
- Availability measured as % uptime per month excluding planned maintenance
- Response time measured as page load time on 3G connection (median)
- Transaction success rate = completed transactions / attempted transactions
- P1 = Critical incidents, P2 = High priority incidents (see Incident Management Policy)

### 2.3 Additional SLA Components

**Support Commitments**:
- Support hours (24/7 for Tier 1, business hours for Tier 3/4)
- Support channels (phone, chat, email, in-person)
- First-contact resolution target (>70% for Tier 1/2)
- Escalation to supervisor/manager (process and timeframe)

**Planned Maintenance**:
- Maximum maintenance window duration ([4 hours] for Tier 1, [8 hours] for Tier 2)
- Advance notice requirement ([7 days] for Tier 1, [3 days] for Tier 2)
- Blackout periods (e.g., no maintenance during tax filing season)
- Maintenance during off-peak hours (e.g., 2am-6am)

**Communication Commitments**:
- Incident notification within [15 minutes] for P1 incidents
- Status updates every [30 minutes] during P1 incidents
- Post-incident report within [5 business days] for P1/P2 incidents
- Quarterly service performance reports

**Citizen Satisfaction**:
- Target citizen satisfaction score (>80% for Tier 1/2)
- Quarterly user satisfaction surveys
- Net Promoter Score (NPS) measurement
- Complaint handling and response times

### 2.4 SLA Design Principles

**Principle 1: Citizen-Centric**
- Written in plain language understandable to citizens
- Focus on outcomes citizens care about (availability, speed, ease of use)
- Avoid technical jargon and internal metrics

**Principle 2: Measurable**
- All commitments quantified and measurable
- Clear measurement methodology documented
- Automated monitoring wherever possible
- Independent verification of SLA compliance

**Principle 3: Achievable**
- Targets based on current capability and planned improvements
- Balance ambition with realism
- Better to exceed conservative SLAs than miss aggressive ones

**Principle 4: Transparent**
- SLAs published on public service pages
- Real-time performance dashboards accessible to citizens
- Breaches acknowledged and explained publicly
- Continuous improvement plans shared openly

**Principle 5: Enforceable**
- Clear consequences for SLA breaches
- Escalation procedures defined
- Corrective action requirements
- Accountability at Service Owner level

---

## 3. Operational Level Agreements (OLAs)

### 3.1 OLA Definition

An **Operational Level Agreement (OLA)** is an agreement between government agencies or departments that defines the support one provides to another to enable SLA delivery.

**Purpose**: OLAs ensure inter-agency dependencies are well-managed and don't cause citizen-facing SLA breaches.

**Examples**:
- Digital Identity platform providing authentication services to all government services
- Tax agency providing income verification data to social benefits agency
- Cloud platform team providing infrastructure to application teams
- Data exchange platform enabling cross-agency data sharing

### 3.2 OLA Requirements

**Mandatory Components**:
1. **Parties**: Providing agency/team and consuming agency/team
2. **Service Description**: What service is being provided
3. **Service Levels**: Availability, response time, throughput, capacity
4. **Support Model**: Hours, escalation, incident response
5. **Measurement**: How service levels are monitored and reported
6. **Governance**: Review frequency, change process, dispute resolution
7. **Duration**: Start date, end date, renewal process

**OLA Targets Must Support SLAs**:
- OLA targets must be stricter than dependent SLAs
- Example: If citizen-facing SLA is 99.5% availability, underlying OLA must be 99.9%
- Buffer accounts for dependency chain and failure scenarios

### 3.3 OLA Governance

**OLA Registry**:
- All OLAs registered in central Service Catalog
- Dependencies mapped between services
- Impact analysis for changes or outages

**OLA Reviews**:
- Quarterly performance review between parties
- Annual OLA renewal or renegotiation
- SLA breach triggers immediate OLA review if dependency contributed

**Dispute Resolution**:
1. Service Manager discussion (resolve within 5 business days)
2. Service Owner escalation (resolve within 10 business days)
3. Chief Digital Officer arbitration (final decision within 15 business days)

### 3.4 Critical OLAs

**Government-Wide Platforms** (managed by DTO):

| Platform | Service Provided | OLA Availability | OLA Response Time |
|----------|------------------|------------------|-------------------|
| Digital Identity | Authentication, identity verification | 99.95% | <200ms (95th percentile) |
| Payment Gateway | Online payments processing | 99.9% | <500ms (95th percentile) |
| Data Exchange | API gateway, data sharing | 99.9% | <300ms (95th percentile) |
| Notification Service | Email, SMS, push notifications | 99.5% | <1 minute delivery |
| Cloud Platform | Infrastructure, hosting | 99.95% | N/A (always-on) |

**Platform teams publish monthly OLA performance reports** to all consuming agencies.

---

## 4. Underpinning Contracts (UCs)

### 4.1 UC Definition

An **Underpinning Contract (UC)** is a contract with an external vendor or supplier that supports delivery of government SLAs and OLAs.

**Purpose**: Ensure vendor commitments align with and support government service commitments to citizens.

### 4.2 UC Requirements

**Mandatory Contract Provisions**:
1. **Service Levels**: Vendor SLAs aligned to government SLAs (with buffer)
2. **Penalties**: Financial penalties for SLA breaches
3. **Monitoring**: Government right to monitor vendor performance
4. **Reporting**: Monthly performance reports required
5. **Escalation**: Clear escalation path for incidents and issues
6. **Liability**: Vendor liability for service failures causing government SLA breaches
7. **Exit Strategy**: Transition plan if vendor relationship ends

**Vendor SLA Targets**:
- Vendor SLAs must exceed government SLAs by minimum [0.5%] availability
- Vendor response times must be [30%] faster than government commitments
- Example: Government SLA 99.5%, Vendor UC must be 99.95%+

### 4.3 Vendor Performance Management

**Monthly Reviews**:
- Vendor submits performance report
- Government verifies with independent monitoring
- Breaches documented and remediation required

**Quarterly Business Reviews**:
- Strategic review of vendor relationship
- Performance trend analysis
- Improvement initiatives
- Contract amendments if needed

**Annual Evaluations**:
- Comprehensive performance assessment
- Renewal decision
- Benchmarking against market alternatives

**Enforcement**:
- SLA breaches trigger contractual penalties
- Repeated breaches may result in contract termination
- Vendor performance published (anonymized) to inform future procurements

---

## 5. SLA Development and Approval Process

### 5.1 SLA Development

**Step 1: Service Analysis** (Weeks 1-2)
- Review service scope, users, and usage patterns
- Analyze historical performance data (if existing service)
- Benchmark against similar services (domestic and international)
- Identify dependencies (platforms, agencies, vendors)

**Step 2: Target Setting** (Weeks 3-4)
- Propose SLA targets based on service tier and current capability
- Ensure underlying OLAs and UCs can support targets
- Balance ambition with achievability
- Calculate cost implications of different SLA levels

**Step 3: Stakeholder Review** (Weeks 5-6)
- Review with Service Owner and Service Manager
- Technical review by platform teams (feasibility check)
- Financial review (budget implications)
- User research (do targets meet citizen expectations?)

**Step 4: Approval** (Week 7)
- Submit SLA to Service Catalog Office for approval
- Service Catalog Office validates compliance with policy
- Chief Digital Officer approves SLAs for Tier 1 services
- Service Owner approves SLAs for Tier 2-4 services

**Step 5: Publication** (Week 8)
- Publish SLA on service website and central Service Catalog
- Configure monitoring and alerting
- Train support team on SLA commitments
- Communicate SLA to citizens via email/social media

**Total Timeline**: 8 weeks for new SLA development.

### 5.2 SLA Templates

**Standard SLA Template** (provided by DTO):
- Pre-filled with mandatory components
- Tier-appropriate targets pre-populated
- Plain language examples
- Measurement methodology included

**Service Catalog Office provides**:
- SLA development guidance document
- SLA template library (by service type)
- Example SLAs from leading services
- Consulting support for complex services

---

## 6. Service Performance Monitoring

### 6.1 Monitoring Requirements

**All services must implement**:
- **Synthetic monitoring**: Automated tests simulating user transactions
- **Real user monitoring**: Measuring actual user experience
- **Infrastructure monitoring**: Server, network, database performance
- **Application performance monitoring**: Code-level instrumentation
- **Uptime monitoring**: Ping tests from multiple geographic locations

**Monitoring Platform**:
- Digital Transformation Office provides shared monitoring platform
- Real-time dashboards for Service Managers
- Automated alerting for SLA risks and breaches
- Historical data retention for trend analysis

### 6.2 SLA Measurement Methodology

**Availability Calculation**:
```
Availability % = ((Total Minutes in Month - Downtime Minutes) / Total Minutes in Month) × 100

Exclusions from Downtime:
- Planned maintenance (with proper notice)
- Force majeure events (natural disasters, terrorism, etc.)
- User error or misuse
- Third-party failures outside government control (if documented)
```

**Response Time Measurement**:
- Measured from multiple geographic locations
- 95th percentile response time (not average)
- Measured using standard device specs (mid-range smartphone)
- Network throttled to 3G speed

**Transaction Success Rate**:
```
Success Rate % = (Successful Transactions / Total Attempted Transactions) × 100

Success defined as:
- Transaction completed without error
- User received confirmation
- Data persisted correctly
```

### 6.3 Alerting and Escalation

**Alert Levels**:

| Alert Level | Trigger | Notification | Action Required |
|-------------|---------|--------------|-----------------|
| **Warning** | Performance approaching SLA threshold (90%) | Service Manager email | Investigate proactively |
| **Minor Breach** | Single SLA metric missed by <10% | Service Manager + Service Owner | Root cause analysis within 24h |
| **Major Breach** | Multiple metrics missed or >10% miss | Service Owner + CDO | Immediate escalation, corrective action plan |
| **Critical Breach** | Service unavailable or P1 incident | War room activation | Emergency response, executive notification |

**Escalation Path**:
1. Service Manager (initial response, 0-15 minutes)
2. Service Owner (if unresolved, 15-60 minutes)
3. Agency CIO (if unresolved, 1-4 hours)
4. Chief Digital Officer (if government-wide impact)

---

## 7. SLA Reporting and Review

### 7.1 Public Reporting

**Real-Time Dashboard** (mandatory for Tier 1/2):
- Current availability status (green/yellow/red)
- Response time trending (last 24 hours)
- Recent incidents and resolutions
- Planned maintenance schedule
- Historical SLA performance (monthly)

**Monthly Reports** (all service tiers):
- SLA compliance summary (met/missed by metric)
- Trend analysis (improving/declining)
- Incidents summary (count, severity, resolution time)
- User satisfaction scores
- Improvement initiatives

**Quarterly Reports** (Tier 1/2):
- Comprehensive performance analysis
- Benchmarking against peer services
- Cost per transaction trends
- User feedback themes
- Roadmap for next quarter

### 7.2 Internal Reporting

**Service Owners Council** (monthly):
- Government-wide SLA performance dashboard
- Services at risk of SLA breaches
- Best practices sharing
- Cross-service dependencies and impacts

**Chief Digital Officer** (quarterly):
- Executive summary of service performance
- Services requiring intervention
- Budget implications of SLA investments
- Recommendations for policy updates

**Legislature** (annually):
- Annual service performance report
- Public value delivered
- Investment justification
- Continuous improvement plans

### 7.3 SLA Review and Adjustment

**Quarterly Reviews** (Service Manager + Service Owner):
- Assess if SLA targets remain appropriate
- Identify if targets too conservative (consistently exceeded) or too aggressive (frequently missed)
- Propose adjustments for next quarter

**Annual Reviews** (formal process):
- Comprehensive SLA review with stakeholder input
- User research on citizen expectations
- Benchmarking against best practices
- Technology capability changes
- Budget and resource implications
- Formal approval required for changes

**SLA Changes**:
- **Tightening SLAs** (higher targets): Requires Service Owner approval, 30-day notice to citizens
- **Loosening SLAs** (lower targets): Requires Chief Digital Officer approval, public consultation, 90-day notice

---

## 8. SLA Breach Management

### 8.1 SLA Breach Classification

| Breach Type | Definition | Response Time |
|-------------|------------|---------------|
| **Minor** | Single metric missed by <5%, <1 hour duration | 24 hours |
| **Moderate** | Single metric missed by 5-10%, 1-4 hours duration | 4 hours |
| **Major** | Multiple metrics missed or >10% miss, >4 hours | 1 hour |
| **Critical** | Service unavailable, widespread citizen impact | Immediate |

### 8.2 Breach Response Process

**Immediate Actions** (during breach):
1. Alert Service Manager and Service Owner
2. Activate incident response (see Incident Management Policy)
3. Communicate with citizens via status page and social media
4. Implement workarounds or rollback if possible
5. Escalate if not resolved within SLA resolution time

**Post-Breach Actions** (after restoration):
1. **Root Cause Analysis** (within 5 business days)
   - What happened? (timeline, impact)
   - Why did it happen? (root cause, not symptoms)
   - How was it detected? (monitoring, user reports)
   - How was it resolved? (actions taken)

2. **Preventive Actions** (within 10 business days)
   - What will prevent recurrence?
   - Updates to monitoring or alerting
   - Process improvements
   - Training or staffing changes
   - Technology upgrades

3. **Public Communication** (within 5 business days)
   - Post-incident report published
   - Apology to affected users
   - Explanation of root cause (in plain language)
   - Preventive actions being taken
   - Commitment to improvement

4. **Compensation** (if applicable)
   - Service credits for paid services
   - Expedited processing for affected transactions
   - Waived penalties for late submissions caused by outage

### 8.3 Repeated SLA Breaches

**Escalation Triggers**:
- 3 or more breaches in single month → Service Owner intervention required
- 5 or more breaches in quarter → Agency CIO review required
- 10 or more breaches in year → Chief Digital Officer intervention

**Intervention Actions**:
- Mandatory performance improvement plan
- Additional resources allocated
- Technology upgrades prioritized
- Vendor performance review (if applicable)
- Service redesign or replacement (if chronic issues)

### 8.4 SLA Breach Accountability

**Service Owner Accountability**:
- Service Owner performance evaluation includes SLA compliance
- Repeated breaches impact performance ratings
- Serious breaches may result in Service Owner replacement

**Agency Accountability**:
- Agency CIO reports SLA performance to Digital Transformation Board
- Chronic underperformance may trigger DTO intervention
- Budget allocations may be adjusted based on service quality

---

## 9. Compliance and Enforcement

### 9.1 Compliance Requirements

**All agencies must**:
- Publish SLAs for all services within [12 months] of policy effective date
- Monitor service performance continuously
- Report SLA performance monthly
- Respond to breaches according to procedures
- Participate in quarterly Service Owners Council reviews

### 9.2 Compliance Monitoring

**Service Catalog Office monitors**:
- SLA publication compliance
- SLA quality (completeness, measurability)
- Performance reporting timeliness
- Breach response adequacy

**Quarterly audits** conducted on random sample of services.

### 9.3 Exemptions

**Valid exemption reasons**:
- Service in pilot phase (temporary exemption up to 12 months)
- Legacy service scheduled for decommissioning within 6 months
- National security constraints preventing public SLA

**Exemption process**: See Government Service Management Policy, Section 7.3.

### 9.4 Enforcement

**Non-compliance consequences**:
- **Level 1**: Written warning and corrective action plan (30 days)
- **Level 2**: Budget hold for new projects until SLA published
- **Level 3**: Service cannot launch to production without SLA
- **Level 4**: Service shutdown if persistent non-compliance

---

## 10. Success Criteria

### 10.1 Service-Level Success

Services successfully implement SLA management when:
- SLA published and accessible to all citizens
- Performance monitored continuously with real-time dashboard
- SLA targets met >95% of months
- Breaches managed according to policy
- User satisfaction >80%
- Continuous improvement demonstrated

### 10.2 Government-Wide Success

SLA management succeeds when:
- 100% of Tier 1/2 services have published SLAs within 18 months
- Average SLA compliance >95% across all services
- Citizen awareness of SLAs >60% (measured via survey)
- Citizen trust in government digital services improves year-over-year
- SLA breaches decrease year-over-year
- Government achieves top-tier ranking in service quality benchmarks

---

## 11. Appendices

### Appendix A: SLA Template (Citizen-Facing)

```markdown
# [Service Name] Service Level Agreement

## Service Description
[Plain language description of what the service does and who it's for]

## Service Hours
- Service available: [24/7 / Business hours / Specific hours]
- Support available: [24/7 / Business hours / Specific hours]
- Support channels: [Phone, chat, email, in-person]

## Service Commitments

### Availability
We commit to [99.X]% availability, measured monthly.
- This means the service will be available [XX hours XX minutes] per month
- Excludes planned maintenance (notified [X] days in advance)
- Status page: [URL]

### Speed
- Pages will load in [X] seconds or less [XX]% of the time
- Transactions will complete in [X] seconds or less

### Reliability
- [XX]% of transactions will succeed without error
- Errors will be logged and fixed

### Support Response
- Critical issues: Resolved within [X] hour(s)
- High priority issues: Resolved within [X] hours
- Standard requests: Resolved within [X] hours
- First contact resolution: [XX]% of cases

## Planned Maintenance
- Maximum maintenance window: [X] hours
- Scheduled during: [Time window, e.g., 2am-6am]
- Advance notice: [X] days
- No maintenance during: [Blackout periods]

## If Something Goes Wrong
- We will notify you within [X] minutes
- Updates every [X] minutes until resolved
- Post-incident report within [X] days
- Explanation and prevention steps published

## Performance Dashboard
See current performance: [URL]

## Your Feedback Matters
- Rate your experience after each transaction
- Contact us: [Support channels]
- We review feedback monthly and continuously improve

## Questions or Concerns
Contact: [Email/Phone]
Service Owner: [Name, Title]

Last Updated: [Date]
Next Review: [Date]
```

### Appendix B: OLA Template (Inter-Agency)

[Template for operational agreements between government entities]

### Appendix C: UC Template (Vendor Contracts)

[Template for vendor contracts with SLA alignment requirements]

### Appendix D: SLA Measurement Methodology

[Detailed technical specifications for measuring availability, response time, success rates]

### Appendix E: SLA Breach Root Cause Analysis Template

[Template for conducting post-breach analysis]

### Appendix F: Contact and Support

- **Service Catalog Office**: [Email]
- **SLA Development Support**: [Email]
- **Monitoring Platform Support**: [Email]
- **Service Owners Community**: [Forum URL]

---

**Document History**

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | [Date] | Initial policy based on GSM framework | GaaS Framework Team |

---

*This policy is part of the Government as a Service (GaaS) Tier 4 governance framework. It establishes Service Level Management as a core GSM practice for delivering reliable, transparent, citizen-centric services.*

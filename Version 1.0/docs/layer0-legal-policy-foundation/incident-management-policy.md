# Incident Management Policy

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

This policy establishes standardized incident management procedures across all government digital services using P1-P4 classification. Effective incident management minimizes service disruptions, ensures rapid restoration, maintains citizen trust through transparent communication, and drives continuous improvement through root cause analysis.

**Key Requirements**:
- All incidents classified using P1-P4 priority framework
- War room protocols for P1 (Critical) incidents
- Citizen communication within 15 minutes for service disruptions
- Post-incident reviews mandatory for P1/P2 incidents
- Incident metrics tracked and reported publicly

---

## 1. Purpose and Scope

### 1.1 Purpose

This policy establishes incident management as a core Government Service Management (GSM) practice to ensure:
- **Rapid Response**: Incidents detected and responded to quickly
- **Minimized Impact**: Service restored as fast as possible
- **Citizen Communication**: Transparent updates during disruptions
- **Root Cause Prevention**: Analysis prevents recurrence
- **Continuous Learning**: Incidents drive service improvement

### 1.2 Scope

This policy applies to:
- **All government digital services** (Tier 1-4 classification)
- **All incidents** impacting service availability, performance, or security
- **All personnel** involved in service delivery and support
- **Third-party vendors** supporting government services

### 1.3 Authority

This policy is issued under the Government Service Management Policy and Digital Transformation Office Charter. Non-compliance may result in enforcement actions.

---

## 2. Incident Definition and Classification

### 2.1 Incident Definition

An **incident** is any unplanned interruption to a service or reduction in quality of service that impacts citizens, businesses, or government operations.

**Examples**:
- Service unavailable or inaccessible
- Slow response times exceeding SLA
- Transactions failing or producing errors
- Data corruption or loss
- Security breach or suspected breach
- Incorrect processing or calculations
- Integration failures with dependent services

**Not Incidents** (these are Service Requests):
- Password resets
- Access requests
- Information queries
- Standard service fulfillment
- Feature enhancement requests

### 2.2 P1-P4 Priority Classification

All incidents must be classified immediately upon detection using this framework:

#### **P1: Critical (War Room)**
**Definition**: Service completely unavailable OR critical functionality broken OR security breach

**Impact**:
- All or majority of citizens unable to access service
- Core functionality completely broken
- Data breach or security compromise
- Public safety risk
- Legal/regulatory violation

**Examples**:
- Digital identity platform down (blocks all government services)
- Tax filing system unavailable on deadline day
- Social benefits payments not processing
- Data breach exposing citizen information
- Election system compromised

**Response Requirements**:
- **Detection to Acknowledgment**: <5 minutes
- **War Room Activation**: <15 minutes
- **Citizen Communication**: <15 minutes (status page + social media)
- **Executive Notification**: Immediate (Service Owner, Agency CIO, CDO)
- **Target Resolution**: <1 hour (Tier 1), <4 hours (Tier 2)
- **Updates**: Every 30 minutes until resolved
- **Post-Incident Review**: Mandatory within 48 hours

#### **P2: High (Urgent)**
**Definition**: Significant service degradation OR critical feature unavailable OR multiple users affected

**Impact**:
- Large number of citizens impacted (>20%)
- Important functionality unavailable
- Workarounds exist but difficult
- SLA breach occurring or imminent
- Dependent services impacted

**Examples**:
- Service slow but accessible
- Document upload failing (can submit by mail)
- Search not working (can browse manually)
- Mobile app down (web still works)
- Single region/area experiencing issues

**Response Requirements**:
- **Detection to Acknowledgment**: <15 minutes
- **Escalation**: Service Manager notified immediately
- **Citizen Communication**: <30 minutes
- **Service Owner Notification**: Within 1 hour
- **Target Resolution**: <4 hours (Tier 1), <8 hours (Tier 2)
- **Updates**: Every 2 hours until resolved
- **Post-Incident Review**: Mandatory within 5 business days

#### **P3: Medium (Standard)**
**Definition**: Moderate service impact OR single feature unavailable OR small number of users affected

**Impact**:
- Small percentage of citizens impacted (<20%)
- Non-critical functionality unavailable
- Easy workarounds exist
- No SLA breach
- Minimal business impact

**Examples**:
- Cosmetic issues (typos, formatting)
- Minor feature not working
- Single report failing to generate
- Analytics dashboard not updating
- Email notifications delayed

**Response Requirements**:
- **Detection to Acknowledgment**: <1 hour
- **Assignment**: Support team member assigned
- **Citizen Communication**: If multiple reports received
- **Target Resolution**: <8 hours (Tier 1), <24 hours (Tier 2)
- **Updates**: Daily until resolved
- **Post-Incident Review**: Not required unless recurring

#### **P4: Low (Informational)**
**Definition**: Minimal impact OR cosmetic issue OR single user affected

**Impact**:
- Individual user issue (not systemic)
- Cosmetic or minor annoyance
- No impact on core functionality
- No workaround needed (minor issue)

**Examples**:
- Individual user account issue
- Minor UI inconsistency
- Request for information
- Enhancement suggestion
- Browser-specific minor bug

**Response Requirements**:
- **Detection to Acknowledgment**: <4 hours (business hours)
- **Assignment**: Next available support team member
- **Citizen Communication**: Direct response to reporting user
- **Target Resolution**: <24 hours (Tier 1), <72 hours (Tier 2)
- **Updates**: When status changes
- **Post-Incident Review**: Not required

### 2.3 Priority Escalation and De-escalation

**Escalation** (increasing priority):
- Incident impact worsens
- More users affected than initially assessed
- Resolution taking longer than expected
- Media attention or political sensitivity
- Process: Service Manager approves escalation

**De-escalation** (decreasing priority):
- Workaround implemented reducing impact
- Partial restoration achieved
- Affected user count reduced
- Process: Service Manager approves de-escalation with documentation

### 2.4 Special Incident Types

**Security Incidents**:
- Always start as minimum P2
- Escalate to P1 if data breach confirmed or active attack
- Follow additional security incident response procedures
- Notify Chief Information Security Officer (CISO)
- Legal and public relations teams engaged

**Multi-Service Incidents**:
- Platform or infrastructure failures affecting multiple services
- Coordinated response across Service Owners
- Chief Digital Officer may assume Incident Commander role
- Government-wide communication coordination

---

## 3. Incident Lifecycle

### 3.1 Incident Detection

**Detection Methods**:
- **Automated Monitoring** (preferred): System alerts, synthetic tests, health checks
- **User Reports**: Service desk, social media, email, phone
- **Staff Observation**: Operations team, developers, Service Managers
- **External Notification**: Vendors, partners, media, public officials

**Detection Requirements**:
- All Tier 1/2 services must have automated monitoring
- Alerts configured for SLA thresholds
- 24/7 monitoring for Tier 1 services
- Monitoring from multiple geographic locations

### 3.2 Incident Logging

**Incident Record Must Include**:
- **Incident ID**: Unique identifier (auto-generated)
- **Detection Time**: When first detected (timestamp)
- **Reporting Source**: Who/what reported (user, monitoring, staff)
- **Service Affected**: Which service(s) impacted
- **Initial Priority**: P1/P2/P3/P4 classification
- **Impact Description**: What is broken and impact on citizens
- **Assigned To**: Support team member or escalation team
- **Current Status**: New, Investigating, Resolved, Closed

**Logging Platform**:
- Digital Transformation Office provides shared incident management platform
- All incidents logged in central system
- Integration with monitoring and alerting tools
- Mobile app for field responders

### 3.3 Incident Triage and Assignment

**Triage** (within 5 minutes for P1/P2):
1. Validate incident is real (not duplicate, false alarm)
2. Assess initial impact and priority classification
3. Identify affected service(s) and dependencies
4. Assign to appropriate support team or escalate

**Assignment Rules**:
- **P1**: Immediate escalation to Service Owner + War Room activation
- **P2**: Service Manager + on-call engineer assigned
- **P3**: Next available support team member
- **P4**: Queue for normal processing

**Support Tiers**:
- **L1 Support**: Initial triage, basic troubleshooting, escalation
- **L2 Support**: Service-specific expertise, advanced troubleshooting
- **L3 Support**: Development team, platform engineers, deep technical expertise

### 3.4 Incident Investigation and Diagnosis

**Investigation Steps**:
1. **Gather Information**: Logs, metrics, error messages, user reports
2. **Reproduce Issue**: Attempt to reproduce in test environment
3. **Identify Scope**: How many users? Which functionality? Geographic spread?
4. **Analyze Dependencies**: Check dependent services (OLAs) and infrastructure
5. **Determine Root Cause**: What failed and why?

**Investigation Tools**:
- Log aggregation and analysis (e.g., Splunk, ELK)
- Application performance monitoring (e.g., New Relic, Datadog)
- Infrastructure monitoring (e.g., Prometheus, CloudWatch)
- Synthetic transaction testing
- Database query analysis

**Investigation Time Limits**:
- **P1**: 15 minutes max before workaround/escalation decision
- **P2**: 1 hour max before escalation if no progress
- **P3/P4**: Ongoing investigation acceptable if communicating progress

### 3.5 Incident Resolution

**Resolution Actions**:
- **Workaround**: Temporary fix allowing service to continue (may reduce functionality)
- **Fix**: Permanent solution addressing root cause
- **Rollback**: Revert recent change that caused incident
- **Failover**: Switch to backup system or region
- **Scale**: Add resources to handle load

**Resolution Priorities**:
1. **Restore Service** (fastest path, may be temporary workaround)
2. **Communicate Restoration** (update citizens immediately)
3. **Permanent Fix** (schedule if workaround is adequate)
4. **Prevent Recurrence** (root cause analysis and preventive actions)

**Resolution Approval**:
- **P1**: Service Owner approves resolution before close
- **P2**: Service Manager approves resolution
- **P3/P4**: Support team lead approves

### 3.6 Incident Closure

**Closure Criteria**:
- Service restored to normal operation
- SLA metrics back to acceptable levels
- Users confirmed resolution (for user-reported incidents)
- Documentation completed
- Handoff to Problem Management (if recurring)

**Closure Documentation**:
- Final incident record with complete timeline
- Root cause identified (even if temporary)
- Resolution actions documented
- Lessons learned captured
- Follow-up actions assigned (if any)

**Closure Timeline**:
- Close within 24 hours of resolution (no open incidents backlog)
- User notification sent
- Update published to status page

---

## 4. War Room Protocols (P1 Incidents)

### 4.1 War Room Activation

**Trigger**: Any P1 incident detected

**Activation Process** (within 15 minutes):
1. Service Manager declares P1 incident
2. Incident Commander appointed (usually Service Owner)
3. War Room bridge opened (video conference + chat)
4. Key personnel paged (on-call rotation)
5. Executive notification sent
6. Citizen communication initiated

### 4.2 War Room Roles

**Incident Commander** (IC):
- Overall responsibility for incident response
- Decision-making authority
- Coordinates all response activities
- Communicates with executives
- Usually: Service Owner for single-service incidents, CDO for multi-service

**Technical Lead**:
- Coordinates investigation and resolution efforts
- Directs engineering resources
- Provides technical updates to IC
- Usually: Service Manager or Lead Engineer

**Communications Lead**:
- Manages citizen communication (status page, social media, email)
- Drafts updates and talking points
- Coordinates with public relations if needed
- Usually: Communications team member

**Scribe**:
- Documents all actions, decisions, and timeline
- Updates incident record in real-time
- Prepares post-incident report draft
- Usually: Support team member

**Agency Liaison**:
- Communicates with agency leadership
- Coordinates with dependent services
- Manages internal stakeholder updates
- Usually: Agency representative

### 4.3 War Room Operating Procedures

**Cadence**:
- **Status Updates**: Every 15 minutes (spoken update on bridge)
- **Citizen Updates**: Every 30 minutes (published to status page)
- **Executive Briefings**: Every hour or major status change
- **War Room Continues**: Until resolution or IC declares de-escalation to P2

**Communication Protocol**:
- All discussions on open bridge (video + chat)
- No side conversations (transparency)
- Clear action items with assigned owner and deadline
- "Speak to be heard" - anyone can speak but IC has final say
- Time-boxing decisions (no endless debates during incident)

**Decision-Making**:
- Incident Commander has final authority
- Bias toward action (restore service first, optimize later)
- Document all major decisions with rationale
- Risk-based decision making (weigh impact vs. probability)

### 4.4 War Room De-activation

**De-activation Criteria**:
- Service restored to acceptable level (may be degraded but stable)
- Workaround implemented reducing impact to P2 or lower
- Incident Commander declares de-escalation
- Ongoing investigation continues outside war room

**De-activation Process**:
1. IC declares war room stand-down
2. Final status update published to citizens
3. Handoff to normal incident management process
4. Schedule post-incident review
5. Thank all participants

---

## 5. Communication Requirements

### 5.1 Citizen Communication

**Status Page** (mandatory for Tier 1/2 services):
- Real-time status indicator (green/yellow/red)
- Current incident descriptions
- Resolution progress updates
- Estimated time to resolution (if known)
- Workaround instructions (if available)
- Historical incident archive

**Communication Channels**:
- Status page (primary)
- Social media (Twitter, Facebook)
- Email notifications (for subscribed users)
- In-app banners/alerts
- SMS for critical services (e.g., emergency alerts)
- Media statements (for high-visibility incidents)

**Communication Timing**:
- **P1**: Initial notification within 15 minutes, updates every 30 minutes
- **P2**: Initial notification within 30 minutes, updates every 2 hours
- **P3**: Notification if multiple users affected, updates daily
- **P4**: Direct response to individual user, no public notification

**Communication Content**:
- **What**: Clear description of impact in plain language
- **Who**: Which users/services affected
- **When**: When incident started, estimated resolution time
- **Why**: Root cause if known (avoid technical jargon)
- **Alternatives**: Workarounds or alternative channels
- **Contact**: How to get help or more information

**Communication Tone**:
- Empathetic and apologetic
- Transparent and honest
- Avoid blame or excuses
- Focus on solutions and actions
- Clear and simple language (no jargon)

### 5.2 Internal Communication

**Service Owner Notification**:
- **P1**: Immediate (within 5 minutes)
- **P2**: Within 15 minutes
- **P3**: Within 1 hour or morning summary
- **P4**: Daily summary

**Agency Leadership Notification**:
- **P1**: Immediate, with 30-minute briefing schedule
- **P2**: Within 1 hour with regular updates
- **P3/P4**: Daily or weekly summaries

**Chief Digital Officer Notification**:
- **P1**: Immediate for Tier 1 services or multi-service incidents
- **P2**: Within 4 hours for Tier 1 services
- **Government-wide incidents**: Immediate regardless of priority

**Inter-Agency Communication**:
- Notify dependent services immediately if OLAs impacted
- Coordinate response if multiple agencies affected
- Share root cause and resolution for mutual learning

### 5.3 Post-Incident Communication

**Incident Report** (published within 5 business days for P1/P2):
- Executive summary (2-3 paragraphs)
- Timeline of events
- Impact assessment (users, duration, transactions lost)
- Root cause explanation (plain language)
- Resolution actions taken
- Preventive measures being implemented
- Apology and commitment to improvement

**Publishing**:
- Posted on service website and status page
- Emailed to subscribed users
- Shared in Service Owners Council
- Added to knowledge base

**Media Handling** (for high-visibility incidents):
- Coordinate with public relations team
- Prepared talking points and Q&A
- Designated spokesperson (usually Service Owner or CDO)
- Transparency and honesty (no coverups)

---

## 6. Post-Incident Review (PIR)

### 6.1 PIR Requirements

**Mandatory PIRs**:
- All P1 incidents (within 48 hours of resolution)
- All P2 incidents (within 5 business days)
- P3 incidents if recurring (3+ times in 30 days)
- Security incidents (all priorities)
- Any incident causing SLA breach

**Optional PIRs**:
- P3/P4 incidents with interesting lessons
- Near-miss incidents (prevented by monitoring/alerting)
- Novel incident types

### 6.2 PIR Process

**Step 1: Schedule Review** (within 24 hours of resolution)
- Schedule meeting within PIR deadline
- Invite all participants (war room, support, engineers)
- Book 60-90 minutes
- Assign facilitator (not Incident Commander)

**Step 2: Prepare Timeline**
- Detailed timeline of events (minute-by-minute for P1)
- Actions taken and by whom
- Communications sent
- Decisions made and rationale

**Step 3: Conduct Review Meeting**
- Review timeline collaboratively
- Identify contributing factors (no blame culture)
- Ask "5 Whys" to find root causes
- Identify what went well and what didn't
- Brainstorm preventive actions
- Assign action owners and deadlines

**Step 4: Document Findings**
- Write PIR report (use template)
- Include timeline, root cause, lessons, actions
- Get Service Owner approval
- Publish (see Section 5.3)

**Step 5: Track Actions**
- Log follow-up actions in project management system
- Assign owners and due dates
- Track completion
- Review in next Service Owner meeting

### 6.3 Root Cause Analysis Techniques

**5 Whys**:
- Ask "why" 5 times to drill down to root cause
- Example: Service down → Why? → Database crashed → Why? → Disk full → Why? → No monitoring → Why? → Not configured → Why? → Training gap

**Fishbone Diagram**:
- Categories: People, Process, Technology, External
- Identify contributing factors in each category
- Visual representation of all factors

**Timeline Analysis**:
- Plot all events chronologically
- Identify decision points and delays
- Find where early intervention could have helped

**Blameless Culture**:
- Focus on systems and processes, not individuals
- Assume everyone acted with good intent
- Learn from mistakes without punishment
- Psychological safety to speak openly

### 6.4 Preventive Actions

**Categories of Preventive Actions**:
1. **Monitoring Improvements**: Add alerts, improve detection
2. **Process Changes**: Update procedures, add checks
3. **Technology Upgrades**: Fix bugs, scale infrastructure
4. **Training**: Address knowledge gaps
5. **Documentation**: Update runbooks, add to knowledge base
6. **Architecture Changes**: Redesign to prevent recurrence

**Action Prioritization**:
- High impact, easy to implement (do first)
- High impact, difficult (schedule soon)
- Low impact, easy (quick wins)
- Low impact, difficult (deprioritize)

**Action Tracking**:
- Assigned owner
- Target completion date
- Progress updates in Service Owner meetings
- Verify effectiveness after implementation

---

## 7. Metrics and Reporting

### 7.1 Incident Metrics

**Mandatory Metrics** (tracked for all services):
- **Incident Count**: Total incidents by priority (P1/P2/P3/P4)
- **Mean Time to Detect (MTTD)**: Time from occurrence to detection
- **Mean Time to Acknowledge (MTTA)**: Time from detection to assignment
- **Mean Time to Resolve (MTTR)**: Time from detection to resolution
- **SLA Compliance**: % of incidents resolved within SLA time
- **Root Cause Distribution**: Categorization of root causes
- **Recurrence Rate**: % of incidents that are repeats

**Advanced Metrics** (for Tier 1 services):
- **Incident Trends**: Month-over-month changes
- **Service Availability Impact**: Downtime per incident
- **Affected User Count**: Citizens impacted per incident
- **Cost of Downtime**: Economic impact calculation
- **Preventive Action Completion**: % of PIR actions completed on time

### 7.2 Incident Reporting

**Daily Reports** (for P1/P2 incidents):
- Incident summary
- Current status
- ETA to resolution
- Impact assessment
- Sent to: Service Owner, Agency Leadership

**Weekly Reports** (all services):
- Incident summary by priority
- Open incident count
- SLA compliance
- Escalations and breaches
- Sent to: Service Owners Council

**Monthly Reports** (published publicly for Tier 1/2):
- Comprehensive incident statistics
- Trend analysis
- Notable incidents and lessons learned
- Preventive actions implemented
- Improvement initiatives

**Quarterly Reviews** (Service Owner with Agency CIO):
- Strategic incident review
- Systemic issues identification
- Investment decisions for improvements
- Benchmarking against peer services

### 7.3 Performance Dashboards

**Real-Time Dashboard** (Service Manager view):
- Current open incidents
- Incidents by priority and status
- SLA compliance indicators
- Support team workload
- Alert status from monitoring

**Executive Dashboard** (Service Owner / CDO view):
- Government-wide incident overview
- Services at risk
- Major incident timeline
- Trend analysis
- Comparative performance across services

**Public Dashboard** (Citizen view):
- Current service status
- Recent incidents and resolutions
- Planned maintenance schedule
- Performance trends

---

## 8. Compliance and Enforcement

### 8.1 Compliance Requirements

All agencies must:
- Classify all incidents using P1-P4 framework
- Log all incidents in central system
- Respond within SLA timeframes
- Conduct PIRs for P1/P2 incidents
- Publish incident reports
- Report metrics monthly

### 8.2 Compliance Monitoring

**Digital Transformation Office monitors**:
- Incident logging completeness
- Response time compliance
- PIR completion rates
- Communication timeliness
- Preventive action completion

**Quarterly audits** of incident management practices.

### 8.3 Enforcement

**Non-compliance consequences**:
- **Level 1**: Coaching and support from DTO
- **Level 2**: Mandatory additional training
- **Level 3**: Service Owner performance review impact
- **Level 4**: Budget holds or service restrictions

---

## 9. Success Criteria

### 9.1 Service-Level Success

Incident management succeeds when:
- All incidents classified and logged within SLA timeframes
- MTTR decreases year-over-year
- Recurrence rate <10%
- SLA compliance >95%
- PIRs completed on time with actionable outcomes
- Citizen communication timely and transparent

### 9.2 Government-Wide Success

Incident management succeeds when:
- 100% of services using standardized P1-P4 classification
- Average MTTR decreases 20% year-over-year
- P1 incident count decreases through prevention
- Citizen trust in service reliability improves
- Government recognized for transparent incident communication

---

## 10. Appendices

### Appendix A: Incident Priority Decision Tree
[Flowchart for determining P1/P2/P3/P4 classification]

### Appendix B: War Room Checklist
[Step-by-step checklist for P1 incident response]

### Appendix C: Communication Templates
- P1 initial notification template
- P2 incident update template
- Post-incident report template
- Media statement template

### Appendix D: Post-Incident Review Template
[Structured template for conducting PIRs]

### Appendix E: Root Cause Categories
[Standard taxonomy for classifying root causes]

### Appendix F: Contact Information
- **Incident Management Support**: [Email]
- **Service Catalog Office**: [Email]
- **24/7 Emergency Hotline**: [Phone]
- **Incident Platform Support**: [Email]

---

**Document History**

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | [Date] | Initial policy based on GSM framework | GaaS Framework Team |

---

*This policy is part of the Government as a Service (GaaS) Tier 4 governance framework. It establishes incident management with P1-P4 classification as a core GSM practice for maintaining reliable, transparent digital services.*

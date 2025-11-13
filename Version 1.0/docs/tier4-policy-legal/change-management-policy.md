# Change Management Policy

## Document Control

| Attribute | Details |
|-----------|---------|
| Document Version | 1.0 |
| Effective Date | [To be determined by implementing jurisdiction] |
| Review Cycle | Annual |
| Approving Authority | Chief Digital Officer |
| Document Owner | Change Advisory Board (CAB), Digital Transformation Office |
| Classification | Public |
| Compliance | Mandatory for all government digital services |

---

## Executive Summary

This policy establishes standardized change management procedures across all government digital services. Effective change management balances the need for innovation and improvement with service stability and reliability, ensuring changes are properly assessed, approved, tested, and communicated before implementation.

**Key Requirements**:
- All changes to production services must follow defined change management process
- Change Advisory Board (CAB) approves normal and emergency changes
- Standard changes pre-approved for rapid deployment
- Risk assessment and rollback plans required
- Change windows and blackout periods enforced
- Post-implementation reviews for major changes

---

## 1. Purpose and Scope

### 1.1 Purpose

This policy establishes change management (Change Enablement in GSM) as a core Government Service Management practice to ensure:
- **Controlled Change**: Changes assessed, tested, and approved before deployment
- **Risk Management**: Impact and risks evaluated and mitigated
- **Service Stability**: Balance between innovation and reliability
- **Coordination**: Changes across government coordinated to avoid conflicts
- **Transparency**: Stakeholders informed of changes and impacts
- **Rapid Rollback**: Failed changes reversed quickly

### 1.2 Scope

This policy applies to:
- **All changes to production services** (Tier 1-4)
- **All change types**: Standard, Normal, Emergency
- **All platforms and infrastructure** supporting government services
- **Configuration changes**, code deployments, architecture modifications
- **Third-party changes** to vendor-provided services

### 1.3 What is NOT a Change

The following activities do NOT require change management process:
- **Incident resolution actions** (covered by Incident Management Policy - though may trigger emergency change)
- **Routine operations** (restarting services, log rotation, backups)
- **Monitoring adjustments** (alert threshold tuning)
- **Content updates** (website content, help text) unless they affect functionality
- **User provisioning** (standard account creation/deletion)

### 1.4 Authority

This policy is issued under the Government Service Management Policy and Digital Transformation Office Charter. All changes must comply unless formally exempted.

---

## 2. Change Types

### 2.1 Standard Changes

**Definition**: Pre-approved, low-risk changes that follow documented procedure.

**Characteristics**:
- Low risk with well-understood impact
- Documented, repeatable procedure
- Pre-authorized by CAB (no individual approval needed)
- Frequent activity (daily/weekly)
- Automated or semi-automated

**Examples**:
- Certificate renewals (following standard procedure)
- Security patch deployment (pre-approved patches)
- DNS updates (following standard process)
- User account creation/deletion
- Database index creation (using standard scripts)
- Configuration changes from approved templates
- Automated deployments in non-production environments

**Requirements**:
- **Procedure Documentation**: Step-by-step procedure documented
- **Risk Assessment**: Initial risk assessment (done once during approval)
- **Testing**: Tested in non-production environment first
- **Approval**: Pre-approved by CAB (annual renewal)
- **Logging**: All standard changes logged for audit trail
- **Rollback**: Automated or documented rollback procedure

**Approval Process**:
1. Service team submits standard change proposal to CAB
2. CAB reviews risk, procedure, success criteria
3. CAB grants pre-approval (valid 12 months)
4. Service team executes as needed without individual approval
5. Annual renewal required

### 2.2 Normal Changes

**Definition**: Changes requiring individual assessment and approval by CAB.

**Characteristics**:
- Moderate to high risk
- Impacts multiple users or services
- Complex with dependencies
- Not routine or repeatable
- Requires testing and validation

**Examples**:
- New feature deployments
- Major version upgrades (OS, database, middleware)
- Architecture changes (new components, integrations)
- Schema changes (database structure modifications)
- Infrastructure changes (network, firewall rules)
- Migration activities (data, users, systems)
- Third-party service integrations

**Requirements**:
- **Change Request Form**: Complete RFC (Request for Change)
- **Risk Assessment**: Documented risk analysis with mitigation
- **Testing Evidence**: Test results from non-production environments
- **Rollback Plan**: Detailed rollback procedure with timing
- **Impact Assessment**: Services, users, dependencies affected
- **Schedule**: Proposed implementation window
- **Approvals**: CAB approval + Service Owner sign-off

**Approval Timeline**:
- **Submit**: Minimum 5 business days before desired implementation
- **CAB Review**: Weekly CAB meeting
- **Decision**: Approve, defer, or reject within 2 business days of meeting
- **Implementation**: Only during approved change window

### 2.3 Emergency Changes

**Definition**: Urgent changes required to resolve P1/P2 incidents or critical security threats.

**Characteristics**:
- Urgent need (service down, security breach, critical bug)
- Cannot wait for normal CAB cycle
- Expedited approval process
- Higher risk tolerance accepted due to urgency
- Retrospective CAB review

**Examples**:
- Hotfix for P1 incident
- Security patch for active exploit
- Rollback of failed change
- Emergency infrastructure scaling
- Critical data corruption fix

**Requirements**:
- **Justification**: Clear explanation of urgency
- **P1/P2 Incident**: Usually triggered by active incident
- **Risk vs. Doing Nothing**: Risk of change vs. risk of inaction
- **Abbreviated Testing**: Minimal testing acceptable (high-risk decision)
- **Expedited Approval**: Emergency CAB (E-CAB) approval
- **Post-Implementation Review**: Mandatory within 48 hours

**Approval Process**:
1. Service Manager declares emergency change needed
2. E-CAB convened (can be virtual/phone within 30 minutes)
3. E-CAB members: CDO (or delegate), Service Owner, Technical Lead, Security Lead
4. Quick review: risk assessment, rollback plan, implementation approach
5. E-CAB decision: Approve, modify, or reject
6. If approved: Immediate implementation with real-time monitoring
7. Retrospective CAB review at next regular meeting

---

## 3. Change Advisory Board (CAB)

### 3.1 CAB Purpose and Authority

**Purpose**: The Change Advisory Board (CAB) provides oversight and approval for changes across government digital services, balancing innovation with stability and coordinating changes to prevent conflicts.

**Authority**:
- Approve, defer, or reject normal changes
- Grant pre-approval for standard changes
- Review emergency changes retrospectively
- Establish change windows and blackout periods
- Escalate systemic issues to Chief Digital Officer
- Override Service Owner decisions in government-wide interest

### 3.2 CAB Membership

**Core Members** (required attendance):
- **Chair**: Head of Service Catalog Office (or CDO delegate)
- **Service Owners**: Representatives from Tier 1/2 services
- **Platform Leads**: Identity, Payments, Data Exchange, Cloud Infrastructure
- **Security Lead**: Chief Information Security Officer (or delegate)
- **Operations Lead**: Head of Service Operations

**Advisory Members** (as needed):
- Technical specialists for complex changes
- Risk management representatives
- Legal/compliance advisors
- Business stakeholders
- Vendor representatives

**Quorum**: Minimum 5 core members including Chair and Security Lead.

### 3.3 CAB Meeting Cadence

**Regular CAB**:
- **Frequency**: Weekly (every Tuesday, 10:00-11:30 AM)
- **Format**: In-person or video conference
- **Agenda**: Published 48 hours in advance with all RFCs
- **Duration**: 90 minutes maximum
- **Minutes**: Published within 24 hours

**Emergency CAB (E-CAB)**:
- **Frequency**: On-demand for emergency changes
- **Format**: Virtual (video/phone)
- **Convene**: Within 30 minutes of request
- **Duration**: 15-30 minutes
- **Decision**: Recorded in incident record and reviewed at next regular CAB

**Strategic CAB**:
- **Frequency**: Quarterly
- **Purpose**: Review change management effectiveness, trends, policy updates
- **Participants**: CAB members + Agency CIOs + CDO
- **Duration**: 2 hours

### 3.4 CAB Responsibilities

**Pre-Meeting**:
- Review all submitted RFCs
- Identify conflicts or dependencies
- Request additional information if needed
- Prepare questions and concerns

**During Meeting**:
- Review each RFC (max 10 minutes per change)
- Ask clarifying questions
- Assess risk and mitigation plans
- Check for scheduling conflicts
- Vote: Approve, Defer (with reason), Reject (with reason)
- Escalate to CDO if consensus cannot be reached

**Post-Meeting**:
- Publish decisions within 24 hours
- Communicate with RFC submitters
- Track approved changes through implementation
- Review post-implementation reports

**Ongoing**:
- Monitor change success rates
- Identify patterns in failed changes
- Propose process improvements
- Update standard change catalog
- Report metrics to Service Owners Council

---

## 4. Change Management Process

### 4.1 Change Request (RFC) Submission

**Step 1: Prepare RFC**

All normal changes require a complete RFC including:

**A. Change Description**
- **Title**: Brief, clear description (e.g., "Upgrade tax filing database from v12 to v14")
- **Description**: Detailed explanation of what is changing and why
- **Business Justification**: Why is this change needed? What value does it deliver?
- **Change Type**: Normal or Emergency (Standard changes don't submit individual RFCs)

**B. Impact Assessment**
- **Services Affected**: List all services impacted (direct and indirect)
- **User Impact**: How many citizens/businesses affected? What will they notice?
- **Downtime Required**: Duration and timing of any service disruption
- **Dependencies**: Other services, platforms, agencies, vendors affected
- **Functional Impact**: What changes in behavior or features?

**C. Risk Assessment**
- **Risk Level**: Low / Medium / High (use decision matrix)
- **Risk Description**: What could go wrong?
- **Mitigation**: How are risks being reduced?
- **Contingency**: What if mitigation doesn't work?

**D. Technical Details**
- **Components Affected**: Servers, databases, applications, networks
- **Configuration Changes**: What settings/configs will change?
- **Data Impact**: Any data migration, transformation, or deletion?
- **Integration Points**: APIs, data feeds, external systems affected

**E. Testing and Validation**
- **Test Plan**: What testing was done?
- **Test Environment**: Where was testing performed?
- **Test Results**: Evidence of successful testing (screenshots, logs, reports)
- **Acceptance Criteria**: How will we know the change was successful?

**F. Implementation Plan**
- **Implementation Steps**: Detailed step-by-step procedure
- **Timing**: Proposed date and time (must be within change window)
- **Duration**: Estimated time to complete
- **Resources**: Who will perform the change? What tools/access needed?
- **Validation**: How will success be verified post-implementation?

**G. Rollback Plan**
- **Rollback Decision Criteria**: When should we rollback? (specific metrics)
- **Rollback Procedure**: Step-by-step rollback instructions
- **Rollback Time**: How long does rollback take?
- **Rollback Testing**: Has rollback been tested?

**H. Communication Plan**
- **Stakeholder Notification**: Who needs to know? When will they be notified?
- **Citizen Communication**: Public notification needed? (status page, email)
- **Support Team Briefing**: How will support staff be prepared?

**I. Approvals**
- **Service Owner**: Signature approving change
- **Technical Lead**: Signature confirming technical readiness
- **Security Review**: Security clearance if applicable

**Step 2: Submit RFC**
- Submit via change management platform
- Attach all supporting documentation
- Submit minimum 5 business days before desired implementation
- System assigns RFC number and notifies CAB

**Step 3: CAB Pre-Review**
- CAB members review RFC asynchronously
- Questions or requests for information submitted to RFC owner
- RFC owner responds within 24 hours
- Incomplete RFCs automatically deferred

### 4.2 CAB Review and Approval

**Step 4: CAB Meeting Presentation**
- RFC owner presents (5 minutes)
- Highlights: What, Why, Risk, Rollback
- Q&A from CAB (5 minutes)

**Step 5: CAB Discussion and Vote**
- CAB discusses risks, dependencies, conflicts
- Risk assessment validation
- Rollback plan sufficiency review
- Vote: Approve / Defer / Reject

**Approval Criteria**:
- ✅ Complete RFC with all required information
- ✅ Acceptable risk with adequate mitigation
- ✅ Tested in non-production environment
- ✅ Rollback plan tested and viable
- ✅ No scheduling conflicts with other changes
- ✅ Proposed window complies with policy
- ✅ Service Owner approval obtained
- ✅ Security clearance if required

**Decisions**:
- **Approved**: Authorized for implementation in specified window
- **Conditionally Approved**: Approved with specific conditions that must be met
- **Deferred**: Not ready; specific concerns must be addressed before resubmission
- **Rejected**: Change should not proceed (fundamental issues)

**Step 6: Decision Communication**
- Decision recorded in change management system
- Email notification to RFC owner within 24 hours
- Approved changes added to change calendar
- Deferred/rejected changes include specific feedback

### 4.3 Change Implementation

**Step 7: Pre-Implementation Checklist**

Before change window:
- [ ] CAB approval confirmed
- [ ] Implementation team briefed
- [ ] Rollback procedure reviewed
- [ ] Monitoring and alerts configured
- [ ] Communication sent to stakeholders (48 hours notice)
- [ ] Citizen notification posted (if required)
- [ ] Support team briefed and ready
- [ ] Backups verified and tested
- [ ] Access and tools confirmed available

**Step 8: Implementation**

During change window:
1. **Go/No-Go Decision** (T-15 minutes)
   - Review system health
   - Confirm team readiness
   - Check for any blocking issues
   - Decision to proceed or abort

2. **Execute Change** (following RFC procedure)
   - Follow implementation plan step-by-step
   - Document each step and timestamp
   - Monitor system health continuously
   - Communication open bridge with Service Owner

3. **Real-Time Validation**
   - Run automated tests
   - Verify functionality
   - Check monitoring dashboards
   - Sample user transactions

4. **Decision Point** (after implementation)
   - Success? → Close change window
   - Failure? → Initiate rollback
   - Partial success? → Assess whether to continue or rollback

**Step 9: Validation and Closure**

Post-implementation (within 1 hour):
- Comprehensive testing of affected functionality
- Monitor error rates and performance metrics
- Check dependent services
- Review support queue for related issues
- Confirm citizen-facing services operational
- Update status page (change complete)

**Success Criteria**:
- All acceptance criteria met
- No increase in errors or performance degradation
- Dependent services operational
- Support team reports no issues

### 4.4 Post-Implementation Review

**Step 10: Post-Implementation Documentation**

Within 24 hours of implementation:
- **Actual vs. Planned**: Compare actual timeline to plan
- **Issues Encountered**: Any unexpected problems?
- **Resolution Actions**: How were issues addressed?
- **Success Validation**: Evidence that change achieved objectives
- **Lessons Learned**: What would be done differently?

**Step 11: PIR for Major Changes**

Changes meeting any of these criteria require formal Post-Implementation Review:
- High-risk changes (as classified in RFC)
- Changes affecting multiple services
- Changes with implementation issues
- Changes requiring rollback
- Changes with citizen complaints

**PIR Process** (within 5 business days):
- Review meeting with implementation team
- Retrospective CAB review
- Document lessons learned
- Update procedures if needed
- Share learnings across government

---

## 5. Change Windows and Blackout Periods

### 5.1 Standard Change Windows

**Purpose**: Define when changes can be implemented to minimize citizen impact and coordinate activities.

**Tier 1 (Critical Services)**:
- **Primary Window**: Sunday 2:00 AM - 6:00 AM
- **Secondary Window**: Wednesday 2:00 AM - 4:00 AM (low-risk changes only)
- **Maximum Downtime**: 2 hours per window
- **Advance Notice**: 7 days for maintenance

**Tier 2 (High Services)**:
- **Primary Window**: Saturday 10:00 PM - Sunday 8:00 AM
- **Secondary Window**: Wednesday 10:00 PM - 2:00 AM
- **Maximum Downtime**: 4 hours per window
- **Advance Notice**: 3 days for maintenance

**Tier 3/4 (Standard/Low Services)**:
- **Window**: Any time during off-peak hours (6:00 PM - 8:00 AM)
- **Maximum Downtime**: 8 hours
- **Advance Notice**: 24 hours for maintenance

**Emergency Changes**:
- Can be implemented anytime (by definition urgent)
- Minimize impact where possible
- Real-time communication to citizens

### 5.2 Change Blackout Periods

**Definition**: Periods when changes are prohibited due to high service demand or business criticality.

**Government-Wide Blackout Periods**:
- **Tax Filing Deadline**: 15 days before and 7 days after
- **Election Periods**: 30 days before election day through 7 days after
- **Major Holidays**: Specific holidays when services see high demand
- **Budget Cycles**: Government fiscal year-end (typically last week of fiscal year)

**Service-Specific Blackout Periods** (defined by Service Owner):
- Peak usage periods (e.g., benefits enrollment)
- Regulatory reporting deadlines
- Major public events
- Other business-critical periods

**Blackout Period Exceptions**:
- **Emergency changes** (P1 incidents, critical security patches)
- **Security patches** for active exploits (with E-CAB approval)
- **Pre-approved by CDO** (rare, exceptional circumstances)

**Blackout Period Calendar**:
- Published annually by CAB
- Shared with all Service Owners and platform teams
- Incorporated into change management system (automatic RFC rejection during blackout)
- Updated quarterly as needed

### 5.3 Change Calendar and Coordination

**Change Calendar** (managed by CAB):
- All approved changes scheduled on shared calendar
- Visible to all Service Owners and platform teams
- Color-coded by service and risk level
- Dependency mapping (show related changes)
- Change window utilization tracking

**Coordination Rules**:
- Maximum 3 high-risk changes per change window
- Dependent services cannot change simultaneously
- Platform changes take priority (notify consuming services 14 days advance)
- Multi-service changes require extended coordination period

---

## 6. Risk Assessment and Management

### 6.1 Risk Classification

All changes must be classified using this risk matrix:

| Risk Factor | Low | Medium | High |
|-------------|-----|--------|------|
| **Impact Scope** | Single service component | Entire service | Multiple services |
| **User Impact** | <5% users, minor functionality | 5-50% users, important functionality | >50% users, critical functionality |
| **Downtime** | <5 minutes | 5-60 minutes | >60 minutes |
| **Complexity** | Simple, single-step | Multi-step, some dependencies | Complex, many dependencies |
| **Testing** | Fully tested, proven in prod | Tested in staging, similar to prod | Limited testing, new scenario |
| **Reversibility** | Instant automated rollback | Manual rollback <30 minutes | Difficult rollback >30 minutes |

**Overall Risk Rating**:
- **Low**: All factors Low, or mostly Low with one Medium
- **Medium**: Mostly Low/Medium, or one High with others Low
- **High**: Multiple High factors, or critical service with any High factor

### 6.2 Risk Mitigation Strategies

**For High-Risk Changes**:
- Phased rollout (pilot group → wider deployment)
- Blue-green deployment (zero-downtime switch)
- Feature flags (enable gradually, instant disable)
- Canary deployment (small percentage of traffic first)
- Extended monitoring period (24-48 hours post-change)
- Reduced batch size (smaller, more frequent changes)

**For All Changes**:
- Comprehensive testing in production-like environment
- Automated rollback capability
- Rollback testing prior to change
- Real-time monitoring during implementation
- Communication prepared in advance
- Support team on standby

### 6.3 Failed Change Management

**Change Failure** defined as:
- Change rolled back
- Incident caused by change (P1/P2 within 24 hours)
- Service degradation requiring intervention
- Failed acceptance criteria
- Unplanned additional changes required

**Failed Change Response**:
1. **Immediate**: Execute rollback plan
2. **Within 1 hour**: Root cause analysis initiated
3. **Within 24 hours**: Incident report published
4. **Within 5 days**: Post-implementation review with CAB
5. **Update RFC**: Document what went wrong and preventive actions

**Change Success Rate Target**: >95% of changes succeed without rollback or incident.

**Repeated Failures**:
- 3 failed changes by same team in quarter → Mandatory process review and additional training
- Persistent failures → May require external review or team changes

---

## 7. Metrics and Reporting

### 7.1 Change Metrics

**Mandatory Metrics** (tracked monthly):
- **Change Volume**: Total changes by type (Standard/Normal/Emergency)
- **Change Success Rate**: % of changes without rollback or incident
- **Lead Time**: Average days from RFC submission to implementation
- **Change Duration**: Average time to complete change
- **Emergency Change Rate**: % of changes that are emergency (target <5%)
- **CAB Approval Rate**: % of RFCs approved vs. deferred/rejected
- **Blackout Violations**: Changes during blackout periods (target: 0)

**Advanced Metrics** (for Tier 1 services):
- **Change Failure Impact**: Downtime caused by failed changes
- **Rollback Success Rate**: % of rollbacks that successfully restore service
- **Risk vs. Outcome**: Correlation of risk rating to actual outcome
- **Time to Rollback**: Average time to execute rollback

### 7.2 Change Reporting

**Weekly CAB Report**:
- Changes approved this week
- Changes scheduled for next week
- Change calendar conflicts
- Emergency changes since last meeting
- Success rate trending

**Monthly Change Report** (published by CAB):
- Change volume and trends
- Success rates by service and change type
- Failed changes summary and lessons
- Emergency change analysis
- Process improvement initiatives

**Quarterly Strategic Review** (with Service Owners Council):
- Change management effectiveness
- Correlation between changes and incidents
- Automation opportunities
- Policy updates needed
- Industry benchmarking

### 7.3 Change Analytics

**Trend Analysis**:
- Month-over-month change volume trends
- Success rate trends by service
- Emergency change trends (decreasing = good)
- Common failure patterns
- Seasonal patterns (align capacity to demand)

**Predictive Analytics** (Tier 1 services):
- Change risk scoring (ML model predicting failure likelihood)
- Optimal change window recommendations
- Dependency mapping and conflict prediction
- Capacity planning for change windows

---

## 8. Compliance and Enforcement

### 8.1 Compliance Requirements

All agencies must:
- Submit RFCs for all normal changes minimum 5 business days in advance
- Obtain CAB approval before implementation
- Log all standard changes
- Conduct emergency changes only with E-CAB approval
- Complete post-implementation documentation
- Maintain >95% change success rate

### 8.2 Compliance Monitoring

**Digital Transformation Office monitors**:
- RFC submission compliance
- Unauthorized changes (bypassing CAB)
- Change window violations
- Blackout period violations
- Post-implementation documentation completeness

**CAB reviews** compliance quarterly and escalates violations.

### 8.3 Unauthorized Changes

**Definition**: Changes implemented without CAB approval or outside approved process.

**Detection**:
- Automated change detection in production
- Audit log monitoring
- Incident investigations
- Whistleblower reports

**Response**:
1. **Immediate**: Roll back unauthorized change if still active
2. **Investigation**: Determine why process was bypassed
3. **Retrospective Review**: E-CAB reviews change post-facto
4. **Accountability**: Disciplinary action as appropriate
5. **Process Fix**: Identify control gaps and remediate

**Consequences**:
- **First Violation**: Written warning and mandatory training
- **Repeated Violations**: Performance review impact, budget restrictions
- **Severe Violations**: Service shutdown, personnel action

### 8.4 Exemptions

**Valid Exemption Reasons**:
- Emergency changes (follow E-CAB process)
- National security restrictions (CDO approval with alternative process)
- Isolated test environments (not affecting production)

**No Valid Exemptions For**:
- Convenience or schedule pressure
- Lack of planning
- Desire to avoid oversight

---

## 9. Success Criteria

### 9.1 Service-Level Success

Change management succeeds when:
- All production changes follow defined process
- Change success rate >95%
- Emergency changes <5% of total
- Mean time from RFC to implementation <10 business days
- Zero unauthorized changes
- Failed changes lead to process improvements

### 9.2 Government-Wide Success

Change management succeeds when:
- 100% of services compliant with change policy
- Government-wide change success rate >95%
- Emergency changes decreasing year-over-year (better planning)
- Incident rate decreasing (changes not causing problems)
- Service stability improving (fewer disruptions)
- Citizen trust in service reliability increasing

---

## 10. Appendices

### Appendix A: RFC Template
[Complete Request for Change template with all required sections]

### Appendix B: Risk Assessment Matrix
[Detailed risk scoring methodology with examples]

### Appendix C: Standard Change Catalog
[Pre-approved standard changes with procedures]

### Appendix D: CAB Charter
[Detailed CAB roles, responsibilities, and operating procedures]

### Appendix E: Emergency Change Flowchart
[Visual process for emergency change approval]

### Appendix F: Change Calendar
[Current year blackout periods and change windows]

### Appendix G: Rollback Checklist
[Step-by-step rollback procedure template]

### Appendix H: Contact Information
- **Change Advisory Board**: [Email]
- **CAB Secretariat**: [Email]
- **Emergency Change Hotline**: [Phone]
- **Change Management System Support**: [Email]

---

**Document History**

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | [Date] | Initial policy based on GSM framework | GaaS Framework Team |

---

*This policy is part of the Government as a Service (GaaS) Tier 4 governance framework. It establishes change management with CAB governance as a core GSM practice for balancing innovation with service stability.*

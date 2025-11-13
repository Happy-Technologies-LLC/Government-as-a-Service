# Data Sharing Framework Agreement

## Government as a Service (GaaS) - Layer 0 Policy Template

**Version:** 1.0
**Status:** Template for National/Agency Adaptation
**Last Updated:** October 2025
**Template Classification:** Public

---

## Executive Summary

This Data Sharing Framework establishes the legal, technical, and operational foundation for secure and compliant data sharing between government agencies implementing the Government as a Service (GaaS) framework. It provides standardized principles, processes, and safeguards to enable efficient inter-agency collaboration while protecting citizen privacy and maintaining data security.

**Key Objectives:**
- Enable seamless, secure data sharing across government
- Protect individual privacy and maintain public trust
- Establish clear legal basis and accountability
- Standardize data classification and handling procedures
- Ensure audit trails and compliance monitoring

---

## 1. Policy Statement

### 1.1 Purpose

This Framework establishes the mandatory requirements and voluntary best practices for sharing data between government agencies within the GaaS ecosystem. It aims to:

1. **Maximize public value** through efficient data utilization
2. **Minimize citizen burden** by reducing duplicate data collection
3. **Protect privacy rights** through robust safeguards
4. **Enable innovation** while maintaining security
5. **Ensure accountability** through comprehensive audit mechanisms

### 1.2 Core Principles

**Principle 1: Once-Only**
Citizens and businesses should provide information to government only once. Agencies must share data to avoid duplicate collection.

**Principle 2: Privacy by Design**
Data protection measures must be embedded from the outset, not added as an afterthought.

**Principle 3: Purpose Limitation**
Data may only be used for specified, explicit, and legitimate purposes agreed upon in advance.

**Principle 4: Data Minimization**
Only the minimum necessary data should be shared to accomplish the stated purpose.

**Principle 5: Security**
Appropriate technical and organizational measures must protect data throughout its lifecycle.

**Principle 6: Transparency**
Data subjects must be informed about how their data is being shared and used.

**Principle 7: Accountability**
Each party must demonstrate compliance and maintain evidence of data protection measures.

### 1.3 Legal Authority

This Framework operates under the authority of:

- **[National Data Protection Act]** - Primary privacy legislation
- **[E-Government Act]** - Digital government mandate
- **[Freedom of Information Act]** - Transparency requirements
- **[Cybersecurity Act]** - Security standards
- **[Specific enabling legislation]** - Agency-specific authorities

*Note: Agencies must cite specific legal provisions authorizing data sharing in each agreement.*

---

## 2. Scope and Applicability

### 2.1 In Scope

This Framework applies to:

**Organizations:**
- All government departments and agencies
- Public sector bodies and state-owned enterprises
- Contracted service providers handling government data
- Inter-governmental partnerships and joint programs

**Data Types:**
- Personal data (citizen and business information)
- Administrative data (operational government records)
- Statistical and research data
- Real-time service delivery data
- Aggregated and anonymized datasets

**Sharing Mechanisms:**
- API-based real-time data exchange
- Bulk data transfers (batch processing)
- Federated query systems
- Shared databases and data warehouses
- Manual data transfers (exceptional cases)

### 2.2 Out of Scope

This Framework does NOT apply to:

- **National security data** - Covered by separate classified frameworks
- **Law enforcement intelligence** - Subject to specific criminal justice data sharing rules
- **Health records** - Governed by health-specific privacy legislation (except where explicitly integrated)
- **Public open data** - Already freely available under open data licenses
- **International data transfers** - Requires additional cross-border agreements

### 2.3 Exemptions

Exemptions may be granted by the [National Data Protection Authority] for:
- Emergency situations (public health, natural disasters)
- National security matters (with appropriate oversight)
- Law enforcement investigations (with judicial authorization)

*All exemptions must be documented, time-limited, and subject to review.*

---

## 3. Data Sharing Principles

### 3.1 Legal Basis for Sharing

Every data sharing arrangement MUST establish a clear legal basis. Acceptable bases include:

**A. Statutory Mandate**
Legislation explicitly requires or authorizes the sharing.

*Example: Tax authority must share income data with social services for means-testing.*

**B. Public Interest**
Sharing is necessary for a public function or to protect vital interests.

*Example: Sharing health emergency data to coordinate pandemic response.*

**C. Consent**
The data subject has provided explicit, informed consent for sharing.

*Example: Citizen authorizes sharing employment history with housing agency for benefit application.*

**D. Contractual Necessity**
Sharing is required to fulfill a service or benefit to which the individual is entitled.

*Example: Sharing identity verification data to process driver's license renewal.*

**E. Vital Interests**
Sharing is necessary to protect life or prevent serious harm.

*Example: Sharing medical information during emergency response.*

### 3.2 Data Classification Framework

All data must be classified according to sensitivity:

| Classification | Definition | Examples | Baseline Safeguards |
|---------------|------------|----------|---------------------|
| **Public** | Information intended for public release | Published statistics, public notices | Standard web security |
| **Internal** | Non-public operational data with low sensitivity | Meeting schedules, draft reports | Access authentication |
| **Confidential** | Data requiring protection; limited disclosure impact | Most citizen records, business data | Encryption in transit, role-based access |
| **Restricted** | Highly sensitive; serious harm if disclosed | Financial details, health records | Encryption at rest and in transit, multi-factor auth, audit logging |
| **Secret** | Most sensitive; critical harm if disclosed | National security, criminal intelligence | Air-gapped systems, specialized security clearance |

### 3.3 Data Handling Requirements

**For All Data Classifications:**
- Unique identifiers for all data sharing transactions
- Timestamp and user attribution for all access
- Regular review of access permissions (minimum annually)
- Secure deletion when retention period expires

**Additional Requirements by Classification:**

**Confidential Data:**
- Encrypted transmission (TLS 1.3 or equivalent)
- Role-based access control (RBAC)
- Monthly access audits
- Data masking for non-authorized viewers

**Restricted Data:**
- End-to-end encryption
- Multi-factor authentication for all access
- Real-time access monitoring and alerting
- Quarterly security assessments
- Data loss prevention (DLP) controls
- Anonymization or pseudonymization where feasible

**Secret Data:**
- Handled under separate classified framework
- Physical and logical segregation
- Security clearance requirements
- Continuous monitoring

---

## 4. Security Requirements

### 4.1 Technical Security Controls

**Minimum Security Baseline (All Sharing Arrangements):**

1. **Authentication and Access Control**
   - Multi-factor authentication for human users
   - API keys or certificates for system-to-system sharing
   - Role-based access control with least privilege principle
   - Automatic session timeout (15 minutes for sensitive data)

2. **Encryption**
   - TLS 1.3 for data in transit
   - AES-256 or equivalent for data at rest (Restricted classification)
   - Cryptographic hashing for data integrity verification
   - Secure key management (hardware security modules for Restricted data)

3. **Network Security**
   - Firewalls and intrusion detection/prevention systems
   - Network segmentation for sensitive data
   - API rate limiting to prevent abuse
   - DDoS protection for public-facing services

4. **Data Protection**
   - Tokenization or pseudonymization where appropriate
   - Data masking for development/testing environments
   - Secure backup and recovery procedures
   - Data loss prevention (DLP) monitoring

5. **Audit and Monitoring**
   - Comprehensive logging of all data access and sharing events
   - Real-time alerting for suspicious activity
   - Log retention (minimum 2 years for Restricted data)
   - Security information and event management (SIEM) integration

### 4.2 Organizational Security Controls

1. **Security Governance**
   - Designated Information Security Officer for each agency
   - Regular security risk assessments (minimum annually)
   - Incident response plan and procedures
   - Business continuity and disaster recovery plans

2. **Personnel Security**
   - Background checks for staff accessing Restricted data
   - Mandatory security awareness training (annually)
   - Confidentiality agreements and code of conduct
   - Offboarding procedures (immediate access revocation)

3. **Vendor Management**
   - Security requirements in all procurement contracts
   - Vendor security assessments before engagement
   - Ongoing vendor compliance monitoring
   - Right to audit vendor security practices

### 4.3 Security Testing and Validation

**Required Security Assessments:**

- **Penetration Testing:** Annually for external-facing systems
- **Vulnerability Scanning:** Quarterly for all systems
- **Security Audits:** Annually by independent assessor
- **Code Security Review:** For all custom-developed sharing interfaces
- **Configuration Audits:** Quarterly for infrastructure components

### 4.4 Incident Response

**Mandatory Incident Reporting:**

All data breaches or security incidents must be reported to:
1. Internal Information Security Officer (immediately)
2. Data Protection Authority (within 72 hours if personal data affected)
3. Affected individuals (without undue delay if high risk)
4. Partner agencies sharing the affected data (within 24 hours)

**Incident Response Requirements:**
- Documented incident response plan
- Designated incident response team
- Post-incident review and lessons learned
- Remediation and prevention measures

---

## 5. Data Sharing Governance

### 5.1 Governance Structure

**National Level:**

**Data Governance Board**
- **Chair:** Chief Data Officer or equivalent
- **Members:** Representatives from key agencies, data protection authority, civil society
- **Responsibilities:**
  - Approve major data sharing initiatives
  - Review compliance and effectiveness
  - Resolve inter-agency disputes
  - Update framework based on lessons learned

**Technical Standards Committee**
- **Chair:** Government Chief Technology Officer
- **Members:** Technical representatives from agencies, industry experts
- **Responsibilities:**
  - Define technical standards and APIs
  - Approve new data sharing platforms
  - Maintain technical documentation
  - Evaluate emerging technologies

**Agency Level:**

**Data Steward**
- Designated for each major data asset
- Responsible for data quality and integrity
- Approves data sharing requests
- Monitors compliance with agreements

**Data Protection Officer (DPO)**
- Independent advisory role
- Reviews data sharing agreements for privacy compliance
- Investigates complaints
- Liaises with national data protection authority

### 5.2 Data Sharing Agreement Process

**Step 1: Needs Assessment (Data Requestor)**
- Identify specific data requirements
- Document business need and legal basis
- Assess privacy and security risks
- Consider alternatives (e.g., anonymized data, statistics)

**Step 2: Initial Review (Data Provider)**
- Verify legal authority to share
- Assess technical feasibility
- Conduct preliminary privacy impact assessment
- Estimate costs and resources

**Step 3: Formal Agreement Development**
- Draft data sharing agreement using standard template
- Specify data elements, frequency, format
- Define security and privacy safeguards
- Establish audit and compliance mechanisms
- Include data retention and destruction requirements

**Step 4: Privacy and Security Review**
- Data Protection Officer review (both agencies)
- Information Security Officer review (both agencies)
- Privacy Impact Assessment if required (see Section 6)
- Security risk assessment

**Step 5: Approval and Execution**
- Agency leadership approval (both parties)
- Data Governance Board notification (for major initiatives)
- Execute agreement and establish technical implementation
- Publish summary in public register (with confidential details redacted)

**Step 6: Ongoing Management**
- Quarterly compliance reviews
- Annual agreement renewal or termination
- Incident reporting and resolution
- Continuous improvement

### 5.3 Public Transparency

**Data Sharing Register:**

A public register of all data sharing agreements must be maintained, including:
- Agencies involved
- General purpose of sharing
- Legal basis
- Data categories (without sensitive details)
- Frequency and duration
- Link to privacy impact assessment (if applicable)

**Exemptions from Publication:**
- National security matters
- Active law enforcement investigations
- Commercial confidentiality (limited exceptions)

---

## 6. Privacy Impact Assessment Requirements

### 6.1 When PIA is Required

A Privacy Impact Assessment (PIA) is MANDATORY for:

1. **New data sharing arrangements** involving Restricted personal data
2. **Large-scale sharing** (>100,000 individuals)
3. **Sensitive data** (health, financial, biometric, children's data)
4. **Automated decision-making** using shared data
5. **Significant change** to existing sharing arrangement

### 6.2 PIA Process

1. **Scoping:** Define the data sharing initiative and potential impacts
2. **Stakeholder Consultation:** Engage affected individuals, civil society, experts
3. **Risk Assessment:** Identify and evaluate privacy risks
4. **Mitigation Strategies:** Design safeguards to address risks
5. **Documentation:** Complete PIA report using standard template
6. **DPO Review:** Independent review by Data Protection Officer
7. **Approval:** Senior management sign-off
8. **Publication:** Publish summary (with sensitive details redacted)

### 6.3 PIA Template

*See companion document: `privacy-impact-assessment-template.md`*

---

## 7. Audit and Compliance

### 7.1 Audit Requirements

**Routine Audits:**
- **Access Logs:** Reviewed monthly by data steward
- **Security Controls:** Quarterly automated compliance scans
- **Agreement Compliance:** Annual review by each agency
- **Independent Audit:** Bi-annual audit by internal audit or external firm

**Audit Scope:**
- Technical security controls effectiveness
- Adherence to data sharing agreement terms
- Data quality and accuracy
- Privacy safeguards implementation
- Incident handling and response

### 7.2 Compliance Metrics

**Key Performance Indicators (KPIs):**

| Metric | Target | Measurement Frequency |
|--------|--------|----------------------|
| Data sharing agreements with current PIA | 100% | Quarterly |
| Security incidents reported within 24 hours | 100% | Ongoing |
| Audit findings remediated within 90 days | 95% | Quarterly |
| Unauthorized access attempts detected | 100% | Real-time |
| Data quality error rate | <0.1% | Monthly |
| User satisfaction with data sharing services | >85% | Annually |

### 7.3 Non-Compliance and Remediation

**Severity Levels:**

**Level 1 (Critical):** Data breach, unauthorized disclosure, systemic security failure
- Immediate suspension of data sharing
- Investigation within 48 hours
- Remediation plan within 1 week
- Report to Data Protection Authority

**Level 2 (High):** Repeated non-compliance, material breach of agreement
- Formal notice to agency leadership
- Remediation plan within 2 weeks
- Enhanced monitoring for 6 months
- Possible termination of agreement

**Level 3 (Medium):** Single instance of non-compliance, minor breach
- Documented warning
- Remediation within 30 days
- Follow-up audit within 60 days

**Level 4 (Low):** Administrative issue, no data impact
- Documented in routine audit
- Remediation within 90 days

### 7.4 Continuous Improvement

Agencies must:
- Conduct lessons learned reviews after incidents
- Share best practices through Data Governance Board
- Update agreements based on technology and legal changes
- Participate in framework updates and revisions

---

## 8. Implementation Guidance

### 8.1 Getting Started

**Phase 1: Preparation (Months 1-2)**
1. Designate Data Steward and Data Protection Officer
2. Conduct inventory of current data sharing arrangements
3. Classify all datasets according to framework
4. Assess current security controls against framework requirements
5. Identify gaps and develop remediation plan

**Phase 2: Formalization (Months 3-4)**
1. Document existing informal sharing with formal agreements
2. Conduct PIAs for high-risk sharing arrangements
3. Implement technical security baseline controls
4. Establish audit and monitoring processes
5. Train staff on new framework requirements

**Phase 3: Optimization (Months 5-6)**
1. Standardize APIs and data exchange formats
2. Implement automated compliance monitoring
3. Establish data quality improvement processes
4. Publish data sharing register
5. Participate in cross-agency governance

**Phase 4: Continuous Improvement (Ongoing)**
1. Regular reviews and updates of agreements
2. Technology upgrades and innovations
3. Framework refinements based on experience
4. Expansion to new data sharing opportunities

### 8.2 Quick Start Checklist

**Before Sharing Any Data:**
- [ ] Legal basis identified and documented
- [ ] Data classification assigned
- [ ] Security requirements understood
- [ ] Data Steward and DPO consulted
- [ ] Privacy Impact Assessment completed (if required)
- [ ] Data sharing agreement executed
- [ ] Technical controls implemented and tested
- [ ] Audit logging enabled
- [ ] Incident response procedures in place
- [ ] Agreement registered in public register

### 8.3 Common Pitfalls to Avoid

1. **Sharing without legal basis:** Ensure statutory or consent-based authority
2. **Over-sharing:** Share only minimum necessary data
3. **Inadequate security:** Implement all baseline controls before going live
4. **Poor data quality:** Validate data accuracy before sharing
5. **Informal arrangements:** Always formalize with written agreement
6. **Ignoring privacy:** Complete PIA for high-risk sharing
7. **Lack of transparency:** Publish in data sharing register
8. **Static agreements:** Review and update annually
9. **No audit trail:** Enable comprehensive logging
10. **Inadequate training:** Ensure all staff understand requirements

---

## 9. Templates and Forms

### 9.1 Data Sharing Agreement Template

```
DATA SHARING AGREEMENT

Between: [Provider Agency Name] ("Provider")
And: [Requestor Agency Name] ("Requestor")

1. PURPOSE
   [Describe business need and objectives]

2. LEGAL BASIS
   Authority: [Cite specific legislation or regulation]
   Basis: [ ] Statutory Mandate  [ ] Public Interest  [ ] Consent  [ ] Other: _______

3. DATA SPECIFICATION
   Data Elements: [List specific fields, not entire datasets]
   Data Classification: [ ] Public  [ ] Internal  [ ] Confidential  [ ] Restricted
   Volume: [Number of records, update frequency]
   Format: [API, file transfer, database query, etc.]

4. PERMITTED USE
   Purpose: [Specific uses only]
   Prohibited Uses: [Explicitly list what is NOT allowed]
   Onward Sharing: [ ] Permitted with approval  [ ] Not permitted

5. SECURITY REQUIREMENTS
   Authentication: [Multi-factor, API keys, certificates]
   Encryption: [In transit and at rest requirements]
   Access Controls: [Who can access, audit logging]
   Monitoring: [Security monitoring and alerting]

6. PRIVACY SAFEGUARDS
   Privacy Impact Assessment: [ ] Completed (Date: ______)  [ ] Not Required
   Data Minimization: [How minimum necessary is ensured]
   Retention Period: [How long data will be kept]
   Deletion Procedure: [How data will be securely destroyed]

7. DATA QUALITY
   Provider Responsibilities: [Accuracy, completeness, timeliness]
   Requestor Responsibilities: [Error reporting, feedback]
   Quality Metrics: [Specific SLAs or quality standards]

8. ROLES AND RESPONSIBILITIES
   Provider Data Steward: [Name, contact]
   Requestor Data Steward: [Name, contact]
   Technical Contact (Provider): [Name, contact]
   Technical Contact (Requestor): [Name, contact]

9. AUDIT AND COMPLIANCE
   Audit Frequency: [Monthly, quarterly, annually]
   Compliance Reporting: [What, when, to whom]
   Right to Audit: [Each party can audit the other]

10. INCIDENT MANAGEMENT
    Incident Notification: [Within 24 hours to designated contact]
    Incident Response: [Procedures and responsibilities]
    Breach Notification: [Legal requirements and timelines]

11. TERM AND TERMINATION
    Effective Date: [Start date]
    Term: [Duration, e.g., 12 months with annual renewal]
    Termination: [Either party with 30 days notice]
    Data Disposition: [Return or destroy data upon termination]

12. DISPUTE RESOLUTION
    Escalation: [Internal process before external]
    Mediation: [Data Governance Board mediation]
    Arbitration: [If mediation fails]

13. AMENDMENTS
    Process: [Written amendment signed by both parties]
    Review Schedule: [Annual review required]

SIGNATURES:

Provider Agency:
_________________________    _______________
[Name, Title]                 Date

Requestor Agency:
_________________________    _______________
[Name, Title]                 Date

Data Protection Officer Acknowledgment:
_________________________    _______________
[Name]                        Date
```

### 9.2 Data Access Log Template

```
DATA ACCESS LOG

Agreement ID: [Unique identifier]
Provider: [Agency name]
Requestor: [Agency name]

Date/Time: [ISO 8601 format]
User ID: [Unique user identifier]
User Name: [Full name]
User Role: [Job function]
Access Method: [API, manual query, bulk download]
Data Elements Accessed: [Specific fields]
Number of Records: [Count]
Purpose: [Specific reason for access]
IP Address: [Source IP]
Session ID: [Unique session identifier]
Status: [Success, Denied, Error]
Error Message: [If applicable]
```

### 9.3 Incident Report Template

```
DATA SHARING INCIDENT REPORT

Incident ID: [Unique identifier]
Date/Time Detected: [ISO 8601 format]
Reported By: [Name, role]

INCIDENT DETAILS:
Type: [ ] Unauthorized Access  [ ] Data Breach  [ ] System Failure
      [ ] Data Quality Issue  [ ] Other: _______
Severity: [ ] Critical  [ ] High  [ ] Medium  [ ] Low

Description: [What happened]

Data Affected:
- Agreement ID: [Reference]
- Data Classification: [Public/Internal/Confidential/Restricted]
- Number of Records: [Count]
- Data Elements: [Specific fields]
- Individuals Affected: [Number of people, if applicable]

ROOT CAUSE:
[Analysis of why incident occurred]

IMMEDIATE ACTIONS TAKEN:
[Steps taken to contain incident]

IMPACT ASSESSMENT:
Privacy Impact: [None/Low/Medium/High]
Security Impact: [None/Low/Medium/High]
Operational Impact: [None/Low/Medium/High]
Reputational Impact: [None/Low/Medium/High]

NOTIFICATIONS:
- Information Security Officer: [ ] Yes (Date: ____) [ ] N/A
- Data Protection Officer: [ ] Yes (Date: ____) [ ] N/A
- Data Protection Authority: [ ] Yes (Date: ____) [ ] N/A
- Affected Individuals: [ ] Yes (Date: ____) [ ] N/A
- Partner Agency: [ ] Yes (Date: ____) [ ] N/A

REMEDIATION PLAN:
Short-term (0-30 days): [Actions]
Medium-term (1-6 months): [Actions]
Long-term (6+ months): [Actions]

LESSONS LEARNED:
[What will be done differently to prevent recurrence]

CLOSURE:
Incident Closed: [ ] Yes (Date: ____) [ ] No
Approved By: _________________________
```

---

## 10. Related Policies and References

### 10.1 Related GaaS Layer 0 Policies

- **Privacy Impact Assessment Template** - Detailed PIA methodology
- **Algorithmic Impact Assessment Template** - For AI/ML using shared data
- **Vendor Security Requirements** - For third-party data processors
- **Acceptable Use Policy** - End-user responsibilities

### 10.2 Technical Standards

- **API Standards:** [Reference to national API guidelines]
- **Data Formats:** [XML, JSON, CSV standards]
- **Authentication:** OAuth 2.0, SAML 2.0, OpenID Connect
- **Encryption:** NIST FIPS 140-2, TLS 1.3
- **Metadata:** Dublin Core, DCAT-AP

### 10.3 External References

**International Standards:**
- ISO/IEC 27001 - Information Security Management
- ISO/IEC 27701 - Privacy Information Management
- ISO/IEC 29100 - Privacy Framework
- NIST Privacy Framework
- GDPR (for EU context) or equivalent regional privacy laws

**Best Practice Frameworks:**
- UK Data Sharing Code of Practice
- Australian Data Sharing Framework
- New Zealand Data Sharing Principles
- Estonia X-Road Data Exchange Layer
- Singapore Government Data Architecture

### 10.4 Legal References

*Note: Each implementing jurisdiction must insert relevant national legislation*

- **Data Protection Law:** [Citation]
- **E-Government Act:** [Citation]
- **Freedom of Information Act:** [Citation]
- **Cybersecurity Act:** [Citation]
- **Administrative Procedure Act:** [Citation]
- **Evidence Act:** [Citation for digital records]

---

## 11. Glossary

**Anonymization:** Irreversibly removing identifiers so individuals cannot be re-identified.

**API (Application Programming Interface):** Software interface enabling system-to-system data exchange.

**Data Controller:** Entity determining purposes and means of data processing.

**Data Processor:** Entity processing data on behalf of the controller.

**Data Steward:** Person responsible for data asset governance and quality.

**Data Subject:** Individual to whom personal data relates.

**Encryption:** Converting data into coded form to prevent unauthorized access.

**Personal Data:** Any information relating to an identified or identifiable individual.

**Pseudonymization:** Replacing identifiers with pseudonyms, allowing re-identification with additional information.

**Restricted Data:** Highly sensitive data requiring enhanced security (see Section 3.2).

---

## 12. Revision History

| Version | Date | Changes | Approver |
|---------|------|---------|----------|
| 1.0 | October 2025 | Initial template release | GaaS Framework Team |

---

## 13. Support and Contact

**For Technical Questions:**
- Email: data-sharing-support@[agency].gov
- Portal: [URL to technical documentation]

**For Policy Interpretation:**
- Email: data-governance@[agency].gov
- Phone: [Contact number]

**For Privacy Concerns:**
- Data Protection Officer: dpo@[agency].gov
- National Data Protection Authority: [Contact details]

**For Security Incidents:**
- Security Operations Center: soc@[agency].gov
- Emergency Hotline: [24/7 number]

---

**Document Control:**
- **Template ID:** GaaS-T4-DSF-001
- **Classification:** Public
- **Review Cycle:** Annual
- **Next Review:** October 2026
- **Owner:** [National Digital Government Office]

*This template is part of the Government as a Service (GaaS) framework. It may be freely adapted for national, regional, or local government use. Attribution appreciated but not required.*

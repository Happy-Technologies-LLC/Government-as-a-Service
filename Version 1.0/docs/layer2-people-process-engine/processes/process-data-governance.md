# Layer 2 Process: Data Governance Framework

**Official Operating Procedure**
**Layer 2: People & Process Engine → Process Dimension**

## PPT Investment Breakdown

This playbook follows the People-Process-Technology (PPT) framework with process-dominant emphasis reflecting the regulatory and policy nature of data governance.

**Investment Allocation:**
- **People (35%):** Data governance board, Chief Data Officer, Data Protection Officers, data stewards, privacy specialists
- **Process (45%):** Classification policies, sharing agreements, Privacy Impact Assessments, retention schedules, compliance audits
- **Technology (20%):** Master data management, data catalogs, privacy management tools, monitoring systems

**Investment Required (Budget Edition):** 2-3% of digital transformation budget (typically $6-10M setup + $2-5M annual)
**Investment Required (Reality Edition):** $10-16M setup + $4-8M annual (because data cleansing, politics, and steward salaries cost more than Excel formulas suggest)

**Why the 60% overrun?**
- Data is messier than you think (duplicate records, inconsistent formats, years of technical debt)
- Data stewards are expensive and hard to find (need domain + technical knowledge)
- Politics slow everything down (agencies fight over who "owns" shared data)
- Master data management tools cost 2-3x more than brochure prices (licensing + professional services + integration)
- Compliance requirements expand mid-project (new privacy law passes, scope doubles)

This allocation reflects that data governance is predominantly about policy, procedures, and compliance frameworks, with technology playing an enabling rather than driving role.

## GSM Framework Alignment

This playbook aligns with the **Government Service Management (GSM)** framework, specifically:
- **GSM Information Management Practice** - Government data lifecycle and value maximization
- **GSM Knowledge Management Practice** - Sharing data insights across agencies
- **GSM Compliance Management** - Privacy, security, and regulatory adherence
- **GSM Supplier Management** - Third-party data sharing and processor oversight

GSM replaces traditional IT service management with government-specific practices emphasizing citizen data rights, transparency, and democratic oversight.

---

## Executive Summary

Effective data governance is essential for digital government transformation. It ensures data is accurate, secure, accessible to authorized parties, and used ethically. This playbook provides a comprehensive framework for implementing cross-agency data governance aligned with Government Service Management (GSM) principles, including classification, sharing agreements, privacy impact assessments, and the technical implementation of "Tell Us Once" principles.

**Key Objectives:**
- Establish clear data classification and handling standards across all agencies
- Enable secure, legal, and ethical data sharing between agencies
- Implement robust privacy protection through Privacy Impact Assessments (PIAs)
- Create effective Data Protection Officer (DPO) function with independence and authority
- Coordinate data governance across organizational boundaries
- Implement "Tell Us Once" to reduce citizen burden
- Ensure compliance through monitoring, audit, and enforcement

**Expected Outcomes (Aspirational):**
- 100% of data assets classified within 12 months
- 80% reduction in duplicate data collection from citizens (via Tell Us Once)
- 95%+ compliance with data retention and deletion policies
- Zero major data breaches attributed to governance failures
- 90%+ citizen trust in government data handling

**Expected Outcomes (Realistic):**
- 70% of data assets classified within 18 months (the rest are legacy systems nobody understands)
- 40-50% reduction in duplicate data collection within 24 months (Tell Us Once is hard)
- 75% compliance with retention policies (someone always forgets to delete old data)
- 1-2 governance-related incidents (human error happens)
- 70% citizen trust (up from 50% if you're transparent about problems)

---

## Data Classification Procedures

### 4-Tier Classification Model

**Classification Tiers:**

| Tier | Label | Definition | Examples | Handling Requirements |
|------|-------|------------|----------|----------------------|
| **Tier 1** | **PUBLIC** | Information intended for public disclosure; no harm if disclosed | Published reports, public website content, open data, press releases | No special handling; publish freely |
| **Tier 2** | **INTERNAL** | Information for internal government use; low impact if disclosed | Internal memos, draft policies, meeting agendas, operational data | Basic access controls; government network only |
| **Tier 3** | **CONFIDENTIAL** | Sensitive information; moderate to serious impact if disclosed | Personal data (PII), procurement details, security assessments, cabinet documents | Encryption in transit and at rest; need-to-know access; audit logging |
| **Tier 4** | **SECRET** | Highly sensitive information; severe harm if disclosed | National security intelligence, law enforcement operations, sensitive personal data (health, financial) | Maximum security; multi-factor authentication; air-gapped systems; strict audit |

**Classification Principles:**
- **Default to higher classification** when in doubt (can be downgraded later)
- **Lifetime classification:** Data inherits the highest classification of any component (e.g., public data + PII = Confidential)
- **Aggregation risk:** Multiple Internal items may collectively be Confidential
- **Time-based declassification:** Some data automatically downgrades over time (e.g., cabinet documents after 20 years)

### Classification Criteria and Decision Tree

**Step-by-Step Classification Process:**

1. **Does the information contain:**
   - National security information? → **SECRET**
   - Ongoing law enforcement operations? → **SECRET**
   - Sensitive personal data (health, biometrics, financial)? → **SECRET** or **CONFIDENTIAL** (based on sensitivity)
   - Personal identifiable information (name, address, contact)? → **CONFIDENTIAL**
   - Commercial-in-confidence (procurement, contracts)? → **CONFIDENTIAL**
   - Draft policy or cabinet documents? → **CONFIDENTIAL** (until published)

2. **If NO to all above:**
   - Is it intended for public disclosure (now or in future)? → **PUBLIC**
   - Is it internal operations information? → **INTERNAL**

3. **Assess impact of unauthorized disclosure:**
   - Severe harm (national security, safety, major privacy violation)? → **SECRET**
   - Moderate harm (reputation damage, privacy breach, economic loss)? → **CONFIDENTIAL**
   - Low/no harm? → **INTERNAL** or **PUBLIC**

**Classification Authority:**
- **Data owners** are responsible for initial classification
- **Data stewards** review and validate classification (quality assurance)
- **Data governance board** adjudicates disputes and edge cases
- **Automated classification tools** provide suggestions (machine learning models trained on classified data)

### Labeling and Handling Requirements

**Labeling Standards:**

**Digital Data:**
- **Metadata tagging:** All files/records must have classification metadata
  - File properties: "Classification: CONFIDENTIAL" in metadata fields
  - Database records: Classification column in table schema
  - Email: Classification prefix in subject line: "[CONFIDENTIAL] Subject"
  - Documents: Header/footer on every page: "CONFIDENTIAL - Handle According to Policy"

**Physical Data:**
- **Cover sheets:** Classification prominently displayed on first page
- **Storage:** Locked cabinets for CONFIDENTIAL, safes for SECRET
- **Transport:** Sealed envelopes/packages with classification label
- **Destruction:** Cross-cut shredding (CONFIDENTIAL), incineration (SECRET)

**Handling Requirements by Tier:**

**PUBLIC:**
- Storage: Any system
- Transmission: Any method (email, web, unencrypted)
- Access: Anyone
- Disposal: Standard recycling/deletion
- Audit: Not required

**INTERNAL:**
- Storage: Government networks only (not personal devices unless encrypted)
- Transmission: Government email, encrypted if external
- Access: Government employees (role-based access control)
- Disposal: Secure deletion (3-pass overwrite)
- Audit: Access logging (retained 1 year)

**CONFIDENTIAL:**
- Storage: Encrypted at rest (AES-256), government networks, approved cloud (FedRAMP/equivalent)
- Transmission: TLS 1.3+ encryption, VPN for remote access
- Access: Need-to-know basis (explicit permissions), multi-factor authentication
- Disposal: Secure deletion (7-pass overwrite), physical shredding (cross-cut)
- Audit: Full audit trail (access, modification, deletion) retained 7 years
- Review: Annual review of access permissions

**SECRET:**
- Storage: Air-gapped systems (physically separated from internet), encrypted (AES-256 + additional measures), restricted physical access (badge + biometric)
- Transmission: Approved secure communication channels only (no internet transmission), encrypted portable media (hand-delivered)
- Access: Security clearance required, need-to-know, multi-factor authentication + biometrics
- Disposal: Incineration (physical), cryptographic erasure (digital), witnessed destruction
- Audit: Full audit trail with real-time monitoring, retained indefinitely
- Review: Quarterly review of access permissions

**Downgrading/Declassification:**
- Initiated by data owner
- Approved by data governance board (or delegate for routine downgrades)
- Re-label and adjust handling accordingly
- Examples: Cabinet documents (Secret → Public after 20 years), completed procurement (Confidential → Internal after contract award)

**Training:**
- **All employees:** Annual data classification training (1 hour online module)
- **Data owners:** Advanced classification training (4 hours, scenario-based)
- **Certification:** Annual attestation that employees understand and will comply with policies

---

## Data Sharing Agreements

### Inter-Agency Sharing Framework

**Purpose:** Enable lawful, secure, and accountable data sharing between government agencies to improve service delivery while protecting privacy.

**Principles:**
1. **Lawful basis:** Every data share must have legal authority (legislation, regulation, consent)
2. **Purpose limitation:** Data used only for specified, legitimate purpose
3. **Minimization:** Share minimum necessary data
4. **Security:** Appropriate technical and organizational measures
5. **Accountability:** Clear responsibilities, audit trails, oversight
6. **Transparency:** Citizens informed of data sharing (with exceptions for law enforcement, national security)

**Governance Model:**

**Three Tiers of Data Sharing:**

| Tier | Description | Approval Level | Timeline | Legal Basis |
|------|-------------|----------------|----------|-------------|
| **Ad-hoc** | One-time share for specific case | Data owner + DPO | 1-2 days | Existing legislation or consent |
| **Routine** | Recurring share for established purpose (e.g., monthly batch) | Data governance board | 2-4 weeks | Legislation + data sharing agreement |
| **Strategic** | Large-scale, high-risk, or precedent-setting share | Cabinet/executive | 2-3 months | Legislation + MOU + data sharing agreement |

### Legal Basis for Sharing

**Hierarchy of Legal Bases (in order of preference):**

1. **Explicit statutory provision:** Specific legislation authorizes data sharing for defined purpose
   - *Example:* Tax authority shares income data with social services for benefit eligibility verification (Social Security Act Section 12)
   - *Strength:* Strongest legal basis; clear authority
   - *Requirements:* Must be within scope of statutory provision

2. **General data sharing provision with safeguards:** Broad legislation allows sharing with ministerial approval and safeguards
   - *Example:* Digital Government Act allows inter-agency sharing for "service improvement" subject to PIA and DPO approval
   - *Strength:* Flexible but requires robust governance
   - *Requirements:* PIA, necessity test, proportionality assessment, safeguards

3. **Memorandum of Understanding (MOU) between agencies:** Administrative agreement where no specific legislation
   - *Example:* Health and education agencies share data on school vaccination rates for public health monitoring
   - *Strength:* Allows collaboration where legislation silent; not legally binding
   - *Requirements:* Must align with general legal framework (privacy law), PIA, executive approval

4. **Individual consent:** Person explicitly consents to data sharing
   - *Example:* Citizen applies for housing assistance and consents to income verification from tax authority
   - *Strength:* Respects autonomy; strong privacy protection
   - *Limitations:* Not scalable; consent can be withdrawn; not appropriate for all purposes (e.g., law enforcement)
   - *Requirements:* Informed consent (clear explanation of purpose, scope, consequences)

**Not Acceptable Legal Bases:**
- "Implied consent" (not sufficiently clear)
- "Public interest" without specific legal framework (too vague)
- "We've always done it this way" (not a legal basis)

### Template Data Sharing Agreement

**Mandatory Clauses:**

```markdown
# DATA SHARING AGREEMENT
Between: [Agency A - Data Provider]
And: [Agency B - Data Recipient]

## 1. PURPOSE
- Specific purpose for data sharing: [Clear, narrow description]
- Legal basis: [Cite legislation, regulation, or consent mechanism]
- Benefit to citizens/public interest: [Justify necessity]

## 2. SCOPE OF DATA
- Data items to be shared: [Exhaustive list of fields/tables]
- Data classification: [Tier 1-4 per classification policy]
- Volume: [Number of records, frequency]
- Time period: [Historical data, ongoing, or one-time]

## 3. DATA MINIMIZATION
- Necessity justification: [Why each data item is necessary for stated purpose]
- Alternative approaches considered: [Why less privacy-intrusive methods were rejected]
- Data anonymization/pseudonymization: [If applicable, techniques used]

## 4. TECHNICAL ARRANGEMENTS
- Transfer method: [Secure FTP, API, encrypted email, etc.]
- Encryption standard: [AES-256, TLS 1.3+]
- Frequency: [Real-time, daily batch, monthly, one-time]
- Data format: [CSV, JSON, XML, database sync]
- Recipient system: [Where data will be stored]

## 5. SECURITY AND CONFIDENTIALITY
- Access controls: [Who in recipient agency can access, authentication requirements]
- Storage security: [Encryption at rest, access logging, network segmentation]
- Data retention: [How long recipient will retain data]
- Data deletion: [Secure deletion procedures, timeline]
- Audit logging: [What events logged, retention period]

## 6. PERMITTED USE
- Authorized uses: [Specific purposes only]
- Prohibited uses: [Examples: no marketing, no onward sharing without approval]
- Onward sharing restrictions: [Data cannot be shared with third parties without written approval]

## 7. DATA QUALITY
- Provider obligations: [Ensure data accurate, complete, up-to-date]
- Recipient obligations: [Report errors, request corrections]
- Dispute resolution: [Process for resolving data quality issues]

## 8. PRIVACY AND TRANSPARENCY
- PIA completed: [Yes/No, reference number]
- DPO approval: [Yes, signed by both DPOs]
- Citizen notification: [How citizens will be informed, exceptions]
- Access rights: [How citizens can access their shared data, request corrections]

## 9. BREACH NOTIFICATION
- Breach definition: [Unauthorized access, loss, modification, disclosure]
- Notification timeline: [Provider notifies recipient within 24 hours, vice versa]
- Incident response: [Coordinated investigation, remediation]
- Regulatory reporting: [Privacy regulator notification per legal requirements]

## 10. COMPLIANCE AND AUDIT
- Compliance monitoring: [Regular audits, spot checks]
- Audit rights: [Each party can audit the other's compliance]
- Reporting: [Quarterly reports to data governance board]

## 11. LIABILITY AND INDEMNITY
- Provider liability: [Responsible for data accuracy, lawful collection]
- Recipient liability: [Responsible for secure handling, authorized use only]
- Indemnity: [Each party indemnifies other for breaches of agreement]

## 12. GOVERNANCE
- Joint oversight committee: [Representation from both agencies, meets quarterly]
- Escalation process: [Pathway for resolving disputes]
- Review schedule: [Annual review of agreement, renew or terminate]

## 13. TERM AND TERMINATION
- Effective date: [Start date]
- Duration: [1-3 years typical]
- Renewal: [Automatic or requires renegotiation]
- Termination: [Either party can terminate with 30 days notice]
- Wind-down: [Recipient deletes data within 30 days of termination unless legal retention requirement]

## 14. SIGNATORIES
[Agency A Data Owner]: ________________________ Date: ________
[Agency A DPO]: ________________________ Date: ________
[Agency B Data Owner]: ________________________ Date: ________
[Agency B DPO]: ________________________ Date: ________
[Data Governance Board Chair]: ________________________ Date: ________

## APPENDIX A: Data Items
[Detailed list of all data fields]

## APPENDIX B: Privacy Impact Assessment Summary
[Key findings and mitigations]

## APPENDIX C: Technical Specifications
[API documentation, file formats, encryption certificates]
```

### Approval Workflow

**Process for Routine Data Sharing Agreement:**

1. **Initiation (Week 1):**
   - Requesting agency submits proposal to data governance board secretariat
   - Includes: Business case, draft agreement, preliminary PIA

2. **Review (Week 2):**
   - Data governance board secretariat assigns reviewers:
     - Data provider agency (data owner + legal + IT security)
     - Data recipient agency (data owner + legal + IT)
     - DPOs from both agencies (independent review)
     - Privacy regulator (for high-risk shares)

3. **Privacy Impact Assessment (Week 2-3):**
   - Recipient agency completes full PIA (see PIA section below)
   - DPO reviews and provides formal opinion
   - Mitigations incorporated into agreement

4. **Negotiation (Week 3):**
   - Agencies negotiate technical and legal terms
   - Resolve any concerns raised by reviewers
   - Finalize agreement text

5. **Approval (Week 4):**
   - Data governance board meets (bi-weekly)
   - Reviews PIA, agreement, legal basis, necessity
   - Votes to approve, modify, or reject (majority required, DPOs have veto)
   - If approved, signatories execute agreement

6. **Implementation (Week 5-6):**
   - Technical setup (APIs, encryption keys, access provisioning)
   - Testing (data quality, security, audit logging)
   - User training
   - Go-live

7. **Ongoing Oversight:**
   - Quarterly reporting to data governance board (volume, purpose compliance, issues)
   - Annual review (assess continued necessity, update agreement)
   - Audit (random sample, compliance verification)

**Fast-Track Process (Ad-Hoc, Individual Case):**
- Data owner approves request (checks legal basis, necessity)
- DPO concurs (confirms lawful, proportionate)
- Data shared within 1-2 days
- Logged and reported in quarterly board meeting (transparency, pattern identification)

---

## Privacy Impact Assessment (PIA)

### PIA Process Overview

**Definition:** A Privacy Impact Assessment (PIA) is a systematic process to identify and mitigate privacy risks arising from a new system, process, or data sharing arrangement.

**When PIA is Required:**
- All new systems or services that collect, use, or share personal data
- Major changes to existing systems (new data fields, new purposes, new sharing)
- All data sharing agreements (even if system unchanged)
- High-risk processing (sensitive data, large-scale, automated decision-making, profiling)

**Process Flowchart:**

```
[Proposal Submitted]
        ↓
[Screening: Is PIA Required?] → NO → [Document rationale, proceed]
        ↓ YES
[Assign PIA Lead (project owner)]
        ↓
[Complete PIA Template (see below)]
        ↓
[Consult DPO (preliminary review)]
        ↓
[Identify Risks and Mitigations]
        ↓
[Public Consultation (if high-risk)]
        ↓
[DPO Formal Opinion]
        ↓
[Data Governance Board Approval] → REJECTED → [Revise or Cancel Project]
        ↓ APPROVED
[Implement Mitigations]
        ↓
[Monitor and Review (annually or on change)]
```

### PIA Template (20+ Questions)

**SECTION 1: PROJECT OVERVIEW**

1. **Project Name and Description:** [Provide clear description of system, service, or data sharing arrangement]

2. **Project Objectives:** [What problem does this solve? What benefits will it deliver?]

3. **Legal Basis:** [What legislation or regulation authorizes this processing? Cite specific provisions.]

4. **Stakeholders:** [Who is involved? Project owner, data controller, data processor, affected individuals, other agencies]

5. **Timeline:** [When will this start? How long will it operate?]

**SECTION 2: DATA FLOWS**

6. **What personal data will be collected?** [List all data items: name, address, DOB, health info, financial info, etc.]

7. **What is the purpose of collecting each data item?** [Justify necessity of each item; can any be omitted?]

8. **Who will the data be collected from?** [Directly from individuals, from other agencies, from third parties?]

9. **How will the data be collected?** [Forms, automated sensors, third-party data, existing databases?]

10. **Who will have access to the data?** [List roles, agencies, third parties; specify need-to-know basis]

11. **Will the data be shared with third parties?** [If yes, who, why, what legal basis, what safeguards?]

12. **Will the data be transferred internationally?** [If yes, to which countries, what safeguards (adequacy decision, standard clauses, etc.)]

13. **How long will the data be retained?** [Retention period, legal basis for retention, deletion procedures]

**SECTION 3: PRIVACY RISKS**

14. **What are the privacy risks to individuals?**
    - Unauthorized access/disclosure: [Likelihood, impact]
    - Function creep (use for unintended purposes): [Likelihood, impact]
    - Inaccurate data leading to harm: [Likelihood, impact]
    - Profiling/automated decision-making: [Likelihood, impact]
    - Surveillance/chilling effect on behavior: [Likelihood, impact]
    - Exclusion/discrimination: [Likelihood, impact]
    - Loss of control over personal information: [Likelihood, impact]

15. **What are the compliance risks?**
    - Violation of privacy law: [Risk level, consequences]
    - Breach of data sharing agreements: [Risk level, consequences]
    - Non-compliance with retention/deletion policies: [Risk level, consequences]
    - Failure to obtain consent (where required): [Risk level, consequences]

**SECTION 4: MITIGATION MEASURES**

16. **Data minimization:** [How have you limited data collection to minimum necessary?]

17. **Purpose limitation:** [How will you prevent use for unauthorized purposes? Technical controls?]

18. **Security measures:** [Encryption, access controls, authentication, audit logging, security testing]

19. **Data quality measures:** [Validation, error correction, regular review and update]

20. **Transparency measures:** [How will individuals be informed? Privacy notice, consent forms, public announcement]

21. **Individual rights:** [How will you enable access, correction, erasure, portability, objection?]

22. **Accountability:** [Who is responsible for compliance? DPO oversight? Audit plan?]

**SECTION 5: CONSULTATION**

23. **Stakeholder consultation:** [Have you consulted affected individuals, civil society, DPO, legal, IT security?]

24. **Public consultation:** [For high-risk projects, have you sought public feedback? What concerns were raised? How addressed?]

**SECTION 6: REVIEW AND APPROVAL**

25. **PIA Completion Date:** [Date]

26. **PIA Lead (Name, Title, Signature):** ________________________

27. **DPO Opinion:** [Approve, Approve with Conditions, Reject - see DPO memo attached]

28. **Data Governance Board Decision:** [Approved, Conditional Approval, Rejected - Date of decision]

29. **Review Schedule:** [Annual review or on material change to processing]

**APPENDIX: Risk Assessment Matrix**

| Risk | Likelihood (1-5) | Impact (1-5) | Risk Score (L x I) | Mitigation | Residual Risk |
|------|------------------|--------------|-------------------|------------|---------------|
| Unauthorized access | 3 | 5 | 15 (High) | Encryption, MFA, audit logging | 6 (Medium) |
| ... | ... | ... | ... | ... | ... |

### Approval and Review Process

**DPO Formal Opinion:**
- DPO independently reviews PIA
- Assesses completeness, accuracy, adequacy of mitigations
- Provides written opinion: Approve, Approve with Conditions (specify conditions), Reject (specify reasons)
- If reject, project must address concerns and resubmit, or cancel project

**Data Governance Board Review:**
- Considers PIA, DPO opinion, business case, legal advice
- May request additional information or mitigations
- Decision: Approve (proceed), Conditional Approval (implement specified mitigations first), Reject (do not proceed)
- Rejected projects can appeal to executive level (Cabinet or equivalent)

**Annual Review:**
- PIA reviewed annually or when material change (new data, new purpose, new sharing, security incident)
- Update risk assessment, mitigations
- Re-approval by DPO and board

**Public Transparency:**
- Approved PIAs published on government transparency portal (may redact security-sensitive details)
- Citizens can comment, challenge decisions
- Independent privacy regulator can review and order changes

---

## Data Protection Officer (DPO)

### DPO Responsibilities and Authority

**Core Responsibilities:**

1. **Advisory:** Provide expert advice to agencies on privacy obligations, best practices, risk mitigation

2. **Monitoring:** Monitor compliance with privacy laws, policies, PIAs, data sharing agreements

3. **Training:** Deliver and coordinate privacy training for staff, data owners, leadership

4. **PIA Review:** Review and approve (or reject) all PIAs before projects proceed

5. **Data Breach Response:** Lead investigation and response to data breaches, coordinate with regulator

6. **Rights Requests:** Oversee handling of individual rights requests (access, correction, erasure)

7. **Regulator Liaison:** Serve as point of contact with privacy regulator, represent agency in investigations

8. **Documentation:** Maintain records of processing activities, PIAs, data sharing agreements, breaches

9. **Audit and Reporting:** Conduct privacy audits, report annually to executive and board on compliance

10. **Policy Development:** Develop and update privacy policies, standards, procedures

**Authority:**

- **Independence:** DPO must be free from instruction in performing duties (cannot be told how to decide on PIA)
- **Direct access to highest leadership:** Report directly to CEO/Minister, not through hierarchy
- **Veto power:** Can veto projects that pose unacceptable privacy risks (can be overridden only by executive with formal risk acceptance)
- **Resources:** Adequate budget, staff, training, tools to perform role
- **No conflicts of interest:** Cannot hold positions that determine purposes and means of processing (e.g., cannot be CIO or COO)

### Independence Requirements

**Organizational Independence:**

**Reporting Structure:**
- DPO reports directly to CEO, Minister, or equivalent (not to CIO, COO, or other operational role)
- Dotted-line reporting to Data Governance Board (but not subordinate to board)
- Annual report to legislature or independent oversight body

**Budget and Resources:**
- DPO office has dedicated budget (not controlled by operational units)
- Adequate staffing (1 DPO + 1 deputy per 1,000 staff as a guideline, more for high-risk agencies)
- Access to legal counsel, technical experts, training

**Decision-Making Authority:**
- DPO decisions on PIAs, data sharing, breaches are final (within scope of role)
- Can be overridden only by executive (e.g., Minister) with formal risk acceptance and public transparency
- Cannot be removed or penalized for DPO decisions (employment protection)

**Professional Independence:**

**Qualifications:**
- Expert knowledge of privacy law and practices (law degree, privacy certification (CIPP, CIPM), or equivalent experience)
- Understanding of technology (not necessarily technical expert, but able to understand data flows, security measures)
- Communication skills (able to advise leadership, train staff, engage public)

**Tenure:**
- Fixed term (e.g., 5 years) with possibility of renewal
- Cannot be dismissed except for cause (gross misconduct, incapacity)
- Not subject to performance management based on business objectives (only on DPO duties)

**No Conflicts:**
- Cannot hold positions that create conflicts (e.g., CIO, legal counsel for operations, procurement)
- Disclose any potential conflicts, recuse from decisions where conflict exists
- Cannot be incentivized to prioritize business objectives over privacy (e.g., bonus tied to project delivery)

### DPO Network and Support

**National DPO Network:**
- Regular meetings of DPOs across agencies (monthly)
- Share best practices, coordinate on cross-agency issues
- Develop common standards, templates, training
- Collective representation to privacy regulator and legislature

**Training and Professional Development:**
- Annual training budget for DPO (conferences, courses, certifications)
- Peer learning (visit other agencies, international exchanges)
- Membership in professional associations (IAPP, local privacy organizations)

**Tools and Resources:**
- PIA management software (workflow, template, tracking)
- Privacy policy library (centralized repository of policies, standards, guidance)
- Incident response platform (coordinate breach response)
- Training platform (deliver online privacy training to staff)

---

## Cross-Agency Coordination

### Data Governance Board Composition

**Purpose:** Central body to coordinate data governance across agencies, approve high-risk data sharing, set standards, and resolve disputes.

**Composition:**

**Voting Members (9-13 members):**
- Chief Data Officer (Chair) - government-wide data strategy lead
- 3-5 Agency Data Owners - representing major agencies (health, tax, social services, justice, etc.)
- 2 Data Protection Officers - represent DPO community (rotating positions, 2-year terms)
- Chief Technology Officer or delegate - technical perspective
- Legal Counsel - legal advice, regulatory compliance
- Civil Society Representative - public interest, privacy advocacy (external appointment)
- Privacy Regulator Observer - non-voting, advisory (regulatory perspective)

**Non-Voting Advisors:**
- Chief Information Security Officer - security perspective
- Statistics Agency Head - data quality, anonymization expertise
- Digital Service Lead - user experience, service design perspective
- Accessibility Specialist - ensure data governance supports accessibility

**Secretariat:**
- Dedicated staff (3-5 FTE) to support board operations
- Manage meeting logistics, agenda, documentation
- Track data sharing agreements, PIAs, compliance
- Prepare reports, briefings

**Meeting Frequency:**
- Bi-weekly (during high activity) or monthly (steady state)
- Special meetings as needed (major decisions, breaches)
- Annual strategic retreat (set priorities, review year)

### Decision-Making Framework

**Scope of Decisions:**

1. **Approval Decisions:**
   - Routine and strategic data sharing agreements
   - High-risk PIAs (DPO escalates to board)
   - Data governance policies and standards (classification, retention, sharing)
   - Budget allocation (data governance initiatives)

2. **Advisory Decisions:**
   - Guidance on interpretation of policies
   - Best practice recommendations
   - Risk assessments for emerging technologies

3. **Escalation Decisions:**
   - Disputes between agencies (data quality, access, sharing terms)
   - DPO vetoes (if agency appeals)
   - Breach response coordination (multi-agency breaches)

**Decision-Making Process:**

**Consensus Preferred:**
- Board seeks consensus where possible (builds buy-in, better outcomes)
- Chair facilitates discussion, seeks areas of agreement

**Voting When Necessary:**
- Simple majority for routine decisions (data sharing, policy updates)
- Supermajority (2/3) for high-impact decisions (major policy changes, precedent-setting shares)
- DPO veto: Either DPO can veto decisions that pose unacceptable privacy risk (can be overridden by supermajority + executive risk acceptance)

**Escalation to Executive:**
- Board-level deadlock (no majority) escalates to executive (Cabinet committee or equivalent)
- DPO veto override requires executive approval (Minister or equivalent)
- Major policy changes may require executive or legislative approval (board recommends)

**Transparency:**
- Meeting agendas and minutes published (redact sensitive details)
- Approved data sharing agreements registered publicly (high-level summary)
- Annual report to legislature (data sharing activity, compliance, issues)

### Dispute Resolution

**Common Disputes:**
- Data quality issues (recipient claims data inaccurate, provider disagrees)
- Access requests (one agency needs data, owner declines)
- Cost sharing (who pays for data sharing infrastructure)
- Priority conflicts (limited IT resources, competing demands)

**Dispute Resolution Process:**

**Level 1: Direct Negotiation (1-2 weeks):**
- Parties attempt to resolve directly (data owners meet)
- Facilitation by secretariat (neutral mediator)
- Most disputes resolved at this level (80%)

**Level 2: Board Mediation (2-4 weeks):**
- Dispute escalated to data governance board
- Board reviews facts, hears both sides
- Board proposes resolution (non-binding recommendation)
- Parties given opportunity to accept or proceed to Level 3

**Level 3: Board Decision (4-6 weeks):**
- Formal board decision (binding)
- Parties submit written briefs
- Board votes (simple majority)
- Decision documented, published (transparency)
- Appeal to executive possible (limited grounds: procedural error, legal error, new evidence)

**Special Case: DPO Veto:**
- If DPO vetoes a decision (PIA, data sharing) on privacy grounds:
  - Agency can accept veto (project cancelled or modified)
  - Agency can appeal to data governance board (present case, DPO presents counter-case)
  - Board can uphold veto (project stops) or override (requires 2/3 majority + executive risk acceptance)
  - Executive override: Minister or Cabinet can override DPO veto with formal risk acceptance (publicly disclosed, subject to legislative and regulatory scrutiny)

---

## "Tell Us Once" Implementation

### Concept and Benefits

**"Tell Us Once" Principle:** Citizens should only have to provide information to government once. Agencies share data securely so citizens don't repeat themselves.

**Example Scenario:**
- **Without Tell Us Once:** Citizen moves house. Must notify:
  - Tax authority (update address for tax returns)
  - Social services (update address for benefits)
  - Electoral roll (update voter registration)
  - Motor vehicle registry (update driver's license)
  - Health department (update medical records)
  - Each agency requires separate form, phone call, or in-person visit (5+ interactions)

- **With Tell Us Once:** Citizen submits address change once (via central portal or to any agency). System automatically notifies all relevant agencies. Citizen receives confirmation (1 interaction).

**Benefits:**
- **Citizen convenience:** Reduced burden (time, effort, frustration)
- **Data quality:** Single update propagates consistently (fewer errors)
- **Efficiency:** Reduced processing costs (less duplicate data entry, verification)
- **Compliance:** Easier for citizens to comply with obligations (e.g., updating address)

**Challenges:**
- **Data integration:** Requires interoperable systems, unique identifiers, data standards
- **Privacy:** Requires legal basis, safeguards, transparency (citizens must understand where data goes)
- **Consent vs. mandatory:** Balance between convenience and control (allow citizens to opt out?)
- **Data quality at source:** Errors propagate rapidly; must ensure accuracy

### Data Sharing Architecture

**Technical Architecture for Tell Us Once:**

**Components:**

1. **Unique Citizen Identifier:** National ID number (see Layer 2 Process Playbook: Digital Identity)
   - Links records across agencies
   - Privacy-preserving: Hashed or tokenized per agency (agency-specific identifiers derived from master ID)

2. **Central Event Bus (Publish-Subscribe Model):**
   - Agencies publish "events" (e.g., "Address changed for citizen ID 123456")
   - Subscribing agencies receive events in real-time
   - Technology: Apache Kafka, AWS EventBridge, Azure Event Grid, or equivalent
   - Security: Encrypted in transit (TLS 1.3+), authenticated (OAuth 2.0, mTLS)

3. **Master Data Repository (Optional, Hybrid Model):**
   - Central repository stores "golden record" for common data (name, DOB, address)
   - Agencies query repository for current data (single source of truth)
   - Agencies update repository when they receive new information
   - Conflict resolution: Business rules determine authoritative source (e.g., tax authority is authoritative for income, motor vehicle for driver's license)

4. **Agency Adapters:**
   - Each agency has adapter/middleware that connects their system to central event bus or master repository
   - Adapter translates central data format to/from agency-specific format
   - Adapter enforces business rules (which events to subscribe to, which data to share)

**Data Flow Example (Event-Driven Model):**

```
Citizen submits address change via online portal
        ↓
Portal validates data, updates citizen account
        ↓
Portal publishes "AddressChanged" event to central event bus
        ↓
Event bus broadcasts to all subscribing agencies (Tax, Social Services, Electoral, Motor Vehicle, Health)
        ↓
Each agency's adapter receives event
        ↓
Adapter checks business rules (Is this citizen in our system? Is this data relevant?)
        ↓
Adapter updates agency's local system (via API or batch job)
        ↓
Agency systems send confirmation back to central portal
        ↓
Portal notifies citizen: "Your address has been updated with Tax, Social Services, Electoral, Motor Vehicle, Health"
        ↓
Citizen receives single confirmation (email/SMS)
```

**Alternative Model (Master Data Repository):**

```
Citizen submits address change
        ↓
System queries master data repository to verify citizen identity
        ↓
System updates address in master repository (becomes "golden record")
        ↓
System triggers notifications to agencies with existing records for this citizen
        ↓
Agencies query master repository to fetch updated address
        ↓
Agencies update local systems
        ↓
Confirmation sent to citizen
```

**Hybrid Model (Recommended):**
- Master repository for core, stable data (name, DOB, address, contact) - single source of truth
- Event bus for transactional updates (real-time propagation)
- Agencies maintain authoritative data for domain-specific information (tax authority for income, health for medical records)

### Master Data Management

**Master Data Domains:**

| Data Domain | Description | Authoritative Source | Update Frequency |
|-------------|-------------|---------------------|------------------|
| **Identity** | Name, DOB, gender, photo | Civil registration | Low (changes rare) |
| **Contact** | Address, phone, email | Self-service portal (citizen-managed) | Medium (changes occasionally) |
| **Family** | Marital status, dependents | Civil registration | Low (changes rare) |
| **Income** | Employment, salary, benefits | Tax authority | High (changes frequently) |
| **Health** | Medical records, conditions | Health department | High (changes frequently) |
| **Education** | Qualifications, enrollment | Education department | Medium (changes annually) |
| **Assets** | Property, vehicles | Land registry, motor vehicle | Medium (changes occasionally) |

**Master Data Governance:**

**Data Stewards:**
- Each domain has a designated data steward (role in authoritative source agency)
- Responsible for data quality, accuracy, completeness, timeliness
- Resolves data conflicts (citizen reports address X, motor vehicle has address Y - which is correct?)
- Defines business rules for data validation

**Data Quality Metrics:**

| Metric | Definition | Target | Measurement |
|--------|------------|--------|-------------|
| **Completeness** | % of records with all required fields populated | 95% | Automated scan |
| **Accuracy** | % of records verified as correct (sample validation) | 98% | Annual survey |
| **Consistency** | % of records matching across systems (e.g., name spelled same way) | 90% | Cross-system comparison |
| **Timeliness** | Average age of data (time since last update) | <6 months | Metadata analysis |
| **Uniqueness** | % of duplicate records (same person multiple IDs) | <1% | De-duplication algorithm |

**Data Quality Improvement:**

*Preventive Measures:*
- Validation rules (e.g., address must be valid postal code)
- Real-time verification (e.g., phone number verification via SMS)
- User-friendly interfaces (reduce data entry errors)

*Corrective Measures:*
- Periodic data cleansing (identify and fix errors, duplicates)
- Citizen self-service (allow citizens to view and correct their data)
- Feedback loops (agencies report suspected errors to data steward)

### Data Standards

**Interoperability Standards:**

**Data Format Standards:**
- Names: UTF-8, support international characters, separate fields (given name, surname)
- Addresses: Standardized format (street number, street name, city, postal code, country), geocoded
- Dates: ISO 8601 (YYYY-MM-DD)
- Phone numbers: E.164 format (international standard)
- Email: RFC 5322 compliant

**API Standards:**
- RESTful APIs for data queries and updates
- OpenAPI (Swagger) specification for documentation
- OAuth 2.0 for authentication
- Rate limiting and throttling (prevent abuse)
- Versioning (backward compatibility for 2 versions)

**Data Exchange Standards:**
- JSON for web APIs (lightweight, human-readable)
- XML for batch transfers (legacy systems)
- CSV for bulk exports/imports (simple, universal)
- HL7 FHIR for health data (international standard)

**Metadata Standards:**
- Data classification (Tier 1-4)
- Data lineage (source, transformations, timestamp)
- Data ownership (agency, data steward contact)
- Retention period
- Access controls (who can view, edit)

**Consent and Privacy Metadata:**
- Purpose of collection
- Legal basis
- Consent status (if applicable)
- Opt-in/opt-out preferences
- Sharing permissions (citizen can control which agencies receive data)

---

## Compliance Monitoring

### Audit Procedures

**Types of Audits:**

**1. Internal Audits (Quarterly):**
- Conducted by each agency's internal audit team (or data governance team)
- Scope: Sample of data sharing agreements, PIAs, retention policies, access controls
- Checklist-based (compliance with policies)
- Findings reported to agency leadership and data governance board
- Remediation tracked

**2. Cross-Agency Audits (Annual):**
- Conducted by central data governance team or independent auditor
- Scope: Data sharing across agencies, master data quality, Tell Us Once implementation
- Sample 10-20% of data sharing agreements
- Test technical controls (encryption, access logging, data deletion)
- Findings reported to data governance board and executive

**3. DPO-Led Privacy Audits (Annual or On-Demand):**
- DPO selects high-risk systems or data sharing arrangements
- Focus: Privacy compliance (purpose limitation, data minimization, consent, rights)
- Includes interviews with staff, review of logs, testing of processes
- DPO issues audit report with recommendations
- Agency must respond with remediation plan

**4. External Regulatory Audits (As Required):**
- Privacy regulator or other oversight body conducts audit
- Triggered by complaint, breach, or random selection
- Comprehensive, may include on-site inspection
- Regulator can issue orders, fines, or public reports

**Audit Methodology:**

**Planning:**
- Define scope (systems, processes, period)
- Risk-based sampling (focus on high-risk areas: sensitive data, large-scale sharing, new systems)
- Review documentation (PIAs, data sharing agreements, policies)

**Fieldwork:**
- Interviews: Data owners, system administrators, DPO, users
- Document review: Logs, agreements, approvals, training records
- Technical testing: Access controls (can unauthorized users access?), encryption (is data encrypted in transit and at rest?), audit logging (are events logged correctly?)
- Data analysis: Query databases to identify non-compliance (e.g., data retained beyond retention period, data accessed by unauthorized roles)

**Reporting:**
- Findings categorized by severity: Critical (immediate action required), High (remediate within 30 days), Medium (remediate within 90 days), Low (best practice recommendation)
- Root cause analysis (why did non-compliance occur? Policy unclear, training lacking, technical failure?)
- Recommendations: Specific, actionable, assigned to responsible party with deadline
- Follow-up: Re-audit after remediation period to verify fixes

### Metrics and KPIs

**Data Governance Scorecard (Quarterly Reporting):**

| Category | Metric | Target | Current | Trend |
|----------|--------|--------|---------|-------|
| **Classification** | % of data assets classified | 100% | 94% | ↑ |
| **PIAs** | % of new systems with approved PIA | 100% | 97% | → |
| **PIAs** | Average PIA completion time | <4 weeks | 3.2 weeks | ↑ |
| **Data Sharing** | # active data sharing agreements | - | 47 | ↑ |
| **Data Sharing** | % agreements reviewed in past 12 months | 100% | 89% | ↓ |
| **Data Quality** | Master data completeness | 95% | 93% | ↑ |
| **Data Quality** | Master data accuracy (sampled) | 98% | 97% | → |
| **Retention** | % of data deleted per retention schedule | 100% | 91% | ↓ |
| **Access Control** | % of users with least-privilege access | 95% | 88% | ↑ |
| **Training** | % of staff completed annual privacy training | 100% | 95% | ↑ |
| **Audit** | # critical audit findings (unresolved) | 0 | 2 | ↓ |
| **Breaches** | # data breaches (per quarter) | 0 | 1 | → |
| **Breaches** | Avg time to contain breach (hours) | <24 | 18 | ↑ |
| **Citizen Trust** | % citizens trust govt data handling (survey) | 90% | 85% | ↑ |
| **Tell Us Once** | % of common data updates via Tell Us Once | 70% | 58% | ↑ |

**Leading vs. Lagging Indicators:**

*Leading Indicators (Predict Future Compliance):*
- % staff completed training (trained staff = fewer errors)
- % PIAs completed on time (proactive privacy = fewer breaches)
- % data classified (classified data = appropriate handling)

*Lagging Indicators (Measure Past Performance):*
- # data breaches (already occurred)
- # audit findings (non-compliance already happened)
- Citizen trust (result of cumulative performance)

**Benchmarking:**
- Compare metrics across agencies (identify high performers and struggling agencies)
- Compare to international standards (OECD, ISO 27001, NIST)
- Trend analysis (are we improving over time?)

### Enforcement Mechanisms

**Graduated Enforcement Approach:**

**Level 1: Education and Support (Minor, First-Time Issues):**
- Training (refresh privacy training, targeted training on specific issue)
- Technical assistance (help agency fix issue, provide resources)
- Documentation (update policies, clarify guidance)
- Outcome: Voluntary compliance, no penalty

**Level 2: Formal Warning (Repeated or Moderate Issues):**
- Written warning from data governance board or DPO
- Required remediation plan (specific actions, timeline, responsible party)
- Increased monitoring (monthly reporting, spot audits)
- Escalation to agency leadership (CIO, CEO)
- Outcome: Compliance within 30-90 days, no penalty if complied

**Level 3: Sanctions (Serious or Persistent Non-Compliance):**
- Suspension of data sharing privileges (agency cannot receive data from others until compliant)
- Mandatory external audit (at agency's expense)
- Financial penalties (budget reduction, withheld funding)
- Public disclosure (non-compliance published, reputational damage)
- Personal accountability (performance review impact for responsible managers)
- Outcome: Strong incentive to comply, demonstrates seriousness

**Level 4: Legal Action (Severe Violations, Breaches):**
- Referral to privacy regulator (regulatory investigation, fines)
- Referral to law enforcement (if criminal violation, e.g., unauthorized access)
- Civil liability (compensation to affected individuals)
- Executive intervention (Minister or Cabinet orders corrective action)
- Outcome: Legal consequences, systemic reform

**Accountability:**
- Data owners are personally accountable for compliance
- Performance objectives include data governance metrics
- Non-compliance can impact career progression, bonuses
- Positive recognition for high compliance (awards, public acknowledgment)

---

## Retention and Deletion

### Retention Schedules by Data Type

**Principle:** Retain data only as long as necessary for legal, operational, or historical purposes. Delete or anonymize when no longer needed.

**Retention Schedule Framework:**

| Data Type | Retention Period | Legal Basis | Deletion Method |
|-----------|------------------|-------------|-----------------|
| **Identity Records** | Lifetime + 10 years after death | Civil registration law | Archival (permanent historical record) |
| **Tax Records** | 7 years after assessment | Tax law (audit period) | Secure deletion |
| **Health Records** | Lifetime + 30 years after death | Health privacy law | Archival (research value) |
| **Criminal Records** | Varies by offense (10 years to lifetime) | Criminal records law | Secure deletion or archival |
| **Social Services (Benefits)** | 7 years after benefit ends | Audit and accountability | Secure deletion |
| **Employment Records (Government Employees)** | 7 years after termination | Employment law | Secure deletion |
| **Procurement Records** | 7 years after contract end | Financial management law | Archival (public accountability) |
| **Public Consultations** | 5 years | Administrative law | Anonymization, then archival |
| **Website Analytics** | 2 years | No legal requirement | Automatic deletion |
| **CCTV Footage (Security)** | 30-90 days | Security policy | Automatic overwrite |
| **Email (Operational)** | 2 years | Business practice | Auto-delete (archive important items) |
| **System Logs (Audit)** | 7 years for CONFIDENTIAL data, 1 year for INTERNAL | Security policy | Secure deletion |

**Retention Schedule Governance:**

*Development:*
- Each agency develops retention schedule for their data types
- Legal review (ensure compliance with legal requirements)
- DPO review (ensure privacy-friendly, not excessive)
- Data governance board approval (consistency across government)

*Implementation:*
- Technical implementation (automated deletion where possible)
- Business process (manual review and deletion where automation not feasible)
- Documentation (track what was deleted, when, by whom)

*Review:*
- Annual review of retention schedules (laws change, business needs evolve)
- Update as needed (shorten if possible, lengthen only if legally required)

**Exceptions:**

*Litigation Hold:*
- If data is subject to legal proceedings, litigation hold overrides retention schedule
- Data preserved until litigation resolved
- Legal counsel authorizes release from hold

*Historical/Archival Value:*
- Some data retained permanently for historical, research, or accountability purposes
- Examples: Census data, cabinet documents, significant policy decisions
- Transfer to national archives (separate from operational systems)
- Anonymization where feasible (preserve research value while protecting privacy)

### Secure Deletion Procedures

**Deletion Standards:**

**Digital Data:**

*Standard Deletion (INTERNAL data):*
- 3-pass overwrite (DoD 5220.22-M standard)
- File deletion + metadata removal
- Verify deletion (cannot be recovered with standard tools)

*Secure Deletion (CONFIDENTIAL data):*
- 7-pass overwrite (Gutmann method or equivalent)
- Cryptographic erasure (if data encrypted, destroy encryption keys)
- Physical destruction of media (if end-of-life)
- Certificate of destruction (documented, auditable)

*Maximum Security Deletion (SECRET data):*
- Cryptographic erasure (destroy keys)
- Physical destruction of media (shredding, incineration, degaussing for magnetic media)
- Witnessed destruction (two authorized personnel)
- Certificate of destruction (signed by witnesses, retained permanently)

**Cloud Data:**
- Cryptographic erasure (primary method for cloud, destroy encryption keys)
- Verify deletion with cloud provider (certificate of destruction)
- Contractual obligation for provider to delete (data sharing agreement includes deletion clause)

**Backup Data:**
- Deletion includes all backups (on-site, off-site, cloud)
- Coordinate with IT to identify all backup locations
- Verify backup tapes/drives rotated out and destroyed per schedule

**Physical Data:**

*Standard Disposal (INTERNAL):*
- Recycling (shredding preferred, regular recycling if not sensitive)

*Secure Disposal (CONFIDENTIAL):*
- Cross-cut shredding (particles <5mm x 50mm, DIN P-4 or equivalent)
- Shredding witnessed or logged
- Secure disposal bins (locked, monitored)

*Maximum Security Disposal (SECRET):*
- Micro-cut shredding (particles <1mm x 5mm, DIN P-6 or equivalent)
- Incineration (for highly sensitive documents)
- Witnessed destruction (two authorized personnel)
- Certificate of destruction

**Deletion Verification:**
- Random sampling (audit 10% of deletion events)
- Recovery testing (attempt to recover deleted data, should fail)
- Documentation (deletion logs, certificates)
- Annual audit (verify deletion policies followed)

---

## Templates

### 1. Data Sharing Agreement Template
See "Template Data Sharing Agreement" section above (comprehensive template provided).

### 2. Privacy Impact Assessment Template
See "PIA Template (20+ Questions)" section above (comprehensive template provided).

### 3. Data Request Form

```markdown
# DATA REQUEST FORM

**Requester Information:**
- Name: ________________________
- Agency/Department: ________________________
- Role/Title: ________________________
- Email: ________________________ Phone: ________________________

**Request Details:**
- Date of Request: ________________________
- Type of Request: [  ] Ad-hoc (one-time)  [  ] Routine (recurring)  [  ] Strategic (large-scale)

**Purpose:**
- Describe the purpose for requesting data (specific, clear):
  ________________________________________________________________
  ________________________________________________________________
- Legal basis for request (cite legislation, regulation, or consent):
  ________________________________________________________________
- Benefit to public/citizens (justify necessity):
  ________________________________________________________________

**Data Requested:**
- Data provider agency: ________________________
- Data items requested (list all fields/tables):
  ________________________________________________________________
  ________________________________________________________________
- Volume (number of records): ________________________
- Time period (historical, ongoing, one-time): ________________________
- Frequency (real-time, daily, monthly, etc.): ________________________

**Data Use:**
- Who will have access to the data? (roles, number of users):
  ________________________________________________________________
- How will the data be used? (specific activities):
  ________________________________________________________________
- Will the data be shared with third parties? [  ] Yes  [  ] No
  If yes, with whom and why?
  ________________________________________________________________
- Will the data be stored? [  ] Yes  [  ] No
  If yes, where and for how long?
  ________________________________________________________________

**Privacy and Security:**
- Does this request involve personal data? [  ] Yes  [  ] No
- If yes, data classification: [  ] CONFIDENTIAL  [  ] SECRET
- Security measures in place (encryption, access controls, etc.):
  ________________________________________________________________
- Has a PIA been completed? [  ] Yes (attach)  [  ] No  [  ] In progress

**Approval:**
- Requesting Agency Data Owner: ________________________ Date: ________
- Requesting Agency DPO: ________________________ Date: ________

**For Data Governance Board Use Only:**
- Request received: ________________________
- Assigned reviewer: ________________________
- PIA required: [  ] Yes  [  ] No
- Data sharing agreement required: [  ] Yes  [  ] No
- Decision: [  ] Approved  [  ] Conditional  [  ] Rejected
- Decision date: ________________________
- Notes: ________________________________________________________________
```

---

## Deliverables by PPT Framework

### People Deliverables (35% of effort)

**Governance Leadership:**
- Chief Data Officer (CDO) with executive authority
- Data Governance Board (cross-agency representation)
- Data Protection Officer (DPO) with statutory independence
- Agency Data Stewards (100+ across government)
- Privacy and compliance specialists

**Capacity Building:**
- Data literacy training for all government employees
- Data steward certification program
- Privacy officer training and accreditation
- Technical training for data management tools
- Executive data governance workshops

**Organizational Structure:**
- Clear roles and responsibilities (RACI matrix)
- Data ownership assigned for all datasets
- Privacy champions network across agencies
- Inter-agency data sharing working groups
- Citizen data rights advocacy function

### Process Deliverables (45% of effort)

**GSM Information Management:**
- 4-tier data classification framework
- Data retention and deletion policies
- Master data management procedures
- Data quality standards and monitoring
- "Tell Us Once" implementation procedures

**GSM Compliance Management:**
- Privacy Impact Assessment (PIA) framework
- Data Protection Impact Assessment (DPIA) procedures
- Compliance audit and reporting procedures
- Breach notification and response protocols
- Regulatory mapping and gap analysis

**Data Sharing Governance:**
- Inter-agency data sharing agreements (templates and procedures)
- Third-party data sharing frameworks
- API governance for data exchange
- Data use agreements and restrictions
- Cross-border data transfer procedures

**GSM Knowledge Management:**
- Data catalog and metadata standards
- Data dictionary and glossary
- Data lineage and provenance tracking
- Knowledge sharing across agencies
- Data analytics and insights dissemination

### Technology Deliverables (20% of effort)

**Master Data Management:**
- Centralized citizen data repository ("Tell Us Once")
- Data deduplication and matching
- Data quality monitoring and remediation
- Golden record management
- Real-time data synchronization

**Privacy Management Tools:**
- Privacy Impact Assessment (PIA) workflow system
- Consent management platform
- Data subject rights request portal
- Privacy breach tracking and reporting
- Cookie and tracking consent tools

**Data Catalog & Governance:**
- Enterprise data catalog
- Metadata repository
- Data lineage visualization
- Data quality dashboards
- Compliance monitoring and reporting

**Security & Access Control:**
- Data loss prevention (DLP) systems
- Encryption and pseudonymization tools
- Access logging and audit trails
- Automated data retention and deletion
- Secure data sharing platforms

---

## What Usually Goes Wrong

Reality check: Data governance fails more often than it succeeds. Here's why (and how to avoid it):

### 1. Committee Without Authority
**The mistake:** Create a "Data Governance Board" with representatives from every agency, no executive sponsor, no budget, no authority.

**What happens:** Board meets monthly. Discusses important policies. Makes recommendations. Nothing happens. Agencies ignore recommendations. Board becomes a talking shop. After 6 months, attendance drops to 30%. After 12 months, board is disbanded quietly.

**Reality check:** Data governance needs TEETH. The board must:
- Report directly to Cabinet/CEO (not buried under CIO)
- Control budget ($5-15M for governance initiatives)
- Have enforcement power (can block projects, suspend data sharing)
- Have executive representation (not just middle managers)

If your Data Governance Board can't say "no" to a Minister, it's powerless.

### 2. Trying to Perfect Master Data on Day One
**The mistake:** "Before we launch Tell Us Once, we need to clean ALL citizen data across ALL systems. Then we'll have perfect master data!"

**What happens:** You discover:
- 20% of citizen records have no email address
- 15% have old addresses
- 10% are duplicates (same person, different ID numbers)
- 5% have data quality issues (name misspelled, DOB wrong)
- Legacy system from 1987 has data nobody can decode

You spend 2 years trying to clean everything. Budget triples. Tell Us Once never launches. Initiative fails.

**Reality check:** Launch with "good enough" data (80-90% clean). Use Tell Us Once to IMPROVE data quality over time (citizens correct their own data). Perfectionism kills data projects.

**Better approach:**
- Identify critical data (name, DOB, address)
- Clean critical data for active citizens (focus on 80% who interact with govt regularly)
- Accept that 10-20% of data will always be messy (inactive citizens, deceased, duplicates)
- Launch Tell Us Once, use feedback loops to improve quality

### 3. IT Owns Data Governance (Recipe for Disaster)
**The mistake:** "Data governance is about databases and systems, so IT should run it."

**What happens:** IT creates technical data governance (database schemas, API standards, encryption). But has no authority over business processes. Result:
- Marketing department creates rogue database (IT doesn't know about it)
- HR shares employee data with consultant (IT says "no", HR does it anyway)
- Minister demands data for political purposes (IT has no power to refuse)

**Reality check:** Data governance is 80% business/policy, 20% technical. IT enables governance, but BUSINESS must own it.

**Correct model:**
- Chief Data Officer (CDO) is a business role (reports to CEO/Cabinet)
- Data owners are business leaders (agency heads, department directors)
- IT provides tools and technical guidance (but doesn't make policy decisions)

If IT owns data governance, you've lost before you started.

### 4. Centralizing All Data (The Death Star Approach)
**The mistake:** "We'll create a central data warehouse with ALL government data. One database to rule them all!"

**What happens:**
- Project costs $50M and takes 5 years
- Agencies refuse to share data (loss of control, security concerns)
- Central warehouse becomes bottleneck (every query must go through it)
- Data is stale (batched nightly, not real-time)
- Single point of failure (warehouse goes down, entire government paralyzed)

**Reality check:** Distributed data with federated governance works better than centralization.

**Better approach:**
- Data stays in agencies (they own it, they're accountable)
- Central catalog/registry (index of what data exists where)
- APIs for access (agencies query each other in real-time)
- Common standards (so data can be integrated when needed)
- Tell Us Once for core citizen data only (name, DOB, address, contact)

Don't build a Death Star. Build a federation.

### 5. Policy Without Enforcement
**The mistake:** "We've published our data classification policy and retention schedules. Everyone will comply!"

**What happens:** Policies sit on SharePoint. Nobody reads them. Agencies do whatever they want. Audit finds:
- 30% of data is unclassified
- 40% of data should have been deleted per retention policy (but wasn't)
- 15 data sharing agreements expired 2+ years ago (still sharing data)
- Nobody knows who the data owners are

**Reality check:** Policy without enforcement is just words.

**Enforcement mechanisms needed:**
- Automated checks (systems enforce classification, deletion)
- Regular audits (sample 10% of data quarterly)
- Consequences for non-compliance (budget impact, public reporting)
- Executive backing (CEO/Cabinet supports enforcement)

If you can't audit compliance, you can't govern.

### 6. DPO Without Independence
**The mistake:** Data Protection Officer reports to CIO or COO (operational role), has no budget, has no veto power.

**What happens:** DPO reviews Privacy Impact Assessments. Finds privacy risks. Recommends mitigations. CIO overrules ("too expensive"). Project proceeds with risks. Data breach happens 6 months later. DPO says "I told you so." Nobody cares.

**Reality check:** DPO must be independent or the role is theater.

**Independence requirements:**
- Reports to CEO/Cabinet, not operational managers
- Cannot be fired for DPO decisions (employment protection)
- Has veto power over high-risk projects (can be overridden only by executive with public risk acceptance)
- Has dedicated budget and staff

If your DPO can't say "no" and make it stick, hire a consultant instead (same outcome, cheaper).

### 7. Tell Us Once Without Data Standards
**The mistake:** "We'll build Tell Us Once! Citizen updates address once, we propagate to all agencies."

**What happens:** You discover every agency stores addresses differently:
- Agency A: Single "address" field (free text, no structure)
- Agency B: Structured (street, city, postal code) but uses old postal codes
- Agency C: Geocoded (lat/long) but no street address
- Agency D: Uses PO Box (no physical address)

Tell Us Once tries to update all systems. Fails 60% of the time (data format mismatch). Citizen gets error message. Calls helpdesk. Told to update each agency manually. Tell Us Once is abandoned.

**Reality check:** Tell Us Once requires data standards FIRST.

**Prerequisites:**
- Common data model (all agencies use same address structure)
- Data quality rules (validation, required fields)
- Master data repository (source of truth for citizen data)
- Agency commitment to migrate (retrofit old systems to support standards)

Budget 12-18 months for data standardization BEFORE launching Tell Us Once.

### 8. No Business Case (Governance for Governance's Sake)
**The mistake:** "We need data governance because compliance requires it!"

**What happens:** Executive sees $10M budget, asks "what do we get for this?" Answer: "Uh... compliance? Good governance?" Executive says "too vague, not funding."

**Reality check:** Data governance must deliver business value, not just compliance.

**Business case examples:**
- **Reduce duplicate data collection:** Tell Us Once saves citizens 500,000 hours/year (quantified value)
- **Improve data quality:** Better addresses = fewer undeliverable mailings = $2M/year savings
- **Enable data sharing:** Tax + social services share data = 30% reduction in benefit fraud = $50M/year savings
- **Avoid fines:** GDPR compliance prevents €20M fine (happened to Agency X)

If you can't quantify value, executives won't fund it.

### 9. Ignoring Legacy Systems
**The mistake:** "Data governance applies to all systems!"

**What happens:** You discover 40% of government data is in systems built 1980-2000. These systems:
- Have no APIs (batch file transfer only)
- Use proprietary formats (nobody knows how to decode)
- Have no documentation (original developers retired 15 years ago)
- Cannot be modified (source code lost or too risky to change)

Your data governance policy says "all systems must classify data, log access, delete per retention schedule." Legacy systems can't do any of this.

**Reality check:** Legacy systems can't comply with modern governance. Accept this.

**Pragmatic approach:**
- Tier systems: Modern (full governance), Legacy (best effort), Critical Legacy (replacement roadmap)
- Workarounds: Manual classification (spreadsheet tracking), periodic purges (not automated)
- Sunset legacy systems (replace over 5-10 years)

Don't let legacy systems kill your governance program. Work around them.

### 10. Measuring Activity Instead of Outcomes
**The mistake:** "We've classified 10,000 datasets! We've completed 50 PIAs! We've signed 30 data sharing agreements! Success!"

**What happens:** You're measuring activity (inputs), not outcomes. Questions nobody asks:
- Did classification improve security? (Or just create paperwork?)
- Did PIAs prevent breaches? (Or rubber-stamp everything?)
- Did data sharing improve services? (Or just shuffle data around?)

**Reality check:** Measure outcomes, not activity.

**Better metrics:**
- Data breach rate (decreasing?)
- Citizen satisfaction with data handling (improving?)
- Efficiency gains from data sharing (quantified?)
- Compliance audit pass rate (high?)
- Time to provision data access (decreasing?)

If your metrics don't prove value, you're just counting widgets.

---

## Realistic Timeline (What Actually Happens)

**Your plan:** 9 months to operational data governance

**Reality:** 24-36 months to clean data and functional governance, 4-5 years to maturity

Here's the brutal truth:

### Phase 1: Discovery & Planning (Months 1-6) - Plan says 2 months, reality is 6
**Planned:**
- Catalog existing data assets
- Define classification framework
- Establish governance board

**Reality:**
- Month 1-2: Ask agencies "what data do you have?" Get vague answers ("citizen data", "operational data")
- Month 3-4: Send auditors to agencies, discover databases nobody knew existed
- Month 5: Compile inventory, discover 40% of data has no documented owner
- Month 6: Fight over who should be on governance board (every agency wants a seat, 20 people show up to first meeting, nothing gets done)

**Delay causes:**
- Agencies don't know what data they have (no documentation)
- Political arguments over governance structure
- Legacy systems emerge from shadows (nobody mentioned the 1987 COBOL system until now)

### Phase 2: Policy Development (Months 6-12) - Plan says 3 months, reality is 6
**Planned:**
- Draft classification policy
- Draft retention schedules
- Draft data sharing framework

**Reality:**
- Month 6-7: Draft policies, circulate for comment
- Month 8-9: Receive 200+ pages of comments from agencies (everyone disagrees)
- Month 10-11: Negotiating consensus (classification tier debate rages for 2 months: "Is personnel data Confidential or Secret?")
- Month 12: Policies approved by governance board (after 3 revisions)

**Delay causes:**
- Every agency wants custom rules for their data
- Legal review takes forever (counsel is backlogged)
- Executive approval delayed (waiting for Cabinet meeting slot)

### Phase 3: Data Classification (Months 12-24) - Plan says 6 months, reality is 12
**Planned:**
- Classify all data assets per new policy

**Reality:**
- Month 12-15: Train data stewards (need 50+ stewards across agencies, training takes 3 months)
- Month 16-20: Stewards classify known data (60% of inventory)
- Month 21-24: Fight over the 40% of data with unclear ownership or legacy systems

**What you discover:**
- 30% of data assets have no clear owner (orphan data)
- 20% of systems can't support classification metadata (legacy systems)
- 10% of data is classified differently by different agencies (address data is "Public" in Agency A, "Confidential" in Agency B - now what?)

**Delay causes:**
- Stewards have day jobs (data governance is 10-20% of their time)
- Legacy systems require manual classification (can't automate)
- Political disputes over classification (agency wants lower classification to share more freely, another wants higher for security)

### Phase 4: Master Data Management & Tell Us Once (Months 12-36) - Plan says 6 months, reality is 24
**Planned:**
- Implement master data repository
- Launch Tell Us Once

**Reality:**
- Month 12-18: Select master data management (MDM) vendor (RFP, evaluation, procurement)
- Month 19-24: Deploy MDM platform, integrate with 3 pilot agencies
- Month 25-30: Data cleansing (discover 20% of citizen records have quality issues)
- Month 31-33: Expand to 10 agencies, hit integration problems (every agency's system is different)
- Month 34-36: Limited launch of Tell Us Once (address updates only, 50% success rate)

**What goes wrong:**
- MDM tool costs 3x vendor quote (professional services, customization)
- Data cleansing takes forever (manual review of millions of records)
- Agencies resist integration (loss of control, technical complexity)
- Tell Us Once fails 50% of the time (data format issues, validation errors)

**Delay causes:**
- Vendor delivery and deployment (6-12 months)
- Data quality worse than expected (12-18 months cleansing)
- Agency integration backlog (IT teams overwhelmed)

### Phase 5: Privacy & Compliance (Months 6-24) - Parallel to other phases
**Planned:**
- Appoint DPO
- Establish PIA process
- Complete PIAs for existing systems

**Reality:**
- Month 6-9: Recruit DPO (hard to find qualified candidates)
- Month 10-12: DPO develops PIA framework, templates
- Month 13-24: Backlog of 50+ systems needing retroactive PIAs (5-10 PIAs completed per month)

**What you discover:**
- Many existing systems don't pass PIA (privacy risks identified, need remediation)
- DPO rejects 20% of PIAs on first review (need revisions)
- Agencies complain DPO is "blocking progress" (political pressure on DPO)

**Delay causes:**
- PIA backlog enormous (50+ systems x 4 weeks per PIA = 200 weeks if sequential)
- Remediation required (systems need to be modified, takes months)
- Political pressure (agencies want fast approval, DPO wants thorough review)

### Phase 6: Enforcement & Maturity (Months 24-48) - Not in plan, but essential
**What actually happens:**
- Month 24-30: First audits reveal 30% non-compliance (data not classified, retention not followed)
- Month 31-36: Enforcement begins (agencies forced to comply, pushback)
- Month 37-42: Second audit, compliance improves to 70%
- Month 43-48: Third audit, compliance reaches 85% (realistic target)
- Year 4-5: Continuous improvement, governance becomes "business as usual"

**Why this takes so long:**
- Compliance is cultural change (takes years, not months)
- Enforcement is politically sensitive (nobody wants to punish colleagues)
- Legacy systems can't comply (workarounds take time)

### Key Insight: The 9-Month Fantasy
Nobody achieves functional data governance in 9 months. Anyone who claims they did either:
1. Defined "functional" as "policies written" (not implemented)
2. Governed only new systems (ignored legacy)
3. Ignored compliance (no audits, no enforcement)
4. Is lying

Budget 24 months to get basics in place. Budget 36 months to achieve 70%+ compliance. Budget 48+ months for maturity.

---

## Budget Reality Check

**Official budget:** $6-10M setup, $2-5M annual

**What you'll actually spend:** $10-16M setup, $4-8M annual

### Setup Budget Breakdown (Reality Edition)

| Category | Official Budget | Reality | Why the Difference |
|----------|----------------|---------|-------------------|
| **MDM Platform** | $1-2M | $2-4M | + Professional services (150% of license cost), + Customization (your data model is unique), + Integration (every system needs a connector) |
| **Data Catalog** | $500K-$1M | $750K-$1.5M | + User licenses scale faster than expected, + Premium features needed |
| **Privacy Management Tools** | $300K-$500K | $500K-$1M | + PIA workflow, consent management, DSAR automation all cost extra |
| **Data Quality/Cleansing** | $1-2M | $3-5M | + Manual cleansing (hire temps to review records), + De-duplication complexity, + Steward time costs |
| **People (CDO, DPO, Stewards)** | $2-4M | $3-6M | + Can't find qualified CDO for govt salary (pay premium or use consultant), + DPO needs staff (not just 1 person), + Stewards are 10-50% FTE each (add up fast) |
| **Consulting** | $1-2M | $2-4M | + Policy development, + Training delivery, + Audit support |
| **Training** | $300K-$500K | $500K-$1M | + Need to train 500+ staff on governance, + Repeated training (turnover) |
| **Legacy System Remediation** | $500K-$1M | $1-2M | + Retrofit old systems to support classification, logging, + Replacement roadmap for systems that can't be fixed |

**Total Setup:** $6-10M (plan) → $10-16M (reality)

**Why the 60% overrun?**
1. Data is messier than you thought (cleansing costs 2-3x estimates)
2. Tools require extensive customization (vendor brochure prices don't include 150% professional services)
3. People costs escalate (qualified data governance experts are expensive)
4. Political delays = extended consultant costs

### Annual Operating Budget Breakdown (Reality Edition)

| Category | Official Budget | Reality | Why the Difference |
|----------|----------------|---------|-------------------|
| **People (Salaries)** | $1-2M | $2-4M | + CDO, DPO, deputy DPO, 20-50 data stewards (10-50% FTE each), + Turnover |
| **Tool Licenses** | $500K-$1M | $750K-$1.5M | + Annual price increases, + User growth |
| **Data Quality** | $300K-$500K | $500K-$1M | + Ongoing cleansing (data gets dirty again), + Steward time |
| **Training** | $200K-$300K | $300K-$500K | + New hires, + Refresher training, + Expanding scope |
| **Audits** | $200K-$300K | $300K-$500K | + Internal audits quarterly, + External audit annually |
| **Consulting** | $300K-$500K | $500K-$1M | + Spot help (complex PIAs, data sharing agreements, remediation) |

**Total Annual:** $2-5M (plan) → $4-8M (reality)

**Why the 60% overrun?**
1. People costs dominate (stewards, DPO staff, specialists)
2. Data quality is never "done" (continuous cleansing needed)
3. Scope creeps (more systems added to governance over time)

### How to NOT Go 60% Over Budget
You will go over budget. But you can limit damage:

1. **Phase the scope:** Start with critical data (citizen identity, health, financial), add other data over 3-5 years
2. **Automate classification:** Use machine learning to classify data (cheaper than manual stewards, 70-80% accurate)
3. **Buy, don't build:** Use SaaS MDM/catalog tools (cheaper than on-prem, faster to deploy)
4. **Outsource cleansing:** Hire offshore data cleansing team ($20/hour vs. $100/hour for local staff)
5. **Limit stewards:** Don't need 50 stewards, 10-15 senior stewards covering multiple domains works

---

## Realistic Success Metrics

Forget "100% compliance" dreams. Here's what success actually looks like:

### Year 1: Foundation Metrics
- **Governance structure in place:** Board meets monthly, CDO and DPO hired, policies approved
- **60% of data assets cataloged:** You know what data exists, who owns it
- **50% of data assets classified:** Critical data classified, rest in progress
- **PIA process operational:** 20+ PIAs completed, backlog being worked down
- **First data sharing agreements signed:** 5-10 agreements under new framework
- **Tell Us Once pilot:** Address updates working for 3-5 agencies (50%+ success rate)

### Year 2: Operational Metrics
- **80% of data assets classified:** Most data done, only legacy holdouts remain
- **70% compliance with retention policies:** Agencies starting to delete old data
- **PIA backlog cleared:** All new systems get PIA, 50+ existing systems done
- **15-20 active data sharing agreements:** Cross-agency sharing operational
- **Tell Us Once expanded:** 10+ agencies, 60-70% success rate, 3-5 data types (address, phone, email)
- **First compliance audit:** 60-70% pass rate (not great, but baseline established)

### Year 3: Maturity Metrics
- **90% of data assets classified:** Only unsolvable legacy exceptions remain
- **80% compliance with retention policies:** Automated deletion working
- **Zero major compliance failures:** No fines, no major breaches due to governance gaps
- **30+ active data sharing agreements:** Sharing is routine, well-governed
- **Tell Us Once mainstream:** 80%+ success rate, 15+ agencies, 10+ data types
- **Compliance audit:** 80-85% pass rate (good)

### The Metrics You WON'T Hit (And That's OK)
- **100% classification:** Legacy systems will never comply, accept 90-95%
- **100% compliance:** Human error exists, 85-90% is realistic
- **Zero governance incidents:** Mistakes happen, aim for <2/year major incidents
- **Instant Tell Us Once:** Some agencies will always be slow to integrate

### How to Measure Success (For Executives)
Create a **Data Governance Maturity Score** (0-100):

**Formula:**
- 20 points: Policy & structure (policies approved +10, board functional +10)
- 20 points: Classification (60% +10, 80% +15, 90% +20)
- 15 points: Compliance (retention 70% +10, 85% +15)
- 15 points: Privacy (PIA backlog cleared +10, zero major incidents +5)
- 15 points: Data sharing (10+ agreements +10, Tell Us Once working +5)
- 15 points: Data quality (master data 90% complete +10, 95% accurate +5)

**Scoring:**
- 80-100: Mature governance (best in class)
- 60-79: Functional governance (doing the job)
- 40-59: Developing governance (gaps but improving)
- <40: Failing governance (need intervention)

**Year 1 target:** 40-50 (developing)
**Year 2 target:** 55-70 (functional)
**Year 3 target:** 70-85 (mature)

### The One Metric That Matters
**Citizen trust in government data handling.**

Survey citizens annually: "Do you trust the government to handle your personal data responsibly?"

If trust is improving (50% → 60% → 70%), your governance is working. If trust is falling, you're failing regardless of technical metrics.

---

## Conclusion: Data Governance Maturity Assessment

Before you launch, assess your readiness. Score yourself (Yes = 1 point, No = 0):

**People:**
- [ ] Do you have a Chief Data Officer with executive authority?
- [ ] Do you have an independent DPO with veto power?
- [ ] Do you have 10+ data stewards identified and trained?
- [ ] Does your governance board include executive representation?
- [ ] Do data owners have clear accountability?

**Process:**
- [ ] Do you have approved classification and retention policies?
- [ ] Do you have a PIA framework and templates?
- [ ] Do you have data sharing agreement templates and approval workflow?
- [ ] Do you have enforcement mechanisms (audits, consequences)?
- [ ] Do you have dispute resolution processes?

**Technology:**
- [ ] Do you have a data catalog (inventory of what data exists)?
- [ ] Do you have an MDM platform (or roadmap to deploy)?
- [ ] Do you have privacy management tools (PIA workflow, consent, DSAR)?
- [ ] Do you have automated compliance monitoring?
- [ ] Do you have data quality tools?

**Readiness Score:**
- **12-15 points:** Ready to launch (proceed)
- **9-11 points:** Close (fix gaps first)
- **6-8 points:** Not ready (build foundation)
- **<6 points:** Don't start (you'll fail)

### Final Word: The Governance Reality
**"IT owns governance = fail. Business owns data, IT enables."**

The most common failure mode is treating data governance as an IT project. IT can build systems. IT cannot make business decisions about:
- Who can access citizen health data
- How long to retain tax records
- Whether to share data between agencies
- What privacy risks are acceptable

These are BUSINESS and POLICY decisions. If IT makes them, governance fails.

**Correct model:**
- Chief Data Officer = business executive (not IT)
- Data owners = agency heads (not database admins)
- DPO = privacy professional (lawyer or policy expert, not IT security)
- IT = enables governance with tools, doesn't set policy

Get the governance structure right, or save your money.

---

## Conclusion

Data governance is not a bureaucratic hurdle—it is an enabler of digital transformation. Effective governance ensures data is trusted, secure, and used ethically, which builds citizen confidence and enables innovation. This playbook aligns with GSM principles to ensure data governance serves democratic accountability and citizen rights protection.

This playbook provides a comprehensive framework for implementing robust data governance across government. Key success factors include:

1. **Executive Commitment:** Leadership must champion data governance and resource it adequately
2. **Independent DPO:** Strong, independent privacy oversight prevents abuses and builds trust
3. **Clear Policies:** Classification, retention, sharing policies must be clear, consistent, and enforced
4. **Technical Implementation:** Tell Us Once and master data management deliver citizen value
5. **Accountability:** Metrics, audits, and enforcement ensure compliance
6. **Continuous Improvement:** Regular review and adaptation as technology and risks evolve

By following this framework, governments can harness the power of data to improve services while protecting citizen rights and maintaining public trust.

---

**Document Version:** 1.0
**Last Updated:** 2025-10-18
**Next Review:** 2026-04-18 (6 months)
**Owner:** Chief Data Officer
**Approver:** Data Governance Board Chair

**Related Documents:**
- Tier 2 Playbook 1: Privacy & Data Protection
- Tier 3 Playbook 1: Digital Identity Implementation
- Tier 3 Playbook 5: Digital Inclusion Strategy
- Tier 3 Playbook 6: Cybersecurity Operations
- National Data Strategy
- Privacy Act and Regulations

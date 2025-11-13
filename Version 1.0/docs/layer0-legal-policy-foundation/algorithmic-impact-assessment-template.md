# Algorithmic Impact Assessment (AIA) Template

## Government as a Service (GaaS) - Layer 0 Policy Template

**Version:** 1.0
**Status:** Template for National/Agency Adaptation
**Last Updated:** October 2025
**Template Classification:** Public

---

## Executive Summary

This Algorithmic Impact Assessment (AIA) template provides a comprehensive framework for evaluating the risks, benefits, and impacts of artificial intelligence (AI) and automated decision-making systems in government services. It ensures that algorithmic systems are fair, transparent, accountable, and aligned with public values.

**Purpose:**
- Identify and mitigate algorithmic bias and discrimination
- Ensure transparency and explainability of automated decisions
- Protect individual rights and promote fairness
- Build public trust in AI-enabled government services
- Enable responsible innovation with appropriate safeguards

**When to Use:**
- Deploying AI/ML systems for decision-making
- Implementing automated screening or scoring systems
- Using predictive analytics affecting individuals
- Applying algorithmic risk assessments
- Utilizing facial recognition or biometric systems

---

## Part 1: AIA Overview and Methodology

### 1.1 What is an Algorithmic Impact Assessment?

An Algorithmic Impact Assessment (AIA) is a structured process to evaluate the potential impacts of automated decision-making systems before deployment and throughout their operational lifecycle.

**Key Objectives:**
1. **Identify potential harms** before they occur
2. **Assess fairness and bias** across different population groups
3. **Ensure transparency** in how decisions are made
4. **Enable accountability** through clear governance
5. **Protect individual rights** including appeal and redress
6. **Promote public trust** through responsible AI practices

### 1.2 When AIA is Required

**Mandatory AIA Required For:**
- [ ] Automated decisions directly affecting individual rights, benefits, or services
- [ ] Use of AI/ML for eligibility determinations (benefits, licenses, permits)
- [ ] Predictive risk scoring or profiling systems
- [ ] Facial recognition or biometric identification
- [ ] Automated content moderation or filtering
- [ ] Algorithmic allocation of resources or opportunities
- [ ] Fraud detection systems affecting individuals
- [ ] Any system with potential for significant impact on vulnerable populations

**Recommended AIA (Best Practice):**
- [ ] Recommendation systems influencing individual choices
- [ ] Chatbots and virtual assistants providing guidance
- [ ] Optimization algorithms affecting service delivery
- [ ] Data analytics for policy development
- [ ] Automation of administrative processes

**AIA Not Required:**
- [ ] Simple rule-based automation with no learning component
- [ ] Fully manual decision-making with no algorithmic input
- [ ] Anonymous aggregate analytics with no individual impact

*Note: Consult with your Ethics Board or Data Protection Officer if uncertain.*

### 1.3 Relationship to Privacy Impact Assessment

**Integration with PIA:**
- Many AI systems also process personal data and require a Privacy Impact Assessment (PIA)
- This AIA should be conducted in conjunction with PIA when applicable
- Some sections may reference or rely on PIA findings
- Both assessments should be reviewed by Data Protection Officer

**Unique Focus of AIA:**
- Algorithmic fairness and bias (beyond privacy)
- Explainability and transparency of decisions
- Accuracy and reliability of predictions
- Human oversight and appeal mechanisms
- Broader societal and ethical implications

### 1.4 AIA Process Overview

**Phase 1: Scoping and Planning (2-3 weeks)**
- Define system purpose and scope
- Identify stakeholders and impact areas
- Determine assessment approach
- Establish assessment team

**Phase 2: System Documentation (3-4 weeks)**
- Document algorithmic methodology
- Map data inputs and decision outputs
- Identify training data sources and characteristics
- Describe model architecture and parameters

**Phase 3: Fairness and Bias Assessment (4-6 weeks)**
- Define fairness criteria for context
- Test for bias across demographic groups
- Evaluate disparate impact
- Assess representation in training data

**Phase 4: Performance and Accuracy Evaluation (3-4 weeks)**
- Measure prediction accuracy
- Identify error patterns and edge cases
- Assess reliability and robustness
- Evaluate performance across subgroups

**Phase 5: Transparency and Explainability Review (2-3 weeks)**
- Document how system makes decisions
- Develop user-facing explanations
- Create appeal and review processes
- Design transparency reporting

**Phase 6: Impact Analysis (3-4 weeks)**
- Assess impacts on individuals and communities
- Evaluate effects on vulnerable populations
- Consider broader societal implications
- Engage affected stakeholders

**Phase 7: Mitigation and Governance (3-4 weeks)**
- Design bias mitigation strategies
- Establish ongoing monitoring procedures
- Create human oversight mechanisms
- Develop incident response protocols

**Phase 8: Review, Approval, and Publication (2-3 weeks)**
- Expert review (technical, ethical, legal)
- Senior management approval
- Public transparency reporting
- Ongoing monitoring plan

### 1.5 Roles and Responsibilities

**Algorithmic Accountability Lead**
- Owns the AIA process
- Coordinates assessment activities
- Reports to senior management
- Ensures compliance with requirements

**Data Scientist / AI Developer**
- Documents technical details
- Conducts bias and performance testing
- Implements mitigation measures
- Provides ongoing technical monitoring

**Subject Matter Expert**
- Provides domain knowledge
- Identifies use cases and edge cases
- Reviews decision logic for appropriateness
- Validates outputs

**Ethics Advisor / Ethicist**
- Reviews ethical implications
- Advises on fairness criteria
- Identifies potential harms
- Recommends safeguards

**Data Protection Officer**
- Reviews privacy implications
- Ensures GDPR/privacy law compliance
- Advises on individual rights
- Approves data protection measures

**Legal Counsel**
- Reviews legal compliance
- Assesses liability and risk
- Advises on regulatory requirements
- Reviews terms and conditions

**Community Representative**
- Represents affected populations
- Provides lived experience perspective
- Identifies community concerns
- Validates impact assessments

---

## Part 2: System Description and Documentation

### Section A: System Overview

**A1. System Identification**
- System Name: _____________________________
- System ID/Reference: _____________________________
- AIA Reference Number: _____________________________
- Assessment Date: _____________________________
- Version: _____________________________

**A2. System Purpose and Objectives**

*Describe what the system does and why it exists (300-500 words):*
- What problem does it solve?
- What decisions or recommendations does it make?
- Who benefits from the system?
- What are the expected outcomes?

[Your response here]

**A3. System Owner and Team**
- Owning Agency: _____________________________
- System Owner (Name, Title): _____________________________
- Technical Lead: _____________________________
- Algorithmic Accountability Lead: _____________________________
- Data Protection Officer: _____________________________
- Ethics Advisor: _____________________________

**A4. System Status**
- [ ] Concept / Planning
- [ ] Development / Training
- [ ] Testing / Validation
- [ ] Pilot / Limited Deployment
- [ ] Full Production
- [ ] Update to Existing System

**A5. Deployment Context**

*Where and how will the system be used?*
- Geographic Scope: _____________________________
- Organizational Units: _____________________________
- User Roles: _____________________________
- Integration with Other Systems: _____________________________
- Anticipated Volume: _____ decisions/predictions per [day/month/year]

---

### Section B: Algorithmic Methodology

**B1. Type of Algorithmic System**

*Primary classification:*
- [ ] Rule-based system (if-then logic, decision trees)
- [ ] Machine learning - Supervised learning (trained on labeled data)
- [ ] Machine learning - Unsupervised learning (clustering, pattern detection)
- [ ] Machine learning - Reinforcement learning (learns through trial and error)
- [ ] Deep learning / neural networks
- [ ] Natural language processing
- [ ] Computer vision
- [ ] Ensemble methods (combining multiple models)
- [ ] Hybrid (combination of approaches)

*Specific algorithm(s) or model(s) used:*
[e.g., Logistic regression, Random forest, Gradient boosting, Neural network architecture]

**B2. Decision-Making Role**

*What role does the algorithm play?*
- [ ] **Fully automated decision** - No human involvement
- [ ] **Human-in-the-loop** - Human reviews and approves algorithmic recommendations
- [ ] **Human-on-the-loop** - Human oversight with ability to intervene
- [ ] **Decision support** - Provides information to inform human decisions
- [ ] **Prioritization or triage** - Ranks or sorts for human review

*If automated, what is the justification for automation?*
[Efficiency, consistency, scale, speed, etc.]

*Can individuals request human review?*
- [ ] Yes - Process: _____________________________
- [ ] No - Justification: _____________________________

**B3. Input Data**

*What data is used to make decisions?*

| Data Category | Specific Variables | Source | Quality/Accuracy | Update Frequency |
|---------------|-------------------|--------|------------------|------------------|
| Demographics | Age, gender, location | Government registry | 95% accurate | Real-time |
| [Add rows] | | | | |

**Data Sources:**
- [ ] Individual-provided (applications, forms)
- [ ] Government databases
- [ ] Third-party data providers
- [ ] Public datasets
- [ ] Social media or web scraping
- [ ] Sensors or IoT devices
- [ ] Other: _____________________________

**Data Quality Assessment:**
- Completeness: _____ % of records have all required fields
- Accuracy: _____ % of data validated as correct
- Timeliness: Updated every _____ [hours/days/months]
- Representativeness: Does data represent all affected populations? [ ] Yes [ ] No [ ] Unknown

*If data quality issues exist, describe:*
[Your response here]

**B4. Training Data (for ML systems)**

*What data was used to train the model?*
- Training Dataset Size: _____ records
- Training Period: From _____ to _____
- Data Source: _____________________________
- Geographic Coverage: _____________________________

**Demographic Representation in Training Data:**

| Demographic Group | Percentage in Training Data | Percentage in Target Population | Representative? |
|-------------------|----------------------------|--------------------------------|-----------------|
| Gender - Female | 52% | 51% | Yes |
| Gender - Male | 48% | 49% | Yes |
| Age - Under 25 | 15% | 22% | Under-represented |
| [Add rows for all relevant groups] | | | |

*If training data is not representative, what is the impact?*
[Your response here]

**Historical Bias in Training Data:**
- Does training data reflect historical discrimination or bias? [ ] Yes [ ] No [ ] Unknown
- If yes, describe: _____________________________
- Mitigation measures: _____________________________

**B5. Output and Decision Logic**

*What does the system output?*
- [ ] Binary classification (yes/no, approve/deny)
- [ ] Multi-class classification (categories)
- [ ] Risk score or probability (0-100, low/medium/high)
- [ ] Ranking or prioritization
- [ ] Prediction (numerical value)
- [ ] Recommendation
- [ ] Other: _____________________________

*How is the output used to make a decision?*
[e.g., "Scores above 70 are approved automatically, 50-69 flagged for human review, below 50 denied"]

**Decision Thresholds:**
- Threshold Value(s): _____________________________
- How was threshold determined: _____________________________
- Who can modify threshold: _____________________________

**B6. Model Performance Metrics**

*For ML systems, report performance on test data:*

| Metric | Overall | Group 1 [specify] | Group 2 [specify] | Acceptable? |
|--------|---------|-------------------|-------------------|-------------|
| Accuracy | 85% | 87% | 78% | Target >80% |
| Precision (positive predictive value) | 82% | 85% | 73% | |
| Recall (sensitivity) | 88% | 90% | 81% | |
| False positive rate | 12% | 10% | 19% | |
| False negative rate | 12% | 10% | 19% | |
| F1 Score | 85% | 87.5% | 77% | |
| AUC-ROC | 0.91 | 0.93 | 0.85 | |

*Performance disparities between groups:*
[Analyze whether differences are acceptable or indicate bias]

---

### Section C: Fairness and Bias Assessment

**C1. Defining Fairness for This Context**

*What does "fairness" mean for this specific use case?*

**Fairness Criteria Selected:**
- [ ] **Individual fairness**: Similar individuals receive similar outcomes
- [ ] **Group fairness**: Different demographic groups have similar outcomes
- [ ] **Equal opportunity**: Equal true positive rates across groups
- [ ] **Equalized odds**: Equal true positive AND false positive rates across groups
- [ ] **Demographic parity**: Equal selection rates across groups
- [ ] **Predictive parity**: Equal precision (positive predictive value) across groups
- [ ] **Calibration**: Predicted probabilities match actual outcomes across groups
- [ ] Other: _____________________________

*Justification for selected fairness criteria:*
[Explain why these criteria are appropriate for this context]

*Note: Different fairness criteria may conflict; trade-offs must be explicitly considered.*

**C2. Protected Characteristics and Sensitive Attributes**

*Which characteristics are legally protected or sensitive in your jurisdiction?*
- [ ] Race / Ethnicity
- [ ] Gender / Sex
- [ ] Age
- [ ] Disability
- [ ] Religion
- [ ] National origin / Immigration status
- [ ] Sexual orientation
- [ ] Socioeconomic status
- [ ] Geographic location (as proxy for other characteristics)
- [ ] Other: _____________________________

**Use of Protected Characteristics:**
- Are protected characteristics used as model inputs? [ ] Yes [ ] No [ ] Indirectly (through proxies)
- If yes, provide legal justification: _____________________________
- If no direct use, are there proxy variables that correlate with protected characteristics?
  - [ ] Yes - List proxies: _____________________________
  - [ ] No

**C3. Bias Testing Results**

*For each protected characteristic, test for bias:*

**Test 1: Disparate Impact Analysis**

| Protected Group | Selection Rate | Ratio to Baseline | 80% Rule Pass? | Assessment |
|-----------------|----------------|-------------------|----------------|------------|
| Male (baseline) | 45% | 1.00 | N/A | Baseline |
| Female | 38% | 0.84 | Yes (>0.80) | Acceptable disparity |
| Age <25 | 25% | 0.56 | No (<0.80) | Adverse impact detected |
| Age 25-50 | 48% | 1.07 | Yes | Acceptable |
| Age 50+ | 42% | 0.93 | Yes | Acceptable |

*80% Rule: Selection rate for protected group should be at least 80% of the rate for the baseline group.*

**Test 2: Confusion Matrix by Group**

*Example for Gender:*

| Metric | Male | Female | Disparity |
|--------|------|--------|-----------|
| True Positive Rate (TPR) | 85% | 78% | 7 percentage points |
| False Positive Rate (FPR) | 10% | 15% | 5 percentage points |
| True Negative Rate (TNR) | 90% | 85% | 5 percentage points |
| False Negative Rate (FNR) | 15% | 22% | 7 percentage points |

*Repeat for each protected characteristic.*

**Test 3: Statistical Significance**
- Chi-square test p-value: _____
- Statistical significance: [ ] Yes [ ] No
- Practical significance: [ ] Yes [ ] No

**C4. Root Cause Analysis of Bias**

*For any detected bias, investigate root causes:*

**Source of Bias:**
- [ ] Training data bias (historical discrimination reflected in data)
- [ ] Sample bias (non-representative training data)
- [ ] Measurement bias (how variables are measured)
- [ ] Label bias (subjective or biased ground truth labels)
- [ ] Algorithmic bias (model systematically disadvantages groups)
- [ ] Proxy discrimination (correlated variables encode protected characteristics)
- [ ] Feedback loops (algorithmic decisions reinforce existing patterns)

*Detailed analysis:*
[Explain the mechanisms by which bias enters the system]

**C5. Intersectional Analysis**

*Does the system have compounding effects for individuals with multiple protected characteristics?*

*Example: Performance for young, female, minority individuals*

| Intersectional Group | Performance Metric | Compared to Overall | Assessment |
|----------------------|-------------------|---------------------|------------|
| Young + Female | 72% accuracy | -13 points | Significant disparity |
| Young + Minority | 70% accuracy | -15 points | Significant disparity |
| Female + Minority | 75% accuracy | -10 points | Moderate disparity |
| Young + Female + Minority | 68% accuracy | -17 points | Severe disparity |

---

### Section D: Impact Assessment

**D1. Individual Impacts**

*What are the potential impacts on individuals?*

**Positive Impacts:**
- Faster processing times
- More consistent decisions
- Reduced human error
- Improved access to services
- [Other benefits]

**Negative Impacts:**

| Impact Type | Description | Severity (1-5) | Affected Population | Frequency |
|-------------|-------------|----------------|---------------------|-----------|
| Economic harm | Denial of benefit reduces income | 4 | Low-income applicants | 15% of denials |
| Reputational harm | False fraud flag impacts credit | 3 | All applicants | 2% false positive rate |
| Psychological harm | Stress from automated rejection | 2 | All applicants | 25% denied |
| Dignitary harm | Feeling dehumanized by automated process | 2 | All applicants | Unknown |
| Opportunity cost | Delayed application processing | 1 | All applicants | Rare |

*Severity Scale: 1=Negligible, 2=Minor, 3=Moderate, 4=Major, 5=Severe*

**D2. Vulnerable Populations**

*Are vulnerable populations disproportionately impacted?*

| Vulnerable Group | Specific Vulnerabilities | Disproportionate Impact? | Mitigation |
|------------------|-------------------------|--------------------------|------------|
| Low-income individuals | Limited ability to absorb economic harm | Yes - higher denial rate | Enhanced human review for borderline cases |
| Elderly | Less digital literacy, difficulty with appeals | Yes - lower successful appeal rate | Dedicated support hotline |
| People with disabilities | Accessibility barriers | Potentially | Ensure WCAG 2.1 AA compliance |
| Racial/ethnic minorities | Historical discrimination | Yes - detected bias | Bias mitigation (see Section E) |
| Non-native language speakers | Language barriers | Yes - lower understanding of process | Multilingual explanations |

**D3. Community and Societal Impacts**

*Broader impacts beyond individuals:*

**Community Cohesion:**
- Does the system affect trust between communities and government?
- Could it exacerbate existing social divides?

[Your response here]

**Democratic Values:**
- Does the system affect civic participation or freedom of expression?
- Are there implications for due process or equal treatment under law?

[Your response here]

**Labor Market:**
- How many jobs are affected by automation?
- What is the plan for workforce transition?

[Your response here]

**Environmental Impact:**
- What is the carbon footprint of training and running the model?
- Is this justified by the benefits?

[Your response here]

**D4. Error Analysis**

*What happens when the system makes mistakes?*

**False Positives (Type I Errors):**
- Definition: [What constitutes a false positive in this context]
- Consequence for individual: [Impact]
- Frequency: _____ % of positive predictions
- Correction mechanism: [How errors are identified and corrected]

**False Negatives (Type II Errors):**
- Definition: [What constitutes a false negative]
- Consequence for individual: [Impact]
- Frequency: _____ % of negative predictions
- Correction mechanism: [How errors are identified and corrected]

**Error Correction Process:**
1. [Step 1]
2. [Step 2]
3. [Step 3]

**Average Time to Correct Error:** _____ days

---

### Section E: Transparency and Explainability

**E1. Technical Documentation**

*Is comprehensive technical documentation available?*
- [ ] System architecture document
- [ ] Data dictionary (all input variables defined)
- [ ] Model training methodology
- [ ] Validation and testing procedures
- [ ] Performance benchmarks
- [ ] Bias testing results
- [ ] Version control and change log

**E2. Explainability Approach**

*How are decisions explained to affected individuals?*

**Global Explainability (how the system works in general):**
- [ ] Plainlanguage description of factors considered
- [ ] Relative importance of factors (feature importance)
- [ ] Examples of typical cases
- [ ] Statistical performance information

**Individual Explainability (why a specific decision was made):**
- [ ] **Feature attribution**: Which input factors most influenced this decision?
- [ ] **Counterfactual explanation**: What would need to change for a different outcome?
- [ ] **Example-based**: Similar cases and their outcomes
- [ ] **Rule extraction**: Simplified decision rules that approximate the model
- [ ] **Saliency maps**: Visual highlighting of important regions (for image/text)

*Explainability method used:*
[e.g., SHAP values, LIME, attention mechanisms, decision tree approximation]

*Sample explanation provided to user:*
[Insert example of actual explanation that would be shown]

**E3. User-Facing Transparency**

*What information is provided to individuals?*

**Before Decision:**
- [ ] Notice that automated decision-making will be used
- [ ] Explanation of how the system works
- [ ] Factors that will be considered
- [ ] How to prepare a strong application
- [ ] Rights regarding automated decisions

**At Time of Decision:**
- [ ] Clear statement of the decision
- [ ] Explanation of key factors in this specific decision
- [ ] How to request human review
- [ ] How to appeal or contest

**Example Decision Notice:**
```
Your application has been [APPROVED/DENIED] based on automated review.

Key factors in this decision:
- Income level: [Value] - [How it influenced decision]
- Employment history: [Value] - [How it influenced decision]
- Credit score: [Value] - [How it influenced decision]

You have the right to:
1. Request a human review of this decision (within 30 days)
2. Appeal this decision (within 60 days)
3. Access the information used to make this decision

To request a review or appeal: [Contact information and process]
```

**E4. Public Transparency**

*What information is published for public accountability?*
- [ ] High-level description of the system
- [ ] Purpose and legal basis
- [ ] Types of decisions made
- [ ] Volume of decisions (monthly/annually)
- [ ] Overall accuracy and performance metrics
- [ ] Disparate impact analysis results
- [ ] Audit results and remediation actions
- [ ] This Algorithmic Impact Assessment (summary)

**Public Register Entry:**
[Link to public-facing information about this system]

---

### Section F: Human Oversight and Governance

**F1. Human Oversight Mechanisms**

*What human oversight is in place?*

**Pre-Deployment:**
- [ ] Expert review of model before launch
- [ ] Testing with diverse scenarios
- [ ] Stakeholder consultation
- [ ] Ethics board approval

**Ongoing:**
- [ ] Regular performance monitoring (frequency: _______)
- [ ] Audit of decisions (sample size: _____, frequency: _____)
- [ ] User feedback collection and analysis
- [ ] Continuous bias monitoring

**Human-in-the-Loop:**
- [ ] All decisions reviewed by human
- [ ] High-risk or borderline decisions reviewed
- [ ] Random sample reviewed (_____ %)
- [ ] Flagged cases reviewed

*Human reviewer qualifications:*
[Required training, expertise, experience]

*Can human reviewers override algorithmic decisions?*
- [ ] Yes, freely
- [ ] Yes, with justification
- [ ] No

**F2. Appeal and Redress Mechanisms**

*How can individuals challenge decisions?*

**Request for Human Review:**
- Eligibility: [Who can request]
- Process: [How to request]
- Timeline: [How long review takes]
- Outcome: [Possible results]

**Formal Appeal:**
- Eligibility: [Who can appeal]
- Grounds for appeal: [Valid reasons]
- Evidence allowed: [What can be submitted]
- Decision-maker: [Who reviews appeals]
- Timeline: _____ days
- Success rate: _____ % of appeals granted

**Alternative Dispute Resolution:**
- [ ] Ombudsman review available
- [ ] Mediation offered
- [ ] External review board
- [ ] Judicial review

**Feedback Loop:**
- Are successful appeals used to improve the algorithm? [ ] Yes [ ] No
- How: _____________________________

**F3. Accountability Structure**

**Ownership and Responsibility:**
- System Owner: [Name, Role]
- Accountable for overall performance and fairness
- Authority to halt or modify system if issues arise

**Governance Committee:**
- Membership: [Roles represented]
- Meeting Frequency: [How often]
- Responsibilities: [Oversight functions]

**External Oversight:**
- [ ] Parliamentary/legislative oversight
- [ ] Independent regulator
- [ ] Audit by external experts
- [ ] Public advisory committee
- [ ] None

**Incident Response:**
- [ ] Incident response plan exists
- [ ] Clear escalation procedures
- [ ] Defined thresholds for halting system

*Conditions that would trigger system suspension:*
1. [Condition]
2. [Condition]
3. [Condition]

---

### Section G: Risk Mitigation and Controls

**G1. Bias Mitigation Strategies**

*How will identified biases be addressed?*

**Pre-Processing (Data Level):**
- [ ] Collect more representative data
- [ ] Re-weighting or re-sampling to balance groups
- [ ] Synthetic data generation for under-represented groups
- [ ] Remove or transform biased features

**In-Processing (Algorithm Level):**
- [ ] Fairness constraints in model training
- [ ] Adversarial debiasing
- [ ] Calibrated equalized odds
- [ ] Multi-objective optimization (accuracy + fairness)

**Post-Processing (Decision Level):**
- [ ] Adjust decision thresholds by group
- [ ] Re-ranking to equalize outcomes
- [ ] Human review of borderline cases

*Selected mitigation approach:*
[Describe specific methods implemented]

*Expected impact of mitigation:*
- Reduction in bias: _____ percentage points
- Trade-off with accuracy: _____ percentage points
- Justification for trade-off: _____________________________

**G2. Performance Monitoring**

*Ongoing monitoring to detect performance degradation or emerging bias:*

**Metrics Tracked:**
- [ ] Overall accuracy
- [ ] Accuracy by demographic group
- [ ] False positive/negative rates
- [ ] Disparate impact ratios
- [ ] User appeals and outcomes
- [ ] System errors and incidents

**Monitoring Frequency:**
- Real-time: [Which metrics]
- Daily: [Which metrics]
- Weekly: [Which metrics]
- Monthly: [Which metrics]
- Quarterly: [Which metrics]

**Alerting Thresholds:**
| Metric | Threshold | Alert Recipient | Action |
|--------|-----------|-----------------|--------|
| Accuracy drops below 80% | <80% | System Owner | Investigate within 24 hours |
| Disparate impact ratio | <0.80 | Fairness Lead | Review within 1 week |
| Appeal rate increases | >10% | System Owner | Root cause analysis |

**G3. Model Retraining and Updates**

*How and when is the model updated?*

**Retraining Schedule:**
- Frequency: [Monthly, Quarterly, Annually]
- Trigger events: [Data drift, performance degradation, policy change]

**Retraining Process:**
1. [Step]
2. [Step]
3. [Step]

**Re-Assessment Requirements:**
- [ ] Full AIA required for major model changes
- [ ] Abbreviated AIA for minor updates
- [ ] Performance testing required before deployment
- [ ] Bias testing required before deployment
- [ ] Approval by [Role] required

**Version Control:**
- Model versions tracked: [ ] Yes [ ] No
- Ability to roll back to previous version: [ ] Yes [ ] No
- Documentation of changes between versions: [ ] Yes [ ] No

**G4. Data Governance**

*Controls to ensure data quality and integrity:*

**Data Quality Checks:**
- [ ] Validation rules for input data
- [ ] Automated data quality monitoring
- [ ] Regular data audits
- [ ] Error correction procedures

**Data Provenance:**
- [ ] Source of all data documented
- [ ] Chain of custody tracked
- [ ] Audit trail of data transformations

**Data Security:**
- [ ] Encryption in transit and at rest
- [ ] Access controls (role-based)
- [ ] Audit logging of data access
- [ ] Secure data deletion procedures

---

### Section H: Stakeholder Engagement

**H1. Consultation Process**

*Who was consulted during the AIA?*

| Stakeholder Group | Engagement Method | Date | Key Feedback | How Addressed |
|-------------------|-------------------|------|--------------|---------------|
| Affected individuals | Focus groups | [Date] | [Summary] | [Actions taken] |
| Civil society organizations | Public consultation | [Date] | [Summary] | [Actions taken] |
| Technical experts | Expert panel | [Date] | [Summary] | [Actions taken] |
| Ethics board | Formal review | [Date] | [Summary] | [Actions taken] |
| Academic researchers | Written submission | [Date] | [Summary] | [Actions taken] |

**H2. Ongoing Engagement**

*How will stakeholders be engaged after deployment?*
- [ ] User feedback mechanism (surveys, hotline)
- [ ] Regular advisory committee meetings
- [ ] Annual public reporting
- [ ] Crowdsourced bias detection
- [ ] Open challenge or red-teaming events
- [ ] Other: _____________________________

**H3. Communication and Education**

*How will the system be explained to different audiences?*

**For Affected Individuals:**
- Plain-language guides
- FAQ documents
- Video explanations
- Chatbot assistance

**For Front-Line Staff:**
- Training programs
- Standard operating procedures
- Decision support tools
- Escalation guidelines

**For General Public:**
- Website information
- Media releases
- Public presentations
- Transparency reports

---

### Section I: Testing and Validation

**I1. Pre-Deployment Testing**

*What testing was conducted before launch?*

**Functionality Testing:**
- [ ] Unit tests for code components
- [ ] Integration tests for system components
- [ ] End-to-end workflow tests
- [ ] Edge case and boundary condition tests

**Performance Testing:**
- [ ] Accuracy on holdout test set
- [ ] Cross-validation across multiple datasets
- [ ] Stress testing (high volume)
- [ ] Latency and response time testing

**Fairness Testing:**
- [ ] Disparate impact analysis (see Section C)
- [ ] Equalized odds evaluation
- [ ] Calibration testing across groups
- [ ] Intersectional fairness analysis

**Adversarial Testing:**
- [ ] Robustness to adversarial examples
- [ ] Gaming or manipulation attempts
- [ ] Data poisoning scenarios
- [ ] Privacy attacks (membership inference, model inversion)

**User Acceptance Testing:**
- [ ] Usability testing with representative users
- [ ] Explanation comprehension testing
- [ ] Appeal process simulation
- [ ] Satisfaction surveys

**I2. Pilot or Limited Deployment**

*Was the system piloted before full deployment?*
- [ ] Yes - Details: _____________________________
- [ ] No - Justification: _____________________________

*If yes:*
- Pilot scope: _____________________________
- Duration: _____________________________
- Findings: _____________________________
- Changes made based on pilot: _____________________________

**I3. Ongoing Validation**

*How will the system be validated in production?*
- [ ] A/B testing against baseline (human decisions or previous system)
- [ ] Regular audits of decision sample
- [ ] Comparison of predicted vs. actual outcomes
- [ ] User satisfaction measurement
- [ ] Independent external audit (frequency: _______)

---

### Section J: Legal and Ethical Compliance

**J1. Legal Compliance**

*Compliance with applicable laws and regulations:*

| Legal Requirement | How Compliance Achieved | Evidence |
|-------------------|------------------------|----------|
| Non-discrimination laws | Bias testing and mitigation | AIA Section C |
| Data protection/privacy | PIA completed; consent/legal basis | PIA reference: _____ |
| Transparency requirements | Public disclosure; individual explanations | AIA Section E |
| Right to human review | Appeal mechanisms established | AIA Section F |
| Algorithmic accountability regulations | This AIA; governance structure | AIA Section F |
| Sector-specific regulations | [Specific compliance measures] | [Evidence] |

**J2. Ethical Principles**

*Alignment with ethical AI principles:*

**Beneficence (Do Good):**
[How the system provides public benefit]

**Non-Maleficence (Do No Harm):**
[How potential harms are minimized]

**Autonomy:**
[How individual agency and choice are preserved]

**Justice:**
[How fairness and equitable treatment are ensured]

**Explicability:**
[How transparency and explainability are provided]

**J3. Rights and Safeguards**

*Individual rights protected:*
- [ ] Right to be informed
- [ ] Right to human review
- [ ] Right to explanation
- [ ] Right to appeal
- [ ] Right to rectification
- [ ] Right to erasure (where applicable)
- [ ] Right to non-discrimination

---

### Section K: Approval and Publication

**K1. Review and Approval**

**Ethics Board Review:**
- Review Date: _____________________________
- Recommendation:
  - [ ] Approved as proposed
  - [ ] Approved with conditions (specify): _____________________________
  - [ ] Requires modification
  - [ ] Not approved
- Ethics Board Chair Signature: _____________________________

**Data Protection Officer Review:**
- Review Date: _____________________________
- Privacy compliance confirmed: [ ] Yes [ ] No
- Concerns: _____________________________
- DPO Signature: _____________________________

**Legal Counsel Review:**
- Review Date: _____________________________
- Legal compliance confirmed: [ ] Yes [ ] No
- Concerns: _____________________________
- Legal Counsel Signature: _____________________________

**Senior Management Approval:**
- Approving Official Name and Title: _____________________________
- Approval Date: _____________________________
- Signature: _____________________________

**K2. Public Summary for Transparency**

*Complete this section for publication (redact sensitive technical details if necessary):*

**System Name:** _____________________________

**Purpose:** [Brief description]

**Decisions Made:** [Type and volume]

**Algorithmic Approach:** [High-level description]

**Fairness Assessment:** [Summary of bias testing and mitigation]

**Accuracy:** [Overall performance]

**Human Oversight:** [Description of review mechanisms]

**Appeal Rights:** [How to challenge decisions]

**Approval Date:** _____________________________

**Contact for Inquiries:** _____________________________

**Full AIA Available:** [Yes/No - If no, explain why]

---

### Section L: Ongoing Management and Review

**L1. Monitoring and Reporting**

**Performance Dashboard:**
- [ ] Real-time dashboard accessible to system owner
- [ ] Monthly reports to management
- [ ] Quarterly reports to governance committee
- [ ] Annual public transparency report

**L2. Review Schedule**

**Regular Reviews:**
- Quarterly: Performance and fairness metrics
- Annually: Full AIA update
- Upon: Major system changes, significant incidents, regulatory changes

**Next Review Date:** _____________________________

**L3. Continuous Improvement**

*How will lessons learned be incorporated?*
- [ ] Regular retrospectives
- [ ] User feedback integration
- [ ] Benchmarking against best practices
- [ ] Participation in AI ethics community of practice

**L4. Decommissioning Plan**

*What happens if the system is discontinued?*
- Data retention/deletion: _____________________________
- Transition plan for affected individuals: _____________________________
- Documentation archiving: _____________________________

---

## Part 3: Supporting Resources

### Appendix A: Fairness Metrics Reference

**Common Fairness Definitions:**

1. **Demographic Parity**: P(Ŷ=1|A=0) = P(Ŷ=1|A=1)
   - Equal selection rates across groups

2. **Equalized Odds**: P(Ŷ=1|Y=y,A=0) = P(Ŷ=1|Y=y,A=1) for y ∈ {0,1}
   - Equal true positive AND false positive rates

3. **Equal Opportunity**: P(Ŷ=1|Y=1,A=0) = P(Ŷ=1|Y=1,A=1)
   - Equal true positive rates (recall)

4. **Predictive Parity**: P(Y=1|Ŷ=1,A=0) = P(Y=1|Ŷ=1,A=1)
   - Equal precision across groups

5. **Calibration**: P(Y=1|Ŷ=p,A=a) = p for all p, a
   - Predicted probabilities match actual frequencies

*Note: These definitions may be mathematically incompatible; trade-offs are necessary.*

### Appendix B: Bias Mitigation Techniques Reference

**Pre-Processing:**
- Re-weighting samples
- Disparate impact remover
- Learning fair representations
- Synthetic minority over-sampling (SMOTE)

**In-Processing:**
- Adversarial debiasing
- Prejudice remover regularization
- Fairness constraints optimization
- Meta-fair classifier

**Post-Processing:**
- Equalized odds post-processing
- Calibrated equalized odds
- Reject option classification
- Threshold optimization

### Appendix C: Explainability Methods Reference

**Model-Agnostic:**
- LIME (Local Interpretable Model-Agnostic Explanations)
- SHAP (SHapley Additive exPlanations)
- Anchors (rule-based explanations)
- Counterfactual explanations

**Model-Specific:**
- Decision tree visualization
- Feature importance (tree-based models)
- Attention mechanisms (neural networks)
- Saliency maps (computer vision)

### Appendix D: Related Frameworks and Standards

**International Standards:**
- ISO/IEC 42001 - AI Management System
- IEEE 7000 series - Ethically aligned design
- NIST AI Risk Management Framework
- EU AI Act requirements

**Best Practice Frameworks:**
- Algorithmic Accountability Act (proposed, US)
- UK ICO Guidance on AI and Data Protection
- Canadian Algorithmic Impact Assessment
- Australian AI Ethics Framework

### Appendix E: Resources and Contacts

**Technical Support:**
- AI Ethics Team: ai-ethics@[agency].gov
- Data Science Team: data-science@[agency].gov

**Policy Guidance:**
- Algorithmic Accountability Office: algorithmic-accountability@[agency].gov
- Data Protection Officer: dpo@[agency].gov

**Public Inquiries:**
- General Information: aia-info@[agency].gov
- Appeal Assistance: algorithmic-appeals@[agency].gov

---

**Document Control:**
- **Template ID:** GaaS-T4-AIA-001
- **Classification:** Public
- **Review Cycle:** Annual
- **Next Review:** October 2026
- **Owner:** [National Digital Government Office]

*This template is part of the Government as a Service (GaaS) framework. It may be freely adapted for national, regional, or local government use. Attribution appreciated but not required.*

# VOLUME II: SERVICE LAYER ARCHITECTURE

**Tier 2 Technical Architecture Blueprint**
**Government-as-a-Service Platform**

**Version:** 2.0
**Date:** October 2025
**Classification:** Technical Reference
**Pages:** 25

---

## DOCUMENT OVERVIEW

**Purpose**: This volume provides comprehensive technical architecture for the service delivery layer of Government-as-a-Service platforms. It bridges foundational infrastructure (Volume I) with intelligence and analytics capabilities (Volume III).

**Audience**: Solution architects, service designers, integration engineers, security architects, and technical leads responsible for implementing citizen-facing services and integration patterns.

**Scope**:
- Chapter 5: Citizen-Facing Services (pages 1-9)
- Chapter 6: Integration Patterns (pages 10-18)
- Chapter 7: Security Architecture (pages 19-25)

**Related Documents**:
- Volume I: Foundational Architecture (Chapters 1-4)
- Volume III: Intelligence & Analytics (Chapters 8-10)

---

## TABLE OF CONTENTS

### CHAPTER 5: CITIZEN-FACING SERVICES
5.1 UK GDS Service Standard (18 Points)
5.2 Life-Event Journey Mapping
5.3 Mobile-First Design Patterns
5.4 Accessibility Requirements (WCAG 2.1 Level AA)
5.5 Multi-Channel Strategy
5.6 Content Management Architecture
5.7 Digital Inclusion Considerations
5.8 Service Maturity Model
5.9 Implementation Checklist

### CHAPTER 6: INTEGRATION PATTERNS
6.1 Legacy System Integration
6.2 API-First vs Point-to-Point Architecture
6.3 Event-Driven Architecture
6.4 Microservices vs Monolithic Decision Matrix
6.5 Data Synchronization Patterns
6.6 Error Handling & Resilience
6.7 Transaction Management
6.8 Integration Testing Strategies
6.9 Implementation Checklist

### CHAPTER 7: SECURITY ARCHITECTURE
7.1 Threat Modeling (STRIDE Methodology)
7.2 Defense-in-Depth (7 Layers)
7.3 Secrets Management
7.4 PKI and Certificate Lifecycle
7.5 Security Operations Center (SOC) Design
7.6 Incident Response (NIST 800-61)
7.7 Supply Chain Security
7.8 Threat Intelligence Sharing
7.9 Insider Threat Mitigation
7.10 Red Team Requirements
7.11 Security Metrics & KPIs
7.12 Implementation Checklist

---

# CHAPTER 5: CITIZEN-FACING SERVICES

## 5.1 UK GDS Service Standard (18 Points)

The UK Government Digital Service (GDS) Service Standard provides the gold standard for digital government services worldwide. This section provides government-specific interpretations and implementation guidance.

### 5.1.1 Complete 18-Point Standard

#### Point 1: Understand Users and Their Needs

**Government-Specific Interpretation**:
- Conduct research with citizens across demographic spectrums (age, income, digital literacy, disability)
- Include marginalized communities (immigrants, low-income, rural residents, elderly)
- Use ethnographic research methods, not just surveys
- Map complete user journeys, including failed attempts and workarounds

**Implementation Requirements**:
```yaml
user_research:
  methods:
    - contextual_inquiry: "Observe users in natural environment"
    - usability_testing: "Minimum 5 participants per iteration"
    - surveys: "Representative sample (n≥1000)"
    - analytics: "Behavioral data from existing services"
    - accessibility_testing: "Include users with disabilities"

  documentation:
    - user_personas: "5-7 evidence-based personas"
    - journey_maps: "Current state and future state"
    - pain_points: "Prioritized by frequency and severity"
    - user_needs: "Jobs-to-be-done format"

  frequency:
    - discovery: "Every sprint (2 weeks)"
    - alpha: "Weekly testing sessions"
    - beta: "Continuous feedback collection"
    - live: "Quarterly research cycles"
```

**Validation Criteria**:
- [ ] User research conducted with minimum 20 participants
- [ ] Personas based on evidence, not assumptions
- [ ] Journey maps validated with real users
- [ ] Research includes users with disabilities
- [ ] Findings documented in accessible format

#### Point 2: Solve a Whole Problem for Users

**Government-Specific Interpretation**:
- Design services around life events, not organizational structure
- Connect related services (e.g., birth registration + benefits + healthcare)
- Provide single point of access regardless of back-end complexity
- Handle exceptions and edge cases gracefully

**Implementation Pattern**:
```typescript
// Life Event Orchestration Pattern
interface LifeEvent {
  eventType: 'BIRTH' | 'MARRIAGE' | 'EMPLOYMENT' | 'BUSINESS_START' | 'DEATH';
  citizenId: string;
  eventDate: Date;
  context: Record<string, any>;
}

class LifeEventOrchestrator {
  async handleLifeEvent(event: LifeEvent): Promise<ServiceOrchestrationPlan> {
    // 1. Identify all relevant services
    const services = await this.identifyRelevantServices(event);

    // 2. Pre-populate applications with known data
    const prepopulatedForms = await this.prepopulateData(event, services);

    // 3. Create unified checklist
    const checklist = this.createChecklist(services);

    // 4. Set up proactive notifications
    await this.scheduleNotifications(event, services);

    return {
      services,
      prepopulatedForms,
      checklist,
      estimatedCompletionTime: this.calculateDuration(services)
    };
  }

  private async identifyRelevantServices(event: LifeEvent): Promise<Service[]> {
    // Example: Birth event triggers
    const serviceRegistry = {
      BIRTH: [
        'birth_registration',
        'child_benefit_application',
        'healthcare_registration',
        'tax_credit_notification',
        'childcare_search'
      ],
      // ... other life events
    };

    return this.loadServices(serviceRegistry[event.eventType]);
  }
}
```

**Validation Criteria**:
- [ ] Service scope covers entire user journey
- [ ] Cross-department coordination automated
- [ ] Single sign-on across all related services
- [ ] Data shared between services (with consent)
- [ ] Exception handling documented

#### Point 3: Provide a Joined-Up Experience Across All Channels

**Multi-Channel Architecture**:
```
┌─────────────────────────────────────────────────────────────┐
│                     CITIZEN INTERACTION LAYER                │
├──────────┬──────────┬──────────┬──────────┬─────────────────┤
│   Web    │  Mobile  │  Phone   │ In-Person│  Chatbot/Voice  │
│  Portal  │   App    │  (IVR)   │ Service  │   Assistant     │
└────┬─────┴────┬─────┴────┬─────┴────┬─────┴────┬────────────┘
     │          │          │          │          │
     └──────────┴──────────┴──────────┴──────────┘
                        │
              ┌─────────▼─────────┐
              │  OMNICHANNEL      │
              │  ORCHESTRATION    │
              │  LAYER            │
              └─────────┬─────────┘
                        │
     ┌──────────────────┼──────────────────┐
     │                  │                  │
┌────▼─────┐   ┌────────▼──────┐   ┌──────▼──────┐
│ Session  │   │  Channel      │   │  Handoff    │
│ Manager  │   │  Adapter      │   │  Protocol   │
└──────────┘   └───────────────┘   └─────────────┘

Key Capabilities:
- Session continuity across channels
- Consistent data regardless of entry point
- Seamless handoff (e.g., start online, complete by phone)
- Channel-appropriate UX (not identical, but consistent)
```

**Implementation**:
```javascript
// Omnichannel Session Management
class OmnichannelSession {
  constructor(citizenId) {
    this.citizenId = citizenId;
    this.sessionId = generateUUID();
    this.startTime = Date.now();
    this.channel = null;
    this.state = {};
  }

  async startChannel(channelType, context) {
    this.channel = channelType;

    // Restore previous session if exists
    const previousSession = await this.loadPreviousSession();
    if (previousSession && !previousSession.completed) {
      return this.resumeSession(previousSession);
    }

    return this.initializeNewSession(context);
  }

  async handoffToChannel(newChannel, handoffContext) {
    // Generate handoff code
    const handoffCode = this.generateHandoffCode();

    // Save current state
    await this.saveState({
      fromChannel: this.channel,
      toChannel: newChannel,
      state: this.state,
      context: handoffContext,
      expiresAt: Date.now() + (15 * 60 * 1000) // 15 minutes
    });

    // Notify user
    await this.notifyHandoffReady(newChannel, handoffCode);

    return handoffCode;
  }

  async resumeFromHandoff(handoffCode) {
    const savedSession = await this.retrieveHandoffSession(handoffCode);

    if (!savedSession || savedSession.expiresAt < Date.now()) {
      throw new Error('Handoff session expired');
    }

    this.state = savedSession.state;
    this.channel = savedSession.toChannel;

    return this.state;
  }
}
```

#### Point 4: Make the Service Simple to Use

**Simplicity Principles**:
- One thing per page
- Progressive disclosure (show complexity only when needed)
- Smart defaults based on user context
- Plain language (Flesch-Kincaid Grade 8 or below)
- Minimize form fields (ask only essential questions)

**Form Optimization Pattern**:
```typescript
// Intelligent Form Minimization
interface FormOptimization {
  // Pre-populate from existing government data
  prepopulateFromGovernmentRecords(citizenId: string): FormData;

  // Conditional logic to hide irrelevant fields
  applyConditionalLogic(answers: Record<string, any>): VisibleFields;

  // Calculate fields from other answers
  deriveCalculatedFields(answers: Record<string, any>): DerivedData;

  // Validate in real-time with helpful messages
  validateField(field: string, value: any): ValidationResult;
}

// Example: Tax return simplification
class SimplifiedTaxReturn implements FormOptimization {
  async prepopulateFromGovernmentRecords(citizenId: string): Promise<FormData> {
    // Pull from multiple sources
    const employment = await this.employmentRecords.get(citizenId);
    const banking = await this.bankingData.get(citizenId); // with consent
    const property = await this.propertyRecords.get(citizenId);

    return {
      income: employment.totalIncome,
      taxPaid: employment.taxWithheld,
      mortgageInterest: property.interestPaid,
      // Pre-calculated, user just confirms
      estimatedRefund: this.calculateRefund({employment, banking, property})
    };
  }

  applyConditionalLogic(answers: Record<string, any>): VisibleFields {
    const visible = ['income', 'taxPaid'];

    // Only show business fields if self-employed
    if (answers.employmentType === 'SELF_EMPLOYED') {
      visible.push('businessExpenses', 'businessIncome');
    }

    // Only show investment fields if has investments
    if (answers.hasInvestments) {
      visible.push('dividends', 'capitalGains');
    }

    return visible;
  }
}
```

#### Point 5: Make Sure Everyone Can Use the Service

See section 5.4 for complete WCAG 2.1 Level AA implementation.

#### Point 6: Have a Multidisciplinary Team

**Team Composition**:
```yaml
service_team:
  leadership:
    - service_owner: "Accountable for service success"
    - product_manager: "Defines roadmap and priorities"

  design:
    - service_designer: "End-to-end journey design"
    - interaction_designer: "UI/UX design"
    - content_designer: "Plain language content"
    - graphic_designer: "Visual design"

  technology:
    - technical_architect: "System design"
    - developers: "Minimum 4 (front-end, back-end, full-stack)"
    - devops_engineer: "Infrastructure and deployment"
    - security_engineer: "Security implementation"

  research:
    - user_researcher: "Continuous user testing"
    - data_analyst: "Performance metrics"

  delivery:
    - delivery_manager: "Agile/scrum master"
    - business_analyst: "Requirements and policy"

  specialist:
    - accessibility_specialist: "WCAG compliance"
    - performance_analyst: "Speed optimization"
    - privacy_officer: "Data protection compliance"
```

#### Point 7: Use Agile Ways of Working

**Agile Implementation for Government**:
```yaml
sprint_structure:
  duration: "2 weeks"

  ceremonies:
    sprint_planning:
      duration: "2 hours"
      output: "Sprint backlog with acceptance criteria"

    daily_standup:
      duration: "15 minutes"
      format: "What done, what doing, blockers"

    sprint_review:
      duration: "1 hour"
      attendees: "Team + stakeholders + users"

    sprint_retrospective:
      duration: "1 hour"
      output: "Action items for improvement"

  release_cadence:
    alpha: "Weekly releases to test environment"
    beta: "Bi-weekly releases to production"
    live: "Continuous deployment (with feature flags)"

  backlog_management:
    prioritization: "MoSCoW method"
    refinement: "Weekly, 1 hour"
    user_stories: "INVEST criteria"
```

#### Point 8: Iterate and Improve Frequently

**Continuous Improvement Framework**:
```typescript
interface ContinuousImprovement {
  // Measure performance
  metrics: {
    completion_rate: number;      // % who complete service
    time_to_complete: number;     // Average duration
    error_rate: number;           // % encountering errors
    satisfaction_score: number;   // User satisfaction (1-5)
    digital_take_up: number;      // % using digital vs other channels
  };

  // User feedback loop
  feedback: {
    in_service_surveys: boolean;  // Post-transaction survey
    usability_testing: boolean;   // Monthly testing sessions
    analytics: boolean;           // Behavioral tracking
    complaints: boolean;          // Structured complaint analysis
  };

  // Experimentation
  ab_testing: {
    enabled: boolean;
    tools: string[];              // e.g., Optimizely, Google Optimize
    confidence_level: 0.95;
  };

  // Release cycle
  release_frequency: string;      // "Weekly" | "Bi-weekly" | "Continuous"
}

// Example: A/B Testing Framework
class ServiceExperimentation {
  async runExperiment(experimentConfig: ExperimentConfig) {
    const { variant_a, variant_b, success_metric, sample_size } = experimentConfig;

    // Randomly assign users
    const assignments = await this.randomlyAssignUsers(sample_size);

    // Run experiment
    const results = await this.collectResults({
      variant_a: assignments.filter(a => a.variant === 'A'),
      variant_b: assignments.filter(a => a.variant === 'B'),
      metric: success_metric
    });

    // Statistical analysis
    const significance = this.calculateSignificance(results);

    if (significance.p_value < 0.05) {
      // Statistically significant difference
      const winner = results.variant_a[success_metric] > results.variant_b[success_metric]
        ? 'variant_a'
        : 'variant_b';

      await this.promoteWinner(winner);
    }

    return results;
  }
}
```

#### Point 9: Create a Secure Service Which Protects Users' Privacy

See Chapter 7 for comprehensive security architecture.

**Privacy-by-Design Checklist**:
- [ ] Data Protection Impact Assessment (DPIA) completed
- [ ] Privacy notice clear and accessible
- [ ] Consent mechanisms for optional data collection
- [ ] Data minimization (collect only necessary data)
- [ ] Retention periods defined and enforced
- [ ] Right to erasure implemented
- [ ] Data portability enabled
- [ ] Breach notification procedures documented

#### Point 10: Define What Success Looks Like

**KPI Framework**:
```yaml
success_metrics:
  cost_per_transaction:
    target: "< $5 for digital channel"
    measurement: "Total service cost / number of transactions"

  completion_rate:
    target: "> 80%"
    measurement: "Completed transactions / started transactions"

  user_satisfaction:
    target: "> 4.0 / 5.0"
    measurement: "Post-transaction survey"

  digital_take_up:
    target: "> 75% of eligible users"
    measurement: "Digital transactions / total transactions"

  time_to_complete:
    target: "< 10 minutes (median)"
    measurement: "Time from start to submission"

  accessibility:
    target: "WCAG 2.1 Level AA (100%)"
    measurement: "Automated + manual testing"

  uptime:
    target: "99.9% (8.76 hours downtime/year max)"
    measurement: "Uptime monitoring"

  error_rate:
    target: "< 5%"
    measurement: "Sessions with errors / total sessions"
```

#### Point 11: Choose the Right Tools and Technology

**Technology Selection Criteria**:
```yaml
evaluation_framework:
  open_source_first:
    priority: "HIGH"
    rationale: "Avoid vendor lock-in, community support, cost"
    exceptions: "When open source lacks required features"

  criteria:
    technical:
      - scalability: "Handles 10x current load"
      - performance: "Meets latency requirements"
      - security: "No critical vulnerabilities"
      - maintainability: "Active community/support"

    commercial:
      - total_cost_of_ownership: "5-year TCO projection"
      - vendor_viability: "Minimum 3 years in market"
      - support_availability: "24/7 support for critical systems"

    strategic:
      - skills_availability: "Can hire/train staff"
      - interoperability: "Standards-based integration"
      - exit_strategy: "Can migrate away if needed"

  decision_process:
    - step1: "Document requirements"
    - step2: "Identify 3-5 candidates"
    - step3: "Proof of concept (top 2)"
    - step4: "Score against criteria"
    - step5: "Document decision rationale"
```

#### Point 12: Make New Source Code Open

**Open Source Strategy**:
```yaml
open_source_policy:
  default: "Open by default, closed by exception"

  what_to_open:
    - application_code: "All citizen-facing services"
    - libraries: "Reusable components"
    - infrastructure_as_code: "Terraform, Ansible configs (sanitized)"
    - documentation: "Architecture, APIs, user guides"

  what_to_keep_closed:
    - security_tools: "Vulnerability scanners, pen test tools"
    - credentials: "API keys, passwords, certificates"
    - citizen_data: "Any PII or sensitive data"
    - procurement_sensitive: "Pre-award contract info"

  repository_structure:
    platform: "GitHub (gov.uk pattern)"
    organization: "government-as-a-service"
    naming: "jurisdiction-service-name (e.g., uk-passport-renewal)"
    license: "MIT or Apache 2.0"
    readme: "Installation, usage, contributing guidelines"

  contribution_guidelines:
    - pull_requests: "Required for all changes"
    - code_review: "Minimum 1 reviewer"
    - testing: "95% coverage required"
    - documentation: "Updated with code changes"
```

#### Point 13: Use and Contribute to Open Standards, Common Components, and Patterns

**Common Components to Reuse**:
```yaml
identity_verification:
  - name: "GOV.UK Verify"
  - name: "Login.gov (US)"
  - name: "MyInfo (Singapore)"
  - standard: "OpenID Connect, SAML 2.0"

payment_processing:
  - name: "GOV.UK Pay"
  - name: "Pay.gov (US)"
  - standard: "PCI DSS compliant"

notification_service:
  - name: "GOV.UK Notify"
  - channels: ["email", "SMS", "postal"]
  - standard: "REST API"

document_verification:
  - name: "Document Checking Service (DCS)"
  - capabilities: ["passport", "drivers_license", "birth_certificate"]

address_lookup:
  - name: "Postal address API"
  - standard: "ISO 19160"

design_system:
  - name: "GOV.UK Design System"
  - name: "US Web Design System (USWDS)"
  - components: ["forms", "navigation", "tables", "layouts"]
```

#### Point 14: Operate a Reliable Service

**Reliability Engineering**:
```yaml
sla_targets:
  availability: "99.9% (3 nines)"
  latency_p95: "< 500ms"
  latency_p99: "< 2000ms"
  error_rate: "< 0.1%"

monitoring:
  synthetic_monitoring:
    - tool: "Pingdom, Uptime Robot"
    - frequency: "1 minute"
    - checks: "Critical user journeys"

  real_user_monitoring:
    - tool: "Google Analytics, New Relic"
    - metrics: ["page_load", "time_to_interactive", "errors"]

  infrastructure_monitoring:
    - tool: "Prometheus, Grafana, Datadog"
    - metrics: ["CPU", "memory", "disk", "network"]

  application_monitoring:
    - tool: "Application Insights, Sentry"
    - metrics: ["request_rate", "error_rate", "duration"]

incident_management:
  severity_levels:
    sev1: "Service down, > 50% users affected"
    sev2: "Major feature broken, 10-50% users affected"
    sev3: "Minor feature broken, < 10% users affected"
    sev4: "Cosmetic issue, no user impact"

  response_times:
    sev1: "15 minutes to acknowledge, 1 hour to resolve"
    sev2: "30 minutes to acknowledge, 4 hours to resolve"
    sev3: "2 hours to acknowledge, 24 hours to resolve"
    sev4: "Next business day"

  on_call_rotation:
    - schedule: "24/7 coverage"
    - rotation: "1 week shifts"
    - escalation: "Manager after 30 minutes"
```

#### Point 15: Support a Culture of Care

**Service Sustainability**:
```yaml
documentation:
  runbooks:
    - deployment_procedures: "Step-by-step deployment"
    - incident_response: "Playbooks for common issues"
    - disaster_recovery: "Recovery procedures"

  architecture:
    - system_diagrams: "C4 model (context, container, component, code)"
    - api_documentation: "OpenAPI 3.0 specs"
    - data_models: "Entity-relationship diagrams"

  operations:
    - monitoring_guide: "Alerts and thresholds"
    - maintenance_schedule: "Planned maintenance windows"
    - capacity_planning: "Growth projections"

knowledge_transfer:
  - pair_programming: "Developers work in pairs"
  - code_reviews: "All changes reviewed"
  - tech_talks: "Weekly knowledge sharing"
  - documentation: "Maintained as code changes"

team_wellbeing:
  - on_call_limits: "Max 1 week per month"
  - post_incident_reviews: "Blameless retrospectives"
  - learning_budget: "$2000/year per person"
  - mental_health_support: "Employee assistance program"
```

#### Point 16: Use Data to Inform Decisions

**Data-Driven Decision Framework**:
```yaml
analytics_stack:
  web_analytics:
    - tool: "Google Analytics 4, Matomo"
    - data: ["pageviews", "sessions", "conversions", "user_flows"]

  product_analytics:
    - tool: "Mixpanel, Amplitude"
    - data: ["feature_usage", "cohort_analysis", "funnel_analysis"]

  performance_monitoring:
    - tool: "Lighthouse, WebPageTest"
    - data: ["load_time", "time_to_interactive", "cumulative_layout_shift"]

  user_feedback:
    - tool: "Qualtrics, SurveyMonkey"
    - data: ["satisfaction_scores", "open_text_feedback"]

decision_log:
  format:
    - decision: "What was decided"
    - context: "Why it was needed"
    - options: "Alternatives considered"
    - data: "Metrics that informed decision"
    - outcome: "Results after implementation"

  review_frequency: "Quarterly retrospective on major decisions"
```

#### Point 17: Make a Plan for Being Offline

**Offline Capability Strategy**:
```yaml
progressive_web_app:
  service_worker: "Cache critical assets"
  offline_pages: "Static HTML fallbacks"
  sync: "Background sync when online"

offline_channels:
  phone:
    - availability: "24/7 helpline"
    - capability: "Complete transactions over phone"

  in_person:
    - locations: "Government service centers"
    - assisted_digital: "Staff help with online service"

  mail:
    - paper_forms: "Available on request"
    - processing_time: "SLA: 10 business days"

degraded_mode:
  strategy: "Essential features remain available"
  example:
    - critical: "Submit application (always available)"
    - nice_to_have: "Check status (may be unavailable during outage)"
```

#### Point 18: Make a Plan for Service Retirement

**Service Decommissioning Plan**:
```yaml
retirement_phases:
  notification:
    - timeline: "6 months notice"
    - channels: ["email", "in-service_banner", "press_release"]
    - content: "Alternative service, migration path"

  migration:
    - data_export: "Users can download their data"
    - account_transfer: "Auto-migrate to new service"
    - support: "Dedicated migration assistance"

  decommissioning:
    - redirects: "Old URLs redirect to new service"
    - data_retention: "Archive data per policy (typically 7 years)"
    - infrastructure: "Graceful shutdown, no data loss"

  post_retirement:
    - documentation: "Archive service documentation"
    - lessons_learned: "Retrospective for future services"
```

---

## 5.2 Life-Event Journey Mapping

Government services organized around citizen life events create seamless experiences that cross departmental boundaries.

### 5.2.1 Life Event Framework

**Core Life Events**:
1. Birth (having a child)
2. Education (starting school, university)
3. Employment (getting a job, changing careers, unemployment)
4. Business (starting/running a business)
5. Housing (renting, buying, moving)
6. Healthcare (illness, disability, aging)
7. Family changes (marriage, divorce, adoption)
8. Death (bereavement, estate management)

### 5.2.2 Birth Journey Map

**Detailed Journey: Having a Child**

```yaml
pre_birth:
  - trigger: "Pregnancy confirmed"
  - services_needed:
      - maternity_benefits: "Apply for paid leave"
      - healthcare_registration: "Prenatal care appointment"
      - tax_adjustments: "Update tax withholding"
  - pain_points:
      - "Don't know what benefits available"
      - "Have to apply to multiple agencies"
  - opportunities:
      - "Proactive notification of benefits"
      - "Single application for all programs"

birth_event:
  - trigger: "Child born"
  - services_needed:
      - birth_registration: "CRITICAL - within 6 weeks"
      - child_benefit: "Monthly payment eligibility"
      - healthcare_card: "Register child with GP"
      - tax_credit: "Update household income"
  - current_experience:
      - hospital_form: "Fill out birth registration at hospital"
      - benefit_form: "Separate application online/mail"
      - healthcare_form: "Contact GP separately"
  - ideal_experience:
      - single_notification: "Hospital notifies government"
      - auto_eligibility: "Benefits calculated automatically"
      - single_consent: "Share data across agencies"
      - proactive_contact: "GP receives notification"

post_birth_0_3_months:
  - services_needed:
      - childcare_search: "Find childcare options"
      - parental_leave: "Manage leave balance"
      - home_visit: "Health visitor appointment"
      - vaccination_schedule: "Immunization tracker"
  - opportunities:
      - "Integrated childcare marketplace"
      - "Self-service leave management"
      - "Automated appointment scheduling"
      - "Vaccination reminders (SMS/email)"

post_birth_4_12_months:
  - services_needed:
      - benefit_renewal: "Confirm continued eligibility"
      - passport_application: "If travel planned"
      - childcare_vouchers: "Tax-free childcare"
  - opportunities:
      - "Auto-renewal if circumstances unchanged"
      - "Integrated passport application"
      - "Voucher eligibility calculator"
```

**Journey Map Diagram** (described):
```
TIMELINE: [-9 months] [Birth] [+6 weeks] [+6 months] [+1 year] [+5 years]

TOUCHPOINTS:
  Pregnancy → Hospital → Birth Reg → Benefits → Healthcare → Childcare → School

EMOTIONS:
  Anxious → Overwhelmed → Relieved → Stressed → Confident

PAIN POINTS:
  [Multiple forms] [Unclear eligibility] [Repetitive data entry] [Long wait times]

OPPORTUNITIES:
  [Single sign-on] [Auto eligibility] [Proactive outreach] [Integrated services]
```

**Service Blueprint**:
```yaml
frontstage:  # What user sees
  - digital_portal: "Apply for all birth-related services"
  - mobile_app: "Track application status"
  - sms_notifications: "Appointment reminders"
  - customer_service: "Phone/chat support"

backstage:  # What staff does (invisible to user)
  - verification: "Staff verify birth certificate"
  - eligibility_calculation: "Automated means testing"
  - inter_agency_notification: "Alert healthcare, tax, benefits"
  - fraud_detection: "Check for duplicate applications"

support_processes:  # Technology and data
  - civil_registration_system: "Birth record database"
  - benefit_calculation_engine: "Rules engine"
  - notification_service: "Email/SMS gateway"
  - case_management: "Track multi-service application"
```

### 5.2.3 Employment Journey Map

**Starting Employment**:
```yaml
pre_employment:
  - job_search: "Access job listings"
  - resume_building: "CV templates and advice"
  - training_programs: "Skill development courses"

starting_job:
  - tax_setup: "Tax code assignment"
  - pension_enrollment: "Auto-enrollment in workplace pension"
  - benefit_updates: "Stop unemployment benefits, start tax credits"
  - employment_verification: "Right to work check"

current_state_pain_points:
  - "Manually notify multiple agencies of employment"
  - "Tax code errors lead to over/underpayment"
  - "Benefit overpayment if not reported quickly"

future_state:
  - employer_integration: "Employer reports new hire to government"
  - automatic_benefit_adjustment: "Benefits stop on employment start date"
  - real_time_tax_calculation: "Correct tax code immediately"
```

### 5.2.4 Business Start Journey Map

**Starting a Business**:
```yaml
ideation:
  - business_planning: "Templates and guidance"
  - market_research: "Industry data and trends"
  - funding_options: "Grant finder tool"

registration:
  - business_registration: "Single Business Identifier (SBI)"
  - tax_registration: "VAT, corporate tax, payroll"
  - licensing: "Industry-specific licenses"
  - insurance: "Liability insurance requirements"

current_experience:
  - multiple_agencies: "Register with 5+ different agencies"
  - paper_forms: "PDF forms mailed/emailed"
  - waiting_periods: "2-4 weeks for approval"

ideal_experience:
  - single_registration: "Tell us once"
  - instant_approvals: "Low-risk businesses approved immediately"
  - integrated_guidance: "Checklist of requirements"
  - digital_mailbox: "All correspondence in one place"
```

**Implementation**:
```typescript
// Life Event Service Orchestrator
class LifeEventService {
  async handleBirthEvent(birthData: BirthRecord): Promise<OrchestrationResult> {
    const orchestrationPlan = {
      services: [],
      timeline: [],
      notifications: []
    };

    // 1. Register birth (critical path)
    const birthCertificate = await this.civilRegistry.registerBirth(birthData);
    orchestrationPlan.services.push({
      service: 'birth_registration',
      status: 'completed',
      completedAt: new Date()
    });

    // 2. Check benefit eligibility (parallel)
    const eligibilityChecks = await Promise.all([
      this.benefits.checkChildBenefit(birthData.parents),
      this.tax.checkTaxCredit(birthData.parents),
      this.healthcare.checkHealthcareEligibility(birthData.child)
    ]);

    // 3. Auto-enroll in eligible benefits
    for (const eligibility of eligibilityChecks) {
      if (eligibility.eligible) {
        const application = await this.autoEnroll(eligibility);
        orchestrationPlan.services.push({
          service: eligibility.program,
          status: 'auto_enrolled',
          estimatedBenefit: eligibility.amount
        });

        // Proactive notification
        orchestrationPlan.notifications.push({
          channel: 'email',
          recipient: birthData.parents.email,
          content: `You've been automatically enrolled in ${eligibility.program}`
        });
      }
    }

    // 4. Schedule future events
    orchestrationPlan.timeline.push({
      event: 'vaccination_reminder',
      scheduledFor: addDays(birthData.birthDate, 56), // 8 weeks
      action: 'send_notification'
    });

    return orchestrationPlan;
  }

  private async autoEnroll(eligibility: EligibilityResult): Promise<Application> {
    // Pre-populate application with known data
    const application = {
      program: eligibility.program,
      applicant: eligibility.citizen,
      data: eligibility.prepopulatedData,
      consent: 'auto_enrolled_with_opt_out',
      status: 'approved'
    };

    // Submit to benefit system
    return await this.benefits.createApplication(application);
  }
}
```

---

## 5.3 Mobile-First Design Patterns

### 5.3.1 Responsive vs Progressive Web App vs Native App

**Decision Matrix**:
```yaml
responsive_website:
  use_when:
    - "Content/information only (no transactions)"
    - "Simple forms (< 5 fields)"
    - "No offline capability needed"
  pros:
    - "Easiest to develop"
    - "Works on all devices"
    - "No app store approval needed"
  cons:
    - "Limited offline capability"
    - "No push notifications"
    - "Less performant"
  examples:
    - "Government information portal"
    - "FAQ pages"
    - "Contact forms"

progressive_web_app:
  use_when:
    - "Transaction-heavy service"
    - "Offline capability valuable"
    - "Frequent return users"
  pros:
    - "Works offline"
    - "Push notifications"
    - "Install to homescreen"
    - "Single codebase"
  cons:
    - "Limited iOS support (improving)"
    - "No deep system integration"
  examples:
    - "Benefit applications"
    - "Tax filing"
    - "License renewals"

native_mobile_app:
  use_when:
    - "Requires camera/GPS/biometrics"
    - "Complex offline functionality"
    - "High-frequency daily use"
  pros:
    - "Full device API access"
    - "Best performance"
    - "Superior offline capability"
  cons:
    - "Separate iOS and Android development"
    - "App store approval process"
    - "Update friction"
  examples:
    - "Digital ID with biometrics"
    - "Emergency services app"
    - "Field inspection app for government workers"
```

### 5.3.2 Mobile-First Design Patterns

**Pattern 1: Progressive Disclosure**
```html
<!-- Mobile: Show summary, expand for details -->
<div class="application-summary">
  <h2>Your Application</h2>
  <p>Status: In Progress</p>
  <button onclick="toggleDetails()">View Details</button>

  <div id="details" class="hidden">
    <p>Submitted: 2025-10-15</p>
    <p>Reference: AB123456</p>
    <p>Processing time: 10 business days</p>
    <!-- Full details here -->
  </div>
</div>

<!-- Desktop: Show all details by default -->
<style>
  @media (min-width: 768px) {
    #details { display: block !important; }
    button { display: none; }
  }
</style>
```

**Pattern 2: Touch-Friendly Interactions**
```css
/* Minimum touch target: 44x44px (iOS) or 48x48px (Android) */
.button {
  min-height: 48px;
  min-width: 48px;
  padding: 12px 24px;

  /* Spacing between touch targets */
  margin: 8px 0;
}

/* Large form inputs */
input, select, textarea {
  min-height: 48px;
  font-size: 16px; /* Prevents iOS zoom on focus */
  padding: 12px;
}

/* Swipe gestures */
.swipeable {
  touch-action: pan-y; /* Allow vertical scroll, detect horizontal swipe */
}
```

**Pattern 3: Thumb-Zone Navigation**
```
┌─────────────────┐
│                 │  Top: Hard to reach with thumb
│                 │
│                 │  Middle: Easy to reach
│                 │
│  [Nav] [Action] │  Bottom: Easiest to reach (thumb zone)
└─────────────────┘

Recommendation: Put primary actions in bottom 1/3 of screen
```

**Pattern 4: Mobile Form Optimization**
```html
<!-- Use appropriate input types for mobile keyboard -->
<input type="tel" pattern="[0-9]*" inputmode="numeric"
       placeholder="Phone number">

<input type="email" autocomplete="email"
       placeholder="Email address">

<input type="text" autocomplete="postal-code"
       placeholder="ZIP code">

<!-- Date picker (native mobile picker) -->
<input type="date" min="1900-01-01" max="2025-12-31">

<!-- Use autocomplete for common fields -->
<input type="text" autocomplete="given-name" placeholder="First name">
<input type="text" autocomplete="family-name" placeholder="Last name">
<input type="text" autocomplete="address-line1" placeholder="Street address">
```

### 5.3.3 Progressive Web App Implementation

**Manifest File** (`manifest.json`):
```json
{
  "name": "Government Service Portal",
  "short_name": "GovPortal",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0b0c0c",
  "orientation": "portrait",
  "icons": [
    {
      "src": "/icons/icon-72x72.png",
      "sizes": "72x72",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

**Service Worker** (offline support):
```javascript
// service-worker.js
const CACHE_NAME = 'gov-portal-v1';
const urlsToCache = [
  '/',
  '/styles/main.css',
  '/scripts/main.js',
  '/offline.html'
];

// Install service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Serve from cache, fall back to network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Cache hit - return cached version
        if (response) {
          return response;
        }

        // Clone request (can only be used once)
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone response (can only be used once)
          const responseToCache = response.clone();

          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });

          return response;
        }).catch(() => {
          // Network failed, return offline page
          return caches.match('/offline.html');
        });
      })
  );
});

// Background sync for form submissions
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-forms') {
    event.waitUntil(syncPendingForms());
  }
});

async function syncPendingForms() {
  const db = await openDatabase();
  const pendingForms = await db.getAll('pendingSubmissions');

  for (const form of pendingForms) {
    try {
      await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(form.data)
      });

      // Success - remove from pending
      await db.delete('pendingSubmissions', form.id);
    } catch (error) {
      // Network still unavailable, will retry on next sync
      console.error('Sync failed:', error);
    }
  }
}
```

**Push Notifications**:
```javascript
// Request permission
async function enableNotifications() {
  const permission = await Notification.requestPermission();

  if (permission === 'granted') {
    const registration = await navigator.serviceWorker.ready;
    const subscription = await registration.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: 'PUBLIC_VAPID_KEY'
    });

    // Send subscription to server
    await fetch('/api/notifications/subscribe', {
      method: 'POST',
      body: JSON.stringify(subscription)
    });
  }
}

// Service worker: receive push notification
self.addEventListener('push', (event) => {
  const data = event.data.json();

  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/badge-72x72.png',
    data: {
      url: data.url
    }
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

// Handle notification click
self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  event.waitUntil(
    clients.openWindow(event.notification.data.url)
  );
});
```

---

## 5.4 Accessibility Requirements (WCAG 2.1 Level AA)

### 5.4.1 WCAG 2.1 Level AA Complete Checklist

**Principle 1: Perceivable**

```yaml
1.1_text_alternatives:
  1.1.1_non_text_content:
    requirement: "All images, icons, charts have alt text"
    implementation:
      - decorative_images: 'alt="" (empty alt)'
      - informative_images: 'alt="Description of content"'
      - functional_images: 'alt="Action description" (e.g., "Search")'
      - complex_images: "Long description + link to full description"
    testing:
      - automated: "axe-core, WAVE"
      - manual: "Screen reader testing (NVDA, JAWS, VoiceOver)"

1.2_time_based_media:
  1.2.1_audio_only_and_video_only:
    requirement: "Transcript for audio, description for video"
  1.2.2_captions:
    requirement: "Captions for all video with audio"
    implementation: "WebVTT format, synchronized"
  1.2.3_audio_description:
    requirement: "Audio description of visual content in videos"
  1.2.4_captions_live:
    requirement: "Real-time captions for live video (e.g., council meetings)"
  1.2.5_audio_description_prerecorded:
    requirement: "Extended audio description for complex visual content"

1.3_adaptable:
  1.3.1_info_and_relationships:
    requirement: "Semantic HTML (headings, lists, tables, forms)"
    implementation: |
      <table>
        <caption>Application Status</caption>
        <thead>
          <tr>
            <th scope="col">Reference</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">AB123456</th>
            <td>Approved</td>
          </tr>
        </tbody>
      </table>

  1.3.2_meaningful_sequence:
    requirement: "Content order makes sense when linearized"
    testing: "Disable CSS, read top to bottom"

  1.3.3_sensory_characteristics:
    requirement: "Don't rely solely on shape, color, or position"
    bad_example: "Click the green button on the right"
    good_example: "Click the 'Submit' button"

  1.3.4_orientation:
    requirement: "Content works in both portrait and landscape"
    exception: "Unless specific orientation essential (e.g., piano app)"

  1.3.5_identify_input_purpose:
    requirement: "Use autocomplete attributes"
    implementation: |
      <input type="text" autocomplete="given-name" />
      <input type="email" autocomplete="email" />

1.4_distinguishable:
  1.4.1_use_of_color:
    requirement: "Color not the only visual means of conveying information"
    example: "Error messages have icon + red border + text"

  1.4.2_audio_control:
    requirement: "User can pause/stop audio that plays automatically"

  1.4.3_contrast_minimum:
    requirement: "4.5:1 for normal text, 3:1 for large text (18pt+)"
    tools: "WebAIM Contrast Checker, Chrome DevTools"

  1.4.4_resize_text:
    requirement: "Text can be resized to 200% without loss of functionality"
    implementation: "Use relative units (rem, em), not px"

  1.4.5_images_of_text:
    requirement: "Use actual text, not images of text (except logos)"

  1.4.10_reflow:
    requirement: "Content reflows to single column at 320px width"
    testing: "Zoom to 400% or resize browser to 320px"

  1.4.11_non_text_contrast:
    requirement: "3:1 contrast for UI components and graphics"
    applies_to: "Buttons, form borders, charts, icons"

  1.4.12_text_spacing:
    requirement: "No loss of content when user adjusts spacing"
    testing: |
      p {
        line-height: 1.5 !important;
        letter-spacing: 0.12em !important;
        word-spacing: 0.16em !important;
      }

  1.4.13_content_on_hover_or_focus:
    requirement: "Tooltips dismissible, hoverable, persistent"
    implementation: "Press Escape to dismiss, move mouse to tooltip"
```

**Principle 2: Operable**

```yaml
2.1_keyboard_accessible:
  2.1.1_keyboard:
    requirement: "All functionality available via keyboard"
    testing: "Unplug mouse, complete all tasks"

  2.1.2_no_keyboard_trap:
    requirement: "Can navigate away from any component with keyboard"

  2.1.4_character_key_shortcuts:
    requirement: "Single character shortcuts can be turned off or remapped"

2.2_enough_time:
  2.2.1_timing_adjustable:
    requirement: "User can extend time limits"
    implementation: |
      // Warn before timeout
      if (timeRemaining < 120) {
        showWarning("Session expires in 2 minutes. Extend?");
      }

  2.2.2_pause_stop_hide:
    requirement: "User can pause moving, blinking, scrolling content"

2.3_seizures:
  2.3.1_three_flashes:
    requirement: "No content flashes more than 3 times per second"

2.4_navigable:
  2.4.1_bypass_blocks:
    requirement: "Skip navigation link"
    implementation: |
      <a href="#main-content" class="skip-link">Skip to main content</a>
      <main id="main-content">

  2.4.2_page_titled:
    requirement: "Unique, descriptive page titles"
    format: "Task name - Service name - GOV.UK"

  2.4.3_focus_order:
    requirement: "Focus order follows meaningful sequence"
    testing: "Tab through page, verify order makes sense"

  2.4.4_link_purpose:
    requirement: "Link text describes destination"
    bad: "Click here"
    good: "Download application form (PDF, 2MB)"

  2.4.5_multiple_ways:
    requirement: "Multiple ways to find pages (nav, search, sitemap)"

  2.4.6_headings_and_labels:
    requirement: "Headings and labels are descriptive"

  2.4.7_focus_visible:
    requirement: "Keyboard focus indicator visible"
    implementation: |
      :focus {
        outline: 3px solid #ffbf47;
        outline-offset: 0;
      }

2.5_input_modalities:
  2.5.1_pointer_gestures:
    requirement: "Don't require complex gestures (e.g., pinch to zoom)"

  2.5.2_pointer_cancellation:
    requirement: "Click activated on up event, not down"

  2.5.3_label_in_name:
    requirement: "Accessible name includes visible text"

  2.5.4_motion_actuation:
    requirement: "Don't require device motion (e.g., shake to undo)"
```

**Principle 3: Understandable**

```yaml
3.1_readable:
  3.1.1_language_of_page:
    requirement: '<html lang="en">'

  3.1.2_language_of_parts:
    requirement: '<span lang="es">Hola</span> for foreign words'

3.2_predictable:
  3.2.1_on_focus:
    requirement: "Focus doesn't trigger unexpected context change"

  3.2.2_on_input:
    requirement: "Changing input doesn't auto-submit"

  3.2.3_consistent_navigation:
    requirement: "Navigation in same order across pages"

  3.2.4_consistent_identification:
    requirement: "Same icon/label for same functionality"

3.3_input_assistance:
  3.3.1_error_identification:
    requirement: "Errors clearly identified and described"
    implementation: |
      <div class="error-summary" role="alert">
        <h2>There is a problem</h2>
        <ul>
          <li><a href="#email">Enter a valid email address</a></li>
        </ul>
      </div>

  3.3.2_labels_or_instructions:
    requirement: "All form fields have labels"
    implementation: |
      <label for="email">Email address</label>
      <input type="email" id="email" />

  3.3.3_error_suggestion:
    requirement: "Suggest how to fix errors"
    example: "Enter date in DD/MM/YYYY format"

  3.3.4_error_prevention:
    requirement: "Confirmation page for legal/financial transactions"
```

**Principle 4: Robust**

```yaml
4.1_compatible:
  4.1.1_parsing:
    requirement: "Valid HTML (no duplicate IDs, proper nesting)"
    validation: "W3C Markup Validation Service"

  4.1.2_name_role_value:
    requirement: "All UI components have accessible name and role"
    implementation: |
      <!-- Custom checkbox with ARIA -->
      <div role="checkbox"
           aria-checked="false"
           aria-labelledby="label-id"
           tabindex="0">
      </div>

  4.1.3_status_messages:
    requirement: "Status messages announced to screen readers"
    implementation: |
      <div role="status" aria-live="polite">
        Your application has been submitted
      </div>
```

### 5.4.2 Automated Testing

```javascript
// axe-core integration (Cypress example)
describe('Accessibility tests', () => {
  it('Home page has no accessibility violations', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });

  it('Form page accessible', () => {
    cy.visit('/apply');
    cy.injectAxe();
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: true },
        'label': { enabled: true }
      }
    });
  });
});

// Pa11y automated testing
const pa11y = require('pa11y');

async function testAccessibility() {
  const results = await pa11y('https://example.gov.uk', {
    standard: 'WCAG2AA',
    includeWarnings: true,
    runners: ['axe', 'htmlcs']
  });

  console.log(results);
}
```

### 5.4.3 Manual Testing Checklist

```yaml
screen_reader_testing:
  tools:
    - NVDA: "Windows, free"
    - JAWS: "Windows, commercial (most popular)"
    - VoiceOver: "macOS/iOS, built-in"
    - TalkBack: "Android, built-in"

  test_scenarios:
    - "Navigate using headings (H key in NVDA/JAWS)"
    - "Navigate using landmarks (D key)"
    - "Navigate forms (F key, Tab key)"
    - "Activate buttons (Enter/Space)"
    - "Read tables (T key, arrow keys)"

keyboard_testing:
  - "Tab through all interactive elements"
  - "Shift+Tab to go backwards"
  - "Enter/Space to activate buttons/links"
  - "Arrow keys for radio buttons/select"
  - "Escape to close modals"

zoom_testing:
  - "Zoom to 200% (Ctrl/Cmd + '+')"
  - "Verify no horizontal scrolling"
  - "Verify all content readable"
  - "Test at 400% zoom (reflow requirement)"

color_contrast:
  - "Use browser DevTools color picker"
  - "Check all text against background"
  - "Check UI components (buttons, borders)"
  - "Test in different color modes (dark mode)"

focus_indicators:
  - "Tab through page, verify focus always visible"
  - "Focus indicator meets 3:1 contrast ratio"
  - "Focus doesn't jump unexpectedly"
```

---

## 5.5 Multi-Channel Strategy

### 5.5.1 Channel Strategy Framework

**Digital-First Approach**:
```yaml
channel_hierarchy:
  primary: "Digital (web, mobile app)"
  secondary: "Telephone (for support)"
  tertiary: "In-person (for complex cases)"

rationale:
  digital:
    - cost_per_transaction: "$0.50 - $2"
    - availability: "24/7"
    - scalability: "Infinite"
    - data_quality: "High (validated input)"

  telephone:
    - cost_per_transaction: "$8 - $15"
    - availability: "Business hours + extended"
    - scalability: "Limited by staff"
    - data_quality: "Medium (transcription errors)"

  in_person:
    - cost_per_transaction: "$25 - $50"
    - availability: "Business hours only"
    - scalability: "Very limited"
    - data_quality: "High (document verification)"

migration_strategy:
  digital_take_up_target: "75% by year 3"

  tactics:
    - digital_by_default: "Digital channel presented first"
    - assisted_digital: "Staff help users complete online"
    - channel_shift: "Incentivize digital (faster processing)"
    - offline_channel_limits: "Longer wait times for phone/in-person"
```

### 5.5.2 Telephone Channel

**Interactive Voice Response (IVR)**:
```yaml
ivr_design_principles:
  - brevity: "Options < 30 seconds"
  - simple_menu: "Max 5 options per level"
  - escape_hatch: "Press 0 for operator (always available)"
  - confirmation: "Repeat selection before proceeding"

example_flow:
  greeting: "Welcome to Government Services. For English, press 1."

  main_menu:
    - "1: Check application status"
    - "2: Make a payment"
    - "3: Report a change"
    - "4: Speak to an agent"
    - "0: Repeat options"

  authentication:
    method: "Reference number + date of birth"
    security: "Don't ask for full SSN over phone"

  self_service:
    - "Your application AB123456 is approved"
    - "Would you like this confirmation by text? Press 1 for yes"
```

**Call Center Integration**:
```typescript
interface CallCenterIntegration {
  // Screen pop: Show citizen record when they call
  screenPop(phoneNumber: string): CitizenProfile;

  // Omnichannel history: See digital interactions
  getInteractionHistory(citizenId: string): Interaction[];

  // Guided workflows: Step agents through processes
  getGuidedWorkflow(serviceType: string): WorkflowSteps;

  // Knowledge base: Contextual help articles
  searchKnowledgeBase(query: string): Article[];
}

class CallCenterSystem {
  async handleIncomingCall(phoneNumber: string) {
    // 1. Identify caller (ANI lookup)
    const citizen = await this.identifyCaller(phoneNumber);

    // 2. Screen pop for agent
    const profile = {
      name: citizen.name,
      recentApplications: await this.getApplications(citizen.id, { limit: 5 }),
      openCases: await this.getCases(citizen.id, { status: 'open' }),
      interactions: await this.getInteractions(citizen.id, { days: 30 }),
      preferredLanguage: citizen.language
    };

    // 3. Route to appropriate queue
    const queue = this.determineQueue(citizen, profile);

    // 4. Provide context to agent
    return {
      profile,
      queue,
      suggestedActions: this.getSuggestions(profile)
    };
  }
}
```

### 5.5.3 In-Person Channel

**Service Center Design**:
```yaml
layout:
  welcome_desk:
    purpose: "Triage, digital assistance"
    staffing: "2 staff for every 100 daily visitors"

  self_service_kiosks:
    purpose: "Assisted digital, printing, scanning"
    quantity: "1 kiosk per 25 daily visitors"
    features:
      - "Large touchscreen"
      - "Accessibility (height adjustable, screen reader)"
      - "Printer for confirmations"
      - "Document scanner"

  private_consultation_rooms:
    purpose: "Complex cases, sensitive information"
    quantity: "1 room per 50 daily visitors"
    equipment:
      - "Computer for case worker"
      - "Dual monitor (one facing citizen)"
      - "Document scanner"
      - "Privacy (soundproof)"

  waiting_area:
    amenities:
      - "Comfortable seating"
      - "Charging stations"
      - "Free WiFi"
      - "Children's play area"

appointment_system:
  online_booking: "https://services.gov.uk/book-appointment"

  walk_in_policy: "Accepted, but longer wait times"

  reminder_notifications:
    - "24 hours before: Email/SMS"
    - "1 hour before: SMS"

  no_show_policy: "3 no-shows = online booking only"
```

**Assisted Digital Support**:
```typescript
class AssistedDigitalService {
  // Staff help user complete online service
  async assistWithOnlineService(citizenId: string, serviceType: string) {
    // 1. Start session on shared screen
    const session = await this.createAssistedSession({
      citizen: citizenId,
      staff: this.staffId,
      service: serviceType
    });

    // 2. Guide through process
    const workflow = this.getServiceWorkflow(serviceType);

    for (const step of workflow.steps) {
      // Staff explains what information is needed
      const explanation = step.citizenExplanation;
      this.displayInstruction(explanation);

      // Citizen provides information verbally
      const data = await this.collectInformation(step.fields);

      // Staff enters data (dual entry for accuracy)
      await this.enterData(session.id, step.id, data);

      // Show citizen for confirmation
      await this.confirmWithCitizen(data);
    }

    // 3. Submit application
    const confirmation = await this.submitApplication(session.id);

    // 4. Provide printed confirmation
    await this.printConfirmation(confirmation);

    // 5. Set up digital account for future self-service
    await this.offerDigitalAccountSetup(citizenId);
  }
}
```

### 5.5.4 Chatbot Integration

**Conversational AI Design**:
```yaml
chatbot_capabilities:
  tier_1_informational:
    - "FAQ responses"
    - "Office hours and locations"
    - "Document requirements"
    - "Status checks (with authentication)"

  tier_2_transactional:
    - "Schedule appointments"
    - "Submit simple forms"
    - "Make payments"
    - "Update contact information"

  tier_3_escalation:
    - "Complex questions → human agent"
    - "Frustrated user detection → human agent"
    - "Multiple failed attempts → human agent"

conversation_design:
  personality:
    tone: "Helpful, professional, concise"
    formality: "Polite but not stiff"
    example: "I can help with that. What's your reference number?"

  error_handling:
    - clarification: "I didn't understand. Did you mean [option A] or [option B]?"
    - fallback: "Let me connect you with a specialist who can help"
    - persistent_failure: "I'll transfer you to an agent now"

  handoff_to_human:
    - "seamless context transfer"
    - "No need to repeat information"
    - "Escalation triggers: 3 failed attempts, explicit request, sentiment analysis"
```

**Implementation**:
```javascript
class GovernmentChatbot {
  async handleMessage(message, sessionContext) {
    // 1. Natural language understanding
    const intent = await this.nlp.classify(message);
    const entities = await this.nlp.extractEntities(message);

    // 2. Check if authentication required
    if (this.requiresAuth(intent) && !sessionContext.authenticated) {
      return this.initiateAuthentication();
    }

    // 3. Route to appropriate handler
    switch(intent.name) {
      case 'check_application_status':
        return await this.checkApplicationStatus(entities.reference_number);

      case 'book_appointment':
        return await this.startAppointmentBooking(entities);

      case 'ask_question':
        const answer = await this.knowledgeBase.search(message);
        return answer || this.escalateToHuman();

      default:
        return this.handleUnknownIntent(message, sessionContext);
    }
  }

  async handleUnknownIntent(message, context) {
    context.failureCount = (context.failureCount || 0) + 1;

    if (context.failureCount >= 3) {
      return {
        type: 'escalation',
        message: "I'm having trouble understanding. Let me connect you with an agent.",
        action: 'transfer_to_human'
      };
    }

    // Suggest alternatives
    const suggestions = await this.generateSuggestions(message);
    return {
      type: 'clarification',
      message: "I'm not sure what you're asking. Did you mean one of these?",
      options: suggestions
    };
  }
}
```

---

## 5.6 Content Management Architecture

### 5.6.1 Headless CMS Comparison

**Evaluation Criteria**:
```yaml
requirements:
  content_modeling:
    - flexible_schema: "Support custom content types"
    - relationships: "Link content (e.g., service → department)"
    - versioning: "Track changes, rollback capability"
    - workflow: "Draft → Review → Publish"

  api_capabilities:
    - rest_api: "Standard HTTP/JSON"
    - graphql: "Flexible querying"
    - webhooks: "Push notifications on content changes"
    - rate_limiting: "Handle traffic spikes"

  localization:
    - multi_language: "English, Spanish, French, etc."
    - translation_workflow: "Send to translators, track status"

  security:
    - role_based_access: "Authors, editors, publishers"
    - audit_log: "Track who changed what when"
    - api_authentication: "API keys, OAuth"

  scalability:
    - cdn_integration: "Cloudflare, Fastly"
    - caching: "Redis, Varnish support"
    - performance: "< 100ms API response time"
```

**CMS Comparison Matrix**:

```markdown
| Feature | Contentful | Strapi | Directus | WordPress (Headless) |
|---------|-----------|---------|----------|---------------------|
| **Deployment** | SaaS | Self-hosted | Self-hosted | Self-hosted |
| **Pricing** | $489/mo | Free (OSS) | Free (OSS) | Free (OSS) |
| **Content Modeling** | Excellent | Excellent | Excellent | Good |
| **API** | REST, GraphQL | REST, GraphQL | REST, GraphQL | REST |
| **Localization** | Built-in | Plugin | Built-in | Plugin |
| **Media Management** | Advanced | Basic | Advanced | Good |
| **User Management** | Advanced | Good | Advanced | Good |
| **Workflow** | Built-in | Custom | Custom | Plugin |
| **Learning Curve** | Moderate | Low | Low | Low (familiar) |
| **Government Use** | ✅ High | ✅ Medium | ✅ Medium | ❌ Low (security concerns) |
```

**Recommendation for Government**:

```yaml
primary_recommendation: "Strapi"

rationale:
  - open_source: "No vendor lock-in, full control"
  - self_hosted: "Data sovereignty, security compliance"
  - flexible: "Custom content types, relationships"
  - modern: "React admin panel, API-first"
  - community: "Active development, plugins"

architecture:
  deployment: "Kubernetes cluster (3+ nodes)"
  database: "PostgreSQL (high availability)"
  storage: "S3-compatible object storage"
  cdn: "Cloudflare or Fastly"
  caching: "Redis"

content_model_example:
  service_page:
    fields:
      - title: "Text (required)"
      - slug: "UID (unique)"
      - description: "Rich text"
      - eligibility: "Component (repeatable)"
      - requirements: "Component (repeatable)"
      - how_to_apply: "Rich text"
      - processing_time: "Number (days)"
      - cost: "Number (currency)"
      - department: "Relation (one-to-many)"
      - related_services: "Relation (many-to-many)"
      - status: "Enumeration (draft, review, published)"
```

### 5.6.2 Content Delivery Architecture

```
┌─────────────────────────────────────────────────────────┐
│                  CONTENT DELIVERY FLOW                   │
└─────────────────────────────────────────────────────────┘

Content Author → Strapi CMS → PostgreSQL Database
                      ↓
              Content Published
                      ↓
              Webhook Triggered
                      ↓
        ┌─────────────┼─────────────┐
        ↓             ↓             ↓
   Next.js App    Mobile App    Chatbot
   (Static Gen)   (API Call)    (API Call)
        ↓             ↓             ↓
    CDN Cache     CDN Cache     CDN Cache
        ↓             ↓             ↓
    End User      End User      End User


Performance Optimization:
1. Static Generation: Pre-render pages at build time
2. Incremental Static Regeneration: Update pages without full rebuild
3. CDN Caching: Cache at edge locations (TTL: 1 hour)
4. API Response Caching: Redis cache (TTL: 5 minutes)
```

**Implementation**:
```typescript
// Next.js with Strapi
import { GetStaticProps, GetStaticPaths } from 'next';

// Statically generate service pages
export const getStaticPaths: GetStaticPaths = async () => {
  const services = await fetch('https://cms.gov.uk/api/services')
    .then(res => res.json());

  const paths = services.data.map(service => ({
    params: { slug: service.attributes.slug }
  }));

  return {
    paths,
    fallback: 'blocking' // Generate pages on-demand if not pre-rendered
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const service = await fetch(`https://cms.gov.uk/api/services?filters[slug][$eq]=${params.slug}&populate=*`)
    .then(res => res.json());

  return {
    props: {
      service: service.data[0]
    },
    revalidate: 3600 // Revalidate every hour (ISR)
  };
};

// Webhook handler for cache invalidation
export async function POST(request: Request) {
  const { model, entry } = await request.json();

  if (model === 'service') {
    // Revalidate affected pages
    await revalidatePath(`/services/${entry.slug}`);

    // Purge CDN cache
    await purgeCDNCache([
      `https://www.gov.uk/services/${entry.slug}`,
      `https://www.gov.uk/api/services/${entry.id}`
    ]);
  }

  return new Response('OK');
}
```

---

## 5.7 Digital Inclusion Considerations

### 5.7.1 Digital Inclusion Framework

**Barriers to Digital Services**:
```yaml
access_barriers:
  no_device:
    population: "15-20% of low-income households"
    solution:
      - public_computers: "Libraries, community centers"
      - device_loan_programs: "Chromebook lending"
      - subsidized_devices: "Government partnership with manufacturers"

  no_internet:
    population: "10-15% in rural areas"
    solution:
      - public_wifi: "Government buildings, parks"
      - mobile_hotspot_loans: "Short-term lending"
      - broadband_subsidies: "Lifeline program"

  data_caps:
    population: "25% rely on mobile data with caps"
    solution:
      - zero_rating: "Government services don't count against data caps"
      - lightweight_sites: "< 500KB page weight"

skills_barriers:
  low_digital_literacy:
    population: "30-40% of elderly, immigrants"
    solution:
      - training_programs: "Free digital skills classes"
      - video_tutorials: "Step-by-step guides"
      - simplified_interfaces: "Larger text, fewer options"

  language:
    population: "10% speak English as second language"
    solution:
      - multi_language_support: "Top 5 languages minimum"
      - plain_language: "Flesch-Kincaid Grade 8"
      - visual_instructions: "Icons, diagrams, videos"

trust_barriers:
  security_concerns:
    population: "40% worry about identity theft"
    solution:
      - clear_privacy_policy: "What data collected, why, how protected"
      - visible_security_indicators: "HTTPS lock icon, gov.uk domain"
      - transparency: "Open source code, public audits"

  skepticism:
    population: "20% prefer in-person for 'proof'"
    solution:
      - email_confirmations: "Immediate receipt"
      - sms_notifications: "Status updates"
      - physical_mail_confirmation: "Follow-up letter"
```

### 5.7.2 Assisted Digital Service

**Service Model**:
```yaml
who_needs_assistance:
  - elderly: "65+ with limited tech experience"
  - disabled: "Visual, motor, cognitive impairments"
  - immigrants: "Limited English proficiency"
  - homeless: "No device, unstable address"
  - low_literacy: "Difficulty reading/writing"

where_provided:
  - libraries: "Public computers + staff"
  - community_centers: "Local trusted organizations"
  - government_offices: "Service centers"
  - home_visits: "For homebound individuals"
  - telephone: "Talk-through service"

what_assistance:
  tier_1_guidance:
    description: "Answer questions, point to resources"
    staff_required: "Library staff, volunteers"
    training: "4 hours"

  tier_2_coaching:
    description: "Show how to use service, user does it themselves"
    staff_required: "Digital champions"
    training: "2 days"

  tier_3_completion:
    description: "Complete service on behalf of user (with permission)"
    staff_required: "Trained caseworkers"
    training: "1 week + background check"
```

**Lightweight Site Version**:
```html
<!-- Minimal HTML for low bandwidth -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Apply for Benefits - GOV.UK</title>
  <style>
    /* Inline critical CSS, < 14KB */
    body { font: 16px/1.5 Arial, sans-serif; max-width: 600px; margin: 20px auto; padding: 0 20px; }
    h1 { font-size: 24px; }
    button { background: #00703c; color: white; padding: 12px 24px; border: none; font-size: 18px; }
  </style>
</head>
<body>
  <h1>Apply for child benefit</h1>

  <!-- No JavaScript, works with forms only -->
  <form method="POST" action="/submit">
    <label for="name">Child's full name</label>
    <input type="text" id="name" name="name" required>

    <label for="dob">Date of birth</label>
    <input type="date" id="dob" name="dob" required>

    <button type="submit">Continue</button>
  </form>

  <!-- No analytics, no ads, no tracking -->
</body>
</html>
```

---

## 5.8 Service Maturity Model

**5 Levels of Service Maturity**:

```yaml
level_1_information:
  description: "Content published online, no transactions"
  characteristics:
    - static_html_pages: "Information only"
    - contact_information: "Phone, email, address"
    - downloadable_forms: "PDF forms for manual submission"
  example: "Office hours, FAQs, program descriptions"
  cost_per_transaction: "N/A (no transactions)"
  digital_take_up: "N/A"

level_2_interaction:
  description: "Some digital interaction, primarily manual processing"
  characteristics:
    - form_download: "Fillable PDF forms"
    - email_submission: "Submit via email"
    - appointment_booking: "Online scheduling"
    - tracking: "Check status by phone"
  example: "Download passport application, mail with check"
  cost_per_transaction: "$15 - $25 (manual processing)"
  digital_take_up: "20-40%"

level_3_transaction:
  description: "End-to-end digital transaction"
  characteristics:
    - online_forms: "Web-based form submission"
    - digital_payment: "Pay online with card"
    - automated_processing: "Instant approval for simple cases"
    - status_tracking: "Online dashboard"
  example: "Renew driver's license entirely online"
  cost_per_transaction: "$2 - $8"
  digital_take_up: "60-80%"

level_4_integration:
  description: "Connected across agencies, proactive"
  characteristics:
    - data_sharing: "Pre-populate from other agencies"
    - life_event_triggered: "Proactive outreach"
    - cross_agency_workflow: "Automatic handoffs"
    - single_sign_on: "One account for all services"
  example: "Birth registration triggers benefit enrollment"
  cost_per_transaction: "$0.50 - $2"
  digital_take_up: "80-90%"

level_5_anticipatory:
  description: "AI-driven, predictive, proactive"
  characteristics:
    - predictive_analytics: "Anticipate citizen needs"
    - auto_enrollment: "Enroll in eligible programs automatically"
    - chatbot_ai: "Natural language assistance"
    - personalization: "Tailored to individual circumstances"
  example: "System predicts unemployment risk, proactively offers training"
  cost_per_transaction: "$0.25 - $1"
  digital_take_up: "90-95%"
```

**Maturity Assessment**:
```typescript
interface ServiceMaturityAssessment {
  service: string;
  current_level: 1 | 2 | 3 | 4 | 5;
  target_level: 1 | 2 | 3 | 4 | 5;
  target_date: Date;

  capabilities: {
    [capability: string]: 'not_started' | 'in_progress' | 'completed';
  };

  roadmap: {
    quarter: string;
    milestones: string[];
    investment: number;
  }[];
}

// Example assessment
const driverLicenseRenewal: ServiceMaturityAssessment = {
  service: 'Driver License Renewal',
  current_level: 3,
  target_level: 4,
  target_date: new Date('2026-06-30'),

  capabilities: {
    'online_renewal': 'completed',
    'digital_payment': 'completed',
    'status_tracking': 'completed',
    'data_integration': 'in_progress', // Integration with DMV, courts, insurance
    'proactive_notification': 'not_started', // Remind before expiration
    'auto_renewal': 'not_started' // Auto-renew if no violations
  },

  roadmap: [
    {
      quarter: 'Q3 2025',
      milestones: [
        'Integrate with court system for violation data',
        'Implement notification service'
      ],
      investment: 250000
    },
    {
      quarter: 'Q4 2025',
      milestones: [
        'Build auto-renewal logic',
        'Pilot with 10% of users'
      ],
      investment: 150000
    },
    {
      quarter: 'Q1 2026',
      milestones: [
        'Full rollout of auto-renewal',
        'Measure impact on call center volume'
      ],
      investment: 50000
    }
  ]
};
```

---

## 5.9 Implementation Checklist

**Pre-Launch Checklist**:
```yaml
service_standard_compliance:
  - [ ] User research conducted (minimum 20 participants)
  - [ ] Service scope covers entire user journey
  - [ ] Multi-channel experience consistent
  - [ ] Service simple to use (tested with users)
  - [ ] WCAG 2.1 Level AA compliant (automated + manual testing)
  - [ ] Multidisciplinary team in place
  - [ ] Agile ceremonies established
  - [ ] Success metrics defined and tracked
  - [ ] Privacy impact assessment completed
  - [ ] Source code published (unless exception)
  - [ ] Using common components where possible
  - [ ] SLA targets defined and monitored
  - [ ] Documentation complete (runbooks, architecture)
  - [ ] Analytics instrumented
  - [ ] Offline channels available
  - [ ] Service retirement plan documented

mobile_first:
  - [ ] Responsive design (320px to 2560px)
  - [ ] Touch targets minimum 48x48px
  - [ ] PWA manifest file
  - [ ] Service worker for offline
  - [ ] Performance budget met (< 3s load time on 3G)
  - [ ] Lighthouse score > 90

accessibility:
  - [ ] axe-core scan passes (0 violations)
  - [ ] Screen reader testing (NVDA, JAWS, VoiceOver)
  - [ ] Keyboard navigation works
  - [ ] Color contrast meets 4.5:1
  - [ ] Text resizable to 200%
  - [ ] Focus indicators visible
  - [ ] ARIA attributes used correctly

content:
  - [ ] Plain language (Flesch-Kincaid Grade 8)
  - [ ] Content model defined in CMS
  - [ ] Multi-language support (if required)
  - [ ] CDN configured
  - [ ] Cache invalidation strategy
  - [ ] Content governance process

digital_inclusion:
  - [ ] Assisted digital support available
  - [ ] Lightweight version (< 500KB)
  - [ ] Works without JavaScript
  - [ ] Public access points identified
  - [ ] Training materials created

launch_readiness:
  - [ ] Load testing completed (10x expected traffic)
  - [ ] Security scan passed (no high/critical vulnerabilities)
  - [ ] Incident response plan tested
  - [ ] Monitoring and alerting configured
  - [ ] On-call rotation scheduled
  - [ ] User support plan (helpdesk, knowledge base)
  - [ ] Communication plan (launch announcement, user onboarding)
```

---

**END OF CHAPTER 5**

---

# CHAPTER 6: INTEGRATION PATTERNS

Government-as-a-Service platforms must integrate dozens or hundreds of legacy systems, third-party services, and modern cloud applications. This chapter provides proven patterns for reliable, scalable integration architecture.

## 6.1 Legacy System Integration

### 6.1.1 Integration Challenges

**Common Legacy System Characteristics**:
```yaml
technical_debt:
  mainframe_systems:
    - language: "COBOL, PL/I, Assembler"
    - age: "30-50 years old"
    - documentation: "Often outdated or missing"
    - interfaces: "Batch files, green screen terminals"
    - example: "Social Security Administration (SSA), IRS tax systems"

  client_server_systems:
    - language: "PowerBuilder, Visual Basic, Oracle Forms"
    - age: "15-30 years"
    - architecture: "Thick client, direct database access"
    - example: "State DMV systems, municipal case management"

  file_based_integration:
    - format: "Fixed-width text, CSV, XML"
    - frequency: "Daily batch, overnight processing"
    - transfer: "FTP, SFTP, physical media"
    - reliability: "Manual intervention often required"

organizational_constraints:
  - risk_aversion: "Fear of breaking critical systems"
  - budget_limitations: "Legacy maintenance consumes 70-80% of IT budget"
  - skills_shortage: "COBOL programmers retiring"
  - compliance: "Cannot modify certified systems (e.g., voting machines)"
```

### 6.1.2 Strangler Fig Pattern

**Concept**: Gradually replace legacy system by building new functionality around it, eventually "strangling" the old system.

```
PHASE 1: Initial State
┌─────────────────────────────────────┐
│                                     │
│        LEGACY MONOLITH              │
│                                     │
│  ┌──────────┐  ┌──────────┐        │
│  │ Module A │  │ Module B │        │
│  └──────────┘  └──────────┘        │
│                                     │
└─────────────────────────────────────┘
           ↑
           │
         Users


PHASE 2: Proxy Layer
┌─────────────────────────────────────┐
│      INTEGRATION PROXY              │
│   (Routes to new or legacy)         │
└──────────┬────────────┬─────────────┘
           │            │
    ┌──────▼─────┐  ┌──▼──────────────┐
    │  New API   │  │ Legacy Monolith │
    │  Service A │  │   Module B      │
    └────────────┘  └─────────────────┘


PHASE 3: Complete Migration
┌─────────────────────────────────────┐
│      API GATEWAY                     │
└──────────┬────────────┬─────────────┘
           │            │
    ┌──────▼─────┐  ┌──▼──────────┐
    │  Service A │  │  Service B  │
    └────────────┘  └─────────────┘

  (Legacy system decommissioned)
```

**Implementation**:
```typescript
// Strangler Proxy Pattern
class StranglerProxy {
  constructor(
    private legacySystem: LegacySystemClient,
    private newSystem: ModernAPIClient,
    private routingRules: RoutingConfiguration
  ) {}

  async handleRequest(request: ServiceRequest): Promise<ServiceResponse> {
    // 1. Determine routing (feature flags, user segments, etc.)
    const route = this.determineRoute(request);

    // 2. Route to appropriate system
    if (route === 'NEW') {
      return await this.routeToNewSystem(request);
    } else if (route === 'LEGACY') {
      return await this.routeToLegacySystem(request);
    } else if (route === 'BOTH') {
      // Shadow mode: Call both, compare results
      return await this.shadowMode(request);
    }
  }

  private determineRoute(request: ServiceRequest): 'NEW' | 'LEGACY' | 'BOTH' {
    // Feature flag: Gradually roll out new system
    const featureFlag = this.routingRules.getFeatureFlag('use_new_system');

    // User-based routing (canary deployment)
    if (featureFlag.enabled && featureFlag.users.includes(request.userId)) {
      return 'NEW';
    }

    // Percentage-based routing
    if (featureFlag.percentage > 0) {
      const hash = this.hashUserId(request.userId);
      if (hash % 100 < featureFlag.percentage) {
        return 'NEW';
      }
    }

    // Shadow mode for testing
    if (featureFlag.shadowMode) {
      return 'BOTH';
    }

    return 'LEGACY';
  }

  private async shadowMode(request: ServiceRequest): Promise<ServiceResponse> {
    // Call both systems in parallel
    const [newResult, legacyResult] = await Promise.allSettled([
      this.routeToNewSystem(request),
      this.routeToLegacySystem(request)
    ]);

    // Compare results
    this.compareResults(newResult, legacyResult);

    // Return legacy result (safe)
    if (legacyResult.status === 'fulfilled') {
      return legacyResult.value;
    } else {
      throw legacyResult.reason;
    }
  }

  private compareResults(newResult: any, legacyResult: any): void {
    // Log differences for analysis
    if (JSON.stringify(newResult) !== JSON.stringify(legacyResult)) {
      this.logger.warn('Shadow mode discrepancy detected', {
        new: newResult,
        legacy: legacyResult,
        diff: this.calculateDiff(newResult, legacyResult)
      });
    }
  }
}
```

### 6.1.3 API Facade Pattern

**Concept**: Create a unified API interface that hides complexity of legacy systems.

```typescript
// Legacy system has complex, inconsistent interface
interface LegacyTaxSystem {
  CALC_TAX_OWED(
    SSN: string,
    TAX_YEAR: number,
    INCOME_AMT: number,
    DEDUCT_AMT: number
  ): { TAX_AMT: number; ERROR_CODE: string };

  GET_FILING_STATUS(SSN: string): { STATUS_CD: string };
}

// Modern API facade
class TaxServiceFacade {
  constructor(private legacySystem: LegacyTaxSystem) {}

  async calculateTax(request: TaxCalculationRequest): Promise<TaxCalculationResponse> {
    // 1. Validate input
    this.validateRequest(request);

    // 2. Get filing status
    const filingStatus = await this.getFilingStatus(request.taxpayerId);

    // 3. Call legacy system with transformed parameters
    const result = this.legacySystem.CALC_TAX_OWED(
      request.taxpayerId,
      request.taxYear,
      request.income,
      request.deductions
    );

    // 4. Handle legacy error codes
    if (result.ERROR_CODE !== '0000') {
      throw new TaxCalculationError(
        this.translateErrorCode(result.ERROR_CODE)
      );
    }

    // 5. Transform response to modern format
    return {
      taxpayerId: request.taxpayerId,
      taxYear: request.taxYear,
      taxOwed: result.TAX_AMT,
      filingStatus: filingStatus,
      calculatedAt: new Date()
    };
  }

  private translateErrorCode(errorCode: string): string {
    const errorMap = {
      '0001': 'Invalid taxpayer ID',
      '0002': 'Tax year out of range',
      '0003': 'Negative income not allowed',
      // ... more mappings
    };

    return errorMap[errorCode] || `Unknown error: ${errorCode}`;
  }
}
```

### 6.1.4 Extract-Transform-Load (ETL) Pattern

**Batch Integration for Legacy Systems**:

```yaml
etl_pipeline:
  extract:
    source: "Legacy mainframe DB2 database"
    method: "Database export to flat file"
    schedule: "Nightly at 2:00 AM"
    format: "Fixed-width text file"

  transform:
    steps:
      - parse: "Fixed-width → JSON"
      - validate: "Check data quality"
      - enrich: "Add reference data (e.g., state codes → state names)"
      - deduplicate: "Remove duplicate records"
      - calculate: "Derive fields (e.g., age from birthdate)"

  load:
    destination: "Modern PostgreSQL database"
    method: "Bulk insert with upsert logic"
    validation: "Row count reconciliation"

  error_handling:
    - quarantine: "Invalid records moved to error table"
    - notification: "Email to data team on failure"
    - retry: "Auto-retry on transient failures (3 attempts)"
```

**Implementation**:
```python
# ETL Pipeline Example (Python/Airflow)
from airflow import DAG
from airflow.operators.python_operator import PythonOperator
from datetime import datetime, timedelta

def extract_from_legacy():
    """Connect to mainframe, export data"""
    # Use JDBC or file transfer
    conn = db2_connection()
    cursor = conn.cursor()

    cursor.execute("""
        SELECT SSN, FIRST_NAME, LAST_NAME, DOB, BENEFIT_AMT
        FROM BENEFIT_TABLE
        WHERE LAST_MODIFIED >= ?
    """, (yesterday(),))

    # Write to staging file
    with open('/staging/benefits_extract.dat', 'w') as f:
        for row in cursor:
            f.write(format_fixed_width(row))

def transform_data():
    """Parse, validate, transform"""
    import pandas as pd

    # Read fixed-width file
    df = pd.read_fwf('/staging/benefits_extract.dat',
                     colspecs=[(0,9), (9,29), (29,49), (49,57), (57,67)],
                     names=['ssn', 'first_name', 'last_name', 'dob', 'benefit_amount'])

    # Data quality checks
    assert df['ssn'].str.match(r'^\d{9}$').all(), "Invalid SSN format"
    assert (df['benefit_amount'] >= 0).all(), "Negative benefit amounts"

    # Transform
    df['dob'] = pd.to_datetime(df['dob'], format='%Y%m%d')
    df['age'] = calculate_age(df['dob'])
    df['full_name'] = df['first_name'] + ' ' + df['last_name']

    # Enrich from reference data
    df = df.merge(state_codes, on='state_code', how='left')

    # Save to staging table
    df.to_sql('staging_benefits', postgres_engine, if_exists='replace')

def load_to_target():
    """Upsert to production database"""
    postgres_engine.execute("""
        INSERT INTO benefits (ssn, full_name, dob, age, benefit_amount, updated_at)
        SELECT ssn, full_name, dob, age, benefit_amount, NOW()
        FROM staging_benefits
        ON CONFLICT (ssn)
        DO UPDATE SET
            full_name = EXCLUDED.full_name,
            benefit_amount = EXCLUDED.benefit_amount,
            updated_at = EXCLUDED.updated_at
    """)

    # Reconciliation check
    source_count = count_rows('/staging/benefits_extract.dat')
    target_count = postgres_engine.execute("SELECT COUNT(*) FROM benefits").scalar()

    if source_count != target_count:
        raise Exception(f"Row count mismatch: {source_count} vs {target_count}")

# Define DAG
dag = DAG(
    'legacy_benefits_etl',
    default_args={'retries': 3, 'retry_delay': timedelta(minutes=5)},
    schedule_interval='0 2 * * *',  # 2 AM daily
    catchup=False
)

extract_task = PythonOperator(task_id='extract', python_callable=extract_from_legacy, dag=dag)
transform_task = PythonOperator(task_id='transform', python_callable=transform_data, dag=dag)
load_task = PythonOperator(task_id='load', python_callable=load_to_target, dag=dag)

extract_task >> transform_task >> load_task
```

### 6.1.5 Legacy Integration Decision Matrix

```yaml
integration_method_selection:
  real_time_api:
    use_when:
      - "User-facing transaction (< 2 second response needed)"
      - "Data changes frequently (inventory, account balances)"
      - "Two-way communication required"
    technology:
      - "REST API (if legacy supports)"
      - "SOAP web service (older systems)"
      - "Message queue (JMS, IBM MQ)"
    example: "Check eligibility during application process"

  batch_file_transfer:
    use_when:
      - "Large data volumes (millions of records)"
      - "Non-time-critical (daily/weekly updates acceptable)"
      - "Legacy system has no API capability"
    technology:
      - "SFTP file transfer"
      - "Database replication"
      - "ETL tools (Talend, Informatica, Apache NiFi)"
    example: "Nightly sync of benefit payment records"

  database_integration:
    use_when:
      - "Legacy system allows direct database access"
      - "Read-only access sufficient"
      - "Data relatively stable"
    technology:
      - "JDBC/ODBC connections"
      - "Database views"
      - "Change data capture (CDC)"
    example: "Read-only access to reference data (zip codes, tax rates)"
    warning: "Avoid for write operations (bypasses business logic)"

  screen_scraping:
    use_when:
      - "No other integration option available"
      - "Low volume transactions"
      - "Temporary solution only"
    technology:
      - "Robotic Process Automation (RPA)"
      - "Selenium, Puppeteer"
    example: "Automate data entry into legacy green-screen terminal"
    warning: "Brittle, breaks when UI changes, NOT recommended for production"
```

---

## 6.2 API-First vs Point-to-Point Architecture

### 6.2.1 Point-to-Point Integration (Anti-Pattern)

**Problem: Spaghetti Integration**

```
System A ←→ System B
   ↕          ↕
System C ←→ System D
   ↕          ↕
System E ←→ System F

Complexity: O(n²)
With 10 systems: 45 integration points
With 20 systems: 190 integration points
```

**Issues**:
- Each integration is custom-built
- No reusability
- Impossible to maintain
- No visibility into data flows
- Cannot enforce security/governance

### 6.2.2 API-First Architecture

**Hub-and-Spoke Model**:

```
           ┌─────────────────┐
           │   API GATEWAY   │
           │  (Central Hub)  │
           └────────┬────────┘
                    │
      ┌─────────────┼─────────────┐
      │             │             │
  ┌───▼───┐    ┌───▼───┐    ┌───▼───┐
  │Service│    │Service│    │Service│
  │   A   │    │   B   │    │   C   │
  └───────┘    └───────┘    └───────┘

Complexity: O(n)
With 10 systems: 10 integration points
With 20 systems: 20 integration points
```

**Benefits**:
```yaml
api_gateway_benefits:
  centralized_control:
    - authentication: "OAuth 2.0, API keys in one place"
    - authorization: "RBAC, ABAC enforcement"
    - rate_limiting: "Prevent abuse"
    - logging: "Audit trail of all API calls"

  abstraction:
    - version_management: "Support multiple API versions"
    - protocol_translation: "REST → SOAP, HTTP → gRPC"
    - response_transformation: "XML → JSON"

  reliability:
    - circuit_breaker: "Prevent cascade failures"
    - retry_logic: "Automatic retry with backoff"
    - caching: "Reduce backend load"
    - load_balancing: "Distribute traffic"

  analytics:
    - usage_metrics: "Which APIs are used, by whom"
    - performance_monitoring: "Latency, error rates"
    - capacity_planning: "Predict future needs"
```

### 6.2.3 API Gateway Implementation

**Technology Options**:
```yaml
api_gateway_comparison:
  kong:
    type: "Open source + Enterprise"
    architecture: "NGINX + Lua plugins"
    pros:
      - "High performance (10,000+ req/sec)"
      - "Plugin ecosystem (OAuth, rate limit, logging)"
      - "Kubernetes native"
    cons:
      - "PostgreSQL/Cassandra dependency"
      - "Complex plugin development"
    use_case: "High-traffic government portals"

  aws_api_gateway:
    type: "Managed service (AWS only)"
    architecture: "Serverless"
    pros:
      - "No infrastructure management"
      - "Auto-scaling"
      - "AWS service integration"
    cons:
      - "Vendor lock-in"
      - "Cost (per request pricing)"
    use_case: "AWS-native architectures"

  apigee:
    type: "Enterprise (Google Cloud)"
    architecture: "Full API management platform"
    pros:
      - "Developer portal"
      - "Analytics dashboard"
      - "API monetization"
    cons:
      - "Expensive ($$$)"
      - "Overkill for simple use cases"
    use_case: "Large-scale API program with external developers"

  tyk:
    type: "Open source + Enterprise"
    architecture: "Go-based, Redis backend"
    pros:
      - "GraphQL support"
      - "Multi-datacenter"
      - "Kubernetes operator"
    cons:
      - "Smaller community than Kong"
    use_case: "GraphQL-heavy applications"
```

**Kong Configuration Example**:
```yaml
# kong.yml
_format_version: "2.1"

services:
  - name: citizen-service
    url: https://citizens.internal.gov
    routes:
      - name: citizen-lookup
        paths:
          - /api/citizens
        methods:
          - GET
        strip_path: false

    plugins:
      - name: key-auth
        config:
          key_names:
            - apikey

      - name: rate-limiting
        config:
          minute: 100
          hour: 1000
          policy: local

      - name: cors
        config:
          origins:
            - https://portal.gov.uk
          methods:
            - GET
            - POST
          headers:
            - Authorization
            - Content-Type

      - name: request-transformer
        config:
          add:
            headers:
              - X-Forwarded-By:api-gateway

      - name: response-transformer
        config:
          remove:
            headers:
              - X-Internal-Server

      - name: prometheus
        config:
          status_code_metrics: true
          latency_metrics: true
```

### 6.2.4 API Design Standards

**RESTful API Best Practices**:
```yaml
url_structure:
  resources: "Use nouns, not verbs"
  examples:
    good:
      - "GET /api/v1/citizens/12345"
      - "POST /api/v1/applications"
      - "GET /api/v1/applications?status=pending"
    bad:
      - "GET /api/getCitizen?id=12345"
      - "POST /api/createApplication"

http_methods:
  GET: "Retrieve resource (idempotent)"
  POST: "Create new resource"
  PUT: "Replace entire resource (idempotent)"
  PATCH: "Partial update"
  DELETE: "Remove resource (idempotent)"

status_codes:
  2xx_success:
    - 200: "OK (GET, PUT, PATCH)"
    - 201: "Created (POST)"
    - 204: "No Content (DELETE)"

  4xx_client_errors:
    - 400: "Bad Request (validation error)"
    - 401: "Unauthorized (not authenticated)"
    - 403: "Forbidden (authenticated but not authorized)"
    - 404: "Not Found"
    - 429: "Too Many Requests (rate limit)"

  5xx_server_errors:
    - 500: "Internal Server Error"
    - 502: "Bad Gateway (upstream error)"
    - 503: "Service Unavailable (maintenance)"
    - 504: "Gateway Timeout"

versioning:
  method: "URL path (preferred for government APIs)"
  format: "/api/v1/resource"
  alternative: "Header-based (Accept: application/vnd.api.v1+json)"

pagination:
  method: "Cursor-based for large datasets"
  example:
    request: "GET /api/v1/applications?limit=50&cursor=eyJpZCI6MTIzfQ"
    response:
      data: [...]
      pagination:
        next_cursor: "eyJpZCI6MTczfQ"
        has_more: true

error_response:
  format: "RFC 7807 Problem Details"
  example:
    type: "https://api.gov.uk/errors/validation-error"
    title: "Your request contains invalid data"
    status: 400
    detail: "Date of birth must be in the past"
    instance: "/api/v1/applications/123"
    errors:
      - field: "dateOfBirth"
        message: "Must be a date in the past"
        code: "PAST_DATE_REQUIRED"
```

**OpenAPI 3.0 Specification**:
```yaml
openapi: 3.0.0
info:
  title: Citizen Services API
  version: 1.0.0
  description: API for accessing citizen services
  contact:
    name: API Support
    email: api-support@gov.uk

servers:
  - url: https://api.gov.uk/v1
    description: Production
  - url: https://api-staging.gov.uk/v1
    description: Staging

security:
  - ApiKeyAuth: []

paths:
  /citizens/{citizenId}:
    get:
      summary: Get citizen by ID
      parameters:
        - name: citizenId
          in: path
          required: true
          schema:
            type: string
            pattern: '^[A-Z]{2}[0-9]{6}$'
      responses:
        '200':
          description: Citizen found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Citizen'
        '404':
          description: Citizen not found
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Error'

components:
  schemas:
    Citizen:
      type: object
      required:
        - id
        - firstName
        - lastName
      properties:
        id:
          type: string
          example: "AB123456"
        firstName:
          type: string
          example: "Jane"
        lastName:
          type: string
          example: "Doe"
        dateOfBirth:
          type: string
          format: date
          example: "1985-03-15"

  securitySchemes:
    ApiKeyAuth:
      type: apiKey
      in: header
      name: X-API-Key
```

---

## 6.3 Event-Driven Architecture

### 6.3.1 Event-Driven vs Request-Response

**Request-Response (Synchronous)**:
```
Service A → (HTTP Request) → Service B
Service A ← (HTTP Response) ← Service B

Pros: Simple, easy to understand, immediate feedback
Cons: Tight coupling, cascading failures, blocking
```

**Event-Driven (Asynchronous)**:
```
Service A → (Publish Event) → Event Broker
                                    ↓
                         (Subscribe) Service B
                                    ↓
                         (Subscribe) Service C

Pros: Loose coupling, scalable, resilient
Cons: Eventual consistency, harder to debug, complexity
```

### 6.3.2 Event Broker Comparison

```yaml
kafka:
  type: "Distributed streaming platform"
  throughput: "Millions of messages/second"
  durability: "Persistent log (configurable retention)"
  ordering: "Per-partition ordering guaranteed"
  use_case: "High-volume, real-time data streaming"
  example: "CDC from legacy database, analytics pipelines"

  pros:
    - "Extremely high throughput"
    - "Replay events (time-travel debugging)"
    - "Stream processing (Kafka Streams)"

  cons:
    - "Complex to operate (Zookeeper, brokers, partitions)"
    - "Overkill for low-volume"

rabbitmq:
  type: "Message broker"
  throughput: "Tens of thousands of messages/second"
  durability: "Durable queues (persistent to disk)"
  ordering: "Queue ordering (FIFO)"
  use_case: "Work queues, task distribution, RPC"
  example: "Background jobs (email sending, report generation)"

  pros:
    - "Simple to operate"
    - "Flexible routing (exchanges, bindings)"
    - "Multiple protocols (AMQP, MQTT, STOMP)"

  cons:
    - "Lower throughput than Kafka"
    - "No built-in replay"

aws_eventbridge:
  type: "Serverless event bus (AWS)"
  throughput: "Moderate (10,000 events/sec per bus)"
  durability: "24-hour archive, long-term to S3"
  use_case: "AWS-native event routing, SaaS integrations"
  example: "Trigger Lambda on S3 upload, route to multiple services"

  pros:
    - "No infrastructure management"
    - "Schema registry"
    - "SaaS integrations (Salesforce, Shopify, etc.)"

  cons:
    - "AWS-only"
    - "Limited throughput"
    - "Pay-per-event"
```

### 6.3.3 Event Sourcing Pattern

**Concept**: Store all changes as a sequence of events, not current state.

**Traditional State Storage**:
```sql
-- Only current state stored
UPDATE citizens SET address = '123 Main St' WHERE id = 'AB123456';

-- Historical data lost
```

**Event Sourcing**:
```json
[
  {
    "eventId": "evt_001",
    "eventType": "CitizenRegistered",
    "timestamp": "2020-01-15T10:00:00Z",
    "data": {
      "citizenId": "AB123456",
      "firstName": "Jane",
      "lastName": "Doe"
    }
  },
  {
    "eventId": "evt_002",
    "eventType": "AddressChanged",
    "timestamp": "2022-06-20T14:30:00Z",
    "data": {
      "citizenId": "AB123456",
      "oldAddress": "456 Oak Ave",
      "newAddress": "123 Main St"
    }
  },
  {
    "eventId": "evt_003",
    "eventType": "NameChanged",
    "timestamp": "2023-08-10T09:15:00Z",
    "data": {
      "citizenId": "AB123456",
      "oldName": "Jane Doe",
      "newName": "Jane Smith"
    }
  }
]

// Current state = replay all events
```

**Benefits**:
- Complete audit trail (who changed what when)
- Time-travel (reconstruct state at any point in time)
- Event replay (rebuild read models, analytics)

**Implementation**:
```typescript
// Event Store
class EventStore {
  async append(event: Event): Promise<void> {
    await this.db.insert('events', {
      event_id: event.id,
      aggregate_id: event.aggregateId,
      event_type: event.type,
      event_data: JSON.stringify(event.data),
      timestamp: event.timestamp,
      version: event.version
    });

    // Publish to event broker
    await this.eventBus.publish(event);
  }

  async getEvents(aggregateId: string, fromVersion = 0): Promise<Event[]> {
    const rows = await this.db.query(
      'SELECT * FROM events WHERE aggregate_id = ? AND version >= ? ORDER BY version',
      [aggregateId, fromVersion]
    );

    return rows.map(row => this.deserialize(row));
  }
}

// Aggregate (business entity)
class Citizen {
  private id: string;
  private version: number = 0;
  private changes: Event[] = [];

  // Current state (derived from events)
  private firstName: string;
  private lastName: string;
  private address: string;

  // Load from event history
  static async load(id: string, eventStore: EventStore): Promise<Citizen> {
    const events = await eventStore.getEvents(id);
    const citizen = new Citizen(id);

    for (const event of events) {
      citizen.applyEvent(event);
    }

    return citizen;
  }

  // Business logic: Change address
  changeAddress(newAddress: string): void {
    if (newAddress === this.address) {
      throw new Error('Address is already set to this value');
    }

    const event = new AddressChangedEvent({
      citizenId: this.id,
      oldAddress: this.address,
      newAddress: newAddress,
      version: this.version + 1
    });

    this.applyEvent(event);
    this.changes.push(event);
  }

  // Apply event to update internal state
  private applyEvent(event: Event): void {
    switch(event.type) {
      case 'CitizenRegistered':
        this.firstName = event.data.firstName;
        this.lastName = event.data.lastName;
        break;

      case 'AddressChanged':
        this.address = event.data.newAddress;
        break;

      case 'NameChanged':
        this.firstName = event.data.newFirstName;
        this.lastName = event.data.newLastName;
        break;
    }

    this.version = event.version;
  }

  // Save changes
  async save(eventStore: EventStore): Promise<void> {
    for (const event of this.changes) {
      await eventStore.append(event);
    }

    this.changes = [];
  }
}

// Usage
const citizen = await Citizen.load('AB123456', eventStore);
citizen.changeAddress('789 Elm St');
await citizen.save(eventStore);
```

### 6.3.4 CQRS (Command Query Responsibility Segregation)

**Concept**: Separate write model (commands) from read model (queries).

```
WRITE SIDE (Commands):
User → Command → Aggregate → Events → Event Store
                                   ↓
                            Event Broker
                                   ↓
READ SIDE (Queries):              ↓
User ← Query ← Read Model ← Event Handler
```

**Benefits**:
- Optimize read and write independently
- Scale reads separately from writes
- Multiple read models for different use cases

**Implementation**:
```typescript
// WRITE SIDE

// Command
interface ChangeAddressCommand {
  citizenId: string;
  newAddress: string;
  changedBy: string;
}

// Command Handler
class ChangeAddressCommandHandler {
  async handle(command: ChangeAddressCommand): Promise<void> {
    // 1. Load aggregate from event store
    const citizen = await Citizen.load(command.citizenId, this.eventStore);

    // 2. Execute business logic
    citizen.changeAddress(command.newAddress);

    // 3. Save events
    await citizen.save(this.eventStore);
  }
}

// READ SIDE

// Read Model (optimized for queries)
interface CitizenReadModel {
  id: string;
  fullName: string;
  currentAddress: string;
  addressHistory: AddressHistory[];
  lastUpdated: Date;
}

// Event Handler (updates read model)
class AddressChangedEventHandler {
  async handle(event: AddressChangedEvent): Promise<void> {
    // Update denormalized read model
    await this.db.query(`
      UPDATE citizen_read_model
      SET current_address = ?,
          address_history = json_array_append(address_history, '$', ?),
          last_updated = ?
      WHERE id = ?
    `, [
      event.data.newAddress,
      JSON.stringify({
        address: event.data.oldAddress,
        from: event.data.movedInDate,
        to: event.timestamp
      }),
      event.timestamp,
      event.data.citizenId
    ]);
  }
}

// Query Handler
class GetCitizenQueryHandler {
  async handle(citizenId: string): Promise<CitizenReadModel> {
    // Fast query from denormalized read model
    const result = await this.db.query(
      'SELECT * FROM citizen_read_model WHERE id = ?',
      [citizenId]
    );

    return result[0];
  }
}
```

### 6.3.5 Event-Driven Implementation Checklist

```yaml
event_design:
  - [ ] Events named in past tense (AddressChanged, not ChangeAddress)
  - [ ] Events immutable (never modify existing events)
  - [ ] Events contain all necessary data (no need to query for context)
  - [ ] Event schema versioned (support evolution)
  - [ ] Event IDs unique and ordered (UUIDv7 or Snowflake ID)

reliability:
  - [ ] At-least-once delivery guaranteed
  - [ ] Idempotent event handlers (handle duplicates)
  - [ ] Dead letter queue for failed events
  - [ ] Retry with exponential backoff
  - [ ] Event store backups automated

monitoring:
  - [ ] Event publication lag monitored
  - [ ] Event processing lag monitored
  - [ ] Failed event alerts configured
  - [ ] Event throughput tracked

governance:
  - [ ] Event catalog documented (what events exist)
  - [ ] Event ownership defined (which team owns each event)
  - [ ] Breaking changes prohibited (add new events instead)
  - [ ] Event retention policy enforced
```

---

## 6.4 Microservices vs Monolithic Decision Matrix

### 6.4.1 Monolith-First Approach

**Recommendation for New Services**: Start with a well-structured monolith, extract microservices later when needed.

**Rationale**:
```yaml
monolith_advantages:
  - simple_deployment: "Single artifact to deploy"
  - easy_debugging: "Single codebase, stack traces cross modules"
  - fast_development: "No network calls, easy refactoring"
  - lower_operational_cost: "One server vs dozen containers"

microservices_premature:
  - complexity: "Distributed debugging, network failures"
  - overhead: "API design, service discovery, monitoring"
  - team_size: "Requires multiple teams"
  - unknown_boundaries: "Don't know service boundaries yet"

when_to_split:
  - team_growth: "When > 10 developers on codebase"
  - scaling_needs: "When different modules need different scaling"
  - deployment_frequency: "When teams want independent releases"
  - clear_boundaries: "When domain boundaries are well-understood"
```

### 6.4.2 Monolith Architecture (Modular)

**Structured Monolith**:
```
monolith-application/
├── src/
│   ├── modules/
│   │   ├── citizens/
│   │   │   ├── domain/      # Business logic
│   │   │   ├── application/ # Use cases
│   │   │   ├── infrastructure/ # Database, external APIs
│   │   │   └── presentation/   # HTTP controllers
│   │   ├── applications/
│   │   │   ├── domain/
│   │   │   ├── application/
│   │   │   ├── infrastructure/
│   │   │   └── presentation/
│   │   └── payments/
│   │       ├── domain/
│   │       ├── application/
│   │       ├── infrastructure/
│   │       └── presentation/
│   └── shared/
│       ├── database/
│       ├── authentication/
│       └── logging/
└── tests/

Module Rules:
- No direct imports across modules (use interfaces)
- Each module has its own database schema
- Communicate via in-process events or interfaces
```

**Dependency Rules**:
```typescript
// ❌ BAD: Direct dependency between modules
// applications/service.ts
import { CitizenRepository } from '../citizens/repository';

class ApplicationService {
  constructor(private citizenRepo: CitizenRepository) {}

  async submit(application: Application) {
    const citizen = await this.citizenRepo.findById(application.citizenId);
    // ...
  }
}

// ✅ GOOD: Dependency through interface
// applications/service.ts
interface CitizenLookup {
  findById(id: string): Promise<CitizenSummary>;
}

class ApplicationService {
  constructor(private citizenLookup: CitizenLookup) {}

  async submit(application: Application) {
    const citizen = await this.citizenLookup.findById(application.citizenId);
    // ...
  }
}

// citizens/adapter.ts (implementation)
class CitizenLookupAdapter implements CitizenLookup {
  async findById(id: string): Promise<CitizenSummary> {
    const citizen = await this.repository.findById(id);
    return { id: citizen.id, name: citizen.fullName };
  }
}
```

### 6.4.3 Microservices Decision Criteria

```yaml
split_into_microservice_when:
  business_reasons:
    - independent_scaling: "Service has different scaling needs (10x traffic)"
    - team_autonomy: "Team wants independent deployment"
    - technology_diversity: "Different tech stack required (e.g., Python ML model)"

  technical_reasons:
    - clear_bounded_context: "Domain boundary is stable and well-understood"
    - low_coupling: "Few dependencies on other modules"
    - high_cohesion: "Related functionality grouped together"

  organizational_reasons:
    - team_size: "Module maintained by dedicated team (3-9 people)"
    - release_cadence: "Needs faster/slower release cycle than main app"
    - compliance: "Different compliance requirements (PCI, HIPAA)"

do_not_split_when:
  - unclear_boundaries: "Don't know where to draw lines"
  - high_coupling: "Constant cross-module communication"
  - small_team: "< 10 total developers"
  - early_stage: "Product is still finding product-market fit"
```

### 6.4.4 Microservices Challenges & Solutions

**Challenge 1: Distributed Data**

```yaml
problem: "Need data from multiple services"

antipattern: "Synchronous chain of API calls"
┌─────────┐  API call   ┌─────────┐  API call   ┌─────────┐
│Frontend │──────────→  │Service A│──────────→  │Service B│
└─────────┘             └─────────┘             └─────────┘
  (Latency = Sum of all services, cascading failures)

solution_1: "API Gateway with parallel requests"
                ┌─────────────┐
                │ API Gateway │
                └──────┬──────┘
          ┌────────────┼────────────┐
    Parallel│      Parallel│    Parallel│
          ↓             ↓             ↓
    ┌─────────┐   ┌─────────┐   ┌─────────┐
    │Service A│   │Service B│   │Service C│
    └─────────┘   └─────────┘   └─────────┘
  (Latency = Max of services, not sum)

solution_2: "Backend for Frontend (BFF)"
┌─────────┐        ┌─────────┐
│ Web UI  │──────→ │ Web BFF │──┐
└─────────┘        └─────────┘  │
                                │  ┌─────────┐
┌─────────┐        ┌─────────┐  ├→│Service A│
│Mobile UI│──────→ │ Mob BFF │──┤  └─────────┘
└─────────┘        └─────────┘  │  ┌─────────┐
                                └→│Service B│
                                   └─────────┘
  (BFF aggregates data, returns exactly what UI needs)

solution_3: "Event-driven data replication"
Service A → (Publish Event) → Service B consumes, updates local cache
  (Each service has denormalized copy of data it needs)
```

**Challenge 2: Distributed Transactions**

See section 6.7 for detailed transaction patterns.

**Challenge 3: Service Discovery**

```typescript
// Client-side discovery (service calls registry)
class ServiceDiscovery {
  async getServiceUrl(serviceName: string): Promise<string> {
    const instances = await this.consul.getHealthyInstances(serviceName);

    if (instances.length === 0) {
      throw new Error(`No healthy instances of ${serviceName}`);
    }

    // Client-side load balancing
    const instance = instances[Math.floor(Math.random() * instances.length)];

    return `http://${instance.address}:${instance.port}`;
  }
}

// Server-side discovery (DNS-based, Kubernetes)
const serviceUrl = 'http://citizen-service.default.svc.cluster.local';
// Kubernetes DNS resolves to pod IPs, built-in load balancing
```

---

## 6.5 Data Synchronization Patterns

### 6.5.1 Change Data Capture (CDC)

**Concept**: Track changes in database, propagate to other systems.

```yaml
cdc_tools:
  debezium:
    method: "Read database transaction log"
    supported_databases:
      - PostgreSQL: "Logical replication"
      - MySQL: "Binary log (binlog)"
      - MongoDB: "Oplog"
      - SQL_Server: "Change Tracking"
    output: "Kafka topics (one per table)"

  aws_dms:
    method: "Database Migration Service"
    use_case: "AWS-native CDC, legacy migration"

  qlik_replicate:
    method: "Log-based CDC"
    use_case: "Enterprise data replication"
```

**Debezium Example**:
```yaml
# Debezium connector configuration
name: "citizen-db-connector"
config:
  connector.class: "io.debezium.connector.postgresql.PostgresConnector"
  database.hostname: "postgres.internal.gov"
  database.port: "5432"
  database.user: "debezium_user"
  database.password: "${DB_PASSWORD}"
  database.dbname: "citizen_db"
  database.server.name: "citizen_db_server"

  # Track specific tables
  table.include.list: "public.citizens,public.applications"

  # Output to Kafka
  topic.prefix: "cdc"

  # Capture schema changes
  include.schema.changes: true

  # Snapshot existing data on first run
  snapshot.mode: "initial"
```

**CDC Event Example**:
```json
{
  "before": {
    "id": "AB123456",
    "first_name": "Jane",
    "last_name": "Doe",
    "address": "456 Oak Ave"
  },
  "after": {
    "id": "AB123456",
    "first_name": "Jane",
    "last_name": "Doe",
    "address": "123 Main St"
  },
  "source": {
    "version": "1.9.0",
    "connector": "postgresql",
    "name": "citizen_db_server",
    "ts_ms": 1638360000000,
    "snapshot": "false",
    "db": "citizen_db",
    "schema": "public",
    "table": "citizens",
    "txId": 12345,
    "lsn": 23456789,
    "xmin": null
  },
  "op": "u",  // Operation: c=create, u=update, d=delete, r=read
  "ts_ms": 1638360000123
}
```

### 6.5.2 Dual Writes (Anti-Pattern)

```typescript
// ❌ ANTI-PATTERN: Dual writes (race condition, inconsistency)
async function updateCitizen(citizenId: string, newData: CitizenData) {
  // Write to database
  await database.update('citizens', citizenId, newData);

  // Write to search index
  await elasticsearch.index('citizens', citizenId, newData);

  // ⚠️ What if ES indexing fails? Data is inconsistent!
  // ⚠️ What if app crashes between the two writes?
}

// ✅ BETTER: Write to database, CDC to search index
async function updateCitizen(citizenId: string, newData: CitizenData) {
  // Single source of truth: database
  await database.update('citizens', citizenId, newData);

  // Debezium CDC automatically syncs to Elasticsearch
  // (Eventually consistent, but guaranteed to sync)
}

// ✅ ALTERNATIVE: Transactional outbox pattern
async function updateCitizen(citizenId: string, newData: CitizenData) {
  await database.transaction(async (trx) => {
    // Update main table
    await trx.update('citizens', citizenId, newData);

    // Write to outbox table (same transaction)
    await trx.insert('outbox_events', {
      aggregate_id: citizenId,
      event_type: 'CitizenUpdated',
      event_data: JSON.stringify(newData)
    });
  });

  // Separate process polls outbox table, publishes to Kafka
  // Deletes from outbox after successful publish
}
```

### 6.5.3 Data Replication Strategies

```yaml
full_replication:
  description: "Copy entire dataset to target system"
  use_when:
    - "Small dataset (< 100GB)"
    - "Target needs complete copy for queries"
  frequency: "Daily or weekly"
  example: "Export citizen database to data warehouse"

incremental_replication:
  description: "Copy only changed records since last sync"
  use_when:
    - "Large dataset (> 100GB)"
    - "Frequent updates"
  method: "Track 'last_modified' timestamp or CDC"
  example: "Sync only today's new applications"

real_time_replication:
  description: "Stream changes immediately (< 1 second lag)"
  use_when:
    - "Low latency required"
    - "High consistency needed"
  method: "CDC (Debezium), database replication (PostgreSQL logical replication)"
  example: "Replicate citizen changes to search index"
```

---

## 6.6 Error Handling & Resilience

### 6.6.1 Circuit Breaker Pattern

**Concept**: Stop calling failing service to prevent cascade failures.

```
CLOSED (Normal Operation)
┌─────────────┐
│  Service A  │─────→ Service B (working)
└─────────────┘
         ↓
   Success count: 100
   Failure count: 0


OPEN (Service B is down)
┌─────────────┐
│  Service A  │─────X Service B (failing)
└─────────────┘
         ↓
   Failure count: 10 (threshold exceeded)
   Circuit OPEN: Fail fast, don't call Service B
   Wait 60 seconds before trying again


HALF-OPEN (Testing if recovered)
┌─────────────┐
│  Service A  │─────? Service B (testing)
└─────────────┘
         ↓
   Allow 1 request through
   If success → CLOSED
   If failure → OPEN
```

**Implementation**:
```typescript
enum CircuitBreakerState {
  CLOSED,
  OPEN,
  HALF_OPEN
}

class CircuitBreaker {
  private state: CircuitBreakerState = CircuitBreakerState.CLOSED;
  private failureCount: number = 0;
  private successCount: number = 0;
  private lastFailureTime: number = 0;

  constructor(
    private failureThreshold: number = 5,
    private timeout: number = 60000, // 60 seconds
    private halfOpenSuccessThreshold: number = 2
  ) {}

  async execute<T>(fn: () => Promise<T>): Promise<T> {
    if (this.state === CircuitBreakerState.OPEN) {
      // Check if timeout has elapsed
      if (Date.now() - this.lastFailureTime >= this.timeout) {
        this.state = CircuitBreakerState.HALF_OPEN;
        this.successCount = 0;
      } else {
        throw new Error('Circuit breaker is OPEN');
      }
    }

    try {
      const result = await fn();

      // Success
      this.onSuccess();
      return result;

    } catch (error) {
      // Failure
      this.onFailure();
      throw error;
    }
  }

  private onSuccess(): void {
    this.failureCount = 0;

    if (this.state === CircuitBreakerState.HALF_OPEN) {
      this.successCount++;

      if (this.successCount >= this.halfOpenSuccessThreshold) {
        // Enough successes, close circuit
        this.state = CircuitBreakerState.CLOSED;
      }
    }
  }

  private onFailure(): void {
    this.failureCount++;
    this.lastFailureTime = Date.now();

    if (this.failureCount >= this.failureThreshold) {
      // Too many failures, open circuit
      this.state = CircuitBreakerState.OPEN;
    }
  }
}

// Usage
const breaker = new CircuitBreaker();

try {
  const data = await breaker.execute(() =>
    fetch('https://unreliable-service.gov/api/data')
  );
} catch (error) {
  // Fallback logic
  const cachedData = await cache.get('fallback_data');
  return cachedData;
}
```

### 6.6.2 Retry with Exponential Backoff

```typescript
class RetryPolicy {
  async executeWithRetry<T>(
    fn: () => Promise<T>,
    options: {
      maxRetries?: number;
      initialDelay?: number;
      maxDelay?: number;
      backoffMultiplier?: number;
      retryableErrors?: string[];
    } = {}
  ): Promise<T> {
    const {
      maxRetries = 3,
      initialDelay = 1000,
      maxDelay = 30000,
      backoffMultiplier = 2,
      retryableErrors = ['ETIMEDOUT', 'ECONNRESET', 'ENOTFOUND']
    } = options;

    let lastError: Error;
    let delay = initialDelay;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
      try {
        return await fn();
      } catch (error) {
        lastError = error;

        // Don't retry if not a retryable error
        if (!this.isRetryable(error, retryableErrors)) {
          throw error;
        }

        // Don't retry if last attempt
        if (attempt === maxRetries) {
          break;
        }

        // Wait before retry
        await this.sleep(delay);

        // Exponential backoff with jitter
        delay = Math.min(
          delay * backoffMultiplier + Math.random() * 1000,
          maxDelay
        );

        console.log(`Retry attempt ${attempt + 1}/${maxRetries} after ${delay}ms`);
      }
    }

    throw lastError;
  }

  private isRetryable(error: any, retryableErrors: string[]): boolean {
    // Network errors
    if (retryableErrors.includes(error.code)) {
      return true;
    }

    // 5xx server errors (retry), not 4xx client errors (don't retry)
    if (error.response && error.response.status >= 500) {
      return true;
    }

    // 429 Too Many Requests (rate limit)
    if (error.response && error.response.status === 429) {
      return true;
    }

    return false;
  }

  private sleep(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}

// Usage
const retry = new RetryPolicy();

const data = await retry.executeWithRetry(
  () => fetch('https://api.gov.uk/data'),
  {
    maxRetries: 5,
    initialDelay: 500,
    maxDelay: 10000
  }
);
```

### 6.6.3 Bulkhead Pattern

**Concept**: Isolate resources to prevent total system failure.

```
WITHOUT BULKHEAD (shared thread pool)
┌─────────────────────────────────────┐
│  Shared Thread Pool (10 threads)   │
├─────────────────────────────────────┤
│ [1][2][3][4][5][6][7][8][9][10]    │
│  ↑   ↑   ↑   ↑   ↑   ↑   ↑   ↑     │
│  │   │   │   │   │   │   │   │     │
│  Slow Service B calls (blocked)    │
└─────────────────────────────────────┘
⚠️ All threads consumed by slow Service B
   Service A calls also blocked!


WITH BULKHEAD (isolated thread pools)
┌──────────────┐  ┌─────────────────┐
│  Service A   │  │   Service B     │
│  Pool (5)    │  │   Pool (5)      │
├──────────────┤  ├─────────────────┤
│ [1][2][3]    │  │ [1][2][3][4][5] │
│              │  │  ↑   ↑   ↑   ↑  │
│              │  │  Slow calls     │
└──────────────┘  └─────────────────┘
✅ Service A unaffected by Service B slowness
```

**Implementation**:
```typescript
// Using p-limit library
import pLimit from 'p-limit';

class BulkheadExecutor {
  private limiters: Map<string, any> = new Map();

  constructor(private defaultConcurrency: number = 10) {}

  createBulkhead(name: string, concurrency: number): void {
    this.limiters.set(name, pLimit(concurrency));
  }

  async execute<T>(bulkheadName: string, fn: () => Promise<T>): Promise<T> {
    const limiter = this.limiters.get(bulkheadName);

    if (!limiter) {
      throw new Error(`Bulkhead ${bulkheadName} not found`);
    }

    return await limiter(fn);
  }
}

// Setup bulkheads
const bulkhead = new BulkheadExecutor();
bulkhead.createBulkhead('citizen-service', 5);
bulkhead.createBulkhead('payment-service', 3);

// Use bulkheads
await bulkhead.execute('citizen-service', async () => {
  return await citizenService.getCitizen(citizenId);
});

await bulkhead.execute('payment-service', async () => {
  return await paymentService.processPayment(paymentData);
});
```

### 6.6.4 Timeout Pattern

```typescript
function withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
  return Promise.race([
    promise,
    new Promise<T>((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), timeoutMs)
    )
  ]);
}

// Usage
try {
  const data = await withTimeout(
    fetch('https://slow-service.gov/api/data'),
    5000  // 5 second timeout
  );
} catch (error) {
  if (error.message === 'Timeout') {
    // Handle timeout
    console.error('Service took too long to respond');
  }
}
```

### 6.6.5 Dead Letter Queue (DLQ)

```typescript
class MessageProcessor {
  async processMessage(message: Message): Promise<void> {
    const maxRetries = 3;

    try {
      // Process message
      await this.handleMessage(message);

      // Acknowledge success
      await this.queue.ack(message);

    } catch (error) {
      message.retryCount = (message.retryCount || 0) + 1;

      if (message.retryCount >= maxRetries) {
        // Move to dead letter queue
        await this.deadLetterQueue.send({
          ...message,
          error: error.message,
          failedAt: new Date()
        });

        // Acknowledge (remove from main queue)
        await this.queue.ack(message);

        // Alert operations team
        await this.alerting.sendAlert({
          severity: 'high',
          message: `Message sent to DLQ after ${maxRetries} retries`,
          details: { messageId: message.id, error: error.message }
        });

      } else {
        // Retry (nack with requeue)
        await this.queue.nack(message, { requeue: true });
      }
    }
  }
}
```

---

## 6.7 Transaction Management

### 6.7.1 Saga Pattern

**Problem**: Distributed transactions across multiple services.

**Two-Phase Commit (NOT recommended)**:
```
Coordinator → Service A: Prepare
           → Service B: Prepare
           ← Service A: OK
           ← Service B: OK
           → Service A: Commit
           → Service B: Commit

Issues:
- Blocking (locks held during prepare phase)
- Single point of failure (coordinator)
- Not scalable
```

**Saga Pattern (Recommended)**:

**Choreography (Event-Driven)**:
```
Order Service    Payment Service    Inventory Service
     │                  │                   │
     │ OrderCreated     │                   │
     ├─────────────────>│                   │
     │                  │ PaymentProcessed  │
     │                  ├──────────────────>│
     │                  │                   │ InventoryReserved
     │                  │<──────────────────┤
     │                  │                   │
     │ OrderCompleted ←─┴───────────────────┘


Failure (Compensating Transactions):
Order Service    Payment Service    Inventory Service
     │                  │                   │
     │ OrderCreated     │                   │
     ├─────────────────>│                   │
     │                  │ PaymentProcessed  │
     │                  ├──────────────────>│
     │                  │                   │ InventoryReservationFailed
     │                  │<──────────────────┤
     │                  │ PaymentRefunded   │
     │<─────────────────┤                   │
     │ OrderCancelled   │                   │
```

**Implementation**:
```typescript
// Saga: Citizen Application Process
// Steps: 1) Create application, 2) Reserve appointment, 3) Send confirmation

// Order Service
class ApplicationService {
  async submitApplication(data: ApplicationData): Promise<string> {
    // Step 1: Create application (local transaction)
    const application = await this.repository.create({
      ...data,
      status: 'PENDING'
    });

    // Publish event
    await this.eventBus.publish(new ApplicationCreatedEvent({
      applicationId: application.id,
      citizenId: data.citizenId,
      serviceType: data.serviceType
    }));

    return application.id;
  }

  // Compensating transaction
  async cancelApplication(applicationId: string, reason: string): Promise<void> {
    await this.repository.update(applicationId, {
      status: 'CANCELLED',
      cancellationReason: reason
    });

    await this.eventBus.publish(new ApplicationCancelledEvent({
      applicationId,
      reason
    }));
  }
}

// Appointment Service (event handler)
class AppointmentEventHandler {
  async onApplicationCreated(event: ApplicationCreatedEvent): Promise<void> {
    try {
      // Step 2: Reserve appointment
      const appointment = await this.appointmentService.reserve({
        applicationId: event.applicationId,
        citizenId: event.citizenId
      });

      // Publish success event
      await this.eventBus.publish(new AppointmentReservedEvent({
        applicationId: event.applicationId,
        appointmentId: appointment.id,
        appointmentTime: appointment.time
      }));

    } catch (error) {
      // Publish failure event (triggers compensation)
      await this.eventBus.publish(new AppointmentReservationFailedEvent({
        applicationId: event.applicationId,
        reason: error.message
      }));
    }
  }

  // Compensating transaction
  async onApplicationCancelled(event: ApplicationCancelledEvent): Promise<void> {
    // Cancel appointment
    await this.appointmentService.cancel(event.applicationId);
  }
}

// Notification Service (event handler)
class NotificationEventHandler {
  async onAppointmentReserved(event: AppointmentReservedEvent): Promise<void> {
    try {
      // Step 3: Send confirmation
      await this.notificationService.sendEmail({
        to: event.citizenEmail,
        subject: 'Application Confirmed',
        body: `Your appointment is scheduled for ${event.appointmentTime}`
      });

      // Publish success event
      await this.eventBus.publish(new ApplicationCompletedEvent({
        applicationId: event.applicationId
      }));

    } catch (error) {
      // Notification failure doesn't require compensation
      // (Application and appointment already created)
      // Log error and retry later
      console.error('Failed to send notification:', error);
    }
  }
}

// Application Service (event handler for completion)
class ApplicationCompletionHandler {
  async onApplicationCompleted(event: ApplicationCompletedEvent): Promise<void> {
    await this.repository.update(event.applicationId, {
      status: 'CONFIRMED'
    });
  }

  async onAppointmentReservationFailed(event: AppointmentReservationFailedEvent): Promise<void> {
    // Trigger compensation
    await this.applicationService.cancelApplication(
      event.applicationId,
      event.reason
    );
  }
}
```

**Orchestration (Coordinator)**:
```typescript
// Saga Orchestrator (alternative to choreography)
class ApplicationSagaOrchestrator {
  async execute(data: ApplicationData): Promise<SagaResult> {
    const sagaId = generateId();
    const sagaLog = new SagaLog(sagaId);

    try {
      // Step 1: Create application
      const applicationId = await this.executeStep(
        () => this.applicationService.createApplication(data),
        () => this.applicationService.deleteApplication(applicationId),
        sagaLog
      );

      // Step 2: Reserve appointment
      const appointmentId = await this.executeStep(
        () => this.appointmentService.reserve({ applicationId }),
        () => this.appointmentService.cancel(appointmentId),
        sagaLog
      );

      // Step 3: Send notification
      await this.executeStep(
        () => this.notificationService.send({ applicationId, appointmentId }),
        () => {}, // No compensation for notification
        sagaLog
      );

      // Mark saga complete
      await sagaLog.markComplete();

      return { success: true, applicationId };

    } catch (error) {
      // Execute compensating transactions in reverse order
      await this.compensate(sagaLog);

      return { success: false, error: error.message };
    }
  }

  private async executeStep<T>(
    action: () => Promise<T>,
    compensation: (result: T) => Promise<void>,
    sagaLog: SagaLog
  ): Promise<T> {
    const result = await action();

    // Log step for compensation
    sagaLog.addStep({ result, compensation });

    return result;
  }

  private async compensate(sagaLog: SagaLog): Promise<void> {
    // Execute compensating transactions in reverse order
    const steps = sagaLog.getSteps().reverse();

    for (const step of steps) {
      try {
        await step.compensation(step.result);
      } catch (error) {
        // Log compensation failure (manual intervention required)
        console.error('Compensation failed:', error);
      }
    }

    await sagaLog.markCompensated();
  }
}
```

### 6.7.2 Eventual Consistency

```yaml
concept: "Accept that data will be inconsistent temporarily, but will eventually converge"

example:
  scenario: "User changes address"

  immediate_state:
    - profile_service: "Address updated to '123 Main St'"
    - notification_service: "Still has old address '456 Oak Ave'"
    - payment_service: "Still has old address '456 Oak Ave'"

  eventual_state_after_sync:
    - profile_service: "123 Main St"
    - notification_service: "123 Main St (updated via event)"
    - payment_service: "123 Main St (updated via event)"

  user_experience:
    - "User sees new address immediately in profile"
    - "Notifications may go to old address for a few seconds"
    - "System displays warning: 'Your information is being updated across all services'"

handling_conflicts:
  last_write_wins: "Timestamp-based, latest update wins"
  version_vectors: "Track causality, detect conflicts"
  application_merge: "Custom business logic to resolve"
```

---

## 6.8 Integration Testing Strategies

### 6.8.1 Contract Testing

**Consumer-Driven Contracts (Pact)**:

```typescript
// Consumer test (Application Service)
import { Pact } from '@pact-foundation/pact';

describe('Citizen Service Contract', () => {
  const provider = new Pact({
    consumer: 'ApplicationService',
    provider: 'CitizenService'
  });

  beforeAll(() => provider.setup());
  afterEach(() => provider.verify());
  afterAll(() => provider.finalize());

  it('should get citizen by ID', async () => {
    // Define expected interaction
    await provider.addInteraction({
      state: 'citizen AB123456 exists',
      uponReceiving: 'a request for citizen AB123456',
      withRequest: {
        method: 'GET',
        path: '/api/citizens/AB123456',
        headers: { 'Authorization': 'Bearer token123' }
      },
      willRespondWith: {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
        body: {
          id: 'AB123456',
          firstName: 'Jane',
          lastName: 'Doe'
        }
      }
    });

    // Execute consumer code
    const citizen = await applicationService.getCitizen('AB123456');

    expect(citizen.id).toBe('AB123456');
  });
});

// Provider verification (Citizen Service)
import { Verifier } from '@pact-foundation/pact';

describe('Pact Verification', () => {
  it('should validate the expectations of ApplicationService', () => {
    return new Verifier({
      provider: 'CitizenService',
      providerBaseUrl: 'http://localhost:3000',
      pactUrls: ['./pacts/applicationservice-citizenservice.json'],

      // Provider state setup
      stateHandlers: {
        'citizen AB123456 exists': async () => {
          await database.insert('citizens', {
            id: 'AB123456',
            first_name: 'Jane',
            last_name: 'Doe'
          });
        }
      }
    }).verifyProvider();
  });
});
```

### 6.8.2 Integration Test Environments

```yaml
test_environment_strategy:
  unit_tests:
    scope: "Single function/class"
    dependencies: "Mocked"
    speed: "Fast (milliseconds)"
    frequency: "Every commit"

  integration_tests:
    scope: "Multiple services"
    dependencies: "Docker containers, test databases"
    speed: "Medium (seconds)"
    frequency: "Every pull request"

  contract_tests:
    scope: "API contracts between services"
    dependencies: "Pact broker"
    speed: "Fast (mocked provider)"
    frequency: "Every commit"

  end_to_end_tests:
    scope: "Entire user journey"
    dependencies: "Staging environment (production-like)"
    speed: "Slow (minutes)"
    frequency: "Nightly, before production deploy"
```

**Docker Compose for Integration Tests**:
```yaml
version: '3.8'

services:
  postgres:
    image: postgres:14
    environment:
      POSTGRES_DB: test_db
      POSTGRES_USER: test_user
      POSTGRES_PASSWORD: test_pass
    ports:
      - "5432:5432"

  redis:
    image: redis:7
    ports:
      - "6379:6379"

  kafka:
    image: confluentinc/cp-kafka:7.3.0
    environment:
      KAFKA_ADVERTISED_LISTENERS: PLAINTEXT://kafka:9092
      KAFKA_ZOOKEEPER_CONNECT: zookeeper:2181
    ports:
      - "9092:9092"
    depends_on:
      - zookeeper

  zookeeper:
    image: confluentinc/cp-zookeeper:7.3.0
    environment:
      ZOOKEEPER_CLIENT_PORT: 2181

  # Service under test
  citizen-service:
    build: ./citizen-service
    environment:
      DATABASE_URL: postgresql://test_user:test_pass@postgres:5432/test_db
      REDIS_URL: redis://redis:6379
      KAFKA_BROKERS: kafka:9092
    ports:
      - "3000:3000"
    depends_on:
      - postgres
      - redis
      - kafka
```

---

## 6.9 Implementation Checklist

```yaml
api_gateway:
  - [ ] API gateway deployed (Kong, AWS API Gateway, Apigee)
  - [ ] Rate limiting configured (per API key, per IP)
  - [ ] Authentication enabled (OAuth 2.0, API keys)
  - [ ] CORS policy configured
  - [ ] Request/response transformation rules
  - [ ] Monitoring and logging (Prometheus, CloudWatch)

legacy_integration:
  - [ ] Integration pattern selected (API facade, ETL, CDC)
  - [ ] Error handling implemented (retries, dead letter queue)
  - [ ] Data mapping documented (legacy → modern format)
  - [ ] Strangler fig migration plan (if applicable)
  - [ ] Rollback procedure documented

event_driven:
  - [ ] Event broker deployed (Kafka, RabbitMQ, EventBridge)
  - [ ] Event schema registry (Confluent Schema Registry, AWS Glue)
  - [ ] Event versioning strategy
  - [ ] Dead letter queue configured
  - [ ] Event retention policy enforced
  - [ ] Consumer lag monitoring

microservices:
  - [ ] Service boundaries defined (bounded contexts)
  - [ ] Inter-service communication pattern (sync vs async)
  - [ ] Service discovery configured (Consul, Kubernetes DNS)
  - [ ] Load balancing (Kubernetes, NGINX, HAProxy)
  - [ ] Distributed tracing (Jaeger, Zipkin, X-Ray)
  - [ ] Service mesh (Istio, Linkerd) if applicable

resilience:
  - [ ] Circuit breaker implemented (resilience4j, Polly)
  - [ ] Retry policy with exponential backoff
  - [ ] Timeout configuration (all external calls)
  - [ ] Bulkhead isolation (thread pools, connection pools)
  - [ ] Fallback mechanisms (cached data, degraded mode)

data_sync:
  - [ ] CDC tool deployed (Debezium, AWS DMS) if needed
  - [ ] Data replication schedule (real-time, daily, weekly)
  - [ ] Conflict resolution strategy
  - [ ] Data quality validation
  - [ ] Reconciliation process (verify source = target)

transactions:
  - [ ] Saga pattern implemented (choreography or orchestration)
  - [ ] Compensating transactions defined
  - [ ] Saga log/state machine
  - [ ] Idempotency keys (prevent duplicate operations)
  - [ ] Eventual consistency documented

testing:
  - [ ] Contract tests (Pact, Spring Cloud Contract)
  - [ ] Integration test environment (Docker Compose)
  - [ ] End-to-end tests (Cypress, Playwright, Selenium)
  - [ ] Load testing (K6, JMeter, Gatling)
  - [ ] Chaos engineering (Chaos Monkey) if applicable
```

---

**END OF CHAPTER 6**

*Continued in next section: Chapter 7 - Security Architecture*


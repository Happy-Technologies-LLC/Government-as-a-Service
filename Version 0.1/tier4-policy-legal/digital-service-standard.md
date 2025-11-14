# Digital Service Standard

## Document Control

| Attribute | Details |
|-----------|---------|
| Document Version | 2.0 |
| Effective Date | [To be determined by implementing jurisdiction] |
| Review Cycle | Annual |
| Approving Authority | Chief Digital Officer |
| Document Owner | Head of Service Delivery, Digital Transformation Office |
| Classification | Public |
| Compliance | Mandatory for all government digital services |

---

## Executive Summary

The Digital Service Standard defines the criteria that all government digital services must meet to ensure they are user-centered, secure, reliable, and continuously improving. This standard is mandatory for all new and redesigned government services with digital components and aligns with the Government Service Management (GSM) framework for operational excellence.

**Core Principles**:
1. Start with user needs
2. Do less for the user
3. Design with data and evidence
4. Build digital services, not websites
5. Iterate and improve frequently
6. Make it accessible and inclusive
7. Understand security and privacy risks
8. Make all new code open by default
9. Use and contribute to open standards and common platforms
10. Test the end-to-end service
11. Make a plan for ongoing maintenance
12. Measure performance (aligned with GSM service quality metrics)
13. Build a multidisciplinary team
14. Work in the open

**GSM Alignment**: All services must also comply with Government Service Management Policy, including SLA establishment, incident management (P1-P4), change management (CAB approval), and 40-40-20 PPT balance.

---

## 1. Purpose and Scope

### 1.1 Purpose

This Digital Service Standard establishes mandatory requirements for government digital services to ensure:
- Services are designed around user needs and are easy to use
- Services work for all users regardless of ability, device, or connection
- Services are secure, reliable, and protect user privacy
- Services use proven technologies and shared platforms to reduce cost and risk
- Services are continuously measured and improved based on user feedback and data
- Government builds capability and shares knowledge across agencies

### 1.2 Scope

This standard applies to:
- All new government digital services (websites, mobile apps, APIs, platforms)
- Significant redesigns or enhancements to existing services
- Services procured from external vendors that include digital components
- Services delivered by government agencies and government-owned enterprises
- Internal government systems that impact service delivery or user experience

**Exemptions**: Services may be exempted by the Chief Digital Officer in exceptional circumstances (e.g., urgent emergency response, national security constraints). All exemptions must be documented with justification and alternative quality measures.

### 1.3 Authority

This standard is issued under the authority of the Digital Transformation Office Charter and carries the force of government policy. All government entities must comply unless formally exempted.

---

## 2. Service Design Principles

All government digital services must be designed according to these principles:

### Principle 1: Start with User Needs

**User needs, not government needs, should inform design decisions.**

Services should be based on a clear understanding of who the users are, what they need to do, and how they currently accomplish their goals. Design should make the service simple and intuitive, removing government complexity from the user experience.

**Requirements**:
- Conduct user research with actual users (citizens, businesses) before building anything
- Document user needs, personas, and user journeys
- Validate that the service meets user needs through ongoing testing
- Make design decisions that simplify user experience, even if it creates complexity for government

### Principle 2: Do Less for the User

**Government should do the hard work to make things simple for users.**

Reduce the effort required by users to complete tasks. Eliminate unnecessary steps, pre-populate known information, integrate across agencies, and provide clear guidance.

**Requirements**:
- Map the entire user journey end-to-end, including offline steps
- Identify and eliminate unnecessary steps, data requests, and complexity
- Pre-populate information government already knows
- Integrate across agencies so users don't have to
- Provide proactive notifications and guidance

### Principle 3: Design with Data and Evidence

**Decisions should be based on data and user research, not assumptions.**

Use data and evidence to understand user behavior, identify problems, and measure improvements. Test assumptions with real users before building. Make data-driven decisions about priorities and features.

**Requirements**:
- Collect and analyze user data (analytics, feedback, support contacts)
- Conduct user research at all stages (discovery, design, build, live)
- Test prototypes with users before committing to development
- Use A/B testing and experimentation to validate improvements
- Make decisions based on evidence, not opinions or HiPPO (Highest Paid Person's Opinion)

### Principle 4: Build Digital Services, Not Websites

**Think of the service as the whole user experience, not just the digital interface.**

Services include all touchpoints: digital, phone, in-person, mail. Design the whole service journey with digital as the primary channel, but ensure all channels work together seamlessly.

**Requirements**:
- Map the entire service journey across all channels
- Design digital-first but maintain channel choice where needed
- Ensure consistency across all channels
- Train staff to support the digital service
- Provide assisted digital support for users who need it

### Principle 5: Iterate and Improve Frequently

**Build services incrementally, releasing early and often.**

Use agile methods to deliver working software quickly, then improve based on user feedback and data. Don't wait for perfection - get something working in front of users and iterate.

**Requirements**:
- Use agile development methods (Scrum, Kanban, etc.)
- Release minimum viable product (MVP) within [6 months]
- Deploy updates at least monthly (preferably weekly or daily)
- Gather user feedback after each release
- Continuously improve based on data and feedback

### Principle 6: Make it Accessible and Inclusive

**Services must work for everyone, regardless of ability, device, or circumstances.**

Design for accessibility from the start. Ensure services work on all devices, browsers, and connection speeds. Accommodate users with disabilities, limited literacy, or limited digital skills.

**Requirements**:
- Meet WCAG 2.1 Level AA accessibility standards (minimum)
- Test with assistive technologies (screen readers, voice control, etc.)
- Work on all common browsers and devices (responsive design)
- Function on slow connections and older devices
- Provide content at appropriate reading level (grade 6-8)
- Support multiple languages where appropriate

### Principle 7: Understand Security and Privacy Risks

**Evaluate and manage security and privacy risks throughout the service lifecycle.**

Protect user data and privacy. Assess security risks and implement appropriate controls. Be transparent about how data is collected, used, and protected.

**Requirements**:
- Conduct privacy impact assessment before launch
- Implement security controls appropriate to risk level
- Use secure authentication and authorization
- Encrypt data in transit and at rest
- Be transparent about data collection and use
- Provide users control over their data
- Have an incident response plan

### Principle 8: Make All New Code Open by Default

**Publish code in open repositories unless there are clear security reasons not to.**

Open source code improves quality through peer review, enables reuse across government, builds transparency, and allows external contribution.

**Requirements**:
- Publish all non-sensitive code in public repositories (GitHub, GitLab, etc.)
- Use open source licenses (MIT, Apache 2.0, GPL, etc.)
- Document code clearly for external users
- Accept contributions from other agencies and public
- Only keep code closed when there are documented security reasons

### Principle 9: Use and Contribute to Open Standards and Common Platforms

**Don't reinvent the wheel - use shared platforms and open standards.**

Reuse components, platforms, and patterns that already exist. Contribute improvements back. Use open standards to ensure interoperability.

**Requirements**:
- Use government shared platforms (identity, payments, data exchange, notifications)
- Adopt design patterns from government design system
- Use open standards for data formats, APIs, and protocols
- Contribute reusable components back to shared libraries
- Document and share solutions for others to use

### Principle 10: Test the End-to-End Service

**Test the entire service journey with real users in realistic conditions.**

Testing should include the whole service (digital and non-digital), all user types, all devices and browsers, and edge cases. Test with real users, not just internal staff.

**Requirements**:
- Test with representative users throughout development
- Conduct usability testing before each major release
- Test on actual devices and browsers users have
- Test entire service journey end-to-end, not just digital parts
- Test edge cases and failure scenarios
- Load test for expected traffic volumes

### Principle 11: Make a Plan for Ongoing Maintenance

**Services need ongoing support, not just initial development.**

Plan for continuous operation, improvement, and eventual retirement. Budget for ongoing costs (hosting, support, maintenance). Build a team to support the live service. Implement GSM practices for service operations.

**Requirements**:
- Document total cost of ownership (development + operations)
- Allocate budget for ongoing operations and improvement (40-40-20 PPT balance)
- Establish support processes (helpdesk, incident management with P1-P4 classification)
- Implement GSM practices: incident management, change management (CAB), problem management
- Appoint Service Owner and Service Manager
- Publish Service Level Agreement (SLA)
- Plan for technology refresh and upgrades
- Define service retirement strategy

### Principle 12: Measure Performance

**Define metrics and measure performance continuously.**

Establish key performance indicators (KPIs) aligned to user needs and business objectives. Monitor continuously. Report publicly on performance. Use data to drive improvements. Align metrics with GSM service quality framework.

**Requirements**:
- Define KPIs before service launch (usage, completion, satisfaction, cost)
- Implement analytics and monitoring from day one
- Track GSM service quality metrics: availability, MTTR, change success rate, citizen satisfaction
- Publish performance data on public dashboard (including SLA compliance)
- Review metrics regularly and act on findings
- Set improvement targets and measure progress
- Report to Service Owners Council monthly

### Principle 13: Build a Multidisciplinary Team

**Bring together all skills needed to deliver the service.**

Services need diverse skills: product management, service design, user research, content design, software engineering, data analysis, operations. Keep the team together throughout service lifecycle.

**Requirements**:
- Assemble team with all necessary skills (not just developers)
- Include user researcher and service designer from the start
- Empower team to make decisions without layers of approval
- Keep team stable throughout delivery
- Co-locate team (physically or virtually)
- Limit team size (typically 6-10 people for delivery)

### Principle 14: Work in the Open

**Share progress openly and engage users throughout development.**

Build trust and get better results by working transparently. Share plans, progress, challenges, and decisions. Engage users and stakeholders throughout.

**Requirements**:
- Publish service roadmap and backlog
- Blog about progress, decisions, and lessons learned
- Demonstrate working software regularly to stakeholders
- Engage users in co-design sessions
- Be transparent about challenges and failures
- Share metrics and performance data publicly

---

## 3. Assessment Criteria

Services must pass assessment against the standard before launch and at regular intervals after launch.

### 3.1 Assessment Process

**Pre-Launch Assessment** (mandatory before public launch):
- Conducted by independent assessors from Digital Transformation Office
- Full-day assessment including demos, document review, and team interviews
- Results in pass, conditional pass (with remediation), or fail
- Failed assessments must address issues and re-assess before launch

**Post-Launch Reviews** (ongoing):
- Minor review every 6 months (metrics review, limited testing)
- Major review every 2 years (full reassessment against current standard)
- Event-driven review after major changes or incidents

### 3.2 Assessment Rubric

Each of the 14 principles is assessed on a 4-point scale:

| Rating | Description | Criteria |
|--------|-------------|----------|
| **4 - Exemplary** | Service significantly exceeds standard and demonstrates innovation | Fully meets all requirements and shows innovation that should be shared across government |
| **3 - Pass** | Service meets the standard | Meets all mandatory requirements with evidence |
| **2 - Conditional Pass** | Service mostly meets standard with minor gaps | Minor gaps that can be addressed within 30 days with remediation plan |
| **1 - Fail** | Service does not meet the standard | Significant gaps that require substantial rework before launch |

**Passing threshold**: Service must achieve rating of 3 or 4 on all 14 principles, OR achieve rating of 2 on no more than 2 principles with approved remediation plan.

### 3.3 Evidence Requirements

Teams must provide evidence for each principle:

| Principle | Required Evidence |
|-----------|-------------------|
| 1. User needs | User research reports, personas, user stories, research participant list |
| 2. Do less | Service blueprint, journey maps, before/after comparison, integration documentation |
| 3. Data and evidence | Analytics dashboard, research synthesis, A/B test results, decision log |
| 4. Build services | Service map showing all channels, channel transition points, staff training materials |
| 5. Iterate frequently | Release history, sprint reviews, MVP scope definition, roadmap |
| 6. Accessible | Accessibility testing report, WCAG 2.1 AA compliance statement, multi-device testing |
| 7. Security and privacy | Privacy impact assessment, security assessment, threat model, incident response plan |
| 8. Open code | Links to public repositories, contribution guidelines, license documentation |
| 9. Common platforms | List of platforms used, integration documentation, contributions to shared libraries |
| 10. End-to-end testing | Test plans, usability test results, load test results, edge case testing |
| 11. Ongoing maintenance | Operating budget, support processes, service level agreements, retirement plan |
| 12. Measure performance | KPI dashboard (public), analytics reports, user satisfaction scores, cost per transaction |
| 13. Multidisciplinary team | Team roster with roles, co-location evidence, decision-making authority |
| 14. Work in the open | Blog posts, roadmap, demos to stakeholders, user engagement evidence |

### 3.4 Assessment Team

Assessments are conducted by 3-4 assessors including:
- Service assessment lead (Digital Transformation Office)
- User-centered design expert
- Technology and security expert
- Subject matter expert (for specialist services)

Assessors must be independent of the service team.

---

## 4. Quality Requirements

### 4.1 Performance Standards (GSM-Aligned)

All services must meet minimum performance standards aligned with Government Service Management (GSM) framework and Service Level Management Policy:

**Availability** (by service tier):
- Tier 1 (Critical): 99.9% uptime (max 8.76 hours downtime per year)
- Tier 2 (High): 99.5% uptime (max 43.8 hours downtime per year)
- Tier 3 (Standard): 99.0% uptime
- Tier 4 (Low): Best effort
- Planned maintenance windows communicated 7 days in advance (Tier 1) or 3 days (Tier 2)

**Response Time**:
- Page load time: <2 seconds on 3G connection
- API response time: <500ms for 95th percentile
- Transaction processing: <5 seconds for 90% of transactions

**Capacity**:
- Handle 10x normal traffic without degradation
- Scale automatically to meet demand
- Load tested to 5x peak expected traffic

**Error Rates**:
- Service error rate: <0.5% of transactions
- User-caused errors: <5% of transactions
- All errors logged and monitored

### 4.2 Accessibility Requirements

**WCAG 2.1 Level AA** (mandatory minimum):
- Perceivable: Content can be perceived by all users
- Operable: Interface can be operated by all users
- Understandable: Information and operation are understandable
- Robust: Content works with assistive technologies

**Additional requirements**:
- Keyboard navigation for all functionality
- Screen reader compatibility (JAWS, NVDA, VoiceOver)
- Clear focus indicators
- Sufficient color contrast (4.5:1 for normal text, 3:1 for large)
- Resizable text up to 200% without loss of functionality
- Captions for video content, transcripts for audio
- Forms with clear labels and error messages
- No time limits or ability to extend

**Device and browser support**:
- Work on all major browsers (Chrome, Firefox, Safari, Edge) - current version and 2 previous
- Work on mobile and desktop
- Responsive design adapting to all screen sizes
- Progressive enhancement (core functionality without JavaScript)

### 4.3 Security Requirements

**Authentication and Authorization**:
- Use government shared identity platform where available
- Multi-factor authentication for sensitive services
- Role-based access control
- Session timeout for inactivity ([15] minutes)

**Data Protection**:
- Encryption in transit (TLS 1.2 or higher)
- Encryption at rest for sensitive data
- Secure key management
- Data minimization (only collect what's needed)
- Secure deletion of data when no longer needed

**Application Security**:
- Protection against OWASP Top 10 vulnerabilities
- Input validation and output encoding
- SQL injection prevention
- Cross-site scripting (XSS) prevention
- Cross-site request forgery (CSRF) protection
- Security headers (CSP, HSTS, X-Frame-Options, etc.)

**Security Testing**:
- Automated security scanning in CI/CD pipeline
- Annual penetration testing by qualified third party
- Vulnerability management with defined SLAs for remediation
- Security incident response plan tested annually

### 4.4 Privacy Requirements

**Privacy by Design**:
- Conduct Privacy Impact Assessment before launch
- Collect minimum data necessary
- Clear consent mechanisms
- Data retention policies
- User access to their data
- User ability to correct or delete data

**Transparency**:
- Clear privacy policy in plain language
- Notification of data collection
- Explanation of data use
- Third-party data sharing disclosures

**Compliance**:
- Comply with [Data Protection Act / GDPR / local privacy regulations]
- Maintain data processing records
- Appoint Data Protection Officer if required
- Implement privacy controls from privacy assessment

---

## 5. User Research Requirements

### 5.1 Research Phases

User research is required at all phases:

**Discovery** (understanding the problem):
- Minimum 20 user interviews across diverse user types
- Observation of current service use
- Analysis of existing data (complaints, support calls, analytics)
- Stakeholder interviews
- Deliverable: User needs, personas, current service blueprint

**Alpha** (exploring solutions):
- Minimum 30 usability tests of prototypes
- Concept testing with users
- A/B testing of different approaches
- Deliverable: Validated service concepts, design patterns

**Beta** (building and testing):
- Continuous usability testing (minimum 5 users per sprint)
- Analytics monitoring of live beta
- User feedback collection
- Accessibility testing with users with disabilities
- Deliverable: Tested service ready for public launch

**Live** (operating and improving):
- Ongoing analytics monitoring
- Regular usability testing (minimum quarterly)
- User satisfaction surveys
- Support and feedback analysis
- Deliverable: Continuous improvements based on data

### 5.2 Research Methods

Teams should use appropriate research methods including:
- User interviews (individual, group)
- Usability testing (moderated, unmoderated)
- Field studies and observation
- Surveys (satisfaction, needs assessment)
- Analytics and behavioral data
- A/B testing and experimentation
- Card sorting and tree testing
- Accessibility testing
- Support data analysis

### 5.3 Research Quality Standards

- Recruit real users, not proxies (friends, family, colleagues)
- Include diverse users (abilities, ages, technical skills, languages)
- Conduct research in realistic contexts
- Document research clearly with evidence
- Share findings with team and stakeholders
- Act on research findings (document decisions)

---

## 6. Technology Standards

### 6.1 Technology Principles

**Cloud-First**:
- Default to cloud hosting unless documented reason not to
- Use government cloud platforms where available
- Design for cloud-native architecture (microservices, containers, serverless)

**API-First**:
- Build services as APIs that can be reused
- Use RESTful or GraphQL APIs following government standards
- Document APIs using OpenAPI/Swagger
- Version APIs and maintain backwards compatibility

**Open Source First**:
- Prefer open source technologies over proprietary
- Contribute back to open source projects
- Only use proprietary when compelling reason (document justification)

**Modern Technology Stack**:
- Use current, supported versions of languages and frameworks
- Automate testing, security scanning, and deployment
- Use infrastructure as code
- Implement continuous integration and deployment (CI/CD)

### 6.2 Mandatory Standards

**Code Repositories**:
- All code in version control (Git)
- Public repositories by default (GitHub, GitLab)
- Meaningful commit messages
- Branching strategy documented

**Testing**:
- Unit test coverage >80%
- Integration tests for all APIs
- End-to-end tests for critical user journeys
- Automated testing in CI/CD pipeline

**Deployment**:
- Automated deployment pipeline
- Zero-downtime deployments
- Ability to rollback within 5 minutes
- Infrastructure as code (Terraform, CloudFormation, etc.)

**Monitoring**:
- Application performance monitoring
- Error tracking and alerting
- Log aggregation and analysis
- User analytics
- Uptime monitoring

**Documentation**:
- README with setup instructions
- API documentation (OpenAPI)
- Architecture decision records (ADRs)
- Runbooks for operations

### 6.3 Architecture Patterns

Services should follow these patterns:

**Frontend**:
- Progressive enhancement
- Responsive design
- Component-based architecture
- Government design system components

**Backend**:
- Microservices or modular monolith
- Stateless services (state in database or cache)
- Asynchronous processing for long-running tasks
- Event-driven architecture where appropriate

**Data**:
- Database per service (avoid shared databases)
- API-based data access (not direct database connections)
- Caching for performance
- Data backup and disaster recovery

**Integration**:
- Use government API gateway
- OAuth 2.0 for authentication
- Rate limiting and throttling
- Circuit breakers for resilience

---

## 7. Practical Implementation Guidance

### 7.1 Getting Started

**Step 1: Understand the Standard**
- Read this document thoroughly
- Review examples and case studies
- Attend DTO training on the standard
- Identify gaps in current approach

**Step 2: Assemble the Team**
- Include user researcher and service designer from start
- Ensure multidisciplinary team (product, design, engineering, etc.)
- Allocate sufficient time (user research takes time!)
- Get executive sponsorship

**Step 3: Plan for Assessment**
- Budget time for assessment (typically 1 day + preparation)
- Plan to assess at end of alpha, before beta launch, before public launch
- Start gathering evidence from day one
- Schedule assessment early (book DTO assessors)

**Step 4: Apply the Principles**
- Start with user research in discovery
- Work in small iterations
- Test frequently with users
- Use shared platforms and components
- Measure from day one

### 7.2 Common Challenges and Solutions

| Challenge | Solution |
|-----------|----------|
| "We don't have time for user research" | Research saves time by preventing rework. Start small - even 5 user tests will reveal major issues. |
| "We can't find users to test with" | Recruit from support contacts, service users, public. Offer incentives. Partner with community organizations. |
| "Our agency doesn't allow public code" | Work with DTO to address concerns. Most fears about open code are unfounded. Start with small component. |
| "Shared platforms don't meet our needs" | Engage with platform team to understand capabilities. Most "unique" needs can be met. Request enhancements. |
| "We already built it, can't change now" | Iterative improvement is expected. Assess current state, identify gaps, make plan to address over time. |
| "Assessment process is too bureaucratic" | Assessment improves quality and reduces risk. DTO team will support you throughout. Early engagement helps. |

### 7.3 Resources and Support

**From Digital Transformation Office**:
- Training workshops on service standard and user research
- Design system with reusable components
- Shared platforms (identity, payments, etc.)
- Assessment guidance and criteria
- Community of practice for service designers, researchers, developers
- Consulting support for complex services

**Templates and Tools**:
- User research plan template
- Usability testing script template
- Accessibility checklist
- Security and privacy assessment templates
- Service assessment report template
- KPI dashboard template

---

## 8. Templates and Examples

### 8.1 User Research Plan Template

```markdown
# User Research Plan: [Service Name]

## Research Goals
- What do we need to learn?
- What decisions will this research inform?

## Research Questions
1. Who are the users and what are their needs?
2. How do users currently accomplish their goals?
3. What are the pain points and barriers?
4. [Add specific questions for this research]

## Methodology
- Methods: [interviews, usability testing, surveys, etc.]
- Participants: [number and types of users]
- Location: [remote, in-person, lab, field]
- Timeline: [dates for recruitment, research, analysis]

## Recruitment Criteria
- User type 1: [description, number needed]
- User type 2: [description, number needed]
- Diversity requirements: [abilities, ages, technical skills, etc.]

## Research Materials
- Interview guide / test script
- Prototype or test environment
- Consent forms
- Incentives: [gift cards, payment]

## Analysis and Reporting
- Analysis approach: [thematic analysis, etc.]
- Deliverables: [research report, personas, journey maps]
- Presentation: [to whom, when]
```

### 8.2 Service Assessment Checklist

```markdown
# Service Assessment Readiness Checklist

## Before Assessment
- [ ] Booked assessment date with DTO (at least 4 weeks in advance)
- [ ] Prepared evidence for all 14 principles
- [ ] Service is working and accessible for demo
- [ ] Team is available for full assessment day
- [ ] Sent pre-read materials to assessors 1 week before

## Evidence Portfolio
- [ ] User research reports and participant lists
- [ ] Service blueprint and journey maps
- [ ] Analytics dashboard with KPIs
- [ ] Accessibility test results and WCAG compliance
- [ ] Security assessment and privacy impact assessment
- [ ] Links to public code repositories
- [ ] List of shared platforms and components used
- [ ] Test reports (usability, load, security)
- [ ] Operating budget and support plan
- [ ] Team roster with roles
- [ ] Roadmap and blog posts

## Assessment Day
- [ ] Service demo prepared (20 minutes)
- [ ] User research presentation (15 minutes)
- [ ] Team available for Q&A
- [ ] Evidence documents easily accessible
- [ ] Test accounts and access for assessors

## After Assessment
- [ ] Receive assessment report within 5 working days
- [ ] Address any conditional pass requirements within 30 days
- [ ] Update service documentation with assessment results
- [ ] Share learnings with broader community
```

### 8.3 KPI Dashboard Template

Every service should publish a public dashboard with these KPIs:

**Usage Metrics**:
- Total transactions (monthly)
- Unique users (monthly)
- Digital vs. traditional channel split (%)
- User demographics (if collected)

**Performance Metrics**:
- Service availability (%)
- Average response time (seconds)
- Transaction success rate (%)
- Error rate (%)

**User Satisfaction**:
- User satisfaction score (out of 5)
- Net Promoter Score
- Support contact rate (per 1000 transactions)
- Common issues and resolution time

**Cost Metrics**:
- Cost per transaction ($)
- Total operating cost (monthly)
- Comparison to previous service delivery cost

**Example**: See [GDS Performance Platform](https://www.gov.uk/performance) for real examples.

---

## 9. Success Criteria

### 9.1 Service-Level Success

A service successfully meets the standard when:
- Passes assessment before public launch
- Maintains performance and quality standards during operation
- Demonstrates continuous improvement based on data
- Achieves high user satisfaction (>4.0/5.0)
- Delivers measurable benefits (time saved, cost reduced, satisfaction increased)

### 9.2 Government-Wide Success

The Digital Service Standard succeeds when:
- 100% of new government digital services pass assessment
- Average user satisfaction across all services improves year-over-year
- Cost per transaction decreases year-over-year
- Digital adoption increases year-over-year
- Government improves in international digital government rankings
- Standard is seen as enabler, not barrier, by service teams

---

## 10. Review and Update Procedures

### 10.1 Annual Review Process

The Digital Service Standard is reviewed annually:

**Review Team**: DTO staff, service teams, external experts

**Review Process**:
1. Collect feedback from service teams who used standard (Q1)
2. Analyze assessment data to identify common issues (Q1)
3. Review changes in technology and best practices (Q2)
4. Draft proposed updates with rationale (Q2)
5. Public consultation on proposed changes (Q3)
6. Finalize and publish updated standard (Q4)
7. Provide transition period for services in flight (typically 6 months)

**Change Types**:
- **Major**: Changes to principles or assessment process (require consultation)
- **Minor**: Clarifications, examples, guidance (can be made anytime)
- **Technical**: Updates to technology standards (reviewed quarterly)

### 10.2 Feedback Mechanisms

Continuous feedback is collected through:
- Service assessment feedback forms
- Quarterly service team surveys
- Community of practice discussions
- GitHub issues on standard repository
- Annual consultation process

### 10.3 Version Control

- Standard uses semantic versioning (major.minor.patch)
- Current version always published on DTO website
- Change log maintained with all updates
- Previous versions archived and accessible
- Services assessed against version current at time of assessment

---

## 11. Appendices

### Appendix A: Assessment Rubric Detail

[Detailed rubric for each of 14 principles with specific criteria for ratings 1-4]

### Appendix B: Case Studies

**Example: Benefits Application Service**
- User need: Apply for government benefits online
- Challenge: Complex eligibility rules, vulnerable users
- Approach: Extensive research with benefit recipients, plain language, step-by-step wizard
- Result: 85% completion rate, 4.3/5 user satisfaction, 60% cost reduction
- Standard highlights: Exemplary on principles 1, 2, 6

**Example: Business Registration Service**
- User need: Register new business quickly and easily
- Challenge: Multiple agencies involved, legal requirements
- Approach: Single portal integrating 5 agencies, pre-filled data, instant approval
- Result: Registration time reduced from 10 days to 1 day, 95% digital adoption
- Standard highlights: Exemplary on principles 2, 4, 9

### Appendix C: Related Standards and Frameworks

**Government Policies and Standards**:
- Government Service Management (GSM) Policy
- Service Level Management Policy
- Incident Management Policy
- Change Management Policy
- People-Process-Technology (PPT) Balance Policy

**International Standards**:
- [ISO 9241]: Ergonomics of human-system interaction
- [ISO/IEC 20000]: Service Management standard
- [WCAG 2.1]: Web Content Accessibility Guidelines
- [OWASP]: Open Web Application Security Project standards
- [GDS Service Manual]: UK Government Digital Service guidance
- [USDS Playbook]: US Digital Service playbook
- [DTA Digital Service Standard]: Australian Digital Transformation Agency standard

### Appendix D: Glossary

- **Agile**: Iterative approach to software development emphasizing flexibility and user feedback
- **API**: Application Programming Interface - allows software systems to communicate
- **Accessibility**: Designing services usable by people with disabilities
- **Personas**: Fictional characters representing user types based on research
- **User Journey**: Path a user takes to accomplish a goal, including all touchpoints
- **WCAG**: Web Content Accessibility Guidelines - international accessibility standard
- **CI/CD**: Continuous Integration/Continuous Deployment - automated software delivery
- **Microservices**: Architectural pattern of small, independent services

### Appendix E: Contact and Support

- **Digital Transformation Office**: [Website URL]
- **Service Assessment Team**: [Email]
- **Service Design Community**: [Forum URL]
- **Design System**: [URL]
- **Shared Platforms**: [URL]
- **Training Registration**: [URL]

---

**Document History**

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | [Date] | Initial standard based on GDS model | GaaS Framework Team |
| 2.0 | [Date] | Updated with expanded guidance and examples | GaaS Framework Team |

---

*This Digital Service Standard is part of the Government as a Service (GaaS) Tier 4 governance framework. It is based on leading practices from UK GDS, US Digital Service, and other digital governments, adapted for international use.*

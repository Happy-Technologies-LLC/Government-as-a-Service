# Digital Identity Assurance Framework

**Policy Number:** DG-2024-004
**Version:** 1.0
**Effective Date:** [Insert Date]
**Review Date:** [Annual Review]
**Policy Owner:** Chief Digital Officer
**Approval Authority:** Digital Government Board
**Classification:** Public

---

## 1. Framework Statement

### 1.1 Purpose

This Digital Identity Assurance Framework establishes the standards, processes, and requirements for digital identity services across government. It defines identity assurance levels, authentication methods, verification procedures, and credential lifecycle management to enable secure, privacy-preserving, and user-friendly digital identity for all citizens and government services.

### 1.2 Vision

"Every citizen, resident, and business will have a secure, portable, and privacy-preserving digital identity that enables seamless access to government services and trusted private sector services—making digital government accessible, inclusive, and trustworthy."

### 1.3 Strategic Objectives

1. **Universal Digital Identity**: Provide every citizen with a digital identity by Year 3
2. **Seamless Service Access**: Enable single sign-on across all government services
3. **Privacy Protection**: Minimize data sharing and enable citizen control
4. **Security Assurance**: Strong authentication proportionate to risk
5. **Inclusion**: Ensure accessibility for all population segments
6. **Economic Enabler**: Enable private sector use of government digital identity
7. **International Recognition**: Align with international identity standards

### 1.4 Scope

**This framework applies to:**
- All government digital services requiring user authentication
- All government-issued digital credentials and identity documents
- National digital identity system and supporting infrastructure
- Identity verification processes for government services
- Private sector services using government digital identity (opt-in)

**This framework covers:**
- Identity assurance levels (IAL 1-3)
- Authentication assurance levels (AAL 1-3)
- Federation assurance levels (FAL 1-3)
- Identity proofing and verification procedures
- Authentication methods and credential types
- Identity credential lifecycle management
- Privacy and consent management

---

## 2. Identity Assurance Levels

### 2.1 Overview of Assurance Levels

The framework defines three dimensions of digital identity assurance based on NIST SP 800-63-3:

1. **Identity Assurance Level (IAL)**: Confidence that the person is who they claim to be
2. **Authenticator Assurance Level (AAL)**: Confidence that the person accessing the service is the rightful credential holder
3. **Federation Assurance Level (FAL)**: Strength of assertion and protection of information during federation

**Risk-Based Assurance Selection**

Services must select appropriate assurance levels based on risk assessment:

| Impact of Compromise | IAL | AAL | FAL |
|---------------------|-----|-----|-----|
| **Low** (inconvenience, limited financial loss) | 1 | 1 | 1 |
| **Moderate** (financial loss, privacy harm) | 2 | 2 | 2 |
| **High** (serious financial loss, safety risk, criminal identity fraud) | 3 | 3 | 3 |

### 2.2 Identity Assurance Level (IAL)

**IAL 1: Self-Asserted Identity**

**Definition**: Minimal confidence in the person's identity. Attributes are self-asserted and not verified.

**When to Use:**
- Low-risk services (information lookup, newsletters)
- Anonymous or pseudonymous access acceptable
- No need to know the user's real-world identity

**Verification Requirements:**
- Email address verification (click verification link)
- No requirement to verify real-world identity
- User provides attributes (name, date of birth) but not verified

**Example Use Cases:**
- Public information portals
- Newsletter subscriptions
- Community forums
- Anonymous feedback forms
- Public data downloads

**Credential Types:**
- Self-registered username/password
- Email-based account
- Social media login (where appropriate)

---

**IAL 2: Verified Identity**

**Definition**: Moderate to high confidence in the person's claimed identity. Identity is verified using government-issued documents or other trusted sources.

**When to Use:**
- Most government services
- Financial transactions
- Personal data access
- Benefits applications
- License renewals
- Services requiring legal identity

**Verification Requirements (In-Person or Remote):**

**Evidence Required (at least 2 pieces from different sources):**
- **Strong Evidence**: Government-issued photo ID (passport, driver license, national ID card)
- **Fair Evidence**: Birth certificate, utility bill, bank statement

**Verification Process:**
1. **Evidence Collection**: Scan/photo of identity documents
2. **Evidence Validation**: Check document security features, expiry, issuer
3. **Evidence Verification**: Confirm with issuing source (e.g., passport office)
4. **Identity Verification**: Match applicant to evidence (photo, biometric)
5. **Address Verification**: Confirm current address (utility bill, bank statement)

**Verification Methods:**

**Option A: In-Person Verification** (Highest Confidence)
- Attend government service center
- Trained official inspects original documents
- Face-to-face comparison to photo ID
- Biometric capture (photo, fingerprint optional)

**Option B: Remote Verification** (Video Call)
- Video call with trained verification agent
- Show original documents to camera
- Agent inspects security features in real-time
- Liveness detection (move head, blink)
- Biometric capture via webcam

**Option C: Automated Remote Verification** (AI-Assisted)
- Upload photos of identity documents
- Automated document validation (security features, OCR)
- Selfie with liveness detection
- Automated face matching (selfie to ID photo)
- Optional: Knowledge-based verification questions

**Option D: Bank-Based Verification** (Leveraging Existing KYC)
- Citizen already verified by bank (KYC process)
- Government requests verification assertion from bank
- Citizen consents to bank sharing verification result (yes/no, no personal data)
- Government trusts bank's identity proofing process

**Example Use Cases:**
- Tax filing and refunds
- Social benefits applications
- Business registration
- Driver license renewal
- Health portal access
- Education records access
- Permit applications
- Voting registration

**Credential Types:**
- Government digital identity credential
- Bank-issued digital identity
- Mobile driver license
- Digital health card

---

**IAL 3: High-Assurance Verified Identity**

**Definition**: Very high confidence in the person's claimed identity. In-person identity proofing with biometric verification.

**When to Use:**
- High-risk services (national security, law enforcement)
- Services where identity fraud would have severe consequences
- Access to highly sensitive data
- High-value financial transactions (>$50,000)
- Legal proceedings (e-signatures with legal standing)

**Verification Requirements (In-Person Mandatory):**

**Evidence Required:**
- **Superior Evidence**: Passport or national ID card with chip (biometric)
- **Strong Evidence**: Driver license with photo
- **Fair Evidence**: Birth certificate, proof of address

**Verification Process:**
1. **In-Person Attendance**: Applicant must appear in person at trusted location
2. **Biometric Capture**: Photo, fingerprints, iris scan (as appropriate)
3. **Document Inspection**: Trained official inspects original documents using tools (UV light, magnification)
4. **Issuing Source Verification**: Confirm documents with issuing authority (real-time query)
5. **Background Check**: Criminal record check, sanctions list screening (where authorized)
6. **Biometric Matching**: Compare captured biometric to biometric on document chip

**Example Use Cases:**
- Law enforcement officer credentials
- Healthcare provider credentials
- Signing legal documents (e-signatures)
- Access to classified information
- High-value business transactions
- Border control and immigration

**Credential Types:**
- Smart card with biometric
- National ID card with chip
- Law enforcement credentials
- Healthcare professional credentials

---

### 2.3 Authenticator Assurance Level (AAL)

**AAL 1: Single-Factor Authentication**

**Definition**: Authentication using a single factor (something you know, something you have, or something you are).

**When to Use:**
- Low-risk services (public information)
- Minimal harm if compromised
- Services where convenience is paramount

**Allowed Authentication Methods:**
- **Password/PIN** (memorized secret)
  - Minimum 8 characters
  - No complexity requirements (allow passphrases)
  - Check against compromised password list
  - Rate limiting (3-5 attempts before lockout)

- **Email-Based Authentication** (magic link)
  - Send one-time link to verified email
  - Link expires in 15 minutes
  - Single use only

**Prohibited for AAL 1:**
- SMS-based OTP (vulnerable to interception, not allowed even at AAL 1)

**Example Use Cases:**
- Public information portals
- Newsletter subscriptions
- Non-sensitive data downloads

**Session Requirements:**
- Maximum session length: 30 days (reauthentication required)
- Logout capability required
- Session revocation capability

---

**AAL 2: Multi-Factor Authentication (MFA)**

**Definition**: Authentication using two different factors from: something you know, something you have, something you are.

**When to Use:**
- Most government services (default for IAL 2)
- Access to personal data
- Financial transactions
- Moderate to high risk of harm if compromised

**Allowed Authentication Methods (choose 2 factors):**

**Factor 1: Something You Know**
- **Password**
  - Minimum 8 characters (recommend 12+)
  - Check against compromised password database
  - Rate limiting

**Factor 2: Something You Have**
- **Authenticator App (TOTP)** - Recommended
  - Time-based one-time password (Google Authenticator, Microsoft Authenticator, Authy)
  - 6-digit code, rotates every 30 seconds
  - Device-based (phone, hardware token)

- **Hardware Security Key** - Most Secure
  - FIDO2/WebAuthn compatible (YubiKey, Titan Key)
  - Phishing-resistant
  - USB, NFC, or Bluetooth

- **Push Notification**
  - Mobile app push notification (approve login on phone)
  - Number matching required (display number on web, user enters on phone)
  - Prevent approval fatigue attacks

- **Smart Card**
  - Government-issued smart card with PKI certificate
  - Card reader required
  - Common for government employees

**Factor 3: Something You Are (Optional Enhancement)**
- **Biometric** (fingerprint, face recognition)
  - Local biometric verification (on device, not transmitted)
  - Used in combination with possession factor
  - Example: Unlock phone with fingerprint to approve login

**Prohibited Authentication Methods:**
- SMS OTP (not allowed at AAL 2 or higher due to security vulnerabilities)
- Voice call OTP (not allowed)
- Email OTP as second factor (not allowed)

**Example Use Cases:**
- Tax filing portal
- Social benefits applications
- Health records access
- Business registration
- Driver license renewal
- Permit applications

**Session Requirements:**
- Maximum session length: 12 hours (reauthentication required)
- Re-authentication required for sensitive actions (change password, update bank details)
- Session revocation capability

---

**AAL 3: Multi-Factor Cryptographic Authentication**

**Definition**: Authentication using multi-factor cryptographic authenticators (hardware-based).

**When to Use:**
- High-risk services
- Access to highly sensitive data
- National security systems
- Financial transactions >$50,000
- Legal signing with non-repudiation

**Required Authentication Methods:**

**Multi-Factor Cryptographic Device:**
- **Smart Card with PIN**
  - Government-issued smart card (chip-based)
  - PKI certificate on card
  - PIN required to unlock card (something you know + something you have)

- **FIDO2 Hardware Security Key with PIN or Biometric**
  - Hardware key with built-in PIN or fingerprint sensor
  - Cryptographic authentication (phishing-resistant)
  - Example: YubiKey 5 with PIN, Titan Security Key with fingerprint

**Cryptographic Authenticator Requirements:**
- FIPS 140-2 Level 2 or higher certified
- Private key stored in hardware (cannot be extracted)
- Resistant to physical tampering
- Phishing-resistant (FIDO2/WebAuthn)

**Optional: Biometric Enhancement**
- Add biometric (fingerprint, iris) for additional assurance
- Used to unlock cryptographic device

**Example Use Cases:**
- Law enforcement systems
- Access to classified data
- Healthcare provider access to patient records
- Legal document signing (e-signatures with legal standing)
- High-value government procurement
- Border control systems

**Session Requirements:**
- Maximum session length: 15 minutes (frequent reauthentication)
- Re-authentication required for every sensitive action
- Session revocation capability
- Continuous authentication monitoring (behavioral analytics)

---

### 2.4 Federation Assurance Level (FAL)

**FAL 1: Basic Assertion Protection**

**Definition**: Minimal protection of assertion (identity claim) during federation.

**Requirements:**
- Assertion signed by identity provider (prevent tampering)
- HTTPS/TLS for assertion transmission
- Assertion contains minimum required attributes only

**Use Cases:**
- Low-risk federated services

---

**FAL 2: Encrypted Assertion**

**Definition**: Strong protection of assertion with encryption.

**Requirements:**
- Assertion signed and encrypted
- Back-channel presentation of assertion (not through browser)
- Assertion bound to session (prevent replay attacks)
- Short assertion lifetime (5 minutes maximum)

**Use Cases:**
- Most government federated services (IAL 2, AAL 2)

---

**FAL 3: Encrypted Assertion with Source Authentication**

**Definition**: Very strong protection with cryptographic binding.

**Requirements:**
- All FAL 2 requirements
- Holder-of-key binding (assertion cryptographically bound to user's key)
- Assertion audience restriction (only specific service can use assertion)
- Single use assertion (consumed upon use)

**Use Cases:**
- High-risk federated services (IAL 3, AAL 3)

---

## 3. National Digital Identity System

### 3.1 System Architecture

**Components:**

**1. Identity Provider (IdP)**
- Central government identity provider
- Issues digital identity credentials
- Authenticates users for government services
- Provides identity attributes to services (with consent)
- Manages credential lifecycle

**2. Credential Service Provider (CSP)**
- Identity proofing and enrollment
- Credential issuance (mobile app, smart card)
- Credential revocation and renewal
- User authentication

**3. Attribute Provider**
- Stores verified identity attributes
- Releases attributes to services with user consent
- Authoritative sources: birth registry, tax office, address registry

**4. Federation Gateway**
- Enables federated authentication (SAML, OpenID Connect, OAuth 2.0)
- Translates between identity protocols
- Policy enforcement point

**5. Citizen Identity Portal**
- User-facing portal for identity management
- View and update profile
- Manage consents and permissions
- View login history and connected services
- Manage credentials (add, remove, suspend)

**6. Government Service Catalog**
- Directory of all government services
- Integration standards and documentation
- Service onboarding and approval

### 3.2 Identity Credentials

**Primary Credential: Mobile Digital Identity**

**Features:**
- Mobile app (iOS and Android)
- QR code for authentication (scan to log in)
- Biometric unlock (fingerprint, face recognition)
- Push notification for login approval
- Digital wallet for credentials and documents
- Offline verification capability (for digital driver license, etc.)

**Enrollment Process:**
1. Download government digital identity app
2. Choose verification method (in-person, video call, or automated remote)
3. Complete identity proofing (IAL 2 or 3)
4. Set up biometric and PIN
5. Receive digital credential in app
6. Optional: Link additional credentials (driver license, health card)

**Secondary Credential: Smart Card**

**Features:**
- Chip-based smart card with PKI certificate
- PIN-protected
- Card reader required (USB or NFC)
- Higher security than mobile (AAL 3)

**Enrollment Process:**
1. In-person attendance at enrollment center
2. Identity proofing (IAL 3)
3. Biometric capture (photo, fingerprint)
4. Issue smart card
5. Set PIN
6. Card activated

**Credential for Private Sector Use**

Government digital identity can be used for private sector services (with user consent):

**Approved Use Cases:**
- Banking (account opening, online banking login)
- Healthcare (patient portals)
- Telecommunications (SIM card registration)
- Real estate (rental agreements, property purchases)
- Education (university enrollment)
- E-commerce (age verification, high-value purchases)

**Private Sector Integration Requirements:**
- Approved relying party agreement with government
- Comply with privacy and data protection laws
- Use only requested attributes (minimize data sharing)
- Annual security audit
- Pay usage fee (cost recovery for government)

---

## 4. Identity Proofing and Verification

### 4.1 In-Person Identity Proofing (IAL 2 or 3)

**Locations:**
- Government service centers (post offices, city halls)
- Banks (trusted partner locations)
- Mobile enrollment units (for rural/remote areas)

**Process:**

**Step 1: Appointment Scheduling**
- Citizen books appointment online or by phone
- Receives confirmation with required documents list

**Step 2: Document Presentation**
- Citizen attends in person
- Presents original identity documents:
  - IAL 2: 2 identity documents (1 with photo)
  - IAL 3: Passport or national ID card + proof of address

**Step 3: Document Inspection**
- Trained enrollment officer inspects documents
- Checks security features (holograms, watermarks, UV markings)
- Confirms document validity and expiry
- Verifies with issuing source (automated check)

**Step 4: Biometric Capture**
- Photo capture (high resolution)
- Optional: Fingerprints (for IAL 3)
- Liveness detection (ensure person is physically present, not photo)

**Step 5: Face Matching**
- Compare live photo to photo on ID document
- Automated face matching (95%+ confidence threshold)
- Manual review if automated match fails

**Step 6: Data Capture**
- Extract data from documents (OCR)
- Citizen reviews and confirms data
- Citizen signs consent form (data usage, privacy policy)

**Step 7: Credential Issuance**
- Generate digital credential
- Activate in mobile app or issue smart card
- Provide user guide and support information

**Quality Assurance:**
- Random audit of 5% of enrollments
- Enrollment officer performance metrics
- Fraud detection algorithms (flag suspicious patterns)

### 4.2 Remote Identity Proofing (IAL 2)

**Method 1: Video Call Verification**

**Process:**
1. Citizen initiates video call via identity portal
2. Live video agent (trained officer) guides process
3. Citizen shows identity documents to camera (front and back)
4. Agent inspects document security features
5. Liveness check (ask citizen to turn head, blink, smile)
6. Biometric capture (screenshot of video for face matching)
7. Agent verifies documents with issuing source
8. Citizen receives digital credential in mobile app

**Security Measures:**
- Recorded video session (audit trail)
- Encrypted video call
- Agent training and certification
- Quality assurance reviews

**Method 2: Automated Remote Verification (AI-Powered)**

**Process:**
1. Citizen uploads photos of identity documents via mobile app
2. Automated document validation:
   - Check document type and issuing country
   - Validate security features (using AI)
   - Extract data (OCR)
   - Verify document with issuing source (API)
3. Liveness detection:
   - Citizen takes selfie video
   - AI detects liveness (movement, blinking)
   - Prevent photo/video spoofing
4. Automated face matching:
   - Compare selfie to photo on ID document
   - Confidence threshold: 95%+
5. Optional: Knowledge-based verification
   - Ask questions only real person would know
   - Example: "What was your previous address?" (from credit bureau)
6. Manual review (if automated checks have low confidence)
7. Credential issued in mobile app

**Fraud Prevention:**
- AI-based document fraud detection
- Liveness detection algorithms (prevent spoofing)
- Velocity checks (prevent mass enrollment fraud)
- Device fingerprinting (detect suspicious devices)
- Behavioral analytics (flag unusual patterns)

### 4.3 Trusted Referee Verification (IAL 2)

For citizens who cannot complete in-person or remote verification (no documents, disability, etc.):

**Process:**
1. Citizen nominates a trusted referee:
   - Government employee (teacher, healthcare worker, social worker)
   - Lawyer, doctor, accountant (licensed professional)
   - Bank officer
   - Trusted community leader
2. Referee meets citizen in person
3. Referee verifies citizen's identity and documents
4. Referee completes attestation form (legal declaration)
5. Referee submits attestation to government
6. Government verifies referee credentials
7. Credential issued to citizen

**Referee Requirements:**
- Licensed professional or government employee
- No family relationship with citizen
- Trained in identity verification
- Face legal penalty for false attestation

---

## 5. Authentication Methods

### 5.1 Passwordless Authentication (Recommended)

**FIDO2/WebAuthn (Strongest Security)**

**How It Works:**
1. User registers security key with government service
2. Security key generates cryptographic key pair (private key stored on device, public key sent to server)
3. To log in: User inserts security key, enters PIN or biometric
4. Security key signs challenge with private key
5. Server verifies signature with public key
6. User authenticated (no password needed)

**Benefits:**
- Phishing-resistant (cryptographic binding to website)
- No shared secrets (private key never leaves device)
- Convenient (no password to remember)
- Supports biometric (fingerprint, face) or PIN

**Supported Devices:**
- Hardware security keys (YubiKey, Titan Key, Feitian)
- Mobile devices (iOS, Android with biometric)
- Laptops with biometric sensors (Windows Hello, Touch ID)

**Deployment:**
- Offer as default authentication method for IAL 2, AAL 2
- Provide fallback method (password + TOTP) for users without compatible device

---

**Biometric Authentication (Mobile)**

**How It Works:**
1. User enrolls biometric on mobile device (fingerprint, face)
2. To log in: User opens government identity app
3. Biometric verification on device (fingerprint or face recognition)
4. App generates signed assertion
5. User scans QR code on government website or approves push notification
6. Assertion sent to website
7. User authenticated

**Benefits:**
- Highly convenient (no password, no typing)
- Strong security (biometric + device possession)
- User-friendly (especially for low-digital-literacy users)

**Privacy:**
- Biometric data never leaves device
- Only cryptographic assertion sent to server
- Government does not store biometric data

---

### 5.2 Fallback Authentication Methods

**Password + Authenticator App (TOTP)**

For users without security key or biometric device:

**Process:**
1. User enters username and password
2. User opens authenticator app (Google Authenticator, Microsoft Authenticator)
3. User enters 6-digit code from app
4. User authenticated (AAL 2)

**Password Requirements:**
- Minimum 8 characters (recommend 12+)
- No complexity requirements (allow passphrases: "correct horse battery staple")
- Check against compromised password database (Have I Been Pwned API)
- Rate limiting (3 failed attempts = 15-minute lockout)
- Support password managers

---

**Smart Card + PIN (For Government Employees)**

**Process:**
1. User inserts smart card into card reader
2. User enters PIN
3. Smart card signs challenge with private key
4. User authenticated (AAL 3)

**Use Case:**
- Government employees accessing internal systems
- High-security environments

---

**Backup Codes (Recovery Method)**

**Purpose:** Allow access if primary authenticator lost or unavailable

**Process:**
1. User generates 10 single-use backup codes during enrollment
2. User stores codes securely (print and keep in safe place)
3. If primary authenticator unavailable, user enters backup code
4. Backup code consumed (single use)
5. User authenticated, prompted to reconfigure primary authenticator

**Security:**
- Backup codes hashed and salted (like passwords)
- Single use only
- Rate limited (3 attempts)

---

## 6. Credential Lifecycle Management

### 6.1 Credential Issuance

**Initial Enrollment:**
- Identity proofing (IAL 2 or 3)
- Biometric capture (photo, optional fingerprint)
- Credential issued (mobile app or smart card)
- User sets up authentication methods
- User receives welcome email with user guide

**Credential Validity:**
- Mobile credential: 5 years (linked to biometric and device)
- Smart card: 5 years (physical expiry date on card)
- Automatic renewal notification 60 days before expiry

### 6.2 Credential Renewal

**Process:**
1. Citizen receives renewal notification (email, SMS, app push)
2. Citizen logs into identity portal
3. Confirm identity attributes still correct
4. Update photo if significantly changed (e.g., aging)
5. Re-verify identity (simplified process if no changes):
   - No changes: Self-service renewal (automatic)
   - Minor changes (address): Upload proof of address
   - Major changes (name): In-person or video verification
6. New credential issued

**Renewal Fee:**
- Free for standard renewal (every 5 years)
- Fee for lost/stolen credential replacement

### 6.3 Credential Suspension

**Reasons for Suspension:**
- User reports device lost or stolen
- Suspicious activity detected
- User request (temporary suspension)

**Process:**
1. User reports issue via helpline or identity portal
2. Credential immediately suspended (cannot be used for authentication)
3. User receives confirmation (email, SMS)
4. To reactivate:
   - Device found: User reactivates via web portal (after authentication with backup method)
   - Device stolen: Issue new credential (user re-enrolls biometric on new device)

### 6.4 Credential Revocation

**Reasons for Revocation:**
- Death of credential holder
- Fraud or identity theft detected
- Legal order (court order, law enforcement)
- Voluntary closure by user

**Process:**
1. Revocation request submitted (with evidence)
2. Identity team reviews request
3. Credential revoked (added to revocation list)
4. All active sessions terminated
5. User notified (if not deceased or fraud case)

**Revocation Registry:**
- Real-time credential status checking
- Services query registry before accepting authentication
- Comply with OCSP (Online Certificate Status Protocol) standard

---

## 7. Privacy and Consent Management

### 7.1 Privacy Principles

**Data Minimization:**
- Collect only data necessary for identity proofing and authentication
- Services request only attributes they need (e.g., age verification, not full date of birth)
- Pseudonymous identifiers where possible (service-specific ID, not national ID number)

**User Control:**
- Citizens view and manage all data held about them
- Citizens control which services can access which attributes
- Citizens can revoke consent at any time

**Transparency:**
- Clear privacy policy in plain language
- Explain how data is used, stored, shared
- Audit logs: Citizens see who accessed their data and when

**Purpose Limitation:**
- Data used only for stated purpose (identity verification and authentication)
- No secondary use without consent
- No government data matching or profiling without legal basis

**Data Security:**
- Encryption at rest and in transit
- Access controls (need-to-know basis)
- Regular security audits
- Breach notification within 72 hours

### 7.2 Consent Management

**Attribute Release Consent**

When service requests identity attributes:

**Step 1: Service Requests Attributes**
- Service specifies which attributes it needs (name, email, date of birth, address)
- Service specifies why it needs each attribute (legal basis)

**Step 2: User Consent Prompt**
- User sees clear consent screen:
  - Service name and description
  - Attributes requested
  - Why each attribute is needed
  - How long service will retain data
  - Link to service privacy policy

**Step 3: User Decision**
- User approves (releases attributes to service)
- User denies (attributes not released, service access denied)
- User edits (releases some attributes but not others, if service allows)

**Step 4: Consent Recorded**
- Consent logged with timestamp, attributes released, user IP
- User can view and revoke consent in identity portal

**Example Consent Screen:**
```
Tax Filing Service is requesting access to:

✓ Full Name - Required to identify your tax account
✓ Date of Birth - Required to verify your identity
✓ Address - Required to send tax documents
✓ Email - Optional, for notifications

This service will retain your data for 7 years as required by law.

[View Privacy Policy]

[Approve] [Deny] [Edit]
```

**Ongoing Consent Management:**
- User views all active consents in identity portal
- User revokes consent at any time (service loses access immediately)
- Annual consent review prompt (confirm or revoke)

### 7.3 Audit Logging and Transparency

**User Activity Log:**

Citizens can view in identity portal:
- Login history (service, date/time, IP address, device)
- Attribute releases (service, attributes released, date/time)
- Consent changes (granted, revoked)
- Credential changes (issued, renewed, suspended)

**Retention:**
- Login history: 12 months
- Attribute releases: 7 years (compliance requirement)
- Consent logs: Duration of consent + 7 years

**Export:**
- User can download complete activity log (CSV, PDF)
- Comply with data portability rights

---

## 8. Accessibility and Inclusion

### 8.1 Inclusive Design

**Digital Divide Mitigation:**

**Assisted Digital Services:**
- In-person assistance at government service centers
- Helpline support (phone, video call)
- Support in multiple languages
- Simplified user interface option

**Multiple Enrollment Channels:**
- In-person (service centers)
- Remote (video call, automated)
- Trusted referee (for vulnerable populations)
- Outreach (mobile enrollment units for rural/remote areas)

### 8.2 Accessibility Standards

**WCAG 2.1 AA Compliance:**
- All digital identity services meet Web Content Accessibility Guidelines
- Screen reader compatible
- Keyboard navigation
- High contrast mode
- Adjustable text size

**Biometric Alternatives:**
- For citizens unable to use biometric authentication (disability, injury)
- Alternative: Smart card + PIN, or password + TOTP
- No penalty for using alternative method

### 8.3 Vulnerable Populations

**Special Provisions:**

**Homeless or Refugees:**
- Trusted referee verification (social worker, NGO worker)
- Alternative proof of identity (affidavit, community attestation)
- Free credential issuance

**Elderly or Disabled:**
- In-home enrollment service (for mobility-impaired)
- Caregiver-assisted enrollment (with appropriate safeguards)
- Simplified authentication (lower complexity PIN)

**Children:**
- Parent or guardian enrolls child
- Parent manages child's digital identity until age 16
- At age 16, child gains full control and re-verifies identity

---

## 9. Interoperability and Standards

### 9.1 International Standards Compliance

**Identity Standards:**
- ISO/IEC 29115: Entity authentication assurance framework
- NIST SP 800-63-3: Digital identity guidelines
- eIDAS (EU): Regulation for electronic identification (for international recognition)
- ICAO 9303: Machine-readable travel documents (passport, ID card)

**Authentication Protocols:**
- SAML 2.0: Security Assertion Markup Language (enterprise federation)
- OpenID Connect: Modern web authentication (OAuth 2.0 based)
- FIDO2/WebAuthn: Passwordless authentication standard
- OAuth 2.0: Authorization framework

### 9.2 Cross-Border Recognition

**International Digital Identity Recognition:**

**Objective:** Enable citizens to use national digital identity when traveling or accessing services in other countries.

**Approach:**
1. **Bilateral Agreements**: Government-to-government agreements for mutual recognition
2. **Regional Frameworks**: Participate in regional identity frameworks (e.g., eIDAS in EU, ASEAN digital identity framework)
3. **Gateway Services**: Operate identity gateway to translate between domestic and international standards

**Use Cases:**
- Cross-border e-commerce (age verification, identity verification)
- Access to government services while abroad (consular services)
- Mutual recognition of professional credentials (doctors, lawyers)

---

## 10. Governance and Oversight

### 10.1 Identity Governance Structure

**Digital Identity Board**
- **Chair**: Chief Digital Officer
- **Members**: Privacy Commissioner, Cybersecurity Chief, Legal Counsel, Civil Society Representative
- **Mandate**: Oversee digital identity program, approve policies, resolve escalated issues
- **Frequency**: Quarterly meetings

**Identity Program Office**
- **Director**: Reports to Chief Digital Officer
- **Functions**: Operate identity system, manage enrollment centers, issue credentials, enforce policies, user support
- **Team**: Technical operations, enrollment services, policy and compliance, user support

**Privacy and Ethics Committee**
- **Mandate**: Ensure digital identity respects privacy and human rights
- **Activities**: Privacy impact assessments, ethics reviews, citizen engagement
- **Reporting**: Annual public report on privacy and ethics

### 10.2 Compliance and Audit

**Annual Identity Audit:**
- Independent third-party audit of identity system
- Scope: Security, privacy, operational effectiveness, compliance with framework
- Public report with findings and recommendations

**Continuous Monitoring:**
- Real-time security monitoring (fraud detection, anomaly detection)
- Monthly operational metrics (enrollment volume, authentication success rate, user satisfaction)
- Quarterly privacy compliance review

**Incident Response:**
- 24/7 security operations center
- Incident response plan (identity fraud, data breach)
- Breach notification protocol (notify affected citizens within 72 hours)

---

## 11. Implementation Roadmap

### Phase 1: Foundation (Year 1)

**Months 1-3: Design and Planning**
- Establish governance structure (Digital Identity Board, Program Office)
- Define technical architecture and standards
- Select technology vendors (identity platform, biometric systems)
- Develop privacy impact assessment
- Design user experience (mobile app, web portal)

**Months 4-6: Build and Pilot**
- Develop mobile identity app (iOS, Android)
- Build identity provider infrastructure
- Set up enrollment centers (5 pilot locations)
- Train enrollment officers
- Conduct security and privacy audits

**Months 7-9: Pilot Launch**
- Launch pilot program (50,000 users)
- Test enrollment processes (in-person, remote)
- Integrate with 5 pilot government services
- Gather user feedback and metrics
- Refine processes based on lessons learned

**Months 10-12: Pilot Evaluation and Scale Planning**
- Evaluate pilot results
- Adjust based on feedback
- Plan national rollout
- Develop marketing and communications campaign

**Year 1 Targets:**
- 50,000 citizens enrolled in pilot
- 5 government services integrated
- 90%+ user satisfaction
- Security and privacy audit passed

---

### Phase 2: National Rollout (Years 2-3)

**Year 2:**
- Scale enrollment to 100 service centers nationwide
- Launch national marketing campaign ("Your Digital Identity")
- Integrate with 50 high-volume government services
- Enable private sector integration (banks, telecom)
- Target: 2 million citizens enrolled (20% of adult population)

**Year 3:**
- Full national coverage (300+ enrollment centers)
- Integrate with all government services (200+ services)
- Launch digital credential wallet (driver license, health card, student ID)
- Target: 8 million citizens enrolled (80% of adult population)

---

### Phase 3: Optimization and Innovation (Years 4-5)

**Year 4:**
- Optimize user experience based on data
- Introduce advanced features (verifiable credentials, self-sovereign identity elements)
- International recognition agreements (3+ countries)
- Target: 9.5 million citizens enrolled (95% of adult population)

**Year 5:**
- Continuous improvement and innovation
- Evaluate emerging technologies (blockchain, decentralized identity)
- Expand private sector ecosystem (100+ private sector services)
- Achieve universal digital identity (95%+ adult population)

---

## 12. Templates and Tools

### 12.1 Service Risk Assessment Template

```markdown
# Digital Identity Risk Assessment for Government Service

## Service Information
- Service Name:
- Agency:
- Service Description:
- User Base: (number of users, demographics)

## Risk Assessment

### 1. Impact of Identity Fraud

If someone fraudulently accesses this service, what is the potential harm?

**Financial Impact:**
- [ ] None or minimal (<$100)
- [ ] Low ($100-$1,000)
- [ ] Moderate ($1,000-$10,000)
- [ ] High (>$10,000)

**Privacy Impact:**
- [ ] None (public data)
- [ ] Low (internal data, minimal sensitivity)
- [ ] Moderate (personal data, some sensitivity)
- [ ] High (highly sensitive personal data: health, financial, biometric)

**Safety Impact:**
- [ ] None
- [ ] Low (inconvenience)
- [ ] Moderate (potential for harm)
- [ ] High (serious safety risk)

**Reputational Impact:**
- [ ] None or minimal
- [ ] Low (minor embarrassment)
- [ ] Moderate (significant reputational damage)
- [ ] High (severe reputational damage, loss of public trust)

### 2. Overall Risk Level

Based on highest impact category:
- [ ] **Low Risk**: All impacts are None/Low → Recommend IAL 1, AAL 1
- [ ] **Moderate Risk**: At least one impact is Moderate → Recommend IAL 2, AAL 2
- [ ] **High Risk**: At least one impact is High → Recommend IAL 3, AAL 3

### 3. Recommended Assurance Levels

**Identity Assurance Level (IAL):**
- [ ] IAL 1 (Self-asserted, no verification)
- [ ] IAL 2 (Verified identity, remote or in-person)
- [ ] IAL 3 (Verified identity, in-person with biometric)

**Authenticator Assurance Level (AAL):**
- [ ] AAL 1 (Single-factor: password or email link)
- [ ] AAL 2 (Multi-factor: password + TOTP/security key)
- [ ] AAL 3 (Cryptographic: smart card + PIN, or FIDO2 + biometric)

**Federation Assurance Level (FAL):**
- [ ] FAL 1 (Signed assertion)
- [ ] FAL 2 (Signed and encrypted assertion, back-channel)
- [ ] FAL 3 (Holder-of-key binding)

### 4. Required Identity Attributes

List only the attributes absolutely necessary for this service:
- [ ] Full Name
- [ ] Date of Birth (or just Age verification?)
- [ ] Email
- [ ] Phone Number
- [ ] Address
- [ ] National ID Number
- [ ] Other: ___________

**Justification for Each Attribute:**
- Attribute: _______
- Why Needed: _______
- Legal Basis: _______

### 5. Data Retention

How long will this service retain user identity data?
- [ ] Not retained (authentication only)
- [ ] Duration of service use + ___ days/months/years
- [ ] Legal requirement: ___ years

### 6. Privacy Impact

- [ ] Privacy Impact Assessment completed
- [ ] Data minimization applied (only necessary attributes requested)
- [ ] User consent mechanism designed
- [ ] Data security measures defined

### 7. Approval

**Risk Assessment Completed By:**
- Name: ___________
- Role: ___________
- Date: ___________

**Reviewed and Approved By:**
- Agency CISO: ___________ Date: _______
- Identity Program Office: ___________ Date: _______
```

---

### 12.2 Identity Proofing Checklist (IAL 2 In-Person)

```markdown
# In-Person Identity Proofing Checklist (IAL 2)

**Applicant Name:** ___________
**Date:** ___________
**Enrollment Officer:** ___________
**Location:** ___________

## Step 1: Document Collection

**Primary Identity Document (Photo ID):**
- [ ] Passport
- [ ] Driver License
- [ ] National ID Card
- [ ] Other: ___________

**Document Details:**
- Document Number: ___________
- Issue Date: ___________
- Expiry Date: ___________ (must be current, not expired)
- Issuing Authority: ___________

**Secondary Identity Document:**
- [ ] Birth Certificate
- [ ] Utility Bill (within 3 months)
- [ ] Bank Statement (within 3 months)
- [ ] Other: ___________

## Step 2: Document Inspection

**Security Features Checked:**
- [ ] Hologram present and genuine
- [ ] Watermark present (hold to light)
- [ ] UV markings verified (UV light)
- [ ] Microprinting legible (magnification)
- [ ] Photo securely attached (not tampered)
- [ ] No signs of alteration or forgery

**Document Validation:**
- [ ] Document type matches issuing authority
- [ ] Document number format correct
- [ ] Expiry date valid (not expired)
- [ ] Photo quality acceptable
- [ ] All text legible

**Issuing Source Verification:**
- [ ] Document verified with issuing authority (automated check)
- Verification Result: [ ] Confirmed [ ] Unable to Verify

## Step 3: Biometric Capture

**Photo Capture:**
- [ ] Photo captured (high resolution, 300 DPI minimum)
- [ ] Lighting adequate (no shadows on face)
- [ ] Face clearly visible (no glasses, hat, mask)
- [ ] Neutral expression
- [ ] Liveness confirmed (person physically present)

**Optional (IAL 3 only):**
- [ ] Fingerprints captured (left and right index finger)
- [ ] Quality check passed

## Step 4: Face Matching

**Automated Face Match:**
- [ ] Live photo compared to ID document photo
- Match Confidence: ___% (require 95%+ for automatic pass)
- Result: [ ] Pass (95%+) [ ] Manual Review Needed (<95%)

**Manual Face Match (if automated fails):**
- [ ] Enrollment officer compares face to ID photo
- [ ] Considers age, aging, changes in appearance
- Result: [ ] Pass [ ] Fail

## Step 5: Data Capture and Verification

**Data Extracted from Documents:**
- Full Name: ___________
- Date of Birth: ___________
- Address: ___________
- National ID Number (if applicable): ___________

**Data Verification with Applicant:**
- [ ] Applicant confirms all data is correct
- [ ] Applicant confirms current address
- [ ] Applicant provides email: ___________
- [ ] Applicant provides phone: ___________

## Step 6: Consent and Signature

- [ ] Privacy policy explained to applicant
- [ ] Applicant consents to data collection and use
- [ ] Applicant signs consent form (digital or paper)
- Signature: ___________

## Step 7: Credential Issuance

**Credential Type:**
- [ ] Mobile digital identity (QR code sent to app)
- [ ] Smart card (issued and activated)

**Setup:**
- [ ] Applicant downloads mobile app (or receives smart card)
- [ ] Applicant sets up biometric or PIN
- [ ] Applicant confirms app/card working
- [ ] Applicant receives welcome email with user guide

## Step 8: Quality Assurance

**Enrollment Officer Certification:**
- I certify that I have verified the applicant's identity in accordance with government identity proofing standards (IAL 2).
- Officer Name: ___________
- Officer ID: ___________
- Signature: ___________ Date: ___________

**Supervisor Review (random 5% sample):**
- [ ] Reviewed by supervisor
- Supervisor Name: ___________
- Result: [ ] Approved [ ] Requires Follow-Up
- Supervisor Signature: ___________ Date: ___________
```

---

## 13. Appendices

### Appendix A: Glossary

- **IAL (Identity Assurance Level)**: Confidence that the person is who they claim to be
- **AAL (Authenticator Assurance Level)**: Confidence that the person accessing the service is the rightful credential holder
- **FAL (Federation Assurance Level)**: Strength of assertion and protection during federated authentication
- **FIDO2/WebAuthn**: Modern passwordless authentication standard (phishing-resistant)
- **TOTP**: Time-based One-Time Password (6-digit code from authenticator app)
- **Biometric**: Unique physical characteristic (fingerprint, face, iris) used for authentication
- **Liveness Detection**: Technology to ensure person is physically present (not a photo or video)
- **Identity Proofing**: Process of verifying a person's real-world identity
- **Credential Service Provider (CSP)**: Entity that issues digital credentials
- **Relying Party**: Service that relies on digital identity for authentication

### Appendix B: References

**Standards:**
- NIST SP 800-63-3: Digital Identity Guidelines
- ISO/IEC 29115: Entity Authentication Assurance Framework
- eIDAS Regulation (EU): Electronic Identification and Trust Services
- ICAO 9303: Machine-Readable Travel Documents

**Best Practices:**
- UK GOV.UK Verify
- Estonian e-Identity (eID)
- Singapore SingPass
- New Zealand RealMe

---

## Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | [Date] | Chief Digital Officer | Initial framework release |

**Approval**

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Chief Digital Officer |  |  |  |
| Privacy Commissioner |  |  |  |
| Digital Government Board Chair |  |  |  |

---

**For questions or support:**

Digital Identity Program Office
Email: identity@digital.gov.[country]
Helpline: 1-800-IDENTITY
Portal: https://identity.gov.[country]

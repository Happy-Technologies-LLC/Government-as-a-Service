# Layer 4: Unified Citizen Experience - Technical Architecture Guide

## Executive Summary

### Purpose and Scope

Layer 4 represents the unified front-door to all government services - the single point where citizens interact with their government regardless of which agency provides the service. This is the "customer-facing" layer where design meets engineering, where policy becomes experience, and where digital transformation becomes tangible for every citizen.

This technical architecture guide provides **principles and patterns**, not technology prescriptions. Whether you build with React, Vue, Angular, Svelte, or server-side frameworks is a decision for your implementation team based on skills, constraints, and context. What matters is that you follow architectural principles that ensure accessibility, performance, security, and long-term maintainability.

### Key Architectural Principles

1. **API-First Architecture**: Layer 4 consumes APIs from Layer 1, never directly accessing databases or backend systems
2. **Mobile-First, Responsive Design**: Single codebase serving desktop, tablet, and mobile experiences
3. **Accessibility by Default**: WCAG 2.1 AA minimum, designed for screen readers and assistive technology
4. **Progressive Enhancement**: Core functionality works without JavaScript, enhanced with it
5. **Performance Budget**: <3 second initial load, <1 second subsequent navigation
6. **Security by Design**: CSP headers, HTTPS only, XSS/CSRF protection built-in
7. **Offline-Capable**: Service workers provide resilience during network failures
8. **Observable by Default**: User journey tracking, performance monitoring, error reporting

### Target Outcomes

- **Citizen satisfaction**: 80%+ satisfaction scores (measured via feedback widgets)
- **Accessibility**: 100% WCAG 2.1 AA compliance, zero critical accessibility defects
- **Performance**: 90%+ pages load in <3 seconds on 3G connections
- **Availability**: 99.9%+ uptime (excluding planned maintenance)
- **Security**: Zero critical vulnerabilities, annual security audits pass
- **Usage**: 60%+ of transactions completed digitally within 3 years

### Document Audience

- **Frontend Architects**: Overall system design and technology choices
- **UX Engineers**: Component architecture and design system implementation
- **Backend-for-Frontend Developers**: API orchestration and integration
- **Mobile Developers**: Native or hybrid mobile app architecture
- **DevOps Engineers**: Deployment, monitoring, and infrastructure patterns
- **Security Teams**: Threat modeling and security architecture review

---

## 1. Architecture Principles (Technology-Agnostic)

### 1.1 API-First Architecture

**Principle**: Layer 4 is a presentation layer that consumes APIs from Layer 1 (Shared Technology Core). It never directly connects to databases, message queues, or internal systems.

**Why This Matters**:
- **Separation of Concerns**: Frontend teams focus on user experience, backend teams focus on business logic
- **Security**: Backend can enforce authorization without trusting frontend
- **Flexibility**: Can swap frontend technologies without touching backend
- **Multi-Channel**: Same APIs serve web, mobile, chatbots, third-party integrations

**Implementation Pattern**:
```
Citizen Browser → Layer 4 Frontend → Layer 4 BFF (Backend-for-Frontend)
                                   ↓
                          Layer 1 API Gateway (with auth)
                                   ↓
                          Backend Services (Citizen, Services, Applications)
```

**Anti-Pattern to Avoid**:
```
❌ Citizen Browser → Layer 4 Frontend → Direct Database Connection
```

**Example**: When a citizen views their profile, the flow is:
1. Frontend sends authenticated request to BFF: `GET /api/v1/citizen/profile`
2. BFF orchestrates calls to Layer 1: `GET /identity/users/{id}`, `GET /applications/{userId}`
3. BFF aggregates responses and returns single payload to frontend
4. Frontend renders the profile page

### 1.2 Progressive Enhancement

**Principle**: Core functionality works without JavaScript. JavaScript enhances the experience but is not required.

**Why This Matters**:
- **Accessibility**: Screen readers work better with semantic HTML
- **Performance**: Initial render doesn't wait for JavaScript download/parse
- **Resilience**: Works even if JavaScript fails to load (CDN outage, corporate firewall)
- **SEO**: Search engines index server-rendered HTML

**Implementation Pattern**:
- Server renders semantic HTML with forms that POST to server
- JavaScript intercepts form submissions, makes AJAX calls, updates DOM without page reload
- JavaScript adds progressive features: autosave, real-time validation, autocomplete

**Example**: Gov.UK form submission
```html
<!-- Works without JavaScript -->
<form method="POST" action="/submit-application">
  <label for="name">Full Name</label>
  <input type="text" id="name" name="name" required>
  <button type="submit">Submit</button>
</form>

<!-- JavaScript enhances with client-side validation -->
<script>
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch('/api/submit-application', {
      method: 'POST',
      body: data
    });
    // Update UI without page reload
  });
</script>
```

### 1.3 Responsive Design (Single Codebase)

**Principle**: One codebase adapts to desktop (1920px), tablet (768px), and mobile (375px) screens using CSS media queries and responsive components.

**Why This Matters**:
- **Cost Efficiency**: Maintain one codebase instead of three
- **Consistency**: Same features, content, and design across devices
- **Mobile Growth**: 60%+ government service usage on mobile in developed countries

**Implementation Pattern**:
```css
/* Mobile-first CSS */
.service-card {
  width: 100%;
  padding: 1rem;
}

/* Tablet and up */
@media (min-width: 768px) {
  .service-card {
    width: 50%;
    padding: 1.5rem;
  }
}

/* Desktop */
@media (min-width: 1200px) {
  .service-card {
    width: 33.333%;
    padding: 2rem;
  }
}
```

**Testing Requirements**:
- Test on real devices: iPhone SE (small screen), iPad Pro (large tablet), desktop monitors
- Test with browser DevTools responsive mode
- Test with Chrome Lighthouse mobile audit

### 1.4 Accessibility-First Design

**Principle**: WCAG 2.1 Level AA is the minimum standard. Aim for AAA where feasible.

**Why This Matters**:
- **Legal Compliance**: Many countries mandate accessibility (US Section 508, EU Web Accessibility Directive)
- **Inclusion**: 15% of population has some form of disability
- **Usability**: Accessible design benefits everyone (keyboard navigation, clear labels)

**Implementation Pattern**:
- **Semantic HTML**: Use `<button>`, `<nav>`, `<main>`, `<header>`, not `<div>` with click handlers
- **Keyboard Navigation**: Every interactive element reachable via Tab key
- **Screen Reader Support**: ARIA labels, live regions, meaningful alt text
- **Color Contrast**: 4.5:1 minimum for normal text, 3:1 for large text and UI components
- **Focus Management**: Visible focus indicators, logical tab order

**Example**: Accessible button vs. inaccessible div
```html
<!-- ✅ Accessible -->
<button type="button" aria-label="Close dialog">
  <svg aria-hidden="true" focusable="false">...</svg>
</button>

<!-- ❌ Inaccessible -->
<div class="button" onclick="closeDialog()">
  <svg>...</svg>
</div>
```

**Testing Requirements**:
- Automated: axe DevTools, WAVE, Lighthouse accessibility audit
- Manual: Navigate entire site with keyboard only, test with NVDA/JAWS screen reader
- User Testing: Include citizens with disabilities in usability testing

### 1.5 Performance Budget

**Principle**: Set measurable performance targets and fail builds that exceed them.

**Why This Matters**:
- **User Experience**: Slow sites lead to abandonment (53% of mobile users abandon sites taking >3 seconds)
- **Equity**: Citizens on slow connections or old devices deserve equal access
- **Cost**: Faster sites reduce server costs (less CPU time per request)

**Performance Budget Targets**:
- **Initial Load**: <3 seconds on 3G connection (Lighthouse "Fast 3G" throttling)
- **Time to Interactive (TTI)**: <5 seconds
- **Largest Contentful Paint (LCP)**: <2.5 seconds
- **First Input Delay (FID)**: <100ms
- **Cumulative Layout Shift (CLS)**: <0.1
- **Total JavaScript**: <200KB gzipped
- **Total Page Weight**: <1MB including images

**Implementation Pattern**:
- Use Lighthouse CI to enforce budgets in CI/CD pipeline
- Monitor Real User Monitoring (RUM) data weekly
- Optimize images (WebP format, lazy loading, responsive images)
- Code split JavaScript by route (load only what's needed)
- Defer non-critical JavaScript (analytics, chat widgets)

### 1.6 Security by Design

**Principle**: Security is not bolted on; it's designed into every layer from day one.

**Why This Matters**:
- **Trust**: Citizens trust government with sensitive data (health records, tax returns)
- **Legal**: Data breaches have severe legal and reputational consequences
- **Threat Landscape**: Government sites are high-value targets for attackers

**Security Architecture Principles**:
1. **HTTPS Everywhere**: No mixed content, HSTS headers, redirect HTTP to HTTPS
2. **Content Security Policy (CSP)**: Prevent XSS by allowlisting script sources
3. **Input Validation**: Sanitize all user input, escape output, parameterized queries
4. **Authentication**: Secure session management, automatic timeout (15 minutes idle)
5. **Authorization**: Backend enforces permissions, frontend only hides UI elements
6. **CSRF Protection**: Synchronizer token pattern for state-changing operations
7. **Dependency Management**: Automated scanning (Dependabot, Snyk), patch within 7 days
8. **Secrets Management**: Never commit secrets to Git, use environment variables or vault

**Example CSP Header**:
```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-{random}';
  style-src 'self' 'nonce-{random}';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' https://api.gov.example;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
```

### 1.7 Offline-Capable Architecture

**Principle**: Use service workers to provide graceful degradation during network failures.

**Why This Matters**:
- **Resilience**: Government services should work during disasters (hurricanes, earthquakes)
- **Rural Access**: Citizens in areas with poor connectivity deserve equal access
- **User Experience**: Instant loading of cached pages feels faster than waiting for network

**Implementation Pattern**:
```javascript
// Service Worker: Cache-first for static assets, network-first for API calls
self.addEventListener('fetch', (event) => {
  if (event.request.url.includes('/api/')) {
    // Network-first for API calls
    event.respondWith(
      fetch(event.request)
        .catch(() => caches.match(event.request))
    );
  } else {
    // Cache-first for static assets
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  }
});
```

**Offline Features**:
- **Static Content**: Cached for offline viewing (service descriptions, contact info)
- **Forms**: Draft saved to IndexedDB, synced when connection restored
- **Notifications**: "You are offline" banner, queue for sync when online

### 1.8 Analytics and Observability

**Principle**: Measure everything that matters - user behavior, performance, errors - to continuously improve.

**Why This Matters**:
- **Data-Driven Decisions**: "40% of users abandon the form at step 3" leads to redesign
- **Performance Monitoring**: Detect regressions before users complain
- **Error Tracking**: Fix bugs proactively based on real-world error reports

**Metrics to Track**:
- **User Behavior**: Page views, conversion funnels, session duration, bounce rate
- **Performance**: Core Web Vitals (LCP, FID, CLS), page load times, API response times
- **Errors**: JavaScript exceptions, API failures, broken links
- **Accessibility**: Automated scan results, user feedback on accessibility issues

**Implementation Pattern**:
```javascript
// Track user journey through multi-step form
analytics.track('form_started', { form_id: 'passport_application' });
analytics.track('form_step_completed', { form_id: 'passport_application', step: 2 });
analytics.track('form_submitted', { form_id: 'passport_application', duration_seconds: 245 });

// Track performance
performance.observe('largest-contentful-paint', (entry) => {
  analytics.track('lcp', { value: entry.renderTime, page: window.location.pathname });
});

// Track errors
window.addEventListener('error', (event) => {
  errorTracker.report(event.error, {
    page: window.location.pathname,
    user_id: currentUser.id
  });
});
```

**Privacy Considerations**:
- Comply with GDPR/CCPA: Cookie consent, anonymize IP addresses, data retention limits
- Use first-party analytics where possible (vs. Google Analytics)
- Never track Personally Identifiable Information (PII) in analytics events

---

## 2. Frontend Architecture Patterns

Governments worldwide have converged on three frontend architecture patterns, each with trade-offs. The choice depends on your use case, team skills, and constraints.

### 2.1 Pattern 1: Server-Side Rendering (SSR)

**Description**: Server generates HTML on every request and sends it to the browser. JavaScript enhances the experience but is not required for core functionality.

**Real-World Examples**:
- **Gov.UK**: Node.js + Express + Nunjucks templates
- **Denmark borger.dk**: .NET MVC + Razor templates
- **Netherlands Overheid.nl**: Java + Thymeleaf templates

**Architecture Diagram**:
```
Citizen Browser
      ↓ HTTP Request
Layer 4 Web Server (Node.js, .NET, Java)
      ↓ Fetch Data
Layer 1 APIs (Identity, Services, Applications)
      ↓ Render Template
HTML Response (fully rendered page)
      ↓ Browser Paints
Citizen sees content (JavaScript optional)
```

**Strengths**:
- ✅ **Fast Time-to-First-Byte**: Server sends HTML immediately
- ✅ **SEO-Friendly**: Search engines see fully rendered content
- ✅ **Accessible by Default**: Semantic HTML works with screen readers
- ✅ **Low JavaScript Bundle**: <50KB for progressive enhancement
- ✅ **Works Without JavaScript**: Core functionality degrades gracefully

**Weaknesses**:
- ❌ **Server Load**: Every page view requires server CPU to render template
- ❌ **Full Page Reloads**: Navigation feels slower than SPA
- ❌ **Limited Interactivity**: Rich interactions (drag-and-drop, real-time updates) harder to build
- ❌ **State Management**: Managing client-side state across pages is complex

**When to Use**:
- Public-facing informational sites (service catalog, eligibility checkers)
- Form-heavy applications (applications, registrations, submissions)
- Content-heavy sites (news, guides, documentation)
- When accessibility and SEO are paramount
- When JavaScript skills are limited on team

**When to Avoid**:
- Dashboard-heavy applications (analytics, monitoring, admin panels)
- Real-time collaborative tools (chat, document editing)
- Offline-first applications (PWAs with extensive offline functionality)

**Technology Options** (not prescriptive):
- **Node.js**: Express + EJS/Pug/Nunjucks, Next.js (SSR mode), Remix
- **.NET**: ASP.NET MVC + Razor, Blazor Server
- **Java**: Spring MVC + Thymeleaf, JSP
- **Python**: Django, Flask + Jinja2
- **PHP**: Laravel Blade, Symfony Twig
- **Ruby**: Rails + ERB

**Implementation Example (Pseudocode)**:
```javascript
// Server-side route handler
app.get('/services/:serviceId', async (req, res) => {
  // Fetch data from Layer 1 API
  const service = await apiClient.get(`/api/v1/services/${req.params.serviceId}`);
  const relatedServices = await apiClient.get(`/api/v1/services?related=${req.params.serviceId}`);

  // Render template with data
  res.render('service-detail', {
    service,
    relatedServices,
    user: req.user // from session
  });
});
```

### 2.2 Pattern 2: Single-Page Application (SPA)

**Description**: Server sends minimal HTML shell. JavaScript downloads, fetches data from APIs, and renders UI in the browser. Subsequent navigation happens client-side without page reloads.

**Real-World Examples**:
- **Singapore LifeSG**: React + Redux + Material-UI
- **UAE Government Services**: Vue.js + Vuex
- **Australia myGov**: Angular + NgRx

**Architecture Diagram**:
```
Citizen Browser
      ↓ Initial Request
Layer 4 CDN (HTML shell + JavaScript bundle)
      ↓ JavaScript Executes
API Calls to Layer 4 BFF
      ↓
Layer 1 APIs (Identity, Services, Applications)
      ↓ JSON Response
JavaScript Renders UI
      ↓
Citizen sees content (requires JavaScript)
```

**Strengths**:
- ✅ **Rich Interactivity**: Native app-like experience, smooth animations
- ✅ **Fast Navigation**: Subsequent pages load instantly (no full page reload)
- ✅ **Offline Capability**: Service workers + IndexedDB for offline-first
- ✅ **State Management**: Client-side state persists across navigation
- ✅ **Developer Experience**: Modern tooling, hot module reloading, component libraries

**Weaknesses**:
- ❌ **Slow Initial Load**: Must download/parse JavaScript before rendering
- ❌ **SEO Challenges**: Search engines struggle with client-rendered content
- ❌ **Accessibility Harder**: Must manually manage focus, live regions, keyboard navigation
- ❌ **Large JavaScript Bundle**: 200KB-500KB common for complex apps
- ❌ **Requires JavaScript**: Completely broken without JavaScript

**When to Use**:
- Authenticated citizen portals (dashboards, account management)
- Complex workflows (multi-step wizards with conditional logic)
- Real-time applications (chat, notifications, live updates)
- Offline-first applications (field agents collecting data without connectivity)
- When team has strong JavaScript skills

**When to Avoid**:
- Public-facing marketing sites (use SSR for SEO and performance)
- Simple form submissions (SSR is faster and more accessible)
- When users have slow connections or old devices (JavaScript overhead too high)

**Technology Options** (not prescriptive):
- **React**: Create React App, Vite + React, React + Redux/Zustand/Jotai
- **Vue.js**: Vue CLI, Vite + Vue, Vue + Vuex/Pinia
- **Angular**: Angular CLI, Angular + NgRx
- **Svelte**: SvelteKit (SPA mode)

**Implementation Example (Pseudocode)**:
```javascript
// React component fetching data from API
function ServiceDetailPage({ serviceId }) {
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchService() {
      const response = await fetch(`/api/v1/services/${serviceId}`);
      const data = await response.json();
      setService(data);
      setLoading(false);
    }
    fetchService();
  }, [serviceId]);

  if (loading) return <LoadingSpinner />;
  return <ServiceDetail service={service} />;
}
```

### 2.3 Pattern 3: Hybrid / Islands Architecture

**Description**: Best of both worlds. Server renders most content as HTML, but "islands" of interactivity are hydrated with JavaScript. Think of a mostly-static page with a few interactive widgets.

**Real-World Examples**:
- **Estonia e-Estonia**: Progressive enhancement, minimal JavaScript islands
- **Netherlands DigiD**: Server-rendered with selective hydration
- **UK NHS Digital**: Static content with interactive appointment booking widget

**Architecture Diagram**:
```
Citizen Browser
      ↓ Initial Request
Layer 4 Server (SSR + Island Detection)
      ↓ Render HTML (static content)
      ↓ Mark Interactive Islands
HTML Response (mostly static, some islands)
      ↓ Browser Paints (instant)
JavaScript Downloads (only for islands)
      ↓ Hydrate Islands
Interactive widgets work (calendar picker, autocomplete, etc.)
```

**Strengths**:
- ✅ **Fast Initial Load**: Static HTML renders immediately
- ✅ **Progressive Enhancement**: Works without JavaScript, enhanced with it
- ✅ **Selective Interactivity**: Only hydrate components that need JavaScript
- ✅ **SEO-Friendly**: Search engines see fully rendered HTML
- ✅ **Accessible**: Semantic HTML foundation, enhanced with ARIA

**Weaknesses**:
- ❌ **More Complex**: Requires build tooling to identify islands and generate bundles
- ❌ **Newer Pattern**: Less mature tooling and fewer real-world examples
- ❌ **Team Skills**: Developers must understand both SSR and client-side hydration

**When to Use**:
- Most government portals (mix of informational content + interactive tools)
- Service catalogs with interactive filters/search
- Forms with autocomplete, date pickers, file uploads
- When you want SSR performance but need selective interactivity

**When to Avoid**:
- Purely static sites (use SSR without islands)
- Purely interactive apps (use SPA)
- When team lacks skills to manage hybrid architecture

**Technology Options** (not prescriptive):
- **Astro**: Built for islands architecture, framework-agnostic
- **Next.js**: Supports selective hydration with React Server Components
- **Qwik**: Resumable islands architecture
- **SvelteKit**: Islands mode
- **Fresh (Deno)**: Preact islands

**Implementation Example (Pseudocode)**:
```html
<!-- Server renders static HTML -->
<main>
  <h1>Apply for Passport</h1>
  <p>Static instructional text rendered server-side...</p>

  <!-- Island: Interactive form with autocomplete -->
  <div data-island="passport-form">
    <!-- This will be hydrated with JavaScript -->
  </div>

  <p>More static content...</p>

  <!-- Island: Interactive date picker -->
  <div data-island="date-picker">
    <!-- This will be hydrated with JavaScript -->
  </div>
</main>

<script type="module">
  // Only hydrate islands, not entire page
  import { hydrate } from './islands.js';
  hydrate('passport-form', PassportFormComponent);
  hydrate('date-picker', DatePickerComponent);
</script>
```

### 2.4 Pattern Decision Matrix

| Criteria | SSR | SPA | Hybrid/Islands |
|----------|-----|-----|----------------|
| **Initial Load Speed** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Navigation Speed** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **SEO** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Accessibility** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Offline Capability** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| **Rich Interactivity** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| **Developer Complexity** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Server Resource Usage** | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |

**Recommendation for Most Governments**: Start with **Hybrid/Islands** architecture for the main portal (public-facing service catalog). Use **SSR** for simple transactional services (form submissions). Use **SPA** for authenticated citizen dashboards.

---

## 3. Component Architecture

### 3.1 Design System Approach

**Principle**: Build a shared component library that enforces consistency and accelerates development.

**Why This Matters**:
- **Consistency**: Same button, form input, card component used everywhere
- **Efficiency**: Build once, reuse across 100+ services
- **Accessibility**: Accessibility built into components, inherited by all pages
- **Maintainability**: Fix bug in one place, fixed everywhere

**Real-World Design Systems**:
- **Gov.UK Design System**: 50+ components, comprehensive accessibility guidance
- **US Web Design System (USWDS)**: Used by 200+ federal websites
- **Australia DTA Design System**: Covers federal and state services
- **Netherlands NL Design System**: Open-source, multi-government collaboration

**Component Hierarchy** (Atomic Design):
1. **Atoms**: Button, Input, Label, Icon, Link
2. **Molecules**: FormField (Label + Input + ErrorMessage), SearchBox (Input + Button)
3. **Organisms**: Header (Logo + Navigation + SearchBox), ServiceCard (Icon + Title + Description + Button)
4. **Templates**: Page layouts (SingleColumn, TwoColumn, Dashboard)
5. **Pages**: Specific pages composed from templates and organisms

**Implementation Example**:
```javascript
// Atom: Button component
function Button({ children, variant = 'primary', onClick, disabled = false }) {
  const className = `btn btn-${variant}`;
  return (
    <button
      className={className}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
}

// Molecule: FormField component
function FormField({ label, id, error, required, children }) {
  return (
    <div className="form-field">
      <label htmlFor={id}>
        {label}
        {required && <span className="required" aria-label="required">*</span>}
      </label>
      {children}
      {error && (
        <span className="error-message" role="alert" id={`${id}-error`}>
          {error}
        </span>
      )}
    </div>
  );
}

// Organism: ServiceCard component
function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <Icon name={service.icon} size="large" />
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <Button variant="secondary" onClick={() => navigate(service.url)}>
        Learn More
      </Button>
    </article>
  );
}
```

### 3.2 Composition Over Configuration

**Principle**: Build complex components by composing simple components, not by adding configuration flags.

**Anti-Pattern** (configuration hell):
```javascript
// ❌ Too many configuration options
<Button
  variant="primary"
  size="large"
  icon="arrow-right"
  iconPosition="right"
  fullWidth={true}
  rounded={true}
  shadow={true}
>
  Submit
</Button>
```

**Better Pattern** (composition):
```javascript
// ✅ Compose simple components
<Button variant="primary" size="large">
  Submit
  <Icon name="arrow-right" />
</Button>
```

### 3.3 Theming with CSS Variables

**Principle**: Use CSS custom properties (variables) to enable government branding without rewriting components.

**Implementation**:
```css
/* Design tokens (default theme) */
:root {
  /* Colors */
  --color-primary: #005ea5;
  --color-secondary: #6f777b;
  --color-success: #00703c;
  --color-error: #d4351c;
  --color-warning: #ffbf47;

  /* Typography */
  --font-family-base: "Noto Sans", Arial, sans-serif;
  --font-size-base: 16px;
  --font-size-large: 20px;
  --font-weight-normal: 400;
  --font-weight-bold: 700;

  /* Spacing */
  --spacing-xs: 0.5rem;
  --spacing-sm: 1rem;
  --spacing-md: 1.5rem;
  --spacing-lg: 2rem;
  --spacing-xl: 3rem;

  /* Layout */
  --max-width-content: 960px;
  --border-radius: 4px;
}

/* Government A overrides (royal blue theme) */
[data-theme="government-a"] {
  --color-primary: #003366;
  --font-family-base: "Georgia", serif;
}

/* Government B overrides (green theme) */
[data-theme="government-b"] {
  --color-primary: #00703c;
  --font-family-base: "Open Sans", sans-serif;
}

/* Component uses CSS variables */
.btn-primary {
  background-color: var(--color-primary);
  font-family: var(--font-family-base);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--border-radius);
}
```

### 3.4 Component Documentation

**Principle**: Document every component with usage examples, accessibility guidance, and do's/don'ts.

**Tool**: Use Storybook, Styleguidist, or similar to generate interactive component documentation.

**Example Documentation**:
```markdown
# Button Component

## Usage
```jsx
<Button variant="primary" onClick={handleClick}>
  Click Me
</Button>
```

## Props
- `variant`: "primary" | "secondary" | "danger" (default: "primary")
- `onClick`: Click handler function
- `disabled`: Boolean (default: false)
- `children`: Button text or content

## Accessibility
- Uses semantic `<button>` element (keyboard accessible)
- Focus visible indicator on keyboard focus
- Screen reader announces button text

## Do's and Don'ts
✅ DO use for actions (submit, cancel, delete)
❌ DON'T use for navigation (use Link component)
```

---

## 4. API Integration Patterns

### 4.1 Backend-for-Frontend (BFF) Pattern

**Principle**: Layer 4 has its own API layer that aggregates and transforms Layer 1 APIs to match frontend needs.

**Why This Matters**:
- **Orchestration**: Single citizen profile page may need data from 5 different Layer 1 APIs
- **Data Shaping**: Transform backend data structures to match frontend UI needs
- **Performance**: BFF can cache, batch, and optimize API calls
- **Security**: BFF validates authentication tokens, adds authorization headers
- **Versioning**: BFF can version APIs independently of Layer 1

**Architecture Diagram**:
```
Frontend (React/Vue/Angular)
      ↓ Single Request
Layer 4 BFF (/api/v1/citizen/dashboard)
      ↓ Parallel Requests
   ┌──┴──┬──────┬──────┐
   ↓     ↓      ↓      ↓
Layer 1 APIs:
- GET /identity/users/{id}
- GET /applications/user/{id}
- GET /services/favorites/{id}
- GET /notifications/unread/{id}
      ↓ Aggregate & Transform
Layer 4 BFF (single JSON response)
      ↓
Frontend renders dashboard
```

**Implementation Example**:
```javascript
// BFF route: GET /api/v1/citizen/dashboard
app.get('/api/v1/citizen/dashboard', authenticate, async (req, res) => {
  const userId = req.user.id;

  // Parallel API calls to Layer 1
  const [user, applications, favoriteServices, notifications] = await Promise.all([
    layer1Client.get(`/identity/users/${userId}`),
    layer1Client.get(`/applications/user/${userId}?status=in_progress`),
    layer1Client.get(`/services/favorites/${userId}`),
    layer1Client.get(`/notifications/unread/${userId}`)
  ]);

  // Shape data for frontend needs
  const dashboardData = {
    user: {
      name: user.fullName,
      avatar: user.profilePictureUrl
    },
    applications: applications.map(app => ({
      id: app.applicationId,
      serviceName: app.service.name,
      status: app.status,
      lastUpdated: app.updatedAt,
      nextStep: app.workflow.currentStep.description
    })),
    favoriteServices: favoriteServices.map(svc => ({
      id: svc.serviceId,
      name: svc.name,
      icon: svc.iconUrl
    })),
    unreadNotifications: notifications.count
  };

  res.json(dashboardData);
});
```

### 4.2 Caching Strategy

**Principle**: Cache aggressively to reduce latency and backend load, but invalidate appropriately to ensure data freshness.

**Caching Layers**:
1. **Browser Cache**: Static assets (images, CSS, JS) cached for 1 year
2. **CDN Cache**: HTML pages cached for 5 minutes, API responses for 1 minute
3. **BFF Cache**: Layer 1 API responses cached in Redis for 5-60 seconds
4. **Client-Side Cache**: React Query / SWR cache API responses for stale-while-revalidate

**Implementation Example**:
```javascript
// BFF caching with Redis
const redis = new Redis();

app.get('/api/v1/services', async (req, res) => {
  const cacheKey = 'services:list';

  // Check cache first
  const cachedData = await redis.get(cacheKey);
  if (cachedData) {
    return res.json(JSON.parse(cachedData));
  }

  // Cache miss: fetch from Layer 1
  const services = await layer1Client.get('/services');

  // Cache for 5 minutes
  await redis.setex(cacheKey, 300, JSON.stringify(services));

  res.json(services);
});

// Client-side caching with React Query
function ServicesPage() {
  const { data, isLoading } = useQuery(
    'services',
    () => fetch('/api/v1/services').then(res => res.json()),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000 // 10 minutes
    }
  );

  if (isLoading) return <LoadingSpinner />;
  return <ServicesList services={data} />;
}
```

**Cache Invalidation**:
- **Time-based**: Expire after N seconds (use for reference data like service catalog)
- **Event-based**: Invalidate when backend publishes event (use for user data)
- **Manual**: Provide admin UI to clear cache (use for emergency fixes)

### 4.3 Error Handling and Graceful Degradation

**Principle**: When APIs fail, provide meaningful error messages and fallback content instead of white screens.

**Error Scenarios**:
1. **Network Failure**: User offline, server unreachable
2. **Authentication Failure**: Session expired, token invalid
3. **Authorization Failure**: User lacks permission
4. **Validation Failure**: Invalid input data
5. **Server Error**: Backend service crashed (500 error)

**Implementation Pattern**:
```javascript
// Frontend error handling
async function fetchServiceDetails(serviceId) {
  try {
    const response = await fetch(`/api/v1/services/${serviceId}`);

    if (response.status === 404) {
      // Service not found
      return { error: 'SERVICE_NOT_FOUND' };
    }

    if (response.status === 403) {
      // User not authorized
      return { error: 'UNAUTHORIZED' };
    }

    if (!response.ok) {
      // Server error
      return { error: 'SERVER_ERROR' };
    }

    return await response.json();

  } catch (error) {
    // Network error (offline, DNS failure, etc.)
    return { error: 'NETWORK_ERROR' };
  }
}

// User-friendly error messages
function ServiceDetailPage({ serviceId }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchServiceDetails(serviceId).then(setData);
  }, [serviceId]);

  if (data?.error === 'NETWORK_ERROR') {
    return (
      <ErrorMessage>
        <h2>Connection Problem</h2>
        <p>Unable to reach the server. Please check your internet connection and try again.</p>
        <Button onClick={() => window.location.reload()}>Retry</Button>
      </ErrorMessage>
    );
  }

  if (data?.error === 'SERVICE_NOT_FOUND') {
    return (
      <ErrorMessage>
        <h2>Service Not Found</h2>
        <p>The service you're looking for doesn't exist or has been removed.</p>
        <Button onClick={() => navigate('/services')}>Browse Services</Button>
      </ErrorMessage>
    );
  }

  // Render service details...
}
```

**Graceful Degradation**:
- **Non-Critical Features**: If "favorite services" API fails, show service details without favorites
- **Stale Data**: If API fails but cached data exists, show cached data with "Last updated 5 minutes ago" notice
- **Partial Rendering**: If dashboard has 4 widgets and 1 fails, show 3 working widgets + error message for failed widget

### 4.4 Authentication Flow (OIDC/OAuth 2.0)

**Principle**: Integrate with Layer 1 Digital Identity using OpenID Connect (OIDC) for secure authentication.

**Authentication Flow**:
```
1. Citizen clicks "Sign In" on Layer 4 portal
     ↓
2. Layer 4 redirects to Layer 1 Identity Provider (IdP)
   https://identity.gov.example/oauth/authorize?
     client_id=layer4_portal&
     redirect_uri=https://portal.gov.example/callback&
     response_type=code&
     scope=openid profile email
     ↓
3. Citizen authenticates with IdP (username/password, MFA, biometric)
     ↓
4. IdP redirects back to Layer 4 with authorization code
   https://portal.gov.example/callback?code=ABC123
     ↓
5. Layer 4 BFF exchanges code for access token
   POST https://identity.gov.example/oauth/token
     code=ABC123&
     client_id=layer4_portal&
     client_secret={secret}&
     grant_type=authorization_code
     ↓
6. IdP returns access token + refresh token + ID token
     ↓
7. Layer 4 BFF creates session, stores tokens securely
     ↓
8. Layer 4 redirects citizen to dashboard
   Set-Cookie: session_id={encrypted_session_id}; HttpOnly; Secure; SameSite=Strict
     ↓
9. Subsequent requests include session cookie
   Layer 4 BFF validates session and uses access token for Layer 1 API calls
```

**Security Best Practices**:
- **HttpOnly Cookies**: Session tokens in HttpOnly cookies (not localStorage - XSS protection)
- **SameSite Strict**: Prevent CSRF attacks
- **Secure Flag**: Only send cookies over HTTPS
- **Short Expiry**: Access tokens expire after 15 minutes, refresh tokens after 8 hours
- **Token Rotation**: Refresh tokens rotated on use (one-time use)
- **Logout**: Clear session, revoke tokens on Layer 1 IdP

---

## 5. Mobile Architecture Patterns

Governments must decide: Progressive Web App (PWA), Native App, or Hybrid App? The choice depends on use case, budget, and target audience.

### 5.1 Pattern 1: Progressive Web App (PWA)

**Description**: Web application that installs like a native app. Single codebase for web + mobile.

**Real-World Examples**:
- **Estonia e-Estonia**: PWA for digital services, installable on iOS/Android
- **Denmark borger.dk**: Responsive site with PWA features (offline, install prompt)
- **Netherlands DigiD**: PWA for authentication and service access

**Architecture**:
```
Shared Codebase (HTML/CSS/JavaScript)
      ↓
PWA Features:
- Service Worker (offline, background sync)
- Web App Manifest (install prompt, icons)
- Push Notifications (re-engagement)
      ↓
Runs in Browser or Installed on Home Screen
(iOS Safari, Android Chrome)
```

**Strengths**:
- ✅ **Single Codebase**: One team, one codebase for web + mobile
- ✅ **No App Store**: Deploy instantly, no App Store approval process
- ✅ **Auto-Updates**: Users always on latest version
- ✅ **Discoverability**: Users find via search engines, share via URL
- ✅ **Lower Cost**: 50-70% cheaper than native apps

**Weaknesses**:
- ❌ **Limited Platform APIs**: Can't access Bluetooth, NFC, contacts (on iOS)
- ❌ **Performance**: Slower than native for graphics-intensive tasks
- ❌ **iOS Limitations**: Apple restricts PWA features (no push notifications on iOS <16.4)
- ❌ **Perception**: Some citizens expect "real" apps in App Store

**When to Use**:
- Most government services (forms, applications, service browsing)
- When budget is limited (no separate mobile team)
- When rapid iteration is needed (deploy updates hourly)
- When discoverability matters (SEO, sharable links)

**Implementation Checklist**:
- [ ] Create Web App Manifest (`manifest.json`)
- [ ] Implement Service Worker for offline capability
- [ ] Add install prompt for home screen
- [ ] Test on iOS Safari and Android Chrome
- [ ] Optimize for mobile viewport (responsive design)
- [ ] Test offline functionality (turn off WiFi/cellular)

**Example Web App Manifest**:
```json
{
  "name": "Government Services Portal",
  "short_name": "GovPortal",
  "description": "Access all government services in one place",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#005ea5",
  "icons": [
    {
      "src": "/icons/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icons/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### 5.2 Pattern 2: Native Apps

**Description**: Platform-specific apps written in Swift (iOS) or Kotlin (Android). Separate codebases.

**Real-World Examples**:
- **Singapore SingPass Mobile**: Native iOS/Android apps for biometric authentication
- **UAE Government**: Native apps for visa applications, payments
- **UK NHS App**: Native apps for healthcare services

**Architecture**:
```
iOS App (Swift/SwiftUI)              Android App (Kotlin/Jetpack Compose)
       ↓                                        ↓
iOS Platform APIs                    Android Platform APIs
(HealthKit, FaceID, etc.)          (Biometrics, NFC, etc.)
       ↓                                        ↓
         ↘                                    ↙
          → Layer 4 BFF (REST/GraphQL APIs) ←
                      ↓
             Layer 1 APIs (Identity, Services)
```

**Strengths**:
- ✅ **Best Performance**: Native rendering, smooth 60fps animations
- ✅ **Full Platform APIs**: Access to all iOS/Android features (biometrics, health data, NFC)
- ✅ **Best UX**: Platform-native UI patterns (iOS navigation, Android Material Design)
- ✅ **Offline**: Full offline capability with SQLite/Core Data
- ✅ **Trust**: Citizens trust "official" apps in App Store/Google Play

**Weaknesses**:
- ❌ **High Cost**: 2-3x more expensive than PWA (separate iOS and Android teams)
- ❌ **Slower Updates**: App Store approval process (1-7 days), users must update manually
- ❌ **Fragmentation**: Must support multiple iOS/Android versions
- ❌ **Maintenance**: Fix bugs twice (once for iOS, once for Android)

**When to Use**:
- When platform features are essential (biometric authentication, health data, NFC payments)
- When performance is critical (complex data visualization, real-time updates)
- When offline capability is essential (field agents, disaster response)
- When budget allows for separate mobile team

**Implementation Checklist**:
- [ ] Set up iOS project in Xcode (Swift + SwiftUI)
- [ ] Set up Android project in Android Studio (Kotlin + Jetpack Compose)
- [ ] Implement shared API client for Layer 4 BFF
- [ ] Set up CI/CD for automated builds and App Store/Google Play submission
- [ ] Create consistent design between iOS and Android (while respecting platform conventions)
- [ ] Test on multiple devices and OS versions

### 5.3 Pattern 3: Hybrid (React Native / Flutter)

**Description**: Shared codebase written in JavaScript (React Native) or Dart (Flutter) compiles to native iOS and Android apps.

**Real-World Examples**:
- **France Impots.gouv**: React Native app for tax filing
- **Brazil DigiSUS**: Flutter app for healthcare services
- **Poland mObywatel**: React Native app for digital ID

**Architecture**:
```
Shared Codebase (React Native / Flutter)
      ↓
Platform Abstractions
(Navigation, Storage, Camera, etc.)
      ↓
Compiles to Native
   ↙          ↘
iOS App    Android App
      ↓          ↓
Layer 4 BFF (REST/GraphQL APIs)
```

**Strengths**:
- ✅ **Shared Codebase**: 80-95% code reuse between iOS and Android
- ✅ **Native Performance**: Close to native performance (Flutter) or native UI components (React Native)
- ✅ **Platform APIs**: Access to most iOS/Android features via plugins
- ✅ **Developer Productivity**: Hot reload, single team for both platforms
- ✅ **Cost**: 30-50% cheaper than native apps

**Weaknesses**:
- ❌ **Platform Differences**: Still need platform-specific code for some features (10-20%)
- ❌ **Plugin Dependency**: Reliant on community plugins for platform features
- ❌ **Performance**: Not as fast as native for graphics-intensive tasks
- ❌ **App Size**: Larger app size than native (includes framework runtime)

**When to Use**:
- When budget is moderate (can't afford separate iOS/Android teams, but need better than PWA)
- When team has JavaScript/Dart skills (faster hiring than Swift/Kotlin experts)
- When you need platform features (camera, biometrics) but want shared codebase
- When fast iteration is important (hot reload, single codebase)

**Implementation Checklist (React Native)**:
- [ ] Set up React Native project with TypeScript
- [ ] Install essential libraries (React Navigation, React Native Paper, Redux)
- [ ] Set up platform-specific code for iOS/Android differences
- [ ] Implement shared API client for Layer 4 BFF
- [ ] Test on iOS simulators and Android emulators
- [ ] Test on real devices (iOS and Android)
- [ ] Set up CI/CD for automated builds

**Implementation Checklist (Flutter)**:
- [ ] Set up Flutter project with Dart
- [ ] Install essential packages (flutter_bloc, dio, shared_preferences)
- [ ] Design UI with Material Design widgets (customizable for government branding)
- [ ] Implement shared API client for Layer 4 BFF
- [ ] Test on iOS simulators and Android emulators
- [ ] Test on real devices (iOS and Android)
- [ ] Set up CI/CD for automated builds

### 5.4 Mobile Decision Matrix

| Criteria | PWA | Hybrid (RN/Flutter) | Native (iOS/Android) |
|----------|-----|---------------------|----------------------|
| **Development Cost** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| **Maintenance Cost** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| **Performance** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Platform Features** | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Offline Capability** | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |
| **Update Speed** | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| **Discoverability** | ⭐⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| **User Trust** | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

**Recommendation for Most Governments**: Start with **PWA** for the main portal (low cost, fast iteration). Build **native apps** for services requiring platform features (biometric authentication, health data). Consider **hybrid** for mid-complexity apps (forms, applications, status tracking).

---

## 6. State Management Patterns

State management is how your application tracks data - from user preferences to API responses. Choose the right pattern for your complexity level.

### 6.1 Types of State

**Client State**: UI state managed entirely in the browser
- Examples: Modal open/closed, tabs selected, form inputs (before submission)
- Persistence: Lost on page reload (unless saved to localStorage)

**Server State**: Data fetched from APIs, managed in the browser
- Examples: Citizen profile, service catalog, application status
- Persistence: Cached in browser, refreshed from API

**URL State**: State encoded in the URL
- Examples: Search query, filters, pagination, current page
- Persistence: Shareable via URL, bookmarkable

**Form State**: User input in forms (before submission)
- Examples: Text inputs, checkboxes, file uploads
- Persistence: Autosave to localStorage, submit to server

### 6.2 State Management Patterns

**Pattern 1: Component State (Simple)**
- Use for: Small apps, simple UI interactions
- Tools: React useState, Vue ref, Angular component properties

```javascript
// React example: Component state
function SearchBox() {
  const [query, setQuery] = useState('');

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search services..."
    />
  );
}
```

**Pattern 2: Context / Provide-Inject (Medium)**
- Use for: Shared state across multiple components (user session, theme)
- Tools: React Context, Vue Provide/Inject, Angular Services

```javascript
// React example: Context for user session
const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Header />
      <Dashboard />
    </UserContext.Provider>
  );
}

function Header() {
  const { user } = useContext(UserContext);
  return <div>Welcome, {user?.name}</div>;
}
```

**Pattern 3: State Management Library (Complex)**
- Use for: Large apps, complex state interactions, time-travel debugging
- Tools: Redux, Zustand, Pinia (Vue), NgRx (Angular)

```javascript
// React + Zustand example
const useStore = create((set) => ({
  user: null,
  applications: [],
  setUser: (user) => set({ user }),
  addApplication: (app) => set((state) => ({
    applications: [...state.applications, app]
  }))
}));

function Dashboard() {
  const { user, applications } = useStore();
  return (
    <div>
      <h1>Welcome, {user?.name}</h1>
      <ApplicationsList applications={applications} />
    </div>
  );
}
```

**Pattern 4: Server State Library (API Data)**
- Use for: Caching API responses, background refetching, optimistic updates
- Tools: React Query, SWR, Apollo Client (GraphQL), RTK Query

```javascript
// React Query example
function ServicesPage() {
  const { data, isLoading, error } = useQuery(
    'services',
    () => fetch('/api/v1/services').then(res => res.json()),
    {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000 // 10 minutes
    }
  );

  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage />;
  return <ServicesList services={data} />;
}
```

### 6.3 State Management Decision Tree

```
Is state shared across multiple components?
  ↓ NO → Component State (useState, ref)
  ↓ YES ↓
Is state from an API?
  ↓ YES → Server State Library (React Query, SWR)
  ↓ NO ↓
Is state simple (1-3 values)?
  ↓ YES → Context / Provide-Inject
  ↓ NO ↓
Is state complex (10+ values, many interactions)?
  ↓ YES → State Management Library (Redux, Zustand)
```

---

## 7. Form Architecture

Forms are the most common interaction in government services. Get them right and you unlock digital transformation. Get them wrong and citizens abandon services.

### 7.1 Progressive Disclosure

**Principle**: Show only relevant fields based on previous answers. Hide complexity.

**Example**: Passport application
```
Step 1: Are you applying for yourself or someone else?
  [ ] Myself
  [ ] My child (under 16)

  ↓ If "My child" selected ↓

Step 2: Child's details
  Full Name: _______________
  Date of Birth: _______________
  Relationship: [ ] Parent [ ] Guardian
```

**Implementation**:
```javascript
function PassportApplicationForm() {
  const [applicantType, setApplicantType] = useState(null);

  return (
    <form>
      <FormField label="Who is this application for?">
        <RadioGroup value={applicantType} onChange={setApplicantType}>
          <Radio value="self">Myself</Radio>
          <Radio value="child">My child (under 16)</Radio>
        </RadioGroup>
      </FormField>

      {applicantType === 'child' && (
        <>
          <FormField label="Child's Full Name" required>
            <Input type="text" />
          </FormField>
          <FormField label="Child's Date of Birth" required>
            <DatePicker />
          </FormField>
          <FormField label="Your Relationship to Child" required>
            <RadioGroup>
              <Radio value="parent">Parent</Radio>
              <Radio value="guardian">Legal Guardian</Radio>
            </RadioGroup>
          </FormField>
        </>
      )}

      <Button type="submit">Continue</Button>
    </form>
  );
}
```

### 7.2 Autosave and Recovery

**Principle**: Don't lose citizen data if browser crashes, tab closes, or session expires.

**Implementation Pattern**:
```javascript
function ApplicationForm() {
  const [formData, setFormData] = useState(() => {
    // Restore from localStorage on mount
    const saved = localStorage.getItem('application_draft');
    return saved ? JSON.parse(saved) : {};
  });

  // Autosave every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      localStorage.setItem('application_draft', JSON.stringify(formData));
    }, 5000);

    return () => clearInterval(timer);
  }, [formData]);

  // Clear draft after successful submission
  const handleSubmit = async () => {
    await submitApplication(formData);
    localStorage.removeItem('application_draft');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields update formData */}
    </form>
  );
}
```

**Recovery UI**:
```javascript
function ApplicationPage() {
  const hasDraft = localStorage.getItem('application_draft');
  const [showRecovery, setShowRecovery] = useState(!!hasDraft);

  if (showRecovery) {
    return (
      <RecoveryBanner>
        <p>We found an unfinished application. Would you like to continue where you left off?</p>
        <Button onClick={() => setShowRecovery(false)}>Continue Application</Button>
        <Button variant="secondary" onClick={() => {
          localStorage.removeItem('application_draft');
          setShowRecovery(false);
        }}>
          Start Over
        </Button>
      </RecoveryBanner>
    );
  }

  return <ApplicationForm />;
}
```

### 7.3 Validation Strategy

**Principle**: Validate client-side for UX (instant feedback), validate server-side for security (never trust client).

**Validation Types**:
1. **Required Fields**: "This field is required"
2. **Format Validation**: Email, phone, postal code, passport number
3. **Range Validation**: Age between 0-120, date in the past
4. **Custom Business Rules**: "Passport expiry must be at least 6 months from travel date"

**Implementation**:
```javascript
// Client-side validation (React Hook Form example)
function PassportForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    // Submit to server
    const response = await fetch('/api/v1/applications/passport', {
      method: 'POST',
      body: JSON.stringify(data)
    });

    if (!response.ok) {
      // Server-side validation errors
      const serverErrors = await response.json();
      // Display server errors to user
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField label="Full Name" error={errors.fullName?.message}>
        <input
          {...register('fullName', {
            required: 'Full name is required',
            minLength: { value: 2, message: 'Name must be at least 2 characters' }
          })}
        />
      </FormField>

      <FormField label="Email Address" error={errors.email?.message}>
        <input
          type="email"
          {...register('email', {
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
        />
      </FormField>

      <Button type="submit">Submit</Button>
    </form>
  );
}

// Server-side validation (Node.js example)
app.post('/api/v1/applications/passport', async (req, res) => {
  const { fullName, email, dateOfBirth } = req.body;

  // Server-side validation (NEVER trust client)
  const errors = {};

  if (!fullName || fullName.length < 2) {
    errors.fullName = 'Full name is required and must be at least 2 characters';
  }

  if (!email || !email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
    errors.email = 'Valid email address is required';
  }

  if (!dateOfBirth || new Date(dateOfBirth) > new Date()) {
    errors.dateOfBirth = 'Date of birth must be in the past';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ errors });
  }

  // Validation passed, process application
  const application = await createPassportApplication(req.body);
  res.json(application);
});
```

### 7.4 Accessibility for Forms

**Principle**: Every form input must be accessible to screen readers and keyboard users.

**Accessibility Checklist**:
- [ ] Every input has a visible `<label>` associated with `htmlFor` attribute
- [ ] Required fields have `required` attribute and asterisk (*) in label
- [ ] Error messages have `role="alert"` and `aria-describedby` linking to input
- [ ] Inputs have `autocomplete` attribute for autofill (name, email, address)
- [ ] Multi-step forms have progress indicator with `aria-label="Step 2 of 5"`
- [ ] Submit button is reachable via Tab key and activatable with Enter/Space

**Example**:
```html
<div class="form-field">
  <label for="email">
    Email Address
    <span class="required" aria-label="required">*</span>
  </label>
  <input
    type="email"
    id="email"
    name="email"
    autocomplete="email"
    required
    aria-describedby="email-error"
    aria-invalid={!!errors.email}
  />
  {errors.email && (
    <span id="email-error" class="error-message" role="alert">
      {errors.email}
    </span>
  )}
</div>
```

### 7.5 Multi-Step Forms (Wizard Pattern)

**Principle**: Break complex forms into manageable steps. Show progress. Allow back navigation.

**Implementation**:
```javascript
function PassportWizard() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const steps = [
    { number: 1, title: 'Personal Details', component: PersonalDetailsStep },
    { number: 2, title: 'Travel Information', component: TravelInfoStep },
    { number: 3, title: 'Documents', component: DocumentsStep },
    { number: 4, title: 'Review & Submit', component: ReviewStep }
  ];

  const CurrentStepComponent = steps[currentStep - 1].component;

  const handleNext = (stepData) => {
    setFormData({ ...formData, ...stepData });
    setCurrentStep(currentStep + 1);
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div className="wizard">
      <ProgressIndicator
        steps={steps}
        currentStep={currentStep}
        aria-label={`Step ${currentStep} of ${steps.length}`}
      />

      <CurrentStepComponent
        data={formData}
        onNext={handleNext}
        onBack={currentStep > 1 ? handleBack : null}
      />
    </div>
  );
}
```

---

## 8. Performance Architecture

Performance is not a feature; it's a requirement. Slow sites exclude citizens on slow connections or old devices.

### 8.1 Performance Budget Enforcement

**Principle**: Set measurable targets and fail CI/CD builds that exceed them.

**Lighthouse CI Configuration**:
```json
{
  "ci": {
    "collect": {
      "url": ["http://localhost:3000/"],
      "numberOfRuns": 3
    },
    "assert": {
      "preset": "lighthouse:recommended",
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 1.0 }],
        "first-contentful-paint": ["error", { "maxNumericValue": 2000 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "total-blocking-time": ["error", { "maxNumericValue": 300 }],
        "resource-summary:script:size": ["error", { "maxNumericValue": 200000 }],
        "resource-summary:total:size": ["error", { "maxNumericValue": 1000000 }]
      }
    },
    "upload": {
      "target": "temporary-public-storage"
    }
  }
}
```

**CI/CD Integration**:
```yaml
# GitHub Actions example
- name: Run Lighthouse CI
  run: |
    npm install -g @lhci/cli
    lhci autorun
```

### 8.2 Code Splitting

**Principle**: Load only JavaScript needed for current page. Lazy load routes and components.

**Implementation**:
```javascript
// React lazy loading
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/Dashboard'));
const Applications = lazy(() => import('./pages/Applications'));
const Services = lazy(() => import('./pages/Services'));

function App() {
  return (
    <Router>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/applications" element={<Applications />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Suspense>
    </Router>
  );
}
```

**Result**: Initial bundle is 50KB instead of 500KB. Each route loads its own code on-demand.

### 8.3 Image Optimization

**Principle**: Images are the largest assets on most pages. Optimize aggressively.

**Optimization Techniques**:
1. **Modern Formats**: Use WebP (80% smaller than JPEG), AVIF (50% smaller than WebP)
2. **Responsive Images**: Serve different sizes for mobile/tablet/desktop
3. **Lazy Loading**: Load images as user scrolls (native `loading="lazy"`)
4. **Dimensions**: Specify width and height to prevent layout shift (CLS)

**Implementation**:
```html
<!-- Responsive image with modern formats -->
<picture>
  <source
    srcset="/images/hero-small.avif 600w, /images/hero-large.avif 1200w"
    type="image/avif"
  />
  <source
    srcset="/images/hero-small.webp 600w, /images/hero-large.webp 1200w"
    type="image/webp"
  />
  <img
    src="/images/hero-large.jpg"
    alt="Government services portal"
    width="1200"
    height="600"
    loading="lazy"
  />
</picture>
```

**Build Tool Integration**:
```javascript
// Next.js Image component (automatic optimization)
import Image from 'next/image';

<Image
  src="/images/hero.jpg"
  alt="Government services portal"
  width={1200}
  height={600}
  loading="lazy"
  quality={85}
/>
```

### 8.4 Font Loading Strategy

**Principle**: Custom fonts block rendering (FOIT - Flash of Invisible Text). Load smartically.

**Strategy**:
```css
/* 1. Use system fonts as fallback */
body {
  font-family:
    "Noto Sans",
    -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, Oxygen, Ubuntu, Cantarell,
    sans-serif;
}

/* 2. Preload critical fonts */
<link
  rel="preload"
  href="/fonts/noto-sans-regular.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>

/* 3. Use font-display: swap to show fallback immediately */
@font-face {
  font-family: "Noto Sans";
  src: url("/fonts/noto-sans-regular.woff2") format("woff2");
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
```

### 8.5 Third-Party Scripts

**Principle**: Analytics, chat widgets, and ads are often the slowest assets. Load them last.

**Implementation**:
```html
<!-- 1. Defer non-critical scripts -->
<script defer src="/analytics.js"></script>

<!-- 2. Load chat widget after page is interactive -->
<script>
  window.addEventListener('load', () => {
    setTimeout(() => {
      const script = document.createElement('script');
      script.src = 'https://chat.example.com/widget.js';
      document.body.appendChild(script);
    }, 3000); // Wait 3 seconds after page load
  });
</script>

<!-- 3. Use facade pattern for embedded videos (YouTube, Vimeo) -->
<!-- Show thumbnail image, load iframe on click -->
<div class="video-facade" data-video-id="ABC123">
  <img src="/thumbnails/video-ABC123.jpg" alt="Video thumbnail" />
  <button class="play-button">Play Video</button>
</div>
```

### 8.6 Core Web Vitals Monitoring

**Principle**: Track real user performance data, not just Lighthouse lab tests.

**Metrics to Monitor**:
- **Largest Contentful Paint (LCP)**: <2.5 seconds (measures loading performance)
- **First Input Delay (FID)**: <100ms (measures interactivity)
- **Cumulative Layout Shift (CLS)**: <0.1 (measures visual stability)

**Implementation**:
```javascript
// Send Core Web Vitals to analytics
import { onLCP, onFID, onCLS } from 'web-vitals';

onLCP((metric) => {
  analytics.track('web_vitals', {
    metric: 'lcp',
    value: metric.value,
    page: window.location.pathname
  });
});

onFID((metric) => {
  analytics.track('web_vitals', {
    metric: 'fid',
    value: metric.value,
    page: window.location.pathname
  });
});

onCLS((metric) => {
  analytics.track('web_vitals', {
    metric: 'cls',
    value: metric.value,
    page: window.location.pathname
  });
});
```

---

## 9. Accessibility Architecture

Accessibility is not optional. It's a legal requirement and moral imperative.

### 9.1 Semantic HTML Foundation

**Principle**: Use the right HTML element for the job. Screen readers understand semantic elements.

**Semantic Elements**:
```html
<!-- ✅ DO: Use semantic elements -->
<header>
  <nav aria-label="Main navigation">
    <ul>
      <li><a href="/">Home</a></li>
      <li><a href="/services">Services</a></li>
    </ul>
  </nav>
</header>

<main>
  <article>
    <h1>Apply for Passport</h1>
    <p>Passport application instructions...</p>

    <section aria-labelledby="eligibility-heading">
      <h2 id="eligibility-heading">Eligibility Requirements</h2>
      <ul>
        <li>Must be a citizen</li>
        <li>Must be 18 or older</li>
      </ul>
    </section>
  </article>
</main>

<aside aria-label="Related services">
  <h2>Related Services</h2>
  <ul>
    <li><a href="/visa">Apply for Visa</a></li>
    <li><a href="/id-card">Renew ID Card</a></li>
  </ul>
</aside>

<footer>
  <p>&copy; 2025 Government Services Portal</p>
</footer>

<!-- ❌ DON'T: Use divs for everything -->
<div class="header">
  <div class="nav">
    <div class="nav-item"><a href="/">Home</a></div>
  </div>
</div>
```

### 9.2 Keyboard Navigation

**Principle**: Every interactive element must be reachable and usable with keyboard only.

**Keyboard Navigation Checklist**:
- [ ] All interactive elements reachable via Tab key (links, buttons, form inputs)
- [ ] Tab order is logical (follows visual order)
- [ ] Focus is visible (outline or border on focused element)
- [ ] Modals trap focus (Tab cycles through modal, Escape closes modal)
- [ ] Skip links allow bypassing navigation ("Skip to main content")
- [ ] Dropdown menus navigable with Arrow keys

**Implementation**:
```javascript
// Modal with focus trap
function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef();
  const previousFocusRef = useRef();

  useEffect(() => {
    if (isOpen) {
      // Save previous focus
      previousFocusRef.current = document.activeElement;

      // Focus first interactive element in modal
      const firstInput = modalRef.current.querySelector('button, input, select, textarea');
      firstInput?.focus();

      // Trap Tab key
      const handleTab = (e) => {
        if (e.key === 'Tab') {
          const focusableElements = modalRef.current.querySelectorAll(
            'button, input, select, textarea, a[href]'
          );
          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          } else if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }

        // Close on Escape
        if (e.key === 'Escape') {
          onClose();
        }
      };

      document.addEventListener('keydown', handleTab);
      return () => {
        document.removeEventListener('keydown', handleTab);
        // Restore focus on close
        previousFocusRef.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        ref={modalRef}
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <h2 id="modal-title">{children.title}</h2>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
```

### 9.3 Screen Reader Support

**Principle**: Screen reader users must understand page structure and receive notifications of dynamic changes.

**ARIA Attributes**:
- **`aria-label`**: Provides accessible name for elements without visible text
- **`aria-labelledby`**: References visible text as label for element
- **`aria-describedby`**: Provides additional description for element
- **`aria-live`**: Announces dynamic content changes (alerts, status messages)
- **`aria-hidden`**: Hides decorative elements from screen readers

**Implementation**:
```html
<!-- Icon button with aria-label -->
<button aria-label="Close dialog">
  <svg aria-hidden="true">...</svg>
</button>

<!-- Form input with error -->
<label for="email">Email Address</label>
<input
  id="email"
  type="email"
  aria-describedby="email-error"
  aria-invalid="true"
/>
<span id="email-error" role="alert">
  Please enter a valid email address
</span>

<!-- Live region for status messages -->
<div
  role="status"
  aria-live="polite"
  aria-atomic="true"
  class="visually-hidden"
>
  {statusMessage}
</div>

<!-- Visually hidden but accessible to screen readers -->
<style>
.visually-hidden {
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}
</style>
```

### 9.4 Color Contrast

**Principle**: Text must have sufficient contrast against background for readability.

**WCAG 2.1 Requirements**:
- **Level AA (minimum)**: 4.5:1 for normal text, 3:1 for large text (18pt+) and UI components
- **Level AAA (enhanced)**: 7:1 for normal text, 4.5:1 for large text

**Testing Tools**:
- Chrome DevTools Lighthouse accessibility audit
- WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
- Axe DevTools browser extension

**Implementation**:
```css
/* ✅ PASS: 4.5:1 contrast ratio */
.primary-button {
  background-color: #005ea5; /* Dark blue */
  color: #ffffff; /* White */
}

/* ❌ FAIL: 2.1:1 contrast ratio */
.light-text {
  background-color: #ffffff; /* White */
  color: #cccccc; /* Light gray */
}

/* ✅ PASS: 3:1 contrast for large text (24px) */
.hero-heading {
  font-size: 24px;
  background-color: #ffffff;
  color: #777777;
}
```

### 9.5 Automated Accessibility Testing

**Principle**: Catch 30-40% of accessibility issues with automated tools. Manual testing still required for remaining 60-70%.

**Tools**:
- **Lighthouse**: Built into Chrome DevTools, CI/CD integration
- **axe DevTools**: Browser extension, advanced rule set
- **WAVE**: Visual accessibility testing
- **Pa11y**: Command-line testing tool for CI/CD

**CI/CD Integration**:
```yaml
# GitHub Actions: Run accessibility tests
- name: Run accessibility tests
  run: |
    npm install -g pa11y-ci
    pa11y-ci --sitemap https://portal.gov.example/sitemap.xml
```

**Manual Testing Checklist**:
- [ ] Navigate entire site with keyboard only (no mouse)
- [ ] Test with NVDA (Windows) or VoiceOver (Mac) screen reader
- [ ] Test with browser zoom at 200% (no horizontal scrolling)
- [ ] Test in high contrast mode (Windows High Contrast)
- [ ] Review with citizens with disabilities (usability testing)

---

## 10. Security Architecture

Government services handle sensitive data. Security must be designed in from day one.

### 10.1 Content Security Policy (CSP)

**Principle**: Prevent XSS attacks by allowlisting sources for scripts, styles, and other resources.

**Implementation**:
```http
Content-Security-Policy:
  default-src 'self';
  script-src 'self' 'nonce-{random}' https://cdn.gov.example;
  style-src 'self' 'nonce-{random}';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' https://api.gov.example;
  frame-ancestors 'none';
  base-uri 'self';
  form-action 'self';
  upgrade-insecure-requests;
```

**Explanation**:
- **default-src 'self'**: Only load resources from same origin
- **script-src 'nonce-{random}'**: Only execute scripts with matching nonce (prevents inline script injection)
- **frame-ancestors 'none'**: Prevent site from being embedded in iframe (clickjacking protection)
- **upgrade-insecure-requests**: Automatically upgrade HTTP to HTTPS

**Server-Side Implementation**:
```javascript
// Express middleware
app.use((req, res, next) => {
  const nonce = crypto.randomBytes(16).toString('base64');
  res.locals.nonce = nonce;

  res.setHeader('Content-Security-Policy', `
    default-src 'self';
    script-src 'self' 'nonce-${nonce}';
    style-src 'self' 'nonce-${nonce}';
  `);

  next();
});

// Template renders scripts with nonce
<script nonce="${nonce}">
  // Inline script allowed because nonce matches
</script>
```

### 10.2 HTTPS Everywhere

**Principle**: All traffic must be encrypted. No exceptions.

**Configuration**:
```nginx
# Nginx configuration
server {
  listen 80;
  server_name portal.gov.example;
  return 301 https://$server_name$request_uri;
}

server {
  listen 443 ssl http2;
  server_name portal.gov.example;

  # SSL certificates
  ssl_certificate /etc/ssl/certs/portal.crt;
  ssl_certificate_key /etc/ssl/private/portal.key;

  # Modern SSL configuration
  ssl_protocols TLSv1.2 TLSv1.3;
  ssl_ciphers 'ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256...';
  ssl_prefer_server_ciphers off;

  # HSTS: Force HTTPS for 1 year
  add_header Strict-Transport-Security "max-age=31536000; includeSubDomains; preload" always;

  # Security headers
  add_header X-Frame-Options "DENY" always;
  add_header X-Content-Type-Options "nosniff" always;
  add_header X-XSS-Protection "1; mode=block" always;
  add_header Referrer-Policy "strict-origin-when-cross-origin" always;
}
```

### 10.3 Input Sanitization and Output Escaping

**Principle**: Never trust user input. Sanitize on input, escape on output.

**Implementation**:
```javascript
// Backend: Sanitize input
const validator = require('validator');
const xss = require('xss');

app.post('/api/v1/profile', authenticate, async (req, res) => {
  const { displayName, bio } = req.body;

  // Sanitize HTML to prevent XSS
  const sanitizedBio = xss(bio, {
    whiteList: {
      p: [],
      strong: [],
      em: [],
      a: ['href']
    }
  });

  // Validate and sanitize display name
  if (!validator.isLength(displayName, { min: 2, max: 50 })) {
    return res.status(400).json({ error: 'Display name must be 2-50 characters' });
  }

  const sanitizedName = validator.escape(displayName);

  await updateUserProfile(req.user.id, {
    displayName: sanitizedName,
    bio: sanitizedBio
  });

  res.json({ success: true });
});

// Frontend: Escape output
function UserProfile({ user }) {
  return (
    <div>
      {/* React automatically escapes JSX expressions */}
      <h1>{user.displayName}</h1>

      {/* For HTML content, use dangerouslySetInnerHTML (only with sanitized backend data!) */}
      <div dangerouslySetInnerHTML={{ __html: user.bio }} />
    </div>
  );
}
```

### 10.4 CSRF Protection

**Principle**: Prevent cross-site request forgery by validating origin of state-changing requests.

**Implementation**:
```javascript
// Backend: Generate CSRF token
const csrf = require('csurf');
const csrfProtection = csrf({ cookie: true });

app.get('/form', csrfProtection, (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

app.post('/submit', csrfProtection, (req, res) => {
  // CSRF token validated automatically
  // Process form submission
});

// Frontend: Include CSRF token in forms
<form method="POST" action="/submit">
  <input type="hidden" name="_csrf" value="${csrfToken}" />
  <!-- Form fields -->
  <button type="submit">Submit</button>
</form>

// Frontend: Include CSRF token in AJAX requests
fetch('/api/v1/submit', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'CSRF-Token': csrfToken
  },
  body: JSON.stringify(data)
});
```

### 10.5 Authentication and Session Management

**Principle**: Secure session management with automatic timeout and secure cookies.

**Implementation**:
```javascript
// Session configuration
const session = require('express-session');
const RedisStore = require('connect-redis')(session);

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  name: 'session_id',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,  // Prevent JavaScript access (XSS protection)
    secure: true,    // Only send over HTTPS
    sameSite: 'strict',  // CSRF protection
    maxAge: 15 * 60 * 1000  // 15 minutes
  }
}));

// Automatic session timeout
app.use((req, res, next) => {
  if (req.session.lastActivity) {
    const now = Date.now();
    const idleTime = now - req.session.lastActivity;

    // 15 minutes of inactivity
    if (idleTime > 15 * 60 * 1000) {
      req.session.destroy();
      return res.status(401).json({ error: 'Session expired' });
    }
  }

  req.session.lastActivity = Date.now();
  next();
});
```

### 10.6 Dependency Security Scanning

**Principle**: Third-party dependencies have vulnerabilities. Scan and patch regularly.

**Tools**:
- **npm audit**: Built into npm, scans package.json
- **Snyk**: Continuous monitoring, PR checks
- **Dependabot**: Automated dependency updates (GitHub)

**CI/CD Integration**:
```yaml
# GitHub Actions: Security scanning
- name: Run security audit
  run: npm audit --audit-level=high

- name: Snyk security scan
  uses: snyk/actions/node@master
  env:
    SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
```

**Patch Policy**:
- **Critical vulnerabilities**: Patch within 24 hours
- **High vulnerabilities**: Patch within 7 days
- **Medium vulnerabilities**: Patch within 30 days
- **Low vulnerabilities**: Patch in next release cycle

---

## 11. Deployment and Infrastructure Patterns

### 11.1 CDN Strategy

**Principle**: Serve static assets from edge locations close to citizens for low latency.

**Architecture**:
```
Citizen (Sydney, Australia)
      ↓
CDN Edge (Sydney) - Cache Hit (20ms)
      ↓ (On cache miss)
CDN Origin (Singapore) - Cache Hit (50ms)
      ↓ (On cache miss)
Layer 4 Web Server (US-East) - Render HTML (200ms)
```

**Cache Rules**:
```nginx
# Nginx cache configuration
location ~* \.(jpg|jpeg|png|gif|svg|webp|ico)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

location ~* \.(css|js)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

location /api/ {
  expires 1m;
  add_header Cache-Control "public, must-revalidate";
}

location / {
  expires 5m;
  add_header Cache-Control "public, must-revalidate";
}
```

**CDN Providers** (not prescriptive):
- **Cloudflare**: Global CDN, DDoS protection, free tier
- **AWS CloudFront**: Integrates with AWS infrastructure
- **Akamai**: Enterprise-grade, government contracts
- **Fastly**: Real-time purging, advanced VCL

### 11.2 Blue-Green Deployment

**Principle**: Zero-downtime deployments by maintaining two identical environments (Blue and Green).

**Deployment Flow**:
```
1. Blue environment serves production traffic (100%)
     ↓
2. Deploy new version to Green environment
     ↓
3. Run smoke tests on Green environment
     ↓
4. Switch router to send 10% traffic to Green (canary)
     ↓
5. Monitor metrics (error rate, response time)
     ↓
6. If metrics good: Switch 100% traffic to Green
   If metrics bad: Roll back to Blue (instant)
     ↓
7. Keep Blue environment as rollback target for 24 hours
     ↓
8. Next deployment: Deploy to Blue, repeat
```

**Implementation** (Kubernetes):
```yaml
# Blue deployment
apiVersion: apps/v1
kind: Deployment
metadata:
  name: portal-blue
spec:
  replicas: 3
  selector:
    matchLabels:
      app: portal
      version: blue
  template:
    metadata:
      labels:
        app: portal
        version: blue
    spec:
      containers:
      - name: portal
        image: portal:v1.2.3

---
# Service switches between blue and green
apiVersion: v1
kind: Service
metadata:
  name: portal
spec:
  selector:
    app: portal
    version: blue  # Change to 'green' to switch traffic
  ports:
  - port: 80
```

### 11.3 Feature Flags

**Principle**: Deploy code to production but control feature rollout with flags.

**Use Cases**:
- **Gradual Rollout**: Enable new feature for 10% of users, then 50%, then 100%
- **A/B Testing**: Show different UI variants to different user groups
- **Kill Switch**: Disable feature instantly if bugs detected
- **Beta Testing**: Enable feature only for opted-in beta users

**Implementation**:
```javascript
// Feature flag service
const featureFlags = {
  'new-dashboard': { enabled: true, rollout: 50 }, // 50% of users
  'payment-integration': { enabled: false },
  'dark-mode': { enabled: true, betaOnly: true }
};

function isFeatureEnabled(featureName, userId) {
  const flag = featureFlags[featureName];

  if (!flag || !flag.enabled) return false;

  // Beta-only features
  if (flag.betaOnly && !user.isBetaTester) return false;

  // Percentage rollout (consistent per user)
  if (flag.rollout) {
    const hash = hashCode(userId) % 100;
    return hash < flag.rollout;
  }

  return true;
}

// Usage in React
function Dashboard({ user }) {
  const showNewDashboard = isFeatureEnabled('new-dashboard', user.id);

  if (showNewDashboard) {
    return <NewDashboard />;
  }

  return <OldDashboard />;
}
```

**Feature Flag Tools** (not prescriptive):
- **LaunchDarkly**: Enterprise feature management
- **Split.io**: A/B testing and experimentation
- **Unleash**: Open-source, self-hosted
- **ConfigCat**: Simple feature flags

### 11.4 Monitoring and Observability

**Principle**: You can't improve what you don't measure. Monitor everything.

**Metrics to Track**:
1. **Performance**: Page load time, API response time, Core Web Vitals
2. **Availability**: Uptime, error rate, failed requests
3. **User Behavior**: Page views, conversion funnels, session duration
4. **Business Metrics**: Applications submitted, services used, user satisfaction

**Monitoring Stack** (example):
```
Frontend:
- Sentry (error tracking)
- Google Analytics / Plausible (user behavior)
- DataDog RUM (Real User Monitoring)

Backend:
- Prometheus (metrics collection)
- Grafana (dashboards)
- Loki (log aggregation)
- Jaeger (distributed tracing)
```

**Alerting Rules**:
```yaml
# Prometheus alert rules
groups:
- name: portal
  rules:
  - alert: HighErrorRate
    expr: rate(http_requests_total{status=~"5.."}[5m]) > 0.05
    for: 5m
    annotations:
      summary: "High error rate detected (>5%)"

  - alert: SlowResponseTime
    expr: histogram_quantile(0.95, http_request_duration_seconds) > 3
    for: 5m
    annotations:
      summary: "95th percentile response time >3 seconds"
```

### 11.5 Incident Response

**Principle**: When production breaks, have a runbook to follow.

**Incident Response Process**:
1. **Detect**: Monitoring alerts or user reports
2. **Acknowledge**: On-call engineer acknowledges alert
3. **Assess**: Determine severity (P1-P4), impact (% of users affected)
4. **Mitigate**: Rollback deployment, disable feature flag, redirect traffic
5. **Communicate**: Update status page, notify stakeholders
6. **Resolve**: Fix root cause, deploy fix
7. **Post-Mortem**: Document incident, identify improvements (blameless)

**Runbook Example**:
```markdown
# Runbook: Portal Down (P1 Incident)

## Detection
- Pingdom alert: Portal unreachable
- Datadog: 100% error rate on /api/v1/services

## Immediate Actions
1. Check infrastructure status
   - AWS console: Are EC2 instances running?
   - Kubernetes: `kubectl get pods -n portal`
2. Check recent deployments
   - GitHub: Last merged PR?
   - CI/CD: Last deployment timestamp?
3. Rollback if recent deployment
   - Kubernetes: `kubectl rollout undo deployment/portal`
   - Or: Switch traffic to Blue environment

## Communication
1. Update status page: https://status.gov.example
   "We are aware of an issue affecting the portal. Investigating..."
2. Post in #incidents Slack channel
3. Notify Director if downtime >30 minutes

## Investigation
1. Check logs: `kubectl logs -n portal deployment/portal --tail=100`
2. Check metrics: Grafana dashboard
3. Check Layer 1 APIs: Are dependencies healthy?

## Resolution
1. Fix identified issue
2. Deploy fix: `kubectl apply -f deployment.yaml`
3. Verify: Check Pingdom, Datadog, manual testing
4. Update status page: "Issue resolved"

## Post-Mortem
- Schedule post-mortem meeting within 24 hours
- Document root cause, timeline, action items
```

---

## 12. Real-World Reference Architectures

Learn from governments that have successfully built unified citizen experiences.

### 12.1 Gov.UK (United Kingdom)

**Stack**: Node.js + Express + Nunjucks templates + GOV.UK Frontend design system

**Architecture**:
- **Pattern**: Server-Side Rendering (SSR)
- **Why**: Accessibility, performance, progressive enhancement
- **Frontend**: Minimal JavaScript (<50KB), works without JS
- **Design System**: GOV.UK Design System (50+ accessible components)
- **Hosting**: AWS (CloudFront CDN, EC2 instances, RDS databases)

**Key Lessons**:
- Start with user needs, not technology
- Accessibility is non-negotiable (WCAG 2.1 AA minimum)
- Performance matters for citizens on slow connections
- Design system ensures consistency across 300+ government services

**Reference**: https://www.gov.uk/service-manual/technology

### 12.2 Singapore LifeSG

**Stack**: React + Redux + Material-UI (customized) + React Native mobile apps

**Architecture**:
- **Pattern**: Single-Page Application (SPA) for authenticated portal
- **Why**: Rich interactivity, personalized dashboard, app-like experience
- **Frontend**: React (web), React Native (iOS/Android native apps)
- **APIs**: GraphQL API aggregating 20+ backend services
- **Hosting**: AWS (CloudFront, ECS, API Gateway)

**Key Lessons**:
- SPA works well for authenticated citizen portals
- GraphQL simplifies API orchestration (BFF pattern)
- Native mobile apps when platform features essential (biometric auth)
- Personalization increases citizen engagement

**Reference**: https://www.life.gov.sg/

### 12.3 Estonia e-Estonia

**Stack**: Java + Spring MVC + Thymeleaf + Progressive enhancement

**Architecture**:
- **Pattern**: Server-Side Rendering (SSR) + Islands (selective JavaScript)
- **Why**: Security, accessibility, works on old browsers
- **Frontend**: Mostly server-rendered, JavaScript for interactive widgets
- **APIs**: X-Road integration for cross-agency data exchange
- **Hosting**: Government cloud (security requirements)

**Key Lessons**:
- Security is paramount for government services (Estonia's X-Road is legendary)
- Progressive enhancement ensures resilience
- API standardization enables service composition
- Digital ID integration is foundational (99% of citizens use digital ID)

**Reference**: https://e-estonia.com/

### 12.4 Denmark borger.dk

**Stack**: .NET + ASP.NET MVC + Razor templates + Responsive design

**Architecture**:
- **Pattern**: Server-Side Rendering (SSR) + PWA features
- **Why**: Performance, SEO, works across devices
- **Frontend**: .NET MVC, responsive design, PWA (offline, install)
- **APIs**: NemID/MitID for authentication, OIO REST standards
- **Hosting**: Government data centers (data sovereignty)

**Key Lessons**:
- Unified portal reduces citizen confusion (one domain for all services)
- Digital identity integration is foundational (MitID authentication)
- API standards enable multi-vendor ecosystem
- PWA provides mobile experience without app stores

**Reference**: https://www.borger.dk/

---

## 13. Technology Decision Framework

Don't let this guide prescribe your technology stack. Use this framework to make informed decisions.

### 13.1 Evaluation Criteria

**Team Skills**:
- What languages/frameworks does your team know?
- How long to hire developers for this stack?
- Training time for new hires?

**Community and Ecosystem**:
- Size of developer community (Stack Overflow questions, GitHub stars)?
- Availability of libraries/plugins for common needs?
- Long-term viability (still maintained in 5 years)?

**Performance**:
- Benchmark results for your use case?
- Does it meet performance budget targets?
- Server resource requirements (cost)?

**Accessibility**:
- How easy to build accessible components?
- Built-in accessibility features?
- Community accessibility resources?

**Procurement and Sovereignty**:
- Open-source or proprietary?
- Can it be self-hosted (data sovereignty)?
- Vendor lock-in risk?

**Maintenance and Support**:
- Long-term support (LTS) versions?
- Commercial support available?
- Security patch frequency?

### 13.2 Government-Specific Considerations

**Data Sovereignty**:
- Can citizen data stay within national borders?
- Can you self-host or requires cloud vendor?

**Procurement Constraints**:
- Does your government have approved vendor lists?
- Open-source preferred or required?
- Budget for commercial licenses?

**Legacy System Integration**:
- Can it integrate with existing systems (mainframes, COBOL)?
- API compatibility (SOAP, REST, GraphQL)?

**Security Clearance**:
- Does technology have security certifications (FedRAMP, ISO 27001)?
- Can vendor pass government background checks?

**Multilingual Support**:
- Internationalization (i18n) built-in?
- Right-to-left (RTL) language support (Arabic, Hebrew)?

### 13.3 Decision Matrix Template

| Technology Option | Team Skills | Community | Performance | Accessibility | Sovereignty | Total Score |
|-------------------|-------------|-----------|-------------|---------------|-------------|-------------|
| React SSR (Next.js) | 4/5 | 5/5 | 4/5 | 4/5 | 5/5 (self-host) | 22/25 |
| Vue SSR (Nuxt.js) | 3/5 | 4/5 | 4/5 | 4/5 | 5/5 (self-host) | 20/25 |
| .NET MVC | 5/5 | 4/5 | 5/5 | 5/5 | 5/5 (self-host) | 24/25 |

**Scoring**: 1 = Poor, 2 = Fair, 3 = Good, 4 = Very Good, 5 = Excellent

---

## 14. Integration with Other Layers

Layer 4 does not exist in isolation. It depends on and integrates with other layers of the GaaS architecture.

### 14.1 Layer 0: Legal & Policy Foundation

**Compliance Requirements**:
- **Digital Service Standard**: UI must meet government design standards
- **Accessibility Policy**: WCAG 2.1 AA compliance enforced
- **Data Privacy Laws**: Cookie consent, privacy notices, GDPR/CCPA compliance
- **Official Languages**: Support all official languages (English, French, Arabic, etc.)

**Implementation**:
- Design system components enforce Digital Service Standard
- Automated accessibility testing in CI/CD pipeline
- Cookie consent banner on first visit
- Language selector in header, i18n framework for translations

### 14.2 Layer 1: Shared Technology Core

**API Consumption**:
- **Digital Identity**: OIDC authentication, user profile APIs
- **API Gateway**: All backend APIs accessed through gateway (rate limiting, auth)
- **Notification Service**: Email/SMS notifications for application status updates
- **Document Storage**: Upload/download documents (passports, tax returns)
- **Payment Gateway**: Process payments for government services

**Example Integration**:
```javascript
// Authenticate with Layer 1 Digital Identity
const authClient = new OIDCClient({
  issuer: 'https://identity.gov.example',
  clientId: 'layer4_portal',
  redirectUri: 'https://portal.gov.example/callback'
});

// Fetch user profile from Layer 1
const user = await fetch('https://api.gov.example/identity/v1/users/me', {
  headers: {
    'Authorization': `Bearer ${accessToken}`
  }
});

// Send notification via Layer 1
await fetch('https://api.gov.example/notifications/v1/email', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    to: user.email,
    subject: 'Application Submitted',
    template: 'application_confirmation',
    variables: { applicationId: 'APP123' }
  })
});
```

### 14.3 Layer 2: People & Process Engine

**Built and Operated By**:
- **Frontend Engineers**: Build and maintain Layer 4 codebase
- **UX Designers**: Design citizen journeys, conduct usability testing
- **DevOps Engineers**: Deploy, monitor, and scale infrastructure
- **Product Managers**: Prioritize features, gather user feedback

**Process Integration**:
- **Agile Development**: 2-week sprints, daily standups, retrospectives
- **ITIL Change Management**: All deployments require change tickets
- **Incident Management**: On-call rotation, runbooks, post-mortems
- **Service Level Management**: SLA for 99.9% uptime, <3 second page load

### 14.4 Layer 3: Transparent Service Portfolio

**Service Presentation**:
- Layer 4 renders the service catalog from Layer 3
- Each service has: Name, description, eligibility, cost, processing time
- Citizens can search, filter, and favorite services
- Service usage analytics fed back to Layer 3 for portfolio management

**Example**:
```javascript
// Fetch service catalog from Layer 3
const services = await fetch('https://api.gov.example/portfolio/v1/services');

// Render services with cost transparency
function ServiceCard({ service }) {
  return (
    <article className="service-card">
      <h3>{service.name}</h3>
      <p>{service.description}</p>
      <dl>
        <dt>Processing Time:</dt>
        <dd>{service.processingTime} days</dd>

        <dt>Cost:</dt>
        <dd>{service.cost > 0 ? `$${service.cost}` : 'Free'}</dd>

        <dt>Digital Completion Rate:</dt>
        <dd>{service.digitalCompletionRate}%</dd>
      </dl>
      <Button href={service.applyUrl}>Apply Now</Button>
    </article>
  );
}
```

---

## 15. Conclusion and Next Steps

### 15.1 Key Takeaways

1. **Architectural patterns matter more than specific technologies**: Choose patterns that fit your use case (SSR, SPA, Hybrid), then select technology.

2. **Accessibility is non-negotiable**: WCAG 2.1 AA is the minimum. Build it in from day one, not bolted on later.

3. **Performance is a feature**: Slow sites exclude citizens on slow connections. Enforce performance budgets.

4. **Security by design**: CSP, HTTPS, input sanitization, CSRF protection - these are table stakes.

5. **API-first architecture**: Layer 4 consumes Layer 1 APIs. Never directly connect to databases.

6. **Progressive enhancement**: Core functionality works without JavaScript. JavaScript enhances.

7. **Monitor everything**: You can't improve what you don't measure. Track performance, errors, and user behavior.

8. **Learn from real implementations**: Gov.UK, Singapore, Estonia, Denmark have proven patterns.

### 15.2 Implementation Roadmap

**Phase 1: Foundation (Months 1-3)**
- [ ] Choose frontend architecture pattern (SSR, SPA, or Hybrid)
- [ ] Set up design system (components, theming, documentation)
- [ ] Implement authentication integration with Layer 1 Digital Identity
- [ ] Build first 5 pages (homepage, service catalog, service detail, login, dashboard)
- [ ] Set up CI/CD pipeline with automated accessibility and performance testing
- [ ] Deploy to staging environment

**Phase 2: Core Features (Months 4-6)**
- [ ] Build application forms with progressive disclosure, autosave, validation
- [ ] Implement document upload/download integration with Layer 1
- [ ] Add mobile PWA features (service worker, offline, install prompt)
- [ ] Build citizen dashboard (applications, notifications, profile)
- [ ] Set up monitoring (RUM, error tracking, analytics)
- [ ] Deploy to production (soft launch, invite beta users)

**Phase 3: Expansion (Months 7-12)**
- [ ] Add 20+ services to catalog (prioritize high-volume services)
- [ ] Build native mobile apps (if needed for platform features)
- [ ] Implement payment integration with Layer 1 Payment Gateway
- [ ] Add personalization (favorites, recommendations, recent services)
- [ ] Multi-language support (internationalization)
- [ ] Conduct accessibility audit with citizens with disabilities
- [ ] Full public launch

**Phase 4: Optimization (Months 13-18)**
- [ ] Performance optimization based on RUM data
- [ ] A/B testing for conversion rate optimization
- [ ] Advanced features (chatbot, voice assistant, predictive search)
- [ ] Continuous accessibility improvements
- [ ] Expand to all government services (100+ services)

### 15.3 Success Metrics

**Adoption Metrics**:
- 60%+ of eligible transactions completed digitally within 3 years
- 500,000+ registered citizens within 1 year
- 2 million+ page views per month

**Quality Metrics**:
- 80%+ citizen satisfaction score (measured via feedback widget)
- 100% WCAG 2.1 AA compliance (zero critical defects)
- 99.9%+ uptime (excluding planned maintenance)
- <3 second page load time on 90%+ of pages

**Business Impact**:
- 40% reduction in call center volume (citizens self-serve online)
- 30% reduction in in-person visits to government offices
- $10 million+ in operational savings annually

### 15.4 Resources and References

**Design Systems**:
- Gov.UK Design System: https://design-system.service.gov.uk/
- US Web Design System: https://designsystem.digital.gov/
- Australia DTA Design System: https://designsystem.gov.au/

**Accessibility**:
- WCAG 2.1 Guidelines: https://www.w3.org/WAI/WCAG21/quickref/
- WebAIM: https://webaim.org/
- A11y Project: https://www.a11yproject.com/

**Performance**:
- Web Vitals: https://web.dev/vitals/
- Lighthouse: https://developers.google.com/web/tools/lighthouse

**Security**:
- OWASP Top 10: https://owasp.org/www-project-top-ten/
- CSP Evaluator: https://csp-evaluator.withgoogle.com/

**Real-World Examples**:
- Gov.UK: https://www.gov.uk/service-manual
- Singapore LifeSG: https://www.life.gov.sg/
- Estonia e-Estonia: https://e-estonia.com/

---

**Document Version**: 1.0
**Last Updated**: 2025-01-12
**License**: CC-BY-4.0
**Maintainer**: GaaS Framework Working Group

**Feedback**: This is a living document. Submit feedback, suggestions, and improvements via GitHub issues or pull requests.

---

*This technical architecture guide is part of the Government as a Service (GaaS) framework - an open-source blueprint for digital government transformation.*

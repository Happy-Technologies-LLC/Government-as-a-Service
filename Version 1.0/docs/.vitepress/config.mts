import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(
  defineConfig({
    title: "Government as a Service",
    description: "The Global Operating Model for 21st-Century Digital Government",
    base: '/Government-as-a-Service/',

    // Mermaid configuration with brand colors
    mermaid: {
      theme: 'base',
      themeVariables: {
        primaryColor: '#334155',      // Slate 700 (brand primary)
        primaryTextColor: '#ffffff',  // White text on primary
        primaryBorderColor: '#475569', // Slate 600
        lineColor: '#0ea5e9',         // Sky Blue 500
        secondaryColor: '#14b8a6',    // Teal 500
        tertiaryColor: '#facc15',     // Amber 400
        noteBkgColor: '#f1f5f9',      // Slate 100
        noteTextColor: '#1e293b',     // Slate 800
        noteBorderColor: '#cbd5e1'    // Slate 300
      }
    },

    head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/Government-as-a-Service/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/Government-as-a-Service/icons/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/Government-as-a-Service/icons/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/Government-as-a-Service/site.webmanifest' }],
    ['link', { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/lipis/flag-icons@7.2.3/css/flag-icons.min.css' }],
    ['meta', { name: 'theme-color', content: '#334155' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'Government as a Service' }],
    ['meta', { property: 'og:description', content: 'The Global Framework for Digital Government Transformation' }],
    ['meta', { property: 'og:image', content: '/Government-as-a-Service/icons/android-chrome-512x512.png' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }]
  ],

  themeConfig: {
    logo: '/images/logos/logo.png',

    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      {
        text: 'Framework',
        items: [
          { text: 'Framework Overview', link: '/framework' },
          { text: 'The Manifesto', link: '/layer0-legal-policy-foundation/gaas-manifesto' },
          { text: 'GaaS Service Value System', link: '/gaas-service-value-system' },
          { text: 'Reference Implementations (Planned)', link: '/reference-implementations' }
        ]
      },
      {
        text: 'Layers',
        items: [
          { text: 'Layer 0: Legal & Policy Foundation', link: '/layer0-legal-policy-foundation/layer0-overview' },
          { text: 'Layer 1: Shared Technology Core', link: '/layer1-shared-technology-core/layer1-overview' },
          { text: 'Layer 2: People & Process Engine', link: '/layer2-people-process-engine/layer2-overview' },
          { text: 'Layer 3: Transparent Service Portfolio', link: '/layer3-transparent-service-portfolio/layer3-overview' },
          { text: 'Layer 4: Unified Citizen Experience', link: '/layer4-unified-citizen-experience/layer4-overview' }
        ]
      },
      {
        text: 'Community',
        items: [
          { text: 'Discussions Forum', link: 'https://github.com/Happy-Technologies-LLC/Government-as-a-Service/discussions' },
          { text: 'Co-Design & Feedback', link: '/layer4-unified-citizen-experience/community-platform-overview' },
          { text: 'Certification Program', link: '/layer4-unified-citizen-experience/certification-program' }
        ]
      },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Start Here (Choose Your Path)', link: '/getting-started' },
          { text: 'Framework Overview', link: '/framework' },
          { text: 'The Manifesto', link: '/layer0-legal-policy-foundation/gaas-manifesto' },
          { text: 'GaaS Service Value System', link: '/gaas-service-value-system' }
        ]
      },
      {
        text: 'Layer 0: Legal & Policy Foundation',
        collapsed: false,
        items: [
          { text: 'Overview', link: '/layer0-legal-policy-foundation/layer0-overview' },
          { text: 'The Manifesto', link: '/layer0-legal-policy-foundation/gaas-manifesto' },
          {
            text: 'Legislative Templates',
            collapsed: true,
            items: [
              { text: 'Digital Identity Act', link: '/layer0-legal-policy-foundation/digital-identity-act' },
              { text: 'Data Protection Act', link: '/layer0-legal-policy-foundation/data-protection-privacy-act' },
              { text: 'E-Government Services Act', link: '/layer0-legal-policy-foundation/e-government-services-act' },
              { text: 'Cybersecurity Act', link: '/layer0-legal-policy-foundation/cybersecurity-act' },
              { text: 'Open Data Act', link: '/layer0-legal-policy-foundation/open-data-transparency-act' }
            ]
          },
          {
            text: 'Policy Templates',
            collapsed: true,
            items: [
              { text: 'National Digital Strategy', link: '/layer0-legal-policy-foundation/national-digital-strategy-template' },
              { text: 'API Governance', link: '/layer0-legal-policy-foundation/api-governance-policy' },
              { text: 'Cloud First Policy', link: '/layer0-legal-policy-foundation/cloud-first-policy' },
              { text: 'Digital Identity Assurance', link: '/layer0-legal-policy-foundation/digital-identity-assurance-framework' },
              { text: 'Algorithmic Accountability', link: '/layer0-legal-policy-foundation/algorithmic-accountability-policy' }
            ]
          },
          {
            text: 'Governance Documents',
            collapsed: true,
            items: [
              { text: 'DTO Charter', link: '/layer0-legal-policy-foundation/digital-transformation-office-charter' },
              { text: 'CDO Job Description', link: '/layer0-legal-policy-foundation/chief-digital-officer-job-description' },
              { text: 'Digital Service Standard', link: '/layer0-legal-policy-foundation/digital-service-standard' },
              { text: 'Technology Selection', link: '/layer0-legal-policy-foundation/technology-selection-framework' },
              { text: 'Risk Management', link: '/layer0-legal-policy-foundation/risk-management-framework' },
              { text: 'Performance Dashboard', link: '/layer0-legal-policy-foundation/performance-dashboard-specification' }
            ]
          }
        ]
      },
      {
        text: 'Layer 1: Shared Technology Core',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/layer1-shared-technology-core/layer1-overview' },
          { text: 'Process & Service Management Architecture', link: '/layer1-shared-technology-core/volume-2-process-service-management-architecture' },
          { text: 'Technology & Platform Architecture', link: '/layer1-shared-technology-core/volume-3-technology-platform-architecture' },
          { text: 'Data Architecture Blueprint', link: '/layer1-shared-technology-core/data-architecture-blueprint' },
          {
            text: 'Deployment Playbooks',
            collapsed: true,
            items: [
              { text: 'Deploy: Digital Identity', link: '/layer1-shared-technology-core/deployments/deploy-digital-identity' },
              { text: 'Deploy: API Gateway', link: '/layer1-shared-technology-core/deployments/deploy-api-gateway' },
              { text: 'Deploy: Cloud Infrastructure', link: '/layer1-shared-technology-core/deployments/deploy-cloud-infrastructure' },
              { text: 'Deploy: Zero Trust Security', link: '/layer1-shared-technology-core/deployments/deploy-zero-trust' }
            ]
          }
        ]
      },
      {
        text: 'Layer 2: People & Process Engine',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/layer2-people-process-engine/layer2-overview' },
          {
            text: 'People Dimension',
            collapsed: false,
            items: [
              { text: 'GaaS Workforce Blueprint', link: '/layer2-people-process-engine/people/gaas-workforce-blueprint' },
              { text: 'Digital Talent Strategy', link: '/layer2-people-process-engine/people/digital-talent-strategy' }
            ]
          },
          {
            text: 'Process Dimension',
            collapsed: false,
            items: [
              { text: 'Process: Digital Identity', link: '/layer2-people-process-engine/processes/process-digital-identity' },
              { text: 'Process: API Gateway', link: '/layer2-people-process-engine/processes/process-api-gateway' },
              { text: 'Process: Co-Design', link: '/layer2-people-process-engine/processes/process-codesign-engagement' },
              { text: 'Process: Zero Trust', link: '/layer2-people-process-engine/processes/process-zero-trust' },
              { text: 'Process: Digital Inclusion', link: '/layer2-people-process-engine/processes/process-digital-inclusion' },
              { text: 'Process: Cybersecurity', link: '/layer2-people-process-engine/processes/process-cybersecurity-operations' },
              { text: 'Process: Data Governance', link: '/layer2-people-process-engine/processes/process-data-governance' },
              { text: 'Process: Change Management', link: '/layer2-people-process-engine/processes/process-change-management' },
              { text: 'Process: Vendor Management', link: '/layer2-people-process-engine/processes/process-vendor-management' },
              { text: 'Process: Testing & QA', link: '/layer2-people-process-engine/processes/process-testing-qa' },
              { text: 'Process: Disaster Recovery', link: '/layer2-people-process-engine/processes/process-disaster-recovery' },
              { text: 'Process: GSM Implementation', link: '/layer2-people-process-engine/processes/process-gsm-implementation' },
              { text: 'Process: Service Portfolio & Cost', link: '/layer2-people-process-engine/processes/process-service-portfolio-cost' }
            ]
          }
        ]
      },
      {
        text: 'Layer 3: Transparent Service Portfolio',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/layer3-transparent-service-portfolio/layer3-overview' },
          { text: 'Portfolio Management Strategic Guide', link: '/layer3-transparent-service-portfolio/portfolio-management-strategic-guide' },
          { text: 'Greenfield Implementation Guide', link: '/layer3-transparent-service-portfolio/greenfield-implementation-guide' },
          { text: 'Fiscal Architecture (TBM)', link: '/layer3-transparent-service-portfolio/fiscal-architecture' }
        ]
      },
      {
        text: 'Layer 4: Unified Citizen Experience',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/layer4-unified-citizen-experience/layer4-overview' },
          { text: 'Technical Architecture', link: '/layer4-unified-citizen-experience/layer4-technical-architecture' },
          { text: 'Community Platform', link: '/layer4-unified-citizen-experience/community-platform-overview' },
          { text: 'Certification Program', link: '/layer4-unified-citizen-experience/certification-program' },
          { text: 'Implementation Registry', link: '/layer4-unified-citizen-experience/implementation-registry' },
          { text: 'Events Program', link: '/layer4-unified-citizen-experience/events-program' },
          { text: 'Governance Model', link: '/layer4-unified-citizen-experience/governance-model' }
        ]
      },
      {
        text: 'GaaS Service Value System',
        collapsed: true,
        items: [
          { text: 'Overview', link: '/gaas-service-value-system' },
          { text: 'Service Value Chain', link: '/gaas-service-value-system#service-value-chain' },
          { text: 'Practices & Blueprint Library', link: '/gaas-service-value-system#practices-library' },
          { text: 'Continual Improvement', link: '/gaas-service-value-system#continual-improvement' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Happy-Technologies-LLC/Government-as-a-Service' }
    ],

    footer: {
      message: 'Released under the CC BY 4.0 License.',
      copyright: 'Copyright © 2025 Government as a Service Community'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/Happy-Technologies-LLC/Government-as-a-Service/edit/main/docs/:path',
      text: 'Suggest changes to this page'
    }
  }
})
)

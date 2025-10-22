import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "Government as a Service",
  description: "The Global Framework for 21st-Century Digital Governance",
  base: '/Government-as-a-Service/',

  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/Government-as-a-Service/icons/favicon-32x32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/Government-as-a-Service/icons/favicon-16x16.png' }],
    ['link', { rel: 'apple-touch-icon', sizes: '180x180', href: '/Government-as-a-Service/icons/apple-touch-icon.png' }],
    ['link', { rel: 'manifest', href: '/Government-as-a-Service/site.webmanifest' }],
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
      { text: 'Framework', link: '/framework' },
      { text: 'Downloads', link: '/downloads' },
      { text: 'Community', link: '/tier5-community/community-platform-overview' },
      { text: 'Contact', link: '/contact' }
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Framework Overview', link: '/framework' },
          { text: 'Quick Start Guide', link: '/tier0-manifesto/gaas-manifesto' },
          { text: 'Downloads', link: '/downloads' }
        ]
      },
      {
        text: 'Tier 0: Manifesto',
        collapsed: false,
        items: [
          { text: 'The Manifesto', link: '/tier0-manifesto/gaas-manifesto' }
        ]
      },
      {
        text: 'Tier 1: Executive Playbook',
        collapsed: false,
        items: [
          { text: 'Executive Playbook', link: '/tier1-executive-playbook/executive-playbook' },
          { text: 'Greenfield Implementation Guide', link: '/tier1-executive-playbook/greenfield-implementation-guide' },
          { text: 'Fiscal Architecture', link: '/tier1-executive-playbook/fiscal-architecture' }
        ]
      },
      {
        text: 'Tier 2: Technical Blueprints',
        collapsed: true,
        items: [
          { text: 'Volume 1: People & Organizational Architecture', link: '/tier2-technical-blueprint/volume-1-people-organizational-architecture' },
          { text: 'Volume 2: Process & Service Management', link: '/tier2-technical-blueprint/volume-2-process-service-management-architecture' },
          { text: 'Volume 3: Technology & Platform Architecture', link: '/tier2-technical-blueprint/volume-3-technology-platform-architecture' },
          { text: 'Talent Strategy (Supplement)', link: '/tier2-technical-blueprint/talent-strategy' }
        ]
      },
      {
        text: 'Tier 3: Implementation Playbooks',
        collapsed: true,
        items: [
          { text: '1. Digital Identity', link: '/tier3-playbooks/1-digital-identity-implementation' },
          { text: '2. API Gateway', link: '/tier3-playbooks/2-api-gateway-deployment' },
          { text: '3. Co-Design', link: '/tier3-playbooks/3-codesign-engagement' },
          { text: '4. Zero Trust', link: '/tier3-playbooks/4-zero-trust-migration' },
          { text: '5. Digital Inclusion', link: '/tier3-playbooks/5-digital-inclusion-strategy' },
          { text: '6. Cybersecurity', link: '/tier3-playbooks/6-cybersecurity-operations' },
          { text: '7. Data Governance', link: '/tier3-playbooks/7-data-governance-framework' },
          { text: '8. Change Management', link: '/tier3-playbooks/8-change-management-training' },
          { text: '9. GSM Implementation Guide', link: '/tier3-playbooks/9-gsm-implementation-guide' },
          { text: '10. Service Portfolio & Cost Management', link: '/tier3-playbooks/10-service-portfolio-cost-management' }
        ]
      },
      {
        text: 'Tier 4: Policy & Legal',
        collapsed: true,
        items: [
          {
            text: 'Legislative Templates',
            collapsed: true,
            items: [
              { text: 'Digital Identity Act', link: '/tier4-policy-legal/digital-identity-act' },
              { text: 'Data Protection Act', link: '/tier4-policy-legal/data-protection-privacy-act' },
              { text: 'E-Government Services Act', link: '/tier4-policy-legal/e-government-services-act' },
              { text: 'Cybersecurity Act', link: '/tier4-policy-legal/cybersecurity-act' },
              { text: 'Open Data Act', link: '/tier4-policy-legal/open-data-transparency-act' }
            ]
          },
          {
            text: 'Policy Templates',
            collapsed: true,
            items: [
              { text: 'National Digital Strategy', link: '/tier4-policy-legal/national-digital-strategy-template' },
              { text: 'API Governance', link: '/tier4-policy-legal/api-governance-policy' },
              { text: 'Cloud First Policy', link: '/tier4-policy-legal/cloud-first-policy' },
              { text: 'Digital Identity Assurance', link: '/tier4-policy-legal/digital-identity-assurance-framework' },
              { text: 'Algorithmic Accountability', link: '/tier4-policy-legal/algorithmic-accountability-policy' }
            ]
          },
          {
            text: 'Governance Documents',
            collapsed: true,
            items: [
              { text: 'DTO Charter', link: '/tier4-policy-legal/digital-transformation-office-charter' },
              { text: 'CDO Job Description', link: '/tier4-policy-legal/chief-digital-officer-job-description' },
              { text: 'Digital Service Standard', link: '/tier4-policy-legal/digital-service-standard' },
              { text: 'Technology Selection', link: '/tier4-policy-legal/technology-selection-framework' },
              { text: 'Risk Management', link: '/tier4-policy-legal/risk-management-framework' },
              { text: 'Performance Dashboard', link: '/tier4-policy-legal/performance-dashboard-specification' }
            ]
          }
        ]
      },
      {
        text: 'Tier 5: Community Hub',
        collapsed: true,
        items: [
          { text: 'Platform Overview', link: '/tier5-community/community-platform-overview' },
          { text: 'Certification Program', link: '/tier5-community/certification-program' },
          { text: 'Implementation Registry', link: '/tier5-community/implementation-registry' },
          { text: 'Events Program', link: '/tier5-community/events-program' },
          { text: 'Governance Model', link: '/tier5-community/governance-model' }
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

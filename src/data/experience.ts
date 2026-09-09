import type { RoleEntry } from '../types';

export const experience: RoleEntry[] = [
  {
    id: 'joyent',
    title: 'Senior Full Stack Developer',
    company: 'Joyent Inc. (a Samsung company)',
    location: 'Remote',
    start: 'Apr 2019',
    end: 'Present',
    featured: true,
    bullets: [
      'Built a self-healing test tool powered by a locally fine-tuned LLM (Gemma, via Ollama) that traces Cypress CI failures to root cause — cut the time to tell a flaky test from a real bug by roughly 15x.',
      "Owned front-end delivery for the platform's most-used microfrontends (EC2, VPC, IAM, Kubernetes, Secrets Manager), used by around 20 internal teams across Samsung.",
      "Built and evolved the platform's Node.js GraphQL layer over 8 years across roughly 25 AWS-compatible services, instrumented for real-time Prometheus/Grafana visibility.",
      'Migrated CI/CD from Jenkins to GitHub Actions and delivered a Python release-management tool that cut release time by more than 10x.',
    ],
  },
  {
    id: 'adp',
    title: 'Senior Software Developer',
    company: 'ADP LLC',
    location: 'Pasadena, CA',
    start: 'Apr 2017',
    end: 'Apr 2019',
    summary:
      "Shipped Wisely Paycard (React, Next.js, Redux) and practitioner-facing tools for ADP's Wage Payments team, built to strict cross-browser and accessibility standards.",
  },
  {
    id: 'morgan-stanley',
    title: 'Frontend Developer',
    company: 'Morgan Stanley',
    location: 'New York, NY',
    start: 'Nov 2016',
    end: 'Apr 2017',
    summary:
      "Recruited for deep CSS/SCSS expertise on Access Investing, the firm's Wealth Management platform — cleared a months-old styling backlog and improved UI consistency across the app.",
  },
  {
    id: 'consumers-energy',
    title: 'Frontend Developer',
    company: 'Consumers Energy',
    location: 'Jackson, MI',
    start: 'Apr 2014',
    end: 'Nov 2016',
    summary:
      'Built ERP/CRM/HCM web applications and a custom AngularJS framework letting SAP developers build interfaces from configuration stored directly in SAP tables.',
  },
  {
    id: 'sce',
    title: 'Frontend Developer',
    company: 'Southern California Edison',
    location: 'Irwindale, CA',
    start: 'Jul 2010',
    end: 'Apr 2014',
    summary:
      'Built SPAs, hybrid iOS applications, and a custom charting/visualization library for enterprise applications in Flex and ActionScript 3.0.',
  },
  {
    id: 'atomic-design',
    title: 'Web Developer',
    company: 'Atomic Design',
    location: 'Rochester, NY',
    start: 'Feb 2009',
    end: 'Jun 2010',
    summary:
      'Built CMS features and third-party API integrations — PayPal, FedEx, UPS, and Google Maps — in ASP.NET and C#.',
  },
];

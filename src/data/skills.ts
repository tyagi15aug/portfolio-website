import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  {
    label: 'Frontend & UI',
    skills: [
      'Vue 3',
      'Nuxt',
      'Pinia',
      'React',
      'Next.js',
      'Redux',
      'Angular',
      'TypeScript',
      'JavaScript',
      'Vite',
      'Webpack',
      'Accessibility (ARIA)',
    ],
  },
  {
    label: 'APIs, Testing & Backend',
    skills: ['GraphQL', 'REST APIs', 'Node.js', 'Python', 'Go', 'SQL', 'Cypress', 'Playwright'],
  },
  {
    label: 'Cloud, DevOps & Infrastructure',
    skills: [
      'AWS (EC2, VPC, IAM, EKS, S3)',
      'Docker',
      'Kubernetes',
      'GitHub Actions',
      'CI/CD',
      'Prometheus',
      'Grafana',
      'Keycloak / JWT',
    ],
  },
  {
    label: 'AI Tooling',
    skills: ['Claude Code', 'Ollama', 'LLM Fine-Tuning'],
  },
];

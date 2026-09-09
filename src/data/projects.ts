import type { ProjectEntry } from '../types';

// `url` is left undefined for projects without a published repo/demo yet —
// ProjectCard renders those with a disabled link icon instead of a dead link.
// Fill in the real GitHub/demo URL here as each project ships.
export const projects: ProjectEntry[] = [
  {
    id: 'cloudlab',
    name: 'CloudLab',
    status: 'live',
    description:
      'An AWS-console-style cloud control plane for provisioning and debugging LocalStack-backed infrastructure — provider abstraction, failure injection, request tracing, and a companion CLI, backed by unit, integration, and E2E tests in CI.',
    tags: ['React', 'TypeScript', 'FastAPI', 'LocalStack', 'Docker', 'Playwright'],
    url: 'https://cloudlab-ui.onrender.com'
  },
  {
    id: 'gluconimbus',
    name: 'GlucoNimbus',
    status: 'live',
    description:
      'A real-time CGM data platform that replays research glucose data through an event-driven pipeline — queue-decoupled ingestion, idempotent processing, and a live Next.js dashboard. Engineering demonstration only, not a medical device.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'SQS', 'Turborepo'],
    url: 'https://gluconimbus-web.onrender.com'
  },
  {
    id: 'system-architecture-builder',
    name: 'System Architecture Builder',
    status: 'planned',
    description:
      'An interactive tool for constructing and inspecting system architecture diagrams — components, relationships, and a structured model built for validation and export, not just boxes on a canvas.',
    tags: ['React', 'TypeScript'],
  },
  {
    id: 'ai-ci-analyzer',
    name: 'AI CI Analyzer',
    status: 'planned',
    description:
      'A standalone AI agent that ingests CI artifacts — logs, test reports, screenshots — from the other projects and produces evidence-backed, confidence-scored root-cause analysis of failures.',
    tags: ['LLM Agents', 'CI/CD'],
  },
];

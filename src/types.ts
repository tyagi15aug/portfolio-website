export interface RoleEntry {
  id: string;
  title: string;
  company: string;
  location: string;
  start: string;
  end: string;
  /** Full bullet list — used for the featured/current role. */
  bullets?: string[];
  /** One-line summary — used for condensed prior roles. */
  summary?: string;
  featured?: boolean;
}

export type ProjectStatus = 'live' | 'in-development' | 'planned';

export interface ProjectEntry {
  id: string;
  name: string;
  status: ProjectStatus;
  description: string;
  tags: string[];
  /** Left undefined until a real repo/demo URL exists. */
  url?: string;
}

export interface SkillGroup {
  label: string;
  skills: string[];
}

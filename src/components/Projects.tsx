import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';
import styles from './Projects.module.css';
import type { ProjectEntry } from '../types';

export function Projects({ onLaunchDemo }: { onLaunchDemo: (project: ProjectEntry) => void }) {
  return (
    <Section id="projects" eyebrow="Portfolio" title="Side Projects">
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} onLaunchDemo={onLaunchDemo} />
        ))}
      </div>
    </Section>
  );
}

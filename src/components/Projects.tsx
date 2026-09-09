import { projects } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { Section } from './Section';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <Section id="projects" eyebrow="Portfolio" title="Side Projects">
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}

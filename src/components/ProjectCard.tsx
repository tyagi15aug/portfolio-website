import type { ProjectEntry } from '../types';
import { ArrowIcon } from './icons';
import { StatusPill } from './StatusPill';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project, onLaunchDemo }: { project: ProjectEntry; onLaunchDemo: (project: ProjectEntry) => void }) {
  const isUnbuilt = project.status === 'planned';

  return (
    <div className={`${styles.card} ${isUnbuilt ? styles.unbuilt : ''}`}>
      <div className={styles.titleRow}>
        <span className={styles.title}>{project.name}</span>
        {project.url && (
          <button className={styles.launch} type="button" onClick={() => onLaunchDemo(project)}>
            Launch Demo
            <ArrowIcon />
          </button>
      )}
      </div>

      <StatusPill status={project.status} />

      <p className={styles.desc}>{project.description}</p>

      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

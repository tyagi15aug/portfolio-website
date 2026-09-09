import type { ProjectEntry } from '../types';
import { ArrowIcon } from './icons';
import { StatusPill } from './StatusPill';
import styles from './ProjectCard.module.css';

export function ProjectCard({ project }: { project: ProjectEntry }) {
  const isUnbuilt = project.status === 'planned';

  return (
    <div className={`${styles.card} ${isUnbuilt ? styles.unbuilt : ''}`}>
      <div className={styles.titleRow}>
        <span className={styles.title}>{project.name}</span>
        {project.url && (
        <a className={styles.launch} href={project.url} target="_blank" rel="noopener noreferrer">
          Launch Demo
          <ArrowIcon />
        </a>
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
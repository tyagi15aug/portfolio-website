import type { ProjectStatus } from '../types';
import styles from './StatusPill.module.css';

const LABELS: Record<ProjectStatus, string> = {
  live: 'Live',
  'in-development': 'In Development',
  planned: 'Planned',
};

const CLASS: Record<ProjectStatus, string> = {
  live: styles.live,
  'in-development': styles.inDevelopment,
  planned: styles.planned,
};

export function StatusPill({ status }: { status: ProjectStatus }) {
  return (
    <span className={`${styles.pill} ${CLASS[status]}`}>
      <span className={styles.dot} />
      {LABELS[status]}
    </span>
  );
}

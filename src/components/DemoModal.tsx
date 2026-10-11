import { useEffect, useRef } from 'react';
import type { ProjectEntry } from '../types';
import { ArrowIcon } from './icons';
import styles from './DemoModal.module.css';

interface DemoModalProps {
  project: ProjectEntry | null;
  onClose: () => void;
}

/**
 * Keeps a recruiter in the portfolio while still loading the independently
 * deployed project. The direct link is always available if a host prevents
 * iframe embedding or the visitor prefers a full browser tab.
 */
export function DemoModal({ project, onClose }: DemoModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project?.url) return null;
  const isGlucoNimbus = project.id === 'gluconimbus';

  return (
    <div className={styles.backdrop} role="presentation" onMouseDown={onClose}>
      <section
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Live project</p>
            <h2 id="demo-modal-title">{project.name}</h2>
          </div>
          <div className={styles.actions}>
            <a className={styles.openLink} href={project.url} target="_blank" rel="noopener noreferrer">
              Open in new tab <ArrowIcon />
            </a>
            <button ref={closeButtonRef} className={styles.close} type="button" onClick={onClose} aria-label="Close live demo">
              ×
            </button>
          </div>
        </header>

        {isGlucoNimbus && (
          <div className={styles.context}>
            <strong>Data flow:</strong> research data → simulator → ingestion API → queue → worker → PostgreSQL → live dashboard.
            <a href={`${project.url}/architecture`} target="_blank" rel="noopener noreferrer"> View the architecture view</a>
          </div>
        )}

        <div className={styles.frameWrap}>
          <iframe className={styles.frame} src={project.url} title={`${project.name} live demo`} allowFullScreen />
        </div>
        <p className={styles.fallback}>
          If the host blocks embedded content, <a href={project.url} target="_blank" rel="noopener noreferrer">open {project.name} in a new tab</a>.
        </p>
      </section>
    </div>
  );
}

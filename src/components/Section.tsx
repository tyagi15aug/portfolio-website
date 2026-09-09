import type { PropsWithChildren } from 'react';
import { SunburstIcon } from './icons';
import styles from './Section.module.css';

interface SectionProps {
  id?: string;
  eyebrow: string;
  title: string;
}

/** Shared eyebrow + heading scaffold used by every page section. */
export function Section({ id, eyebrow, title, children }: PropsWithChildren<SectionProps>) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.eyebrow}>
        <SunburstIcon />
        {eyebrow}
      </div>
      <h2 className={styles.title}>{title}</h2>
      {children}
    </section>
  );
}

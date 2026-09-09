import { links } from '../data/links';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        <a href={links.github.url} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={links.linkedin.url} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={links.resume.url} download={links.resume.filename}>
          Resume (PDF)
        </a>
      </div>
      <p className={styles.note}>Rochester Institute of Technology, MS &middot; CET-IILM-AHL, BTech</p>
    </footer>
  );
}

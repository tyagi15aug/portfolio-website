import { links } from '../data/links';
import styles from './Nav.module.css';

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a className={styles.wordmark} href="#top">
          <span className={styles.mark}>&#9670;</span> Anuj Tyagi
        </a>
        <nav className={styles.links}>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#skills">Skills</a>
          <span className={styles.sep} />
          <a href={links.github.url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href={links.linkedin.url} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </nav>
      </div>
    </header>
  );
}

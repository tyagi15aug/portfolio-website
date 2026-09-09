import { links } from '../data/links';
import { ThemeToggle } from './ThemeToggle';
import styles from './Nav.module.css';

export function Nav() {
  return (
    <header className={styles.nav}>
      <div className={styles.inner}>
        <a className={styles.wordmark} href="#top" />
        <nav className={styles.links}>
          <a href="#experience">Experience</a>
          <span className={styles.sep} />
          <a href="#projects">Projects</a>
          <span className={styles.sep} />
          <a href="#skills">Skills</a>
          <span className={styles.sep} />
          <a href={links.github.url} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <span className={styles.sep} />
          <a href={links.linkedin.url} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  );
}

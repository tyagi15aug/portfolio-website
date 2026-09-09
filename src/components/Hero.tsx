import { links } from '../data/links';
import { ArrowIcon, DownloadIcon, SunburstIcon } from './icons';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <section className={styles.hero} id="top">
      <div aria-hidden="true" />

      <div className={styles.eyebrow}>
        <SunburstIcon />
        Portfolio
      </div>

      <h1 className={styles.name}>Anuj Tyagi</h1>
      <p className={styles.role}>Senior Full-Stack Developer</p>

      <p className={styles.summary}>
        16 years building enterprise web applications and the production tools behind them &mdash; frontend
        platforms, GraphQL/API layers, CI/CD, and observability. Lately building AI-augmented engineering tools,
        including a self-healing test system that fine-tunes a local LLM to trace CI failures to root cause.
      </p>

      <div className={styles.statRow}>
        <div className={styles.stat}>
          <span className={styles.statValue}>16</span>
          <span className={styles.statLabel}>years experience</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>6</span>
          <span className={styles.statLabel}>companies</span>
        </div>
        <div className={styles.stat}>
          <span className={styles.statValue}>25+</span>
          <span className={styles.statLabel}>AWS-compatible services shipped</span>
        </div>
      </div>

      <nav className={styles.links}>
        <a className={styles.linkRow} href={links.github.url} target="_blank" rel="noopener noreferrer">
          <span className={styles.linkLabel}>
            <span className={styles.linkName}>GitHub</span>
            <span className={styles.linkSub}>{links.github.label}</span>
          </span>
          <ArrowIcon className={styles.arrow} />
        </a>
        <a className={styles.linkRow} href={links.linkedin.url} target="_blank" rel="noopener noreferrer">
          <span className={styles.linkLabel}>
            <span className={styles.linkName}>LinkedIn</span>
            <span className={styles.linkSub}>{links.linkedin.label}</span>
          </span>
          <ArrowIcon className={styles.arrow} />
        </a>
        <a className={styles.linkRow} href={links.resume.url} download={links.resume.filename}>
          <span className={styles.linkLabel}>
            <span className={styles.linkName}>Resume</span>
            <span className={styles.linkSub}>PDF &middot; download</span>
          </span>
          <DownloadIcon className={styles.arrow} />
        </a>
      </nav>
    </section>
  );
}

import { experience } from '../data/experience';
import { Section } from './Section';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <Section id="experience" eyebrow="Career" title="Experience">
      <div className={styles.timeline}>
        {experience.map((role) => (
          <div key={role.id} className={`${styles.entry} ${role.featured ? styles.featured : ''}`}>
            <div className={styles.dates}>
              {role.start}&ndash;
              <br />
              {role.end}
            </div>
            <div className={styles.rail}>
              <div className={styles.dot} />
            </div>
            <div className={styles.body}>
              <div className={styles.head}>
                <span className={styles.title}>{role.title}</span>
              </div>
              <div className={styles.company}>
                {role.company} &middot; {role.location}
              </div>
              {role.bullets ? (
                <ul className={styles.bullets}>
                  {role.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p className={styles.oneline}>{role.summary}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

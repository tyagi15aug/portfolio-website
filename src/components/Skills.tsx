import { skillGroups } from '../data/skills';
import { Section } from './Section';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <Section id="skills" eyebrow="Toolbox" title="Skills">
      <div className={styles.groups}>
        {skillGroups.map((group) => (
          <div key={group.label}>
            <div className={styles.groupLabel}>{group.label}</div>
            <div className={styles.chips}>
              {group.skills.map((skill) => (
                <span key={skill} className={styles.chip}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

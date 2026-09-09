import { useEffect, useState } from 'react';
import { MonitorIcon, MoonIcon, SunIcon } from './icons';
import styles from './ThemeToggle.module.css';

// Same preference/resolvedTheme split as CloudLab's ThemeProvider: `preference`
// is what the person picked (including "system"); this site's tokens.css
// already resolves "system" via prefers-color-scheme on its own, so unlike
// CloudLab there's no separate resolvedTheme state or matchMedia listener to
// maintain here — removing the data-theme attribute is enough to hand control
// back to the media query.
type ThemePreference = 'light' | 'system' | 'dark';

const STORAGE_KEY = 'theme-preference';

const OPTIONS: { value: ThemePreference; label: string; Icon: typeof SunIcon }[] = [
  { value: 'light', label: 'Light theme', Icon: SunIcon },
  { value: 'system', label: 'Use system theme', Icon: MonitorIcon },
  { value: 'dark', label: 'Dark theme', Icon: MoonIcon },
];

function applyTheme(pref: ThemePreference) {
  if (pref === 'light' || pref === 'dark') {
    document.documentElement.setAttribute('data-theme', pref);
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
}

function getStoredPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark' || stored === 'system') return stored;
  } catch {
    // localStorage unavailable — fall through to system default.
  }
  return 'system';
}

/**
 * Icon-only three-way segmented control — same shape, order and
 * interaction as CloudLab's ThemeToggle (src/components/layout/ThemeToggle.tsx
 * in cloudLab-ui). index.html applies the stored preference before first
 * paint to avoid a flash; this just reconciles state after mount.
 */
export function ThemeToggle() {
  const [preference, setPreferenceState] = useState<ThemePreference>('system');

  useEffect(() => {
    setPreferenceState(getStoredPreference());
  }, []);

  function setPreference(next: ThemePreference) {
    setPreferenceState(next);
    applyTheme(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // best-effort; theme still applies for this session
    }
  }

  return (
    <div role="radiogroup" aria-label="Theme" className={styles.group}>
      {OPTIONS.map(({ value, label, Icon }) => {
        const active = preference === value;
        return (
          <button
            key={value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setPreference(value)}
            className={`${styles.option} ${active ? styles.active : ''}`}
          >
            <Icon />
          </button>
        );
      })}
    </div>
  );
}

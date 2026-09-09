interface IconProps {
  className?: string;
}

export function ArrowIcon({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 12L12 4M12 4H5M12 4V11" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function DownloadIcon({ className }: IconProps) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M8 3V11M8 11L4.5 7.5M8 11L11.5 7.5M3 13H13"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Small recurring sunburst mark used next to section eyebrows. */
export function SunburstIcon({ className }: IconProps) {
  return (
    <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g strokeWidth="1.4" strokeLinecap="round">
        <path d="M7 1v3" />
        <path d="M7 10v3" />
        <path d="M1 7h3" />
        <path d="M10 7h3" />
        <path d="M3.1 3.1l2.1 2.1" />
        <path d="M8.8 8.8l2.1 2.1" />
        <path d="M10.9 3.1l-2.1 2.1" />
        <path d="M5.2 8.8l-2.1 2.1" />
      </g>
      <circle cx="7" cy="7" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

/**
 * Sun / Monitor / Moon — geometry matches CloudLab's icon set exactly
 * (20x20 viewBox, stroke 1.6, round caps/joins) so the theme switcher
 * looks identical across both apps.
 */
export function SunIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10" r="3.25" />
      <path d="M10 2.5v1.75M10 15.75v1.75M4.4 4.4l1.24 1.24M14.36 14.36l1.24 1.24M2.5 10h1.75M15.75 10h1.75M4.4 15.6l1.24-1.24M14.36 5.64l1.24-1.24" />
    </svg>
  );
}

export function MonitorIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="2.5" y="3.5" width="15" height="10" rx="1.5" />
      <path d="M7 17h6M10 13.5V17" />
    </svg>
  );
}

export function MoonIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="15"
      height="15"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M16.5 12.4A6.9 6.9 0 0 1 7.6 3.5a7 7 0 1 0 8.9 8.9Z" />
    </svg>
  );
}

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

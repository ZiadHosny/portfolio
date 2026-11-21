type LogoProps = { size?: number; className?: string; title?: string };

/** "ZH" monogram, option A: gradient tile with white letters (letters are paths, no fonts). */
export const Logo = ({ size = 32, className, title = "Ziad Hosny logo" }: LogoProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 64 64"
    className={className}
    {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": true })}
  >
    <defs>
      <linearGradient id="zh-logo-gradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stopColor="#6272a4" />
        <stop offset="1" stopColor="#bd93f9" />
      </linearGradient>
    </defs>
    <rect width="64" height="64" rx="14" fill="url(#zh-logo-gradient)" />
    <path
      fill="#fff"
      d="M11 19H30V25L18 39H30V45H11V39L23 25H11ZM35 19H41V29H47V19H53V45H47V35H41V45H35Z"
    />
  </svg>
);

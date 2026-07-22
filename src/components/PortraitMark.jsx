/**
 * Abstract geometric avatar: overlapping ink discs, an orbit ring, and a
 * braces glyph. Stands in for a photo on Home and About until one exists.
 */
export function PortraitMark({ className }) {
  return (
    <svg
      viewBox="0 0 288 288"
      role="img"
      aria-label="Abstract geometric avatar"
      className={className}
    >
      <rect width="288" height="288" fill="var(--paper-100)" />
      <circle cx="150" cy="138" r="86" fill="none" stroke="var(--ink-900)" strokeWidth="1" strokeDasharray="3 6" />
      <circle cx="128" cy="120" r="54" fill="var(--ink-900)" />
      <circle cx="180" cy="158" r="44" fill="var(--ink-700)" />
      <circle cx="182" cy="96" r="26" fill="none" stroke="var(--ink-900)" strokeWidth="1.4" />
      <circle cx="98" cy="192" r="12" fill="var(--stamp)" />
      <circle cx="216" cy="204" r="6" fill="var(--ink-900)" />
      <text
        x="150"
        y="158"
        textAnchor="middle"
        fontFamily="'Space Mono', monospace"
        fontSize="52"
        fontWeight="700"
        fill="var(--paper-50)"
      >
        {"{}"}
      </text>
      <rect x="0.5" y="0.5" width="287" height="287" fill="none" stroke="oklch(14% 0.002 80 / 0.2)" />
    </svg>
  );
}

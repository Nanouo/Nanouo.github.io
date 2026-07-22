import { useId } from "react";

/**
 * Generated manga-style cover art. Four rotating layouts keyed off the
 * volume index, all drawn in ink-on-paper so real cover images can replace
 * them later without touching the shelf layout.
 */

const INK = "var(--ink-900)";
const INK_SOFT = "var(--ink-700)";
const PAPER = "var(--paper-50)";
const PAPER_MID = "var(--paper-100)";
const STAMP = "var(--stamp)";
const DISPLAY = "'Space Mono', monospace";

function titleLines(title) {
  return title.toUpperCase().split(" ");
}

function volumeDigits(volume) {
  const match = volume.match(/\d+/);
  return match ? match[0].padStart(2, "0") : "00";
}

function Halftone({ id, fill }) {
  return (
    <pattern id={id} width="9" height="9" patternUnits="userSpaceOnUse">
      <circle cx="4.5" cy="4.5" r="1.5" fill={fill} />
    </pattern>
  );
}

/* Layout 0: big outlined numeral, halftone disc, title top-left */
function CoverOutline({ title, digits, category, dotsId }) {
  return (
    <>
      <rect width="260" height="333" fill={PAPER_MID} />
      <circle cx="204" cy="64" r="46" fill={`url(#${dotsId})`} />
      {titleLines(title).map((line, i) => (
        <text
          key={line}
          x="26"
          y={52 + i * 27}
          fontFamily={DISPLAY}
          fontSize="21"
          fontWeight="700"
          fill={INK}
        >
          {line}
        </text>
      ))}
      <text
        x="244"
        y="304"
        textAnchor="end"
        fontFamily={DISPLAY}
        fontSize="128"
        fontWeight="700"
        fill="none"
        stroke={INK}
        strokeWidth="1.6"
      >
        {digits}
      </text>
      <text
        x="26"
        y="304"
        fontFamily={DISPLAY}
        fontSize="10"
        letterSpacing="2"
        fill={INK_SOFT}
      >
        {category.toUpperCase()}
      </text>
    </>
  );
}

/* Layout 1: inverted ink volume, paper type, halftone band */
function CoverInverted({ title, digits, category, dotsId }) {
  return (
    <>
      <rect width="260" height="333" fill={INK} />
      <rect x="0" y="262" width="260" height="71" fill={`url(#${dotsId})`} />
      <text
        x="234"
        y="46"
        textAnchor="end"
        fontFamily={DISPLAY}
        fontSize="22"
        fontWeight="700"
        fill={PAPER}
      >
        {digits}
      </text>
      {titleLines(title).map((line, i) => (
        <text
          key={line}
          x="26"
          y={150 + i * 34}
          fontFamily={DISPLAY}
          fontSize="26"
          fontWeight="700"
          fill={PAPER}
        >
          {line}
        </text>
      ))}
      <text
        x="26"
        y="46"
        fontFamily={DISPLAY}
        fontSize="10"
        letterSpacing="2"
        fill="oklch(97% 0.004 80 / 0.6)"
      >
        {category.toUpperCase()}
      </text>
    </>
  );
}

/* Layout 2: vertical title spine-style, filled numeral, hanko seal */
function CoverVertical({ title, digits, category }) {
  return (
    <>
      <rect width="260" height="333" fill={PAPER} />
      <text
        x="26"
        y="118"
        fontFamily={DISPLAY}
        fontSize="96"
        fontWeight="700"
        fill={INK}
      >
        {digits}
      </text>
      <text
        transform="rotate(90 226 40)"
        x="226"
        y="40"
        fontFamily={DISPLAY}
        fontSize="20"
        fontWeight="700"
        letterSpacing="2"
        fill={INK}
      >
        {title.toUpperCase()}
      </text>
      <line x1="26" y1="150" x2="180" y2="150" stroke={INK} strokeWidth="1" strokeDasharray="2 5" />
      <circle cx="52" cy="286" r="22" fill="none" stroke={STAMP} strokeWidth="1.6" />
      <text
        x="52"
        y="291"
        textAnchor="middle"
        fontFamily={DISPLAY}
        fontSize="13"
        fontWeight="700"
        fill={STAMP}
      >
        {digits}
      </text>
      <text
        x="26"
        y="196"
        fontFamily={DISPLAY}
        fontSize="10"
        letterSpacing="2"
        fill={INK_SOFT}
      >
        {category.toUpperCase()}
      </text>
    </>
  );
}

/* Layout 3: manga panel grid */
function CoverPanels({ title, digits, category, dotsId }) {
  return (
    <>
      <rect width="260" height="333" fill={PAPER_MID} />
      <rect x="18" y="18" width="224" height="130" fill={PAPER} stroke={INK} strokeWidth="1.4" />
      <rect x="18" y="158" width="106" height="157" fill={`url(#${dotsId})`} stroke={INK} strokeWidth="1.4" />
      <rect x="136" y="158" width="106" height="157" fill={PAPER} stroke={INK} strokeWidth="1.4" />
      {titleLines(title).map((line, i) => (
        <text
          key={line}
          x="32"
          y={58 + i * 26}
          fontFamily={DISPLAY}
          fontSize="20"
          fontWeight="700"
          fill={INK}
        >
          {line}
        </text>
      ))}
      <text
        x="32"
        y="134"
        fontFamily={DISPLAY}
        fontSize="10"
        letterSpacing="2"
        fill={INK_SOFT}
      >
        {category.toUpperCase()}
      </text>
      <text
        x="189"
        y="256"
        textAnchor="middle"
        fontFamily={DISPLAY}
        fontSize="52"
        fontWeight="700"
        fill={INK}
      >
        {digits}
      </text>
    </>
  );
}

const LAYOUTS = [CoverOutline, CoverInverted, CoverVertical, CoverPanels];

export function VolumeCover({ project, index }) {
  const dotsId = useId();
  const digits = volumeDigits(project.volume);
  const Layout = LAYOUTS[index % LAYOUTS.length];
  const inverted = Layout === CoverInverted;

  return (
    <svg viewBox="0 0 260 333" role="img" aria-label={`${project.title} cover, ${project.volume}`}>
      <defs>
        <Halftone id={dotsId} fill={inverted ? "oklch(97% 0.004 80 / 0.5)" : "oklch(14% 0.002 80 / 0.4)"} />
      </defs>
      <Layout title={project.title} digits={digits} category={project.category} dotsId={dotsId} />
      {/* spine shadow along the binding edge */}
      <rect width="7" height="333" fill={inverted ? "oklch(97% 0.004 80 / 0.14)" : "oklch(14% 0.002 80 / 0.08)"} />
      <rect
        x="0.7"
        y="0.7"
        width="258.6"
        height="331.6"
        fill="none"
        stroke="oklch(14% 0.002 80 / 0.25)"
        strokeWidth="1.4"
      />
    </svg>
  );
}

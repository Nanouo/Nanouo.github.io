# DESIGN.md

## Tokens (src/styles.css)
- `--paper-50` oklch(97% 0.004 80) — page background
- `--paper-100` oklch(91% 0.008 85) — tinted panels, cover fills
- `--paper-200` oklch(84% 0.01 85)
- `--paper-300` oklch(72% 0.012 85) — strong hairlines
- `--ink-500` oklch(50% 0.02 80) — muted text
- `--ink-700` oklch(25% 0.005 80) — primary buttons, kickers
- `--ink-900` oklch(14% 0.002 80) — foreground
- `--stamp` oklch(54% 0.185 32) — vermillion accent, ≤10% of any view
- `--ease-out` cubic-bezier(0.22, 1, 0.36, 1)

## Typography
- Display: Space Mono (400/700), used for headings, nav, kickers, buttons,
  metadata. Kickers: 0.7rem, 0.22em tracking, uppercase.
- Body: Rubik. Body copy capped at 52–62ch.
- Hero title: clamp(2.6rem, 7.5vw, 4.75rem), line-height 0.98.

## Components
- `.volume` — shelf card: generated SVG cover (aspect 1/1.28), hover lift
  (-8px translate + offset shadow), mono title, category · tech metadata.
- `VolumeCover` — four rotating SVG cover layouts (outlined numeral,
  inverted ink, vertical title + hanko seal, panel grid), keyed by index.
- `PortraitMark` — abstract geometric SVG avatar (discs + orbit + braces).
- `.btn--primary` / `.btn--ghost` — square-cornered mono buttons.
- `.filter` — pill filter buttons, active = ink-700 fill.
- `.kicker` — mono uppercase section label.

## Rules
- Square corners everywhere except nav pills and filter pills.
- Hairline borders from `--line` / `--line-strong`; no drop-shadow cards
  except the offset "printed" shadow on volume covers.
- Motion: entrance reveals on Home hero only, 700ms ease-out stagger;
  everything honors prefers-reduced-motion.
- Covers are generated art. When real projects land, real cover images may
  replace the SVGs but must stay ink-on-paper (mono or duotone).

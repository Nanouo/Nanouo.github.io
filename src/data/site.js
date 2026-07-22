// Everything identity-related lives here so swapping in real details is a
// one-file edit. Placeholder persona for now, per the format-first plan.
export const SITE = {
  name: "Aris Thorne",
  brandMark: ["ARIS", "THORNE"], // rendered as ARIS·THORNE in the nav
  tagline: "A portfolio, shelved like manga.",
  intro:
    "I'm Aris Thorne, a computer science student building systems, interfaces, and graphics. Browse the shelf, pick a volume, read a chapter.",
  edition: "Issue #01 · 2026 Edition",
  year: 2026,
  about: {
    lede: "I'm Aris, a computer science student who treats side projects like manga volumes: each one a self-contained arc, cover art and all. I care about low-level performance, clean interfaces, and shipping things that look good on a shelf.",
    vitals: [
      { label: "Location", value: "Neo-Tokyo / SF" },
      { label: "Status", value: "Open to internships" },
      { label: "Focus", value: "Systems + Graphics" },
      { label: "Currently reading", value: "Blame! by Tsutomu Nihei" },
    ],
    stack: ["C++", "Rust", "Go", "Python", "TypeScript", "React", "GLSL", "PostgreSQL"],
    notes: [
      "Outside of code, I collect 90s tankōbon, sketch panel layouts, and lose too much sleep tuning graphics pipelines. My favorite bug fixes are the ones that shrink a stack trace to a single line.",
      "If you want to trade project ideas, reading recs, or shader tricks, my inbox is open.",
    ],
  },
};

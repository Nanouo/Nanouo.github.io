// One entry per project ("volume"). To add a real project, append an object
// here; covers are generated automatically from title + volume + category.
//
//   title     display name
//   volume    "Vol. NN" shelf label
//   category  "Systems" | "Interface" | "Graphics"
//   tech      short primary-tech label shown under the cover
//   blurb     one-liner (reserved for a future detail view)
//   badge     optional: "NEW" | "HOT REPRINT"
//   badgeSide optional: "left" | "right" (defaults left)
//   featured  true → also shown on the Home page teaser (max 4)

export const CATEGORIES = ["Favorites", "Systems", "Interface", "Graphics"];

export const PROJECTS = [
  {
    title: "Obsidian Engine",
    volume: "Vol. 01",
    category: "Graphics",
    tech: "C++",
    blurb: "A toy real-time renderer with a hand-rolled scene graph.",
    badge: "HOT REPRINT",
    badgeSide: "left",
    featured: true,
  },
  {
    title: "Packet Ghost",
    volume: "Vol. 02",
    category: "Systems",
    tech: "Rust",
    blurb: "A packet sniffer that narrates traffic like a detective novel.",
    badge: "NEW",
    badgeSide: "right",
    featured: true,
  },
  {
    title: "Ethereal Maps",
    volume: "Vol. 03",
    category: "Interface",
    tech: "React",
    blurb: "Dreamlike map tiles rendered from open geodata.",
    featured: true,
  },
  {
    title: "Void Shell",
    volume: "Vol. 04",
    category: "Systems",
    tech: "Go",
    blurb: "A minimal shell with structured pipes.",
  },
  {
    title: "Neural Ink",
    volume: "Vol. 05",
    category: "Graphics",
    tech: "Python",
    blurb: "Style transfer tuned for screentone and hatching.",
    featured: true,
  },
];

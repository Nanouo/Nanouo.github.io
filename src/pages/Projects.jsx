import { useState } from "react";

import { NavBar } from "../components/NavBar";
import { VolumeCover } from "../components/VolumeCover";
import { CATEGORIES, PROJECTS } from "../data/projects";

export function Projects() {
  const [active, setActive] = useState("Favorites");

  const visible =
    active === "Favorites" ? PROJECTS : PROJECTS.filter((p) => p.category === active);

  return (
    <>
      <NavBar />

      <header className="page-head">
        <div className="wrap">
          <span className="kicker">The Shelf · Vol. 2026</span>
          <h1 className="page-head__title">Projects</h1>
          <p className="page-head__lede">
            Every project is a volume. Filter by genre or browse the favorites.
          </p>
        </div>
      </header>

      <main className="band">
        <div className="wrap">
          <div className="filters" role="group" aria-label="Filter projects by genre">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActive(category)}
                className={`filter${active === category ? " is-active" : ""}`}
                aria-pressed={active === category}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="shelf shelf--roomy">
            {visible.map((project) => (
              <article key={project.title} className="volume">
                <div className="volume__cover">
                  {project.badge && (
                    <span
                      className={`volume__badge volume__badge--${project.badgeSide === "right" ? "right" : "left"}`}
                    >
                      {project.badge}
                    </span>
                  )}
                  <VolumeCover project={project} index={PROJECTS.indexOf(project)} />
                </div>
                <h3 className="volume__title">{project.title}</h3>
                <div className="volume__meta">
                  <span>{project.category}</span>
                  <span className="volume__meta-dot" aria-hidden="true">
                    ·
                  </span>
                  <span>{project.tech}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      <footer className="footer">
        <div className="wrap footer__inner">
          <span className="footer__copyright">
            {visible.length} volume{visible.length === 1 ? "" : "s"} on display
          </span>
          <span className="footer__note">End of Chapter 1. Thanks for reading.</span>
        </div>
      </footer>
    </>
  );
}

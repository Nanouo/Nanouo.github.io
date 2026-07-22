import { Link } from "react-router-dom";

import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { PortraitMark } from "../components/PortraitMark";
import { VolumeCover } from "../components/VolumeCover";
import { PROJECTS } from "../data/projects";
import { SITE } from "../data/site";

export function Home() {
  const featured = PROJECTS.filter((p) => p.featured).slice(0, 4);

  return (
    <>
      <NavBar />

      <main>
        <section className="wrap wrap--narrow hero">
          <div className="hero__row">
            <div className="hero__copy">
              <span className="kicker hero__kicker reveal reveal--1">{SITE.edition}</span>
              <h1 className="hero__title reveal reveal--2">
                A portfolio,
                <br />
                shelved like manga.
              </h1>
              <p className="hero__intro reveal reveal--3">{SITE.intro}</p>
              <div className="hero__actions reveal reveal--4">
                <Link to="/projects" className="btn btn--primary">
                  <span aria-hidden="true">→</span> Browse the shelf
                </Link>
                <Link to="/about" className="btn btn--ghost">
                  <span aria-hidden="true">○</span> About me
                </Link>
              </div>
            </div>
            <div className="hero__portrait reveal reveal--3">
              <PortraitMark />
            </div>
          </div>
        </section>

        <section className="wrap wrap--narrow section">
          <div className="section__head">
            <div>
              <span className="kicker">This week on the shelf</span>
              <h2 className="section__title">Featured Volumes</h2>
            </div>
            <Link to="/projects" className="link-more">
              See all <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="shelf">
            {featured.map((project) => (
              <Link to="/projects" key={project.title} className="volume">
                <div className="volume__cover">
                  <VolumeCover project={project} index={PROJECTS.indexOf(project)} />
                </div>
                <h3 className="volume__title">{project.title}</h3>
                <div className="volume__meta">
                  <span>{project.volume}</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer note="End of preview. Turn the page." />
    </>
  );
}

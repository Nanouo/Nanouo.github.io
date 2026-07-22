import { Footer } from "../components/Footer";
import { NavBar } from "../components/NavBar";
import { PortraitMark } from "../components/PortraitMark";
import { SITE } from "../data/site";

export function About() {
  const { lede, vitals, stack, notes } = SITE.about;

  return (
    <>
      <NavBar />

      <main className="wrap wrap--narrow">
        <section className="about-head">
          <div className="about-head__copy">
            <span className="kicker">Author Profile</span>
            <h1 className="page-head__title">About Me</h1>
            <p className="about-head__lede">{lede}</p>
          </div>
          <div className="about-head__portrait">
            <PortraitMark />
          </div>
        </section>

        <section className="about-grid">
          <div>
            <h2>Vitals</h2>
            <dl className="vitals">
              {vitals.map((fact) => (
                <div key={fact.label} className="vitals__row">
                  <dt className="vitals__label">{fact.label}</dt>
                  <dd className="vitals__value">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h2>Stack</h2>
            <div className="stack">
              {stack.map((tech) => (
                <span key={tech} className="stack__chip">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="notes">
          <h2>Chapter notes</h2>
          {notes.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </section>
      </main>

      <Footer note="To be continued…" />
    </>
  );
}

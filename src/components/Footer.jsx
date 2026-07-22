import { SITE } from "../data/site";

export function Footer({ note }) {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <span className="footer__copyright">
          © {SITE.year} {SITE.name}
        </span>
        <span className="footer__note">{note}</span>
      </div>
    </footer>
  );
}

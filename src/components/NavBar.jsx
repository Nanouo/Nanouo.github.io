import { NavLink, Link } from "react-router-dom";

import { SITE } from "../data/site";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/projects", label: "Projects" },
  { to: "/about", label: "About Me" },
];

export function NavBar() {
  const [first, last] = SITE.brandMark;

  return (
    <nav className="nav">
      <div className="wrap nav__inner">
        <Link to="/" className="nav__brand">
          {first}
          <span className="nav__brand-dot">·</span>
          {last}
        </Link>
        <div className="nav__links">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) => `nav__link${isActive ? " is-active" : ""}`}
            >
              {link.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

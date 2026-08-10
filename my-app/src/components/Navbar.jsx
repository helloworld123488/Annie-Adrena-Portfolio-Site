import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const LINKS = [
  { label: "About", href: "/about" },
  { label: "Resume", href: "/resume" },
  { label: "Resources", href: "/resources" },
  { label: "Skills", href: "/skills" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="wrap nav__inner">
        <Link to="/" className="nav__mark">
          AR
        </Link>

        <nav className="nav__links" aria-label="Primary">
          {LINKS.map((l) => (
            <NavLink
              key={l.label}
              to={l.href}
              className={({ isActive }) => (isActive ? "is-active" : "")}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <Link className="nav__cta" to="/contact">
          Contact Us
        </Link>

        <button
          className="nav__burger"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {open && (
        <div className="nav__sheet">
          {LINKS.map((l) => (
            <Link key={l.label} to={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="nav__sheet-cta" onClick={() => setOpen(false)}>
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}

import { Link } from "react-router-dom";
import SocialIcons from "./SocialIcons";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap site-footer__inner">
        <div>
          <p className="site-footer__name">Annie Adrena</p>
          <p className="site-footer__role">HR Generalist &middot; Bangalore</p>
        </div>

        <SocialIcons />

        <Link to="/contact" className="site-footer__cta">
          Contact Us
        </Link>
      </div>
      <div className="wrap site-footer__bottom">
        <span>&copy; {new Date().getFullYear()} Annie Adrena</span>
      </div>
    </footer>
  );
}

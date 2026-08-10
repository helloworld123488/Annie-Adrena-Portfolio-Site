// Hero.jsx
import heroImg from "../assets/hero-bw.png";
import SocialIcons from "./SocialIcons";
import "./Hero.css";

export default function Hero() {
  return (
    <section
      className="hero"
      // style={{ backgroundImage: `url(${heroImg})`,  }}
    >
      <div className="hero-left">
        <h1>Annie</h1>
      </div>
      <div className="hero-right">
        <h1>Adrena</h1>
      </div>

      {/* Bottom overlay */}
      <div className="hero-bottom">
        <SocialIcons />
      </div>
      <div className="hero-role">
          <p>HR Generalist,<br/>MBA - HRM <br/>Jain University, Bangalore</p>
      </div>
    </section>
  );
}

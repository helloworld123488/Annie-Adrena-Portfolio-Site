import aboutImg from "../assets/about-sunset.jpeg";
import "./About.css";

export default function About() {
  return (
    <section id="about" className="about">
      <div className="wrap about__inner">
        <div className="about__frame">
          <div className="about__block" aria-hidden="true" />
          <div className="about__photo">
            <img src={aboutImg} alt="Portrait of Adrena in profile, warm evening light" />
          </div>
        </div>

        <div className="about__copy">
          <h2 className="about__title">Who am I</h2>
          <p className="about__lede">Hi, I&apos;m Adrena.</p>

          <p>
            I believe people are the driving force behind every successful
            organization. My passion is building HR processes that make work
            easier, strengthen teams and support business growth.
          </p>
          <p>
            With experience in HR Operations, Talent Acquisition and Employee
            Engagement, I enjoy solving workplace challenges through practical,<br/>
            people focused solutions.
          </p>
          <p>
            From hiring the right talent to creating smooth employee
            experiences, I focus on delivering results that matter 
            every process. I improve, guided by one goal: helping people
            perform at their best while enabling organizations to achieve
            their goals.
          </p>
        </div>
      </div>
    </section>
  );
}

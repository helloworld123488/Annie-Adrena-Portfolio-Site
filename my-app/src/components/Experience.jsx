import "./Experience.css";

const ROLES = [
  {
    initials: "LQ",
    tone: "#1f6f4a",
    title: "HR Executive",
    org: "LMTEQ, Chennai, Tamil Nadu",
    period: "March 20XX \u2013 October 20XX",
  },
  {
    initials: "HM",
    tone: "#e8a33d",
    title: "HRBP Intern",
    org: "Happiest Minds, Bangalore",
    period: "",
  }
];

export default function Experience() {
  return (
    <section id="resume" className="experience">
      <div className="wrap">
        <div className="experience__card">
          <p className="experience__label">Work experience</p>

          <ul className="experience__list">
            {ROLES.map((r) => (
              <li key={r.title} className="experience__item">
                <span
                  className="experience__badge"
                  style={{ background: r.tone }}
                  aria-hidden="true"
                >
                  {r.initials}
                </span>
                <span className="experience__text">
                  <span className="experience__role">{r.title}</span>
                  <span className="experience__org">{r.org}</span>
                  {r.period && (
                    <span className="experience__period">{r.period}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

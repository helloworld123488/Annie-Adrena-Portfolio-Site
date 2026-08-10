import { Link } from "react-router-dom";
import "./Skills.css";
import TechnologiesPage from "./TechnologiesPage";

const CATEGORIES = [
  {
    key: "operations",
    label: "HR Operations",
    color: "#3f7fe0",
    items: ["Employee Onboarding", "Employee Offboarding", "Attendance & Leave Management", "HR Compliance"],
  },
  {
    key: "talent",
    label: "Talent Management",
    color: "#2f9e63",
    items: ["Talent Acquisition", "Manpower Planning", "Employee Engagement", "Exit Interviews"],
  },
  {
    key: "analytics",
    label: "HR Analytics & Technology",
    color: "#e08a2f",
    items: ["HRIS Management", "HR Analytics & Reporting", "Dashboard Creation & MIS Reporting", "Payroll Coordination"],
  },
  {
    key: "collaboration",
    label: "Business Collaboration",
    color: "#8a5fd6",
    items: ["Cross-functional Collaboration", "Stakeholder Coordination", "Process Improvement", "Employee Records Management"],
  },
];

export default function SkillsPage() {
  return (
    <div className="skills-page">
      {/* technology */}
      <TechnologiesPage/>
      
      <div className="wrap skills-page__head">
        <p className="skills-page__eyebrow">Skills</p>
        <h1 className="skills-page__title">HR functional domains &amp; key activities</h1>
        <p className="skills-page__sub">
          The full range of what I handle day to day, grouped by function.
        </p>
      </div>

      <div className="wrap">
        <div className="skills-grid">
          {CATEGORIES.map((c) => (
            <div key={c.key} className="skills-card" style={{ "--tone": c.color }}>
              <p className="skills-card__label">{c.label}</p>
              <ul className="skills-card__list">
                {c.items.map((item) => (
                  <li key={item}>
                    <span className="skills-card__dot" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* <div className="skills-page__nextlink">
          <span>Looking for the tools I use?</span>
          <Link to="/technologies">See Technologies &rarr;</Link>
        </div> */}
      </div>
    </div>
  );
}

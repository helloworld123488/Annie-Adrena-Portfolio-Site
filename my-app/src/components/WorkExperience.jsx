import React from "react";
import "./WorkExperience.css";
import CanvaLogo from '../assets/company-logo/lmteq.png'
import HappiestMind from '../assets/company-logo/happiestmind.png'
import Adecco from '../assets/company-logo/adecco.png'

/**
 * WorkExperience
 * Drop this component into your portfolio (e.g. render it on the "Resume" route/section).
 * No props required — edit the EXPERIENCE array below to add/remove roles.
 */

const EXPERIENCE = [
  {
    id: "lmteq",
    post: "HR Executive",
    company: "LMTEQ",
    location: "Chennai , Tamil Nadu",
    duration: "March 20XX — October 20XX",
    initials: "LQ",
    tone: "amber", // logo sits on the left, text sits to its right
    align: "left",
    image:CanvaLogo
  },
  {
    id: "happiest-minds",
    post: "HRBP Intern",
    company: "Happiest Minds",
    location: "Bangalore , Karnataka",
    duration: "May 2024 — August 2024",
    initials: "HM",
    tone: "ink", // logo sits on the right, text sits to its left
    align: "right",
    image:HappiestMind
  },
  {
    id:"Adecco-Group",
    post:"HR Ops",
    company:"The Adecco Group",
    location:"Bangalore , Karnataka",
    duration:"Jul 2026 - Present",
    initials:"AG",
    tone:"ink",
    align:"right",
    image:Adecco
  }
];

export default function WorkExperience() {
  return (
    <section className="wx-root">
      <p className="wx-eyebrow">Career so far</p>
      <h2 className="wx-heading">
        Work <em>Experience</em>
      </h2>
      <p className="wx-sub">
        Roles I've held while building up HR generalist and HRBP experience —
        from campus internship to full-time execution.
      </p>

      <div className="wx-list">
        {EXPERIENCE.map((exp) => (
          <div
            key={exp.id}
            className={`wx-item`}
          >
            <div className="wx-logo-row">
              <div
                className={`wx-logo ${
                  exp.tone === "ink" ? "wx-logo--ink" : "wx-logo--amber"
                }`}
                aria-hidden={exp.image ? "true" : "false"}
              >
                {exp.image ? (
                  <img
                    src={exp.image}
                    alt={`${exp.company} logo`}
                    className="wx-logo-img"
                  />
                ) : (
                  exp.initials
                )}
              </div>
              <div className="wx-text">
                <p className="wx-post">{exp.post}</p>
                <p className="wx-company-line">
                  <strong>{exp.company}</strong> · {exp.location}
                </p>
              </div>
            </div>

            <span className="wx-year">{exp.duration}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

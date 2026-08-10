import { Link } from "react-router-dom";
import "./Technologies.css";

// techonology logo from assets
import Darwinbox from '../assets/logo-technology/darwinbox.png';
import HrOne from '../assets/logo-technology/hrone.png'
import PeopleStrong from '../assets/logo-technology/peoplestrong.png'
import Naukri from '../assets/logo-technology/naukri.png'
import PowerBi from '../assets/logo-technology/powerbi.png'
import Outlook from '../assets/logo-technology/outlook.png'
import MicrosoftTeam from '../assets/logo-technology/team.png'
import Workspace from '../assets/logo-technology/workspace.png'
import Chatgpt from '../assets/logo-technology/chatgpt.png'
import Claude from '../assets/logo-technology/claude.png'
import Canva from '../assets/logo-technology/canva.png'
import PowerPoint from '../assets/logo-technology/powerpoint.png'

const GROUPS = [
  {
    label: "HR Systems",
    tools: [
      { name: "Darwinbox", image: Darwinbox },   // ✅ use the imported variable
      { name: "HR One HRIS", mono: "H", tone: "#1f6f4a",image:HrOne },
    ],
  },
  {
    label: "Recruitment",
    tools: [
      { name: "PeopleStrong ATS", mono: "P", tone: "#2fb0a8",image: PeopleStrong },
      { name: "LinkedIn Recruiter", mono: "in", tone: "#0a66c2" },
      { name: "Naukri Recruiter", mono: "N", tone: "#3f5fe0" ,image:Naukri },
    ],
  },
  {
    label: "Analytics & Productivity",
    tools: [
      { name: "Microsoft Excel", mono: "X", tone: "#1f7a3d" ,image: Darwinbox },
      { name: "Microsoft Power BI", mono: "P", tone: "#e8a33d", image:PowerBi},
      { name: "Microsoft Outlook", mono: "O", tone: "#2f6fe0" , image:Outlook },
      { name: "Microsoft Teams", mono: "T", tone: "#5a5fe0",image:MicrosoftTeam },
      { name: "Google Workspace", mono: "G", tone: "#e0533d",image:Workspace },
    ],
  },
  {
    label: "AI & Design",
    tools: [
      { name: "ChatGPT", mono: "C", tone: "#10a37f",image:Chatgpt },
      { name: "Claude", mono: "*", tone: "#d97757" , image:Claude},
      { name: "Canva", mono: "C", tone: "#00c4cc",image:Canva },
      { name: "Microsoft PowerPoint", mono: "P", tone: "#d24726",image:PowerPoint },
    ],
  },
];

export default function TechnologiesPage() {
  return (
    <div className="tech-page">
      <div className="wrap tech-page__head">
        <p className="tech-page__eyebrow">Technologies</p>
        <h1 className="tech-page__title">Tools I work with day to day</h1>
      </div>

      <div className="wrap">
        {GROUPS.map((g) => (
          <div key={g.label} className="tech-group">
            <p className="tech-group__label">{g.label}</p>
            <div className="tech-group__row">
              {g.tools.map((t) => (
                <div key={t.name} className="tech-item">
                  {t.image ? (
                    <img
                      src={t.image}
                      alt={t.name}
                      className="tech-item__badge"
                    />
                  ) : (
                    <span
                      className="tech-item__badge"
                      style={{ background: t.tone }}
                    >
                      {t.mono}
                    </span>
                  )}
                  <span className="tech-item__name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* <div className="tech-page__nextlink">
          <Link to="/skills">See Skills &rarr;</Link>
        </div> */}
      </div>
    </div>
  );
}

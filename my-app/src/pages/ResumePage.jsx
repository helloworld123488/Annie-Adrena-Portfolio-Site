import React from "react";
import "./Resume.css";

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>;
}

function HFillRow({ left, right }) {
  return (
    <div className="hfill-row">
      <span className="hfill-left">{left}</span>
      <span>{right}</span>
    </div>
  );
}

function Bullets({ items }) {
  return (
    <ul className="bullet-list">
      {items.map((item, i) => (
        <li key={i}>
          <span className="bullet-marker">--</span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Resume() {
  return (
    <div className="resume-container">
      {/* Download CV button */}
      <a href="/public/Resume.pdf" download className="download-btn">
        Download CV
      </a>

      {/* Header */}
      <div className="resume-header">
        <div className="resume-name">Annie Adrena K.J</div>
        <div>
          HR Operations&nbsp;&nbsp;|&nbsp;&nbsp;Talent Acquisition&nbsp;&nbsp;|&nbsp;&nbsp;Employee
          Engagement
        </div>
        <div>
          Email: annieadrenakj@gmail.com&nbsp;&nbsp;|&nbsp;&nbsp;Phone: +91 8220073418
        </div>
        <div>
          LinkedIn:{" "}
          <a
            href="https://www.linkedin.com/in/annie-adrena-k-j"
            style={{ color: "#003C78", textDecoration: "none" }}
            target="_blank"
            rel="noreferrer"
          >
            linkedin.com/in/annie-adrena-k-j
          </a>
          &nbsp;&nbsp;|&nbsp;&nbsp;Coimbatore, Tamil Nadu
        </div>
      </div>

      {/* Profile */}
      <SectionTitle>Profile</SectionTitle>
      <p style={{ margin: 0 }}>
        MBA graduate in Human Resource Management with hands-on experience in
        HR Operations, Talent Acquisition, and HR Generalist functions within
        the IT services sector. Proven ability to manage end-to-end
        recruitment, onboarding/offboarding, payroll coordination, and
        employee engagement initiatives.
      </p>

      {/* Skills */}
      <SectionTitle>Skills</SectionTitle>
      <p style={{ margin: 0 }}>
        Dashboard Creation, Attendance &amp; Leave Management, Exit Interviews
        &amp; Offboarding, Microsoft Excel, HRIS Management, Talent
        Acquisition, Employee Engagement, Performance Management, Employee
        Onboarding, Workforce Planning, Microsoft PowerPoint, Negotiation
      </p>

      {/* Experience */}
      <SectionTitle>Experience</SectionTitle>

      <HFillRow left="Human Resources Executive" right="LMTEQ, Chennai" />
      <div className="entry-dates">Aug 2025 -- Feb 2026</div>
      <Bullets
        items={[
          "Managed end-to-end HR operations including recruitment, onboarding, payroll validation, compliance, and engagement.",
          "Led recruitment for IT roles using HRIS and ATS tools, handling sourcing, screening, and HR interviews.",
          "Coordinated onboarding lifecycle: offer letters, documentation, induction, HRIS access.",
          "Validated attendance/leave and prepared payroll inputs using Excel Pivot Tables.",
          "Supported employee relations and grievance handling.",
          "Executed engagement and L&D initiatives, tracked certifications for ServiceNow Elite Badge program.",
          "Facilitated exit processes including documentation and stakeholder coordination.",
        ]}
      />

      {/* \vspace{2\baselineskip} */}
      <div className="entry-spacer" />

      <HFillRow
        left="HRBP Intern"
        right="Happiest Minds Technologies, Bangalore"
      />
      <div className="entry-dates">May 2024 -- Aug 2024</div>
      <Bullets
        items={[
          "Facilitated goal-setting for 5,000+ employees in PMS, doubling completion speed.",
          "Coordinated engagement programs (Rewards & Recognition, Mango Mania).",
          "Conducted exit interviews and documentation.",
          "Created HR dashboards using Excel and PowerPoint.",
          "Organized speed mentoring sessions, managing scheduling and feedback.",
        ]}
      />

      {/* Education */}
      <SectionTitle>Education</SectionTitle>

      <div className="edu-title">
        MBA - Human Resource Management, CMS B-School, Jain University,
        Bangalore
      </div>
      <HFillRow left="CGPA: 7.88" right="May 2025" />
      <Bullets
        items={[
          "Organizing Team Member, Cranium Fest HR Vertical (2024)",
          'Published Paper: "Employer Branding" (2024)',
          'Presented Paper: "Managing Multigenerational Workforce" (2025)',
          "2nd Place, Basketball Tournament - Khel-Utsav (2024)",
        ]}
      />

      <div className="edu-title-spaced">
        B.Com - Corporate Secretaryship, Sri Krishna Arts &amp; Science
        College, Bharathiar University, Coimbatore
      </div>
      <HFillRow left="CGPA: 7.8" right="May 2022" />
      <Bullets
        items={[
          "Department Secretary (2021-2022)",
          "Participant, Youth Parliament (2021-2022)",
        ]}
      />

      {/* Certifications */}
      <SectionTitle>Certifications</SectionTitle>
      <div>HR Manager Certification (LearnTube.ai)</div>
      <div>Competency Based Interviewing (T.V.RO Learning)</div>
      <div>Tally ACE (Grade A)</div>
      <div>Introduction to Computers (IIT Bombay)</div>
      <div>Advancing Skills as HR Business Partner (LinkedIn)</div>

      {/* Languages */}
      <SectionTitle>Languages</SectionTitle>
      <div>English: Fluent</div>
      <div>Tamil: Fluent</div>
      <div>Hindi: Beginner</div>
      <div>Malayalam: Conversational</div>
    </div>
  );
}

import React, { useState } from "react";
import "./Resources.css"; // Import the CSS file

export default function ResourcePage() {
  const [activeTab, setActiveTab] = useState("publications");

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        <span className="navbar__title">Resources</span>
      </nav>

      {/* Top Buttons */}
      <div className="tab-buttons">
        <button
          onClick={() => setActiveTab("publications")}
          className={activeTab === "publications" ? "tab active" : "tab"}
        >
          Publications
        </button>
        <button
          onClick={() => setActiveTab("projects")}
          className={activeTab === "projects" ? "tab active" : "tab"}
        >
          Projects
        </button>
      </div>

      {/* Content Section */}
      <div className="resources-content">
        {activeTab === "publications" && (
          <div>
            {/* <h2 className="resources-page__title">Publications</h2> */}
            <div className="resources-grid">
              <div className="resource-card">
                <span className="resource-card__tag">Publication</span>
                {/* <h3 className="resource-card__title">Publication 1</h3> */}

                <div className="pdf-frame">
                  <embed
                    src="/resource-pdf/publication.pdf"
                    type="application/pdf"
                    className="pdf-frame__embed"
                  />
                </div>

                <p className="resource-card__meta">
                  PDF embedded from public/pdfs ·{" "}
                  <a
                    href="/resource-pdf/publication.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-card__link"
                  >
                    Open in new tab
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "projects" && (
          <div>
            {/* <h2 className="resources-page__title">Projects</h2> */}
            <div className="resources-grid">
              <div className="resource-card">
                <span className="resource-card__tag">Project</span>
                {/* <h3 className="resource-card__title">Project 1</h3> */}

                <div className="pdf-frame">
                  <embed
                    src="/resource-pdf/project.pdf"
                    type="application/pdf"
                    className="pdf-frame__embed"
                  />
                </div>

                <p className="resource-card__meta">
                  PDF embedded from public/pdfs ·{" "}
                  <a
                    href="/resource-pdf/project.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resource-card__link"
                  >
                    Open in new tab
                  </a>
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

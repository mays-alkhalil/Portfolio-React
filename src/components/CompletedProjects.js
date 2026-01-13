import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/CompletedProjects.css";
import { Helmet } from "react-helmet";
import { useContent } from "../content/ContentContext";

const CompletedProjects = () => {
  const { content, getLocalized, getSectionStyle } = useContent();
  const { completedProjects } = content;
  const sectionStyle = getSectionStyle("completedProjects");

  return (
    <div>
      <Helmet>
        <title>Projects - Mays' Portfolio</title>
        <meta
          name="description"
          content="Explore Mays Al-Khalil’s portfolio — from AI platforms and volunteer management systems to e-commerce and interactive web apps, built using React, Laravel, and modern technologies."
        />
        <meta
          name="keywords"
          content="Mays Al-Khalil, Web Developer, React, Laravel, Full Stack, Projects, Safar AI, Zaha Cultural Center, JoryModa, n8n, Automation, Portfolio"
        />
      </Helmet>

      <Navbar />

      <section
        className="projects-section"
        style={{
          "--text-color": sectionStyle.text,
          "--body-color": sectionStyle.background,
          backgroundColor: sectionStyle.background,
          color: sectionStyle.text,
        }}
      >
        <h1 className="section-title">{getLocalized(completedProjects.title)}</h1>

        <div className="projects-container">
          {completedProjects.items.map((project) => (
            <div className="project-card" key={getLocalized(project.title)}>
              <div className="card-front">
                <h2>{getLocalized(project.title)}</h2>
              </div>
              <div className="card-back">
                <h3>{getLocalized(project.title)}</h3>
                <p>{getLocalized(project.description)}</p>
                <a
                  href={project.link}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getLocalized(project.cta)}
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CompletedProjects;

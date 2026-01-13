import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/CompletedProjects.css";
import { Helmet } from "react-helmet";
import { useContent } from "../content/ContentContext";

const CompletedProjects = () => {
  const { content } = useContent();
  const { completedProjects } = content;

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

      <section className="projects-section">
        <h1 className="section-title">{completedProjects.title}</h1>

        <div className="projects-container">
          {completedProjects.items.map((project) => (
            <div className="project-card" key={project.title}>
              <div className="card-front">
                <h2>{project.title}</h2>
              </div>
              <div className="card-back">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a
                  href={project.link}
                  className="btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.cta}
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

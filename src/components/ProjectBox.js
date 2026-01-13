import React from "react";
import { Link } from "react-router-dom"; // استيراد Link من react-router-dom
import { Helmet } from "react-helmet";
import { useContent } from "../content/ContentContext";

const Projects = () => {
  const { content, getLocalized } = useContent();
  const { projects, sectionStyles } = content;

  return (
    <div>
      <Helmet>
        <title>Projects - Mays' Portfolio</title>
        <meta
          name="description"
          content="Explore a variety of projects by Mays, showcasing her expertise in web development, React, JavaScript, and more. See the innovative solutions and technologies used in each project."
        />
        <meta
          name="keywords"
          content="Projects, Web Development, React, JavaScript, Frontend Development, UI/UX, Portfolio, Mays Portfolio, Web Design, Coding Projects"
        />
      </Helmet>

      <section
        className="section"
        id="Projects"
        style={{
          "--text-color": sectionStyles.projects.text,
          "--body-color": sectionStyles.projects.background,
          backgroundColor: sectionStyles.projects.background,
          color: sectionStyles.projects.text,
        }}
      >
        {/* Top Header */}
        <div className="top-header">
          <h1>{getLocalized(projects.title)}</h1>
        </div>

        {/* Project Container */}
        <div className="Project-container">
          {projects.cards.map((card) => (
            <Link
              key={getLocalized(card.title)}
              to={card.link}
              className="Project-box"
              style={{ textDecoration: "none" }}
            >
              <i className={card.iconClass}></i>
              <h3>{getLocalized(card.title)}</h3>
              <label>{getLocalized(card.label)}</label>
            </Link>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Projects;

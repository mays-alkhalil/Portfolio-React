import React from "react";
import { Link } from "react-router-dom";  // استيراد Link من react-router-dom
import { Helmet } from 'react-helmet';

const Projects = () => {
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

    <section className="section" id="Projects">
      {/* Top Header */}
      <div className="top-header">
        <h1>Projects</h1>
      </div>

      {/* Project Container */}
      <div className="Project-container">
        <Link
          to="/CompletedProjects"  // استخدام Link للتوجيه إلى صفحة CompletedProjects
          className="Project-box"
          style={{ textDecoration: "none" }}
        >
          <i className="uil uil-users-alt"></i>
          <h3>Completed</h3>
          <label>3 Finished Projects</label>
        </Link>

        <Link
          to="/Reviews"  // استخدام Link للتوجيه إلى صفحة CompletedProjects
          className="Project-box"
          style={{ textDecoration: "none" }}
        >
          <i className="uil uil-smile"></i>
          <h3>Testimonials</h3>
          <label>4 happy clients</label>
          </Link>
        <Link
          to="/Experience"  // استخدام Link للتوجيه إلى صفحة CompletedProjects
          className="Project-box"
          style={{ textDecoration: "none" }}
        >
      
          <i className="uil uil-award"></i>
          <h3>Experience</h3>
          <label>+1 Years in web development</label>
          </Link>

        
      </div>
    </section>

    </div>
  );
};

export default Projects;

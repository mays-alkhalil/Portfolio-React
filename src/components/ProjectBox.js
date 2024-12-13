import React from "react";
import { Link } from "react-router-dom";  // استيراد Link من react-router-dom

const Projects = () => {
  return (
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
  );
};

export default Projects;

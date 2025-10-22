import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/Experience.css";
import "./styles/style.css";
import { Helmet } from "react-helmet";

const Experience = () => {
  return (
    <div>
      <Helmet>
        <title>Experience - Mays' Portfolio</title>
        <meta
          name="description"
          content="Discover Mays Al-Khalil’s professional journey — from leading technical development at Safar AI to mentoring young coders at Zaha Cultural Center and building full-stack web projects at Orange Academy."
        />
        <meta
          name="keywords"
          content="Mays Al-Khalil, Experience, Full Stack Developer, Safar AI, Zaha Cultural Center, Orange Academy, Web Development, React, Laravel, n8n, Automation"
        />
      </Helmet>

      <Navbar />

      <section className="experience-section">
        <h1 className="section-title">Professional Experience</h1>

        <div className="experience-container">
          <div className="experience-card">
            <h3>Technical Department Head · Full Stack Developer — Safar AI</h3>
            <span className="exp-duration">Jan 2025 – Present</span>
            <p>
              Leading the technical department and overseeing end-to-end
              development for Safar AI, an AI-driven educational and travel
              platform. Designed scalable full-stack systems and managed
              integrations with <strong>Moodle</strong>, <strong>OpenAI</strong>,
              and <strong>Zoom APIs</strong>. Collaborated closely with the UI/UX
              team to deliver a responsive, accessible user experience. Automated
              internal workflows using <strong>n8n</strong> and integrated
              Google Workspace, LinkedIn, and Maps APIs for seamless operations.
            </p>
          </div>

          <div className="experience-card">
            <h3>Programming Instructor — Zaha Cultural Center (Khalda Branch)</h3>
            <span className="exp-duration">Apr 2025 – Present</span>
            <p>
              Teaching coding fundamentals and web concepts to youth aged 10 – 17
              using interactive tools like EduBlocks. Developed structured lesson
              plans and project-based exercises that build logical reasoning and
              creative problem-solving skills.
            </p>
          </div>

          <div className="experience-card">
            <h3>Programming Coordinator — Zaha Cultural Center (Khalda Branch)</h3>
            <span className="exp-duration">Apr 2025 – Present</span>
            <p>
              Coordinating all programming-related operations at the center,
              managing devices and systems, and resolving technical challenges
              during workshops and STEAM events. Supported smooth delivery of
              programs across departments.
            </p>
          </div>

          <div className="experience-card">
            <h3>Full Stack Web Developer — Coding Academy by Orange</h3>
            <span className="exp-duration">Sep 2024 – Dec 2024</span>
            <p>
              Completed an intensive Full Stack Bootcamp in collaboration with
              Simplon.co and PSUT. Built multiple projects using{" "}
              <strong>HTML5, CSS3, Bootstrap, PHP, Laravel, React, and JavaScript</strong>.
              Served as Scrum Master and project owner, strengthening leadership
              and Agile collaboration skills.
            </p>
          </div>

          <div className="experience-card">
            <h3>Freelance Full Stack Developer</h3>
            <span className="exp-duration">2023 – 2024</span>
            <p>
              Delivered tailored dashboards, content platforms, and automation
              solutions using React, Laravel, and n8n. Focused on performance
              optimization, API integration, and scalable backend architecture.
            </p>
          </div>

          <div className="experience-card">
            <h3>Volunteer & Community Work</h3>
            <span className="exp-duration">Ongoing</span>
            <p>
              Active member in social and educational initiatives including{" "}
              <strong>Nabd Club</strong> (Integration & Registration Teams),
              <strong>Warsha Balad</strong> (youth leadership program),
              and <strong>Ana Usharak / Ana Usharak Plus</strong> by the Crown Prince Foundation,
              fostering community engagement, creative thinking, and collaboration.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;

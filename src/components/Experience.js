import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/Experience.css";
import "./styles/style.css";
import { Helmet } from "react-helmet";
import { useContent } from "../content/ContentContext";

const Experience = () => {
  const { content, getLocalized } = useContent();
  const { experience, sectionStyles } = content;

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

      <section
        className="experience-section"
        style={{
          "--text-color": sectionStyles.experience.text,
          "--body-color": sectionStyles.experience.background,
          backgroundColor: sectionStyles.experience.background,
          color: sectionStyles.experience.text,
        }}
      >
        <h1 className="section-title">{getLocalized(experience.title)}</h1>

        <div className="experience-container">
          {experience.items.map((item) => (
            <div className="experience-card" key={getLocalized(item.role)}>
              <h3>{getLocalized(item.role)}</h3>
              <span className="exp-duration">{item.duration}</span>
              <p>{getLocalized(item.description)}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Experience;

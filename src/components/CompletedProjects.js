// App.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles/CompletedProjects.css';
import { Helmet } from 'react-helmet';

const CompletedProjects = () => {
  return (
    <div>
       <Helmet>
  <title>Completed Projects - Mays' Portfolio</title>
  <meta
    name="description"
    content="Explore the completed projects by Mays, showcasing web development skills in React, JavaScript, and more. Learn about the projects I’ve worked on and how they highlight my expertise."
  />
  <meta name="keywords" content="Completed Projects, React Projects, Web Development, JavaScript, Portfolio, Frontend Developer, UI/UX, Web Applications" />
</Helmet>

      <Navbar />
      <section className="projects-section">
        <h1 className="section-title">My Projects</h1>
        <div className="projects-container">
          <div className="project-card">
            <div className="card-front">
              <h2>Poly E-Guide</h2>
            </div>
            <div className="card-back">
              <h3>Poly E-Guide</h3>
              <p>A web-based university library that helps students progress through their studies. The app uses HTML, CSS, Bootstrap, and JavaScript.</p>
              <a href="#" className="btn">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="card-front">
              <h2>Text-To-speech Converter</h2>
            </div>
            <div className="card-back">
              <h3>Text-To-speech Converter</h3>
              <p>A web app developed using HTML, CSS, and JavaScript that converts text to speech with the ability to change the voice.</p>
              <a href="#" className="btn">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="card-front">
              <h2>Weather App</h2>
            </div>
            <div className="card-back">
              <h3>Weather App</h3>
              <p>A website that displays weather information for a given city using HTML, CSS, and JavaScript.</p>
              <a href="#" className="btn">View Project</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CompletedProjects;

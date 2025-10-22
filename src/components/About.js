import React from "react";
import './styles/style.css';
import { Helmet } from 'react-helmet';



const About = () => {
  return (
    <div>
  <Helmet>
      <title>Mays' Portfolio - Mays' Portfolio</title>
      <meta name="description" content="About Mays' portfolio, her passion for web development, and her experiences." />
    </Helmet>
 
<section className="section" id="about">
  <div className="top-header">
    <h1>About me</h1>
  </div>
  <div className="row">
    <div className="about-info">
      <figure className="about-me">
        <figcaption>
          <img src="/assets/mays1.jpg" alt="mays image's" className="Profile" />
          <h2>Web developer </h2>
          <p>
            I’m Mays, a product-focused web developer obsessed with crafting
            seamless experiences that feel as good as they look. Recently, I led
            the front-end experience for Safar AI—an intelligent travel
            companion that curates itineraries, surfaces contextual insights, and
            connects explorers with local experts in real time. The work pushed
            my React and design systems expertise to new levels while staying
            laser-focused on accessibility and performance.
          </p>
          <p>
            I’m equally passionate about community impact. At Zaha Cultural
            Center, I’m building a volunteer engagement platform that helps
            families discover STEAM workshops, register for events, and track
            their volunteering milestones. Bridging technology with cultural
            initiatives keeps me energized and inspired to keep shipping with
            purpose.
          </p>
        </figcaption>
      </figure>
      <button className="about-me-btn">Hire Me</button>
    </div>
  </div>
</section>
    </div>
  
  );
};

export default About;

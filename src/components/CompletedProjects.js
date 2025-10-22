import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/CompletedProjects.css";
import { Helmet } from "react-helmet";

const CompletedProjects = () => {
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
        <h1 className="section-title">Projects & Highlights</h1>

        <div className="projects-container">
          {[
            {
              title: "Safar AI",
              description:
                "Leading full-stack development for Safar AI — an AI-driven educational and travel companion. Architected scalable React front-end, integrated Moodle, OpenAI & Zoom APIs, and automated internal workflows with n8n for Google Workspace and LinkedIn integration.",
              link: "https://safarai.org",
              cta: "Explore Safar AI",
            },
            {
              title: "Zaha Cultural Center Volunteer Platform",
              description:
                "Developed a digital volunteering hub for Zaha Cultural Center (Khalda Branch) enabling families to discover STEAM workshops, register, and track their community impact. Built with Laravel and React to connect youth and mentors seamlessly.",
              link: "https://www.facebook.com/ZahaCulturalCenter/",
              cta: "Discover Zaha Center",
            },
            {
              title: "JORYMODA – Multi-Vendor E-Commerce",
              description:
                "A complete multi-vendor fashion marketplace built with Laravel, MySQL, and Bootstrap. Vendors manage independent stores while customers enjoy a streamlined shopping experience. Includes Admin Dashboard, order tracking, and secure payments.",
              link: "https://github.com/mays-alkhalil/JORYMODA",
              cta: "View Repository",
            },
            {
              title: "Tayeb – Food Recipes Web App",
              description:
                "An interactive recipe platform built with React and Laravel. Implements CRUD operations, advanced search by ingredients and categories, and a Favorites system for personalized collections.",
              link: "https://github.com/mays-alkhalil/Test_React_Laravel",
              cta: "View Repository",
            },
            {
              title: "GamifyTech – Gaming Accessories E-Commerce",
              description:
                "An engaging online store for gaming enthusiasts. Features Wishlist, Cart, discount coupons, and order tracking. Built with HTML5, CSS3, JavaScript, PHP, and MySQL using the Singleton pattern for secure database connections.",
              link: "https://github.com/HamzasZaitoun/NextLevelTech",
              cta: "View Repository",
            },
            {
              title: "Fit Me – Fitness Club Website",
              description:
                "A responsive fitness club platform developed with HTML, CSS, and JavaScript to enhance member engagement. Includes interactive sections for workouts, nutrition tips, and progress tracking.",
              link: "https://github.com/mays-alkhalil/FitME_PROJECT_JAVASCRIPT-main",
              cta: "View Repository",
            },
            {
              title: "Portfolio Website (React Edition)",
              description:
                "A dynamic React portfolio designed to showcase skills, projects, and achievements with dark/light mode toggle, animated sections, and smooth scroll navigation. Fully responsive across devices.",
              link: "https://github.com/mays-alkhalil/Portfolio-React",
              cta: "View Repository",
            },
            {
              title: "Creative Portfolio – Original Version",
              description:
                "The initial portfolio built using HTML, CSS, and JavaScript — the foundation of Mays’s design language and front-end journey.",
              link: "https://github.com/mays-alkhalil/mays-portfolio",
              cta: "View Repository",
            },
            {
              title: "Text-to-Speech Converter",
              description:
                "A lightweight web app that converts text into speech with multiple voice presets. Built using HTML, CSS, and JavaScript.",
              link: "#",
              cta: "Request Demo",
            },
            {
              title: "Weather Pulse – Forecast Dashboard",
              description:
                "A minimal weather application providing real-time data via API integration. Built with clean JavaScript and responsive UI principles.",
              link: "https://github.com/mays-alkhalil/weather-app",
              cta: "View Repository",
            },
          ].map((project) => (
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

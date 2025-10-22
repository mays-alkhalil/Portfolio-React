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
        <h1 className="section-title">Impactful Builds</h1>
        <div className="projects-container">
          {[
            {
              title: 'Safar AI',
              description:
                'Designed and engineered the client experience for Safar AI—an intelligent travel concierge that pairs a conversational itinerary planner with live community insights. I owned the design system, data visualisation, and performance budgets across the React front-end.',
              link: 'https://safarai.org',
              cta: 'Explore Safar AI',
            },
            {
              title: 'Zaha Cultural Center Volunteers',
              description:
                'Crafting a volunteering hub for Zaha Cultural Center to help families discover STEAM initiatives, reserve seats in workshops, and log volunteering impact. The platform streamlines coordination between mentors, parents, and young creatives.',
              link: 'https://www.facebook.com/ZahaCulturalCenter/',
              cta: 'Discover the Center',
            },
            {
              title: 'Tayeb',
              description:
                'A recipe discovery experience powered by React, Laravel, and MySQL. Users can curate collections, search by cravings, and share signature dishes through a responsive, accessible UI.',
              link: 'https://github.com/mays-alkhalil/Test_React_Laravel',
              cta: 'View Repository',
            },
            {
              title: 'GamifyTech',
              description:
                'Built a gamified e-commerce stack featuring wishlists, loyalty rewards, and tailored bundles. Implemented with vanilla JS, PHP, and MySQL while applying clean architecture and the Singleton pattern for secure data access.',
              link: 'https://github.com/HamzasZaitoun/NextLevelTech',
              cta: 'View Repository',
            },
            {
              title: 'Laravel Admin HQ',
              description:
                'A multi-store admin command center with granular permissions, operational dashboards, and actionable analytics. Developed end-to-end in Laravel with reusable Blade components.',
              link: 'https://github.com/mays-alkhalil/master_admin_laravel',
              cta: 'View Repository',
            },
            {
              title: 'Fit Me',
              description:
                'A fitness club microsite that personalises training journeys with progress visualisations, program filters, and membership onboarding—all in pure HTML, CSS, and JavaScript.',
              link: 'https://github.com/mays-alkhalil/FitME_PROJECT_JAVASCRIPT-main',
              cta: 'View Repository',
            },
            {
              title: 'React Portfolio',
              description:
                'This portfolio’s React revamp with modular sections, animation hooks, and content management friendly architecture.',
              link: 'https://github.com/mays-alkhalil/Portfolio-React',
              cta: 'View Repository',
            },
            {
              title: 'Creative Portfolio',
              description:
                'The original HTML/CSS/JS portfolio that seeded my design language and storytelling foundations.',
              link: 'https://github.com/mays-alkhalil/mays-portfolio',
              cta: 'View Repository',
            },
            {
              title: 'Text to Speech Studio',
              description:
                'A lightweight voice synthesis tool with multi-voice presets and offline support, crafted with vanilla web technologies.',
              link: '#',
              cta: 'Request Demo',
            },
            {
              title: 'Weather Pulse',
              description:
                'A minimal weather dashboard that surfaces reliable forecasts, built with clean JavaScript and third-party APIs.',
              link: 'https://github.com/mays-alkhalil/weather-app#',
              cta: 'View Repository',
            },
          ].map((project) => (
            <div className="project-card" key={project.title}>
              <div className="card-front">
                <h2>{project.title}</h2>
              </div>
              <div className="card-back">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.link} className="btn" target="_blank" rel="noopener noreferrer">
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

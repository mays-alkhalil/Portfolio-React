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
              <h2>Tayeb</h2>
            </div>
            <div className="card-back">
              <h3>Tayeb</h3>
              <p>We developed an innovative platform for food recipes using React, Laravel, MySQL, and CSS. The platform offers a user-friendly interface where users can browse a wide variety of recipes, search by categories, and save their favorite dishes. It includes features like a recipe search function, user authentication, and the ability to manage and share personal recipe collections.</p>
              <a href="https://github.com/mays-alkhalil/Test_React_Laravel" className="btn" >View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="card-front">
              <h2>GamifyTech</h2>
            </div>
            <div className="card-back">
              <h3>GamifyTech</h3>
              <p>Developed an engaging e-commerce platform for gaming enthusiasts, featuring a user-friendly
interface, Wish List, Cart, discount coupons, order tracking, and custom user roles.
Built with HTML5, CSS3, JavaScript, PHP, and MySQL, using the Singleton pattern for secure
database connections. Testing and deployment were performed with XAMPP and WAMP.</p>
              <a href="https://github.com/HamzasZaitoun/NextLevelTech" className="btn">View Project</a>
            </div>
          </div>
          <div className="project-card">
            <div className="card-front">
              <h2>Admin Dashboard with Laravel</h2>
            </div>
            <div className="card-back">
              <h3>Admin Dashboard with Laravel</h3>
              <p>I developed an advanced admin dashboard for managing a multi-store e-commerce platform using Laravel. The dashboard provides a comprehensive view for administrators to efficiently manage multiple stores, handle product listings, orders, customer data, and analytics. Key features include user roles and permissions, multi-store management, sales and order tracking, and the ability to generate detailed reports.</p>
              <a href="https://github.com/mays-alkhalil/master_admin_laravel" className="btn">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <div className="card-front">
              <h2>Fit Me</h2>
            </div>
            <div className="card-back">
              <h3>Fit Me</h3>
              <p>I worked on a fitness club website project called FIT ME using HTML, CSS, and JavaScript. The website was designed to provide users with an interactive experience, allowing them to view various fitness programs, track their progress, and access personalized fitness plans. The platform includes sections for signing up, logging in, and viewing detailed workout routines, nutritional advice, and tips from fitness experts.</p>
              <a href="https://github.com/mays-alkhalil/FitME_PROJECT_JAVASCRIPT-main" className="btn">View Project</a>
            </div>
          </div>


          <div className="project-card">
            <div className="card-front">
              <h2>Portfolio with React</h2>
            </div>
            <div className="card-back">
              <h3>Portfolio with React</h3>
              <p>I transformed my portfolio website into a React application to enhance its interactivity and improve the overall user experience. By leveraging React, I was able to create a more dynamic and modular structure, allowing for smoother transitions between sections and better state management</p>
              <a href="https://github.com/mays-alkhalil/Portfolio-React" className="btn">View Project</a>
            </div>
          </div>

          <div className="project-card">
            <div className="card-front">
              <h2>Portfolio</h2>
            </div>
            <div className="card-back">
              <h3>Portfolio</h3>
              <p>I developed a portfolio website using HTML, CSS, and JavaScript to showcase my personal projects, skills, and professional achievements.</p>
              <a href="https://github.com/mays-alkhalil/mays-portfolio" className="btn">View Project</a>
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
              <a href="https://github.com/mays-alkhalil/weather-app#" className="btn">View Project</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CompletedProjects;

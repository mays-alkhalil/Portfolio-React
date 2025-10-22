import React from "react";
import './styles/style.css';
import { Helmet } from 'react-helmet';

const About = () => {
  return (
    <div>
      <Helmet>
        <title>About Mays — Web Developer & Automation Enthusiast</title>
        <meta 
          name="description" 
          content="Learn more about Mays Al Khalil — a web developer and automation enthusiast passionate about building scalable, human-centered digital solutions."
        />
      </Helmet>

      <section className="section" id="about">
        <div className="top-header">
          <h1>About Me</h1>
          <p className="subtitle">Blending technology, creativity, and community impact.</p>
        </div>

        <div className="row">
          <div className="about-info">
            <figure className="about-me">
              <figcaption>
                <img 
                  src="/assets/mays1.jpg" 
                  alt="Portrait of Mays Al Khalil, Web Developer" 
                  className="Profile"
                />
                <h2>Web Developer · Automation Builder · Educator</h2>

                <p>
                  My journey in tech began with curiosity about how digital systems shape the way we live and learn. 
                  I earned my degree in <strong>Computer Engineering from Al-Balqa Applied University</strong> with a 
                  “Very Good” GPA, and quickly discovered my passion for turning ideas into 
                  seamless, interactive web experiences.
                </p>

                <p>
                  During my <strong>Full Stack Development training at Orange Academy</strong>, 
                  I worked on collaborative, real-world projects that honed my skills in both front-end and back-end 
                  technologies — including <strong>React, Laravel, PHP, MySQL, and Node.js</strong>. 
                  My earlier <strong>280-hour training at Pio-Tech</strong> gave me exposure to scalable architectures 
                  and user-centric software solutions.
                </p>

                <p>
                  Later, I expanded into <strong>e-learning systems</strong>, working as a Moodle developer 
                  to design, customize, and deploy educational platforms for diverse learners. 
                  I also developed deep experience in <strong>automation workflows using n8n</strong> — integrating APIs 
                  and processes to enhance efficiency and scalability.
                </p>

                <p>
                  Outside of coding, I’m committed to community impact. 
                  I founded the initiative <strong>“Kitabek Befeed Gheirak”</strong> to promote book exchange among youth, 
                  and contributed to projects producing <strong>audiobooks for visually impaired students</strong>. 
                  These experiences strengthened my leadership, collaboration, and communication skills.
                </p>

                <p>
                  Today, I focus on building <strong>human-centered, accessible, and efficient web solutions</strong> 
                  — combining my expertise in development, automation, and education to make technology truly meaningful.
                </p>

              
              </figcaption>
            </figure>

          
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

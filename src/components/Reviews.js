// Reviews.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles/Reviews.css';
import { Helmet } from 'react-helmet';

const Reviews = () => {
  const reviews = [
    { 
      name: "Haneen Al-Hajaj", 
      role: "Software Engineer · Safar AI",
      text: "Mays is an incredibly dedicated developer with a sharp eye for detail. Her creativity and commitment elevate every project she contributes to."
    },
    { 
      name: "Batool Shneikat", 
      role: "Software Engineer · Safar AI",
      text: "Collaborating with Mays was an inspiring experience. Her coding discipline, design intuition, and teamwork make her a standout professional."
    },
    { 
      name: "Israa Eid", 
      role: "Full Stack Developer · Orange Coding Academy",
      text: "Mays combines technical expertise with artistic sense. She always ensures that every product is both functional and beautifully crafted."
    },
    { 
      name: "Dina Nafez", 
      role: "Full Stack Developer · Orange Coding Academy",
      text: "Working with Mays is a joy. Her positivity, problem-solving mindset, and professionalism leave a lasting impression on everyone around her."
    },
    { 
      name: "Mohammad Al Khalil", 
      role: "Robotics Engineer · N8N Automation Project",
      text: "Mays has an impressive ability to bridge creativity with automation. Her innovative approach consistently improves workflow efficiency and project outcomes."
    },
    { 
      name: "Musab Al Zoubi", 
      role: "Project Coordinator · Zaha Cultural Center",
      text: "Mays is a highly skilled and reliable developer who brings both professionalism and enthusiasm to every collaboration."
    }
  ];

  return (
    <div>
      <Helmet>
        <title>Testimonials - Mays' Portfolio</title>
        <meta
          name="description"
          content="Read testimonials from colleagues, mentors, and project partners who collaborated with Mays Al Khalil on various web development and AI-driven projects."
        />
        <meta
          name="keywords"
          content="Testimonials, Feedback, Mays Al Khalil, Web Development, React, JavaScript, Frontend, UI/UX, Safar AI, Orange Coding Academy, N8N Automation, Zaha Center, Professional Reviews"
        />
      </Helmet>

      <Navbar />

      <section className="reviews-section" id="reviews">
        <div className="top-header">
          <h1>What People Say</h1>
          <p className="subtitle">Words from colleagues, mentors, and collaborators</p>
        </div>

        <div className="reviews-container">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">
              <div className="review-content">
                <h3>{review.name}</h3>
                <span className="review-role">{review.role}</span>
                <p>{review.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Reviews;

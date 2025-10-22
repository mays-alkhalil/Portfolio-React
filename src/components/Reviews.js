// Reviews.js
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles/Reviews.css';
import { Helmet } from 'react-helmet';

const Reviews = () => {
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
          content="Testimonials, Feedback, Mays Al Khalil, Web Development, React, JavaScript, Frontend, UI/UX, Safar AI, Zaha Center, Professional Reviews"
        />
      </Helmet>

      <section className="reviews-section" id="reviews">
        <div className="top-header">
          <h1>What People Say</h1>
          <p className="subtitle">Words from colleagues, mentors, and collaborators</p>
        </div>

        <div className="reviews-container">
          {[
            { 
              name: "Rahaf Al-Zoubi", 
              role: "Programming Instructor · Orange Academy",
              text: "Mays stood out among her peers for her strong technical foundation and creativity. She brings energy, precision, and a deep sense of responsibility to every project she works on."
            },
            { 
              name: "Dr. Ahmad Khalil", 
              role: "Academic Supervisor · Al-Balqa Applied University",
              text: "Mays demonstrates exceptional problem-solving abilities and a remarkable drive to learn. Her analytical mindset and collaborative spirit make her a true asset to any development team."
            },
            { 
              name: "Sara Al-Majali", 
              role: "Project Manager · Zaha Cultural Center",
              text: "Working with Mays on the volunteering platform was a great experience. Her focus on usability and her clean, efficient code helped us launch a smooth and engaging system for families and volunteers."
            },
            { 
              name: "Mohammad Al-Ajarmeh", 
              role: "Founder · Safar AI",
              text: "Mays played a vital role in shaping the front-end architecture of Safar AI. Her leadership, attention to detail, and ability to translate complex ideas into intuitive design made a huge difference."
            }
          ].map((review, index) => (
            <div key={index} className="review-card">
              <div className="img-box">
                <img 
                  src={`https://via.placeholder.com/100?text=${review.name.charAt(0)}`} 
                  alt={review.name} 
                />
              </div>
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

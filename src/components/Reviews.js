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
    content="Read testimonials from clients and colleagues who have worked with Mays. See how her skills in web development, React, and JavaScript have helped deliver outstanding results."
  />
  <meta
    name="keywords"
    content="Testimonials, Client Feedback, Mays Portfolio, Web Development, React, JavaScript, Frontend Development, UI/UX, Professional Reviews, Web Design"
  />
</Helmet>


<section className="reviews-section" id="reviews">
      <div className="top-header">
        <h1>What People Say</h1>
      </div>

      <div className="reviews-container">
        {[
          { name: "John Doe", text: "Working with Mays was a pleasure. Her professionalism and skillset exceeded all expectations. Highly recommend!" },
          { name: "Jane Smith", text: "Fantastic experience! Mays's attention to detail and innovative approach brought our project to life in ways we couldn't imagine." },
          { name: "Mike Johnson", text: "Mays has a unique talent for web development, providing creative and efficient solutions that truly transformed our platform." },
          { name: "Emily Davis", text: "Her dedication and work ethic are unparalleled. The end result was nothing short of amazing. Will definitely work with Mays again." }
        ].map((review, index) => (
          <div key={index} className="review-card">
            <div className="img-box">
              <img src="https://via.placeholder.com/100" alt={review.name} />
            </div>
            <div className="review-content">
              <h3>{review.name}</h3>
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

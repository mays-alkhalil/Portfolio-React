// Reviews.js
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./styles/Reviews.css";
import { Helmet } from "react-helmet";
import { useContent } from "../content/ContentContext";

const Reviews = () => {
  const { content, getLocalized, getSectionStyle } = useContent();
  const { reviews } = content;
  const sectionStyle = getSectionStyle("reviews");

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

      <section
        className="reviews-section"
        id="reviews"
        style={{
          "--text-color": sectionStyle.text,
          "--body-color": sectionStyle.background,
          backgroundColor: sectionStyle.background,
          color: sectionStyle.text,
        }}
      >
        <div className="top-header">
          <h1>{getLocalized(reviews.title)}</h1>
          <p className="subtitle">{getLocalized(reviews.subtitle)}</p>
        </div>

        <div className="reviews-container">
          {reviews.items.map((review) => (
            <div key={getLocalized(review.name)} className="review-card">
              <div className="review-content">
                <h3>{getLocalized(review.name)}</h3>
                <span className="review-role">{getLocalized(review.role)}</span>
                <p>{getLocalized(review.text)}</p>
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

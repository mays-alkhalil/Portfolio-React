import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import "./styles/style.css";
import { Helmet } from "react-helmet";
import { useContent } from "../content/ContentContext";

const FeaturedBox = () => {
  const el = useRef(null);
  const typed = useRef(null);
  const { content } = useContent();
  const { featured } = content;

  useEffect(() => {
    typed.current = new Typed(el.current, {
      strings: featured.typedRoles,
      typeSpeed: 55,
      backSpeed: 35,
      backDelay: 1500,
      smartBackspace: true,
      loop: true,
      startDelay: 300,
      showCursor: true,
      cursorChar: "|",
      contentType: "null", // مهم: يمنع تفسير & ككيان HTML
    });

    return () => {
      if (typed.current) {
        typed.current.destroy();
      }
    };
  }, [featured.typedRoles]);

  return (
    <div>
      <Helmet>
        <title>Featured - Mays' Portfolio</title>
        <meta
          name="description"
          content="Explore Mays' featured projects that highlight her skills in web development, including React, JavaScript, and UI/UX design. See how her work delivers innovative solutions."
        />
        <meta
          name="keywords"
          content="Featured Projects, Web Developer, React, JavaScript, Frontend Development, UI/UX, Portfolio, Web Design, Mays Portfolio"
        />
      </Helmet>

      <section className="featured-box section" id="home">
        <div className="featured-text">
          <div className="hello">
            <p>{featured.greeting}</p>
            <span ref={el} className="typedText"></span>
          </div>

          <div className="text-info">
            <p style={{ marginTop: "25px" }}>{featured.introText}</p>
          </div>

          <div className="text-btn">
            <button
              className="btn hire-btn"
              onClick={() => {
                const contactSection = document.getElementById(
                  featured.hireButtonTarget
                );
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              {featured.hireButtonLabel}
            </button>

            <a
              href={featured.cv.link}
              className="btn"
              download={featured.cv.filename}
            >
              {featured.cv.label} <i className="uil uil-file"></i>
            </a>
          </div>

          <div className="social_icons">
            <a
              href={featured.social.email}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fas fa-envelope"></i>
            </a>
            <a
              href={featured.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-whatsapp"></i>
            </a>
            <a
              href={featured.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href={featured.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="featured-image">
          <div className="image">
            <img
              src={featured.image.src}
              alt={featured.image.alt}
              className="Profile"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FeaturedBox;

import React, { useEffect } from "react";
import Typed from "typed.js";
import "./styles/style.css";
import { Helmet } from 'react-helmet';


const FeaturedBox = () => {
  useEffect(() => {
    // Initialize Typed effect
    const typed = new Typed(".typedText", {
      strings: ["Coder", "Developer"], // النصوص المتحركة
      loop: true,
      typeSpeed: 100, // سرعة الكتابة
      backSpeed: 80, // سرعة الحذف
      backDelay: 2000, // مدة التوقف قبل الحذف
    });

    // تنظيف التأثير عند إلغاء المكون
    return () => {
      typed.destroy();
    };
  }, []);

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
          <p>
            Hello I’m 
          </p>
          <span className="typedText"></span>
        </div>
        <div className="text-info">
          <p style={{marginTop:'25px'}}>My name is Mays! I'm a web developer</p>
        </div>
        <div className="text-btn">
        <button
          className="btn hire-btn"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            contactSection.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Hire Me
        </button>
          <a
            href="/mays_resume_Web_Developer.pdf"
            className="btn"
            download="mays resume Web Developer.pdf"
          >
            Download CV <i className="uil uil-file"></i>
          </a>
        </div>
        <div className="social_icons">
          <a
  href="mailto:maysalkhalil02@gmail.com?subject=Hello%20Mays%20I%20would%20like%20to%20connect"
  target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="fas fa-envelope"></i> {/* أيقونة البريد الإلكتروني */}
          </a>
          <a
  href="https://wa.me/962776506379?text=Hello%20Mays%20I%20would%20like%20to%20connect"

            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="fab fa-whatsapp"></i> {/* أيقونة الواتساب */}
          </a>
          <a
            href="https://www.linkedin.com/in/maysalkhalil/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/mays-alkhalil"
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
          <img src="/assets/mays1.jpg" alt="mays image's" className="Profile" />
        </div>
      </div>
    </section>
    </div>
   
  );
};

export default FeaturedBox;

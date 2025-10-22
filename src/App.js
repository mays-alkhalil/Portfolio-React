import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import FeaturedBox from './components/FeaturedBox';
import About from './components/About';
import ProjectBox from './components/ProjectBox';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CompletedProjects from './components/CompletedProjects';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import './components/styles/style.css';
import ScrollReveal from 'scrollreveal';

function App() {

  useEffect(() => {
  

    // Initialize ScrollReveal animations
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".text-info", { delay: 200 });
    sr.reveal(".text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 320 });
    sr.reveal(".Project-box", { interval: 200 });
    sr.reveal(".top-header", {});

    const srLeft = ScrollReveal({
      origin: "left",
      distance: "80px",
      duration: 2000,
      reset: true,
    });

    srLeft.reveal(".about-info", { delay: 100 });
    srLeft.reveal(".contact-info", { delay: 100 });

    //   origin: "right",
    //   distance: "80px",
    //   duration: 2000,
    //   reset: true,
    // });

    // Add scroll event listener for active link highlighting
    // window.addEventListener("scroll", scrollActive);

    // Cleanup on component unmount
    // return () => {
    //   window.removeEventListener("scroll", scrollActive);
    // };
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <FeaturedBox />
              <About />
              <ProjectBox />
              <Contact />
              <Footer />
            </>
          }
        />

        <Route path="/CompletedProjects" element={<CompletedProjects />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;

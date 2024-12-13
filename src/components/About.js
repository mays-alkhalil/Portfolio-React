import React from "react";
import './styles/style.css';



const About = () => {
  return (
<section className="section" id="about">
  <div className="top-header">
    <h1>About me</h1>
  </div>
  <div className="row">
    <div className="about-info">
      <figure className="about-me">
        <figcaption>
          <img src="/assets/mays1.jpg" alt="mays image's" className="Profile" />
          <h2>Web developer </h2>
          <p>
            My name is Mays! I'm a web developer with a passion for creating
            beautiful and functional websites. I enjoy solving complex problems
            and working on exciting projects that challenge my skills. In my
            free time, I love exploring new technologies and enhancing my
            programming skills.
          </p>
        </figcaption>
      </figure>
      <button className="about-me-btn">Hire Me</button>
    </div>
  </div>
</section>
  );
};

export default About;

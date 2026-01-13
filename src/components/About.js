import React from "react";
import "./styles/style.css";
import { Helmet } from "react-helmet";
import { useContent } from "../content/ContentContext";

const About = () => {
  const { content } = useContent();
  const { about } = content;

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
          <h1>{about.title}</h1>
          <p className="subtitle">{about.subtitle}</p>
        </div>

        <div className="row">
          <div className="about-info">
            <figure className="about-me">
              <figcaption>
                <img
                  src={about.image.src}
                  alt={about.image.alt}
                  className="Profile"
                />
                <h2>{about.roleHeadline}</h2>

                {about.paragraphs.map((paragraph, index) => (
                  <p key={`about-paragraph-${index}`}>{paragraph}</p>
                ))}

              
              </figcaption>
            </figure>

          
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

import React from "react";
import "./styles/style.css";
import { Helmet } from "react-helmet";
import { useContent } from "../content/ContentContext";

const About = () => {
  const { content, getLocalized } = useContent();
  const { about, sectionStyles } = content;

  const imageSizes = about.image.sizes || {};
  const profileSizeVars = {
    "--profile-size-desktop": `${imageSizes.desktop || 220}px`,
    "--profile-size-tablet": `${imageSizes.tablet || 180}px`,
    "--profile-size-mobile": `${imageSizes.mobile || 140}px`,
  };

  return (
    <div>
      <Helmet>
        <title>About Mays — Web Developer & Automation Enthusiast</title>
        <meta 
          name="description" 
          content="Learn more about Mays Al Khalil — a web developer and automation enthusiast passionate about building scalable, human-centered digital solutions."
        />
      </Helmet>

      <section
        className="section"
        id="about"
        style={{
          "--text-color": sectionStyles.about.text,
          "--body-color": sectionStyles.about.background,
          backgroundColor: sectionStyles.about.background,
          color: sectionStyles.about.text,
        }}
      >
        <div className="top-header">
          <h1>{getLocalized(about.title)}</h1>
          <p className="subtitle">{getLocalized(about.subtitle)}</p>
        </div>

        <div className="row">
          <div className="about-info">
            <figure className="about-me">
              <figcaption>
                <img
                  src={about.image.src}
                  alt={getLocalized(about.image.alt)}
                  className="Profile profile-responsive"
                  style={profileSizeVars}
                />
                <h2>{getLocalized(about.roleHeadline)}</h2>

                {about.paragraphs.map((paragraph, index) => (
                  <p key={`about-paragraph-${index}`}>
                    {getLocalized(paragraph)}
                  </p>
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

import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles/Experience.css';
import './styles/style.css';
const Experience = () => {
    return (
        <div>
            <Navbar />
            <section className="experience-section">
            <h1 className="section-title">My Experience</h1>
            <div className="experience-container">
                <div className="experience-card">
                    <h3>Frontend Developer</h3>
                    <p>Developed responsive websites using HTML and CSS. Collaborated with designers to enhance user experiences.</p>
                    <a href="#" className="btn">Learn More</a>
                </div>

                <div className="experience-card">
                    <h3>Project Manager</h3>
                    <p>Led projects from conception to completion, coordinating with cross-functional teams to ensure timely delivery and quality.</p>
                    <a href="#" className="btn">Learn More</a>
                </div>

                <div className="experience-card">
                    <h3>Project Manager</h3>
                    <p>Led projects from conception to completion, coordinating with cross-functional teams to ensure timely delivery and quality.</p>
                    <a href="#" className="btn">Learn More</a>
                </div>

                <div className="experience-card">
                    <h3>Project Manager</h3>
                    <p>Led projects from conception to completion, coordinating with cross-functional teams to ensure timely delivery and quality.</p>
                    <a href="#" className="btn">Learn More</a>
                </div>
            </div>
            
        </section>
        
            <Footer />
        </div>
        
    );
};

export default Experience;

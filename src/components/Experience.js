import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './styles/Experience.css';
import './styles/style.css';
import { Helmet } from 'react-helmet';

const Experience = () => {
    return (
        <div>
            <Helmet>
                <title>Experience - Mays' Portfolio</title>
                <meta
                    name="description"
                    content="Explore Mays' professional experience as a Web Developer, including projects and roles in backend development, problem solving, and more. Learn how her skills can help bring your ideas to life."
                />
                <meta
                    name="keywords"
                    content="Experience, Web Developer, Mays Portfolio, Backend Development, Problem Solving, Software Engineering, Professional Experience"
                />
            </Helmet>

            <Navbar />

            <section className="experience-section">
                <h1 className="section-title">My Experience</h1>
                <div className="experience-container">
                    <div className="experience-card">
                        <h3>Lead Frontend Engineer · Safar AI</h3>
                        <p>Architected the design system and conversational UI powering Safar AI’s travel concierge. Delivered SSR-ready React flows, edge-cached APIs, and accessibility compliant components that scaled to thousands of itineraries.</p>
                    </div>

                    <div className="experience-card">
                        <h3>Product Developer · Zaha Cultural Center</h3>
                        <p>Designing a volunteer engagement platform that manages workshop enrollment, attendance analytics, and mentor scheduling for the center’s STEAM initiatives.</p>
                    </div>

                    <div className="experience-card">
                        <h3>Full Stack Developer · Freelance</h3>
                        <p>Delivered bespoke dashboards and content platforms across Laravel, Node.js, and React. Optimised APIs, orchestrated deployments, and mentored clients on sustainable workflows.</p>
                    </div>

                    <div className="experience-card">
                        <h3>UI Engineer · Community Projects</h3>
                        <p>Rapid prototyping and user testing for non-profits and local startups. Led discovery sprints, Figma-to-code handoff, and performance budgets.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Experience;

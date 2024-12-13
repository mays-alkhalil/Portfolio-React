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

                    {/* Experience 1 */}
                    <div className="experience-card">
                        <h3>Frontend Developer</h3>
                        <p>Developed responsive websites using HTML, CSS, and JavaScript. Collaborated with designers to enhance user experiences and ensure accessibility compliance.</p>
                    </div>

                    {/* Experience 2 */}
                    <div className="experience-card">
                        <h3>Backend Developer</h3>
                        <p>Designed and implemented RESTful APIs using Laravel and Node.js. Ensured database optimization and system scalability to support high-traffic applications.</p>
                    </div>

                    {/* Experience 3 */}
                    <div className="experience-card">
                        <h3>Project Manager</h3>
                        <p>Led projects from conception to completion, coordinating with cross-functional teams to ensure timely delivery and quality. Successfully managed budgets and project timelines.</p>
                    </div>

                    {/* Experience 4 */}
                    <div className="experience-card">
                        <h3>Problem Solver</h3>
                        <p>Utilized logical thinking and programming skills to troubleshoot complex software issues. Streamlined workflows, reducing development time by 20% on multiple projects.</p>
                    </div>

                    {/* Experience 5 */}
                    <div className="experience-card">
                        <h3> Full Stack Developer</h3>
                        <p>Worked on backend APIs and improved application performance. Gained hands-on experience in debugging and deploying software solutions in a collaborative environment.</p>
                    </div>

                    {/* Experience 6 */}
                    <div className="experience-card">
                        <h3>Team Leader</h3>
                        <p>Mentored junior developers and facilitated code reviews. Spearheaded team meetings to ensure alignment on project goals and deliverables.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Experience;

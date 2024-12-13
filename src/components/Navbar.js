import React, { useState } from 'react';
import './styles/style.css';
import { Link } from 'react-router-dom'; // استيراد Link من react-router-dom

const Navbar = ({ activeLink }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark', !isDarkMode);
  };

  return (
    <nav id="header">
      <div className="nav-logo">
        <i className="fas fa-code"></i>
      </div>
      <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`} id="myNavMenu">
        <ul className="nav_menu_list">
          <li className="nav_list">
            <Link
              to="/"
              className={`nav-link ${activeLink === "#home" ? "active-link" : ""}`}
            >
              Home
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a
              href="#about"
              className={`nav-link ${activeLink === "#about" ? "active-link" : ""}`}
            >
              About
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a
              href="#Projects"
              className={`nav-link ${activeLink === "#Projects" ? "active-link" : ""}`}
            >
              Projects
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a
              href="#contact"
              className={`nav-link ${activeLink === "#contact" ? "active-link" : ""}`}
            >
              Contact
            </a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>

      <div className="mode">
        <div className="moon-sun" id="toggle-switch" onClick={toggleDarkMode}>
          <i className={`fa ${isDarkMode ? "fa-sun" : "fa-moon"}`} id={isDarkMode ? "sun" : "moon"}></i>
        </div>
      </div>

      <div className="nav-menu-btn" onClick={toggleMenu}>
        <i className={`uil uil-bars ${isMenuOpen ? 'open' : ''}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;

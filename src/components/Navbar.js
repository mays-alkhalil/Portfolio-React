import React, { useState } from "react";
import "./styles/style.css";
import { Link } from "react-router-dom"; // استيراد Link من react-router-dom
import { useContent } from "../content/ContentContext";

const Navbar = ({ activeLink }) => {
  const { language, toggleLanguage, theme, toggleTheme } = useContent();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  const navLabels = {
    home: { ar: "الرئيسية", en: "Home" },
    about: { ar: "من أنا", en: "About" },
    projects: { ar: "المشاريع", en: "Projects" },
    contact: { ar: "تواصل", en: "Contact" },
  };

  const getLabel = (value) => (language === "ar" ? value.ar : value.en);

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
              {getLabel(navLabels.home)}
            </Link>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a
              href="#about"
              className={`nav-link ${activeLink === "#about" ? "active-link" : ""}`}
            >
              {getLabel(navLabels.about)}
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a
              href="#Projects"
              className={`nav-link ${activeLink === "#Projects" ? "active-link" : ""}`}
            >
              {getLabel(navLabels.projects)}
            </a>
            <div className="circle"></div>
          </li>
          <li className="nav_list">
            <a
              href="#contact"
              className={`nav-link ${activeLink === "#contact" ? "active-link" : ""}`}
            >
              {getLabel(navLabels.contact)}
            </a>
            <div className="circle"></div>
          </li>
        </ul>
      </div>

      <div className="mode">
        <div className="moon-sun" id="toggle-switch" onClick={toggleTheme}>
          <i className={`fa ${theme === "dark" ? "fa-sun" : "fa-moon"}`} id={theme === "dark" ? "sun" : "moon"}></i>
        </div>
        <button className="lang-toggle" type="button" onClick={toggleLanguage}>
          {language === "ar" ? "EN" : "ع"}
        </button>
      </div>

      <div className="nav-menu-btn" onClick={toggleMenu}>
        <i className={`uil uil-bars ${isMenuOpen ? 'open' : ''}`}></i>
      </div>
    </nav>
  );
};

export default Navbar;

import React from "react";
import './styles/style.css';

const Footer = () => {
  return (
    <footer>
      {/* Middle Footer */}
      <div className="middle-footer">
        <ul className="footer-menu">
          <li className="footer_menu_list">
            <a href="#home">Home</a>
          </li>
          <li className="footer_menu_list">
            <a href="#about">About</a>
          </li>
          <li className="footer_menu_list">
            <a href="#Projects">Projects</a>
          </li>
          <li className="footer_menu_list">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>

      {/* Footer Social Icons */}
      <div className="FOOTER-SOCIAL-ICONS">
        <a
          href="https://www.instagram.com/mays.alkhalil2002?igsh=enp3cGVqbnl5NW5m"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <i className="fab fa-instagram"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/mays-al-khalil-94723b220?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
        <a
          href="https://www.facebook.com/maysm.ali.14?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="icon"
        >
          <i className="fab fa-facebook"></i>
        </a>
      </div>

      {/* Bottom Footer */}
      <div className="bottom-footer">
        <p>
          Copyright &copy;{" "}
          <a href="#home" style={{ textDecoration: "none" }}>
            Mays Alkhalil
          </a>{" "}
          - All rights reserved 2024
        </p>
      </div>
    </footer>
  );
};

export default Footer;

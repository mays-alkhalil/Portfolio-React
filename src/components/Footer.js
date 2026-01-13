import React from "react";
import "./styles/style.css";
import { useContent } from "../content/ContentContext";

const Footer = () => {
  const { content, getLocalized } = useContent();
  const { footer, sectionStyles } = content;

  return (
    <footer
      style={{
        "--text-color": sectionStyles.footer.text,
        "--body-color": sectionStyles.footer.background,
        backgroundColor: sectionStyles.footer.background,
        color: sectionStyles.footer.text,
      }}
    >
      {/* Middle Footer */}
      <div className="middle-footer">
        <ul className="footer-menu">
          {footer.links.map((link) => (
            <li className="footer_menu_list" key={link.href}>
              <a href={link.href}>{getLocalized(link.label)}</a>
            </li>
          ))}
        </ul>
      </div>

      {/* Footer Social Icons */}
      <div className="FOOTER-SOCIAL-ICONS">
        {footer.social.map((item) => (
          <a
            key={item.href}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="icon"
          >
            <i className={item.iconClass}></i>
          </a>
        ))}
      </div>

      {/* Bottom Footer */}
      <div className="bottom-footer">
        <p>
          Copyright &copy;{" "}
          <a href="#home" style={{ textDecoration: "none" }}>
            {footer.copyrightName}
          </a>{" "}
          - All rights reserved {footer.year}
        </p>
      </div>
    </footer>
  );
};

export default Footer;

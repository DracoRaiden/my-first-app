import React, { useEffect } from "react";
import { useState } from "react";
import "../css/Header.css";
import logo from "../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav>
        <div className="hamburger">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div className="logo-here">
          <img src={logo} alt="my Logo" className="logo" />
        </div>

        <div className={`mobile-menu ${isMenuOpen ? "show-menu" : ""}`}>
          <ul className="nav-pages">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">PORTFOLIO</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">PAGES</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
          <ul className="nav-socials">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>

        <div className="desktop-menu">
          <div className="logo-here">
            <img src={logo} alt="my Logo" className="logo" />
          </div>
          <ul className="nav-pages">
            <li>
              <a href="#">HOME</a>
            </li>
            <li>
              <a href="#">ABOUT</a>
            </li>
            <li>
              <a href="#">PORTFOLIO</a>
            </li>
            <li>
              <a href="#">SERVICES</a>
            </li>
            <li>
              <a href="#">PAGES</a>
            </li>
            <li>
              <a href="#">CONTACT</a>
            </li>
          </ul>
          <ul className="nav-socials">
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header; // This line says that React is exporting an instance of the Header

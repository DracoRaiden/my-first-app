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
import { Route, Routes, Link } from "react-router-dom";

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
          <div className="nav-pages">
            <Link to="/">HOME</Link>
            <Link to="/about-me">ABOUT</Link>
            <Link to="/portfolio">PORTFOLIO</Link>
            <Link to="/services">SERVICES</Link>
            <Link to="/pages">PAGES</Link>
            <Link to="/contact">CONTACT</Link>
          </div>
          {/* 
          <Routes>
          </Routes> */}

          {/*           
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
          </ul> */}

          {/* <div className="nav-socials">
            <Link to="Whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </Link>
          </div>

          <Routes>
            <Route path="WhatsApp"></Route>
          </Routes> */}
          <ul className="nav-socials">
            <li>
              <a
                href="https://wa.me/923338255284"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/am4b44b8273/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DracoRaiden"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/a.mm.ar_23/"
                target="_blank"
                rel="noopener noreferrer"
              >
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

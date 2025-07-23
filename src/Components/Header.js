import React from "react";
import { useState } from "react";
import "../css/Header.css";
import logo from "../img/logo.png";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header>
      <nav>
        <div className="hamburger">
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            ☰
          </button>
        </div>

        <div className="logo-here">
          <img src={logo} alt="my Logo" className="logo" />
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
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
                <a href="#">whatsapp</a>
              </li>
              <li>
                <a href="#">linkedin</a>
              </li>
              <li>
                <a href="#">github</a>
              </li>
              <li>
                <a href="#">ig</a>
              </li>
            </ul>
          </div>
        )}
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
              <a href="#">whatsapp</a>
            </li>
            <li>
              <a href="#">linkedin</a>
            </li>
            <li>
              <a href="#">github</a>
            </li>
            <li>
              <a href="#">ig</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header; // This line says that React is exporting an instance of the Header

import React from "react";
import Header from "./Components/Header.js";
import Hero from "./Components/Hero.js";
import "./App.css";
import Footer from "./Components/Footer.js";

import { Route, Routes, Link, Router } from "react-router-dom";

import Aboutme from "./Components/Aboutme";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Pages from "./Components/Pages";
import Contact from "./Components/Contact";

// import ReactPlayer from "react-player/youtube";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {/* <div className="bg"></div> */}
              <div className="Header">
                <Header className="nav" />
                <Hero className="hero" />
              </div>
              <div className="main"></div>
              <div className="Footer">
                <Footer />
              </div>
            </div>
          }
        ></Route>

        <Route
          path="/about-me"
          element={
            <div>
              <div className="bg"></div>
              <div className="Header">
                <Header className="nav" />
              </div>
              <div className="main">
                <Aboutme />
              </div>
            </div>
          }
        ></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/pages" element={<Pages />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;

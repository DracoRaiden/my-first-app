import Header from "./Components/Header.js";
import Hero from "./Components/Hero.js";
import "./App.css";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="Header">
        <Header className="nav" />
        <Hero className="hero" />
      </div>
      <div className="main"></div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;

import Header from "./Components/Header.js";
import Hero from "./Components/Hero.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="bg"></div>
      <div className="Header">
        <Header />
        <Hero />
      </div>
      <div className="main"></div>
      <div className="Footer"></div>
    </div>
  );
}

export default App;

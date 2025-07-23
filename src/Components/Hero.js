import pfp from "../img/profile_picture.jpg";
import "../css/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>OPEN FOR WORK</p>
        <div className="hero-text-title">
          <h2>DRACO RAIDEN'S</h2>
          <h2>PORTFOLIO</h2>
        </div>
        <p>
          <button>SEE MORE ABOUT US</button>
        </p>
      </div>
      <div className="hero-image"></div>
    </div>
  );
}

export default Hero;

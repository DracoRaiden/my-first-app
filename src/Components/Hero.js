import pfp from "../img/profile_picture.jpg";
import "../css/Hero.css";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-text">
        <p>
          <a href="#Services" className="badge">
            OPEN FOR WORK
          </a>
        </p>
        <div className="hero-text-title">
          <h2 className="">DRACO RAIDEN'S</h2>
          <h2>PORTFOLIO</h2>
        </div>
        <p className="button-border">
          <button className="see-more-btn">SEE MORE ABOUT US</button>
        </p>
      </div>
      <div className="hero-image"></div>
    </div>
  );
}

export default Hero;

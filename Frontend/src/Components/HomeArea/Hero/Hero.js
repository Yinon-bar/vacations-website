import { Link } from "react-router-dom";
import Contact from "./Contact/Contact";
import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="Hero">
        <div className="Container">
          <div className="Content">
            <h1>Travel Beyond Limits</h1>
            <h3>
              Start Your Travel at an affordable price with Travelly...
              <br />
              Contact Us Bellow
            </h3>

            <Link to={"/vacations"}>
              <button>Our vacations</button>
            </Link>
          </div>
        </div>
      </div>
      <Contact />
    </>
  );
}

export default Hero;

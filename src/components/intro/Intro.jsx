import { Button } from "../button/Button";
import bgImage from "../../videos/video-1.mp4";
import "../../App.css";
import "./intro.css";

export default function Intro() {
  return (
    <div className="introContainer">
      <video autoPlay loop muted>
        <source src={bgImage} type="video/mp4" />
      </video>
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="introBtns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("hi")}
        >
          WATCH TRAILER <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

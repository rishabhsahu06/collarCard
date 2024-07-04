import React from "react";
import "./Section1.css";
import video from "../assets/card.mp4";

function Section1() {
  return (
    <>
      <div className="container">
      <video className="video-bar" controls autoplay muted>
  <source src={video} type="video/mp4" />
</video>

        <div className="card">
          <h2 className="h2-collar">collarcard</h2>
          <h1>CollarCard</h1>
          <p>
            A CollarCard is a credit card sized plastic card
            <br />
            that contains four high quality pop-out collar stays
            <br />
            that is stored in a man’s wallet.
          </p>
          <button className="btn">Request A Quote</button>
        </div>

        <div className="arrow">
          <i class="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </>
  );
}

export default Section1;

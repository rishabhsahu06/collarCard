import React from "react";
import "./Section1.css";
import Video from "../component/Video";

function Section1() {

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id="home">
      <div className="container">
        <Video />

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

        <div className="arrow" onClick={scrollToAbout}>
          <i className="fa-solid fa-chevron-down"></i>
        </div>
      </div>
    </div>
  );
}

export default Section1;

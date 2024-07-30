import React, { useRef, useEffect } from "react";
import "./Section1.css";

function Section1({ posts, collarVideo }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []); // Empty dependency array to run this effect only once

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!posts || !posts.data || posts.data.length === 0) {
    return <p>No data available</p>;
  }

  const post = posts.data[0]; 
  const { Title, subTitle, paragraph } = post.attributes || {};

  return (
    <div id="home">
      <div className="container">
        <video className="video-bar" controls muted ref={videoRef} autoPlay>
          <source src={collarVideo} type="sv.mp4" /> 
          Some Error
        </video>

        <div className="card">
          <h2 className="h2-collar text-7xl">{subTitle}</h2>
          <h1>{Title}</h1>
          <p>{paragraph}</p> 
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

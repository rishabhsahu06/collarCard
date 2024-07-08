import React, { useEffect, useRef } from "react";
import video from "../assets/video.mp4";


function Video() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  });
  return (
    <>
      <video className="video-bar" controls muted ref={videoRef} autoPlay>
        {" "}
        <source src={video} type="video/mp4" />
        Some Error
      </video>
    </>
  );
}

export default Video;

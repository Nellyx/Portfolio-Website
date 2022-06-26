import "./Hero.css";

import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="flex">
        <div className="box1">
          <div className="text">
            <h1>Frontend Engineer.</h1>
            <p>
              I build modern and scalable user interfaces using modern frontend
              web technologies
            </p>
            <button>Hire Me</button>
          </div>
        </div>
        <div className="box2"></div>
      </div>

      <div className="box-pattern"></div>
      <img className="avatar" src="/images/avatar.png" alt="avatar" />
      <img className="frame1" src="/images/Frame 20.svg" alt="frame" />
      <img
        className="tray-pattern"
        src="/images/Frame 13.svg"
        alt="tray pattern"
      />
      <img className="frame2" src="/images/Frame 20.svg" alt="frame pattern" />
      <img
        className="triangle-pattern"
        src="/images/group.svg"
        alt="traingle-pattern"
      />
      <img
        className="blue-pattern"
        src="images/Frame 17.svg"
        alt="frame pattern"
      />
      <img
        className="blue-pattern2"
        src="images/Frame 17.svg"
        alt="frame pattern"
      />
      <div className="social">
        <div>
          <img src="/images/facebook.svg" alt="facebook icon" />
        </div>
        <div>
          <img src="/images/twitter.svg" alt="facebook icon" />
        </div>
        <div>
          <img src="images/linked.svg" alt="linkedin icon" />
        </div>
        <div>
          <img src="images/instagram.svg" alt="instagram icon" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

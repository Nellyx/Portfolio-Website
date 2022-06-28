import "./Hero.css";

import React from "react";

function Hero() {
  return (
    <div className="hero">
      <div className="flex-content">
        <div className="text">
          <h1>Frontend Engineer.</h1>
          <p>
            I build modern and scalable user interfaces using modern frontend
            web technologies
          </p>
          <button>Hire Me</button>
        </div>

        <div className="pattern-div">
          <div className="frame-box"></div>

          <img className="avatar" src="/images/avatar.png" alt="avatar" />
          <img className="frame1" src="/images/Frame 20.svg" alt="frame" />
          <img
            className="tray-pattern"
            src="/images/Frame 13.svg"
            alt="tray pattern"
          />
          <img
            className="frame2"
            src="/images/Frame 20.svg"
            alt="frame pattern"
          />
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

          <div className="socials">
            <a className="icon-link" href="">
              <img src="images/github.svg" alt="github icon" />
            </a>
            <a className="icon-link" href="">
              <img src="images/linkedin.svg" alt="linked icon" />
            </a>
            <a className="icon-link" href="">
              <img src="images/facebook.svg" alt="facebook icon" />
            </a>
            <a className="icon-link" href="">
              <img src="images/twitter.svg" alt="twitter icon" />
            </a>
            <a className="icon-link" href="">
              <img src="images/instagram.svg" alt="instagram icon" />
            </a>
          </div>
          <img className="dot1" src="images/dot.svg" alt="dot pattern" />
          <img className="dot2" src="images/dot.svg" alt="dot pattern" />
          <img className="dot3" src="images/dot.svg" alt="dot pattern" />
          <img className="dot4" src="images/dot.svg" alt="dot pattern" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

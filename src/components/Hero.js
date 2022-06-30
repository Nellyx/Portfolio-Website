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
          <div className="button-box">
            <button>Hire Me</button>
          </div>
        </div>

        <div className="pattern-div">
          <div className="avatar-box">
            <img className="avatar" src="/images/avatar.png" alt="avatar" />
          </div>
        </div>
      </div>

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
    </div>
  );
}

export default Hero;

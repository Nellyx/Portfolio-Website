import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <p className="hello-text">Say hello</p>

        <div className="footer-flex">
          <div>
            <div className="footer-box">
              <img src="images/mail.svg" alt="" />
              <p>neilsonmike14</p>
            </div>

            <div className="footer-box">
              <img src="images/call.svg" alt="" />
              <p>08061332918</p>
            </div>

            <div className="footer-box">
              <img src="images/location.svg" alt="" />
              <p>Abeokuta Ogunstate</p>
            </div>
          </div>

          <div className="link">
            <p>My work</p>
            <p>Download Resume</p>
          </div>
        </div>
        <div className="line"></div>
        <p className="copyright ">Michael Nelson 2022</p>
      </div>

      <div className="socials">
        <a className="icon-link" href="">
          <img src="images/Githubgreen.svg" alt="github icon" />
        </a>
        <a className="icon-link" href="">
          <img src="images/linkedingreen.svg" alt="linked icon" />
        </a>
        <a className="icon-link" href="">
          <img src="images/facebookgreen.svg" alt="facebook icon" />
        </a>
        <a className="icon-link" href="">
          <img src="images/twittergreen.svg" alt="twitter icon" />
        </a>
        <a className="icon-link" href="">
          <img src="images/instagramgreen.svg" alt="instagram icon" />
        </a>
      </div>
    </div>
  );
}

export default Footer;

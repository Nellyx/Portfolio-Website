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
        <img src="images/github.svg" alt="github icon" />
        <img src="images/linkedin.svg" alt="linked icon" />
        <img src="images/facebook.svg" alt="facebook icon" />
        <img src="images/twitter.svg" alt="twitter icon" />
        <img src="images/instagram.svg" alt="instagram icon" />
      </div>
    </div>
  );
}

export default Footer;

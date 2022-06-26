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
        <p>Michael Nelson 2022</p>
      </div>
    </div>
  );
}

export default Footer;

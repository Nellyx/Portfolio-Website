import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-flex">
          <div>
            <h1>Say Hello</h1>
            <p>
              <img src="images/mail.svg" alt="" />
              neilsonmike14
            </p>
            <p>
              <img src="images/call.svg" alt="" />
              08061332918
            </p>
            <p>
              <img src="images/location.svg" alt="" />
              Abeokuta Ogunstate
            </p>
          </div>

          <div>
            <p>My work</p>
            <p>Download Resume</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

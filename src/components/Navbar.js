import "./Navbar.css";

import React from "react";

function Navbar() {
  return (
    <div className="navbar">
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

      <nav>
        <a href="http://">
          <h2>nelly</h2>
        </a>
        <img src="/images/menu.svg" alt="hamburger" />
      </nav>
    </div>
  );
}

export default Navbar;

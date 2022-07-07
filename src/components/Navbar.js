import React from "react";
import { NavLink } from "react-router-dom";

import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink>nelly</NavLink>
        <div className="nav-links">
          <NavLink className="nav-item" to="/about">
            About
          </NavLink>
          <NavLink className="nav-item" to="/about">
            Work
          </NavLink>
          <NavLink className="nav-item" to="/about">
            Contact
          </NavLink>
        </div>
        <div className="toggle">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

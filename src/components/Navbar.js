import React from "react";
import { NavLink } from "react-router-dom";

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
      </nav>
    </div>
  );
}

export default Navbar;

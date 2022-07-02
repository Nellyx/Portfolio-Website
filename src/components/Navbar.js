import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink className="brand" exact to="/">
          <h1>nelly</h1>
        </NavLink>
        <div className="link-box">
          <NavLink className="link" exact to="/about">
            About
          </NavLink>
          <NavLink className="link" to="/work">
            Work
          </NavLink>
          <NavLink className="link" to="">
            Contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

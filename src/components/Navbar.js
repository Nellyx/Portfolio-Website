import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <div className="blue-background"></div>
      <div className="green-background"></div>

      <nav>
        <NavLink className="brand" exact to="/">
          <h1>nelly</h1>
        </NavLink>
        <div>
          <NavLink className="link" to="/about">
            About
          </NavLink>
          <NavLink className="link" to="">
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

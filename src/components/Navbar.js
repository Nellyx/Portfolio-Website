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
          <ul>
            <li className="links">
              <NavLink exact to="/about">
                About
              </NavLink>
            </li>
            <li className="links">
              <NavLink to="/contactbar">Contact</NavLink>
            </li>
            <li className="links">
              <NavLink to="/work">Work</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

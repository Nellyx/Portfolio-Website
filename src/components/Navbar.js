import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="nav-wrapper">
      <div className="container">
        <nav>
          <NavLink className="brand" exact to="/">
            nelly
          </NavLink>

          <ul className="nav-menu">
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/myworks">
                Works
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contactbar">
                Contact
              </NavLink>
            </li>
          </ul>

          <div className="toggle-icon">
            <div className="line-1"></div>
            <div className="line-2"></div>
            <div className="line-3"></div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;

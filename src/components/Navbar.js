import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <NavLink exact to="/">
          nelly
        </NavLink>

        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/myworks">Works</NavLink>
          </li>
          <li>
            <NavLink to="/contactbar">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      <nav className="nav">
        <NavLink className="brand" exact to="/">
          nelly
        </NavLink>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink className="nav-link" to="#"></NavLink>
          </li>
        </ul>

        <div className="nav-toggler-icon">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

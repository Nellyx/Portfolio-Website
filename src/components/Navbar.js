import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [nav, setnav] = useState("nav-menu");
  const [toggler, settoggler] = useState("toggler-icon");

  const handleNav = () => {
    nav === "nav-menu" ? setnav("nav-menu show") : setnav("nav-menu");

    toggler === "toggler-icon"
      ? settoggler("toggler-icon toggle")
      : settoggler("toggler-icon");
  };

 

  return (
    <div className="navbar">
      <nav>
        <NavLink className="brand" to="/">
          nelly
        </NavLink>

        <ul className={nav}>
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

        <div
          className={toggler}
          onClick={() => {
            handleNav();
          }}
        >
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTopnav } from "../data/Topnav.js";

import "./Navbar.css";

function Navbar() {
  const [navItems, setnavItems] = useState([]);

  const [collapse, setcollapse] = useState("nav-menu");

  useEffect(() => {
    setnavItems(getTopnav);
  }, []);

  const handleNav = () => {
    collapse === "nav-menu"
      ? setcollapse("nav-collapse")
      : setcollapse("nav-menu");
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <NavLink className="brand" exact to="/">
          nelly
        </NavLink>

        <ul className={collapse}>
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <NavLink className="nav-link" to={item.to}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className="toggle-icon-set"
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

import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { getTopnav } from "../data/Navbars";
function Navbar() {
  const [navitems, setnavitems] = useState([]);
  const [collapse, setcollapse] = useState("nav-menu");

  const [togglericon, settogglericon] = useState("toggler-icon");

  useEffect(() => {
    setnavitems(getTopnav());
  }, []);

  const onToggle = () => {
    collapse === "nav-menu"
      ? setcollapse("nav-collapse")
      : setcollapse("nav-menu");

    togglericon === "toggler-icon"
      ? settogglericon("x-icon")
      : settogglericon("toggler-icon");
  };

  return (
    <div className="navbar">
      <nav className="nav">
        <NavLink className="brand" exact to="/">
          nelly
        </NavLink>
        <ul className={collapse}>
          {navitems.map((item) => (
            <li key={item.id} className="nav-item">
              <NavLink className="nav-link" to={item.to}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className={togglericon} onClick={onToggle}>
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { getTopnav } from "../data/Topnav.js";

function Navbar() {
  const [navItems, setnavItems] = useState([]);

  useEffect(() => {
    setnavItems(getTopnav);
  }, []);

  return (
    <div className="navbar">
      <nav className="=nav">
        <NavLink className="brand" exact to="/">
          Nelly
        </NavLink>

        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.id} className="nav-item">
              <NavLink className="nav-link" to={item.to}>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="toggle-icon">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

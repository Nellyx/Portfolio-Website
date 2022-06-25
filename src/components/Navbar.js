import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav>
        <NavLink exact to="/">
          nelly
        </NavLink>
        <ul>
  <NavLink to=''>
  
  
  <li>About</li>
  
  </NavLink>        
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;

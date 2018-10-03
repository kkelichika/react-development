// A navigation bar with NavLink.
//
// NavLink is like Link, but it automatically adds an "active" class (or
// style) when its route is the current one. Great for highlighting the
// page you are on. "exact" stops "/" from looking active on every page.

import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = { fontWeight: "bold", textDecoration: "underline" };

function Navbar() {
  return (
    <nav style={{ display: "flex", gap: 12 }}>
      <NavLink exact to="/" activeStyle={activeStyle}>
        Home
      </NavLink>
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
      <NavLink to="/contact" activeStyle={activeStyle}>
        Contact
      </NavLink>
    </nav>
  );
}

export default Navbar;

import React from "react";
import { NavLink } from "react-router-dom";
import "../styles.css";

export const NavDropDown = ({ item, navLink }) => {
  return (
    <NavLink to={navLink} className="nav-dropdown-item">
      <p>{item}</p>
      <i class="fa-solid fa-angle-down"></i>
    </NavLink>
  );
};

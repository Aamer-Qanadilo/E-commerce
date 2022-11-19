import React from "react";
import { NavLink } from "react-router-dom";

export const NavDropDown = ({ item }) => {
  return (
    <NavLink to="/product-list" className="nav-dropdown-item">
      <p to="/product-list">{item}</p>
      <i class="fa-solid fa-angle-down"></i>
    </NavLink>
  );
};

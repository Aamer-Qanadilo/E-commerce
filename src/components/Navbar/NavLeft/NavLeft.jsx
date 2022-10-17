import React from "react";
import Logo from "./Logo";
import { NavDropDown } from "./NavDropDown";
// import styles from './../Navbar.css';

const NavLeft = () => {
  const navDropDownList = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
  return (
    <div className="nav-left">
      <Logo />
      <div className="nav-left-menu">
        {navDropDownList.map((dropdownItem) => (
          <NavDropDown item={dropdownItem} />
        ))}
      </div>
    </div>
  );
};

export default NavLeft;

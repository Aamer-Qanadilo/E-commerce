import React, { useContext } from "react";
import Logo from "./Logo";
import { NavDropDown } from "./NavDropDown";
import { NavLink } from "react-router-dom";
import FeaturedContext from "../../FeaturedContext";
// import styles from './../Navbar.css';
import "../styles.css";

const navLink = ["/product-list", "#", "#", "#"];

const NavLeft = () => {
  const { getFeaturedItems } = useContext(FeaturedContext);
  const navDropDownList = ["SHOP", "FABRIC", "JOURNAL", "ABOUT"];
  return (
    <div className="nav-left">
      <NavLink to="" onClick={() => getFeaturedItems()}>
        <Logo />
      </NavLink>
      <div className="nav-left-menu">
        {navDropDownList.map((dropdownItem, index) => (
          <NavDropDown item={dropdownItem} navLink={navLink[index]} />
        ))}
      </div>
    </div>
  );
};

export default NavLeft;

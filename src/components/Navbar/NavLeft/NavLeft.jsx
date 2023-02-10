import React, { useContext } from "react";
import Logo from "./Logo";
import { NavDropDown } from "./NavDropDown";
import { NavLink } from "react-router-dom";
import FeaturedContext from "../../FeaturedContext";
import "../styles.css";

const NavLeft = ({ navDropDownList }) => {
  const { getFeaturedItems } = useContext(FeaturedContext);

  return (
    <div className="nav-left">
      <NavLink to="" onClick={() => getFeaturedItems()}>
        <Logo />
      </NavLink>
      <div className="nav-left-menu">
        {navDropDownList.map((dropdownItem, index) => (
          <NavDropDown item={dropdownItem.text} navLink={dropdownItem.href} />
        ))}
      </div>
    </div>
  );
};

export default NavLeft;

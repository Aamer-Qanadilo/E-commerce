import React, { useContext } from "react";
import Logo from "./Logo";
import { NavDropDown } from "./NavDropDown";
import { NavLink } from "react-router-dom";
import FeaturedContext from "../../FeaturedContext";
import "../styles.css";

const NavLeft = ({ showNav }) => {
  const { getFeaturedItems } = useContext(FeaturedContext);
  const navDropDownList = [
    { text: "SHOP", href: "/product-list" },
    { text: "FABRIC", href: "#" },
    { text: "JOURNAL", href: "#" },
    { text: "ABOUT", href: "#" },
  ];

  return (
    <div className="nav-left">
      <NavLink to="" onClick={() => getFeaturedItems()}>
        <Logo />
      </NavLink>
      <div className="nav-left-menu">
        {navDropDownList.map((dropdownItem, index) =>
          !showNav ? (
            index < 1 ? (
              <NavDropDown
                key={index}
                item={navDropDownList[0].text}
                navLink={navDropDownList[0].href}
              />
            ) : (
              <></>
            )
          ) : (
            <NavDropDown item={dropdownItem.text} navLink={dropdownItem.href} />
          ),
        )}
      </div>
    </div>
  );
};

export default NavLeft;

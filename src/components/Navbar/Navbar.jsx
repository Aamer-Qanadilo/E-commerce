import React, { useEffect } from "react";
import { Menu, Item } from "burger-menu";
import { useState } from "react";
import NavLeft from "./NavLeft/NavLeft";
import NavRight from "./NavRight";
import "./styles.css";
import { NavDropDown } from "./NavLeft/NavDropDown";
import { useNavigate } from "react-router-dom";

const navDropDownList = [
  { text: "SHOP", href: "/product-list" },
  { text: "FABRIC", href: "#" },
  { text: "JOURNAL", href: "#" },
  { text: "ABOUT", href: "#" },
];

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth <= 1050) setShowNav(false);
  }, []);

  return (
    <nav>
      <div className="container-wrapper">
        <NavLeft
          showNav={showNav}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          navDropDownList={navDropDownList}
        />
        <NavRight showNav={showNav} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Menu
          className="burger-menu"
          isOpen={isOpen}
          selectedKey={"entry"}
          animate="fallDown"
          onClose={() => setIsOpen(false)}
        >
          {navDropDownList.map((dropdownItem, index) => (
            <Item
              itemKey={dropdownItem.text}
              text={dropdownItem.text}
              onClick={() => navigate(dropdownItem.href)}
            ></Item>
          ))}
        </Menu>
      </div>
    </nav>
  );
};

export default Navbar;

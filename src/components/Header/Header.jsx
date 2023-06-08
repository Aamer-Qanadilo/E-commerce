import React from "react";
import "./styles.css";

const Header = ({ headerClass, headerBackground, children }) => {
  return (
    <header
      className={headerClass}
      style={{ backgroundImage: `url(${headerBackground})` }}
    >
      {children}
    </header>
  );
};

export default Header;

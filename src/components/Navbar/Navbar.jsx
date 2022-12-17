import React from "react";
import NavLeft from "./NavLeft/NavLeft";
import NavRight from "./NavRight";
import "./styles.css";

const Navbar = () => {
  return (
    <nav>
      <div className="container-wrapper">
        <NavLeft />
        <NavRight />
      </div>
    </nav>
  );
};

export default Navbar;

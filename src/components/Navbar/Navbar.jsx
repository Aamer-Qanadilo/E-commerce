import React, { useEffect } from "react";
import { useState } from "react";
import NavLeft from "./NavLeft/NavLeft";
import NavRight from "./NavRight";
import "./styles.css";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const windowWidth = window.innerWidth;

  useEffect(() => {
    if (windowWidth <= 1050) setShowNav(false);
  }, []);

  return (
    <nav>
      <div className="container-wrapper">
        <NavLeft showNav={showNav} />
        <NavRight showNav={showNav} />
      </div>
    </nav>
  );
};

export default Navbar;

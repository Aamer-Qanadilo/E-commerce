import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

const NavRight = () => {
  return (
    <div className="nav-right">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <button>
        <img src="/assets/icons/search.svg" alt="" />
      </button>
      <button>
        <img src="/assets/icons/heart.svg" alt="" />
      </button>
      <button>
        <img src="/assets/icons/Shape.svg" alt="" />
      </button>
    </div>
  );
};

export default NavRight;

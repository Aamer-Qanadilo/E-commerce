import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./styles.css";

const NavRight = ({ showNav }) => {
  const { cart } = useContext(UserContext);

  return (
    <div className="nav-right">
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      {/* <button>
        <img src="/assets/icons/search.svg" alt="" />
      </button>
      <button>
        <img src="/assets/icons/heart.svg" alt="" />
      </button> */}
      <button
        className="cartButton"
        onClick={(e) => {
          e.preventDefault();
          console.log(cart);
        }}
      >
        <img src="/assets/icons/Shape.svg" alt="" />
        <span>{cart.length}</span>
      </button>
    </div>
  );
};

export default NavRight;

import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../UserContext/UserContext";
import "./styles.css";

const NavRight = ({ showNav }) => {
  const { cart, user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="nav-right">
      {!user ? (
        <>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </>
      ) : (
        <></>
      )}
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
          navigate({ pathname: "/cart" });
        }}
      >
        <img src="/assets/icons/Shape.svg" alt="" />
        <span>{cart.length}</span>
      </button>
    </div>
  );
};

export default NavRight;

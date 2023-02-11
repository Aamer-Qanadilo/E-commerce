import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import { UserContext } from "../UserContext/UserContext";
import "./styles.css";
import CustomToggle from "./CustomToggle";

const NavRight = ({ navDropDownList }) => {
  const { cart, user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div className="nav-right">
      {/* <div onClick={() => setIsOpen(!isOpen)} className="navButton">
        <i className="fa-solid fa-bars"></i>
      </div> */}
      <Menu right noOverlay>
        {navDropDownList.map((dropdownItem, index) => (
          <Link
            to={dropdownItem.href}
            key={dropdownItem.text}
            className="menu-item"
          >
            {dropdownItem.text}
          </Link>
        ))}
      </Menu>
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

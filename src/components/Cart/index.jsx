import { Button } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Container80 from "../common/Container80";
import SectionTitle from "../common/SectionTitle";
import { UserContext } from "../UserContext/UserContext";
import CartCard from "./CartCard";
import styles from "./styles.module.css";

const Cart = () => {
  const { cart, setCart } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = "auto";
  }, []);

  return (
    <Container80>
      <div
        className={
          styles.cartBody + " " + (!cart?.length ? styles.emptyCartBody : "")
        }
      >
        {!cart?.length ? (
          <div className={styles.emptyCart}>
            <i className="fa-solid fa-cart-shopping"></i>
            <p>Your Cart Is Empty.</p>
            <p>
              Go to our <Link to={"/product-list"}>Shop</Link>, So you can enjoy
              our Products.
            </p>
          </div>
        ) : (
          <>
            <SectionTitle sectionHeader="Cart Order Summary" />

            {cart.map((cartItem, index) => {
              return (
                <CartCard key={cartItem.id} item={cartItem} index={index} />
              );
            })}
            <Button
              variant="contained"
              color="success"
              sx={{ width: "50%", padding: "10px 0" }}
              onClick={() => {
                setCart([]);
                toast.success("Ordered Successfully!");
                navigate({ pathname: "/" });
              }}
            >
              Checkout Now
            </Button>
          </>
        )}
      </div>
    </Container80>
  );
};

export default Cart;

import React, { useContext, useState } from "react";
import styles from "./../styles.module.css";
import Joi from "joi";
import QuickViewDescription from "./QuickViewDescription";
import QuickViewHeader from "./QuickViewHeader";
import { UserContext } from "../../UserContext/UserContext";
import { Box, Button, ButtonGroup, Modal } from "@mui/material";
import { useNavigate } from "react-router-dom";

const QuickViewContent = ({ item, quantity, setQuantity }) => {
  const [errors, setErrors] = useState({});
  const [cartPopup, setCartPopup] = useState(false);
  const { AddToCart } = useContext(UserContext);
  const navigate = useNavigate();

  const inputSchema = Joi.object({
    quantity: Joi.number().min(1),
  });

  const changeQuantity = (newQuantity) => {
    const { error } = inputSchema.validate({ quantity: newQuantity });
    if (error) {
      setErrors(error);
      return;
    }
    setErrors(null);
    setQuantity(Number(newQuantity));
  };

  const PushToCart = (event) => {
    event.preventDefault();
    setCartPopup(item);
    AddToCart(item, quantity);
  };

  return (
    <React.Fragment>
      {cartPopup && (
        <Modal
          open={cartPopup}
          onClose={() => setCartPopup(false)}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              backgroundColor: "white",
              height: "fit-content",
              padding: "40px 30px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              id="parent-modal-title"
              style={{ color: "#ff6008", margin: "0" }}
            >
              New Item added to Cart
            </h2>
            <p
              id="parent-modal-description"
              style={{ textAlign: "center", fontWeight: "600" }}
            >
              {cartPopup.title}
            </p>
            <ButtonGroup variant="contained" aria-label="outlined button group">
              <Button color="warning" onClick={() => setCartPopup(false)}>
                Continue Shopping
              </Button>
              <Button
                color="warning"
                onClick={() => navigate({ pathname: "/cart" })}
              >
                Go to Cart
              </Button>
            </ButtonGroup>
          </Box>
        </Modal>
      )}
      <div className={styles.quickViewContent}>
        <QuickViewHeader item={item} />
        <QuickViewDescription item={item} />
        <div className={styles.quickViewItemSelection}>
          <p>Quantity</p>
          <div className={styles.quickViewItemButton}>
            <ul>
              <li>
                <button
                  className="fa-solid fa-minus"
                  onClick={() => changeQuantity(quantity - 1)}
                  disabled={errors}
                ></button>
              </li>
              <li>
                <input
                  type="text"
                  value={quantity}
                  onChange={(event) => changeQuantity(event.target.value)}
                />
              </li>
              <li>
                <button
                  className="fa-solid fa-plus"
                  onClick={() => changeQuantity(quantity + 1)}
                ></button>
              </li>
            </ul>
            <button className={styles.quickViewAddToCart} onClick={PushToCart}>
              ADD TO CART
            </button>
            <div className={styles.quickViewWishlist}>
              <span>
                <i class="fa-solid fa-question"></i>
              </span>
              <button>Add to wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default QuickViewContent;

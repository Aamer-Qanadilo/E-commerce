import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import functions from "../common/functions.js";
import styles from "./styles.module.css";

const CartCard = ({ item, index }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const { updateCart, deleteCart } = useContext(UserContext);

  const changeQuantity = (inputValue) => {
    if (inputValue <= 0) {
      deleteCart(item, index);
      return;
    }
    updateCart(item, inputValue);
    setQuantity(inputValue);
  };

  return (
    <div className={styles.cartCard}>
      <div className={styles.cartCardInfoMain}>
        <div
          className={styles.cartCardImage}
          style={{ backgroundImage: `url(${item.image || item.images[0]})` }}
        ></div>
        <h3>
          {item?.title.length <= 25
            ? item.title
            : item.title.substring(0, 25) + ".."}
        </h3>
      </div>
      <div className={styles.cartCardInfoSecondary}>
        <p>{functions.findPrice(String(item.price * quantity).split("."))}$</p>
        <TextField
          type="number"
          value={quantity}
          onChange={(event) => changeQuantity(event.target.value)}
        />
        <i
          className="text-danger fa-solid fa-trash fs-4 my-auto"
          style={{ cursor: "pointer" }}
          onClick={() => changeQuantity(0)}
        ></i>
      </div>
    </div>
  );
};

export default CartCard;

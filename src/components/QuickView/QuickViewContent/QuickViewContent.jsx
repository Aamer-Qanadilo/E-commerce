import React, { useContext, useState } from "react";
import styles from "./../styles.module.css";
import Joi from "joi";
import QuickViewDescription from "./QuickViewDescription";
import QuickViewHeader from "./QuickViewHeader";
import { UserContext } from "../../UserContext/UserContext";

const QuickViewContent = ({ item, quantity, setQuantity }) => {
  const [errors, setErrors] = useState({});
  const { AddToCart } = useContext(UserContext);

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
    AddToCart(item, quantity);
  };

  return (
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
  );
};

export default QuickViewContent;

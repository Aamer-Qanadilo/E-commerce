import React from "react";
import styles from "./styles.module.css";

const ProductViewCard = ({ productViewCardItem }) => {
  return (
    <div className={styles.ProductViewCard}>
      <img
        src={productViewCardItem.image || productViewCardItem.images[0]}
        alt="Product View Card"
      />
      <p>{productViewCardItem.text}</p>
    </div>
  );
};

export default ProductViewCard;

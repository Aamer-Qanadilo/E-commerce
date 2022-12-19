import React from "react";
import Container80 from "../common/Container80";
import ProductViewCard from "./ProductViewCard";
import styles from "./styles.module.css";

const productViewCards = [
  {
    image: "/assets/images/productPage-1.png",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    image: "/assets/images/productPage-2.png",
    text: "Lorem ipsum dolor sit amet",
  },
  {
    image: "/assets/images/productPage-3.png",
    text: "Lorem ipsum dolor sit amet",
  },
];

const ProductView = () => {
  return (
    <Container80>
      <div className={styles.productViewCards}>
        {productViewCards.map((card, index) => (
          <ProductViewCard key={index} productViewCardItem={card} />
        ))}
      </div>
    </Container80>
  );
};

export default ProductView;

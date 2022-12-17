import React from "react";
import Header from "../../../components/Header/Header";
import styles from "../styles.module.css";

const ProductListHeader = ({ filter }) => {
  return (
    <Header
      headerClass={styles.headerClass}
      headerBackground={"/assets/images/productListHeader.png"}
    >
      <h2 className={styles.productListHeader}>
        {filter.length ? filter : "Product List"}
      </h2>
      <p>
        White Gold began gaining popularity in the early 1900’s as an
        alternative to platinum.
      </p>
    </Header>
  );
};

export default ProductListHeader;

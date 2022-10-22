import React from "react";
import styles from "./../styles.module.css";

const QuickViewDescription = ({ item }) => {
  return (
    <div className={styles.quickViewDescription}>
      <p>Description</p>
      <p>{item.description}</p>
      <ul>
        <li>
          <p>Brand</p>
          <p>{item.brand}</p>
        </li>
        <li>
          <p>Category</p>
          <p>{item.category}</p>
        </li>
      </ul>
    </div>
  );
};

export default QuickViewDescription;

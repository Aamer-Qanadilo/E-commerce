import React from "react";
import styles from "./../styles.module.css";
import functions from "../../common/functions";

const QuickViewHeader = ({ item }) => {
  return (
    <div className={styles.quickViewContentHeader}>
      <h3>{item.title}</h3>
      <div>
        <p>USD {item.price}</p>
        <ul>
          {functions.findStars(item.rating)}
          <li>{item.rating} of 5</li>
        </ul>
      </div>
    </div>
  );
};

export default QuickViewHeader;

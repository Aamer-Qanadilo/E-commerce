import React from "react";
import styles from "./styles.module.css";
import functions from "../common/functions";

const Review = ({ reviewItem }) => {
  return (
    <div className={styles.review}>
      <ul>
        {functions.FindStars(reviewItem.rate)}
        <li>{reviewItem.rate} of 5</li>
      </ul>
      <ul>
        <li className={styles.reviewName}>By {reviewItem.name}</li>
        <li>on {reviewItem.date}</li>
      </ul>
      <p>{reviewItem.text}</p>
    </div>
  );
};

export default Review;

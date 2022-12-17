import React from "react";
import styles from "./styles.module.css";

const InstagramCard = ({ item }) => {
  return (
    <div className={styles.instagramCard}>
      <img src={item.image} alt="As seen on Instagram" />
    </div>
  );
};

export default InstagramCard;

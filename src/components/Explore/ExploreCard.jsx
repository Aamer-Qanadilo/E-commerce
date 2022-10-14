import React from "react";
import styles from "./styles.module.css";

const ExploreCard = ({ exploreItem, index }) => {
  return (
    <div className={styles.exploreItem + " " + styles[`item${index}`]}>
      <div className={styles.exploreItemHeader}>
        <p>{exploreItem.date}</p>
        <h3>{exploreItem.title}</h3>
      </div>
      {exploreItem.description && (
        <p className={styles.exploreItemDescription}>
          {exploreItem.description}
        </p>
      )}

      {exploreItem.imageUrl && (
        <img src={exploreItem.imageUrl} alt="Explore image" />
      )}
    </div>
  );
};

export default ExploreCard;

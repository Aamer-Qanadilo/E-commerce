import React from "react";
import Container80 from "../common/Container80";
import SectionTitle from "../common/SectionTitle";
import InstagramCard from "./InstagramCard";
import styles from "./styles.module.css";

const instagramCards = [
  {
    image: "/assets/images/productPage-Instagram-1.png",
  },
  {
    image: "/assets/images/productPage-Instagram-2.png",
  },
  {
    image: "/assets/images/productPage-Instagram-3.png",
  },
  {
    image: "/assets/images/productPage-Instagram-4.png",
  },
];

const AsSeenOnInstagram = () => {
  return (
    <Container80>
      <SectionTitle sectionHeader="As Seen On Instagram" />
      <div className={styles.asSeenOnInstagramContainer}>
        {instagramCards.map((card) => (
          <InstagramCard item={card} />
        ))}
      </div>
    </Container80>
  );
};

export default AsSeenOnInstagram;

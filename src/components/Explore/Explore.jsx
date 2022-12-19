import React from "react";
import SectionTitle from "../common/SectionTitle";
import ExploreCard from "./ExploreCard";
import styles from "./styles.module.css";

const Explore = ({ exploreContent }) => {
  return (
    <section className={styles.exploreSection}>
      <div className="container-wrapper">
        <SectionTitle sectionHeader="Explore" />
        <div className={styles.exploreSectionBody}>
          {exploreContent.map((explore, index) => (
            <ExploreCard key={index} exploreItem={explore} index={index} />
          ))}
        </div>
        <button>See the journal</button>
      </div>
    </section>
  );
};

export default Explore;

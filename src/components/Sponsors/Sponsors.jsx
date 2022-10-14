import React from "react";
import SectionTitle from "../common/SectionTitle";
import styles from "./styles.module.css";

const Sponsors = () => {
  return (
    <section className={styles.asSeenOn}>
      <div className="container-wrapper">
        <SectionTitle sectionHeader="As Seen On" />
        <img src="/assets/images/AsSeenOn.png" alt="" />
      </div>
    </section>
  );
};

export default Sponsors;

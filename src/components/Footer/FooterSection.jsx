import React from "react";
import styles from "./style.module.css";

const FooterSection = ({ FooterSectionHeader, FooterSectionList }) => {
  return (
    <div className={styles.FooterSection}>
      <h4>{FooterSectionHeader}</h4>
      <ul>
        {FooterSectionList?.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;

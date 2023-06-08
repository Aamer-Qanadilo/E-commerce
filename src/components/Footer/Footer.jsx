import { Button, InputLabel, TextField } from "@mui/material";
import React from "react";
import FooterSection from "./FooterSection";
import styles from "./style.module.css";

const FooterList = [
  {
    header: "Categories",
    list: ["About us", "Testimonials", "Contact", "Journal", "Privacy Policy"],
  },
  {
    header: "Partners",
    list: ["Support", "Shipping & Returns", "Size Guide", "Product Care"],
  },
  {
    header: "Contact Us",
    list: ["26A Pagoda St, TANGS", "Singapore, 058187", "", "+65 6221 5462"],
  },
];

const Footer = () => {
  return (
    <section className={styles.footerWrapper}>
      <div className="container-wrapper">
        <div className={styles.FooterContainer}>
          {FooterList.map((listItem, index) => (
            <FooterSection
              FooterSectionHeader={listItem.header}
              FooterSectionList={listItem.list}
              key={index}
            />
          ))}
          <div className={styles.FooterSection}>
            <h4>Subscribe to newslet</h4>
            <div className={styles.FooterSectionInput}>
              <TextField
                label="ENTER YOUR EMAIL"
                color="warning"
                className={styles.FooterTextField}
                fullWidth={true}
                size="small"
              />
              <Button
                variant="contained"
                color="warning"
                className={styles.FooterTextButton}
              >
                SUBSCRIBE
              </Button>
            </div>
            <div className={styles.FooterIcons}>
              <img src="/E-commerce/assets/icons/Facebook Icon.svg" alt="" />
              <img src="/E-commerce/assets/icons/Twitter Icon.svg" alt="" />
            </div>
          </div>
        </div>
        <p className={styles.FooterCopyright}>
          © Copyright Matter PTE LTD 2017
        </p>
      </div>
    </section>
  );
};

export default Footer;

import React from "react";
import styles from "../styles.module.css";
import * as MaterialUI from "@mui/material";

const ProductListNav = ({ filter, sortBy, onChange }) => {
  return (
    <div className={styles.productListNav}>
      <div className={styles.productContainer}>
        <p style={{ textTransform: "capitalize" }}>{filter}</p>
        <ul>
          <li>Sort by</li>
          <li>
            <MaterialUI.FormControl sx={{ m: 1, minWidth: 120 }}>
              <MaterialUI.Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={sortBy}
                onChange={onChange}
                inputProps={{ "aria-label": "Without label" }}
              >
                <MaterialUI.MenuItem value={"Size"}>Size</MaterialUI.MenuItem>
                <MaterialUI.MenuItem value={"Rate"}>Rate</MaterialUI.MenuItem>
                <MaterialUI.MenuItem value={"Price"}>Price</MaterialUI.MenuItem>
              </MaterialUI.Select>
            </MaterialUI.FormControl>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductListNav;

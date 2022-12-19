import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h2>
        Not Found, go back to <Link to="/">Home</Link>
      </h2>
    </div>
  );
};

export default NotFound;

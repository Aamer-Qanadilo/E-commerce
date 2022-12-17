import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import styles from "./styles.module.css";

const Login = () => {
  return (
    <div className={styles.LoginContainer}>
      <Box className={styles.LoginForm}>
        <SectionTitle sectionHeader="Login" />
        <TextField id="standard-basic" label="Email" variant="outlined" />
        <TextField id="standard-basic" label="Password" variant="outlined" />
        <p>
          Don't have an account? <Link to="/register">Register.</Link>
        </p>
        <Button variant="outlined" color="success">
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;

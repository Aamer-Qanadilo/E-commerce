import { Box, Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import styles from "./styles.module.css";

const Register = () => {
  return (
    <div className={styles.RegisterContainer}>
      <Box className={styles.RegisterForm}>
        <SectionTitle sectionHeader="Register" />
        <TextField id="standard-basic" label="Name" variant="outlined" />
        <TextField id="standard-basic" label="Email" variant="outlined" />
        <TextField id="standard-basic" label="Password" variant="outlined" />
        <TextField
          id="standard-basic"
          label="Confirm Password"
          variant="outlined"
        />
        <p>
          Have an account already? <Link to="/login">Login.</Link>
        </p>
        <Button variant="outlined" color="success">
          Register
        </Button>
      </Box>
    </div>
  );
};

export default Register;

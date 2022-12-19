import { Box, Button, TextField } from "@mui/material";
import Joi from "joi";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import functions from "../common/functions";
import styles from "./styles.module.css";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import { useEffect } from "react";
import InputField from "../common/InputField";

const Login = () => {
  const [loadingForm, setLoadingForm] = useState(false);
  const { user } = useContext(UserContext);

  const [inputFields, setInputFields] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const schema = Joi.object({
    password: Joi.string()
      .max(40)
      .regex(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$",
        ),
      )
      .required()
      .messages({
        "string.base": `Password should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character`,
        "string.empty": `Password should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character`,
        "string.pattern.base": `Password should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character`,
        "any.required": `Password should be Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character`,
      }),

    email: Joi.string()
      .min(3)
      .max(50)
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
      .label("Email"),
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    let newUser = { ...inputFields };
    newUser[name] = value;
    setInputFields(newUser);

    const error = functions.validateInput(name, value, schema.extract(name));
    const newErrors = { ...errors, ...error };
    setErrors(newErrors);
  };

  const submitForm = () => {
    let newErrors = { ...errors };
    const formErrors = functions.validateForm(inputFields, schema, {
      abortEarly: false,
    });

    setLoadingForm(true);

    if (formErrors) {
      newErrors = { ...newErrors, ...formErrors };
      setErrors(newErrors);

      return;
    }
  };

  useEffect(() => {
    setLoadingForm(false);
  }, [user]);

  return (
    <div className={styles.LoginContainer}>
      <Box className={styles.LoginForm}>
        <SectionTitle sectionHeader="Login" />
        <InputField
          id="standard-basic"
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email}
          key="email"
        />
        <InputField
          id="standard-basic"
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password}
          key="password"
        />
        <p>
          Don't have an account? <Link to="/register">Register.</Link>
        </p>
        <Button variant="outlined" color="success" onClick={submitForm}>
          Login
        </Button>
      </Box>
    </div>
  );
};

export default Login;

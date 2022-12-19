import { Box, Button, TextField } from "@mui/material";
import Joi from "joi";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../common/SectionTitle";
import functions from "../common/functions";
import styles from "./styles.module.css";
import { useContext } from "react";
import { UserContext } from "../UserContext/UserContext";
import InputField from "../common/InputField";

const Register = () => {
  const [loadingForm, setLoadingForm] = useState(false);
  const { user } = useContext(UserContext);

  const [inputFields, setInputFields] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const schema = Joi.object({
    firstName: Joi.string().min(3).max(25).required().label("Name"),
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

    passwordConfirm: Joi.string().valid(Joi.ref("password")).messages({
      "any.only": "Passwords doesn't match",
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
    console.log(newErrors);
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
      console.log(newErrors);
      setErrors(newErrors);

      return;
    }
  };

  useEffect(() => {
    setLoadingForm(false);
  }, [user]);

  return (
    <div className={styles.RegisterContainer}>
      <Box className={styles.RegisterForm}>
        <SectionTitle sectionHeader="Register" />
        <InputField
          id="standard-basic"
          label="Name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          error={errors.name}
        />
        <InputField
          id="standard-basic"
          label="Email"
          variant="outlined"
          type="email"
          name="email"
          onChange={handleChange}
          error={errors.email}
        />
        <InputField
          id="standard-basic"
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          onChange={handleChange}
          error={errors.password}
        />
        <InputField
          id="standard-basic"
          label="Confirm Password"
          type="password"
          variant="outlined"
          name="passwordConfirm"
          onChange={handleChange}
          error={errors.passwordConfirm}
        />
        <p>
          Have an account already? <Link to="/login">Login.</Link>
        </p>
        <Button variant="outlined" color="success" onClick={submitForm}>
          Register
        </Button>
      </Box>
    </div>
  );
};

export default Register;

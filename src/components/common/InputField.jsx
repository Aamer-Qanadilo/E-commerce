import { TextField } from "@mui/material";
import React from "react";
import "./styles.css";

const InputField = ({ id, label, type, variant, name, onChange, error }) => {
  return (
    <React.Fragment>
      <TextField
        id={id}
        label={label}
        type={type}
        variant={variant}
        name={name}
        onChange={onChange}
        
      />
      {error && (
        <div className="alert alert-danger">{error.split('"').join("")}</div>
      )}
    </React.Fragment>
  );
};

export default InputField;

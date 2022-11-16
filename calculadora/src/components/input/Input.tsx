import React from "react";
import InputPropsTypes from "./Input.types";
import StyledInput from "./Input.styles";

function Input(props: InputPropsTypes) {
  const { label, value, onChange, description, required = true, type } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };
  const checkRequired = required ? "*" : "";
  return (
    <StyledInput>
      <label htmlFor={label}>{label + checkRequired}</label>
      <input type={type} id={label} value={value} onChange={handleChange} />
      <div className="description">{description}</div>
    </StyledInput>
  );
}

export default Input;

import React from "react";
import "./input.css";

const Input = ({ value, onChange, placeholder }) => {
  return (
    <input
      value={value}
      className="input"
      onChange={onChange}
      placeholder={placeholder}
    />
  );
};

export default Input;

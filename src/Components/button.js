import React from "react";
import "./button.css";

const Button = ({ name, action, className, loading }) => {
  return (
    <button onClick={action} className={className} loading={loading}>
      {name}
    </button>
  );
};

export default Button;

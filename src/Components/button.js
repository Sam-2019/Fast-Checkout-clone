import React from "react";
import Spinner from "./spinner";
import "./button.css";

const Button = ({ name, action, className, loading }) => {
  return (
    <button onClick={action} className={className} disabled={loading}>
      {loading ? <Spinner /> : <>{name}</>}
    </button>
  );
};

export default Button;

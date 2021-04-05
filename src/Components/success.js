import React from "react";
import CheckCircle from "./CheckCircle";

const Success = () => {
  return (
    <div
      style={{
        margin: "auto",
        backgroundColor: "#ffffff",
        transition: "all 0.6s ease-in-out",
      }}
    >
      <CheckCircle width={50} height={50} color="green" />
    </div>
  );
};

export default Success;

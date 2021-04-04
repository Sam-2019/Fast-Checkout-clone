import React from "react";
import CheckCircle from "./CheckCircle";

const Success = () => {
  return (
    <div
      style={{
        position: "fixed",
        left: "0",
        right: "0",
        top: "0",
        bottom: "0",
        transition: "all ease 0.7s",
        animation: "fade-in",
        animationDuration: "0.5s",
        animationDelay: "0s",
        animationFillMode: "forwards",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          margin: "auto",
          backgroundColor: "#ffffff",
          transition: "all 0.6s ease-in-out",
        }}
      >
        <CheckCircle width={100} height={100}  color="green" />
      </div>
    </div>
  );
};

export default Success;

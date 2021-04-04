import React from "react";

const Terms = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "0 10px",
        textAlign: "center",
        padding: "12px 0 6px 0",
        color: "gray",
      }}
    >
      By clicking the button below you agree to our
      <div>
        <span
          style={{
            textDecoration: "underline",
          }}
        >
          Terms,
        </span>
        {""}
        <span
          style={{
            textDecoration: "underline",
          }}
        >
          Privacy Policy
        </span>
        {""}and {""}
        <span
          style={{
            textDecoration: "underline",
          }}
        >
          Cookie Policy
        </span>
      </div>
    </div>
  );
};

export default Terms;

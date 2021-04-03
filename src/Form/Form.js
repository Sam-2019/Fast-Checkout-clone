import React from "react";
import Input from "../Components/input";

const Form = () => {
  return (
    <form className="form-wrapper">
      <div>
        <Input label="Email" />
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            borderBottom: "1px solid #d0d0d0",
            borderTop: "1px solid #d0d0d0",
            borderRight: "1px solid #d0d0d0",
          }}
        >
          <Input label="First Name" />
        </div>

        <div
          style={{
            width: "50%",
            padding: "0 0 0 10px",
            borderBottom: "1px solid #d0d0d0",
            borderTop: "1px solid #d0d0d0",
          }}
        >
          <Input label="Last Name" />
        </div>
      </div>

      <div>
        <Input label="Phone Number" />
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "70%",
            borderBottom: "1px solid #d0d0d0",
            borderTop: "1px solid #d0d0d0",
            borderRight: "1px solid #d0d0d0",
          }}
        >
          <Input label="Delivery Address" />
        </div>

        <div
          style={{
            width: "30%",
            padding: "0 0 0 10px",
            borderBottom: "1px solid #d0d0d0",
            borderTop: "1px solid #d0d0d0",
          }}
        >
          <Input label="Line 2" />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          borderBottom: "1px solid #d0d0d0",
        }}
      >
        <div style={{ width: "40%" }}>
          <Input label="Credit Card" />
        </div>

        <div style={{ width: "60%", display: "flex", flexDirection: "row" }}>
          <Input label="MM/YY" />
          <Input label="CVC" />
          <Input label="ZIP" />
        </div>
      </div>
    </form>
  );
};

export default Form;

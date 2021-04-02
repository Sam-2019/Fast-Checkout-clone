import React from "react";
import Input from "../Components/input";
import "./checkout.css";

const Checkout = () => {
  return (
    <div className="checkout">
      <div className="company_price">
        <div>Company Name</div>
        <div>Price</div>
      </div>

      <Input value="email"  placeholder="Email" />
    </div>
  );
};

export default Checkout;

import React from "react";
import Success from "../Components/success";
import Spacer from "../Components/Spacer";
import "./shipping";

const Shipping = () => {
  return (
    <div className="shippng item">
      <div className="free_shipping">
        <div className="shipping_item">Free Shipping</div>
        <div className=" circle"></div>
      </div>

      <div className="expedited_shipping">
        <div className="shipping_item">Expedited Shipping - $9.99</div>
        <div className="shipping_select">
          <div className=" circle">
            <Success />
          </div>
        </div>
      </div>

      <Spacer />
    </div>
  );
};

export default Shipping;

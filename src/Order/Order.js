import React from "react";
import OrderComplete from "./Order Complete";
import Coupon from "../Components/Add Coupon";
import OtherForm from "../Form/Another Form";
import Shipping from "../Shipping/Shipping";
import Spacer from "../Components/Spacer";
import "./order.css";

const Order = () => {
  return (
    <div className="order">
      <OrderComplete />
      <Coupon />

      <Spacer
        top={5}
        bottom={0}
        right={0}
        left={0}
        selected_unit="percentage"
      />

      <OtherForm />

      <Spacer
        top={5}
        bottom={0}
        right={0}
        left={0}
        selected_unit="percentage"
      />
      <Shipping />

      <Spacer
        bottom={5}
        top={0}
        right={0}
        left={0}
        selected_unit="percentage"
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
          padding: "13px 5px",
          borderTop: "1px solid #d0d0d0",
          top: "auto",
          width: "100%",
          backgroundColor: "white",
        }}
      >
        <div className="secondary-two"> Cancel Order</div>

        <div className="primary-two">Close</div>
      </div>
    </div>
  );
};

export default Order;

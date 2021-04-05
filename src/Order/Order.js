import React from "react";
import OrderComplete from "./Order Complete";
import Coupon from "../Components/Add Coupon";
import OtherForm from "../Form/Another Form";
import Shipping from "../Shipping/Shipping";
import Spacer from "../Components/Spacer";


const Order = () => {
  return (
    <div
      style={{
        backgroundColor: "#d5d2d2",
        height: "107vh",
      }}
    >
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
        bottom={25}
        top={0}
        right={0}
        left={0}
        selected_unit="percentage"
      />

      <OrderActions />
    </div>
  );
};

export default Order;

export const OrderActions = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "auto",
        bottom: "0",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        padding: "13px 5px",
        borderTop: "1px solid #d0d0d0",
        width: "100%",
        backgroundColor: "white",
      }}
    >
      <div className="secondary-two"> Cancel Order</div>

      <div className="primary-two">Close</div>
    </div>
  );
};

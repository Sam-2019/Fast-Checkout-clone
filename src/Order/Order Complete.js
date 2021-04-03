import React from "react";
import Check from "../Components/Check";
import Button from "../Components/button";
import Spacer from "../Components/Spacer";

const OrderComplete = () => {
  return (
    <div
      className="order_wrapper"
      style={{
        padding: "20px 10px",
        backgroundColor: "green",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <Check width={40} height={40} color="white" />
          <div>Order Complete</div>
        </div>
        <div
          style={{
            color: "gray",
            fontSize: "20px",
            fontWeight: "500",
          }}
        >
          $190.00
        </div>
      </div>

      <div
        style={{
          fontSize: "16px",
          padding: " 10px 0",
          fontWeight: "500",
          textAlign: "justify",
        }}
      >
        5:36 to make changes or cancel before your card is charged.
      </div>

      <div className="button_container_row">
        <Button name="View/Cancel Order" className="tertiary " />
        <Spacer
          bottom={0}
          top={0}
          right={5}
          left={5}
          selected_unit="percentage"
        />
        <Button name="Keep Shopping" className="secondary" />
      </div>
    </div>
  );
};

export default OrderComplete;

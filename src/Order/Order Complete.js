import React from "react";
import { useHistory } from "react-router-dom";
import CheckCircle from "../Components/CheckCircle";
import Button from "../Components/button";
import Spacer from "../Components/Spacer";
import Timer from "../Components/Timer";

const OrderComplete = () => {
  let history = useHistory;

  function viewOrder() {
    history.push("/orderreceived");
  }

  function goHome() {
    history.push("/");
  }

  return (
    <div
      className="order_wrapper"
      style={{
        padding: "20px 15px",
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
          <CheckCircle width={40} height={40} color="white" />
          <div
            style={{
              margin: "0 0 0 10px",
              fontWeight: "500",
              fontSize: "20px",
            }}
          >
            Order Complete
          </div>
        </div>
        <div
          style={{
            color: "white",
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
        <Timer />
        to make changes or cancel before your card is charged.
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",

          padding: "0 ",
        }}
      >
        <Button
          name="View/Cancel Order"
          className="tertiary width-100 "
          action={viewOrder}
        />
        <Spacer bottom={0} top={0} right={0} left={0} selected_unit="pixel" />
        <Button
          name="Keep Shopping"
          className="secondary width-100 "
          action={goHome}
        />
      </div>
    </div>
  );
};

export default OrderComplete;

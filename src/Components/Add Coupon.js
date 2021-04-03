import React from "react";
import Plus from "./plus";

const AddCoupon = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        padding: "15px 0",
        color: "blue",
        fontWeight: "500",
        border: "1px solid #d0d0d0",
        backgroundColor: "white",
      }}
    >
      <Plus width={15} height={15} />

      <div>Add Coupon Code</div>
    </div>
  );
};

export default AddCoupon;

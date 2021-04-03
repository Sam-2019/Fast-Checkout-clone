import React from "react";

let right = 10;

let left = 10;

const Spacer = ({ top, bottom, selected_unit }) => {
  let unit;

  switch (selected_unit) {
    case "pixel":
      unit = "px";
      break;
    case "percentage":
      unit = "%";
      break;
    default:
      unit = "px";
  }

  return (
    <div
      style={{
        margin: `${top}${unit}  ${right}${unit} ${bottom}${unit}  ${left}${unit} `,
      }}
    ></div>
  );
};

export default Spacer;

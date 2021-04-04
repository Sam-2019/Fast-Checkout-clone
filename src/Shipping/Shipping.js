import React from "react";
import Spacer from "../Components/Spacer";
import CheckCircle from "../Components/CheckCircle";
import Circle from "../Components/Circle";
import "./shipping.css";

const Shipping = () => {
  const [state, setState] = React.useState(true);
  const [value, setValue] = React.useState(false);

  function free() {
    setState(!state);
    setValue(!value);
  }

  return (
    <div className="shippng">
      <div className="free_shipping">
        <div className="shipping_item">Free Shipping</div>

        <div className="shipping_select">
          <div className="" onClick={free}>
            {state ? <Circle /> : <CheckCircle width={30} height={30}  color="green" />}
          </div>
        </div>
      </div>

      <div className="expedited_shipping">
        <div className="shipping_item">Expedited Shipping - $9.99</div>

        <div className="shipping_select">
          <div className="" onClick={free}>
            {value ? <Circle /> : <CheckCircle width={30} height={30}  color="green"/>}
          </div>
        </div>
      </div>

      <Spacer />
    </div>
  );
};

export default Shipping;

import React from "react";
import Input from "../Components/input";
import Button from "../Components/button";
import Lock from "../Components/lock";
import Spacer from "../Components/Spacer";
import Shipping from "../Shipping/Shipping";
import Terms from "../Terms/Terms";
import "./checkout.css";

const Checkout = () => {
  const [value, setValue] = React.useState("Pick your location");
  return (
    <div className="checkout">
      <div className="company_price">
        <div>Company Name</div>

     
          <select
            className="select"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
   
      </div>

      <Spacer
        top={5}
        bottom={0}
        right={0}
        left={0}
        selected_unit="percentage"
      />

      <form className="form-wrapper">
        <Input label="Email" />

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

        <Input label="Phone Number" />

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
          <div style={{ width: "40%" }} >
            <Input label="Credit Card" />
          </div>

          <div style={{ width: "60%", display: "flex", flexDirection: "row" }}>
            <Input label="MM/YY" />
            <Input label="CVC" />
            <Input label="ZIP" />
          </div>
        </div>
      </form>

      <Spacer
        bottom={5}
        top={0}
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

      <div className="terms_button">


        <Terms />

    
        <div className="button_container">
          <Button name={<InsideButton />} className="primary" />
        </div>
      </div>
    </div>
  );
};

export default Checkout;

const InsideButton = () => (
  <div className="inside_button">
    <Lock /> {"  "} Fast Checkout
  </div>
);

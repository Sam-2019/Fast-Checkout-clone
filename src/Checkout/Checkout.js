import React from "react";
import Input from "../Components/input";
import Button from "../Components/button";
import Lock from "../Components/lock";
import Spacer from "../Components/Spacer";
import "./checkout.css";

const Checkout = () => {
  const [loading, setLoading] = React.useState(true);
  const [value, setValue] = React.useState("Pick your location");
  return (
    <div className="checkout">
      <div className="company_price">
        <div>Company Name</div>

        <div className='select'>
          <select
            className="input"
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
        
      </div>

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
              width: "75%",
              borderBottom: "1px solid #d0d0d0",
              borderTop: "1px solid #d0d0d0",
              borderRight: "1px solid #d0d0d0",
            }}
          >
            <Input label="Delivery Address" />
          </div>

          <div
            style={{
              width: "25%",
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
          <div style={{ width: "40%" }}>
            <Input label="Credit Card" />
          </div>

          <div style={{ width: "60%", display: "flex", flexDirection: "row" }}>
            <Input label="MM/YY" />
            <Input label="CVC" />
            <Input label="ZIP" />
          </div>
        </div>
      </form>

      <Spacer />
      <Spacer />

      <div className="terms">
        By clicking the button below you agree to our
        <div>
          <span className="term_item">Terms,</span>
          {""} <span className="term_item">Privacy Policy</span>
          {""}and {""}
          <span className="term_item">Cookie Policy</span>
        </div>
      </div>

      <Spacer />
      <Spacer />
      <div className="button_container">
        <Button name={<InsideButton />} className="primary" />
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

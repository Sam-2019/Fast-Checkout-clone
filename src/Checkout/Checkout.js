import React from "react";
import styled from 'styled-components'
import { InsideButton } from "../Item/Item";
import Button from "../Components/button";
import Spacer from "../Components/Spacer";
import Shipping from "../Shipping/Shipping";
import Terms from "../Terms/Terms";
import Input from "../Components/input2";
import Success from "../Components/success";
import "./checkout.css";

const Popup = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: white;
  -webkit-transition: all ease 0.7s;
  transition: all ease 0.7s;
  z-index: 11;
  animation-name: fade-in;
  animation-duration: 0.5s;
  animation-delay: 0s;
  animation-fill-mode: forwards;
  display: flex;
  align-content: center;

  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

const Checkout = () => {
  const [value, setValue] = React.useState("Pick your location");
  const [success, setSuccess] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const token = JSON.parse(window.localStorage.getItem("fastcheckout"));

  function checkout() {
    if (token) {
      setSuccess(true);
    }
  }
  return (
    <>
      <div className="checkout">
        <div className="company_price">
          <div className="company_name">Oster Products</div>

          <div className="select_wrapper">
            <img
              src="http://www.oster.ca/on/demandware.static/-/Sites-master-catalog/default/dwca5cf622/images/highres/BLSTMB-CBG2-033-2.jpg"
              alt="product"
              className="option-image"
            />

            <select
              className="select"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            >
              <option value="phone">Mobile</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </div>
        </div>

        <Spacer
          top={5}
          bottom={0}
          right={0}
          left={0}
          selected_unit="percentage"
        />

        <form className="form-wrapper">
          <div>
            <Input label="Email" defaultValue={token.email} />
          </div>

          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "50%",
                borderBottom: "1px solid #d0d0d0",
                borderTop: "1px solid #d0d0d0",
                borderRight: "1px solid #d0d0d0",
              }}
            >
              <Input label="First Name" defaultValue={token.fname} />
            </div>

            <div
              style={{
                width: "50%",
                padding: "0 0 0 10px",
                borderBottom: "1px solid #d0d0d0",
                borderTop: "1px solid #d0d0d0",
              }}
            >
              <Input label="Last Name" defaultValue={token.lname} />
            </div>
          </div>

          <div>
            <Input
              label="Phone Number"
              defaultValue={token.number}
              type="number"
            />
          </div>

          <div style={{ display: "flex" }}>
            <div
              style={{
                width: "70%",
                borderBottom: "1px solid #d0d0d0",
                borderTop: "1px solid #d0d0d0",
                borderRight: "1px solid #d0d0d0",
              }}
            >
              <Input label="Delivery Address" defaultValue={token.delivery} />
            </div>

            <div
              style={{
                width: "30%",
                padding: "0 0 0 10px",
                borderBottom: "1px solid #d0d0d0",
                borderTop: "1px solid #d0d0d0",
              }}
            >
              <Input label="Line 2" defaultValue={token.line} />
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
              <Input label="Credit Card" defaultValue={token.creditCard} />
            </div>

            <div
              style={{ width: "60%", display: "flex", flexDirection: "row" }}
            >
              <Input label="MM/YY" defaultValue={token.duration} />
              <Input label="CVC" defaultValue={token.cvc} />
              <Input label="ZIP" defaultValue={token.zip} />
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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0 10px",
            }}
          >
            <Button
              name={<InsideButton />}
              className="primary"
              loading={loading}
              action={checkout}
            />
          </div>
        </div>
      </div>

      {success ? (
        <Popup>
          <Success />
        </Popup>
      ) : null}
    </>
  );
};

export default Checkout;

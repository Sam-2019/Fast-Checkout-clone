import React from "react";
import styled from "styled-components";
import { InsideButton } from "../Item/Item";
import Button from "../Components/button";
import Spacer from "../Components/Spacer";
import Shipping from "../Shipping/Shipping";
import Terms from "../Terms/Terms";
import Down from "../Components/chevronDown";
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

        <form className="form-wrapper" style={{ fontWeight: "500" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 15px",
              border: "1px solid #d0d0d0",
            }}
          >
            <label
              style={{ color: "gray", width: "30%", padding: "0 0 0 0px" }}
            >
              User
            </label>
            <input
              style={{
                color: "black",
                width: "70%",
                outline: "none",
                border: "1px solid transparent",
              }}
              placeholder="Alex Swift"
              defaultValue={`${token.fname} ${token.lname}`}
            />
            <div style={{ color: "blue", width: "10%" }}>Edit</div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 15px",
              border: "1px solid #d0d0d0",
            }}
          >
            <label style={{ color: "gray", width: "30%", padding: "0 0 0 0" }}>
              Email
            </label>
            <input
              style={{
                color: "black",
                width: "70%",
                outline: "none",
                border: "1px solid transparent",
              }}
              placeholder="alex@gmail.com"
              defaultValue={`${token.email} `}
            />
            <div
              style={{
                width: "10%",
              }}
            >
              <div
                style={{
                  width: "23px",
                  height: "23px",
                  backgroundColor: "#d5d2d2",
                  borderRadius: "50%",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Down />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 15px",
              border: "1px solid #d0d0d0",
            }}
          >
            <label style={{ color: "gray", width: "30%", padding: "0 0 0 0" }}>
              Phone
            </label>
            <input
              style={{
                color: "black",
                width: "70%",
                outline: "none",
                border: "1px solid transparent",
              }}
              placeholder="+1 (555) 555-5555"
              defaultValue={`${token.number} `}
            />
            <div
              style={{
                width: "10%",
              }}
            >
              <div
                style={{
                  width: "23px",
                  height: "23px",
                  backgroundColor: "#d5d2d2",
                  borderRadius: "50%",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Down />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 15px",
              border: "1px solid #d0d0d0",
            }}
          >
            <label style={{ color: "gray", width: "30%", padding: "0 0 0 0" }}>
              Ship to
            </label>
            <input
              style={{
                color: "black",
                width: "70%",
                outline: "none",
                border: "1px solid transparent",
              }}
              placeholder="120 10th Street"
              defaultValue={`${token.delivery} `}
            />
            <div
              style={{
                width: "10%",
              }}
            >
              <div
                style={{
                  width: "23px",
                  height: "23px",
                  backgroundColor: "#d5d2d2",
                  borderRadius: "50%",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Down />
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              padding: "10px 15px",
              border: "1px solid #d0d0d0",
            }}
          >
            <label style={{ color: "gray", width: "30%", padding: "0 0 0 0" }}>
              Payment
            </label>
            <input
              style={{
                color: "black",
                width: "70%",
                outline: "none",
                border: "1px solid transparent",
              }}
              placeholder="1234"
              defaultValue={`${token.creditCard} ${token.duration} ${token.cvc} ${token.zip} `}
            />
            <div
              style={{
                width: "10%",
              }}
            >
              <div
                style={{
                  width: "23px",
                  height: "23px",
                  backgroundColor: "#d5d2d2",
                  borderRadius: "50%",
                  padding: "4px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Down />
              </div>
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

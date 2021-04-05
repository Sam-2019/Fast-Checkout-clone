import React from "react";
import Check from "../Components/Check";
import Spacer from "../Components/Spacer";
import Shipping from "../Shipping/Shipping";
import { OrderActions } from "../Order/Order";
import Down from "../Components/chevronDown";

const OrderReceived = () => {
  const [value, setValue] = React.useState("Pick your location");

  const token = JSON.parse(window.localStorage.getItem("fastcheckout"));

  return (
    <div
      style={{
        backgroundColor: "#d5d2d2",
        height: "100vh",
      }}
    >
      <OrderAlert />
      <div
        style={{
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
          border: "1px solid #d5d2d2",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            fontWeight: "500",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div>Order Received</div>
            <Check width={20} height={20} color="green" />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "row",
              color: "#d5d2d2",
            }}
          >
            www.forveryoung.io
          </div>
        </div>

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
        bottom={5}
        top={0}
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


      <OrderActions />
    </div>
  );
};

export default OrderReceived;

const OrderAlert = () => {
  return (
    <div
      style={{
        flexDirection: "row",
        color: "white",
        backgroundColor: "green",
        textAlign: "center",
        padding: "10px",
      }}
    >
      Cancel or edit the order
    </div>
  );
};

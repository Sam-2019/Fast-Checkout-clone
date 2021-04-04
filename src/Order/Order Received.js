import React from "react";
import Check from "../Components/Check";
import Spacer from "../Components/Spacer";
import AnotherForm from "../Form/Another Form";
import Shipping from "../Shipping/Shipping";
import { OrderActions } from "../Order/Order";

const OrderReceived = () => {
  const [value, setValue] = React.useState("Pick your location");
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

      <AnotherForm />
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

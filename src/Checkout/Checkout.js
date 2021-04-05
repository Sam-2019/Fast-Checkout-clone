import React from "react";
import Form from "../Form/Form";
import { InsideButton } from "../Product/Product";
import Button from "../Components/button";
import Lock from "../Components/lock";
import Spacer from "../Components/Spacer";
import Shipping from "../Shipping/Shipping";
import Terms from "../Terms/Terms";
import Spinner from "../Components/spinner";
import "./checkout.css";

const Checkout = () => {
  const [value, setValue] = React.useState("Pick your location");
  const [loading, setLoading] = React.useState(false);

  function checkout() {
    setLoading(true);
  }
  return (
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

      <Form />

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
            name={loading ? <Spinner /> : <InsideButton />}
            className="primary"
            loading={loading}
            action={checkout}
          />
        </div>
      </div>
    </div>
  );
};

export default Checkout;

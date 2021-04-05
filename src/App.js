import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "./Navigation/Navigation";
import Product from "./Product/Product";
import Checkout from "./Checkout/Checkout";
import Form from "./Form/Another Form";
import Coupon from "./Components/Add Coupon";
import Order from "./Order/Order";
import OrderReceived from "./Order/Order Received";

const App = () => {
  return (
    <div className="body">
      <Product />

      {/* <Button name="Fast Checkout" className="primary" />
      <Button name="Close" className="primary" />
      <Button name="Cancel Order" className="secondary cancel" />
      <Button name="View/Cancel Order" className="tertiary" />
      <Button name="Keep Shopping" className="secondary" />
      <Button name="Add to cart" className="secondary" /> */}
    </div>
  );
};

export default App;

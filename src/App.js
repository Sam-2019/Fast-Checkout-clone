import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Product from "./Product/Product";
import Checkout from "./Checkout/Checkout";
import Register from "./Register/Register";
import OrderReceived from "./Order/Order Received";
import Order from "./Order/Order";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Product />
        </Route>

        <Route path="/orderreceived">
          <OrderReceived />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>

        <Route path="/order">
          <Order />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

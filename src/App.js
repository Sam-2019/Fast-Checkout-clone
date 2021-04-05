import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";
import Product from "./Product/Product";
import Checkout from "./Checkout/Checkout";
import Register from "./Register/Register";

const Body = styled.div`
  background-color: #ffffff34;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  transition: margin 0.5s;
  -webkit-transition: all ease-in-out 0.5s;
  transition: all ease-in-out 0.5s;
`;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Product />
        </Route>

        <Route path="/register">
          <Register />
        </Route>

        <Route path="/checkout">
          <Checkout />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;

{
  /* <Button name="Fast Checkout" className="primary" />
      <Button name="Close" className="primary" />
      <Button name="Cancel Order" className="secondary cancel" />
      <Button name="View/Cancel Order" className="tertiary" />
      <Button name="Keep Shopping" className="secondary" />
      <Button name="Add to cart" className="secondary" /> */
}

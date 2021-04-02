import React from "react";
import "bootstrap/dist/css/bootstrap.css";

import Button from "./Components/button";

const App = () => {
  return (
    <div className="body">
      <Button name="Fast Checkout"  className='primary'/>
      <Button name="Close" className='primary'/>
      <Button name="Cancel Order" className='secondary cancel' />
      <Button name="View/Cancel Order" className='tertiary'/>
      <Button name="Keep Shopping" className='secondary'/>
      <Button name="Add to cart"className='secondary' />
    </div>
  );
};

export default App;

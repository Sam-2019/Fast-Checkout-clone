import React from "react";
import Button from "../Components/button";
import Spacer from "../Components/Spacer";
import "./product.css";

const Product = () => {
  return (
    <div className="product_detail">
      <div className="image_container">
        <img
          src="http://www.oster.ca/on/demandware.static/-/Sites-master-catalog/default/dwca5cf622/images/highres/BLSTMB-CBG2-033-2.jpg"
          alt="image"
          className="product_image"
        />
      </div>

      <div className="name_price">
        <div className="product_name">Oster® Pro™ Blender</div>
        <div className="product_price">$500</div>
      </div>

      <div className="product_description">
        One of the best blenders on the market today, the Oster® Pro™ relies
        Dual Direction Blade technology to chop, blend and grind with precision.
        Create perfect salsas, soups and sauces with the next generation of
        Oster® blender technology. Take your favourite smoothie to go; the
        Oster® Pro™ includes two portable smoothie cups.{" "}
        {/* The Oster® Pro™
        Performance Blender brings a powerful 1200 watts and 7 speeds to your
        kitchen. This blender includes three pre-programmed settings, making it
        instantly easy to create smoothies and other common blender creations.
        Its smart settings are programmed to create exactly the consistency you
        need, with the right speed and timing in just one touch. A professional
        calibre blender, the Oster® Pro™ contains an All-Metal Drive® system,
        ensuring durability and longevity. */}
      </div>

      <div className="button_container">
        <Button name="Fast Checkout" className="primary" />
        <Spacer />
        <Button name="Add to cart" className="secondary" />
      </div>
    </div>
  );
};

export default Product;

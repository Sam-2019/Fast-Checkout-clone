import React from "react";
import { useHistory } from "react-router-dom";
import Button from "../Components/button";
import Spacer from "../Components/Spacer";
import Lock from "../Components/lock";

export const InsideButton = () => (
  <div className="inside_button">
    <Lock /> {"  "} Fast Checkout
  </div>
);

const Item = () => {
  const [loading, setLoading] = React.useState(false);
  let history = useHistory();

  function buy() {
    setLoading(true);

    const token = localStorage.getItem("fastcheckout");

    if (token) {
      history.push("/ordercomplete");
    } else {
      history.push("/register");
    }

    setLoading(false);

    // if (token) {
    //   return;
    // }

    // if (!token) {

    // }
  }

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          padding: "15px",
        }}
      >
        <div
          style={{
            textAlign: "center",
          }}
        >
          <img
            src="http://www.oster.ca/on/demandware.static/-/Sites-master-catalog/default/dwca5cf622/images/highres/BLSTMB-CBG2-033-2.jpg"
            alt="product"
            style={{
              width: "300px",
              borderRadius: "10%",
            }}
          />
        </div>

        <div
          className="name_price"
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            className="product_name"
            style={{
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            Oster® Pro™ Blender
          </div>
          <div
            style={{
              color: "gray",
              fontSize: "20px",
              fontWeight: "500",
            }}
          >
            $500.99
          </div>
        </div>

        <Spacer />

        <div
          style={{
            fontSize: "20px",
            textAlign: "justify",
          }}
        >
          One of the best blenders on the market today, the Oster® Pro™ relies
          Dual Direction Blade technology to chop, blend and grind with
          precision. Create perfect salsas, soups and sauces with the next
          generation of Oster® blender technology. Take your favourite smoothie
          to go; the Oster® Pro™ includes two portable smoothie cups.
          {/* The Oster® Pro™
        Performance Blender brings a powerful 1200 watts and 7 speeds to your
        kitchen. This blender includes three pre-programmed settings, making it
        instantly easy to create smoothies and other common blender creations.
        Its smart settings are programmed to create exactly the consistency you
        need, with the right speed and timing in just one touch. A professional
        calibre blender, the Oster® Pro™ contains an All-Metal Drive® system,
        ensuring durability and longevity. */}
        </div>

        <Spacer />
        <Spacer />
      </div>

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
          action={buy}
        />
        <Spacer />
        <Button name="Add to cart" className="secondary" />
      </div>
    </>
  );
};

export default Item;

import React from "react";
import "./navigation.css";
import Justify from "../Components/justify";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="company_detail">
        <div className="company_logo">
          <img
            src="https://www.oster.ca/on/demandware.static/Sites-oster-ca-Site/-/default/dw516b4444/images/logo.png"
            alt="company"
            className="logo"
          />
        </div>

        {/* <div className="company_name">Oster</div> */}
      </div>

      <Justify />
    </div>
  );
};

export default Navigation;

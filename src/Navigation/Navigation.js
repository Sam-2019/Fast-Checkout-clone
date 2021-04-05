import React from "react";
import Justify from "../Components/justify";

const Navigation = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        borderBottom: "1px solid #b7b6b6",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <div className="company_logo">
          <img
            src="https://www.oster.ca/on/demandware.static/Sites-oster-ca-Site/-/default/dw516b4444/images/logo.png"
            alt="company"
            style={{
              width: "100px",
            }}
          />
        </div>

        {/* <div 
                style={{
       fontWeight: '500'
        }}
        >Oster</div> */}
      </div>

      <Justify />
    </div>
  );
};

export default Navigation;

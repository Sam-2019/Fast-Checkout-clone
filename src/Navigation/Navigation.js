import React from "react";
import "./navigation.css";
import Justify from "../Components/justify";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="company_detail">
        <div>Logo</div>
        <div>Name</div>
      </div>

      <Justify />
    </div>
  );
};

export default Navigation;

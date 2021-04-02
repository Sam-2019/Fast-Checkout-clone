import React from "react";
import "./terms.css";

const Terms = () => {
  return (
    <div className="terms">
      By clicking the button below you agree to our
      <div>
        <span className="term_item">Terms,</span>
        {""} <span className="term_item">Privacy Policy</span>
        {""}and {""}
        <span className="term_item">Cookie Policy</span>
      </div>
    </div>
  );
};

export default Terms;

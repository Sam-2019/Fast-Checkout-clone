import React from "react";
import Button from "./Components/button";
import { Popup } from "./Components/styles";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  let history = useHistory();
  return (
    <Popup>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "auto 0",
          alignItems: "center",
          padding: "10px 15px",
        }}
      >
        <p
          style={{
            textAlign: "center",
          }}
        >
          Sorry we're unable to find the page you're looking for.
        </p>

        <Button
          name="Go home"
          className="primary"
          action={() => {
            history.push("/");
          }}
        />
      </div>
    </Popup>
  );
};

export default NotFound;

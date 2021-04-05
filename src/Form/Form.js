import React from "react";
import Input from "../Components/input2";

const Form = () => {
  const [email, setEmail] = React.useState("");
  const [fname, setFName] = React.useState("");
  const [lname, setLName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [delivery, setDelivery] = React.useState("");
  const [line, setLine] = React.useState("");
  const [creditCard, setCreditCard] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [cvc, setCVC] = React.useState("");
  const [zip, setZip] = React.useState("");

  return (
    <form className="form-wrapper">
      <div>
        <Input
          label="Email"
          type={email}
          value={email}
          setValue={(e) => setEmail(e.target.value)}
        />
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "50%",
            borderBottom: "1px solid #d0d0d0",
            borderTop: "1px solid #d0d0d0",
            borderRight: "1px solid #d0d0d0",
          }}
        >
          <Input
            label="First Name"
            value={fname}
            setValue={(e) => setFName(e.target.value)}
          />
        </div>

        <div
          style={{
            width: "50%",
            padding: "0 0 0 10px",
            borderBottom: "1px solid #d0d0d0",
            borderTop: "1px solid #d0d0d0",
          }}
        >
          <Input
            label="Last Name"
            value={lname}
            setValue={(e) => setLName(e.target.value)}
          />
        </div>
      </div>

      <div>
        <Input
          label="Phone Number"
          value={number}
          type="number"
          setValue={(e) => setNumber(e.target.value)}
        />
      </div>

      <div style={{ display: "flex" }}>
        <div
          style={{
            width: "70%",
            borderBottom: "1px solid #d0d0d0",
            borderTop: "1px solid #d0d0d0",
            borderRight: "1px solid #d0d0d0",
          }}
        >
          <Input
            label="Delivery Address"
            value={delivery}
            setValue={(e) => setDelivery(e.target.value)}
          />
        </div>

        <div
          style={{
            width: "30%",
            padding: "0 0 0 10px",
            borderBottom: "1px solid #d0d0d0",
            borderTop: "1px solid #d0d0d0",
          }}
        >
          <Input
            label="Line 2"
            value={line}
            setValue={(e) => setLine(e.target.value)}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          width: "100%",
          borderBottom: "1px solid #d0d0d0",
        }}
      >
        <div style={{ width: "40%" }}>
          <Input
            label="Credit Card"
            value={creditCard}
            setValue={(e) => setCreditCard(e.target.value)}
      
          />
        </div>

        <div style={{ width: "60%", display: "flex", flexDirection: "row" }}>
          <Input
            label="MM/YY"
            value={duration}
            setValue={(e) => setDuration(e.target.value)}
          />
          <Input
            label="CVC"
            value={cvc}
            setValue={(e) => setCVC(e.target.value)}
          />
          <Input
            label="ZIP"
            value={zip}
            setValue={(e) => setZip(e.target.value)}
          />
        </div>
      </div>
    </form>
  );
};

export default Form;

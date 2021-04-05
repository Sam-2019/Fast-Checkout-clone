import React from "react";
import { useHistory } from "react-router-dom";
import { InsideButton } from "../Item/Item";
import Button from "../Components/button";
import Spacer from "../Components/Spacer";
import Shipping from "../Shipping/Shipping";
import Terms from "../Terms/Terms";
import Input from "../Components/input2";

const Register = () => {
  let history = useHistory();
  const [value, setValue] = React.useState("Pick your location");
  const [loading, setLoading] = React.useState(false);

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

  async function checkout(event) {
    event.preventDefault();
    setLoading(true);

    const array = new Uint32Array(1);
    const index = window.crypto.getRandomValues(array);

    let empty =
      email &&
      fname &&
      lname &&
      number &&
      delivery &&
      creditCard &&
      duration &&
      cvc &&
      zip;

    if (empty === "") {
      alert("no value");
    }

    if (empty !== "") {
      const person = {
        email: email,
        fname: fname,
        lname: lname,
        number: number,
        delivery: delivery,
        line: line,
        creditCard: creditCard,
        duration: duration,
        cvc: cvc,
        zip: zip,
        token: index[0],
      };

      await localStorage.setItem("fastcheckout", JSON.stringify(person));

      history.push("/checkout");
    }

    setLoading(false);
  }

  return (
    <div className="checkout">
      <div className="company_price">
        <div className="company_name">Oster Products</div>

        <div className="select_wrapper">
          <img
            src="http://www.oster.ca/on/demandware.static/-/Sites-master-catalog/default/dwca5cf622/images/highres/BLSTMB-CBG2-033-2.jpg"
            alt="product"
            className="option-image"
          />

          <select
            className="select"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          >
            <option value="phone">Mobile</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
        </div>
      </div>

      <Spacer
        top={5}
        bottom={0}
        right={0}
        left={0}
        selected_unit="percentage"
      />

      <form className="form-wrapper">
        <div>
          <Input
            label="Email"
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

      <Spacer
        bottom={5}
        top={0}
        right={0}
        left={0}
        selected_unit="percentage"
      />

      <Shipping />

      <Spacer
        bottom={5}
        top={0}
        right={0}
        left={0}
        selected_unit="percentage"
      />

      <div className="terms_button">
        <Terms />

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
            action={checkout}
          />
        </div>
      </div>
    </div>
  );
};

export default Register;

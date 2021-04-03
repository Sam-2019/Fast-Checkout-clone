import React from "react";
import Button from "../Components/button";
import Down from "../Components/chevronDown";
import Shipping from "../Shipping/Shipping";

const Form = () => {
  return (
    <div>
      <form className="form-wrapper" style={{ fontWeight: "500" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 0",
            border: "1px solid #d0d0d0",
          }}
        >
          <label style={{ color: "gray", width: "30%" , padding: '0 0 0 10px' }}>User</label>
          <input
            style={{
              color: "black",
              width: "70%",
              outline: "none",
              border: "1px solid transparent",
            }}
            placeholder="Alex Swift"
          />
          <div style={{ color: "blue", width: "10%" }}>Edit</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 0",
            border: "1px solid #d0d0d0",
          }}
        >
          <label style={{ color: "gray", width: "30%", padding: '0 0 0 10px'  }}>Email</label>
          <input
            style={{
              color: "black",
              width: "70%",
              outline: "none",
              border: "1px solid transparent",
            }}
            placeholder="alex@gmail.com"
          />
          <div
            style={{
              width: "10%",
            }}
          >
            <div
              style={{
                width: "23px",
                height: "23px",
                backgroundColor: "#d5d2d2",
                borderRadius: "50%",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Down />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 0",
            border: "1px solid #d0d0d0",
          }}
        >
          <label style={{ color: "gray", width: "30%",  padding: '0 0 0 10px'  }}>Phone</label>
          <input
            style={{
              color: "black",
              width: "70%",
              outline: "none",
              border: "1px solid transparent",
            }}
            placeholder="+1 (555) 555-5555"
          />
          <div
            style={{
              width: "10%",
            }}
          >
            <div
              style={{
                width: "23px",
                height: "23px",
                backgroundColor: "#d5d2d2",
                borderRadius: "50%",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Down />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 0",
            border: "1px solid #d0d0d0",
          }}
        >
          <label style={{ color: "gray", width: "30%",  padding: '0 0 0 10px'  }}>Ship to</label>
          <input
            style={{
              color: "black",
              width: "70%",
              outline: "none",
              border: "1px solid transparent",
            }}
            placeholder="120 10th Street"
          />
          <div
            style={{
              width: "10%",
            }}
          >
            <div
              style={{
                width: "23px",
                height: "23px",
                backgroundColor: "#d5d2d2",
                borderRadius: "50%",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Down />
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 0",
            border: "1px solid #d0d0d0",
          }}
        >
          <label style={{ color: "gray", width: "30%",  padding: '0 0 0 10px'  }}>Payment</label>
          <input
            style={{
              color: "black",
              width: "70%",
              outline: "none",
              border: "1px solid transparent",
            }}
            placeholder="1234"
          />
          <div
            style={{
              width: "10%",
            }}
          >
            <div
              style={{
                width: "23px",
                height: "23px",
                backgroundColor: "#d5d2d2",
                borderRadius: "50%",
                padding: "4px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <Down />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

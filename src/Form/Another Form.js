import React from "react";
import Down from "../Components/chevronDown";

const Form = () => {
  const token = JSON.parse(window.localStorage.getItem("fastcheckout"));

  return (
    <div>
      <form className="form-wrapper" style={{ fontWeight: "500" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 15px",
            border: "1px solid #d0d0d0",
          }}
        >
          <label style={{ color: "gray", width: "30%", padding: "0 0 0 0px" }}>
            User
          </label>
          <input
            style={{
              color: "black",
              width: "70%",
              outline: "none",
              border: "1px solid transparent",
            }}
            placeholder="Alex Swift"
            defaultValue={`${token.fname} ${token.lname}`}
          />
          <div style={{ color: "blue", width: "10%" }}>Edit</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            padding: "10px 15px",
            border: "1px solid #d0d0d0",
          }}
        >
          <label style={{ color: "gray", width: "30%", padding: "0 0 0 0" }}>
            Email
          </label>
          <input
            style={{
              color: "black",
              width: "70%",
              outline: "none",
              border: "1px solid transparent",
            }}
            placeholder="alex@gmail.com"
            defaultValue={`${token.email} `}
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
            padding: "10px 15px",
            border: "1px solid #d0d0d0",
          }}
        >
          <label style={{ color: "gray", width: "30%", padding: "0 0 0 0" }}>
            Phone
          </label>
          <input
            style={{
              color: "black",
              width: "70%",
              outline: "none",
              border: "1px solid transparent",
            }}
            placeholder="+1 (555) 555-5555"
            defaultValue={`${token.number} `}
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
            padding: "10px 15px",
            border: "1px solid #d0d0d0",
          }}
        >
          <label style={{ color: "gray", width: "30%", padding: "0 0 0 0" }}>
            Ship to
          </label>
          <input
            style={{
              color: "black",
              width: "70%",
              outline: "none",
              border: "1px solid transparent",
            }}
            placeholder="120 10th Street"
            defaultValue={`${token.delivery} `}
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
            padding: "10px 15px",
            border: "1px solid #d0d0d0",
          }}
        >
          <label style={{ color: "gray", width: "30%", padding: "0 0 0 0" }}>
            Payment
          </label>
          <input
            style={{
              color: "black",
              width: "70%",
              outline: "none",
              border: "1px solid transparent",
            }}
            placeholder="1234"
            defaultValue={`${token.creditCard} ${token.duration} ${token.cvc} ${token.zip} `}
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

// const empty = () => {
//   return (
//     <div>
//       <form className="form-wrapper" style={{ fontWeight: "500" }}>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             padding: "10px 15px",
//             border: "1px solid #d0d0d0",
//           }}
//         >
//           <label style={{ color: "gray", width: "30%", padding: "0 0 0 0px" }}>
//             User
//           </label>
//           <input
//             style={{
//               color: "black",
//               width: "70%",
//               outline: "none",
//               border: "1px solid transparent",
//             }}
//             placeholder="Alex Swift"
//           />
//           <div style={{ color: "blue", width: "10%" }}>Edit</div>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             padding: "10px 15px",
//             border: "1px solid #d0d0d0",
//           }}
//         >
//           <label style={{ color: "gray", width: "30%", padding: "0 0 0 0" }}>
//             Email
//           </label>
//           <input
//             style={{
//               color: "black",
//               width: "70%",
//               outline: "none",
//               border: "1px solid transparent",
//             }}
//             placeholder="alex@gmail.com"
//           />
//           <div
//             style={{
//               width: "10%",
//             }}
//           >
//             <div
//               style={{
//                 width: "23px",
//                 height: "23px",
//                 backgroundColor: "#d5d2d2",
//                 borderRadius: "50%",
//                 padding: "4px",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <Down />
//             </div>
//           </div>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             padding: "10px 15px",
//             border: "1px solid #d0d0d0",
//           }}
//         >
//           <label style={{ color: "gray", width: "30%", padding: "0 0 0 0" }}>
//             Phone
//           </label>
//           <input
//             style={{
//               color: "black",
//               width: "70%",
//               outline: "none",
//               border: "1px solid transparent",
//             }}
//             placeholder="+1 (555) 555-5555"
//           />
//           <div
//             style={{
//               width: "10%",
//             }}
//           >
//             <div
//               style={{
//                 width: "23px",
//                 height: "23px",
//                 backgroundColor: "#d5d2d2",
//                 borderRadius: "50%",
//                 padding: "4px",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <Down />
//             </div>
//           </div>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             padding: "10px 15px",
//             border: "1px solid #d0d0d0",
//           }}
//         >
//           <label style={{ color: "gray", width: "30%", padding: "0 0 0 0" }}>
//             Ship to
//           </label>
//           <input
//             style={{
//               color: "black",
//               width: "70%",
//               outline: "none",
//               border: "1px solid transparent",
//             }}
//             placeholder="120 10th Street"
//           />
//           <div
//             style={{
//               width: "10%",
//             }}
//           >
//             <div
//               style={{
//                 width: "23px",
//                 height: "23px",
//                 backgroundColor: "#d5d2d2",
//                 borderRadius: "50%",
//                 padding: "4px",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <Down />
//             </div>
//           </div>
//         </div>

//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             padding: "10px 15px",
//             border: "1px solid #d0d0d0",
//           }}
//         >
//           <label style={{ color: "gray", width: "30%", padding: "0 0 0 0" }}>
//             Payment
//           </label>
//           <input
//             style={{
//               color: "black",
//               width: "70%",
//               outline: "none",
//               border: "1px solid transparent",
//             }}
//             placeholder="1234"
//           />
//           <div
//             style={{
//               width: "10%",
//             }}
//           >
//             <div
//               style={{
//                 width: "23px",
//                 height: "23px",
//                 backgroundColor: "#d5d2d2",
//                 borderRadius: "50%",
//                 padding: "4px",
//                 display: "flex",
//                 alignItems: "center",
//               }}
//             >
//               <Down />
//             </div>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// };

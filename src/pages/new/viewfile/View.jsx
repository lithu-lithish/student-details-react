// import React, { useState } from "react";
// // import "./styles.css";
// import view from "../../../svg/view.svg";
// import { useEffect } from "react";

// import Modal from "react-modal";

// Modal.setAppElement("#root");

// export default function View({ file }) {
//   const [isOpen, setIsOpen] = useState(false);

//   function toggleModal() {
//     setIsOpen(!isOpen);
//   }

//   return (
//     <>
//       <img
//         src={view}
//         // className="buttonTwo"
//         onClick={toggleModal}
//         style={{
//           padding: ".3rem",
//           // width: "150%",
//         }}
//       ></img>
//       {isOpen && (
//         <div
//           style={{
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//             position: "fixed",
//             height: "100vh",
//             width: "100vw",
//             top: "50%",
//             left: "50%",
//             transform: "translateX(-50%) translateY(-50%)",
//             backgroundColor: "rgb(244, 247, 254,0.5)",
//             zIndex: 99999,
//           }}
//         >
//           {/* <div>My modal dialog.</div> */}
//           <img
//             src={URL.createObjectURL(file)}
//             style={{
//               maxHeight: "60vh",
//               borderRadius: "0%",
//               objectFit: "cover",
//             }}
//           />
//           <button
//             onClick={toggleModal}
//             style={{
//               backgroundColor: "#D21404",
//               color: "white",
//             }}
//           >
//             Close Box
//           </button>
//         </div>
//       )}
//     </>
//   );
// }

import React, { useState } from "react";
import "./styles.css";
import view from "../../../svg/view.svg";
import { useEffect } from "react";

import Modal from "react-modal";

Modal.setAppElement("#root");

export default function View({ file }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="">
      <img
        src={view}
        className="buttonTwo"
        onClick={toggleModal}
        style={{
          width: "64%",
          border: "none",
          padding: "4%",

          paddingTop: "6px",
          paddingBottom: "6px",

          paddingLeft: "17%",
          paddingRight: "17%",
        }}
      ></img>
      {/* <button >View</button> */}
      {isOpen && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            position: "fixed",
            height: "100vh",
            width: "100vw",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
            backgroundColor: "rgb(244, 247, 254,0.5)",
            zIndex: 99999,
          }}
        >
          {/* <div>My modal dialog.</div> */}
          <button
            onClick={toggleModal}
            className="hover-red"
            style={{
              backgroundColor: "white",
              color: "grey",
              borderRadius: "50%",
              marginLeft: "30%",
            }}
          >
            <h3>X</h3>
          </button>
          <img
            src={URL.createObjectURL(file)}
            style={{
              maxHeight: "60vh",
              borderRadius: "0%",
              objectFit: "cover",
            }}
          />
        </div>
      )}
    </div>
  );
}

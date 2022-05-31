import React from "react";
import "../styles/Social.module.css";
const PurpleHeading = ({ title, colour }) => {
  return (
    <h2
      className="purpleHeading"
      style={{
        fontSize: "34px",
        color: colour ? "white" : "#370C64",
        textAlign: "center",
        fontFamily: "Cambria",
        fontWeight: "700",
        marginTop: "50px",
      }}
    >
      {title}
    </h2>
  );
};

export default PurpleHeading;

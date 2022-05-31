import React from "react";

const DesignBubble = ({ colour, top, left, right, bottom }) => {
  return (
    <div className="position-relative">
      <div
        className="position-absolute"
        style={{
          width: "80px",
          height: "80px",
          borderRadius: "100%",
          background: colour,
          top: top && top,
          left: left && left,
          right: right && right,
          bottom: bottom && bottom,
        }}
      ></div>
    </div>
  );
};

export default DesignBubble;

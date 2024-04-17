import React from "react";

const LiquidColor = (props) => {
  return (
    <div
      className="color"
      style={{ backgroundColor: props.color, top: `${props.top}%` }}
    />
  );
};

export default LiquidColor;

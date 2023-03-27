import React from "react";

const Rect = (props) => {
  return (
    <div
      key={props.index}
      style={{
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        backgroundColor: "black",
        margin: "3px",
        transform: `translateY(-${props.val}px) translateX(${props.index + 3}px)`
      }}
    />
  );
};

export default Rect;

import React from "react";

const Boxes = (props) => {
  return (
    <div className="box">
      {props.boxes.map((box, i) => (
        <div
          key={i}
          style={{
            backgroundColor: box.color,
            height: `${box.dim}px`,
            width: `${box.dim}px`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Boxes;

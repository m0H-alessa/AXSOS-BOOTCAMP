import React, { useState } from "react";

const Form = (props) => {
  const [color, setColor] = useState("");
  const [dim, setDim] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.onNewBox(color, dim);
    setColor("");
    setDim("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="checkbox">
          <input
            type="text"
            placeholder="Color"
            onChange={(e) => setColor(e.target.value)}
            value={color}
          />
        </div>
        <div className="checkbox">
          <input
            type="number"
            placeholder="Dimention (px)"
            onChange={(e) => setDim(e.target.value)}
            value={dim}
          />
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default Form;

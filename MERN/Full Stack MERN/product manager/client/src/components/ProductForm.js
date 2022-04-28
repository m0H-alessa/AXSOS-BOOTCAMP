import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default ({ setRefatch }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [discription, setDiscription] = useState("");

  const valid = () => {
    if (title === "") {
      alert("title required");
      return false;
    }

    if (price === "") {
      alert("price required");
      return false;
    }

    if (discription === "") {
      alert("discription required");
      return false;
    }

    return true;
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (valid()) {
      axios
        .post("http://localhost:8000/api/products/new", {
          title,
          price,
          discription,
        })
        .then((res) => {
          setRefatch((prev) => !prev);
          setDiscription("");
          setPrice("");
          setTitle("");
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <p>
          <label>Title</label>
          <br />
          <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </p>
        <p>
          <label>Price</label>
          <br />
          <input
            type="text"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </p>
        <p>
          <label>Discription</label>
          <br />
          <input
            type="text"
            onChange={(e) => setDiscription(e.target.value)}
            value={discription}
          />
        </p>
        <input type="submit" />
      </form>
    </>
  );
};

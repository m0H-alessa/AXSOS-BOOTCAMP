import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Item from "../components/Item";
import axios from "axios";

const ItemDetails = () => {
  const [item, setItem] = useState([]);
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + params.id)
      .then((res) => {
        console.log("res.data", res.data);
        setItem(res.data);
      })
      .catch((err) => {
        console.log(err.response);
        navigate("/");
      });
  }, []);

  return !!item && !!item.length && <Item ProductItem={item[0]} />;
};

export default ItemDetails;

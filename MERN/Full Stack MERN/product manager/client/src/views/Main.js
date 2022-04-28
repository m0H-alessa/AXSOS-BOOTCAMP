import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductForm from "../components/ProductForm";
import List from "../components/List";

const Main = () => {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [refatch, setRefatch] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoaded(true);
      })
      .catch((err) => console.error(err));
  }, [refatch]);

  return (
    <div>
      <ProductForm setRefatch={setRefatch} />
      <hr />
      {loaded && <List products={products} name={"hashem"} />}
    </div>
  );
};

export default Main;

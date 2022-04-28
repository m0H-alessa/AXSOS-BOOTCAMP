import React from "react";
import { Link } from "react-router-dom";

const List = ({ products, name }) => {
  return (
    <ul>
      {products.length > 0 &&
        products.map((item, idx) => (
          <li key={idx}>
            <Link to={`/details/${item._id}`}>
              {item.title}, {item.price}, {item.discription}
            </Link>
          </li>
        ))}
    </ul>
  );
};

export default List;

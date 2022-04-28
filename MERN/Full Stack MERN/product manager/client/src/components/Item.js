import React, { useEffect, useState } from "react";
import { Button, Input } from "semantic-ui-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./item.css";

const Item = (props) => {
  const { ProductItem } = props;

  const [loading, setLoading] = useState(false);

  const nav = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    price: "",
    discription: "",
  });

  useEffect(() => {
    setFormData({
      title: ProductItem["title"],
      price: ProductItem["price"],
      discription: ProductItem["discription"],
    });
  }, [ProductItem]);

  const onEditClick = () => {
    setLoading(true);
    axios
      .put("http://localhost:8000/api/product/update/" + ProductItem["_id"], {
        title: formData.title,
        price: formData.price,
        discription: formData.discription,
      })
      .then((res) => {
        console.log("res", res);
        setLoading(false);
      })

      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const onDeleteClick = () => {
    axios
      .delete("http://localhost:8000/api/product/delete/" + ProductItem["_id"])
      .then((res) => {
        console.log("res", res);
        setLoading(false);
        nav("/");
      })

      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="item">
      <div className="main-view">
        <div className="row-view">
          <h3 className="key-label">title:</h3>
          <Input
            value={formData.title}
            onChange={(e) =>
              setFormData({ ...formData, title: e.target.value })
            }
            placeholder="Enter title"
          />
        </div>

        <div className="row-view">
          <h3 className="key-label">price:</h3>

          <Input
            value={formData.price}
            onChange={(e) =>
              setFormData({ ...formData, price: e.target.value })
            }
            placeholder="Enter price"
          />
        </div>

        <div className="row-view">
          <h3 className="key-label">discription:</h3>

          <Input
            value={formData.discription}
            onChange={(e) =>
              setFormData({ ...formData, discription: e.target.value })
            }
            placeholder="Enter discription"
          />
        </div>

        <div className="row-view">
          <Button loading={loading} primary onClick={onEditClick}>
            Edit
          </Button>

          <Button loading={loading} color={"red"} onClick={onDeleteClick}>
            Delete
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Item;

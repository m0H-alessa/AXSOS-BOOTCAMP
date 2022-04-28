const { Product } = require("../models/product.model");

module.exports.findAllProducts = (request, response) => {
  Product.find({})
    .then((products) => response.json(products))
    .catch((err) => response.json(err));
};
// The CRUD ORP.

module.exports.createProduct = (request, response) => {
  const { title, price, discription } = request.body;
  Product.create({
    title,
    price,
    discription,
  })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};

module.exports.findProduct = (request, response) => {
  const { id } = request.params;
  Product.find({ _id: id })
    .then((product) => response.json(product))
    .catch((err) => response.status(400).json(err));
};

module.exports.updateProduct = (request, response) => {
  console.log("request", request.body);
  Product.findOneAndUpdate({ _id: request.params.id }, request.body, {
    new: true,
  })
    .then((updatedProduct) => response.json(updatedProduct))
    .catch((err) => response.json(err));
};

module.exports.deleteProduct = (request, response) => {
  Product.deleteOne({ _id: request.params.id })
    .then((deleteConfirmation) => response.json(deleteConfirmation))
    .catch((err) => response.json(err));
};

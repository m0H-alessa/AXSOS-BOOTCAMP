const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
  app.get("/api/products", ProductController.findAllProducts);
  app.post("/api/products/new", ProductController.createProduct);
  app.get("/api/product/:id", ProductController.findProduct);
  app.put("/api/product/update/:id", ProductController.updateProduct);
  app.delete("/api/product/delete/:id", ProductController.deleteProduct);
};

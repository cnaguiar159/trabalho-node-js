const { ProductService } = require("../services/product-services");

class ProductsController {
  static async createProducts(req, res) {
    try {
      const products = await ProductService.createProduct({
        ...req.body,
        owner: req.user._id,
      });
      return res.status(201).send({ _id: products._id });
    } catch (e) {
      return res.status(400).send({ error: e.message });
    }
  }

  static async getProducts(req, res) {
    try {
      const product = await ProductService.getProducts(req.user);
      return res.send(product);
    } catch (e) {
      return res.status(400).send();
    }
  }
}

module.exports = {
  ProductsController,
};

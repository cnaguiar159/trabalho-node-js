const { Product } = require("../models/Product");

class ProductService {
  static async createProduct(data) {
    try {
      const product = new Product(data);
      await product.save();
      return product;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  static async deleteProduct(id) {
    try {
      const product = await Product.findByIdAndDelete(id);
      return product;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  static async getProducts(user) {
    try {
      await user
        .populate({
          path: "products",
        })
        .execPopulate();

      return user.products;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

module.exports = {
  ProductService,
};

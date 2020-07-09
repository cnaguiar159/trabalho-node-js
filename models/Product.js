const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  
  quantity: {
    type: Number,
    required: true,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

});

const Product = mongoose.model("Product", productSchema);

module.exports = {
  Product,
};

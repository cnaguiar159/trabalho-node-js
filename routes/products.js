const express = require("express");
const { auth } = require("../controllers/auth-controller");

const { ProductsController } = require("../controllers/product-controller");

const route = express.Router();

route.get("/", auth, ProductsController.getProducts);
route.post("/", auth, ProductsController.createProducts);

module.exports = route;

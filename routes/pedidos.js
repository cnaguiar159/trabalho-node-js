const express = require("express");
const { auth } = require("../controllers/auth-controller");

const { PedidoController } = require("../controllers/pedido-controller");

const route = express.Router();

route.get("/", auth, PedidoController.getPedido);
route.post("/", auth, PedidoController.createPedido);

module.exports = route;

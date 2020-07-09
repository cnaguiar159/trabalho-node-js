const { PedidoService } = require("../services/pedido-services");

class PedidoController {
  static async createProducts(req, res) {
    try {
      const pedidos = await PedidoService.createPedido({
        ...req.body,
        owner: req.user._id,
      });
      return res.status(201).send({ _id: pedidos._id });
    } catch (e) {
      return res.status(400).send({ error: e.message });
    }
  }

  static async getPedidos(req, res) {
    try {
      const product = await PedidoService.getPedido(req.user);
      return res.send(product);
    } catch (e) {
      return res.status(400).send();
    }
  }
}

module.exports = {
  PedidoController,
};

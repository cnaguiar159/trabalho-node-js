const { Pedido } = require("../models/Pedido");

class PedidoService {
  static async createPedido(data) {
    try {
      const pedido = new Pedido(data);
      await pedido.save();
      return pedido;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  static async deletePedido(id) {
    try {
      const pedido = await Pedido.findByIdAndDelete(id);
      return pedido;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  static async getPedido(user) {
    try {
      await user
        .populate({
          path: "pedidos",
        })
        .execPopulate();

      return user.pedidos;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

module.exports = {
  PedidoService,
};

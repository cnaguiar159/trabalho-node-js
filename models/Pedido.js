const mongoose = require("mongoose");

const pedidoSchema = new mongoose.Schema(
  {
    pedidoName: {
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
  },
  {
    timestamps: true,
  }
);

const Pedido = mongoose.model("Pedido", pedidoSchema);

module.exports = {
  Pedido,
};

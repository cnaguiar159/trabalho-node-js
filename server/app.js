const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.use(express.json());

app.use("/api/users", require("../routes/users"));
app.use("/api/pedidos", require("../routes/pedidos"));

module.exports = { app };

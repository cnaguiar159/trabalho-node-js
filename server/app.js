const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();

app.use(cookieParser());

app.use(express.json());

app.use("/api/users", require("../routes/users"));
app.use("/api/products", require("../routes/products"));

module.exports = { app };

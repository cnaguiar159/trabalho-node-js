require("dotenv").config();
require("../db/mongoose");

const { normalizePort } = require("../utils/adapt-port");

const { app } = require("./app");

const port = normalizePort(process.env.PORT || "5000");

app.listen(port, () => console.log("server running"));

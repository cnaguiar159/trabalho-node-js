const jwt = require("jsonwebtoken");
const { User } = require("../models/User");

async function auth(req, res, next) {
  try {
    const token = req.cookies.access_token;
    const decoded = jwt.verify(token, "secrect_trabalho");
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) throw new Error();

    req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
}

module.exports = {
  auth,
};

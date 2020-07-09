const express = require("express");
const router = express.Router();

const { auth } = require("../controllers/auth-controller");

const { UsersController } = require("../controllers/users-controller");

router.post("/signup", UsersController.createUser);
router.post("/login", UsersController.loginUser);
router.get("/logout", auth, UsersController.logoutUser);
router.get("/", auth, UsersController.getUser);

module.exports = router;

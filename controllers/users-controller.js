const { UserService } = require("../services/user-services");

class UsersController {
  static async createUser(req, res) {
    try {
      const user = await UserService.createUser(req.body);
      return res.status(201).send(user);
    } catch (e) {
      return res.status(400).send({ error: e.message });
    }
  }

  static async loginUser(req, res) {
    try {
      const user = await UserService.loginUser(req.body);

      res.cookie("access_token", user.token, {
        maxAge: 10000000,
        httpOnly: true,
      });
      return res.send({
        _id: user.user._id,
        email: user.user.email,
        token: user.token,
      });
    } catch (e) {
      console.log(e.message);
      res.status(401).send({ error: e.message });
    }
  }

  static async logoutUser(req, res) {
    try {
      await UserService.logoutUser(req.user, req.token);
      res.clearCookie("access_token");
      res.status(200).send();
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  }

  static async deleteUser(req, res) {
    try {
      const user = await UserService.deleteUser(req.user._id);
      res.status(204).send();
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  }

  static async getUser(req, res) {
    try {
      res.send(req.user);
    } catch (e) {
      res.send(e.message);
    }
  }

  static async updateUser(req, res) {
    try {
      const user = await UserService.updateUser(req.body);
      res.status(200).send(user);
    } catch (e) {
      res.status(400).send({ error: e.message });
    }
  }
}

module.exports = {
  UsersController,
};

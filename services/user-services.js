const { User } = require("../models/User");

class UserService {
  static async createUser(data) {
    try {
      const user = new User(data);
      await user.save();
      return user;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  static async deleteUser(id) {
    try {
      const user = await User.findByIdAndDelete(id);

      return user;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  static async loginUser(data) {
    const { email, password } = data;
    try {
      const user = await User.findByCredentials(email, password);
      console.log(user);
      return user;
    } catch (e) {
      console.log(e);
      throw new Error(e.message);
    }
  }

  static async logoutUser(user, tokenUser) {
    try {
      user.tokens = user.tokens.filter((token) => token.token !== tokenUser);
      await user.save();
      console.log({ user });

      return user;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  static async getUser(id) {
    try {
      const user = await User.findById(id);
      return user;
    } catch (e) {
      throw new Error(e.message);
    }
  }

  static async updateUser(id, data) {
    const possibleUpdates = ["password"];
    const updates = Object.keys(data);
    const isValid = updates.every((update) => possibleUpdates.includes(update));
    if (!isValid) throw new Error("You can't change this fields");
    try {
      const user = await User.findById(id);
      updates.map((update) => (user[update] = content[update]));
      await user.save();
      return user;
    } catch (e) {
      throw new Error(e.message);
    }
  }
}

module.exports = {
  UserService,
};

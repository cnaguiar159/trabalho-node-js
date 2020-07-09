const bcrypt = require("bcrypt");

async function encryptPassword(password) {
  return await bcrypt.hash(password, 8);
}

async function comparePassword(password, receivedFromClient) {
  return await bcrypt.compare(password, receivedFromClient);
}

module.exports = {
  encryptPassword,
  comparePassword,
};

const mongoose = require("mongoose");
const {
  validateEmail,
  validatePassword,
  validateGender,
  validateName,
  validateCPF,
} = require("../utils/validate-data");
const { encryptPassword, comparePassword } = require("../utils/encrypt-data");
const jwt = require("jsonwebtoken");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: validateEmail,
      message: (props) => `${props.value} invalid email`,
    },
  },

  cpf: {
    type: String,
    //unique: true,
    required: true,
    validate: {
      validator: validateCPF,
      message: (props) => ` ${props.value} invalid cpf`,
    },
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
    validate: {
      validator: validateName,
      message: (props) => `${props.value} is not a valid name`,
    },
  },

  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

userSchema.pre("save", async function (next) {
  const user = this;
  if (user.isModified("password")) {
    user.password = await encryptPassword(user.password);
  }
  next();
});

userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("User not found");
  const isMatch = await comparePassword(password, user.password);

  if (!isMatch) throw new Error("Unable to login");

  const token = await user.generateAuthToken();

  return { user, token };
};

userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user.id.toString() }, "secret_trabalho");
  user.tokens = user.tokens.concat({ token });
  await user.save();

  return token;
};

userSchema.virtual("products", {
  ref: "Product",
  localField: "_id",
  foreignField: "owner",
});
const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};

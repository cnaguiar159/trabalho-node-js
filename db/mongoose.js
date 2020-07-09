const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://cluster:cluster123@cluster0.jpcjt.mongodb.net/trabalho?retryWrites=true&w=majority",
  {
    //useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
  }
);

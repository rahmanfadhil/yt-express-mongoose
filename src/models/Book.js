const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  title: String,
  author: String
});

module.exports = mongoose.model("Book", schema);

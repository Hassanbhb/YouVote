const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Chart = Schema({
  title: String,
  labels: [String],
  data: [Number],
  voters: [String],
  creator: String
});

module.exports = mongoose.model("Chart", Chart);

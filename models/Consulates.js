const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const consulateSchema = new Schema({
  country: { type: String, required: true },
  name: { type: String, required: true },
  address: String,
  cityState: { type: Date, default: Date.now }
});

const Consulate = mongoose.model("Consulate", consulateSchema);

module.exports = Consulate;

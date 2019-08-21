const mongoose = require("mongoose");

const ConsulateSchema = new mongoose.Schema({
  consulatedata: [
    { country: String, name: String, address: String}
  ]
});

module.exports = Consulate = mongoose.model("consulate", ConsulateSchema);

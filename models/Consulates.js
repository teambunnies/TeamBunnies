const mongoose = require("mongoose");

const ConsulateSchema = new mongoose.Schema({
  consulates: [
    { db_area: String, db_area_name: String, lat: String, lng: String }
  ]
});

module.exports = Consulate = mongoose.model("consulate", ConsulateSchema);

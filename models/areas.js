const mongoose = require("mongoose");

const AreaSchema = new mongoose.Schema({
  citydata: [
    { db_area: String, db_area_name: String, lat: String, lng: String }
  ]
});

module.exports = Area = mongoose.model("area", AreaSchema);

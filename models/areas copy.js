const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  citydata: [
    { db_area: String, db_area_name: String, lat: String, lng: String }
  ]
});

module.exports = Experience = mongoose.model("experience", ExperienceSchema);

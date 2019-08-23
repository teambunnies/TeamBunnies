const mongoose = require("mongoose");

const ExperienceSchema = new mongoose.Schema({
  experiencedata: [
    { name: String, title: String, img: String, address: String, admission: String, description: String }
  ]
});

module.exports = Experience = mongoose.model("experience", ExperienceSchema);

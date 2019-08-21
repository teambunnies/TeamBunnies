const mongoose = require("mongoose");

const FoodSchema = new mongoose.Schema({
  fooddata: [
    { name: String, title: String, img: String, description: String }
  ]
});

module.exports = Food = mongoose.model("food", FoodSchema);

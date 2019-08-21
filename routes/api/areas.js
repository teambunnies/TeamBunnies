const express = require("express");
const router = express.Router();

const Area = require("../../models/areas");

router.get("/", async (req, res) => {
  try {
    const area = await Area.find({});

    res.json(area[0].citydata);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {
  // Check in Console what is being received
  console.log(req.body);


  try {
   const area = new Area({
      citydata: req.body
      
    });
    console.log(area)
    // Save the user
    await area.save();

    res.json(area);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;

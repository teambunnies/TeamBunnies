const express = require("express");
const router = express.Router();

const ChicagoName = require("../../models/chicagoName");

router.get("/", async (req, res) => {
 
  try {
    const chicagoNames = await ChicagoName.find()
    res.json(chicagoNames);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

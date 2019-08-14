const express = require("express");
const router = express.Router();
const ChicagoName = require("../../models/chicagoName");

router.get("/", async (req, res) => {
 
  try {
    const chicagoname = await ChicagoName.find({})
 
    res.json(chicagoname);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

router.post("/", async (req, res) => {

  const {
    firstnames,
    lastnames
  } = req.body;

  const chicagoNameFields = {};
  if (firstnames) {
    // We have to split because data will be coming in as string(csv)
    chicagoNameFields.firstnames = firstnames.split(",").map(firstname => firstname.trim());
  }
  if (lastnames) {
    // We have to split because data will be coming in as string(csv)
    chicagoNameFields.lastnames = lastnames.split(",").map(lastname => lastname.trim());
  }
  
    
    try {
      
      chicagoname = new ChicagoName(ChicagoNameFields);

      await chicagoname.save();
      res.json(chicagoname);
     
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;

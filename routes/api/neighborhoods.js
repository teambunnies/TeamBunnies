const express = require("express");
const router = express.Router();

const Neighborhood = require("../../models/neighborhoods");

router.post(
    "/",
    async (req, res) => {
      // Check in Console what is being received
        console.log(req.body);
     
    
      
      const { name, email, password } = req.body;
  
      try {
      
        neighborhood = new Neighborhood({
          place,
          lat,
          lng
        });
  
       

        // Save the user
        await neighborhood.save();
  
  
     
      } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
      }
  
    }
  );
  
  module.exports = router;
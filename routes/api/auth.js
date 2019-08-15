// These are our PROTECTED routes, cannot be accessed without Authenticating
const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

const User = require('../../models/users')


// @route   GET api/auth
// @desc    Test route
// @access  Public

    //The , auth, is what makes this protected
router.get('/', auth, async (req, res) => {
  console.log("hit")
    try {
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)
    } catch(err) {
        console.error(err.message)
        res.status(500).send('Server Error')
    }
})

// @route   POST api/auth
// @desc    Authenticate User and Get Token
// @access  Public
router.post(
    "/",
    [
      check("email", "Please include a valid email").isEmail(),
      check(
        "password",
        "Password is required"
      ).exists()
    ],
    async (req, res) => {
      // Check in Console what is being received
        console.log(req.body);
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      const { email, password } = req.body;
  
      try {
        // See if User exists
        let user = await User.findOne({ email });
  
        if (!user) {
          return res
            .status(400)
            .json({ errors: [{ msg: "Invalid Credentials" }] });
        }

        //Match Email and Password - bycrpt compare will check 
        //the plain text entered against the encrypted one stored on db
        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res
              .status(400)
              .json({ errors: [{ msg: "Invalid Credentials" }] });
          }
  
        // Return jsonwebtoken
        const payload = {
          user: {
            id: user.id
          }
        };
  
        jwt.sign(
            payload, 
            config.get("jwtSecret"),
            { expiresIn: 3600000 }, 
            (err, token) => {
                if(err) throw err;
                res.json({ token })
            });
      } catch (err) {
        console.error(err.message);
        res.status(500).send("server error");
      }
  
    }
  );
  

module.exports = router;
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const { check, validationResult } = require("express-validator");

const User = require("../../models/users");

// @route   GET api/users
// @desc    Register
// @access  Public
router.post(
  "/",
  [
    check("name", "Name is required")
      .not()
      .isEmpty(),
    check("email", "Please include a valid email").isEmail(),
    check(
      "password",
      "Please enter a password with 8 or more characters"
    ).isLength({ min: 8 })
  ],
  async (req, res) => {
    // Check in Console what is being received
    //   console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      // See if User exists
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: "User already exists" }] });
      }

      
      user = new User({
        name,
        email,
        password
      });

      // Encrypt Password using bcrypt
      // Salt will do the hashing with genSalt - 10 is reccomended
      const salt = await bcrypt.genSalt(10);

      //creates a hash and saves it to this user
      user.password = await bcrypt.hash(password, salt);

      // Save the user
      await user.save();

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

const router = require("express").Router();
const userRoutes = require("./users");
const igRoutes = require("./photos");
// User routes
router.use("/users", userRoutes);
// router.use("/photos", igRoutes);
module.exports = router;

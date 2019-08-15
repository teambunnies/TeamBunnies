const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const cnRoutes = require("./chicagoname");
// User routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/chicagoname", cnRoutes);
module.exports = router;

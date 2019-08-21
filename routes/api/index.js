const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const cnRoutes = require("./chicagoname");
const areaRoutes = require("./areas");
// User routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/chicagoname", cnRoutes);
router.use("/areas", areaRoutes);
module.exports = router;

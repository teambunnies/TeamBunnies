const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const cnRoutes = require("./chicagoName");

// User routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/chicagoName", cnRoutes);


module.exports = router;

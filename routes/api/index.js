const router = require("express").Router();
const userRoutes = require("./users");
const authRoutes = require("./auth");
const cnRoutes = require("./chicagoname");
const neighborhoodRoutes = require("./neighborhood");
// User routes
router.use("/users", userRoutes);
router.use("/auth", authRoutes);
router.use("/chicagoname", cnRoutes);
router.use("/neighborhood", neighborhoodRoutes);
module.exports = router;

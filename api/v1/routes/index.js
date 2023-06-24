const router = require("express").Router();

const { userAuthentication, adminAuthentication } = require("../../../middleware/authentication");
const authRoutes = require("./auth");
const userRoutes = require("./user");
const adminRoutes = require("./admin");

router.use("/auth", authRoutes);
router.use("/users", userAuthentication, userRoutes);
router.use("/admins", adminAuthentication, adminRoutes);

module.exports = router;

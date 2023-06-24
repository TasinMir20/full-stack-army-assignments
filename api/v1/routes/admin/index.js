const adminRouter = require("express").Router();

const { getAdminData, updateAdminData } = require("../../controllers/admin");

adminRouter.get("/:adminId", getAdminData);
adminRouter.patch("/:adminId", updateAdminData);

module.exports = adminRouter;

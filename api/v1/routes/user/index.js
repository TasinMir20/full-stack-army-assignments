const userRouter = require("express").Router();

const { getUserData, updateUserData } = require("../../controllers/user");

userRouter.get("/:userId", getUserData);
userRouter.patch("/:userId", updateUserData);

module.exports = userRouter;

const authRouter = require("express").Router();

const { login, register, logOut } = require("../../controllers/auth");

authRouter.post("/login", login);
authRouter.post("/register", register);
authRouter.delete("/logout", logOut);

module.exports = authRouter;

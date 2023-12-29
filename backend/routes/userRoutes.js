const userRouter = require("express").Router();
const { signupUser, loginUser, logoutUser } = require("../controllers/userControllers");

userRouter.post("/signup", signupUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);

module.exports = userRouter;
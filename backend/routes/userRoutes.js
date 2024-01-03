const userRouter = require("express").Router();
const { signupUser, loginUser, logoutUser, followUnfollowUser } = require("../controllers/userControllers");
const authUser = require("../middleware/authUser");

userRouter.post("/signup", signupUser);
userRouter.post("/login", loginUser);
userRouter.post("/logout", logoutUser);
userRouter.put("/follow/:id", authUser, followUnfollowUser);

module.exports = userRouter;
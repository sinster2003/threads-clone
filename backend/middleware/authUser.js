const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../utils/config");
const User = require("../models/users");

const authUser = async (req, res, next) => {
  /* verify the token and authorize the user if token valid */
    const cookie = req.cookies;

    const user = jwt.verify(cookie.jwt, JWT_SECRET);

    // select without password
    const isExistingUser = await User.findById(user.userId).select("-password");

    req.user = isExistingUser;

    next();
};

module.exports = authUser;

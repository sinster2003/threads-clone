const User = require("../models/users");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");

const signupUser = async (req, res) => {
  try {
    const { name, email, username, password } = req.body;

    const isExistingUser = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (isExistingUser) {
      return res
        .status(400)
        .json({ message: "User already exists! Please Log in" });
    }

    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const user = new User({
      name,
      username,
      email,
      password: hashedPassword,
    });

    /* save user in database */

    await user.save();

    if(user) {

        /* generate jwt token */
        generateToken(user._id, res);

        return res.status(201).json({
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email
        });
    }
    else {
        return res.status(400).json({error: "Invalid user credentials!"})
    }
  } 
  catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const isExistingUser = await User.findOne({username});

      const isPasswordEqual = await bcrypt.compare(password, isExistingUser?.password || "");
        
      if (!isExistingUser || !isPasswordEqual) {
        return res
          .status(404)
          .json({ message: "Invalid username or password!!" });
      }
  
      /* generate jwt token */
      generateToken(isExistingUser._id, res);
  
      return res.status(200).json({
          _id: isExistingUser._id,
          name: isExistingUser.name,
          username: isExistingUser.username,
          email: isExistingUser.email
      });
    } 
    catch (error) {
      console.log(error);
      res.status(500).json({ error: error.message });
    }
  };

const logoutUser = (req, res) => {
    try{
        res.cookie("jwt", "", {
            maxAge: 1
        })
        res.status(200).json({message: "User logged out successfully!!"});
    }
    catch(error) {
        console.log(error);
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
  signupUser,
  loginUser,
  logoutUser
};

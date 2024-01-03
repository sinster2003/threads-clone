const User = require("../models/users");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToken");
const jwt = require("jsonwebtoken");
const { signupObject, loginObject } = require("../utils/types/zod");

const signupUser = async (req, res) => {
  const { name, email, username, password } = req.body;

  /* input validation */
  signupObject.parse({
    name,
    username,
    email,
    password,
  });

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

  if (user) {
    /* generate jwt token */
    generateToken(user._id, res);

    return res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    });
  } else {
    return res.status(400).json({ error: "Invalid user credentials!" });
  }
};

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  /* input validation */
  loginObject.parse({
    username,
    password,
  });

  const isExistingUser = await User.findOne({ username });

  const isPasswordEqual = await bcrypt.compare(
    password,
    isExistingUser?.password || ""
  );

  if (!isExistingUser || !isPasswordEqual) {
    return res.status(404).json({ message: "Invalid username or password!!" });
  }

  /* generate jwt token */
  generateToken(isExistingUser._id, res);

  return res.status(200).json({
    _id: isExistingUser._id,
    name: isExistingUser.name,
    username: isExistingUser.username,
    email: isExistingUser.email,
  });
};

const logoutUser = (req, res) => {
  res.cookie("jwt", "", {
    maxAge: 1,
  });
  res.status(200).json({ message: "User logged out successfully!!" });
};

const followUnfollowUser = async (req, res) => {
  const id = req.params.id; // user to be followed

  const userToBeFollowed = await User.findById(id);

  const userWhoFollows = req.user; // user who follows

  if (!userToBeFollowed || !userWhoFollows) {
    return res.status(404).json({ message: "User not found" });
  }

  if (userWhoFollows._id.toString() === id) {
    return res
      .status(400)
      .json({ message: "You cannot follow or unfollow yourself" });
  }

  const isFollowing = userToBeFollowed.followers.includes(userWhoFollows._id);

  if (isFollowing) {
    
    // unfollow user
    await User.findByIdAndUpdate(userWhoFollows._id.toString(), {
      $pull: { following: id },
    }); // user who follows

    await User.findByIdAndUpdate(id, {
      $pull: { followers: userWhoFollows._id.toString() },
    }); // followed user

    res
      .status(200)
      .json({ message: `You have unfollowed ${userToBeFollowed.username}` });
  } else {

    // follow user
    await User.findByIdAndUpdate(userWhoFollows._id.toString(), {
      $push: { following: id },
    });

    await User.findByIdAndUpdate(id, {
      $push: { followers: userWhoFollows._id.toString() },
    });

    res
      .status(200)
      .json({ message: `You have followed ${userToBeFollowed.username}` });
  }
};

const updateUser = async (req,res) => {

  const userTobeUpdated = req.user;
  const { name, username, email, password, bio, profilePic } = req.body;

  const userId = userTobeUpdated?._id.toString();

  if(req.params.id !== userId) {
    return res.status(404).json({message: "You cannot update other's profile"});
  }

  const user = await User.findById(userId);

  if (!user) {
    return res.status(404).json({message: "User not found"});
  }

  if(password) {
    const saltRounds = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    user.password = hashedPassword;
  }  

  user.name = name || user.name;
  user.username = username || user.username;
  user.email = email || user.email;
  user.profilePic = profilePic || user.profilePic;
  user.bio = bio || user.bio;

  await user.save();

  res.status(200).json({message: "User profile updated successfully"});
}

const getUserProfile = async (req,res) => {

  const { username } = req.params;

  const getUser = await User.findOne({username}).select("-password").select("-updatedAt");

  if(!getUser) {
    return res.status(404).json({message: "User not found"});
  }

  res.status(200).json(getUser);
}

module.exports = {
  signupUser,
  loginUser,
  logoutUser,
  followUnfollowUser,
  updateUser,
  getUserProfile
};

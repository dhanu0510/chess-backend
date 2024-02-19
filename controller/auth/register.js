const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// models
const User = require("../../models/userModel");

const postRegister = async (req, res) => {
  try {
    const { username, password } = req.body;

    console.log("user register request came");
    // check if user exists
    // User.findByUsername(username).then((user) => {
    //   if (user) {
    //     return res.status(409).send("Username already in use.");
    //   }
    // });

    // encrypt password
    const encryptedPassword = await bcrypt.hash(password, 10);

    // create user document and save in database
    const newUser = new User({
      username,
      password: encryptedPassword,
    });
    return User.create(newUser, res);
  } catch (err) {
    return res.status(500).send("Error occured. Please try again");
  }
};

module.exports = postRegister;

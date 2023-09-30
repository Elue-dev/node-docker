const User = require("../models/user.model");
const bcrypt = require("bcryptjs");

exports.register = async function (req, res) {
  try {
    const { username, email, password } = req.body;

    const passwordHash = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      email,
      password: passwordHash,
    });

    const { password: userPasword, ...otherInfo } = user._doc;

    res.status(201).json(otherInfo);
  } catch (error) {
    res.status(500).json(error);
  }
};

exports.signin = async function (req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) return res.status(400).json("Invalid credentials provided");

    const isPasswordCorrect = bcrypt.compareSync(password, user.password);

    if (!isPasswordCorrect)
      return res.status(400).json("Invalid credentials provided");

    const { password: userPasword, ...otherInfo } = user._doc;
    res.status(200).json(otherInfo);
  } catch (error) {
    res.status(500).json(error);
  }
};

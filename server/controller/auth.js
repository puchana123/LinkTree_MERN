const User = require("../models/user");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
  const { handle, email, password, category } = req.body;
  console.log(req.body);

  try {
    const defaultLink = { url: "http://google.com", title: "google", icon: "" };
    const user = await User.userModel.create({
      handle,
      email,
      password,
      category,
      links: [defaultLink],
    });

    const token = jwt.sign({ email: email }, process.env.SECRET_JWT);

    console.log(user);
    return res.json({
      message: "user created",
      status: "success",
      token: token,
      id: user._id,
    });
  } catch (err) {
    if (err.message.startsWith("E11000")) {
      return res.json({
        message: "Try difference handle or email",
        status: "error",
      });
    }
    return res.json({
      message: err.message,
      status: "error",
    });
  }
};

const loginUser = (req, res) => {
  const { email, password } = req.body;
  try {
    const user = User.userModel.findOne({ email: email, password: password });

    if (!user) {
      return res.json({ status: "error", error: "Invalid credentials" });
    }

    const token = jwt.sign({ email: email }, process.env.SECRET_JWT);

    return res.json({
      message: "user found",
      status: "success",
      token: token,
      id: user._id,
    });
  } catch (err) {
    return res.json({
      message: err.message,
      status: "not found",
    });
  }
};

module.exports = { registerUser, loginUser };

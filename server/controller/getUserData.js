const User = require("../models/user");

const getUserData = async (req, res) => {
  const handle = req.params.handle;
  try {
    const user = await User.userModel.findOne({ handle: handle });
    console.log(user);

    const userData = {
      name: user.handle,
      avatar: user.avatar,
      bio: user.bio,
      links: user.links,
    };
    return res.json({ message: "Found data", userData, status: "success" });
  } catch (err) {
    return res.json({ error: err.message, status: "error" });
  }
};

const getUserSocials = async (req, res) => {
  const handle = req.params.handle;
  try {
    console.log(handle);
    const user = await User.userModel.findOne({ handle: handle });
    const socials = user.socialMedia;
    return res.json({ message: "found data", socials, status: "success" });
  } catch (err) {
    return res.json({ message: err.message, status: "error" });
  }
};

module.exports = { getUserData, getUserSocials };

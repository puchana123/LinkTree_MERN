const User = require("../models/user");

const getUserData = async (req, res) => {
  const handle = req.params.handle;
  try {
    const user = await User.userModel.findOne({ handle: handle });
    const socials = user.socialMedia;
    console.log(user);

    const userData = {
      name: user.name,
      avatar: user.avatar,
      bio: user.bio,
      links: user.links,
    };
    return res.json({
      message: "Found data",
      userData,
      socials,
      status: "success",
    });
  } catch (err) {
    return res.json({ error: err.message, status: "error" });
  }
};

module.exports = { getUserData };

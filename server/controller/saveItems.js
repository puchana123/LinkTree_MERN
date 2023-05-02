const jwt_decode = require("jwt-decode");
const { userModel } = require("../models/user");

const saveSocials = async (req, res) => {
  const { tokenMail, socials } = req.body;
  console.log(req.body);
  try {
    const decodedTokenMail = jwt_decode(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;
    console.log(email);

    const user = await userModel.findOne({ email: email });
    console.log(user);
    user.socialMedia = socials;
    user.save();

    return res.json({ message: "saved", status: "success" });
  } catch (err) {
    return res.json({ error: err.message, status: "error" });
  }
};

const saveProfile = async (req, res) => {
  const { tokenMail, name, bio, avatar } = req.body;
  console.log(req.body);
  try {
    const decodedTokenMail = jwt_decode(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;

    const user = await userModel.findOne({ email: email });

    user.name = name;
    user.bio = bio;
    user.avatar = avatar;
    user.save();

    return res.json({ message: "saved", status: "success" });
  } catch (err) {
    return res.json({ error: err.message, status: "error" });
  }
};

const saveLinks = async (req, res) => {
  const { tokenMail, links } = req.body;

  try {
    const decodedTokenMail = jwt_decode(tokenMail, process.env.SECRET_JWT);
    const email = decodedTokenMail.email;

    const user = await userModel.findOne({ email: email });
    const newLinks = links.map((link) => ({
      url: link.link.url,
      title: link.link.title,
      icon:
        link.link.icon ||
        "https://cdn.pixabay.com/photo/2016/11/30/17/10/web-1873373_960_720.png",
    }));
    user.links = newLinks;
    await user.save();

    return res.json({ message: "saved", status: "success" });
  } catch (err) {
    return res.json({ error: err.message, status: "error" });
  }
};

module.exports = { saveSocials, saveProfile, saveLinks };

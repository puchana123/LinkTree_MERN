const mongoose = require("mongoose");
const { model, Schema } = mongoose;

const User = new Schema(
  {
    name: { type: String },
    bio: { type: String, default: "Hello let's edit bio description!!" },
    email: { type: String, require: true, unique: true },
    avatar: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2014/04/03/11/47/avatar-312160_960_720.png",
    },
    password: { type: String, require: true },
    role: {
      type: String,
      enum: ["Creator", "Brand", "Agency", "admin"],
      default: "Creator",
    },
    handle: { type: String, require: true, unique: true },
    links: [
      {
        url: { type: String },
        title: { type: String },
        icon: { type: String },
      },
    ],
    socialMedia: {
      facebook: { type: String },
      twitter: { type: String },
      instagram: { type: String },
      youtube: { type: String },
      linkedin: { type: String },
      github: { type: String },
    },
  },
  { collection: "user-data-linktree" }
);

const userModel = model("UserData", User);

module.exports = { userModel };

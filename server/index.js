const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const { registerUser, loginUser } = require("./controller/auth");
const dashBoardData = require("./controller/dashBoardData");
const { getUserData, getUserSocials } = require("./controller/getUserData");

require("dotenv").config();

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://127.0.0.1:27017/LinkTree")
  .then(() => console.log("Database Connected!"))
  .catch((err) => console.log(err.message));

app.get("/", (req, res) => {
  res.send(`Sever is running on port ${port}`);
});

app.post("/api/register", registerUser);

app.post("/api/login", loginUser);

app.post("/api/dashboard", dashBoardData);

app.get("/get/:handle", getUserData);

app.get("/get/socials/:handle", getUserSocials);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});

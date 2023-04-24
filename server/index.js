const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello");
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Sever is running on port ${port}`);
});

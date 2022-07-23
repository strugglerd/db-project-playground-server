const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 6969;

const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.json({
    status: "ok",
  });
});

app.listen(PORT, function () {
  console.log(process.env.test_msg);
  console.log(`app live at http://localhost:${PORT}`);
});

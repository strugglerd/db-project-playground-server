const express = require("express");
const cors = require("cors");
const app = express();

// Import Routes
const create = require("./Routes/create");
const users = require("./Routes/users");

// middlewares
app.use(express.json()); // for parsing requests body as json
app.use(cors()); // accept CORS requests

// Home Route
app.get("/", function (req, res) {
  res.json({
    status: "ok",
  });
});

// Use Routes
app.use("/create", create);
app.use("/users", users);

module.exports = app;

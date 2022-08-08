const express = require("express");
const router = express.Router();

// import controller
const { createUser } = require("../Controller/users");

// use controller
router.post("/", createUser);

module.exports = router;

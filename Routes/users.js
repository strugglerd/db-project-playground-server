const express = require("express");
const router = express.Router();

// import controller
const { getAllUsers } = require("../Controller/users");

// use controller
router.get("/", getAllUsers);

module.exports = router;

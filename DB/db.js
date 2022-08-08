const mysql = require("mysql2");

const db = mysql.createConnection({
  user: "sang",
  host: "localhost",
  password: "password",
  database: "user_schema",
});

module.exports = db;

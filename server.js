const dotenv = require("dotenv");
dotenv.config();
const PORT = process.env.PORT || 6969;

const express = require("express");
const app = express();
app.use(express.json()); // for parsing requests body as json

const cors = require("cors");
app.use(cors()); // accept CORS requests

const mysql = require("mysql2");
const db = mysql.createConnection({
  user: "sang",
  host: "localhost",
  password: "password",
  database: "user_schema",
});

app.get("/", function (req, res) {
  res.json({
    status: "ok",
  });
});

app.post("/create", function (req, res) {
  console.log("Post request detected with body: ", req.body);
  const name = req.body.name;
  const age = req.body.age;
  const position = req.body.position;
  const email = req.body.email;

  db.query(
    "INSERT INTO users (name,age,position,email) VALUES (?,?,?,?)",
    [name, age, position, email],
    (err, result) => {
      if (err) console.log(err);
      else {
        res.status(200).send("Values Inserted");
      }
    }
  );
});

app.get("/users", function (req, res) {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) console.log(err);
    else {
      res.status(200).send(result);
    }
  });
});

app.listen(PORT, function () {
  console.log(process.env.test_msg);
  console.log(`app live at http://localhost:${PORT}`);
});

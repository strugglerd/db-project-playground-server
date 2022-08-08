const db = require("../DB/db");

const getAllUsers = (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) console.log(err);
    else {
      res.status(200).send(result);
    }
  });
};

const createUser = (req, res) => {
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
};

module.exports = {
  getAllUsers,
  createUser,
};

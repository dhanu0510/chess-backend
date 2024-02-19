const sql = require("./db.js");

// constructor
const User = function (user) {
  this.username = user.username;
  this.password = user.password;
};
User.create = (newUser, result) => {
  sql.query("INSERT INTO users SET ?", newUser, (err, res) => {
    if (err) {
      console.log("error: ", err);
      return result(500).send("Error occured. Please try again");
    }

    console.log("created user: ", { id: res.insertId, ...newUser });
    return result(200).send("User created successfully");
  });
};

User.findByUsername = (username, result) => {
  sql.query(
    `SELECT * FROM users WHERE username = '${username}'`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        return result(500).send("Error occured. Please try again");
      }

      if (res.length) {
        console.log("found user: ", res[0]);
        return result(200).send("User found");
      }

      // not found User with the username
      result({ kind: "not_found" }, null);
    }
  );
};

module.exports = User;

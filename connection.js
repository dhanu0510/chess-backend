const dbConfig = require("./config/db.config");
var mysql = require("mysql");
var con = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

module.exports = con;

const express = require("express");
const cors = require("cors");
const http = require("http");
var cookies = require("cookie-parser");
const route = require("./routes");
const con = require("./connection");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:80"],
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(cookies());
app.use(route);

const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});

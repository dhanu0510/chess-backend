const express = require("express");
const route = express.Router();
const { authControllers } = require("../controller/auth/authControllers");

route.get("/", (req, res) => {
  res.send("Hello World!");
});

route.post("/auth/register", authControllers.register);

module.exports = route;

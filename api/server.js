const express = require("express");

const server = express();
const carRouter = require("./cars/car-router");

server.use(express.json());

server.use("/api/cars", carRouter);

server.get("*", (req, res) => {
  res.json({ server: " IS UP" });
});

module.exports = server;

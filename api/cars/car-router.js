const express = require("express");
const router = express.Router();
const Cars = require("./car-models");

router.get("/", async (req, res) => {
  try {
    const data = await Cars.get();
    res.json(data);
  } catch (err) {
    res.json(400).json({ message: "error getting data" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const data = await Cars.getById();
    res.status(201).data;
  } catch (err) {
    res.status(400).json({ message: "can't get id" });
  }
});

router.post("/", async (req, res) => {
  try {
    const carInfo = req.body;
    const data = await Cars.create(carInfo);
    res.status(201).json(data);
  } catch (err) {
    res.status(400).json({ message: "Couldn't Add" });
  }
});

module.exports = router;

const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi, we are now at courses route");
});

router.get("/1", (req, res) => {
  res.send("I am now in course #1");
});

module.exports = router;

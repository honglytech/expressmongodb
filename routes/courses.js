const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Hi, we are now at courses route");
});

module.exports = router;

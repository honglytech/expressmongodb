const express = require("express");
const router = express.Router();

const Course = require("../models/Course");

router.get("/", (req, res) => {
  res.send("Hi, we are now at courses route");
});

router.get("/1", (req, res) => {
  res.send("I am now in course #1");
});

router.post("/", (req, res) => {
  const mycourse = new Course({
    course: req.body.course,
    tag: req.body.tag
  });

  mycourse
    .save()
    .then(result => {
      //res.json(result);
      console.log(result);
    })
    .catch(err => {
      //res.json({ message: err });
      console.log(err);
    });
});

module.exports = router;

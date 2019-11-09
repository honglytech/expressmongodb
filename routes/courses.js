const express = require("express");
const router = express.Router();

const Course = require("../models/Course");

// router.get("/", (req, res) => {
//   res.send("Hi, we are now at courses route");
// });

router.get("/", (req, res) => {
  Course.find()
    .exec()
    .then(result => {
      res.status(200).json(result);
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
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
      res.status(201).json({
        message: "Handling POST request to /api/courses - SUCCESS!",
        createdCourse: result
      });
    })
    .catch(err => {
      res.status(500).json({ message: err });
    });
});

module.exports = router;

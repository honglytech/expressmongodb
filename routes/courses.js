const express = require("express");
const router = express.Router();

const Course = require("../models/Course");

// router.get("/", (req, res) => {
//   res.send("Hi, we are now at courses route");
// });

// router.get("/", (req, res) => {
//   Course.find()
//     .exec()
//     .then(result => {
//       res.status(200).json(result);
//     })
//     .catch(err => {
//       res.status(500).json({ message: err });
//     });
// });

router.get("/", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// router.get("/1", (req, res) => {
//   res.send("I am now in course #1");
// });

// router.get("/:courseId", (req, res) => {
//   const id = req.params.courseId;
//   Course.findById(id)
//     .exec()
//     .then(result => {
//       if (result) {
//         res.status(200).json(result);
//       } else {
//         res.status(404).json({ message: "No valid entry found" });
//       }
//     })
//     .catch(err => {
//       res.status(500).json({ message: err });
//     });
// });

router.get("/:courseId", async (req, res) => {
  try {
    const id = req.params.courseId;
    const course = await Course.findById(id);
    if (course) {
      res.status(200).json(course);
    } else {
      res.status(404).json({ message: "No valid entry found" });
    }
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

// router.post("/", (req, res) => {
//   const mycourse = new Course({
//     course: req.body.course,
//     tag: req.body.tag
//   });

//   mycourse
//     .save()
//     .then(result => {
//       res.status(201).json({
//         message: "Handling POST request to /api/courses - SUCCESS!",
//         createdCourse: result
//       });
//     })
//     .catch(err => {
//       res.status(500).json({ message: err });
//     });
// });

router.post("/", async (req, res) => {
  const mycourse = new Course({
    course: req.body.course,
    tag: req.body.tag
  });

  try {
    const savedCourse = await mycourse.save();
    res.status(201).json({
      message: "Handling POST request to /api/courses - Success!",
      createdCourse: savedCourse
    });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.patch("/:courseId", async (req, res) => {
  try {
    const id = req.params.courseId;
    const updatedCourse = await Course.updateOne(
      { _id: id },
      {
        $set: { course: req.body.course }
      }
    );
    res.status(200).json(updatedCourse);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.delete("/:courseId", async (req, res) => {
  try {
    const id = req.params.courseId;
    const removedCourse = await Course.remove({ _id: id });
    res.status(200).json(removedCourse);
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

module.exports = router;

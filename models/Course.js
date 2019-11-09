const mongoose = require("mongoose");

const CourseSchema = mongoose.Schema({
  course: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Courses", CourseSchema);

const mongoose = require("mongoose");
const GradeSchema = new mongoose.Schema({
  student: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model("Grade", GradeSchema);

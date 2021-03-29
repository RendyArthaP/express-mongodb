const mongoose = require('mongoose')
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  password: {
    type: String,
    require: true
  },
  score: Number,
  nomorAbsen: Number,
  classRoom: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "classroom"
  }
})

const student = mongoose.model("student", StudentSchema)
module.exports = student
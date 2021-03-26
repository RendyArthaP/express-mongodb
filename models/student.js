const mongoose = require('mongoose')
const StudentSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  score: Number,
  nomorAbsen: Number
})

const student = mongoose.model("student", StudentSchema)
module.exports = student
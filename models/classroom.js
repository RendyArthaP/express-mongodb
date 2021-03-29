const mongoose = require('mongoose');
const ClassRoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  lantai: Number
})

const classRoom = mongoose.model("classroom", ClassRoomSchema)
module.exports = classRoom
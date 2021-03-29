const mongoose = require('mongoose');
const PinjamBukuSchema = new mongoose.Schema({
  name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "student"
  },
  buku: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "buku"
  }
})

const pinjamBuku = mongoose.model("pinjambuku", PinjamBukuSchema)
module.exports = pinjamBuku
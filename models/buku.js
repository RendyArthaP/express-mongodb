const mongoose = require('mongoose');
const BukuSchema = new mongoose.Schema({
  namaBuku: {
    type: String,
    required: true
  },
  penerbit: String
})

const buku = mongoose.model("buku", BukuSchema)
module.exports = buku
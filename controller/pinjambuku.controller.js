const pinjamBuku = require('../models/pinjamBuku')

module.exports = {
  getPinjamBuku: async (req, res) => {
    const books = await pinjamBuku.find().populate("name", "-score -nomorAbsen -__v -classRoom").populate("buku")

    try {
      res.status(200).json({
        message: "Get data peminjaman buku success",
        data: books
      })
    } catch(error) {
      console.log(error)
    }
  },

  addPinjamBuku: async (req, res) => {
    const books = await pinjamBuku.create(req.body)

    try {
      res.status(200).json({
        message: "Input data peminjam berhasil",
        data: books
      })
    } catch(error) {
      console.log(error)
    }
  }
}
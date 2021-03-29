const buku = require('../models/buku')

module.exports = {
  getBuku: async (req, res) => {
    const book = await buku.find()

    try {
      res.status(200).json({
        message: "Get buku success",
        data: book
      })
    } catch(error) {
      console.log(error)
    }
  },

  addBuku: async (req, res) => {
    const book = await buku.create(req.body)

    try {
      res.status(200).json({
        message: "Input buku success",
        data: book
      })
    } catch(error) {
      console.log(error)
    }
  }
}
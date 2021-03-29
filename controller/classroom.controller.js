const classRoom = require('../models/classroom')

module.exports = {
  getAllClassRoom: async (req, res) => {
    const room = await classRoom.find()

    try {
      res.status(200).json({
        message: "Get Class room success",
        data: room
      })
    } catch(error) {
      console.log(error)
    }
  },

  addClass: async (req, res) => {
    const room = await classRoom.create(req.body)

    try {
      res.status(200).json({
        message: "Input data success",
        data: room
      })
    } catch(error) {
      console.log(error)
    }
  }
}
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
  }
}
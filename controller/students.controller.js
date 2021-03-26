const student = require('../models/student')

module.exports = {
  getAllStudents: async (req, res) => {
    const students = await student.find({})
    try {
      res.status(200).json({
        message: "Get data student success",
        data: students
      })
    } catch(error) {
      console.log(error)
    }
  }, 
  
  getStudentsByID: async (req, res) => {
    const students = await student.findById(req.params.id)
    try {
      res.status(200).json({
        message: "Get student by ID success",
        data: students
      })
    } catch(error) {
      console.log(error)
    }
  },

  addStudent: async (req, res) => {
    const students = await student.create(req.body)
    try {
      res.status(200).json({
        message: "Input data student success",
        data: student
      })
    } catch(error) {
      console.log(error)
    }
  }
}


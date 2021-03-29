const student = require('../models/student')
const bcrypt = require('bcrypt')
module.exports = {
  handleLogin: async (req, res) => {

  },

  handleRegister: async (req, res) => {
    const students = req.body
    const hashPassword = await bcrypt.hash(students.password, 10)

    if(!hashPassword) throw new Error('Hash password error')

    const Student = await student.create({
      name: students.name,
      password: hashPassword
    })

    res.status(200).json({
      message: "Register success",
      data: Student
    })    
  }
}
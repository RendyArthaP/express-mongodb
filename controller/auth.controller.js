const student = require('../models/student')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { JWT_KEY } = require('../config')

module.exports = {
  handleLogin: async (req, res) => {
    const { name, password } = req.body
    let students = await student.findOne({name})
    const comparePassword = bcrypt.compareSync(password, students.password)

    if(students && comparePassword) {
      students = students.toObject()
      const { password, ...payload } = students
      const token = jwt.sign(payload, JWT_KEY)

      res.status(200).json({
        message: "Login success",
        token
      })
    } else {
      res.status(500).json({
        message: "Invalid email or password"
      })
    }
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
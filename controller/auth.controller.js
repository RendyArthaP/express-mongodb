const student = require('../models/student')
const bcrypt = require('bcrypt')
module.exports = {
  handleLogin: async (req, res) => {
    const {name, password} = req.body

    const students = await student.findOne({name})
    if(students) {
      if(bcrypt.compareSync(password, students.password)) {
        res.status(200).json({
          message: "Login success",
          data: students
        })
      } else {
        res.status(500).json({
          message: "Invalid email or password"
        })
      }
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
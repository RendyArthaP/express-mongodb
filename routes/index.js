const express = require('express');
const router = express.Router()
const studentRouter = require('./students.router')

router.get('/', (req, res) => {
  res.json({
    message: "Connecting success"
  })
})

router.use('/student', studentRouter)

module.exports = router
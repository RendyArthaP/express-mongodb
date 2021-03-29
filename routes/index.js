const express = require('express');
const router = express.Router()
const studentRouter = require('./students.router')
const classRoomRouter =  require('./classroom.router')

router.get('/', (req, res) => {
  res.json({
    message: "Connecting success"
  })
})

router.use('/student', studentRouter)
router.use('/classroom', classRoomRouter)

module.exports = router
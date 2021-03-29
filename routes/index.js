const express = require('express');
const router = express.Router()
const studentRouter = require('./students.router')
const classRoomRouter =  require('./classroom.router')
const bukuRouter = require('./buku.router')
const pinjamBukuRouter = require('./pinjambuku.router')

router.get('/', (req, res) => {
  res.json({
    message: "Connecting success"
  })
})

router.use('/student', studentRouter)
router.use('/classroom', classRoomRouter)
router.use('/buku', bukuRouter)
router.use('/pinjambuku', pinjamBukuRouter)

module.exports = router
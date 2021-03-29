const express = require('express');
const router = express.Router()
const {
  getAllClassRoom,
  addClass
} = require('../controller/classroom.controller')

router.get('/', getAllClassRoom)
router.post('/', addClass)

module.exports = router
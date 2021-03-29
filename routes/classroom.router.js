const express = require('express');
const router = express.Router()
const {
  getAllClassRoom
} = require('../controller/classroom.controller')

router.get('/', getAllClassRoom)

module.exports = router
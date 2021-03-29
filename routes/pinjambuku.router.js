const express = require('express');
const router = express.Router()
const {
  getPinjamBuku,
  addPinjamBuku
} = require('../controller/pinjambuku.controller')

router.get('/', getPinjamBuku)
router.post('/', addPinjamBuku)

module.exports = router
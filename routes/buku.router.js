const express = require('express');
const router = express.Router()
const {
  getBuku,
  addBuku
} = require('../controller/buku.controller')

router.get('/', getBuku)
router.post('/', addBuku)

module.exports = router
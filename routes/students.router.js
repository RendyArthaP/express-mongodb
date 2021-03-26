const express = require('express');
const router = express.Router()
const {
  getAllStudents,
  getStudentsByID,
  addStudent
} = require('../controller/students.controller')

router.get('/', getAllStudents)
router.get('/:id', getStudentsByID)
router.post('/', addStudent)

module.exports = router
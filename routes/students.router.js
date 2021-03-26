const express = require('express');
const router = express.Router()
const {
  getAllStudents,
  getStudentsByID,
  addStudent,
  updateStudent, 
  deleteStudent
} = require('../controller/students.controller')

router.get('/', getAllStudents)
router.get('/:id', getStudentsByID)
router.post('/', addStudent)
router.put('/:id', updateStudent)
router.delete('/:id', deleteStudent)

module.exports = router
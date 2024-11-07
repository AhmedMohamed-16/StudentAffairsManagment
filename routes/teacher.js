const express = require('express');
const Teacher = require('../models/Teacher');
const router = express.Router();
// Get all teachers
router.get('/', async (req, res) => {
try {
 const teachers = await Teacher.find({});
res.json(teachers);
} catch (error) {
console.log(error);
res.status(500).send('Internal server error');
}
});
// Get a teacher by ID
router.get('/:id', async (req, res) => {
const id = req.params.id;
try {
const teacher = await Teacher.findById(id);
if (!teacher) {
return res.status(404).send('Teacher not found');
}
res.json(teacher);
} catch (error) {
console.log(error);
res.status(500).send('Internal server error');
}
});
// Get courses by teacher ID
router.get('/:id/courses', async (req, res) => {
const teacherId = req.params.id;
if (!teacherId) {
return res.status(400).send('Missing required parameter: id');
}
try {
const courses = await Teacher.findById(req.params.id).populate('courses');
 res.json(courses);
} catch (error) {
console.log(error);
res.status(500).send('Internal server error');
}
});
module.exports = router;

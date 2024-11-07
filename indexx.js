const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student');
const teacherRoutes = require('./routes/teacher');
const courseRoutes = require('./routes/course');
//const departmentRoutes = require('./routes/department');
const adminRoutes = require('./routes/admin');
const app = express();
app.use(bodyParser.json());
app.use('/students', studentRoutes);
app.use('/teachers', teacherRoutes);
app.use('/courses', courseRoutes);
//app.use('/departments', departmentRoutes);
app.use('/admin', adminRoutes);
// mongoose.connect('mongodb://localhost:27017/new_db')
mongoose.connect('mongodb://127.0.0.1:27017/db')
.then(() => {
app.listen(3000, () => {
console.log('Server started on port 3000');
});
})
.catch((error) => {
console.log(error);
});
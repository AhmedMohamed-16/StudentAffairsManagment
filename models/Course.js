const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const fileSchema = new Schema({
name: { type: String, required: true },
contents: { type: String, required: true },
});
const courseSchema = new Schema({
name: { type: String, required: true },
teacher: { type: Schema.Types.ObjectId, ref: 'Teacher', required: true },
files: { type: [fileSchema], default: [] },
students: [{ type: Schema.Types.ObjectId, ref: 'Student' }],
departments: [{ type: Schema.Types.ObjectId, ref: 'Department' }],
prerequisites: [{ type: Schema.Types.ObjectId, ref: 'Course' }],

});
 
const Course = mongoose.model('Course', courseSchema);
 
module.exports = Course;




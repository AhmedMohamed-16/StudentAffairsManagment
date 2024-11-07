const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const TeacherSchema = new Schema({
name: { type: String, required: true },
email: { type: String, required: true, unique: true },
password: { type: String, required: true },
courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
});
const Teacher = mongoose.model('Teacher', TeacherSchema);
// class TeacherModel {
// static async getAllTeachers() {
// try {
// const teachers = await Teacher.find({});
// return teachers;
// } catch (error) {
// console.log(error);
// return [];
// }
// }
// static async getTeacherById(id) {
// try {
// const teacher = await Teacher.findById(id);
// return teacher;
// } catch (error) {
// console.log(error);
// return null;
// }
// }
// static async getCoursesByTeacherId(teacherId) {
// // Code to retrieve courses by teacher ID goes here
// // This method returns a Promise that resolves to an array of Course objects
// // }
// static async uploadFile(courseId, fileName, fileContents) {
// try {
// // Code to upload the file to the specified course goes here
// // This method returns a Promise that resolves to true if the file was uploaded successfully, or false otherwise
// } catch (error) {
// console.log(error);
// return false;
// }
// }

module.exports = Teacher;
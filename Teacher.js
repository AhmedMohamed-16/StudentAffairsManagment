//Class Teacher :
const axios = require('axios');
const cheerio = require('cheerio');
// Replace the URL with the URL of the schedule of classes for your school or university
const scheduleUrl = 'https://www.example.com/schedule-of-classes';
class Teacher {
// ...
static async getCoursesByTeacherName(teacherName) {
try {
const response = await axios.get(scheduleUrl);
const $ = cheerio.load(response.data);
// Find the table that contains the course information
const table = $('table.schedule-table');
// Find all the rows in the table
const rows = table.find('tr');
// Loop through each row and extract the course information
const courses = [];
rows.each((index, row) => {
const cols = $(row).find('td');
if (cols.length === 4) { // Check that the row contains course information
const courseName = $(cols[0]).text().trim();
const courseNumber = $(cols[1]).text().trim();
const teacher = $(cols[3]).text().trim();
if (teacher === teacherName) {
courses.push({ courseNumber, courseName });
}
}
});
return courses;
} catch (error) {
console.log(error);
return [];
}
}
// ...
}
module.exports = Teacher;

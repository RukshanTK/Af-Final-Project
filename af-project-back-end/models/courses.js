const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    courseName: {
        type: String,
        required: true
    },
    lecturerInCharge: {
        type: String,
        required: true,

    },
    courseHours:{
        type: Number,
        required: true
    }
});
const Course = mongoose.model('courses', CourseSchema);
module.exports = Course;
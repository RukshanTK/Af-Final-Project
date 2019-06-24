const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exam = new Schema({
    examSubjectName: {
        type: String,
    },
    examName: {
        type: String,
    },
    examDate: {
        type: String,
    },
    examTime:{
        type: String,
    },
    examGrading:{
        type: String,
    }
});

const Exams = mongoose.model('exams',exam);

module.exports = Exams;
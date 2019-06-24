const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignment = new Schema({
    assignmentName: {
        type: String,
    },
    assignmentCreateDate: {
        type: String,
    },
    assignmentDueDate: {
        type: String,
    },
    assignmentGrading:{
        type:Boolean,
        default:false,
    }
});

const Assignments = mongoose.model('assignments',assignment);

module.exports = Assignments;
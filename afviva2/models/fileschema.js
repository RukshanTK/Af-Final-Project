const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assessmentSchema = new Schema({
    regid: {
        type: String
    },
    

    mark: {
        type: Number,

    }
    

});

const assessment = mongoose.model('fileschema', assessmentSchema);
module.exports = assessment;
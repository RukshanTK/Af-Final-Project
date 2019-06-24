const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courses = new Schema({
   name: {
       type: String,
   },
   lecturer:{
       type:String,
   }
});

const Courses = mongoose.model('courses',courses);

module.exports = Courses;
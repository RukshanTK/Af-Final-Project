const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const assignment = new Schema({
   name: {
       type: String,
   },
   NIC: {
       type: String,
   },
   contact: {
       type: String,
   },
    email:{
        type:String,
    },
    password:{
        type:String,
    },
   userType:{
       type:String,
   },
   courseFollowing:{
       type:String,
    },
   courseAssigned:{
       type:String,
   }
});

const Assignments = mongoose.model('assignments',assignment);

module.exports = Assignments;
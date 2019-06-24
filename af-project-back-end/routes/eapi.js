const express = require('express');
const erouter = express.Router();
const cors = require('cors');
const Exams = require('../models/exams');

erouter.get('/', function (req, res) {
    Exams.find({}).then(function(exams,error){
        if(exams){
            res.status(200).send(exams);
        }else{
            res.status(400).send(error);
        }
    });
});

erouter.route('/:id').get((req,res)=>{
    let id = req.params.id;
    Exams.findById(id,(err,exams)=>{
        res.json(exams);
    })
});

erouter.post('/exams/add', function (req, res, next) {
    // res.send({type: 'POST'});
    // var Exam = new Exams(req.body);
    // Exam.save();

    Exams.create(req.body).then(function (exam) {
        res.send(exam);
    }).catch(next)
});

erouter.route('/update/:id').post(function (req, res) {
    Exams.findById(req.params.id,function (err,exam) {
        if(!exam){
            res.status(404).send('Data Not Found');
        }else{
            exam.examSubjectName = req.body.examSubjectName;
            exam.examName = req.body.examName;
            exam.examDate = req.body.examDate;
            exam.examTime = req.body.examTime;
            exam.examGrading = req.body.examGrading;
            exam.save().then(assign =>{
                res.json('Updated');
            })
                .catch(err => {
                    res.status(400).send('Data Not Updated')
                })
        }
    })
});


erouter.delete('/exams/delete/:id', function (req, res, next) {
    Exams.findByIdAndRemove({_id: req.params.id}).then(function (exam) {
        res.send(exam);
    });
});

module.exports = erouter;
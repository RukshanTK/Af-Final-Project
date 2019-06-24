const express = require('express');
const router = express.Router();
const cors = require('cors');
const Assignments = require('../models/assignments');




router.get('/', function (req, res) {
    Assignments.find({}).then(function(assignments,error){
        if(assignments){
            res.status(200).send(assignments);
        }else{
            res.status(400).send(error);
        }
    });
});

// router.get('/:id', function (req, res) {
//     Assignments.findById(req.params.id ,function (assignments,error) {
//             res.json(assignments);
//     });
// });

router.route('/:id').get((req,res)=>{
    let id = req.params.id;
    Assignments.findById(id,(err,courses)=>{
        res.json(courses);
    })
})

router.route('/:assignmentName').get((req,res)=>{
    let name = req.params.assignmentName;
    Assignments.findById(name,(err,courses)=>{
        res.json(courses);
    })
})

router.post('/assignments/add', function (req, res, next) {
    // res.send({type: 'POST'});
    // var Assignment = new Assignments(req.body);
    // Assignment.save();

    Assignments.create(req.body).then(function (assignment) {
        res.send(assignment);
    }).catch(next)
});

// router.put('/assignments/update/:id', function (req, res) {
//     Assignments.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
//         Assignments.findOne({_id: req.params, id}).then(function (assignment) {
//             res.send(assignment);
//         });
//     });
// });

router.route('/update/:id').post(function (req, res) {
    Assignments.findById(req.params.id,function (err,assignment) {
        if(!assignment){
            res.status(404).send('Data Not Found');
        }else{
            assignment.assignmentName = req.body.assignmentName;
            assignment.assignmentCreateDate = req.body.assignmentCreateDate;
            assignment.assignmentDueDate = req.body.assignmentDueDate;
            assignment.assignmentGrading = req.body.assignmentGrading;
            assignment.save().then(assign =>{
                res.json('Updated');
            })
                .catch(err => {
                    res.status(400).send('Data Not Updated')
                })
        }
    })
})

router.delete('/assignments/delete/:id', function (req, res, next) {
    Assignments.findByIdAndRemove({_id: req.params.id}).then(function (assignment) {
        res.send(assignment);
    });
});

module.exports = router;
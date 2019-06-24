const express = require('express');
const router = express.Router();
const Assessment = require('../models/fileschema');


router.get('/marks', (req, res) => {    //get all assesment in the database
    Assessment.find({}).then(function(marks) {
        res.send(marks);
    });
});

router.get('/users/:id', function(req, res) { //get one marks in the database
    Assignments.findOne({id:req.params.regid},req.body).then(function (user) {
                res.send(user);

            })

})


//add a mark
router.route('/add').post((req, res) => {
    let mark1 = new Assessment(req.body);
    abc.save().then(mark1 => {
        res.status(200).json({'course': 'marks added successfully'});
    }).catch(err => {
            res.status(400).send('adding failed');
        }
    )
});

//update a mark
router.route('/update/:id').put((req, res) => {
    Courses.findByIdAndUpdate({regid: req.params.id}, req.body).then(function () {
        Courses.findOne({regid: req.params.id}).then(function (course) {
            res.send(course);
        });
    })
});


//delete mark
router.route('/delete/:id').delete((req, res) => {
    Courses.findByIdAndRemove({regid: req.params.id}).then(function(course){
        res.send(course);
    });
});
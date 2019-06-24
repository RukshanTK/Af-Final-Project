const express = require('express');
const router = express.Router();
const Courses = require('../../models/courses');

router.route('/add').post((req, res) => {
    let abc = new Courses(req.body);
    abc.save().then(abc => {
        res.status(200).json({'course': 'Course added successfully'});
    }).catch(err => {
            res.status(400).send('adding failed');
        }
    )
});

// router.route('/update/:id').put((req, res) => {
//     Courses.findByIdAndUpdate({_id: req.params.id}, req.body).then(function () {
//         Courses.findOne({_id: req.params.id}).then(function (course) {
//             res.send(course);
//         });
//     })
// });
router.route('/delete/:id').delete((req, res) => {
    Courses.findByIdAndRemove({_id: req.params.id}).then(function(course){
        res.send(course);
    });
});
router.get('/', function(req, res){    //get all users in the database
    Courses.find({}).then(function(course) {
        res.send(course);
    });
});
router.route('/update/:id').post(function (req, res) {
    Courses.findById(req.params.id,function (err,course) {
        if(!course){
            res.status(404).send('Data Not Found');
        }else{
            course.courseName = req.body.courseName;
            course.lecturerInCharge = req.body.lecturerInCharge;
            course.courseHours = req.body.courseHours;
            course.save().then(assign =>{
                res.json('Updated');
            })
                .catch(err => {
                    res.status(400).send('Data Not Updated')
                })
        }
    })
})



module.exports = router;
const express = require('express');
const router = express.Router();
const cors = require('cors');
const Assignments = require('../models/assignments');
const Subject = require('../models/courses');

router.post('/assignments/add', function (req, res) {
    var user = new Assignments(req.body);
    user.save().then(function (user, err) {
        if (err) {
            res.status(500).send({message: err, data:"An error occured"})
        } else {
            res.status(200).send({message: "User added successfully", data: user});

            if (req.body.userData.userType === 'instructor') {

                const transporter = nodeMailer.createTransport({
                    service: 'Zoho',
                    host: 'smtp.zoho.com',
                    port: 587,
                    secureConnection: false,
                    auth: {
                        user: 'rukshan@mobisec.lk',
                        pass: 'ruki@321'
                    }
                });
            }

                const mailOptions = {
                    from: 'ashimpandey@gmail.com', // sender address
                    to: 'ashimpandey2015@gmail.com', // list of receivers
                    subject: 'Added as an instructor', // Subject line
                    html: '<p>You have been successfully added as an instructor</p>'// plain text body
                };
                transporter.sendMail(mailOptions, function (err, info) {
                    if (err)
                        console.log(err);
                    else
                        console.log(info);
                });
            }


    })

});


router.post('/login', function (req, res) {     //Login validation for duplicate emails, duplicate userNames ,NIC
    var email = req.body.email;                 //All these should be unique values
    var password = req.body.password;

    Assignments.findOne({'email': email, 'password': password}, function (err, user) {
        if (err) {
            return res.status(500).send();
        }
        if (!user) {
            return res.status(404).send({message: "Invalid User"});
        } else {
            return res.status(200).send({ message: "User with email " + email + " logged in successfully"});
        }
    })
});


router.get('/users/:NIC', function(req, res) { //get a particular user from database
    Assignments.findOne({NIC:req.params.NIC},req.body).then(function (user) {
                res.send(user);

            })

})



//Adding of COurses or Subjects and Lecturer
router.post('/courses/add', function (req, res, next) {

    Subject.create(req.body).then(function (exam) {
            res.send(exam);
        }).catch(next)
    });


//Retriving all the COurses or the Subjects
router.get('/courses/get', function(req, res){    //get all users in the database
    Subject.find({}).then(function(user) {
        res.send(user);
    });
});




router.route('/update/:NIC').put((req, res) => {
    Assignments.findByIdAndUpdate({NIC: req.params.NIC}, req.body).then(function () {
        Assignments.findOne({_id: req.params.id}).then(function (Assignments) {                                  //UPDATE
            res.send(Assignments);
        });
    })
});

router.get('/users', function(req, res){    //get all users in the database
    Assignments.find({}).then(function(user) {
        res.send(user);
    });
});

router.get('/Student', function(req, res){    //get all Student Details
    Assignments.find({"userType":"student"}).then(function(user) {
        res.send(user);
    });
});

//Deleting the Subject
router.route('/delete/:id').delete((req, res) => {
    Subject.findByIdAndRemove({_id: req.params.id}).then(function(course){
        res.send(course);

    })
});

module.exports = router;
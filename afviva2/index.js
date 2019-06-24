const express = require('express');
const Assessment = require('./routes/assment');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/courseWeb');
mongoose.Promise = global.Promise;

app.use(cors());


app.use(bodyParser.json());

app.use(function (err, req, res, next) {
    // console.log(err);
    res.status(422).send({error: err.message})
});

//app.use('/check', Assessment1);
app.use('/check', Assessment);

app.listen(process.env.port || 4001, function () {

    console.log("Now listening for requests");
});
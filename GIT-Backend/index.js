const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const eroutes = require('./routes/eapi');
const routes = require('./routes/api');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb://localhost/Project');
mongoose.Promise = global.Promise;
app.use(cors());

app.use(bodyParser.json());


app.use('/api',routes);

app.use('/exams',eroutes);

app.use(function(err, req, res, next){
    res.status(422).send({error: err.message});
});

app.get('/assignment', function(req,res){
   console.log("GET");
   res.send({name: 'ASHIM'});
});

app.listen(process.env.port || 4000, function(){
    console.log("Port is Listening");
});
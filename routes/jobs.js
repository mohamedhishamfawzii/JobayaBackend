const express = require('express');

var mongoose = require('./../db/mongoose');
var {Job} = require('./../models/jobs');

var router = express.Router();
router.get('/all', (req, res) => {
    Job.find({}).then((doc) => {
      res.json(doc)
    }, (e) => {
      console.log(e);
    })
  });
  
  router.get('/:id', (req, res) => {
    var id = req.params.id;
  
    Job.findById(id, (err, doc) => {
      console.log(doc);
      res.json(doc);
    });
  });
  router.get('/email/:employer_email', (req, res) => {
    var employer_email = req.params.employer_email;
  
    Job.find({
      employer_email: employer_email
    }).then((doc) => {
      console.log(doc);
      res.json(doc);
    }, (e) => {
      console.log(e);
    });
  });
  

router.post('/add', (req, res) => {
  var newJob = new Job({
    title: req.body.title,
    description: req.body.description,
    duration: req.body.duration,
    age: req.body.age,
    job_type: req.body.job_type,
    gender: req.body.gender,
    skills: req.body.skills,
    language: req.body.language,
    experience: req.body.experience,
    employer_email: req.body.employer_email
  });
 
  
  newJob.save().then((doc) => {
    res.json({"done": true});
  }, (e) => {
    res.json({"done": false});
    console.log(e);
  });
});


module.exports = router;

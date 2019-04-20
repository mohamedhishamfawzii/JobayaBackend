



const express = require('express');

var mongoose = require('./../db/mongoose');
var {Job} = require('./../models/jobs');

var router = express.Router();

router.post('/', (req, res) => {
  var gender = req.body.gender;
  var age = req.body.age;


  Job.find({
    gender: gender,
    age:age

 
  }).then((doc) => {
    if (doc.length === 0) {
      res.json({found: false});
    }else {

res.json({found: true, result:doc});
    
    }
  }, (e) => {
    console.log(e);
  })
});



module.exports = router;







































/**************************************************************************************/
//We dont need the model
//We need to pass the job ID to check the gender from this specifir job
//We need to pass the user's Email to check the gender of this user
//the matching of the gender === gender is working but I have to pass the gender
//we can add the job ID to search inside it: var job_ID = req.body.job_ID then Job.find({job_ID: Job_ID}) 

/**************************************************************************************/


//deepEqual 

//get the gender of employer, get gender of applied job from applications and then jobs.
//assign them to variables
//use deepEqual w rabena yostor
//deepEqual(user_gender,job_req_gender);

















































/*const express = require('express');

var mongoose = require('./../db/mongoose');
var {User} = require('./../models/user');
var {Job} = require('./../models/jobs');

var router = express.Router();
/*
router.post('/', (req, res) => {
  var gender;
  var job_ID = req.body.job_ID
  //var language = req.body.language;
  var job_gender; 
  var email = req.body.email;
  //var job_language = req.body.job_language;
 
  Job.find({
      gender:job_gender,
      _id: job_ID
    //  language: job_language
  });

  User.find({
    gender: gender,
    email:email
   // language: language
  }).then((doc) => {
    if (gender === job_gender ) {
      res.json({found: true});
    }else {
      res.json({found: false});
    }
  }, (e) => {
    console.log(e);
  })
});





router.post('/', (req, res) => {
  var gender;
  //var job_ID = req.body.job_ID  
  var title = req.body.title;
  var email = req.body.email;
  
  if( Job.find({title: title}) && User.find({email:email}) === 0)
  {
    res.json({found: false});
  }else{
    if ( Job.find({
      gender:gender}) === User.find({
        gender: gender}) ) {
      res.json({found: true});
    }else {
      res.json({found: false});
    }
  } 
  },(e) => {
    console.log(e);
});




module.exports = router;



*/


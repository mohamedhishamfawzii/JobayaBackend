const express = require('express');

var mongoose = require('./../db/mongoose');
var {Application} = require('./../models/applications');

var router = express.Router();

router.get('/ID/:job_ID', (req, res) => {
    var job_ID = req.params.job_ID;
  
    Application.find({
        job_ID: job_ID
    }).then((doc) => {
      console.log(doc);
      res.json(doc);
    }, (e) => {
      console.log(e);
    });
  });
  router.get('/:email', (req, res) => {
    var email = req.params.email;
  
    Application.find({
      email: email
    }).then((doc) => {
      console.log(doc);
      res.json(doc);
    }, (e) => {
      console.log(e);
    });
  });



router.post('/', (req, res) => {
  var newApplication = new Application({
    job_ID: req.body.job_ID,
    email: req.body.email
  });
  newApplication.save().then((doc) => {
      res.json({"done": true});
}, (e) => {
      res.json({"done": false});
      console.log(e);
});
});

module.exports = router;

  /*User.find({
    email: email
   
  }).then((doc) => {
    if (doc.length === 0) {
      res.json({found: true});
    }else {
      res.json({found: false});
      console.log("Email already exists");
    }
  })*/

  /*user.findOne({email: req.body.email}, function(err, result) {
    if(err) console.log(err);
  
      if(result == req.body.email) {
        res.send('invalid email, Email is already used', {'Content-type' : 'text/plain'}, 403);
      }
  else {
        auth(result);
      }
    
  });
  
*/
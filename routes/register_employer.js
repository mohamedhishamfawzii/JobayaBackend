const express = require('express');

var mongoose = require('./../db/mongoose');
var {Emp_User} = require('./../models/emp_user');

var router = express.Router();
router.get('/:email', (req, res) => {
  var emp_email = req.params.emp_email;

  Emp_User.find({
    emp_email: emp_email
  }).then((doc) => {
    console.log(doc);
    res.json(doc);
  }, (e) => {
    console.log(e);
  });
});
router.post('/', (req, res) => {
  var newEmpUser = new Emp_User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    emp_email: req.body.emp_email,
    age: req.body.age,
    gender: req.body.gender,
    phone_number: req.body.phone_number
  });

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
  newEmpUser.save().then((doc) => {
    res.json({"done": true});
}, (e) => {
    res.json({"done": false});
    console.log(e);
});
});



module.exports = router;

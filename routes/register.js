const express = require('express');

var mongoose = require('./../db/mongoose');
var {User} = require('./../models/user');

var router = express.Router();

router.get('/:email', (req, res) => {
  var email = req.params.email;

  User.find({
    email: email
  }).then((doc) => {
    console.log(doc);
    res.json(doc);
  }, (e) => {
    console.log(e);
  });
});
router.post('/', (req, res) => {
  var newUser = new User({
    username: req.body.username,
    password: req.body.password,
    name: req.body.name,
    email: req.body.email,
    age: req.body.age,
    gender: req.body.gender
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
  newUser.save().then((doc) => {
      res.json({"done": true});
}, (e) => {
      res.json({"done": false});
      console.log(e);
});
});


module.exports = router;

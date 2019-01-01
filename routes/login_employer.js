const express = require('express');

var mongoose = require('./../db/mongoose');
var {Emp_User} = require('./../models/emp_user');

var router = express.Router();

router.post('/', (req, res) => {
  var emp_email = req.body.emp_email;
  var emp_password = req.body.emp_password;

  Emp_User.find({
    emp_email: emp_email,
    emp_password: emp_password
  }).then((doc) => {
    if (doc.length === 0) {
      res.json({found: false});
    }else {
      res.json({found: true});
    }
  }, (e) => {
    console.log(e);
  })
});

router.get('/:id', (req, res) => {
  console.log(req.params.id)
  User.findById(req.params.id, (err, doc) => {
    console.log(doc);
    console.log(err);
    res.json(doc);
  })
});

module.exports = router;

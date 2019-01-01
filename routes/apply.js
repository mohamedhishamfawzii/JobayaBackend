const express = require('express');

var mongoose = require('./../db/mongoose');
var {Application} = require('./../models/applications');

var router = express.Router();

router.post('/', (req, res) => {
  var email = req.body.email;
  var job_ID = req.body.job_ID;

  Application.find({
    email: email,
    job_ID: job_ID
  }).then((doc) => {
    if (doc.length === 0) {
      res.json({found: true});
    }else {
      res.json({found: false});
    }
  }, (e) => {
    console.log(e);
  })
});



module.exports = router;

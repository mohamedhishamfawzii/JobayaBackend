const mongoose = require('mongoose');

var Job = mongoose.model('Job', {
   title: {
     type: String,
     required: true
     
   },
   description: {
     type: String
   },
   duration:{
     type: String
 },
   age: {
     type: String
   },
   gender: {
    type: String
  },
  job_type: {
    type: String
  },
  language: {
    type: String
  },
  skills: {
      type: String
  },
  experience: {
    type: String
  },
  employer_email: {
    type: String,
    require: true,
    lowercase: true
  } 
 });
 
 module.exports = {Job};

 
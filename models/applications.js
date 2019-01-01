const mongoose = require('mongoose');

 var Application = mongoose.model('Application', {
   
   job_ID: {
     type: String
   },
  email: {
    type: String,
   
  }
 });
 /*
 function isEmailExists(email, callback) {
  if (email) {
      mongoose.models['Application'].count({ _id: { '$ne': this._id }, email: email }, function (err, result) {
          if (err) {
              return callback(err);
          }
          callback(!result);
      })
  }
}

 Application.pre('save', function (next) {
  Application.find({
    email: email,
    job_ID:job_ID
  }, 
  function (err, count) {
    if (doc.length === 0) {
      res.json({found: true});
    }else {
      res.json({found: false});
    }
     });
    
    });
*/
 module.exports = {Application};

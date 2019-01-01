const mongoose = require('mongoose');
var crypto = require('crypto');

 var Emp_User = mongoose.model('Emp_User', {
   name: {
     type: String
     
   },
   username: {
     type: String
   },
   password:{
     type: String
     /*hash:String,
     salt: String*/
   },
   age: {
     type: String
   },
   gender: {
    type: String
  },
  emp_email: {
    type: String,
    lowercase: true,
    validate: {
      validator : isEmailExists, msg: 'Email already exists'
  }
  },
  phone_number:{
      type: String
  }
 });
 // validation
 
function isEmailExists(emp_email, callback) {
  if (emp_email) {
      mongoose.models['Emp_User'].count({ _id: { '$ne': this._id }, emp_email: emp_email }, function (err, result) {
          if (err)
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          
          {
              return callback(err);
          }
          callback(!result);
      })
  }
}
 /*function setPassword(password)  {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};
*/
 module.exports = {Emp_User};

 
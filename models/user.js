const mongoose = require('mongoose');
var crypto = require('crypto');

 var User = mongoose.model('User', {
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
  email: {
    type: String,
    lowercase: true,
    validate: {
      validator : isEmailExists, msg: 'Email already exists'
  }
  }
 });
 // validation

function isEmailExists(email, callback) {
  if (email) {
      mongoose.models['User'].count({ _id: { '$ne': this._id }, email: email }, function (err, result) {
          if (err) {
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
 module.exports = {User};

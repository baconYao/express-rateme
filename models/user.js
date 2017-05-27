const mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  fullname: {type: String, required: true},
  email: {type: String, required: true},
  passpword: {type: String},
  role: {type: String, default: ''},
  company: {
    name: {type: String, default: ''},
    image: {type: String, default: ''}
  },
  passwordResetToken: {type: String, default: ''},
  passwordResetExpires: {type: Date, default: Date.now}
});

module.exports = mongoose,model('User', UserSchema);

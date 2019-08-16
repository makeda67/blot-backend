const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  gold: {
    type: Number,
    default: '300'
  },
  profileImg: {
    type: String,
    default: ''
  }
});
const User = mongoose.model('User', userSchema);
module.exports = User;
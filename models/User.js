const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.Types.ObjectId;
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
    default: 'https://cdn1.iconfinder.com/data/icons/runes-vikings/205/ThorHammer-512.png'
  },
  goldImg: {
    type: String,
    default: 'https://cdn0.iconfinder.com/data/icons/finance-colored-outlined-pixel-perfect/64/finance-20-512.png'
  },
  armies: [{
    type: ObjectId,
    ref: "Army"
  }]
});
const User = mongoose.model('User', userSchema);
module.exports = User;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const soldierSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true
  },
  logo: {
    type: String,
    required: true
  }
});
const Soldier = mongoose.model('Soldier', soldierSchema);
module.exports = Soldier;
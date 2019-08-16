const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const soldierSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  soldiers: {
    type: Array,
    required: true
  },
  idUser: {
      type: String,
      required: true
  }
});
const Soldier = mongoose.model('Soldier', soldierSchema);
module.exports = Soldier;
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const armySchema = new Schema({
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
const Army = mongoose.model('Army', armySchema);
module.exports = Army;
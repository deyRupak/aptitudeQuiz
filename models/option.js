const mongoose = require('mongoose');

const OptionSchema = mongoose.Schema({
  optionNumber: Number,
  option : String

});

module.exports = mongoose.model('Options',OptionSchema);

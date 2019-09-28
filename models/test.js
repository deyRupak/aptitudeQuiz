const mongoose = require('mongoose');
 const OptionSchema = mongoose.Schema({
   optionNumber: Number,
   option : String

 });

const TestSchema = mongoose.Schema({
  question: String,
  img:{
    type:String,
    require:false
  },
  choices : {
      type:  [new mongoose.Schema({
        option: String,
        iscorrect: Boolean
      })]
    }

});

module.exports = mongoose.model('Test',TestSchema);

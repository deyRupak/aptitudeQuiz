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
      type:  [new Schema({ option: 'string' })]
    }

});

module.exports = mongoose.model('Test',TestSchema);

const mongoose = require('mongoose');

 const OptionSchema = mongoose.Schema({
   optionNumber: Number,
   option : String

 });

const TestSchema = mongoose.Schema({
  question: String,
  img: Buffer,
  choices : {
      type:[OptionSchema],
      default:undefined,
    }

});

const CandidateSchema = mongoose.Schema({
  name : {
    type : String,
    maxlength : 24
  },
  email : {
    type : String,
    maxlength :24
  },
  number:{
    type : Number,
    maxlength : 10
  },
  marks:Number,
})


module.exports = mongoose.model('Options',OptionSchema);
module.exports = mongoose.model('Test',TestSchema);
module.exports = mongoose.model('Candidate',CandidateSchema);

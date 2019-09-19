
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
/*
const CandidateSchema = mongoose.Schema({
  first_name : {
    type : String,
    maxlength : 24,
    required : true
  },
  last_name : {
    type : String,
    maxlength : 24,
    required : true
  },
  email : {
    type : String,
    maxlength :24,
    required : true,
  },
  number:{
    type : Number,
    maxlength : 10
  },
  marks:{
    type : Number,
    default : 0
  }
});

*/
module.exports = mongoose.model('Options',OptionSchema);
module.exports = mongoose.model('Test',TestSchema);
//module.exports = mongoose.model('Candidate',CandidateSchema);

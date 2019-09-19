const mongoose = require('mongoose');

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
    maxlength :46,
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

module.exports = mongoose.model('Candidate',CandidateSchema);

const express = require('express');
const router = express.Router();
const Question = require('../models/test');
const Candidate = require('../models/candidate');
const bodyParser = require('body-parser');



router.post('/',async (req,res)=>{
  console.log(req.body.as)
});

module.exports =router ;

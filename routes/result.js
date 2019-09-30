const express = require('express');
const router = express.Router();
const Question = require('../models/test');
const Candidate = require('../models/candidate');
const bodyParser = require('body-parser');

router.get('/',async (req,res)=>{
  try{
    const candidates = await Candidate.find();
    res.json(candidates);
  }catch(err){
    res.json({message: err});
  }
});

module.exports =router ;

const express = require('express');
const router = express.Router();
const Exam = require('../models/test');

router.get('/',(req,res)=>{
  res.send('EXAM STARTS HERE');
});
router.post('/',(req,res)=>{
  console.log(req.body);
});

module.exports =router;

const express = require('express');
const router = express.Router();
const Question = require('../models/test');
//const Option   = require("../models/option");
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

router.get('/',(req,res)=>{
  res.send('Question Adds Here');
});
router.post('/',upload.single('quesionImage'),async (req,res)=>{
  try{
    console.log(req.file);
    const option = new Question({
      optionNumber: req.body.optionNumber,
      option : req.body.option
    });
    option.save();
    /*const newQuestion=new Question({
      question : req.body.question,
      img : req.file.path
    });
    new_question = await newQuestion.save()*/
  }catch(err){
    console.log(err)
  }

});


module.exports =router ;

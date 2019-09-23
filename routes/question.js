const express = require('express');
const router = express.Router();
const Question = require('../models/test');
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

router.get('/',(req,res)=>{
  res.send('Question Adds Here');
});
router.post('/',upload.single('quesionImage'),async (req,res)=>{
  try{
    console.log(req.file);
    const newQuestion=new Question({
      question : req.body.question,
      img : req.file.path ,
      choices : [
        { option : req.body.option1},
        { option : req.body.option2},
        { option : req.body.option3},
        { option : req.body.option4}
      ]
    });
    new_question = await newQuestion.save();
  }catch(err){
    console.log(err)
  }

});


module.exports =router ;

const express = require('express');
const router = express.Router();
const Question = require('../models/test');
const multer = require('multer')
const upload = multer({dest: 'uploads/'})

router.get('/',async (req,res)=>{
  try{
    const questions = await Question.find();
    res.json(questions);
  }catch(err){
    res.json({message: err});
  }
});
router.post('/',upload.single('quesionImage'),async (req,res)=>{
  try{
    console.log(req.file);
    if(req.file){
      const newQuestion=new Question({
        question : req.body.question,
        img : req.file.path ,
        choices : [
          { option : req.body.option1 , iscorrect:false},
          { option : req.body.option2, iscorrect: false},
          { option : req.body.option3, iscorrect: true},
          { option : req.body.option4, iscorrect: false}
        ]
      });
      new_question = await newQuestion.save().then(res.json({message: "Sucessful"}));
    }
    else{
      const newQuestion=new Question({
        question : req.body.question,
        choices : [
          { option : req.body.option1 , iscorrect:false},
          { option : req.body.option2, iscorrect: false},
          { option : req.body.option3, iscorrect: true},
          { option : req.body.option4, iscorrect: false}
        ]
      });
      new_question = await newQuestion.save().then(res.json({message: "Sucessful"}));
    }
  }catch(err){
    console.log(err)
  }

});


module.exports =router ;

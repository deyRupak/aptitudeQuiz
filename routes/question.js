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
    console.log(req.file)
    var iscorrect1 = (req.body.iscorrect1 == 'true');
    var iscorrect2 = (req.body.iscorrect2 == 'true');
    var iscorrect3 = (req.body.iscorrect3 == 'true');
    var iscorrect4 = (req.body.iscorrect4 == 'true');

    if(req.file){
      const newQuestion=new Question({
        question : req.body.question,
        img : req.file.path ,
        choices : [
          { option : req.body.option1 , iscorrect:iscorrect1},
          { option : req.body.option2, iscorrect: iscorrect2},
          { option : req.body.option3, iscorrect: iscorrect3},
          { option : req.body.option4, iscorrect: iscorrect4}
        ]
      });
      new_question = await newQuestion.save().then(res.json({message: "Sucessful"}));
    }
    else{
      const newQuestion=new Question({
        question : req.body.question,
        choices : [
          { option : req.body.option1, iscorrect: iscorrect1},
          { option : req.body.option2, iscorrect: iscorrect2},
          { option : req.body.option3, iscorrect: iscorrect3},
          { option : req.body.option4, iscorrect: iscorrect4}
        ]
      });
      new_question = await newQuestion.save().then(res.json({message: "Sucessful"}));
    }
  }catch(err){
    console.log(err)
  }

});

router.delete('/:questionId',async (req,res) =>{
  try{
    const removedQuestion = await Question.remove({_id: req.params.questionId});
    res.json(removedQuestion)
  }catch(err){
    res.json({message: err});
  }
});

module.exports =router ;
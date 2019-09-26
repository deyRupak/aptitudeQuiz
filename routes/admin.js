const express = require('express');
const router = express.Router();
const Exam = require('../models/test');

router.get('/',(req,res)=>{
  res.send('EXAM STARTS HERE');
});
router.post('/', async (req,res)=>{
  try{
    console.log("HERE");
    const username = req.body.username;
    const password= req.body.password;
    console.log(username,password);
    if(username=="shreeram" && password=="rait@dyp"){
    //Give Token
    console.log("Sucessful Login");
  }
  else{
    //ERROR MEssage
  }
}
catch(err){
  console.log(err);
}
});

module.exports =router;

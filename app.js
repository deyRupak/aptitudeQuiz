const express = require('express');
const mongoose = require('mongoose');
const Candidate = require('./models/candidate');
const bodyParser = require('body-parser');
const app = express();
const startRoute=require('./routes/start');
app.use('/start',startRoute);
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1/exam', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("Connected");
}).catch(err=>{
  console.log('${err}');
});

//Routes HERE

app.get('/',(req,res)=>{
  res.send('<h1>Login Here</h1>');
});


app.post('/',(req,res)=>{
  const newCandidate=new Candidate({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    number : req.body.number
  });
  newCandidate.save();
  //console.log(req.body);
  /*let {
    first_name,
    last_name,
    email,
    number
  } =req.body
  // NO Check
  let newCandidate = new Candidate({
    //first_name,
    last_name,
    email,
    number
  });
  newCandidate.save().then(user=>{
    return res.status(201).json({
      sucess : true,
      msg : "Sucessful Login"
    });
  });
  */
});
app.listen(8080);

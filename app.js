const express = require('express');
const mongoose = require('mongoose');
const Candidate = require('./models/candidate');
const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();
const startRoute=require('./routes/start');
const questRoute=require('./routes/question');
const adminRoute=require('./routes/admin');

//Middlewere
app.use(cors());
app.use('/start',startRoute);
app.use(bodyParser.json());
app.use('/question',questRoute);
app.use('/admin',adminRoute);
app.use('/uploads', express.static('uploads'));

//DataBase Connection
mongoose.connect('mongodb://127.0.0.1/exam', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(()=>{
  console.log("Connected");
}).catch(err=>{
  console.log('${err}');
});

//Routes HERE

app.get('/', async (req,res)=>{
  try{
    res.send('<h1>Login Here</h1>');
    //const candidates = await Candidate.find();
  //  res.send(candidates);
  } catch(err){
    res.json({message : err});
  }
});


app.post('/', async (req,res)=>{
  const newCandidate=new Candidate({
    first_name : req.body.first_name,
    last_name : req.body.last_name,
    email : req.body.email,
    number : req.body.number
  });
  try{
    const new_candidate= await newCandidate.save();
    res.json(new_candidate);
  } catch(err){
  	console.log(err);
    res.json({message : err});
  }
});
app.listen(8081);

const express = require('express');
const mongoose = require('mongoose');
const Candidate = require('./models/candidate');
const Question = require('./models/test');
//const bodyParser = require('body-parser');
var cors = require('cors')
const app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const startRoute=require('./routes/start');
const questRoute=require('./routes/question');
const adminRoute=require('./routes/admin');
//const resultRoute=require('./routes/result');
//Middlewere
app.use(cors());
app.use('/start',startRoute);
//app.use('/result',resultRoute);
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

/*
app.post('/result',async (req,res)=>{
  var t= req.body;
  console.log(t.answer);
  console.log(t.email);
  const answer = t.answer;
  console.log(answer);
  const mark =0;
  for(i=0;i<answer.length;i++){
    if(answer[i].iscorrect){
      mark=mark+1;
    }
  }
  console.log(mark)
  const filter = { email: t.email };
  const update = { marks: mark };
  /*let doc = await Candidate.findOneAndUpdate(filter, update, {
    new: true
  });
  }
//  var s = Question.find({choices.option: })
);

*/
app.post('/result',async (req,res)=>{
  try{
    var t= req.body;
    console.log(t.answer);
    const answer = t.answer;
    console.log(t.email);
    const mark=0
    for(var i=0;i<answer.length;i++){
      if(answer[i].iscorrect){
        mark = mark +1
      }
    }
      console.log(answer[i].iscorrect)
  }.then().catch() /*
  const filter = { email: t.email };
  const update = { marks: mark };
  let doc = await Candidate.findOneAndUpdate(filter, update, {
    new: true
  });
  await doc.save();*/
}
);

app.listen(8081);

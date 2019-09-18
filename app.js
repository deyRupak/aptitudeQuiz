const express = require('express');
const mongoose = require('mongoose');
const Exam = require('./models/test');

const app = express();
const startRoute=require('./routes/start');
app.use('/start',startRoute);

mongoose.connect('mongodb://127.0.0.1/exam', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

//Routes HERE

app.get('/',(req,res)=>{
  res.send('Login Here');
});

app.listen(8080);

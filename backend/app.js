const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const postRoutes = require('./routes/posts');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use(bodyParser.json());

mongoose.connect("mongodb+srv://julien:7KyvgNH20VoZqf2G@cluster0-psxly.mongodb.net/test?retryWrites=true")
  .then(() => {
    console.log("Successfully connected to Mongo DB Atlas");
  }).catch((error)=> {
      console.log("Unable to connect to Mongo DB Atlas");
      console.log(error);  
  });


app.use('/api/posts', postRoutes);
  

  module.exports = app;
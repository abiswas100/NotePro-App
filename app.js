const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

const app = express();

//IMPORT ROUTES
const postsRoute = require('./Routes/posts');
 
//MIDDLEWARES
app.use(bodyParser.json());
app.use('/posts',postsRoute);
app.use(cors());

// ROUTES
app.get('/',(req,res)=>{
    res.send("Welcome to Home")
    console.log("Running Home");
})

//Connec to DB
url = process.env.DB_CONNECTION ;
mongoose.connect(url,{useNewUrlParser : true,useUnifiedTopology: true },()=>{
    console.log('Hello connected to DB ........!')
})

//Listening to the server
const port  =  3000
app.listen(port);

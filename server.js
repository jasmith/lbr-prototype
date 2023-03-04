const express = require('express');
const path=require('path');
const moongoose=require("mongoose");
const bodyParser = require("body-parser");



const app = express();
const PORT=process.env.PORT ||5001;




//================================= App Configuration Goodness =================================

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public/html')));
app.listen(PORT,()=>console.log(`listening on port ${PORT}`));
app.use(express.json());
//app.use(auth(config));
app.use(bodyParser.json()); //to support JSON-encoded bodies
app.use(bodyParser.urlencoded({extended:true})); //to support URL-encoded bodies

//================================= The Party Starts Here =================================



app.get('/',function(req, res){
    res.sendFile(__dirname+"/public/html/index.html");
   })




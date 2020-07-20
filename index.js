const express = require('express');

const app= express();

const port = 8000;

const ejs= require('ejs');

const path= require('path');

app.use(express.urlencoded());

app.set('view engine','ejs');
app.set('views','./views');

app.use('/',require('./routes'));


app.listen(port,function(err){
    if (err) {
        console.log("error in start",err);
    } else {
        console.log("server has started" );
    }
})

const express=require('express');

const app=express();
const port=3000;

//using express router
app.use('/',require('./routes/index'));

app.set('view engine','ejs');

app.set('views','./views');


app.listen(port,function(err){
    if(err){
        console.log("ERROR!",err);
    }
    console.log("Server is up and running!");
})
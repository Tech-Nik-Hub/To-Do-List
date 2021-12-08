
const express=require('express');

const app=express();
const port=3000;
const db=require('./config/mongoose');
//using express router
app.use('/',require('./routes/index'));
//setting up view engine
app.set('view engine','ejs');

app.set('views','./views');

//setting up assets to use

app.use(express.static('assets'));



var tasksList=[
    {
        name:"Drink water"
    },
    {
        name:"Drink coffee"
    }
];




app.listen(port,function(err){
    if(err){
        console.log("ERROR!",err);
    }
    console.log("Server is up and running!");
})
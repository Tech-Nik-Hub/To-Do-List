
const express=require('express');
const path = require("path");
const app=express();
const port=3000;
const db=require('./config/mongoose');

// using body parser to conver data into keys and values from the browser(put above)
app.use(express.urlencoded());


//using express router
app.use('/',require('./routes/index'));
//setting up view engine
app.set('view engine','ejs');

app.set('views','./views');



// //setting up assets to use

app.use(express.static('assets'));

var tasksList=[
    {
        name:"Drink water",
    },
    {
        name:"Drink coffee",
    }
];
app.get('/',function(req,res){
    return res.render('home',{
        title:"To-DO List",
        tasks:tasksList,
    });
});

app.post("/create-task",function(req,res){
    console.log(req.body.name);
    return;

});



app.listen(port,function(err){
    if(err){
        console.log("ERROR!",err);
    }
    console.log("Server is up and running!");
})
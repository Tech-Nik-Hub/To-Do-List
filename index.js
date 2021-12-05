
const express=require('express');
const port=3000;
const app=express();


app.listen(port,function(err){
    if(err){
        console.log("ERROR!",err);
    }
    console.log("Server is up and running!");
})
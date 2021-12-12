const mongoose=require('mongoose');
const Task=require('../models/tasks');

mongoose.connect('mongodb://localhost/to-do-list_development');


const db=mongoose.connection;


db.on('error',console.error.bind(console,"Error connecting to mongoDB"));

db.once('open',function(){
    console.log('Connected to Database :: MongoDB');
});
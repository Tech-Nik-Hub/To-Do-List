const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    taskText:{
        type:String,
        required:true
    }
});


const Task = mongoose.model('Task',taskSchema);
//exporting the collection so that it can be populated by mongoose in index.js

module.exports=Task;
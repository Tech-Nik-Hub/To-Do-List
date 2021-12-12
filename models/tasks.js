const mongoose=require('mongoose');
const taskSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    }
});

//collection of schema
const Task = mongoose.model('Task',taskSchema);
//exporting the collection so that it can be populated by mongoose 

module.exports=Task;
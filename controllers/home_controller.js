var tasksList=[
    {
        name:"Drink water",
    },
    {
        name:"Drink coffee",
    }
];

const Task=require('../models/tasks');


module.exports.home=function(req,res){
    // return res.render('home',{
    //     title:"To-DO List",
    //     tasks:tasksList,
    // });

    Task.find({},function(err,tasks){
        if(err){
            console.log("Error in fetching tasks from the db");
            return;
        }
        return res.render('home',{
            title:"To-DO List",
             tasks:tasks,
        });
    })



    
    
}

module.exports.post=function(req,res){
    // console.log(req.body);
    // tasksList.push({
    //     name:req.body.name,
    // });
    // return res.redirect('/');


    Task.create({
        name:req.body.name
    },function(err,newTask){
        if(err){
            console.log('error',err);
            return;
        }
        console.log(">>>>",newTask);
        return res.redirect('back');
    });
}


module.exports.delete=function(req,res){
    const id=req.query.id;
    Task.findByIdAndDelete(id,function(err){
        if(err){
            console.log("Error in deleting the task");
            return;
        }
        return res.redirect('back');

    })
    
    
}




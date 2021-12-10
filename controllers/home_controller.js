var tasksList=[
    {
        name:"Drink water",
    },
    {
        name:"Drink coffee",
    }
];



module.exports.home=function(req,res){
    return res.render('home',{
        title:"To-DO List",
        tasks:tasksList,
    });
    
}

module.exports.post=function(req,res){
    // console.log(req.body);
    tasksList.push({
        name:req.body.name,
    });
    return res.redirect('/');
}


module.exports.delete=function(req,res){
    let taskIndex=tasksList.find(task => task.name == req.query.name);


    if(taskIndex!=-1){
        tasksList.splice(taskIndex,1);
        //splice deletes the item of taskIndex index.
    }
    
    return res.redirect('back');
}




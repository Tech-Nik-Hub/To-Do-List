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
    console.log(req.body);
}





// app.use(express.static('assets'));
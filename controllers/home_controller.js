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
        title:"To-Do List",
        tasks:tasksList,
    });
}

// app.use(express.static('assets'));
const {getAllTasks,createTask} = require('../service/crud_service');
const getHomePage = async(req,res) => {
    let result = await getAllTasks();
    return res.render('home.ejs',{result: result});
}
const getFormCreateTask = (req,res) => {
    return res.render('create-form.ejs');
}
const postCreateTask = async(req,res) => {
    let title = req.body.title;
    let des = req.body.description;
    let priority = req.body.priority;
    let due_date = req.body.due_date;
    let completed = false;
    await createTask(title,des,priority,due_date,completed);
    return res.redirect('/');
}
module.exports ={
    getHomePage,getFormCreateTask,postCreateTask
}
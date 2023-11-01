const database = require('../config/database');
const {convertDateToWeb,convertDateToMySQL} = require('../service/convert_date');
const getAllTasks = async() => {
    let [result,fields] = await database.query(
        'SELECT * FROM Tasks t'
    );
    for(let i=0; i<result.length; i++) {
        result[i].due_date = convertDateToWeb(result[i].due_date);
    }
    return result;
}

const createTask = async(title,des,priority,due_date,completed) => {
    due_date = convertDateToMySQL(due_date);
    await database.query(
        `INSERT INTO Tasks(title,description,due_date,priority,completed)
        values(?,?,?,?,?)`,[title,des,due_date,priority,completed]
    );
}

module.exports = {
    getAllTasks,createTask
}
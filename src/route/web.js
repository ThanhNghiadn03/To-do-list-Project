const express = require('express');
const router = express.Router();
const {getHomePage,getFormCreateTask,postCreateTask} = require('../controller/homeController');

router.get('/',getHomePage);
router.get('/createForm',getFormCreateTask);
router.post('/create-task',postCreateTask);

module.exports = router;
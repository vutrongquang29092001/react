const R = require('express').Router;
  
const studentController = require('../controller/Student');
 
R.get('/:id',studentController.getStudentById);


module.exports = R
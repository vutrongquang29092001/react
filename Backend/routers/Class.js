const R = require('express').Router();

const classController = require('../controller/Class');


R.get('/',classController.getAllClass)

module.exports = R 
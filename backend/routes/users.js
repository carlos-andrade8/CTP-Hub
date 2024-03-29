var express = require('express');
var router = express.Router();
const models = require('../models');
const userController = require("../controllers/userController")

/* GET users listing. */

router.post('/signup',userController.signUp);
router.post('/login',userController.login);
router.get('/get',userController.get);
router.get('/students',userController.getStudents);
router.get('/getastudent', userController.getAStudent)

module.exports = router;

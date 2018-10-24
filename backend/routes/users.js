var express = require('express');
var router = express.Router();
const models = require('../models');
const userController = require("../controllers/userController")

/* GET users listing. */

router.post('/signup',userController.signUp)

module.exports = router;
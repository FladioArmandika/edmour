
const express   = require('express');
const route    = express.Router();

const UserController    = require('../controllers/user');

const User = require('../models/user')

module.exports = (app) => {
    app.use('/users', route); 


    route.get('/', UserController.getAllUser);
    route.post('/register', UserController.register);
}


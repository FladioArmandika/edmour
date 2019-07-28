const express   = require('express');
const Router    = express.Router;

const UserController    = require('./user');


module.exports = () => {
    const app = Router();
    UserController(app);

    return app;
}
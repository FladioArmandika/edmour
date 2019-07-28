const express   = require('express');
const Router    = express.Router;

const UserIndex     = require('./user');

module.exports = () => {
    const app = Router();
    UserIndex(app);

    return app;
}